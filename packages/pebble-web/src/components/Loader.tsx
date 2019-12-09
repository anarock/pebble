import * as React from "react";
import { LoaderProps } from "./typings/Loader";
import { spinnerStyle } from "./styles/Loader.styles";
import { colors } from "pebble-shared";

const Loader: React.FunctionComponent<LoaderProps> = ({
  color = colors.gray.darker,
  scale = 1,
  styles
}) => {
  const style = {
    backgroundColor: color
  };
  return (
    <div css={[spinnerStyle, styles]} style={{ transform: `scale(${scale})` }}>
      <div style={style} />
      <div style={style} />
      <div style={style} />
    </div>
  );
};

export default Loader;
