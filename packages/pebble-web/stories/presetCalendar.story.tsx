import * as React from "react";
import { storiesOf } from "@storybook/react";
import { object } from "@storybook/addon-knobs";
import PresetCalendar from "../src/components/PresetCalendar";
import { action } from "@storybook/addon-actions";
import { colors } from "../src/theme";
import { css } from "emotion";

storiesOf("Components/PresetCalendar", module).add("Default", () => (
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
    customDateInputLabel={({ toggle }) => {
      return (
        <div onClick={toggle} className={css({ cursor: "pointer" })}>
          Custom Date Input
        </div>
      );
    }}
  />
));
