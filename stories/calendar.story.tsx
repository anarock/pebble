import * as React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, object } from "@storybook/addon-knobs";
import Calendar from "../src/components/Calendar";
import { action } from "@storybook/addon-actions";
import { colors } from "../src/theme";
import { css } from "emotion";
import { startOfDay, endOfDay } from "date-fns";

// TO-DO: Write separately stories for both Calendars.

const quickCalProps = {
  hideShadow: true,
  className: css({ padding: "10px 0 0 0" })
};

storiesOf("Calendar", module).add("Default", () => (
  <Calendar
    quickDates
    quickDateOptions={[
      {
        label: "Today",
        valueExtractor: () => {
          action("Today")([startOfDay(new Date()), endOfDay(new Date())]);
        }
      },
      {
        label: "Yesterday",
        valueExtractor: () => {
          const date = new Date().setDate(new Date().getDate() - 1);
          action("Yesterday")([startOfDay(date), endOfDay(date)]);
        }
      },
      {
        label: "Tomorrow",
        valueExtractor: () => {
          const date = new Date().setDate(new Date().getDate() + 1);
          action("Tomorrow")([startOfDay(date), endOfDay(date)]);
        }
      }
    ]}
    onChange={action("change")}
    range={boolean("range", true)}
    onApply={action("apply")}
    onClear={action("clear")}
    maxDate={new Date()}
    {...quickCalProps}
    tileDots={object("tileDots", [
      {
        timeStamp: Date.now(),
        colors: [colors.blue.base, colors.emerald.base, colors.yellow.base]
      }
    ])}
  />
));
