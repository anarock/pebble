import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs";
import Tag from "../src/components/Tag";
import { colors } from "../src/theme";

const _colors = Object.keys(colors).filter(
  x => !["gray", "violet", "white"].includes(x)
);

storiesOf("Tag", module)
  .add("simple", () => (
    <Tag
      label={text("Tag", "Anarock Tag")}
      color={select("Color", _colors, _colors[0])}
    />
  ))
  .add("with cross", () => (
    <Tag
      label={text("Tag", "Anarock Tag")}
      color={select("Color", _colors, _colors[0])}
      onClose={() => {}}
    />
  ));
