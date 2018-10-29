import * as React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Button from "../src/components/Button";
import { ButtonType, ButtonProps } from "../src/components/typings/Button";

const t = ["primary", "secondary", "link", "success", "alert"] as ButtonType[];
const size = ["x-small", "small", "large"] as ButtonProps["size"][];

storiesOf("Button", module).add("Playground", () => (
  <Button
    size={select("size", size, "small")}
    disabled={boolean("Disabled", false)}
    type={select("Type", t, "primary")}
    showShadow={boolean("Box Shadow", false)}
    onClick={action("click")}
    showRipple={boolean("showRipple", true)}
    loading={boolean("loading", false)}
  >
    Submit
  </Button>
));
