import { Typography } from "./typings/typography";
import { colors } from "pebble-theme";

const fontSize = {
  xs: 10,
  s: 12,
  normal: 14,
  l: 16,
  xl: 18,
  xll: 22
};

const enum FontWeight {
  NORMAL = 400,
  BOLD = 500
}

export const typography: Typography = {
  xll: {
    regular: {
      fontWeight: FontWeight.NORMAL,
      color: colors.gray.darker,
      fontSize: fontSize.xll
    },
    bold: {
      fontWeight: FontWeight.BOLD,
      color: colors.gray.darker,
      fontSize: fontSize.xll
    }
  },

  xl: {
    bold: {
      fontWeight: FontWeight.BOLD,
      color: colors.gray.darker,
      fontSize: fontSize.xl
    }
  },

  l: {
    bold: {
      fontWeight: FontWeight.BOLD,
      color: colors.gray.dark,
      fontSize: fontSize.l
    },
    light: {
      fontWeight: FontWeight.NORMAL,
      color: colors.gray.dark,
      fontSize: fontSize.l
    }
  },

  normal: {
    regular: {
      fontWeight: FontWeight.NORMAL,
      color: colors.gray.darker,
      fontSize: fontSize.normal
    },
    bold: {
      fontWeight: FontWeight.BOLD,
      color: colors.gray.darker,
      fontSize: fontSize.normal
    },
    light: {
      fontWeight: FontWeight.NORMAL,
      color: colors.gray.dark,
      fontSize: fontSize.normal
    },
    lighter: {
      fontWeight: FontWeight.NORMAL,
      color: colors.gray.base,
      fontSize: fontSize.normal
    },
    link: {
      fontWeight: FontWeight.NORMAL,
      color: colors.violet.base,
      fontSize: fontSize.normal
    }
  },

  s: {
    regular: {
      fontWeight: FontWeight.NORMAL,
      color: colors.gray.darker,
      fontSize: fontSize.s
    },
    bold: {
      fontWeight: FontWeight.BOLD,
      color: colors.gray.darker,
      fontSize: fontSize.s
    },
    light: {
      fontWeight: FontWeight.NORMAL,
      color: colors.gray.dark,
      fontSize: fontSize.s
    },
    lighter: {
      fontWeight: FontWeight.NORMAL,
      color: colors.gray.base,
      fontSize: fontSize.s
    },
    link: {
      fontWeight: FontWeight.NORMAL,
      color: colors.violet.base,
      fontSize: fontSize.s
    }
  },

  xs: {
    bold: {
      fontWeight: FontWeight.BOLD,
      color: colors.gray.darker,
      fontSize: fontSize.xs
    },
    light: {
      fontWeight: FontWeight.NORMAL,
      color: colors.gray.dark,
      fontSize: fontSize.xs
    }
  }
};
