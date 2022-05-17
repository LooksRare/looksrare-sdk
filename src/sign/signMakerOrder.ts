import { providers, utils } from "ethers";
import { SupportedChainId, MakerOrder, SolidityType } from "../types";
import { getMakerOrderTypedData } from "./getMakerOrderTypedData";
import { etherSignTypedData } from "./etherSignTypedData";

/**
 * Create a signature for a maker order
 * @param signer user signer
 * @param chainId current chain id
 * @param verifyingContractAddress Looksrare exchange contract address
 * @param order see MakerOrder
 * @param paramsTypes contains an array of solidity types mapping the params array types
 * @returns String signature
 */
export const signMakerOrder = async (
  signer: providers.JsonRpcSigner,
  chainId: SupportedChainId,
  verifyingContractAddress: string,
  order: MakerOrder,
  paramsTypes: SolidityType[]
): Promise<string> => {
  const signerAddress = await signer.getAddress();
  const { domain, type } = getMakerOrderTypedData(chainId, verifyingContractAddress);

  const value = {
    isOrderAsk: order.isOrderAsk,
    signer: signerAddress,
    collection: order.collection,
    price: order.price,
    tokenId: order.tokenId,
    amount: order.amount,
    strategy: order.strategy,
    currency: order.currency,
    nonce: order.nonce,
    startTime: order.startTime,
    endTime: order.endTime,
    minPercentageToAsk: order.minPercentageToAsk,
    params: utils.defaultAbiCoder.encode(paramsTypes, order.params),
  };

  const signatureHash = await etherSignTypedData(signer.provider, signerAddress, domain, type, value);
  return signatureHash;
};
