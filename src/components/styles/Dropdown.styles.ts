import { colors, constants } from "../../theme";
import { css } from "emotion";

export const wrapperStyle = css({
  position: "relative"
});

export const dropDownStyle = css({
  minWidth: 100,
  boxShadow: constants.boxShadow.xElevated,
  backgroundColor: colors.white.base,
  borderRadius: constants.borderRadius,
  position: "absolute",
  top: "100%",
  zIndex: 999,
  transformOrigin: "top left"
});
