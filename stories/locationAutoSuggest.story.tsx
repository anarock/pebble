import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import LocationAutoSuggest from "../src/components/LocationAutoSuggest";
import Input from "../src/components/Input";
import { withState } from "@dump247/storybook-state";
import { css } from "emotion";

storiesOf("Components/LocationAutoSuggest", module).add(
  "simple",
  withState({ value: "" })(({ store }) => (
    <>
      <Input
        onChange={value => store.set({ value })}
        value={store.state.value}
        placeholder="Enter Google Maps API Key"
        className={css({
          width: 300
        })}
      />
      <LocationAutoSuggest
        value="Mumbai"
        onChange={() => {
          action("onChange");
        }}
        onSelect={() => {
          action("onSelect");
        }}
        googleMapsApiKey={store.state.value}
      />
    </>
  ))
);
