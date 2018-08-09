import * as React from "react";
import { DropdownProps, DropdownState } from "./typings/Dropdown";
import { DropDownButton } from "./Button";
import { dropDownStyle } from "./styles/Dropdown.styles";
import { cx } from "emotion";
import OutsideClick from "./OutsideClick";

class DropDown extends React.PureComponent<DropdownProps, DropdownState> {
  state: DropdownState = {
    isOpen: this.props.initiallyOpen
  };

  static defaultProps: Partial<DropdownProps> = {
    closeOnClickOutside: true
  };

  private toggleDropdown = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const {
      buttonLabel,
      children,
      labelComponent,
      padding,
      className,
      dropDownClassName,
      isSelected,
      disabled
    } = this.props;
    const { isOpen } = this.state;

    return (
      <OutsideClick
        onOutsideClick={() =>
          this.setState({
            isOpen: false
          })
        }
        disabled={!isOpen}
      >
        <div className={className}>
          {labelComponent ? (
            labelComponent({ isOpen, toggleDropdown: this.toggleDropdown })
          ) : (
            <DropDownButton
              isSelected={isSelected}
              isOpen={isOpen}
              onClick={this.toggleDropdown}
              disabled={disabled}
            >
              {buttonLabel}
            </DropDownButton>
          )}
          {this.state.isOpen && (
            <div
              className={cx(dropDownStyle, dropDownClassName)}
              style={{ padding }}
            >
              {children({ toggle: this.toggleDropdown })}
            </div>
          )}
        </div>
      </OutsideClick>
    );
  }
}

export default DropDown;
