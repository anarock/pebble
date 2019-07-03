import { css, keyframes, cx, injectGlobal } from "emotion";
import { colors } from "pebble-shared";
export { colors } from "pebble-shared";
import React__default, {
  createElement,
  Fragment,
  PureComponent,
  createRef,
  Children,
  cloneElement,
  createContext,
  Component
} from "react";
import Ink from "react-ink";
import RCalendar from "react-calendar/dist/entry.nostyle";
import { startOfDay, endOfDay, isSameDay, parse, format } from "date-fns";
import { Transition, animated } from "react-spring";
import { Manager, Reference, Popper } from "react-popper";
import isBrowser from "is-in-browser";
import { createPortal, findDOMNode } from "react-dom";
import scrollIntoView from "scroll-into-view-if-needed";
import Rheostat from "rheostat";
import Mitt from "mitt";
import debounce from "just-debounce-it";
import { Rifm } from "rifm";

const textEllipsis = {
  overflowX: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
};
const flexRow = {
  display: "flex",
  flexDirection: "row"
};
const flexSpaceBetween = {
  ...flexRow,
  justifyContent: "space-between",
  alignContent: "initial"
};
const flexMiddleAlign = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};
const getPlaceholderStyle = color => ({
  "::-webkit-input-placeholder": {
    color
  },
  "::-moz-placeholder": {
    color
  },
  ":-ms-input-placeholder": {
    color
  },
  ":-moz-placeholder": {
    color
  },
  "::placeholder": {
    color
  }
});

var mixins = /*#__PURE__*/ Object.freeze({
  textEllipsis: textEllipsis,
  flexRow: flexRow,
  flexSpaceBetween: flexSpaceBetween,
  flexMiddleAlign: flexMiddleAlign,
  getPlaceholderStyle: getPlaceholderStyle
});

const constants = {
  borderRadius: 3,
  buttonHeight: 40,
  animationCurve: "cubic-bezier(.64,.09,.08,1)",
  padding: {
    base: 20,
    higher: 60
  },
  border: {
    base: `1px solid ${colors.gray.light}`,
    light: `1px solid ${colors.gray.lighter}`
  },
  boxShadow: {
    base: `0 2px 7px 0 #F2F2F2`,
    elevated: `0 4px 7px 0 ${colors.gray.light}`,
    xElevated: "0 2px 15px 0 rgba(0,0,0,0.1)"
  }
};

const fontSize = {
  xs: 10,
  s: 12,
  normal: 14,
  l: 16,
  xl: 18,
  xll: 22
};
const typography = {
  xll: {
    regular: {
      fontWeight: 400,
      color: colors.gray.darker,
      fontSize: fontSize.xll
    },
    bold: {
      fontWeight: 500,
      color: colors.gray.darker,
      fontSize: fontSize.xll
    }
  },
  xl: {
    bold: {
      fontWeight: 500,
      color: colors.gray.darker,
      fontSize: fontSize.xl
    }
  },
  l: {
    bold: {
      fontWeight: 500,
      color: colors.gray.dark,
      fontSize: fontSize.l
    },
    light: {
      fontWeight: 400,
      color: colors.gray.dark,
      fontSize: fontSize.l
    }
  },
  normal: {
    regular: {
      fontWeight: 400,
      color: colors.gray.darker,
      fontSize: fontSize.normal
    },
    bold: {
      fontWeight: 500,
      color: colors.gray.darker,
      fontSize: fontSize.normal
    },
    light: {
      fontWeight: 400,
      color: colors.gray.dark,
      fontSize: fontSize.normal
    },
    lighter: {
      fontWeight: 400,
      color: colors.gray.base,
      fontSize: fontSize.normal
    },
    link: {
      fontWeight: 400,
      color: colors.violet.base,
      fontSize: fontSize.normal
    }
  },
  s: {
    regular: {
      fontWeight: 400,
      color: colors.gray.darker,
      fontSize: fontSize.s
    },
    bold: {
      fontWeight: 500,
      color: colors.gray.darker,
      fontSize: fontSize.s
    },
    light: {
      fontWeight: 400,
      color: colors.gray.dark,
      fontSize: fontSize.s
    },
    lighter: {
      fontWeight: 400,
      color: colors.gray.base,
      fontSize: fontSize.s
    },
    link: {
      fontWeight: 400,
      color: colors.violet.base,
      fontSize: fontSize.s
    }
  },
  xs: {
    bold: {
      fontWeight: 500,
      color: colors.gray.darker,
      fontSize: fontSize.xs
    },
    light: {
      fontWeight: 400,
      color: colors.gray.dark,
      fontSize: fontSize.xs
    }
  }
};

const tableStyle =
  /*#__PURE__*/
  css({
    borderRadius: constants.borderRadius,
    border: constants.border.dark,
    ...typography.s.regular,
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    backgroundColor: colors.gray.lightest,
    "tr:last-child": {
      td: {
        border: 0
      },
      "td:first-child": {
        borderBottomLeftRadius: constants.borderRadius
      },
      "td:last-child": {
        borderBottomRightRadius: constants.borderRadius
      }
    },
    "tr:first-child": {
      "th:first-child": {
        borderLeftLeftRadius: constants.borderRadius
      },
      "th:last-child": {
        borderLeftRightRadius: constants.borderRadius
      }
    },
    th: {
      textAlign: "left",
      ...typography.xs.bold,
      color: colors.gray.dark
    },
    "tbody > tr:nth-of-type(2n + 1)": {
      backgroundColor: colors.white.base
    },
    "th, td": {
      height: 50,
      padding: "10px 25px",
      borderBottom: constants.border.dark
    }
  });
const disableScrollY =
  /*#__PURE__*/
  css({
    overflowY: "hidden"
  });

var styles = /*#__PURE__*/ Object.freeze({
  tableStyle: tableStyle,
  disableScrollY: disableScrollY
});

const { violet, gray, white, red, emerald } = colors;
const smallButtonHeight = 40;
const commonButtonStyle =
  /*#__PURE__*/
  css({
    lineHeight: "23px",
    height: constants.buttonHeight,
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
    transition: "all ease-out .2s",
    borderRadius: constants.borderRadius,
    outline: "none",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    whiteSpace: "nowrap",
    justifyContent: "center",
    border: 0,
    "&[disabled]": {
      cursor: "not-allowed"
    }
  });
const mappingColorByType = {
  primary: {
    base: violet.base,
    hover: violet.light,
    active: violet.dark,
    disabled: violet.lighter
  },
  secondary: {
    textColor: gray.darker,
    base: gray.lighter,
    hover: gray.lightest,
    active: gray.base,
    disabled: gray.lighter
  },
  success: {
    base: emerald.base,
    hover: emerald.light,
    active: emerald.dark,
    disabled: emerald.lighter
  },
  alert: {
    base: red.base,
    hover: red.light,
    active: red.dark,
    disabled: red.lighter
  }
};
const linkStyle = {
  backgroundColor: "transparent",
  border: 0,
  color: violet.base,
  minWidth: 0,
  padding: 0,
  ":not([disabled]):hover": {
    textDecoration: "underline"
  },
  "&[disabled]": {
    color: violet.lighter
  }
};
const getStyleByType = (type, filled) => {
  if (type === "link") return linkStyle;
  const _color = mappingColorByType[type];
  const { base: colorBase, disabled, hover, active, textColor } = _color;
  const defaultFontColor = filled ? textColor || white.base : colorBase;
  return {
    color: defaultFontColor,
    backgroundColor: filled ? colorBase : white.base,
    border: filled ? "none" : `1px solid ${colorBase}`,
    "&:not([disabled]):hover": {
      color: textColor || white.base,
      backgroundColor: hover,
      borderColor: hover
    },
    "&:not([disabled]):active": {
      color: textColor || white.base,
      backgroundColor: active,
      borderColor: active
    },
    "&[disabled]": {
      color: textColor || white.base,
      backgroundColor: disabled,
      borderColor: disabled
    }
  };
};
const styleBasedOnSize = {
  "x-small": {
    height: 25,
    minWidth: 70,
    ...typography.xs.light
  },
  small: {
    height: smallButtonHeight,
    minWidth: 100,
    ...typography.s.regular
  },
  large: {
    height: 50,
    minWidth: 140,
    ...typography.normal.regular
  }
};
const getButtonStyle = (size, type, showShadow, filled) => {
  return (
    /*#__PURE__*/
    css([
      commonButtonStyle,
      {
        ...styleBasedOnSize[size],
        ...getStyleByType(type, filled),
        boxShadow: showShadow ? constants.boxShadow.base : "none"
      }
    ])
  );
};
const iconStyle =
  /*#__PURE__*/
  css({
    marginLeft: 15,
    fontWeight: "bold",
    fontSize: 8,
    transition: "transform ease-out .2s",
    willTransform: "transform",
    marginTop: 2,
    color: colors.gray.dark
  });
const dropDownButtonStyle =
  /*#__PURE__*/
  css({
    border: constants.border.base,
    "&:not([disabled]):hover": {
      backgroundColor: colors.gray.lighter
    }
  });
const dropDownButtonDefaultStyle =
  /*#__PURE__*/
  css({
    backgroundColor: colors.white.base,
    color: colors.gray.darker,
    "&:not([disabled]):hover": {
      backgroundColor: colors.gray.lighter
    }
  });

const bounceDelay =
  /*#__PURE__*/
  keyframes({
    "0%, 80%, 100%": {
      transform: "scale(0)"
    },
    "40%": {
      transform: "scale(1)"
    }
  });
const spinnerStyle =
  /*#__PURE__*/
  css({
    ...flexSpaceBetween,
    width: 70,
    "> div": {
      width: 18,
      height: 18,
      borderRadius: "100%",
      display: "inline-block",
      animation: `${bounceDelay} 1.4s infinite ease-in-out both`,
      "&:first-of-type": {
        animationDelay: "-0.32s"
      },
      "&:nth-of-type(2n)": {
        animationDelay: "-0.16s"
      }
    }
  });

const Loader = ({ color = colors.gray.darker, scale = 1, className }) => {
  const style = {
    backgroundColor: color
  };
  return createElement(
    "div",
    {
      className: cx(spinnerStyle, className),
      style: {
        transform: `scale(${scale})`
      }
    },
    createElement("div", {
      style: style
    }),
    createElement("div", {
      style: style
    }),
    createElement("div", {
      style: style
    })
  );
};

const Button = ({
  type = "primary",
  disabled,
  children,
  onClick,
  width,
  showShadow,
  className,
  showRipple = true,
  loading,
  size = "small",
  buttonProps
}) => {
  const disableAction = disabled || loading;
  const filled = size !== "x-small";
  const _className = cx(
    getButtonStyle(size, type, !!showShadow, filled),
    className
  );
  return createElement(
    "button",
    Object.assign(
      {
        className: _className,
        onClick: !disableAction ? onClick : undefined,
        style: {
          width
        },
        disabled: disabled
      },
      buttonProps
    ),
    loading
      ? createElement(Loader, {
          color: colors.white.base,
          scale: 0.4
        })
      : children,
    !disableAction && showRipple && type !== "link" && createElement(Ink, null)
  );
};
const DropDownButton = ({
  isOpen,
  isSelected,
  children,
  className,
  ...props
}) => {
  const _className = cx(dropDownButtonStyle, {
    [dropDownButtonDefaultStyle]: !(isOpen || isSelected)
  });
  return createElement(
    Button,
    Object.assign({}, props, {
      type: "secondary",
      className: cx(_className, className)
    }),
    createElement(
      Fragment,
      null,
      children,
      " ",
      createElement("i", {
        className: cx("pi pi-arrow-drop-down", iconStyle),
        style: {
          transform: isOpen ? "rotate(180deg)" : "none"
        }
      })
    )
  );
};

const wrapperStyle =
  /*#__PURE__*/
  css({
    backgroundColor: colors.white.base,
    borderRadius: constants.borderRadius,
    boxShadow: constants.boxShadow.xElevated,
    overflow: "hidden",
    padding: 20,
    position: "relative"
  });
const tileStyle =
  /*#__PURE__*/
  css({
    ...typography.normal.regular,
    height: 48,
    width: 48,
    padding: 0,
    position: "relative",
    textAlign: "center",
    cursor: "pointer",
    outline: "none",
    backgroundColor: colors.gray.lightest,
    borderRadius: constants.borderRadius,
    display: "table",
    borderCollapse: "collapse",
    border: `1px solid ${colors.white.base}`,
    borderLeft: 0,
    borderTop: 0,
    time: {
      fontFamily: "inherit"
    },
    "&.react-calendar__tile--now": {
      color: colors.violet.base
    },
    "&:hover": {
      backgroundColor: colors.gray.lighter
    },
    "&[disabled]": {
      color: colors.gray.base,
      "&:hover": {
        backgroundColor: colors.gray.lightest,
        cursor: "not-allowed"
      }
    },
    "&.react-calendar__tile--active": {
      backgroundColor: colors.violet.lightest,
      color: colors.violet.base
    },
    "&.react-calendar__tile--rangeStart": {
      backgroundColor: colors.violet.base,
      color: `${colors.white.base} !important`
    },
    "&.react-calendar__tile--rangeEnd": {
      backgroundColor: colors.violet.base,
      color: `${colors.white.base} !important`
    },
    "&.react-calendar__tile--singleSelect": {
      backgroundColor: colors.violet.base,
      color: colors.white.base
    },
    "&.react-calendar__month-view__days__day--neighboringMonth": {
      color: colors.gray.base
    }
  });
const dateStyle =
  /*#__PURE__*/
  css({
    width: 356,
    margin: 10,
    position: "relative",
    ".react-calendar__month-view__weekdays__weekday": {
      color: colors.gray.dark,
      lineSpacing: "7px",
      fontSize: 12,
      textAlign: "center"
    },
    ".react-calendar__navigation__arrow": {
      border: `1px solid ${colors.gray.light}`,
      padding: "8px 10px",
      borderRadius: constants.borderRadius,
      alignItems: "center",
      display: "flex",
      cursor: "pointer",
      outline: "none",
      height: 40,
      width: 40,
      backgroundColor: colors.white.base,
      "&.react-calendar__navigation__prev-button": {
        position: "absolute",
        right: 47
      },
      "&:disabled": {
        cursor: "not-allowed"
      }
    },
    ".react-calendar__navigation__label": {
      ...typography.xl.bold,
      textAlign: "left",
      border: 0,
      outline: "none",
      cursor: "pointer",
      backgroundColor: colors.white.base,
      paddingLeft: 5
    },
    ".react-calendar__month-view ": {
      marginTop: 30
    },
    ".react-calendar__month-view__weekdays": {
      marginBottom: 20
    },
    ".react-calendar__decade-view__years, .react-calendar__century-view, .react-calendar__year-view": {
      marginTop: 15
    }
  });
const dotWrapper =
  /*#__PURE__*/
  css({
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    width: "100%"
  });
const dotStyle =
  /*#__PURE__*/
  css({
    height: 4,
    width: 4,
    display: "inline-block",
    borderRadius: constants.borderRadius,
    margin: "5px 2px 0"
  });
const buttonsWrapper =
  /*#__PURE__*/
  css({ ...flexSpaceBetween, marginTop: 20 });

class Calendar extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      value: this.props.selected,
      singleSelectedDate: null
    };
    this.onChange = value => {
      const { props } = this;
      if (props.range) {
        if (Array.isArray(value) && value.length === 2) {
          this.setState(
            {
              value: value,
              singleSelectedDate: null
            },
            () => props.onChange(value)
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
    this.onDayClick = day => {
      const { onClickDay } = this.props;
      this.setState({
        singleSelectedDate: [startOfDay(day), endOfDay(day)]
      });
      if (onClickDay) onClickDay(day);
    };
    this.getTileContent = ({ date }) => {
      const dot = this.props.tileDots.find(
        datum => !!datum.timeStamp && isSameDay(date, datum.timeStamp)
      );
      return dot
        ? createElement(
            "div",
            {
              className: dotWrapper
            },
            dot.colors &&
              dot.colors.map((color, i) =>
                createElement("span", {
                  key: i,
                  className: dotStyle,
                  style: {
                    backgroundColor: color
                  }
                })
              )
          )
        : null;
    };
    this.getDisabledDays = ({ date }) => {
      const { disabledDays } = this.props;
      return (
        (disabledDays &&
          disabledDays.length &&
          disabledDays.some(_date => isSameDay(_date, date))) ||
        false
      );
    };
    this.onApply = () => {
      const { props } = this;
      const { value, singleSelectedDate } = this.state;
      if (props.range && props.onApply) {
        if (singleSelectedDate) {
          props.onApply(singleSelectedDate);
        } else if (Array.isArray(value)) {
          props.onApply(value);
        }
      } else if (!props.range && props.onApply && !Array.isArray(value)) {
        props.onApply(value);
      }
    };
  }
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
    return createElement(
      "div",
      {
        className: cx(
          wrapperStyle,
          {
            [/*#__PURE__*/
            css({
              boxShadow: "none"
            })]: hideShadow
          },
          className
        )
      },
      createElement(
        RCalendar,
        Object.assign({}, rest, {
          onChange: this.onChange,
          selectRange: range,
          view: "month",
          value: selected,
          next2Label: null,
          prev2Label: null,
          tileClassName: tileStyle,
          className: dateStyle,
          showNeighboringMonth: false,
          tileContent: this.getTileContent,
          tileDisabled: this.getDisabledDays,
          onClickDay: this.onDayClick,
          prevLabel: createElement("i", {
            style: {
              fontSize: 14
            },
            className: "pi pi-chevron-left"
          }),
          nextLabel: createElement("i", {
            style: {
              fontSize: 14
            },
            className: "pi pi-arrow-right"
          })
        })
      ),
      (onClear || onApply) &&
        createElement(
          "div",
          {
            className: buttonsWrapper
          },
          onClear &&
            createElement(
              Button,
              {
                onClick: onClear,
                type: "secondary"
              },
              "Clear"
            ),
          onApply &&
            createElement(
              Button,
              {
                onClick: this.onApply
              },
              "Apply"
            )
        )
    );
  }
}
Calendar.defaultProps = {
  onChange: () => {},
  tileDots: []
};

const wrapperStyle$1 =
  /*#__PURE__*/
  css({
    position: "relative"
  });
const dropDownStyle =
  /*#__PURE__*/
  css({
    minWidth: 100,
    boxShadow: constants.boxShadow.xElevated,
    backgroundColor: colors.white.base,
    borderRadius: constants.borderRadius,
    position: "absolute",
    top: "100%",
    zIndex: 999,
    transformOrigin: "top left"
  });

class OutsideClick extends PureComponent {
  constructor() {
    super(...arguments);
    this.childRef = createRef();
    this.handleClick = e => {
      if (this.childRef.current && !this.childRef.current.contains(e.target)) {
        this.props.onOutsideClick();
      }
    };
    this.addListener = () => {
      document.addEventListener("mousedown", this.handleClick);
    };
    this.removeListener = () => {
      document.removeEventListener("mousedown", this.handleClick);
    };
  }
  componentDidMount() {
    if (!this.props.disabled) {
      this.addListener();
    }
  }
  componentWillUnmount() {
    this.removeListener();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.disabled !== this.props.disabled) {
      this.props.disabled ? this.removeListener() : this.addListener();
    }
  }
  render() {
    const { className, children } = this.props;
    return createElement(
      "div",
      {
        ref: this.childRef,
        className: className
      },
      children
    );
  }
}

const animationConfig = {
  from: {
    opacity: 0,
    transform: "scale(0.95)"
  },
  enter: {
    opacity: 1,
    transform: "scale(1)"
  },
  leave: {
    opacity: 0,
    transform: "scale(0.95)",
    pointerEvents: "none"
  },
  config: (_a, motion) =>
    motion === "leave"
      ? {
          duration: 0.1
        }
      : {
          duration: 200
        }
};

const MountTransition = props => {
  return createElement(
    Transition,
    Object.assign(
      {
        items: props.visible
      },
      animationConfig,
      props
    ),
    (show, state, index) =>
      show && (styles => props.children(styles, state, index))
  );
};

class DropDown extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      isOpen: !!this.props.initiallyOpen
    };
    this.toggleDropdown = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
  }
  render() {
    const {
      buttonLabel,
      children,
      labelComponent,
      padding,
      className,
      dropDownClassName,
      isSelected,
      disabled,
      labelClassName,
      onOutsideClick
    } = this.props;
    const { isOpen } = this.state;
    return createElement(
      OutsideClick,
      {
        className: cx(wrapperStyle$1, className),
        onOutsideClick: () => {
          this.setState({
            isOpen: false
          });
          if (onOutsideClick) onOutsideClick(isOpen);
        },
        disabled: !isOpen
      },
      createElement(
        Manager,
        null,
        createElement(Reference, null, ({ ref }) =>
          createElement(
            "div",
            {
              style: {
                display: "inline-block",
                width: "100%"
              },
              ref: ref
            },
            labelComponent
              ? labelComponent({
                  isOpen,
                  toggleDropdown: this.toggleDropdown
                })
              : createElement(
                  DropDownButton,
                  {
                    isSelected: !!isSelected,
                    isOpen: isOpen,
                    onClick: this.toggleDropdown,
                    disabled: disabled,
                    className: labelClassName
                  },
                  buttonLabel
                )
          )
        ),
        createElement(
          MountTransition,
          {
            visible: isOpen
          },
          transitionStyles =>
            createElement(
              animated.div,
              {
                className: cx(dropDownStyle, dropDownClassName),
                style: {
                  padding,
                  ...transitionStyles
                }
              },
              createElement(
                Popper,
                Object.assign({}, this.props, {
                  positionFixed: true
                }),
                ({ ref, style, placement, arrowProps }) => {
                  const popperWrapperStyle = {
                    ...style,
                    ...transitionStyles,
                    backgroundColor: colors.white.base,
                    transform: `${style.transform ||
                      ""} ${transitionStyles.transform || ""}`,
                    transformOrigin: `${arrowProps.style.left ||
                      0}px ${arrowProps.style.top || 0}px`,
                    padding: `${padding}`
                  };
                  return createElement(
                    "div",
                    {
                      className: cx(dropDownStyle, dropDownClassName),
                      ref: ref,
                      style: popperWrapperStyle,
                      "data-placement": placement
                    },
                    children({
                      toggle: this.toggleDropdown,
                      isOpen: this.state.isOpen
                    })
                  );
                }
              )
            )
        )
      )
    );
  }
}
DropDown.defaultProps = {
  closeOnOutsideClick: true,
  placement: "bottom-start",
  modifiers: {
    hide: {
      enabled: false
    },
    preventOverflow: {
      enabled: false
    },
    flip: {
      enabled: false
    }
  }
};

const animation = "all 0.3s cubic-bezier(.64,.09,.08,1)";
const inputMarginBottom = 20;
const wrapperStyle$2 =
  /*#__PURE__*/
  css({
    position: "relative",
    display: "flex",
    backgroundColor: colors.white.base,
    width: "100%",
    flexDirection: "column",
    marginBottom: inputMarginBottom,
    height: 68,
    "&._pebble_input_wrapper_textarea": {
      height: 110
    }
  });
const inputStyle =
  /*#__PURE__*/
  css({
    outline: 0,
    border: 0,
    borderBottom: `1px solid ${colors.gray.lighter}`,
    padding: "24px 0 12px 0",
    height: 48,
    borderRadius: 0,
    ...typography.normal.regular,
    width: "100%",
    ...textEllipsis,
    "&:disabled": {
      backgroundColor: colors.white.base
    },
    .../*#__PURE__*/
    getPlaceholderStyle(colors.gray.light)
  });
const inputReadOnlyStyle =
  /*#__PURE__*/
  css({
    color: colors.gray.dark
  });
const inputDisabledStyle =
  /*#__PURE__*/
  css({
    cursor: "not-allowed",
    pointerEvents: "none",
    color: colors.gray.base
  });
const inputTextAreaStyle =
  /*#__PURE__*/
  css({
    height: 88,
    padding: "0 0 52px 0",
    marginTop: 22,
    resize: "none"
  });
const highlightStyle =
  /*#__PURE__*/
  css({
    height: 2,
    backgroundColor: colors.violet.base,
    marginTop: -2,
    position: "relative",
    width: 0,
    transition: animation,
    zIndex: 9,
    "&._pebble_input_highlight_state, &._pebble_input_highlight_focused": {
      width: "100%"
    }
  });
const labelStyle =
  /*#__PURE__*/
  css({
    color: colors.gray.base,
    fontSize: 14,
    lineHeight: "12px",
    position: "absolute",
    transition: animation,
    transform: "translate(0, 24px)",
    pointerEvents: "none",
    "&._pebble_input_label_focused": {
      fontSize: 12,
      lineHeight: "10px",
      transform: "translate(0, 0)",
      color: colors.gray.dark
    }
  });
const messageStyle =
  /*#__PURE__*/
  css({
    ...typography.s.regular,
    marginTop: 10,
    lineHeight: "10px",
    textAlign: "left"
  });
const loadingStyle =
  /*#__PURE__*/
  css({
    right: -10,
    top: 20,
    position: "absolute"
  });

function getColor(error, success, isUnderlineColor) {
  let color = colors.gray.dark;
  if (error) {
    color = colors.red.base;
  } else if (success) {
    color = colors.emerald.base;
  } else if (isUnderlineColor) {
    color = colors.violet.base;
  }
  return color;
}
class Input extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      isFocused: false
    };
    this.addFocus = () => {
      this.setState({
        isFocused: true
      });
    };
    this.removeFocus = () => {
      this.setState({
        isFocused: false
      });
    };
    this.handleChange = e => {
      this.props.onChange(e.target.value || "");
    };
  }
  render() {
    const {
      type,
      placeholder,
      className,
      inputClassName,
      fixLabelAtTop,
      value,
      readOnly,
      disabled,
      errorMessage,
      successMessage,
      message,
      textArea,
      required,
      onClick,
      loading
    } = this.props;
    const { isFocused } = this.state;
    const _message = errorMessage || successMessage || message;
    const _inputClassName = cx(
      inputStyle,
      {
        [inputDisabledStyle]: disabled,
        [inputReadOnlyStyle]: readOnly,
        [inputTextAreaStyle]: textArea
      },
      inputClassName
    );
    const _inputProps = {
      "aria-label": placeholder ? placeholder : undefined,
      className: _inputClassName,
      disabled,
      onChange: this.handleChange,
      readOnly,
      value: value || ""
    };
    const highlightClassName = cx(highlightStyle, {
      _pebble_input_highlight_focused: isFocused,
      _pebble_input_highlight_state: !!errorMessage || !!successMessage,
      _pebble_input_highlight_read_only: readOnly,
      _pebble_input_highlight_disabled: disabled
    });
    const labelClassName = cx(labelStyle, {
      _pebble_input_label_focused: isFocused || !!value || fixLabelAtTop
    });
    const _wrapperStyle = cx(
      wrapperStyle$2,
      {
        _pebble_input_wrapper_textarea: textArea
      },
      className
    );
    return createElement(
      "div",
      {
        className: _wrapperStyle,
        onFocus: this.addFocus,
        onBlur: this.removeFocus,
        onClick: onClick
      },
      this.props.textArea
        ? createElement(
            "textarea",
            Object.assign({}, _inputProps, this.props.inputProps)
          )
        : createElement(
            "input",
            Object.assign(
              {
                type: type
              },
              _inputProps,
              this.props.inputProps
            )
          ),
      createElement(
        "label",
        {
          className: labelClassName
        },
        placeholder,
        required &&
          createElement(
            "span",
            {
              style: {
                color: colors.red.base
              }
            },
            "\xA0*"
          )
      ),
      createElement("div", {
        className: highlightClassName,
        style: {
          backgroundColor: getColor(errorMessage, successMessage, true)
        }
      }),
      loading &&
        createElement(Loader, {
          color: colors.violet.base,
          scale: 0.6,
          className: loadingStyle
        }),
      _message &&
        createElement(
          "div",
          {
            className: messageStyle,
            style: {
              color: getColor(errorMessage, successMessage)
            }
          },
          _message
        )
    );
  }
}
Input.defaultProps = {
  value: "",
  readOnly: false
};

const modalContainer =
  /*#__PURE__*/
  css({
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    overflowY: "scroll",
    WebkitOverflowScrolling: "touch",
    zIndex: 99998
  });

class Modal extends PureComponent {
  constructor() {
    super(...arguments);
    this.node = isBrowser ? document.createElement("div") : null;
  }
  componentDidMount() {
    if (this.node) {
      document.body.appendChild(this.node);
    }
  }
  componentWillUnmount() {
    if (this.node) {
      document.body.removeChild(this.node);
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.visible === this.props.visible) return;
    if (this.props.visible) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "";
    }
  }
  render() {
    if (!isBrowser) return null;
    const { children, visible, backDropClassName, modalClassName } = this.props;
    const node = this.node;
    return createPortal(
      createElement(
        MountTransition,
        {
          visible: visible
        },
        transitionStyles =>
          createElement(
            "div",
            {
              style: {
                opacity: transitionStyles.opacity
              },
              className: cx(modalContainer, backDropClassName)
            },
            createElement(
              "div",
              {
                className: cx(
                  /*#__PURE__*/
                  css({
                    transform: transitionStyles.transform
                  }),
                  modalClassName
                )
              },
              children
            )
          )
      ),
      node
    );
  }
}

const searchWrapperStyle =
  /*#__PURE__*/
  css({
    minWidth: "200px",
    borderRadius: constants.borderRadius,
    padding: "0 20px",
    ...flexRow,
    alignItems: "center",
    height: 40,
    "> i": {
      marginRight: 10,
      fontSize: 12
    },
    "&.__pebble__search__small": {
      backgroundColor: colors.gray.lightest
    },
    "&.__pebble__search__large": {
      backgroundColor: colors.white.base,
      height: 76,
      padding: "0 25px",
      boxShadow: constants.boxShadow.base
    },
    "&.__pebble__search__table": {
      border: `1px solid ${colors.gray.light}`,
      backgroundColor: colors.white.base,
      i: {
        color: colors.gray.dark
      }
    }
  });
const searchStyle =
  /*#__PURE__*/
  css({
    borderRadius: constants.borderRadius,
    outline: "none",
    border: 0,
    height: "inherit",
    flexGrow: 1,
    ...textEllipsis,
    ...typography.s.regular,
    .../*#__PURE__*/
    getPlaceholderStyle(colors.gray.base),
    backgroundColor: "transparent"
  });
const clearContainer =
  /*#__PURE__*/
  css({
    display: "table",
    height: 16,
    width: 16,
    backgroundColor: colors.gray.light,
    fontSize: 6,
    borderRadius: 16,
    textAlign: "center",
    cursor: "pointer",
    pointerEvents: "none",
    transition: "opacity 0.3s",
    opacity: 0,
    "&.__display": {
      opacity: 1,
      pointerEvents: "unset"
    }
  });

class Search extends PureComponent {
  constructor() {
    super(...arguments);
    this.searchInputRef = createRef();
  }
  render() {
    const {
      type,
      inputProps,
      onChange,
      placeholder,
      showSearchIcon,
      className,
      clearable,
      value
    } = this.props;
    const wrapperClassName = cx(searchWrapperStyle, {
      __pebble__search__small: type === "small",
      __pebble__search__large: type === "large",
      __pebble__search__table: type === "table"
    });
    return createElement(
      "div",
      {
        className: cx(wrapperClassName, className)
      },
      type !== "large" &&
        showSearchIcon &&
        createElement("i", {
          className: "pi pi-search"
        }),
      createElement(
        "input",
        Object.assign(
          {
            className: searchStyle,
            type: "text",
            "aria-label": placeholder,
            placeholder: placeholder,
            onChange: e => {
              onChange(e.target.value);
            },
            ref: this.searchInputRef,
            value: value
          },
          inputProps
        )
      ),
      clearable &&
        createElement(
          "div",
          {
            className: cx(clearContainer, {
              __display: value && !!value.length
            }),
            onClick: () => {
              if (this.searchInputRef.current) {
                this.searchInputRef.current.value = "";
              }
              onChange("");
            }
          },
          createElement("i", {
            className: "pi pi-close",
            style: {
              display: "table-cell",
              verticalAlign: "middle"
            }
          })
        )
    );
  }
}
Search.defaultProps = {
  showSearchIcon: true,
  clearable: true
};

const selectWrapper =
  /*#__PURE__*/
  css({
    marginBottom: 20
  });
const relativePosition =
  /*#__PURE__*/
  css({
    position: "relative"
  });
const selectInputWrapper =
  /*#__PURE__*/
  css({
    pointerEvents: "none",
    marginBottom: 0
  });
const selectInput =
  /*#__PURE__*/
  css({
    color: colors.gray.darker,
    paddingRight: 15
  });
const dropDownClass =
  /*#__PURE__*/
  css({
    marginTop: -inputMarginBottom
  });
const fullWidth =
  /*#__PURE__*/
  css({
    width: "100%"
  });
const inputWrapper =
  /*#__PURE__*/
  css({
    cursor: "pointer",
    position: "relative"
  });
const chevronStyle =
  /*#__PURE__*/
  css({
    position: "absolute",
    top: 0,
    bottom: 0,
    margin: "auto",
    height: "10px",
    right: 7,
    color: colors.gray.base,
    fontSize: 10,
    "&.__pebble__select__open": {
      transform: "rotate(180deg)"
    }
  });

function getSelectedCheckboxes(changedValue, prevSelected) {
  const _selected = prevSelected || [];
  const cloned = _selected.slice(0);
  const index = _selected.findIndex(datum => datum === changedValue);
  if (index >= 0) {
    cloned.splice(index, 1);
  } else {
    cloned.push(changedValue);
  }
  return cloned;
}

const optionWrapperMaxHeight = 316;
const searchBoxHeight = 80;
const initialPadding = 20;
const onScrollPadding = 10;
const optionsWrapper =
  /*#__PURE__*/
  css({
    backgroundColor: colors.white.base,
    borderRadius: constants.borderRadius,
    position: "relative",
    width: "inherit",
    zIndex: 9,
    maxHeight: optionWrapperMaxHeight,
    minWidth: 100,
    overflowY: "auto",
    padding: "10px 1px"
  });
const searchBoxWrapper =
  /*#__PURE__*/
  css({
    padding: initialPadding,
    boxShadow: "none",
    transition: "all 100ms linear",
    zIndex: 10,
    willChange: "padding",
    position: "absolute",
    top: 0,
    background: "white",
    width: "100%",
    boxSizing: "border-box"
  });
const searchBoxScrolledStyle =
  /*#__PURE__*/
  css({
    boxShadow: constants.boxShadow.base,
    padding: onScrollPadding
  });

class OptionGroup extends PureComponent {
  constructor() {
    super(...arguments);
    this.optionRef = createRef();
    this.optionsRefsSet = new Map();
    this.state = {
      highlighted: -1,
      isScrolled: false
    };
    this.handleKeyPress = e => {
      const { handleChange, isSelected } = this.props;
      const children = Children.toArray(this.props.children);
      const { highlighted } = this.state;
      const { which } = e;
      if (which === 13 && children && children[highlighted]) {
        const { value } =
          children && children[highlighted] && children[highlighted].props;
        handleChange(
          {
            value,
            checked: !isSelected(value)
          },
          e
        );
      }
      this.setState(
        () => {
          let _highlighted = highlighted;
          if (which === 40) {
            _highlighted = Math.min(
              _highlighted + 1,
              Children.count(children) - 1
            );
          }
          if (which === 38) {
            _highlighted = Math.max(_highlighted - 1, 0);
          }
          return {
            highlighted: _highlighted
          };
        },
        () => {
          const currentRef = this.optionsRefsSet.get(highlighted);
          if (
            this.optionRef.current &&
            (which === 40 || which === 38) &&
            currentRef &&
            currentRef.current
          ) {
            const element = findDOMNode(currentRef.current);
            if (element) {
              scrollIntoView(element, {
                behavior: "smooth",
                boundary: this.optionRef.current
              });
            }
          }
        }
      );
    };
  }
  componentDidMount() {
    this.observer = new IntersectionObserver(
      entries => {
        this.setState({
          isScrolled: entries[0].intersectionRatio < 0.9
        });
      },
      {
        root: this.optionRef.current,
        threshold: 0.9
      }
    );
    if (
      this.optionRef.current &&
      this.optionRef.current.childNodes &&
      this.optionRef.current.childNodes.length
    ) {
      this.observer.observe(this.optionRef.current.childNodes[0]);
    }
  }
  componentWillUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
  render() {
    const {
      searchBox,
      children,
      multiSelect,
      className,
      isSelected,
      handleChange,
      searchBoxProps
    } = this.props;
    const { isScrolled, highlighted } = this.state;
    const _children = Children.map(children, (_option, i) => {
      const option = _option;
      let ref = this.optionsRefsSet.get(i);
      if (!ref) {
        ref = createRef();
        this.optionsRefsSet.set(i, ref);
      }
      return cloneElement(option, {
        onChange: handleChange,
        isActive: highlighted === i,
        isSelected: isSelected(option.props.value),
        multiSelect,
        ref
      });
    });
    const searchBoxClassName = cx(searchBoxWrapper, {
      [searchBoxScrolledStyle]: isScrolled
    });
    return createElement(
      Fragment,
      null,
      searchBox &&
        searchBoxProps &&
        createElement(
          "div",
          {
            className: searchBoxClassName
          },
          createElement(
            Search,
            Object.assign(
              {
                type: "small"
              },
              searchBoxProps,
              {
                inputProps: {
                  ...(searchBoxProps && searchBoxProps.inputProps),
                  onKeyDown: this.handleKeyPress,
                  autoFocus: true
                }
              }
            )
          )
        ),
      !!Children.count(children) &&
        createElement(
          "div",
          {
            ref: this.optionRef,
            style: {
              paddingTop: searchBox ? searchBoxHeight : undefined
            },
            className: cx(optionsWrapper, className),
            role: multiSelect ? "group" : "radiogroup",
            "data-test-id": "optiongroup"
          },
          _children
        )
    );
  }
}

const optionGroupCheckBoxButtonWrapPadding = 20;
const optionGroupCheckBoxButtonWrapPaddingTop = 10;
const optionGroupCheckBoxWrap =
  /*#__PURE__*/
  css({
    maxHeight: `${optionWrapperMaxHeight +
      searchBoxHeight +
      2 * (initialPadding - onScrollPadding) +
      optionGroupCheckBoxButtonWrapPadding +
      optionGroupCheckBoxButtonWrapPaddingTop +
      smallButtonHeight}`,
    position: "relative"
  });
const optionGroupCheckBoxButtonWrap =
  /*#__PURE__*/
  css({
    ...flexSpaceBetween,
    padding: `${optionGroupCheckBoxButtonWrapPadding}`,
    paddingTop: `${optionGroupCheckBoxButtonWrapPaddingTop}`,
    backgroundColor: colors.white.base
  });

class OptionGroupCheckBox extends PureComponent {
  constructor() {
    super(...arguments);
    this.isSelected = value => {
      const { selected } = this.props;
      return !!selected && selected.includes(value);
    };
    this.handleChange = ({ value }, event) => {
      this.props.onChange(getSelectedCheckboxes(value, this.props.selected), {
        props: this.props,
        event
      });
    };
    this.onApply = () => {
      const { onApply, selected } = this.props;
      if (onApply) onApply(selected || [], this.props);
    };
  }
  render() {
    const { onApply, onClear, isSelected, onChange, ...rest } = this.props;
    return createElement(
      "div",
      {
        className: optionGroupCheckBoxWrap
      },
      createElement(
        OptionGroup,
        Object.assign({}, rest, {
          isSelected: isSelected || this.isSelected,
          handleChange: this.handleChange,
          multiSelect: true
        })
      ),
      (onApply || onClear) &&
        createElement(
          "div",
          {
            className: optionGroupCheckBoxButtonWrap
          },
          onClear &&
            createElement(
              Button,
              {
                type: "secondary",
                onClick: onClear
              },
              "Clear"
            ),
          onApply &&
            createElement(
              Button,
              {
                onClick: this.onApply
              },
              "Apply"
            )
        )
    );
  }
}

class OptionGroupRadio extends PureComponent {
  constructor() {
    super(...arguments);
    this.isSelected = value => {
      return this.props.selected === value;
    };
    this.handleChange = ({ value, checked }, event) => {
      const { onChange } = this.props;
      onChange(checked ? value : undefined, {
        props: this.props,
        event
      });
    };
  }
  render() {
    const { selected, onChange, isSelected, ...rest } = this.props;
    return createElement(
      OptionGroup,
      Object.assign({}, rest, {
        isSelected: isSelected || this.isSelected,
        handleChange: this.handleChange
      })
    );
  }
}

function noop() {}
function Select(props) {
  const {
    className,
    placeholder,
    required,
    errorMessage,
    value,
    dropdownClassName,
    inputProps,
    fullWidthDropdown,
    onDropdownToggle = noop,
    disabled,
    isSelected,
    placement,
    modifiers
  } = props;
  return createElement(
    "div",
    {
      className: cx(selectWrapper, className, {
        [relativePosition]: fullWidthDropdown
      })
    },
    createElement(
      DropDown,
      {
        dropDownClassName: cx(dropDownClass, dropdownClassName, {
          [fullWidth]: fullWidthDropdown
        }),
        onOutsideClick: isOpen => onDropdownToggle(isOpen),
        labelComponent: ({ toggleDropdown, isOpen }) => {
          const chevron = cx(chevronStyle, "pi", "pi-arrow-drop-down", {
            __pebble__select__open: isOpen
          });
          return createElement(
            "div",
            {
              className: inputWrapper,
              onClick: disabled
                ? undefined
                : () => {
                    toggleDropdown();
                    onDropdownToggle(isOpen);
                  }
            },
            createElement(
              Input,
              Object.assign(
                {
                  className: selectInputWrapper,
                  inputClassName: selectInput,
                  placeholder: placeholder,
                  value: value || "",
                  onChange: noop,
                  required: required,
                  message: isOpen ? " " : "",
                  errorMessage: errorMessage,
                  readOnly: true,
                  disabled: disabled
                },
                inputProps
              )
            ),
            createElement("i", {
              className: chevron
            })
          );
        },
        placement: placement,
        modifiers: modifiers
      },
      ({ toggle, isOpen }) => {
        const { children, onClear, searchBox, searchBoxProps } = props;
        const commonProps = {
          isSelected,
          onClear:
            onClear &&
            (() => {
              onClear();
              onDropdownToggle(isOpen);
              toggle();
            }),
          searchBox,
          searchBoxProps
        };
        if (props.multiSelect) {
          return createElement(
            OptionGroupCheckBox,
            Object.assign(
              {
                selected: props.selected,
                onChange: (_value, extras) => {
                  props.onChange(_value, extras);
                },
                onApply:
                  props.onApply &&
                  (_value => {
                    if (props.onApply) props.onApply(_value, props);
                    onDropdownToggle(isOpen);
                    toggle();
                  })
              },
              commonProps
            ),
            children
          );
        } else {
          return createElement(
            OptionGroupRadio,
            Object.assign(
              {
                selected: props.selected,
                onChange: (_value, extras) => {
                  if (_value) props.onChange(_value, extras);
                  onDropdownToggle(isOpen);
                  toggle();
                }
              },
              commonProps
            ),
            children
          );
        }
      }
    )
  );
}

const sidebarWrapperStyle =
  /*#__PURE__*/
  css({
    backgroundColor: "rgba(16,23,33,0.3)",
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 99
  });
const closeStyle =
  /*#__PURE__*/
  css({
    backgroundColor: colors.white.base,
    borderRadius: constants.borderRadius,
    height: 40,
    width: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    marginLeft: -60,
    marginTop: 20,
    position: "absolute",
    i: {
      fontSize: 14,
      color: colors.gray.darker
    },
    "@media (max-width: 800px)": {
      left: 80,
      marginTop: -45,
      borderRadius: 0,
      display: "flex",
      justifyContent: "flex-end",
      padding: "0 20px",
      i: {
        float: "right",
        color: colors.gray.dark,
        fontSize: 14
      }
    }
  });
const sidebarStyle =
  /*#__PURE__*/
  css({
    transition: `transform 200ms ${constants.animationCurve}`,
    backgroundColor: colors.white.base,
    position: "fixed",
    top: 0,
    bottom: 0,
    right: 0,
    willChange: "transform",
    zIndex: 99,
    "@media (max-width: 800px)": {
      width: "100%",
      paddingTop: 50
    },
    webkitOverflowScrolling: "touch"
  });

const transitionProps = {
  from: {
    opacity: 0
  },
  enter: {
    opacity: 1
  },
  leave: {
    opacity: 0
  }
};
class SideBar extends PureComponent {
  componentDidMount() {
    if (this.props.isOpen) document.body.classList.add(disableScrollY);
  }
  componentDidUpdate() {
    if (this.props.isOpen) {
      document.body.classList.add(disableScrollY);
    } else {
      document.body.classList.remove(disableScrollY);
    }
  }
  componentWillUnmount() {
    if (this.props.isOpen) {
      document.body.classList.remove(disableScrollY);
    }
  }
  render() {
    const {
      width,
      isOpen,
      children,
      onClose,
      closeOnOutsideClick
    } = this.props;
    const _sidebarOverride =
      /*#__PURE__*/
      css({
        width,
        transform: isOpen ? `translateX(0)` : `translateX(${width}px)`
      });
    const _sidebarStyle = cx(
      _sidebarOverride,
      sidebarStyle,
      /*#__PURE__*/
      css({
        transform: isOpen ? `translateX(0)` : `translateX(100%)`
      })
    );
    return createElement(
      Fragment,
      null,
      createElement(
        Transition,
        Object.assign(
          {
            items: isOpen
          },
          transitionProps,
          {
            config: animationConfig.config
          }
        ),
        show =>
          show &&
          (styles =>
            createElement(animated.div, {
              style: styles,
              className: sidebarWrapperStyle
            }))
      ),
      createElement(
        OutsideClick,
        {
          onOutsideClick: this.props.onClose,
          disabled: !closeOnOutsideClick || !isOpen
        },
        createElement(
          "div",
          {
            className: _sidebarStyle
          },
          createElement(
            Transition,
            Object.assign(
              {
                items: isOpen
              },
              transitionProps
            ),
            show =>
              show &&
              (styles =>
                createElement(
                  animated.div,
                  {
                    style: styles,
                    className: closeStyle,
                    onClick: onClose
                  },
                  createElement("i", {
                    className: "pi pi-close"
                  }),
                  createElement(Ink, null)
                ))
          ),
          createElement(
            "div",
            {
              style: {
                overflowY: "scroll",
                height: "100vh"
              }
            },
            children
          )
        )
      )
    );
  }
}
SideBar.defaultProps = {
  closeOnOutsideClick: true
};

const rheostatOverrides = `
.rheostat {
  overflow: visible;
}

.rheostat-background {
  background-color: ${colors.violet.lightest};
  position: relative;
  border-radius: 2px;
  overflow: hidden;
  height: 4px;
  top: 0;
  width: 100%;
}

.rheostat-progress {
  background-color: ${colors.violet.base};
  position: absolute;
  height: 4px;
  border-radius: 2px;
  top: 0;
}

.rheostat-handle {
  background-color: ${colors.violet.base};
  border-radius: 50%;
  height: 20px;
  outline: none;
  z-index: 2;
  width: 20px;
  margin-left: -10px;
  top: -8px;
  border: 0;
  cursor: pointer;
  box-shadow: ${constants.boxShadow.xElevated};
}

.__pebble__slider__large .rheostat-handle {
  width: 24px;
  height: 24px;
  margin-left: -12px;
  top: -10px;
}

.rheostat-handle:hover {
  background-color: ${colors.violet.light};
}

.__pebble__slider__disabled .rheostat-handle {
  background-color: ${colors.violet.lighter};
  cursor: inherit;
}

.rheostat-horizontal {
  height: 4px;
}
`;
const sliderHeader =
  /*#__PURE__*/
  css({
    ...flexSpaceBetween,
    marginBottom: 25,
    alignItems: "center",
    ".__pebble__slider__large &": {
      marginBottom: 35
    }
  });

let rheostatStylesOverriden = false;
function overrideRheostatStyles() {
  if (rheostatStylesOverriden) return;
  injectGlobal(rheostatOverrides);
  rheostatStylesOverriden = true;
}
const Slider = ({
  className,
  large,
  title,
  disabled,
  valueLabelExtractor,
  values,
  onValuesUpdated,
  ...rest
}) => {
  overrideRheostatStyles();
  const mainClass = cx(className, {
    __pebble__slider__disabled: disabled,
    __pebble__slider__large: large
  });
  const _values = Array.isArray(values) ? values.slice(0) : values || [];
  if (Array.isArray(values)) {
    if (!values[0] && rest.min) {
      _values[0] = rest.min;
    }
    if (!values[1] && rest.max) {
      _values[1] = rest.max;
    }
  }
  return createElement(
    "div",
    {
      className: mainClass
    },
    createElement(
      "div",
      {
        className: sliderHeader
      },
      createElement(
        "div",
        {
          style: large ? typography.normal.light : typography.normal.light
        },
        title
      ),
      createElement(
        "div",
        {
          style: large ? typography.l.regular : typography.normal.regular
        },
        valueLabelExtractor()
      )
    ),
    createElement(
      Rheostat,
      Object.assign(
        {
          "aria-valuemax": rest.max,
          "aria-valuemin": rest.min,
          disabled: disabled,
          onValuesUpdated:
            onValuesUpdated &&
            (args => {
              const { min, max } = args;
              if (
                Array.isArray(args.values) &&
                args.values[0] === rest.min &&
                args.values[1] === rest.max
              ) {
                onValuesUpdated({
                  min,
                  max,
                  values: []
                });
              } else {
                onValuesUpdated(args);
              }
            }),
          values: _values
        },
        rest
      )
    )
  );
};

const headStyle =
  /*#__PURE__*/
  css({
    display: "flex",
    flexDirection: "row",
    position: "relative"
  });
const headSection =
  /*#__PURE__*/
  css({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    "> div": {
      fontSize: 14
    }
  });
const headingStyle =
  /*#__PURE__*/
  css({ ...typography.normal.regular });
const dotStyle$1 =
  /*#__PURE__*/
  css({
    height: 20,
    width: 20,
    backgroundColor: colors.gray.base,
    borderRadius: "50%",
    border: "5px solid white",
    marginTop: 18,
    position: "relative",
    zIndex: 9
  });
const activeDotStyle =
  /*#__PURE__*/
  css({
    backgroundColor: colors.violet.base
  });
const contentWrapper =
  /*#__PURE__*/
  css({
    marginTop: -10
  });
const footerStyle =
  /*#__PURE__*/
  css({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50
  });
const stepperLineStyle =
  /*#__PURE__*/
  css({
    height: 2,
    bottom: 9,
    position: "absolute",
    transition: "width 100ms ease-out",
    backgroundColor: colors.violet.base
  });

function noop$1() {}
class Stepper extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      active: this.props.initialSelectedIndex || 0
    };
    this.goToNextPage = async () => {
      const { onBeforeNext, data } = this.props;
      const allow = await onBeforeNext(this.state.active);
      if (allow)
        this.goToPage(Math.min(data.length - 1, this.state.active + 1));
    };
    this.goToPrevPage = async () => {
      const allow = await this.props.onBeforePrev(this.state.active);
      if (allow) this.goToPage(Math.max(0, this.state.active - 1));
    };
    this.goToPage = index => {
      const prev = this.state.active;
      this.setState(
        {
          active: index
        },
        () =>
          this.props.onChange({
            prev,
            current: this.state.active
          })
      );
    };
    this.getHeadings = () => {
      const { headingExtractor, data } = this.props;
      return data.map(datum =>
        headingExtractor({
          item: datum
        })
      );
    };
    this.getLeftButtonData = () => {
      const { cancelLabel, prevLabel, onCancel } = this.props;
      return this.state.active === 0
        ? {
            label: cancelLabel,
            action: onCancel
          }
        : {
            label: prevLabel,
            action: this.goToPrevPage
          };
    };
    this.getRightButtonData = () => {
      const { nextLabel, onDone, data, doneLabel } = this.props;
      return this.state.active === data.length - 1
        ? {
            label: doneLabel,
            action: onDone
          }
        : {
            label: nextLabel,
            action: this.goToNextPage
          };
    };
  }
  render() {
    const {
      data,
      renderContentElement,
      keyExtractor,
      renderFooterElement,
      className,
      allowSkip
    } = this.props;
    const { active } = this.state;
    const args = {
      goToNext: this.goToNextPage,
      goToPage: this.goToPage,
      goToPrev: this.goToPrevPage,
      leftButtonData: this.getLeftButtonData(),
      rightButtonData: this.getRightButtonData()
    };
    return createElement(
      "div",
      {
        className: className
      },
      createElement(
        "div",
        {
          className: headStyle
        },
        this.getHeadings().map((heading, i) => {
          const dotClass = cx(dotStyle$1, {
            [activeDotStyle]: i <= active
          });
          const headingColor =
            i === active
              ? colors.violet.base
              : allowSkip
              ? colors.gray.base
              : undefined;
          return createElement(
            "div",
            {
              key: keyExtractor(data[i]),
              className: cx(headSection, {
                [/*#__PURE__*/
                css({
                  cursor: "inherit"
                })]: !allowSkip
              }),
              onClick: allowSkip ? () => this.goToPage(i) : noop$1
            },
            createElement(
              "div",
              {
                className: headingStyle,
                style: {
                  color: headingColor
                }
              },
              heading
            ),
            createElement("div", {
              className: dotClass
            })
          );
        }),
        createElement("div", {
          className: stepperLineStyle,
          style: {
            width: `${(100 / (2 * data.length)) * 2 * active}%`,
            marginLeft: `${100 / (2 * data.length)}%`
          }
        })
      ),
      createElement(
        "div",
        {
          className: contentWrapper
        },
        data.map((datum, i) =>
          createElement(
            "div",
            {
              key: keyExtractor(datum),
              className: cx({
                [/*#__PURE__*/
                css({
                  display: "none"
                })]: i !== this.state.active
              })
            },
            renderContentElement({
              item: datum,
              isSelected: i === this.state.active,
              ...args
            })
          )
        ),
        renderFooterElement(
          {
            activeIndex: this.state.active,
            ...args
          },
          this.props
        )
      )
    );
  }
}
Stepper.defaultProps = {
  allowSkip: true,
  cancelLabel: "Cancel",
  nextLabel: "Next",
  prevLabel: "Prev",
  doneLabel: "Done",
  onBeforeNext: () => true,
  onBeforePrev: () => true,
  onChange: () => {},
  onCancel: () => {},
  onDone: () => {},
  renderFooterElement: ({ leftButtonData, rightButtonData }, props) => {
    return createElement(
      "footer",
      {
        className: footerStyle
      },
      createElement(
        Button,
        {
          size: "large",
          width: 100,
          type: "secondary",
          onClick: leftButtonData.action
        },
        leftButtonData.label
      ),
      createElement(
        Button,
        {
          size: "large",
          width: 100,
          loading: props.isRightButtonLoading,
          onClick: rightButtonData.action
        },
        rightButtonData.label
      )
    );
  }
};

const tagStyle =
  /*#__PURE__*/
  css({
    ...typography.s.bold,
    ...flexSpaceBetween,
    borderRadius: constants.borderRadius,
    padding: "0 10px",
    height: 28,
    alignItems: "center",
    justifyContent: "center",
    display: "inline-flex",
    lineHeight: "10px",
    "&.__pebble__tag__with__close": {
      paddingRight: 0
    }
  });
const iconClass =
  /*#__PURE__*/
  css({
    fontSize: 7,
    marginLeft: 5,
    height: "inherit",
    padding: "10px 10px",
    cursor: "pointer",
    position: "relative",
    ":hover": {
      backgroundColor: colors.violet.lighter,
      borderTopRightRadius: constants.borderRadius,
      borderBottomRightRadius: constants.borderRadius
    }
  });

const Tag = ({ label, color, onClose, className }) => {
  const wrapperClassName = cx(tagStyle, {
    __pebble__tag__with__close: !!onClose
  });
  const _className = cx(wrapperClassName, className);
  return createElement(
    "div",
    {
      className: _className,
      style: {
        color: colors[color].base,
        backgroundColor: colors[color].lightest || colors[color].light
      }
    },
    label,
    " ",
    onClose &&
      createElement(
        "i",
        {
          onClick: onClose,
          className: cx("pi", "pi-close", iconClass)
        },
        createElement(Ink, null)
      )
  );
};

const toastWrapper =
  /*#__PURE__*/
  css({
    position: "fixed",
    borderRadius: constants.borderRadius,
    ...typography.normal.regular,
    color: colors.white.base,
    height: 46,
    display: "flex",
    alignItems: "center",
    padding: 20,
    zIndex: 99999,
    "> i": {
      marginRight: 10
    }
  });

const emitter =
  /*#__PURE__*/
  new Mitt();
const _colors = {
  success: colors.emerald.base,
  error: colors.red.base
};
const toastTransitionsLeft = {
  from: {
    transform: "translateX(-10px)"
  },
  enter: {
    transform: "translateX(0)"
  },
  leave: {
    transform: "translateX(-10px)"
  }
};
const toastTransitionsRight = {
  from: {
    transform: "translateX(10px)"
  },
  enter: {
    transform: "translateX(0)"
  },
  leave: {
    transform: "translateX(10px)"
  }
};
const customStyles = {
  TOP: {
    style: {
      top: 20,
      left: "50%"
    },
    transitions: {
      from: {
        transform: "translateX(-50%) translateY(-10px)"
      },
      enter: {
        transform: "translateX(-50%) translateY(0)"
      },
      leave: {
        transform: "translateX(-50%) translateY(-10px)"
      }
    }
  },
  TOP_LEFT: {
    style: {
      top: 20,
      left: 20
    },
    transitions: toastTransitionsLeft
  },
  TOP_RIGHT: {
    style: {
      top: 20,
      right: 20
    },
    transitions: toastTransitionsRight
  },
  BOTTOM: {
    style: {
      bottom: 20,
      left: "50%"
    },
    transitions: {
      from: {
        transform: "translateX(-50%) translateY(10px)"
      },
      enter: {
        transform: "translateX(-50%) translateY(0)"
      },
      leave: {
        transform: "translateX(-50%) translateY(10px)"
      }
    }
  },
  BOTTOM_LEFT: {
    style: {
      bottom: 20,
      left: 20
    },
    transitions: toastTransitionsLeft
  },
  BOTTOM_RIGHT: {
    style: {
      bottom: 20,
      right: 20
    },
    transitions: toastTransitionsRight
  }
};
class Toast extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      text: "",
      type: "success",
      show: false,
      position: "BOTTOM"
    };
    this.show = ({ text, type = "success", position, time }) => {
      this.setState({
        text,
        type,
        position,
        show: true
      });
      if (this.showTimer) {
        clearTimeout(this.showTimer);
        this.showTimer = null;
      }
      this.showTimer = window.setTimeout(
        () =>
          this.setState({
            show: false
          }),
        time ? time : this.props.defaultTime || 5000
      );
    };
    this.hide = () =>
      this.setState({
        show: false
      });
  }
  static show(text, type, { time, position } = {}) {
    emitter.emit("showToast", {
      text,
      type,
      time,
      position
    });
  }
  static hide() {
    emitter.emit("hideToast");
  }
  componentDidMount() {
    emitter.on("showToast", this.show);
    emitter.on("hideToast", this.hide);
  }
  componentWillUnmount() {
    emitter.off("showToast", this.show);
    emitter.off("hideToast", this.hide);
  }
  render() {
    const bColor = _colors[this.state.type];
    const iconClass = cx("pi", {
      "pi-radio-check-filled": this.state.type === "success",
      "pi-close-circle-filled": this.state.type === "error"
    });
    const position =
      this.state.position || this.props.defaultPosition || "BOTTOM";
    return createElement(
      Transition,
      {
        native: true,
        items: this.state.show,
        key: position,
        from: {
          opacity: 0,
          ...customStyles[position].transitions.from
        },
        enter: {
          opacity: 1,
          ...customStyles[position].transitions.enter
        },
        leave: {
          opacity: 0,
          pointerEvents: "none",
          ...customStyles[position].transitions.leave
        },
        config: animationConfig.config
      },
      show =>
        show &&
        (styles =>
          createElement(
            animated.div,
            {
              className: cx(toastWrapper, this.props.className),
              style: {
                backgroundColor: bColor,
                ...styles,
                ...customStyles[position].style
              }
            },
            createElement("i", {
              className: iconClass
            }),
            this.state.text
          ))
    );
  }
}

const wrapper =
  /*#__PURE__*/
  css({
    position: "relative"
  });
const optionsWrapper$1 =
  /*#__PURE__*/
  css({
    width: "100%",
    position: "absolute",
    marginTop: -40,
    zIndex: 999,
    boxShadow: constants.boxShadow.elevated,
    transformOrigin: "0 0"
  });

function defaultSearchBox({ registerChange, onFocus, value }, props) {
  return createElement(Input, {
    onChange: registerChange,
    placeholder: props.placeholder,
    inputProps: {
      onFocus,
      onKeyDown: e => {
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
        if (e.keyCode === 8 && props.selected) {
          registerChange("");
          props.onClear();
        }
      }
    },
    value: value,
    errorMessage: props.errorMessage,
    loading: props.loading,
    required: props.required,
    disabled: props.disabled
  });
}
class TypeAhead extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      value: this.props.initialValue || "",
      showSuggestions: false
    };
    this.onChange = () => {
      this.props.onChange(this.state.value, this.props);
    };
    this.debouncedChange = debounce(this.onChange, this.props.debounceTime);
    this.registerChange = value => {
      this.setState(
        {
          value
        },
        this.debouncedChange
      );
    };
    this.onFocus = () => {
      this.setState({
        showSuggestions: true
      });
    };
    this.onSelect = _value => {
      this.props.onSelect(_value, this.props);
      this.setState({
        showSuggestions: false,
        value: (_value && this.props.valueExtractor(_value)) || ""
      });
    };
  }
  render() {
    const {
      className,
      searchBox = defaultSearchBox,
      dropdownClassName,
      children
    } = this.props;
    const { showSuggestions, value } = this.state;
    return createElement(
      OutsideClick,
      {
        onOutsideClick: () =>
          this.setState({
            showSuggestions: false
          }),
        disabled: !showSuggestions,
        className: cx(wrapper, className)
      },
      searchBox(
        {
          registerChange: this.registerChange,
          onFocus: this.onFocus,
          value
        },
        this.props
      ),
      createElement(
        MountTransition,
        {
          visible: showSuggestions,
          native: true
        },
        transitionStyles =>
          createElement(
            animated.div,
            {
              style: transitionStyles,
              className: cx(optionsWrapper$1, dropdownClassName)
            },
            createElement(
              OptionGroupRadio,
              {
                onChange: this.onSelect
              },
              children
            )
          )
      )
    );
  }
}
TypeAhead.defaultProps = {
  debounceTime: 500,
  onClear: () => {}
};

const dateClass =
  /*#__PURE__*/
  css({
    padding: 20,
    width: "100%"
  });
const dropDownClassName =
  /*#__PURE__*/
  css({
    marginTop: -inputMarginBottom
  });
const inputStyle$1 =
  /*#__PURE__*/
  css({
    marginBottom: 0
  });
const wrapperStyle$3 =
  /*#__PURE__*/
  css({
    marginBottom: 20
  });

class NativeDateInput extends PureComponent {
  constructor() {
    super(...arguments);
    this.onDateInputChange = value => {
      const date = parse(value);
      this.props.onChange(date && date.getTime());
    };
  }
  render() {
    const { inputProps, placeholder, value } = this.props;
    return createElement(
      Input,
      Object.assign(
        {
          onChange: this.onDateInputChange,
          type: "date",
          value: value && format(value, "YYYY-MM-DD"),
          placeholder: placeholder,
          fixLabelAtTop: true
        },
        inputProps
      )
    );
  }
}

const defaultContext = {
  userAgent: ""
};
const UserAgentInfoContext =
  /*@__PURE__*/
  createContext(defaultContext);
function computeUserAgentInfo(userAgent) {
  return {
    userAgent
  };
}
class UserAgentInfoProvider extends PureComponent {
  constructor(props) {
    super(props);
    if (typeof navigator !== "undefined" && navigator.userAgent) {
      this.state = computeUserAgentInfo(navigator.userAgent);
    } else if (props.userAgent) {
      this.state = computeUserAgentInfo(props.userAgent);
    } else {
      this.state = defaultContext;
    }
  }
  render() {
    return createElement(
      UserAgentInfoContext.Provider,
      {
        value: this.state
      },
      this.props.children
    );
  }
}

const noop$2 = () => {};
function dateFormat(str) {
  const clean = str.replace(/[^\d]+/gi, "");
  const chars = clean.split("");
  return chars.reduce(
    (r, v, index) =>
      `${r}${v}${index === 1 || index === 3 ? "/" : ""}`.substr(0, 10),
    ""
  );
}
const modifiers = {
  preventOverflow: {
    enabled: false
  },
  flip: {
    enabled: false
  }
};
class DateInput extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      stringInput: ""
    };
    this.onCalendarDateChange = date => {
      this.props.onChange(date.getTime());
    };
    this.onInputChange = input => {
      this.setState({
        stringInput: input
      });
      if (input.length === 10) {
        const date = startOfDay(new Date());
        date.setFullYear(
          parseInt(input.substr(6, 4), 10),
          parseInt(input.substr(3, 5), 10) - 1,
          parseInt(input.substr(0, 2), 10)
        );
        this.props.onChange(date.getTime());
      }
    };
  }
  static getDerivedStateFromProps(props, state) {
    let newState = null;
    if (props.value && props.value !== state.propsValue) {
      newState = {
        propsValue: props.value,
        stringInput: (props.value && format(props.value, "DD/MM/YYYY")) || ""
      };
    }
    return newState;
  }
  render() {
    const {
      calendarProps,
      inputProps,
      placeholder,
      value: propsValue
    } = this.props;
    return createElement(
      DropDown,
      {
        dropDownClassName: dropDownClassName,
        labelComponent: ({ toggleDropdown }) =>
          createElement(
            Rifm,
            {
              value: this.state.stringInput,
              onChange: this.onInputChange,
              format: dateFormat
            },
            ({ value, onChange }) =>
              createElement(
                Input,
                Object.assign(
                  {
                    onChange: noop$2,
                    type: "tel",
                    value: value,
                    placeholder: `${placeholder} DD/MM/YYYY`,
                    onClick: toggleDropdown,
                    fixLabelAtTop: true
                  },
                  inputProps,
                  {
                    inputProps: {
                      placeholder: "DD/MM/YYYY",
                      ...(inputProps && inputProps.inputProps),
                      onChange
                    },
                    className: inputStyle$1
                  }
                )
              )
          ),
        className: wrapperStyle$3,
        placement: "bottom-start",
        modifiers: modifiers
      },
      ({ toggle }) =>
        createElement(
          Calendar,
          Object.assign(
            {
              hideShadow: true,
              className: dateClass,
              selected: propsValue ? new Date(propsValue) : undefined
            },
            calendarProps,
            {
              range: false,
              onChange: date => {
                this.onCalendarDateChange(date);
                toggle();
              }
            }
          )
        )
    );
  }
}
function checkDateInputSupport() {
  try {
    const input = document.createElement("input");
    const type = "date";
    input.setAttribute("type", "date");
    input.value = "\x01";
    return (
      input.type === type && (input.value !== "\x01" || !input.checkValidity())
    );
  } catch (e) {
    return true;
  }
}
const hasDateInputSupport =
  /*@__PURE__*/
  checkDateInputSupport();
class BrowserBasedDateInput extends PureComponent {
  render() {
    return createElement(
      UserAgentInfoContext.Consumer,
      null,
      ({ userAgent }) => {
        if (/Android|iPhone|iPad/i.test(userAgent) && hasDateInputSupport) {
          return createElement(NativeDateInput, this.props);
        }
        return createElement(DateInput, this.props);
      }
    );
  }
}
BrowserBasedDateInput.contextType = UserAgentInfoContext;

const popperStyle =
  /*#__PURE__*/
  css({
    margin: 14,
    boxShadow: constants.boxShadow.xElevated,
    borderRadius: constants.borderRadius
  });
const arrowStyle =
  /*#__PURE__*/
  css({
    position: "absolute",
    textShadow: "1px 0 20px rgba(0,0,0,0.1)",
    "&[data-placement^='top']": {
      transform: "rotate(90deg)",
      bottom: -11
    },
    "&[data-placement^='bottom']": {
      transform: "rotate(-90deg)",
      top: -11
    },
    "&[data-placement^='right']": {
      transform: "rotate(180deg)",
      left: -11
    },
    "&[data-placement^='left']": {
      right: -11
    }
  });

class default_1 extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      isOpen: !!this.props.isOpen
    };
    this.toggle = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
  }
  render() {
    const {
      label,
      popperBackgroundColor,
      children,
      controlled,
      isOpen,
      popperClassName,
      onOutsideClick,
      ...props
    } = this.props;
    const _isPopperOpen = controlled ? !!isOpen : this.state.isOpen;
    return createElement(
      OutsideClick,
      {
        onOutsideClick: () => {
          this.setState({
            isOpen: false
          });
          if (onOutsideClick) {
            onOutsideClick();
          }
        },
        disabled: !_isPopperOpen
      },
      createElement(
        Manager,
        null,
        createElement(Reference, null, ({ ref }) =>
          createElement(
            "div",
            {
              style: {
                display: "inline-block"
              },
              ref: ref
            },
            typeof label === "function"
              ? label({
                  toggle: this.toggle,
                  isOpen: this.state.isOpen
                })
              : label
          )
        ),
        createElement(
          MountTransition,
          {
            visible: _isPopperOpen
          },
          transitionStyles =>
            createElement(
              Popper,
              Object.assign({}, props, {
                positionFixed: true
              }),
              ({ ref, style, placement, arrowProps }) => {
                const wrapperStyle = {
                  ...style,
                  ...transitionStyles,
                  backgroundColor: popperBackgroundColor,
                  transform: `${style.transform ||
                    ""} ${transitionStyles.transform || ""}`,
                  transformOrigin: `${arrowProps.style.left || 0}px ${arrowProps
                    .style.top || 0}px`
                };
                return createElement(
                  "div",
                  {
                    className: cx(popperStyle, popperClassName),
                    ref: ref,
                    style: wrapperStyle,
                    "data-placement": placement
                  },
                  children({
                    toggle: this.toggle,
                    isOpen: this.state.isOpen
                  }),
                  createElement(
                    "div",
                    {
                      className: arrowStyle,
                      ref: arrowProps.ref,
                      style: {
                        ...arrowProps.style,
                        color: popperBackgroundColor
                      },
                      "data-placement": placement
                    },
                    "\u25B6"
                  )
                );
              }
            )
        )
      )
    );
  }
}
default_1.defaultProps = {
  placement: "bottom",
  popperBackgroundColor: colors.white.base,
  closeOnOutsideClick: true
};

const textStyle =
  /*#__PURE__*/
  css({
    ...typography.s.regular,
    color: colors.white.base,
    display: "block",
    padding: "10px 16px"
  });
const popperStyle$1 =
  /*#__PURE__*/
  css({
    margin: 4,
    boxShadow: "none",
    maxWidth: 320
  });

class Tooltip extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      isOpen: !!this.props.isOpen
    };
    this.defaultTooltip = () =>
      createElement(
        "span",
        {
          className: textStyle
        },
        this.props.text
      );
    this.labelRef = createRef();
    this.showTooltip = () =>
      this.setState({
        isOpen: true
      });
    this.hideTooltip = () =>
      this.setState({
        isOpen: false
      });
    this.addListeners = () => {
      if (!this.props.disabled) {
        this.labelRef.current.addEventListener("mouseenter", this.showTooltip);
        this.labelRef.current.addEventListener("mouseout", this.hideTooltip);
      }
    };
    this.removeListeners = () => {
      this.labelRef.current.removeEventListener("mouseenter", this.showTooltip);
      this.labelRef.current.removeEventListener("mouseout", this.showTooltip);
    };
  }
  componentDidMount() {
    this.addListeners();
  }
  componentWillUnmount() {
    this.removeListeners();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.disabled !== this.props.disabled) {
      this.props.disabled ? this.removeListeners() : this.addListeners();
    }
  }
  render() {
    const { placement, label, modifiers, isError } = this.props;
    return createElement(
      default_1,
      {
        label: () =>
          label({
            ref: this.labelRef
          }),
        placement: placement,
        positionFixed: true,
        controlled: true,
        popperBackgroundColor: isError ? colors.red.base : colors.gray.darker,
        modifiers: modifiers,
        isOpen: this.props.isOpen || this.state.isOpen,
        popperClassName: popperStyle$1,
        closeOnOutsideClick: false
      },
      this.props.renderElement || this.defaultTooltip
    );
  }
}

const Logo = ({ height = 40, color = "#000000" }) => {
  return createElement(
    "svg",
    {
      version: "1.1",
      id: "Layer_1",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      height: height,
      viewBox: "0 0 655.35 175.08",
      xmlSpace: "preserve",
      style: {
        fill: color
      }
    },
    createElement("path", {
      className: "st0",
      d:
        "M168.92 65.96l-66.1-64.85v100.61h17.39V40.78l66.11 64.56V4.73h-17.4v61.23zm446.77-18.51L653.4 4.73h-20.6l-41.04 46.48V4.73h-17.4v96.99h17.4V73.34L604 59.84l30.19 41.88h20.33l-38.83-54.27zM422.66 2.92c-27.78 0-50.31 22.53-50.31 50.31s22.52 50.3 50.31 50.3c27.78 0 50.3-22.52 50.3-50.3s-22.52-50.31-50.3-50.31zm0 84.84c-19.05 0-34.54-15.49-34.54-34.53s15.49-34.54 34.54-34.54c19.04 0 34.54 15.49 34.54 34.54 0 19.04-15.5 34.53-34.54 34.53zM0 101.72h18.38L27 82.93h41.75l8.63 18.79h18.51L48.02 0 0 101.72zM33.55 67.9l14.32-31.58L62.21 67.9H33.55zm159.61 33.82h18.37l8.62-18.79h41.75l8.62 18.79h18.51L241.16 0l-48 101.72zm33.53-33.82l14.33-31.58 14.33 31.58h-28.66zm138.43-32.42c0-8.76-3.07-16-9.19-21.84-6.12-5.99-13.5-8.91-22.26-8.91h-37.71v96.99h17.4V67.21h17.25l20.73 34.51h19.62l-23.51-38.68c10.57-4.46 17.67-14.89 17.67-27.56zm-33.25 16.15h-18.51V20.46h19.9c8.34 0 14.6 6.4 14.6 15.31 0 9.32-6.54 15.86-15.99 15.86zm197.61-32.94c9.22 0 17.9 3.59 24.42 10.12l11.15-11.15c-9.82-9.83-22.7-14.74-35.57-14.74-12.87 0-25.75 4.91-35.56 14.74-19.65 19.64-19.65 51.49 0 71.14 9.82 9.82 22.69 14.73 35.56 14.73 12.87 0 25.75-4.91 35.57-14.73L553.9 77.65c-6.52 6.52-15.2 10.11-24.42 10.11-9.23 0-17.89-3.59-24.42-10.11-13.46-13.46-13.46-35.37 0-48.84 6.53-6.52 15.2-10.12 24.42-10.12z"
    }),
    createElement("rect", {
      y: "123.84",
      className: "st1",
      width: "654.52",
      height: "4.26",
      id: "XMLID_9_"
    }),
    createElement("path", {
      className: "st0",
      d:
        "M90.05 150.11h6.02l6.48 17.46 6.48-17.46h5.88l-10.02 24.97h-4.81l-10.03-24.97zm39.59-.17h5.03l10.63 24.97h-5.7l-2.28-5.56h-10.47l-2.27 5.56h-5.56l10.62-24.97zm5.75 14.59l-3.3-8.04-3.29 8.04h6.59zM154 150.11h5.46v19.83h12.36v4.96H154v-24.79zm36.79 25.18c-3.33 0-5.95-.92-7.86-2.76-1.91-1.83-2.87-4.59-2.87-8.25v-14.16h5.46v14.02c0 2.03.46 3.56 1.41 4.58.94 1.03 2.26 1.54 3.93 1.54 1.68 0 2.98-.49 3.93-1.49.95-.99 1.42-2.48 1.42-4.46v-14.2h5.46v13.99c0 1.88-.26 3.53-.77 4.92-.51 1.39-1.23 2.55-2.17 3.49-.95.93-2.08 1.63-3.44 2.08-1.35.47-2.85.7-4.5.7zm21.83-25.18h18.66v4.85H218v5.03h11.7v4.85H218v5.2h13.46v4.86h-18.84v-24.79zm37.74 25.15c-1.89 0-3.75-.33-5.57-.98-1.82-.65-3.47-1.64-4.94-2.99l3.21-3.86c1.14.92 2.3 1.65 3.49 2.19 1.2.54 2.51.82 3.91.82 1.13 0 2.01-.21 2.64-.62.63-.41.94-.99.94-1.72v-.07c0-.36-.07-.67-.19-.94-.14-.27-.39-.53-.75-.77-.36-.23-.87-.47-1.52-.71s-1.49-.48-2.53-.74c-1.26-.31-2.38-.64-3.4-1.03-1.01-.38-1.88-.84-2.59-1.4a5.85 5.85 0 0 1-1.65-2.07c-.38-.82-.58-1.86-.58-3.08v-.07c0-1.13.21-2.16.63-3.07.42-.91 1.01-1.7 1.78-2.35.76-.66 1.67-1.17 2.73-1.52 1.06-.35 2.23-.54 3.5-.54 1.83 0 3.5.28 5.02.82 1.52.54 2.92 1.32 4.19 2.34l-2.83 4.11c-1.1-.76-2.2-1.35-3.26-1.79-1.06-.44-2.12-.66-3.19-.66-1.06 0-1.85.21-2.38.62-.53.41-.8.93-.8 1.54v.07c0 .4.08.75.23 1.04.15.29.43.56.84.79.39.24.94.46 1.64.67.7.21 1.57.47 2.63.75 1.26.33 2.37.7 3.35 1.11.98.41 1.81.91 2.48 1.49.68.58 1.18 1.25 1.52 2.04.34.78.52 1.71.52 2.8v.07c0 1.22-.23 2.32-.67 3.27a6.71 6.71 0 0 1-1.86 2.41c-.81.65-1.76 1.14-2.87 1.48-1.11.37-2.33.55-3.67.55zm46.42.07c-1.92 0-3.68-.34-5.28-1.01-1.61-.67-3-1.58-4.16-2.72-1.17-1.15-2.08-2.5-2.73-4.04-.65-1.55-.98-3.2-.98-4.98v-.07c0-1.77.32-3.42.99-4.97a12.64 12.64 0 0 1 2.74-4.07c1.16-1.17 2.57-2.09 4.18-2.77 1.62-.67 3.39-1.01 5.3-1.01 1.91 0 3.67.34 5.28 1.01 1.61.68 2.99 1.59 4.16 2.73 1.16 1.14 2.07 2.49 2.73 4.04.64 1.54.97 3.21.97 4.98v.07c0 1.77-.33 3.43-.99 4.98-.67 1.55-1.57 2.9-2.74 4.07-1.17 1.17-2.56 2.08-4.18 2.76-1.61.66-3.37 1-5.29 1zm.08-5.03c1.08 0 2.09-.2 3.01-.6.92-.4 1.71-.95 2.35-1.66.65-.71 1.16-1.53 1.53-2.47.36-.93.54-1.93.54-2.99v-.07c0-1.06-.18-2.06-.54-3.01-.36-.94-.89-1.77-1.56-2.47a7.49 7.49 0 0 0-2.39-1.68c-.91-.41-1.93-.62-3.01-.62-1.11 0-2.12.21-3.03.6-.91.4-1.69.96-2.34 1.66a7.76 7.76 0 0 0-1.52 2.46c-.37.94-.55 1.94-.55 3v.07c0 1.06.18 2.07.55 3.02.36.94.88 1.76 1.55 2.47.67.71 1.47 1.27 2.38 1.68.91.4 1.91.61 3.03.61zm19.48-20.19h6.02l6.48 17.46 6.48-17.46h5.88l-10.02 24.97h-4.81l-10.03-24.97zm33.54 0h18.66v4.85h-13.28v5.03h11.68v4.85h-11.68v5.2h13.46v4.86h-18.84v-24.79zm29.16 0h11.34c3.13 0 5.54.83 7.22 2.51 1.42 1.42 2.12 3.31 2.12 5.67v.07c0 2.01-.49 3.65-1.47 4.91-.98 1.26-2.26 2.19-3.84 2.77l6.05 8.86h-6.37l-5.31-7.94h-4.3v7.94h-5.45v-24.79zm10.98 12.04c1.35 0 2.39-.32 3.1-.95.72-.64 1.08-1.48 1.08-2.54v-.07c0-1.17-.37-2.06-1.13-2.64-.75-.59-1.8-.88-3.15-.88h-5.42v7.08h5.52zm33.05-12.04h6.02l6.48 17.46 6.48-17.46h5.87l-10.02 24.97h-4.81l-10.02-24.97zm39.59-.17h5.02l10.63 24.97h-5.7l-2.26-5.56h-10.48l-2.27 5.56h-5.56l10.62-24.97zm5.73 14.59l-3.29-8.04-3.29 8.04h6.58zm18.62-14.42h5.46v19.83h12.36v4.96h-17.82v-24.79zm36.8 25.18c-3.34 0-5.95-.92-7.87-2.76-1.91-1.83-2.87-4.59-2.87-8.25v-14.16h5.46v14.02c0 2.03.47 3.56 1.42 4.58.95 1.03 2.26 1.54 3.93 1.54 1.67 0 2.99-.49 3.94-1.49.94-.99 1.41-2.48 1.41-4.46v-14.2h5.46v13.99c0 1.88-.26 3.53-.76 4.92-.51 1.39-1.24 2.55-2.18 3.49-.95.93-2.09 1.63-3.44 2.08-1.36.47-2.85.7-4.5.7zm21.82-25.18h18.67v4.85h-13.28v5.03h11.69v4.85h-11.69v5.2h13.46v4.86h-18.85v-24.79z"
    })
  );
};

const modalPadding = 30;
const modalContainer$1 =
  /*#__PURE__*/
  css({
    background: "white",
    width: "360px",
    alignSelf: "center",
    borderRadius: constants.borderRadius,
    padding: `${modalPadding}px`,
    position: "relative"
  });
const flexCenter =
  /*#__PURE__*/
  css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  });
const buttonsContainer =
  /*#__PURE__*/
  css({ ...flexSpaceBetween, marginTop: "40px" });
const iconCloseClassName =
  /*#__PURE__*/
  css({
    cursor: "pointer",
    position: "absolute",
    right: `${modalPadding}px`,
    top: `${modalPadding}px`,
    fontSize: "14px",
    color: colors.gray.base,
    "&:hover": {
      color: colors.gray.darker
    }
  });

const PopUp = props => {
  const {
    onClose,
    onApprove,
    onReject,
    visible,
    approveButtonText = "Yes",
    rejectButtonText = "No",
    children
  } = props;
  return createElement(
    Modal,
    {
      visible: visible,
      modalClassName: flexCenter
    },
    createElement(
      "div",
      {
        className: modalContainer$1
      },
      onClose &&
        createElement("i", {
          className: cx("pi", "pi-close", iconCloseClassName),
          onClick: onClose
        }),
      children,
      (onReject || onApprove) &&
        createElement(
          "div",
          {
            className: buttonsContainer
          },
          onReject &&
            createElement(
              Button,
              {
                size: "large",
                type: "secondary",
                onClick: onReject
              },
              rejectButtonText
            ),
          onApprove &&
            createElement(
              Button,
              {
                size: "large",
                type: "primary",
                onClick: onApprove
              },
              approveButtonText
            )
        )
    )
  );
};

const radioIconStyle =
  /*#__PURE__*/
  css({
    marginRight: 10,
    fontSize: 16
  });
const controlStyle =
  /*#__PURE__*/
  css({
    cursor: "pointer",
    display: "flex",
    outline: "none",
    padding: "10px 0",
    position: "relative",
    alignItems: "center",
    ...typography.normal.regular,
    "&[data-disabled='true']": {
      cursor: "not-allowed",
      [`.${radioIconStyle}`]: {
        color: colors.gray.light
      }
    }
  });

function Control(props) {
  const {
    checked,
    onChange,
    value,
    disabled,
    children = ControlView,
    type,
    className
  } = props;
  return createElement(
    "div",
    {
      className: cx(controlStyle, className),
      role: type,
      "aria-disabled": disabled,
      "aria-checked": checked,
      "data-disabled": disabled,
      tabIndex: checked ? 0 : -1,
      onClick: !disabled
        ? e =>
            onChange &&
            onChange(
              {
                value,
                checked: !checked
              },
              e
            )
        : undefined
    },
    children(props)
  );
}
const ControlView = ({ checked, label, type, disabled }) => {
  const isRadio = type === "radio";
  const iconClass = cx(radioIconStyle, "pi", {
    "pi-radio": isRadio && !checked && !disabled,
    "pi-radio-selected": isRadio && (checked || disabled),
    "pi-checkbox-selected": !isRadio && (checked || disabled),
    "pi-checkbox-unselected": !isRadio && !checked && !disabled
  });
  const getColor = () => {
    if (disabled) {
      return colors.gray.base;
    }
    if (checked) {
      return colors.violet.base;
    }
    return colors.gray.light;
  };
  return createElement(
    Fragment,
    null,
    createElement("i", {
      style: {
        color: getColor(),
        paddingTop: 2
      },
      className: iconClass
    }),
    " ",
    label
  );
};

function Radio(props) {
  return createElement(
    Control,
    Object.assign({}, props, {
      type: "radio"
    })
  );
}

class RadioGroup extends PureComponent {
  constructor() {
    super(...arguments);
    this.handleChange = ({ value, checked }, event) => {
      const { toggle, selected, onChange } = this.props;
      if (!toggle && value === selected) return;
      onChange(checked ? value : undefined, event);
    };
  }
  render() {
    const { children, selected, className, name, disabled } = this.props;
    const _children = Children.map(children, _radio => {
      const radio = _radio;
      return cloneElement(radio, {
        onChange: this.handleChange,
        checked: selected === radio.props.value,
        disabled
      });
    });
    return createElement(
      "div",
      {
        role: "radiogroup",
        "aria-label": name,
        className: className
      },
      _children
    );
  }
}

function Checkbox(props) {
  return createElement(
    Control,
    Object.assign({}, props, {
      type: "checkbox"
    })
  );
}

class CheckboxGroup extends PureComponent {
  constructor() {
    super(...arguments);
    this.handleChange = ({ value }, event) => {
      const { onChange, selected } = this.props;
      onChange(getSelectedCheckboxes(value, selected), event);
    };
  }
  render() {
    const { children, selected, className, name, disabled } = this.props;
    const _children = Children.map(children, _checkbox => {
      const checkbox = _checkbox;
      return cloneElement(checkbox, {
        onChange: this.handleChange,
        checked: selected.indexOf(checkbox.props.value) >= 0,
        disabled
      });
    });
    return createElement(
      "div",
      {
        role: "checkboxgroup",
        "aria-label": name,
        className: className
      },
      _children
    );
  }
}

const rowWrapper =
  /*#__PURE__*/
  css({
    ...typography.normal.regular,
    cursor: "pointer",
    padding: "12px 18px",
    position: "relative",
    lineHeight: "28px",
    zIndex: 999,
    ...textEllipsis,
    ...flexSpaceBetween,
    alignItems: "center",
    display: "flex",
    "&:last-of-type": {
      border: 0
    },
    "&:hover": {
      backgroundColor: colors.gray.lightest
    }
  });
const labelWrap =
  /*#__PURE__*/
  css({
    userSelect: "none",
    overflow: "hidden",
    textOverflow: "ellipsis"
  });
const activeRow =
  /*#__PURE__*/
  css({
    backgroundColor: colors.gray.lightest
  });
const selectedRow =
  /*#__PURE__*/
  css({
    color: colors.violet.base,
    ...typography.normal.bold
  });

const defaultProps = {
  rightElement: ({ isSelected, multiSelect }) => {
    const iconClass = cx(
      "pi",
      {
        "pi-checkbox-selected": isSelected,
        "pi-checkbox-unselected": !isSelected
      },
      /*#__PURE__*/
      css({
        marginLeft: "10px",
        color: isSelected ? colors.violet.base : colors.gray.light,
        fontSize: "20px"
      })
    );
    return multiSelect
      ? createElement("i", {
          className: iconClass
        })
      : null;
  }
};
class Option extends Component {
  render() {
    const {
      label,
      isActive,
      isSelected,
      rightElement,
      labelClassName,
      className
    } = this.props;
    const _class = cx(
      rowWrapper,
      {
        [activeRow]: isActive,
        [selectedRow]: isSelected
      },
      className
    );
    return createElement(
      Control,
      Object.assign({}, this.props, {
        checked: this.props.isSelected,
        type: this.props.multiSelect ? "checkbox" : "radio",
        className: _class
      }),
      () => {
        return createElement(
          Fragment,
          null,
          createElement(
            "div",
            {
              className: cx(labelWrap, labelClassName)
            },
            label
          ),
          rightElement(this.props),
          createElement(Ink, null)
        );
      }
    );
  }
}
Option.defaultProps = defaultProps;

const wrapper$1 =
  /*#__PURE__*/
  css({
    display: "flex"
  });
const selectStyle =
  /*#__PURE__*/
  css({
    width: "80px",
    marginBottom: 0
  });
const combinedLabelStyle =
  /*#__PURE__*/
  css({
    zIndex: 1
  });

class PhoneNumberInput extends Component {
  constructor() {
    super(...arguments);
    this.onCountrySelect = countryCode => {
      this.props.onChange({
        countryCode,
        phone: this.props.phone
      });
    };
    this.onNumberChange = value => {
      const _value = value.replace(/\D/g, "");
      if (_value === this.props.phone) {
        return;
      }
      this.props.onChange({
        countryCode: this.props.countryCode,
        phone: _value
      });
    };
  }
  render() {
    const {
      phone,
      countryCode,
      className,
      selectProps,
      inputProps,
      required,
      placeholder
    } = this.props;
    return createElement(
      "div",
      {
        className: cx(wrapper$1, className)
      },
      createElement(
        "label",
        {
          className: cx(
            labelStyle,
            "_pebble_input_label_focused",
            combinedLabelStyle
          )
        },
        placeholder || "Phone No.",
        required &&
          createElement(
            "span",
            {
              style: {
                color: colors.red.base
              }
            },
            "\xA0*"
          )
      ),
      createElement(
        Select,
        Object.assign(
          {
            placeholder: "",
            onChange: this.onCountrySelect,
            value: countryCode + "",
            selected: countryCode
          },
          selectProps,
          {
            className: cx(selectStyle, selectProps && selectProps.className)
          }
        ),
        this.props.children
      ),
      createElement(
        Input,
        Object.assign(
          {
            onChange: this.onNumberChange,
            placeholder: "",
            value: phone
          },
          inputProps
        )
      )
    );
  }
}

const timePickerWrap =
  /*#__PURE__*/
  css({
    display: "flex",
    alignItems: "center",
    border: `1px solid ${colors.gray.light}`,
    borderRadius: "3px",
    cursor: "pointer",
    "&:not([disabled]):hover": {
      background: colors.gray.light
    }
  });
const timePickerSelected =
  /*#__PURE__*/
  css({
    backgroundColor: colors.gray.lighter
  });
const hourPicker =
  /*#__PURE__*/
  css({
    borderRadius: "3px 0px 0px 3px",
    borderRight: "none"
  });
const seperator =
  /*#__PURE__*/
  css({
    color: colors.gray.dark,
    lineHeight: "40px"
  });
const minutePicker =
  /*#__PURE__*/
  css({
    borderLeft: "none",
    borderRadius: "0px 3px 3px 0px"
  });
const optionStyle =
  /*#__PURE__*/
  css({
    width: "100px"
  });

const HOURS =
  /*#__PURE__*/
  [...Array(12)].map((_, i) => ("00" + (i + 1).toString(10)).slice(-2));
const MINUTES =
  /*#__PURE__*/
  [...Array(4)].map((_, i) => ("00" + (i * 15).toString(10)).slice(-2));
const iconStyle$1 =
  /*#__PURE__*/
  css({
    marginLeft: 15,
    fontWeight: "bold",
    fontSize: 8,
    transition: "transform ease-out .2s",
    willTransform: "transform",
    marginTop: 2,
    color: colors.gray.dark,
    display: "inline-block"
  });
const buttonStyle =
  /*#__PURE__*/
  css({
    padding: "15px 20px",
    fontSize: "12px",
    color: colors.gray.darker,
    lineHeight: "9px"
  });
const modifiers$1 = {
  preventOverflow: {
    enabled: false
  },
  flip: {
    enabled: false
  }
};
const TimePicker = props => {
  const { selectedHour, selectedMinute, onHourChange, onMinuteChange } = props;
  const selected = !!selectedHour || selectedMinute !== undefined;
  return createElement(
    "div",
    {
      className: cx({
        [timePickerWrap]: true,
        [timePickerSelected]: selected
      })
    },
    createElement(
      DropDown,
      {
        labelClassName: hourPicker,
        isSelected: selected,
        labelComponent: ({ isOpen, toggleDropdown }) =>
          createElement(
            "div",
            {
              onClick: () => {
                toggleDropdown();
              },
              className: buttonStyle,
              "data-test-id": "hour-label"
            },
            createElement(
              "span",
              {
                className:
                  /*#__PURE__*/
                  /*#__PURE__*/
                  css({
                    marginRight: "15px"
                  })
              },
              selectedHour ? selectedHour : "Hrs"
            ),
            createElement(
              "span",
              null,
              createElement("i", {
                className: cx("pi pi-arrow-drop-down", iconStyle$1),
                style: {
                  transform: isOpen ? "rotate(180deg)" : "none"
                }
              })
            )
          ),
        placement: "bottom-start",
        modifiers: modifiers$1
      },
      ({ toggle }) =>
        createElement(
          OptionGroupRadio,
          {
            onChange: value => {
              onHourChange(value);
              toggle();
            },
            selected: selectedHour,
            className: optionStyle
          },
          HOURS.map(hour =>
            createElement(Option, {
              key: hour,
              value: parseInt(hour, 10),
              label: hour,
              className: optionStyle
            })
          )
        )
    ),
    createElement(
      "span",
      {
        className: seperator
      },
      ":"
    ),
    createElement(
      DropDown,
      {
        labelClassName: minutePicker,
        isSelected: selected,
        labelComponent: ({ isOpen, toggleDropdown }) =>
          createElement(
            "div",
            {
              onClick: () => {
                toggleDropdown();
              },
              className: buttonStyle,
              "data-test-id": "minute-label"
            },
            createElement(
              "span",
              {
                className:
                  /*#__PURE__*/
                  /*#__PURE__*/
                  css({
                    marginRight: "15px"
                  })
              },
              selectedMinute !== undefined ? selectedMinute : "mins"
            ),
            createElement("i", {
              className: cx("pi pi-arrow-drop-down", iconStyle$1),
              style: {
                transform: isOpen ? "rotate(180deg)" : "none"
              }
            })
          ),
        placement: "bottom-start",
        modifiers: modifiers$1
      },
      ({ toggle }) =>
        createElement(
          OptionGroupRadio,
          {
            onChange: value => {
              onMinuteChange(value);
              toggle();
            },
            selected: selectedMinute,
            className: optionStyle
          },
          MINUTES.map(min =>
            createElement(Option, {
              key: min,
              value: parseInt(min, 10),
              label: min,
              className: optionStyle
            })
          )
        )
    )
  );
};

const Text = ({
  typography,
  color = colors.gray.darker,
  children,
  className
}) => {
  const _className =
    /*#__PURE__*/
    css({ ...typography, color });
  return React__default.createElement(
    "span",
    {
      className: cx(_className, className)
    },
    children
  );
};

const messageWrapper =
  /*#__PURE__*/
  css({
    borderRadius: constants.borderRadius,
    ...typography.normal.regular,
    color: colors.white.base,
    height: 46,
    display: "flex",
    alignItems: "center",
    padding: 20,
    "> i": {
      marginRight: 10
    }
  });

const Message = ({ intent, className, text }) => {
  const bColor = _colors[intent];
  const iconClass = cx("pi", {
    "pi-radio-check-filled": intent === "success",
    "pi-close-circle-filled": intent === "error"
  });
  return createElement(
    "div",
    {
      className: cx(messageWrapper, className),
      style: {
        backgroundColor: bColor
      }
    },
    createElement("i", {
      className: iconClass
    }),
    text
  );
};

function capitalize(str) {
  return str
    ? str
        .split(" ")
        .map(s => s.charAt(0).toUpperCase() + s.slice(1))
        .join(" ")
    : str;
}

function getShortenedNumber(num, toFixed = 1) {
  let formattedNum;
  if (!num && num !== 0) {
    return;
  }
  if (num >= 10000000) {
    formattedNum = (num / 10000000).toFixed(toFixed) + " Cr";
  } else if (num >= 100000) {
    formattedNum = (num / 100000).toFixed(toFixed) + " L";
  } else if (num >= 1000) {
    formattedNum = (num / 1000).toFixed(toFixed) + " K";
  } else if (num !== Math.floor(num)) {
    formattedNum = `${num.toFixed(toFixed)}`;
  } else {
    formattedNum = `${num}`;
  }
  return formattedNum;
}

function initGoogleAnalytics(gaId) {
  if (isBrowser) {
    ((s, o, g) => {
      window.GoogleAnalyticsObject = "ga";
      window.ga =
        window.ga ||
        (() => {
          (window.ga.q = window.ga.q || []).push(arguments);
        });
      window.ga.l = Date.now();
      const a = s.createElement(o);
      const m = s.getElementsByTagName(o)[0];
      a.async = true;
      a.src = g;
      if (m.parentNode) m.parentNode.insertBefore(a, m);
    })(document, "script", "https://www.google-analytics.com/analytics.js");
    window.ga("create", gaId, "auto");
    window.ga("send", "pageview");
  }
}

function width() {
  return (isBrowser && window.screen.width) || 1025;
}
const isDesktop =
  /*@__PURE__*/
  width() >= 1024;

var index = /*#__PURE__*/ Object.freeze({
  capitalize: capitalize,
  getShortenedNumber: getShortenedNumber,
  initGoogleAnalytics: initGoogleAnalytics,
  isDesktop: isDesktop
});

export {
  index as utils,
  mixins,
  styles,
  typography,
  constants,
  Button,
  DropDownButton,
  Calendar,
  DropDown,
  Input,
  Modal,
  Search,
  Select,
  Slider,
  Stepper,
  Tag,
  TimePicker,
  Toast,
  TypeAhead,
  SideBar,
  DateInput,
  BrowserBasedDateInput,
  NativeDateInput,
  Tooltip,
  Logo,
  default_1 as Popper,
  PopUp,
  Loader,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Option,
  OptionGroup,
  OptionGroupRadio,
  OptionGroupCheckBox,
  OutsideClick,
  PhoneNumberInput,
  Text,
  Message,
  UserAgentInfoContext,
  UserAgentInfoProvider
};
//# sourceMappingURL=index.es.js.map
