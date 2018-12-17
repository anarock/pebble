const babelConfig = require("./babel.config");

import resolve from "rollup-plugin-node-resolve";
import filesize from "rollup-plugin-filesize";
import sourceMaps from "rollup-plugin-sourcemaps";
import pkg from "./package.json";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import cleanup from "rollup-plugin-cleanup";
import replace from "rollup-plugin-replace";

const input = "compiled/index.js";
const external = ["react", "react-calendar/dist/entry.nostyle"];

function getPlugins({ targets, dev }) {
  return [
    babel({
      ...babelConfig,
      presets: [
        ...babelConfig.presets.filter(preset => {
          Array.isArray(preset)
            ? preset[0] !== "@babel/preset-env"
            : preset !== "@babel/preset-env";
        }),
        ["@babel/preset-env", { targets }]
      ],
      plugins: [
        dev && [
          "emotion",
          {
            autoLabel: true,
            labelFormat: "[filename]-[local]"
          }
        ]
      ].filter(p => p)
    }),
    resolve({
      extensions: [".js", ".jsx", ".json"]
    }),
    replace({
      "process.env.NODE_ENV": dev
        ? JSON.stringify("development")
        : JSON.stringify("production")
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
    external: ["react", "react-dom"],
    output: [
      {
        file: pkg.unpkg,
        format: "umd",
        sourcemap: true,
        name: "pebble",
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    ],
    plugins: getPlugins({
      targets: { node: "6" }
    })
  },
  {
    input,
    external: external.concat(Object.keys(pkg.dependencies)),
    output: [
      {
        file: "dist/pebble.es.js",
        format: "es",
        sourcemap: true
      },
      {
        file: "dist/pebble.js",
        format: "cjs",
        sourcemap: true
      }
    ],
    plugins: getPlugins({
      dev: true,
      targets: { node: "10" }
    })
  },
  {
    input,
    external: external.concat(Object.keys(pkg.dependencies)),
    output: [
      {
        file: "dist/pebble.es.min.js",
        format: "es",
        sourcemap: true
      }
    ],
    plugins: getPlugins({
      targets: { node: "10" }
    })
  },
  {
    input,
    external: external.concat(Object.keys(pkg.dependencies)),
    output: [
      {
        file: "dist/pebble.min.js",
        format: "cjs",
        sourcemap: true
      }
    ],
    plugins: getPlugins({
      targets: { node: "6" }
    })
  }
];
