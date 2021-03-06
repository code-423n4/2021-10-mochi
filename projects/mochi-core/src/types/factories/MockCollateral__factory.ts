/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockCollateral,
  MockCollateralInterface,
} from "../MockCollateral";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051806040016040528060048152602001634d6f636b60e01b815250604051806040016040528060048152602001634d4f434b60e01b8152508160039080519060200190620000649291906200018c565b5080516200007a9060049060208401906200018c565b5050506200009e336e01ed09bead87c0378d8e6400000000620000a460201b60201c565b62000296565b6001600160a01b038216620000ff5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b806002600082825462000113919062000232565b90915550506001600160a01b038216600090815260208190526040812080548392906200014290849062000232565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b8280546200019a9062000259565b90600052602060002090601f016020900481019282620001be576000855562000209565b82601f10620001d957805160ff191683800117855562000209565b8280016001018555821562000209579182015b8281111562000209578251825591602001919060010190620001ec565b50620002179291506200021b565b5090565b5b808211156200021757600081556001016200021c565b600082198211156200025457634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200026e57607f821691505b602082108114156200029057634e487b7160e01b600052602260045260246000fd5b50919050565b6109c080620002a66000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806370a082311161007157806370a082311461014157806395d89b411461016a578063a0712d6814610172578063a457c2d714610187578063a9059cbb1461019a578063dd62ed3e146101ad57600080fd5b806306fdde03146100b9578063095ea7b3146100d757806318160ddd146100fa57806323b872dd1461010c578063313ce5671461011f578063395093511461012e575b600080fd5b6100c16101e6565b6040516100ce91906108fd565b60405180910390f35b6100ea6100e53660046108ba565b610278565b60405190151581526020016100ce565b6002545b6040519081526020016100ce565b6100ea61011a36600461087e565b61028e565b604051601281526020016100ce565b6100ea61013c3660046108ba565b61033d565b6100fe61014f366004610829565b6001600160a01b031660009081526020819052604090205490565b6100c1610379565b6101856101803660046108e4565b610388565b005b6100ea6101953660046108ba565b610395565b6100ea6101a83660046108ba565b61042e565b6100fe6101bb36600461084b565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101f590610978565b80601f016020809104026020016040519081016040528092919081815260200182805461022190610978565b801561026e5780601f106102435761010080835404028352916020019161026e565b820191906000526020600020905b81548152906001019060200180831161025157829003601f168201915b5050505050905090565b600061028533848461043b565b50600192915050565b600061029b84848461055f565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156103255760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b610332853385840361043b565b506001949350505050565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091610285918590610374908690610952565b61043b565b6060600480546101f590610978565b610392338261072e565b50565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156104175760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161031c565b610424338585840361043b565b5060019392505050565b600061028533848461055f565b6001600160a01b03831661049d5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161031c565b6001600160a01b0382166104fe5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161031c565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166105c35760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161031c565b6001600160a01b0382166106255760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161031c565b6001600160a01b0383166000908152602081905260409020548181101561069d5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161031c565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906106d4908490610952565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161072091815260200190565b60405180910390a350505050565b6001600160a01b0382166107845760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161031c565b80600260008282546107969190610952565b90915550506001600160a01b038216600090815260208190526040812080548392906107c3908490610952565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b80356001600160a01b038116811461082457600080fd5b919050565b60006020828403121561083b57600080fd5b6108448261080d565b9392505050565b6000806040838503121561085e57600080fd5b6108678361080d565b91506108756020840161080d565b90509250929050565b60008060006060848603121561089357600080fd5b61089c8461080d565b92506108aa6020850161080d565b9150604084013590509250925092565b600080604083850312156108cd57600080fd5b6108d68361080d565b946020939093013593505050565b6000602082840312156108f657600080fd5b5035919050565b600060208083528351808285015260005b8181101561092a5785810183015185820160400152820161090e565b8181111561093c576000604083870101525b50601f01601f1916929092016040019392505050565b6000821982111561097357634e487b7160e01b600052601160045260246000fd5b500190565b600181811c9082168061098c57607f821691505b602082108114156109ad57634e487b7160e01b600052602260045260246000fd5b5091905056fea164736f6c6343000807000a";

export class MockCollateral__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockCollateral> {
    return super.deploy(overrides || {}) as Promise<MockCollateral>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockCollateral {
    return super.attach(address) as MockCollateral;
  }
  connect(signer: Signer): MockCollateral__factory {
    return super.connect(signer) as MockCollateral__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockCollateralInterface {
    return new utils.Interface(_abi) as MockCollateralInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockCollateral {
    return new Contract(address, _abi, signerOrProvider) as MockCollateral;
  }
}
