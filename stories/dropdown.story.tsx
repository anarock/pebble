import * as React from "react";
import { storiesOf } from "@storybook/react";
import DropDown from "../src/components/DropDown";
import Option from "../src/components/Option";
import OptionGroupRadio from "../src/components/OptionGroupRadio";
import { select } from "@storybook/addon-knobs";
import { Placement } from "popper.js";

const placements: Placement[] = [
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

storiesOf("Components/Dropdown", module).add("simple", () => (
  <DropDown
    buttonLabel="Hello"
    initiallyOpen
    placement={select("placement", placements, "bottom-start")}
  >
    {() => (
      <OptionGroupRadio onChange={() => {}}>
        <Option value="option-1" label="I am an option" />
        <Option value="option-2" label="I am an option" />
        <Option value="option-3" label="I am an option" />
        <Option value="option-4" label="I am an option" />
        <Option value="option-8" label="I am an option" />
      </OptionGroupRadio>
    )}
  </DropDown>
));
