// This variable is used to enforce a maximum slippage of 25% on orders.
// Orders with higher slippage will become invalid.
export const minNetPriceRatio = 7500;

export { addressesByNetwork } from "./addresses";
export { CHAIN_INFO, isSupportedChain } from "./chains";
