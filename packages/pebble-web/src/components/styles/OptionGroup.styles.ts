import { constants } from "../../theme";
import { css } from "emotion";
import { colors } from "pebble-theme";

export const optionWrapperMaxHeight = 352;
export const searchBoxHeight = 80;
export const initialPadding = 20;
export const onScrollPadding = 10;

export const optionsWrapper = css({
  backgroundColor: colors.white.base,
  borderRadius: constants.borderRadius,
  position: "relative",
  width: "inherit",
  zIndex: 9,
  maxHeight: optionWrapperMaxHeight,
  minWidth: 100,
  overflowY: "auto",
  padding: "20px 1px"
});

export const searchBoxWrapper = css({
  padding: initialPadding,
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
  padding: onScrollPadding
});
