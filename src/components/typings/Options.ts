export interface OptionsProps {
  options: any[];
  onSelect: (
    args: {
      selected: number | string | (number | string)[];
    },
    props: OptionsProps
  ) => void;
  rowRenderElement?: (
    args: {
      item: any;
      index: number;
      isActive: boolean;
      isSelected: boolean;
    }
  ) => JSX.Element | string | number;
  dropdownClassName?: string;
  width?: number | string;
  selected?: any;
  keyExtractor?: (item) => number | string;
  hideBorder?: boolean;
}

export interface OptionsState {
  selected: number;
}
