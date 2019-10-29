// constants
interface BoxShadow {
  base: string;
  elevated: string;
  xElevated: string;
}

interface Padding {
  [key: string]: number;
}

interface Border {
  [key: string]: string;
}

export interface ThemeConstants {
  buttonHeight: number;
  boxShadow: BoxShadow;
  borderRadius: number;
  animationCurve: string;
  padding: Padding;
  border: Border;
}
