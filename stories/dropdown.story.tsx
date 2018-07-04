import React from "react";
import { storiesOf } from "@storybook/react";
import Dropdown from "@src/components/Dropdown";
import { Options } from "@src/components/Options";

const options = [
  {
    label: "Lorem ipsum dolor sit amet"
  },
  {
    label: "Lorem ipsum dolor sit amet"
  }
];

storiesOf("Dropdown", module).add("simple", () => (
  <Dropdown buttonLabel="Hello" initiallyOpen>
    {() => (
      <Options
        options={options}
        rowRenderElement={item => item.label}
        onSelect={() => {}}
      />
    )}
  </Dropdown>
));
