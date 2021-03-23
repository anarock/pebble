export interface TabsState {
  selectedTab: string | null;
}

export interface TabsProps {
  initialSelectedTab?: string;
  selectedTab?: string;
  tabs: string[];
  tabClassName?: string;
  wrapClassName?: string;
  selectedTabClassName?: string;
  onTabChange?: (tab: string) => void;
  labels?: { [name: string]: string };
}

export interface TabSectionProps {
  section: string;
}
