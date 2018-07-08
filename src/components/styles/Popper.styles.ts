import { css } from "react-emotion";
import { constants } from "@src/theme";

export const popperStyle = css({
  margin: 14,
  boxShadow: constants.boxShadow.xElevated,
  borderRadius: constants.borderRadius
});

export const arrowStyle = css({
  position: "absolute",
  textShadow: "1px 0 20px rgba(0,0,0,0.1)",
  "&[data-placement^='top']": {
    transform: "rotate(90deg)",
    bottom: -16
  },
  "&[data-placement^='bottom']": {
    transform: "rotate(-90deg)",
    top: -16
  },
  "&[data-placement^='right']": {
    transform: "rotate(180deg)",
    left: -16
  },
  "&[data-placement^='left']": {
    transform: "rotate(180deg)",
    right: -16
  }
});
