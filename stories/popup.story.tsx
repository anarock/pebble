import * as React from "react";
import { storiesOf } from "@storybook/react";
import PopUp from "../src/components/PopUp";

storiesOf("PopUp", module).add("simple", () => (
  <PopUp
    visible={true}
    headingText="Are you sure?"
    onApprove={() => {
      console.log("Approve");
    }}
    onClose={() => {
      console.log("Close");
    }}
  />
));
