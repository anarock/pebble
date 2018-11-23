import * as React from "react";
import RCalendar, {
  CalendarTileProperties
} from "react-calendar/dist/entry.nostyle";
import { css, cx } from "emotion";
import {
  CalendarProps,
  CalendarState,
  CalendarValue
} from "./typings/Calendar";
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
import Popper from "./Popper";
import { mixins, colors } from "../theme";

// TO-DO: Write separately props for both Calendars and move css.

const quickDateTags = css({
  padding: "10px 20px",
  fontSize: 14,
  borderRadius: 3,
  cursor: "pointer",
  ":hover": {
    background: colors.violet.lightest,
    color: colors.violet.base
  }
});

const customChevronIcon = css({
  fontSize: 10,
  display: "inline-flex",
  marginLeft: 5,
  color: colors.gray.base
});

const selectedTag = css({
  background: colors.violet.lightest,
  color: colors.violet.base
});

class Calendar extends React.PureComponent<CalendarProps, CalendarState> {
  static defaultProps: Partial<CalendarProps> = {
    onChange: () => {},
    tileDots: [],
    quickDates: false
  };

  state: CalendarState = {
    value: this.props.selected,
    singleSelectedDate: null,
    isCustomSelected: false
  };

  private onChange = (value: CalendarValue) => {
    const { range, onChange } = this.props;
    this.setState(
      {
        value,
        singleSelectedDate: null
      },
      () =>
        range && Array.isArray(value)
          ? value.length === 2 && onChange(value)
          : onChange(value)
    );
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

  private getDisabledDays = ({ date }: CalendarTileProperties) => {
    const { disabledDays } = this.props;
    return (
      (disabledDays &&
        disabledDays.length &&
        disabledDays.some(_date => isSameDay(_date, date))) ||
      false
    );
  };

  private getCalendar = () => {
    const {
      range,
      selected,
      hideShadow,
      className,
      onApply,
      onClear,
      quickDates,
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
  };

  render() {
    const { quickDates, quickDateOptions } = this.props;
    const { isCustomSelected } = this.state;
    if (quickDates) {
      return (
        <Popper
          label={({ toggle }) => <div onClick={toggle}>Custom Label</div>}
          popperClassName={css({ padding: 20 })}
        >
          {({ toggle }) => {
            return (
              <>
                <div className={css({ ...mixins.flexSpaceBetween })}>
                  {quickDateOptions &&
                    quickDateOptions.map((date, i) => {
                      return (
                        <div
                          key={i}
                          onClick={() => {
                            toggle();
                            date.valueExtractor();
                            this.setState({ isCustomSelected: false });
                          }}
                          className={quickDateTags}
                        >
                          {date.label}
                        </div>
                      );
                    })}
                  <div
                    className={cx(quickDateTags, {
                      [selectedTag]: isCustomSelected
                    })}
                    onClick={() =>
                      this.setState({ isCustomSelected: !isCustomSelected })
                    }
                  >
                    Custom{" "}
                    <i
                      className={cx(
                        "pi",
                        "pi-arrow-drop-down",
                        customChevronIcon
                      )}
                    />
                  </div>
                </div>
                {isCustomSelected && this.getCalendar()}
              </>
            );
          }}
        </Popper>
      );
    } else {
      return this.getCalendar();
    }
  }
}

export default Calendar;
