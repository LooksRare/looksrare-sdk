import { providers } from "ethers";
import { SupportedChainId, MakerOrder, MakerOrderWithEncodedParams } from "../types";
import { getMakerOrderTypedData } from "./getMakerOrderTypedData";
import { encodeOrderParams } from "./encodeOrderParams";
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
  order: MakerOrder,
  verifyingContractAddress?: string
): Promise<string> => {
  const signerAddress = await signer.getAddress();
  const { domain, type } = getMakerOrderTypedData(chainId, verifyingContractAddress);
  const { encodedParams } = encodeOrderParams(order.params);

  const value: MakerOrderWithEncodedParams = {
    ...order,
    signer: signerAddress,
    params: encodedParams,
  };

  const signatureHash = await etherSignTypedData(signer.provider, signerAddress, domain, type, value);
  return signatureHash;
};
