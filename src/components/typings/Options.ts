export interface OptionsProps {
  options: any[];
  onSelect: (suggestion: any) => void;
  rowRenderElement?: (
    item: any,
    index?: number,
    selected?: boolean
  ) => JSX.Element | string;
  dropdownClassName?: string;
  width?: number | string;
  selected?: any;
  keyExtractor?: (item) => number | string;
  hideBorder?: boolean;
}

export interface OptionsState {
  selected: number;
}
