import { css } from "emotion";
import { colors, constants, mixins, typography } from "../../theme";
import { getPlaceholderStyle } from "../../theme/mixins";

export const searchWrapperStyle = css({
  borderRadius: constants.borderRadius,
  padding: "0 20px",
  ...mixins.flexRow,
  alignItems: "center",
  height: 40,
  "> i": {
    marginRight: 10
  },
  "&.__pebble__search__small": {
    backgroundColor: colors.gray.lightest
  },
  "&.__pebble__search__large": {
    backgroundColor: colors.white.base,
    height: 76,
    padding: "0 25px",
    boxShadow: constants.boxShadow.base,
    input: typography.normal.regular
  },
  "&.__pebble__search__table": {
    border: `1px solid ${colors.gray.light}`,
    backgroundColor: colors.white.base,
    i: {
      color: colors.gray.dark
    }
  }
});

export const searchStyle = css({
  borderRadius: constants.borderRadius,
  outline: "none",
  border: 0,
  height: "inherit",
  ...mixins.textEllipsis,
  ...typography.s.regular,
  ...getPlaceholderStyle(colors.gray.light),
  backgroundColor: "transparent"
});
