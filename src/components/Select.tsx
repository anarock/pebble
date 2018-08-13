import * as React from "react";
import { cx } from "emotion";
import { SelectProps } from "./typings/Select";
import {
  chevronStyle,
  dropDownClass,
  inputWrapper,
  selectInputStyle,
  selectWrapper
} from "./styles/Select.styles";
import DropDown from "./DropDown";
import Input from "./Input";
import OptionGroup from "./OptionGroup";

function noop() {}

const Select: React.SFC<SelectProps> = props => {
  const {
    className,
    placeholder,
    required,
    errorMessage,
    onSelect,
    value,
    selected,
    children
  } = props;
  return (
    <div className={cx(selectWrapper, className)}>
      <DropDown
        dropDownClassName={dropDownClass}
        labelComponent={({ toggleDropdown, isOpen }) => {
          const chevron = cx(chevronStyle, "icon-arrow-drop-down", {
            __pebble__select__open: isOpen
          });
          return (
            <div className={inputWrapper} onClick={toggleDropdown}>
              <Input
                className={selectInputStyle}
                placeholder={placeholder}
                value={value}
                onChange={noop}
                required={required}
                message={isOpen ? " " : ""}
                errorMessage={errorMessage}
              />
              <i className={chevron} />
            </div>
          );
        }}
      >
        {({ toggle }) => (
          <OptionGroup
            selected={selected}
            onChange={_value => {
              onSelect(_value, props);
              toggle();
            }}
          >
            {children}
          </OptionGroup>
        )}
      </DropDown>
    </div>
  );
};

export default Select;
