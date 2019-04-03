import * as React from "react";
import { storiesOf } from "@storybook/react";
import Countdown from "../src/components/Countdown";
import { css } from "emotion";
import { colors } from "../src";
import { action } from "@storybook/addon-actions";

const countdownStyle = css({ fontWeight: "bold", color: colors.violet.base });

storiesOf("Components/Countdown", module).add("default", () => (
  <div className={countdownStyle}>
    <Countdown onFinish={action("onFinish")} />
  </div>
));
