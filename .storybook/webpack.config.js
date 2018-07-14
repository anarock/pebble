module.exports = (baseConfig, env, config) => {
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
        loader: require.resolve("awesome-typescript-loader")
      },
      {
        loader: require.resolve("@storybook/addon-storysource/loader"),
        options: {
          parser: "typescript"
        }
      }
    ]
  });

  config.resolve.extensions.push(".ts", ".tsx", ".json");
  return config;
};
