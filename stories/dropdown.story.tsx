import * as React from "react";
import { storiesOf } from "@storybook/react";
import DropDown from "../src/components/DropDown";
import Options from "../src/components/Options";

const options = [
  {
    label: "Lorem ipsum dolor sit amet"
  },
  {
    label: "Lorem ipsum dolor sit amet"
  }
];

storiesOf("Dropdown", module).add("simple", () => (
  <DropDown buttonLabel="Hello" initiallyOpen>
    {() => (
      <Options
        options={options}
        rowRenderElement={item => item.label}
        onSelect={() => {}}
      />
    )}
  </DropDown>
));
