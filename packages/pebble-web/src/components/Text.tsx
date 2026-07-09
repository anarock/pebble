import React from "react";
import { css, cx } from "emotion";
import { colors } from "pebble-shared";
import { TextProps } from "./typings/Text";

const Text: React.FunctionComponent<TextProps> = ({
  typography,
  color = colors.gray.darker,
  children,
  className,
  testId
}) => {
  const _className = css({
    ...typography,
    color
  });

  return (
    <span className={cx(_className, className)} data-testid={testId}>
      {children}
    </span>
  );
};

export default Text;
