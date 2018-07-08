import * as React from "react";
import { storiesOf } from "@storybook/react";
import Popper from "@src/components/Popper";
import Calendar from "../src/components/Calendar";
import Button from "../src/components/Button";

storiesOf("Popper", module).add("simple", () => (
  <Popper
    label={({ toggle }) => <Button onClick={toggle}>Click Me</Button>}
    placement="bottom"
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
    {() => <Calendar hideShadow />}
  </Popper>
));
