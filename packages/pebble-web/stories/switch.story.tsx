import * as React from "react";
import { storiesOf } from "@storybook/react";
import Switch from "../src/components/Switch";
import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";

storiesOf("Components/Switch", module).add("Default", () => (
  <Switch
    onChange={action("onChange")}
    label={text("label", "ON/OFF")}
    disabled={boolean("disabled", false)}
  />
));
