import * as React from "react";
import { storiesOf } from "@storybook/react";
import Modal from "../src/components/Modal";
import { boolean } from "@storybook/addon-knobs";
import { colors } from "../src/theme";
import ConfirmationModal from "../src/components/ConfirmationModal";
import { css } from "emotion";

const style = css({
  height: 200,
  width: 200,
  backgroundColor: colors.white.base
});

storiesOf("Modal", module).add("simple", () => (
  <Modal visible={boolean("Visible", false)}>
    <div className={style} />
  </Modal>
));

storiesOf("Modal", module).add("Confirmation Modal", () => (
  <ConfirmationModal
    visible={true}
    headingText="Are you sure?"
    onApprove={() => {}}
    onClose={() => {}}
  />
));
