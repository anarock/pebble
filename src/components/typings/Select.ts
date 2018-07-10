import { OptionsProps } from "./Options";

export interface SelectProps extends OptionsProps {
  className?: string;
  title: string;
  placeholder: string;
  required?: boolean;
  errorMessage?: string;
}
