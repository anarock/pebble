import { css } from "emotion";
import { typography } from "../../theme";
import { colors } from "pebble-theme";

export const textStyle = css({
  ...typography.s.regular,
  color: colors.white.base,
  display: "block",
  padding: "10px 16px"
});

export const popperStyle = css({
  margin: 4,
  boxShadow: "none",
  maxWidth: 320
});
