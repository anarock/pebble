import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs";
import Tag from "../src/components/Tag";
import { colors } from "../src/theme";
import { TagProps } from "../src/components/typings/Tag";

const _colors = Object.keys(colors).filter(x => "white" !== x) as Array<
  TagProps["color"]
>;

storiesOf("Components/Tag", module)
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
