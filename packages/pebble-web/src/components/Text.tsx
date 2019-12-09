import React from "react";
import { colors } from "pebble-shared";
import { TextProps } from "./typings/Text";

const Text: React.FunctionComponent<TextProps> = ({
  typography,
  color = colors.gray.darker,
  children,
  styles
}) => {
  return (
    <span
      css={[
        {
          ...typography,
          color
        },
        styles
      ]}
    >
      {children}
    </span>
  );
};

export default Text;
