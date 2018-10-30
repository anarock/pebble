import * as React from "react";
import { cx } from "emotion";
import { SelectProps, Selected } from "./typings/Select";
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
import { Extras } from "./typings/OptionGroup";

function noop() {}

const Select: React.SFC<SelectProps> = props => {
  const {
    className,
    placeholder,
    required,
    errorMessage,
    onChange,
    value,
    selected,
    children,
    multiSelect,
    onClear,
    onApply,
    dropdownClassName,
    inputProps,
    searchBox,
    searchBoxProps,
    fullWidthDropdown
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
        labelComponent={({ toggleDropdown, isOpen }) => {
          const chevron = cx(chevronStyle, "pi", "pi-arrow-drop-down", {
            __pebble__select__open: isOpen
          });
          return (
            <div className={inputWrapper} onClick={toggleDropdown}>
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
                {...inputProps}
              />
              <i className={chevron} />
            </div>
          );
        }}
      >
        {({ toggle }) => {
          const commonProps = {
            onChange: (_value: Selected, extras: Extras) => {
              onChange(_value, extras);
              if (!multiSelect) {
                toggle();
              }
            },
            onApply: onApply
              ? (_value: Selected) => {
                  onApply(_value, props);
                  toggle();
                }
              : undefined,

            onClear: onClear
              ? () => {
                  onClear();
                  toggle();
                }
              : undefined,

            searchBox: searchBox,
            searchBoxProps: searchBoxProps
          };

          // const OptionGroup = multiSelect ? OptionGroupCheckBox : OptionGroupRadio;
          // const _selected = multiSelect
          //   ? Array.isArray(selected) && selected || undefined
          //   : !Array.isArray(selected) && selected || undefined

          // return (
          //   <OptionGroup
          //     selected={selected}
          //     {...commonProps}
          //   >
          //     {children}
          //   </OptionGroup>
          // )

          if (multiSelect) {
            return (
              <OptionGroupCheckBox
                selected={(Array.isArray(selected) && selected) || undefined}
                {...commonProps}
              >
                {children}
              </OptionGroupCheckBox>
            );
          }
          return (
            <OptionGroupRadio
              selected={(!Array.isArray(selected) && selected) || undefined}
              {...commonProps}
            >
              {children}
            </OptionGroupRadio>
          );
        }}
      </DropDown>
    </div>
  );
};

export default Select;
