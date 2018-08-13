import * as React from "react";
import { storiesOf } from "@storybook/react";
import DropDown from "../src/components/DropDown";
import Option from "../src/components/Option";
import OptionGroup from "../src/components/OptionGroup";

storiesOf("Dropdown", module).add("simple", () => (
  <DropDown buttonLabel="Hello" initiallyOpen>
    {() => (
      <OptionGroup onChange={() => {}} multiSelect>
        <Option value="option-1" label="I am an option" />
        <Option value="option-2" label="I am an option" />
        <Option value="option-3" label="I am an option" />
        <Option value="option-4" label="I am an option" />
        <Option value="option-8" label="I am an option" />
      </OptionGroup>
    )}
  </DropDown>
));
