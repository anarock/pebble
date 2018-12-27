import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Checkbox } from "../src";
import { withState } from "@dump247/storybook-state";

storiesOf("Components/Checkbox", module).add(
  "Default",
  withState({ checked: false })(({ store }) => (
    <Checkbox
      checked={store.state.checked}
      onChange={() => store.set({ checked: !store.state.checked })}
      value="checkbox"
      label="I am a checkbox"
    />
  ))
);
