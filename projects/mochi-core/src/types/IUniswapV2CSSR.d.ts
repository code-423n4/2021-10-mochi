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

interface IUniswapV2CSSRInterface extends ethers.utils.Interface {
  functions: {
    "getExchangeRatio(address,address)": FunctionFragment;
    "getLiquidity(address,address)": FunctionFragment;
    "saveReserve(uint256,address,bytes,bytes,bytes,bytes)": FunctionFragment;
    "saveState(bytes)": FunctionFragment;
    "uniswapFactory()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getExchangeRatio",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getLiquidity",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "saveReserve",
    values: [BigNumberish, string, BytesLike, BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "saveState",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapFactory",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getExchangeRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "saveReserve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "saveState", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "uniswapFactory",
    data: BytesLike
  ): Result;

  events: {};
}

export class IUniswapV2CSSR extends BaseContract {
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

  interface: IUniswapV2CSSRInterface;

  functions: {
    getExchangeRatio(
      token: string,
      denominator: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getLiquidity(
      token: string,
      denominator: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    saveReserve(
      blockNumber: BigNumberish,
      pair: string,
      accountProof: BytesLike,
      reserveProof: BytesLike,
      price0Proof: BytesLike,
      price1Proof: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    saveState(
      blockData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    uniswapFactory(overrides?: CallOverrides): Promise<[string]>;
  };

  getExchangeRatio(
    token: string,
    denominator: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getLiquidity(
    token: string,
    denominator: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  saveReserve(
    blockNumber: BigNumberish,
    pair: string,
    accountProof: BytesLike,
    reserveProof: BytesLike,
    price0Proof: BytesLike,
    price1Proof: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  saveState(
    blockData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  uniswapFactory(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    getExchangeRatio(
      token: string,
      denominator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLiquidity(
      token: string,
      denominator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    saveReserve(
      blockNumber: BigNumberish,
      pair: string,
      accountProof: BytesLike,
      reserveProof: BytesLike,
      price0Proof: BytesLike,
      price1Proof: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [number, BigNumber, BigNumber, BigNumber, BigNumber] & {
        reserveTimestamp: number;
        reserve0: BigNumber;
        reserve1: BigNumber;
        price0Data: BigNumber;
        price1Data: BigNumber;
      }
    >;

    saveState(
      blockData: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber] & {
        stateRoot: string;
        blockNumber: BigNumber;
        blockTimestamp: BigNumber;
      }
    >;

    uniswapFactory(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getExchangeRatio(
      token: string,
      denominator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLiquidity(
      token: string,
      denominator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    saveReserve(
      blockNumber: BigNumberish,
      pair: string,
      accountProof: BytesLike,
      reserveProof: BytesLike,
      price0Proof: BytesLike,
      price1Proof: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    saveState(
      blockData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    uniswapFactory(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getExchangeRatio(
      token: string,
      denominator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLiquidity(
      token: string,
      denominator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    saveReserve(
      blockNumber: BigNumberish,
      pair: string,
      accountProof: BytesLike,
      reserveProof: BytesLike,
      price0Proof: BytesLike,
      price1Proof: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    saveState(
      blockData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    uniswapFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
