import * as React from "react";
import { DropdownProps, DropdownState } from "./typings/Dropdown";
import Button from "./Button";
import { DropDownStyle } from "./styles/Dropdown.styles";

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
        {this.state.isOpen && (
          <DropDownStyle className={dropDownClassName} style={{ padding }}>
            {children({ toggle: this.toggleDropdown })}
          </DropDownStyle>
        )}
      </div>
    );
  }
}

export default DropDown;
