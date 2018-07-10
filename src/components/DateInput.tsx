import * as React from "react";
import { DateInputProps } from "./typings/Date";
import DropDown from "./DropDown";
import { dateClass, dropDownClassName } from "./styles/Date.styles";
import format from "date-fns/format";
import Calendar from "./Calendar";
import Input from "./Input";

class DateInput extends React.PureComponent<DateInputProps> {
  onChange = (date: Date | string) => {
    this.props.onChange(date ? new Date(date).getTime() : undefined);
  };

  render() {
    const { value } = this.props;
    return (
      <DropDown
        dropDownClassName={dropDownClassName}
        labelComponent={({ toggleDropdown }) => (
          <div onClick={toggleDropdown}>
            <Input
              onChange={this.onChange}
              type="date"
              value={format(value, "YYYY-MM-DD")}
              placeholder={this.props.placeholder}
              fixLabelAtTop
            />
          </div>
        )}
      >
        {({ toggle }) => (
          <Calendar
            hideShadow
            className={dateClass}
            selected={value ? new Date(value) : undefined}
            onChange={date => {
              this.onChange(date);
              toggle();
            }}
          />
        )}
      </DropDown>
    );
  }
}

export default DateInput;
