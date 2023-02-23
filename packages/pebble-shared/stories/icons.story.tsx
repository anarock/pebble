import * as React from "react";
import { storiesOf } from "@storybook/react";
import { css } from "emotion";
import { Tooltip, mixins, Input } from "../../pebble-web/src";
import allIconNames from "../icons.json";
import { withState } from "@dump247/storybook-state";
import matchSorter from "match-sorter";

const wrapper = css({
  width: "100vw",
  height: "100vh",
  padding: 30
});

const iconList = css({
  ...mixins.flexRow,
  flexWrap: "wrap"
});

const iconWrapper = css({
  width: "33%"
});

const divs = css({
  display: "flex",
  alignItems: "center",
  padding: "20px 10px",
  cursor: "pointer",
  "*": {
    pointerEvents: "none"
  },
  i: {
    fontSize: 27,
    marginRight: 20
  }
});

storiesOf("Theme/icons", module).add(
  "List",
  withState({ query: "" })(({ store }) => {
    const { query } = store.state;
    const iconNames = matchSorter(allIconNames, query);

    return (
      <div className={wrapper}>
        <Input
          placeholder="Search Icon"
          value={query}
          onChange={text => {
            store.set({ query: text });
          }}
        />

        <div className={iconList}>
          {iconNames.map(iconName => {
            const iconClassName = `pi pi-${iconName}`;

            return (
              <div key={iconName} className={iconWrapper}>
                <Tooltip
                  label={labelProps => (
                    <div className={divs} {...labelProps}>
                      <i className={iconClassName} /> <span>{iconName}</span>
                    </div>
                  )}
                  text={`<i className="${iconClassName}" />`}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  })
);
