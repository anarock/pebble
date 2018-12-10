import * as React from "react";
import { storiesOf } from "@storybook/react";
import Toggle from "../src/components/Toggle";
import { withState } from "@dump247/storybook-state";

interface State {
  value: "ON" | "OFF";
}

storiesOf("Toggle", module).add(
  "simple",
  withState<State>({ value: "ON" })(({ store }) => (
    <Toggle
      value={store.state.value}
      onButtonText="AM"
      offButtonText="PM"
      onChange={() => {
        let newValue: "ON" | "OFF";
        if (store.state.value === "ON") {
          newValue = "OFF";
        } else {
          newValue = "ON";
        }
        store.set({
          value: newValue
        });
      }}
    />
  ))
);
