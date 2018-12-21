import { css } from "emotion";
import { colors, typography } from "../../../theme";

export const setWrap = css({
  display: "flex",
  ...typography.s.regular
});

export const leftButton = css({
  border: `1px solid ${colors.gray.lighter}`,
  borderRadius: "3px 0px 0px 3px",
  padding: "10px 20px"
});

export const rightButton = css({
  border: `1px solid ${colors.gray.lighter}`,
  borderRadius: "0px 3px 3px 0px",
  padding: "10px 20px"
});

export const middleButton = css({
  borderTop: `1px solid ${colors.gray.lighter}`,
  borderBottom: `1px solid ${colors.gray.lighter}`,
  padding: "10px 20px"
});

export const selectedButton = css({
  backgroundColor: colors.gray.lighter
});
