import { colors, constants, mixins, typography } from "@src/theme";
import { css } from "react-emotion";

export const optionsWrapper = css({
  backgroundColor: colors.white.base,
  borderRadius: constants.borderRadius,
  boxShadow: constants.boxShadow.xElevated,
  position: "absolute",
  width: "inherit",
  zIndex: 9,
  maxHeight: 352,
  minWidth: 200,
  overflowY: "scroll",
  padding: "20px 1px"
});

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
  backgroundColor: colors.violet.lightest,
  color: colors.violet.base
});
