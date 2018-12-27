import * as React from "react";
import { DropdownProps, DropdownState } from "./typings/Dropdown";
import { DropDownButton } from "./Button";
import { dropDownStyle, wrapperStyle } from "./styles/Dropdown.styles";
import { cx } from "emotion";
import OutsideClick from "./OutsideClick";
import { animated } from "react-spring";
import MountTransition from "./shared/MountTransition";

class DropDown extends React.PureComponent<DropdownProps, DropdownState> {
  state: DropdownState = {
    isOpen: !!this.props.initiallyOpen
  };

  static defaultProps: Partial<DropdownProps> = {
    closeOnOutsideClick: true
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
      disabled,
      labelClassName,
      onOutsideClick
    } = this.props;
    const { isOpen } = this.state;

    return (
      <OutsideClick
        className={cx(wrapperStyle, className)}
        onOutsideClick={() => {
          this.setState({
            isOpen: false
          });
          if (onOutsideClick) onOutsideClick(isOpen);
        }}
        disabled={!isOpen}
      >
        {labelComponent ? (
          labelComponent({ isOpen, toggleDropdown: this.toggleDropdown })
        ) : (
          <DropDownButton
            isSelected={!!isSelected}
            isOpen={isOpen}
            onClick={this.toggleDropdown}
            disabled={disabled}
            className={labelClassName}
          >
            {buttonLabel}
          </DropDownButton>
        )}
        <MountTransition visible={isOpen} native>
          {transitionStyles => (
            <animated.div
              className={cx(dropDownStyle, dropDownClassName)}
              style={{ padding, ...transitionStyles }}
            >
              {children({ toggle: this.toggleDropdown, isOpen })}
            </animated.div>
          )}
        </MountTransition>
      </OutsideClick>
    );
  }
}

export default DropDown;
