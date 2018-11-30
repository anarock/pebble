import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import LocationAutoSuggest from "../src/components/LocationAutoSuggest";

storiesOf("LocationAutoSuggest", module).add("simple", () => (
  <LocationAutoSuggest
    value="Mumbai"
    onChange={() => {
      action("onChange");
    }}
    onSelect={() => {
      action("onSelect");
    }}
  />
));
