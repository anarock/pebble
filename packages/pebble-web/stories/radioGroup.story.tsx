import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Radio, RadioGroup } from "../src";
import { withState } from "@dump247/storybook-state";
import { cx } from "emotion";
import {
  setWrap,
  selectedButton,
  unSelectedButton
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

storiesOf("Recipes/RadioGroup", module).add(
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
      <Radio
        value="OFF"
        label=""
        className={cx({
          [unSelectedButton]: true,
          [selectedButton]: store.state.value === "OFF"
        })}
      >
        {() => "OFF"}
      </Radio>
      <Radio
        value="ON"
        label=""
        className={cx({
          [unSelectedButton]: true,
          [selectedButton]: store.state.value === "ON"
        })}
      >
        {() => "ON"}
      </Radio>
    </RadioGroup>
  ))
);

storiesOf("Recipes/RadioGroup", module).add(
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
      <Radio
        value="C"
        label=""
        className={cx({
          [unSelectedButton]: true,
          [selectedButton]: store.state.value === "C"
        })}
      >
        {() => "C"}
      </Radio>
      <Radio
        value="B"
        label=""
        className={cx({
          [unSelectedButton]: true,
          [selectedButton]: store.state.value === "B"
        })}
      >
        {() => "B"}
      </Radio>
      <Radio
        value="A"
        label=""
        className={cx({
          [unSelectedButton]: true,
          [selectedButton]: store.state.value === "A"
        })}
      >
        {() => "A"}
      </Radio>
    </RadioGroup>
  ))
);
