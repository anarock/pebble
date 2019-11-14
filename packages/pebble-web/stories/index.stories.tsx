import { addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import centered from "@storybook/addon-centered/react";
import { withA11y } from "@storybook/addon-a11y";

addDecorator(centered);
addDecorator(withKnobs);
addDecorator(withA11y);

const req = require.context("./", true, /.story.tsx$/);

req.keys().forEach(filename => req(filename));
