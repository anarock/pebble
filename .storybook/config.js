import { configure, addParameters, addDecorator } from "@storybook/react";
import { withOptions } from "@storybook/addon-options";
import "@storybook/addon-console";
import { colors } from "pebble-shared";
import { withKnobs } from "@storybook/addon-knobs";
import centered from "@storybook/addon-centered/react";
import { withA11y } from "@storybook/addon-a11y";
import { withConsole } from "@storybook/addon-console";

addDecorator(centered);
addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator((storyFn, context) => withConsole()(storyFn)(context));

addParameters({
  backgrounds: [
    {
      name: "Grey",
      value: colors.gray.lighter
    },
    {
      name: "White",
      value: colors.white.base,
      default: true
    }
  ]
});

withOptions({
  /**
   * name to display in the top left corner
   * @type {String}
   */
  name: "pebble",
  /**
   * URL for name in top left corner to link to
   * @type {String}
   */
  url: "https://github.com/anarock/pebble",
  /**
   * show addon panel as a vertical panel on the right
   * @type {Boolean}
   */
  addonPanelInRight: true
});

const req = require.context("../packages", true, /.story.tsx$/);

req.keys().forEach(filename => req(filename));

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
