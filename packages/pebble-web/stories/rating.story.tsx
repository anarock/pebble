import { withState } from "@dump247/storybook-state";
import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import Rating from "../src/components/Rating";

interface State {
  value: number;
}

storiesOf("Components/Rating", module).add(
  "Default",
  withState<State>({ value: 1 })(({ store }) => (
    <Rating
      name="Rating test"
      maxRating={number("maxRating", 5)}
      value={store.state.value}
      onChange={value => {
        store.set({ value });
      }}
    />
  ))
);
