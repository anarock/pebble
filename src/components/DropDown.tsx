import * as React from "react";
import { DropdownProps, DropdownState } from "@src/components/typings/Dropdown";
import Button, { ButtonType } from "@src/components/Button";
import { DropDownStyle } from "@src/components/styles/Dropdown.styles";

class DropDown extends React.PureComponent<DropdownProps, DropdownState> {
  componentRef: React.RefObject<HTMLDivElement> = React.createRef();

  state: DropdownState = {
    isOpen: this.props.initiallyOpen
  };

  static defaultProps = {
    isInitiallyOpen: true,
    closeOnClickOutside: true,
    type: ButtonType.DROPDOWN
  };

  private toggleDropDown = () => {
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
      return this.toggleDropDown();
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
          labelComponent({ isOpen, toggleDropdown: this.toggleDropDown })
        ) : (
          <Button
            isSelected={isSelected}
            showShadow
            type={type}
            isOpen={isOpen}
            onClick={this.toggleDropDown}
          >
            {buttonLabel}
          </Button>
        )}
        {this.state.isOpen && (
          <DropDownStyle className={dropDownClassName} style={{ padding }}>
            {children({ toggle: this.toggleDropDown })}
          </DropDownStyle>
        )}
      </div>
    );
  }
}

export default DropDown;
