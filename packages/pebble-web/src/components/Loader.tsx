import * as React from "react";
import { LoaderProps } from "./typings/Loader";
import { spinnerStyle } from "./styles/Loader.styles";
import { colors } from "pebble-shared";
import { cx } from "emotion";

const Loader: React.FunctionComponent<LoaderProps> = ({
  color = colors.gray.darker,
  scale = 1,
  className,
  dataTestId
}) => {
  const style = {
    backgroundColor: color
  };
  return (
    <div
      className={cx(spinnerStyle, className)}
      style={{ transform: `scale(${scale})` }}
      data-test-id={dataTestId}
    >
      <div style={style} />
      <div style={style} />
      <div style={style} />
    </div>
  );
};

export default Loader;
