/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ICurveRegistry,
  ICurveRegistryInterface,
} from "../ICurveRegistry";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_pool",
        type: "address",
      },
    ],
    name: "get_n_coins",
    outputs: [
      {
        internalType: "uint256[2]",
        name: "_count",
        type: "uint256[2]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_lp",
        type: "address",
      },
    ],
    name: "get_pool_from_lp_token",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ICurveRegistry__factory {
  static readonly abi = _abi;
  static createInterface(): ICurveRegistryInterface {
    return new utils.Interface(_abi) as ICurveRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICurveRegistry {
    return new Contract(address, _abi, signerOrProvider) as ICurveRegistry;
  }
}
