import { css } from "emotion";
import { colors, constants, typography } from "../../theme";
const { violet, gray, white, red, emerald } = colors;

export const iconStyle = css({
  marginLeft: 15,
  fontWeight: "bold",
  fontSize: 12,
  transition: "transform ease-out .2s",
  willTransform: "transform",
  marginTop: 2
});

const buttonPseudo = {
  primary: {
    color: white.base,
    backgroundColor: violet.base,
    "&:not([disabled]):hover": {
      backgroundColor: violet.light
    },
    "&:not([disabled]):active": {
      backgroundColor: violet.dark
    },
    "&[disabled]": {
      color: white.base,
      backgroundColor: violet.lighter
    }
  },
  secondary: {
    color: gray.darker,
    backgroundColor: gray.lighter,
    "&:not([disabled]):hover": {
      backgroundColor: gray.lightest
    },
    "&:not([disabled]):active": {
      backgroundColor: gray.light
    },
    "&[disabled]": {
      color: gray.base,
      backgroundColor: gray.lighter
    }
  },
  success: {
    color: white.base,
    backgroundColor: emerald.base,
    "&:not([disabled]):hover": {
      backgroundColor: emerald.light
    },
    "&:not([disabled]):active": {
      backgroundColor: emerald.light
    },
    "&[disabled]": {
      color: gray.base,
      backgroundColor: gray.lighter
    }
  },
  alert: {
    color: white.base,
    backgroundColor: red.base,
    "&:not([disabled]):hover": {
      backgroundColor: red.light
    },
    "&:not([disabled]):active": {
      backgroundColor: red.light
    },
    "&[disabled]": {
      color: gray.base,
      backgroundColor: gray.lighter
    }
  },
  link: {
    backgroundColor: "transparent",
    border: 0,
    color: violet.base,
    minWidth: 0,
    padding: 0,
    fontSize: 14,
    ":not([disabled]):hover": {
      textDecoration: "underline"
    },
    "&[disabled]": {
      color: violet.lighter
    }
  }
};

export const commonButtonStyle = css({
  lineHeight: "23px",
  height: constants.buttonHeight,
  padding: "0 20px",
  display: "flex",
  alignItems: "center",
  transition: "all ease-out .2s",
  borderRadius: constants.borderRadius,
  outline: "none",
  position: "relative",
  overflow: "hidden",
  cursor: "pointer",
  whiteSpace: "nowrap",
  justifyContent: "center",
  border: 0,
  "&[disabled]": {
    cursor: "not-allowed",
    backgroundColor: colors.white.base,
    ":focus": {
      border: "none"
    }
  },
  ":focus": {
    border: "none"
  }
});

const styleBasedOnSize = {
  "x-small": {
    height: 25,
    minWidth: 70,
    ...typography.xs.light
  },
  small: {
    height: 40,
    minWidth: 100,
    ...typography.s.regular
  },
  large: {
    height: 50,
    minWidth: 140,
    ...typography.normal.regular
  }
};

export const getButtonStyle = (size, type, showShadow) =>
  css([
    commonButtonStyle,
    {
      ...styleBasedOnSize[size],
      ...buttonPseudo[type],
      boxShadow: showShadow ? constants.boxShadow.base : "none"
    }
  ]);
