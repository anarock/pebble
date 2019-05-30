import resolve from "rollup-plugin-node-resolve";
import filesize from "rollup-plugin-filesize";
import sourceMaps from "rollup-plugin-sourcemaps";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import cleanup from "rollup-plugin-cleanup";
import replace from "rollup-plugin-replace";

export function getRollupConfig(pkg, babelConfig) {
  const input = "./compiled/index.js";
  const umdGlobals = {
    react: "React",
    "react-dom": "ReactDOM"
  };
  const externals = [
    "react-calendar/dist/entry.nostyle",
    ...Object.keys(pkg.peerDependencies || {}),
    ...Object.keys(pkg.dependencies)
  ];

  function external(id) {
    if (externals.includes(id)) return true;
    return /^@babel\/runtime/.test(id);
  }

  const plugins = [
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

  return [
    {
      input,
      external,
      output: [
        {
          file: pkg.esnext,
          format: "esm",
          sourcemap: true
        }
      ],
      plugins: [
        babel({
          ...babelConfig,
          exclude: "node_modules/**",
          runtimeHelpers: true
        }),
        ...plugins
      ]
    },
    {
      input,
      external,
      output: [
        {
          file: pkg.module,
          format: "esm",
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
          ...babelConfig,
          babelrc: false,
          exclude: "node_modules/**",
          runtimeHelpers: true,
          presets: [
            [
              "@babel/preset-env",
              { targets: { chrome: "49", safari: "9", ie: "11" } }
            ],
            ...babelConfig.presets.filter(
              preset =>
                (Array.isArray(preset) ? preset[0] : preset) !==
                "@babel/preset-env"
            )
          ]
        }),
        ...plugins
      ]
    },
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
      plugins: [
        babel({
          ...babelConfig,
          babelrc: false,
          exclude: ["node_modules/**", "../../node_modules/**"],
          runtimeHelpers: true,
          presets: [
            [
              "@babel/preset-env",
              { targets: { chrome: "49", safari: "9", ie: "11" } }
            ],
            ...babelConfig.presets.filter(
              preset =>
                (Array.isArray(preset) ? preset[0] : preset) !==
                "@babel/preset-env"
            )
          ]
        }),
        replace({
          "process.env.NODE_ENV": JSON.stringify("production")
        }),
        ...plugins
      ]
    }
  ];
}
