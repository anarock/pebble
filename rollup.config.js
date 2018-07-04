import resolve from "rollup-plugin-node-resolve";
import filesize from "rollup-plugin-filesize";
import sourceMaps from "rollup-plugin-sourcemaps";
import alias from "rollup-plugin-alias";
import pkg from "./package.json";
import path from "path";
import babel from "rollup-plugin-babel";
import commonjs from 'rollup-plugin-commonjs';


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
    babel({
      babelrc: false,
      presets: [['env', { modules: false }], "stage-0", "react"],
      plugins: [
        [
          "module-resolver",
          {
            "root": ["./"],
            "alias": {
              "@src": ["./compiled"]
            }
          }
        ], "external-helpers"
      ],
    }),
    resolve({
      extensions: [ '.js', '.jsx', '.json' ]
    }),
    commonjs(),
    sourceMaps(),
    filesize()
  ]
};
