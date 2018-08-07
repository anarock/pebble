import { css, keyframes } from "emotion";
import { colors, constants, typography } from "../../theme";

export const iconStyle = css({
  marginLeft: 15,
  fontWeight: "bold",
  fontSize: 12,
  transition: "transform ease-out .2s",
  willTransform: "transform",
  marginTop: 2
});

const { violet, gray, white } = colors;

const buttonPseudo = {
  primary: {
    color: white.base,
    backgroundColor: violet.base,
    "&:not(._pebble_btn_dropdown):not(._pebble_btn_disabled):hover": {
      backgroundColor: violet.light
    },
    "&:not(._pebble_btn_dropdown):not(_pebble_btn_disabled):active": {
      backgroundColor: violet.dark
    },
    "&._pebble_btn_disabled": {
      color: white.base,
      backgroundColor: violet.lighter
    }
  },
  secondary: {
    color: gray.darker,
    backgroundColor: gray.lighter,
    "&:not(._pebble_btn_dropdown):not(_pebble_btn_disabled):hover": {
      backgroundColor: gray.lightest
    },
    "&:not(._pebble_btn_dropdown):not(_pebble_btn_disabled):active": {
      backgroundColor: gray.light
    },
    "&._pebble_btn_disabled": {
      color: gray.base,
      backgroundColor: gray.lighter
    }
  }
};

const rotate = keyframes({
  from: {
    transform: "rotate(0deg)"
  },
  to: {
    transform: "rotate(360deg)"
  }
});

export const buttonStyle = css({
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
  "&._pebble_btn_disabled": {
    cursor: "not-allowed",
    backgroundColor: colors.white.base,
    ":focus": {
      border: "none"
    }
  },
  "&._pebble_btn_dropdown": {
    ...buttonPseudo.secondary,
    backgroundColor: white.base
  },
  "&._pebble_btn_dropdown_open": {
    ...buttonPseudo.primary,
    ":focus": {
      border: "none"
    }
  },
  "&._pebble_btn_dropdown_selected": {
    backgroundColor: colors.violet.base,
    color: colors.white.base
  },
  ":focus": {
    border: "none"
  },
  "&._pebble_btn_loading": {
    ".icon-spinner": {
      animation: `${rotate} 1500ms infinite linear`
    }
  },
  "&._pebble_btn_link": {
    backgroundColor: "transparent",
    border: 0,
    color: violet.base,
    minWidth: 0,
    padding: 0,
    fontSize: 14,
    ":not(._pebble_btn_disabled):hover": {
      textDecoration: "underline"
    },
    "&._pebble_btn_disabled": {
      color: violet.lighter,
      cursor: "not-allowed"
    }
  }
});

export const getDynamicButtonStyle = (isLarge, type, showShadow) => {
  const isPrimary = type === "primary";
  return css({
    ...(isLarge ? typography.normal.regular : typography.s.regular),
    minWidth: isLarge ? 140 : 100,
    height: isLarge ? 50 : 40,
    backgroundColor: isPrimary ? violet.base : gray.lighter,
    boxShadow: showShadow ? constants.boxShadow.base : "none",
    ...buttonPseudo[type]
  });
};
