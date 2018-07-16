const webfontsGenerator = require("webfonts-generator");
const path = require("path");
const fs = require("fs");
const prettier = require("prettier");

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
        
        export function initGlobalStyles() {
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
        console.log
      );
    }
  );
});
