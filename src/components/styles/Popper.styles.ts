import { css } from "emotion";
import { constants } from "../../theme";

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
    bottom: -11
  },
  "&[data-placement^='bottom']": {
    transform: "rotate(-90deg)",
    top: -11
  },
  "&[data-placement^='right']": {
    transform: "rotate(180deg)",
    left: -11
  },
  "&[data-placement^='left']": {
    right: -11
  }
});
