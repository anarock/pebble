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

            {
              BOTTOM: Toast.Position.BOTTOM,
              BOTTOM_LEFT: Toast.Position.BOTTOM_LEFT,
              BOTTOM_RIGHT: Toast.Position.BOTTOM_RIGHT,

              TOP: Toast.Position.TOP,
              TOP_LEFT: Toast.Position.TOP_LEFT,
              TOP_RIGHT: Toast.Position.TOP_RIGHT
            },

            Toast.Position.BOTTOM
          )
        })
      }
    >
      Show Toast
    </Button>
    <Toast defaultTime={10000} defaultPosition={Toast.Position.TOP} />
  </React.Fragment>
));
