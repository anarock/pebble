import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Radio, RadioGroup } from "../src";
import { withState } from "@dump247/storybook-state";
import { cx } from "emotion";
import {
  setWrap,
  offButton,
  selectedButton,
  onButton
} from "../src/components/__tests__/fixtures/radioSet.style";

storiesOf("Components/RadioGroup", module).add(
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

storiesOf("Components/RadioGroup", module).add(
  "two options",
  withState<TwoState>({ value: "ON" })(({ store }) => (
    <RadioGroup
      selected={store.state.value}
      onChange={value => {
        // @ts-ignore
        store.set({ value });
      }}
      name="set of radios"
      className={setWrap}
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

storiesOf("Components/RadioGroup", module).add(
  "three options",
  withState<ThreeState>({ value: "A" })(({ store }) => (
    <RadioGroup
      selected={store.state.value}
      onChange={value => {
        // @ts-ignore
        store.set({ value });
      }}
      name="set of radios"
      className={setWrap}
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
