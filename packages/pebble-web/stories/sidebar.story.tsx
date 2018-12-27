import * as React from "react";
import { storiesOf } from "@storybook/react";
import SideBar from "../src/components/Sidebar";
import { css } from "emotion";
import { number, boolean } from "@storybook/addon-knobs";
import { withState } from "@dump247/storybook-state";
import Button from "../src/components/Button";

const wrapperStyle = css({
  width: "100%",
  height: 1000,
  backgroundColor: "white"
});

storiesOf("Components/SideBar", module).add(
  "simple",
  withState({ value: false })(({ store }) => (
    <React.Fragment>
      <Button onClick={() => store.set({ value: !store.state.value })}>
        Click Me
      </Button>
      <SideBar
        onClose={() => store.set({ value: false })}
        width={number("Width", 400)}
        isOpen={store.state.value}
        closeOnOutsideClick={boolean("closeOnOutsideClick", true)}
      >
        <div className={wrapperStyle} onClick={() => {}} />
      </SideBar>
    </React.Fragment>
  ))
);
