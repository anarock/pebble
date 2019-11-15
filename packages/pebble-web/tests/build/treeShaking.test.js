const replace = require("rollup-plugin-replace");

const path = require("path");
const { rollup } = require("rollup");
const terser = require("rollup-plugin-terser").terser;

const pkg = require("../../package.json");
const external = [
  "react-calendar/dist/Calendar",
  ...Object.keys(pkg.peerDependencies),
  ...Object.keys(pkg.dependencies)
];

async function compress() {
  const bundle = await rollup({
    input: path.resolve(__dirname, "fixture.js"),
    external,
    treeshake: {
      pureExternalModules: true
    },
    plugins: [
      terser({
        toplevel: true,
        mangle: false,
        compress: {
          passes: 3,
          pure_getters: true,
          side_effects: true
        },
        output: {
          beautify: true
        }
      }),
      replace({
        "process.env.NODE_ENV": JSON.stringify("production")
      })
    ],
    onwarn: (warning, handle) => {
      if (warning.code !== "EMPTY_BUNDLE") handle(warning);
    }
  });

  const { output } = await bundle.generate({
    format: "esm"
  });

  return output[0].code
    .replace(/\n\n/g, "\n")
    .replace(/^import [^;]*;\n?/gm, "")
    .replace(/,[^\n]/g, ",\n")
    .trim();
}

describe("build", () => {
  it("should be tree shakeable", async () => {
    const code = await compress();

    expect(code).toEqual("");
  });
});
