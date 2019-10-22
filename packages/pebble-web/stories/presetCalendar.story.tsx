import * as React from "react";
import { storiesOf } from "@storybook/react";
import { object } from "@storybook/addon-knobs";
import PresetCalendar from "../src/components/PresetCalendar";
import { action } from "@storybook/addon-actions";
import { colors } from "pebble-shared";
import {
  startOfToday,
  endOfToday,
  startOfYesterday,
  endOfYesterday,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
  startOfQuarter,
  endOfQuarter
} from "date-fns";
import { DropDown } from "../src";

const date = new Date();

storiesOf("Components/PresetCalendar", module).add("Default", () => (
  <DropDown buttonLabel="PresetCalendar">
    {() => (
      <PresetCalendar
        isOpen
        onChange={action("change")}
        maxDate={new Date()}
        onClear={action("clear")}
        tileDots={object("tileDots", [
          {
            timeStamp: Date.now(),
            colors: [colors.blue.base, colors.emerald.base, colors.yellow.base]
          }
        ])}
        onApply={action("apply")}
        range
        presetDateOptions={[
          {
            label: "All Time",
            dateRange: [undefined, undefined]
          },
          {
            label: "Today",
            dateRange: [startOfToday(), endOfToday()]
          },
          {
            label: "Yesterday",
            dateRange: [startOfYesterday(), endOfYesterday()]
          },
          {
            label: "Week till date",
            dateRange: [startOfWeek(date), endOfWeek(date)]
          },
          {
            label: "Month till date",
            dateRange: [startOfMonth(date), endOfMonth(date)]
          },
          {
            label: "Year till date",
            dateRange: [startOfYear(date), endOfYear(date)]
          },
          {
            label: "Quarter till date",
            dateRange: [startOfQuarter(date), endOfQuarter(date)]
          }
        ]}
        initialValue={[undefined, undefined]}
      />
    )}
  </DropDown>
));
