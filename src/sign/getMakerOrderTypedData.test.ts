import { getMakerOrderTypedData } from "./getMakerOrderTypedData";

const zeroAddress = "0x0000000000000000000000000000000000000000";

describe("getMakerOrderTypedData.test", () => {
  test("The domain is valid", () => {
    const { domain } = getMakerOrderTypedData(1, zeroAddress);
    expect(domain).toEqual({
      name: "LooksRareExchange",
      version: "1",
      chainId: 1,
      verifyingContract: zeroAddress,
    });
  });
});
