import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Radio, RadioGroup } from "../src";
import { withState } from "@dump247/storybook-state";

storiesOf("RadioGroup", module).add(
  "Default",
  withState({ value: "radio" })(({ store }) => (
    <RadioGroup
      selected={store.state.value}
      onChange={value =>
        store.set({
          value: value as string
        })
      }
      name="test"
    >
      <Radio value="radio" label="I am radio button" />
      <Radio value="radio1" label="I am radio button" />
    </RadioGroup>
  ))
);
