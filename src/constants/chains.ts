import { SupportedChainId, ChainInfo } from "./types";

export const CHAIN_INFO: { [chainId in SupportedChainId]: ChainInfo } = {
  [SupportedChainId.MAINNET]: {
    label: "Ethereum",
    explorer: "https://etherscan.io",
    rpcUrl: `https://eth-mainnet.alchemyapi.io/v2`,
    apiUrl: "https://api.looksrare.org/graphql",
    osApiUrl: "https://api.opensea.io",
    cdnUrl: "https://static.looksrare.org",
    rewardsSubgraphUrl: "https://api.thegraph.com/subgraphs/name/looksrare/looks-distribution",
    cloudinaryUrl: "https://looksrare.mo.cloudinary.net",
  },
  [SupportedChainId.RINKEBY]: {
    label: "Rinkeby",
    explorer: "https://rinkeby.etherscan.io",
    rpcUrl: `https://eth-rinkeby.alchemyapi.io/v2`,
    apiUrl: "https://api-rinkeby.looksrare.org/graphql",
    osApiUrl: "https://testnets-api.opensea.io",
    cdnUrl: "https://static-rinkeby.looksrare.org",
    rewardsSubgraphUrl: "https://api.thegraph.com/subgraphs/name/0xjurassicpunk/looks-distribution",
    cloudinaryUrl: "https://looksrare.mo.cloudinary.net/rinkeby",
  },
  [SupportedChainId.HARDHAT]: {
    label: "Hardhat",
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
