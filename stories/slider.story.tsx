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
  values: number[];
}

storiesOf("Components/Slider", module).add(
  "simple",
  withState<State>({ values: [10, 20] })(({ store }) => (
    <Slider
      onValuesUpdated={({ values }) => store.set({ values })}
      min={number("min", 0)}
      max={number("max", 100)}
      values={store.state.values}
      disabled={boolean("disabled", false)}
      large={boolean("large", false)}
      className={wrapperStyle}
      title={text("title", "Select Range")}
      valueLabelExtractor={() =>
        `${store.state.values[0]}-${store.state.values[1]}`
      }
    />
  ))
);
