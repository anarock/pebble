import * as CSS from "csstype";

interface Style {
  fontSize: CSS.FontSizeProperty<number>;
  fontWeight: CSS.FontWeightProperty;
  color: CSS.ColorProperty;
}

export interface Type {
  light?: Style;
  bold?: Style;
  lighter?: Style;
  link?: Style;
  regular?: Style;
}

export interface Typography {
  xll: Type;
  xl: Type;
  l: Type;
  normal: Type;
  s: Type;
  xs: Type;
}
