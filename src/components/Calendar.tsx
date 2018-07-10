import * as React from "react";
import RCalendar from "react-calendar/dist/entry.nostyle";
import { css, cx } from "react-emotion";
import { CalendarProps, CalendarState } from "./typings/Calendar";
import {
  dateStyle,
  dotStyle,
  dotWrapper,
  tileStyle,
  wrapperStyle
} from "./styles/Calendar.styles";
import { mixins } from "../theme";
import Button from "./Button";
import isSameDay from "date-fns/is_same_day";
import startOfToday from "date-fns/start_of_today";
import getTime from "date-fns/get_time";

class Calendar extends React.PureComponent<CalendarProps, CalendarState> {
  static defaultProps: Partial<CalendarProps> = {
    onChange: () => {},
    tileDots: []
  };

  state = {
    value: this.props.selected,
    dots: []
  };

  private onChange = value => {
    this.setState(
      {
        value
      },
      () => this.props.onChange(value)
    );
  };

  private getTileContent = ({ date }): JSX.Element => {
    const dot = this.props.tileDots.find(datum =>
      isSameDay(date, datum.timeStamp)
    );

    return dot ? (
      <div className={dotWrapper}>
        {dot.colors.map((color, i) => (
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
    const { disableFuture, disablePast, disabledDays } = this.props;

    let disable = false;
    if (disableFuture) {
      disable = date.getTime() > Date.now();
    }
    if (disablePast) {
      disable = disable || date.getTime() < getTime(startOfToday());
    }
    if (disabledDays && disabledDays.length) {
      disable = disable || disabledDays.some(_date => isSameDay(_date, date));
    }

    return disable;
  };

  render() {
    const {
      range,
      selected,
      hideShadow,
      className,
      onApply,
      onClear
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
          prevLabel={
            <i style={{ fontSize: 16 }} className="icon-chevron-left" />
          }
          nextLabel={
            <i style={{ fontSize: 16 }} className="icon-arrow-right" />
          }
        />

        {onClear &&
          onApply && (
            <div style={{ ...mixins.flexSpaceBetween, marginTop: 20 }}>
              {onClear && (
                <Button onClick={onClear} type="secondary">
                  Clear
                </Button>
              )}
              {onApply && (
                <Button onClick={() => onApply(this.state.value)}>Apply</Button>
              )}
            </div>
          )}
      </div>
    );
  }
}

export default Calendar;
