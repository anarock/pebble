import * as React from "react";
import { storiesOf } from "@storybook/react";
import { colors, constants, mixins, typography } from "../src/theme";
import { css } from "emotion";
import { Type } from "../src/theme/typings/typography";

const wrapper = css({
  padding: 30,
  minHeight: "100vh",
  backgroundColor: colors.gray.lightest
});

const titleStyle = css({
  display: "flex",
  flexDirection: "column",
  backgroundColor: colors.gray.lightest,
  borderLeft: constants.border.base,
  color: colors.gray.dark,
  fontWeight: "bold",
  span: {
    flex: 1,
    padding: "10px 20px"
  }
});

const section = css({
  display: "flex",
  flexDirection: "row",
  width: "calc(100vw - 60px)",
  border: constants.border.base,
  borderRadius: constants.borderRadius,
  marginBottom: 20,
  backgroundColor: colors.white.base,
  overflow: "hidden"
});

const text =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.";

storiesOf("Theme/typography", module).add("List", () => (
  <div className={wrapper}>
    <h2 style={{ marginBottom: 40 }}>Typography</h2>
    {Object.keys(typography).map(x =>
      Object.keys(typography[x as keyof typeof typography]).map(y => {
        const style = typography[x as keyof typeof typography][
          y as keyof Type
        ] as React.CSSProperties;
        return (
          <div className={section} key={`${x}.${y}`}>
            <div
              style={{
                ...style,
                ...mixins.textEllipsis,
                padding: 20,
                flex: 1,
                alignSelf: "center"
              }}
            >
              {text}
            </div>
            <title className={titleStyle} style={{ width: 100 }}>
              <span>
                {style.fontSize}
                px
              </span>
              <span>{style.color}</span>
              <span>{style.fontWeight}</span>
            </title>
          </div>
        );
      })
    )}
  </div>
));
