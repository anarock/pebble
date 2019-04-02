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

export const contentWrap = css({
  display: "flex",
  padding: "14px 15px",
  alignItems: "center"
});

export const headingStyle = css({
  ...typography.s.bold,
  color: colors.white.base,
  marginBottom: "10px",
  lineHeight: "18px"
});

export const iconStyle = css({
  color: colors.white.base,
  fontSize: "18px",
  cursor: "pointer",
  marginLeft: "15px"
});
