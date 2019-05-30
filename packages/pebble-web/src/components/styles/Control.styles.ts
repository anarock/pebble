import { css } from "emotion";
import { typography } from "../../theme";
import { colors } from "pebble-shared";

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
