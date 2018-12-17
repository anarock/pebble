import { Colors } from "../../theme/typings/colors";

import { SetDifference } from "utility-types";

export interface TagProps {
  label: string | number | JSX.Element;
  color: SetDifference<keyof typeof colors, "white">;
  className?: string;
  onClose?: () => void;
}
