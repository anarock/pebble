import * as React from "react";
import { storiesOf } from "@storybook/react";
import TypeAhead from "../src/components/TypeAhead";
import { action } from "@storybook/addon-actions";
import { css } from "emotion";
import Option from "../src/components/Option";
import { withState } from "@dump247/storybook-state";

storiesOf("Typeahead", module).add(
  "simple",
  withState({ selected: null })(({ store }) => (
    <TypeAhead
      className={css({
        width: 400
      })}
      placeholder="Typeahead"
      onChange={action("change")}
      onSelect={val => {
        store.set({ selected: val });
      }}
      valueExtractor={value => `${value} is the best option`}
      selected={store.state.selected}
      onClear={action("clear")}
    >
      {new Array(5).fill(1).map((_x, i) => (
        <Option key={i + 1} value={i + 1} label={`I am an option - ${i + 1}`} />
      ))}
    </TypeAhead>
  ))
);
