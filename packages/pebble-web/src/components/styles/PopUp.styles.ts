import { css } from "emotion";
import { mixins, constants } from "../../theme";
import { colors } from "pebble-theme";

const modalPadding = 30;

export const modalContainer = css({
  background: "white",
  width: "360px",
  alignSelf: "center",
  borderRadius: constants.borderRadius,
  padding: `${modalPadding}px`,
  position: "relative"
});

export const buttonsContainer = css({
  ...mixins.flexSpaceBetween,
  marginTop: "40px"
});

export const iconCloseClassName = css({
  cursor: "pointer",
  position: "absolute",
  right: `${modalPadding}px`,
  top: `${modalPadding}px`,
  fontSize: "14px",
  color: colors.gray.base,
  "&:hover": {
    color: colors.gray.darker
  }
});
