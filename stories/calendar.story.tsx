import * as React from "react";
import { storiesOf } from "@storybook/react";
import { object } from "@storybook/addon-knobs";
import Calendar from "../src/components/Calendar";
import { action } from "@storybook/addon-actions";
import { colors } from "../src/theme";

storiesOf("Components/Calendar", module)
  .add("Single Date", () => (
    <Calendar
      onChange={action("change")}
      onApply={action("apply")}
      onClear={action("clear")}
      maxDate={new Date()}
      tileDots={object("tileDots", [
        {
          timeStamp: Date.now(),
          colors: [colors.blue.base, colors.emerald.base, colors.yellow.base]
        }
      ])}
    />
  ))
  .add("Date Range", () => (
    <Calendar
      range
      onChange={action("change")}
      onApply={action("apply")}
      onClear={action("clear")}
      maxDate={new Date()}
      tileDots={object("tileDots", [
        {
          timeStamp: Date.now(),
          colors: [colors.blue.base, colors.emerald.base, colors.yellow.base]
        }
      ])}
    />
  ));
