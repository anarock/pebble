import * as React from "react";
import { css, cx } from "emotion";
import Modal from "./Modal";
import Button from "./Button";
import { mixins, typography } from "../theme";
import * as styles from "./styles/ConfirmationModal.styles";
import { ConfirmationModalProps } from "./typings/ConfirmationModal";

export default class ConfirmationModal extends React.Component<
  ConfirmationModalProps
> {
  render() {
    const { onClose, headingText, onApprove, visible } = this.props;
    return (
      <Modal visible={visible}>
        <div className={styles.modalContainer}>
          <div
            className={cx(
              css({ ...mixins.flexRow }),
              css({ justifyContent: "space-between" })
            )}
          >
            <div className={css({ ...typography.xl.bold })}>{headingText}</div>
            <i
              className={cx("pi", "pi-close", styles.iconClose)}
              onClick={onClose}
            />
          </div>
          <div className={styles.buttonsContainer}>
            <Button size="large" type="secondary" onClick={onClose}>
              No
            </Button>
            <Button size="large" type="primary" onClick={onApprove}>
              Yes
            </Button>
          </div>
        </div>
      </Modal>
    );
  }
}
