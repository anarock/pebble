import { constants, mixins, typography } from "../../theme";
import { css } from "emotion";

export const tagStyle = css({
  ...typography.xs.bold,
  ...mixins.flexSpaceBetween,
  borderRadius: constants.borderRadius,
  padding: "0 15px",
  height: 25,
  textTransform: "uppercase",
  alignItems: "center",
  justifyContent: "center",
  display: "inline-flex",
  lineHeight: "10px",
  "&.__pebble__tag__with__close": {
    paddingRight: 0
  },
  i: {
    fontSize: 7,
    marginLeft: 5,
    height: "inherit",
    padding: "9px 10px",
    cursor: "pointer",
    position: "relative"
  }
});
