import { storiesOf } from "@storybook/react";
import { withState } from "@dump247/storybook-state";
import { constants } from "../src";
import OptionGroupRadio from "../src/components/OptionGroupRadio";
import Option from "../src/components/Option";
import * as React from "react";

storiesOf("Components/OptionGroupRadio", module).add(
  "Default",
  withState({ value: "option-2" })(({ store }) => (
    <div
      style={{
        boxShadow: constants.boxShadow.base,
        borderRadius: constants.borderRadius,
        width: 300
      }}
    >
      <OptionGroupRadio
        selected={store.state.value}
        onChange={value =>
          store.set({
            value: value as string
          })
        }
      >
        <Option value="option-1" label="I am an option" />
        <Option value="option-2" label="I am an option" />
        <Option value="option-3" label="I am an option" />
        <Option value="option-4" label="I am an option" />
        <Option value="option-5" label="I am an option" />
        <Option value="option-6" label="I am an option" />
        <Option value="option-7" label="I am an option" />
        <Option value="option-8" label="I am an option" />
      </OptionGroupRadio>
    </div>
  ))
);
