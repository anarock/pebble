import { mixins, typography } from "../../theme";
import { css } from "emotion";
import { isDesktop } from "../../utils";
import { colors } from "pebble-theme";

const animation = "all 0.3s cubic-bezier(.64,.09,.08,1)";

export const wrapperStyle = css({
  position: "relative",
  display: "flex",
  backgroundColor: colors.white.base,
  width: "100%",
  flexDirection: "column",
  marginBottom: 20,
  height: 68,
  "&._pebble_input_wrapper_textarea": {
    height: 110
  }
});

export const inputStyle = css({
  outline: 0,
  border: 0,
  borderBottom: `1px solid ${colors.gray.lighter}`,
  padding: "24px 0 12px 0",
  height: 48,
  borderRadius: 0,
  ...typography.normal.regular,
  width: "100%",
  ...mixins.textEllipsis,
  "&:disabled": {
    backgroundColor: colors.white.base
  },
  "&[type='date']": {
    ...(!isDesktop ? { "-webkit-appearance": "textfield" } : {})
  },
  "&[type='date']::-webkit-inner-spin-button, &[type='date']::-webkit-calendar-picker-indicator": {
    webkitAppearance: "none",
    display: "none"
  },
  .../*#__PURE__*/ mixins.getPlaceholderStyle(colors.gray.light)
});

export const inputReadOnlyStyle = css({
  color: colors.gray.dark
});

export const inputDisabledStyle = css({
  cursor: "not-allowed",
  pointerEvents: "none",
  color: colors.gray.base
});

export const inputTextAreaStyle = css({
  height: 88,
  padding: "24px 0 52px 0",
  resize: "none"
});

export const highlightStyle = css({
  height: 2,
  backgroundColor: colors.violet.base,
  marginTop: -2,
  position: "relative",
  width: 0,
  transition: animation,
  zIndex: 9,
  "&._pebble_input_highlight_state, &._pebble_input_highlight_focused": {
    width: "100%"
  }
});

export const labelStyle = css({
  color: colors.gray.base,
  fontSize: 14,
  lineHeight: "12px",
  position: "absolute",
  transition: animation,
  transform: "translate(0, 24px)",
  pointerEvents: "none",
  "&._pebble_input_label_focused": {
    fontSize: 12,
    lineHeight: "10px",
    transform: "translate(0, 0)",
    color: colors.gray.dark
  }
});

export const messageStyle = css({
  ...typography.s.regular,
  marginTop: 10,
  lineHeight: "10px",
  textAlign: "left"
});

export const loadingStyle = css({
  right: -10,
  top: 20,
  position: "absolute"
});
