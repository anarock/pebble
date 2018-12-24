import * as React from "react";
import { storiesOf } from "@storybook/react";
import Select from "../src/components/Select";
import { action } from "@storybook/addon-actions";
import Option from "../src/components/Option";
import { withState } from "@dump247/storybook-state";
import { boolean, text } from "@storybook/addon-knobs";
import { SingleSelected } from "../src/components/typings/Select";
import { Extras } from "../src/components/typings/OptionGroup";

const options = new Array(20).fill(1).map((_x, i) => ({
  value: `option-${i + 1}`,
  label: `I am an option-${i + 1}`
}));

interface State {
  searchQuery: string;
  selected?: string | number;
  value?: string;
  multiSelected?: string[] | number[];
}

storiesOf("Components/Select", module)
  .add(
    "Single Select",
    withState<State>({ searchQuery: "", selected: "", value: "" })(
      ({ store }) => (
        <div style={{ width: "330px" }}>
          <Select
            selected={store.state.selected} // The value selected
            value={store.state.value} // To show in input box after selection
            fullWidthDropdown
            onDropdownToggle={action("onDropdownToggle")}
            onChange={(selected: SingleSelected, e: Extras) => {
              if (selected) {
                store.set({
                  selected: selected as string,
                  value: (() => {
                    const option = options.find(o => o.value === selected);
                    return option && option.label;
                  })()
                });
              }
              action("onSelect")(selected, e);
            }}
            placeholder="Choose Option"
            searchBox={boolean("searchBox", false)}
            searchBoxProps={{
              placeholder: text("searchBoxProps.placeholder", "Search"),
              onChange: query => {
                action("searchBoxProps.onChange")(query);
                store.set({ searchQuery: query });
              },
              value: store.state.searchQuery
            }}
            disabled={boolean("disabled", false)}
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
      selected={undefined} // TODO:Aziz add withState
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
  .add(
    "Multi Select with searchbox",
    withState<State>({ searchQuery: "", multiSelected: undefined })(
      ({ store }) => (
        <Select
          onChange={val => {
            action("onSelect")(val);
            store.set({ multiSelected: val as number[] | string[] });
          }}
          placeholder="Choose Option"
          multiSelect
          searchBox
          selected={store.state.multiSelected} // TODO:Aziz add withState
          onApply={action("onApply")}
          onClear={action("onClear")}
          searchBoxProps={{
            value: store.state.searchQuery,
            onChange: query => {
              action("searchBoxProps.onChange")(query);
              store.set({ searchQuery: query });
            },
            placeholder: "Search",
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
      )
    )
  );
