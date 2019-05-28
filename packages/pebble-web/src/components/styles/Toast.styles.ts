import { css } from "emotion";
import { colors, constants, typography } from "../../theme";

export const toastWrapper = css({
  position: "fixed",
  borderRadius: constants.borderRadius,
  ...typography.normal.regular,
  color: colors.white.base,
  height: 46,
  display: "flex",
  alignItems: "center",
  padding: 20,
  zIndex: 99999,

  "> i": {
    marginRight: 10
  }
});
