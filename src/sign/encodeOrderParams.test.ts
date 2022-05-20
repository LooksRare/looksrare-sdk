import { constants } from "ethers";
import { encodeOrderParams } from "./encodeOrderParams";
import { SolidityType } from "../types";

const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
const ADDRESS: SolidityType = "address";
const BOOL: SolidityType = "bool";
const UINT: SolidityType = "uint256";

describe("encodeOrderParams", () => {
  it("no params", () => {
    const { paramsTypes, encodedParams } = encodeOrderParams();
    expect(paramsTypes).toEqual([]);
    expect(encodedParams).toEqual("0x");
  });
  it("null params", () => {
    const { paramsTypes, encodedParams } = encodeOrderParams(null);
    expect(paramsTypes).toEqual([]);
    expect(encodedParams).toEqual("0x");
  });
  it("empty params", () => {
    const { paramsTypes, encodedParams } = encodeOrderParams([]);
    expect(paramsTypes).toEqual([]);
    expect(encodedParams).toEqual("0x");
  });
  it("address type", () => {
    const { paramsTypes, encodedParams } = encodeOrderParams([ZERO_ADDRESS]);
    expect(paramsTypes).toEqual([ADDRESS]);
    expect(encodedParams).toEqual("0x0000000000000000000000000000000000000000000000000000000000000000");
  });
  it("boolean type", () => {
    const { paramsTypes, encodedParams } = encodeOrderParams([true, false]);
    expect(paramsTypes).toEqual([BOOL, BOOL]);
    expect(encodedParams).toEqual(
      "0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000"
    );
  });
  it("uint type", () => {
    const { paramsTypes, encodedParams } = encodeOrderParams([1, "1", "0x11", constants.MaxUint256]);
    expect(paramsTypes).toEqual([UINT, UINT, UINT, UINT]);
    expect(encodedParams).toEqual(
      "0x000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000011ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
    );
  });
  it("multiple types", () => {
    const { paramsTypes, encodedParams } = encodeOrderParams([ZERO_ADDRESS, true, constants.MaxUint256]);
    expect(paramsTypes).toEqual([ADDRESS, BOOL, UINT]);
    expect(encodedParams).toEqual(
      "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
    );
  });
  it("throws on wrong types", () => {
    expect(() => encodeOrderParams([-1])).toThrow();
    expect(() => encodeOrderParams(["Unsupported type"])).toThrow();
  });
});
