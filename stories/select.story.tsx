import * as React from "react";
import { storiesOf } from "@storybook/react";
import Select from "../src/components/Select";
import { action } from "@storybook/addon-actions";
import Option from "../src/components/Option";
import { withState } from "@dump247/storybook-state";

storiesOf("Select", module)
  .add(
    "Single Select",
    withState({ selected: null })(({ store }) => (
      <Select
        onChange={val => {
          store.set({ selected: val });
          action("onSelect")(val);
        }}
        placeholder="Choose Option"
        value={store.state.selected}
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
