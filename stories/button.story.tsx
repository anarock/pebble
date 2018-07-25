import * as React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Button from "../src/components/Button";

const t = ["primary", "secondary", "dropdown", "link"];

storiesOf("Button", module).add("test", () => (
  <Button
    large={boolean("Large")}
    disabled={boolean("Disabled")}
    type={select("Type", t, "primary")}
    showShadow={boolean("Box Shadow")}
    isOpen={boolean("Dropdown open")}
    onClick={action("click")}
    isSelected={boolean("isSelected")}
    showRipple={boolean("showRipple")}
    loading={boolean("loading")}
  >
    Submit
  </Button>
));
