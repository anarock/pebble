import React from "react";
import { storiesOf } from "@storybook/react";
import TypeAhead from "@src/components/TypeAhead";
import Input from "@src/components/Input";
import { action } from "@storybook/addon-actions";
import { css } from "react-emotion";
import { mixins } from "@src/theme";

const labelStyle = css({
  padding: "21px 0",
  ...mixins.textEllipsis
});

storiesOf("Typeahead", module).add("simple", () => (
  <TypeAhead
    searchBox={({ registerChange, onFocus, value }) => (
      <Input
        placeholder="H"
        onChange={registerChange}
        value={value}
        inputProps={{ onFocus }}
      />
    )}
    className={css({
      width: 400
    })}
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
