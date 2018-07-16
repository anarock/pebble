import * as React from "react";
import { DropdownProps, DropdownState } from "./typings/Dropdown";
import Button from "./Button";
import { dropDownStyle } from "./styles/Dropdown.styles";
import { cx } from "react-emotion";
import { Transition, animated } from "react-spring";

class DropDown extends React.PureComponent<DropdownProps, DropdownState> {
  componentRef: React.RefObject<HTMLDivElement> = React.createRef();

  state: DropdownState = {
    isOpen: this.props.initiallyOpen
  };

  static defaultProps = {
    isInitiallyOpen: true,
    closeOnClickOutside: true,
    type: "dropdown"
  };

  private toggleDropdown = () => {
    this.setState(
      {
        isOpen: !this.state.isOpen
      },
      () => {
        if (!this.state.isOpen) {
          this.removeClickListener();
        } else {
          this.addClickListener();
        }
      }
    );
  };

  addClickListener = () =>
    this.props.closeOnClickOutside &&
    document.addEventListener("mousedown", this.handleOutsideClick);

  removeClickListener = () =>
    document.removeEventListener("mousedown", this.handleOutsideClick);

  handleOutsideClick = (e: MouseEvent) => {
    if (
      this.componentRef &&
      !this.componentRef.current.contains(e.target as HTMLInputElement)
    ) {
      return this.toggleDropdown();
    }
  };

  componentWillUnmount() {
    this.removeClickListener();
  }

  render() {
    const {
      buttonLabel,
      children,
      type,
      labelComponent,
      padding,
      className,
      dropDownClassName,
      isSelected
    } = this.props;
    const { isOpen } = this.state;

    return (
      <div className={className} ref={this.componentRef}>
        {labelComponent ? (
          labelComponent({ isOpen, toggleDropdown: this.toggleDropdown })
        ) : (
          <Button
            isSelected={isSelected}
            showShadow
            type={type}
            isOpen={isOpen}
            onClick={this.toggleDropdown}
          >
            {buttonLabel}
          </Button>
        )}
        <Transition
          native
          from={{ opacity: 0, transform: "translateY(10px)" }}
          enter={{ opacity: 1, transform: "translateY(0)" }}
          leave={{ opacity: 0, transform: "translateY(10px)" }}
        >
          {this.state.isOpen
            ? styles => (
                <animated.div
                  className={cx(dropDownStyle, dropDownClassName)}
                  style={{ ...styles, padding }}
                >
                  {children({ toggle: this.toggleDropdown })}
                </animated.div>
              )
            : null}
        </Transition>
      </div>
    );
  }
}

export default DropDown;
