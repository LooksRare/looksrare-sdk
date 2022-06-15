import { generateMakerOrderTypedData } from "./generateMakerOrderTypedData";
import { addressesByNetwork } from "../constants";
import { MakerOrder } from "../types";

const SIGNER_ADDRESS = "0x0000000000000000000000000000000000000000";
const CONTRACT_ADDRESS = "0x0000000000000000000000000000000000000001";
const ORDER: MakerOrder = {
  isOrderAsk: true,
  signer: SIGNER_ADDRESS,
  collection: "0xcE25E60A89F200B1fA40f6c313047FFe386992c3",
  price: "1000000000000000000",
  tokenId: "1",
  amount: "1",
  strategy: "0x56244Bb70CbD3EA9Dc8007399F61dFC065190031",
  currency: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  nonce: "100",
  startTime: Math.floor(Date.now() / 1000),
  endTime: Math.floor(Date.now() / 1000) + 86400,
  minPercentageToAsk: 7500,
  params: [],
};

describe("generateMakerOrderTypedData", () => {
  it("generate typed data with a contract address", () => {
    const { domain, value } = generateMakerOrderTypedData(SIGNER_ADDRESS, 1, ORDER, CONTRACT_ADDRESS);
    expect(domain).toEqual({
      name: "LooksRareExchange",
      version: "1",
      chainId: 1,
      verifyingContract: CONTRACT_ADDRESS,
    });
    expect(value).toEqual({ ...ORDER, params: "0x" });
  });
  it("generate typed data without a contract address", () => {
    const { domain, value } = generateMakerOrderTypedData(SIGNER_ADDRESS, 4, ORDER);
    expect(domain).toEqual({
      name: "LooksRareExchange",
      version: "1",
      chainId: 4,
      verifyingContract: addressesByNetwork[4].EXCHANGE,
    });
    expect(value).toEqual({ ...ORDER, params: "0x" });
  });
});
