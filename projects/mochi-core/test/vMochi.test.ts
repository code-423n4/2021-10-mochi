import { expect } from 'chai';
import { ethers } from 'hardhat';
import { Contract, Signer, BigNumber, constants } from 'ethers';
import {
  increase,
  mine,
  getTimestamp,
  getBlockNumber,
  increaseTo,
} from './utils';

// 0.01% tolerance
function almostEqual(a: BigNumber, b: BigNumber) {
  const diff = a.sub(b).abs();
  const multiplier = a.div(diff);
  expect(multiplier).to.gte(10000);
}

describe('vMochi', function () {
  let accounts: Signer[];
  let mochi: Contract;
  let vmochi: Contract;

  let owner: Signer;
  let alice: Signer;
  let bob: Signer;
  let charles: Signer;

  const MOCHI = constants.WeiPerEther;
  const WEEK = BigNumber.from(86400 * 7);

  beforeEach(async function () {
    accounts = await ethers.getSigners();
    owner = accounts[0];
    alice = accounts[1];
    bob = accounts[2];
    charles = accounts[3];

    const MochiFactory = await ethers.getContractFactory('Mochi');
    const vMochiFactory = await ethers.getContractFactory('vMochi');

    mochi = await MochiFactory.deploy();
    vmochi = await vMochiFactory.deploy(mochi.address);
  });

  it('totalSupply should be zero', async function () {
    expect(await vmochi['totalSupply()']()).to.equal(0);
  });

  describe('#createLock()', function () {
    let now;
    beforeEach(async function () {
      await mochi.connect(owner).transfer(alice.getAddress(), MOCHI);
      await mochi.connect(owner).transfer(bob.getAddress(), MOCHI);
      await mochi.connect(owner).transfer(charles.getAddress(), MOCHI);
      now = await getTimestamp();
      await increaseTo(now.div(WEEK).mul(WEEK).add(WEEK).add(1));
      await mine();
      now = await getTimestamp();
    });

    it('sanity check', async function () {
      expect(await vmochi['balanceOf(address)'](alice.getAddress())).to.equal(
        0,
      );
    });

    it('should fail if _value == 0', async function () {
      await expect(
        vmochi.connect(alice).createLock(0, now.add(WEEK)),
      ).to.be.revertedWith('zero value');
    });

    it('should fail if due is past', async function () {
      await expect(
        vmochi.connect(alice).createLock(MOCHI, now.sub(1)),
      ).to.be.revertedWith('Can only lock until time in the future');
    });

    it('should fail if dus is more than 4 years', async function () {
      await expect(
        vmochi.connect(alice).createLock(MOCHI, now.add(WEEK.mul(52 * 5))),
      ).to.be.revertedWith('Voting lock can be 4 years max');
    });

    it('should fail if lock exists', async function () {
      await mochi.connect(alice).approve(vmochi.address, MOCHI);
      await vmochi.connect(alice).createLock(MOCHI, now.add(WEEK));
      await expect(
        vmochi.connect(alice).createLock(MOCHI, now.add(WEEK)),
      ).to.be.revertedWith('Withdraw old mochis first');
    });

    describe('sanity check', function () {
      const durations = [
        WEEK,
        WEEK.mul(2),
        WEEK.mul(10),
        WEEK.mul(52),
        WEEK.mul(104),
      ];
      durations.forEach((d) => {
        it(`should return appropriate vMochi duration : ${d}`, async function () {
          await mochi.connect(alice).approve(vmochi.address, MOCHI);
          //await vmochi.connect(alice).createLock(MOCHI, now.add(await vmochi.MAXTIME()));
          await vmochi.connect(alice).createLock(MOCHI, now.add(d));
          const balance = await vmochi['balanceOf(address)'](
            alice.getAddress(),
          );
          almostEqual(balance, MOCHI.div(await vmochi.MAXTIME()).mul(d));
        });
      });
    });
  });
  describe('#increaseAmount()', function () {
    let now;
    beforeEach(async function () {
      await mochi.connect(owner).transfer(alice.getAddress(), MOCHI);
      await mochi.connect(owner).transfer(bob.getAddress(), MOCHI);
      await mochi.connect(owner).transfer(charles.getAddress(), MOCHI);
      await mochi.connect(owner).transfer(alice.getAddress(), MOCHI);
      now = await getTimestamp();
      await increaseTo(now.div(WEEK).mul(WEEK).add(WEEK).add(1));
      await mine();
      now = await getTimestamp();
      await mochi.connect(alice).approve(vmochi.address, MOCHI);
      await vmochi.connect(alice).createLock(MOCHI, now.add(WEEK));
    });

    it('should fail if _value == 0', async function () {
      await expect(vmochi.connect(alice).increaseAmount(0)).to.be.revertedWith(
        'zero value',
      );
    });

    it('should fail if lock does not exist', async function () {
      await expect(
        vmochi.connect(bob).increaseAmount(MOCHI),
      ).to.be.revertedWith('No existing lock found');
    });

    it('should fail if lock exists', async function () {
      await increase(WEEK.mul(3));
      await mine();
      await mochi.connect(alice).approve(vmochi.address, MOCHI);
      await expect(
        vmochi.connect(alice).increaseAmount(MOCHI),
      ).to.be.revertedWith('Cannot add to expired lock. Withdraw');
    });

    it('effect', async function () {
      await mochi.connect(alice).approve(vmochi.address, MOCHI);
      await vmochi.connect(alice).increaseAmount(MOCHI);
      const balance = await vmochi['balanceOf(address)'](alice.getAddress());
      almostEqual(
        balance,
        MOCHI.mul(2)
          .div(await vmochi.MAXTIME())
          .mul(WEEK),
      );
    });
  });
  describe('#increaseUnlockTime()', function () {
    let now;
    beforeEach(async function () {
      await mochi.connect(owner).transfer(alice.getAddress(), MOCHI);
      await mochi.connect(owner).transfer(bob.getAddress(), MOCHI);
      await mochi.connect(owner).transfer(charles.getAddress(), MOCHI);
      await mochi.connect(owner).transfer(alice.getAddress(), MOCHI);
      now = await getTimestamp();
      await increaseTo(now.div(WEEK).mul(WEEK).add(WEEK).add(1));
      await mine();
      now = await getTimestamp();
      await mochi.connect(alice).approve(vmochi.address, MOCHI);
      await vmochi.connect(alice).createLock(MOCHI, now.add(WEEK));
    });

    it('should fail if lock does not exist', async function () {
      await expect(
        vmochi.connect(bob).increaseUnlockTime(now.add(WEEK.mul(2))),
      ).to.be.revertedWith('No existing lock found');
    });

    it('should fail if lock exists', async function () {
      await increase(WEEK.mul(3));
      await mine();
      await mochi.connect(alice).approve(vmochi.address, MOCHI);
      await expect(
        vmochi.connect(alice).increaseUnlockTime(now.add(WEEK.mul(2))),
      ).to.be.revertedWith('Lock expired');
    });

    it('effect', async function () {
      await mochi.connect(alice).approve(vmochi.address, MOCHI);
      await vmochi.connect(alice).increaseUnlockTime(now.add(WEEK.mul(2)));
      const balance = await vmochi['balanceOf(address)'](alice.getAddress());
      almostEqual(
        balance,
        MOCHI.mul(2)
          .div(await vmochi.MAXTIME())
          .mul(WEEK),
      );
    });
  });

  describe('exchangeRate scenario', function () {
    let now;
    beforeEach(async function () {
      await mochi.connect(owner).transfer(alice.getAddress(), MOCHI);
      await mochi.connect(owner).transfer(bob.getAddress(), MOCHI);
      await mochi.connect(owner).transfer(charles.getAddress(), MOCHI);
      await mochi.connect(owner).transfer(alice.getAddress(), MOCHI);
      now = await getTimestamp();
      await increaseTo(now.div(WEEK).mul(WEEK).add(WEEK).add(1));
      await mine();
      now = await getTimestamp();
      await mochi.connect(alice).approve(vmochi.address, MOCHI);
      await vmochi.connect(alice).createLock(MOCHI, now.add(WEEK));
    });

    it('sanity check', async function () {
      expect(await vmochi.exchangeRate()).to.equal(MOCHI);
    });

    it('exchange rate should increase', async function () {
      await mochi.connect(owner).transfer(vmochi.address, MOCHI);
      expect(await vmochi.exchangeRate()).to.equal(MOCHI.mul(2));
    });

    it('should be able to withdraw all', async function () {
      await mochi.connect(owner).transfer(vmochi.address, MOCHI);
      await increase(WEEK.mul(3));
      await vmochi.connect(alice).withdraw();
      expect(await mochi.balanceOf(vmochi.address)).to.equal(0);
    });

    it('simple scenario, Alice deposits, exchange rate goes 2x, Bob deposits, Alice withdraws', async function () {
      await mochi.connect(owner).transfer(vmochi.address, MOCHI);
      expect(await vmochi.exchangeRate()).to.equal(MOCHI.mul(2));
      await mochi.connect(bob).approve(vmochi.address, MOCHI);
      await vmochi.connect(bob).createLock(MOCHI, now.add(WEEK));
      await increase(WEEK.mul(3));
      await vmochi.connect(alice).withdraw();
      expect(await mochi.balanceOf(vmochi.address)).to.equal(MOCHI);
      await vmochi.connect(bob).withdraw();
      expect(await mochi.balanceOf(vmochi.address)).to.equal(0);
    });
  });
});
