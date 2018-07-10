import * as React from "react";
import { storiesOf } from "@storybook/react";
import Popper from "../src/components/Popper";
import { action } from "@storybook/addon-actions";
import { number } from "@storybook/addon-knobs";
import Button from "../src/components/Button";
import Options from "../src/components/Options";

const options = new Array(7)
  .fill({
    label: "Lorem ipsum dolor"
  })
  .map((x, i) => ({ ...x, id: i }));

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
      <Options
        options={options}
        rowRenderElement={item => item.label}
        onSelect={action("onSelect")}
        width={number("width", 300)}
        selected={number("selected", 1)}
        keyExtractor={x => x.id}
        hideBorder
      />
    )}
  </Popper>
));
