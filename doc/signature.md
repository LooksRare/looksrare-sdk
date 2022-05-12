# Signatures

## getMakerOrderTypedData

```ts
getMakerOrderTypedData(chainId, verifyingContract);
```

Generate the [EIP-712](https://eips.ethereum.org/EIPS/eip-712) `type` and `domain` information used to sign an order on LooksRare.

#### Params

- **chainId ([SupportedChainId](https://github.com/LooksRare/looksrare-sdk/blob/master/src/types/constants.ts#L1))**: Chain ID of the blockchain where your application is running.
- **verifyingContract (string)**: Contract address where the signature will be used. It will always be the LooksRareExchange address (EXCHANGE in the [addresses list](https://github.com/LooksRare/looksrare-sdk/blob/master/src/constants/addresses.ts#L10). The address differs based on the chain you are using).

#### Returns

**({ type, domain })**: type and domain used to sign the order.

## signMakerOrder

```ts
await signMakerOrder(signer, chainId, verifyingContractAddress, order, paramsTypes);
```

#### Params

- **signer (JsonRpcSigner)**: Json RPC signer object from [ethers](https://docs.ethers.io/v5/api/providers/jsonrpc-provider/#JsonRpcSigner).
- **chainId ([SupportedChainId](https://github.com/LooksRare/looksrare-sdk/blob/master/src/types/constants.ts#L1))**: Chain ID of the blockchain where your application is running.
- **verifyingContractAddress (string)**: Contract address where the signature will be used. It will always be the LooksRareExchange address (EXCHANGE in the [addresses list](https://github.com/LooksRare/looksrare-sdk/blob/master/src/constants/addresses.ts#L10). The address differs based on the chain you are using).
- **order ([MakerOrder](https://github.com/LooksRare/looksrare-sdk/blob/master/src/types/sign.ts#L9))**:
- **paramsTypes ([SolidityType[]](https://github.com/LooksRare/looksrare-sdk/blob/master/src/types/sign.ts#L3))**: Array of types of the params list (empty array if there are no params).

#### Returns

**(string)**: Signature hash. You can decompose the signature with [splitSignature](https://docs.ethers.io/v5/api/utils/bytes/#utils-splitSignature).
