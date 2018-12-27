import * as React from "react";
import { storiesOf } from "@storybook/react";
import Stepper from "../src/components/Stepper";
import { css } from "emotion";
import { action } from "@storybook/addon-actions";

const x = css({
  position: "relative",
  width: 800
});

const data = [
  {
    id: 1,
    label: "Buyer Registration"
  },
  {
    id: 2,
    label: "Source Registration"
  },
  {
    id: 3,
    label: "Assignment"
  }
];

storiesOf("Components/Stepper", module).add("Default", () => (
  <Stepper
    className={x}
    data={data}
    keyExtractor={item => item.id}
    renderContentElement={({ item }) => <div>{item.label}</div>}
    headingExtractor={({ item }) => item.label}
    onDone={action("onDone")}
    onCancel={action("onCancel")}
  />
));
