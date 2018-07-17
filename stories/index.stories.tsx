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
  const ttf = require(`../src/theme/fonts/${src}.ttf`);
  const woff2 = require(`../src/theme/fonts/${src}.woff2`);
  const woff = require(`../src/theme/fonts/${src}.woff`);
  const svg = require(`../src/theme/fonts/${src}.svg`);

  return `
      @font-face{
          font-family: "${name}";
          src: url(${woff}) format("woff"),	
              url(${woff2}) format("woff2"),	
               url(${ttf}) format("truetype"),	
               url(${svg}#${name}) format("svg");
          font-style: ${fontStyle};
          font-weight: ${fontWeight};
      }
  `;
}

injectGlobal`
	${loadFont("Anarock", "anarock-regular", "normal")}
  ${loadFont("Anarock", "anarock-medium", "bold")}
  ${loadFont("AnarockIcons", "AnarockIcons")}
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
