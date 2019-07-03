import * as React from "react";
import { storiesOf } from "@storybook/react";
import TimePicker from "../src/components/TimePicker";
import { withState } from "@dump247/storybook-state";

interface State {
  selectedHour?: number;
  selectedMinute?: number;
}

storiesOf("Components/TimePicker", module).add(
  "simple",
  withState<State>({ selectedHour: undefined, selectedMinute: undefined })(
    ({ store }) => (
      <TimePicker
        onHourChange={value => {
          store.set({
            selectedHour: value
          });
        }}
        onMinuteChange={value => {
          store.set({
            selectedMinute: value
          });
        }}
        selectedHour={store.state.selectedHour}
        selectedMinute={store.state.selectedMinute}
      />
    )
  )
);
