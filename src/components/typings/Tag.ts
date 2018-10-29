import { colors } from "../../theme";
import { SetDifference } from "utility-types";

export interface TagProps {
  label: string;
  color: SetDifference<keyof typeof colors, "white">;
  className?: string;
  onClose?: () => void;
}
