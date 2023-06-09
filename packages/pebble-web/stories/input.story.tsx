import * as React from "react";
import { storiesOf } from "@storybook/react";
import Input from "../src/components/Input";
import { boolean, select, text } from "@storybook/addon-knobs";
import { css, cx } from "emotion";
import DateInput, { BrowserBasedDateInput } from "../src/components/DateInput";
import { withState } from "@dump247/storybook-state";
import { InputProps } from "../src/components/typings/Input";
import { action } from "@storybook/addon-actions";
import NativeDateInput from "../src/components/NativeDateInput";
import { UserAgentInfoProvider } from "../src/utils/useragent";
import SecondaryInput from "../src/components/SecondaryInput";
import { PebbleIcon } from "pebble-shared";

const className = css({
  width: 400
});

const type = ["text", "date", "password", "email", "number", "tel"];
const dateInputTypes: Array<"Pebble Calendar" | "Native" | "Browser Based"> = [
  "Pebble Calendar",
  "Native",
  "Browser Based"
];

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
        leftElement={
          boolean("use leftElement", false)
            ? () => (
                <i
                  className={cx(
                    css({ padding: "0 10px" }),
                    "pi pi-" +
                      select(
                        "leftElement Icon",
                        PebbleIcon,
                        PebbleIcon.AccountCircle
                      )
                  )}
                />
              )
            : undefined
        }
        rightElement={
          boolean("use rightElement", false)
            ? () => (
                <div style={{ padding: "0 12px" }}>
                  {store.state.value.length}
                </div>
              )
            : undefined
        }
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
    withState<DateInputStoryState>({ value: undefined })(({ store }) => {
      const dateInputType: typeof dateInputTypes[0] = select(
        "Calendar Type",
        dateInputTypes,
        dateInputTypes[0]
      );
      const dateInputProps = {
        placeholder: "Date",
        value: store.state.value,
        onChange: (value?: number) => {
          store.set({ value });
          action("date")(value);
        }
      };
      return (
        <div style={{ width: 300 }}>
          {dateInputType === "Pebble Calendar" && (
            <DateInput
              {...dateInputProps}
              errorMessage={text("errorMessage", "Calendar Error Message")}
              inputProps={{
                errorMessage: text(
                  "inputProps[errorMessage]",
                  "Input Error Message"
                )
              }}
              disabled={boolean("disabled", false)}
            />
          )}
          {dateInputType === "Native" && (
            <NativeDateInput
              {...dateInputProps}
              disabled={boolean("disabled", false)}
            />
          )}
          {dateInputType === "Browser Based" && (
            <UserAgentInfoProvider userAgent={navigator.userAgent}>
              <BrowserBasedDateInput
                {...dateInputProps}
                disabled={boolean("disabled", false)}
              />
            </UserAgentInfoProvider>
          )}
        </div>
      );
    })
  )
  .add(
    "Secondary",
    withState({ value: "" })(({ store }) => (
      <SecondaryInput
        placeholder={text("placeholder", "Secondary")}
        className={className}
        onChange={value => store.set({ value })}
        value={store.state.value}
        infoText={text("infoText", "InfoText")}
        required={boolean("required", false)}
        readOnly={boolean("readOnly", false)}
        disabled={boolean("disabled", false)}
        message={text("message", "Info Message")}
        errorMessage={text("errorMessage", "Error Message")}
        successMessage={text("successMessage", "Success Message")}
        loading={boolean("loading", false)}
      />
    ))
  );
