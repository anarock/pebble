type Id = string | number;

type ControlType = "checkbox" | "radio";

export interface ControlsProps {
  className?: string;
  renderElement?: (
    args: {
      item: any;
      isSelected: boolean;
      index: number;
    },
    props: ControlsProps
  ) => JSX.Element | string | number;
  data: any[];
  keyExtractor?: (item: any) => Id;
  type?: ControlType;
  onChange: (
    args: {
      selected: Id | Id[];
    }
  ) => void;
  allowToggle?: boolean;
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
