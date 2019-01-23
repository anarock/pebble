import * as React from "react";
import { storiesOf } from "@storybook/react";
import Select from "../src/components/Select";
import { action } from "@storybook/addon-actions";
import Option from "../src/components/Option";
import { withState } from "@dump247/storybook-state";
import { boolean, text } from "@storybook/addon-knobs";
import { Extras } from "../src/components/typings/OptionGroup";
import { all as starWarNames } from "starwars-names";

const options = starWarNames.map((name, i) => ({
  id: i,
  value: name.toLowerCase().replace(/\W/g, "-"),
  label: name
}));

type OptionType = typeof options[0];

interface SingeSelectState {
  searchQuery: string;
  selected?: string;
  value: string;
}

interface MultiSelectState {
  searchQuery: string;
  selected: OptionType[];
  value: string;
}

storiesOf("Components/Select", module)
  .add(
    "Single Select",
    withState<SingeSelectState>({ searchQuery: "", selected: "", value: "" })(
      ({ store }) => (
        <div style={{ width: "330px" }}>
          <Select
            selected={store.state.selected} // The value selected
            value={store.state.value} // To show in input box after selection
            fullWidthDropdown
            onDropdownToggle={action("onDropdownToggle")}
            onChange={(selected: string, e: Extras) => {
              if (selected) {
                store.set({
                  selected,
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
              onChange: (query: string) => {
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
                  key={option.id}
                  value={option.value}
                  label={option.label}
                />
              ))}
          </Select>
        </div>
      )
    )
  )
  .add(
    "Multi Select",
    withState<MultiSelectState>({ searchQuery: "", selected: [], value: "" })(
      ({ store }) => (
        <Select<OptionType>
          multiSelect
          selected={store.state.selected}
          onChange={(val: Array<unknown>) => {
            action("onSelect")(val);
            store.set({ selected: val as OptionType[] });
          }}
          placeholder="Choose Option"
          searchBox={boolean("Search Box", true)}
          onApply={action("onApply")}
          onClear={action("onClear")}
          searchBoxProps={{
            value: store.state.searchQuery,
            onChange: (query: string) => {
              action("searchBoxProps.onChange")(query);
              store.set({ searchQuery: query });
            },
            placeholder: "Search",
            clearable: boolean("searchBoxProps.clearable", true)
          }}
        >
          {options
            .filter(option => {
              if (!boolean("Search Box", true) || !store.state.searchQuery) {
                return true;
              }
              return option.label
                .toLowerCase()
                .includes(store.state.searchQuery.toLowerCase());
            })
            .map(option => (
              <Option<OptionType>
                key={option.id}
                value={option}
                label={option.label}
              />
            ))}
        </Select>
      )
    )
  );
