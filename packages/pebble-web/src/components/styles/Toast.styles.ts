import css from "@emotion/css";
import { constants, typography } from "../../theme";
import { colors } from "pebble-shared";

export const toastWrapper = css({
  position: "fixed",
  borderRadius: constants.borderRadius,
  ...typography.normal.regular,
  color: colors.white.base,
  display: "flex",
  alignItems: "center",
  padding: "15px 20px",
  zIndex: 99999,

  "> i": {
    marginRight: 10
  }
});
