import * as React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Button from "../src/components/Button";

const t = ["primary", "secondary", "link", "success", "alert"];
const size = ["x-small", "small", "large"];

storiesOf("Button", module).add("Playground", () => (
  <Button
    size={select("size", size, "small")}
    disabled={boolean("Disabled")}
    type={select("Type", t, "primary")}
    showShadow={boolean("Box Shadow")}
    onClick={action("click")}
    showRipple={boolean("showRipple", true)}
    loading={boolean("loading")}
    filled={boolean("filled", true)}
  >
    Submit
  </Button>
));
