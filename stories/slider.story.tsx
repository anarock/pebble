import * as React from "react";
import { storiesOf } from "@storybook/react";
import Slider from "../src/components/Slider";
import { boolean, number, text } from "@storybook/addon-knobs";
import { css } from "emotion";
import { withState } from "@dump247/storybook-state";

const wrapperStyle = css({
  width: 400
});

interface State {
  value: [number, number];
}

storiesOf("Components/Slider", module).add(
  "simple",
  withState<State>({ value: [10, 20] })(({ store }) => (
    <Slider
      onValuesUpdated={({ min, max }) => store.set({ value: [min, max] })}
      min={number("min", 0)}
      max={number("max", 100)}
      values={store.state.value}
      disabled={boolean("disabled", false)}
      large={boolean("large", false)}
      className={wrapperStyle}
      title={text("title", "Select Range")}
      valueLabelExtractor={() =>
        `${store.state.value[0]}-${store.state.value[1]}`
      }
    />
  ))
);
