import css from "@emotion/css";
import { mixins, constants } from "../../theme";
import { colors } from "pebble-shared";

const modalPadding = 30;

export const modalContainer = css({
  background: "white",
  width: "360px",
  alignSelf: "center",
  borderRadius: constants.borderRadius,
  padding: modalPadding,
  position: "relative"
});

export const flexCenter = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%"
});

export const buttonsContainer = css({
  ...mixins.flexSpaceBetween,
  marginTop: "40px"
});

export const iconCloseClassName = css({
  cursor: "pointer",
  position: "absolute",
  right: modalPadding,
  top: modalPadding,
  fontSize: "14px",
  color: colors.gray.base,
  "&:hover": {
    color: colors.gray.darker
  }
});
