import { BigNumber, BytesLike, utils } from "ethers";
import { SolidityType } from "../types";

/**
 * Given an array of params, return the params types, and the encoded params.
 * To be used for orders signature and orders execution
 * @param params array of params
 * @returns param types and encoded params
 */
export const encodeOrderParams = (params?: any[] | null): { paramsTypes: SolidityType[]; encodedParams: BytesLike } => {
  const nonNullParams = params || [];
  const paramsTypes: SolidityType[] = nonNullParams.map((param): SolidityType => {
    if (utils.isAddress(param)) {
      return "address";
    }

    if (typeof param === "boolean") {
      return "bool";
    }

    try {
      BigNumber.from(param);
      return "uint256";
    } catch (error) {
      throw Error("Params have unsupported solidity types");
    }
  });

  return { paramsTypes, encodedParams: utils.defaultAbiCoder.encode(paramsTypes, nonNullParams) };
};
