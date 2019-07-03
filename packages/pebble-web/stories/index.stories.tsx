import { addDecorator, StoryDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import centered from "@storybook/addon-centered/react";
import { withA11y } from "@storybook/addon-a11y";
import { withConsole } from "@storybook/addon-console";
import { withViewport } from "@storybook/addon-viewport";

addDecorator(centered);
addDecorator(withKnobs as StoryDecorator);
addDecorator(withA11y);
addDecorator(withViewport);
addDecorator(((storyFn, context) =>
  withConsole()(storyFn)(context)) as StoryDecorator);

const req = require.context("./", true, /.story.tsx$/);

req.keys().forEach(filename => req(filename));
