import * as React from "react";
import { CalendarTileProperties } from "react-calendar/dist/entry.nostyle";
import RCalendar from "react-calendar/dist/Calendar";
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
import { isSameDay, endOfDay, startOfDay } from "date-fns";

class Calendar extends React.PureComponent<CalendarProps, CalendarState> {
  static defaultProps: Partial<CalendarProps> = {
    onChange: () => {},
    tileDots: []
  };

  state: CalendarState = {
    value: this.props.selected,
    singleSelectedDate: null
  };

  private onChange = (value: Date | Date[]) => {
    // tslint:disable-next-line no-this-assignment Doing this to reduce lookups on this, not avoiding to use fat arrow functions
    const { props } = this;
    // The following is exactly the same code.
    // But Typescript cannot merge into one.
    if (props.range) {
      if (Array.isArray(value) && value.length === 2) {
        this.setState(
          {
            value: value as [Date, Date],
            singleSelectedDate: null
          },
          () => props.onChange(value as [Date, Date])
        );
      }
    } else {
      if (!Array.isArray(value)) {
        this.setState(
          {
            value,
            singleSelectedDate: null
          },
          () => props.onChange(value)
        );
      }
    }
  };

  private onDayClick = (day: Date) => {
    const { onClickDay } = this.props;
    this.setState({ singleSelectedDate: [startOfDay(day), endOfDay(day)] });
    if (onClickDay) onClickDay(day);
  };

  private getTileContent = ({ date }: CalendarTileProperties) => {
    const dot = this.props.tileDots.find(
      datum => !!datum.timeStamp && isSameDay(date, datum.timeStamp)
    );

    return dot ? (
      <div css={dotWrapper}>
        {dot.colors &&
          dot.colors.map((color, i) => (
            <span key={i} css={dotStyle} style={{ backgroundColor: color }} />
          ))}
      </div>
    ) : null;
  };

  private getDisabledDays = ({ date }: CalendarTileProperties) => {
    const { disabledDays } = this.props;
    return (
      (disabledDays &&
        disabledDays.length &&
        disabledDays.some(_date => isSameDay(_date, date))) ||
      false
    );
  };

  private onApply = () => {
    // tslint:disable-next-line no-this-assignment
    const { props } = this;
    const { value, singleSelectedDate } = this.state;
    if (props.range && props.onApply) {
      if (singleSelectedDate) {
        props.onApply(singleSelectedDate);
      } else if (Array.isArray(value)) {
        props.onApply(value);
      } else if (value === undefined) {
        props.onApply(value);
      }
    } else if (!props.range && props.onApply && !Array.isArray(value)) {
      props.onApply(value);
    }
  };

  private onClear = () => {
    const { onClear } = this.props;
    this.setState({
      value: undefined
    });
    if (onClear) {
      onClear();
    }
  };

  render() {
    const {
      range,
      selected,
      hideShadow,
      wrapperStyles,
      wrapperClassName,
      onApply,
      onClear,
      ...rest
    } = this.props;

    return (
      <div
        className={wrapperClassName}
        css={[
          wrapperStyle,
          !!hideShadow && { boxShadow: "none" },
          wrapperStyles
        ]}
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
          <div css={buttonsWrapper}>
            {onClear && (
              <Button onClick={this.onClear} type="secondary">
                Clear
              </Button>
            )}
            {onApply && <Button onClick={this.onApply}>Apply</Button>}
          </div>
        )}
      </div>
    );
  }
}

export default Calendar;
