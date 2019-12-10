import { Interpolation } from "./emotionCustom";

export interface TabsState {
  selectedTab: string | null;
}

export interface TabsProps {
  initialSelectedTab?: string;
  selectedTab?: string;
  tabs: string[];
  tabStyles?: Interpolation;
  wrapStyles?: Interpolation;
  onTabChange?: (tab: string) => void;
  labels?: { [name: string]: string };
}

export interface TabSectionProps {
  section: string;
}
