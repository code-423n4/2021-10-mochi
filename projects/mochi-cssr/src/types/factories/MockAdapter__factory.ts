/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockAdapter, MockAdapterInterface } from "../MockAdapter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
    ],
    name: "getLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
    ],
    name: "getPrice",
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
        name: "price",
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
        name: "",
        type: "address",
      },
    ],
    name: "numerator",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_newPrice",
        type: "uint256",
      },
    ],
    name: "setPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
    ],
    name: "support",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "update",
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
        name: "price",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061033a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100615760003560e01c8062e4768b1461006657806302a688ed1461009257806341976e09146100c55780638fdb8630146100d8578063a747b93b14610106578063e660cc0814610126575b600080fd5b6100906100743660046102ed565b6001600160a01b03909116600090815260208190526040902055565b005b6100a56100a036600461022b565b61014a565b604080518251815260209283015192810192909252015b60405180910390f35b6100a56100d3366004610210565b61016e565b6100f86100e6366004610210565b60006020819052908152604090205481565b6040519081526020016100bc565b6100f8610114366004610210565b506c0c9f2c9cd04674edea4000000090565b61013a610134366004610210565b50600190565b60405190151581526020016100bc565b60408051808201909152600080825260208201526101678361016e565b9392505050565b60408051808201909152600080825260208201526001600160a01b0382166000908152602081905260409020546101bf57505060408051808201909152670de0b6b3a7640000808252602082015290565b506040805180820182526001600160a01b0390921660009081526020818152919020548252670de0b6b3a76400009082015290565b919050565b80356001600160a01b03811681146101f457600080fd5b60006020828403121561022257600080fd5b610167826101f9565b6000806040838503121561023e57600080fd5b610247836101f9565b9150602083013567ffffffffffffffff8082111561026457600080fd5b818501915085601f83011261027857600080fd5b81358181111561028a5761028a610317565b604051601f8201601f19908116603f011681019083821181831017156102b2576102b2610317565b816040528281528860208487010111156102cb57600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b6000806040838503121561030057600080fd5b610309836101f9565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fdfea164736f6c6343000807000a";

export class MockAdapter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockAdapter> {
    return super.deploy(overrides || {}) as Promise<MockAdapter>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockAdapter {
    return super.attach(address) as MockAdapter;
  }
  connect(signer: Signer): MockAdapter__factory {
    return super.connect(signer) as MockAdapter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockAdapterInterface {
    return new utils.Interface(_abi) as MockAdapterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockAdapter {
    return new Contract(address, _abi, signerOrProvider) as MockAdapter;
  }
}
