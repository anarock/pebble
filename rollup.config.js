import resolve from "rollup-plugin-node-resolve";
import filesize from "rollup-plugin-filesize";
import sourceMaps from "rollup-plugin-sourcemaps";
import alias from "rollup-plugin-alias";
import pkg from "./package.json";
import path from "path";

const input = "compiled/index.js";
const external = ["react"];

export default {
  input,
  external: external.concat(Object.keys(pkg.dependencies)),
  output: [
    {
      file: pkg.module,
      format: "es",
      sourcemap: true
    },
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true
    }
  ],
  plugins: [
    alias({
      "@src": path.resolve(__dirname, "./src")
    }),
    resolve(),
    sourceMaps(),
    filesize()
  ]
};
