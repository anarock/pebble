import * as React from "react";
import { cx } from "emotion";
import { _colors } from "./Toast";
import { messageWrapper } from "./styles/Message.styles";
import { AlertProps } from "./typings/Message";

const Message: React.FunctionComponent<AlertProps> = ({
  intent,
  className,
  text,
  testId
}) => {
  const bColor = _colors[intent];

  const iconClass = cx("pi", {
    "pi-radio-check-filled": intent === "success",
    "pi-close-circle-filled": intent === "error"
  });

  return (
    <div
      className={cx(messageWrapper, className)}
      style={{
        backgroundColor: bColor
      }}
      data-testid={testId}
    >
      <i className={iconClass} />
      {text}
    </div>
  );
};

export default Message;
