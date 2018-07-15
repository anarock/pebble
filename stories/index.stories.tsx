import { addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import centered from "@storybook/addon-centered";
import { withBackgrounds } from "@storybook/addon-backgrounds";
import { colors, initStyles } from "../src/theme";
import { checkA11y } from "@storybook/addon-a11y";
import { withConsole } from "@storybook/addon-console";
import { withViewport } from "@storybook/addon-viewport";
import { injectGlobal } from "react-emotion";

function loadFont(
  name: string,
  src: string,
  fontWeight: string = "normal",
  fontStyle: string = "normal"
) {
  return `
      @font-face{
          font-family: "${name}";
          src: url(${require("../src/theme/fonts/" +
            src +
            ".woff")}) format("woff"),	
              url(${require("../src/theme/fonts/" +
                src +
                ".woff2")}) format("woff2"),	
               url(${require("../src/theme/fonts/" +
                 src +
                 ".ttf")}) format("truetype"),	
               url(${require("../src/theme/fonts/" +
                 src +
                 ".svg")}#${name}) format("svg");
          font-style: ${fontStyle};
          font-weight: ${fontWeight};
      }
  `;
}

injectGlobal`
	${loadFont("Anarock", "anarock-regular", "normal")}
  ${loadFont("Anarock", "anarock-medium", "bold")}
  ${loadFont("anarock-icons", "anarock-icons")}
`;

initStyles();

addDecorator(centered);
addDecorator(withKnobs);
addDecorator(checkA11y);
addDecorator(withViewport);
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(
  withBackgrounds([
    {
      name: "Grey",
      value: colors.gray.lighter
    },
    {
      name: "White",
      value: colors.white.base,
      default: true
    }
  ])
);

const req = require.context("./", true, /.story.tsx$/);

req.keys().forEach(filename => req(filename));
