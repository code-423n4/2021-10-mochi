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
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IPriceAdapterInterface extends ethers.utils.Interface {
  functions: {
    "getPrice(address)": FunctionFragment;
    "supportPrice(address)": FunctionFragment;
    "update(address,bytes)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "getPrice", values: [string]): string;
  encodeFunctionData(
    functionFragment: "supportPrice",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "update",
    values: [string, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "update", data: BytesLike): Result;

  events: {};
}

export class IPriceAdapter extends BaseContract {
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

  interface: IPriceAdapterInterface;

  functions: {
    getPrice(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, BigNumber] & {
          numerator: BigNumber;
          denominator: BigNumber;
        }
      ] & {
        price: [BigNumber, BigNumber] & {
          numerator: BigNumber;
          denominator: BigNumber;
        };
      }
    >;

    supportPrice(_asset: string, overrides?: CallOverrides): Promise<[boolean]>;

    update(
      _asset: string,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getPrice(
    _asset: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { numerator: BigNumber; denominator: BigNumber }
  >;

  supportPrice(_asset: string, overrides?: CallOverrides): Promise<boolean>;

  update(
    _asset: string,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getPrice(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { numerator: BigNumber; denominator: BigNumber }
    >;

    supportPrice(_asset: string, overrides?: CallOverrides): Promise<boolean>;

    update(
      _asset: string,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getPrice(_asset: string, overrides?: CallOverrides): Promise<BigNumber>;

    supportPrice(_asset: string, overrides?: CallOverrides): Promise<BigNumber>;

    update(
      _asset: string,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getPrice(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportPrice(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    update(
      _asset: string,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
