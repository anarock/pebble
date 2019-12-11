import * as React from "react";
import { storiesOf } from "@storybook/react";
import SideBar from "../src/components/Sidebar";
import css from "@emotion/css";
import { number, boolean } from "@storybook/addon-knobs";
import { withState } from "@dump247/storybook-state";
import Button from "../src/components/Button";
import Modal from "../src/components/Modal";

const wrapperStyle = css({
  width: "100%",
  height: 1000,
  backgroundColor: "white",
  display: "flex",
  justifyContent: "center",
  marginTop: 50
});
const modalStyles = css({
  height: 100,
  width: 100,
  backgroundColor: "white",
  margin: "20px auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});

storiesOf("Components/SideBar", module).add(
  "simple",
  withState({ value: false, displayModal: false })(({ store }) => (
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
        <div css={wrapperStyle} onClick={() => {}}>
          <Button onClick={() => store.set({ displayModal: true })}>
            Open modal
          </Button>
          <Modal visible={store.state.displayModal} modalStyles={modalStyles}>
            <Button
              type="link"
              onClick={() => store.set({ displayModal: false })}
            >
              Close
            </Button>
          </Modal>
        </div>
      </SideBar>
    </React.Fragment>
  ))
);
