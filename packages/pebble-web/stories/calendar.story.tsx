import * as React from "react";
import { storiesOf } from "@storybook/react";
import { object, number } from "@storybook/addon-knobs";
import Calendar from "../src/components/Calendar";
import { action } from "@storybook/addon-actions";
import { colors } from "pebble-shared";

const LAST_DATE_OF_2018 = new Date(2018, 11, 31);

storiesOf("Components/Calendar", module)
  .add("Single Date", () => (
    <Calendar
      onChange={action("change")}
      onApply={action("apply")}
      onClear={action("clear")}
      tileDots={object("tileDots", [
        {
          timeStamp: LAST_DATE_OF_2018,
          colors: [colors.blue.base, colors.emerald.base, colors.yellow.base]
        }
      ])}
    />
  ))
  .add("Date Range", () => (
    <Calendar
      range
      maxRange={number("maxRange", 5)}
      onChange={action("change")}
      onApply={action("apply")}
      onClear={action("clear")}
      tileDots={object("tileDots", [
        {
          timeStamp: LAST_DATE_OF_2018,
          colors: [colors.blue.base, colors.emerald.base, colors.yellow.base]
        }
      ])}
    />
  ));
