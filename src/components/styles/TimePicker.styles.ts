import { css } from "emotion";
import { colors } from "../../theme";

export const timePickerWrap = css({
  display: "flex",
  alignItems: "center",
  border: `1px solid ${colors.gray.light}`,
  borderRadius: "3px",
  cursor: "pointer",
  "&:not([disabled]):hover": {
    background: colors.gray.light
  }
});

export const timePickerSelected = css({
  backgroundColor: colors.gray.lighter
});

export const hourPicker = css({
  borderRadius: "3px 0px 0px 3px",
  borderRight: "none"
});

export const seperator = css({
  color: colors.gray.dark,
  lineHeight: "40px"
});

export const minutePicker = css({
  borderLeft: "none",
  borderRadius: "0px 3px 3px 0px"
});

export const optionStyle = css({
  width: "100px"
});
