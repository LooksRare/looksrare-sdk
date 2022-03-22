import { ethers } from "ethers";
import { TypedDataDomain, TypedDataField } from "@ethersproject/abstract-signer";
import { _TypedDataEncoder } from "@ethersproject/hash";

enum Wallet {
  METAMASK,
  OTHER,
}

/**
 * Return the user wallet
 * Never use server side
 * @returns Wallet
 */
const getCurrentWallet = async (provider: ethers.providers.JsonRpcProvider): Promise<Wallet> => {
  const isMetaMask = provider.connection.url === "metamask";
  return isMetaMask ? Wallet.METAMASK : Wallet.OTHER;
};

/**
 * Copy of ethers '_signTypedData' helper, modified to support EIP-712 typed signatures with different call names
 * https://github.com/ethers-io/ethers.js/blob/73a46efea32c3f9a4833ed77896a216e3d3752a0/packages/providers/src.ts/json-rpc-provider.ts#L263
 * TESTED WITH - MetaMask, WalletConnect: Trust, Rainbow, MetaMask Mobile, SafePal
 * NOT CURRENTLY SUPPORTED - Trezor, TokenPocket, Math Wallet
 */
export const etherSignTypedData = async (
  provider: ethers.providers.JsonRpcProvider,
  address: string,
  domain: TypedDataDomain,
  types: Record<string, Array<TypedDataField>>,
  value: Record<string, any>
): Promise<string> => {
  // Populate any ENS names (in-place)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const populated = await _TypedDataEncoder.resolveNames(domain, types, value, (name: string) => {
    return provider.resolveName(name);
  });
  const rpcData = _TypedDataEncoder.getPayload(populated.domain, types, populated.value);

  const wallet = await getCurrentWallet(provider);

  if (wallet === Wallet.METAMASK) {
    return await provider.send("eth_signTypedData_v4", [address, JSON.stringify(rpcData)]); // MetaMask injected
  }

  return await provider.send("eth_signTypedData", [address, JSON.stringify(rpcData)]); // CoinBase wallet. WalletConnect: Trust, MetaMask Mobile, Rainbow, SafePal
};
