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
  countryCode: string;
  phone: string;
}

storiesOf("Components/PhoneNumberInput", module).add(
  "Material",
  withState<State>({ countryCode: "+91", phone: "" })(({ store }) => (
    <PhoneNumberInput
      countryCode={store.state.countryCode}
      phone={store.state.phone}
      placeholder="Alternate Phone Number"
      onChange={arg => {
        const { countryCode, phone } = arg;
        action("onChange")(arg);
        store.set({
          countryCode: `${countryCode}`,
          phone
        });
      }}
    >
      {countries.map(country => (
        <Option
          key={country.id}
          value={country.country_code}
          label={`${country.name} (${country.country_code})`}
        />
      ))}
    </PhoneNumberInput>
  ))
);
