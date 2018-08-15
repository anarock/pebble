import { colors, mixins, typography } from "../../theme";
import { css } from "emotion";

export const rowWrapper = css({
  ...typography.normal.regular,
  lineHeight: "10px",
  cursor: "pointer",
  padding: "0 18px",
  position: "relative",
  zIndex: 999,
  ...mixins.textEllipsis,
  ...mixins.flexSpaceBetween,
  alignItems: "center",
  display: "flex",
  height: 52,
  "&:last-of-type": {
    border: 0
  },
  "&:hover": {
    backgroundColor: colors.gray.lightest
  }
});

export const activeRow = css({
  backgroundColor: colors.gray.lightest
});

export const selectedRow = css({
  color: colors.violet.base,
  ...typography.normal.bold
});
