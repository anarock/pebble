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
import { mixins, colors, constants } from "../theme";

const selectedTag = {
  background: colors.violet.lightest,
  color: colors.violet.base
};

const quickDateTags = css({
  padding: "10px 15px",
  marginRight: 5,
  fontSize: 14,
  borderRadius: constants.borderRadius,
  cursor: "pointer",
  ":hover": selectedTag
});

const customChevronIcon = css({
  fontSize: 10,
  display: "inline-flex",
  marginLeft: 5,
  color: colors.gray.base
});

class Calendar extends React.PureComponent<CalendarProps, CalendarState> {
  static defaultProps: Partial<CalendarProps> = {
    onChange: () => {},
    onApply: () => {},
    tileDots: [],
    quickDates: false,
    quickDateOptions: [
      {
        label: "Yesterday",
        valueExtractor: () => {
          const date = new Date().setDate(new Date().getDate() - 1);
          return [startOfDay(date), endOfDay(date)];
        }
      },
      {
        label: "Past Week",
        valueExtractor: () => {
          const startDate = new Date().setDate(new Date().getDate() - 7);
          const endDate = new Date().setDate(new Date().getDate() - 1);
          return [startOfDay(startDate), endOfDay(endDate)];
        }
      }
    ]
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
            [css({ boxShadow: "none" })]: hideShadow || quickDates,
            [css({ padding: "10px 0 0 0" })]: quickDates
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
    const {
      quickDates,
      quickDateOptions,
      customDateInputLabel,
      onApply
    } = this.props;
    const { isCustomSelected } = this.state;
    if (quickDates) {
      return (
        <Popper
          label={({ toggle, isOpen }) => {
            if (customDateInputLabel) {
              return customDateInputLabel(toggle, isOpen);
            }
            return (
              <div onClick={toggle} className={css({ cursor: "pointer" })}>
                Date Input
              </div>
            );
          }}
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
                            onApply(date.valueExtractor());
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
                      [css(selectedTag)]: isCustomSelected
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
