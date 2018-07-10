import * as React from "react";
import { storiesOf } from "@storybook/react";
import Input from "../src/components/Input";
import { boolean, select, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { css } from "react-emotion";
import DateInput from "../src/components/DateInput";

const className = css({
  width: 400
});

const type = ["text", "date", "password"];

storiesOf("Input", module)
  .add("Material", () => (
    <Input
      className={className}
      onChange={action("change")}
      type={select("type", type)}
      placeholder={text("placeholder", "Name")}
      fixLabelAtTop={boolean("fixLabelAtTop")}
      required={boolean("required")}
      value={text("value")}
      readOnly={boolean("readOnly")}
      disabled={boolean("disabled")}
      message={text("message")}
      errorMessage={text("errorMessage")}
      successMessage={text("successMessage")}
      textArea={boolean("textArea")}
    />
  ))
  .add("Date", () => (
    <DateInput placeholder="Date" onChange={action("change date")} />
  ));
