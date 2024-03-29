export const TransferSelectorNFTAbi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "collection",
        type: "address",
      },
    ],
    name: "checkTransferManagerForToken",
    outputs: [
      {
        internalType: "address",
        name: "transferManager",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;
