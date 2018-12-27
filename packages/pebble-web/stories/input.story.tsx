import * as React from "react";
import { storiesOf } from "@storybook/react";
import Input from "../src/components/Input";
import { boolean, select, text } from "@storybook/addon-knobs";
import { css } from "emotion";
import DateInput from "../src/components/DateInput";
import { withState } from "@dump247/storybook-state";
import { InputProps } from "../src/components/typings/Input";

const className = css({
  width: 400
});

const type = ["text", "date", "password", "email"];

interface DateInputStoryState {
  value?: number;
}

storiesOf("Components/Input", module)
  .add(
    "Material",
    withState({ value: "" })(({ store }) => (
      <Input
        className={className}
        onChange={value => store.set({ value })}
        type={select("type", type, type[0]) as InputProps["type"]}
        placeholder={text("placeholder", "Name")}
        fixLabelAtTop={boolean("fixLabelAtTop", false)}
        required={boolean("required", false)}
        value={store.state.value}
        readOnly={boolean("readOnly", false)}
        disabled={boolean("disabled", false)}
        message={text("message", "Info Message")}
        errorMessage={text("errorMessage", "Error Message")}
        successMessage={text("successMessage", "Success Message")}
        loading={boolean("loading", false)}
      />
    ))
  )
  .add(
    "TextArea",
    withState({ value: "" })(({ store }) => (
      <Input
        textArea
        className={className}
        onChange={value => store.set({ value })}
        placeholder={text("placeholder", "Name")}
        fixLabelAtTop={boolean("fixLabelAtTop", false)}
        required={boolean("required", false)}
        value={store.state.value}
        readOnly={boolean("readOnly", false)}
        disabled={boolean("disabled", false)}
        message={text("message", "Info Message")}
        errorMessage={text("errorMessage", "Error Message")}
        successMessage={text("successMessage", "Success Message")}
        loading={boolean("loading", false)}
      />
    ))
  )
  .add(
    "Date",
    withState<DateInputStoryState>({ value: undefined })(({ store }) => (
      <div style={{ width: 300 }}>
        <DateInput
          placeholder="Date"
          value={store.state.value}
          onChange={value => store.set({ value })}
        />
      </div>
    ))
  );
