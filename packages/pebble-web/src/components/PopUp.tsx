import * as React from "react";
import { cx } from "emotion";
import Modal from "./Modal";
import Button from "./Button";
import {
  modalContainer,
  buttonsContainer,
  iconCloseClassName,
  flexCenter
} from "./styles/PopUp.styles";
import { PopUpProps } from "./typings/PopUp";
import { getPopUpTestIds, getTestIds } from "../utils/testIds";

const PopUp: React.FunctionComponent<PopUpProps> = props => {
  const {
    onClose,
    onApprove,
    onReject,
    visible,
    approveButtonText = "Yes",
    rejectButtonText = "No",
    children,
    approveButtonProps,
    rejectButtonProps,
    testId
  } = props;
  const {closeButtonId, approveButtonId, rejectButtonId} = getTestIds(testId, id => getPopUpTestIds(id));
  return (
    <Modal visible={visible} modalClassName={flexCenter}>
      <div className={modalContainer}>
        {onClose && (
          <i
            className={cx("pi", "pi-close", iconCloseClassName)}
            onClick={onClose}
            data-testid={closeButtonId}
          />
        )}
        {children}
        {(onReject || onApprove) && (
          <div className={buttonsContainer}>
            {onReject && (
              <Button
                size="large"
                type="secondary"
                onClick={onReject}
                {...rejectButtonProps}
                testId={rejectButtonId}
              >
                {rejectButtonText}
              </Button>
            )}
            {onApprove && (
              <Button
                size="large"
                type="primary"
                onClick={onApprove}
                {...approveButtonProps}
                testId={approveButtonId}
              >
                {approveButtonText}
              </Button>
            )}
          </div>
        )}
      </div>
    </Modal>
  );
};

export default PopUp;
