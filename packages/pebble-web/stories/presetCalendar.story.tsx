import * as React from "react";
import { storiesOf } from "@storybook/react";
import PresetCalendar from "../src/components/PresetCalendar";
import { action } from "@storybook/addon-actions";
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
        onApply={action("apply")}
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
            label: "Quarter till date",
            dateRange: [startOfQuarter(date), endOfQuarter(date)]
          },
          {
            label: "Year till date",
            dateRange: [startOfYear(date), endOfYear(date)]
          }
        ]}
        defaultValue={[undefined, undefined]}
      />
    )}
  </DropDown>
));
