import * as React from "react";
import { storiesOf } from "@storybook/react";
import Modal from "../src/components/Modal";
import { boolean } from "@storybook/addon-knobs";
import { colors } from "../src/theme";

import { css } from "emotion";

const style = css({
  height: 200,
  width: 200,
  backgroundColor: colors.white.base
});

let arr = [];
for (let i = 0; i < 5000; i++) {
  arr[i] = i;
}

storiesOf("Modal", module).add("simple", () => (
  <Modal visible={boolean("Visible", true)}>
    <div className={style}>
      {arr.map(id => (
        <div>{id}</div>
      ))}
    </div>
  </Modal>
));
