import { ControlType } from "../Controls";

type Id = string | number;

export interface ControlsProps {
  className?: string;
  renderElement?: (
    args: {
      item: any;
      isSelected: boolean;
    },
    props: ControlsProps
  ) => JSX.Element;
  data: any[];
  keyExtractor: (item: any) => Id;
  type: ControlType;
  onChange: (
    args: {
      selected: Id | Id[];
    }
  ) => void;
  allowUnselectForRadio?: boolean;
  selected: Id | Id[];
  labelExtractor?: (item: any) => string;
  errorMessage?: string;
}

export interface ControlViewProps {
  label: string;
  type: ControlType;
  isSelected: boolean;
  className?: string;
}
