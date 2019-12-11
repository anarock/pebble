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
    [
      "@emotion/babel-preset-css-prop",
      {
        useBuiltIns: true
      }
    ]
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    ["@babel/plugin-proposal-class-properties", { loose: false }],
    "@babel/plugin-syntax-jsx",
    "date-fns"
  ],
  env: {
    test: {
      plugins: ["require-context-hook"]
    }
  }
};
