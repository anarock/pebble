import * as React from "react";
import { DropdownProps, DropdownState } from "./typings/Dropdown";
import { DropDownButton } from "./Button";
import { cx } from "emotion";
import Popper from "./Popper";

class DropDown extends React.PureComponent<DropdownProps, DropdownState> {
  static defaultProps: Partial<DropdownProps> = {
    closeOnOutsideClick: true
  };

  render() {
    const {
      buttonLabel,
      children,
      labelComponent,
      padding,
      dropDownClassName,
      isSelected,
      disabled,
      labelClassName,
      initiallyOpen
    } = this.props;

    return (
      <Popper
        isOpen={initiallyOpen}
        placement="bottom"
        label={({ isOpen, toggle }) => (
          <React.Fragment>
            {labelComponent ? (
              labelComponent({ isOpen, toggleDropdown: toggle })
            ) : (
              <DropDownButton
                isSelected={isSelected}
                isOpen={isOpen}
                onClick={toggle}
                disabled={disabled}
                className={labelClassName}
              >
                {buttonLabel}
              </DropDownButton>
            )}
          </React.Fragment>
        )}
      >
        {({ toggle }) => (
          <div className={cx(dropDownClassName)} style={{ padding }}>
            {children({ toggle: toggle })}
          </div>
        )}
      </Popper>
    );
  }
}

export default DropDown;
