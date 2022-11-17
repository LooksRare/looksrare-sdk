# SDK Developer guide

## How to create and sign an order

The `signMakerOrder` function is a helper used on LooksRare to trigger an EIP-712 signature on our supported wallets.

`ethersProvider` is just a placeholder, for more details on how to get a provider from a wallet check out this guide [Ethers - Web3Provider](https://docs.ethers.io/v5/getting-started/#getting-started--connecting)

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

// Get protocolFees and creatorFees from the contracts
const netPriceRatio = BigNumber.from(10000).sub(protocolFees.add(creatorFees)).toNumber();
// This variable is used to enforce a max slippage of 25% on all orders, if a collection change the fees to be >25%, the order will become invalid
const minNetPriceRatio = 7500;

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
  minPercentageToAsk: Math.max(netPriceRatio, minNetPriceRatio), // Alternatively, just set it to 9800
  params: paramsValue,
};
const signatureHash = await signMakerOrder(signer, chainId, makerOrder);
```

If for any reason, the `signMakerOrder` doesn't fit your needs (i.e you only have access to a wallet private key and not one of the supported wallets), you can replace the `signMakerOrder` call with this:

In this example we use `ethers.providers.JsonRpcProvider` to obtain a provider, but there are other methods that you can find here [Ethers - Provider Documentation](https://docs.ethers.io/v5/api/providers/#providers--provider-documentation)

```ts
import { generateMakerOrderTypedData, addressesByNetwork, SupportedChainId } from "@looksrare/sdk";
import { ethers } from "ethers";

const chainId = SupportedChainId.MAINNET;
const addresses = addressesByNetwork[chainId];

const provider = new ethers.providers.JsonRpcProvider(JSON_RPC_PROVIDER_URL);
const signer = new ethers.Wallet(WALLET_PRIVATE_KEY).connect(provider);
const signerAddress = await signer.getAddress();
const { domain, value, type } = generateMakerOrderTypedData(signerAddress, chainId, makerOrder);
const signature = await signer._signTypedData(domain, type, value);
```

## How to retrieve the user nonce

Call the public api endpoint [/orders/nonce](https://looksrare.dev/reference/getordernonce), and use this nonce directly.

## How to retrieve the fees

- **Protocol fees**: Call the view function [viewProtocolFee](https://github.com/LooksRare/looksrare-sdk/blob/master/src/abis/IExecutionStrategy.json#L300) on the strategy contract.

To find out more on how to create a contract object check out this guide [Ethers - Contracts](https://docs.ethers.io/v5/getting-started/#getting-started--contracts)

```ts
const protocolFee: BigNumber = await contract.viewProtocolFee();
```

- **Collection rebate**: Call the function [calculateRoyaltyFeeAndGetRecipient](https://github.com/LooksRare/looksrare-sdk/blob/master/src/abis/RoyaltyFeeManager.json#L57) on the RoyaltyFeeManager contract.

This function will return the collection rebate `receiver` and the `royaltyAmount` (collection rebate amount).

If the collection rebate amount (`royaltyAmount`) is greater than zero then it means the 0.5% collection rebate will apply to your order.

```ts
const [receiver, royaltyAmount]: [string, BigNumber] = await contract.calculateRoyaltyFeeAndGetRecipient(collection, tokenId, price);
```

- **LooksRare's royalties fees registry**: Call the function [royaltyFeeInfoCollection](https://github.com/LooksRare/looksrare-sdk/blob/master/src/abis/RoyaltyFeeRegistry.json#L104) on the RoyaltyFeeRegistry contract.

If the returned fee is 0 in our registry, a royalty fee may still be set in the collection contract by using the [EIP-2981: NFT Royalty Standard](https://eips.ethereum.org/EIPS/eip-2981).

```ts
const [setter, receiver, fee]: [string, string, BigNumber] = await contract.royaltyFeeInfoCollection(collectionAddress);
```

## What to do when the order is created and signed

Use the Public API endpoint [/orders](https://looksrare.dev/reference/createorder) to push the order to the database. After that, the order will be visible to everyone using the our APIs (looksrare.org, aggregators, etc..).

## How to execute an order

The API provides you with a MakerOrderWithVRS-like object. The contract expects a `MakerOrderWithVRS` and a `TakerOrder`.

First you need to convert the object returned by the API to a valid `MakerOrderWithVRS`. For example, the API returned object has the properties `collectionAddress` and `currencyAddress` while the contract expects the properties `collection` and `currency`.

Once you have a valid `MakerOrderWithVRS` object, you'll need a `TakerOrder` as show below.
```ts
const takerOrder: TakerOrder = {
  isOrderAsk: false,
  taker: takerAddress, // The address which will send the transaction on-chain
  price: makerOrder.price,
  tokenId: makerOrder.tokenId,
  minPercentageToAsk: 7500,
  params: encodedParams,
};
```

Orders matching functions: 

- [matchAskWithTakerBid](https://docs.looksrare.org/developers/exchange/LooksRareExchange#matchaskwithtakerbid)
- [matchAskWithTakerBidUsingETHAndWETH](https://docs.looksrare.org/developers/exchange/LooksRareExchange#matchaskwithtakerbidusingethandweth)
- [matchBidWithTakerAsk](https://docs.looksrare.org/developers/exchange/LooksRareExchange#matchbidwithtakerask)
