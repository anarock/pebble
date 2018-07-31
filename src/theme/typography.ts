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

enum FontWeight {
  NORMAL = 400,
  BOLD = 500
}

const typography: Typography = {
  // fontSize 22
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

  // fontSize 18
  xl: {
    bold: {
      fontWeight: FontWeight.BOLD,
      color: colors.gray.darker,
      fontSize: fontSize.xl
    }
  },

  // fontSize 16
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

  // fontSize 14
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

  // fontSize 12
  s: {
    regular: {
      fontWeight: FontWeight.NORMAL,
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

  // fontSize 10
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

export default typography;
