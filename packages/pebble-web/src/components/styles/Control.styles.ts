import css from "@emotion/css";
import { typography } from "../../theme";
import { colors } from "pebble-shared";

export const radioIconStyle = css({
  marginRight: 10,
  fontSize: 16,
  "[data-disabled='true'] &": {
    color: colors.gray.light
  }
});

export const controlStyle = css({
  cursor: "pointer",
  display: "flex",
  outline: "none",
  padding: "10px 0",
  position: "relative",
  alignItems: "center",
  ...typography.normal.regular,
  "&[data-disabled='true']": {
    cursor: "not-allowed"
  }
});
