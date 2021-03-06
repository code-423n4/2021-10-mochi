/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ICurveRegistryInterface extends ethers.utils.Interface {
  functions: {
    "get_n_coins(address)": FunctionFragment;
    "get_pool_from_lp_token(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "get_n_coins", values: [string]): string;
  encodeFunctionData(
    functionFragment: "get_pool_from_lp_token",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "get_n_coins",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_pool_from_lp_token",
    data: BytesLike
  ): Result;

  events: {};
}

export class ICurveRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ICurveRegistryInterface;

  functions: {
    get_n_coins(
      _pool: string,
      overrides?: CallOverrides
    ): Promise<[[BigNumber, BigNumber]] & { _count: [BigNumber, BigNumber] }>;

    get_pool_from_lp_token(
      _lp: string,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  get_n_coins(
    _pool: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  get_pool_from_lp_token(
    _lp: string,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    get_n_coins(
      _pool: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    get_pool_from_lp_token(
      _lp: string,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    get_n_coins(_pool: string, overrides?: CallOverrides): Promise<BigNumber>;

    get_pool_from_lp_token(
      _lp: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    get_n_coins(
      _pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    get_pool_from_lp_token(
      _lp: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
