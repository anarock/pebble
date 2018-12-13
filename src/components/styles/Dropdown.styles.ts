import { colors, constants } from "../../theme";
import { css } from "emotion";

export const dropDownStyle = css({
  minWidth: 100,
  boxShadow: constants.boxShadow.xElevated,
  backgroundColor: colors.white.base,
  borderRadius: constants.borderRadius,
  position: "absolute",
  zIndex: 999,
  transformOrigin: "top left"
});
