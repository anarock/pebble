import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Radio, RadioGroup } from "../src";
import { withState } from "@dump247/storybook-state";

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
      styles={setWrap}
    >
      <Radio
        value="OFF"
        label=""
        styles={[
          unSelectedButton,
          store.state.value === "OFF" && selectedButton
        ]}
      >
        {() => "OFF"}
      </Radio>
      <Radio
        value="ON"
        label=""
        styles={[
          unSelectedButton,
          store.state.value === "ON" && selectedButton
        ]}
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
      styles={setWrap}
    >
      <Radio
        value="C"
        label=""
        styles={[unSelectedButton, store.state.value === "C" && selectedButton]}
      >
        {() => "C"}
      </Radio>
      <Radio
        value="B"
        label=""
        styles={[unSelectedButton, store.state.value === "B" && selectedButton]}
      >
        {() => "B"}
      </Radio>
      <Radio
        value="A"
        label=""
        styles={[unSelectedButton, store.state.value === "A" && selectedButton]}
      >
        {() => "A"}
      </Radio>
    </RadioGroup>
  ))
);
