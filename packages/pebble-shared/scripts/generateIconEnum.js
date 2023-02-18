const fs = require("fs");
const path = require("path");
const prettier = require("prettier");

const banner = `/**
 * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
 */`;

const icons = fs
  .readdirSync(path.resolve(__dirname, "../svgs"))
  .filter(file => file.endsWith(".svg"))
  .map(file => file.replace(".svg", ""));

const namedIcons = icons
  .map(icon => {
    const iconName = icon
      .split(/[-_]/g)
      .map(str => str[0].toUpperCase() + str.slice(1))
      .join("");

    return `${iconName} = '${icon}'`;
  })
  .join(",");

const iconEnum = `enum Icon { ${namedIcons} } ; export default Icon`;

fs.writeFileSync(
  "./src/Icon.ts",
  prettier.format(banner + "\n" + iconEnum, { parser: "typescript" })
);
