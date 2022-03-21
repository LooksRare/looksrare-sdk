import { BigNumberish } from "ethers";

export type SolidityType = "bool" | "address" | "uint256" | "bytes" | "bytes32" | "bytes32[]";

/**
 * /!\ This type is used for the signature and should perfectly match the object signed by the user
 * Do not update unless the contract has been updated
 */
export interface MakerOrder {
  isOrderAsk: boolean; // true --> ask / false --> bid
  signer: string; // signer address of the maker order
  collection: string; // collection address
  price: BigNumberish;
  tokenId: BigNumberish; // id of the token
  amount: BigNumberish; // amount of tokens to sell/purchase (must be 1 for ERC721, 1+ for ERC1155)
  strategy: string; // strategy for trade execution (e.g., DutchAuction, StandardSaleForFixedPrice)
  currency: string; // currency address
  nonce: BigNumberish; // order nonce (must be unique unless new maker order is meant to override existing one e.g., lower ask price)
  startTime: BigNumberish; // startTime in timestamp
  endTime: BigNumberish; // endTime in timestamp
  minPercentageToAsk: BigNumberish;
  params: any[]; // params (e.g., price, target account for private sale)
}
