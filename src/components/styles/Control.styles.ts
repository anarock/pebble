import { css } from "emotion";
import { colors, typography } from "../../theme";

export const radioIconStyle = css({
  marginRight: 10,
  fontSize: 16
});

export const controlStyle = css({
  cursor: "pointer",
  display: "flex",
  outline: "none",
  padding: "10px 0",
  position: "relative",
  alignItems: "center",
  ...typography.normal.regular,
  "&[data-disabled='true']": {
    cursor: "not-allowed",

    // Try not to use cx with radioIconStyle
    // As cx merges styles into one className.
    [`.${radioIconStyle}`]: {
      color: colors.gray.light
    }
  }
});
