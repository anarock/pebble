import * as React from "react";
import { storiesOf } from "@storybook/react";
import Tooltip from "../src/components/Tooltip";
import Button from "../src/components/Button";
import { boolean, select } from "@storybook/addon-knobs";
import { Placement } from "popper.js";
import { withState } from "@dump247/storybook-state";

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

storiesOf("Components/Tooltip", module).add(
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
      textHeading="This heading is not mandatory and can consist of multiple lines."
      onClose={() => {
        store.set({
          isOpen: false
        });
      }}
      isOpen={store.state.isOpen}
    />
  ))
);
