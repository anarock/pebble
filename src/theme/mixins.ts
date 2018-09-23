import * as React from "react";
import { CSSObject } from "create-emotion/types";

type Styles = CSSObject | React.CSSProperties;

export const textEllipsis: Styles | any = {
  overflowX: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
};

export const flexRow: Styles | any = {
  display: "flex",
  flexDirection: "row"
};

export const flexSpaceBetween: Styles | any = {
  ...flexRow,
  justifyContent: "space-between",
  alignContent: "initial"
};

export const flexMiddleAlign: Styles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

export const displayInline: Styles | any = {
  display: "inline-block",
  verticalAlign: "top"
}

export const getPlaceholderStyle = (color: string): Styles => ({
  "::-webkit-input-placeholder": { color },
  "::-moz-placeholder": { color },
  ":-ms-input-placeholder": { color },
  ":-moz-placeholder": { color },
  "::placeholder": { color }
});
