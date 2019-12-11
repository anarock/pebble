import { mixins, typography } from "../../theme";
import css from "@emotion/css";
import { colors } from "pebble-shared";

export const inputReadOnlyStyle = css({
  color: colors.gray.dark
});

export const inputDisabledStyle = css({
  cursor: "not-allowed",
  pointerEvents: "none",
  color: colors.gray.base
});

export const messageStyle = css({
  ...typography.s.regular,
  marginTop: 10,
  lineHeight: "10px",
  textAlign: "left"
});

export const infoTextStyle = css({
  ...typography.s.light,
  marginRight: "15px",
  lineHeight: "12px"
});

export const placeholderStyle = css({
  position: "absolute",
  left: "15px",
  color: colors.gray.base,
  cursor: "text",
  transition: "transform 100ms ease",
  transform: "translate(0, 0px)",
  pointerEvents: "none",
  "&._pebble_secondary_input_label_focused": {
    fontSize: "12px",
    transform: "translate(0, -10px)"
  }
});

export const inputStyle = css({
  border: 0,
  outline: 0,
  borderRadius: "3px",
  padding: "15px 15px 0px",
  width: "100%",
  fontSize: "14px",
  lineHeight: "12px",
  ...mixins.textEllipsis,
  height: "48px"
});

export const inputWrapperStyle = css({
  position: "relative",
  borderRadius: "3px",
  fontSize: "14px",
  lineHeight: "12px",
  background: colors.white.base,
  boxSizing: "border-box",
  width: "100%",
  display: "flex",
  alignItems: "center"
});

export const wrapperStyle = css({ width: "100%", height: "70px" });
