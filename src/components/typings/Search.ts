export interface SearchProps {
  type: "small" | "large" | "table";
  onChange: (text: string) => void;
  value?: string;
  placeholder: string;
  showSearchIcon?: boolean;
  className?: string;
  showClearButton?: boolean;
  onClear?: () => void;
}
