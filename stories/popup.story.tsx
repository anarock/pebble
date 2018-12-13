import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import PopUp from "../src/components/PopUp";

storiesOf("PopUp", module).add("simple", () => (
  <PopUp
    visible
    onApprove={action("approve")}
    onReject={action("reject")}
    onClose={action("close")}
  >
    <div>Are you sure?</div>
  </PopUp>
));
