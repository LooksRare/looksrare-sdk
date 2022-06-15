# Types

The best way to understand types is to look at the [code](https://github.com/LooksRare/looksrare-sdk/tree/master/src/types) directly. However, here is some documentation about the main types.

## SupportedChainId

```ts
import { SupportedChainId } from "@looksrare/sdk";
SupportedChainId.MAINNET; // 1;
SupportedChainId.RINKEBY; // 4;
SupportedChainId.HARDHAT; // 31337;
```

## MakerOrder

```ts
const makerOrder: MakerOrder = {
  // true --> ask / false --> bid
  isOrderAsk,
  // Signer address of the maker order
  signer,
  // Collection address
  collection,
  // Price in WEI
  price,
  // Token ID (0 for collection orders)
  tokenId,
  // Amount of tokens to sell/purchase (must be 1 for ERC721, 1+ for ERC1155)
  amount,
  // Strategy for trade execution (e.g., DutchAuction, StandardSaleForFixedPrice), see addresses in the SDK
  strategy,
  // Currency address (WETH)
  currency,
  // Order nonce (must be unique unless new maker order is meant to override existing one e.g., lower ask price)
  nonce,
  // Start time timestamp in seconds (when the order starts to be valid)
  startTime,
  // End time timestamp in seconds (when the order becomes invalid)
  endTime,
  // Minimum ratio to be received by the user (per 10000).
  // We encourage you to never go below 7500. You can use something like Math.min(netPriceRatio, 7500),
  minPercentageToAsk: BigNumber.from(10000).sub(protocolFees.add(creatorFees)).toNumber(),
  // params (e.g., price, target account for private sale)
  params: [],
};
```

## TakerOrder

```ts
const takerOrder: TakerOrder = {
  // true --> ask / false --> bid
  isOrderAsk,
  // Taker address
  taker,
  // Price in WEI
  price,
  // Token ID
  tokenId,
  // Minimum ratio to be received by the seller (per 10000).
  minPercentageToAsk,
  // params (e.g., price, target account for private sale)
  params,
};
```
