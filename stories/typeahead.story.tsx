import * as React from "react";
import { storiesOf } from "@storybook/react";
import TypeAhead from "../src/components/TypeAhead";
import { action } from "@storybook/addon-actions";
import { css } from "emotion";
import { mixins } from "../src/theme";

const labelStyle = css({
  padding: "21px 0",
  ...mixins.textEllipsis
});

storiesOf("Typeahead", module).add("simple", () => (
  <TypeAhead
    className={css({
      width: 400
    })}
    placeholder="H"
    suggestions={[
      {
        label:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at blanditiis cum cupiditate, deleniti ex facere hic impedit maxime minus possimus quidem sequi sunt temporibus totam vitae voluptatem voluptatibus? Facere."
      },
      {
        label:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at blanditiis cum cupiditate, deleniti ex facere hic impedit maxime minus possimus quidem sequi sunt temporibus totam vitae voluptatem voluptatibus? Facere."
      }
    ]}
    onChange={action("change")}
    rowRenderElement={({ label }) => <div className={labelStyle}>{label}</div>}
    onSelect={action("select")}
    valueExtractor={suggestion => suggestion.label}
  />
));
