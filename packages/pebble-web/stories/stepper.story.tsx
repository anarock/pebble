import * as React from "react";
import { storiesOf } from "@storybook/react";
import Stepper from "../src/components/Stepper";
import css from "@emotion/css";
import { action } from "@storybook/addon-actions";

const x = css({
  position: "relative",
  width: 800
});

const contentWrapper = css({
  marginTop: 30,
  textAlign: "center"
});

const label = css({ marginBottom: 20 });

const iconSize = css({ fontSize: 25 });

const data = [
  {
    id: 1,
    label: "Buyer Registration",
    icon: "pi-channel-partners"
  },
  {
    id: 2,
    label: "Source Registration",
    icon: "pi-note-1"
  },
  {
    id: 3,
    label: "Assignment",
    icon: "pi-site-visit-2"
  }
];

storiesOf("Components/Stepper", module).add("Default", () => (
  <Stepper
    styles={x}
    data={data}
    keyExtractor={item => item.id}
    renderContentElement={({ item }) => (
      <div css={contentWrapper}>
        <div css={label}>{item.label}</div>
        <div css={iconSize}>
          <i className={`pi ${item.icon}`} />
        </div>
      </div>
    )}
    headingExtractor={({ item }) => item.label}
    onDone={action("onDone")}
    onCancel={action("onCancel")}
  />
));
