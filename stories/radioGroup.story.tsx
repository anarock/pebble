import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Checkbox, CheckboxGroup } from "../src";
import { withState } from "@dump247/storybook-state";

storiesOf("RadioGroup", module).add(
  "Default",
  withState({ value: "radio" })(({ store }) => (
    <CheckboxGroup
      selected={store.state.value}
      onChange={value =>
        store.set({
          value
        })
      }
      name="test"
    >
      <Checkbox value="radio" label="I am radio button" />
      <Checkbox value="radio1" label="I am radio button" />
    </CheckboxGroup>
  ))
);
