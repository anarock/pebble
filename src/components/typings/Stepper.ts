import * as React from "react";

interface ButtonData {
  label: string;
  action: React.MouseEventHandler<HTMLButtonElement>;
}

interface ArgsCommon {
  goToPrev: () => void;
  goToNext: () => void;
  goToPage: (index: number) => void;
  leftButtonData: ButtonData;
  rightButtonData: ButtonData;
}

interface ArgsRenderContent extends ArgsCommon {
  item: any;
  isSelected: boolean;
}

export interface ArgsRenderFooter extends ArgsCommon {
  activeIndex: number;
}

export interface StepperProps {
  keyExtractor: (item: any) => number | string;
  data: any[];
  renderContentElement: (args: ArgsRenderContent) => JSX.Element;
  headingExtractor: ({ item: any }) => string;
  renderFooterElement: (
    args: ArgsRenderFooter,
    props: StepperProps
  ) => React.ReactNode;
  className?: string;
  initialSelectedIndex?: number;
  allowSkip: boolean;
  cancelLabel: string;
  onCancel: () => void;
  nextLabel: string;
  prevLabel: string;
  doneLabel: string;
  onDone: () => void;
  onBeforeNext: (index: number) => boolean;
  onBeforePrev: (index: number) => boolean;
  onChange: (args: { prev: number; current: number }) => void;
  isRightButtonLoading?: boolean;
}

export interface StepperState {
  active: number;
}
