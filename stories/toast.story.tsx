import * as React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../src/components/Button";
import Toast from "../src/components/Toast";

storiesOf("Components/Toast", module).add("Default", () => (
  <React.Fragment>
    <Button onClick={() => Toast.show("hello", "success")}>Show Toast</Button>
    <Toast />
  </React.Fragment>
));
