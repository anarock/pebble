import * as React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../src/components/Button";
import Toast from "../src/components/Toast";
import { select } from "@storybook/addon-knobs";
import { ToastPosition } from "../src/components/typings/Toast";

storiesOf("Components/Toast", module).add("Default", () => (
  <React.Fragment>
    <Button
      onClick={() =>
        Toast.show("hello", "success", {
          time: 1000,
          position: select(
            "bottom",
            [ToastPosition.bottom, ToastPosition.right],
            ToastPosition.bottom
          )
        })
      }
    >
      Show Toast
    </Button>
    <Toast defaultTime={10000} />
  </React.Fragment>
));
