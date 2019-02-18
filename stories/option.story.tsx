import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Option, colors } from "../src";
import { withState } from "@dump247/storybook-state";
import { boolean } from "@storybook/addon-knobs";
import { css, cx } from "emotion";
import { labelWrap } from "../src/components/styles/Options.styles";

const selectedOption = css({
  background: colors.violet.lightest,
  color: colors.violet.base,
  "&:hover": { background: colors.violet.lightest }
});
const optionWrap = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%"
});

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
      <Option
        onChange={() => store.set({ checked: !store.state.checked })}
        value="option"
        label="I am a test option"
        disabled={boolean("disabled", false)}
        className={store.state.checked ? selectedOption : ""}
      >
        {({ label }) => (
          <div className={optionWrap}>
            <div className={labelWrap}>{label}</div>
            <i
              className={cx(
                "pi pi-arrow-drop-down",
                css({
                  color: colors.gray.base,
                  fontSize: "8px",
                  transform: "rotate(270deg)"
                })
              )}
            />
          </div>
        )}
      </Option>
    </div>
  ))
);
