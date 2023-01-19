import * as abisJson from "./index";
import * as abisTs from "./ts";

describe("abis", () => {
  it("same number of TS abis as JSON", () => {
    expect(Object.keys(abisJson).length).toEqual(Object.keys(abisTs).length);
  });
  it.each(Object.keys(abisTs))("%s ABI matches JSON version", (abiTs) => {
    const tsAbis = abisTs as unknown as any; // Avoid TS errors
    const abiName = abiTs.substring(0, abiTs.length - 1); // TS ABIs exports have "TS" appended to avoid name collisions
    const stringifiedTsAbi = JSON.stringify(tsAbis[abiName]);

    const jsonAbis = abisJson as unknown as any; // Avoid TS errors
    const stringifiedJsonAbi = JSON.stringify(jsonAbis[abiTs]);
    expect(stringifiedTsAbi).toEqual(stringifiedJsonAbi);
  });
});
