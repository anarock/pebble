import { Colors } from "../../theme/typings/colors";

import { SetDifference } from "utility-types";

export interface TagProps {
  label: string | number;
  color: SetDifference<keyof Colors, "white">;
  className?: string;
  onClose?: () => void;
}
