import { css, cx } from "emotion";
import * as styles from "./styles";

type Options = {
  placeholder?: string;
  errorMessage?: string;
  textArea?: boolean;
  loading?: boolean;
  clickable?: boolean;
  leftElement?: () => React.ReactNode;
  rightElement?: () => React.ReactNode;
  onBlur?: () => void;
};

export function getInputProps({
  placeholder,
  errorMessage,
  textArea,
  loading,
  clickable,

  leftElement,
  rightElement,

  onBlur
}: Options) {
  const inputStyles = textArea ? styles.textArea : styles.textInput;

  const hasLeftElement = !!leftElement;
  const hasRightElement = !!(loading || rightElement);
  const hasError = !!errorMessage;

  return {
    placeholder: "",
    errorMessage,
    readOnly: clickable,
    className: styles.wrapper,
    inputClassName: cx(inputStyles, clickable && css({ cursor: "pointer" })),
    inputWrapperClassName: cx(styles.inputWrapper, {
      [styles.inputWrapperLeft]: hasLeftElement,
      [styles.inputWrapperRight]: hasRightElement,
      [styles.inputWrapperError]: hasError
    }),
    highlightClassName: styles.underline,
    inputProps: {
      placeholder,
      onBlur
    }
  };
}
