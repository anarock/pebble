import * as React from "react";
import { storiesOf } from "@storybook/react";
import { object } from "@storybook/addon-knobs";
import Calendar from "../src/components/Calendar";
import { action } from "@storybook/addon-actions";
import { colors } from "../src/theme";

const LAST_DATE_OF_YEAR = new Date(new Date().getFullYear(), 11, 31);

storiesOf("Components/Calendar", module)
  .add("Single Date", () => (
    <Calendar
      onChange={action("change")}
      onApply={action("apply")}
      onClear={action("clear")}
      maxDate={LAST_DATE_OF_YEAR}
      tileDots={object("tileDots", [
        {
          timeStamp: LAST_DATE_OF_YEAR,
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
      maxDate={LAST_DATE_OF_YEAR}
      tileDots={object("tileDots", [
        {
          timeStamp: LAST_DATE_OF_YEAR,
          colors: [colors.blue.base, colors.emerald.base, colors.yellow.base]
        }
      ])}
    />
  ));
