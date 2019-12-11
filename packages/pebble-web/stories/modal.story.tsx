import * as React from "react";
import { storiesOf } from "@storybook/react";
import Modal from "../src/components/Modal";
import css from "@emotion/css";
import { withState } from "@dump247/storybook-state";
import Button from "../src/components/Button";
import { colors } from "pebble-shared";

const style = css({
  height: 200,
  width: 200,
  backgroundColor: colors.white.base
});

interface State {
  show: boolean;
}

storiesOf("Components/Modal", module).add(
  "simple",
  withState<State>({ show: false })(({ store }) => (
    <>
      <Button onClick={() => store.set({ show: true })}>Open Modal</Button>
      <Modal visible={store.state.show}>
        <div css={style}>
          <i
            className="pi pi-close"
            onClick={() => store.set({ show: false })}
          />
        </div>
      </Modal>
    </>
  ))
);
