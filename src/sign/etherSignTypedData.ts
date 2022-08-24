import { ethers } from "ethers";
import { TypedDataDomain, TypedDataField } from "@ethersproject/abstract-signer";
import { _TypedDataEncoder } from "@ethersproject/hash";

enum Wallet {
  METAMASK,
  FRAME,
  OTHER,
}

/**
 * Some provider instances extend the JsonRpcProvider API.
 * Optional values here can be used to identify the wallet connector
 */
interface ExtendedJsonRpcProvider extends ethers.providers.JsonRpcProvider {
  provider?: {
    isFrame?: boolean; // Frame injected wallet
  };
}

/**
 * Return the user wallet
 * Never use server side
 * @returns Wallet
 */
const getCurrentWallet = async (provider: ExtendedJsonRpcProvider): Promise<Wallet> => {
  const isMetaMask = provider.connection.url === "metamask";
  const isFrame = provider.provider?.isFrame;

  if (isMetaMask) {
    return Wallet.METAMASK;
  }
  if (isFrame) {
    return Wallet.FRAME;
  }
  return Wallet.OTHER;
};

/**
 * Copy of ethers '_signTypedData' helper, modified to support EIP-712 typed signatures with different call names
 * https://github.com/ethers-io/ethers.js/blob/73a46efea32c3f9a4833ed77896a216e3d3752a0/packages/providers/src.ts/json-rpc-provider.ts#L263
 * TESTED WITH - MetaMask, Frame, Coinbase Wallet, WalletConnect: Trust, Rainbow, MetaMask Mobile, SafePal, TokenPocket, Math Wallet
 * NOT CURRENTLY SUPPORTED - Trezor
 */
export const etherSignTypedData = async (
  provider: ExtendedJsonRpcProvider,
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

  if (wallet === Wallet.METAMASK || wallet === Wallet.FRAME) {
    return await provider.send("eth_signTypedData_v4", [address, JSON.stringify(rpcData)]); // MetaMask, Frame
  }

  return await provider.send("eth_signTypedData", [address, JSON.stringify(rpcData)]); // CoinBase wallet. WalletConnect: Trust, MetaMask Mobile, Rainbow, SafePal
};
