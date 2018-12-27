import { css } from "emotion";
import { colors } from "pebble-theme";

export const timePickerWrap = css({
  display: "flex",
  alignItems: "center"
});

export const timePickerSelected = css({
  backgroundColor: colors.gray.lighter
});

export const hourPicker = css({
  borderRadius: "3px 0px 0px 3px",
  borderRight: "none"
});

export const seperator = css({
  borderTop: `1px solid ${colors.gray.light}`,
  borderBottom: `1px solid ${colors.gray.light}`,
  padding: "10px 0px",
  color: colors.gray.dark
});

export const minutePicker = css({
  borderLeft: "none",
  borderRadius: "0px 3px 3px 0px"
});

export const optionStyle = css({
  width: "100px"
});
