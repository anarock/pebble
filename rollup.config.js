const babelConfig = require("./babel.config");

import resolve from "rollup-plugin-node-resolve";
import filesize from "rollup-plugin-filesize";
import sourceMaps from "rollup-plugin-sourcemaps";
import pkg from "./package.json";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import cleanup from "rollup-plugin-cleanup";

const input = "compiled/index.js";
const umdGlobals = {
  react: "React",
  "react-dom": "ReactDOM"
};
const external = [
  "react-calendar/dist/entry.nostyle",
  ...Object.keys(pkg.peerDependencies),
  ...Object.keys(pkg.dependencies)
];

function getPlugins(targets) {
  return [
    babel({
      ...babelConfig,
      exclude: "node_modules/**",
      runtimeHelpers: true,
      presets: [
        ...babelConfig.presets.filter(preset => {
          Array.isArray(preset)
            ? preset[0] !== "@babel/preset-env"
            : preset !== "@babel/preset-env";
        }),
        ["@babel/preset-env", { targets }]
      ]
    }),
    resolve({
      extensions: [".js", ".jsx", ".json"]
    }),
    commonjs(),
    cleanup({
      comments: [/^\*#__PURE__/, /^\*@__PURE__/]
    }),
    sourceMaps(),
    filesize()
  ];
}

export default [
  {
    input,
    external: Object.keys(umdGlobals),
    output: [
      {
        file: pkg.unpkg,
        format: "umd",
        sourcemap: true,
        name: "pebble",
        globals: umdGlobals
      }
    ],
    plugins: getPlugins({
      chrome: "49",
      safari: "9",
      ie: "11"
    })
  },
  {
    input,
    external,
    output: [
      {
        file: pkg.esnext,
        format: "es",
        sourcemap: true
      }
    ],
    plugins: getPlugins({ node: "10" })
  },
  {
    input,
    external,
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true
      }
    ],
    plugins: getPlugins({
      chrome: "49",
      safari: "9",
      ie: "11"
    })
  }
];
