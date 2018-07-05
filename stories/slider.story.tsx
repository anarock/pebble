import * as React from "react";
import { storiesOf } from "@storybook/react";
import Slider from "@src/components/Slider";
import { action } from "@storybook/addon-actions";
import { boolean, number, text } from "@storybook/addon-knobs";
import { css } from "react-emotion";

const wrapperStyle = css({
  width: 400
});

storiesOf("Slider", module).add("simple", () => (
  <Slider
		onValuesUpdated={action("change")}
    min={number("min", 0)}
    max={number("max", 100)}
    values={[10, 90]}
    disabled={boolean("disabled")}
    large={boolean("large")}
    className={wrapperStyle}
    title={text("title", "Select Range")}
    valueLabelExtractor={() => `0-100`}
  />
));
