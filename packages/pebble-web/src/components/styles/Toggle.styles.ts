import { css } from "emotion";
import { colors } from "pebble-shared";

export const labelStyle = css({
  width: "28px",
  height: "14px",
  backgroundColor: colors.gray.base,
  position: "relative",
  display: "inline-block",
  borderRadius: "14px",
  cursor: "pointer"
});

export const inputStyle = css({
  width: 0,
  height: 0,
  opacity: 0
});

export const switchStyle = css({
  position: "absolute",
  height: "10px",
  width: "10px",
  left: "2px",
  bottom: "2px",
  borderRadius: "50%",
  backgroundColor: colors.white.base,
  transition: ".4s"
});

export const selectedLabel = css({ backgroundColor: colors.violet.base });

export const selectedSwitch = css({ transform: "translateX(14px)" });
