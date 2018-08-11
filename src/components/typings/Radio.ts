export interface RadioProps {
  onChange: (args: { value: number | string; checked: boolean }) => void;
  value: number | string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
  children?: (props: RadioProps) => JSX.Element | string | number;
}
