import * as React from "react";
import { DropdownProps, DropdownState } from "./typings/Dropdown";
import Button from "./Button";
import { dropDownStyle } from "./styles/Dropdown.styles";
import { cx } from "react-emotion";

class DropDown extends React.PureComponent<DropdownProps, DropdownState> {
  componentRef: React.RefObject<HTMLDivElement> = React.createRef();

  state: DropdownState = {
    isOpen: this.props.initiallyOpen
  };

  static defaultProps: Partial<DropdownProps> = {
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

  addClickListener = () => {
    if (this.props.closeOnClickOutside) {
      document.addEventListener("mousedown", this.handleOutsideClick);
      document.addEventListener("touchstart", this.handleOutsideClick);
    }
  };

  removeClickListener = () => {
    document.removeEventListener("mousedown", this.handleOutsideClick);
    document.removeEventListener("touchstart", this.handleOutsideClick);
  };

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

  componentDidMount() {
    if (this.props.initiallyOpen) {
      this.addClickListener();
    }
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
      isSelected,
      disabled
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
    );
  }
}

export default DropDown;
