import * as React from "react";
import { storiesOf } from "@storybook/react";
import DropDown from "../src/components/DropDown";
import Option from "../src/components/Option";
import OptionGroupRadio from "../src/components/OptionGroupRadio";
import { action } from "@storybook/addon-actions";

storiesOf("Dropdown", module)
  .add("simple", () => (
    <DropDown buttonLabel="Hello" initiallyOpen>
      {({ toggle }) => (
        <OptionGroupRadio
          onChange={val => {
            action("onChange")(val);
            toggle();
          }}
        >
          <Option value="option-1" label="I am an option" />
          <Option value="option-2" label="I am an option" />
          <Option value="option-3" label="I am an option" />
          <Option value="option-4" label="I am an option" />
          <Option value="option-5" label="I am an option" />
        </OptionGroupRadio>
      )}
    </DropDown>
  ))
  .add("custom label", () => (
    <DropDown
      labelComponent={({ toggleDropdown }) => (
        <div onClick={toggleDropdown} style={{ cursor: "pointer" }}>
          Text
        </div>
      )}
    >
      {({ toggle }) => (
        <OptionGroupRadio
          onChange={val => {
            action("onChange")(val);
            toggle();
          }}
        >
          <Option value="option-1" label="I am an option" />
          <Option value="option-2" label="I am an option" />
          <Option value="option-3" label="I am an option" />
          <Option value="option-4" label="I am an option" />
          <Option value="option-5" label="I am an option" />
        </OptionGroupRadio>
      )}
    </DropDown>
  ));
