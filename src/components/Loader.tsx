import * as React from "react";
import { LoaderProps } from "./typings/Loader";
import colors from "../theme/colors";
import { spinnerStyle } from "./styles/Loader.styles";

const Loader: React.SFC<LoaderProps> = ({
  color = colors.gray.darker,
  scale = 1
}) => {
  const style = {
    backgroundColor: color
  };
  return (
    <div className={spinnerStyle} style={{ transform: `scale(${scale})` }}>
      <div style={style} />
      <div style={style} />
      <div style={style} />
    </div>
  );
};

export default Loader;
