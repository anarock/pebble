import { css } from "emotion";
import { colors } from "../../theme";

export const selectWrapper = css({
  marginBottom: 20
});

export const selectInputStyle = css({
  pointerEvents: "none"
});

export const dropDownClass = css({
  marginTop: -40
});

export const inputWrapper = css({
  cursor: "pointer",
  position: "relative"
});

export const chevronStyle = css({
  position: "absolute",
  top: 25,
  right: 7,
  color: colors.gray.base,
  fontSize: 10,
  "&.__pebble__select__open": {
    transform: "rotate(180deg)"
  }
});
