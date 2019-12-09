import { css } from "@emotion/core";
import { constants, typography } from "../../theme";
import { colors } from "pebble-shared";

export const messageWrapper = css({
  borderRadius: constants.borderRadius,
  ...typography.normal.regular,
  color: colors.white.base,
  height: 46,
  display: "flex",
  alignItems: "center",
  padding: 20,

  "> i": {
    marginRight: 10
  }
});
