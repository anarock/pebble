interface Violet {
  darker: string;
  dark: string;
  base: string;
  light: string;
  lighter: string;
  lightest: string;
}
interface White {
  base: string;
}
interface Secondary {
  base: string;
  light: string;
}
interface Gray {
  darker: string;
  dark: string;
  base: string;
  light: string;
  lighter: string;
  lightest: string;
}

export interface Colors {
  violet: Violet;
  green: Secondary;
  yellow: Secondary;
  blue: Secondary;
  white: White;
  emerald: Secondary;
  red: Secondary;
  purple: Secondary;
  pink: Secondary;
  teal: Secondary;
  coral: Secondary;
  jade: Secondary;
  gray: Gray;
}
