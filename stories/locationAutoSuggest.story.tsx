import * as React from "react";
import { storiesOf } from "@storybook/react";
import LocationAutoSuggest from "../src/components/LocationAutoSuggest";
import Input from "../src/components/Input";
import { withState } from "@dump247/storybook-state";
import { css } from "emotion";
import Button from "../src/components/Button";

storiesOf("Components/LocationAutoSuggest", module).add(
  "simple",
  withState({ value: "", location: "", keyPresent: false })(({ store }) => (
    <>
      <Input
        onChange={value => store.set({ value })}
        value={store.state.value}
        placeholder="Enter Google Maps API Key"
        className={css({
          width: 300
        })}
      />
      <Button
        type="link"
        onClick={() => {
          store.set({
            keyPresent: true
          });
        }}
        className={css({
          marginBottom: 20
        })}
      >
        Submit
      </Button>
      {store.state.keyPresent && (
        <LocationAutoSuggest
          value={store.state.location}
          onChange={value => {
            store.set({
              location: value
            });
          }}
          onSelect={value => {
            store.set({
              location: value
            });
          }}
          googleMapsApiKey={store.state.value}
        />
      )}
    </>
  ))
);
