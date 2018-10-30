import * as React from "react";
import RCalendar from "react-calendar/dist/entry.nostyle";
import { css, cx } from "emotion";
import { CalendarProps, CalendarState } from "./typings/Calendar";
import {
  buttonsWrapper,
  dateStyle,
  dotStyle,
  dotWrapper,
  tileStyle,
  wrapperStyle
} from "./styles/Calendar.styles";
import Button from "./Button";
import { isSameDay } from "date-fns";

class Calendar extends React.PureComponent<CalendarProps, CalendarState> {
  static defaultProps: Partial<CalendarProps> = {
    onChange: () => {},
    tileDots: []
  };

  state: CalendarState = {
    value: this.props.selected,
    singleSelectedDate: null
  };

  private onChange = value => {
    const { range, onChange } = this.props;
    this.setState(
      {
        value,
        singleSelectedDate: null
      },
      () => (range ? value.length === 2 && onChange(value) : onChange(value))
    );
  };

  private onDayClick = day => {
    const { onClickDay } = this.props;
    this.setState({ singleSelectedDate: day });
    onClickDay && onClickDay(day);
  };

  private getTileContent = ({ date }) => {
    const dot = this.props.tileDots.find(
      datum => !!datum.timeStamp && isSameDay(date, datum.timeStamp)
    );

    return dot ? (
      <div className={dotWrapper}>
        {dot.colors &&
          dot.colors.map((color, i) => (
            <span
              key={i}
              className={dotStyle}
              style={{ backgroundColor: color }}
            />
          ))}
      </div>
    ) : null;
  };

  private getDisabledDays = ({ date }) => {
    const { disabledDays } = this.props;
    return (
      (disabledDays &&
        disabledDays.length &&
        disabledDays.some(_date => isSameDay(_date, date))) ||
      false
    );
  };

  render() {
    const {
      range,
      selected,
      hideShadow,
      className,
      onApply,
      onClear,
      ...rest
    } = this.props;

    return (
      <div
        className={cx(
          wrapperStyle,
          {
            [css({ boxShadow: "none" })]: hideShadow
          },
          className
        )}
      >
        <RCalendar
          {...rest}
          onChange={this.onChange}
          selectRange={range}
          view="month"
          value={selected}
          next2Label={null}
          prev2Label={null}
          tileClassName={tileStyle}
          className={dateStyle}
          showNeighboringMonth={false}
          tileContent={this.getTileContent}
          tileDisabled={this.getDisabledDays}
          onClickDay={this.onDayClick}
          prevLabel={
            <i style={{ fontSize: 14 }} className="pi pi-chevron-left" />
          }
          nextLabel={
            <i style={{ fontSize: 14 }} className="pi pi-arrow-right" />
          }
        />

        {(onClear || onApply) && (
          <div className={buttonsWrapper}>
            {onClear && (
              <Button onClick={onClear} type="secondary">
                Clear
              </Button>
            )}
            {onApply && (
              <Button
                onClick={() => {
                  range && this.state.singleSelectedDate
                    ? onApply(this.state.singleSelectedDate)
                    : onApply(this.state.value);
                }}
              >
                Apply
              </Button>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Calendar;
