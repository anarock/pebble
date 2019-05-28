import * as React from "react";
import { storiesOf } from "@storybook/react";
import Search from "../src/components/Search";
import { action } from "@storybook/addon-actions";
import { select, text, boolean } from "@storybook/addon-knobs";
import { SearchProps } from "../src/components/typings/Search";
import { withState } from "@dump247/storybook-state";

const type = ["small", "large", "table"] as Array<SearchProps["type"]>;

interface State {
  query: string;
}

storiesOf("Components/Search", module).add(
  "Default",
  withState<State>({ query: "" })(({ store }) => (
    <Search
      placeholder={text("placeholder", "Search")}
      onChange={query => {
        action("change")(query);
        store.set({ query });
      }}
      type={select("type", type, "small")}
      showSearchIcon={boolean("showSearchIcon", true)}
      clearable={boolean("showClearButton", true)}
      value={store.state.query}
    />
  ))
);
