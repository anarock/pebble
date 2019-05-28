interface Dense {
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

interface Light {
  base: string;
  light: string;
}

export interface Colors {
  violet: Dense;
  green: Light;
  yellow: Light;
  blue: Light;
  white: White;
  emerald: Dense;
  red: Dense;
  purple: Light;
  pink: Light;
  teal: Light;
  coral: Light;
  jade: Light;
  gray: Dense;
}
