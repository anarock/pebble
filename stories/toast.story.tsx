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
            [Toast.Position.BOTTOM, Toast.Position.RIGHT],
            Toast.Position.BOTTOM
          )
        })
      }
    >
      Show Toast
    </Button>
    <Toast defaultTime={10000} />
  </React.Fragment>
));
