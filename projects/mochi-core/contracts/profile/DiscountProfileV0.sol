// SPDX-License-Identifier: AGPL-3.0

pragma solidity ^0.8.0;

import "@mochifi/vmochi/contracts/interfaces/IVMochi.sol";
import "../interfaces/IDiscountProfile.sol";

enum vMochiTierV0 {
    None,
    Alien,
    Ape,
    Legend,
    Epic,
    Diamond,
    Platinum,
    Gold,
    Silver,
    Bronze
}

contract DiscountProfileV0 is IDiscountProfile {
    IVMochi immutable vMochi;

    constructor(address _vmochi) {
        vMochi = IVMochi(_vmochi);
    }

    function tier(address _user) public view returns (vMochiTierV0) {
        uint256 balance = vMochi.balanceOf(_user);

        if (balance > 2000000e18) {
            return vMochiTierV0.Alien;
        } else if (balance > 1500000e18) {
            return vMochiTierV0.Ape;
        } else if (balance > 1250000e18) {
            return vMochiTierV0.Legend;
        } else if (balance > 1000000e18) {
            return vMochiTierV0.Epic;
        } else if (balance > 500000e18) {
            return vMochiTierV0.Diamond;
        } else if (balance > 250000e18) {
            return vMochiTierV0.Platinum;
        } else if (balance > 100000e18) {
            return vMochiTierV0.Gold;
        } else if (balance > 50000e18) {
            return vMochiTierV0.Silver;
        } else if (balance > 25000e18) {
            return vMochiTierV0.Bronze;
        } else {
            return vMochiTierV0.None;
        }
    }

    function discount(address _user)
        external
        view
        override
        returns (float memory)
    {
        return discount(tier(_user));
    }

    function discount(vMochiTierV0 _tier) public pure returns (float memory) {
        if (_tier == vMochiTierV0.Alien) {
            return float({numerator: 250, denominator: 1000});
        } else if (_tier == vMochiTierV0.Ape) {
            return float({numerator: 225, denominator: 1000});
        } else if (_tier == vMochiTierV0.Legend) {
            return float({numerator: 200, denominator: 1000});
        } else if (_tier == vMochiTierV0.Epic) {
            return float({numerator: 175, denominator: 1000});
        } else if (_tier == vMochiTierV0.Diamond) {
            return float({numerator: 150, denominator: 1000});
        } else if (_tier == vMochiTierV0.Platinum) {
            return float({numerator: 125, denominator: 1000});
        } else if (_tier == vMochiTierV0.Gold) {
            return float({numerator: 100, denominator: 1000});
        } else if (_tier == vMochiTierV0.Silver) {
            return float({numerator: 75, denominator: 1000});
        } else if (_tier == vMochiTierV0.Bronze) {
            return float({numerator: 50, denominator: 1000});
        } else {
            return float({numerator: 0, denominator: 1000});
        }
    }
}
