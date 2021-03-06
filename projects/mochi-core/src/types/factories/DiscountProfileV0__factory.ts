/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DiscountProfileV0,
  DiscountProfileV0Interface,
} from "../DiscountProfileV0";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_vmochi",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "enum vMochiTierV0",
        name: "_tier",
        type: "uint8",
      },
    ],
    name: "discount",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "numerator",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "denominator",
            type: "uint256",
          },
        ],
        internalType: "struct float",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "discount",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "numerator",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "denominator",
            type: "uint256",
          },
        ],
        internalType: "struct float",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "tier",
    outputs: [
      {
        internalType: "enum vMochiTierV0",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b506040516105c43803806105c483398101604081905261002f91610044565b60601b6001600160601b031916608052610074565b60006020828403121561005657600080fd5b81516001600160a01b038116811461006d57600080fd5b9392505050565b60805160601c61053261009260003960006102dc01526105326000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063069f2bc7146100465780632785f8bb14610079578063ce06898014610099575b600080fd5b6100596100543660046104ad565b6100ac565b604080518251815260209283015192810192909252015b60405180910390f35b61008c61008736600461047d565b6102b8565b60405161007091906104e7565b6100596100a736600461047d565b610457565b604080518082019091526000808252602082015260018260098111156100d4576100d461050f565b14156100f55750506040805180820190915260fa81526103e8602082015290565b60028260098111156101095761010961050f565b141561012a5750506040805180820190915260e181526103e8602082015290565b600382600981111561013e5761013e61050f565b141561015f5750506040805180820190915260c881526103e8602082015290565b60048260098111156101735761017361050f565b14156101945750506040805180820190915260af81526103e8602082015290565b60058260098111156101a8576101a861050f565b14156101c957505060408051808201909152609681526103e8602082015290565b60068260098111156101dd576101dd61050f565b14156101fe57505060408051808201909152607d81526103e8602082015290565b60078260098111156102125761021261050f565b141561023357505060408051808201909152606481526103e8602082015290565b60088260098111156102475761024761050f565b141561026857505060408051808201909152604b81526103e8602082015290565b600982600981111561027c5761027c61050f565b141561029d57505060408051808201909152603281526103e8602082015290565b505060408051808201909152600081526103e8602082015290565b6040516370a0823160e01b81526001600160a01b03828116600483015260009182917f000000000000000000000000000000000000000000000000000000000000000016906370a082319060240160206040518083038186803b15801561031e57600080fd5b505afa158015610332573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061035691906104ce565b90506a01a784379d99db420000008111156103745750600192915050565b6a013da329b63364718000008111156103905750600292915050565b6a0108b2a2c28029094000008111156103ac5750600392915050565b69d3c21bcecceda10000008111156103c75750600492915050565b6969e10de76676d08000008111156103e25750600592915050565b6934f086f3b33b684000008111156103fd5750600692915050565b69152d02c7e14af68000008111156104185750600792915050565b690a968163f0a57b4000008111156104335750600892915050565b69054b40b1f852bda0000081111561044e5750600992915050565b50600092915050565b6040805180820190915260008082526020820152610477610054836102b8565b92915050565b60006020828403121561048f57600080fd5b81356001600160a01b03811681146104a657600080fd5b9392505050565b6000602082840312156104bf57600080fd5b8135600a81106104a657600080fd5b6000602082840312156104e057600080fd5b5051919050565b60208101600a831061050957634e487b7160e01b600052602160045260246000fd5b91905290565b634e487b7160e01b600052602160045260246000fdfea164736f6c6343000807000a";

export class DiscountProfileV0__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _vmochi: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DiscountProfileV0> {
    return super.deploy(_vmochi, overrides || {}) as Promise<DiscountProfileV0>;
  }
  getDeployTransaction(
    _vmochi: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_vmochi, overrides || {});
  }
  attach(address: string): DiscountProfileV0 {
    return super.attach(address) as DiscountProfileV0;
  }
  connect(signer: Signer): DiscountProfileV0__factory {
    return super.connect(signer) as DiscountProfileV0__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DiscountProfileV0Interface {
    return new utils.Interface(_abi) as DiscountProfileV0Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DiscountProfileV0 {
    return new Contract(address, _abi, signerOrProvider) as DiscountProfileV0;
  }
}
