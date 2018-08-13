import * as React from "react";
import { storiesOf } from "@storybook/react";
import Popper from "../src/components/Popper";
import Button from "../src/components/Button";
import Option from "../src/components/Option";
import OptionGroup from "../src/components/OptionGroup";

storiesOf("Popper", module).add("simple", () => (
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
    {() => (
      <OptionGroup onChange={() => {}} multiSelect>
        <Option value="option-1" label="I am an option" />
        <Option value="option-2" label="I am an option" />
        <Option value="option-3" label="I am an option" />
        <Option value="option-4" label="I am an option" />
        <Option value="option-8" label="I am an option" />
      </OptionGroup>
    )}
  </Popper>
));
