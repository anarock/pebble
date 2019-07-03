import * as React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";
import Message from "../src/components/Message";

storiesOf("Components/Message", module).add("default", () => (
  <Message
    intent={select("intent", ["success", "error"], "success")}
    text="You have successfully submitted your entry."
  />
));
