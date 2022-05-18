import { TypedDataDomain, TypedDataField } from "@ethersproject/abstract-signer";
import { SupportedChainId, MakerOrder, MakerOrderWithEncodedParams } from "../types";
import { getMakerOrderTypeAndDomain } from "./getMakerOrderTypeAndDomain";
import { encodeOrderParams } from "./encodeOrderParams";

export const generateMakerOrderTypedData = (
  signerAddress: string,
  chainId: SupportedChainId,
  order: MakerOrder,
  verifyingContractAddress?: string
): {
  type: Record<string, TypedDataField[]>;
  domain: TypedDataDomain;
  value: MakerOrderWithEncodedParams;
} => {
  const { domain, type } = getMakerOrderTypeAndDomain(chainId, verifyingContractAddress);
  const { encodedParams } = encodeOrderParams(order.params);
  const value: MakerOrderWithEncodedParams = {
    ...order,
    signer: signerAddress,
    params: encodedParams,
  };

  return { domain, type, value };
};
