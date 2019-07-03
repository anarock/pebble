import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import PopUp from "../src/components/PopUp";
import { withState } from "@dump247/storybook-state";
import Button from "../src/components/Button";

interface State {
  show: boolean;
}

storiesOf("Components/PopUp", module).add(
  "simple",
  withState<State>({ show: false })(({ store }) => (
    <>
      <Button onClick={() => store.set({ show: true })}>Show PopUp</Button>
      <PopUp
        visible={store.state.show}
        onApprove={action("approve")}
        onReject={action("reject")}
        onClose={() => store.set({ show: false })}
      >
        <div>Are you sure?</div>
      </PopUp>
    </>
  ))
);
