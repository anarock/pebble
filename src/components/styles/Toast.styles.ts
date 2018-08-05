import { css } from "emotion";
import { colors, constants, typography } from "../../theme";

export const toastWrapper = css({
  position: "fixed",
  bottom: 50,
  borderRadius: constants.borderRadius,
  ...typography.normal.regular,
  color: colors.white.base,
  height: 46,
  display: "flex",
  alignItems: "center",
  padding: 20,
  zIndex: 99999,
  left: "50%",

  "> i": {
    marginRight: 10
  }
});
