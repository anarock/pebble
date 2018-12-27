import { configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import "@storybook/addon-console";
import "storybook-chromatic";

setOptions({
  /**
   * name to display in the top left corner
   * @type {String}
   */
  name: "pebble",
  /**
   * URL for name in top left corner to link to
   * @type {String}
   */
  url: "https://github.com/ritz078/pebble",
  /**
   * show addon panel as a vertical panel on the right
   * @type {Boolean}
   */
  addonPanelInRight: true
});

// automatically import all files ending in *.stories.tsx
const req = require.context("../stories", true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
