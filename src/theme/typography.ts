import { Typography } from "./typings/typography";
import colors from "./colors";

const fontSize = {
  xs: 10,
  s: 12,
  normal: 14,
  l: 16,
  xl: 18,
  xll: 22
};

const typography: Typography = {
  // fontSize 22
  xll: {
    regular: {
      fontWeight: "normal",
      color: colors.gray.darker,
      fontSize: fontSize.xll
    },
    bold: {
      fontWeight: "bold",
      color: colors.gray.darker,
      fontSize: fontSize.xll
    }
  },

  // fontSize 18
  xl: {
    bold: {
      fontWeight: "bold",
      color: colors.gray.darker,
      fontSize: fontSize.xl
    }
  },

  // fontSize 16
  l: {
    // todo: add in design system
    bold: {
      fontWeight: "bold",
      color: colors.gray.dark,
      fontSize: fontSize.l
    },
    light: {
      fontWeight: "normal",
      color: colors.gray.dark,
      fontSize: fontSize.l
    }
  },

  // fontSize 14
  normal: {
    regular: {
      fontWeight: "normal",
      color: colors.gray.darker,
      fontSize: fontSize.normal
    },
    bold: {
      fontWeight: "bold",
      color: colors.gray.darker,
      fontSize: fontSize.normal
    },
    light: {
      fontWeight: "normal",
      color: colors.gray.dark,
      fontSize: fontSize.normal
    },
    lighter: {
      fontWeight: "normal",
      color: colors.gray.base,
      fontSize: fontSize.normal
    },
    link: {
      fontWeight: "normal",
      color: colors.violet.base,
      fontSize: fontSize.normal
    }
  },

  // fontSize 12
  s: {
    regular: {
      fontWeight: "normal",
      color: colors.gray.darker,
      fontSize: fontSize.s
    },
    light: {
      fontWeight: "normal",
      color: colors.gray.dark,
      fontSize: fontSize.s
    },
    lighter: {
      fontWeight: "normal",
      color: colors.gray.base,
      fontSize: fontSize.s
    },
    link: {
      fontWeight: "normal",
      color: colors.violet.base,
      fontSize: fontSize.s
    }
  },

  // fontSize 10
  xs: {
    bold: {
      fontWeight: "bold",
      color: colors.gray.darker,
      fontSize: fontSize.xs
    },
    light: {
      fontWeight: "normal",
      color: colors.gray.dark,
      fontSize: fontSize.xs
    }
  }
};

export default typography;
