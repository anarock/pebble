import css from "@emotion/css";
import { colors } from "pebble-shared";

export const tabsStyle = css({
  width: "100%",
  textAlign: "center",
  padding: "20px",
  color: colors.gray.dark,
  fontSize: "16px"
});

export const dateBtnsWrap = css({
  display: "flex",
  flexWrap: "wrap",
  width: "416px",
  padding: "20px 40px",
  justifyContent: "space-between"
});

export const unSelectedDateButton = css({
  marginBottom: "20px",
  border: `1px solid ${colors.gray.light}`,
  background: colors.white.base,
  color: colors.gray.darker,
  width: "158px",
  "&:not([disabled]):hover": {
    border: "none",
    background: colors.gray.light,
    color: colors.gray.darker
  }
});

export const selectedDateButton = css({
  border: "none",
  background: colors.violet.lightest,
  color: colors.violet.dark,
  "&:not([disabled]):hover": {
    border: "none",
    background: colors.violet.lightest,
    color: colors.violet.dark
  }
});
