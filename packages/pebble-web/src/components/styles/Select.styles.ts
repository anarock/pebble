import css from "@emotion/css";
import { colors } from "pebble-shared";
import { inputMarginBottom } from "./Input.styles";

export const selectWrapper = css({
  marginBottom: 20
});

export const relativePosition = css({
  position: "relative"
});

export const selectInputWrapper = css({
  pointerEvents: "none",
  marginBottom: 0
});

export const selectInput = css({
  color: colors.gray.darker,
  paddingRight: 15
});

export const dropDownClass = css({
  marginTop: -inputMarginBottom
});

export const fullWidth = css({
  width: "100%"
});

export const inputWrapper = css({
  cursor: "pointer",
  position: "relative"
});

export const chevronStyle = css({
  position: "absolute",
  top: 0,
  bottom: 0,
  margin: "auto",
  height: "10px",
  right: 7,
  color: colors.gray.base,
  fontSize: 10,
  "&.__pebble__select__open": {
    transform: "rotate(180deg)"
  }
});
