import _objectSpread from "@babel/runtime/helpers/objectSpread";
import { css, keyframes, cx, injectGlobal } from "emotion";
import { colors } from "pebble-shared";
export { colors } from "pebble-shared";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
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
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import RCalendar from "react-calendar/dist/entry.nostyle";
import { startOfDay, endOfDay, isSameDay, parse, format } from "date-fns";
import { Transition, animated } from "react-spring";
import { Manager, Reference, Popper } from "react-popper";
import isBrowser from "is-in-browser";
import { createPortal, findDOMNode } from "react-dom";
import scrollIntoView from "scroll-into-view-if-needed";
import Rheostat from "rheostat";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import Mitt from "mitt";
import debounce from "just-debounce-it";
import { Rifm } from "rifm";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";

var textEllipsis = {
  overflowX: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
};
var flexRow = {
  display: "flex",
  flexDirection: "row"
};
var flexSpaceBetween = _objectSpread({}, flexRow, {
  justifyContent: "space-between",
  alignContent: "initial"
});
var flexMiddleAlign = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};
var getPlaceholderStyle = function getPlaceholderStyle(color) {
  return {
    "::-webkit-input-placeholder": {
      color: color
    },
    "::-moz-placeholder": {
      color: color
    },
    ":-ms-input-placeholder": {
      color: color
    },
    ":-moz-placeholder": {
      color: color
    },
    "::placeholder": {
      color: color
    }
  };
};

var mixins = /*#__PURE__*/ Object.freeze({
  textEllipsis: textEllipsis,
  flexRow: flexRow,
  flexSpaceBetween: flexSpaceBetween,
  flexMiddleAlign: flexMiddleAlign,
  getPlaceholderStyle: getPlaceholderStyle
});

var constants = {
  borderRadius: 3,
  buttonHeight: 40,
  animationCurve: "cubic-bezier(.64,.09,.08,1)",
  padding: {
    base: 20,
    higher: 60
  },
  border: {
    base: "1px solid ".concat(colors.gray.light),
    light: "1px solid ".concat(colors.gray.lighter)
  },
  boxShadow: {
    base: "0 2px 7px 0 #F2F2F2",
    elevated: "0 4px 7px 0 ".concat(colors.gray.light),
    xElevated: "0 2px 15px 0 rgba(0,0,0,0.1)"
  }
};

var fontSize = {
  xs: 10,
  s: 12,
  normal: 14,
  l: 16,
  xl: 18,
  xll: 22
};
var typography = {
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

var tableStyle =
  /*#__PURE__*/
  css(
    _objectSpread(
      {
        borderRadius: constants.borderRadius,
        border: constants.border.dark
      },
      typography.s.regular,
      {
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
        th: _objectSpread(
          {
            textAlign: "left"
          },
          typography.xs.bold,
          {
            color: colors.gray.dark
          }
        ),
        "tbody > tr:nth-of-type(2n + 1)": {
          backgroundColor: colors.white.base
        },
        "th, td": {
          height: 50,
          padding: "10px 25px",
          borderBottom: constants.border.dark
        }
      }
    )
  );
var disableScrollY =
  /*#__PURE__*/
  css({
    overflowY: "hidden"
  });

var styles = /*#__PURE__*/ Object.freeze({
  tableStyle: tableStyle,
  disableScrollY: disableScrollY
});

var violet = colors.violet,
  gray = colors.gray,
  white = colors.white,
  red = colors.red,
  emerald = colors.emerald;
var smallButtonHeight = 40;
var commonButtonStyle =
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
var mappingColorByType = {
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
var linkStyle = {
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
var getStyleByType = function getStyleByType(type, filled) {
  if (type === "link") return linkStyle;
  var _color = mappingColorByType[type];
  var colorBase = _color.base,
    disabled = _color.disabled,
    hover = _color.hover,
    active = _color.active,
    textColor = _color.textColor;
  var defaultFontColor = filled ? textColor || white.base : colorBase;
  return {
    color: defaultFontColor,
    backgroundColor: filled ? colorBase : white.base,
    border: filled ? "none" : "1px solid ".concat(colorBase),
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
var styleBasedOnSize = {
  "x-small": _objectSpread(
    {
      height: 25,
      minWidth: 70
    },
    typography.xs.light
  ),
  small: _objectSpread(
    {
      height: smallButtonHeight,
      minWidth: 100
    },
    typography.s.regular
  ),
  large: _objectSpread(
    {
      height: 50,
      minWidth: 140
    },
    typography.normal.regular
  )
};
var getButtonStyle = function getButtonStyle(size, type, showShadow, filled) {
  return (
    /*#__PURE__*/
    css([
      commonButtonStyle,
      _objectSpread({}, styleBasedOnSize[size], getStyleByType(type, filled), {
        boxShadow: showShadow ? constants.boxShadow.base : "none"
      })
    ])
  );
};
var iconStyle =
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
var dropDownButtonStyle =
  /*#__PURE__*/
  css({
    border: constants.border.base,
    "&:not([disabled]):hover": {
      backgroundColor: colors.gray.lighter
    }
  });
var dropDownButtonDefaultStyle =
  /*#__PURE__*/
  css({
    backgroundColor: colors.white.base,
    color: colors.gray.darker,
    "&:not([disabled]):hover": {
      backgroundColor: colors.gray.lighter
    }
  });

var bounceDelay =
  /*#__PURE__*/
  keyframes({
    "0%, 80%, 100%": {
      transform: "scale(0)"
    },
    "40%": {
      transform: "scale(1)"
    }
  });
var spinnerStyle =
  /*#__PURE__*/
  css(
    _objectSpread({}, flexSpaceBetween, {
      width: 70,
      "> div": {
        width: 18,
        height: 18,
        borderRadius: "100%",
        display: "inline-block",
        animation: "".concat(bounceDelay, " 1.4s infinite ease-in-out both"),
        "&:first-of-type": {
          animationDelay: "-0.32s"
        },
        "&:nth-of-type(2n)": {
          animationDelay: "-0.16s"
        }
      }
    })
  );

var Loader = function Loader(_ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? colors.gray.darker : _ref$color,
    _ref$scale = _ref.scale,
    scale = _ref$scale === void 0 ? 1 : _ref$scale,
    className = _ref.className;
  var style = {
    backgroundColor: color
  };
  return createElement(
    "div",
    {
      className: cx(spinnerStyle, className),
      style: {
        transform: "scale(".concat(scale, ")")
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

var Button = function Button(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? "primary" : _ref$type,
    disabled = _ref.disabled,
    children = _ref.children,
    onClick = _ref.onClick,
    width = _ref.width,
    showShadow = _ref.showShadow,
    className = _ref.className,
    _ref$showRipple = _ref.showRipple,
    showRipple = _ref$showRipple === void 0 ? true : _ref$showRipple,
    loading = _ref.loading,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "small" : _ref$size,
    buttonProps = _ref.buttonProps;
  var disableAction = disabled || loading;
  var filled = size !== "x-small";
  var _className = cx(
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
          width: width
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
var DropDownButton = function DropDownButton(_ref2) {
  var isOpen = _ref2.isOpen,
    isSelected = _ref2.isSelected,
    children = _ref2.children,
    className = _ref2.className,
    props = _objectWithoutProperties(_ref2, [
      "isOpen",
      "isSelected",
      "children",
      "className"
    ]);
  var _className = cx(
    dropDownButtonStyle,
    _defineProperty({}, dropDownButtonDefaultStyle, !(isOpen || isSelected))
  );
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

var wrapperStyle =
  /*#__PURE__*/
  css({
    backgroundColor: colors.white.base,
    borderRadius: constants.borderRadius,
    boxShadow: constants.boxShadow.xElevated,
    overflow: "hidden",
    padding: 20,
    position: "relative"
  });
var tileStyle =
  /*#__PURE__*/
  css(
    _objectSpread({}, typography.normal.regular, {
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
      border: "1px solid ".concat(colors.white.base),
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
        color: "".concat(colors.white.base, " !important")
      },
      "&.react-calendar__tile--rangeEnd": {
        backgroundColor: colors.violet.base,
        color: "".concat(colors.white.base, " !important")
      },
      "&.react-calendar__tile--singleSelect": {
        backgroundColor: colors.violet.base,
        color: colors.white.base
      },
      "&.react-calendar__month-view__days__day--neighboringMonth": {
        color: colors.gray.base
      }
    })
  );
var dateStyle =
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
      border: "1px solid ".concat(colors.gray.light),
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
    ".react-calendar__navigation__label": _objectSpread(
      {},
      typography.xl.bold,
      {
        textAlign: "left",
        border: 0,
        outline: "none",
        cursor: "pointer",
        backgroundColor: colors.white.base,
        paddingLeft: 5
      }
    ),
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
var dotWrapper =
  /*#__PURE__*/
  css({
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    width: "100%"
  });
var dotStyle =
  /*#__PURE__*/
  css({
    height: 4,
    width: 4,
    display: "inline-block",
    borderRadius: constants.borderRadius,
    margin: "5px 2px 0"
  });
var buttonsWrapper =
  /*#__PURE__*/
  css(
    _objectSpread({}, flexSpaceBetween, {
      marginTop: 20
    })
  );

var Calendar =
  /*#__PURE__*/
  (function(_React$PureComponent) {
    _inherits(Calendar, _React$PureComponent);
    function Calendar() {
      var _this;
      _classCallCheck(this, Calendar);
      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(Calendar).apply(this, arguments)
      );
      _this.state = {
        value: _this.props.selected,
        singleSelectedDate: null
      };
      _this.onChange = function(value) {
        var _assertThisInitialize = _assertThisInitialized(_this),
          props = _assertThisInitialize.props;
        if (props.range) {
          if (Array.isArray(value) && value.length === 2) {
            _this.setState(
              {
                value: value,
                singleSelectedDate: null
              },
              function() {
                return props.onChange(value);
              }
            );
          }
        } else {
          if (!Array.isArray(value)) {
            _this.setState(
              {
                value: value,
                singleSelectedDate: null
              },
              function() {
                return props.onChange(value);
              }
            );
          }
        }
      };
      _this.onDayClick = function(day) {
        var onClickDay = _this.props.onClickDay;
        _this.setState({
          singleSelectedDate: [startOfDay(day), endOfDay(day)]
        });
        if (onClickDay) onClickDay(day);
      };
      _this.getTileContent = function(_ref) {
        var date = _ref.date;
        var dot = _this.props.tileDots.find(function(datum) {
          return !!datum.timeStamp && isSameDay(date, datum.timeStamp);
        });
        return dot
          ? createElement(
              "div",
              {
                className: dotWrapper
              },
              dot.colors &&
                dot.colors.map(function(color, i) {
                  return createElement("span", {
                    key: i,
                    className: dotStyle,
                    style: {
                      backgroundColor: color
                    }
                  });
                })
            )
          : null;
      };
      _this.getDisabledDays = function(_ref2) {
        var date = _ref2.date;
        var disabledDays = _this.props.disabledDays;
        return (
          (disabledDays &&
            disabledDays.length &&
            disabledDays.some(function(_date) {
              return isSameDay(_date, date);
            })) ||
          false
        );
      };
      _this.onApply = function() {
        var _assertThisInitialize2 = _assertThisInitialized(_this),
          props = _assertThisInitialize2.props;
        var _this$state = _this.state,
          value = _this$state.value,
          singleSelectedDate = _this$state.singleSelectedDate;
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
      return _this;
    }
    _createClass(Calendar, [
      {
        key: "render",
        value: function render() {
          var _this$props = this.props,
            range = _this$props.range,
            selected = _this$props.selected,
            hideShadow = _this$props.hideShadow,
            className = _this$props.className,
            onApply = _this$props.onApply,
            onClear = _this$props.onClear,
            rest = _objectWithoutProperties(_this$props, [
              "range",
              "selected",
              "hideShadow",
              "className",
              "onApply",
              "onClear"
            ]);
          return createElement(
            "div",
            {
              className: cx(
                wrapperStyle,
                _defineProperty(
                  {},
                  /*#__PURE__*/
                  /*#__PURE__*/
                  css({
                    boxShadow: "none"
                  }),
                  hideShadow
                ),
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
    ]);
    return Calendar;
  })(PureComponent);
Calendar.defaultProps = {
  onChange: function onChange() {},
  tileDots: []
};

var wrapperStyle$1 =
  /*#__PURE__*/
  css({
    position: "relative"
  });
var dropDownStyle =
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

var OutsideClick =
  /*#__PURE__*/
  (function(_React$PureComponent) {
    _inherits(OutsideClick, _React$PureComponent);
    function OutsideClick() {
      var _this;
      _classCallCheck(this, OutsideClick);
      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(OutsideClick).apply(this, arguments)
      );
      _this.childRef = createRef();
      _this.handleClick = function(e) {
        if (
          _this.childRef.current &&
          !_this.childRef.current.contains(e.target)
        ) {
          _this.props.onOutsideClick();
        }
      };
      _this.addListener = function() {
        document.addEventListener("mousedown", _this.handleClick);
      };
      _this.removeListener = function() {
        document.removeEventListener("mousedown", _this.handleClick);
      };
      return _this;
    }
    _createClass(OutsideClick, [
      {
        key: "componentDidMount",
        value: function componentDidMount() {
          if (!this.props.disabled) {
            this.addListener();
          }
        }
      },
      {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.removeListener();
        }
      },
      {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          if (prevProps.disabled !== this.props.disabled) {
            this.props.disabled ? this.removeListener() : this.addListener();
          }
        }
      },
      {
        key: "render",
        value: function render() {
          var _this$props = this.props,
            className = _this$props.className,
            children = _this$props.children;
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
    ]);
    return OutsideClick;
  })(PureComponent);

var animationConfig = {
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
  config: function config(_a, motion) {
    return motion === "leave"
      ? {
          duration: 0.1
        }
      : {
          duration: 200
        };
  }
};

var MountTransition = function MountTransition(props) {
  return createElement(
    Transition,
    Object.assign(
      {
        items: props.visible
      },
      animationConfig,
      props
    ),
    function(show, state, index) {
      return (
        show &&
        function(styles) {
          return props.children(styles, state, index);
        }
      );
    }
  );
};

var DropDown =
  /*#__PURE__*/
  (function(_React$PureComponent) {
    _inherits(DropDown, _React$PureComponent);
    function DropDown() {
      var _this;
      _classCallCheck(this, DropDown);
      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(DropDown).apply(this, arguments)
      );
      _this.state = {
        isOpen: !!_this.props.initiallyOpen
      };
      _this.toggleDropdown = function() {
        _this.setState({
          isOpen: !_this.state.isOpen
        });
      };
      return _this;
    }
    _createClass(DropDown, [
      {
        key: "render",
        value: function render() {
          var _this2 = this;
          var _this$props = this.props,
            buttonLabel = _this$props.buttonLabel,
            children = _this$props.children,
            labelComponent = _this$props.labelComponent,
            padding = _this$props.padding,
            className = _this$props.className,
            dropDownClassName = _this$props.dropDownClassName,
            isSelected = _this$props.isSelected,
            disabled = _this$props.disabled,
            labelClassName = _this$props.labelClassName,
            _onOutsideClick = _this$props.onOutsideClick;
          var isOpen = this.state.isOpen;
          return createElement(
            OutsideClick,
            {
              className: cx(wrapperStyle$1, className),
              onOutsideClick: function onOutsideClick() {
                _this2.setState({
                  isOpen: false
                });
                if (_onOutsideClick) _onOutsideClick(isOpen);
              },
              disabled: !isOpen
            },
            createElement(
              Manager,
              null,
              createElement(Reference, null, function(_ref) {
                var ref = _ref.ref;
                return createElement(
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
                        isOpen: isOpen,
                        toggleDropdown: _this2.toggleDropdown
                      })
                    : createElement(
                        DropDownButton,
                        {
                          isSelected: !!isSelected,
                          isOpen: isOpen,
                          onClick: _this2.toggleDropdown,
                          disabled: disabled,
                          className: labelClassName
                        },
                        buttonLabel
                      )
                );
              }),
              createElement(
                MountTransition,
                {
                  visible: isOpen
                },
                function(transitionStyles) {
                  return createElement(
                    animated.div,
                    {
                      className: cx(dropDownStyle, dropDownClassName),
                      style: _objectSpread(
                        {
                          padding: padding
                        },
                        transitionStyles
                      )
                    },
                    createElement(
                      Popper,
                      Object.assign({}, _this2.props, {
                        positionFixed: true
                      }),
                      function(_ref2) {
                        var ref = _ref2.ref,
                          style = _ref2.style,
                          placement = _ref2.placement,
                          arrowProps = _ref2.arrowProps;
                        var popperWrapperStyle = _objectSpread(
                          {},
                          style,
                          transitionStyles,
                          {
                            backgroundColor: colors.white.base,
                            transform: ""
                              .concat(style.transform || "", " ")
                              .concat(transitionStyles.transform || ""),
                            transformOrigin: ""
                              .concat(arrowProps.style.left || 0, "px ")
                              .concat(arrowProps.style.top || 0, "px"),
                            padding: "".concat(padding)
                          }
                        );
                        return createElement(
                          "div",
                          {
                            className: cx(dropDownStyle, dropDownClassName),
                            ref: ref,
                            style: popperWrapperStyle,
                            "data-placement": placement
                          },
                          children({
                            toggle: _this2.toggleDropdown,
                            isOpen: _this2.state.isOpen
                          })
                        );
                      }
                    )
                  );
                }
              )
            )
          );
        }
      }
    ]);
    return DropDown;
  })(PureComponent);
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

var animation = "all 0.3s cubic-bezier(.64,.09,.08,1)";
var inputMarginBottom = 20;
var wrapperStyle$2 =
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
var inputStyle =
  /*#__PURE__*/
  css(
    _objectSpread(
      {
        outline: 0,
        border: 0,
        borderBottom: "1px solid ".concat(colors.gray.lighter),
        padding: "24px 0 12px 0",
        height: 48,
        borderRadius: 0
      },
      typography.normal.regular,
      {
        width: "100%"
      },
      textEllipsis,
      {
        "&:disabled": {
          backgroundColor: colors.white.base
        }
      },
      /*#__PURE__*/
      getPlaceholderStyle(colors.gray.light)
    )
  );
var inputReadOnlyStyle =
  /*#__PURE__*/
  css({
    color: colors.gray.dark
  });
var inputDisabledStyle =
  /*#__PURE__*/
  css({
    cursor: "not-allowed",
    pointerEvents: "none",
    color: colors.gray.base
  });
var inputTextAreaStyle =
  /*#__PURE__*/
  css({
    height: 88,
    padding: "0 0 52px 0",
    marginTop: 22,
    resize: "none"
  });
var highlightStyle =
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
var labelStyle =
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
var messageStyle =
  /*#__PURE__*/
  css(
    _objectSpread({}, typography.s.regular, {
      marginTop: 10,
      lineHeight: "10px",
      textAlign: "left"
    })
  );
var loadingStyle =
  /*#__PURE__*/
  css({
    right: -10,
    top: 20,
    position: "absolute"
  });

function getColor(error, success, isUnderlineColor) {
  var color = colors.gray.dark;
  if (error) {
    color = colors.red.base;
  } else if (success) {
    color = colors.emerald.base;
  } else if (isUnderlineColor) {
    color = colors.violet.base;
  }
  return color;
}
var Input =
  /*#__PURE__*/
  (function(_React$PureComponent) {
    _inherits(Input, _React$PureComponent);
    function Input() {
      var _this;
      _classCallCheck(this, Input);
      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(Input).apply(this, arguments)
      );
      _this.state = {
        isFocused: false
      };
      _this.addFocus = function() {
        _this.setState({
          isFocused: true
        });
      };
      _this.removeFocus = function() {
        _this.setState({
          isFocused: false
        });
      };
      _this.handleChange = function(e) {
        _this.props.onChange(e.target.value || "");
      };
      return _this;
    }
    _createClass(Input, [
      {
        key: "render",
        value: function render() {
          var _cx;
          var _this$props = this.props,
            type = _this$props.type,
            placeholder = _this$props.placeholder,
            className = _this$props.className,
            inputClassName = _this$props.inputClassName,
            fixLabelAtTop = _this$props.fixLabelAtTop,
            value = _this$props.value,
            readOnly = _this$props.readOnly,
            disabled = _this$props.disabled,
            errorMessage = _this$props.errorMessage,
            successMessage = _this$props.successMessage,
            message = _this$props.message,
            textArea = _this$props.textArea,
            required = _this$props.required,
            onClick = _this$props.onClick,
            loading = _this$props.loading;
          var isFocused = this.state.isFocused;
          var _message = errorMessage || successMessage || message;
          var _inputClassName = cx(
            inputStyle,
            ((_cx = {}),
            _defineProperty(_cx, inputDisabledStyle, disabled),
            _defineProperty(_cx, inputReadOnlyStyle, readOnly),
            _defineProperty(_cx, inputTextAreaStyle, textArea),
            _cx),
            inputClassName
          );
          var _inputProps = {
            "aria-label": placeholder ? placeholder : undefined,
            className: _inputClassName,
            disabled: disabled,
            onChange: this.handleChange,
            readOnly: readOnly,
            value: value || ""
          };
          var highlightClassName = cx(highlightStyle, {
            _pebble_input_highlight_focused: isFocused,
            _pebble_input_highlight_state: !!errorMessage || !!successMessage,
            _pebble_input_highlight_read_only: readOnly,
            _pebble_input_highlight_disabled: disabled
          });
          var labelClassName = cx(labelStyle, {
            _pebble_input_label_focused: isFocused || !!value || fixLabelAtTop
          });
          var _wrapperStyle = cx(
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
    ]);
    return Input;
  })(PureComponent);
Input.defaultProps = {
  value: "",
  readOnly: false
};

var modalContainer =
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

var Modal =
  /*#__PURE__*/
  (function(_React$PureComponent) {
    _inherits(Modal, _React$PureComponent);
    function Modal() {
      var _this;
      _classCallCheck(this, Modal);
      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(Modal).apply(this, arguments)
      );
      _this.node = isBrowser ? document.createElement("div") : null;
      return _this;
    }
    _createClass(Modal, [
      {
        key: "componentDidMount",
        value: function componentDidMount() {
          if (this.node) {
            document.body.appendChild(this.node);
          }
        }
      },
      {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          if (this.node) {
            document.body.removeChild(this.node);
          }
        }
      },
      {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          if (prevProps.visible === this.props.visible) return;
          if (this.props.visible) {
            document.getElementsByTagName("body")[0].style.overflow = "hidden";
          } else {
            document.getElementsByTagName("body")[0].style.overflow = "";
          }
        }
      },
      {
        key: "render",
        value: function render() {
          if (!isBrowser) return null;
          var _this$props = this.props,
            children = _this$props.children,
            visible = _this$props.visible,
            backDropClassName = _this$props.backDropClassName,
            modalClassName = _this$props.modalClassName;
          var node = this.node;
          return createPortal(
            createElement(
              MountTransition,
              {
                visible: visible
              },
              function(transitionStyles) {
                return createElement(
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
                );
              }
            ),
            node
          );
        }
      }
    ]);
    return Modal;
  })(PureComponent);

var searchWrapperStyle =
  /*#__PURE__*/
  css(
    _objectSpread(
      {
        minWidth: "200px",
        borderRadius: constants.borderRadius,
        padding: "0 20px"
      },
      flexRow,
      {
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
          border: "1px solid ".concat(colors.gray.light),
          backgroundColor: colors.white.base,
          i: {
            color: colors.gray.dark
          }
        }
      }
    )
  );
var searchStyle =
  /*#__PURE__*/
  css(
    _objectSpread(
      {
        borderRadius: constants.borderRadius,
        outline: "none",
        border: 0,
        height: "inherit",
        flexGrow: 1
      },
      textEllipsis,
      typography.s.regular,
      /*#__PURE__*/
      getPlaceholderStyle(colors.gray.base),
      {
        backgroundColor: "transparent"
      }
    )
  );
var clearContainer =
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

var Search =
  /*#__PURE__*/
  (function(_React$PureComponent) {
    _inherits(Search, _React$PureComponent);
    function Search() {
      var _this;
      _classCallCheck(this, Search);
      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(Search).apply(this, arguments)
      );
      _this.searchInputRef = createRef();
      return _this;
    }
    _createClass(Search, [
      {
        key: "render",
        value: function render() {
          var _this2 = this;
          var _this$props = this.props,
            type = _this$props.type,
            inputProps = _this$props.inputProps,
            _onChange = _this$props.onChange,
            placeholder = _this$props.placeholder,
            showSearchIcon = _this$props.showSearchIcon,
            className = _this$props.className,
            clearable = _this$props.clearable,
            value = _this$props.value;
          var wrapperClassName = cx(searchWrapperStyle, {
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
                  onChange: function onChange(e) {
                    _onChange(e.target.value);
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
                  onClick: function onClick() {
                    if (_this2.searchInputRef.current) {
                      _this2.searchInputRef.current.value = "";
                    }
                    _onChange("");
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
    ]);
    return Search;
  })(PureComponent);
Search.defaultProps = {
  showSearchIcon: true,
  clearable: true
};

var selectWrapper =
  /*#__PURE__*/
  css({
    marginBottom: 20
  });
var relativePosition =
  /*#__PURE__*/
  css({
    position: "relative"
  });
var selectInputWrapper =
  /*#__PURE__*/
  css({
    pointerEvents: "none",
    marginBottom: 0
  });
var selectInput =
  /*#__PURE__*/
  css({
    color: colors.gray.darker,
    paddingRight: 15
  });
var dropDownClass =
  /*#__PURE__*/
  css({
    marginTop: -inputMarginBottom
  });
var fullWidth =
  /*#__PURE__*/
  css({
    width: "100%"
  });
var inputWrapper =
  /*#__PURE__*/
  css({
    cursor: "pointer",
    position: "relative"
  });
var chevronStyle =
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
  var _selected = prevSelected || [];
  var cloned = _selected.slice(0);
  var index = _selected.findIndex(function(datum) {
    return datum === changedValue;
  });
  if (index >= 0) {
    cloned.splice(index, 1);
  } else {
    cloned.push(changedValue);
  }
  return cloned;
}

var optionWrapperMaxHeight = 316;
var searchBoxHeight = 80;
var initialPadding = 20;
var onScrollPadding = 10;
var optionsWrapper =
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
var searchBoxWrapper =
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
var searchBoxScrolledStyle =
  /*#__PURE__*/
  css({
    boxShadow: constants.boxShadow.base,
    padding: onScrollPadding
  });

var OptionGroup =
  /*#__PURE__*/
  (function(_React$PureComponent) {
    _inherits(OptionGroup, _React$PureComponent);
    function OptionGroup() {
      var _this;
      _classCallCheck(this, OptionGroup);
      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(OptionGroup).apply(this, arguments)
      );
      _this.optionRef = createRef();
      _this.optionsRefsSet = new Map();
      _this.state = {
        highlighted: -1,
        isScrolled: false
      };
      _this.handleKeyPress = function(e) {
        var _this$props = _this.props,
          handleChange = _this$props.handleChange,
          isSelected = _this$props.isSelected;
        var children = Children.toArray(_this.props.children);
        var highlighted = _this.state.highlighted;
        var which = e.which;
        if (which === 13 && children && children[highlighted]) {
          var _ref =
              children && children[highlighted] && children[highlighted].props,
            value = _ref.value;
          handleChange(
            {
              value: value,
              checked: !isSelected(value)
            },
            e
          );
        }
        _this.setState(
          function() {
            var _highlighted = highlighted;
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
          function() {
            var currentRef = _this.optionsRefsSet.get(highlighted);
            if (
              _this.optionRef.current &&
              (which === 40 || which === 38) &&
              currentRef &&
              currentRef.current
            ) {
              var element = findDOMNode(currentRef.current);
              if (element) {
                scrollIntoView(element, {
                  behavior: "smooth",
                  boundary: _this.optionRef.current
                });
              }
            }
          }
        );
      };
      return _this;
    }
    _createClass(OptionGroup, [
      {
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;
          this.observer = new IntersectionObserver(
            function(entries) {
              _this2.setState({
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
      },
      {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          if (this.observer) {
            this.observer.disconnect();
          }
        }
      },
      {
        key: "render",
        value: function render() {
          var _this3 = this;
          var _this$props2 = this.props,
            searchBox = _this$props2.searchBox,
            children = _this$props2.children,
            multiSelect = _this$props2.multiSelect,
            className = _this$props2.className,
            isSelected = _this$props2.isSelected,
            handleChange = _this$props2.handleChange,
            searchBoxProps = _this$props2.searchBoxProps;
          var _this$state = this.state,
            isScrolled = _this$state.isScrolled,
            highlighted = _this$state.highlighted;
          var _children = Children.map(children, function(_option, i) {
            var option = _option;
            var ref = _this3.optionsRefsSet.get(i);
            if (!ref) {
              ref = createRef();
              _this3.optionsRefsSet.set(i, ref);
            }
            return cloneElement(option, {
              onChange: handleChange,
              isActive: highlighted === i,
              isSelected: isSelected(option.props.value),
              multiSelect: multiSelect,
              ref: ref
            });
          });
          var searchBoxClassName = cx(
            searchBoxWrapper,
            _defineProperty({}, searchBoxScrolledStyle, isScrolled)
          );
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
                      inputProps: _objectSpread(
                        {},
                        searchBoxProps && searchBoxProps.inputProps,
                        {
                          onKeyDown: this.handleKeyPress,
                          autoFocus: true
                        }
                      )
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
    ]);
    return OptionGroup;
  })(PureComponent);

var optionGroupCheckBoxButtonWrapPadding = 20;
var optionGroupCheckBoxButtonWrapPaddingTop = 10;
var optionGroupCheckBoxWrap =
  /*#__PURE__*/
  css({
    maxHeight: "".concat(
      optionWrapperMaxHeight +
        searchBoxHeight +
        2 * (initialPadding - onScrollPadding) +
        optionGroupCheckBoxButtonWrapPadding +
        optionGroupCheckBoxButtonWrapPaddingTop +
        smallButtonHeight
    ),
    position: "relative"
  });
var optionGroupCheckBoxButtonWrap =
  /*#__PURE__*/
  css(
    _objectSpread({}, flexSpaceBetween, {
      padding: "".concat(optionGroupCheckBoxButtonWrapPadding),
      paddingTop: "".concat(optionGroupCheckBoxButtonWrapPaddingTop),
      backgroundColor: colors.white.base
    })
  );

var OptionGroupCheckBox =
  /*#__PURE__*/
  (function(_React$PureComponent) {
    _inherits(OptionGroupCheckBox, _React$PureComponent);
    function OptionGroupCheckBox() {
      var _this;
      _classCallCheck(this, OptionGroupCheckBox);
      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(OptionGroupCheckBox).apply(this, arguments)
      );
      _this.isSelected = function(value) {
        var selected = _this.props.selected;
        return !!selected && selected.includes(value);
      };
      _this.handleChange = function(_ref, event) {
        var value = _ref.value;
        _this.props.onChange(
          getSelectedCheckboxes(value, _this.props.selected),
          {
            props: _this.props,
            event: event
          }
        );
      };
      _this.onApply = function() {
        var _this$props = _this.props,
          onApply = _this$props.onApply,
          selected = _this$props.selected;
        if (onApply) onApply(selected || [], _this.props);
      };
      return _this;
    }
    _createClass(OptionGroupCheckBox, [
      {
        key: "render",
        value: function render() {
          var _this$props2 = this.props,
            onApply = _this$props2.onApply,
            onClear = _this$props2.onClear,
            isSelected = _this$props2.isSelected,
            onChange = _this$props2.onChange,
            rest = _objectWithoutProperties(_this$props2, [
              "onApply",
              "onClear",
              "isSelected",
              "onChange"
            ]);
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
    ]);
    return OptionGroupCheckBox;
  })(PureComponent);

var OptionGroupRadio =
  /*#__PURE__*/
  (function(_React$PureComponent) {
    _inherits(OptionGroupRadio, _React$PureComponent);
    function OptionGroupRadio() {
      var _this;
      _classCallCheck(this, OptionGroupRadio);
      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(OptionGroupRadio).apply(this, arguments)
      );
      _this.isSelected = function(value) {
        return _this.props.selected === value;
      };
      _this.handleChange = function(_ref, event) {
        var value = _ref.value,
          checked = _ref.checked;
        var onChange = _this.props.onChange;
        onChange(checked ? value : undefined, {
          props: _this.props,
          event: event
        });
      };
      return _this;
    }
    _createClass(OptionGroupRadio, [
      {
        key: "render",
        value: function render() {
          var _this$props = this.props,
            selected = _this$props.selected,
            onChange = _this$props.onChange,
            isSelected = _this$props.isSelected,
            rest = _objectWithoutProperties(_this$props, [
              "selected",
              "onChange",
              "isSelected"
            ]);
          return createElement(
            OptionGroup,
            Object.assign({}, rest, {
              isSelected: isSelected || this.isSelected,
              handleChange: this.handleChange
            })
          );
        }
      }
    ]);
    return OptionGroupRadio;
  })(PureComponent);

function noop() {}
function Select(props) {
  var className = props.className,
    placeholder = props.placeholder,
    required = props.required,
    errorMessage = props.errorMessage,
    value = props.value,
    dropdownClassName = props.dropdownClassName,
    inputProps = props.inputProps,
    fullWidthDropdown = props.fullWidthDropdown,
    _props$onDropdownTogg = props.onDropdownToggle,
    onDropdownToggle =
      _props$onDropdownTogg === void 0 ? noop : _props$onDropdownTogg,
    disabled = props.disabled,
    isSelected = props.isSelected,
    placement = props.placement,
    modifiers = props.modifiers;
  return createElement(
    "div",
    {
      className: cx(
        selectWrapper,
        className,
        _defineProperty({}, relativePosition, fullWidthDropdown)
      )
    },
    createElement(
      DropDown,
      {
        dropDownClassName: cx(
          dropDownClass,
          dropdownClassName,
          _defineProperty({}, fullWidth, fullWidthDropdown)
        ),
        onOutsideClick: function onOutsideClick(isOpen) {
          return onDropdownToggle(isOpen);
        },
        labelComponent: function labelComponent(_ref) {
          var toggleDropdown = _ref.toggleDropdown,
            isOpen = _ref.isOpen;
          var chevron = cx(chevronStyle, "pi", "pi-arrow-drop-down", {
            __pebble__select__open: isOpen
          });
          return createElement(
            "div",
            {
              className: inputWrapper,
              onClick: disabled
                ? undefined
                : function() {
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
      function(_ref2) {
        var toggle = _ref2.toggle,
          isOpen = _ref2.isOpen;
        var children = props.children,
          onClear = props.onClear,
          searchBox = props.searchBox,
          searchBoxProps = props.searchBoxProps;
        var commonProps = {
          isSelected: isSelected,
          onClear:
            onClear &&
            function() {
              onClear();
              onDropdownToggle(isOpen);
              toggle();
            },
          searchBox: searchBox,
          searchBoxProps: searchBoxProps
        };
        if (props.multiSelect) {
          return createElement(
            OptionGroupCheckBox,
            Object.assign(
              {
                selected: props.selected,
                onChange: function onChange(_value, extras) {
                  props.onChange(_value, extras);
                },
                onApply:
                  props.onApply &&
                  function(_value) {
                    if (props.onApply) props.onApply(_value, props);
                    onDropdownToggle(isOpen);
                    toggle();
                  }
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
                onChange: function onChange(_value, extras) {
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

var sidebarWrapperStyle =
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
var closeStyle =
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
var sidebarStyle =
  /*#__PURE__*/
  css({
    transition: "transform 200ms ".concat(constants.animationCurve),
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

var transitionProps = {
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
var SideBar =
  /*#__PURE__*/
  (function(_React$PureComponent) {
    _inherits(SideBar, _React$PureComponent);
    function SideBar() {
      _classCallCheck(this, SideBar);
      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(SideBar).apply(this, arguments)
      );
    }
    _createClass(SideBar, [
      {
        key: "componentDidMount",
        value: function componentDidMount() {
          if (this.props.isOpen) document.body.classList.add(disableScrollY);
        }
      },
      {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          if (this.props.isOpen) {
            document.body.classList.add(disableScrollY);
          } else {
            document.body.classList.remove(disableScrollY);
          }
        }
      },
      {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          if (this.props.isOpen) {
            document.body.classList.remove(disableScrollY);
          }
        }
      },
      {
        key: "render",
        value: function render() {
          var _this$props = this.props,
            width = _this$props.width,
            isOpen = _this$props.isOpen,
            children = _this$props.children,
            onClose = _this$props.onClose,
            closeOnOutsideClick = _this$props.closeOnOutsideClick;
          var _sidebarOverride =
            /*#__PURE__*/
            css({
              width: width,
              transform: isOpen
                ? "translateX(0)"
                : "translateX(".concat(width, "px)")
            });
          var _sidebarStyle = cx(
            _sidebarOverride,
            sidebarStyle,
            /*#__PURE__*/
            css({
              transform: isOpen ? "translateX(0)" : "translateX(100%)"
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
              function(show) {
                return (
                  show &&
                  function(styles) {
                    return createElement(animated.div, {
                      style: styles,
                      className: sidebarWrapperStyle
                    });
                  }
                );
              }
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
                  function(show) {
                    return (
                      show &&
                      function(styles) {
                        return createElement(
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
                        );
                      }
                    );
                  }
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
    ]);
    return SideBar;
  })(PureComponent);
SideBar.defaultProps = {
  closeOnOutsideClick: true
};

var rheostatOverrides = "\n.rheostat {\n  overflow: visible;\n}\n\n.rheostat-background {\n  background-color: "
  .concat(
    colors.violet.lightest,
    ";\n  position: relative;\n  border-radius: 2px;\n  overflow: hidden;\n  height: 4px;\n  top: 0;\n  width: 100%;\n}\n\n.rheostat-progress {\n  background-color: "
  )
  .concat(
    colors.violet.base,
    ";\n  position: absolute;\n  height: 4px;\n  border-radius: 2px;\n  top: 0;\n}\n\n.rheostat-handle {\n  background-color: "
  )
  .concat(
    colors.violet.base,
    ";\n  border-radius: 50%;\n  height: 20px;\n  outline: none;\n  z-index: 2;\n  width: 20px;\n  margin-left: -10px;\n  top: -8px;\n  border: 0;\n  cursor: pointer;\n  box-shadow: "
  )
  .concat(
    constants.boxShadow.xElevated,
    ";\n}\n\n.__pebble__slider__large .rheostat-handle {\n  width: 24px;\n  height: 24px;\n  margin-left: -12px;\n  top: -10px;\n}\n\n.rheostat-handle:hover {\n  background-color: "
  )
  .concat(
    colors.violet.light,
    ";\n}\n\n.__pebble__slider__disabled .rheostat-handle {\n  background-color: "
  )
  .concat(
    colors.violet.lighter,
    ";\n  cursor: inherit;\n}\n\n.rheostat-horizontal {\n  height: 4px;\n}\n"
  );
var sliderHeader =
  /*#__PURE__*/
  css(
    _objectSpread({}, flexSpaceBetween, {
      marginBottom: 25,
      alignItems: "center",
      ".__pebble__slider__large &": {
        marginBottom: 35
      }
    })
  );

var rheostatStylesOverriden = false;
function overrideRheostatStyles() {
  if (rheostatStylesOverriden) return;
  injectGlobal(rheostatOverrides);
  rheostatStylesOverriden = true;
}
var Slider = function Slider(_ref) {
  var className = _ref.className,
    large = _ref.large,
    title = _ref.title,
    disabled = _ref.disabled,
    valueLabelExtractor = _ref.valueLabelExtractor,
    values = _ref.values,
    onValuesUpdated = _ref.onValuesUpdated,
    rest = _objectWithoutProperties(_ref, [
      "className",
      "large",
      "title",
      "disabled",
      "valueLabelExtractor",
      "values",
      "onValuesUpdated"
    ]);
  overrideRheostatStyles();
  var mainClass = cx(className, {
    __pebble__slider__disabled: disabled,
    __pebble__slider__large: large
  });
  var _values = Array.isArray(values) ? values.slice(0) : values || [];
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
            function(args) {
              var min = args.min,
                max = args.max;
              if (
                Array.isArray(args.values) &&
                args.values[0] === rest.min &&
                args.values[1] === rest.max
              ) {
                onValuesUpdated({
                  min: min,
                  max: max,
                  values: []
                });
              } else {
                onValuesUpdated(args);
              }
            },
          values: _values
        },
        rest
      )
    )
  );
};

var headStyle =
  /*#__PURE__*/
  css({
    display: "flex",
    flexDirection: "row",
    position: "relative"
  });
var headSection =
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
var headingStyle =
  /*#__PURE__*/
  css(_objectSpread({}, typography.normal.regular));
var dotStyle$1 =
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
var activeDotStyle =
  /*#__PURE__*/
  css({
    backgroundColor: colors.violet.base
  });
var contentWrapper =
  /*#__PURE__*/
  css({
    marginTop: -10
  });
var footerStyle =
  /*#__PURE__*/
  css({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50
  });
var stepperLineStyle =
  /*#__PURE__*/
  css({
    height: 2,
    bottom: 9,
    position: "absolute",
    transition: "width 100ms ease-out",
    backgroundColor: colors.violet.base
  });

function noop$1() {}
var Stepper =
  /*#__PURE__*/
  (function(_React$PureComponent) {
    _inherits(Stepper, _React$PureComponent);
    function Stepper() {
      var _this;
      _classCallCheck(this, Stepper);
      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(Stepper).apply(this, arguments)
      );
      _this.state = {
        active: _this.props.initialSelectedIndex || 0
      };
      _this.goToNextPage =
        /*#__PURE__*/
        _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee() {
            var _this$props, onBeforeNext, data, allow;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    (_this$props = _this.props),
                      (onBeforeNext = _this$props.onBeforeNext),
                      (data = _this$props.data);
                    _context.next = 3;
                    return onBeforeNext(_this.state.active);
                  case 3:
                    allow = _context.sent;
                    if (allow)
                      _this.goToPage(
                        Math.min(data.length - 1, _this.state.active + 1)
                      );
                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          })
        );
      _this.goToPrevPage =
        /*#__PURE__*/
        _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee2() {
            var allow;
            return _regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch ((_context2.prev = _context2.next)) {
                  case 0:
                    _context2.next = 2;
                    return _this.props.onBeforePrev(_this.state.active);
                  case 2:
                    allow = _context2.sent;
                    if (allow)
                      _this.goToPage(Math.max(0, _this.state.active - 1));
                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          })
        );
      _this.goToPage = function(index) {
        var prev = _this.state.active;
        _this.setState(
          {
            active: index
          },
          function() {
            return _this.props.onChange({
              prev: prev,
              current: _this.state.active
            });
          }
        );
      };
      _this.getHeadings = function() {
        var _this$props2 = _this.props,
          headingExtractor = _this$props2.headingExtractor,
          data = _this$props2.data;
        return data.map(function(datum) {
          return headingExtractor({
            item: datum
          });
        });
      };
      _this.getLeftButtonData = function() {
        var _this$props3 = _this.props,
          cancelLabel = _this$props3.cancelLabel,
          prevLabel = _this$props3.prevLabel,
          onCancel = _this$props3.onCancel;
        return _this.state.active === 0
          ? {
              label: cancelLabel,
              action: onCancel
            }
          : {
              label: prevLabel,
              action: _this.goToPrevPage
            };
      };
      _this.getRightButtonData = function() {
        var _this$props4 = _this.props,
          nextLabel = _this$props4.nextLabel,
          onDone = _this$props4.onDone,
          data = _this$props4.data,
          doneLabel = _this$props4.doneLabel;
        return _this.state.active === data.length - 1
          ? {
              label: doneLabel,
              action: onDone
            }
          : {
              label: nextLabel,
              action: _this.goToNextPage
            };
      };
      return _this;
    }
    _createClass(Stepper, [
      {
        key: "render",
        value: function render() {
          var _this2 = this;
          var _this$props5 = this.props,
            data = _this$props5.data,
            renderContentElement = _this$props5.renderContentElement,
            keyExtractor = _this$props5.keyExtractor,
            renderFooterElement = _this$props5.renderFooterElement,
            className = _this$props5.className,
            allowSkip = _this$props5.allowSkip;
          var active = this.state.active;
          var args = {
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
              this.getHeadings().map(function(heading, i) {
                var dotClass = cx(
                  dotStyle$1,
                  _defineProperty({}, activeDotStyle, i <= active)
                );
                var headingColor =
                  i === active
                    ? colors.violet.base
                    : allowSkip
                    ? colors.gray.base
                    : undefined;
                return createElement(
                  "div",
                  {
                    key: keyExtractor(data[i]),
                    className: cx(
                      headSection,
                      _defineProperty(
                        {},
                        /*#__PURE__*/
                        /*#__PURE__*/
                        css({
                          cursor: "inherit"
                        }),
                        !allowSkip
                      )
                    ),
                    onClick: allowSkip
                      ? function() {
                          return _this2.goToPage(i);
                        }
                      : noop$1
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
                  width: "".concat((100 / (2 * data.length)) * 2 * active, "%"),
                  marginLeft: "".concat(100 / (2 * data.length), "%")
                }
              })
            ),
            createElement(
              "div",
              {
                className: contentWrapper
              },
              data.map(function(datum, i) {
                return createElement(
                  "div",
                  {
                    key: keyExtractor(datum),
                    className: cx(
                      _defineProperty(
                        {},
                        /*#__PURE__*/
                        /*#__PURE__*/
                        css({
                          display: "none"
                        }),
                        i !== _this2.state.active
                      )
                    )
                  },
                  renderContentElement(
                    _objectSpread(
                      {
                        item: datum,
                        isSelected: i === _this2.state.active
                      },
                      args
                    )
                  )
                );
              }),
              renderFooterElement(
                _objectSpread(
                  {
                    activeIndex: this.state.active
                  },
                  args
                ),
                this.props
              )
            )
          );
        }
      }
    ]);
    return Stepper;
  })(PureComponent);
Stepper.defaultProps = {
  allowSkip: true,
  cancelLabel: "Cancel",
  nextLabel: "Next",
  prevLabel: "Prev",
  doneLabel: "Done",
  onBeforeNext: function onBeforeNext() {
    return true;
  },
  onBeforePrev: function onBeforePrev() {
    return true;
  },
  onChange: function onChange() {},
  onCancel: function onCancel() {},
  onDone: function onDone() {},
  renderFooterElement: function renderFooterElement(_ref3, props) {
    var leftButtonData = _ref3.leftButtonData,
      rightButtonData = _ref3.rightButtonData;
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

var tagStyle =
  /*#__PURE__*/
  css(
    _objectSpread({}, typography.s.bold, flexSpaceBetween, {
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
    })
  );
var iconClass =
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

var Tag = function Tag(_ref) {
  var label = _ref.label,
    color = _ref.color,
    onClose = _ref.onClose,
    className = _ref.className;
  var wrapperClassName = cx(tagStyle, {
    __pebble__tag__with__close: !!onClose
  });
  var _className = cx(wrapperClassName, className);
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

var toastWrapper =
  /*#__PURE__*/
  css(
    _objectSpread(
      {
        position: "fixed",
        borderRadius: constants.borderRadius
      },
      typography.normal.regular,
      {
        color: colors.white.base,
        height: 46,
        display: "flex",
        alignItems: "center",
        padding: 20,
        zIndex: 99999,
        "> i": {
          marginRight: 10
        }
      }
    )
  );

var emitter =
  /*#__PURE__*/
  new Mitt();
var _colors = {
  success: colors.emerald.base,
  error: colors.red.base
};
var toastTransitionsLeft = {
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
var toastTransitionsRight = {
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
var customStyles = {
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
var Toast =
  /*#__PURE__*/
  (function(_React$PureComponent) {
    _inherits(Toast, _React$PureComponent);
    function Toast() {
      var _this;
      _classCallCheck(this, Toast);
      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(Toast).apply(this, arguments)
      );
      _this.state = {
        text: "",
        type: "success",
        show: false,
        position: "BOTTOM"
      };
      _this.show = function(_ref) {
        var text = _ref.text,
          _ref$type = _ref.type,
          type = _ref$type === void 0 ? "success" : _ref$type,
          position = _ref.position,
          time = _ref.time;
        _this.setState({
          text: text,
          type: type,
          position: position,
          show: true
        });
        if (_this.showTimer) {
          clearTimeout(_this.showTimer);
          _this.showTimer = null;
        }
        _this.showTimer = window.setTimeout(
          function() {
            return _this.setState({
              show: false
            });
          },
          time ? time : _this.props.defaultTime || 5000
        );
      };
      _this.hide = function() {
        return _this.setState({
          show: false
        });
      };
      return _this;
    }
    _createClass(
      Toast,
      [
        {
          key: "componentDidMount",
          value: function componentDidMount() {
            emitter.on("showToast", this.show);
            emitter.on("hideToast", this.hide);
          }
        },
        {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            emitter.off("showToast", this.show);
            emitter.off("hideToast", this.hide);
          }
        },
        {
          key: "render",
          value: function render() {
            var _this2 = this;
            var bColor = _colors[this.state.type];
            var iconClass = cx("pi", {
              "pi-radio-check-filled": this.state.type === "success",
              "pi-close-circle-filled": this.state.type === "error"
            });
            var position =
              this.state.position || this.props.defaultPosition || "BOTTOM";
            return createElement(
              Transition,
              {
                native: true,
                items: this.state.show,
                key: position,
                from: _objectSpread(
                  {
                    opacity: 0
                  },
                  customStyles[position].transitions.from
                ),
                enter: _objectSpread(
                  {
                    opacity: 1
                  },
                  customStyles[position].transitions.enter
                ),
                leave: _objectSpread(
                  {
                    opacity: 0,
                    pointerEvents: "none"
                  },
                  customStyles[position].transitions.leave
                ),
                config: animationConfig.config
              },
              function(show) {
                return (
                  show &&
                  function(styles) {
                    return createElement(
                      animated.div,
                      {
                        className: cx(toastWrapper, _this2.props.className),
                        style: _objectSpread(
                          {
                            backgroundColor: bColor
                          },
                          styles,
                          customStyles[position].style
                        )
                      },
                      createElement("i", {
                        className: iconClass
                      }),
                      _this2.state.text
                    );
                  }
                );
              }
            );
          }
        }
      ],
      [
        {
          key: "show",
          value: function show(text, type) {
            var _ref2 =
                arguments.length > 2 && arguments[2] !== undefined
                  ? arguments[2]
                  : {},
              time = _ref2.time,
              position = _ref2.position;
            emitter.emit("showToast", {
              text: text,
              type: type,
              time: time,
              position: position
            });
          }
        },
        {
          key: "hide",
          value: function hide() {
            emitter.emit("hideToast");
          }
        }
      ]
    );
    return Toast;
  })(PureComponent);

var wrapper =
  /*#__PURE__*/
  css({
    position: "relative"
  });
var optionsWrapper$1 =
  /*#__PURE__*/
  css({
    width: "100%",
    position: "absolute",
    marginTop: -40,
    zIndex: 999,
    boxShadow: constants.boxShadow.elevated,
    transformOrigin: "0 0"
  });

function defaultSearchBox(_ref, props) {
  var registerChange = _ref.registerChange,
    onFocus = _ref.onFocus,
    value = _ref.value;
  return createElement(Input, {
    onChange: registerChange,
    placeholder: props.placeholder,
    inputProps: {
      onFocus: onFocus,
      onKeyDown: function onKeyDown(e) {
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
var TypeAhead =
  /*#__PURE__*/
  (function(_React$PureComponent) {
    _inherits(TypeAhead, _React$PureComponent);
    function TypeAhead() {
      var _this;
      _classCallCheck(this, TypeAhead);
      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(TypeAhead).apply(this, arguments)
      );
      _this.state = {
        value: _this.props.initialValue || "",
        showSuggestions: false
      };
      _this.onChange = function() {
        _this.props.onChange(_this.state.value, _this.props);
      };
      _this.debouncedChange = debounce(
        _this.onChange,
        _this.props.debounceTime
      );
      _this.registerChange = function(value) {
        _this.setState(
          {
            value: value
          },
          _this.debouncedChange
        );
      };
      _this.onFocus = function() {
        _this.setState({
          showSuggestions: true
        });
      };
      _this.onSelect = function(_value) {
        _this.props.onSelect(_value, _this.props);
        _this.setState({
          showSuggestions: false,
          value: (_value && _this.props.valueExtractor(_value)) || ""
        });
      };
      return _this;
    }
    _createClass(TypeAhead, [
      {
        key: "render",
        value: function render() {
          var _this2 = this;
          var _this$props = this.props,
            className = _this$props.className,
            _this$props$searchBox = _this$props.searchBox,
            searchBox =
              _this$props$searchBox === void 0
                ? defaultSearchBox
                : _this$props$searchBox,
            dropdownClassName = _this$props.dropdownClassName,
            children = _this$props.children;
          var _this$state = this.state,
            showSuggestions = _this$state.showSuggestions,
            value = _this$state.value;
          return createElement(
            OutsideClick,
            {
              onOutsideClick: function onOutsideClick() {
                return _this2.setState({
                  showSuggestions: false
                });
              },
              disabled: !showSuggestions,
              className: cx(wrapper, className)
            },
            searchBox(
              {
                registerChange: this.registerChange,
                onFocus: this.onFocus,
                value: value
              },
              this.props
            ),
            createElement(
              MountTransition,
              {
                visible: showSuggestions,
                native: true
              },
              function(transitionStyles) {
                return createElement(
                  animated.div,
                  {
                    style: transitionStyles,
                    className: cx(optionsWrapper$1, dropdownClassName)
                  },
                  createElement(
                    OptionGroupRadio,
                    {
                      onChange: _this2.onSelect
                    },
                    children
                  )
                );
              }
            )
          );
        }
      }
    ]);
    return TypeAhead;
  })(PureComponent);
TypeAhead.defaultProps = {
  debounceTime: 500,
  onClear: function onClear() {}
};

var dateClass =
  /*#__PURE__*/
  css({
    padding: 20,
    width: "100%"
  });
var dropDownClassName =
  /*#__PURE__*/
  css({
    marginTop: -inputMarginBottom
  });
var inputStyle$1 =
  /*#__PURE__*/
  css({
    marginBottom: 0
  });
var wrapperStyle$3 =
  /*#__PURE__*/
  css({
    marginBottom: 20
  });

var NativeDateInput =
  /*#__PURE__*/
  (function(_React$PureComponent) {
    _inherits(NativeDateInput, _React$PureComponent);
    function NativeDateInput() {
      var _this;
      _classCallCheck(this, NativeDateInput);
      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(NativeDateInput).apply(this, arguments)
      );
      _this.onDateInputChange = function(value) {
        var date = parse(value);
        _this.props.onChange(date && date.getTime());
      };
      return _this;
    }
    _createClass(NativeDateInput, [
      {
        key: "render",
        value: function render() {
          var _this$props = this.props,
            inputProps = _this$props.inputProps,
            placeholder = _this$props.placeholder,
            value = _this$props.value;
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
    ]);
    return NativeDateInput;
  })(PureComponent);

var defaultContext = {
  userAgent: ""
};
var UserAgentInfoContext =
  /*@__PURE__*/
  createContext(defaultContext);
function computeUserAgentInfo(userAgent) {
  return {
    userAgent: userAgent
  };
}
var UserAgentInfoProvider =
  /*#__PURE__*/
  (function(_React$PureComponent) {
    _inherits(UserAgentInfoProvider, _React$PureComponent);
    function UserAgentInfoProvider(props) {
      var _this;
      _classCallCheck(this, UserAgentInfoProvider);
      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(UserAgentInfoProvider).call(this, props)
      );
      if (typeof navigator !== "undefined" && navigator.userAgent) {
        _this.state = computeUserAgentInfo(navigator.userAgent);
      } else if (props.userAgent) {
        _this.state = computeUserAgentInfo(props.userAgent);
      } else {
        _this.state = defaultContext;
      }
      return _this;
    }
    _createClass(UserAgentInfoProvider, [
      {
        key: "render",
        value: function render() {
          return createElement(
            UserAgentInfoContext.Provider,
            {
              value: this.state
            },
            this.props.children
          );
        }
      }
    ]);
    return UserAgentInfoProvider;
  })(PureComponent);

var noop$2 = function noop() {};
function dateFormat(str) {
  var clean = str.replace(/[^\d]+/gi, "");
  var chars = clean.split("");
  return chars.reduce(function(r, v, index) {
    return ""
      .concat(r)
      .concat(v)
      .concat(index === 1 || index === 3 ? "/" : "")
      .substr(0, 10);
  }, "");
}
var modifiers = {
  preventOverflow: {
    enabled: false
  },
  flip: {
    enabled: false
  }
};
var DateInput =
  /*#__PURE__*/
  (function(_React$PureComponent) {
    _inherits(DateInput, _React$PureComponent);
    function DateInput() {
      var _this;
      _classCallCheck(this, DateInput);
      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(DateInput).apply(this, arguments)
      );
      _this.state = {
        stringInput: ""
      };
      _this.onCalendarDateChange = function(date) {
        _this.props.onChange(date.getTime());
      };
      _this.onInputChange = function(input) {
        _this.setState({
          stringInput: input
        });
        if (input.length === 10) {
          var date = startOfDay(new Date());
          date.setFullYear(
            parseInt(input.substr(6, 4), 10),
            parseInt(input.substr(3, 5), 10) - 1,
            parseInt(input.substr(0, 2), 10)
          );
          _this.props.onChange(date.getTime());
        }
      };
      return _this;
    }
    _createClass(
      DateInput,
      [
        {
          key: "render",
          value: function render() {
            var _this2 = this;
            var _this$props = this.props,
              calendarProps = _this$props.calendarProps,
              inputProps = _this$props.inputProps,
              placeholder = _this$props.placeholder,
              propsValue = _this$props.value;
            return createElement(
              DropDown,
              {
                dropDownClassName: dropDownClassName,
                labelComponent: function labelComponent(_ref) {
                  var toggleDropdown = _ref.toggleDropdown;
                  return createElement(
                    Rifm,
                    {
                      value: _this2.state.stringInput,
                      onChange: _this2.onInputChange,
                      format: dateFormat
                    },
                    function(_ref2) {
                      var value = _ref2.value,
                        onChange = _ref2.onChange;
                      return createElement(
                        Input,
                        Object.assign(
                          {
                            onChange: noop$2,
                            type: "tel",
                            value: value,
                            placeholder: "".concat(placeholder, " DD/MM/YYYY"),
                            onClick: toggleDropdown,
                            fixLabelAtTop: true
                          },
                          inputProps,
                          {
                            inputProps: _objectSpread(
                              {
                                placeholder: "DD/MM/YYYY"
                              },
                              inputProps && inputProps.inputProps,
                              {
                                onChange: onChange
                              }
                            ),
                            className: inputStyle$1
                          }
                        )
                      );
                    }
                  );
                },
                className: wrapperStyle$3,
                placement: "bottom-start",
                modifiers: modifiers
              },
              function(_ref3) {
                var toggle = _ref3.toggle;
                return createElement(
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
                      onChange: function onChange(date) {
                        _this2.onCalendarDateChange(date);
                        toggle();
                      }
                    }
                  )
                );
              }
            );
          }
        }
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function getDerivedStateFromProps(props, state) {
            var newState = null;
            if (props.value && props.value !== state.propsValue) {
              newState = {
                propsValue: props.value,
                stringInput:
                  (props.value && format(props.value, "DD/MM/YYYY")) || ""
              };
            }
            return newState;
          }
        }
      ]
    );
    return DateInput;
  })(PureComponent);
function checkDateInputSupport() {
  try {
    var input = document.createElement("input");
    var type = "date";
    input.setAttribute("type", "date");
    input.value = "\x01";
    return (
      input.type === type && (input.value !== "\x01" || !input.checkValidity())
    );
  } catch (e) {
    return true;
  }
}
var hasDateInputSupport =
  /*@__PURE__*/
  checkDateInputSupport();
var BrowserBasedDateInput =
  /*#__PURE__*/
  (function(_React$PureComponent2) {
    _inherits(BrowserBasedDateInput, _React$PureComponent2);
    function BrowserBasedDateInput() {
      _classCallCheck(this, BrowserBasedDateInput);
      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(BrowserBasedDateInput).apply(this, arguments)
      );
    }
    _createClass(BrowserBasedDateInput, [
      {
        key: "render",
        value: function render() {
          var _this3 = this;
          return createElement(UserAgentInfoContext.Consumer, null, function(
            _ref4
          ) {
            var userAgent = _ref4.userAgent;
            if (/Android|iPhone|iPad/i.test(userAgent) && hasDateInputSupport) {
              return createElement(NativeDateInput, _this3.props);
            }
            return createElement(DateInput, _this3.props);
          });
        }
      }
    ]);
    return BrowserBasedDateInput;
  })(PureComponent);
BrowserBasedDateInput.contextType = UserAgentInfoContext;

var popperStyle =
  /*#__PURE__*/
  css({
    margin: 14,
    boxShadow: constants.boxShadow.xElevated,
    borderRadius: constants.borderRadius
  });
var arrowStyle =
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

var default_1 =
  /*#__PURE__*/
  (function(_React$PureComponent) {
    _inherits(default_1, _React$PureComponent);
    function default_1() {
      var _this;
      _classCallCheck(this, default_1);
      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(default_1).apply(this, arguments)
      );
      _this.state = {
        isOpen: !!_this.props.isOpen
      };
      _this.toggle = function() {
        _this.setState({
          isOpen: !_this.state.isOpen
        });
      };
      return _this;
    }
    _createClass(default_1, [
      {
        key: "render",
        value: function render() {
          var _this2 = this;
          var _this$props = this.props,
            label = _this$props.label,
            popperBackgroundColor = _this$props.popperBackgroundColor,
            children = _this$props.children,
            controlled = _this$props.controlled,
            isOpen = _this$props.isOpen,
            popperClassName = _this$props.popperClassName,
            _onOutsideClick = _this$props.onOutsideClick,
            props = _objectWithoutProperties(_this$props, [
              "label",
              "popperBackgroundColor",
              "children",
              "controlled",
              "isOpen",
              "popperClassName",
              "onOutsideClick"
            ]);
          var _isPopperOpen = controlled ? !!isOpen : this.state.isOpen;
          return createElement(
            OutsideClick,
            {
              onOutsideClick: function onOutsideClick() {
                _this2.setState({
                  isOpen: false
                });
                if (_onOutsideClick) {
                  _onOutsideClick();
                }
              },
              disabled: !_isPopperOpen
            },
            createElement(
              Manager,
              null,
              createElement(Reference, null, function(_ref) {
                var ref = _ref.ref;
                return createElement(
                  "div",
                  {
                    style: {
                      display: "inline-block"
                    },
                    ref: ref
                  },
                  typeof label === "function"
                    ? label({
                        toggle: _this2.toggle,
                        isOpen: _this2.state.isOpen
                      })
                    : label
                );
              }),
              createElement(
                MountTransition,
                {
                  visible: _isPopperOpen
                },
                function(transitionStyles) {
                  return createElement(
                    Popper,
                    Object.assign({}, props, {
                      positionFixed: true
                    }),
                    function(_ref2) {
                      var ref = _ref2.ref,
                        style = _ref2.style,
                        placement = _ref2.placement,
                        arrowProps = _ref2.arrowProps;
                      var wrapperStyle = _objectSpread(
                        {},
                        style,
                        transitionStyles,
                        {
                          backgroundColor: popperBackgroundColor,
                          transform: ""
                            .concat(style.transform || "", " ")
                            .concat(transitionStyles.transform || ""),
                          transformOrigin: ""
                            .concat(arrowProps.style.left || 0, "px ")
                            .concat(arrowProps.style.top || 0, "px")
                        }
                      );
                      return createElement(
                        "div",
                        {
                          className: cx(popperStyle, popperClassName),
                          ref: ref,
                          style: wrapperStyle,
                          "data-placement": placement
                        },
                        children({
                          toggle: _this2.toggle,
                          isOpen: _this2.state.isOpen
                        }),
                        createElement(
                          "div",
                          {
                            className: arrowStyle,
                            ref: arrowProps.ref,
                            style: _objectSpread({}, arrowProps.style, {
                              color: popperBackgroundColor
                            }),
                            "data-placement": placement
                          },
                          "\u25B6"
                        )
                      );
                    }
                  );
                }
              )
            )
          );
        }
      }
    ]);
    return default_1;
  })(PureComponent);
default_1.defaultProps = {
  placement: "bottom",
  popperBackgroundColor: colors.white.base,
  closeOnOutsideClick: true
};

var textStyle =
  /*#__PURE__*/
  css(
    _objectSpread({}, typography.s.regular, {
      color: colors.white.base,
      display: "block",
      padding: "10px 16px"
    })
  );
var popperStyle$1 =
  /*#__PURE__*/
  css({
    margin: 4,
    boxShadow: "none",
    maxWidth: 320
  });

var Tooltip =
  /*#__PURE__*/
  (function(_React$PureComponent) {
    _inherits(Tooltip, _React$PureComponent);
    function Tooltip() {
      var _this;
      _classCallCheck(this, Tooltip);
      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(Tooltip).apply(this, arguments)
      );
      _this.state = {
        isOpen: !!_this.props.isOpen
      };
      _this.defaultTooltip = function() {
        return createElement(
          "span",
          {
            className: textStyle
          },
          _this.props.text
        );
      };
      _this.labelRef = createRef();
      _this.showTooltip = function() {
        return _this.setState({
          isOpen: true
        });
      };
      _this.hideTooltip = function() {
        return _this.setState({
          isOpen: false
        });
      };
      _this.addListeners = function() {
        if (!_this.props.disabled) {
          _this.labelRef.current.addEventListener(
            "mouseenter",
            _this.showTooltip
          );
          _this.labelRef.current.addEventListener(
            "mouseout",
            _this.hideTooltip
          );
        }
      };
      _this.removeListeners = function() {
        _this.labelRef.current.removeEventListener(
          "mouseenter",
          _this.showTooltip
        );
        _this.labelRef.current.removeEventListener(
          "mouseout",
          _this.showTooltip
        );
      };
      return _this;
    }
    _createClass(Tooltip, [
      {
        key: "componentDidMount",
        value: function componentDidMount() {
          this.addListeners();
        }
      },
      {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.removeListeners();
        }
      },
      {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          if (prevProps.disabled !== this.props.disabled) {
            this.props.disabled ? this.removeListeners() : this.addListeners();
          }
        }
      },
      {
        key: "render",
        value: function render() {
          var _this2 = this;
          var _this$props = this.props,
            placement = _this$props.placement,
            _label = _this$props.label,
            modifiers = _this$props.modifiers,
            isError = _this$props.isError;
          return createElement(
            default_1,
            {
              label: function label() {
                return _label({
                  ref: _this2.labelRef
                });
              },
              placement: placement,
              positionFixed: true,
              controlled: true,
              popperBackgroundColor: isError
                ? colors.red.base
                : colors.gray.darker,
              modifiers: modifiers,
              isOpen: this.props.isOpen || this.state.isOpen,
              popperClassName: popperStyle$1,
              closeOnOutsideClick: false
            },
            this.props.renderElement || this.defaultTooltip
          );
        }
      }
    ]);
    return Tooltip;
  })(PureComponent);

var Logo = function Logo(_ref) {
  var _ref$height = _ref.height,
    height = _ref$height === void 0 ? 40 : _ref$height,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "#000000" : _ref$color;
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

var modalPadding = 30;
var modalContainer$1 =
  /*#__PURE__*/
  css({
    background: "white",
    width: "360px",
    alignSelf: "center",
    borderRadius: constants.borderRadius,
    padding: "".concat(modalPadding, "px"),
    position: "relative"
  });
var flexCenter =
  /*#__PURE__*/
  css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  });
var buttonsContainer =
  /*#__PURE__*/
  css(
    _objectSpread({}, flexSpaceBetween, {
      marginTop: "40px"
    })
  );
var iconCloseClassName =
  /*#__PURE__*/
  css({
    cursor: "pointer",
    position: "absolute",
    right: "".concat(modalPadding, "px"),
    top: "".concat(modalPadding, "px"),
    fontSize: "14px",
    color: colors.gray.base,
    "&:hover": {
      color: colors.gray.darker
    }
  });

var PopUp = function PopUp(props) {
  var onClose = props.onClose,
    onApprove = props.onApprove,
    onReject = props.onReject,
    visible = props.visible,
    _props$approveButtonT = props.approveButtonText,
    approveButtonText =
      _props$approveButtonT === void 0 ? "Yes" : _props$approveButtonT,
    _props$rejectButtonTe = props.rejectButtonText,
    rejectButtonText =
      _props$rejectButtonTe === void 0 ? "No" : _props$rejectButtonTe,
    children = props.children;
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

var radioIconStyle =
  /*#__PURE__*/
  css({
    marginRight: 10,
    fontSize: 16
  });
var controlStyle =
  /*#__PURE__*/
  css(
    _objectSpread(
      {
        cursor: "pointer",
        display: "flex",
        outline: "none",
        padding: "10px 0",
        position: "relative",
        alignItems: "center"
      },
      typography.normal.regular,
      {
        "&[data-disabled='true']": _defineProperty(
          {
            cursor: "not-allowed"
          },
          ".".concat(radioIconStyle),
          {
            color: colors.gray.light
          }
        )
      }
    )
  );

function Control(props) {
  var checked = props.checked,
    onChange = props.onChange,
    value = props.value,
    disabled = props.disabled,
    _props$children = props.children,
    children = _props$children === void 0 ? ControlView : _props$children,
    type = props.type,
    className = props.className;
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
        ? function(e) {
            return (
              onChange &&
              onChange(
                {
                  value: value,
                  checked: !checked
                },
                e
              )
            );
          }
        : undefined
    },
    children(props)
  );
}
var ControlView = function ControlView(_ref) {
  var checked = _ref.checked,
    label = _ref.label,
    type = _ref.type,
    disabled = _ref.disabled;
  var isRadio = type === "radio";
  var iconClass = cx(radioIconStyle, "pi", {
    "pi-radio": isRadio && !checked && !disabled,
    "pi-radio-selected": isRadio && (checked || disabled),
    "pi-checkbox-selected": !isRadio && (checked || disabled),
    "pi-checkbox-unselected": !isRadio && !checked && !disabled
  });
  var getColor = function getColor() {
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

var RadioGroup =
  /*#__PURE__*/
  (function(_React$PureComponent) {
    _inherits(RadioGroup, _React$PureComponent);
    function RadioGroup() {
      var _this;
      _classCallCheck(this, RadioGroup);
      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(RadioGroup).apply(this, arguments)
      );
      _this.handleChange = function(_ref, event) {
        var value = _ref.value,
          checked = _ref.checked;
        var _this$props = _this.props,
          toggle = _this$props.toggle,
          selected = _this$props.selected,
          onChange = _this$props.onChange;
        if (!toggle && value === selected) return;
        onChange(checked ? value : undefined, event);
      };
      return _this;
    }
    _createClass(RadioGroup, [
      {
        key: "render",
        value: function render() {
          var _this2 = this;
          var _this$props2 = this.props,
            children = _this$props2.children,
            selected = _this$props2.selected,
            className = _this$props2.className,
            name = _this$props2.name,
            disabled = _this$props2.disabled;
          var _children = Children.map(children, function(_radio) {
            var radio = _radio;
            return cloneElement(radio, {
              onChange: _this2.handleChange,
              checked: selected === radio.props.value,
              disabled: disabled
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
    ]);
    return RadioGroup;
  })(PureComponent);

function Checkbox(props) {
  return createElement(
    Control,
    Object.assign({}, props, {
      type: "checkbox"
    })
  );
}

var CheckboxGroup =
  /*#__PURE__*/
  (function(_React$PureComponent) {
    _inherits(CheckboxGroup, _React$PureComponent);
    function CheckboxGroup() {
      var _this;
      _classCallCheck(this, CheckboxGroup);
      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(CheckboxGroup).apply(this, arguments)
      );
      _this.handleChange = function(_ref, event) {
        var value = _ref.value;
        var _this$props = _this.props,
          onChange = _this$props.onChange,
          selected = _this$props.selected;
        onChange(getSelectedCheckboxes(value, selected), event);
      };
      return _this;
    }
    _createClass(CheckboxGroup, [
      {
        key: "render",
        value: function render() {
          var _this2 = this;
          var _this$props2 = this.props,
            children = _this$props2.children,
            selected = _this$props2.selected,
            className = _this$props2.className,
            name = _this$props2.name,
            disabled = _this$props2.disabled;
          var _children = Children.map(children, function(_checkbox) {
            var checkbox = _checkbox;
            return cloneElement(checkbox, {
              onChange: _this2.handleChange,
              checked: selected.indexOf(checkbox.props.value) >= 0,
              disabled: disabled
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
    ]);
    return CheckboxGroup;
  })(PureComponent);

var rowWrapper =
  /*#__PURE__*/
  css(
    _objectSpread(
      {},
      typography.normal.regular,
      {
        cursor: "pointer",
        padding: "12px 18px",
        position: "relative",
        lineHeight: "28px",
        zIndex: 999
      },
      textEllipsis,
      flexSpaceBetween,
      {
        alignItems: "center",
        display: "flex",
        "&:last-of-type": {
          border: 0
        },
        "&:hover": {
          backgroundColor: colors.gray.lightest
        }
      }
    )
  );
var labelWrap =
  /*#__PURE__*/
  css({
    userSelect: "none",
    overflow: "hidden",
    textOverflow: "ellipsis"
  });
var activeRow =
  /*#__PURE__*/
  css({
    backgroundColor: colors.gray.lightest
  });
var selectedRow =
  /*#__PURE__*/
  css(
    _objectSpread(
      {
        color: colors.violet.base
      },
      typography.normal.bold
    )
  );

var defaultProps = {
  rightElement: function rightElement(_ref) {
    var isSelected = _ref.isSelected,
      multiSelect = _ref.multiSelect;
    var iconClass = cx(
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
var Option =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(Option, _React$Component);
    function Option() {
      _classCallCheck(this, Option);
      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(Option).apply(this, arguments)
      );
    }
    _createClass(Option, [
      {
        key: "render",
        value: function render() {
          var _cx,
            _this = this;
          var _this$props = this.props,
            label = _this$props.label,
            isActive = _this$props.isActive,
            isSelected = _this$props.isSelected,
            rightElement = _this$props.rightElement,
            labelClassName = _this$props.labelClassName,
            className = _this$props.className;
          var _class = cx(
            rowWrapper,
            ((_cx = {}),
            _defineProperty(_cx, activeRow, isActive),
            _defineProperty(_cx, selectedRow, isSelected),
            _cx),
            className
          );
          return createElement(
            Control,
            Object.assign({}, this.props, {
              checked: this.props.isSelected,
              type: this.props.multiSelect ? "checkbox" : "radio",
              className: _class
            }),
            function() {
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
                rightElement(_this.props),
                createElement(Ink, null)
              );
            }
          );
        }
      }
    ]);
    return Option;
  })(Component);
Option.defaultProps = defaultProps;

var wrapper$1 =
  /*#__PURE__*/
  css({
    display: "flex"
  });
var selectStyle =
  /*#__PURE__*/
  css({
    width: "80px",
    marginBottom: 0
  });
var combinedLabelStyle =
  /*#__PURE__*/
  css({
    zIndex: 1
  });

var PhoneNumberInput =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(PhoneNumberInput, _React$Component);
    function PhoneNumberInput() {
      var _this;
      _classCallCheck(this, PhoneNumberInput);
      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(PhoneNumberInput).apply(this, arguments)
      );
      _this.onCountrySelect = function(countryCode) {
        _this.props.onChange({
          countryCode: countryCode,
          phone: _this.props.phone
        });
      };
      _this.onNumberChange = function(value) {
        var _value = value.replace(/\D/g, "");
        if (_value === _this.props.phone) {
          return;
        }
        _this.props.onChange({
          countryCode: _this.props.countryCode,
          phone: _value
        });
      };
      return _this;
    }
    _createClass(PhoneNumberInput, [
      {
        key: "render",
        value: function render() {
          var _this$props = this.props,
            phone = _this$props.phone,
            countryCode = _this$props.countryCode,
            className = _this$props.className,
            selectProps = _this$props.selectProps,
            inputProps = _this$props.inputProps,
            required = _this$props.required,
            placeholder = _this$props.placeholder;
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
                  className: cx(
                    selectStyle,
                    selectProps && selectProps.className
                  )
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
    ]);
    return PhoneNumberInput;
  })(Component);

var timePickerWrap =
  /*#__PURE__*/
  css({
    display: "flex",
    alignItems: "center",
    border: "1px solid ".concat(colors.gray.light),
    borderRadius: "3px",
    cursor: "pointer",
    "&:not([disabled]):hover": {
      background: colors.gray.light
    }
  });
var timePickerSelected =
  /*#__PURE__*/
  css({
    backgroundColor: colors.gray.lighter
  });
var hourPicker =
  /*#__PURE__*/
  css({
    borderRadius: "3px 0px 0px 3px",
    borderRight: "none"
  });
var seperator =
  /*#__PURE__*/
  css({
    color: colors.gray.dark,
    lineHeight: "40px"
  });
var minutePicker =
  /*#__PURE__*/
  css({
    borderLeft: "none",
    borderRadius: "0px 3px 3px 0px"
  });
var optionStyle =
  /*#__PURE__*/
  css({
    width: "100px"
  });

var HOURS =
  /*#__PURE__*/
  _toConsumableArray(Array(12)).map(function(_, i) {
    return ("00" + (i + 1).toString(10)).slice(-2);
  });
var MINUTES =
  /*#__PURE__*/
  _toConsumableArray(Array(4)).map(function(_, i) {
    return ("00" + (i * 15).toString(10)).slice(-2);
  });
var iconStyle$1 =
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
var buttonStyle =
  /*#__PURE__*/
  css({
    padding: "15px 20px",
    fontSize: "12px",
    color: colors.gray.darker,
    lineHeight: "9px"
  });
var modifiers$1 = {
  preventOverflow: {
    enabled: false
  },
  flip: {
    enabled: false
  }
};
var TimePicker = function TimePicker(props) {
  var _cx;
  var selectedHour = props.selectedHour,
    selectedMinute = props.selectedMinute,
    onHourChange = props.onHourChange,
    onMinuteChange = props.onMinuteChange;
  var selected = !!selectedHour || selectedMinute !== undefined;
  return createElement(
    "div",
    {
      className: cx(
        ((_cx = {}),
        _defineProperty(_cx, timePickerWrap, true),
        _defineProperty(_cx, timePickerSelected, selected),
        _cx)
      )
    },
    createElement(
      DropDown,
      {
        labelClassName: hourPicker,
        isSelected: selected,
        labelComponent: function labelComponent(_ref) {
          var isOpen = _ref.isOpen,
            toggleDropdown = _ref.toggleDropdown;
          return createElement(
            "div",
            {
              onClick: function onClick() {
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
          );
        },
        placement: "bottom-start",
        modifiers: modifiers$1
      },
      function(_ref2) {
        var toggle = _ref2.toggle;
        return createElement(
          OptionGroupRadio,
          {
            onChange: function onChange(value) {
              onHourChange(value);
              toggle();
            },
            selected: selectedHour,
            className: optionStyle
          },
          HOURS.map(function(hour) {
            return createElement(Option, {
              key: hour,
              value: parseInt(hour, 10),
              label: hour,
              className: optionStyle
            });
          })
        );
      }
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
        labelComponent: function labelComponent(_ref3) {
          var isOpen = _ref3.isOpen,
            toggleDropdown = _ref3.toggleDropdown;
          return createElement(
            "div",
            {
              onClick: function onClick() {
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
          );
        },
        placement: "bottom-start",
        modifiers: modifiers$1
      },
      function(_ref4) {
        var toggle = _ref4.toggle;
        return createElement(
          OptionGroupRadio,
          {
            onChange: function onChange(value) {
              onMinuteChange(value);
              toggle();
            },
            selected: selectedMinute,
            className: optionStyle
          },
          MINUTES.map(function(min) {
            return createElement(Option, {
              key: min,
              value: parseInt(min, 10),
              label: min,
              className: optionStyle
            });
          })
        );
      }
    )
  );
};

var Text = function Text(_ref) {
  var typography = _ref.typography,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? colors.gray.darker : _ref$color,
    children = _ref.children,
    className = _ref.className;
  var _className =
    /*#__PURE__*/
    css(
      _objectSpread({}, typography, {
        color: color
      })
    );
  return React__default.createElement(
    "span",
    {
      className: cx(_className, className)
    },
    children
  );
};

var messageWrapper =
  /*#__PURE__*/
  css(
    _objectSpread(
      {
        borderRadius: constants.borderRadius
      },
      typography.normal.regular,
      {
        color: colors.white.base,
        height: 46,
        display: "flex",
        alignItems: "center",
        padding: 20,
        "> i": {
          marginRight: 10
        }
      }
    )
  );

var Message = function Message(_ref) {
  var intent = _ref.intent,
    className = _ref.className,
    text = _ref.text;
  var bColor = _colors[intent];
  var iconClass = cx("pi", {
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
        .map(function(s) {
          return s.charAt(0).toUpperCase() + s.slice(1);
        })
        .join(" ")
    : str;
}

function getShortenedNumber(num) {
  var toFixed =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var formattedNum;
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
    formattedNum = "".concat(num.toFixed(toFixed));
  } else {
    formattedNum = "".concat(num);
  }
  return formattedNum;
}

function initGoogleAnalytics(gaId) {
  var _arguments = arguments;
  if (isBrowser) {
    (function(s, o, g) {
      window.GoogleAnalyticsObject = "ga";
      window.ga =
        window.ga ||
        function() {
          (window.ga.q = window.ga.q || []).push(_arguments);
        };
      window.ga.l = Date.now();
      var a = s.createElement(o);
      var m = s.getElementsByTagName(o)[0];
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
var isDesktop =
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
//# sourceMappingURL=index.module.js.map
