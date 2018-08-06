import { ThemeConstants } from "./typings/constants";
import { colors } from "./colors";

export const constants: ThemeConstants = {
  borderRadius: 3,
  buttonHeight: 40,
  animationCurve: "cubic-bezier(.64,.09,.08,1)",
  padding: {
    base: 20,
    higher: 60
  },

  border: {
    base: `1px solid ${colors.gray.light}`,
    light: `1px solid ${colors.gray.lighter}`
  },

  boxShadow: {
    base: `0 2px 7px 0 #F2F2F2`,
    elevated: `0 4px 7px 0 ${colors.gray.light}`,
    xElevated: "0 2px 15px 0 rgba(0,0,0,0.1)"
  }
};
