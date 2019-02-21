import { colors } from "./colors";
const fontSize = {
  xs: 10,
  s: 12,
  normal: 14,
  l: 16,
  xl: 18,
  xll: 22
};
var FontWeight;
(function(FontWeight) {
  FontWeight[(FontWeight["NORMAL"] = 400)] = "NORMAL";
  FontWeight[(FontWeight["BOLD"] = 500)] = "BOLD";
})(FontWeight || (FontWeight = {}));
export const typography = {
  xll: {
    regular: {
      fontWeight: 400 /* NORMAL */,
      color: colors.gray.darker,
      fontSize: fontSize.xll
    },
    bold: {
      fontWeight: 500 /* BOLD */,
      color: colors.gray.darker,
      fontSize: fontSize.xll
    }
  },
  xl: {
    bold: {
      fontWeight: 500 /* BOLD */,
      color: colors.gray.darker,
      fontSize: fontSize.xl
    }
  },
  l: {
    bold: {
      fontWeight: 500 /* BOLD */,
      color: colors.gray.dark,
      fontSize: fontSize.l
    },
    light: {
      fontWeight: 400 /* NORMAL */,
      color: colors.gray.dark,
      fontSize: fontSize.l
    }
  },
  normal: {
    regular: {
      fontWeight: 400 /* NORMAL */,
      color: colors.gray.darker,
      fontSize: fontSize.normal
    },
    bold: {
      fontWeight: 500 /* BOLD */,
      color: colors.gray.darker,
      fontSize: fontSize.normal
    },
    light: {
      fontWeight: 400 /* NORMAL */,
      color: colors.gray.dark,
      fontSize: fontSize.normal
    },
    lighter: {
      fontWeight: 400 /* NORMAL */,
      color: colors.gray.base,
      fontSize: fontSize.normal
    },
    link: {
      fontWeight: 400 /* NORMAL */,
      color: colors.violet.base,
      fontSize: fontSize.normal
    }
  },
  s: {
    regular: {
      fontWeight: 400 /* NORMAL */,
      color: colors.gray.darker,
      fontSize: fontSize.s
    },
    bold: {
      fontWeight: 500 /* BOLD */,
      color: colors.gray.darker,
      fontSize: fontSize.s
    },
    light: {
      fontWeight: 400 /* NORMAL */,
      color: colors.gray.dark,
      fontSize: fontSize.s
    },
    lighter: {
      fontWeight: 400 /* NORMAL */,
      color: colors.gray.base,
      fontSize: fontSize.s
    },
    link: {
      fontWeight: 400 /* NORMAL */,
      color: colors.violet.base,
      fontSize: fontSize.s
    }
  },
  xs: {
    bold: {
      fontWeight: 500 /* BOLD */,
      color: colors.gray.darker,
      fontSize: fontSize.xs
    },
    light: {
      fontWeight: 400 /* NORMAL */,
      color: colors.gray.dark,
      fontSize: fontSize.xs
    }
  }
};
//# sourceMappingURL=typography.js.map
