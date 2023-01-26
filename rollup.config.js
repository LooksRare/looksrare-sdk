import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import copy from "rollup-plugin-copy";
import pkg from "./package.json";

export default [
  {
    input: "src/index.ts",
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" },
    ],
    plugins: [typescript()],
  },
  {
    input: "src/abis/ts/index.ts",
    output: [
      { file: "dist/abis/index.esm.js", format: "es" },
      { file: "dist/abis/index.cjs.js", format: "cjs" },
    ],
    plugins: [
      copy({
        targets: [{ src: "src/abis/json/**/*.json", dest: "dist" }],
      }),
      json(),
      typescript(),
    ],
  },
];
