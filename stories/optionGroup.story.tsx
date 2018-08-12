import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Option, OptionGroup } from "../src";
import { withState } from "@dump247/storybook-state";

storiesOf("OptionGroup", module).add(
  "Default",
  withState({ value: ["radio"] })(({ store }) => (
    <OptionGroup
      selected={store.state.value}
      onChange={value =>
        store.set({
          value
        })
      }
      multiSelect
    >
      <Option value="option-1" label="I am an option" />
      <Option value="option-2" label="I am an option" />
      <Option value="option-3" label="I am an option" />
      <Option value="option-4" label="I am an option" />
      <Option value="option-5" label="I am an option" />
      <Option value="option-6" label="I am an option" />
      <Option value="option-7" label="I am an option" />
      <Option value="option-8" label="I am an option" />
    </OptionGroup>
  ))
);
