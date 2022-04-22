# @looksrare/sdk

![GitHub package.json version](https://img.shields.io/github/package-json/v/LooksRare/looksrare-sdk) ![GitHub](https://img.shields.io/github/license/LooksRare/looksrare-sdk) ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/LooksRare/looksrare-sdk/Build)

This SDK is a collection of tools used to interact with the LooksRare API and smart contracts.

## Usage

This package has a peer dependency on [etherjs](https://docs.ethers.io/v5/).

Install with

```bash
yarn add @looksrare/sdk ethers
```

or

```bash
npm install @looksrare/sdk ethers --save
```

## Documentation

### Types

Typescript [types](https://github.com/LooksRare/looksrare-sdk/tree/master/src/types) are exported from the package and can be used in your application.

### ABIs

The SDK exposes most of the LooksRare contract ABIs. For convenience, some commonly used ABIs are also exported.
If you need other ABIs, you can [open an issue](https://github.com/LooksRare/looksrare-sdk/issues/new?assignees=&labels=&template=feature_request.md&title=).

```ts
import {
  AggregatorFeeSharingWithUniswapV3Abi,
  ERC20Abi,
  ERC721Abi,
  ERC1155Abi,
  FeeSharingSystemAbi,
  IExecutionStrategyAbi,
  LooksRareAirdropAbi,
  LooksRareExchangeAbi,
  MultiRewardsDistributorAbi,
  PrivateSaleWithFeeSharingAbi,
  ReverseRecordsAbi,
  RoyaltyFeeManagerAbi,
  RoyaltyFeeRegistryAbi,
  RoyaltyFeeSetterAbi,
  StakingPoolForUniswapV2TokensAbi,
  TokenDistributorAbi,
  TradingRewardsDistributorAbi,
  WETHAbi,
  TransferSelectorNFTAbi,
} from "@looksrare/sdk";
```

You can also export the JSON file directly:

```js
import wethAbi from "@looksrare/sdk/dist/abis/WETHAbi.json";
```

### Constants

#### Addresses

An object containing all the contract addresses for each supported chain. Refer to the [Constant type](https://github.com/LooksRare/looksrare-sdk/blob/master/src/types/constants.ts) to see the complete list of addresses.

```ts
import { addressesByNetwork, SupportedChainId } from "@looksrare/sdk";
const addresses = addressesByNetwork[SupportedChainId.MAINNET];
```

#### Chains

An object containing data related to supported chains. Refer to the [Constant type](https://github.com/LooksRare/looksrare-sdk/blob/master/src/types/constants.ts) to see the complete list of addresses.

```ts
import { CHAIN_INFO, SupportedChainId } from "@looksrare/sdk";
const currentChainInfo = CHAIN_INFO[SupportedChainId.MAINNET];
```

### Signatures

Helpers used to build the signed typed data.

```ts
import { BigNumber } from "ethers";
import { MakerOrder, signMakerOrder, SupportedChainId } from "@looksrare/sdk";

// This is used to support different strategies. default value is just and empty array
// Types and values need to match, e.g { types: ["address"], values: [privateBuyer] } for a private sale
const paramsTypes = [];
const paramsValue = [];

const makerOrder: MakerOrder = {
  // true --> ask / false --> bid
  isOrderAsk,
  // signer address of the maker order
  signer,
  // collection address
  collection,
  // Price in WEI
  price,
  // Token ID
  tokenId,
  // amount of tokens to sell/purchase (must be 1 for ERC721, 1+ for ERC1155)
  amount,
  // strategy for trade execution (e.g., DutchAuction, StandardSaleForFixedPrice), see addresses in the SDK
  strategy,
  // currency address
  currency,
  // order nonce (must be unique unless new maker order is meant to override existing one e.g., lower ask price)
  nonce,
  // startTime timestamp in seconds
  startTime,
  // endTime timestamp in seconds
  endTime,
  // minimum ratio to be received by the user (per 10000)
  minPercentageToAsk: BigNumber.from(10000).sub(protocolFees.add(creatorFees)).toNumber(),
  // params (e.g., price, target account for private sale)
  params: paramsValue,
};

const signatureHash = await signMakerOrder(signer, SupportedChainId.MAINNET, makerOrder, paramsTypes);
```

## Dev

### Setup

Install dependencies with `yarn`

- **Dev**: `yarn dev`
- **Build**: `yarn build`

### Release

- Create a [Personal access token](https://github.com/settings/tokens/new?scopes=repo&description=release-it) (Don't change the default scope)
- Create an `.env` (copy `.env.template`) and set you github personal access token.
- `yarn release` will run all the checks, build, and publish the package, and publish the github release note.
