import * as React from "react";
import Calendar from "./Calendar";
import { css, cx } from "emotion";
import Popper from "./Popper";
import { mixins } from "../theme";
import {
  PresetCalendarProps,
  PresetCalendarState,
  PresetDates
} from "./typings/PresetCalendar";
import {
  startOfDay,
  endOfDay,
  startOfYesterday,
  endOfYesterday
} from "date-fns";
import {
  quickDateTags,
  customSelected,
  customChevronIcon
} from "./styles/PresetCalendar.styles";

class PresetCalendar extends React.PureComponent<
  PresetCalendarProps,
  PresetCalendarState
> {
  static defaultProps: Partial<PresetCalendarProps> = {
    onApply: () => {},
    presetDateOptions: [
      {
        label: "Yesterday",
        dateRange: () => [startOfYesterday(), endOfYesterday()]
      },
      {
        label: "Past Week",
        dateRange: () => {
          const startDate = new Date().setDate(new Date().getDate() - 7);
          const endDate = new Date().setDate(new Date().getDate() - 1);
          return [startOfDay(startDate), endOfDay(endDate)];
        }
      }
    ],
    calendarProps: {
      onChange: () => {},
      tileDots: []
    }
  };

  state: PresetCalendarState = {
    isCustomSelected: false
  };

  render() {
    const {
      customDateInputLabel,
      presetDateOptions,
      onApply,
      calendarProps
    } = this.props;
    const { isCustomSelected } = this.state;

    const className = cx(
      calendarProps.className,
      css({ padding: "10px 0 0 0" })
    );

    return (
      <Popper
        label={({ toggle, isOpen }) => {
          if (customDateInputLabel) {
            return customDateInputLabel({ toggle, isOpen });
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
                {presetDateOptions.map((date: PresetDates, i: number) => {
                  return (
                    <div
                      key={i}
                      onClick={() => {
                        toggle();
                        onApply(date.dateRange());
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
                    [customSelected]: isCustomSelected
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
              {isCustomSelected && (
                <Calendar
                  className={className}
                  hideShadow
                  range
                  onApply={value => {
                    toggle();
                    this.props.onApply(value);
                  }}
                  {...calendarProps}
                />
              )}
            </>
          );
        }}
      </Popper>
    );
  }
}

export default PresetCalendar;
