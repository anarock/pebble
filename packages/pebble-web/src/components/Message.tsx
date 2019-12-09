import * as React from "react";

import { _colors } from "./Toast";
import { messageWrapper } from "./styles/Message.styles";
import { AlertProps } from "./typings/Message";

const Message: React.FunctionComponent<AlertProps> = ({
  intent,
  styles,
  text
}) => {
  const bColor = _colors[intent];

  return (
    <div
      css={[messageWrapper, styles]}
      style={{
        backgroundColor: bColor
      }}
    >
      <i
        className={`pi ${(intent === "success" && "pi-radio-check-filled") ||
          ""} ${(intent === "error" && "pi-close-circle-filled") || ""}`}
      />
      {text}
    </div>
  );
};

export default Message;
