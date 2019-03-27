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
            "bottom",

            {
              BOTTOM_LEFT: Toast.Position.BOTTOM_LEFT,
              BOTTOM_CENTER: Toast.Position.BOTTOM_CENTER,
              BOTTOM_RIGHT: Toast.Position.BOTTOM_RIGHT,

              TOP_LEFT: Toast.Position.TOP_LEFT,
              TOP_CENTER: Toast.Position.TOP_CENTER,
              TOP_RIGHT: Toast.Position.TOP_RIGHT
            },

            Toast.Position.BOTTOM_CENTER
          )
        })
      }
    >
      Show Toast
    </Button>
    <Toast defaultTime={10000} />
  </React.Fragment>
));
