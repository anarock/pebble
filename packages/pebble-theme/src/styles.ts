import { css } from "emotion";
import { constants } from "./constants";
import { typography } from "./typography";
import { colors } from "./colors";

export const tableStyle = css({
  borderRadius: constants.borderRadius,
  border: constants.border.dark,
  ...typography.s.regular,
  width: "100%",
  borderCollapse: "separate",
  borderSpacing: 0,
  backgroundColor: colors.gray.lightest,
  "tr:last-child": {
    td: {
      border: 0
    },
    "td:first-child": {
      borderBottomLeftRadius: constants.borderRadius
    },
    "td:last-child": {
      borderBottomRightRadius: constants.borderRadius
    }
  },
  "tr:first-child": {
    "th:first-child": {
      borderLeftLeftRadius: constants.borderRadius
    },
    "th:last-child": {
      borderLeftRightRadius: constants.borderRadius
    }
  },
  th: {
    textAlign: "left",
    ...typography.xs.bold,
    color: colors.gray.dark
  },
  "tbody > tr:nth-of-type(2n + 1)": {
    backgroundColor: colors.white.base
  },
  "th, td": {
    height: 50,
    padding: "10px 25px",
    borderBottom: constants.border.dark
  }
});

export const disableScrollY = css({
  overflowY: "hidden"
});
