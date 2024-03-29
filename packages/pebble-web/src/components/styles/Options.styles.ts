import { mixins, typography } from "../../theme";
import { css } from "emotion";
import { colors } from "pebble-shared";

export const rowWrapper = css({
  ...typography.normal.regular,
  cursor: "pointer",
  padding: "12px 18px",
  position: "relative",
  lineHeight: "28px",
  zIndex: 999,
  ...mixins.textEllipsis,
  alignItems: "center",
  display: "flex",
  "&:last-of-type": {
    border: 0
  },
  "&:hover": {
    backgroundColor: colors.gray.lightest
  }
});

export const labelWrap = css({
  userSelect: "none",
  flexGrow: 1,
  overflow: "hidden",
  textOverflow: "ellipsis"
});

export const activeRow = css({
  backgroundColor: colors.gray.lightest
});

export const selectedRow = css({
  color: colors.violet.base,
  ...typography.normal.bold
});

export const advancedActionsWrapper = css({
  display: "flex",
  justifyContent: "space-around",
  fontSize: "12px",
  color: colors.gray.dark
});
