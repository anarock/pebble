import * as React from "react";
import { cx } from "react-emotion";
import { SelectProps } from "@src/components/typings/Select";
import {
  chevronStyle,
  dropDownClass,
  inputWrapper,
  selectInputStyle,
  selectWrapper
} from "@src/components/styles/Select.styles";
import { Options } from "@src/components/Options";
import Dropdown from "@src/components/Dropdown";
import Input from "@src/components/Input";

function noop() {}

const Select: React.SFC<SelectProps> = ({
  className,
  title,
  placeholder,
  required,
  errorMessage,
  ...selectProps
}) => {
  const {
    keyExtractor,
    rowRenderElement,
    options,
    selected,
    onSelect
  } = selectProps;

  // @ts-ignore
  const selectedLabel: string = selected
    ? rowRenderElement(options.find(x => keyExtractor(x) === selected))
    : placeholder;

  return (
    <div className={cx(selectWrapper, className)}>
      <Dropdown
        dropDownClassName={dropDownClass}
        labelComponent={({ toggleDropdown, isOpen }) => {
          const chevron = cx(chevronStyle, "icon-arrow-down", {
            __pebble__select__open: isOpen
          });
          return (
            <div className={inputWrapper} onClick={toggleDropdown}>
              <Input
                className={selectInputStyle}
                placeholder={title}
                value={selectedLabel}
                fixLabelAtTop
                onChange={noop}
                required={required}
                errorMessage={errorMessage}
              />
              <i className={chevron} />
            </div>
          );
        }}
      >
        {({ toggle }) => (
          <Options
            {...selectProps}
            width={"100%"}
            onSelect={option => {
              onSelect(option);
              toggle();
            }}
          />
        )}
      </Dropdown>
    </div>
  );
};

export default Select;
