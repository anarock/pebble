import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import PopUp from "../src/components/PopUp";

storiesOf("PopUp", module).add("simple", () => (
  <PopUp
    visible={true}
    headingText="Are you sure?"
    onApprove={action("click")}
    onClose={action("click")}
  />
));
