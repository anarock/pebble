import resolve from "rollup-plugin-node-resolve";
import filesize from "rollup-plugin-filesize";
import sourceMaps from "rollup-plugin-sourcemaps";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import cleanup from "rollup-plugin-cleanup";
import replace from "@rollup/plugin-replace";
import path from "path";
const babelConfig = {
  ...require(path.resolve(__dirname, "../../babel.config")),
  exclude: ["node_modules/**", "../../node_modules/**"],
  runtimeHelpers: true
};

export function getRollupConfig(pkg) {
  const input = "./compiled/index.js";
  const umdGlobals = {
    react: "React",
    "react-dom": "ReactDOM"
  };
  const externals = [
    "react-calendar/dist/Calendar",
    "react-spring/renderprops.cjs",
    ...Object.keys(pkg.peerDependencies || {}),
    ...Object.keys(pkg.dependencies || {})
  ];

  function external(id) {
    if (externals.includes(id)) return true;
    if (/^date-fns/.test(id)) return true;
    return /^@babel\/runtime/.test(id);
  }

  const plugins = [
    resolve({
      browser: true,
      extensions: [".js", ".jsx", ".json"]
    }),
    commonjs(),
    cleanup({
      comments: [/^\*#__PURE__/, /^\*@__PURE__/]
    }),
    sourceMaps(),
    filesize()
  ];

  const es2015BabelPreset = {
    presets: [
      [
        "@babel/preset-env",
        { targets: { chrome: "49", safari: "9", ie: "11" } }
      ],
      ...babelConfig.presets.filter(
        preset =>
          (Array.isArray(preset) ? preset[0] : preset) !== "@babel/preset-env"
      )
    ]
  };

  const configs = [
    {
      file: pkg.esnext,
      external,
      format: "esm"
    },
    {
      file: pkg.module,
      external,
      format: "esm",
      babelConfig: {
        ...es2015BabelPreset
      }
    },
    {
      file: pkg.main,
      external,
      format: "cjs",
      babelConfig: {
        ...es2015BabelPreset
      }
    },
    {
      file: pkg.unpkg,
      external: Object.keys(umdGlobals),
      format: "umd",
      name: "pebble",
      globals: umdGlobals,
      babelConfig: {
        ...es2015BabelPreset
      }
    }
  ];

  const prodConfigs = configs.map(config => ({
    input,
    external: config.external,
    output: [
      {
        file: config.file,
        format: config.format,
        sourcemap: true,
        name: config.name,
        globals: config.globals
      }
    ],
    plugins: [
      babel({
        ...babelConfig,
        ...config.babelConfig,
        presets: [
          ...babelConfig.presets.map(preset => {
            if (Array.isArray(preset)) {
              if (preset[0] === "@emotion/babel-preset-css-prop") {
                return [
                  "@emotion/babel-preset-css-prop",
                  {
                    ...preset[1],
                    autoLabel: false
                  }
                ];
              }
            } else if (preset === "@emotion/babel-preset-css-prop") {
              return [
                "@emotion/babel-preset-css-prop",
                {
                  autoLabel: false
                }
              ];
            }
            return preset;
          })
        ]
      }),
      ...plugins,
      replace({
        "process.env.NODE_ENV": JSON.stringify("production")
      })
    ]
  }));

  const devConfigs = configs.map(config => ({
    input,
    external: config.external,
    output: [
      {
        file: config.file.replace(/\.js$/, ".dev.js"),
        format: config.format,
        sourcemap: true,
        name: config.name,
        globals: config.globals
      }
    ],
    plugins: [
      babel({
        ...babelConfig,
        ...config.babelConfig
      }),
      ...plugins,
      replace({
        "process.env.NODE_ENV": JSON.stringify("development")
      })
    ]
  }));

  return [].concat(prodConfigs, devConfigs);
}
