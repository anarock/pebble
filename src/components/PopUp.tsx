import * as React from "react";
import { cx } from "emotion";
import Modal from "./Modal";
import Button from "./Button";
import {
  modalContainer,
  buttonsContainer,
  iconCloseClassName
} from "./styles/PopUp.styles";
import { PopUpProps } from "./typings/PopUp";

const PopUp: React.SFC<PopUpProps> = props => {
  const {
    onClose,
    onApprove,
    onReject,
    visible,
    approveButtonText,
    rejectButtonText,
    children
  } = props;
  return (
    <Modal visible={visible}>
      <div className={modalContainer}>
        {onClose && (
          <i
            className={cx("pi", "pi-close", iconCloseClassName)}
            onClick={onClose}
          />
        )}
        {children}
        {(onReject || onApprove) && (
          <div className={buttonsContainer}>
            {onReject && (
              <Button size="large" type="secondary" onClick={onReject}>
                {rejectButtonText || "No"}
              </Button>
            )}
            {onApprove && (
              <Button size="large" type="primary" onClick={onApprove}>
                {approveButtonText || "Yes"}
              </Button>
            )}
          </div>
        )}
      </div>
    </Modal>
  );
};

export default PopUp;
