import * as React from "react";
import { DropdownProps, DropdownState } from "./typings/Dropdown";
import Button from "./Button";
import { dropDownStyle } from "./styles/Dropdown.styles";
import { cx } from "react-emotion";
import OutsideClick from "./OutsideClick";

class DropDown extends React.PureComponent<DropdownProps, DropdownState> {
  state: DropdownState = {
    isOpen: this.props.initiallyOpen
  };

  static defaultProps = {
    isInitiallyOpen: true,
    closeOnClickOutside: true,
    type: "dropdown"
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
      type,
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
            <Button
              isSelected={isSelected}
              showShadow
              type={type}
              isOpen={isOpen}
              onClick={this.toggleDropdown}
              disabled={disabled}
            >
              {buttonLabel}
            </Button>
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
