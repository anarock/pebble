import { css } from "emotion";
import { colors } from "../../theme";

export const toggleWrap = css({
  display: "flex"
});

export const offButton = css({
  borderRadius: "3px 0px 0px 3px",
  borderRight: "none",
  color: colors.gray.darker,
  padding: "8px 20px",
  height: "40px",
  fontSize: "12px"
});

export const onButton = css({
  borderLeft: `1px solid ${colors.gray.lighter}`,
  borderRadius: "0px 3px 3px 0px",
  color: colors.gray.darker,
  padding: "8px 20px",
  height: "40px",
  fontSize: "12px"
});

export const selectedButton = css({
  backgroundColor: colors.gray.lighter
});
