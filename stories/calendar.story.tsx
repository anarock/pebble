import * as React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, object } from "@storybook/addon-knobs";
import Calendar from "../src/components/Calendar";
import { action } from "@storybook/addon-actions";
import { colors } from "../src/theme";

storiesOf("Components/Calendar", module).add("Default", () => (
  <Calendar
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
));
