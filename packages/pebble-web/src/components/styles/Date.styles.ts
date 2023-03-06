import { css } from "emotion";
import { colors } from "pebble-shared";
import { typography } from "../../theme";
import { inputMarginBottom } from "./Input.styles";

export const dateClass = css({
  padding: 20,
  width: "100%"
});

export const dropDownClassName = css({
  marginTop: -inputMarginBottom
});

export const inputStyle = css({
  marginBottom: 0
});

export const wrapperStyle = css({
  marginBottom: 20
});

export const errorStyle = css({
  ...typography.s.bold,
  backgroundColor: colors.red.lightest,
  color: colors.red.darker,
  textAlign: "left",
  padding: "11px 30px"
});
