import * as React from "react";
import { storiesOf } from "@storybook/react";
import Select from "@src/components/Select";
import { action } from "@storybook/addon-actions";

const options = new Array(7)
  .fill({
    label: "Lorem ipsum dolor"
  })
  .map((x, i) => ({ ...x, id: i }));

storiesOf("Select", module).add("default", () => (
  <Select
    rowRenderElement={x => x.label}
    keyExtractor={x => x.id}
    options={options}
    onSelect={action("onSelect")}
    title="hello"
    placeholder="Choose Option"
    selected={1}
  />
));
