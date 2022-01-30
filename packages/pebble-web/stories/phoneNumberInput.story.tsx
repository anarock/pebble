import * as React from "react";
import { storiesOf } from "@storybook/react";
import PhoneNumberInput from "../src/components/PhoneNumberInput";
// import { boolean, select, text } from "@storybook/addon-knobs";
// import { css } from "emotion";
import { withState } from "@dump247/storybook-state";
import Option from "../src/components/Option";
import countries from "../src/components/__tests__/fixtures/countrycodes";
import { action } from "@storybook/addon-actions";

interface State {
  country: typeof countries[0];
  phone: string;
}

storiesOf("Components/PhoneNumberInput", module).add(
  "Material",
  withState<State>({ country: countries[0], phone: "" })(({ store }) => (
    <PhoneNumberInput
      country={store.state.country}
      codeExtractor={country => country.country_code}
      phone={store.state.phone}
      placeholder="Alternate Phone Number"
      onChange={arg => {
        const { country, phone } = arg;
        action("onChange")(arg);
        store.set({
          country,
          phone
        });
      }}
    >
      {countries.map(country => (
        <Option
          key={country.id}
          value={country}
          label={`${country.name} (${country.country_code})`}
        />
      ))}
    </PhoneNumberInput>
  ))
);
