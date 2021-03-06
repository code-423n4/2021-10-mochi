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

interface IMochiEngineInterface extends ethers.utils.Interface {
  functions: {
    "cssr()": FunctionFragment;
    "discountProfile()": FunctionFragment;
    "feePool()": FunctionFragment;
    "governance()": FunctionFragment;
    "liquidator()": FunctionFragment;
    "minter()": FunctionFragment;
    "mochi()": FunctionFragment;
    "mochiProfile()": FunctionFragment;
    "nft()": FunctionFragment;
    "operationWallet()": FunctionFragment;
    "referralFeePool()": FunctionFragment;
    "treasury()": FunctionFragment;
    "usdm()": FunctionFragment;
    "vMochi()": FunctionFragment;
    "vaultFactory()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "cssr", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "discountProfile",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "feePool", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "governance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "liquidator",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "minter", values?: undefined): string;
  encodeFunctionData(functionFragment: "mochi", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "mochiProfile",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "nft", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "operationWallet",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "referralFeePool",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;
  encodeFunctionData(functionFragment: "usdm", values?: undefined): string;
  encodeFunctionData(functionFragment: "vMochi", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "vaultFactory",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "cssr", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "discountProfile",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feePool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "liquidator", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "minter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mochi", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mochiProfile",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nft", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "operationWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "referralFeePool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "usdm", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vMochi", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "vaultFactory",
    data: BytesLike
  ): Result;

  events: {};
}

export class IMochiEngine extends BaseContract {
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

  interface: IMochiEngineInterface;

  functions: {
    cssr(overrides?: CallOverrides): Promise<[string]>;

    discountProfile(overrides?: CallOverrides): Promise<[string]>;

    feePool(overrides?: CallOverrides): Promise<[string]>;

    governance(overrides?: CallOverrides): Promise<[string]>;

    liquidator(overrides?: CallOverrides): Promise<[string]>;

    minter(overrides?: CallOverrides): Promise<[string]>;

    mochi(overrides?: CallOverrides): Promise<[string]>;

    mochiProfile(overrides?: CallOverrides): Promise<[string]>;

    nft(overrides?: CallOverrides): Promise<[string]>;

    operationWallet(overrides?: CallOverrides): Promise<[string]>;

    referralFeePool(overrides?: CallOverrides): Promise<[string]>;

    treasury(overrides?: CallOverrides): Promise<[string]>;

    usdm(overrides?: CallOverrides): Promise<[string]>;

    vMochi(overrides?: CallOverrides): Promise<[string]>;

    vaultFactory(overrides?: CallOverrides): Promise<[string]>;
  };

  cssr(overrides?: CallOverrides): Promise<string>;

  discountProfile(overrides?: CallOverrides): Promise<string>;

  feePool(overrides?: CallOverrides): Promise<string>;

  governance(overrides?: CallOverrides): Promise<string>;

  liquidator(overrides?: CallOverrides): Promise<string>;

  minter(overrides?: CallOverrides): Promise<string>;

  mochi(overrides?: CallOverrides): Promise<string>;

  mochiProfile(overrides?: CallOverrides): Promise<string>;

  nft(overrides?: CallOverrides): Promise<string>;

  operationWallet(overrides?: CallOverrides): Promise<string>;

  referralFeePool(overrides?: CallOverrides): Promise<string>;

  treasury(overrides?: CallOverrides): Promise<string>;

  usdm(overrides?: CallOverrides): Promise<string>;

  vMochi(overrides?: CallOverrides): Promise<string>;

  vaultFactory(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    cssr(overrides?: CallOverrides): Promise<string>;

    discountProfile(overrides?: CallOverrides): Promise<string>;

    feePool(overrides?: CallOverrides): Promise<string>;

    governance(overrides?: CallOverrides): Promise<string>;

    liquidator(overrides?: CallOverrides): Promise<string>;

    minter(overrides?: CallOverrides): Promise<string>;

    mochi(overrides?: CallOverrides): Promise<string>;

    mochiProfile(overrides?: CallOverrides): Promise<string>;

    nft(overrides?: CallOverrides): Promise<string>;

    operationWallet(overrides?: CallOverrides): Promise<string>;

    referralFeePool(overrides?: CallOverrides): Promise<string>;

    treasury(overrides?: CallOverrides): Promise<string>;

    usdm(overrides?: CallOverrides): Promise<string>;

    vMochi(overrides?: CallOverrides): Promise<string>;

    vaultFactory(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    cssr(overrides?: CallOverrides): Promise<BigNumber>;

    discountProfile(overrides?: CallOverrides): Promise<BigNumber>;

    feePool(overrides?: CallOverrides): Promise<BigNumber>;

    governance(overrides?: CallOverrides): Promise<BigNumber>;

    liquidator(overrides?: CallOverrides): Promise<BigNumber>;

    minter(overrides?: CallOverrides): Promise<BigNumber>;

    mochi(overrides?: CallOverrides): Promise<BigNumber>;

    mochiProfile(overrides?: CallOverrides): Promise<BigNumber>;

    nft(overrides?: CallOverrides): Promise<BigNumber>;

    operationWallet(overrides?: CallOverrides): Promise<BigNumber>;

    referralFeePool(overrides?: CallOverrides): Promise<BigNumber>;

    treasury(overrides?: CallOverrides): Promise<BigNumber>;

    usdm(overrides?: CallOverrides): Promise<BigNumber>;

    vMochi(overrides?: CallOverrides): Promise<BigNumber>;

    vaultFactory(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    cssr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    discountProfile(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feePool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mochi(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mochiProfile(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nft(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    operationWallet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    referralFeePool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    treasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    usdm(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vMochi(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vaultFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
