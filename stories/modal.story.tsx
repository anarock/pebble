import * as React from "react";
import { storiesOf } from "@storybook/react";
import Modal from "@src/components/Modal";
import { boolean } from "@storybook/addon-knobs";
import { colors } from "@src/theme";

import { css } from "react-emotion";

const style = css({
  height: 200,
  width: 200,
  backgroundColor: colors.white.base
});

storiesOf("Modal", module).add("simple", () => (
  <Modal visible={boolean("Visible", true)}>
    <div className={style} />
  </Modal>
));
