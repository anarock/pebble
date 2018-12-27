import { css } from "emotion";
import { constants, mixins, typography } from "../../theme";
import { colors } from "pebble-theme";

export const wrapperStyle = css({
  backgroundColor: colors.white.base,
  borderRadius: constants.borderRadius,
  boxShadow: constants.boxShadow.xElevated,
  overflow: "hidden",
  padding: 20,
  position: "relative"
});

export const tileStyle = css({
  ...typography.normal.regular,
  height: 48,
  width: 48,
  padding: 0,
  position: "relative",
  textAlign: "center",
  cursor: "pointer",
  outline: "none",
  backgroundColor: colors.gray.lightest,
  borderRadius: constants.borderRadius,
  display: "table",
  borderCollapse: "collapse",
  border: `1px solid ${colors.white.base}`,
  borderLeft: 0,
  borderTop: 0,
  time: {
    fontFamily: "inherit"
  },
  "&.react-calendar__tile--now": {
    color: colors.violet.base
  },
  "&:hover": {
    backgroundColor: colors.gray.lighter
  },
  "&[disabled]": {
    color: colors.gray.base,
    "&:hover": {
      backgroundColor: colors.gray.lightest,
      cursor: "not-allowed"
    }
  },
  "&.react-calendar__tile--active": {
    backgroundColor: colors.violet.lightest,
    color: colors.violet.base
  },
  "&.react-calendar__tile--rangeStart": {
    backgroundColor: colors.violet.base,
    color: `${colors.white.base} !important`
  },
  "&.react-calendar__tile--rangeEnd": {
    backgroundColor: colors.violet.base,
    color: `${colors.white.base} !important`
  },
  "&.react-calendar__tile--singleSelect": {
    backgroundColor: colors.violet.base,
    color: colors.white.base
  },
  "&.react-calendar__month-view__days__day--neighboringMonth": {
    color: colors.gray.base
  }
});

export const dateStyle = css({
  width: 356,
  margin: 10,
  position: "relative",
  ".react-calendar__month-view__weekdays__weekday": {
    color: colors.gray.dark,
    lineSpacing: "7px",
    fontSize: 12,
    textAlign: "center"
  },
  ".react-calendar__navigation__arrow": {
    border: `1px solid ${colors.gray.light}`,
    padding: "8px 10px",
    borderRadius: constants.borderRadius,
    alignItems: "center",
    display: "flex",
    cursor: "pointer",
    outline: "none",
    height: 40,
    width: 40,
    backgroundColor: colors.white.base,
    "&.react-calendar__navigation__prev-button": {
      position: "absolute",
      right: 47
    },
    "&:disabled": {
      cursor: "not-allowed"
    }
  },
  ".react-calendar__navigation__label": {
    ...typography.xl.bold,
    textAlign: "left",
    border: 0,
    outline: "none",
    cursor: "pointer",
    backgroundColor: colors.white.base,
    paddingLeft: 5
  },
  ".react-calendar__month-view ": {
    marginTop: 30
  },
  ".react-calendar__month-view__weekdays": {
    marginBottom: 20
  },
  ".react-calendar__decade-view__years, .react-calendar__century-view, .react-calendar__year-view": {
    marginTop: 15
  }
});

export const dotWrapper = css({
  display: "flex",
  justifyContent: "center",
  position: "absolute",
  width: "100%"
});

export const dotStyle = css({
  height: 4,
  width: 4,
  display: "inline-block",
  borderRadius: constants.borderRadius,
  margin: "5px 2px 0"
});

export const buttonsWrapper = css({
  ...mixins.flexSpaceBetween,
  marginTop: 20
});
