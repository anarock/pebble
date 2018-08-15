import * as React from "react";
import { storiesOf } from "@storybook/react";
import Select from "../src/components/Select";
import { action } from "@storybook/addon-actions";
import Option from "../src/components/Option";

storiesOf("Select", module).add("default", () => (
  <Select onSelect={action("onSelect")} placeholder="Choose Option" multiSelect>
    {new Array(20).fill(1).map((_x, i) => (
      <Option value={`option-${i + 1}`} label="I am an option" />
    ))}
  </Select>
));
