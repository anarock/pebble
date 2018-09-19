import resolve from "rollup-plugin-node-resolve";
import filesize from "rollup-plugin-filesize";
import sourceMaps from "rollup-plugin-sourcemaps";
import pkg from "./package.json";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import cleanup from "rollup-plugin-cleanup";

const input = "compiled/index.js";
const external = ["react", "react-calendar/dist/entry.nostyle"];

const plugins = ({ dev } = {}) => [
  babel({
    babelrc: false,
    presets: [
      [
        "env",
        {
          targets: { node: "6" },
          modules: false
        }
      ],
      "stage-0",
      "react"
    ],
    plugins: [
      "external-helpers",
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
  commonjs(),
  cleanup(),
  sourceMaps(),
  filesize()
];

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
    plugins: plugins()
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
    plugins: plugins({ dev: true })
  },
  {
    input,
    external: external.concat(Object.keys(pkg.dependencies)),
    output: [
      {
        file: "dist/pebble.es.min.js",
        format: "es",
        sourcemap: true
      },
      {
        file: "dist/pebble.min.js",
        format: "cjs",
        sourcemap: true
      }
    ],
    plugins: plugins()
  }
];
