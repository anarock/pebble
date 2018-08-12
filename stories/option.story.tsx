import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Option } from "../src";
import { withState } from "@dump247/storybook-state";

storiesOf("Option", module).add(
  "Default",
  withState({ checked: false })(({ store }) => (
    <div style={{ width: 200 }}>
      <Option
        isSelected={store.state.checked}
        onChange={() => store.set({ checked: !store.state.checked })}
        value="option"
        label="I am an option"
        multiSelect
      />
    </div>
  ))
);
