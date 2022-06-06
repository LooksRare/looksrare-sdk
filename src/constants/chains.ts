import { ChainInfo, SupportedChainId } from "../types";

export const CHAIN_INFO: { [chainId in SupportedChainId]: ChainInfo } = {
  [SupportedChainId.MAINNET]: {
    label: "Ethereum",
    appUrl: "https://looksrare.org",
    explorer: "https://etherscan.io",
    rpcUrl: `https://eth-mainnet.alchemyapi.io/v2`,
    apiUrl: "https://graphql.looksrare.org/graphql",
    osApiUrl: "https://api.opensea.io",
    cdnUrl: "https://static.looksnice.org",
    rewardsSubgraphUrl: "https://api.thegraph.com/subgraphs/name/looksrare/looks-distribution",
    cloudinaryUrl: "https://looksrare.mo.cloudinary.net",
  },
  [SupportedChainId.RINKEBY]: {
    label: "Rinkeby",
    appUrl: "https://rinkeby.looksrare.org",
    explorer: "https://rinkeby.etherscan.io",
    rpcUrl: `https://eth-rinkeby.alchemyapi.io/v2`,
    apiUrl: "https://graphql-rinkeby.looksrare.org/graphql",
    osApiUrl: "https://testnets-api.opensea.io",
    cdnUrl: "https://static-rinkeby.looksnice.org",
    rewardsSubgraphUrl: "https://api.thegraph.com/subgraphs/name/0xjurassicpunk/looks-distribution",
    cloudinaryUrl: "https://looksrare.mo.cloudinary.net/rinkeby",
  },
  [SupportedChainId.HARDHAT]: {
    label: "Hardhat",
    appUrl: "http://localhost:3000",
    explorer: "https://etherscan.io",
    rpcUrl: "http://127.0.0.1:8545",
    apiUrl: "http://localhost:4000/graphql",
    osApiUrl: "https://testnets-api.opensea.io",
    cdnUrl: "https://via.placeholder.com",
    rewardsSubgraphUrl: "https://api.thegraph.com/subgraphs/name/0xjurassicpunk/looks-distribution",
    cloudinaryUrl: "",
  },
};

export const isSupportedChain = (chainId: number): chainId is SupportedChainId => {
  return Object.values(SupportedChainId).includes(chainId);
};
