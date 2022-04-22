import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import copy from "rollup-plugin-copy";
import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "es" },
  ],
  plugins: [
    copy({
      targets: [{ src: "src/abis/**/*", dest: "dist/abis" }],
    }),
    json(),
    typescript(),
  ],
};
