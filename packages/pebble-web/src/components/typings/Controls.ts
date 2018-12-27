type Id = string | number;

type ControlType = "checkbox" | "radio";

// tslint:disable-next-line no-any
type Item = any;

export interface ControlsProps {
  className?: string;
  renderElement: (
    args: {
      item: Item;
      isSelected: boolean;
    },
    props: ControlsProps
  ) => JSX.Element;
  data: Item[];
  keyExtractor: (item: Item) => Id;
  type: ControlType;
  onChange: (
    args: {
      selected: Id | Id[];
    }
  ) => void;
  allowToggle?: boolean;
  selected: Id | Id[];
  labelExtractor: (item: Item) => string;
  errorMessage?: string;
}

export interface ControlViewProps {
  label: string;
  type: ControlType;
  isSelected: boolean;
  className?: string;
}
