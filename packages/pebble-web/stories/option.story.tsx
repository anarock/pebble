import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Option } from "../src";
import { withState } from "@dump247/storybook-state";
import { boolean } from "@storybook/addon-knobs";
import { css } from "emotion";

storiesOf("Components/Option", module).add(
  "Default",
  withState({ checked: false })(({ store }) => (
    <div style={{ width: 200 }}>
      <Option
        isSelected={store.state.checked}
        onChange={() => store.set({ checked: !store.state.checked })}
        value="option"
        label="I am an option"
        multiSelect
        disabled={boolean("disabled", false)}
      />
      <Option
        isSelected={store.state.checked}
        onChange={() => store.set({ checked: !store.state.checked })}
        value="option"
        label="I am an option with very long text wrapped"
        multiSelect
        labelClassName={css({
          whiteSpace: "normal"
        })}
        disabled={boolean("disabled", false)}
      />
      <Option
        isSelected={store.state.checked}
        onChange={() => store.set({ checked: !store.state.checked })}
        value="option"
        label="I am an option with very long text wrapped"
        multiSelect
        disabled={boolean("disabled", false)}
      />
    </div>
  ))
);
