# ABIs

The SDK exposes most of the LooksRare contract ABIs. For convenience, some commonly used ABIs are also exported.
If you need other ABIs, you can [open an issue](https://github.com/LooksRare/looksrare-sdk/issues/new?assignees=&labels=&template=feature_request.md&title=).

```ts
import {
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

## LooksRare Exchange ABIs

- **LooksRareExchangeAbi**: LooksRare exchange, where all the trading actions are done (execute a trade, cancel orders, etc...).
- **IExecutionStrategyAbi**: Generic interface for Strategies contracts. You can use it to interact with all the strategies (only the implementation changes).
- **TransferSelectorNFTAbi**: Select the right transfer manager based on the collection's supported interface. Used to transfer an NFT when a trade is executed.
- **RoyaltyFeeRegistryAbi**: Royalty fee registry for the LooksRare exchange. Contains royalties information for all the collections.
- **RoyaltyFeeSetterAbi**: Allow creators to set their royalties in the registry.
- **RoyaltyFeeManagerAbi**: Compute the royalties for a specific trade, based on the registry information.

:octocat: [Contracts source code](https://github.com/LooksRare/contracts-exchange-v1)

:book: [Extended documentation](https://docs.looksrare.org/developers/looksrare-exchange-overview).

## LooksRare Staking ABIs

- **FeeSharingSystemAbi**: Handle WETH distribution.
- **TokenDistributorAbi**: Distribute the LOOKS tokens.
- **MultiRewardsDistributorAbi**: Distribute trading rewards and listing rewards using a merkle tree for data validation.
- **LooksRareAirdropAbi**: Initial airdrop contract.
- **PrivateSaleWithFeeSharingAbi**: Strategic sale contract.

:octocat: [Contracts source code](https://github.com/LooksRare/contracts-token-staking)

:book: [Extended documentation](https://docs.looksrare.org/developers/looksrare-token-staking-overview).

## Other ABIs (Not created by LooksRare)

- **ERC20Abi**: Generic ERC20 ABI
- **ERC721Abi**: Generic ERC721 ABI
- **ERC1155Abi**: Generic ERC1155 ABI
- **ReverseRecordsAbi**: ENS reverse record ABI
- **WETHAbi**: Generic WETH ABI
