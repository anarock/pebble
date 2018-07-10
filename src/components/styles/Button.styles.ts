import styled, { css } from "react-emotion";
import { colors, constants, typography } from "../../theme";

export const Icon = styled("i")(
  {
    marginLeft: 15,
    fontWeight: "bold",
    fontSize: 12,
    transition: "transform ease-out .2s",
    willTransform: "transform",
    marginTop: 2
  },
  ({ isOpen }: any) => ({
    transform: isOpen ? "rotate(180deg)" : "none"
  })
);

const { violet, gray, white } = colors;

const buttonPseudo = {
  primary: {
    color: white.base,
    backgroundColor: violet.base,
    "&:not(.__pebble__button__dropdown):not(.__pebble__button__disabled):hover": {
      backgroundColor: violet.light
    },
    "&:not(.__pebble__button__dropdown):not(__pebble__button__disabled):active": {
      backgroundColor: violet.dark
    },
    "&.__pebble__button__disabled": {
      color: white.base,
      backgroundColor: violet.lighter
    }
  },
  secondary: {
    color: gray.darker,
    backgroundColor: gray.lighter,
    "&:not(.__pebble__button__dropdown):not(__pebble__button__disabled):hover": {
      backgroundColor: gray.lightest
    },
    "&:not(.__pebble__button__dropdown):not(__pebble__button__disabled):active": {
      backgroundColor: gray.light
    },
    "&.__pebble__button__disabled": {
      color: gray.base,
      backgroundColor: gray.lighter
    }
  }
};

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
  "&.__pebble__button__disabled": {
    cursor: "not-allowed",
    ":focus": {
      border: "none"
    }
  },
  "&.__pebble__button__dropdown": {
    ...buttonPseudo.secondary,
    backgroundColor: white.base
  },
  "&.__pebble__button__dropdown__open": {
    ...buttonPseudo.primary,
    ":focus": {
      border: "none"
    }
  },
  "&.__pebble__button__dropdown__selected": {
    backgroundColor: colors.violet.base,
    color: colors.white.base
  },
  ":focus": {
    border: "none"
  },
  "&.__pebble__button_link": {
    backgroundColor: "transparent",
    border: 0,
    color: violet.base,
    minWidth: 0,
    fontSize: 14,
    ":not(.__pebble__button__disabled):hover": {
      textDecoration: "underline"
    },
    "&.__pebble__button__disabled": {
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
