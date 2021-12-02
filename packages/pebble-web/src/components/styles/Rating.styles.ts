import { css } from "emotion";
import { colors } from "pebble-shared";
import { mixins } from "../../theme";

export const wrapStyle = css({
  ...mixins.flexRow,
  cursor: "pointer"
});

export const disabledStyle = css({
  cursor: "not-allowed"
});

export const unSelectedStar = css({
  marginLeft: "2px",
  color: colors.gray.border,
  fontSize: "20px"
});

export const selectedStar = css({
  color: colors.yellow.base
});
