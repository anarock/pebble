module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: { node: "8" }
      }
    ],
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  plugins: [["@babel/plugin-proposal-class-properties", { loose: false }]],
  env: {
    test: {
      plugins: ["require-context-hook"]
    }
  }
};
