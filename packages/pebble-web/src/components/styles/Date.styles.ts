import { css } from "emotion";
import { colors } from "pebble-shared";
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
  display: "flex",
  backgroundColor: colors.red.lightest,
  color: colors.red.darker,
  borderRadius: "0px 0px 3px 3px",
  fontSize: "12px",
  fontWeight: 500,
  alignItems:"center",
  justifyContent:"center",
  padding: "11px"
})