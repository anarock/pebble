import * as React from "react";
import { storiesOf } from "@storybook/react";
import TypeAhead from "../src/components/TypeAhead";
import { action } from "@storybook/addon-actions";
import { css } from "emotion";
import Option from "../src/components/Option";

storiesOf("Typeahead", module).add("simple", () => (
  <TypeAhead
    className={css({
      width: 400
    })}
    placeholder="Typeahead"
    onChange={action("change")}
    onSelect={action("select")}
    valueExtractor={value => value && value.toString()}
  >
    {new Array(5).fill(1).map((_x, i) => (
      <Option
        key={i + 1}
        value={`option-${i + 1}`}
        label={`I am an option - ${i + 1}`}
      />
    ))}
  </TypeAhead>
));
