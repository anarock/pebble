import { css } from "emotion";
import { colors, typography } from "../../theme";

export const radioStyle = css({
  outline: "none"
});

export const radioContentStyle = css({
  display: "flex",
  justifyContent: "center",
  ...typography.normal.regular,
  cursor: "pointer",
  padding: "10px 0",
  i: {
    marginRight: 10,
    fontSize: 16
  },
  "&[data-disabled='true']": {
    cursor: "not-allowed",
    pointerEvents: "none",
    i: {
      color: colors.gray.light
    }
  }
});
