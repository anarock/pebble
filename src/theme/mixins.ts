import * as React from "react";
import { CSSObject } from "create-emotion/types";

type Styles = CSSObject | React.CSSProperties;

export const textEllipsis: React.CSSProperties = {
  overflowX: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
};

export const flexRow: React.CSSProperties = {
  display: "flex",
  flexDirection: "row"
};

export const flexSpaceBetween: React.CSSProperties = {
  ...flexRow,
  justifyContent: "space-between",
  alignContent: "initial"
};

export const flexMiddleAlign: Styles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

export const getPlaceholderStyle = (color: string): Styles => ({
  "::-webkit-input-placeholder": { color },
  "::-moz-placeholder": { color },
  ":-ms-input-placeholder": { color },
  ":-moz-placeholder": { color },
  "::placeholder": { color }
});
