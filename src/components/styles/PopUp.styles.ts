import { css } from "emotion";
import { colors, typography, mixins, constants } from "../../theme";

export const headingTextStyle = css({
  ...typography.xl.bold,
  lineHeight: "24px"
});

export const modalContainer = css({
  background: "white",
  width: "360px",
  alignSelf: "center",
  borderRadius: constants.borderRadius,
  padding: "30px"
});

export const buttonsContainer = css({
  ...mixins.flexSpaceBetween,
  marginTop: "40px"
});

export const iconClose = css({
  cursor: "pointer",
  right: "30px",
  fontSize: "14px",
  color: colors.gray.base,
  "&:hover": {
    color: colors.gray.darker
  }
});
