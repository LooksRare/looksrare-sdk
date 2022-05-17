import { getMakerOrderTypedData } from "./getMakerOrderTypedData";

const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

describe("getMakerOrderTypedData", () => {
  it("has a valid domain", () => {
    const { domain } = getMakerOrderTypedData(1, ZERO_ADDRESS);
    expect(domain).toEqual({
      name: "LooksRareExchange",
      version: "1",
      chainId: 1,
      verifyingContract: ZERO_ADDRESS,
    });
  });
});
