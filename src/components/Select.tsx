import * as React from "react";
import { cx } from "emotion";
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
    className,
    placeholder,
    required,
    errorMessage,
    value,
    dropdownClassName,
    inputProps,
    fullWidthDropdown,
    onDropdownToggle = noop,
    disabled,
    isSelected
  } = props;

  return (
    <div
      className={cx(selectWrapper, className, {
        [relativePosition]: fullWidthDropdown
      })}
    >
      <DropDown
        dropDownClassName={cx(dropDownClass, dropdownClassName, {
          [fullWidth]: fullWidthDropdown
        })}
        onOutsideClick={isOpen => onDropdownToggle(isOpen)}
        labelComponent={({ toggleDropdown, isOpen }) => {
          const chevron = cx(chevronStyle, "pi", "pi-arrow-drop-down", {
            __pebble__select__open: isOpen
          });
          return (
            <div
              className={inputWrapper}
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
                className={selectInputWrapper}
                inputClassName={selectInput}
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
              <i className={chevron} />
            </div>
          );
        }}
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
          // const OptionGroup = props.multiSelect ? OptionGroupCheckBox : OptionGroupRadio;
          // return (
          //   <OptionGroup
          //     selected={props.selected}
          //     onChange={(_value, extras) => {
          //       props.onChange(_value, extras)
          //       props.multiSelect && toggle();
          //     }}
          //     onApply={props.multiSelect && props.onApply && ((_value) => {
          //       props.onApply && props.onApply(_value, props);
          //       toggle();
          //     })}
          //     {...commonProps}
          //   >
          //     {children}
          //   </OptionGroup>
          // )

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
