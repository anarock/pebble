module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "10"
        }
      }
    ],
    "@babel/preset-typescript"
  ],
  plugins: [
    ["@babel/plugin-proposal-class-properties", { loose: false }],
    "@babel/plugin-syntax-jsx",
    ["@babel/plugin-transform-react-jsx", { useBuiltIns: true }],
    "emotion"
  ],
  env: {
    test: {
      plugins: ["require-context-hook"]
    }
  }
};
