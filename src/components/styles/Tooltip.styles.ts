import { css } from "emotion";
import { colors, typography } from "../../theme";

export const textStyle = css({
  ...typography.xs.bold,
  color: colors.white.base,
  display: "block",
  lineHeight: "15px"
});

export const popperStyle = css({
  margin: 4,
  boxShadow: "none",
  maxWidth: 320
});
