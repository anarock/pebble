import { SetDifference } from "utility-types";
import { Colors } from "../../theme/typings/colors";

export interface TagProps {
  label: string | number | JSX.Element;
  color: SetDifference<keyof Colors, "white">;
  className?: string;
  onClose?: () => void;
}
