import * as React from "react";
import { storiesOf } from "@storybook/react";
import Toggle from "../src/components/Toggle";
import { action } from "@storybook/addon-actions";

storiesOf("Components/Toggle", module).add("Default", () => (
  <Toggle onChange={action("onChange")} />
));
