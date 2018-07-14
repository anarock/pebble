const webfontsGenerator = require("webfonts-generator");
const path = require("path");
const fs = require("fs");

fs.readdir(path.resolve(__dirname, "../svgs"), (err, data) => {
  if (err) {
    console.log(err);
  }

  const files = data.map(x => `./optimized-svg/${x}`);

  const iconNames = `export const iconNames = ${JSON.stringify(
    data.map(x => x.replace(".svg", ""))
  )}`;

  fs.writeFile(
    path.resolve(__dirname, "../src/theme/iconNames.ts"),
    iconNames,
    "utf-8",
    err => {
      if (err) console.log("error in creating icon info JSON.");
    }
  );

  webfontsGenerator({
    files,
    dest: "src/theme/fonts/",
    fontName: "anarock-icons",
    types: ["woff2", "ttf"],
    cssTemplate: "./pebble.template.hbs",
    cssDest: "src/theme/pebble.css",
    cssFontsUrl: "./fonts/"
  });
});
