import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Radio, RadioGroup } from "../src";
import { withState } from "@dump247/storybook-state";
import { cx, css } from "emotion";
import { colors, typography } from "../src/theme";

export const switchWrap = css({
  display: "flex",
  ...typography.s.regular
});

export const offButton = css({
  border: `1px solid ${colors.gray.lighter}`,
  borderRadius: "3px 0px 0px 3px",
  padding: "10px 20px"
});

export const onButton = css({
  border: `1px solid ${colors.gray.lighter}`,
  borderRadius: "0px 3px 3px 0px",
  padding: "10px 20px"
});

export const selectedButton = css({
  backgroundColor: colors.gray.lighter
});

storiesOf("RadioGroup", module).add(
  "Default",
  withState({ value: "radio" })(({ store }) => (
    <RadioGroup
      selected={store.state.value}
      onChange={value =>
        store.set({
          value: value as string
        })
      }
      name="test"
    >
      <Radio value="radio" label="I am radio button" />
      <Radio value="radio1" label="I am radio button" />
    </RadioGroup>
  ))
);

interface TwoState {
  value: "ON" | "OFF";
}

interface ThreeState {
  value: "A" | "B" | "C";
}

storiesOf("RadioGroup", module).add(
  "two options",
  withState<TwoState>({ value: "ON" })(({ store }) => (
    <RadioGroup
      selected={store.state.value}
      onChange={value => {
        // @ts-ignore
        store.set({ value });
      }}
      name="Toggle"
      className={switchWrap}
    >
      <Radio value="OFF" label="">
        {() => (
          <div
            className={cx({
              [offButton]: true,
              [selectedButton]: store.state.value === "OFF"
            })}
          >
            {"OFF"}
          </div>
        )}
      </Radio>
      <Radio value="ON" label="">
        {() => (
          <div
            className={cx({
              [onButton]: true,
              [selectedButton]: store.state.value === "ON"
            })}
          >
            {"ON"}
          </div>
        )}
      </Radio>
    </RadioGroup>
  ))
);

storiesOf("RadioGroup", module).add(
  "three options",
  withState<ThreeState>({ value: "A" })(({ store }) => (
    <RadioGroup
      selected={store.state.value}
      onChange={value => {
        // @ts-ignore
        store.set({ value });
      }}
      name="Toggle"
      className={switchWrap}
    >
      <Radio value="C" label="">
        {() => (
          <div
            className={cx({
              [offButton]: true,
              [selectedButton]: store.state.value === "C"
            })}
          >
            {"C"}
          </div>
        )}
      </Radio>
      <Radio value="B" label="">
        {() => (
          <div
            className={cx({
              [onButton]: true,
              [selectedButton]: store.state.value === "B"
            })}
          >
            {"B"}
          </div>
        )}
      </Radio>
      <Radio value="A" label="">
        {() => (
          <div
            className={cx({
              [onButton]: true,
              [selectedButton]: store.state.value === "A"
            })}
          >
            {"A"}
          </div>
        )}
      </Radio>
    </RadioGroup>
  ))
);
