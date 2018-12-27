import { css } from "emotion";
import { typography } from "../../../theme";
import { colors } from "pebble-theme";

export const setWrap = css({
  display: "flex",
  ...typography.s.regular
});

export const unSelectedButton = css({
  padding: "15px 20px",
  lineHeight: "8px",
  border: `1px solid ${colors.gray.lighter}`,
  borderRight: "none",
  "&:first-of-type": {
    borderRadius: "3px 0px 0px 3px"
  },
  "&:last-of-type": {
    borderRadius: "0px 3px 3px 0px",
    borderRight: `1px solid ${colors.gray.lighter}`
  }
});

export const selectedButton = css({
  backgroundColor: colors.gray.lighter
});
