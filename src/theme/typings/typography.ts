import * as CSS from "csstype";

export interface TypographyStyle {
  fontSize: CSS.FontSizeProperty<number>;
  fontWeight: CSS.FontWeightProperty;
  color: CSS.ColorProperty;
}

export interface Type {
  light?: TypographyStyle;
  bold?: TypographyStyle;
  lighter?: TypographyStyle;
  link?: TypographyStyle;
  regular?: TypographyStyle;
}

export interface Typography {
  xll: Type;
  xl: Type;
  l: Type;
  normal: Type;
  s: Type;
  xs: Type;
}
