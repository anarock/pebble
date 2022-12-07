interface Dense {
  darker: string;
  dark: string;
  base: string;
  light: string;
  lighter: string;
  lightest: string;
  border?: string;
}

interface White {
  base: string;
}

interface Light {
  base: string;
  light: string;
}

interface Blue {
  base: string;
  light: string;
  dark: string;
}

export interface Colors {
  violet: Dense;
  green: Light;
  yellow: Light;
  blue: Blue;
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
