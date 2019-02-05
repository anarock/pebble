import React from "react";
import { css, cx } from "emotion";
import { colors } from "../theme";
import { TextProps } from "./typings/Text";

const Text: React.FunctionComponent<TextProps> = ({
  typography,
  color = colors.gray.darker,
  children,
  className
}) => {
  const _className = css({
    ...typography,
    color
  });

  return <span className={cx(_className, className)}>{children}</span>;
};

export default Text;
