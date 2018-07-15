import { addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import centered from "@storybook/addon-centered";
import { withBackgrounds } from "@storybook/addon-backgrounds";
import { colors, initStyles } from "../src/theme";
import { checkA11y } from "@storybook/addon-a11y";
import { withConsole } from "@storybook/addon-console";
import { withViewport } from "@storybook/addon-viewport";

initStyles.initStyles();

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
