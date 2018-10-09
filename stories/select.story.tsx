import * as React from "react";
import { storiesOf } from "@storybook/react";
import Select from "../src/components/Select";
import { action } from "@storybook/addon-actions";
import Option from "../src/components/Option";
import { withState } from "@dump247/storybook-state";

const options = new Array(20).fill(1).map((_x, i) => ({
  value: `option-${i + 1}`,
  label: `I am an option-${i + 1}`
}));

storiesOf("Select", module)
  .add(
    "Single Select",
    withState({})(({ store }) => (
      <Select
        selected={store.state.selected} // The value selected
        value={store.state.value} // To show in input box after selection
        onChange={(selected, e) => {
          if (selected) {
            store.set({
              selected: selected,
              value: options.find(option => option.value === selected)!.label // Yes, we save the label in value
            });
          }
          action("onSelect")(selected, e);
        }}
        placeholder="Choose Option"
      >
        {options.map(option => (
          <Option
            key={option.value}
            value={option.value}
            label={option.label}
          />
        ))}
      </Select>
    ))
  )
  .add("Multi Select", () => (
    <Select
      onChange={action("onSelect")}
      placeholder="Choose Option"
      multiSelect
      onApply={action("onApply")}
      onClear={action("onClear")}
    >
      {new Array(20).fill(1).map((_x, i) => (
        <Option
          key={i + 1}
          value={`option-${i + 1}`}
          label={`I am an option-${i + 1}`}
        />
      ))}
    </Select>
  ))
  .add("Multi Select with searchbox", () => (
    <Select
      onChange={action("onSelect")}
      placeholder="Choose Option"
      multiSelect
      searchBox
      searchBoxPlaceholder="Search"
      onSearchBoxQueryChange={action("queryChange")}
      onApply={action("onApply")}
      onClear={action("onClear")}
    >
      {new Array(20).fill(1).map((_x, i) => (
        <Option
          key={i + 1}
          value={`option-${i + 1}`}
          label={`I am an option-${i + 1}`}
        />
      ))}
    </Select>
  ));
