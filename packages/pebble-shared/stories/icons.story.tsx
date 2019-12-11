import * as React from "react";
import { storiesOf } from "@storybook/react";
import css from "@emotion/css";
import { Tooltip, mixins } from "../../pebble-web/src";
// @ts-ignore
import iconNames from "../icons.json";

const wrapper = css({
  ...mixins.flexSpaceBetween,
  flexWrap: "wrap",
  padding: 30
});

const divs = css({
  display: "flex",
  alignItems: "center",
  padding: "20px 10px",
  width: "100%",
  cursor: "pointer",
  "*": {
    pointerEvents: "none"
  },
  i: {
    fontSize: 27,
    marginRight: 20
  }
});

storiesOf("Theme/icons", module).add("List", () => (
  <div css={wrapper}>
    {iconNames.map((iconName: string) => (
      <div key={iconName} style={{ width: "33%" }}>
        <Tooltip
          label={labelProps => (
            <div css={divs} {...labelProps}>
              <i css={`pi pi-${iconName}`} /> <span>{iconName}</span>
            </div>
          )}
          text={`<i className="pi pi-${iconName}" />`}
        />
      </div>
    ))}
  </div>
));
