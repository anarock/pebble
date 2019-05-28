const webfontsGenerator = require("webfonts-generator");
const path = require("path");
const fs = require("fs");
const colors = require("colors");
const execa = require("execa");
const prettier = require("prettier");

async function createRNFont() {
  try {
    await execa.shell(
      "rimraf native && mkdir native && ./node_modules/.bin/generate-icon ./dist/pebble.css --componentName=PebbleIcons --fontFamily=pebble -t ./scripts/templates/native-font.tpl -o ./native/Icon.js -p '.pi-'"
    );
    console.log(
      colors.green.bold("created PebbleIcons component for React Native.")
    );
  } catch (e) {
    console.log(e);
  }
}

fs.readdir(path.resolve(__dirname, "../svgs"), (err, data) => {
  if (err) {
    console.log(err);
  }

  const files = data
    .filter(file => file.endsWith("svg"))
    .map(x => `./svgs/${x}`);

  fs.writeFile(
    "./icons.json",
    prettier.format(
      JSON.stringify(data.map(fileName => fileName.split(".")[0])),
      {
        parser: "json"
      }
    ),
    console.log
  );

  webfontsGenerator(
    {
      files,
      dest: "./dist/fonts/",
      fontName: "pebble",
      types: ["woff2", "ttf", "eot", "woff"],
      cssFontsUrl: "./fonts/",
      cssDest: "./dist/pebble.css",
      cssTemplate: "./scripts/templates/pebble-css.hbs",
      templateOptions: {
        baseSelector: ".pi",
        classPrefix: "pi-"
      }
    },
    err => {
      if (err) console.log(err.message);
      else {
        createRNFont();
      }
    }
  );
});
