import { TypographyStyle } from "../../theme/typings/typography";
import { Interpolation } from "./emotionCustom";

export interface TextProps {
  color?: string;
  styles?: Interpolation;
  typography?: TypographyStyle;
}
