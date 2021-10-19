# ✨ So you want to sponsor a contest

This `README.md` contains a set of checklists for our contest collaboration.

Your contest will use two repos: 
- **a _contest_ repo** (this one), which is used for scoping your contest and for providing information to contestants (wardens)
- **a _findings_ repo**, where issues are submitted. 

Ultimately, when we launch the contest, this contest repo will be made public and will contain the smart contracts to be reviewed and all the information needed for contest participants. The findings repo will be made public after the contest is over and your team has mitigated the identified issues.

Some of the checklists in this doc are for **C4 (🐺)** and some of them are for **you as the contest sponsor (⭐️)**.

---

# Contest setup

## 🐺 C4: Set up repos
- [X] Create a new private repo named `YYYY-MM-sponsorname` using this repo as a template.
- [ ] Get GitHub handles from sponsor.
- [ ] Add sponsor to this private repo with 'maintain' level access.
- [ ] Send the sponsor contact the url for this repo to follow the instructions below and add contracts here. 
- [ ] Delete this checklist and wait for sponsor to complete their checklist.

## ⭐️ Sponsor: Provide contest details

Under "SPONSORS ADD INFO HERE" heading below, include the following:

- [ ] Name of each contract and:
  - [ ] lines of code in each
  - [ ] external contracts called in each
  - [ ] libraries used in each
- [ ] Describe any novel or unique curve logic or mathematical models implemented in the contracts
- [ ] Does the token conform to the ERC-20 standard? In what specific ways does it differ?
- [ ] Describe anything else that adds any special logic that makes your approach unique
- [ ] Identify any areas of specific concern in reviewing the code
- [ ] Add all of the code to this repo that you want reviewed
- [ ] Create a PR to this repo with the above changes.

---

# ⭐️ Sponsor: Provide marketing details

- [ ] Your logo (URL or add file to this repo - SVG or other vector format preferred)
- [ ] Your primary Twitter handle
- [ ] Any other Twitter handles we can/should tag in (e.g. organizers' personal accounts, etc.)
- [ ] Your Discord URI
- [ ] Your website
- [ ] Optional: Do you have any quirks, recurring themes, iconic tweets, community "secret handshake" stuff we could work in? How do your people recognize each other, for example? 
- [ ] Optional: your logo in Discord emoji format

---

# Contest prep

## 🐺 C4: Contest prep
- [X] Rename this repo to reflect contest date (if applicable)
- [X] Rename contest H1 below
- [X] Add link to report form in contest details below
- [X] Update pot sizes
- [X] Fill in start and end times in contest bullets below.
- [ ] Move any relevant information in "contest scope information" above to the bottom of this readme.
- [ ] Add matching info to the [code423n4.com public contest data here](https://github.com/code-423n4/code423n4.com/blob/main/_data/contests/contests.csv))
- [ ] Delete this checklist.

## ⭐️ Sponsor: Contest prep
- [ ] Make sure your code is thoroughly commented using the [NatSpec format](https://docs.soliditylang.org/en/v0.5.10/natspec-format.html#natspec-format).
- [ ] Modify the bottom of this `README.md` file to describe how your code is supposed to work with links to any relevent documentation and any other criteria/details that the C4 Wardens should keep in mind when reviewing. ([Here's a well-constructed example.](https://github.com/code-423n4/2021-06-gro/blob/main/README.md))
- [ ] Please have final versions of contracts and documentation added/updated in this repo **no less than 8 hours prior to contest start time.**
- [ ] Ensure that you have access to the _findings_ repo where issues will be submitted.
- [ ] Promote the contest on Twitter (optional: tag in relevant protocols, etc.)
- [ ] Share it with your own communities (blog, Discord, Telegram, email newsletters, etc.)
- [ ] Optional: pre-record a high-level overview of your protocol (not just specific smart contract functions). This saves wardens a lot of time wading through documentation.
- [ ] Designate someone (or a team of people) to monitor DMs & questions in the C4 Discord (**#questions** channel) daily (Note: please *don't* discuss issues submitted by wardens in an open channel, as this could give hints to other wardens.)
- [ ] Delete this checklist and all text above the line below when you're ready.

---

# Mochi contest details
- $70,000 worth of ETH main award pot
- $10,000 worth of ETH gas optimization award pot
- Join [C4 Discord](https://discord.gg/code4rena) to register
- Submit findings [using the C4 form](https://code423n4.com/2021-10-mochi-contest/submit)
- [Read our guidelines for more details](https://docs.code4rena.com/roles/wardens)
- Starts October 21, 2021 00:00 UTC
- Ends October 27, 2021 23:59 UTC

This repo will be made public before the start of the contest. (C4 delete this line when made public)

## Contents
- [Mochi.fi Contest Details](#-Mochifi-Contest-Details-)
- [Contest Scope](#-Contest-Scope-)
- [Protocol Overview](#-Protocol-Overview)
- [Smart Contract Overview](#-Smart-Contract-Overview)
    - [Core](#-Core)
    - [CSSR](#-CSSR)
    - [Router](#🛤-Router) 
    - [Potential Concerns](#-Potential-Concerns)
    - [Known Issues](#-Known-Issues)
    - [How to setup the contract dev environment](#-How-to-setup-the-contract-dev-environment)
    - [How to run tests](#-How-to-run-tests)

## :bulb: Mochi.fi Contest Details 
- $100,000 main award pot
- Join [C4 Discord](https://discord.gg/EY5dvm3evD) to register
- Submit findings [using the C4 form]()
- [Read our guidelines for more details](https://docs.code4rena.com/roles/wardens)
- Preview starts  (no submissions accepted)
- Preview ends  UTC
- Contest Starts  UTC
- Contest Ends  UTC


| Glossary| |
|-------------------------------|------------------------------------------------------|
| USDM | 1$ tragetting stable coin minted through MochiVault |
| CSSR | Price feed for getting the price of certain collateral |
| Stability Fee | Fee charged per year for getting the  |
| Credit Cap | Max amount of usdm minted for collateral |
| Utilization Ratio | ratio of used credit cap (debt generated by collateral / credit cap) |
| Long-Tail Assets | assets that have traditionally low liquidity |
| Dutch Auction | the bidding starts at the highest asking amount and gets lowered until the winning bet |

## :runner: Contest Scope
This contest is open for two weeks to give wardens time to understand the protocol properly. Submissions can only be made in the second week of the contest. Representatives from Mochi.fi will be available in the Code Arena Discord to answer any questions during the contest period. The focus main will be to try and find any logic errors and vulnerabilities. The end goal is to find ways to optimize ​gas costs for users interacting with the protocol and specifically with the Mochi CSSR as outlined [here](#-CSSR)

## :bookmark_tabs: Protocol Overview

Mochi puts your NFTs and long-tail assets to work as collateral while maintaining exposure to their long-term value. An autonomously governed protocol, Mochi bridges the gap between NFTs and DeFi to pioneer a new way to maximize the utility of emerging digital assets.

By using CSSR, Mochi can use any tokens with appropriate liquidity on dexes to enable the minting stable coin.

## :mag: Smart Contract Overview
### :globe_with_meridians: Core
- :gear: MochiEngine.sol
    - sloc : TBD
    - This contract is where all contracts(componenets) are connected. Contract addresses are registered and modified through governance.
- :page_facing_up: MochiProfileV0.sol
    - sloc : TBD
    - This contract is the contract that is reponsible of storing asset's stability fee, credit cap, etc...
- 🈹NoDiscountProfile.sol
    - sloc : TBD
    - This contract does nothing now but will be giving out discount info when we have the discount event scheduled.
- :moneybag: Usdm.sol
    - sloc : TBD
    - This represents stable coin(ERC20) minted while borrowing through `MochiVault`. Flash minting is supported. Minting can only be executed through `USDMMinter`
- :pick: USDMMinter.sol
    - sloc : TBD
    - `USDM` can only be minted through this contract. Initially, any vaults deployed through `MochiVaultFactory` can execute mint function.
- :sparkles: MochiNFT.sol
    - sloc : TBD
    - Every nft represents a position of debt. when user deposit/withdraw/borrow/repay through `MochiVault`, it actually means the action occurs in position. Every action of `MochiVault` requires NFT position. NFT minting should only be able through `MochiVault` deployed through `MochiVaultFactory`.
- :lock: MochiVault.sol
    - sloc : TBD
    - Vault is deployed per asset(ex. usdc, dai, yfi, weth, ...). And every vault is actually a minimal beacon proxy deployed through `MochiVaultFactory` to reduce deployment cost.
    - functions
        > **notice** executing any of the functions below should invoke fee accuration
        > calcualting collateral factor involves CSSR interaction
        - mint
            - mint `MochiNFT` which represents the position
        - deposit
            - deposits collateral to prepare for debt. Depositing means increasing collateral amount locked in the position.
        - withdraw
            - withdraws collateral. should fail if collateral is not enough, should fail if collateral factor is too low
        - borrow
            - borrows(actually mints) x amount of usdm from protocol. should fail if collateral factor is too low, should fail if exceeds credit cap.
        - repay
            - repays borrowed usdm.
        - liquidate
            - when collateral ratio goes over liquidation ratio, it can be in liquidatable status, it can be liquidated through `liquidate` function. this should be done by, repaying debt on behalf of position and get the collateral. this can only be called through `DucthAuctionLiquidator`
- :factory:	MochiVaultFactory.sol
    - sloc : TBD
    - This is the contract that deploys minimal beacon proxy that uses `MochiVault` as template.
- :hammer: DutchAuctionLiquidator.sol
    - sloc : TBD
    - This is the contract that can call the `liquidate` function for vaults. DutchAuctionLiquidator has two steps for liquidation. (1) trigger (2) settle. (1) trigger will start the dutch auction for liquidation, (2) settle will be done through buying out the dutch auction. buyout price is calcualted throught simple linear 
### :money_with_wings: CSSR
CSSR is composed of 3 parts
(1) router : routes request to appropriate adapter/source to get the price
(2) adapter : data processing unit to convert the price for certain token. (ex. uniswapV2LPAdapter is for calculating uniswap v2 lp token price)
(3) source: data source for getting the price for token.(ex. uniswap v2 cssr, sushiswap v2 cssr)

#### 🛤 Router
- MochiCSSRV0.sol
    - sloc : TBD
    - Router for whole cssr system. This contract should know what adapter it should use for given token address. If it doesn't know, it should query to default price source.

#### Adapter
- ChainlinkAdapter.sol
    - sloc : TBD
    - Adapter for querying price for chainlink listed tokens. Simply queries chainlink price feed and converts to `float` type
- SushiswapV2LPAdapter.sol
    - sloc : TBD
    - Adapter for querying price for sushiswap lp tokens. Price should be calcualted by querying the current underlying tokens in lp pool.
- UniswapV2LPAdapter.sol
    - sloc : TBD
    - Adapter for querying price for Uniswap v2 lp tokens. Price should be calcualted by querying the current underlying tokens in lp pool.
- UniswapV2TokenAdapter.sol
    - sloc : TBD
    - Adapter for querying simple erc20 tokens. Uses SushiswapV2CSSR, UniswapV2CSSR to query the exchange ratio between given token and key currencies(weth, wbtc, usdc, dai) and queries router for key currency price to calculate the given token's price. * althought this is named UniswapV2TokenAdapter, it uses both uni/sushi pool to query the price.

#### Source
- SushiswapV2CSSR.sol
    - sloc : TBD
    - Price source to query the exchange ratio in certain sushiswap lp pool. Relies heavily on [Keydonix Oracle](https://github.com/Keydonix/uniswap-oracle) for code logics. Most changes are for transpiling the code to fix compile issues with solidity 0.8.x . **Currently experiencing weird bug with `invalid extension node` while fetching exchange ratio for Ren token(0x408e41876cccdc0f92210600ef50372656052a38) which does not happens on original Keydonix oracle**
- UniswapV2CSSR.sol
    - sloc : TBD
    - Price source to query the exchange ratio in certain uniswap v2 lp pool. Relies heavily on [Keydonix Oracle](https://github.com/Keydonix/uniswap-oracle) for code logics. Most changes are for transpiling the code to fix compile issues with solidity 0.8.x .

### :fire: Potential Concerns

What we are currently experiencing is the high gas fee while interacting with our protocol and most of them is related to `MochiCSSR`. If collateral token is not supported by chainlink, it should query through UniswapV2CSSR/SushiswapV2CSSR and it requires reconstructing the block merkle patricia trie.
Also, while using the oracle, we are facing issue while querying price data of Ren with Sushi weth <> Ren pool.

### :closed_book: Known Issues

- Rebase tokens cannot be supported with the mochi vault
- Anyone can deploy vault by faking the uniswap liquidity. But, we are currently disabling non-governance deployment for now. So it won't happen on mainnet.

### :desktop_computer: How to setup the contract dev environment

for every repository, setup the environment first

`cp .env.example .env`

and fill the environment variables

```
ETHERSCAN_API_KEY=
MAINNET_RPC_URL=
MAINNET_FORK_BLOCK=
MAINNET_PRIVATE_KEY=
RINKEBY_RPC_URL=
RINKEBY_FORK_BLOCK=
RINKEBY_PRIVATE_KEY=
```
**mochi-library**
```
$ cd projects/mochi-library
$ npm install
```

**mochi-core**
```
$ cd projects/mochi-library
$ npm install
$ cd ../mochi-core
$ npm install
```

**mochi-cssr**
```
$ cd projects/mochi-library
$ npm install
$ cd ../mochi-cssr
$ npm install
```

### :question: How to run tests

`npm run test`
