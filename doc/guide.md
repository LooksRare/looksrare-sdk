# SDK Developer guide

## How to create and sign an order

The `signMakerOrder` function is a helper used on LooksRare to trigger an EIP-712 signature on our supported wallets.

```ts
import { BigNumber } from "ethers";
import { signMakerOrder, addressesByNetwork, SupportedChainId, MakerOrder } from "@looksrare/sdk";

const signer = ethersProvider.getSigner();
const signerAddress = await signer.getAddress();
const chainId = SupportedChainId.MAINNET;
const addresses = addressesByNetwork[chainId];
const nonce = await getUserNonce(signerAddress); // Fetch from the api

const now = Math.floor(Date.now() / 1000);
const paramsValue = [];
const paramsTypes = [];

// Get protocolFees and creatorFees from the contracts
const netPriceRatio = BigNumber.from(10000).sub(protocolFees.add(creatorFees)).toNumber();
// This variable is used to enforce a max slippage of 15% on all orders, if a collection change the fees to be >15%, the order will become invalid
const minNetPriceRatio = 8500;

const makerOrder: MakerOrder = {
  isOrderAsk: true,
  signer: signerAddress,
  collection: "0xcE25E60A89F200B1fA40f6c313047FFe386992c3",
  price: "1000000000000000000", // :warning: PRICE IS ALWAYS IN WEI :warning:
  tokenId: "1", // Token id is 0 if you use the STRATEGY_COLLECTION_SALE strategy
  amount: "1",
  strategy: addresses.STRATEGY_STANDARD_SALE,
  currency: addresses.WETH,
  nonce: nonce.toNumber(),
  startTime: now,
  endTime: now + 86400, // 1 day validity
  minPercentageToAsk: Math.min(netPriceRatio, minNetPriceRatio),
  params: paramsValue,
};
const signatureHash = await signMakerOrder(signer, chainId, addresses.EXCHANGE, makerOrder, paramsTypes);
```

If for any reason, the `signMakerOrder` doesn't fit your needs (i.e you only have access to an wallet, and not a json rpc provider), you can replace the `signMakerOrder` call by this:

```ts
import { getMakerOrderTypedData, addressesByNetwork, SupportedChainId } from "@looksrare/sdk";

const chainId = SupportedChainId.MAINNET;
const addresses = addressesByNetwork[chainId];

const { domain, type } = getMakerOrderTypedData(chainId, addresses.EXCHANGE);
const signature = await signer._signTypedData(domain, type, makerOrder);
```

## How to retrieve the user nonce

Call the public api endpoint [/orders/nonce](https://looksrare.github.io/api-docs/#/Orders/OrderController.getOrderNonce), and use this nonce directly.

## How to retrieve the fees

- **Protocol fees**: Call the view function [viewProtocolFee](https://github.com/LooksRare/looksrare-sdk/blob/master/src/abis/IExecutionStrategy.json#L300) on the strategy contract.

```ts
const protocolFee: BigNumber = await contract.viewProtocolFee();
```

- **Collection royalties fees**: Call the function [royaltyFeeInfoCollection](https://github.com/LooksRare/looksrare-sdk/blob/master/src/abis/RoyaltyFeeRegistry.json#L104) on the RoyaltyFeeRegistry contract.

```ts
const [setter, receiver, fee]: [string, string, BigNumber] = await contract.royaltyFeeInfoCollection(collectionAddress);
```

## What to do when the order is created and signed ?

Use the public api entpoints [/orders](https://looksrare.github.io/api-docs/#/Orders/OrderController.createOrder) to push the order to the database. After that, the order will be visible by everyone using the API (looksrare.org, aggregators, etc..).

## How to execute an order

:warning: _This section is still incomplete, and more documentation will be added soon_ :warning:

Use the exchange functions [matchAskWithTakerBid](https://github.com/LooksRare/looksrare-sdk/blob/master/src/abis/LooksRareExchange.json#L555) or [matchAskWithTakerBidUsingETHAndWETH](https://github.com/LooksRare/looksrare-sdk/blob/master/src/abis/LooksRareExchange.json#L687)
