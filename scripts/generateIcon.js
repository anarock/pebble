const webfontsGenerator = require("webfonts-generator");
const path = require("path");
const fs = require("fs");
const prettier = require("prettier");
const colors = require("colors");
const execa = require("execa");

async function createRNativeFont() {
  try {
    await execa.shell(
      "rimraf native && mkdir native && ./node_modules/.bin/generate-icon ./src/theme/icons.css --componentName=AnarockIcons --fontFamily=anarock-icons > native/Icon.js"
    );
    console.log(colors.green.bold("Created Icon component for React Native."));
  } catch (e) {
    console.log(e);
  }
}

fs.readdir(path.resolve(__dirname, "../svgs"), (err, data) => {
  if (err) {
    console.log(err);
  }

  const files = data.map(x => `./svgs/${x}`);

  webfontsGenerator(
    {
      files,
      dest: "src/theme/icon-fonts/",
      fontName: "AnarockIcons", // pascalcase to make it react native compatible
      types: ["woff2", "ttf", "eot", "woff"],
      css: false,
      cssFontsUrl: "./icon-fonts/",
      templateOptions: {
        baseSelector: "i"
      }
    },
    (err, result) => {
      const css = result.generateCss();

      const index = css.indexOf("i {");

      const fileContent = `
        import { injectGlobal } from "react-emotion";
        
        export const iconNames = ${JSON.stringify(
          data.map(x => x.replace(".svg", ""))
        )}
        
        export function initIconStyles() {
          injectGlobal\`${prettier.format(css.substr(index), {
            parser: "css"
          })}\`
        }
      `;

      fs.writeFile(
        path.resolve(__dirname, "../src/theme/icons.ts"),
        prettier.format(fileContent, {
          parser: "babylon"
        }),
        "utf-8",
        err => {
          if (err) console.log(err.message);
          else console.log(colors.green.bold("icons.ts successfully created."));
        }
      );

      fs.writeFile(
        path.resolve(__dirname, "../src/theme/icons.css"),
        prettier.format(css, {
          parser: "css"
        }),
        "utf-8",
        err => {
          if (err) console.log(err.message);
          else {
            createRNativeFont();
          }
        }
      );
    }
  );
});
