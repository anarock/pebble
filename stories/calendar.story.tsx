import * as React from "react";
import { storiesOf } from "@storybook/react";
import Calendar from "../src/components/Calendar";
import { action } from "@storybook/addon-actions";

storiesOf("Calendar", module).add("Default", () => (
  <Calendar
    onChange={action("change")}
    range={true}
    onApply={action("apply")}
    onClear={action("clear")}
  />
));
