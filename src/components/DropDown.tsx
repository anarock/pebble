import * as React from "react";
import { DropdownProps, DropdownState } from "@src/components/typings/Dropdown";
import Button, { ButtonType } from "@src/components/Button";
import { DropDownStyle } from "@src/components/styles/Dropdown.styles";
import { Manager, Reference, Popper } from "react-popper";

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
        <Manager>
          <Reference>
            {({ ref }) => (
              <div ref={ref}>
                {labelComponent ? (
                  labelComponent({
                    isOpen,
                    toggleDropdown: this.toggleDropdown
                  })
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
              </div>
            )}
          </Reference>
          {isOpen && (
            <Popper placement="bottom-start">
              {({ ref, style, placement, arrowProps }) => (
                <div ref={ref} style={style} data-placement={placement}>
                  <DropDownStyle
                    className={dropDownClassName}
                    style={{ padding }}
                  >
                    {children({ toggle: this.toggleDropdown })}
                  </DropDownStyle>
                  <div ref={arrowProps.ref} style={arrowProps.style} />
                </div>
              )}
            </Popper>
          )}
        </Manager>
      </div>
    );
  }
}

export default DropDown;
