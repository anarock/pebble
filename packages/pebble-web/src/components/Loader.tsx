import * as React from "react";
import { LoaderProps } from "./typings/Loader";
import { spinnerStyle } from "./styles/Loader.styles";
import { colors } from "pebble-theme";
import { cx } from "emotion";

const Loader: React.FunctionComponent<LoaderProps> = ({
  color = colors.gray.darker,
  scale = 1,
  className
}) => {
  const style = {
    backgroundColor: color
  };
  return (
    <div
      className={cx(spinnerStyle, className)}
      style={{ transform: `scale(${scale})` }}
    >
      <div style={style} />
      <div style={style} />
      <div style={style} />
    </div>
  );
};

export default Loader;
