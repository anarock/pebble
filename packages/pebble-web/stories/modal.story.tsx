import * as React from "react";
import { storiesOf } from "@storybook/react";
import Modal from "../src/components/Modal";
import { colors } from "../src/theme";
import { css } from "emotion";
import { withState } from "@dump247/storybook-state";
import Button from "../src/components/Button";

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
        <div className={style}>
          <i
            className="pi pi-close"
            onClick={() => store.set({ show: false })}
          />
        </div>
      </Modal>
    </>
  ))
);
