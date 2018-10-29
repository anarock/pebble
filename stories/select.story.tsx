import * as React from "react";
import { storiesOf } from "@storybook/react";
import Select from "../src/components/Select";
import { action } from "@storybook/addon-actions";
import Option from "../src/components/Option";
import { withState } from "@dump247/storybook-state";
import { boolean, text } from "@storybook/addon-knobs";

const options = new Array(20).fill(1).map((_x, i) => ({
  value: `option-${i + 1}`,
  label: `I am an option-${i + 1}`
}));

interface State {
  searchQuery: string;
  selected: string;
  value: string;
}

storiesOf("Select", module)
  .add(
    "Single Select",
    withState<State>({ searchQuery: "", selected: "", value: "" })(
      ({ store }) => (
        <div style={{ width: "330px" }}>
          <Select
            selected={store.state.selected} // The value selected
            value={store.state.value} // To show in input box after selection
            fullWidthDropdown
            onChange={(selected, e) => {
              if (selected) {
                store.set({
                  selected: selected as string,
                  value: options.find(option => option.value === selected)!
                    .label // Yes, we save the label in value
                });
              }
              action("onSelect")(selected, e);
            }}
            placeholder="Choose Option"
            searchBox={boolean("searchBox", false)}
            searchBoxProps={{
              placeholder: text("searchBoxProps.placeholder", "Search"),
              onChange: query => store.set({ searchQuery: query })
            }}
          >
            {options
              .filter(option => {
                if (!boolean("searchBox", false) || !store.state.searchQuery) {
                  return true;
                }
                return option.label.includes(store.state.searchQuery);
              })
              .map(option => (
                <Option
                  key={option.value}
                  value={option.value}
                  label={option.label}
                />
              ))}
          </Select>
        </div>
      )
    )
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
      onApply={action("onApply")}
      onClear={action("onClear")}
      searchBoxProps={{
        onChange: action("searchBoxProps.onChange"),
        placeholder: "Search",
        onClear: action("searchBoxProps.onClear"),
        clearable: boolean("searchBoxProps.clearable", true)
      }}
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
