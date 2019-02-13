import * as React from "react";
import { storiesOf } from "@storybook/react";
import { colors, constants, mixins, typography } from "../src/theme";
import { css } from "emotion";
import { Type, TypographyStyle } from "../src/theme/typings/typography";
import { Text } from "../src";

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
  backgroundColor: colors.white.base
});

const textStyle = css({
  padding: 20,
  flex: 1,
  alignSelf: "center",
  ...mixins.textEllipsis
});

const text =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.";

storiesOf("Components/Text", module).add("List", () => (
  <div className={wrapper}>
    <h2 style={{ marginBottom: 40 }}>Text</h2>
    {Object.keys(typography).map(x =>
      Object.keys(typography[x as keyof typeof typography]).map(y => {
        const style = typography[x as keyof typeof typography][
          y as keyof Type
        ] as TypographyStyle;
        return (
          <>
            <Text
              typography={typography.normal.bold}
              className={css({
                display: "inline-block",
                marginBottom: 10
              })}
              color={colors.gray.darker}
            >
              {`typography.${x}.${y}`}
            </Text>
            <div className={section} key={`${x}.${y}`}>
              <Text typography={style} className={textStyle}>
                {text}
              </Text>
              <title className={titleStyle} style={{ width: 100 }}>
                <span>
                  {style.fontSize}
                  px
                </span>
                <span>{style.color}</span>
                <span>{style.fontWeight}</span>
              </title>
            </div>
          </>
        );
      })
    )}
  </div>
));
