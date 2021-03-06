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

interface ICurvePoolInterface extends ethers.utils.Interface {
  functions: {
    "coins(uint256)": FunctionFragment;
    "get_virtual_price()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "coins", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "get_virtual_price",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "coins", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "get_virtual_price",
    data: BytesLike
  ): Result;

  events: {};
}

export class ICurvePool extends BaseContract {
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

  interface: ICurvePoolInterface;

  functions: {
    coins(_idx: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    get_virtual_price(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  coins(_idx: BigNumberish, overrides?: CallOverrides): Promise<string>;

  get_virtual_price(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    coins(_idx: BigNumberish, overrides?: CallOverrides): Promise<string>;

    get_virtual_price(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    coins(_idx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    get_virtual_price(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    coins(
      _idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    get_virtual_price(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
