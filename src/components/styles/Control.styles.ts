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
  ...typography.normal.regular,
  "&[data-disabled='true']": {
    cursor: "not-allowed",
    pointerEvents: "none",
    [`.${radioIconStyle}`]: {
      color: colors.gray.light
    }
  }
});
