import { configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import "@storybook/addon-console";

setOptions({
  addonPanelInRight: true
});

// automatically import all files ending in *.stories.tsx
const req = require.context("../stories", true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
