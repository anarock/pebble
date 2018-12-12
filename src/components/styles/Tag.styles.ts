import { constants, mixins, typography, colors } from "../../theme";
import { css } from "emotion";

export const tagStyle = css({
  ...typography.s.bold,
  ...mixins.flexSpaceBetween,
  borderRadius: constants.borderRadius,
  padding: "0 10px",
  height: 28,
  alignItems: "center",
  justifyContent: "center",
  display: "inline-flex",
  lineHeight: "10px",
  "&.__pebble__tag__with__close": {
    paddingRight: 0
  }
});

export const iconClass = css({
  fontSize: 7,
  marginLeft: 5,
  height: "inherit",
  padding: "10px 10px",
  cursor: "pointer",
  position: "relative",
  ":hover": {
    backgroundColor: colors.violet.lighter,
    borderTopRightRadius: constants.borderRadius,
    borderBottomRightRadius: constants.borderRadius
  }
});
