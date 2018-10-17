import { colors, constants } from "../../theme";
import { css } from "emotion";

export const optionsWrapper = css({
  backgroundColor: colors.white.base,
  borderRadius: constants.borderRadius,
  position: "relative",
  width: "inherit",
  zIndex: 9,
  maxHeight: 352,
  minWidth: 200,
  overflowY: "auto",
  padding: "20px 1px"
});

export const searchBoxWrapper = css({
  padding: 20,
  boxShadow: "none",
  transition: "all 100ms linear",
  zIndex: 10,
  willChange: "padding",
  position: "absolute",
  top: 0,
  background: "white",
  width: "100%",
  boxSizing: "border-box"
});

export const searchBoxScrolledStyle = css({
  boxShadow: constants.boxShadow.base,
  padding: 10
});
