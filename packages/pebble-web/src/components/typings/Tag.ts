import React from "react";
import { SetDifference } from "utility-types";
import { Colors } from "pebble-shared/dist/theme/typings/colors";

export interface TagProps {
  label: React.ReactNode;
  color: SetDifference<keyof Colors, "white">;
  className?: string;
  onClose?: () => void;
}
