import * as React from "react";
import { storiesOf } from "@storybook/react";
import Search from "../src/components/Search";
import { action } from "@storybook/addon-actions";
import { select, text, boolean } from "@storybook/addon-knobs";

const type = ["small", "large", "table"];

storiesOf("Search", module).add("Default", () => (
  <Search
    placeholder={text("placeholder", "Search")}
    onChange={action("change")}
    type={select("type", type, "small")}
    showSearchIcon={boolean("Show search icon", true)}
  />
));
