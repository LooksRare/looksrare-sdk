import { SupportedChainId, Addresses } from "../types";

const mainnetAddresses: Addresses = {
  LOOKS: "0xf4d2888d29D722226FafA5d9B24F9164c092421E",
  LOOKS_LP: "0xDC00bA87Cc2D99468f7f34BC04CBf72E111A32f7",
  WETH: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  ROYALTY_FEE_MANAGER: "0x7358182024c9f1B2e6b0153e60bf6156B7eF4906",
  ROYALTY_FEE_REGISTRY: "0x55010472a93921a117aAD9b055c141060c8d8022",
  ROYALTY_FEE_SETTER: "0x66466107d9cAE4da0176a699406419003F3C27a8",
  EXCHANGE: "0x59728544B08AB483533076417FbBB2fD0B17CE3a",
  TRANSFER_MANAGER_ERC721: "0xf42aa99F011A1fA7CDA90E5E98b277E306BcA83e",
  TRANSFER_MANAGER_ERC1155: "0xFED24eC7E22f573c2e08AEF55aA6797Ca2b3A051",
  TRANSFER_SELECTOR_NFT: "0x9Ba628F27aAc9B2D78A9f2Bf40A8a6DF4Ccd9e2c",
  STRATEGY_STANDARD_SALE: "0x56244Bb70CbD3EA9Dc8007399F61dFC065190031",
  STRATEGY_COLLECTION_SALE: "0x86F909F70813CdB1Bc733f4D97Dc6b03B8e7E8F3",
  STRATEGY_PRIVATE_SALE: "0x58D83536D3EfeDB9F7f2A1Ec3BDaad2b1A4DD98C",
  STRATEGY_DUTCH_AUCTION: "0x3E80795Cae5Ee215EBbDf518689467Bf4243BAe0",
  PRIVATE_SALE_WITH_FEE_SHARING: "0x9571cdD8ACB71C83393290F0D63A46173dddE65B",
  FEE_SHARING_SYSTEM: "0xBcD7254A1D759EFA08eC7c3291B2E85c5dCC12ce",
  STAKING_POOL_FOR_LOOKS_LP: "0x2A70e7F51f6cd40C3E9956aa964137668cBfAdC5",
  TOKEN_DISTRIBUTOR: "0x465A790B428268196865a3AE2648481ad7e0d3b1",
  TRADING_REWARDS_DISTRIBUTOR: "0x453c1208B400fE47aCF275315F14E8F9F9fbC3cD",
  MULTI_REWARDS_DISTRIBUTOR: "0x0554f068365eD43dcC98dcd7Fd7A8208a5638C72",
  MULTICALL2: "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696", // https://github.com/makerdao/multicall#multicall2-contract-addresses
  REVERSE_RECORDS: "0x3671aE578E63FdF66ad4F3E12CC0c0d71Ac7510C",
  AGGREGATOR_UNISWAP_V3: "0x3ab16Af1315dc6C95F83Cbf522fecF98D00fd9ba",
  EXECUTION_MANAGER: "0x9Cc58bf22a173C0Fa8791c13Df396d18185d62b2"
};

const rinkebyAddresses: Addresses = {
  LOOKS: "0xAf15b8F7f5f4aC6E2c8b22485DF720c4e3A76bEe",
  LOOKS_LP: "0xceb65559c96F21832e6d2163977A37aE928F164a",
  WETH: "0xc778417E063141139Fce010982780140Aa0cD5Ab",
  ROYALTY_FEE_MANAGER: "0x3162647917b151D35174AbBB079C3DF088C72E4E",
  ROYALTY_FEE_REGISTRY: "0xE2084D0Bacc95bF76F68A5Af7D6989e5e674d0A3",
  ROYALTY_FEE_SETTER: "0xdC6dC8d1B784890BA2c38947218F89E963EC2673",
  EXCHANGE: "0x1AA777972073Ff66DCFDeD85749bDD555C0665dA",
  TRANSFER_MANAGER_ERC721: "0x3f65A762F15D01809cDC6B43d8849fF24949c86a",
  TRANSFER_MANAGER_ERC1155: "0xaf3115757A96e9439FE8d5898dB820afDA15958A",
  TRANSFER_SELECTOR_NFT: "0x28754822Fb07Fcd4DF7815EF17E57FeF682B6eDC",
  STRATEGY_STANDARD_SALE: "0x732319A3590E4fA838C111826f9584a9A2fDEa1a",
  STRATEGY_COLLECTION_SALE: "0xa6e7decd4e18b510c6b98aa0c8ee2db3879f529d",
  STRATEGY_PRIVATE_SALE: "0x861fDb71CCc266b3c0A4b8da8A929E52E83F5e7c",
  STRATEGY_DUTCH_AUCTION: "0xAA0188CeCDD5924a2a256345C825d8528129d9B8",
  PRIVATE_SALE_WITH_FEE_SHARING: "0x6FC27d1a4f83c02f85cFa7d171d3020F3d34c191",
  FEE_SHARING_SYSTEM: "0xF32E6141d54512814fB94584fc17BAaf0C1203dE",
  STAKING_POOL_FOR_LOOKS_LP: "0x81E06b62b9d21f3b249162Ab3811E172Ab32AF19",
  TOKEN_DISTRIBUTOR: "0xd66A1138AF58d02b5571F2EF06e14e88505BDcD3",
  TRADING_REWARDS_DISTRIBUTOR: "0x8f1aB228E892Ad2a7E10605531C9EC23D5cbA4fD",
  MULTI_REWARDS_DISTRIBUTOR: "0xF03F2e2679cFD3AfdE881Db1B07223Af656f453E",
  MULTICALL2: "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696", // https://github.com/makerdao/multicall#multicall2-contract-addresses
  REVERSE_RECORDS: "0x196eC7109e127A353B709a20da25052617295F6f",
  AGGREGATOR_UNISWAP_V3: "0x5b5A702939bF53595dD0C14488528e05e1e8C4A5",
  EXECUTION_MANAGER: "0x5d0cf3A51911Eb2a325a1D51cEbD3ee96f5cE5c4"
};

export const addressesByNetwork: { [chainId in SupportedChainId]: Addresses } = {
  [SupportedChainId.MAINNET]: mainnetAddresses,
  [SupportedChainId.RINKEBY]: rinkebyAddresses,
  [SupportedChainId.HARDHAT]: rinkebyAddresses,
};
