import { TypographyStyle } from "../../theme/typings/typography";
import { Interpolation } from "@emotion/css";

export interface TextProps {
  color?: string;
  styles?: Interpolation;
  typography?: TypographyStyle;
}
