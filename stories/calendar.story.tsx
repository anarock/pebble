import * as React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, object } from "@storybook/addon-knobs";
import Calendar from "../src/components/Calendar";
import { action } from "@storybook/addon-actions";
import { colors } from "../src/theme";
import {
  endOfTomorrow,
  endOfYesterday,
  startOfTomorrow,
  startOfYesterday,
  format
} from "date-fns";
import { withState } from "@dump247/storybook-state";
import { isArray } from "util";

interface State {
  selected?: Date[] | Date;
}

storiesOf("Calendar", module)
  .add("Default", () => (
    <Calendar
      quickDates={boolean("quickDates", true)}
      onChange={action("change")}
      range={boolean("range", true)}
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
  .add(
    "Custom label",
    withState<State>({ selected: undefined })(({ store }) => (
      <Calendar
        quickDates
        quickDateOptions={[
          {
            label: "Yesterday",
            dateRange: () => [startOfYesterday(), endOfYesterday()]
          },
          {
            label: "Tomorrow",
            dateRange: () => [startOfTomorrow(), endOfTomorrow()]
          }
        ]}
        onChange={action("change")}
        range={boolean("range", true)}
        onApply={date => {
          store.set({ selected: date });
        }}
        onClear={action("clear")}
        customDateInputLabel={({ toggle }) => {
          return (
            <div onClick={toggle}>
              {store.state.selected && isArray(store.state.selected)
                ? `${format(store.state.selected[0], "DD MMM, YY")} - ${format(
                    store.state.selected[1],
                    "DD MMM, YY"
                  )}`
                : "Select Date"}
            </div>
          );
        }}
      />
    ))
  );
