import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Radio } from "../src";
import { withState } from "@dump247/storybook-state";
import { boolean } from "@storybook/addon-knobs";

storiesOf("Components/Radio", module).add(
  "Default",
  withState({ checked: false })(({ store }) => (
    <Radio
      checked={store.state.checked}
      onChange={() => store.set({ checked: !store.state.checked })}
      value="radio"
      label="I am radio button"
      disabled={boolean("disabled", false)}
    />
  ))
);
