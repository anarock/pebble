import * as React from "react";
import { storiesOf } from "@storybook/react";
import { mixins, iconNames } from "../src/theme";
import { css } from "react-emotion";
import Tooltip from "../src/components/Tooltip";

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

storiesOf("Icons", module).add("List", () => (
  <div className={wrapper}>
    {iconNames.map(iconName => (
      <div key={iconName} style={{ width: "33%" }}>
        <Tooltip
          label={({ ref }) => (
            <div className={divs} ref={ref}>
              <i className={`icon icon-${iconName}`} /> <span>{iconName}</span>
            </div>
          )}
          text={`<i className="icon icon-${iconName}" />`}
        />
      </div>
    ))}
  </div>
));
