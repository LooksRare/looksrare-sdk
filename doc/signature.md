# Signatures

## encodeOrderParams

```ts
const { paramsTypes, encodedParams } = encodeOrderParams(params);
```

For a given array of params used to create a maker order, generate the corresponding array of param types, and encode the params in a data hex string.

#### Params

- **params (any[])**: The list of params used to create the maker order.

#### Returns

**({ paramsTypes, encodedParams })**: Params types array, and [encoded](https://docs.ethers.io/v5/api/utils/abi/coder/#AbiCoder-encode) params.

## getMakerOrderTypeAndDomain

```ts
const { domain, type } = getMakerOrderTypeAndDomain(chainId, verifyingContract);
```

Generate the [EIP-712](https://eips.ethereum.org/EIPS/eip-712) `type` and `domain` information used to sign an order on LooksRare.

#### Params

- **chainId ([SupportedChainId](https://github.com/LooksRare/looksrare-sdk/blob/master/src/types/enum.ts#L1))**: Chain ID of the blockchain where your application is running.
- **verifyingContract (string?)**: Contract address where the signature will be used. It will always be the LooksRareExchange address (EXCHANGE in the [addresses list](https://github.com/LooksRare/looksrare-sdk/blob/master/src/constants/addresses.ts#L10). The address differs based on the chain you are using). If you don't provide it, it will use the exchange address for the chainId you provided.

#### Returns

**({ type, domain })**: Type and domain used to sign the order.

## generateMakerOrderTypedData

```ts
const { domain, value, type } = generateMakerOrderTypedData(signer, chainId, makerOrder, verifyingContract);
```

Generate the domain, value, and type used to generate an EIP-712 (typed data signing) signature.

#### Params

- **signer (string)**: The signer address.
- **chainId ([SupportedChainId](https://github.com/LooksRare/looksrare-sdk/blob/master/src/types/enum.ts#L1))**: Chain ID of the blockchain where your application is running.
- **makerOrder ([MakerOrder](https://github.com/LooksRare/looksrare-sdk/blob/master/src/types/orders.ts#L7))**: The maker order object.
- **verifyingContract (string?)**: Contract address where the signature will be used. It will always be the LooksRareExchange address (EXCHANGE in the [addresses list](https://github.com/LooksRare/looksrare-sdk/blob/master/src/constants/addresses.ts#L10). The address differs based on the chain you are using). If you don't provide it, it will use the exchange address for the chainId you provided.

## signMakerOrder

```ts
const signature = await signMakerOrder(signer, chainId, order, verifyingContractAddress);
```

#### Params

- **signer (JsonRpcSigner)**: Json RPC signer object from [ethers](https://docs.ethers.io/v5/api/providers/jsonrpc-provider/#JsonRpcSigner).
- **chainId ([SupportedChainId](https://github.com/LooksRare/looksrare-sdk/blob/master/src/types/enum.ts#L1))**: Chain ID of the blockchain where your application is running.
- **order ([MakerOrder](https://github.com/LooksRare/looksrare-sdk/blob/master/src/types/sign.ts#L9))**:
- **verifyingContractAddress (string)**: Contract address where the signature will be used. It will always be the LooksRareExchange address (EXCHANGE in the [addresses list](https://github.com/LooksRare/looksrare-sdk/blob/master/src/constants/addresses.ts#L10). The address differs based on the chain you are using). If you don't provide it, it will use the exchange address for the chainId you provided.

#### Returns

**(string)**: Signature hash. You can decompose the signature with [splitSignature](https://docs.ethers.io/v5/api/utils/bytes/#utils-splitSignature).
