// tslint:disable-next-line no-any
type Option = any;

export interface OptionsProps {
  options: Option[];
  onSelect: (suggestion: Option) => void;
  rowRenderElement?: (
    item: Option,
    index?: number,
    selected?: boolean
  ) => JSX.Element | string;
  dropdownClassName?: string;
  width?: number | string;
  selected?: Option;
  keyExtractor?: (item: Option) => number | string;
  hideBorder?: boolean;
}

export interface OptionsState {
  selected: number;
}
