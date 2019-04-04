import * as React from "react";
import { storiesOf } from "@storybook/react";
import Tooltip from "../src/components/Tooltip";
import Button from "../src/components/Button";
import { boolean, select } from "@storybook/addon-knobs";
import { Placement } from "popper.js";
import { withState } from "@dump247/storybook-state";
import { css, cx } from "emotion";
import { colors, typography } from "../src/theme";

const contentWrap = css({
  display: "flex",
  padding: "15px"
});

const headingStyle = css({
  ...typography.s.bold,
  color: colors.white.base,
  marginBottom: "10px",
  lineHeight: "18px"
});

const iconStyle = css({
  color: colors.white.base,
  fontSize: "18px",
  cursor: "pointer",
  marginLeft: "15px"
});

const textStyle = css({
  ...typography.xs.bold,
  color: colors.gray.base,
  display: "block",
  lineHeight: "15px"
});

const placements = [
  "auto-start",
  "auto",
  "auto-end",
  "top-start",
  "top",
  "top-end",
  "right-start",
  "right",
  "right-end",
  "bottom-end",
  "bottom",
  "bottom-start",
  "left-end",
  "left",
  "left-start"
] as Placement[];

storiesOf("Components/Tooltip", module).add("simple", () => (
  <Tooltip
    label={({ ref }) => (
      <div ref={ref}>
        <Button type="link" onClick={() => {}}>
          Hover on me
        </Button>
      </div>
    )}
    text="Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc"
    isOpen={boolean("isOpen", false)}
    placement={select("placement", placements, placements[0])}
    isError={boolean("error", false)}
    disabled={boolean("disabled", false)}
  />
));

interface State {
  isOpen: boolean;
}

storiesOf("Recipes/Tooltip", module).add(
  "with close button",
  withState<State>({ isOpen: true })(({ store }) => (
    <Tooltip
      label={({ ref }) => (
        <div ref={ref}>
          <Button type="link" onClick={() => {}}>
            Hover on me
          </Button>
        </div>
      )}
      text="Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc"
      placement={select("placement", placements, placements[0])}
      isError={boolean("error", false)}
      disabled={boolean("disabled", false)}
      isOpen={store.state.isOpen}
      getTooltip={() => (
        <div className={contentWrap}>
          <div>
            <div className={headingStyle}>
              This heading is not mandatory and can consist of multiple lines.
            </div>
            <span className={textStyle}>
              Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales
              sagittis magna. Sed consequat, leo eget bibendum sodales, augue
              velit cursus nunc
            </span>
          </div>
          <i
            className={cx("pi pi-close-circle-filled", iconStyle)}
            onClick={() => {
              store.set({
                isOpen: false
              });
            }}
          />
        </div>
      )}
    />
  ))
);
