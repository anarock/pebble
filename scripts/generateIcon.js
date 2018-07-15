const webfontsGenerator = require("webfonts-generator");
const path = require("path");
const fs = require("fs");
const prettier = require("prettier");

fs.readdir(path.resolve(__dirname, "../svgs"), (err, data) => {
  if (err) {
    console.log(err);
  }

  const files = data.map(x => `./optimized-svg/${x}`);

  webfontsGenerator(
    {
      files,
      writeFiles: false,
      dest: "src/theme/fonts/",
      fontName: "anarock-icons",
      types: ["woff2", "ttf"],
      css: false,
      templateOptions: {
        baseSelector: "i"
      }
    },
    (err, result) => {
      const css = result.generateCss();
      const index = css.indexOf("i {");

      const globalCss = `
        ${css.substr(index)}
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Anarock",sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        
        .mb-10 {
            margin-bottom: 10px;
        }
        
        .ml-10 {
            margin-left: 10px;
        }
        
        .mt-10 {
            margin-top: 10px;
        }`;

      const fileContent = `
        import { injectGlobal } from "react-emotion";
        
        export const iconNames = ${JSON.stringify(
          data.map(x => x.replace(".svg", ""))
        )}
        
        export function initGlobalStyles() {
          injectGlobal\`${prettier.format(globalCss, { parser: "css" })}\`
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
