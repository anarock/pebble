interface ButtonData {
  label: string;
  action: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface StepperProps {
  keyExtractor: (item: any) => number | string;
  data: any[];
  renderContentElement: (
    args: {
      item: any;
      isSelected: boolean;
      goToPrev: () => void;
      goToNext: () => void;
      goToPage: (index: number) => void;
      leftButtonData: ButtonData;
      rightButtonData: ButtonData;
    }
  ) => JSX.Element;
  headingExtractor: ({ item: any }) => string;
  renderFooterElement?: (
    currentIndex: number,
    props: StepperProps
  ) => JSX.Element;
  className?: string;
  initialSelectedIndex?: number;
  allowSkip?: boolean;
  cancelLabel?: string;
  onCancel?: () => void;
  nextLabel?: string;
  prevLabel?: string;
  doneLabel?: string;
  onDone?: () => void;
  onBeforeNext?: (index: number) => boolean;
  onBeforePrev?: (index: number) => boolean;
  onChange?: (args: { prev: number; current: number }) => void;
}

export interface StepperState {
  active: number;
}
