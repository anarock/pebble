import { css } from "emotion";
import { constants, mixins, typography } from "../../theme";
import { getPlaceholderStyle } from "../../theme/mixins";
import { colors } from "pebble-theme";

export const searchWrapperStyle = css({
  borderRadius: constants.borderRadius,
  padding: "0 20px",
  ...mixins.flexRow,
  alignItems: "center",
  height: 40,
  "> i": {
    marginRight: 10,
    fontSize: 12
  },
  "&.__pebble__search__small": {
    backgroundColor: colors.gray.lightest
  },
  "&.__pebble__search__large": {
    backgroundColor: colors.white.base,
    height: 76,
    padding: "0 25px",
    boxShadow: constants.boxShadow.base
    // input: typography.normal.regular
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
  flexGrow: 1,
  ...mixins.textEllipsis,
  ...typography.s.regular,
  .../*#__PURE__*/ getPlaceholderStyle(colors.gray.base),
  backgroundColor: "transparent"
});

export const clearContainer = css({
  display: "table",
  height: 16,
  width: 16,
  backgroundColor: colors.gray.light,
  fontSize: 6,
  borderRadius: 16,
  textAlign: "center",
  cursor: "pointer",
  pointerEvents: "none",
  transition: "opacity 0.3s",
  opacity: 0,
  "&.__display": {
    opacity: 1,
    pointerEvents: "unset"
  }
});
