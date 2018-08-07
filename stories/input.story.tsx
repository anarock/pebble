import * as React from "react";
import { storiesOf } from "@storybook/react";
import Input from "../src/components/Input";
import { boolean, select, text } from "@storybook/addon-knobs";
import { css } from "emotion";
import DateInput from "../src/components/DateInput";
import { withState } from "@dump247/storybook-state";

const className = css({
  width: 400
});

const type = ["text", "date", "password", "email"];

storiesOf("Input", module)
  .add(
    "Material",
    withState({ value: "" })(({ store }) => (
      <Input
        className={className}
        onChange={value => store.set({ value })}
        type={select("type", type)}
        placeholder={text("placeholder", "Name")}
        fixLabelAtTop={boolean("fixLabelAtTop")}
        required={boolean("required")}
        value={store.state.value}
        readOnly={boolean("readOnly")}
        disabled={boolean("disabled")}
        message={text("message")}
        errorMessage={text("errorMessage")}
        successMessage={text("successMessage")}
        textArea={boolean("textArea")}
        loading={boolean("loading")}
      />
    ))
  )
  .add(
    "Date",
    withState({ value: "" })(({ store }) => (
      <div style={{ width: 300 }}>
        <DateInput
          placeholder="Date"
          value={store.state.value}
          onChange={value => store.set({ value })}
        />
      </div>
    ))
  );
