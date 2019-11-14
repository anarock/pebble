import { configure, addParameters } from "@storybook/react";
import { withOptions } from "@storybook/addon-options";
import "@storybook/addon-console";
import { colors } from "pebble-shared";

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

// automatically import all files ending in *.stories.tsx
const req = require.context("../packages", true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
