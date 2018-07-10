import * as React from "react";
import { storiesOf } from "@storybook/react";
import Tooltip from "../src/components/Tooltip";
import Button from "../src/components/Button";
import { boolean, select } from "@storybook/addon-knobs";

const placements = [
  "auto-start",
  "auto",
  "auto-end",
  "top-start",
  "top",
  "top-end",
  "right-start",
  "right",
  "right-end",
  "bottom-end",
  "bottom",
  "bottom-start",
  "left-end",
  "left",
  "left-start"
];

storiesOf("Tooltip", module).add("simple", () => (
  <Tooltip
    label={({ ref }) => (
      <div ref={ref}>
        <Button type="link" onClick={() => {}}>
          Hover on me
        </Button>
      </div>
    )}
    text="Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc"
    isOpen={boolean("isOpen")}
    placement={select("placement", placements)}
    isError={boolean("error")}
  />
));
