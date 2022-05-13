// This variable is used to enforce a maximum slippage of 15% on orders.
// Orders with higher slippage will become invalid.
export const minNetPriceRatio = 8500;

export { addressesByNetwork } from "./addresses";
export { CHAIN_INFO, isSupportedChain } from "./chains";
