/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ICSSRRouter, ICSSRRouterInterface } from "../ICSSRRouter";

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
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ICSSRRouter__factory {
  static readonly abi = _abi;
  static createInterface(): ICSSRRouterInterface {
    return new utils.Interface(_abi) as ICSSRRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICSSRRouter {
    return new Contract(address, _abi, signerOrProvider) as ICSSRRouter;
  }
}
