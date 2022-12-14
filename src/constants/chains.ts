import { ChainInfo, SupportedChainId } from "../types";

const MAINNET_BASE_API_URL = "https://graphql.looksrare.org";
const GOERLI_BASE_API_URL = "https://graphql-goerli.looksrare.org";
const HARDHAT_BASE_API_URL = "http://localhost:4000";

export const CHAIN_INFO: { [chainId in SupportedChainId]: ChainInfo } = {
  [SupportedChainId.MAINNET]: {
    label: "Ethereum",
    appUrl: "https://looksrare.org",
    explorer: "https://etherscan.io",
    rpcUrl: `https://eth-mainnet.g.alchemy.com/v2`,
    baseApiUrl: MAINNET_BASE_API_URL,
    apiUrl: `${MAINNET_BASE_API_URL}/graphql`,
    osApiUrl: "https://api.opensea.io",
    cdnUrl: "https://static.looksnice.org",
    rewardsSubgraphUrl: "https://api.thegraph.com/subgraphs/name/looksrare/looks-distribution",
    cloudinaryUrl: "https://looksrare.mo.cloudinary.net",
  },
  [SupportedChainId.GOERLI]: {
    label: "Goerli",
    appUrl: "https://goerli.looksrare.org",
    explorer: "https://goerli.etherscan.io",
    rpcUrl: `https://eth-goerli.g.alchemy.com/v2`,
    baseApiUrl: GOERLI_BASE_API_URL,
    apiUrl: `${GOERLI_BASE_API_URL}/graphql`,
    osApiUrl: "https://testnets-api.opensea.io",
    cdnUrl: "https://static-goerli.looksnice.org",
    rewardsSubgraphUrl: "https://api.thegraph.com/subgraphs/name/0xjurassicpunk/looks-distribution",
    cloudinaryUrl: "https://looksrare.mo.cloudinary.net/goerli",
  },
  [SupportedChainId.HARDHAT]: {
    label: "Hardhat",
    appUrl: "http://localhost:3000",
    explorer: "https://etherscan.io",
    rpcUrl: "http://127.0.0.1:8545",
    baseApiUrl: HARDHAT_BASE_API_URL,
    apiUrl: `${HARDHAT_BASE_API_URL}/graphql`,
    osApiUrl: "https://testnets-api.opensea.io",
    cdnUrl: "https://via.placeholder.com",
    rewardsSubgraphUrl: "https://api.thegraph.com/subgraphs/name/0xjurassicpunk/looks-distribution",
    cloudinaryUrl: "",
  },
};

export const isSupportedChain = (chainId: number): chainId is SupportedChainId => {
  return Object.values(SupportedChainId).includes(chainId);
};
