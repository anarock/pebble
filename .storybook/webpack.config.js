const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const path = require("path");

module.exports = ({ config, mode }) => {
  // This overrides the default svg loader for the the svgs present in font directory.
  // The inlining of the SVGs was creating problem
  config.module.rules.unshift({
    test: /font.*\.svg$/,
    loader: require.resolve("file-loader")
  });

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("babel-loader")
      },
      {
        loader: require.resolve("awesome-typescript-loader"),
        options: {
          useCache: true,
          transpileOnly: true
        }
      }
    ]
  });

  config.module.rules.push({
    test: /\.story\.tsx?$/,
    loaders: [
      {
        loader: require.resolve("@storybook/source-loader"),
        options: {
          parser: "typescript"
        }
      }
    ],
    enforce: "pre"
  });

  config.plugins.unshift(
    new ForkTsCheckerWebpackPlugin({
      tsconfig: path.resolve(__dirname, "../tsconfig.json")
    })
  );

  config.resolve.extensions.push(".ts", ".tsx", ".json");
  return config;
};
