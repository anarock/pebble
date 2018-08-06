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
import Options from "./Options";
import DropDown from "./DropDown";
import Input from "./Input";

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

  const selectedLabel = selected
    ? rowRenderElement(options.find(x => keyExtractor(x) === selected))
    : placeholder;

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
                placeholder={title}
                value={selectedLabel && selectedLabel.toString()}
                fixLabelAtTop
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
          <Options
            {...selectProps}
            width={"100%"}
            keyExtractor={keyExtractor}
            rowRenderElement={rowRenderElement}
            options={options}
            selected={selected}
            onSelect={option => {
              onSelect(option);
              toggle();
            }}
          />
        )}
      </DropDown>
    </div>
  );
};

Select.defaultProps = {
  keyExtractor: item => item.id,
  rowRenderElement: item => item.label || item.name
};

export default Select;
