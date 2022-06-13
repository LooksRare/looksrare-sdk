export interface ChainInfo {
  label: string;
  appUrl: string;
  rpcUrl: string;
  explorer: string;
  apiUrl: string;
  osApiUrl: string;
  cdnUrl: string;
  rewardsSubgraphUrl: string;
  cloudinaryUrl: string;
}

export interface Addresses {
  LOOKS: string;
  LOOKS_LP: string;
  WETH: string;
  ROYALTY_FEE_MANAGER: string;
  ROYALTY_FEE_REGISTRY: string;
  ROYALTY_FEE_SETTER: string;
  EXCHANGE: string;
  TRANSFER_MANAGER_ERC721: string;
  TRANSFER_MANAGER_ERC1155: string;
  STRATEGY_STANDARD_SALE: string;
  TRANSFER_SELECTOR_NFT: string;
  STRATEGY_COLLECTION_SALE: string;
  STRATEGY_PRIVATE_SALE: string;
  STRATEGY_DUTCH_AUCTION: string;
  PRIVATE_SALE_WITH_FEE_SHARING: string;
  FEE_SHARING_SYSTEM: string;
  STAKING_POOL_FOR_LOOKS_LP: string;
  TOKEN_DISTRIBUTOR: string;
  TRADING_REWARDS_DISTRIBUTOR: string;
  MULTI_REWARDS_DISTRIBUTOR: string;
  MULTICALL2: string;
  REVERSE_RECORDS: string;
  AGGREGATOR_UNISWAP_V3: string;
  EXECUTION_MANAGER: string;
}
