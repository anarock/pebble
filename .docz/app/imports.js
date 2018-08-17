export const imports = {
  "docs/Button.mdx": () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-button" */ "docs/Button.mdx"),
  "docs/index.mdx": () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-index" */ "docs/index.mdx")
};
