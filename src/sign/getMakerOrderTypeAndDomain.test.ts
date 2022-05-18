import { getMakerOrderTypeAndDomain } from "./getMakerOrderTypeAndDomain";
import { addressesByNetwork } from "../constants";

const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

describe("getMakerOrderTypeAndDomain", () => {
  it("has a valid domain with verifyingContract", () => {
    const { domain } = getMakerOrderTypeAndDomain(1, ZERO_ADDRESS);
    expect(domain).toEqual({
      name: "LooksRareExchange",
      version: "1",
      chainId: 1,
      verifyingContract: ZERO_ADDRESS,
    });
  });
  it("has a valid domain without verifyingContract (mainnet)", () => {
    const { domain } = getMakerOrderTypeAndDomain(1);
    expect(domain).toEqual({
      name: "LooksRareExchange",
      version: "1",
      chainId: 1,
      verifyingContract: addressesByNetwork[1].EXCHANGE,
    });
  });
  it("has a valid domain without verifyingContract (rinkeby)", () => {
    const { domain } = getMakerOrderTypeAndDomain(4);
    expect(domain).toEqual({
      name: "LooksRareExchange",
      version: "1",
      chainId: 4,
      verifyingContract: addressesByNetwork[4].EXCHANGE,
    });
  });
});
