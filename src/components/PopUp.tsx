import * as React from "react";
import { css, cx } from "emotion";
import Modal from "./Modal";
import Button from "./Button";
import { mixins } from "../theme";
import * as styles from "./styles/PopUp.styles";
import { PopUpProps } from "./typings/PopUp";

export default class PopUp extends React.Component<PopUpProps> {
  render() {
    const {
      onClose,
      headingText,
      onApprove,
      visible,
      approveButtonText,
      closeButtonText
    } = this.props;
    return (
      <Modal visible={visible}>
        <div className={styles.modalContainer}>
          <div
            className={cx(
              css({ ...mixins.flexRow }),
              css({ justifyContent: "space-between" })
            )}
          >
            <div className={styles.headingText}>{headingText}</div>
            <i
              className={cx("pi", "pi-close", styles.iconClose)}
              onClick={onClose}
            />
          </div>
          {(onClose || onApprove) && (
            <div className={styles.buttonsContainer}>
              {onClose && (
                <Button size="large" type="secondary" onClick={onClose}>
                  {closeButtonText || "No"}
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
  }
}
