import { constants, mixins, typography } from "../../theme";
import { css } from "react-emotion";

export const tagStyle = css({
  ...typography.xs.bold,
  ...mixins.flexSpaceBetween,
  borderRadius: constants.borderRadius,
  padding: "0 15px",
  height: 24,
  textTransform: "uppercase",
  alignItems: "center",
  justifyContent: "center",
  display: "inline-flex",
  lineHeight: "10px",
  "&.__pebble__tag__with__close": {
    paddingRight: 0
  },
  i: {
    fontSize: 10,
    marginLeft: 10,
    height: "inherit",
    padding: 7,
    cursor: "pointer",
    position: "relative"
  }
});
