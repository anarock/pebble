import * as React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../src/components/Button";
import Toast from "../src/components/Toast";
import { select } from "@storybook/addon-knobs";

storiesOf("Components/Toast", module).add("Default", () => (
  <React.Fragment>
    <Button
      onClick={() =>
        Toast.show("hello", "success", {
          time: 1000,
          position: select(
            "position",

            [
              "BOTTOM",
              "BOTTOM_LEFT",
              "BOTTOM_RIGHT",
              "TOP",
              "TOP_LEFT",
              "TOP_RIGHT"
            ],

            "BOTTOM"
          )
        })
      }
    >
      Show Toast
    </Button>
    <Toast defaultTime={10000} defaultPosition={"TOP"} />
  </React.Fragment>
));
