const webfontsGenerator = require("webfonts-generator");
const path = require("path");
const fs = require("fs");
const prettier = require("prettier");
const colors = require("colors");

const anarockFonts = `
@font-face{
    font-family: "Anarock";
    src: url(./fonts/anarock-regular.woff) format("woff"),
         url(./fonts/anarock-regular.woff2) format("woff2"),
         url(./fonts/anarock-regular.ttf) format("truetype"),
         url(./fonts/anarock-regular.svg#Anarock) format("svg");
    font-style: normal;
    font-weight: normal;
}

@font-face{
    font-family: "Anarock";
    src: url(./fonts/anarock-medium.woff) format("woff"),
         url(./fonts/anarock-medium.woff2) format("woff2"),
         url(./fonts/anarock-medium.ttf) format("truetype"),
         url(./fonts/anarock-medium.svg#Anarock) format("svg");
    font-style: normal;
    font-weight: bold;
}
`;

fs.readdir(path.resolve(__dirname, "../svgs"), (err, data) => {
  if (err) {
    console.log(err);
  }

  const files = data.map(x => `./svgs/${x}`);

  webfontsGenerator(
    {
      files,
      dest: "src/theme/fonts/",
      fontName: "anarock-icons",
      types: ["woff2", "ttf", "eot", "woff"],
      css: false,
      cssFontsUrl: "./fonts/",
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
        path.resolve(__dirname, "../src/theme/pebble.css"),
        prettier.format(anarockFonts + css, {
          parser: "css"
        }),
        "utf-8",
        err => {
          if (err) console.log(err.message);
          else
            console.log(colors.green.bold("pebble.css successfully created."));
        }
      );
    }
  );
});
