import { css } from "emotion";
import { colors, constants, typography } from "../../theme";
import { ButtonType, MappingColorByType } from "../typings/Button";

const { violet, gray, white, red, emerald } = colors;

export const smallButtonHeight = 40;

const commonButtonStyle = css({
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
    cursor: "not-allowed"
  }
});

const mappingColorByType: MappingColorByType = {
  primary: {
    base: violet.base,
    hover: violet.light,
    active: violet.dark,
    disabled: violet.lighter
  },
  secondary: {
    textColor: gray.darker,
    base: gray.lighter,
    hover: gray.lightest,
    active: gray.base,
    disabled: gray.lighter
  },
  success: {
    base: emerald.base,
    hover: emerald.light,
    active: emerald.dark,
    disabled: emerald.lighter
  },
  alert: {
    base: red.base,
    hover: red.light,
    active: red.dark,
    disabled: red.lighter
  }
};

const linkStyle = {
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
};

const getStyleByType = (type: ButtonType, filled: boolean) => {
  if (type === "link") return linkStyle;

  const _color = mappingColorByType[type];
  const { base: colorBase, disabled, hover, active, textColor } = _color;

  const defaultFontColor = filled ? textColor || white.base : colorBase;

  return {
    color: defaultFontColor,
    backgroundColor: filled ? colorBase : white.base,
    border: filled ? "none" : `1px solid ${colorBase}`,
    "&:not([disabled]):hover": {
      color: textColor || white.base,
      backgroundColor: hover,
      borderColor: hover
    },
    "&:not([disabled]):active": {
      color: textColor || white.base,
      backgroundColor: active,
      borderColor: active
    },
    "&[disabled]": {
      color: textColor || white.base,
      backgroundColor: disabled,
      borderColor: disabled
    }
  };
};

const styleBasedOnSize = {
  "x-small": {
    height: 25,
    minWidth: 70,
    ...typography.xs.light
  },
  small: {
    height: smallButtonHeight,
    minWidth: 100,
    ...typography.s.regular
  },
  large: {
    height: 50,
    minWidth: 140,
    ...typography.normal.regular
  }
};

export const getButtonStyle = (
  size: keyof typeof styleBasedOnSize,
  type: ButtonType,
  showShadow: boolean,
  filled: boolean
) => {
  return css([
    commonButtonStyle,
    {
      ...styleBasedOnSize[size],
      ...getStyleByType(type, filled),
      boxShadow: showShadow ? constants.boxShadow.base : "none"
    }
  ]);
};

export const iconStyle = css({
  marginLeft: 15,
  fontWeight: "bold",
  fontSize: 8,
  transition: "transform ease-out .2s",
  willTransform: "transform",
  marginTop: 2,
  color: colors.gray.dark
});

export const dropDownButtonStyle = css({
  border: constants.border.base,
  "&:not([disabled]):hover": {
    backgroundColor: colors.gray.lighter
  }
});

export const dropDownButtonDefaultStyle = css({
  backgroundColor: colors.white.base,
  color: colors.gray.darker,
  "&:not([disabled]):hover": {
    backgroundColor: colors.gray.lighter
  }
});
