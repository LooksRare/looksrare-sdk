import { OrderValidatorStatus } from "../types/enum";

/**
 * https://github.com/LooksRare/contracts-exchange-v1/blob/master/contracts/orderValidation/ValidationCodes.md
 */
export const OrderValidatorCodeMap = {
  0: OrderValidatorStatus.ORDER_EXPECTED_TO_BE_VALID,
  101: OrderValidatorStatus.NONCE_EXECUTED_OR_CANCELLED,
  102: OrderValidatorStatus.NONCE_BELOW_MIN_ORDER_NONCE,
  201: OrderValidatorStatus.ORDER_AMOUNT_CANNOT_BE_ZERO,
  301: OrderValidatorStatus.MAKER_SIGNER_IS_NULL_SIGNER,
  302: OrderValidatorStatus.INVALID_S_PARAMETER_EOA,
  303: OrderValidatorStatus.INVALID_V_PARAMETER_EOA,
  304: OrderValidatorStatus.NULL_SIGNER_EOA,
  305: OrderValidatorStatus.WRONG_SIGNER_EOA,
  311: OrderValidatorStatus.SIGNATURE_INVALID_EIP1271,
  312: OrderValidatorStatus.MISSING_IS_VALID_SIGNATURE_FUNCTION_EIP1271,
  401: OrderValidatorStatus.CURRENCY_NOT_WHITELISTED,
  402: OrderValidatorStatus.STRATEGY_NOT_WHITELISTED,
  501: OrderValidatorStatus.MIN_NET_RATIO_ABOVE_PROTOCOL_FEE,
  502: OrderValidatorStatus.MIN_NET_RATIO_ABOVE_ROYALTY_FEE_REGISTRY_AND_PROTOCOL_FEE,
  503: OrderValidatorStatus.MIN_NET_RATIO_ABOVE_ROYALTY_FEE_ERC2981_AND_PROTOCOL_FEE,
  504: OrderValidatorStatus.MISSING_ROYALTY_INFO_FUNCTION_ERC2981,
  601: OrderValidatorStatus.TOO_EARLY_TO_EXECUTE_ORDER,
  602: OrderValidatorStatus.TOO_LATE_TO_EXECUTE_ORDER,
  701: OrderValidatorStatus.NO_TRANSFER_MANAGER_AVAILABLE_FOR_COLLECTION,
  702: OrderValidatorStatus.CUSTOM_TRANSFER_MANAGER,
  711: OrderValidatorStatus.ERC20_BALANCE_INFERIOR_TO_PRICE,
  712: OrderValidatorStatus.ERC20_APPROVAL_INFERIOR_TO_PRICE,
  721: OrderValidatorStatus.ERC721_TOKEN_ID_DOES_NOT_EXIST,
  722: OrderValidatorStatus.ERC721_TOKEN_ID_NOT_IN_BALANCE,
  723: OrderValidatorStatus.ERC721_NO_APPROVAL_FOR_ALL_OR_TOKEN_ID,
  731: OrderValidatorStatus.ERC1155_BALANCE_OF_DOES_NOT_EXIST,
  732: OrderValidatorStatus.ERC1155_BALANCE_OF_TOKEN_ID_INFERIOR_TO_AMOUNT,
  733: OrderValidatorStatus.ERC1155_IS_APPROVED_FOR_ALL_DOES_NOT_EXIST,
  734: OrderValidatorStatus.ERC1155_NO_APPROVAL_FOR_ALL,
};
