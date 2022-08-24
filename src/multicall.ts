import { BytesLike, providers } from "ethers";
import { Interface } from "@ethersproject/abi";
import { Contract } from "@ethersproject/contracts";
import multicall2Abi from "./abis/Multicall2.json";

export interface Call {
  contractAddress: string;
  functionName: string;
  params?: any[];
}

/**
 * Batch multiple calls to contracts with the same abi to reduce rpc calls and increase response time.
 *
 * @param provider ethers.js provider
 * @param address multicall address
 * @param abi abi generated from the contract code
 * @param calls Array of Call objects to run through multicall
 */
export const multicall = async <T extends any[]>(
  provider: providers.Provider,
  address: string,
  abi: any[],
  calls: Call[]
): Promise<T> => {
  // Setup contracts
  const multicallContract = new Contract(address, multicall2Abi, provider);
  const itf = new Interface(abi);

  const calldata = calls.map((call) => [
    call.contractAddress.toLowerCase(),
    itf.encodeFunctionData(call.functionName, call.params),
  ]);

  const { returnData } = await multicallContract.callStatic.aggregate(calldata);

  // [From ethers.js docs]: https://docs.ethers.io/v5/api/utils/abi/interface/#Interface--decoding

  // Decoding structured data returns a Result object, which
  // will include all values positionally and if the ABI
  // included names, values will additionally be available
  // by their name.
  const results: T = returnData.map((data: BytesLike, i: number) => {
    const [result] = itf.decodeFunctionResult(calls[i].functionName, data);

    return result;
  });

  return results;
};
