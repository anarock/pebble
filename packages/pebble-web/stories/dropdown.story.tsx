import * as React from "react";
import { storiesOf } from "@storybook/react";
import DropDown from "../src/components/DropDown";
import Option from "../src/components/Option";
import OptionGroupRadio from "../src/components/OptionGroupRadio";

storiesOf("Components/Dropdown", module).add("simple", () => (
  <DropDown buttonLabel="Hello" initiallyOpen>
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
