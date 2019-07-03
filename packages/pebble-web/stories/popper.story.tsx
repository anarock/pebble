import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Popper, Button, OptionGroupRadio, Option } from "../src";

storiesOf("Components/Popper", module).add("simple", () => (
  <Popper
    label={({ toggle }) => <Button onClick={toggle}>Click Me</Button>}
    placement="left"
    positionFixed
    modifiers={{
      preventOverflow: {
        enabled: false
      },
      flip: {
        enabled: false
      }
    }}
  >
    {({ toggle }) => (
      <OptionGroupRadio onChange={toggle}>
        <Option value="option-1" label="I am an option" />
        <Option value="option-2" label="I am an option" />
        <Option value="option-3" label="I am an option" />
        <Option value="option-4" label="I am an option" />
        <Option value="option-8" label="I am an option" />
      </OptionGroupRadio>
    )}
  </Popper>
));
