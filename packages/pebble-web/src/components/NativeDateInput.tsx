import * as React from "react";
import { format, parse } from "date-fns";
import { DateInputProps } from "./typings/DateInput";
import Input from "./Input";

export default class NativeDateInput extends React.PureComponent<
  DateInputProps
> {
  private onDateInputChange = (value: string) => {
    const date = parse(value);
    this.props.onChange(date && date.getTime());
  };

  render() {
    const { inputProps, placeholder, value } = this.props;

    return (
      <Input
        onChange={this.onDateInputChange}
        type="date"
        // This format does not define the presentation format.
        // value will always be in YYYY-MM-DD format.
        // https://developers.google.com/web/updates/2012/08/Quick-FAQs-on-input-type-date-in-Google-Chrome
        value={value && format(value, "YYYY-MM-DD")}
        placeholder={placeholder}
        fixLabelAtTop
        {...inputProps}
      />
    );
  }
}
