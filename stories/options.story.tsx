import * as React from "react";
import { storiesOf } from "@storybook/react";
import Options from "../src/components/Options";
import { action } from "@storybook/addon-actions";
import { number } from "@storybook/addon-knobs";

const options = new Array(7)
  .fill({
    label: "Lorem ipsum dolor"
  })
  .map((x, i) => ({ ...x, id: i }));

storiesOf("Options", module).add("basic", () => (
  <Options
    options={options}
    onSelect={action("onSelect")}
    width={number("width", 300)}
    selected={number("selected", 1)}
    keyExtractor={x => x.id}
  />
));
