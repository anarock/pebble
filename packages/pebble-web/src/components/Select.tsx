import * as React from "react";

import { SelectProps } from "./typings/Select";
import {
  chevronStyle,
  dropDownClass,
  inputWrapper,
  selectInput,
  selectInputWrapper,
  selectWrapper,
  fullWidth,
  relativePosition
} from "./styles/Select.styles";
import DropDown from "./DropDown";
import Input from "./Input";
import OptionGroupCheckBox from "./OptionGroupCheckBox";
import OptionGroupRadio from "./OptionGroupRadio";

function noop() {}

function Select<OptionType>(props: SelectProps<OptionType>) {
  const {
    styles,
    placeholder,
    required,
    errorMessage,
    value,
    dropdownStyles,
    inputProps,
    fullWidthDropdown,
    onDropdownToggle = noop,
    disabled,
    isSelected,
    placement,
    modifiers
  } = props;

  return (
    <div css={[selectWrapper, styles, !!fullWidthDropdown && relativePosition]}>
      <DropDown
        dropDownStyles={[
          dropDownClass,
          dropdownStyles,
          !!fullWidthDropdown && fullWidth
        ]}
        onOutsideClick={isOpen => onDropdownToggle(isOpen)}
        labelComponent={({ toggleDropdown, isOpen }) => {
          const chevron = [
            "pi",
            "pi-arrow-drop-down",
            isOpen && "__pebble__select__open"
          ]
            .filter(Boolean)
            .join(" ");
          return (
            <div
              css={inputWrapper}
              onClick={
                disabled
                  ? undefined
                  : () => {
                      toggleDropdown();
                      onDropdownToggle(isOpen);
                    }
              }
            >
              <Input
                styles={selectInputWrapper}
                inputStyles={selectInput}
                placeholder={placeholder}
                value={value || ""}
                onChange={noop}
                required={required}
                message={isOpen ? " " : ""}
                errorMessage={errorMessage}
                readOnly
                disabled={disabled}
                {...inputProps}
              />
              <i css={chevronStyle} className={chevron} />
            </div>
          );
        }}
        placement={placement}
        modifiers={modifiers}
      >
        {({ toggle, isOpen }) => {
          const { children, onClear, searchBox, searchBoxProps } = props;
          const commonProps = {
            isSelected,
            onClear:
              onClear &&
              (() => {
                onClear();
                onDropdownToggle(isOpen);
                toggle();
              }),
            searchBox,
            searchBoxProps
          };

          // This would have been the ideal way to write this but typescript is crying.
          // const OptionGroup = props.multiSelect
          //   ? OptionGroupCheckBox
          //   : OptionGroupRadio;
          // return (
          //   <OptionGroup
          //     selected={props.selected}
          //     onChange={(_value, extras) => {
          //       if (_value) {
          //         props.onChange(_value, extras);
          //       }
          //       if (!props.multiSelect) {
          //         onDropdownToggle(isOpen);
          //         toggle();
          //       }
          //     }}
          //     onApply={
          //       props.multiSelect &&
          //       props.onApply &&
          //       (_value => {
          //         if (props.onApply) {
          //           props.onApply(_value, props);
          //         }
          //         onDropdownToggle(isOpen);
          //         toggle();
          //       })
          //     }
          //     {...commonProps}
          //   >
          //     {children}
          //   </OptionGroup>
          // );

          if (props.multiSelect) {
            return (
              <OptionGroupCheckBox<OptionType>
                selected={props.selected}
                onChange={(_value, extras) => {
                  props.onChange(_value, extras);
                }}
                onApply={
                  props.onApply &&
                  (_value => {
                    if (props.onApply) props.onApply(_value, props);
                    onDropdownToggle(isOpen);
                    toggle();
                  })
                }
                {...commonProps}
              >
                {children}
              </OptionGroupCheckBox>
            );
          } else {
            return (
              <OptionGroupRadio
                selected={props.selected}
                onChange={(_value, extras) => {
                  if (_value) props.onChange(_value, extras);
                  onDropdownToggle(isOpen);
                  toggle();
                }}
                {...commonProps}
              >
                {children}
              </OptionGroupRadio>
            );
          }
        }}
      </DropDown>
    </div>
  );
}

export default Select;
