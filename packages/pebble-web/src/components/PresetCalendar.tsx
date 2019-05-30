import * as React from "react";
import Calendar from "./Calendar";
import { cx } from "emotion";
import Popper from "./Popper";
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
  customChevronIcon,
  popperWrap,
  presetCalWrap,
  openIcon,
  popperContent
} from "./styles/PresetCalendar.styles";

class PresetCalendar extends React.PureComponent<
  PresetCalendarProps,
  PresetCalendarState
> {
  static defaultProps: Partial<PresetCalendarProps> = {
    onApply: () => {},
    isOpen: false,
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
    onChange: () => {},
    tileDots: []
  };

  state: PresetCalendarState = {
    isCustomSelected: false
  };

  render() {
    const {
      customDateInputLabel,
      presetDateOptions,
      onApply,
      className
    } = this.props;
    const { isCustomSelected } = this.state;

    const _className = cx(className, presetCalWrap);

    return (
      <Popper
        label={({ toggle, isOpen }) => customDateInputLabel({ toggle, isOpen })}
        popperClassName={popperWrap}
        isOpen={this.props.isOpen}
        onOutsideClick={() => this.setState({ isCustomSelected: false })}
      >
        {({ toggle }) => {
          return (
            <>
              <div className={popperContent}>
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
                      customChevronIcon,
                      { [openIcon]: isCustomSelected }
                    )}
                  />
                </div>
              </div>
              {isCustomSelected && (
                <Calendar
                  {...this.props}
                  className={_className}
                  hideShadow
                  range
                  onApply={value => {
                    toggle();
                    this.setState({ isCustomSelected: false });
                    this.props.onApply(value);
                  }}
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
