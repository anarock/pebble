import { storiesOf } from "@storybook/react";
import { withState } from "@dump247/storybook-state";
import { constants } from "../src";
import OptionGroupCheckBox from "../src/components/OptionGroupCheckBox";
import Option from "../src/components/Option";
import * as React from "react";

storiesOf("Components/OptionGroupCheckBox", module).add(
  "with Searchbox",
  withState({
    value: ["option-2"],
    searchBoxValue: ""
  })(({ store }) => (
    <div
      style={{
        boxShadow: constants.boxShadow.elevated,
        borderRadius: constants.borderRadius,
        width: 300
      }}
    >
      <OptionGroupCheckBox
        selected={store.state.value}
        searchBox
        searchBoxProps={{
          placeholder: "Search",
          onChange: v => {
            store.set({ searchBoxValue: v });
          },
          value: store.state.searchBoxValue
        }}
        onChange={value =>
          store.set({
            value: value as string[]
          })
        }
        onApply={() => {}}
        onClear={() => {}}
      >
        <Option value="option-1" label="I am an option" />
        <Option value="option-2" label="I am an option" />
        <Option value="option-3" label="I am an option" />
        <Option value="option-4" label="I am an option" />
        <Option value="option-5" label="I am an option" />
        <Option value="option-6" label="I am an option" />
        <Option value="option-7" label="I am an option" />
        <Option value="option-8" label="I am an option" />
        <Option value="option-11" label="I am an option" />
        <Option value="option-21" label="I am an option" />
        <Option value="option-31" label="I am an option" />
        <Option value="option-41" label="I am an option" />
        <Option value="option-51" label="I am an option" />
        <Option value="option-61" label="I am an option" />
        <Option value="option-71" label="I am an option" />
        <Option value="option-81" label="I am an option" />
      </OptionGroupCheckBox>
    </div>
  ))
);
