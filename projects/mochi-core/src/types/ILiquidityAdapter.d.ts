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

interface ILiquidityAdapterInterface extends ethers.utils.Interface {
  functions: {
    "getLiquidity(address)": FunctionFragment;
    "supportLiquidity(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getLiquidity",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "supportLiquidity",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportLiquidity",
    data: BytesLike
  ): Result;

  events: {};
}

export class ILiquidityAdapter extends BaseContract {
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

  interface: ILiquidityAdapterInterface;

  functions: {
    getLiquidity(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    supportLiquidity(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  getLiquidity(_asset: string, overrides?: CallOverrides): Promise<BigNumber>;

  supportLiquidity(_asset: string, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    getLiquidity(_asset: string, overrides?: CallOverrides): Promise<BigNumber>;

    supportLiquidity(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    getLiquidity(_asset: string, overrides?: CallOverrides): Promise<BigNumber>;

    supportLiquidity(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getLiquidity(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportLiquidity(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
