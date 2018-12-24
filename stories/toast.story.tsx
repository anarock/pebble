import * as React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../src/components/Button";
import Toast from "../src/components/Toast";

storiesOf("Components/Toast", module).add("Default", () => (
  <React.Fragment>
    <Button onClick={() => Toast.show("hello", "success", 10000)}>
      Show Toast
    </Button>
    <Toast defaultTime={10000} />
  </React.Fragment>
));
