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
  position: "relative",
  zIndex: 10,
  willChange: "padding"
});

export const searchBoxScrolledStyle = css({
  boxShadow: constants.boxShadow.base,
  padding: 10
});
