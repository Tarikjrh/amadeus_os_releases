import { ck as _objectWithoutPropertiesLoose, dW as _assertThisInitialized, dX as _setPrototypeOf, bR as getDefaultExportFromCjs, dt as _inheritsLoose, cl as _extends$1, f as r, dY as commonjsGlobal, r as reactExports, dZ as popperGenerator, d_ as hide, d$ as popperOffsets, e0 as computeStyles, e1 as eventListeners, e2 as offset$2, e3 as flip, e4 as preventOverflow, e5 as arrow, g as Io, e6 as placements, l as clsx$1, bP as requireReact, j as jsxRuntimeExports, S as Stack, ci as ListItemAvatar, al as Avatar, bm as ListItemText, a2 as Chip, d as Button, t as toast, e7 as fIsBetween, B as Box, T as Tooltip, I as IconButton, a as Iconify, c as Typography, e8 as ZOOM_STEPS, K as Divider, e9 as H_ZOOM_STEPS, D as Me, bX as useTheme, x as Select, M as MenuItem, cu as InputBase, au as MenuList, c9 as Popover, ds as LocalizationProvider, ea as AdapterDayjs, h as dayjs, z as Badge, a1 as LinearProgress, c3 as Drawer, ar as Scrollbar, ch as ListItemButton, an as fDate, as as fDateTime, q as styled, U, u as useSWR, s as supabase, eb as fDateRangeShortLabel, b as CircularProgress, bA as Collapse, cz as useColorScheme, ec as DEFAULT_CROSS_BRANCH_BUFFER_MINUTES, a6 as useUserBranches, bZ as useAllBranches, ed as PENDING_COLOR, ee as TravelBufferSelect, ax as Alert, ef as CROSS_BRANCH_BUFFER_OPTIONS, E as Ee, bp as ze, bG as fIsAfter, y as Card, C as CONFIG } from "./index-B08HRm4A.js";
import { t as toPropertyKey$1, _ as _typeof$1 } from "./toPropertyKey-BRoQIA86.js";
import { o, r as requirePropTypes$1 } from "./index-Di_Bgabu.js";
import { u as useGetStaff } from "./staff-BA54BIrN.js";
import { f as useAppointments, C as ClientQuickAddDialog, c as createAppointment, i as invalidateAppointments, g as updateAppointmentService, u as updateAppointment } from "./client-quick-add-dialog-Ckc4WOT8.js";
import { a as STATUS_OPACITY, D as DEFAULT_STATUS_OPACITY, g as getDefaultStylistColor, S as StylistColorPicker, C as ColorPicker, b as STYLIST_CALENDAR_COLORS } from "./stylist-color-picker-BOdxdsi0.js";
import { C as ConfirmDialog } from "./confirm-dialog-BCXWHns4.js";
import { x as updateEmployee } from "./staff-service-CYDKVOm2.js";
import { D as Dialog, a as DialogContent, b as DialogActions } from "./Dialog-C5RfKkDi.js";
import { D as DialogTitle } from "./DialogTitle-B3pdxJpB.js";
import { L as LoadingButton } from "./LoadingButton-DJQpPOpu.js";
import { u as useMediaQuery, a6 as DateCalendar } from "./useMobilePicker-D3Q_Tt3t.js";
import { C as CustomPopover, u as useAppointmentModalV2, A as AppointmentDialog } from "./useAppointmentModalV2-C4Ey8J54.js";
import { T as ToggleButtonGroup } from "./ToggleButtonGroup-CJXz0-w5.js";
import { b as ToggleButton } from "./ToggleButton-D4MfeHtt.js";
import { D as DatePicker } from "./DatePicker-D3PAml74.js";
import { T as TextField, F as FormControl, I as InputLabel } from "./TextField-CIuP940C.js";
import { A as Autocomplete } from "./Autocomplete-BReuRGf-.js";
import { F as FiltersResult, a as FiltersBlock, c as chipProps } from "./filters-result-CQUV8kzX.js";
import { C as ClientImportanceLabel } from "./index-Dha6iQ4E.js";
import { i as isBirthdayThisWeek, b as isBirthdayToday, a as ClientAutocompleteField } from "./client-autocomplete-C_9PlkEm.js";
import "./styles-Ddj8daWs.js";
import { B as BranchSelect } from "./branch-select--7cbYlRe.js";
import { u as useStaffData } from "./useStaffData-BIkbeKJv.js";
import { h as useGetServices, b as SERVICE_GROUPS } from "./services-UhlA7T7c.js";
import { I as InputAdornment } from "./InputAdornment-BqZyQBIE.js";
import "./form-provider-u_wAFv-h.js";
import "./index-C4JOln-R.js";
import "./getInternationalPhoneNumberPrefix-DWTIrIyx.js";
import "./client-service-swr-DnF01Wop.js";
import "./fields-CnHGHSTe.js";
import "./Checkbox-Br8xlIAK.js";
import "./DateTimePicker-D7Yo7M4k.js";
import "./schema-utils-CG9_JlGr.js";
import "./schemas-BVeYYbTr.js";
import "./coerce-5-WTXoHr.js";
import "./styles-BdIysWnF.js";
import "./with-selector-ClfCuV5M.js";
import "./render-location-type-B-TZb61z.js";
function nullishRank(value) {
  if (Number.isNaN(value)) return 1;
  if (value === null) return 2;
  if (value === void 0) return 3;
  return 0;
}
function compareAscending(a, b) {
  const aRank = nullishRank(a);
  const bRank = nullishRank(b);
  if (aRank < bRank) return -1;
  if (aRank > bRank) return 1;
  if (aRank !== 0) return 0;
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}
function compareValues(a, b, order) {
  return order === "asc" ? compareAscending(a, b) : compareAscending(b, a);
}
function orderBy(arr, criteria, orders) {
  return arr.slice().sort((a, b) => {
    const ordersLength = orders.length;
    for (let i = 0; i < criteria.length; i++) {
      const order = ordersLength > i ? orders[i] : orders[ordersLength - 1];
      const criterion = criteria[i];
      const criterionIsFunction = typeof criterion === "function";
      const valueA = criterionIsFunction ? criterion(a) : a[criterion];
      const valueB = criterionIsFunction ? criterion(b) : b[criterion];
      const result = compareValues(valueA, valueB, order);
      if (result !== 0) return result;
    }
    return 0;
  });
}
function _defineProperty$1(e, r2, t) {
  return (r2 = toPropertyKey$1(r2)) in e ? Object.defineProperty(e, r2, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r2] = t, e;
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o2, r2, i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r2 = 0; r2 < n.length; r2++) o2 = n[r2], -1 === t.indexOf(o2) && {}.propertyIsEnumerable.call(e, o2) && (i[o2] = e[o2]);
  }
  return i;
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r2) {
  for (var t = 0; t < r2.length; t++) {
    var o2 = r2[t];
    o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e, toPropertyKey$1(o2.key), o2);
  }
}
function _createClass(e, r2, t) {
  return r2 && _defineProperties(e.prototype, r2), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == _typeof$1(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(t, "prototype", {
    writable: false
  }), e && _setPrototypeOf(t, e);
}
function _arrayWithHoles(r2) {
  if (Array.isArray(r2)) return r2;
}
function _iterableToArrayLimit(r2, l) {
  var t = null == r2 ? null : "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o2 = false;
    try {
      if (i = (t = t.call(r2)).next, 0 === l) ;
      else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r3) {
      o2 = true, n = r3;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o2) throw n;
      }
    }
    return a;
  }
}
function _arrayLikeToArray$2(r2, a) {
  (null == a || a > r2.length) && (a = r2.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r2[e];
  return n;
}
function _unsupportedIterableToArray(r2, a) {
  if (r2) {
    if ("string" == typeof r2) return _arrayLikeToArray$2(r2, a);
    var t = {}.toString.call(r2).slice(8, -1);
    return "Object" === t && r2.constructor && (t = r2.constructor.name), "Map" === t || "Set" === t ? Array.from(r2) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$2(r2, a) : void 0;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r2, e) {
  return _arrayWithHoles(r2) || _iterableToArrayLimit(r2, e) || _unsupportedIterableToArray(r2, e) || _nonIterableRest();
}
var browser;
var hasRequiredBrowser;
function requireBrowser() {
  if (hasRequiredBrowser) return browser;
  hasRequiredBrowser = 1;
  var invariant2 = function(condition, format2, a, b, c, d, e, f) {
    if (!condition) {
      var error;
      if (format2 === void 0) {
        error = new Error(
          "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
        );
      } else {
        var args = [a, b, c, d, e, f];
        var argIndex = 0;
        error = new Error(
          format2.replace(/%s/g, function() {
            return args[argIndex++];
          })
        );
        error.name = "Invariant Violation";
      }
      error.framesToPop = 1;
      throw error;
    }
  };
  browser = invariant2;
  return browser;
}
var browserExports = requireBrowser();
const invariant = /* @__PURE__ */ getDefaultExportFromCjs(browserExports);
var noop$1 = function noop2() {
};
function uncontrolledPropTypes(controlledValues, displayName) {
  var propTypes2 = {};
  Object.keys(controlledValues).forEach(function(prop) {
    propTypes2[defaultKey(prop)] = noop$1;
  });
  return propTypes2;
}
function isProp(props, prop) {
  return props[prop] !== void 0;
}
function defaultKey(key) {
  return "default" + key.charAt(0).toUpperCase() + key.substr(1);
}
function canAcceptRef(component) {
  return !!component && (typeof component !== "function" || component.prototype && component.prototype.isReactComponent);
}
function componentWillMount() {
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== void 0) {
    this.setState(state);
  }
}
function componentWillReceiveProps(nextProps) {
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== void 0 ? state : null;
  }
  this.setState(updater.bind(this));
}
function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;
function polyfill(Component) {
  var prototype = Component.prototype;
  if (!prototype || !prototype.isReactComponent) {
    throw new Error("Can only polyfill class components");
  }
  if (typeof Component.getDerivedStateFromProps !== "function" && typeof prototype.getSnapshotBeforeUpdate !== "function") {
    return Component;
  }
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === "function") {
    foundWillMountName = "componentWillMount";
  } else if (typeof prototype.UNSAFE_componentWillMount === "function") {
    foundWillMountName = "UNSAFE_componentWillMount";
  }
  if (typeof prototype.componentWillReceiveProps === "function") {
    foundWillReceivePropsName = "componentWillReceiveProps";
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === "function") {
    foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
  }
  if (typeof prototype.componentWillUpdate === "function") {
    foundWillUpdateName = "componentWillUpdate";
  } else if (typeof prototype.UNSAFE_componentWillUpdate === "function") {
    foundWillUpdateName = "UNSAFE_componentWillUpdate";
  }
  if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
    var componentName = Component.displayName || Component.name;
    var newApiName = typeof Component.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
    throw Error(
      "Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + componentName + " uses " + newApiName + " but also contains the following legacy lifecycles:" + (foundWillMountName !== null ? "\n  " + foundWillMountName : "") + (foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "") + (foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks"
    );
  }
  if (typeof Component.getDerivedStateFromProps === "function") {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }
  if (typeof prototype.getSnapshotBeforeUpdate === "function") {
    if (typeof prototype.componentDidUpdate !== "function") {
      throw new Error(
        "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
      );
    }
    prototype.componentWillUpdate = componentWillUpdate;
    var componentDidUpdate = prototype.componentDidUpdate;
    prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
      var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }
  return Component;
}
var _jsxFileName = "/Users/jquense/src/uncontrollable/src/uncontrollable.js";
function uncontrollable(Component, controlledValues, methods) {
  if (methods === void 0) {
    methods = [];
  }
  var displayName = Component.displayName || Component.name || "Component";
  var canAcceptRef$1 = canAcceptRef(Component);
  var controlledProps = Object.keys(controlledValues);
  var PROPS_TO_OMIT = controlledProps.map(defaultKey);
  !(canAcceptRef$1 || !methods.length) ? invariant(false) : void 0;
  var UncontrolledComponent = /* @__PURE__ */ (function(_React$Component) {
    _inheritsLoose(UncontrolledComponent2, _React$Component);
    function UncontrolledComponent2() {
      var _this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.handlers = /* @__PURE__ */ Object.create(null);
      controlledProps.forEach(function(propName) {
        var handlerName = controlledValues[propName];
        var handleChange = function handleChange2(value) {
          if (_this.props[handlerName]) {
            var _this$props;
            _this._notifying = true;
            for (var _len2 = arguments.length, args2 = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args2[_key2 - 1] = arguments[_key2];
            }
            (_this$props = _this.props)[handlerName].apply(_this$props, [value].concat(args2));
            _this._notifying = false;
          }
          if (!_this.unmounted) _this.setState(function(_ref) {
            var _extends2;
            var values2 = _ref.values;
            return {
              values: _extends$1(/* @__PURE__ */ Object.create(null), values2, (_extends2 = {}, _extends2[propName] = value, _extends2))
            };
          });
        };
        _this.handlers[handlerName] = handleChange;
      });
      if (methods.length) _this.attachRef = function(ref) {
        _this.inner = ref;
      };
      var values = /* @__PURE__ */ Object.create(null);
      controlledProps.forEach(function(key) {
        values[key] = _this.props[defaultKey(key)];
      });
      _this.state = {
        values,
        prevProps: {}
      };
      return _this;
    }
    var _proto = UncontrolledComponent2.prototype;
    _proto.shouldComponentUpdate = function shouldComponentUpdate() {
      return !this._notifying;
    };
    UncontrolledComponent2.getDerivedStateFromProps = function getDerivedStateFromProps(props, _ref2) {
      var values = _ref2.values, prevProps = _ref2.prevProps;
      var nextState = {
        values: _extends$1(/* @__PURE__ */ Object.create(null), values),
        prevProps: {}
      };
      controlledProps.forEach(function(key) {
        nextState.prevProps[key] = props[key];
        if (!isProp(props, key) && isProp(prevProps, key)) {
          nextState.values[key] = props[defaultKey(key)];
        }
      });
      return nextState;
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      this.unmounted = true;
    };
    _proto.render = function render() {
      var _this2 = this;
      var _this$props2 = this.props, innerRef = _this$props2.innerRef, props = _objectWithoutPropertiesLoose(_this$props2, ["innerRef"]);
      PROPS_TO_OMIT.forEach(function(prop) {
        delete props[prop];
      });
      var newProps = {};
      controlledProps.forEach(function(propName) {
        var propValue = _this2.props[propName];
        newProps[propName] = propValue !== void 0 ? propValue : _this2.state.values[propName];
      });
      return r.createElement(Component, _extends$1({}, props, newProps, this.handlers, {
        ref: innerRef || this.attachRef
      }));
    };
    return UncontrolledComponent2;
  })(r.Component);
  polyfill(UncontrolledComponent);
  UncontrolledComponent.displayName = "Uncontrolled(" + displayName + ")";
  UncontrolledComponent.propTypes = _extends$1({
    innerRef: function innerRef() {
    }
  }, uncontrolledPropTypes(controlledValues));
  methods.forEach(function(method) {
    UncontrolledComponent.prototype[method] = function $proxiedMethod() {
      var _this$inner;
      return (_this$inner = this.inner)[method].apply(_this$inner, arguments);
    };
  });
  var WrappedComponent = UncontrolledComponent;
  if (r.forwardRef) {
    WrappedComponent = r.forwardRef(function(props, ref) {
      return r.createElement(UncontrolledComponent, _extends$1({}, props, {
        innerRef: ref,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }));
    });
    WrappedComponent.propTypes = UncontrolledComponent.propTypes;
  }
  WrappedComponent.ControlledComponent = Component;
  WrappedComponent.deferControlTo = function(newComponent, additions, nextMethods) {
    if (additions === void 0) {
      additions = {};
    }
    return uncontrollable(newComponent, _extends$1({}, controlledValues, additions), nextMethods);
  };
  return WrappedComponent;
}
var MILI = "milliseconds", SECONDS = "seconds", MINUTES = "minutes", HOURS = "hours", DAY = "day", WEEK = "week", MONTH = "month", YEAR = "year", DECADE = "decade", CENTURY = "century";
var multiplierMilli = {
  "milliseconds": 1,
  "seconds": 1e3,
  "minutes": 60 * 1e3,
  "hours": 60 * 60 * 1e3,
  "day": 24 * 60 * 60 * 1e3,
  "week": 7 * 24 * 60 * 60 * 1e3
};
var multiplierMonth = {
  "month": 1,
  "year": 12,
  "decade": 10 * 12,
  "century": 100 * 12
};
function daysOf(year2) {
  return [31, daysInFeb(year2), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}
function daysInFeb(year2) {
  return year2 % 4 === 0 && year2 % 100 !== 0 || year2 % 400 === 0 ? 29 : 28;
}
function add(d, num, unit) {
  d = new Date(d);
  switch (unit) {
    case MILI:
    case SECONDS:
    case MINUTES:
    case HOURS:
    case DAY:
    case WEEK:
      return addMillis(d, num * multiplierMilli[unit]);
    case MONTH:
    case YEAR:
    case DECADE:
    case CENTURY:
      return addMonths(d, num * multiplierMonth[unit]);
  }
  throw new TypeError('Invalid units: "' + unit + '"');
}
function addMillis(d, num) {
  var nextDate = new Date(+d + num);
  return solveDST(d, nextDate);
}
function addMonths(d, num) {
  var year2 = d.getFullYear(), month2 = d.getMonth(), day2 = d.getDate(), totalMonths = year2 * 12 + month2 + num, nextYear = Math.trunc(totalMonths / 12), nextMonth = totalMonths % 12, nextDay = Math.min(day2, daysOf(nextYear)[nextMonth]);
  var nextDate = new Date(d);
  nextDate.setFullYear(nextYear);
  nextDate.setDate(1);
  nextDate.setMonth(nextMonth);
  nextDate.setDate(nextDay);
  return nextDate;
}
function solveDST(currentDate, nextDate) {
  var currentOffset = currentDate.getTimezoneOffset(), nextOffset = nextDate.getTimezoneOffset();
  var diffMinutes = nextOffset - currentOffset;
  return new Date(+nextDate + diffMinutes * multiplierMilli["minutes"]);
}
function subtract(d, num, unit) {
  return add(d, -num, unit);
}
function startOf(d, unit, firstOfWeek) {
  d = new Date(d);
  switch (unit) {
    case CENTURY:
    case DECADE:
    case YEAR:
      d = month(d, 0);
    case MONTH:
      d = date(d, 1);
    case WEEK:
    case DAY:
      d = hours(d, 0);
    case HOURS:
      d = minutes(d, 0);
    case MINUTES:
      d = seconds(d, 0);
    case SECONDS:
      d = milliseconds(d, 0);
  }
  if (unit === DECADE)
    d = subtract(d, year(d) % 10, "year");
  if (unit === CENTURY)
    d = subtract(d, year(d) % 100, "year");
  if (unit === WEEK)
    d = weekday(d, 0, firstOfWeek);
  return d;
}
function endOf(d, unit, firstOfWeek) {
  d = new Date(d);
  d = startOf(d, unit, firstOfWeek);
  switch (unit) {
    case CENTURY:
    case DECADE:
    case YEAR:
    case MONTH:
    case WEEK:
      d = add(d, 1, unit);
      d = subtract(d, 1, DAY);
      d.setHours(23, 59, 59, 999);
      break;
    case DAY:
      d.setHours(23, 59, 59, 999);
      break;
    case HOURS:
    case MINUTES:
    case SECONDS:
      d = add(d, 1, unit);
      d = subtract(d, 1, MILI);
  }
  return d;
}
var eq = createComparer(function(a, b) {
  return a === b;
});
var neq = createComparer(function(a, b) {
  return a !== b;
});
var gt = createComparer(function(a, b) {
  return a > b;
});
var gte = createComparer(function(a, b) {
  return a >= b;
});
var lt = createComparer(function(a, b) {
  return a < b;
});
var lte = createComparer(function(a, b) {
  return a <= b;
});
function min() {
  return new Date(Math.min.apply(Math, arguments));
}
function max() {
  return new Date(Math.max.apply(Math, arguments));
}
function inRange$1(day2, min2, max2, unit) {
  unit = unit || "day";
  return (!min2 || gte(day2, min2, unit)) && (!max2 || lte(day2, max2, unit));
}
var milliseconds = createAccessor("Milliseconds");
var seconds = createAccessor("Seconds");
var minutes = createAccessor("Minutes");
var hours = createAccessor("Hours");
var day = createAccessor("Day");
var date = createAccessor("Date");
var month = createAccessor("Month");
var year = createAccessor("FullYear");
function decade(d, val) {
  return val === void 0 ? year(startOf(d, DECADE)) : add(d, val + 10, YEAR);
}
function century(d, val) {
  return val === void 0 ? year(startOf(d, CENTURY)) : add(d, val + 100, YEAR);
}
function weekday(d, val, firstDay) {
  var w = (day(d) + 7 - (firstDay || 0)) % 7;
  return val === void 0 ? w : add(d, val - w, DAY);
}
function diff$1(date1, date2, unit, asFloat) {
  var dividend, divisor, result;
  switch (unit) {
    case MILI:
    case SECONDS:
    case MINUTES:
    case HOURS:
    case DAY:
    case WEEK:
      dividend = date2.getTime() - date1.getTime();
      break;
    case MONTH:
    case YEAR:
    case DECADE:
    case CENTURY:
      dividend = (year(date2) - year(date1)) * 12 + month(date2) - month(date1);
      break;
    default:
      throw new TypeError('Invalid units: "' + unit + '"');
  }
  switch (unit) {
    case MILI:
      divisor = 1;
      break;
    case SECONDS:
      divisor = 1e3;
      break;
    case MINUTES:
      divisor = 1e3 * 60;
      break;
    case HOURS:
      divisor = 1e3 * 60 * 60;
      break;
    case DAY:
      divisor = 1e3 * 60 * 60 * 24;
      break;
    case WEEK:
      divisor = 1e3 * 60 * 60 * 24 * 7;
      break;
    case MONTH:
      divisor = 1;
      break;
    case YEAR:
      divisor = 12;
      break;
    case DECADE:
      divisor = 120;
      break;
    case CENTURY:
      divisor = 1200;
      break;
    default:
      throw new TypeError('Invalid units: "' + unit + '"');
  }
  result = dividend / divisor;
  return asFloat ? result : Math.round(result);
}
function createAccessor(method) {
  var hourLength = (function(method2) {
    switch (method2) {
      case "Milliseconds":
        return 36e5;
      case "Seconds":
        return 3600;
      case "Minutes":
        return 60;
      case "Hours":
        return 1;
      default:
        return null;
    }
  })(method);
  return function(d, val) {
    if (val === void 0)
      return d["get" + method]();
    var dateOut = new Date(d);
    dateOut["set" + method](val);
    if (hourLength && dateOut["get" + method]() != val && (method === "Hours" || val >= hourLength && dateOut.getHours() - d.getHours() < Math.floor(val / hourLength))) {
      dateOut["set" + method](val + hourLength);
    }
    return dateOut;
  };
}
function createComparer(operator) {
  return function(a, b, unit) {
    return operator(+startOf(a, unit), +startOf(b, unit));
  };
}
const dates = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  add,
  century,
  date,
  day,
  decade,
  diff: diff$1,
  endOf,
  eq,
  gt,
  gte,
  hours,
  inRange: inRange$1,
  lt,
  lte,
  max,
  milliseconds,
  min,
  minutes,
  month,
  neq,
  seconds,
  startOf,
  subtract,
  weekday,
  year
}, Symbol.toStringTag, { value: "Module" }));
function _arrayWithoutHoles(r2) {
  if (Array.isArray(r2)) return _arrayLikeToArray$2(r2);
}
function _iterableToArray(r2) {
  if ("undefined" != typeof Symbol && null != r2[Symbol.iterator] || null != r2["@@iterator"]) return Array.from(r2);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(r2) {
  return _arrayWithoutHoles(r2) || _iterableToArray(r2) || _unsupportedIterableToArray(r2) || _nonIterableSpread();
}
var _baseSlice;
var hasRequired_baseSlice;
function require_baseSlice() {
  if (hasRequired_baseSlice) return _baseSlice;
  hasRequired_baseSlice = 1;
  function baseSlice(array, start, end) {
    var index = -1, length = array.length;
    if (start < 0) {
      start = -start > length ? 0 : length + start;
    }
    end = end > length ? length : end;
    if (end < 0) {
      end += length;
    }
    length = start > end ? 0 : end - start >>> 0;
    start >>>= 0;
    var result = Array(length);
    while (++index < length) {
      result[index] = array[index + start];
    }
    return result;
  }
  _baseSlice = baseSlice;
  return _baseSlice;
}
var eq_1;
var hasRequiredEq;
function requireEq() {
  if (hasRequiredEq) return eq_1;
  hasRequiredEq = 1;
  function eq2(value, other) {
    return value === other || value !== value && other !== other;
  }
  eq_1 = eq2;
  return eq_1;
}
var _freeGlobal;
var hasRequired_freeGlobal;
function require_freeGlobal() {
  if (hasRequired_freeGlobal) return _freeGlobal;
  hasRequired_freeGlobal = 1;
  var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  _freeGlobal = freeGlobal;
  return _freeGlobal;
}
var _root;
var hasRequired_root;
function require_root() {
  if (hasRequired_root) return _root;
  hasRequired_root = 1;
  var freeGlobal = require_freeGlobal();
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal || freeSelf || Function("return this")();
  _root = root;
  return _root;
}
var _Symbol;
var hasRequired_Symbol;
function require_Symbol() {
  if (hasRequired_Symbol) return _Symbol;
  hasRequired_Symbol = 1;
  var root = require_root();
  var Symbol2 = root.Symbol;
  _Symbol = Symbol2;
  return _Symbol;
}
var _getRawTag;
var hasRequired_getRawTag;
function require_getRawTag() {
  if (hasRequired_getRawTag) return _getRawTag;
  hasRequired_getRawTag = 1;
  var Symbol2 = require_Symbol();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var nativeObjectToString = objectProto.toString;
  var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
      value[symToStringTag] = void 0;
      var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }
  _getRawTag = getRawTag;
  return _getRawTag;
}
var _objectToString;
var hasRequired_objectToString;
function require_objectToString() {
  if (hasRequired_objectToString) return _objectToString;
  hasRequired_objectToString = 1;
  var objectProto = Object.prototype;
  var nativeObjectToString = objectProto.toString;
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }
  _objectToString = objectToString;
  return _objectToString;
}
var _baseGetTag;
var hasRequired_baseGetTag;
function require_baseGetTag() {
  if (hasRequired_baseGetTag) return _baseGetTag;
  hasRequired_baseGetTag = 1;
  var Symbol2 = require_Symbol(), getRawTag = require_getRawTag(), objectToString = require_objectToString();
  var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
  var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  _baseGetTag = baseGetTag;
  return _baseGetTag;
}
var isObject_1;
var hasRequiredIsObject;
function requireIsObject() {
  if (hasRequiredIsObject) return isObject_1;
  hasRequiredIsObject = 1;
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  isObject_1 = isObject;
  return isObject_1;
}
var isFunction_1;
var hasRequiredIsFunction;
function requireIsFunction() {
  if (hasRequiredIsFunction) return isFunction_1;
  hasRequiredIsFunction = 1;
  var baseGetTag = require_baseGetTag(), isObject = requireIsObject();
  var asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
  function isFunction2(value) {
    if (!isObject(value)) {
      return false;
    }
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  isFunction_1 = isFunction2;
  return isFunction_1;
}
var isLength_1;
var hasRequiredIsLength;
function requireIsLength() {
  if (hasRequiredIsLength) return isLength_1;
  hasRequiredIsLength = 1;
  var MAX_SAFE_INTEGER = 9007199254740991;
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  isLength_1 = isLength;
  return isLength_1;
}
var isArrayLike_1;
var hasRequiredIsArrayLike;
function requireIsArrayLike() {
  if (hasRequiredIsArrayLike) return isArrayLike_1;
  hasRequiredIsArrayLike = 1;
  var isFunction2 = requireIsFunction(), isLength = requireIsLength();
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction2(value);
  }
  isArrayLike_1 = isArrayLike;
  return isArrayLike_1;
}
var _isIndex;
var hasRequired_isIndex;
function require_isIndex() {
  if (hasRequired_isIndex) return _isIndex;
  hasRequired_isIndex = 1;
  var MAX_SAFE_INTEGER = 9007199254740991;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  _isIndex = isIndex;
  return _isIndex;
}
var _isIterateeCall;
var hasRequired_isIterateeCall;
function require_isIterateeCall() {
  if (hasRequired_isIterateeCall) return _isIterateeCall;
  hasRequired_isIterateeCall = 1;
  var eq2 = requireEq(), isArrayLike = requireIsArrayLike(), isIndex = require_isIndex(), isObject = requireIsObject();
  function isIterateeCall(value, index, object) {
    if (!isObject(object)) {
      return false;
    }
    var type = typeof index;
    if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
      return eq2(object[index], value);
    }
    return false;
  }
  _isIterateeCall = isIterateeCall;
  return _isIterateeCall;
}
var _trimmedEndIndex;
var hasRequired_trimmedEndIndex;
function require_trimmedEndIndex() {
  if (hasRequired_trimmedEndIndex) return _trimmedEndIndex;
  hasRequired_trimmedEndIndex = 1;
  var reWhitespace = /\s/;
  function trimmedEndIndex(string) {
    var index = string.length;
    while (index-- && reWhitespace.test(string.charAt(index))) {
    }
    return index;
  }
  _trimmedEndIndex = trimmedEndIndex;
  return _trimmedEndIndex;
}
var _baseTrim;
var hasRequired_baseTrim;
function require_baseTrim() {
  if (hasRequired_baseTrim) return _baseTrim;
  hasRequired_baseTrim = 1;
  var trimmedEndIndex = require_trimmedEndIndex();
  var reTrimStart = /^\s+/;
  function baseTrim(string) {
    return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
  }
  _baseTrim = baseTrim;
  return _baseTrim;
}
var isObjectLike_1;
var hasRequiredIsObjectLike;
function requireIsObjectLike() {
  if (hasRequiredIsObjectLike) return isObjectLike_1;
  hasRequiredIsObjectLike = 1;
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  isObjectLike_1 = isObjectLike;
  return isObjectLike_1;
}
var isSymbol_1;
var hasRequiredIsSymbol;
function requireIsSymbol() {
  if (hasRequiredIsSymbol) return isSymbol_1;
  hasRequiredIsSymbol = 1;
  var baseGetTag = require_baseGetTag(), isObjectLike = requireIsObjectLike();
  var symbolTag = "[object Symbol]";
  function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
  }
  isSymbol_1 = isSymbol;
  return isSymbol_1;
}
var toNumber_1;
var hasRequiredToNumber;
function requireToNumber() {
  if (hasRequiredToNumber) return toNumber_1;
  hasRequiredToNumber = 1;
  var baseTrim = require_baseTrim(), isObject = requireIsObject(), isSymbol = requireIsSymbol();
  var NAN = 0 / 0;
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  var reIsBinary = /^0b[01]+$/i;
  var reIsOctal = /^0o[0-7]+$/i;
  var freeParseInt = parseInt;
  function toNumber(value) {
    if (typeof value == "number") {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == "function" ? value.valueOf() : value;
      value = isObject(other) ? other + "" : other;
    }
    if (typeof value != "string") {
      return value === 0 ? value : +value;
    }
    value = baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }
  toNumber_1 = toNumber;
  return toNumber_1;
}
var toFinite_1;
var hasRequiredToFinite;
function requireToFinite() {
  if (hasRequiredToFinite) return toFinite_1;
  hasRequiredToFinite = 1;
  var toNumber = requireToNumber();
  var INFINITY = 1 / 0, MAX_INTEGER = 17976931348623157e292;
  function toFinite(value) {
    if (!value) {
      return value === 0 ? value : 0;
    }
    value = toNumber(value);
    if (value === INFINITY || value === -INFINITY) {
      var sign = value < 0 ? -1 : 1;
      return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
  }
  toFinite_1 = toFinite;
  return toFinite_1;
}
var toInteger_1;
var hasRequiredToInteger;
function requireToInteger() {
  if (hasRequiredToInteger) return toInteger_1;
  hasRequiredToInteger = 1;
  var toFinite = requireToFinite();
  function toInteger(value) {
    var result = toFinite(value), remainder = result % 1;
    return result === result ? remainder ? result - remainder : result : 0;
  }
  toInteger_1 = toInteger;
  return toInteger_1;
}
var chunk_1;
var hasRequiredChunk;
function requireChunk() {
  if (hasRequiredChunk) return chunk_1;
  hasRequiredChunk = 1;
  var baseSlice = require_baseSlice(), isIterateeCall = require_isIterateeCall(), toInteger = requireToInteger();
  var nativeCeil = Math.ceil, nativeMax = Math.max;
  function chunk2(array, size2, guard) {
    if (guard ? isIterateeCall(array, size2, guard) : size2 === void 0) {
      size2 = 1;
    } else {
      size2 = nativeMax(toInteger(size2), 0);
    }
    var length = array == null ? 0 : array.length;
    if (!length || size2 < 1) {
      return [];
    }
    var index = 0, resIndex = 0, result = Array(nativeCeil(length / size2));
    while (index < length) {
      result[resIndex++] = baseSlice(array, index, index += size2);
    }
    return result;
  }
  chunk_1 = chunk2;
  return chunk_1;
}
var chunkExports = requireChunk();
const chunk = /* @__PURE__ */ getDefaultExportFromCjs(chunkExports);
function ownerDocument$3(node) {
  return node && node.ownerDocument || document;
}
function ownerWindow$1(node) {
  const doc = ownerDocument$3(node);
  return doc && doc.defaultView || window;
}
function getComputedStyle$1(node, psuedoElement) {
  return ownerWindow$1(node).getComputedStyle(node, psuedoElement);
}
const rUpper = /([A-Z])/g;
function hyphenate$1(string) {
  return string.replace(rUpper, "-$1").toLowerCase();
}
const msPattern = /^ms-/;
function hyphenateStyleName(string) {
  return hyphenate$1(string).replace(msPattern, "-ms-");
}
const supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function isTransform$1(value) {
  return !!(value && supportedTransforms.test(value));
}
function style(node, property) {
  let css2 = "";
  let transforms = "";
  if (typeof property === "string") {
    return node.style.getPropertyValue(hyphenateStyleName(property)) || getComputedStyle$1(node).getPropertyValue(hyphenateStyleName(property));
  }
  Object.keys(property).forEach((key) => {
    const value = property[key];
    if (!value && value !== 0) {
      node.style.removeProperty(hyphenateStyleName(key));
    } else if (isTransform$1(key)) {
      transforms += `${key}(${value}) `;
    } else {
      css2 += `${hyphenateStyleName(key)}: ${value};`;
    }
  });
  if (transforms) {
    css2 += `transform: ${transforms};`;
  }
  node.style.cssText += `;${css2}`;
}
function contains$2(context, node) {
  if (context.contains) return context.contains(node);
  if (context.compareDocumentPosition) return context === node || !!(context.compareDocumentPosition(node) & 16);
}
function isDocument$1(element) {
  return "nodeType" in element && element.nodeType === document.DOCUMENT_NODE;
}
function isWindow$1(node) {
  if ("window" in node && node.window === node) return node;
  if (isDocument$1(node)) return node.defaultView || false;
  return false;
}
function getscrollAccessor(offset2) {
  const prop = offset2 === "pageXOffset" ? "scrollLeft" : "scrollTop";
  function scrollAccessor(node, val) {
    const win = isWindow$1(node);
    if (val === void 0) {
      return win ? win[offset2] : node[prop];
    }
    if (win) {
      win.scrollTo(win[offset2], val);
    } else {
      node[prop] = val;
    }
  }
  return scrollAccessor;
}
const scrollLeft$1 = getscrollAccessor("pageXOffset");
const scrollTop$1 = getscrollAccessor("pageYOffset");
function offset$1(node) {
  const doc = ownerDocument$3(node);
  let box = {
    top: 0,
    left: 0,
    height: 0,
    width: 0
  };
  const docElem = doc && doc.documentElement;
  if (!docElem || !contains$2(docElem, node)) return box;
  if (node.getBoundingClientRect !== void 0) box = node.getBoundingClientRect();
  box = {
    top: box.top + scrollTop$1(docElem) - (docElem.clientTop || 0),
    left: box.left + scrollLeft$1(docElem) - (docElem.clientLeft || 0),
    width: box.width,
    height: box.height
  };
  return box;
}
const isHTMLElement = (e) => !!e && "offsetParent" in e;
function offsetParent$1(node) {
  const doc = ownerDocument$3(node);
  let parent = node && node.offsetParent;
  while (isHTMLElement(parent) && parent.nodeName !== "HTML" && style(parent, "position") === "static") {
    parent = parent.offsetParent;
  }
  return parent || doc.documentElement;
}
const nodeName = (node) => node.nodeName && node.nodeName.toLowerCase();
function position$1(node, offsetParent2) {
  let parentOffset = {
    top: 0,
    left: 0
  };
  let offset2;
  if (style(node, "position") === "fixed") {
    offset2 = node.getBoundingClientRect();
  } else {
    const parent = offsetParent2 || offsetParent$1(node);
    offset2 = offset$1(node);
    if (nodeName(parent) !== "html") parentOffset = offset$1(parent);
    const borderTop = String(style(parent, "borderTopWidth") || 0);
    parentOffset.top += parseInt(borderTop, 10) - scrollTop$1(parent) || 0;
    const borderLeft = String(style(parent, "borderLeftWidth") || 0);
    parentOffset.left += parseInt(borderLeft, 10) - scrollLeft$1(parent) || 0;
  }
  const marginTop = String(style(node, "marginTop") || 0);
  const marginLeft = String(style(node, "marginLeft") || 0);
  return {
    ...offset2,
    top: offset2.top - parentOffset.top - (parseInt(marginTop, 10) || 0),
    left: offset2.left - parentOffset.left - (parseInt(marginLeft, 10) || 0)
  };
}
const canUseDOM$2 = !!(typeof window !== "undefined" && window.document && window.document.createElement);
let prev = (/* @__PURE__ */ new Date()).getTime();
function fallback(fn2) {
  const curr = (/* @__PURE__ */ new Date()).getTime();
  const ms = Math.max(0, 16 - (curr - prev));
  const handle = setTimeout(fn2, ms);
  prev = curr;
  return handle;
}
const vendors = ["", "webkit", "moz", "o", "ms"];
let cancelMethod = "clearTimeout";
let rafImpl = fallback;
const getKey$1 = (vendor, k) => `${vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1))}AnimationFrame`;
if (canUseDOM$2) {
  vendors.some((vendor) => {
    const rafMethod = getKey$1(vendor, "request");
    if (rafMethod in window) {
      cancelMethod = getKey$1(vendor, "cancel");
      rafImpl = (cb) => window[rafMethod](cb);
    }
    return !!rafImpl;
  });
}
const cancel = (id) => {
  if (typeof window[cancelMethod] === "function") window[cancelMethod](id);
};
const request = rafImpl;
const canUseDOM$1 = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var optionsSupported$1 = false;
var onceSupported$1 = false;
try {
  var options = {
    get passive() {
      return optionsSupported$1 = true;
    },
    get once() {
      return onceSupported$1 = optionsSupported$1 = true;
    }
  };
  if (canUseDOM$1) {
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, true);
  }
} catch (e) {
}
function addEventListener$3(node, eventName, handler, options2) {
  if (options2 && typeof options2 !== "boolean" && !onceSupported$1) {
    var once = options2.once, capture = options2.capture;
    var wrappedHandler = handler;
    if (!onceSupported$1 && once) {
      wrappedHandler = handler.__once || function onceHandler(event) {
        this.removeEventListener(eventName, onceHandler, capture);
        handler.call(this, event);
      };
      handler.__once = wrappedHandler;
    }
    node.addEventListener(eventName, wrappedHandler, optionsSupported$1 ? options2 : capture);
  }
  node.addEventListener(eventName, handler, options2);
}
function useCommittedRef(value) {
  const ref = reactExports.useRef(value);
  reactExports.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref;
}
function useEventCallback(fn2) {
  const ref = useCommittedRef(fn2);
  return reactExports.useCallback(function(...args) {
    return ref.current && ref.current(...args);
  }, [ref]);
}
function useCallbackRef() {
  return reactExports.useState(null);
}
function useMounted() {
  const mounted = reactExports.useRef(true);
  const isMounted = reactExports.useRef(() => mounted.current);
  reactExports.useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}
function useSafeState(state) {
  const isMounted = useMounted();
  return [state[0], reactExports.useCallback((nextState) => {
    if (!isMounted()) return;
    return state[1](nextState);
  }, [isMounted, state[1]])];
}
var createPopper = popperGenerator({
  defaultModifiers: [hide, popperOffsets, computeStyles, eventListeners, offset$2, flip, preventOverflow, arrow]
});
var initialPopperStyles = function initialPopperStyles2(position2) {
  return {
    position: position2,
    top: "0",
    left: "0",
    opacity: "0",
    pointerEvents: "none"
  };
};
var disabledApplyStylesModifier = {
  name: "applyStyles",
  enabled: false
};
var ariaDescribedByModifier = {
  name: "ariaDescribedBy",
  enabled: true,
  phase: "afterWrite",
  effect: function effect(_ref) {
    var state = _ref.state;
    return function() {
      var _state$elements = state.elements, reference = _state$elements.reference, popper = _state$elements.popper;
      if ("removeAttribute" in reference) {
        var ids = (reference.getAttribute("aria-describedby") || "").split(",").filter(function(id) {
          return id.trim() !== popper.id;
        });
        if (!ids.length) reference.removeAttribute("aria-describedby");
        else reference.setAttribute("aria-describedby", ids.join(","));
      }
    };
  },
  fn: function fn(_ref2) {
    var _popper$getAttribute;
    var state = _ref2.state;
    var _state$elements2 = state.elements, popper = _state$elements2.popper, reference = _state$elements2.reference;
    var role = (_popper$getAttribute = popper.getAttribute("role")) == null ? void 0 : _popper$getAttribute.toLowerCase();
    if (popper.id && role === "tooltip" && "setAttribute" in reference) {
      var ids = reference.getAttribute("aria-describedby");
      if (ids && ids.split(",").indexOf(popper.id) !== -1) {
        return;
      }
      reference.setAttribute("aria-describedby", ids ? ids + "," + popper.id : popper.id);
    }
  }
};
var EMPTY_MODIFIERS = [];
function usePopper(referenceElement, popperElement, _temp) {
  var _ref3 = _temp === void 0 ? {} : _temp, _ref3$enabled = _ref3.enabled, enabled = _ref3$enabled === void 0 ? true : _ref3$enabled, _ref3$placement = _ref3.placement, placement = _ref3$placement === void 0 ? "bottom" : _ref3$placement, _ref3$strategy = _ref3.strategy, strategy = _ref3$strategy === void 0 ? "absolute" : _ref3$strategy, _ref3$modifiers = _ref3.modifiers, modifiers = _ref3$modifiers === void 0 ? EMPTY_MODIFIERS : _ref3$modifiers, config = _objectWithoutPropertiesLoose(_ref3, ["enabled", "placement", "strategy", "modifiers"]);
  var popperInstanceRef = reactExports.useRef();
  var update = reactExports.useCallback(function() {
    var _popperInstanceRef$cu;
    (_popperInstanceRef$cu = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu.update();
  }, []);
  var forceUpdate = reactExports.useCallback(function() {
    var _popperInstanceRef$cu2;
    (_popperInstanceRef$cu2 = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu2.forceUpdate();
  }, []);
  var _useSafeState = useSafeState(reactExports.useState({
    placement,
    update,
    forceUpdate,
    attributes: {},
    styles: {
      popper: initialPopperStyles(strategy),
      arrow: {}
    }
  })), popperState = _useSafeState[0], setState = _useSafeState[1];
  var updateModifier = reactExports.useMemo(function() {
    return {
      name: "updateStateModifier",
      enabled: true,
      phase: "write",
      requires: ["computeStyles"],
      fn: function fn2(_ref4) {
        var state = _ref4.state;
        var styles = {};
        var attributes = {};
        Object.keys(state.elements).forEach(function(element) {
          styles[element] = state.styles[element];
          attributes[element] = state.attributes[element];
        });
        setState({
          state,
          styles,
          attributes,
          update,
          forceUpdate,
          placement: state.placement
        });
      }
    };
  }, [update, forceUpdate, setState]);
  reactExports.useEffect(function() {
    if (!popperInstanceRef.current || !enabled) return;
    popperInstanceRef.current.setOptions({
      placement,
      strategy,
      modifiers: [].concat(modifiers, [updateModifier, disabledApplyStylesModifier])
    });
  }, [strategy, placement, updateModifier, enabled]);
  reactExports.useEffect(function() {
    if (!enabled || referenceElement == null || popperElement == null) {
      return void 0;
    }
    popperInstanceRef.current = createPopper(referenceElement, popperElement, _extends$1({}, config, {
      placement,
      strategy,
      modifiers: [].concat(modifiers, [ariaDescribedByModifier, updateModifier])
    }));
    return function() {
      if (popperInstanceRef.current != null) {
        popperInstanceRef.current.destroy();
        popperInstanceRef.current = void 0;
        setState(function(s) {
          return _extends$1({}, s, {
            attributes: {},
            styles: {
              popper: initialPopperStyles(strategy)
            }
          });
        });
      }
    };
  }, [enabled, referenceElement, popperElement]);
  return popperState;
}
function contains$1(context, node) {
  if (context.contains) return context.contains(node);
  if (context.compareDocumentPosition) return context === node || !!(context.compareDocumentPosition(node) & 16);
}
function removeEventListener$2(node, eventName, handler, options2) {
  var capture = options2 && typeof options2 !== "boolean" ? options2.capture : options2;
  node.removeEventListener(eventName, handler, capture);
  if (handler.__once) {
    node.removeEventListener(eventName, handler.__once, capture);
  }
}
function listen$2(node, eventName, handler, options2) {
  addEventListener$3(node, eventName, handler, options2);
  return function() {
    removeEventListener$2(node, eventName, handler, options2);
  };
}
var warning_1;
var hasRequiredWarning;
function requireWarning() {
  if (hasRequiredWarning) return warning_1;
  hasRequiredWarning = 1;
  var warning2 = function() {
  };
  warning_1 = warning2;
  return warning_1;
}
var warningExports = requireWarning();
const warning = /* @__PURE__ */ getDefaultExportFromCjs(warningExports);
function ownerDocument$2(node) {
  return node && node.ownerDocument || document;
}
function safeFindDOMNode(componentOrElement) {
  if (componentOrElement && "setState" in componentOrElement) {
    return Io.findDOMNode(componentOrElement);
  }
  return componentOrElement != null ? componentOrElement : null;
}
const ownerDocument$1 = (function(componentOrElement) {
  return ownerDocument$2(safeFindDOMNode(componentOrElement));
});
var escapeKeyCode = 27;
var noop = function noop3() {
};
function isLeftClickEvent(event) {
  return event.button === 0;
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
var getRefTarget = function getRefTarget2(ref) {
  return ref && ("current" in ref ? ref.current : ref);
};
function useRootClose(ref, onRootClose, _temp) {
  var _ref = _temp === void 0 ? {} : _temp, disabled = _ref.disabled, _ref$clickTrigger = _ref.clickTrigger, clickTrigger = _ref$clickTrigger === void 0 ? "click" : _ref$clickTrigger;
  var preventMouseRootCloseRef = reactExports.useRef(false);
  var onClose = onRootClose || noop;
  var handleMouseCapture = reactExports.useCallback(function(e) {
    var _e$composedPath$;
    var currentTarget = getRefTarget(ref);
    warning(!!currentTarget, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node");
    preventMouseRootCloseRef.current = !currentTarget || isModifiedEvent(e) || !isLeftClickEvent(e) || !!contains$1(currentTarget, (_e$composedPath$ = e.composedPath == null ? void 0 : e.composedPath()[0]) != null ? _e$composedPath$ : e.target);
  }, [ref]);
  var handleMouse = useEventCallback(function(e) {
    if (!preventMouseRootCloseRef.current) {
      onClose(e);
    }
  });
  var handleKeyUp = useEventCallback(function(e) {
    if (e.keyCode === escapeKeyCode) {
      onClose(e);
    }
  });
  reactExports.useEffect(function() {
    if (disabled || ref == null) return void 0;
    var currentEvent = window.event;
    var doc = ownerDocument$1(getRefTarget(ref));
    var removeMouseCaptureListener = listen$2(doc, clickTrigger, handleMouseCapture, true);
    var removeMouseListener = listen$2(doc, clickTrigger, function(e) {
      if (e === currentEvent) {
        currentEvent = void 0;
        return;
      }
      handleMouse(e);
    });
    var removeKeyupListener = listen$2(doc, "keyup", function(e) {
      if (e === currentEvent) {
        currentEvent = void 0;
        return;
      }
      handleKeyUp(e);
    });
    var mobileSafariHackListeners = [];
    if ("ontouchstart" in doc.documentElement) {
      mobileSafariHackListeners = [].slice.call(doc.body.children).map(function(el) {
        return listen$2(el, "mousemove", noop);
      });
    }
    return function() {
      removeMouseCaptureListener();
      removeMouseListener();
      removeKeyupListener();
      mobileSafariHackListeners.forEach(function(remove2) {
        return remove2();
      });
    };
  }, [ref, disabled, clickTrigger, handleMouseCapture, handleMouse, handleKeyUp]);
}
function toModifierMap(modifiers) {
  var result = {};
  if (!Array.isArray(modifiers)) {
    return modifiers || result;
  }
  modifiers == null ? void 0 : modifiers.forEach(function(m) {
    result[m.name] = m;
  });
  return result;
}
function toModifierArray(map) {
  if (map === void 0) {
    map = {};
  }
  if (Array.isArray(map)) return map;
  return Object.keys(map).map(function(k) {
    map[k].name = k;
    return map[k];
  });
}
function mergeOptionsWithPopperConfig(_ref) {
  var _modifiers$preventOve, _modifiers$preventOve2, _modifiers$offset, _modifiers$arrow;
  var enabled = _ref.enabled, enableEvents = _ref.enableEvents, placement = _ref.placement, flip2 = _ref.flip, offset2 = _ref.offset, fixed = _ref.fixed, containerPadding = _ref.containerPadding, arrowElement = _ref.arrowElement, _ref$popperConfig = _ref.popperConfig, popperConfig = _ref$popperConfig === void 0 ? {} : _ref$popperConfig;
  var modifiers = toModifierMap(popperConfig.modifiers);
  return _extends$1({}, popperConfig, {
    placement,
    enabled,
    strategy: fixed ? "fixed" : popperConfig.strategy,
    modifiers: toModifierArray(_extends$1({}, modifiers, {
      eventListeners: {
        enabled: enableEvents
      },
      preventOverflow: _extends$1({}, modifiers.preventOverflow, {
        options: containerPadding ? _extends$1({
          padding: containerPadding
        }, (_modifiers$preventOve = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve.options) : (_modifiers$preventOve2 = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve2.options
      }),
      offset: {
        options: _extends$1({
          offset: offset2
        }, (_modifiers$offset = modifiers.offset) == null ? void 0 : _modifiers$offset.options)
      },
      arrow: _extends$1({}, modifiers.arrow, {
        enabled: !!arrowElement,
        options: _extends$1({}, (_modifiers$arrow = modifiers.arrow) == null ? void 0 : _modifiers$arrow.options, {
          element: arrowElement
        })
      }),
      flip: _extends$1({
        enabled: !!flip2
      }, modifiers.flip)
    }))
  });
}
var resolveContainerRef = function resolveContainerRef2(ref) {
  var _ref;
  if (typeof document === "undefined") return null;
  if (ref == null) return ownerDocument$2().body;
  if (typeof ref === "function") ref = ref();
  if (ref && "current" in ref) ref = ref.current;
  if ((_ref = ref) != null && _ref.nodeType) return ref || null;
  return null;
};
function useWaitForDOMRef(ref, onResolved) {
  var _useState = reactExports.useState(function() {
    return resolveContainerRef(ref);
  }), resolvedRef = _useState[0], setRef = _useState[1];
  if (!resolvedRef) {
    var earlyRef = resolveContainerRef(ref);
    if (earlyRef) setRef(earlyRef);
  }
  reactExports.useEffect(function() {
  }, [onResolved, resolvedRef]);
  reactExports.useEffect(function() {
    var nextRef = resolveContainerRef(ref);
    if (nextRef !== resolvedRef) {
      setRef(nextRef);
    }
  }, [ref, resolvedRef]);
  return resolvedRef;
}
const toFnRef = (ref) => !ref || typeof ref === "function" ? ref : (value) => {
  ref.current = value;
};
function mergeRefs(refA, refB) {
  const a = toFnRef(refA);
  const b = toFnRef(refB);
  return (value) => {
    if (a) a(value);
    if (b) b(value);
  };
}
function useMergedRefs(refA, refB) {
  return reactExports.useMemo(() => mergeRefs(refA, refB), [refA, refB]);
}
var Overlay = /* @__PURE__ */ r.forwardRef(function(props, outerRef) {
  var flip2 = props.flip, offset2 = props.offset, placement = props.placement, _props$containerPaddi = props.containerPadding, containerPadding = _props$containerPaddi === void 0 ? 5 : _props$containerPaddi, _props$popperConfig = props.popperConfig, popperConfig = _props$popperConfig === void 0 ? {} : _props$popperConfig, Transition = props.transition;
  var _useCallbackRef = useCallbackRef(), rootElement = _useCallbackRef[0], attachRef = _useCallbackRef[1];
  var _useCallbackRef2 = useCallbackRef(), arrowElement = _useCallbackRef2[0], attachArrowRef = _useCallbackRef2[1];
  var mergedRef = useMergedRefs(attachRef, outerRef);
  var container = useWaitForDOMRef(props.container);
  var target = useWaitForDOMRef(props.target);
  var _useState = reactExports.useState(!props.show), exited = _useState[0], setExited = _useState[1];
  var _usePopper = usePopper(target, rootElement, mergeOptionsWithPopperConfig({
    placement,
    enableEvents: !!props.show,
    containerPadding: containerPadding || 5,
    flip: flip2,
    offset: offset2,
    arrowElement,
    popperConfig
  })), styles = _usePopper.styles, attributes = _usePopper.attributes, popper = _objectWithoutPropertiesLoose(_usePopper, ["styles", "attributes"]);
  if (props.show) {
    if (exited) setExited(false);
  } else if (!props.transition && !exited) {
    setExited(true);
  }
  var handleHidden = function handleHidden2() {
    setExited(true);
    if (props.onExited) {
      props.onExited.apply(props, arguments);
    }
  };
  var mountOverlay = props.show || Transition && !exited;
  useRootClose(rootElement, props.onHide, {
    disabled: !props.rootClose || props.rootCloseDisabled,
    clickTrigger: props.rootCloseEvent
  });
  if (!mountOverlay) {
    return null;
  }
  var child = props.children(_extends$1({}, popper, {
    show: !!props.show,
    props: _extends$1({}, attributes.popper, {
      style: styles.popper,
      ref: mergedRef
    }),
    arrowProps: _extends$1({}, attributes.arrow, {
      style: styles.arrow,
      ref: attachArrowRef
    })
  }));
  if (Transition) {
    var onExit = props.onExit, onExiting = props.onExiting, onEnter = props.onEnter, onEntering = props.onEntering, onEntered = props.onEntered;
    child = /* @__PURE__ */ r.createElement(Transition, {
      "in": props.show,
      appear: true,
      onExit,
      onExiting,
      onExited: handleHidden,
      onEnter,
      onEntering,
      onEntered
    }, child);
  }
  return container ? /* @__PURE__ */ Io.createPortal(child, container) : null;
});
Overlay.displayName = "Overlay";
Overlay.propTypes = {
  /**
   * Set the visibility of the Overlay
   */
  show: o.bool,
  /** Specify where the overlay element is positioned in relation to the target element */
  placement: o.oneOf(placements),
  /**
   * A DOM Element, Ref to an element, or function that returns either. The `target` element is where
   * the overlay is positioned relative to.
   */
  target: o.any,
  /**
   * A DOM Element, Ref to an element, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: o.any,
  /**
   * Enables the Popper.js `flip` modifier, allowing the Overlay to
   * automatically adjust it's placement in case of overlap with the viewport or toggle.
   * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
   */
  flip: o.bool,
  /**
   * A render prop that returns an element to overlay and position. See
   * the [react-popper documentation](https://github.com/FezVrasta/react-popper#children) for more info.
   *
   * @type {Function ({
   *   show: boolean,
   *   placement: Placement,
   *   update: () => void,
   *   forceUpdate: () => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     aria-labelledby: ?string
   *     [string]: string | number,
   *   },
   *   arrowProps: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     [string]: string | number,
   *   },
   * }) => React.Element}
   */
  children: o.func.isRequired,
  /**
   * Control how much space there is between the edge of the boundary element and overlay.
   * A convenience shortcut to setting `popperConfig.modfiers.preventOverflow.padding`
   */
  containerPadding: o.number,
  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig: o.object,
  /**
   * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
   */
  rootClose: o.bool,
  /**
   * Specify event for toggling overlay
   */
  rootCloseEvent: o.oneOf(["click", "mousedown"]),
  /**
   * Specify disabled for disable RootCloseWrapper
   */
  rootCloseDisabled: o.bool,
  /**
   * A Callback fired by the Overlay when it wishes to be hidden.
   *
   * __required__ when `rootClose` is `true`.
   *
   * @type func
   */
  onHide: function onHide(props) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (props.rootClose) {
      var _PropTypes$func;
      return (_PropTypes$func = o.func).isRequired.apply(_PropTypes$func, [props].concat(args));
    }
    return o.func.apply(o, [props].concat(args));
  },
  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component
   * used to animate the overlay as it changes visibility.
   */
  // @ts-ignore
  transition: o.elementType,
  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: o.func,
  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: o.func,
  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: o.func,
  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: o.func,
  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: o.func,
  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: o.func
};
var _listCacheClear;
var hasRequired_listCacheClear;
function require_listCacheClear() {
  if (hasRequired_listCacheClear) return _listCacheClear;
  hasRequired_listCacheClear = 1;
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }
  _listCacheClear = listCacheClear;
  return _listCacheClear;
}
var _assocIndexOf;
var hasRequired_assocIndexOf;
function require_assocIndexOf() {
  if (hasRequired_assocIndexOf) return _assocIndexOf;
  hasRequired_assocIndexOf = 1;
  var eq2 = requireEq();
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq2(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  _assocIndexOf = assocIndexOf;
  return _assocIndexOf;
}
var _listCacheDelete;
var hasRequired_listCacheDelete;
function require_listCacheDelete() {
  if (hasRequired_listCacheDelete) return _listCacheDelete;
  hasRequired_listCacheDelete = 1;
  var assocIndexOf = require_assocIndexOf();
  var arrayProto = Array.prototype;
  var splice = arrayProto.splice;
  function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }
  _listCacheDelete = listCacheDelete;
  return _listCacheDelete;
}
var _listCacheGet;
var hasRequired_listCacheGet;
function require_listCacheGet() {
  if (hasRequired_listCacheGet) return _listCacheGet;
  hasRequired_listCacheGet = 1;
  var assocIndexOf = require_assocIndexOf();
  function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? void 0 : data[index][1];
  }
  _listCacheGet = listCacheGet;
  return _listCacheGet;
}
var _listCacheHas;
var hasRequired_listCacheHas;
function require_listCacheHas() {
  if (hasRequired_listCacheHas) return _listCacheHas;
  hasRequired_listCacheHas = 1;
  var assocIndexOf = require_assocIndexOf();
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }
  _listCacheHas = listCacheHas;
  return _listCacheHas;
}
var _listCacheSet;
var hasRequired_listCacheSet;
function require_listCacheSet() {
  if (hasRequired_listCacheSet) return _listCacheSet;
  hasRequired_listCacheSet = 1;
  var assocIndexOf = require_assocIndexOf();
  function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }
  _listCacheSet = listCacheSet;
  return _listCacheSet;
}
var _ListCache;
var hasRequired_ListCache;
function require_ListCache() {
  if (hasRequired_ListCache) return _ListCache;
  hasRequired_ListCache = 1;
  var listCacheClear = require_listCacheClear(), listCacheDelete = require_listCacheDelete(), listCacheGet = require_listCacheGet(), listCacheHas = require_listCacheHas(), listCacheSet = require_listCacheSet();
  function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype["delete"] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;
  _ListCache = ListCache;
  return _ListCache;
}
var _stackClear;
var hasRequired_stackClear;
function require_stackClear() {
  if (hasRequired_stackClear) return _stackClear;
  hasRequired_stackClear = 1;
  var ListCache = require_ListCache();
  function stackClear() {
    this.__data__ = new ListCache();
    this.size = 0;
  }
  _stackClear = stackClear;
  return _stackClear;
}
var _stackDelete;
var hasRequired_stackDelete;
function require_stackDelete() {
  if (hasRequired_stackDelete) return _stackDelete;
  hasRequired_stackDelete = 1;
  function stackDelete(key) {
    var data = this.__data__, result = data["delete"](key);
    this.size = data.size;
    return result;
  }
  _stackDelete = stackDelete;
  return _stackDelete;
}
var _stackGet;
var hasRequired_stackGet;
function require_stackGet() {
  if (hasRequired_stackGet) return _stackGet;
  hasRequired_stackGet = 1;
  function stackGet(key) {
    return this.__data__.get(key);
  }
  _stackGet = stackGet;
  return _stackGet;
}
var _stackHas;
var hasRequired_stackHas;
function require_stackHas() {
  if (hasRequired_stackHas) return _stackHas;
  hasRequired_stackHas = 1;
  function stackHas(key) {
    return this.__data__.has(key);
  }
  _stackHas = stackHas;
  return _stackHas;
}
var _coreJsData;
var hasRequired_coreJsData;
function require_coreJsData() {
  if (hasRequired_coreJsData) return _coreJsData;
  hasRequired_coreJsData = 1;
  var root = require_root();
  var coreJsData = root["__core-js_shared__"];
  _coreJsData = coreJsData;
  return _coreJsData;
}
var _isMasked;
var hasRequired_isMasked;
function require_isMasked() {
  if (hasRequired_isMasked) return _isMasked;
  hasRequired_isMasked = 1;
  var coreJsData = require_coreJsData();
  var maskSrcKey = (function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  })();
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  _isMasked = isMasked;
  return _isMasked;
}
var _toSource;
var hasRequired_toSource;
function require_toSource() {
  if (hasRequired_toSource) return _toSource;
  hasRequired_toSource = 1;
  var funcProto = Function.prototype;
  var funcToString = funcProto.toString;
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {
      }
      try {
        return func + "";
      } catch (e) {
      }
    }
    return "";
  }
  _toSource = toSource;
  return _toSource;
}
var _baseIsNative;
var hasRequired_baseIsNative;
function require_baseIsNative() {
  if (hasRequired_baseIsNative) return _baseIsNative;
  hasRequired_baseIsNative = 1;
  var isFunction2 = requireIsFunction(), isMasked = require_isMasked(), isObject = requireIsObject(), toSource = require_toSource();
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var funcProto = Function.prototype, objectProto = Object.prototype;
  var funcToString = funcProto.toString;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var reIsNative = RegExp(
    "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction2(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }
  _baseIsNative = baseIsNative;
  return _baseIsNative;
}
var _getValue;
var hasRequired_getValue;
function require_getValue() {
  if (hasRequired_getValue) return _getValue;
  hasRequired_getValue = 1;
  function getValue(object, key) {
    return object == null ? void 0 : object[key];
  }
  _getValue = getValue;
  return _getValue;
}
var _getNative;
var hasRequired_getNative;
function require_getNative() {
  if (hasRequired_getNative) return _getNative;
  hasRequired_getNative = 1;
  var baseIsNative = require_baseIsNative(), getValue = require_getValue();
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : void 0;
  }
  _getNative = getNative;
  return _getNative;
}
var _Map;
var hasRequired_Map;
function require_Map() {
  if (hasRequired_Map) return _Map;
  hasRequired_Map = 1;
  var getNative = require_getNative(), root = require_root();
  var Map2 = getNative(root, "Map");
  _Map = Map2;
  return _Map;
}
var _nativeCreate;
var hasRequired_nativeCreate;
function require_nativeCreate() {
  if (hasRequired_nativeCreate) return _nativeCreate;
  hasRequired_nativeCreate = 1;
  var getNative = require_getNative();
  var nativeCreate = getNative(Object, "create");
  _nativeCreate = nativeCreate;
  return _nativeCreate;
}
var _hashClear;
var hasRequired_hashClear;
function require_hashClear() {
  if (hasRequired_hashClear) return _hashClear;
  hasRequired_hashClear = 1;
  var nativeCreate = require_nativeCreate();
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }
  _hashClear = hashClear;
  return _hashClear;
}
var _hashDelete;
var hasRequired_hashDelete;
function require_hashDelete() {
  if (hasRequired_hashDelete) return _hashDelete;
  hasRequired_hashDelete = 1;
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }
  _hashDelete = hashDelete;
  return _hashDelete;
}
var _hashGet;
var hasRequired_hashGet;
function require_hashGet() {
  if (hasRequired_hashGet) return _hashGet;
  hasRequired_hashGet = 1;
  var nativeCreate = require_nativeCreate();
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? void 0 : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : void 0;
  }
  _hashGet = hashGet;
  return _hashGet;
}
var _hashHas;
var hasRequired_hashHas;
function require_hashHas() {
  if (hasRequired_hashHas) return _hashHas;
  hasRequired_hashHas = 1;
  var nativeCreate = require_nativeCreate();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
  }
  _hashHas = hashHas;
  return _hashHas;
}
var _hashSet;
var hasRequired_hashSet;
function require_hashSet() {
  if (hasRequired_hashSet) return _hashSet;
  hasRequired_hashSet = 1;
  var nativeCreate = require_nativeCreate();
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
    return this;
  }
  _hashSet = hashSet;
  return _hashSet;
}
var _Hash;
var hasRequired_Hash;
function require_Hash() {
  if (hasRequired_Hash) return _Hash;
  hasRequired_Hash = 1;
  var hashClear = require_hashClear(), hashDelete = require_hashDelete(), hashGet = require_hashGet(), hashHas = require_hashHas(), hashSet = require_hashSet();
  function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  Hash.prototype.clear = hashClear;
  Hash.prototype["delete"] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;
  _Hash = Hash;
  return _Hash;
}
var _mapCacheClear;
var hasRequired_mapCacheClear;
function require_mapCacheClear() {
  if (hasRequired_mapCacheClear) return _mapCacheClear;
  hasRequired_mapCacheClear = 1;
  var Hash = require_Hash(), ListCache = require_ListCache(), Map2 = require_Map();
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      "hash": new Hash(),
      "map": new (Map2 || ListCache)(),
      "string": new Hash()
    };
  }
  _mapCacheClear = mapCacheClear;
  return _mapCacheClear;
}
var _isKeyable;
var hasRequired_isKeyable;
function require_isKeyable() {
  if (hasRequired_isKeyable) return _isKeyable;
  hasRequired_isKeyable = 1;
  function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }
  _isKeyable = isKeyable;
  return _isKeyable;
}
var _getMapData;
var hasRequired_getMapData;
function require_getMapData() {
  if (hasRequired_getMapData) return _getMapData;
  hasRequired_getMapData = 1;
  var isKeyable = require_isKeyable();
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }
  _getMapData = getMapData;
  return _getMapData;
}
var _mapCacheDelete;
var hasRequired_mapCacheDelete;
function require_mapCacheDelete() {
  if (hasRequired_mapCacheDelete) return _mapCacheDelete;
  hasRequired_mapCacheDelete = 1;
  var getMapData = require_getMapData();
  function mapCacheDelete(key) {
    var result = getMapData(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }
  _mapCacheDelete = mapCacheDelete;
  return _mapCacheDelete;
}
var _mapCacheGet;
var hasRequired_mapCacheGet;
function require_mapCacheGet() {
  if (hasRequired_mapCacheGet) return _mapCacheGet;
  hasRequired_mapCacheGet = 1;
  var getMapData = require_getMapData();
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }
  _mapCacheGet = mapCacheGet;
  return _mapCacheGet;
}
var _mapCacheHas;
var hasRequired_mapCacheHas;
function require_mapCacheHas() {
  if (hasRequired_mapCacheHas) return _mapCacheHas;
  hasRequired_mapCacheHas = 1;
  var getMapData = require_getMapData();
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }
  _mapCacheHas = mapCacheHas;
  return _mapCacheHas;
}
var _mapCacheSet;
var hasRequired_mapCacheSet;
function require_mapCacheSet() {
  if (hasRequired_mapCacheSet) return _mapCacheSet;
  hasRequired_mapCacheSet = 1;
  var getMapData = require_getMapData();
  function mapCacheSet(key, value) {
    var data = getMapData(this, key), size2 = data.size;
    data.set(key, value);
    this.size += data.size == size2 ? 0 : 1;
    return this;
  }
  _mapCacheSet = mapCacheSet;
  return _mapCacheSet;
}
var _MapCache;
var hasRequired_MapCache;
function require_MapCache() {
  if (hasRequired_MapCache) return _MapCache;
  hasRequired_MapCache = 1;
  var mapCacheClear = require_mapCacheClear(), mapCacheDelete = require_mapCacheDelete(), mapCacheGet = require_mapCacheGet(), mapCacheHas = require_mapCacheHas(), mapCacheSet = require_mapCacheSet();
  function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype["delete"] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;
  _MapCache = MapCache;
  return _MapCache;
}
var _stackSet;
var hasRequired_stackSet;
function require_stackSet() {
  if (hasRequired_stackSet) return _stackSet;
  hasRequired_stackSet = 1;
  var ListCache = require_ListCache(), Map2 = require_Map(), MapCache = require_MapCache();
  var LARGE_ARRAY_SIZE = 200;
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
      var pairs = data.__data__;
      if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }
  _stackSet = stackSet;
  return _stackSet;
}
var _Stack;
var hasRequired_Stack;
function require_Stack() {
  if (hasRequired_Stack) return _Stack;
  hasRequired_Stack = 1;
  var ListCache = require_ListCache(), stackClear = require_stackClear(), stackDelete = require_stackDelete(), stackGet = require_stackGet(), stackHas = require_stackHas(), stackSet = require_stackSet();
  function Stack2(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }
  Stack2.prototype.clear = stackClear;
  Stack2.prototype["delete"] = stackDelete;
  Stack2.prototype.get = stackGet;
  Stack2.prototype.has = stackHas;
  Stack2.prototype.set = stackSet;
  _Stack = Stack2;
  return _Stack;
}
var _setCacheAdd;
var hasRequired_setCacheAdd;
function require_setCacheAdd() {
  if (hasRequired_setCacheAdd) return _setCacheAdd;
  hasRequired_setCacheAdd = 1;
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
  }
  _setCacheAdd = setCacheAdd;
  return _setCacheAdd;
}
var _setCacheHas;
var hasRequired_setCacheHas;
function require_setCacheHas() {
  if (hasRequired_setCacheHas) return _setCacheHas;
  hasRequired_setCacheHas = 1;
  function setCacheHas(value) {
    return this.__data__.has(value);
  }
  _setCacheHas = setCacheHas;
  return _setCacheHas;
}
var _SetCache;
var hasRequired_SetCache;
function require_SetCache() {
  if (hasRequired_SetCache) return _SetCache;
  hasRequired_SetCache = 1;
  var MapCache = require_MapCache(), setCacheAdd = require_setCacheAdd(), setCacheHas = require_setCacheHas();
  function SetCache(values) {
    var index = -1, length = values == null ? 0 : values.length;
    this.__data__ = new MapCache();
    while (++index < length) {
      this.add(values[index]);
    }
  }
  SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
  SetCache.prototype.has = setCacheHas;
  _SetCache = SetCache;
  return _SetCache;
}
var _arraySome;
var hasRequired_arraySome;
function require_arraySome() {
  if (hasRequired_arraySome) return _arraySome;
  hasRequired_arraySome = 1;
  function arraySome(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length;
    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }
  _arraySome = arraySome;
  return _arraySome;
}
var _cacheHas;
var hasRequired_cacheHas;
function require_cacheHas() {
  if (hasRequired_cacheHas) return _cacheHas;
  hasRequired_cacheHas = 1;
  function cacheHas(cache, key) {
    return cache.has(key);
  }
  _cacheHas = cacheHas;
  return _cacheHas;
}
var _equalArrays;
var hasRequired_equalArrays;
function require_equalArrays() {
  if (hasRequired_equalArrays) return _equalArrays;
  hasRequired_equalArrays = 1;
  var SetCache = require_SetCache(), arraySome = require_arraySome(), cacheHas = require_cacheHas();
  var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
  function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }
    var arrStacked = stack.get(array);
    var othStacked = stack.get(other);
    if (arrStacked && othStacked) {
      return arrStacked == other && othStacked == array;
    }
    var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
    stack.set(array, other);
    stack.set(other, array);
    while (++index < arrLength) {
      var arrValue = array[index], othValue = other[index];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
      }
      if (compared !== void 0) {
        if (compared) {
          continue;
        }
        result = false;
        break;
      }
      if (seen) {
        if (!arraySome(other, function(othValue2, othIndex) {
          if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
            return seen.push(othIndex);
          }
        })) {
          result = false;
          break;
        }
      } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
        result = false;
        break;
      }
    }
    stack["delete"](array);
    stack["delete"](other);
    return result;
  }
  _equalArrays = equalArrays;
  return _equalArrays;
}
var _Uint8Array;
var hasRequired_Uint8Array;
function require_Uint8Array() {
  if (hasRequired_Uint8Array) return _Uint8Array;
  hasRequired_Uint8Array = 1;
  var root = require_root();
  var Uint8Array = root.Uint8Array;
  _Uint8Array = Uint8Array;
  return _Uint8Array;
}
var _mapToArray;
var hasRequired_mapToArray;
function require_mapToArray() {
  if (hasRequired_mapToArray) return _mapToArray;
  hasRequired_mapToArray = 1;
  function mapToArray(map) {
    var index = -1, result = Array(map.size);
    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }
  _mapToArray = mapToArray;
  return _mapToArray;
}
var _setToArray;
var hasRequired_setToArray;
function require_setToArray() {
  if (hasRequired_setToArray) return _setToArray;
  hasRequired_setToArray = 1;
  function setToArray(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }
  _setToArray = setToArray;
  return _setToArray;
}
var _equalByTag;
var hasRequired_equalByTag;
function require_equalByTag() {
  if (hasRequired_equalByTag) return _equalByTag;
  hasRequired_equalByTag = 1;
  var Symbol2 = require_Symbol(), Uint8Array = require_Uint8Array(), eq2 = requireEq(), equalArrays = require_equalArrays(), mapToArray = require_mapToArray(), setToArray = require_setToArray();
  var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
  var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
  var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
  var symbolProto = Symbol2 ? Symbol2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
  function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag:
        if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
          return false;
        }
        object = object.buffer;
        other = other.buffer;
      case arrayBufferTag:
        if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
          return false;
        }
        return true;
      case boolTag:
      case dateTag:
      case numberTag:
        return eq2(+object, +other);
      case errorTag:
        return object.name == other.name && object.message == other.message;
      case regexpTag:
      case stringTag:
        return object == other + "";
      case mapTag:
        var convert = mapToArray;
      case setTag:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
        convert || (convert = setToArray);
        if (object.size != other.size && !isPartial) {
          return false;
        }
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        bitmask |= COMPARE_UNORDERED_FLAG;
        stack.set(object, other);
        var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
        stack["delete"](object);
        return result;
      case symbolTag:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other);
        }
    }
    return false;
  }
  _equalByTag = equalByTag;
  return _equalByTag;
}
var _arrayPush;
var hasRequired_arrayPush;
function require_arrayPush() {
  if (hasRequired_arrayPush) return _arrayPush;
  hasRequired_arrayPush = 1;
  function arrayPush(array, values) {
    var index = -1, length = values.length, offset2 = array.length;
    while (++index < length) {
      array[offset2 + index] = values[index];
    }
    return array;
  }
  _arrayPush = arrayPush;
  return _arrayPush;
}
var isArray_1;
var hasRequiredIsArray;
function requireIsArray() {
  if (hasRequiredIsArray) return isArray_1;
  hasRequiredIsArray = 1;
  var isArray = Array.isArray;
  isArray_1 = isArray;
  return isArray_1;
}
var _baseGetAllKeys;
var hasRequired_baseGetAllKeys;
function require_baseGetAllKeys() {
  if (hasRequired_baseGetAllKeys) return _baseGetAllKeys;
  hasRequired_baseGetAllKeys = 1;
  var arrayPush = require_arrayPush(), isArray = requireIsArray();
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
  }
  _baseGetAllKeys = baseGetAllKeys;
  return _baseGetAllKeys;
}
var _arrayFilter;
var hasRequired_arrayFilter;
function require_arrayFilter() {
  if (hasRequired_arrayFilter) return _arrayFilter;
  hasRequired_arrayFilter = 1;
  function arrayFilter(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }
  _arrayFilter = arrayFilter;
  return _arrayFilter;
}
var stubArray_1;
var hasRequiredStubArray;
function requireStubArray() {
  if (hasRequiredStubArray) return stubArray_1;
  hasRequiredStubArray = 1;
  function stubArray() {
    return [];
  }
  stubArray_1 = stubArray;
  return stubArray_1;
}
var _getSymbols;
var hasRequired_getSymbols;
function require_getSymbols() {
  if (hasRequired_getSymbols) return _getSymbols;
  hasRequired_getSymbols = 1;
  var arrayFilter = require_arrayFilter(), stubArray = requireStubArray();
  var objectProto = Object.prototype;
  var propertyIsEnumerable = objectProto.propertyIsEnumerable;
  var nativeGetSymbols = Object.getOwnPropertySymbols;
  var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return arrayFilter(nativeGetSymbols(object), function(symbol) {
      return propertyIsEnumerable.call(object, symbol);
    });
  };
  _getSymbols = getSymbols;
  return _getSymbols;
}
var _baseTimes;
var hasRequired_baseTimes;
function require_baseTimes() {
  if (hasRequired_baseTimes) return _baseTimes;
  hasRequired_baseTimes = 1;
  function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }
  _baseTimes = baseTimes;
  return _baseTimes;
}
var _baseIsArguments;
var hasRequired_baseIsArguments;
function require_baseIsArguments() {
  if (hasRequired_baseIsArguments) return _baseIsArguments;
  hasRequired_baseIsArguments = 1;
  var baseGetTag = require_baseGetTag(), isObjectLike = requireIsObjectLike();
  var argsTag = "[object Arguments]";
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
  }
  _baseIsArguments = baseIsArguments;
  return _baseIsArguments;
}
var isArguments_1;
var hasRequiredIsArguments;
function requireIsArguments() {
  if (hasRequiredIsArguments) return isArguments_1;
  hasRequiredIsArguments = 1;
  var baseIsArguments = require_baseIsArguments(), isObjectLike = requireIsObjectLike();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var propertyIsEnumerable = objectProto.propertyIsEnumerable;
  var isArguments = baseIsArguments(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  isArguments_1 = isArguments;
  return isArguments_1;
}
var isBuffer = { exports: {} };
var stubFalse_1;
var hasRequiredStubFalse;
function requireStubFalse() {
  if (hasRequiredStubFalse) return stubFalse_1;
  hasRequiredStubFalse = 1;
  function stubFalse() {
    return false;
  }
  stubFalse_1 = stubFalse;
  return stubFalse_1;
}
isBuffer.exports;
var hasRequiredIsBuffer;
function requireIsBuffer() {
  if (hasRequiredIsBuffer) return isBuffer.exports;
  hasRequiredIsBuffer = 1;
  (function(module, exports) {
    var root = require_root(), stubFalse = requireStubFalse();
    var freeExports = exports && !exports.nodeType && exports;
    var freeModule = freeExports && true && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer = moduleExports ? root.Buffer : void 0;
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
    var isBuffer2 = nativeIsBuffer || stubFalse;
    module.exports = isBuffer2;
  })(isBuffer, isBuffer.exports);
  return isBuffer.exports;
}
var _baseIsTypedArray;
var hasRequired_baseIsTypedArray;
function require_baseIsTypedArray() {
  if (hasRequired_baseIsTypedArray) return _baseIsTypedArray;
  hasRequired_baseIsTypedArray = 1;
  var baseGetTag = require_baseGetTag(), isLength = requireIsLength(), isObjectLike = requireIsObjectLike();
  var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }
  _baseIsTypedArray = baseIsTypedArray;
  return _baseIsTypedArray;
}
var _baseUnary;
var hasRequired_baseUnary;
function require_baseUnary() {
  if (hasRequired_baseUnary) return _baseUnary;
  hasRequired_baseUnary = 1;
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }
  _baseUnary = baseUnary;
  return _baseUnary;
}
var _nodeUtil = { exports: {} };
_nodeUtil.exports;
var hasRequired_nodeUtil;
function require_nodeUtil() {
  if (hasRequired_nodeUtil) return _nodeUtil.exports;
  hasRequired_nodeUtil = 1;
  (function(module, exports) {
    var freeGlobal = require_freeGlobal();
    var freeExports = exports && !exports.nodeType && exports;
    var freeModule = freeExports && true && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = (function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    })();
    module.exports = nodeUtil;
  })(_nodeUtil, _nodeUtil.exports);
  return _nodeUtil.exports;
}
var isTypedArray_1;
var hasRequiredIsTypedArray;
function requireIsTypedArray() {
  if (hasRequiredIsTypedArray) return isTypedArray_1;
  hasRequiredIsTypedArray = 1;
  var baseIsTypedArray = require_baseIsTypedArray(), baseUnary = require_baseUnary(), nodeUtil = require_nodeUtil();
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
  isTypedArray_1 = isTypedArray;
  return isTypedArray_1;
}
var _arrayLikeKeys;
var hasRequired_arrayLikeKeys;
function require_arrayLikeKeys() {
  if (hasRequired_arrayLikeKeys) return _arrayLikeKeys;
  hasRequired_arrayLikeKeys = 1;
  var baseTimes = require_baseTimes(), isArguments = requireIsArguments(), isArray = requireIsArray(), isBuffer2 = requireIsBuffer(), isIndex = require_isIndex(), isTypedArray = requireIsTypedArray();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer2(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for (var key in value) {
      if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
      (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
      isIndex(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  _arrayLikeKeys = arrayLikeKeys;
  return _arrayLikeKeys;
}
var _isPrototype;
var hasRequired_isPrototype;
function require_isPrototype() {
  if (hasRequired_isPrototype) return _isPrototype;
  hasRequired_isPrototype = 1;
  var objectProto = Object.prototype;
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
    return value === proto;
  }
  _isPrototype = isPrototype;
  return _isPrototype;
}
var _overArg;
var hasRequired_overArg;
function require_overArg() {
  if (hasRequired_overArg) return _overArg;
  hasRequired_overArg = 1;
  function overArg(func, transform2) {
    return function(arg) {
      return func(transform2(arg));
    };
  }
  _overArg = overArg;
  return _overArg;
}
var _nativeKeys;
var hasRequired_nativeKeys;
function require_nativeKeys() {
  if (hasRequired_nativeKeys) return _nativeKeys;
  hasRequired_nativeKeys = 1;
  var overArg = require_overArg();
  var nativeKeys = overArg(Object.keys, Object);
  _nativeKeys = nativeKeys;
  return _nativeKeys;
}
var _baseKeys;
var hasRequired_baseKeys;
function require_baseKeys() {
  if (hasRequired_baseKeys) return _baseKeys;
  hasRequired_baseKeys = 1;
  var isPrototype = require_isPrototype(), nativeKeys = require_nativeKeys();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty.call(object, key) && key != "constructor") {
        result.push(key);
      }
    }
    return result;
  }
  _baseKeys = baseKeys;
  return _baseKeys;
}
var keys_1;
var hasRequiredKeys;
function requireKeys() {
  if (hasRequiredKeys) return keys_1;
  hasRequiredKeys = 1;
  var arrayLikeKeys = require_arrayLikeKeys(), baseKeys = require_baseKeys(), isArrayLike = requireIsArrayLike();
  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }
  keys_1 = keys;
  return keys_1;
}
var _getAllKeys;
var hasRequired_getAllKeys;
function require_getAllKeys() {
  if (hasRequired_getAllKeys) return _getAllKeys;
  hasRequired_getAllKeys = 1;
  var baseGetAllKeys = require_baseGetAllKeys(), getSymbols = require_getSymbols(), keys = requireKeys();
  function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
  }
  _getAllKeys = getAllKeys;
  return _getAllKeys;
}
var _equalObjects;
var hasRequired_equalObjects;
function require_equalObjects() {
  if (hasRequired_equalObjects) return _equalObjects;
  hasRequired_equalObjects = 1;
  var getAllKeys = require_getAllKeys();
  var COMPARE_PARTIAL_FLAG = 1;
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) {
      return false;
    }
    var index = objLength;
    while (index--) {
      var key = objProps[index];
      if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
        return false;
      }
    }
    var objStacked = stack.get(object);
    var othStacked = stack.get(other);
    if (objStacked && othStacked) {
      return objStacked == other && othStacked == object;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;
    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key], othValue = other[key];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
      }
      if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
        result = false;
        break;
      }
      skipCtor || (skipCtor = key == "constructor");
    }
    if (result && !skipCtor) {
      var objCtor = object.constructor, othCtor = other.constructor;
      if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
        result = false;
      }
    }
    stack["delete"](object);
    stack["delete"](other);
    return result;
  }
  _equalObjects = equalObjects;
  return _equalObjects;
}
var _DataView;
var hasRequired_DataView;
function require_DataView() {
  if (hasRequired_DataView) return _DataView;
  hasRequired_DataView = 1;
  var getNative = require_getNative(), root = require_root();
  var DataView = getNative(root, "DataView");
  _DataView = DataView;
  return _DataView;
}
var _Promise;
var hasRequired_Promise;
function require_Promise() {
  if (hasRequired_Promise) return _Promise;
  hasRequired_Promise = 1;
  var getNative = require_getNative(), root = require_root();
  var Promise2 = getNative(root, "Promise");
  _Promise = Promise2;
  return _Promise;
}
var _Set;
var hasRequired_Set;
function require_Set() {
  if (hasRequired_Set) return _Set;
  hasRequired_Set = 1;
  var getNative = require_getNative(), root = require_root();
  var Set2 = getNative(root, "Set");
  _Set = Set2;
  return _Set;
}
var _WeakMap;
var hasRequired_WeakMap;
function require_WeakMap() {
  if (hasRequired_WeakMap) return _WeakMap;
  hasRequired_WeakMap = 1;
  var getNative = require_getNative(), root = require_root();
  var WeakMap2 = getNative(root, "WeakMap");
  _WeakMap = WeakMap2;
  return _WeakMap;
}
var _getTag;
var hasRequired_getTag;
function require_getTag() {
  if (hasRequired_getTag) return _getTag;
  hasRequired_getTag = 1;
  var DataView = require_DataView(), Map2 = require_Map(), Promise2 = require_Promise(), Set2 = require_Set(), WeakMap2 = require_WeakMap(), baseGetTag = require_baseGetTag(), toSource = require_toSource();
  var mapTag = "[object Map]", objectTag = "[object Object]", promiseTag = "[object Promise]", setTag = "[object Set]", weakMapTag = "[object WeakMap]";
  var dataViewTag = "[object DataView]";
  var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap2);
  var getTag = baseGetTag;
  if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
    getTag = function(value) {
      var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag;
          case mapCtorString:
            return mapTag;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag;
          case weakMapCtorString:
            return weakMapTag;
        }
      }
      return result;
    };
  }
  _getTag = getTag;
  return _getTag;
}
var _baseIsEqualDeep;
var hasRequired_baseIsEqualDeep;
function require_baseIsEqualDeep() {
  if (hasRequired_baseIsEqualDeep) return _baseIsEqualDeep;
  hasRequired_baseIsEqualDeep = 1;
  var Stack2 = require_Stack(), equalArrays = require_equalArrays(), equalByTag = require_equalByTag(), equalObjects = require_equalObjects(), getTag = require_getTag(), isArray = requireIsArray(), isBuffer2 = requireIsBuffer(), isTypedArray = requireIsTypedArray();
  var COMPARE_PARTIAL_FLAG = 1;
  var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
    objTag = objTag == argsTag ? objectTag : objTag;
    othTag = othTag == argsTag ? objectTag : othTag;
    var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
    if (isSameTag && isBuffer2(object)) {
      if (!isBuffer2(other)) {
        return false;
      }
      objIsArr = true;
      objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack2());
      return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
      var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
        stack || (stack = new Stack2());
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stack || (stack = new Stack2());
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
  }
  _baseIsEqualDeep = baseIsEqualDeep;
  return _baseIsEqualDeep;
}
var _baseIsEqual;
var hasRequired_baseIsEqual;
function require_baseIsEqual() {
  if (hasRequired_baseIsEqual) return _baseIsEqual;
  hasRequired_baseIsEqual = 1;
  var baseIsEqualDeep = require_baseIsEqualDeep(), isObjectLike = requireIsObjectLike();
  function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
  }
  _baseIsEqual = baseIsEqual;
  return _baseIsEqual;
}
var isEqual_1;
var hasRequiredIsEqual;
function requireIsEqual() {
  if (hasRequiredIsEqual) return isEqual_1;
  hasRequiredIsEqual = 1;
  var baseIsEqual = require_baseIsEqual();
  function isEqual3(value, other) {
    return baseIsEqual(value, other);
  }
  isEqual_1 = isEqual3;
  return isEqual_1;
}
var isEqualExports = requireIsEqual();
const isEqual$1$1 = /* @__PURE__ */ getDefaultExportFromCjs(isEqualExports);
function height$1(node, client) {
  const win = isWindow$1(node);
  return win ? win.innerHeight : offset$1(node).height;
}
const toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
function qsa(element, selector) {
  return toArray(element.querySelectorAll(selector));
}
let matchesImpl;
function matches$1(node, selector) {
  if (!matchesImpl) {
    const body = document.body;
    const nativeMatch = body.matches || body.matchesSelector || body.webkitMatchesSelector || body.mozMatchesSelector || body.msMatchesSelector;
    matchesImpl = (n, s) => nativeMatch.call(n, s);
  }
  return matchesImpl(node, selector);
}
function closest$1(node, selector, stopAt) {
  if (node.closest && !stopAt) node.closest(selector);
  let nextNode = node;
  do {
    if (matches$1(nextNode, selector)) return nextNode;
    nextNode = nextNode.parentElement;
  } while (nextNode && nextNode !== stopAt && nextNode.nodeType === document.ELEMENT_NODE);
  return null;
}
let optionsSupported = false;
let onceSupported = false;
try {
  const options2 = {
    get passive() {
      return optionsSupported = true;
    },
    get once() {
      return onceSupported = optionsSupported = true;
    }
  };
  if (canUseDOM$2) {
    window.addEventListener("test", options2, options2);
    window.removeEventListener("test", options2, true);
  }
} catch (e) {
}
function addEventListener$2(node, eventName, handler, options2) {
  if (options2 && typeof options2 !== "boolean" && !onceSupported) {
    const {
      once,
      capture
    } = options2;
    let wrappedHandler = handler;
    if (!onceSupported && once) {
      wrappedHandler = handler.__once || function onceHandler(event) {
        this.removeEventListener(eventName, onceHandler, capture);
        handler.call(this, event);
      };
      handler.__once = wrappedHandler;
    }
    node.addEventListener(eventName, wrappedHandler, optionsSupported ? options2 : capture);
  }
  node.addEventListener(eventName, handler, options2);
}
function removeEventListener$1(node, eventName, handler, options2) {
  const capture = options2 && typeof options2 !== "boolean" ? options2.capture : options2;
  node.removeEventListener(eventName, handler, capture);
  if (handler.__once) {
    node.removeEventListener(eventName, handler.__once, capture);
  }
}
function listen$1(node, eventName, handler, options2) {
  addEventListener$2(node, eventName, handler, options2);
  return () => {
    removeEventListener$1(node, eventName, handler, options2);
  };
}
var _baseFindIndex;
var hasRequired_baseFindIndex;
function require_baseFindIndex() {
  if (hasRequired_baseFindIndex) return _baseFindIndex;
  hasRequired_baseFindIndex = 1;
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
    while (fromRight ? index-- : ++index < length) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }
  _baseFindIndex = baseFindIndex;
  return _baseFindIndex;
}
var _baseIsMatch;
var hasRequired_baseIsMatch;
function require_baseIsMatch() {
  if (hasRequired_baseIsMatch) return _baseIsMatch;
  hasRequired_baseIsMatch = 1;
  var Stack2 = require_Stack(), baseIsEqual = require_baseIsEqual();
  var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
  function baseIsMatch(object, source, matchData, customizer) {
    var index = matchData.length, length = index, noCustomizer = !customizer;
    if (object == null) {
      return !length;
    }
    object = Object(object);
    while (index--) {
      var data = matchData[index];
      if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
        return false;
      }
    }
    while (++index < length) {
      data = matchData[index];
      var key = data[0], objValue = object[key], srcValue = data[1];
      if (noCustomizer && data[2]) {
        if (objValue === void 0 && !(key in object)) {
          return false;
        }
      } else {
        var stack = new Stack2();
        if (customizer) {
          var result = customizer(objValue, srcValue, key, object, source, stack);
        }
        if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
          return false;
        }
      }
    }
    return true;
  }
  _baseIsMatch = baseIsMatch;
  return _baseIsMatch;
}
var _isStrictComparable;
var hasRequired_isStrictComparable;
function require_isStrictComparable() {
  if (hasRequired_isStrictComparable) return _isStrictComparable;
  hasRequired_isStrictComparable = 1;
  var isObject = requireIsObject();
  function isStrictComparable(value) {
    return value === value && !isObject(value);
  }
  _isStrictComparable = isStrictComparable;
  return _isStrictComparable;
}
var _getMatchData;
var hasRequired_getMatchData;
function require_getMatchData() {
  if (hasRequired_getMatchData) return _getMatchData;
  hasRequired_getMatchData = 1;
  var isStrictComparable = require_isStrictComparable(), keys = requireKeys();
  function getMatchData(object) {
    var result = keys(object), length = result.length;
    while (length--) {
      var key = result[length], value = object[key];
      result[length] = [key, value, isStrictComparable(value)];
    }
    return result;
  }
  _getMatchData = getMatchData;
  return _getMatchData;
}
var _matchesStrictComparable;
var hasRequired_matchesStrictComparable;
function require_matchesStrictComparable() {
  if (hasRequired_matchesStrictComparable) return _matchesStrictComparable;
  hasRequired_matchesStrictComparable = 1;
  function matchesStrictComparable(key, srcValue) {
    return function(object) {
      if (object == null) {
        return false;
      }
      return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
    };
  }
  _matchesStrictComparable = matchesStrictComparable;
  return _matchesStrictComparable;
}
var _baseMatches;
var hasRequired_baseMatches;
function require_baseMatches() {
  if (hasRequired_baseMatches) return _baseMatches;
  hasRequired_baseMatches = 1;
  var baseIsMatch = require_baseIsMatch(), getMatchData = require_getMatchData(), matchesStrictComparable = require_matchesStrictComparable();
  function baseMatches(source) {
    var matchData = getMatchData(source);
    if (matchData.length == 1 && matchData[0][2]) {
      return matchesStrictComparable(matchData[0][0], matchData[0][1]);
    }
    return function(object) {
      return object === source || baseIsMatch(object, source, matchData);
    };
  }
  _baseMatches = baseMatches;
  return _baseMatches;
}
var _isKey;
var hasRequired_isKey;
function require_isKey() {
  if (hasRequired_isKey) return _isKey;
  hasRequired_isKey = 1;
  var isArray = requireIsArray(), isSymbol = requireIsSymbol();
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
  function isKey(value, object) {
    if (isArray(value)) {
      return false;
    }
    var type = typeof value;
    if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
      return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
  }
  _isKey = isKey;
  return _isKey;
}
var memoize_1;
var hasRequiredMemoize;
function requireMemoize() {
  if (hasRequiredMemoize) return memoize_1;
  hasRequiredMemoize = 1;
  var MapCache = require_MapCache();
  var FUNC_ERROR_TEXT = "Expected a function";
  function memoize(func, resolver) {
    if (typeof func != "function" || resolver != null && typeof resolver != "function") {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function() {
      var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result) || cache;
      return result;
    };
    memoized.cache = new (memoize.Cache || MapCache)();
    return memoized;
  }
  memoize.Cache = MapCache;
  memoize_1 = memoize;
  return memoize_1;
}
var _memoizeCapped;
var hasRequired_memoizeCapped;
function require_memoizeCapped() {
  if (hasRequired_memoizeCapped) return _memoizeCapped;
  hasRequired_memoizeCapped = 1;
  var memoize = requireMemoize();
  var MAX_MEMOIZE_SIZE = 500;
  function memoizeCapped(func) {
    var result = memoize(func, function(key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear();
      }
      return key;
    });
    var cache = result.cache;
    return result;
  }
  _memoizeCapped = memoizeCapped;
  return _memoizeCapped;
}
var _stringToPath;
var hasRequired_stringToPath;
function require_stringToPath() {
  if (hasRequired_stringToPath) return _stringToPath;
  hasRequired_stringToPath = 1;
  var memoizeCapped = require_memoizeCapped();
  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
  var reEscapeChar = /\\(\\)?/g;
  var stringToPath = memoizeCapped(function(string) {
    var result = [];
    if (string.charCodeAt(0) === 46) {
      result.push("");
    }
    string.replace(rePropName, function(match2, number, quote, subString) {
      result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match2);
    });
    return result;
  });
  _stringToPath = stringToPath;
  return _stringToPath;
}
var _arrayMap;
var hasRequired_arrayMap;
function require_arrayMap() {
  if (hasRequired_arrayMap) return _arrayMap;
  hasRequired_arrayMap = 1;
  function arrayMap(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length, result = Array(length);
    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }
  _arrayMap = arrayMap;
  return _arrayMap;
}
var _baseToString;
var hasRequired_baseToString;
function require_baseToString() {
  if (hasRequired_baseToString) return _baseToString;
  hasRequired_baseToString = 1;
  var Symbol2 = require_Symbol(), arrayMap = require_arrayMap(), isArray = requireIsArray(), isSymbol = requireIsSymbol();
  var symbolProto = Symbol2 ? Symbol2.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
  function baseToString(value) {
    if (typeof value == "string") {
      return value;
    }
    if (isArray(value)) {
      return arrayMap(value, baseToString) + "";
    }
    if (isSymbol(value)) {
      return symbolToString ? symbolToString.call(value) : "";
    }
    var result = value + "";
    return result == "0" && 1 / value == -Infinity ? "-0" : result;
  }
  _baseToString = baseToString;
  return _baseToString;
}
var toString_1;
var hasRequiredToString;
function requireToString() {
  if (hasRequiredToString) return toString_1;
  hasRequiredToString = 1;
  var baseToString = require_baseToString();
  function toString(value) {
    return value == null ? "" : baseToString(value);
  }
  toString_1 = toString;
  return toString_1;
}
var _castPath;
var hasRequired_castPath;
function require_castPath() {
  if (hasRequired_castPath) return _castPath;
  hasRequired_castPath = 1;
  var isArray = requireIsArray(), isKey = require_isKey(), stringToPath = require_stringToPath(), toString = requireToString();
  function castPath(value, object) {
    if (isArray(value)) {
      return value;
    }
    return isKey(value, object) ? [value] : stringToPath(toString(value));
  }
  _castPath = castPath;
  return _castPath;
}
var _toKey;
var hasRequired_toKey;
function require_toKey() {
  if (hasRequired_toKey) return _toKey;
  hasRequired_toKey = 1;
  var isSymbol = requireIsSymbol();
  function toKey(value) {
    if (typeof value == "string" || isSymbol(value)) {
      return value;
    }
    var result = value + "";
    return result == "0" && 1 / value == -Infinity ? "-0" : result;
  }
  _toKey = toKey;
  return _toKey;
}
var _baseGet;
var hasRequired_baseGet;
function require_baseGet() {
  if (hasRequired_baseGet) return _baseGet;
  hasRequired_baseGet = 1;
  var castPath = require_castPath(), toKey = require_toKey();
  function baseGet(object, path) {
    path = castPath(path, object);
    var index = 0, length = path.length;
    while (object != null && index < length) {
      object = object[toKey(path[index++])];
    }
    return index && index == length ? object : void 0;
  }
  _baseGet = baseGet;
  return _baseGet;
}
var get_1;
var hasRequiredGet;
function requireGet() {
  if (hasRequiredGet) return get_1;
  hasRequiredGet = 1;
  var baseGet = require_baseGet();
  function get(object, path, defaultValue) {
    var result = object == null ? void 0 : baseGet(object, path);
    return result === void 0 ? defaultValue : result;
  }
  get_1 = get;
  return get_1;
}
var _baseHasIn;
var hasRequired_baseHasIn;
function require_baseHasIn() {
  if (hasRequired_baseHasIn) return _baseHasIn;
  hasRequired_baseHasIn = 1;
  function baseHasIn(object, key) {
    return object != null && key in Object(object);
  }
  _baseHasIn = baseHasIn;
  return _baseHasIn;
}
var _hasPath;
var hasRequired_hasPath;
function require_hasPath() {
  if (hasRequired_hasPath) return _hasPath;
  hasRequired_hasPath = 1;
  var castPath = require_castPath(), isArguments = requireIsArguments(), isArray = requireIsArray(), isIndex = require_isIndex(), isLength = requireIsLength(), toKey = require_toKey();
  function hasPath(object, path, hasFunc) {
    path = castPath(path, object);
    var index = -1, length = path.length, result = false;
    while (++index < length) {
      var key = toKey(path[index]);
      if (!(result = object != null && hasFunc(object, key))) {
        break;
      }
      object = object[key];
    }
    if (result || ++index != length) {
      return result;
    }
    length = object == null ? 0 : object.length;
    return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
  }
  _hasPath = hasPath;
  return _hasPath;
}
var hasIn_1;
var hasRequiredHasIn;
function requireHasIn() {
  if (hasRequiredHasIn) return hasIn_1;
  hasRequiredHasIn = 1;
  var baseHasIn = require_baseHasIn(), hasPath = require_hasPath();
  function hasIn(object, path) {
    return object != null && hasPath(object, path, baseHasIn);
  }
  hasIn_1 = hasIn;
  return hasIn_1;
}
var _baseMatchesProperty;
var hasRequired_baseMatchesProperty;
function require_baseMatchesProperty() {
  if (hasRequired_baseMatchesProperty) return _baseMatchesProperty;
  hasRequired_baseMatchesProperty = 1;
  var baseIsEqual = require_baseIsEqual(), get = requireGet(), hasIn = requireHasIn(), isKey = require_isKey(), isStrictComparable = require_isStrictComparable(), matchesStrictComparable = require_matchesStrictComparable(), toKey = require_toKey();
  var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
  function baseMatchesProperty(path, srcValue) {
    if (isKey(path) && isStrictComparable(srcValue)) {
      return matchesStrictComparable(toKey(path), srcValue);
    }
    return function(object) {
      var objValue = get(object, path);
      return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
    };
  }
  _baseMatchesProperty = baseMatchesProperty;
  return _baseMatchesProperty;
}
var identity_1;
var hasRequiredIdentity;
function requireIdentity() {
  if (hasRequiredIdentity) return identity_1;
  hasRequiredIdentity = 1;
  function identity(value) {
    return value;
  }
  identity_1 = identity;
  return identity_1;
}
var _baseProperty;
var hasRequired_baseProperty;
function require_baseProperty() {
  if (hasRequired_baseProperty) return _baseProperty;
  hasRequired_baseProperty = 1;
  function baseProperty(key) {
    return function(object) {
      return object == null ? void 0 : object[key];
    };
  }
  _baseProperty = baseProperty;
  return _baseProperty;
}
var _basePropertyDeep;
var hasRequired_basePropertyDeep;
function require_basePropertyDeep() {
  if (hasRequired_basePropertyDeep) return _basePropertyDeep;
  hasRequired_basePropertyDeep = 1;
  var baseGet = require_baseGet();
  function basePropertyDeep(path) {
    return function(object) {
      return baseGet(object, path);
    };
  }
  _basePropertyDeep = basePropertyDeep;
  return _basePropertyDeep;
}
var property_1;
var hasRequiredProperty;
function requireProperty() {
  if (hasRequiredProperty) return property_1;
  hasRequiredProperty = 1;
  var baseProperty = require_baseProperty(), basePropertyDeep = require_basePropertyDeep(), isKey = require_isKey(), toKey = require_toKey();
  function property(path) {
    return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
  }
  property_1 = property;
  return property_1;
}
var _baseIteratee;
var hasRequired_baseIteratee;
function require_baseIteratee() {
  if (hasRequired_baseIteratee) return _baseIteratee;
  hasRequired_baseIteratee = 1;
  var baseMatches = require_baseMatches(), baseMatchesProperty = require_baseMatchesProperty(), identity = requireIdentity(), isArray = requireIsArray(), property = requireProperty();
  function baseIteratee(value) {
    if (typeof value == "function") {
      return value;
    }
    if (value == null) {
      return identity;
    }
    if (typeof value == "object") {
      return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
    }
    return property(value);
  }
  _baseIteratee = baseIteratee;
  return _baseIteratee;
}
var findIndex_1;
var hasRequiredFindIndex;
function requireFindIndex() {
  if (hasRequiredFindIndex) return findIndex_1;
  hasRequiredFindIndex = 1;
  var baseFindIndex = require_baseFindIndex(), baseIteratee = require_baseIteratee(), toInteger = requireToInteger();
  var nativeMax = Math.max;
  function findIndex2(array, predicate, fromIndex) {
    var length = array == null ? 0 : array.length;
    if (!length) {
      return -1;
    }
    var index = fromIndex == null ? 0 : toInteger(fromIndex);
    if (index < 0) {
      index = nativeMax(length + index, 0);
    }
    return baseFindIndex(array, baseIteratee(predicate, 3), index);
  }
  findIndex_1 = findIndex2;
  return findIndex_1;
}
var findIndexExports = requireFindIndex();
const findIndex$1 = /* @__PURE__ */ getDefaultExportFromCjs(findIndexExports);
var _baseRange;
var hasRequired_baseRange;
function require_baseRange() {
  if (hasRequired_baseRange) return _baseRange;
  hasRequired_baseRange = 1;
  var nativeCeil = Math.ceil, nativeMax = Math.max;
  function baseRange(start, end, step, fromRight) {
    var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result = Array(length);
    while (length--) {
      result[fromRight ? length : ++index] = start;
      start += step;
    }
    return result;
  }
  _baseRange = baseRange;
  return _baseRange;
}
var _createRange;
var hasRequired_createRange;
function require_createRange() {
  if (hasRequired_createRange) return _createRange;
  hasRequired_createRange = 1;
  var baseRange = require_baseRange(), isIterateeCall = require_isIterateeCall(), toFinite = requireToFinite();
  function createRange(fromRight) {
    return function(start, end, step) {
      if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
        end = step = void 0;
      }
      start = toFinite(start);
      if (end === void 0) {
        end = start;
        start = 0;
      } else {
        end = toFinite(end);
      }
      step = step === void 0 ? start < end ? 1 : -1 : toFinite(step);
      return baseRange(start, end, step, fromRight);
    };
  }
  _createRange = createRange;
  return _createRange;
}
var range_1;
var hasRequiredRange;
function requireRange() {
  if (hasRequiredRange) return range_1;
  hasRequiredRange = 1;
  var createRange = require_createRange();
  var range2 = createRange();
  range_1 = range2;
  return range_1;
}
var rangeExports = requireRange();
const range$1 = /* @__PURE__ */ getDefaultExportFromCjs(rangeExports);
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === "number" && value !== value;
};
function isEqual$1(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!isEqual$1(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual3) {
  if (isEqual3 === void 0) {
    isEqual3 = areInputsEqual;
  }
  var cache = null;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (cache && cache.lastThis === this && isEqual3(newArgs, cache.lastArgs)) {
      return cache.lastResult;
    }
    var lastResult = resultFn.apply(this, newArgs);
    cache = {
      lastResult,
      lastArgs: newArgs,
      lastThis: this
    };
    return lastResult;
  }
  memoized.clear = function clear2() {
    cache = null;
  };
  return memoized;
}
function getWidth(node, client) {
  const win = isWindow$1(node);
  return win ? win.innerWidth : offset$1(node).width;
}
var _isFlattenable;
var hasRequired_isFlattenable;
function require_isFlattenable() {
  if (hasRequired_isFlattenable) return _isFlattenable;
  hasRequired_isFlattenable = 1;
  var Symbol2 = require_Symbol(), isArguments = requireIsArguments(), isArray = requireIsArray();
  var spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : void 0;
  function isFlattenable(value) {
    return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
  }
  _isFlattenable = isFlattenable;
  return _isFlattenable;
}
var _baseFlatten;
var hasRequired_baseFlatten;
function require_baseFlatten() {
  if (hasRequired_baseFlatten) return _baseFlatten;
  hasRequired_baseFlatten = 1;
  var arrayPush = require_arrayPush(), isFlattenable = require_isFlattenable();
  function baseFlatten(array, depth, predicate, isStrict, result) {
    var index = -1, length = array.length;
    predicate || (predicate = isFlattenable);
    result || (result = []);
    while (++index < length) {
      var value = array[index];
      if (depth > 0 && predicate(value)) {
        if (depth > 1) {
          baseFlatten(value, depth - 1, predicate, isStrict, result);
        } else {
          arrayPush(result, value);
        }
      } else if (!isStrict) {
        result[result.length] = value;
      }
    }
    return result;
  }
  _baseFlatten = baseFlatten;
  return _baseFlatten;
}
var _createBaseFor;
var hasRequired_createBaseFor;
function require_createBaseFor() {
  if (hasRequired_createBaseFor) return _createBaseFor;
  hasRequired_createBaseFor = 1;
  function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
      var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
      while (length--) {
        var key = props[fromRight ? length : ++index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }
  _createBaseFor = createBaseFor;
  return _createBaseFor;
}
var _baseFor;
var hasRequired_baseFor;
function require_baseFor() {
  if (hasRequired_baseFor) return _baseFor;
  hasRequired_baseFor = 1;
  var createBaseFor = require_createBaseFor();
  var baseFor = createBaseFor();
  _baseFor = baseFor;
  return _baseFor;
}
var _baseForOwn;
var hasRequired_baseForOwn;
function require_baseForOwn() {
  if (hasRequired_baseForOwn) return _baseForOwn;
  hasRequired_baseForOwn = 1;
  var baseFor = require_baseFor(), keys = requireKeys();
  function baseForOwn(object, iteratee) {
    return object && baseFor(object, iteratee, keys);
  }
  _baseForOwn = baseForOwn;
  return _baseForOwn;
}
var _createBaseEach;
var hasRequired_createBaseEach;
function require_createBaseEach() {
  if (hasRequired_createBaseEach) return _createBaseEach;
  hasRequired_createBaseEach = 1;
  var isArrayLike = requireIsArrayLike();
  function createBaseEach(eachFunc, fromRight) {
    return function(collection, iteratee) {
      if (collection == null) {
        return collection;
      }
      if (!isArrayLike(collection)) {
        return eachFunc(collection, iteratee);
      }
      var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
      while (fromRight ? index-- : ++index < length) {
        if (iteratee(iterable[index], index, iterable) === false) {
          break;
        }
      }
      return collection;
    };
  }
  _createBaseEach = createBaseEach;
  return _createBaseEach;
}
var _baseEach;
var hasRequired_baseEach;
function require_baseEach() {
  if (hasRequired_baseEach) return _baseEach;
  hasRequired_baseEach = 1;
  var baseForOwn = require_baseForOwn(), createBaseEach = require_createBaseEach();
  var baseEach = createBaseEach(baseForOwn);
  _baseEach = baseEach;
  return _baseEach;
}
var _baseMap;
var hasRequired_baseMap;
function require_baseMap() {
  if (hasRequired_baseMap) return _baseMap;
  hasRequired_baseMap = 1;
  var baseEach = require_baseEach(), isArrayLike = requireIsArrayLike();
  function baseMap(collection, iteratee) {
    var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
    baseEach(collection, function(value, key, collection2) {
      result[++index] = iteratee(value, key, collection2);
    });
    return result;
  }
  _baseMap = baseMap;
  return _baseMap;
}
var _baseSortBy;
var hasRequired_baseSortBy;
function require_baseSortBy() {
  if (hasRequired_baseSortBy) return _baseSortBy;
  hasRequired_baseSortBy = 1;
  function baseSortBy(array, comparer) {
    var length = array.length;
    array.sort(comparer);
    while (length--) {
      array[length] = array[length].value;
    }
    return array;
  }
  _baseSortBy = baseSortBy;
  return _baseSortBy;
}
var _compareAscending;
var hasRequired_compareAscending;
function require_compareAscending() {
  if (hasRequired_compareAscending) return _compareAscending;
  hasRequired_compareAscending = 1;
  var isSymbol = requireIsSymbol();
  function compareAscending2(value, other) {
    if (value !== other) {
      var valIsDefined = value !== void 0, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
      var othIsDefined = other !== void 0, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
      if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
        return 1;
      }
      if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
        return -1;
      }
    }
    return 0;
  }
  _compareAscending = compareAscending2;
  return _compareAscending;
}
var _compareMultiple;
var hasRequired_compareMultiple;
function require_compareMultiple() {
  if (hasRequired_compareMultiple) return _compareMultiple;
  hasRequired_compareMultiple = 1;
  var compareAscending2 = require_compareAscending();
  function compareMultiple(object, other, orders) {
    var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
    while (++index < length) {
      var result = compareAscending2(objCriteria[index], othCriteria[index]);
      if (result) {
        if (index >= ordersLength) {
          return result;
        }
        var order = orders[index];
        return result * (order == "desc" ? -1 : 1);
      }
    }
    return object.index - other.index;
  }
  _compareMultiple = compareMultiple;
  return _compareMultiple;
}
var _baseOrderBy;
var hasRequired_baseOrderBy;
function require_baseOrderBy() {
  if (hasRequired_baseOrderBy) return _baseOrderBy;
  hasRequired_baseOrderBy = 1;
  var arrayMap = require_arrayMap(), baseGet = require_baseGet(), baseIteratee = require_baseIteratee(), baseMap = require_baseMap(), baseSortBy = require_baseSortBy(), baseUnary = require_baseUnary(), compareMultiple = require_compareMultiple(), identity = requireIdentity(), isArray = requireIsArray();
  function baseOrderBy(collection, iteratees, orders) {
    if (iteratees.length) {
      iteratees = arrayMap(iteratees, function(iteratee) {
        if (isArray(iteratee)) {
          return function(value) {
            return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
          };
        }
        return iteratee;
      });
    } else {
      iteratees = [identity];
    }
    var index = -1;
    iteratees = arrayMap(iteratees, baseUnary(baseIteratee));
    var result = baseMap(collection, function(value, key, collection2) {
      var criteria = arrayMap(iteratees, function(iteratee) {
        return iteratee(value);
      });
      return { "criteria": criteria, "index": ++index, "value": value };
    });
    return baseSortBy(result, function(object, other) {
      return compareMultiple(object, other, orders);
    });
  }
  _baseOrderBy = baseOrderBy;
  return _baseOrderBy;
}
var _apply;
var hasRequired_apply;
function require_apply() {
  if (hasRequired_apply) return _apply;
  hasRequired_apply = 1;
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);
      case 1:
        return func.call(thisArg, args[0]);
      case 2:
        return func.call(thisArg, args[0], args[1]);
      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }
  _apply = apply;
  return _apply;
}
var _overRest;
var hasRequired_overRest;
function require_overRest() {
  if (hasRequired_overRest) return _overRest;
  hasRequired_overRest = 1;
  var apply = require_apply();
  var nativeMax = Math.max;
  function overRest(func, start, transform2) {
    start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
    return function() {
      var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = transform2(array);
      return apply(func, this, otherArgs);
    };
  }
  _overRest = overRest;
  return _overRest;
}
var constant_1;
var hasRequiredConstant;
function requireConstant() {
  if (hasRequiredConstant) return constant_1;
  hasRequiredConstant = 1;
  function constant(value) {
    return function() {
      return value;
    };
  }
  constant_1 = constant;
  return constant_1;
}
var _defineProperty;
var hasRequired_defineProperty;
function require_defineProperty() {
  if (hasRequired_defineProperty) return _defineProperty;
  hasRequired_defineProperty = 1;
  var getNative = require_getNative();
  var defineProperty2 = (function() {
    try {
      var func = getNative(Object, "defineProperty");
      func({}, "", {});
      return func;
    } catch (e) {
    }
  })();
  _defineProperty = defineProperty2;
  return _defineProperty;
}
var _baseSetToString;
var hasRequired_baseSetToString;
function require_baseSetToString() {
  if (hasRequired_baseSetToString) return _baseSetToString;
  hasRequired_baseSetToString = 1;
  var constant = requireConstant(), defineProperty2 = require_defineProperty(), identity = requireIdentity();
  var baseSetToString = !defineProperty2 ? identity : function(func, string) {
    return defineProperty2(func, "toString", {
      "configurable": true,
      "enumerable": false,
      "value": constant(string),
      "writable": true
    });
  };
  _baseSetToString = baseSetToString;
  return _baseSetToString;
}
var _shortOut;
var hasRequired_shortOut;
function require_shortOut() {
  if (hasRequired_shortOut) return _shortOut;
  hasRequired_shortOut = 1;
  var HOT_COUNT = 800, HOT_SPAN = 16;
  var nativeNow = Date.now;
  function shortOut(func) {
    var count = 0, lastCalled = 0;
    return function() {
      var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(void 0, arguments);
    };
  }
  _shortOut = shortOut;
  return _shortOut;
}
var _setToString;
var hasRequired_setToString;
function require_setToString() {
  if (hasRequired_setToString) return _setToString;
  hasRequired_setToString = 1;
  var baseSetToString = require_baseSetToString(), shortOut = require_shortOut();
  var setToString = shortOut(baseSetToString);
  _setToString = setToString;
  return _setToString;
}
var _baseRest;
var hasRequired_baseRest;
function require_baseRest() {
  if (hasRequired_baseRest) return _baseRest;
  hasRequired_baseRest = 1;
  var identity = requireIdentity(), overRest = require_overRest(), setToString = require_setToString();
  function baseRest(func, start) {
    return setToString(overRest(func, start, identity), func + "");
  }
  _baseRest = baseRest;
  return _baseRest;
}
var sortBy_1;
var hasRequiredSortBy;
function requireSortBy() {
  if (hasRequiredSortBy) return sortBy_1;
  hasRequiredSortBy = 1;
  var baseFlatten = require_baseFlatten(), baseOrderBy = require_baseOrderBy(), baseRest = require_baseRest(), isIterateeCall = require_isIterateeCall();
  var sortBy2 = baseRest(function(collection, iteratees) {
    if (collection == null) {
      return [];
    }
    var length = iteratees.length;
    if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
      iteratees = [];
    } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
      iteratees = [iteratees[0]];
    }
    return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
  });
  sortBy_1 = sortBy2;
  return sortBy_1;
}
var sortByExports = requireSortBy();
const sortBy = /* @__PURE__ */ getDefaultExportFromCjs(sortByExports);
let size;
function scrollbarSize$1(recalc) {
  if (!size && size !== 0 || recalc) {
    if (canUseDOM$2) {
      const scrollDiv = document.createElement("div");
      scrollDiv.style.position = "absolute";
      scrollDiv.style.top = "-9999px";
      scrollDiv.style.width = "50px";
      scrollDiv.style.height = "50px";
      scrollDiv.style.overflow = "scroll";
      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }
  return size;
}
function _toArray(r2) {
  return _arrayWithHoles(r2) || _iterableToArray(r2) || _unsupportedIterableToArray(r2) || _nonIterableRest();
}
function hasClass$1(element, className) {
  if (element.classList) return element.classList.contains(className);
  return ` ${element.className.baseVal || element.className} `.indexOf(` ${className} `) !== -1;
}
function addClass$1(element, className) {
  if (element.classList) element.classList.add(className);
  else if (!hasClass$1(element, className)) if (typeof element.className === "string") element.className = `${element.className} ${className}`;
  else element.setAttribute("class", `${element.className && element.className.baseVal || ""} ${className}`);
}
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp(`(^|\\s)${classToRemove}(?:\\s|$)`, "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function removeClass$1(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === "string") {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
  }
}
var _nativeKeysIn;
var hasRequired_nativeKeysIn;
function require_nativeKeysIn() {
  if (hasRequired_nativeKeysIn) return _nativeKeysIn;
  hasRequired_nativeKeysIn = 1;
  function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }
  _nativeKeysIn = nativeKeysIn;
  return _nativeKeysIn;
}
var _baseKeysIn;
var hasRequired_baseKeysIn;
function require_baseKeysIn() {
  if (hasRequired_baseKeysIn) return _baseKeysIn;
  hasRequired_baseKeysIn = 1;
  var isObject = requireIsObject(), isPrototype = require_isPrototype(), nativeKeysIn = require_nativeKeysIn();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function baseKeysIn(object) {
    if (!isObject(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype(object), result = [];
    for (var key in object) {
      if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }
  _baseKeysIn = baseKeysIn;
  return _baseKeysIn;
}
var keysIn_1;
var hasRequiredKeysIn;
function requireKeysIn() {
  if (hasRequiredKeysIn) return keysIn_1;
  hasRequiredKeysIn = 1;
  var arrayLikeKeys = require_arrayLikeKeys(), baseKeysIn = require_baseKeysIn(), isArrayLike = requireIsArrayLike();
  function keysIn(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
  }
  keysIn_1 = keysIn;
  return keysIn_1;
}
var defaults_1;
var hasRequiredDefaults;
function requireDefaults() {
  if (hasRequiredDefaults) return defaults_1;
  hasRequiredDefaults = 1;
  var baseRest = require_baseRest(), eq2 = requireEq(), isIterateeCall = require_isIterateeCall(), keysIn = requireKeysIn();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var defaults2 = baseRest(function(object, sources) {
    object = Object(object);
    var index = -1;
    var length = sources.length;
    var guard = length > 2 ? sources[2] : void 0;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      length = 1;
    }
    while (++index < length) {
      var source = sources[index];
      var props = keysIn(source);
      var propsIndex = -1;
      var propsLength = props.length;
      while (++propsIndex < propsLength) {
        var key = props[propsIndex];
        var value = object[key];
        if (value === void 0 || eq2(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
          object[key] = source[key];
        }
      }
    }
    return object;
  });
  defaults_1 = defaults2;
  return defaults_1;
}
var defaultsExports = requireDefaults();
const defaults = /* @__PURE__ */ getDefaultExportFromCjs(defaultsExports);
var _baseAssignValue;
var hasRequired_baseAssignValue;
function require_baseAssignValue() {
  if (hasRequired_baseAssignValue) return _baseAssignValue;
  hasRequired_baseAssignValue = 1;
  var defineProperty2 = require_defineProperty();
  function baseAssignValue(object, key, value) {
    if (key == "__proto__" && defineProperty2) {
      defineProperty2(object, key, {
        "configurable": true,
        "enumerable": true,
        "value": value,
        "writable": true
      });
    } else {
      object[key] = value;
    }
  }
  _baseAssignValue = baseAssignValue;
  return _baseAssignValue;
}
var mapValues_1;
var hasRequiredMapValues;
function requireMapValues() {
  if (hasRequiredMapValues) return mapValues_1;
  hasRequiredMapValues = 1;
  var baseAssignValue = require_baseAssignValue(), baseForOwn = require_baseForOwn(), baseIteratee = require_baseIteratee();
  function mapValues2(object, iteratee) {
    var result = {};
    iteratee = baseIteratee(iteratee, 3);
    baseForOwn(object, function(value, key, object2) {
      baseAssignValue(result, key, iteratee(value, key, object2));
    });
    return result;
  }
  mapValues_1 = mapValues2;
  return mapValues_1;
}
var mapValuesExports = requireMapValues();
const mapValues = /* @__PURE__ */ getDefaultExportFromCjs(mapValuesExports);
var _arrayEach;
var hasRequired_arrayEach;
function require_arrayEach() {
  if (hasRequired_arrayEach) return _arrayEach;
  hasRequired_arrayEach = 1;
  function arrayEach(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length;
    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }
  _arrayEach = arrayEach;
  return _arrayEach;
}
var _assignValue;
var hasRequired_assignValue;
function require_assignValue() {
  if (hasRequired_assignValue) return _assignValue;
  hasRequired_assignValue = 1;
  var baseAssignValue = require_baseAssignValue(), eq2 = requireEq();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty.call(object, key) && eq2(objValue, value)) || value === void 0 && !(key in object)) {
      baseAssignValue(object, key, value);
    }
  }
  _assignValue = assignValue;
  return _assignValue;
}
var _copyObject;
var hasRequired_copyObject;
function require_copyObject() {
  if (hasRequired_copyObject) return _copyObject;
  hasRequired_copyObject = 1;
  var assignValue = require_assignValue(), baseAssignValue = require_baseAssignValue();
  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index = -1, length = props.length;
    while (++index < length) {
      var key = props[index];
      var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
      if (newValue === void 0) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue(object, key, newValue);
      } else {
        assignValue(object, key, newValue);
      }
    }
    return object;
  }
  _copyObject = copyObject;
  return _copyObject;
}
var _baseAssign;
var hasRequired_baseAssign;
function require_baseAssign() {
  if (hasRequired_baseAssign) return _baseAssign;
  hasRequired_baseAssign = 1;
  var copyObject = require_copyObject(), keys = requireKeys();
  function baseAssign(object, source) {
    return object && copyObject(source, keys(source), object);
  }
  _baseAssign = baseAssign;
  return _baseAssign;
}
var _baseAssignIn;
var hasRequired_baseAssignIn;
function require_baseAssignIn() {
  if (hasRequired_baseAssignIn) return _baseAssignIn;
  hasRequired_baseAssignIn = 1;
  var copyObject = require_copyObject(), keysIn = requireKeysIn();
  function baseAssignIn(object, source) {
    return object && copyObject(source, keysIn(source), object);
  }
  _baseAssignIn = baseAssignIn;
  return _baseAssignIn;
}
var _cloneBuffer = { exports: {} };
_cloneBuffer.exports;
var hasRequired_cloneBuffer;
function require_cloneBuffer() {
  if (hasRequired_cloneBuffer) return _cloneBuffer.exports;
  hasRequired_cloneBuffer = 1;
  (function(module, exports) {
    var root = require_root();
    var freeExports = exports && !exports.nodeType && exports;
    var freeModule = freeExports && true && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer = moduleExports ? root.Buffer : void 0, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }
    module.exports = cloneBuffer;
  })(_cloneBuffer, _cloneBuffer.exports);
  return _cloneBuffer.exports;
}
var _copyArray;
var hasRequired_copyArray;
function require_copyArray() {
  if (hasRequired_copyArray) return _copyArray;
  hasRequired_copyArray = 1;
  function copyArray(source, array) {
    var index = -1, length = source.length;
    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }
  _copyArray = copyArray;
  return _copyArray;
}
var _copySymbols;
var hasRequired_copySymbols;
function require_copySymbols() {
  if (hasRequired_copySymbols) return _copySymbols;
  hasRequired_copySymbols = 1;
  var copyObject = require_copyObject(), getSymbols = require_getSymbols();
  function copySymbols(source, object) {
    return copyObject(source, getSymbols(source), object);
  }
  _copySymbols = copySymbols;
  return _copySymbols;
}
var _getPrototype;
var hasRequired_getPrototype;
function require_getPrototype() {
  if (hasRequired_getPrototype) return _getPrototype;
  hasRequired_getPrototype = 1;
  var overArg = require_overArg();
  var getPrototype = overArg(Object.getPrototypeOf, Object);
  _getPrototype = getPrototype;
  return _getPrototype;
}
var _getSymbolsIn;
var hasRequired_getSymbolsIn;
function require_getSymbolsIn() {
  if (hasRequired_getSymbolsIn) return _getSymbolsIn;
  hasRequired_getSymbolsIn = 1;
  var arrayPush = require_arrayPush(), getPrototype = require_getPrototype(), getSymbols = require_getSymbols(), stubArray = requireStubArray();
  var nativeGetSymbols = Object.getOwnPropertySymbols;
  var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
    var result = [];
    while (object) {
      arrayPush(result, getSymbols(object));
      object = getPrototype(object);
    }
    return result;
  };
  _getSymbolsIn = getSymbolsIn;
  return _getSymbolsIn;
}
var _copySymbolsIn;
var hasRequired_copySymbolsIn;
function require_copySymbolsIn() {
  if (hasRequired_copySymbolsIn) return _copySymbolsIn;
  hasRequired_copySymbolsIn = 1;
  var copyObject = require_copyObject(), getSymbolsIn = require_getSymbolsIn();
  function copySymbolsIn(source, object) {
    return copyObject(source, getSymbolsIn(source), object);
  }
  _copySymbolsIn = copySymbolsIn;
  return _copySymbolsIn;
}
var _getAllKeysIn;
var hasRequired_getAllKeysIn;
function require_getAllKeysIn() {
  if (hasRequired_getAllKeysIn) return _getAllKeysIn;
  hasRequired_getAllKeysIn = 1;
  var baseGetAllKeys = require_baseGetAllKeys(), getSymbolsIn = require_getSymbolsIn(), keysIn = requireKeysIn();
  function getAllKeysIn(object) {
    return baseGetAllKeys(object, keysIn, getSymbolsIn);
  }
  _getAllKeysIn = getAllKeysIn;
  return _getAllKeysIn;
}
var _initCloneArray;
var hasRequired_initCloneArray;
function require_initCloneArray() {
  if (hasRequired_initCloneArray) return _initCloneArray;
  hasRequired_initCloneArray = 1;
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function initCloneArray(array) {
    var length = array.length, result = new array.constructor(length);
    if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
      result.index = array.index;
      result.input = array.input;
    }
    return result;
  }
  _initCloneArray = initCloneArray;
  return _initCloneArray;
}
var _cloneArrayBuffer;
var hasRequired_cloneArrayBuffer;
function require_cloneArrayBuffer() {
  if (hasRequired_cloneArrayBuffer) return _cloneArrayBuffer;
  hasRequired_cloneArrayBuffer = 1;
  var Uint8Array = require_Uint8Array();
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array(result).set(new Uint8Array(arrayBuffer));
    return result;
  }
  _cloneArrayBuffer = cloneArrayBuffer;
  return _cloneArrayBuffer;
}
var _cloneDataView;
var hasRequired_cloneDataView;
function require_cloneDataView() {
  if (hasRequired_cloneDataView) return _cloneDataView;
  hasRequired_cloneDataView = 1;
  var cloneArrayBuffer = require_cloneArrayBuffer();
  function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }
  _cloneDataView = cloneDataView;
  return _cloneDataView;
}
var _cloneRegExp;
var hasRequired_cloneRegExp;
function require_cloneRegExp() {
  if (hasRequired_cloneRegExp) return _cloneRegExp;
  hasRequired_cloneRegExp = 1;
  var reFlags = /\w*$/;
  function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }
  _cloneRegExp = cloneRegExp;
  return _cloneRegExp;
}
var _cloneSymbol;
var hasRequired_cloneSymbol;
function require_cloneSymbol() {
  if (hasRequired_cloneSymbol) return _cloneSymbol;
  hasRequired_cloneSymbol = 1;
  var Symbol2 = require_Symbol();
  var symbolProto = Symbol2 ? Symbol2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
  function cloneSymbol(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
  }
  _cloneSymbol = cloneSymbol;
  return _cloneSymbol;
}
var _cloneTypedArray;
var hasRequired_cloneTypedArray;
function require_cloneTypedArray() {
  if (hasRequired_cloneTypedArray) return _cloneTypedArray;
  hasRequired_cloneTypedArray = 1;
  var cloneArrayBuffer = require_cloneArrayBuffer();
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }
  _cloneTypedArray = cloneTypedArray;
  return _cloneTypedArray;
}
var _initCloneByTag;
var hasRequired_initCloneByTag;
function require_initCloneByTag() {
  if (hasRequired_initCloneByTag) return _initCloneByTag;
  hasRequired_initCloneByTag = 1;
  var cloneArrayBuffer = require_cloneArrayBuffer(), cloneDataView = require_cloneDataView(), cloneRegExp = require_cloneRegExp(), cloneSymbol = require_cloneSymbol(), cloneTypedArray = require_cloneTypedArray();
  var boolTag = "[object Boolean]", dateTag = "[object Date]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
  var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
  function initCloneByTag(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag:
        return cloneArrayBuffer(object);
      case boolTag:
      case dateTag:
        return new Ctor(+object);
      case dataViewTag:
        return cloneDataView(object, isDeep);
      case float32Tag:
      case float64Tag:
      case int8Tag:
      case int16Tag:
      case int32Tag:
      case uint8Tag:
      case uint8ClampedTag:
      case uint16Tag:
      case uint32Tag:
        return cloneTypedArray(object, isDeep);
      case mapTag:
        return new Ctor();
      case numberTag:
      case stringTag:
        return new Ctor(object);
      case regexpTag:
        return cloneRegExp(object);
      case setTag:
        return new Ctor();
      case symbolTag:
        return cloneSymbol(object);
    }
  }
  _initCloneByTag = initCloneByTag;
  return _initCloneByTag;
}
var _baseCreate;
var hasRequired_baseCreate;
function require_baseCreate() {
  if (hasRequired_baseCreate) return _baseCreate;
  hasRequired_baseCreate = 1;
  var isObject = requireIsObject();
  var objectCreate = Object.create;
  var baseCreate = /* @__PURE__ */ (function() {
    function object() {
    }
    return function(proto) {
      if (!isObject(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object();
      object.prototype = void 0;
      return result;
    };
  })();
  _baseCreate = baseCreate;
  return _baseCreate;
}
var _initCloneObject;
var hasRequired_initCloneObject;
function require_initCloneObject() {
  if (hasRequired_initCloneObject) return _initCloneObject;
  hasRequired_initCloneObject = 1;
  var baseCreate = require_baseCreate(), getPrototype = require_getPrototype(), isPrototype = require_isPrototype();
  function initCloneObject(object) {
    return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
  }
  _initCloneObject = initCloneObject;
  return _initCloneObject;
}
var _baseIsMap;
var hasRequired_baseIsMap;
function require_baseIsMap() {
  if (hasRequired_baseIsMap) return _baseIsMap;
  hasRequired_baseIsMap = 1;
  var getTag = require_getTag(), isObjectLike = requireIsObjectLike();
  var mapTag = "[object Map]";
  function baseIsMap(value) {
    return isObjectLike(value) && getTag(value) == mapTag;
  }
  _baseIsMap = baseIsMap;
  return _baseIsMap;
}
var isMap_1;
var hasRequiredIsMap;
function requireIsMap() {
  if (hasRequiredIsMap) return isMap_1;
  hasRequiredIsMap = 1;
  var baseIsMap = require_baseIsMap(), baseUnary = require_baseUnary(), nodeUtil = require_nodeUtil();
  var nodeIsMap = nodeUtil && nodeUtil.isMap;
  var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
  isMap_1 = isMap;
  return isMap_1;
}
var _baseIsSet;
var hasRequired_baseIsSet;
function require_baseIsSet() {
  if (hasRequired_baseIsSet) return _baseIsSet;
  hasRequired_baseIsSet = 1;
  var getTag = require_getTag(), isObjectLike = requireIsObjectLike();
  var setTag = "[object Set]";
  function baseIsSet(value) {
    return isObjectLike(value) && getTag(value) == setTag;
  }
  _baseIsSet = baseIsSet;
  return _baseIsSet;
}
var isSet_1;
var hasRequiredIsSet;
function requireIsSet() {
  if (hasRequiredIsSet) return isSet_1;
  hasRequiredIsSet = 1;
  var baseIsSet = require_baseIsSet(), baseUnary = require_baseUnary(), nodeUtil = require_nodeUtil();
  var nodeIsSet = nodeUtil && nodeUtil.isSet;
  var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
  isSet_1 = isSet;
  return isSet_1;
}
var _baseClone;
var hasRequired_baseClone;
function require_baseClone() {
  if (hasRequired_baseClone) return _baseClone;
  hasRequired_baseClone = 1;
  var Stack2 = require_Stack(), arrayEach = require_arrayEach(), assignValue = require_assignValue(), baseAssign = require_baseAssign(), baseAssignIn = require_baseAssignIn(), cloneBuffer = require_cloneBuffer(), copyArray = require_copyArray(), copySymbols = require_copySymbols(), copySymbolsIn = require_copySymbolsIn(), getAllKeys = require_getAllKeys(), getAllKeysIn = require_getAllKeysIn(), getTag = require_getTag(), initCloneArray = require_initCloneArray(), initCloneByTag = require_initCloneByTag(), initCloneObject = require_initCloneObject(), isArray = requireIsArray(), isBuffer2 = requireIsBuffer(), isMap = requireIsMap(), isObject = requireIsObject(), isSet = requireIsSet(), keys = requireKeys(), keysIn = requireKeysIn();
  var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
  var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
  function baseClone(value, bitmask, customizer, key, object, stack) {
    var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
    if (customizer) {
      result = object ? customizer(value, key, object, stack) : customizer(value);
    }
    if (result !== void 0) {
      return result;
    }
    if (!isObject(value)) {
      return value;
    }
    var isArr = isArray(value);
    if (isArr) {
      result = initCloneArray(value);
      if (!isDeep) {
        return copyArray(value, result);
      }
    } else {
      var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
      if (isBuffer2(value)) {
        return cloneBuffer(value, isDeep);
      }
      if (tag == objectTag || tag == argsTag || isFunc && !object) {
        result = isFlat || isFunc ? {} : initCloneObject(value);
        if (!isDeep) {
          return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }
        result = initCloneByTag(value, tag, isDeep);
      }
    }
    stack || (stack = new Stack2());
    var stacked = stack.get(value);
    if (stacked) {
      return stacked;
    }
    stack.set(value, result);
    if (isSet(value)) {
      value.forEach(function(subValue) {
        result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
      });
    } else if (isMap(value)) {
      value.forEach(function(subValue, key2) {
        result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
      });
    }
    var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
    var props = isArr ? void 0 : keysFunc(value);
    arrayEach(props || value, function(subValue, key2) {
      if (props) {
        key2 = subValue;
        subValue = value[key2];
      }
      assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
    return result;
  }
  _baseClone = baseClone;
  return _baseClone;
}
var last_1;
var hasRequiredLast;
function requireLast() {
  if (hasRequiredLast) return last_1;
  hasRequiredLast = 1;
  function last(array) {
    var length = array == null ? 0 : array.length;
    return length ? array[length - 1] : void 0;
  }
  last_1 = last;
  return last_1;
}
var _parent;
var hasRequired_parent;
function require_parent() {
  if (hasRequired_parent) return _parent;
  hasRequired_parent = 1;
  var baseGet = require_baseGet(), baseSlice = require_baseSlice();
  function parent(object, path) {
    return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
  }
  _parent = parent;
  return _parent;
}
var _baseUnset;
var hasRequired_baseUnset;
function require_baseUnset() {
  if (hasRequired_baseUnset) return _baseUnset;
  hasRequired_baseUnset = 1;
  var castPath = require_castPath(), last = requireLast(), parent = require_parent(), toKey = require_toKey();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function baseUnset(object, path) {
    path = castPath(path, object);
    var index = -1, length = path.length;
    if (!length) {
      return true;
    }
    while (++index < length) {
      var key = toKey(path[index]);
      if (key === "__proto__" && !hasOwnProperty.call(object, "__proto__")) {
        return false;
      }
      if ((key === "constructor" || key === "prototype") && index < length - 1) {
        return false;
      }
    }
    var obj = parent(object, path);
    return obj == null || delete obj[toKey(last(path))];
  }
  _baseUnset = baseUnset;
  return _baseUnset;
}
var isPlainObject_1;
var hasRequiredIsPlainObject;
function requireIsPlainObject() {
  if (hasRequiredIsPlainObject) return isPlainObject_1;
  hasRequiredIsPlainObject = 1;
  var baseGetTag = require_baseGetTag(), getPrototype = require_getPrototype(), isObjectLike = requireIsObjectLike();
  var objectTag = "[object Object]";
  var funcProto = Function.prototype, objectProto = Object.prototype;
  var funcToString = funcProto.toString;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var objectCtorString = funcToString.call(Object);
  function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
      return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
    return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
  }
  isPlainObject_1 = isPlainObject;
  return isPlainObject_1;
}
var _customOmitClone;
var hasRequired_customOmitClone;
function require_customOmitClone() {
  if (hasRequired_customOmitClone) return _customOmitClone;
  hasRequired_customOmitClone = 1;
  var isPlainObject = requireIsPlainObject();
  function customOmitClone(value) {
    return isPlainObject(value) ? void 0 : value;
  }
  _customOmitClone = customOmitClone;
  return _customOmitClone;
}
var flatten_1;
var hasRequiredFlatten;
function requireFlatten() {
  if (hasRequiredFlatten) return flatten_1;
  hasRequiredFlatten = 1;
  var baseFlatten = require_baseFlatten();
  function flatten(array) {
    var length = array == null ? 0 : array.length;
    return length ? baseFlatten(array, 1) : [];
  }
  flatten_1 = flatten;
  return flatten_1;
}
var _flatRest;
var hasRequired_flatRest;
function require_flatRest() {
  if (hasRequired_flatRest) return _flatRest;
  hasRequired_flatRest = 1;
  var flatten = requireFlatten(), overRest = require_overRest(), setToString = require_setToString();
  function flatRest(func) {
    return setToString(overRest(func, void 0, flatten), func + "");
  }
  _flatRest = flatRest;
  return _flatRest;
}
var omit_1;
var hasRequiredOmit;
function requireOmit() {
  if (hasRequiredOmit) return omit_1;
  hasRequiredOmit = 1;
  var arrayMap = require_arrayMap(), baseClone = require_baseClone(), baseUnset = require_baseUnset(), castPath = require_castPath(), copyObject = require_copyObject(), customOmitClone = require_customOmitClone(), flatRest = require_flatRest(), getAllKeysIn = require_getAllKeysIn();
  var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
  var omit2 = flatRest(function(object, paths) {
    var result = {};
    if (object == null) {
      return result;
    }
    var isDeep = false;
    paths = arrayMap(paths, function(path) {
      path = castPath(path, object);
      isDeep || (isDeep = path.length > 1);
      return path;
    });
    copyObject(object, getAllKeysIn(object), result);
    if (isDeep) {
      result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
    }
    var length = paths.length;
    while (length--) {
      baseUnset(result, paths[length]);
    }
    return result;
  });
  omit_1 = omit2;
  return omit_1;
}
var omitExports = requireOmit();
const omit = /* @__PURE__ */ getDefaultExportFromCjs(omitExports);
var transform_1;
var hasRequiredTransform;
function requireTransform() {
  if (hasRequiredTransform) return transform_1;
  hasRequiredTransform = 1;
  var arrayEach = require_arrayEach(), baseCreate = require_baseCreate(), baseForOwn = require_baseForOwn(), baseIteratee = require_baseIteratee(), getPrototype = require_getPrototype(), isArray = requireIsArray(), isBuffer2 = requireIsBuffer(), isFunction2 = requireIsFunction(), isObject = requireIsObject(), isTypedArray = requireIsTypedArray();
  function transform2(object, iteratee, accumulator) {
    var isArr = isArray(object), isArrLike = isArr || isBuffer2(object) || isTypedArray(object);
    iteratee = baseIteratee(iteratee, 4);
    if (accumulator == null) {
      var Ctor = object && object.constructor;
      if (isArrLike) {
        accumulator = isArr ? new Ctor() : [];
      } else if (isObject(object)) {
        accumulator = isFunction2(Ctor) ? baseCreate(getPrototype(object)) : {};
      } else {
        accumulator = {};
      }
    }
    (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
      return iteratee(accumulator, value, index, object2);
    });
    return accumulator;
  }
  transform_1 = transform2;
  return transform_1;
}
var transformExports = requireTransform();
const transform = /* @__PURE__ */ getDefaultExportFromCjs(transformExports);
var isSameOrAfter$1 = { exports: {} };
var isSameOrAfter = isSameOrAfter$1.exports;
var hasRequiredIsSameOrAfter;
function requireIsSameOrAfter() {
  if (hasRequiredIsSameOrAfter) return isSameOrAfter$1.exports;
  hasRequiredIsSameOrAfter = 1;
  (function(module, exports) {
    !(function(e, t) {
      module.exports = t();
    })(isSameOrAfter, (function() {
      return function(e, t) {
        t.prototype.isSameOrAfter = function(e2, t2) {
          return this.isSame(e2, t2) || this.isAfter(e2, t2);
        };
      };
    }));
  })(isSameOrAfter$1);
  return isSameOrAfter$1.exports;
}
requireIsSameOrAfter();
var isSameOrBefore$1 = { exports: {} };
var isSameOrBefore = isSameOrBefore$1.exports;
var hasRequiredIsSameOrBefore;
function requireIsSameOrBefore() {
  if (hasRequiredIsSameOrBefore) return isSameOrBefore$1.exports;
  hasRequiredIsSameOrBefore = 1;
  (function(module, exports) {
    !(function(e, i) {
      module.exports = i();
    })(isSameOrBefore, (function() {
      return function(e, i) {
        i.prototype.isSameOrBefore = function(e2, i2) {
          return this.isSame(e2, i2) || this.isBefore(e2, i2);
        };
      };
    }));
  })(isSameOrBefore$1);
  return isSameOrBefore$1.exports;
}
requireIsSameOrBefore();
var localeData$1 = { exports: {} };
var localeData = localeData$1.exports;
var hasRequiredLocaleData;
function requireLocaleData() {
  if (hasRequiredLocaleData) return localeData$1.exports;
  hasRequiredLocaleData = 1;
  (function(module, exports) {
    !(function(n, e) {
      module.exports = e();
    })(localeData, (function() {
      return function(n, e, t) {
        var r2 = e.prototype, o2 = function(n2) {
          return n2 && (n2.indexOf ? n2 : n2.s);
        }, u = function(n2, e2, t2, r3, u2) {
          var i2 = n2.name ? n2 : n2.$locale(), a2 = o2(i2[e2]), s2 = o2(i2[t2]), f = a2 || s2.map((function(n3) {
            return n3.slice(0, r3);
          }));
          if (!u2) return f;
          var d = i2.weekStart;
          return f.map((function(n3, e3) {
            return f[(e3 + (d || 0)) % 7];
          }));
        }, i = function() {
          return t.Ls[t.locale()];
        }, a = function(n2, e2) {
          return n2.formats[e2] || (function(n3) {
            return n3.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(n4, e3, t2) {
              return e3 || t2.slice(1);
            }));
          })(n2.formats[e2.toUpperCase()]);
        }, s = function() {
          var n2 = this;
          return { months: function(e2) {
            return e2 ? e2.format("MMMM") : u(n2, "months");
          }, monthsShort: function(e2) {
            return e2 ? e2.format("MMM") : u(n2, "monthsShort", "months", 3);
          }, firstDayOfWeek: function() {
            return n2.$locale().weekStart || 0;
          }, weekdays: function(e2) {
            return e2 ? e2.format("dddd") : u(n2, "weekdays");
          }, weekdaysMin: function(e2) {
            return e2 ? e2.format("dd") : u(n2, "weekdaysMin", "weekdays", 2);
          }, weekdaysShort: function(e2) {
            return e2 ? e2.format("ddd") : u(n2, "weekdaysShort", "weekdays", 3);
          }, longDateFormat: function(e2) {
            return a(n2.$locale(), e2);
          }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
        };
        r2.localeData = function() {
          return s.bind(this)();
        }, t.localeData = function() {
          var n2 = i();
          return { firstDayOfWeek: function() {
            return n2.weekStart || 0;
          }, weekdays: function() {
            return t.weekdays();
          }, weekdaysShort: function() {
            return t.weekdaysShort();
          }, weekdaysMin: function() {
            return t.weekdaysMin();
          }, months: function() {
            return t.months();
          }, monthsShort: function() {
            return t.monthsShort();
          }, longDateFormat: function(e2) {
            return a(n2, e2);
          }, meridiem: n2.meridiem, ordinal: n2.ordinal };
        }, t.months = function() {
          return u(i(), "months");
        }, t.monthsShort = function() {
          return u(i(), "monthsShort", "months", 3);
        }, t.weekdays = function(n2) {
          return u(i(), "weekdays", null, null, n2);
        }, t.weekdaysShort = function(n2) {
          return u(i(), "weekdaysShort", "weekdays", 3, n2);
        }, t.weekdaysMin = function(n2) {
          return u(i(), "weekdaysMin", "weekdays", 2, n2);
        };
      };
    }));
  })(localeData$1);
  return localeData$1.exports;
}
requireLocaleData();
var minMax$1 = { exports: {} };
var minMax = minMax$1.exports;
var hasRequiredMinMax;
function requireMinMax() {
  if (hasRequiredMinMax) return minMax$1.exports;
  hasRequiredMinMax = 1;
  (function(module, exports) {
    !(function(e, n) {
      module.exports = n();
    })(minMax, (function() {
      return function(e, n, t) {
        var i = function(e2, n2) {
          if (!n2 || !n2.length || 1 === n2.length && !n2[0] || 1 === n2.length && Array.isArray(n2[0]) && !n2[0].length) return null;
          var t2;
          1 === n2.length && n2[0].length > 0 && (n2 = n2[0]);
          t2 = (n2 = n2.filter((function(e3) {
            return e3;
          })))[0];
          for (var i2 = 1; i2 < n2.length; i2 += 1) n2[i2].isValid() && !n2[i2][e2](t2) || (t2 = n2[i2]);
          return t2;
        };
        t.max = function() {
          var e2 = [].slice.call(arguments, 0);
          return i("isAfter", e2);
        }, t.min = function() {
          var e2 = [].slice.call(arguments, 0);
          return i("isBefore", e2);
        };
      };
    }));
  })(minMax$1);
  return minMax$1.exports;
}
requireMinMax();
var utc$1 = { exports: {} };
var utc = utc$1.exports;
var hasRequiredUtc;
function requireUtc() {
  if (hasRequiredUtc) return utc$1.exports;
  hasRequiredUtc = 1;
  (function(module, exports) {
    !(function(t, i) {
      module.exports = i();
    })(utc, (function() {
      var t = "minute", i = /[+-]\d\d(?::?\d\d)?/g, e = /([+-]|\d\d)/g;
      return function(s, f, n) {
        var u = f.prototype;
        n.utc = function(t2) {
          var i2 = { date: t2, utc: true, args: arguments };
          return new f(i2);
        }, u.utc = function(i2) {
          var e2 = n(this.toDate(), { locale: this.$L, utc: true });
          return i2 ? e2.add(this.utcOffset(), t) : e2;
        }, u.local = function() {
          return n(this.toDate(), { locale: this.$L, utc: false });
        };
        var r2 = u.parse;
        u.parse = function(t2) {
          t2.utc && (this.$u = true), this.$utils().u(t2.$offset) || (this.$offset = t2.$offset), r2.call(this, t2);
        };
        var o2 = u.init;
        u.init = function() {
          if (this.$u) {
            var t2 = this.$d;
            this.$y = t2.getUTCFullYear(), this.$M = t2.getUTCMonth(), this.$D = t2.getUTCDate(), this.$W = t2.getUTCDay(), this.$H = t2.getUTCHours(), this.$m = t2.getUTCMinutes(), this.$s = t2.getUTCSeconds(), this.$ms = t2.getUTCMilliseconds();
          } else o2.call(this);
        };
        var a = u.utcOffset;
        u.utcOffset = function(s2, f2) {
          var n2 = this.$utils().u;
          if (n2(s2)) return this.$u ? 0 : n2(this.$offset) ? a.call(this) : this.$offset;
          if ("string" == typeof s2 && (s2 = (function(t2) {
            void 0 === t2 && (t2 = "");
            var s3 = t2.match(i);
            if (!s3) return null;
            var f3 = ("" + s3[0]).match(e) || ["-", 0, 0], n3 = f3[0], u3 = 60 * +f3[1] + +f3[2];
            return 0 === u3 ? 0 : "+" === n3 ? u3 : -u3;
          })(s2), null === s2)) return this;
          var u2 = Math.abs(s2) <= 16 ? 60 * s2 : s2;
          if (0 === u2) return this.utc(f2);
          var r3 = this.clone();
          if (f2) return r3.$offset = u2, r3.$u = false, r3;
          var o3 = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          return (r3 = this.local().add(u2 + o3, t)).$offset = u2, r3.$x.$localOffset = o3, r3;
        };
        var h = u.format;
        u.format = function(t2) {
          var i2 = t2 || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
          return h.call(this, i2);
        }, u.valueOf = function() {
          var t2 = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
          return this.$d.valueOf() - 6e4 * t2;
        }, u.isUTC = function() {
          return !!this.$u;
        }, u.toISOString = function() {
          return this.toDate().toISOString();
        }, u.toString = function() {
          return this.toDate().toUTCString();
        };
        var l = u.toDate;
        u.toDate = function(t2) {
          return "s" === t2 && this.$offset ? n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : l.call(this);
        };
        var c = u.diff;
        u.diff = function(t2, i2, e2) {
          if (t2 && this.$u === t2.$u) return c.call(this, t2, i2, e2);
          var s2 = this.local(), f2 = n(t2).local();
          return c.call(s2, f2, i2, e2);
        };
      };
    }));
  })(utc$1);
  return utc$1.exports;
}
requireUtc();
var isLeapYear$1 = { exports: {} };
var isLeapYear = isLeapYear$1.exports;
var hasRequiredIsLeapYear;
function requireIsLeapYear() {
  if (hasRequiredIsLeapYear) return isLeapYear$1.exports;
  hasRequiredIsLeapYear = 1;
  (function(module, exports) {
    !(function(e, t) {
      module.exports = t();
    })(isLeapYear, (function() {
      return function(e, t) {
        t.prototype.isLeapYear = function() {
          return this.$y % 4 == 0 && this.$y % 100 != 0 || this.$y % 400 == 0;
        };
      };
    }));
  })(isLeapYear$1);
  return isLeapYear$1.exports;
}
requireIsLeapYear();
function NoopWrapper(props) {
  return props.children;
}
var navigate = {
  PREVIOUS: "PREV",
  NEXT: "NEXT",
  TODAY: "TODAY",
  DATE: "DATE"
};
var views$1 = {
  MONTH: "month",
  WEEK: "week",
  WORK_WEEK: "work_week",
  DAY: "day",
  AGENDA: "agenda"
};
var viewNames$1 = Object.keys(views$1).map(function(k) {
  return views$1[k];
});
o.oneOfType([o.string, o.func]);
o.any;
o.func;
o.oneOfType([o.arrayOf(o.oneOf(viewNames$1)), o.objectOf(function(prop, key) {
  var isBuiltinView = viewNames$1.indexOf(key) !== -1 && typeof prop[key] === "boolean";
  if (isBuiltinView) {
    return null;
  } else {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    return o.elementType.apply(o, [prop, key].concat(args));
  }
})]);
o.oneOfType([o.oneOf(["overlap", "no-overlap"]), o.func]);
var MILLI = {
  seconds: 1e3,
  minutes: 1e3 * 60,
  hours: 1e3 * 60 * 60,
  day: 1e3 * 60 * 60 * 24
};
function firstVisibleDay(date2, localizer2) {
  var firstOfMonth = startOf(date2, "month");
  return startOf(firstOfMonth, "week", localizer2.startOfWeek());
}
function lastVisibleDay(date2, localizer2) {
  var endOfMonth = endOf(date2, "month");
  return endOf(endOfMonth, "week", localizer2.startOfWeek());
}
function visibleDays(date2, localizer2) {
  var current = firstVisibleDay(date2, localizer2), last = lastVisibleDay(date2, localizer2), days = [];
  while (lte(current, last, "day")) {
    days.push(current);
    current = add(current, 1, "day");
  }
  return days;
}
function ceil(date2, unit) {
  var floor = startOf(date2, unit);
  return eq(floor, date2) ? floor : add(floor, 1, unit);
}
function range(start, end) {
  var unit = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "day";
  var current = start, days = [];
  while (lte(current, end, unit)) {
    days.push(current);
    current = add(current, 1, unit);
  }
  return days;
}
function merge(date2, time) {
  if (time == null && date2 == null) return null;
  if (time == null) time = /* @__PURE__ */ new Date();
  if (date2 == null) date2 = /* @__PURE__ */ new Date();
  date2 = startOf(date2, "day");
  date2 = hours(date2, hours(time));
  date2 = minutes(date2, minutes(time));
  date2 = seconds(date2, seconds(time));
  return milliseconds(date2, milliseconds(time));
}
function isJustDate(date2) {
  return hours(date2) === 0 && minutes(date2) === 0 && seconds(date2) === 0 && milliseconds(date2) === 0;
}
function duration(start, end, unit, firstOfWeek) {
  if (unit === "day") unit = "date";
  return Math.abs(
    // eslint-disable-next-line import/namespace
    dates[unit](start, void 0, firstOfWeek) - // eslint-disable-next-line import/namespace
    dates[unit](end, void 0, firstOfWeek)
  );
}
function diff(dateA, dateB, unit) {
  if (!unit || unit === "milliseconds") return Math.abs(+dateA - +dateB);
  return Math.round(Math.abs(+startOf(dateA, unit) / MILLI[unit] - +startOf(dateB, unit) / MILLI[unit]));
}
function ownKeys$a(e, r2) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e);
    r2 && (o2 = o2.filter(function(r22) {
      return Object.getOwnPropertyDescriptor(e, r22).enumerable;
    })), t.push.apply(t, o2);
  }
  return t;
}
function _objectSpread$a(e) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$a(Object(t), true).forEach(function(r22) {
      _defineProperty$1(e, r22, t[r22]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$a(Object(t)).forEach(function(r22) {
      Object.defineProperty(e, r22, Object.getOwnPropertyDescriptor(t, r22));
    });
  }
  return e;
}
var localePropType = o.oneOfType([o.string, o.func]);
function _format(localizer2, formatter, value, format2, culture) {
  var result = typeof format2 === "function" ? format2(value, culture, localizer2) : formatter.call(localizer2, value, format2, culture);
  invariant(result == null || typeof result === "string", "`localizer format(..)` must return a string, null, or undefined");
  return result;
}
function getSlotDate(dt, minutesFromMidnight, offset2) {
  return new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(), 0, minutesFromMidnight + offset2, 0, 0);
}
function getDstOffset(start, end) {
  return start.getTimezoneOffset() - end.getTimezoneOffset();
}
function getTotalMin(start, end) {
  return diff(start, end, "minutes") + getDstOffset(start, end);
}
function getMinutesFromMidnight(start) {
  var daystart = startOf(start, "day");
  return diff(daystart, start, "minutes") + getDstOffset(daystart, start);
}
function continuesPrior(start, first) {
  return lt(start, first, "day");
}
function continuesAfter(start, end, last) {
  var singleDayDuration = eq(start, end, "minutes");
  return singleDayDuration ? gte(end, last, "minutes") : gt(end, last, "minutes");
}
function daySpan(start, end) {
  return duration(start, end, "day");
}
function sortEvents$1(_ref) {
  var _ref$evtA = _ref.evtA, aStart = _ref$evtA.start, aEnd = _ref$evtA.end, aAllDay = _ref$evtA.allDay, _ref$evtB = _ref.evtB, bStart = _ref$evtB.start, bEnd = _ref$evtB.end, bAllDay = _ref$evtB.allDay;
  var startSort = +startOf(aStart, "day") - +startOf(bStart, "day");
  var durA = daySpan(aStart, aEnd);
  var durB = daySpan(bStart, bEnd);
  return startSort || // sort by start Day first
  durB - durA || // events spanning multiple days go first
  !!bAllDay - !!aAllDay || // then allDay single day events
  +aStart - +bStart || // then sort by start time
  +aEnd - +bEnd;
}
function inEventRange(_ref2) {
  var _ref2$event = _ref2.event, start = _ref2$event.start, end = _ref2$event.end, _ref2$range = _ref2.range, rangeStart = _ref2$range.start, rangeEnd = _ref2$range.end;
  var eStart = startOf(start, "day");
  var startsBeforeEnd = lte(eStart, rangeEnd, "day");
  var sameMin = neq(eStart, end, "minutes");
  var endsAfterStart = sameMin ? gt(end, rangeStart, "minutes") : gte(end, rangeStart, "minutes");
  return startsBeforeEnd && endsAfterStart;
}
function isSameDate(date1, date2) {
  return eq(date1, date2, "day");
}
function startAndEndAreDateOnly(start, end) {
  return isJustDate(start) && isJustDate(end);
}
var DateLocalizer = /* @__PURE__ */ _createClass(function DateLocalizer2(spec) {
  var _this = this;
  _classCallCheck(this, DateLocalizer2);
  invariant(typeof spec.format === "function", "date localizer `format(..)` must be a function");
  invariant(typeof spec.firstOfWeek === "function", "date localizer `firstOfWeek(..)` must be a function");
  this.propType = spec.propType || localePropType;
  this.formats = spec.formats;
  this.format = function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _format.apply(void 0, [_this, spec.format].concat(args));
  };
  this.startOfWeek = spec.firstOfWeek;
  this.merge = spec.merge || merge;
  this.inRange = spec.inRange || inRange$1;
  this.lt = spec.lt || lt;
  this.lte = spec.lte || lte;
  this.gt = spec.gt || gt;
  this.gte = spec.gte || gte;
  this.eq = spec.eq || eq;
  this.neq = spec.neq || neq;
  this.startOf = spec.startOf || startOf;
  this.endOf = spec.endOf || endOf;
  this.add = spec.add || add;
  this.range = spec.range || range;
  this.diff = spec.diff || diff;
  this.ceil = spec.ceil || ceil;
  this.min = spec.min || min;
  this.max = spec.max || max;
  this.minutes = spec.minutes || minutes;
  this.daySpan = spec.daySpan || daySpan;
  this.firstVisibleDay = spec.firstVisibleDay || firstVisibleDay;
  this.lastVisibleDay = spec.lastVisibleDay || lastVisibleDay;
  this.visibleDays = spec.visibleDays || visibleDays;
  this.getSlotDate = spec.getSlotDate || getSlotDate;
  this.getTimezoneOffset = spec.getTimezoneOffset || function(value) {
    return value.getTimezoneOffset();
  };
  this.getDstOffset = spec.getDstOffset || getDstOffset;
  this.getTotalMin = spec.getTotalMin || getTotalMin;
  this.getMinutesFromMidnight = spec.getMinutesFromMidnight || getMinutesFromMidnight;
  this.continuesPrior = spec.continuesPrior || continuesPrior;
  this.continuesAfter = spec.continuesAfter || continuesAfter;
  this.sortEvents = spec.sortEvents || sortEvents$1;
  this.inEventRange = spec.inEventRange || inEventRange;
  this.isSameDate = spec.isSameDate || isSameDate;
  this.startAndEndAreDateOnly = spec.startAndEndAreDateOnly || startAndEndAreDateOnly;
  this.segmentOffset = spec.browserTZOffset ? spec.browserTZOffset() : 0;
});
function mergeWithDefaults(localizer2, culture, formatOverrides, messages2) {
  var formats2 = _objectSpread$a(_objectSpread$a({}, localizer2.formats), formatOverrides);
  return _objectSpread$a(_objectSpread$a({}, localizer2), {}, {
    messages: messages2,
    startOfWeek: function startOfWeek2() {
      return localizer2.startOfWeek(culture);
    },
    format: function format2(value, _format2) {
      return localizer2.format(value, formats2[_format2] || _format2, culture);
    }
  });
}
function _callSuper$f(t, o2, e) {
  return o2 = _getPrototypeOf(o2), _possibleConstructorReturn(t, _isNativeReflectConstruct$f() ? Reflect.construct(o2, e || [], _getPrototypeOf(t).constructor) : o2.apply(t, e));
}
function _isNativeReflectConstruct$f() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct$f = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
var Toolbar = /* @__PURE__ */ (function(_React$Component) {
  function Toolbar2() {
    var _this;
    _classCallCheck(this, Toolbar2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$f(this, Toolbar2, [].concat(args));
    _this.navigate = function(action) {
      _this.props.onNavigate(action);
    };
    _this.view = function(view) {
      _this.props.onView(view);
    };
    return _this;
  }
  _inherits(Toolbar2, _React$Component);
  return _createClass(Toolbar2, [{
    key: "render",
    value: function render() {
      var _this$props = this.props, messages2 = _this$props.localizer.messages, label = _this$props.label;
      return /* @__PURE__ */ r.createElement("div", {
        className: "rbc-toolbar"
      }, /* @__PURE__ */ r.createElement("span", {
        className: "rbc-btn-group"
      }, /* @__PURE__ */ r.createElement("button", {
        type: "button",
        onClick: this.navigate.bind(null, navigate.TODAY)
      }, messages2.today), /* @__PURE__ */ r.createElement("button", {
        type: "button",
        onClick: this.navigate.bind(null, navigate.PREVIOUS)
      }, messages2.previous), /* @__PURE__ */ r.createElement("button", {
        type: "button",
        onClick: this.navigate.bind(null, navigate.NEXT)
      }, messages2.next)), /* @__PURE__ */ r.createElement("span", {
        className: "rbc-toolbar-label"
      }, label), /* @__PURE__ */ r.createElement("span", {
        className: "rbc-btn-group"
      }, this.viewNamesGroup(messages2)));
    }
  }, {
    key: "viewNamesGroup",
    value: function viewNamesGroup(messages2) {
      var _this2 = this;
      var viewNames2 = this.props.views;
      var view = this.props.view;
      if (viewNames2.length > 1) {
        return viewNames2.map(function(name) {
          return /* @__PURE__ */ r.createElement("button", {
            type: "button",
            key: name,
            className: clsx$1({
              "rbc-active": view === name
            }),
            onClick: _this2.view.bind(null, name)
          }, messages2[name]);
        });
      }
    }
  }]);
})(r.Component);
Toolbar.propTypes = {};
function notify(handler, args) {
  handler && handler.apply(null, [].concat(args));
}
function ownKeys$9(e, r2) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e);
    r2 && (o2 = o2.filter(function(r22) {
      return Object.getOwnPropertyDescriptor(e, r22).enumerable;
    })), t.push.apply(t, o2);
  }
  return t;
}
function _objectSpread$9(e) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$9(Object(t), true).forEach(function(r22) {
      _defineProperty$1(e, r22, t[r22]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$9(Object(t)).forEach(function(r22) {
      Object.defineProperty(e, r22, Object.getOwnPropertyDescriptor(t, r22));
    });
  }
  return e;
}
var defaultMessages = {
  date: "Date",
  time: "Time",
  event: "Event",
  allDay: "All Day",
  week: "Week",
  work_week: "Work Week",
  day: "Day",
  month: "Month",
  previous: "Back",
  next: "Next",
  yesterday: "Yesterday",
  tomorrow: "Tomorrow",
  today: "Today",
  agenda: "Agenda",
  noEventsInRange: "There are no events in this range.",
  showMore: function showMore(total) {
    return "+".concat(total, " more");
  }
};
function messages(msgs) {
  return _objectSpread$9(_objectSpread$9({}, defaultMessages), msgs);
}
function useClickOutside(_ref) {
  var ref = _ref.ref, callback = _ref.callback;
  reactExports.useEffect(function() {
    var handleClickOutside = function handleClickOutside2(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return function() {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}
var _excluded$7 = ["style", "className", "event", "selected", "isAllDay", "onSelect", "onDoubleClick", "onKeyPress", "localizer", "continuesPrior", "continuesAfter", "accessors", "getters", "children", "components", "slotStart", "slotEnd"];
function ownKeys$8(e, r2) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e);
    r2 && (o2 = o2.filter(function(r22) {
      return Object.getOwnPropertyDescriptor(e, r22).enumerable;
    })), t.push.apply(t, o2);
  }
  return t;
}
function _objectSpread$8(e) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$8(Object(t), true).forEach(function(r22) {
      _defineProperty$1(e, r22, t[r22]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$8(Object(t)).forEach(function(r22) {
      Object.defineProperty(e, r22, Object.getOwnPropertyDescriptor(t, r22));
    });
  }
  return e;
}
function _callSuper$e(t, o2, e) {
  return o2 = _getPrototypeOf(o2), _possibleConstructorReturn(t, _isNativeReflectConstruct$e() ? Reflect.construct(o2, e || [], _getPrototypeOf(t).constructor) : o2.apply(t, e));
}
function _isNativeReflectConstruct$e() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct$e = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
var EventCell$1 = /* @__PURE__ */ (function(_React$Component) {
  function EventCell2() {
    _classCallCheck(this, EventCell2);
    return _callSuper$e(this, EventCell2, arguments);
  }
  _inherits(EventCell2, _React$Component);
  return _createClass(EventCell2, [{
    key: "render",
    value: function render() {
      var _this$props = this.props, style2 = _this$props.style, className = _this$props.className, event = _this$props.event, selected = _this$props.selected, isAllDay = _this$props.isAllDay, onSelect = _this$props.onSelect, _onDoubleClick = _this$props.onDoubleClick, onKeyPress = _this$props.onKeyPress, localizer2 = _this$props.localizer, continuesPrior2 = _this$props.continuesPrior, continuesAfter2 = _this$props.continuesAfter, accessors2 = _this$props.accessors, getters = _this$props.getters, children = _this$props.children, _this$props$component = _this$props.components, Event2 = _this$props$component.event, EventWrapper2 = _this$props$component.eventWrapper, slotStart = _this$props.slotStart, slotEnd = _this$props.slotEnd, props = _objectWithoutProperties(_this$props, _excluded$7);
      delete props.resizable;
      var title = accessors2.title(event);
      var tooltip = accessors2.tooltip(event);
      var end = accessors2.end(event);
      var start = accessors2.start(event);
      var allDay = accessors2.allDay(event);
      var showAsAllDay = isAllDay || allDay || localizer2.diff(start, localizer2.ceil(end, "day"), "day") > 1;
      var userProps = getters.eventProp(event, start, end, selected);
      var content = /* @__PURE__ */ r.createElement("div", {
        className: "rbc-event-content",
        title: tooltip || void 0
      }, Event2 ? /* @__PURE__ */ r.createElement(Event2, {
        event,
        continuesPrior: continuesPrior2,
        continuesAfter: continuesAfter2,
        title,
        isAllDay: allDay,
        localizer: localizer2,
        slotStart,
        slotEnd
      }) : title);
      return /* @__PURE__ */ r.createElement(EventWrapper2, _extends$1({}, this.props, {
        type: "date"
      }), /* @__PURE__ */ r.createElement("div", _extends$1({}, props, {
        style: _objectSpread$8(_objectSpread$8({}, userProps.style), style2),
        className: clsx$1("rbc-event", className, userProps.className, {
          "rbc-selected": selected,
          "rbc-event-allday": showAsAllDay,
          "rbc-event-continues-prior": continuesPrior2,
          "rbc-event-continues-after": continuesAfter2
        }),
        onClick: function onClick(e) {
          return onSelect && onSelect(event, e);
        },
        onDoubleClick: function onDoubleClick(e) {
          return _onDoubleClick && _onDoubleClick(event, e);
        },
        onKeyDown: function onKeyDown(e) {
          return onKeyPress && onKeyPress(event, e);
        }
      }), typeof children === "function" ? children(content) : content));
    }
  }]);
})(r.Component);
EventCell$1.propTypes = {};
function isSelected(event, selected) {
  if (!event || selected == null) return false;
  return isEqual$1$1(event, selected);
}
function slotWidth(rowBox, slots) {
  var rowWidth = rowBox.right - rowBox.left;
  var cellWidth = rowWidth / slots;
  return cellWidth;
}
function getSlotAtX(rowBox, x, rtl, slots) {
  var cellWidth = slotWidth(rowBox, slots);
  return rtl ? slots - 1 - Math.floor((x - rowBox.left) / cellWidth) : Math.floor((x - rowBox.left) / cellWidth);
}
function pointInBox(box, _ref) {
  var x = _ref.x, y = _ref.y;
  return y >= box.top && y <= box.bottom && x >= box.left && x <= box.right;
}
function dateCellSelection(start, rowBox, box, slots, rtl) {
  var startIdx = -1;
  var endIdx = -1;
  var lastSlotIdx = slots - 1;
  var cellWidth = slotWidth(rowBox, slots);
  var currentSlot = getSlotAtX(rowBox, box.x, rtl, slots);
  var isCurrentRow = rowBox.top < box.y && rowBox.bottom > box.y;
  var isStartRow = rowBox.top < start.y && rowBox.bottom > start.y;
  var isAboveStart = start.y > rowBox.bottom;
  var isBelowStart = rowBox.top > start.y;
  var isBetween2 = box.top < rowBox.top && box.bottom > rowBox.bottom;
  if (isBetween2) {
    startIdx = 0;
    endIdx = lastSlotIdx;
  }
  if (isCurrentRow) {
    if (isBelowStart) {
      startIdx = 0;
      endIdx = currentSlot;
    } else if (isAboveStart) {
      startIdx = currentSlot;
      endIdx = lastSlotIdx;
    }
  }
  if (isStartRow) {
    startIdx = endIdx = rtl ? lastSlotIdx - Math.floor((start.x - rowBox.left) / cellWidth) : Math.floor((start.x - rowBox.left) / cellWidth);
    if (isCurrentRow) {
      if (currentSlot < startIdx) startIdx = currentSlot;
      else endIdx = currentSlot;
    } else if (start.y < box.y) {
      endIdx = lastSlotIdx;
    } else {
      startIdx = 0;
    }
  }
  return {
    startIdx,
    endIdx
  };
}
function getPosition(_ref) {
  var target = _ref.target, offset2 = _ref.offset, container = _ref.container, box = _ref.box;
  var _getOffset = offset$1(target), top = _getOffset.top, left = _getOffset.left, width2 = _getOffset.width, height2 = _getOffset.height;
  var _getOffset2 = offset$1(container), cTop = _getOffset2.top, cLeft = _getOffset2.left, cWidth = _getOffset2.width, cHeight = _getOffset2.height;
  var _getOffset3 = offset$1(box), bWidth = _getOffset3.width, bHeight = _getOffset3.height;
  var viewBottom = cTop + cHeight;
  var viewRight = cLeft + cWidth;
  var bottom = top + bHeight;
  var right = left + bWidth;
  var x = offset2.x, y = offset2.y;
  var topOffset = bottom > viewBottom ? top - bHeight - y : top + y + height2;
  var leftOffset = right > viewRight ? left + x - bWidth + width2 : left + x;
  return {
    topOffset,
    leftOffset
  };
}
function Pop(_ref2) {
  var containerRef = _ref2.containerRef, accessors2 = _ref2.accessors, getters = _ref2.getters, selected = _ref2.selected, components2 = _ref2.components, localizer2 = _ref2.localizer, position2 = _ref2.position, show = _ref2.show, events = _ref2.events, slotStart = _ref2.slotStart, slotEnd = _ref2.slotEnd, onSelect = _ref2.onSelect, onDoubleClick = _ref2.onDoubleClick, onKeyPress = _ref2.onKeyPress, handleDragStart = _ref2.handleDragStart, popperRef = _ref2.popperRef, target = _ref2.target, offset2 = _ref2.offset;
  useClickOutside({
    ref: popperRef,
    callback: show
  });
  reactExports.useLayoutEffect(function() {
    var _getPosition = getPosition({
      target,
      offset: offset2,
      container: containerRef.current,
      box: popperRef.current
    }), topOffset = _getPosition.topOffset, leftOffset = _getPosition.leftOffset;
    popperRef.current.style.top = "".concat(topOffset, "px");
    popperRef.current.style.left = "".concat(leftOffset, "px");
  }, [offset2.x, offset2.y, target]);
  var width2 = position2.width;
  var style2 = {
    minWidth: width2 + width2 / 2
  };
  return /* @__PURE__ */ r.createElement("div", {
    style: style2,
    className: "rbc-overlay",
    ref: popperRef
  }, /* @__PURE__ */ r.createElement("div", {
    className: "rbc-overlay-header"
  }, localizer2.format(slotStart, "dayHeaderFormat")), events.map(function(event, idx) {
    return /* @__PURE__ */ r.createElement(EventCell$1, {
      key: idx,
      type: "popup",
      localizer: localizer2,
      event,
      getters,
      onSelect,
      accessors: accessors2,
      components: components2,
      onDoubleClick,
      onKeyPress,
      continuesPrior: localizer2.lt(accessors2.end(event), slotStart, "day"),
      continuesAfter: localizer2.gte(accessors2.start(event), slotEnd, "day"),
      slotStart,
      slotEnd,
      selected: isSelected(event, selected),
      draggable: true,
      onDragStart: function onDragStart() {
        return handleDragStart(event);
      },
      onDragEnd: function onDragEnd() {
        return show();
      }
    });
  }));
}
var Popup = /* @__PURE__ */ r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ r.createElement(Pop, _extends$1({}, props, {
    popperRef: ref
  }));
});
Popup.propTypes = {
  accessors: o.object.isRequired,
  getters: o.object.isRequired,
  selected: o.object,
  components: o.object.isRequired,
  localizer: o.object.isRequired,
  position: o.object.isRequired,
  show: o.func.isRequired,
  events: o.array.isRequired,
  slotStart: o.instanceOf(Date).isRequired,
  slotEnd: o.instanceOf(Date),
  onSelect: o.func,
  onDoubleClick: o.func,
  onKeyPress: o.func,
  handleDragStart: o.func,
  style: o.object,
  offset: o.shape({
    x: o.number,
    y: o.number
  })
};
function CalOverlay(_ref) {
  var containerRef = _ref.containerRef, _ref$popupOffset = _ref.popupOffset, popupOffset = _ref$popupOffset === void 0 ? 5 : _ref$popupOffset, overlay = _ref.overlay, accessors2 = _ref.accessors, localizer2 = _ref.localizer, components2 = _ref.components, getters = _ref.getters, selected = _ref.selected, handleSelectEvent = _ref.handleSelectEvent, handleDoubleClickEvent = _ref.handleDoubleClickEvent, handleKeyPressEvent = _ref.handleKeyPressEvent, handleDragStart = _ref.handleDragStart, onHide2 = _ref.onHide, overlayDisplay = _ref.overlayDisplay;
  var popperRef = reactExports.useRef(null);
  if (!overlay.position) return null;
  var offset2 = popupOffset;
  if (!isNaN(popupOffset)) {
    offset2 = {
      x: popupOffset,
      y: popupOffset
    };
  }
  var position2 = overlay.position, events = overlay.events, date2 = overlay.date, end = overlay.end;
  return /* @__PURE__ */ r.createElement(Overlay, {
    rootClose: true,
    flip: true,
    show: true,
    placement: "bottom",
    onHide: onHide2,
    target: overlay.target
  }, function(_ref2) {
    var props = _ref2.props;
    return /* @__PURE__ */ r.createElement(Popup, _extends$1({}, props, {
      containerRef,
      ref: popperRef,
      target: overlay.target,
      offset: offset2,
      accessors: accessors2,
      getters,
      selected,
      components: components2,
      localizer: localizer2,
      position: position2,
      show: overlayDisplay,
      events,
      slotStart: date2,
      slotEnd: end,
      onSelect: handleSelectEvent,
      onDoubleClick: handleDoubleClickEvent,
      onKeyPress: handleKeyPressEvent,
      handleDragStart
    }));
  });
}
var PopOverlay = /* @__PURE__ */ r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ r.createElement(CalOverlay, _extends$1({}, props, {
    containerRef: ref
  }));
});
PopOverlay.propTypes = {
  popupOffset: o.oneOfType([o.number, o.shape({
    x: o.number,
    y: o.number
  })]),
  overlay: o.shape({
    position: o.object,
    events: o.array,
    date: o.instanceOf(Date),
    end: o.instanceOf(Date)
  }),
  accessors: o.object.isRequired,
  localizer: o.object.isRequired,
  components: o.object.isRequired,
  getters: o.object.isRequired,
  selected: o.object,
  handleSelectEvent: o.func,
  handleDoubleClickEvent: o.func,
  handleKeyPressEvent: o.func,
  handleDragStart: o.func,
  onHide: o.func,
  overlayDisplay: o.func
};
function addEventListener$1(type, handler) {
  var target = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : document;
  return listen$1(target, type, handler, {
    passive: false
  });
}
function isOverContainer(container, x, y) {
  return !container || contains$2(container, document.elementFromPoint(x, y));
}
function getEventNodeFromPoint(node, _ref) {
  var clientX = _ref.clientX, clientY = _ref.clientY;
  var target = document.elementFromPoint(clientX, clientY);
  return closest$1(target, ".rbc-event", node);
}
function getShowMoreNodeFromPoint(node, _ref2) {
  var clientX = _ref2.clientX, clientY = _ref2.clientY;
  var target = document.elementFromPoint(clientX, clientY);
  return closest$1(target, ".rbc-show-more", node);
}
function isEvent(node, bounds) {
  return !!getEventNodeFromPoint(node, bounds);
}
function isShowMore(node, bounds) {
  return !!getShowMoreNodeFromPoint(node, bounds);
}
function getEventCoordinates(e) {
  var target = e;
  if (e.touches && e.touches.length) {
    target = e.touches[0];
  }
  return {
    clientX: target.clientX,
    clientY: target.clientY,
    pageX: target.pageX,
    pageY: target.pageY
  };
}
var clickTolerance = 5;
var clickInterval = 250;
var Selection$1 = /* @__PURE__ */ (function() {
  function Selection2(node) {
    var _ref3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref3$global = _ref3.global, global = _ref3$global === void 0 ? false : _ref3$global, _ref3$longPressThresh = _ref3.longPressThreshold, longPressThreshold = _ref3$longPressThresh === void 0 ? 250 : _ref3$longPressThresh, _ref3$validContainers = _ref3.validContainers, validContainers = _ref3$validContainers === void 0 ? [] : _ref3$validContainers;
    _classCallCheck(this, Selection2);
    this._initialEvent = null;
    this.selecting = false;
    this.isDetached = false;
    this.container = node;
    this.globalMouse = !node || global;
    this.longPressThreshold = longPressThreshold;
    this.validContainers = validContainers;
    this._listeners = /* @__PURE__ */ Object.create(null);
    this._handleInitialEvent = this._handleInitialEvent.bind(this);
    this._handleMoveEvent = this._handleMoveEvent.bind(this);
    this._handleTerminatingEvent = this._handleTerminatingEvent.bind(this);
    this._keyListener = this._keyListener.bind(this);
    this._dropFromOutsideListener = this._dropFromOutsideListener.bind(this);
    this._dragOverFromOutsideListener = this._dragOverFromOutsideListener.bind(this);
    this._removeTouchMoveWindowListener = addEventListener$1("touchmove", function() {
    }, window);
    this._removeKeyDownListener = addEventListener$1("keydown", this._keyListener);
    this._removeKeyUpListener = addEventListener$1("keyup", this._keyListener);
    this._removeDropFromOutsideListener = addEventListener$1("drop", this._dropFromOutsideListener);
    this._removeDragOverFromOutsideListener = addEventListener$1("dragover", this._dragOverFromOutsideListener);
    this._addInitialEventListener();
  }
  return _createClass(Selection2, [{
    key: "on",
    value: function on(type, handler) {
      var handlers = this._listeners[type] || (this._listeners[type] = []);
      handlers.push(handler);
      return {
        remove: function remove2() {
          var idx = handlers.indexOf(handler);
          if (idx !== -1) handlers.splice(idx, 1);
        }
      };
    }
  }, {
    key: "emit",
    value: function emit(type) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var result;
      var handlers = this._listeners[type] || [];
      handlers.forEach(function(fn2) {
        if (result === void 0) result = fn2.apply(void 0, args);
      });
      return result;
    }
  }, {
    key: "teardown",
    value: function teardown() {
      this._initialEvent = null;
      this._initialEventData = null;
      this._selectRect = null;
      this.selecting = false;
      this._lastClickData = null;
      this.isDetached = true;
      this._listeners = /* @__PURE__ */ Object.create(null);
      this._removeTouchMoveWindowListener && this._removeTouchMoveWindowListener();
      this._removeInitialEventListener && this._removeInitialEventListener();
      this._removeEndListener && this._removeEndListener();
      this._onEscListener && this._onEscListener();
      this._removeMoveListener && this._removeMoveListener();
      this._removeKeyUpListener && this._removeKeyUpListener();
      this._removeKeyDownListener && this._removeKeyDownListener();
      this._removeDropFromOutsideListener && this._removeDropFromOutsideListener();
      this._removeDragOverFromOutsideListener && this._removeDragOverFromOutsideListener();
    }
  }, {
    key: "isSelected",
    value: function isSelected2(node) {
      var box = this._selectRect;
      if (!box || !this.selecting) return false;
      return objectsCollide(box, getBoundsForNode(node));
    }
  }, {
    key: "filter",
    value: function filter(items) {
      var box = this._selectRect;
      if (!box || !this.selecting) return [];
      return items.filter(this.isSelected, this);
    }
    // Adds a listener that will call the handler only after the user has pressed on the screen
    // without moving their finger for 250ms.
  }, {
    key: "_addLongPressListener",
    value: function _addLongPressListener(handler, initialEvent) {
      var _this = this;
      var timer = null;
      var removeTouchMoveListener = null;
      var removeTouchEndListener = null;
      var handleTouchStart = function handleTouchStart2(initialEvent2) {
        timer = setTimeout(function() {
          cleanup();
          handler(initialEvent2);
        }, _this.longPressThreshold);
        removeTouchMoveListener = addEventListener$1("touchmove", function() {
          return cleanup();
        });
        removeTouchEndListener = addEventListener$1("touchend", function() {
          return cleanup();
        });
      };
      var removeTouchStartListener = addEventListener$1("touchstart", handleTouchStart);
      var cleanup = function cleanup2() {
        if (timer) {
          clearTimeout(timer);
        }
        if (removeTouchMoveListener) {
          removeTouchMoveListener();
        }
        if (removeTouchEndListener) {
          removeTouchEndListener();
        }
        timer = null;
        removeTouchMoveListener = null;
        removeTouchEndListener = null;
      };
      if (initialEvent) {
        handleTouchStart(initialEvent);
      }
      return function() {
        cleanup();
        removeTouchStartListener();
      };
    }
    // Listen for mousedown and touchstart events. When one is received, disable the other and setup
    // future event handling based on the type of event.
  }, {
    key: "_addInitialEventListener",
    value: function _addInitialEventListener() {
      var _this2 = this;
      var removeMouseDownListener = addEventListener$1("mousedown", function(e) {
        _this2._removeInitialEventListener();
        _this2._handleInitialEvent(e);
        _this2._removeInitialEventListener = addEventListener$1("mousedown", _this2._handleInitialEvent);
      });
      var removeTouchStartListener = addEventListener$1("touchstart", function(e) {
        _this2._removeInitialEventListener();
        _this2._removeInitialEventListener = _this2._addLongPressListener(_this2._handleInitialEvent, e);
      });
      this._removeInitialEventListener = function() {
        removeMouseDownListener();
        removeTouchStartListener();
      };
    }
  }, {
    key: "_dropFromOutsideListener",
    value: function _dropFromOutsideListener(e) {
      var _getEventCoordinates = getEventCoordinates(e), pageX = _getEventCoordinates.pageX, pageY = _getEventCoordinates.pageY, clientX = _getEventCoordinates.clientX, clientY = _getEventCoordinates.clientY;
      this.emit("dropFromOutside", {
        x: pageX,
        y: pageY,
        clientX,
        clientY
      });
      e.preventDefault();
    }
  }, {
    key: "_dragOverFromOutsideListener",
    value: function _dragOverFromOutsideListener(e) {
      var _getEventCoordinates2 = getEventCoordinates(e), pageX = _getEventCoordinates2.pageX, pageY = _getEventCoordinates2.pageY, clientX = _getEventCoordinates2.clientX, clientY = _getEventCoordinates2.clientY;
      this.emit("dragOverFromOutside", {
        x: pageX,
        y: pageY,
        clientX,
        clientY
      });
      e.preventDefault();
    }
  }, {
    key: "_handleInitialEvent",
    value: function _handleInitialEvent(e) {
      this._initialEvent = e;
      if (this.isDetached) {
        return;
      }
      var _getEventCoordinates3 = getEventCoordinates(e), clientX = _getEventCoordinates3.clientX, clientY = _getEventCoordinates3.clientY, pageX = _getEventCoordinates3.pageX, pageY = _getEventCoordinates3.pageY;
      var node = this.container(), collides, offsetData;
      if (e.which === 3 || e.button === 2 || !isOverContainer(node, clientX, clientY)) return;
      if (!this.globalMouse && node && !contains$2(node, e.target)) {
        var _normalizeDistance = normalizeDistance(0), top = _normalizeDistance.top, left = _normalizeDistance.left, bottom = _normalizeDistance.bottom, right = _normalizeDistance.right;
        offsetData = getBoundsForNode(node);
        collides = objectsCollide({
          top: offsetData.top - top,
          left: offsetData.left - left,
          bottom: offsetData.bottom + bottom,
          right: offsetData.right + right
        }, {
          top: pageY,
          left: pageX
        });
        if (!collides) return;
      }
      var result = this.emit("beforeSelect", this._initialEventData = {
        isTouch: /^touch/.test(e.type),
        x: pageX,
        y: pageY,
        clientX,
        clientY
      });
      if (result === false) return;
      switch (e.type) {
        case "mousedown":
          this._removeEndListener = addEventListener$1("mouseup", this._handleTerminatingEvent);
          this._onEscListener = addEventListener$1("keydown", this._handleTerminatingEvent);
          this._removeMoveListener = addEventListener$1("mousemove", this._handleMoveEvent);
          break;
        case "touchstart":
          this._handleMoveEvent(e);
          this._removeEndListener = addEventListener$1("touchend", this._handleTerminatingEvent);
          this._removeMoveListener = addEventListener$1("touchmove", this._handleMoveEvent);
          break;
      }
    }
    // Check whether provided event target element
    // - is contained within a valid container
  }, {
    key: "_isWithinValidContainer",
    value: function _isWithinValidContainer(e) {
      var eventTarget = e.target;
      var containers = this.validContainers;
      if (!containers || !containers.length || !eventTarget) {
        return true;
      }
      return containers.some(function(target) {
        return !!eventTarget.closest(target);
      });
    }
  }, {
    key: "_handleTerminatingEvent",
    value: function _handleTerminatingEvent(e) {
      var selecting = this.selecting;
      var bounds = this._selectRect;
      if (!selecting && e.type.includes("key")) {
        e = this._initialEvent;
      }
      this.selecting = false;
      this._removeEndListener && this._removeEndListener();
      this._removeMoveListener && this._removeMoveListener();
      this._selectRect = null;
      this._initialEvent = null;
      this._initialEventData = null;
      if (!e) return;
      var inRoot = !this.container || contains$2(this.container(), e.target);
      var isWithinValidContainer = this._isWithinValidContainer(e);
      if (e.key === "Escape" || !isWithinValidContainer) {
        return this.emit("reset");
      }
      if (!selecting && inRoot) {
        return this._handleClickEvent(e);
      }
      if (selecting) return this.emit("select", bounds);
      return this.emit("reset");
    }
  }, {
    key: "_handleClickEvent",
    value: function _handleClickEvent(e) {
      var _getEventCoordinates4 = getEventCoordinates(e), pageX = _getEventCoordinates4.pageX, pageY = _getEventCoordinates4.pageY, clientX = _getEventCoordinates4.clientX, clientY = _getEventCoordinates4.clientY;
      var now = (/* @__PURE__ */ new Date()).getTime();
      if (this._lastClickData && now - this._lastClickData.timestamp < clickInterval) {
        this._lastClickData = null;
        return this.emit("doubleClick", {
          x: pageX,
          y: pageY,
          clientX,
          clientY
        });
      }
      this._lastClickData = {
        timestamp: now
      };
      return this.emit("click", {
        x: pageX,
        y: pageY,
        clientX,
        clientY
      });
    }
  }, {
    key: "_handleMoveEvent",
    value: function _handleMoveEvent(e) {
      if (this._initialEventData === null || this.isDetached) {
        return;
      }
      var _this$_initialEventDa = this._initialEventData, x = _this$_initialEventDa.x, y = _this$_initialEventDa.y;
      var _getEventCoordinates5 = getEventCoordinates(e), pageX = _getEventCoordinates5.pageX, pageY = _getEventCoordinates5.pageY;
      var w = Math.abs(x - pageX);
      var h = Math.abs(y - pageY);
      var left = Math.min(pageX, x), top = Math.min(pageY, y), old = this.selecting;
      var click = this.isClick(pageX, pageY);
      if (click && !old && !(w || h)) {
        return;
      }
      if (!old && !click) {
        this.emit("selectStart", this._initialEventData);
      }
      if (!click) {
        this.selecting = true;
        this._selectRect = {
          top,
          left,
          x: pageX,
          y: pageY,
          right: left + w,
          bottom: top + h
        };
        this.emit("selecting", this._selectRect);
      }
      e.preventDefault();
    }
  }, {
    key: "_keyListener",
    value: function _keyListener(e) {
      this.ctrl = e.metaKey || e.ctrlKey;
    }
  }, {
    key: "isClick",
    value: function isClick(pageX, pageY) {
      var _this$_initialEventDa2 = this._initialEventData, x = _this$_initialEventDa2.x, y = _this$_initialEventDa2.y, isTouch = _this$_initialEventDa2.isTouch;
      return !isTouch && Math.abs(pageX - x) <= clickTolerance && Math.abs(pageY - y) <= clickTolerance;
    }
  }]);
})();
function normalizeDistance() {
  var distance = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  if (_typeof$1(distance) !== "object") distance = {
    top: distance,
    left: distance,
    right: distance,
    bottom: distance
  };
  return distance;
}
function objectsCollide(nodeA, nodeB) {
  var tolerance = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
  var _getBoundsForNode = getBoundsForNode(nodeA), aTop = _getBoundsForNode.top, aLeft = _getBoundsForNode.left, _getBoundsForNode$rig = _getBoundsForNode.right, aRight = _getBoundsForNode$rig === void 0 ? aLeft : _getBoundsForNode$rig, _getBoundsForNode$bot = _getBoundsForNode.bottom, aBottom = _getBoundsForNode$bot === void 0 ? aTop : _getBoundsForNode$bot;
  var _getBoundsForNode2 = getBoundsForNode(nodeB), bTop = _getBoundsForNode2.top, bLeft = _getBoundsForNode2.left, _getBoundsForNode2$ri = _getBoundsForNode2.right, bRight = _getBoundsForNode2$ri === void 0 ? bLeft : _getBoundsForNode2$ri, _getBoundsForNode2$bo = _getBoundsForNode2.bottom, bBottom = _getBoundsForNode2$bo === void 0 ? bTop : _getBoundsForNode2$bo;
  return !// 'a' bottom doesn't touch 'b' top
  (aBottom - tolerance < bTop || // 'a' top doesn't touch 'b' bottom
  aTop + tolerance > bBottom || // 'a' right doesn't touch 'b' left
  aRight - tolerance < bLeft || // 'a' left doesn't touch 'b' right
  aLeft + tolerance > bRight);
}
function getBoundsForNode(node) {
  if (!node.getBoundingClientRect) return node;
  var rect = node.getBoundingClientRect(), left = rect.left + pageOffset("left"), top = rect.top + pageOffset("top");
  return {
    top,
    left,
    right: (node.offsetWidth || 0) + left,
    bottom: (node.offsetHeight || 0) + top
  };
}
function pageOffset(dir) {
  if (dir === "left") return window.pageXOffset || document.body.scrollLeft || 0;
  if (dir === "top") return window.pageYOffset || document.body.scrollTop || 0;
}
function ownKeys$7(e, r2) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e);
    r2 && (o2 = o2.filter(function(r22) {
      return Object.getOwnPropertyDescriptor(e, r22).enumerable;
    })), t.push.apply(t, o2);
  }
  return t;
}
function _objectSpread$7(e) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$7(Object(t), true).forEach(function(r22) {
      _defineProperty$1(e, r22, t[r22]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$7(Object(t)).forEach(function(r22) {
      Object.defineProperty(e, r22, Object.getOwnPropertyDescriptor(t, r22));
    });
  }
  return e;
}
function _callSuper$d(t, o2, e) {
  return o2 = _getPrototypeOf(o2), _possibleConstructorReturn(t, _isNativeReflectConstruct$d() ? Reflect.construct(o2, e || [], _getPrototypeOf(t).constructor) : o2.apply(t, e));
}
function _isNativeReflectConstruct$d() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct$d = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
var BackgroundCells = /* @__PURE__ */ (function(_React$Component) {
  function BackgroundCells2(props, context) {
    var _this;
    _classCallCheck(this, BackgroundCells2);
    _this = _callSuper$d(this, BackgroundCells2, [props, context]);
    _this.state = {
      selecting: false
    };
    _this.containerRef = /* @__PURE__ */ reactExports.createRef();
    return _this;
  }
  _inherits(BackgroundCells2, _React$Component);
  return _createClass(BackgroundCells2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.selectable && this._selectable();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._teardownSelectable();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.selectable && this.props.selectable) this._selectable();
      if (prevProps.selectable && !this.props.selectable) this._teardownSelectable();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props, range2 = _this$props.range, getNow2 = _this$props.getNow, getters = _this$props.getters, currentDate = _this$props.date, Wrapper = _this$props.components.dateCellWrapper, localizer2 = _this$props.localizer;
      var _this$state = this.state, selecting = _this$state.selecting, startIdx = _this$state.startIdx, endIdx = _this$state.endIdx;
      var current = getNow2();
      return /* @__PURE__ */ r.createElement("div", {
        className: "rbc-row-bg",
        ref: this.containerRef
      }, range2.map(function(date2, index) {
        var selected = selecting && index >= startIdx && index <= endIdx;
        var _getters$dayProp = getters.dayProp(date2), className = _getters$dayProp.className, style2 = _getters$dayProp.style;
        return /* @__PURE__ */ r.createElement(Wrapper, {
          key: index,
          value: date2,
          range: range2
        }, /* @__PURE__ */ r.createElement("div", {
          style: style2,
          className: clsx$1("rbc-day-bg", className, selected && "rbc-selected-cell", localizer2.isSameDate(date2, current) && "rbc-today", currentDate && localizer2.neq(currentDate, date2, "month") && "rbc-off-range-bg")
        }));
      }));
    }
  }, {
    key: "_selectable",
    value: function _selectable() {
      var _this2 = this;
      var node = this.containerRef.current;
      var selector = this._selector = new Selection$1(this.props.container, {
        longPressThreshold: this.props.longPressThreshold
      });
      var selectorClicksHandler = function selectorClicksHandler2(point, actionType) {
        if (!isEvent(node, point) && !isShowMore(node, point)) {
          var rowBox = getBoundsForNode(node);
          var _this2$props = _this2.props, range2 = _this2$props.range, rtl = _this2$props.rtl;
          if (pointInBox(rowBox, point)) {
            var currentCell = getSlotAtX(rowBox, point.x, rtl, range2.length);
            _this2._selectSlot({
              startIdx: currentCell,
              endIdx: currentCell,
              action: actionType,
              box: point
            });
          }
        }
        _this2._initial = {};
        _this2.setState({
          selecting: false
        });
      };
      selector.on("selecting", function(box) {
        var _this2$props2 = _this2.props, range2 = _this2$props2.range, rtl = _this2$props2.rtl;
        var startIdx = -1;
        var endIdx = -1;
        if (!_this2.state.selecting) {
          notify(_this2.props.onSelectStart, [box]);
          _this2._initial = {
            x: box.x,
            y: box.y
          };
        }
        if (selector.isSelected(node)) {
          var nodeBox = getBoundsForNode(node);
          var _dateCellSelection = dateCellSelection(_this2._initial, nodeBox, box, range2.length, rtl);
          startIdx = _dateCellSelection.startIdx;
          endIdx = _dateCellSelection.endIdx;
        }
        _this2.setState({
          selecting: true,
          startIdx,
          endIdx
        });
      });
      selector.on("beforeSelect", function(box) {
        if (_this2.props.selectable !== "ignoreEvents") return;
        return !isEvent(_this2.containerRef.current, box);
      });
      selector.on("click", function(point) {
        return selectorClicksHandler(point, "click");
      });
      selector.on("doubleClick", function(point) {
        return selectorClicksHandler(point, "doubleClick");
      });
      selector.on("select", function(bounds) {
        _this2._selectSlot(_objectSpread$7(_objectSpread$7({}, _this2.state), {}, {
          action: "select",
          bounds
        }));
        _this2._initial = {};
        _this2.setState({
          selecting: false
        });
        notify(_this2.props.onSelectEnd, [_this2.state]);
      });
    }
  }, {
    key: "_teardownSelectable",
    value: function _teardownSelectable() {
      if (!this._selector) return;
      this._selector.teardown();
      this._selector = null;
    }
  }, {
    key: "_selectSlot",
    value: function _selectSlot(_ref) {
      var endIdx = _ref.endIdx, startIdx = _ref.startIdx, action = _ref.action, bounds = _ref.bounds, box = _ref.box;
      if (endIdx !== -1 && startIdx !== -1) this.props.onSelectSlot && this.props.onSelectSlot({
        start: startIdx,
        end: endIdx,
        action,
        bounds,
        box,
        resourceId: this.props.resourceId
      });
    }
  }]);
})(r.Component);
BackgroundCells.propTypes = {};
var EventRowMixin$1 = {
  propTypes: {
    slotMetrics: o.object.isRequired,
    selected: o.object,
    isAllDay: o.bool,
    accessors: o.object.isRequired,
    localizer: o.object.isRequired,
    components: o.object.isRequired,
    getters: o.object.isRequired,
    onSelect: o.func,
    onDoubleClick: o.func,
    onKeyPress: o.func
  },
  defaultProps: {
    segments: [],
    selected: {}
  },
  renderEvent: function renderEvent(props, event) {
    var selected = props.selected;
    props.isAllDay;
    var accessors2 = props.accessors, getters = props.getters, onSelect = props.onSelect, onDoubleClick = props.onDoubleClick, onKeyPress = props.onKeyPress, localizer2 = props.localizer, slotMetrics = props.slotMetrics, components2 = props.components, resizable = props.resizable;
    var continuesPrior2 = slotMetrics.continuesPrior(event);
    var continuesAfter2 = slotMetrics.continuesAfter(event);
    return /* @__PURE__ */ r.createElement(EventCell$1, {
      event,
      getters,
      localizer: localizer2,
      accessors: accessors2,
      components: components2,
      onSelect,
      onDoubleClick,
      onKeyPress,
      continuesPrior: continuesPrior2,
      continuesAfter: continuesAfter2,
      slotStart: slotMetrics.first,
      slotEnd: slotMetrics.last,
      selected: isSelected(event, selected),
      resizable
    });
  },
  renderSpan: function renderSpan(slots, len, key) {
    var content = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : " ";
    var per = Math.abs(len) / slots * 100 + "%";
    return /* @__PURE__ */ r.createElement("div", {
      key,
      className: "rbc-row-segment",
      style: {
        WebkitFlexBasis: per,
        flexBasis: per,
        maxWidth: per
      }
    }, content);
  }
};
function ownKeys$6(e, r2) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e);
    r2 && (o2 = o2.filter(function(r22) {
      return Object.getOwnPropertyDescriptor(e, r22).enumerable;
    })), t.push.apply(t, o2);
  }
  return t;
}
function _objectSpread$6(e) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$6(Object(t), true).forEach(function(r22) {
      _defineProperty$1(e, r22, t[r22]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$6(Object(t)).forEach(function(r22) {
      Object.defineProperty(e, r22, Object.getOwnPropertyDescriptor(t, r22));
    });
  }
  return e;
}
function _callSuper$c(t, o2, e) {
  return o2 = _getPrototypeOf(o2), _possibleConstructorReturn(t, _isNativeReflectConstruct$c() ? Reflect.construct(o2, e || [], _getPrototypeOf(t).constructor) : o2.apply(t, e));
}
function _isNativeReflectConstruct$c() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct$c = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
var EventRow$1 = /* @__PURE__ */ (function(_React$Component) {
  function EventRow2() {
    _classCallCheck(this, EventRow2);
    return _callSuper$c(this, EventRow2, arguments);
  }
  _inherits(EventRow2, _React$Component);
  return _createClass(EventRow2, [{
    key: "render",
    value: function render() {
      var _this = this;
      var _this$props = this.props, segments = _this$props.segments, slots = _this$props.slotMetrics.slots, className = _this$props.className;
      var lastEnd = 1;
      return /* @__PURE__ */ r.createElement("div", {
        className: clsx$1(className, "rbc-row")
      }, segments.reduce(function(row, _ref, li) {
        var event = _ref.event, left = _ref.left, right = _ref.right, span = _ref.span;
        var key = "_lvl_" + li;
        var gap = left - lastEnd;
        var content = EventRowMixin$1.renderEvent(_this.props, event);
        if (gap) row.push(EventRowMixin$1.renderSpan(slots, gap, "".concat(key, "_gap")));
        row.push(EventRowMixin$1.renderSpan(slots, span, key, content));
        lastEnd = right + 1;
        return row;
      }, []));
    }
  }]);
})(r.Component);
EventRow$1.propTypes = {};
EventRow$1.defaultProps = _objectSpread$6({}, EventRowMixin$1.defaultProps);
function endOfRange(_ref) {
  var dateRange = _ref.dateRange, _ref$unit = _ref.unit, unit = _ref$unit === void 0 ? "day" : _ref$unit, localizer2 = _ref.localizer;
  return {
    first: dateRange[0],
    last: localizer2.add(dateRange[dateRange.length - 1], 1, unit)
  };
}
function eventSegments(event, range2, accessors2, localizer2) {
  var _endOfRange = endOfRange({
    dateRange: range2,
    localizer: localizer2
  }), first = _endOfRange.first, last = _endOfRange.last;
  var slots = localizer2.diff(first, last, "day");
  var start = localizer2.max(localizer2.startOf(accessors2.start(event), "day"), first);
  var end = localizer2.min(localizer2.ceil(accessors2.end(event), "day"), last);
  var padding = findIndex$1(range2, function(x) {
    return localizer2.isSameDate(x, start);
  });
  var span = localizer2.diff(start, end, "day");
  span = Math.min(span, slots);
  span = Math.max(span - localizer2.segmentOffset, 1);
  return {
    event,
    span,
    left: padding + 1,
    right: Math.max(padding + span, 1)
  };
}
function eventLevels$1(rowSegments) {
  var limit = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity;
  var i, j, seg, levels = [], extra = [];
  for (i = 0; i < rowSegments.length; i++) {
    seg = rowSegments[i];
    for (j = 0; j < levels.length; j++) if (!segsOverlap(seg, levels[j])) break;
    if (j >= limit) {
      extra.push(seg);
    } else {
      (levels[j] || (levels[j] = [])).push(seg);
    }
  }
  for (i = 0; i < levels.length; i++) {
    levels[i].sort(function(a, b) {
      return a.left - b.left;
    });
  }
  return {
    levels,
    extra
  };
}
function inRange(e, start, end, accessors2, localizer2) {
  var event = {
    start: accessors2.start(e),
    end: accessors2.end(e)
  };
  var range2 = {
    start,
    end
  };
  return localizer2.inEventRange({
    event,
    range: range2
  });
}
function segsOverlap(seg, otherSegs) {
  return otherSegs.some(function(otherSeg) {
    return otherSeg.left <= seg.right && otherSeg.right >= seg.left;
  });
}
function sortWeekEvents(events, accessors2, localizer2) {
  var base = _toConsumableArray(events);
  var multiDayEvents = [];
  var standardEvents = [];
  base.forEach(function(event) {
    var startCheck = accessors2.start(event);
    var endCheck = accessors2.end(event);
    if (localizer2.daySpan(startCheck, endCheck) > 1) {
      multiDayEvents.push(event);
    } else {
      standardEvents.push(event);
    }
  });
  var multiSorted = multiDayEvents.sort(function(a, b) {
    return sortEvents(a, b, accessors2, localizer2);
  });
  var standardSorted = standardEvents.sort(function(a, b) {
    return sortEvents(a, b, accessors2, localizer2);
  });
  return [].concat(_toConsumableArray(multiSorted), _toConsumableArray(standardSorted));
}
function sortEvents(eventA, eventB, accessors2, localizer2) {
  var evtA = {
    start: accessors2.start(eventA),
    end: accessors2.end(eventA),
    allDay: accessors2.allDay(eventA)
  };
  var evtB = {
    start: accessors2.start(eventB),
    end: accessors2.end(eventB),
    allDay: accessors2.allDay(eventB)
  };
  return localizer2.sortEvents({
    evtA,
    evtB
  });
}
function ownKeys$5(e, r2) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e);
    r2 && (o2 = o2.filter(function(r22) {
      return Object.getOwnPropertyDescriptor(e, r22).enumerable;
    })), t.push.apply(t, o2);
  }
  return t;
}
function _objectSpread$5(e) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$5(Object(t), true).forEach(function(r22) {
      _defineProperty$1(e, r22, t[r22]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function(r22) {
      Object.defineProperty(e, r22, Object.getOwnPropertyDescriptor(t, r22));
    });
  }
  return e;
}
function _callSuper$b(t, o2, e) {
  return o2 = _getPrototypeOf(o2), _possibleConstructorReturn(t, _isNativeReflectConstruct$b() ? Reflect.construct(o2, e || [], _getPrototypeOf(t).constructor) : o2.apply(t, e));
}
function _isNativeReflectConstruct$b() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct$b = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
var isSegmentInSlot$1 = function isSegmentInSlot(seg, slot) {
  return seg.left <= slot && seg.right >= slot;
};
var eventsInSlot = function eventsInSlot2(segments, slot) {
  return segments.filter(function(seg) {
    return isSegmentInSlot$1(seg, slot);
  }).map(function(seg) {
    return seg.event;
  });
};
var EventEndingRow = /* @__PURE__ */ (function(_React$Component) {
  function EventEndingRow2() {
    _classCallCheck(this, EventEndingRow2);
    return _callSuper$b(this, EventEndingRow2, arguments);
  }
  _inherits(EventEndingRow2, _React$Component);
  return _createClass(EventEndingRow2, [{
    key: "render",
    value: function render() {
      var _this$props = this.props, segments = _this$props.segments, slots = _this$props.slotMetrics.slots;
      var rowSegments = eventLevels$1(segments).levels[0];
      var current = 1, lastEnd = 1, row = [];
      while (current <= slots) {
        var key = "_lvl_" + current;
        var _ref = rowSegments.filter(function(seg) {
          return isSegmentInSlot$1(seg, current);
        })[0] || {}, event = _ref.event, left = _ref.left, right = _ref.right, span = _ref.span;
        if (!event) {
          var hiddenEvents = this.getHiddenEventsForSlot(segments, current);
          if (hiddenEvents.length > 0) {
            var _gap = current - lastEnd;
            if (_gap) {
              row.push(EventRowMixin$1.renderSpan(slots, _gap, key + "_gap"));
            }
            row.push(EventRowMixin$1.renderSpan(slots, 1, key, this.renderShowMore(segments, current)));
            lastEnd = current = current + 1;
            continue;
          }
          current++;
          continue;
        }
        var gap = Math.max(0, left - lastEnd);
        if (this.canRenderSlotEvent(left, span)) {
          var content = EventRowMixin$1.renderEvent(this.props, event);
          if (gap) {
            row.push(EventRowMixin$1.renderSpan(slots, gap, key + "_gap"));
          }
          row.push(EventRowMixin$1.renderSpan(slots, span, key, content));
          lastEnd = current = right + 1;
        } else {
          if (gap) {
            row.push(EventRowMixin$1.renderSpan(slots, gap, key + "_gap"));
          }
          row.push(EventRowMixin$1.renderSpan(slots, 1, key, this.renderShowMore(segments, current)));
          lastEnd = current = current + 1;
        }
      }
      return /* @__PURE__ */ r.createElement("div", {
        className: "rbc-row"
      }, row);
    }
    // New helper method to find hidden events for a slot
  }, {
    key: "getHiddenEventsForSlot",
    value: function getHiddenEventsForSlot(segments, slot) {
      var allEventsInSlot = eventsInSlot(segments, slot);
      var rowSegments = eventLevels$1(segments).levels[0];
      var visibleEventsInSlot = rowSegments.filter(function(seg) {
        return isSegmentInSlot$1(seg, slot);
      }).map(function(seg) {
        return seg.event;
      });
      return allEventsInSlot.filter(function(event) {
        return !visibleEventsInSlot.some(function(visEvent) {
          return visEvent === event;
        });
      });
    }
  }, {
    key: "canRenderSlotEvent",
    value: function canRenderSlotEvent(slot, span) {
      var segments = this.props.segments;
      return range$1(slot, slot + span).every(function(s) {
        var count = eventsInSlot(segments, s).length;
        return count === 1;
      });
    }
  }, {
    key: "renderShowMore",
    value: function renderShowMore(segments, slot) {
      var _this = this;
      var _this$props2 = this.props, localizer2 = _this$props2.localizer, slotMetrics = _this$props2.slotMetrics, components2 = _this$props2.components;
      var events = slotMetrics.getEventsForSlot(slot);
      var remainingEvents = eventsInSlot(segments, slot);
      var count = remainingEvents.length;
      if (components2 !== null && components2 !== void 0 && components2.showMore) {
        var ShowMore = components2.showMore;
        var slotDate = slotMetrics.getDateForSlot(slot - 1);
        return count ? /* @__PURE__ */ r.createElement(ShowMore, {
          localizer: localizer2,
          slotDate,
          slot,
          count,
          events,
          remainingEvents
        }) : false;
      }
      return count ? /* @__PURE__ */ r.createElement("button", {
        type: "button",
        key: "sm_" + slot,
        className: clsx$1("rbc-button-link", "rbc-show-more"),
        onClick: function onClick(e) {
          return _this.showMore(slot, e);
        }
      }, localizer2.messages.showMore(count, remainingEvents, events)) : false;
    }
  }, {
    key: "showMore",
    value: function showMore2(slot, e) {
      e.preventDefault();
      e.stopPropagation();
      this.props.onShowMore(slot, e.target);
    }
  }]);
})(r.Component);
EventEndingRow.propTypes = {};
EventEndingRow.defaultProps = _objectSpread$5({}, EventRowMixin$1.defaultProps);
var ScrollableWeekWrapper = function ScrollableWeekWrapper2(_ref) {
  var children = _ref.children;
  return /* @__PURE__ */ r.createElement("div", {
    className: "rbc-row-content-scroll-container"
  }, children);
};
function ownKeys$4(e, r2) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e);
    r2 && (o2 = o2.filter(function(r22) {
      return Object.getOwnPropertyDescriptor(e, r22).enumerable;
    })), t.push.apply(t, o2);
  }
  return t;
}
function _objectSpread$4(e) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$4(Object(t), true).forEach(function(r22) {
      _defineProperty$1(e, r22, t[r22]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function(r22) {
      Object.defineProperty(e, r22, Object.getOwnPropertyDescriptor(t, r22));
    });
  }
  return e;
}
var isSegmentInSlot2 = function isSegmentInSlot3(seg, slot) {
  return seg.left <= slot && seg.right >= slot;
};
var isEqual = function isEqual2(a, b) {
  return a[0].range === b[0].range && a[0].events === b[0].events;
};
function getSlotMetrics$1() {
  return memoizeOne(function(options2) {
    var range2 = options2.range, events = options2.events, maxRows = options2.maxRows, minRows = options2.minRows, accessors2 = options2.accessors, localizer2 = options2.localizer;
    var _endOfRange = endOfRange({
      dateRange: range2,
      localizer: localizer2
    }), first = _endOfRange.first, last = _endOfRange.last;
    var segments = events.map(function(evt) {
      return eventSegments(evt, range2, accessors2, localizer2);
    });
    var _eventLevels = eventLevels$1(segments, Math.max(maxRows - 1, 1)), levels = _eventLevels.levels, extra = _eventLevels.extra;
    var minEventRows = extra.length > 0 ? minRows - 1 : minRows;
    while (levels.length < minEventRows) levels.push([]);
    return {
      first,
      last,
      levels,
      extra,
      range: range2,
      slots: range2.length,
      clone: function clone(args) {
        var metrics = getSlotMetrics$1();
        return metrics(_objectSpread$4(_objectSpread$4({}, options2), args));
      },
      getDateForSlot: function getDateForSlot(slotNumber) {
        return range2[slotNumber];
      },
      getSlotForDate: function getSlotForDate(date2) {
        return range2.find(function(r2) {
          return localizer2.isSameDate(r2, date2);
        });
      },
      getEventsForSlot: function getEventsForSlot(slot) {
        return segments.filter(function(seg) {
          return isSegmentInSlot2(seg, slot);
        }).map(function(seg) {
          return seg.event;
        });
      },
      continuesPrior: function continuesPrior2(event) {
        return localizer2.continuesPrior(accessors2.start(event), first);
      },
      continuesAfter: function continuesAfter2(event) {
        var start = accessors2.start(event);
        var end = accessors2.end(event);
        return localizer2.continuesAfter(start, end, last);
      }
    };
  }, isEqual);
}
function _callSuper$a(t, o2, e) {
  return o2 = _getPrototypeOf(o2), _possibleConstructorReturn(t, _isNativeReflectConstruct$a() ? Reflect.construct(o2, e || [], _getPrototypeOf(t).constructor) : o2.apply(t, e));
}
function _isNativeReflectConstruct$a() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct$a = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
var DateContentRow = /* @__PURE__ */ (function(_React$Component) {
  function DateContentRow2() {
    var _this;
    _classCallCheck(this, DateContentRow2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$a(this, DateContentRow2, [].concat(args));
    _this.handleSelectSlot = function(slot) {
      var _this$props = _this.props, range2 = _this$props.range, onSelectSlot = _this$props.onSelectSlot;
      onSelectSlot(range2.slice(slot.start, slot.end + 1), slot);
    };
    _this.handleShowMore = function(slot, target) {
      var _this$props2 = _this.props, range2 = _this$props2.range, onShowMore = _this$props2.onShowMore;
      var metrics = _this.slotMetrics(_this.props);
      var row = qsa(_this.containerRef.current, ".rbc-row-bg")[0];
      var cell;
      if (row) cell = row.children[slot - 1];
      var events = metrics.getEventsForSlot(slot);
      onShowMore(events, range2[slot - 1], cell, slot, target);
    };
    _this.getContainer = function() {
      var container = _this.props.container;
      return container ? container() : _this.containerRef.current;
    };
    _this.renderHeadingCell = function(date2, index) {
      var _this$props3 = _this.props, renderHeader = _this$props3.renderHeader, getNow2 = _this$props3.getNow, localizer2 = _this$props3.localizer;
      return renderHeader({
        date: date2,
        key: "header_".concat(index),
        className: clsx$1("rbc-date-cell", localizer2.isSameDate(date2, getNow2()) && "rbc-now")
      });
    };
    _this.renderDummy = function() {
      var _this$props4 = _this.props, className = _this$props4.className, range2 = _this$props4.range, renderHeader = _this$props4.renderHeader, showAllEvents = _this$props4.showAllEvents;
      return /* @__PURE__ */ r.createElement("div", {
        className,
        ref: _this.containerRef
      }, /* @__PURE__ */ r.createElement("div", {
        className: clsx$1("rbc-row-content", showAllEvents && "rbc-row-content-scrollable")
      }, renderHeader && /* @__PURE__ */ r.createElement("div", {
        className: "rbc-row",
        ref: _this.headingRowRef
      }, range2.map(_this.renderHeadingCell)), /* @__PURE__ */ r.createElement("div", {
        className: "rbc-row",
        ref: _this.eventRowRef
      }, /* @__PURE__ */ r.createElement("div", {
        className: "rbc-row-segment"
      }, /* @__PURE__ */ r.createElement("div", {
        className: "rbc-event"
      }, /* @__PURE__ */ r.createElement("div", {
        className: "rbc-event-content"
      }, " "))))));
    };
    _this.containerRef = /* @__PURE__ */ reactExports.createRef();
    _this.headingRowRef = /* @__PURE__ */ reactExports.createRef();
    _this.eventRowRef = /* @__PURE__ */ reactExports.createRef();
    _this.slotMetrics = getSlotMetrics$1();
    return _this;
  }
  _inherits(DateContentRow2, _React$Component);
  return _createClass(DateContentRow2, [{
    key: "getRowLimit",
    value: function getRowLimit() {
      var _this$headingRowRef;
      var eventHeight = height$1(this.eventRowRef.current);
      var headingHeight = (_this$headingRowRef = this.headingRowRef) !== null && _this$headingRowRef !== void 0 && _this$headingRowRef.current ? height$1(this.headingRowRef.current) : 0;
      var eventSpace = height$1(this.containerRef.current) - headingHeight;
      return Math.max(Math.floor(eventSpace / eventHeight), 1);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props, date2 = _this$props5.date, rtl = _this$props5.rtl, range2 = _this$props5.range, className = _this$props5.className, selected = _this$props5.selected, selectable = _this$props5.selectable, renderForMeasure = _this$props5.renderForMeasure, accessors2 = _this$props5.accessors, getters = _this$props5.getters, components2 = _this$props5.components, getNow2 = _this$props5.getNow, renderHeader = _this$props5.renderHeader, onSelect = _this$props5.onSelect, localizer2 = _this$props5.localizer, onSelectStart = _this$props5.onSelectStart, onSelectEnd = _this$props5.onSelectEnd, onDoubleClick = _this$props5.onDoubleClick, onKeyPress = _this$props5.onKeyPress, resourceId = _this$props5.resourceId, longPressThreshold = _this$props5.longPressThreshold, isAllDay = _this$props5.isAllDay, resizable = _this$props5.resizable, showAllEvents = _this$props5.showAllEvents;
      if (renderForMeasure) return this.renderDummy();
      var metrics = this.slotMetrics(this.props);
      var levels = metrics.levels, extra = metrics.extra;
      var ScrollableWeekComponent = showAllEvents ? ScrollableWeekWrapper : NoopWrapper;
      var WeekWrapper2 = components2.weekWrapper;
      var eventRowProps = {
        selected,
        accessors: accessors2,
        getters,
        localizer: localizer2,
        components: components2,
        onSelect,
        onDoubleClick,
        onKeyPress,
        resourceId,
        slotMetrics: metrics,
        resizable
      };
      return /* @__PURE__ */ r.createElement("div", {
        className,
        role: "rowgroup",
        ref: this.containerRef
      }, /* @__PURE__ */ r.createElement(BackgroundCells, {
        localizer: localizer2,
        date: date2,
        getNow: getNow2,
        rtl,
        range: range2,
        selectable,
        container: this.getContainer,
        getters,
        onSelectStart,
        onSelectEnd,
        onSelectSlot: this.handleSelectSlot,
        components: components2,
        longPressThreshold,
        resourceId
      }), /* @__PURE__ */ r.createElement("div", {
        className: clsx$1("rbc-row-content", showAllEvents && "rbc-row-content-scrollable"),
        role: "row"
      }, renderHeader && /* @__PURE__ */ r.createElement("div", {
        className: "rbc-row ",
        ref: this.headingRowRef
      }, range2.map(this.renderHeadingCell)), /* @__PURE__ */ r.createElement(ScrollableWeekComponent, null, /* @__PURE__ */ r.createElement(WeekWrapper2, _extends$1({
        isAllDay
      }, eventRowProps, {
        rtl: this.props.rtl
      }), levels.map(function(segs, idx) {
        return /* @__PURE__ */ r.createElement(EventRow$1, _extends$1({
          key: idx,
          segments: segs
        }, eventRowProps));
      }), !!extra.length && /* @__PURE__ */ r.createElement(EventEndingRow, _extends$1({
        segments: extra,
        onShowMore: this.handleShowMore
      }, eventRowProps))))));
    }
  }]);
})(r.Component);
DateContentRow.propTypes = {};
DateContentRow.defaultProps = {
  minRows: 0,
  maxRows: Infinity
};
var Header = function Header2(_ref) {
  var label = _ref.label;
  return /* @__PURE__ */ r.createElement("span", {
    role: "columnheader",
    "aria-sort": "none"
  }, label);
};
Header.propTypes = {};
var DateHeader = function DateHeader2(_ref) {
  var label = _ref.label, drilldownView = _ref.drilldownView, onDrillDown = _ref.onDrillDown;
  if (!drilldownView) {
    return /* @__PURE__ */ r.createElement("span", null, label);
  }
  return /* @__PURE__ */ r.createElement("button", {
    type: "button",
    className: "rbc-button-link",
    onClick: onDrillDown
  }, label);
};
DateHeader.propTypes = {};
var _excluded$6 = ["date", "className"];
function _callSuper$9(t, o2, e) {
  return o2 = _getPrototypeOf(o2), _possibleConstructorReturn(t, _isNativeReflectConstruct$9() ? Reflect.construct(o2, e || [], _getPrototypeOf(t).constructor) : o2.apply(t, e));
}
function _isNativeReflectConstruct$9() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct$9 = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
var eventsForWeek = function eventsForWeek2(evts, start, end, accessors2, localizer2) {
  return evts.filter(function(e) {
    return inRange(e, start, end, accessors2, localizer2);
  });
};
var MonthView = /* @__PURE__ */ (function(_React$Component) {
  function MonthView2() {
    var _this;
    _classCallCheck(this, MonthView2);
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    _this = _callSuper$9(this, MonthView2, [].concat(_args));
    _this.getContainer = function() {
      return _this.containerRef.current;
    };
    _this.renderWeek = function(week, weekIdx) {
      var _this$props = _this.props, events = _this$props.events, components2 = _this$props.components, selectable = _this$props.selectable, getNow2 = _this$props.getNow, selected = _this$props.selected, date2 = _this$props.date, localizer2 = _this$props.localizer, longPressThreshold = _this$props.longPressThreshold, accessors2 = _this$props.accessors, getters = _this$props.getters, showAllEvents = _this$props.showAllEvents;
      var _this$state = _this.state, needLimitMeasure = _this$state.needLimitMeasure, rowLimit = _this$state.rowLimit;
      var weeksEvents = eventsForWeek(_toConsumableArray(events), week[0], week[week.length - 1], accessors2, localizer2);
      var sorted = sortWeekEvents(weeksEvents, accessors2, localizer2);
      return /* @__PURE__ */ r.createElement(DateContentRow, {
        key: weekIdx,
        ref: weekIdx === 0 ? _this.slotRowRef : void 0,
        container: _this.getContainer,
        className: "rbc-month-row",
        getNow: getNow2,
        date: date2,
        range: week,
        events: sorted,
        maxRows: showAllEvents ? Infinity : rowLimit,
        selected,
        selectable,
        components: components2,
        accessors: accessors2,
        getters,
        localizer: localizer2,
        renderHeader: _this.readerDateHeading,
        renderForMeasure: needLimitMeasure,
        onShowMore: _this.handleShowMore,
        onSelect: _this.handleSelectEvent,
        onDoubleClick: _this.handleDoubleClickEvent,
        onKeyPress: _this.handleKeyPressEvent,
        onSelectSlot: _this.handleSelectSlot,
        longPressThreshold,
        rtl: _this.props.rtl,
        resizable: _this.props.resizable,
        showAllEvents
      });
    };
    _this.readerDateHeading = function(_ref) {
      var date2 = _ref.date, className = _ref.className, props = _objectWithoutProperties(_ref, _excluded$6);
      var _this$props2 = _this.props, currentDate = _this$props2.date, getDrilldownView = _this$props2.getDrilldownView, localizer2 = _this$props2.localizer;
      var isOffRange = localizer2.neq(currentDate, date2, "month");
      var isCurrent = localizer2.isSameDate(date2, currentDate);
      var drilldownView = getDrilldownView(date2);
      var label = localizer2.format(date2, "dateFormat");
      var DateHeaderComponent = _this.props.components.dateHeader || DateHeader;
      return /* @__PURE__ */ r.createElement("div", _extends$1({}, props, {
        className: clsx$1(className, isOffRange && "rbc-off-range", isCurrent && "rbc-current"),
        role: "cell"
      }), /* @__PURE__ */ r.createElement(DateHeaderComponent, {
        label,
        date: date2,
        drilldownView,
        isOffRange,
        onDrillDown: function onDrillDown(e) {
          return _this.handleHeadingClick(date2, drilldownView, e);
        }
      }));
    };
    _this.handleSelectSlot = function(range2, slotInfo) {
      _this._pendingSelection = _this._pendingSelection.concat(range2);
      clearTimeout(_this._selectTimer);
      _this._selectTimer = setTimeout(function() {
        return _this.selectDates(slotInfo);
      });
    };
    _this.handleHeadingClick = function(date2, view, e) {
      e.preventDefault();
      _this.clearSelection();
      notify(_this.props.onDrillDown, [date2, view]);
    };
    _this.handleSelectEvent = function() {
      _this.clearSelection();
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      notify(_this.props.onSelectEvent, args);
    };
    _this.handleDoubleClickEvent = function() {
      _this.clearSelection();
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      notify(_this.props.onDoubleClickEvent, args);
    };
    _this.handleKeyPressEvent = function() {
      _this.clearSelection();
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      notify(_this.props.onKeyPressEvent, args);
    };
    _this.handleShowMore = function(events, date2, cell, slot, target) {
      var _this$props3 = _this.props, popup = _this$props3.popup, onDrillDown = _this$props3.onDrillDown, onShowMore = _this$props3.onShowMore, getDrilldownView = _this$props3.getDrilldownView, doShowMoreDrillDown = _this$props3.doShowMoreDrillDown;
      _this.clearSelection();
      if (popup) {
        var position2 = position$1(cell, _this.containerRef.current);
        _this.setState({
          overlay: {
            date: date2,
            events,
            position: position2,
            target
          }
        });
      } else if (doShowMoreDrillDown) {
        notify(onDrillDown, [date2, getDrilldownView(date2) || views$1.DAY]);
      }
      notify(onShowMore, [events, date2, slot]);
    };
    _this.overlayDisplay = function() {
      _this.setState({
        overlay: null
      });
    };
    _this.state = {
      rowLimit: 5,
      needLimitMeasure: true,
      date: null
    };
    _this.containerRef = /* @__PURE__ */ reactExports.createRef();
    _this.slotRowRef = /* @__PURE__ */ reactExports.createRef();
    _this._bgRows = [];
    _this._pendingSelection = [];
    return _this;
  }
  _inherits(MonthView2, _React$Component);
  return _createClass(MonthView2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      var running;
      if (this.state.needLimitMeasure) this.measureRowLimit(this.props);
      window.addEventListener("resize", this._resizeListener = function() {
        if (!running) {
          request(function() {
            running = false;
            _this2.setState({
              needLimitMeasure: true
            });
          });
        }
      }, false);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.needLimitMeasure) this.measureRowLimit(this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this._resizeListener, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props, date2 = _this$props4.date, localizer2 = _this$props4.localizer, className = _this$props4.className, month2 = localizer2.visibleDays(date2, localizer2), weeks = chunk(month2, 7);
      this._weekCount = weeks.length;
      return /* @__PURE__ */ r.createElement("div", {
        className: clsx$1("rbc-month-view", className),
        role: "table",
        "aria-label": "Month View",
        ref: this.containerRef
      }, /* @__PURE__ */ r.createElement("div", {
        className: "rbc-row rbc-month-header",
        role: "row"
      }, this.renderHeaders(weeks[0])), weeks.map(this.renderWeek), this.props.popup && this.renderOverlay());
    }
  }, {
    key: "renderHeaders",
    value: function renderHeaders(row) {
      var _this$props5 = this.props, localizer2 = _this$props5.localizer, components2 = _this$props5.components;
      var first = row[0];
      var last = row[row.length - 1];
      var HeaderComponent = components2.header || Header;
      return localizer2.range(first, last, "day").map(function(day2, idx) {
        return /* @__PURE__ */ r.createElement("div", {
          key: "header_" + idx,
          className: "rbc-header"
        }, /* @__PURE__ */ r.createElement(HeaderComponent, {
          date: day2,
          localizer: localizer2,
          label: localizer2.format(day2, "weekdayFormat")
        }));
      });
    }
  }, {
    key: "renderOverlay",
    value: function renderOverlay() {
      var _this$state$overlay, _this$state2, _this3 = this;
      var overlay = (_this$state$overlay = (_this$state2 = this.state) === null || _this$state2 === void 0 ? void 0 : _this$state2.overlay) !== null && _this$state$overlay !== void 0 ? _this$state$overlay : {};
      var _this$props6 = this.props, accessors2 = _this$props6.accessors, localizer2 = _this$props6.localizer, components2 = _this$props6.components, getters = _this$props6.getters, selected = _this$props6.selected, popupOffset = _this$props6.popupOffset, handleDragStart = _this$props6.handleDragStart;
      var onHide2 = function onHide22() {
        return _this3.setState({
          overlay: null
        });
      };
      return /* @__PURE__ */ r.createElement(PopOverlay, {
        overlay,
        accessors: accessors2,
        localizer: localizer2,
        components: components2,
        getters,
        selected,
        popupOffset,
        ref: this.containerRef,
        handleKeyPressEvent: this.handleKeyPressEvent,
        handleSelectEvent: this.handleSelectEvent,
        handleDoubleClickEvent: this.handleDoubleClickEvent,
        handleDragStart,
        show: !!overlay.position,
        overlayDisplay: this.overlayDisplay,
        onHide: onHide2
      });
    }
  }, {
    key: "measureRowLimit",
    value: function measureRowLimit() {
      this.setState({
        needLimitMeasure: false,
        rowLimit: this.slotRowRef.current.getRowLimit()
      });
    }
  }, {
    key: "selectDates",
    value: function selectDates(slotInfo) {
      var slots = this._pendingSelection.slice();
      this._pendingSelection = [];
      slots.sort(function(a, b) {
        return +a - +b;
      });
      var start = new Date(slots[0]);
      var end = new Date(slots[slots.length - 1]);
      end.setDate(slots[slots.length - 1].getDate() + 1);
      notify(this.props.onSelectSlot, {
        slots,
        start,
        end,
        action: slotInfo.action,
        bounds: slotInfo.bounds,
        box: slotInfo.box
      });
    }
  }, {
    key: "clearSelection",
    value: function clearSelection() {
      clearTimeout(this._selectTimer);
      this._pendingSelection = [];
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref2, state) {
      var date2 = _ref2.date, localizer2 = _ref2.localizer;
      return {
        date: date2,
        needLimitMeasure: state.needLimitMeasure || localizer2.neq(date2, state.date, "month")
      };
    }
  }]);
})(r.Component);
MonthView.propTypes = {};
MonthView.range = function(date2, _ref3) {
  var localizer2 = _ref3.localizer;
  var start = localizer2.firstVisibleDay(date2, localizer2);
  var end = localizer2.lastVisibleDay(date2, localizer2);
  return {
    start,
    end
  };
};
MonthView.navigate = function(date2, action, _ref4) {
  var localizer2 = _ref4.localizer;
  switch (action) {
    case navigate.PREVIOUS:
      return localizer2.add(date2, -1, "month");
    case navigate.NEXT:
      return localizer2.add(date2, 1, "month");
    default:
      return date2;
  }
};
MonthView.title = function(date2, _ref5) {
  var localizer2 = _ref5.localizer;
  return localizer2.format(date2, "monthHeaderFormat");
};
var getKey = function getKey2(_ref) {
  var min2 = _ref.min, max2 = _ref.max, step = _ref.step, slots = _ref.slots, localizer2 = _ref.localizer;
  return "".concat(+localizer2.startOf(min2, "minutes")) + "".concat(+localizer2.startOf(max2, "minutes")) + "".concat(step, "-").concat(slots);
};
function getSlotMetrics(_ref2) {
  var start = _ref2.min, end = _ref2.max, step = _ref2.step, timeslots = _ref2.timeslots, localizer2 = _ref2.localizer;
  var key = getKey({
    step,
    localizer: localizer2
  });
  var totalMin = 1 + localizer2.getTotalMin(start, end);
  var minutesFromMidnight = localizer2.getMinutesFromMidnight(start);
  var numGroups = Math.ceil((totalMin - 1) / (step * timeslots));
  var numSlots = numGroups * timeslots;
  var groups = new Array(numGroups);
  var slots = new Array(numSlots);
  for (var grp = 0; grp < numGroups; grp++) {
    groups[grp] = new Array(timeslots);
    for (var slot = 0; slot < timeslots; slot++) {
      var slotIdx = grp * timeslots + slot;
      var minFromStart = slotIdx * step;
      slots[slotIdx] = groups[grp][slot] = localizer2.getSlotDate(start, minutesFromMidnight, minFromStart);
    }
  }
  var lastSlotMinFromStart = slots.length * step;
  slots.push(localizer2.getSlotDate(start, minutesFromMidnight, lastSlotMinFromStart));
  function positionFromDate(date2) {
    var diff2 = localizer2.diff(start, date2, "minutes") + localizer2.getDstOffset(start, date2);
    return Math.min(diff2, totalMin);
  }
  return {
    groups,
    update: function update(args) {
      if (getKey(args) !== key) return getSlotMetrics(args);
      return this;
    },
    dateIsInGroup: function dateIsInGroup(date2, groupIndex) {
      var nextGroup = groups[groupIndex + 1];
      return localizer2.inRange(date2, groups[groupIndex][0], nextGroup ? nextGroup[0] : end, "minutes");
    },
    nextSlot: function nextSlot(slot2) {
      var next = slots[Math.min(slots.findIndex(function(s) {
        return s === slot2 || localizer2.eq(s, slot2);
      }) + 1, slots.length - 1)];
      if (localizer2.eq(next, slot2)) next = localizer2.add(slot2, step, "minutes");
      return next;
    },
    closestSlotToPosition: function closestSlotToPosition(percent) {
      var slot2 = Math.min(slots.length - 1, Math.max(0, Math.floor(percent * numSlots)));
      return slots[slot2];
    },
    closestSlotFromPoint: function closestSlotFromPoint(point, boundaryRect) {
      var range2 = Math.abs(boundaryRect.top - boundaryRect.bottom);
      return this.closestSlotToPosition((point.y - boundaryRect.top) / range2);
    },
    closestSlotFromDate: function closestSlotFromDate(date2) {
      var offset2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      if (localizer2.lt(date2, start, "minutes")) return slots[0];
      if (localizer2.gt(date2, end, "minutes")) return slots[slots.length - 1];
      var diffMins = localizer2.diff(start, date2, "minutes");
      return slots[(diffMins - diffMins % step) / step + offset2];
    },
    startsBeforeDay: function startsBeforeDay(date2) {
      return localizer2.lt(date2, start, "day");
    },
    startsAfterDay: function startsAfterDay(date2) {
      return localizer2.gt(date2, end, "day");
    },
    startsBefore: function startsBefore(date2) {
      return localizer2.lt(localizer2.merge(start, date2), start, "minutes");
    },
    startsAfter: function startsAfter(date2) {
      return localizer2.gt(localizer2.merge(end, date2), end, "minutes");
    },
    getRange: function getRange(rangeStart, rangeEnd, ignoreMin, ignoreMax) {
      if (!ignoreMin) rangeStart = localizer2.min(end, localizer2.max(start, rangeStart));
      if (!ignoreMax) rangeEnd = localizer2.min(end, localizer2.max(start, rangeEnd));
      var rangeStartMin = positionFromDate(rangeStart);
      var rangeEndMin = positionFromDate(rangeEnd);
      var top = rangeEndMin > step * numSlots && !localizer2.eq(end, rangeEnd) ? (rangeStartMin - step) / (step * numSlots) * 100 : rangeStartMin / (step * numSlots) * 100;
      return {
        top,
        height: rangeEndMin / (step * numSlots) * 100 - top,
        start: positionFromDate(rangeStart),
        startDate: rangeStart,
        end: positionFromDate(rangeEnd),
        endDate: rangeEnd
      };
    },
    getCurrentTimePosition: function getCurrentTimePosition(rangeStart) {
      var rangeStartMin = positionFromDate(rangeStart);
      var top = rangeStartMin / (step * numSlots) * 100;
      return top;
    }
  };
}
var Event = /* @__PURE__ */ (function() {
  function Event2(data, _ref) {
    var accessors2 = _ref.accessors, slotMetrics = _ref.slotMetrics;
    _classCallCheck(this, Event2);
    var _slotMetrics$getRange = slotMetrics.getRange(accessors2.start(data), accessors2.end(data)), start = _slotMetrics$getRange.start, startDate = _slotMetrics$getRange.startDate, end = _slotMetrics$getRange.end, endDate = _slotMetrics$getRange.endDate, top = _slotMetrics$getRange.top, height2 = _slotMetrics$getRange.height;
    this.start = start;
    this.end = end;
    this.startMs = +startDate;
    this.endMs = +endDate;
    this.top = top;
    this.height = height2;
    this.data = data;
  }
  return _createClass(Event2, [{
    key: "_width",
    get: function get() {
      if (this.rows) {
        var columns = this.rows.reduce(
          function(max2, row) {
            return Math.max(max2, row.leaves.length + 1);
          },
          // add itself
          0
        ) + 1;
        return 100 / columns;
      }
      if (this.leaves) {
        var availableWidth = 100 - this.container._width;
        return availableWidth / (this.leaves.length + 1);
      }
      return this.row._width;
    }
    /**
     * The event's calculated width, possibly with extra width added for
     * overlapping effect.
     */
  }, {
    key: "width",
    get: function get() {
      var noOverlap2 = this._width;
      var overlap = Math.min(100, this._width * 1.7);
      if (this.rows) {
        return overlap;
      }
      if (this.leaves) {
        return this.leaves.length > 0 ? overlap : noOverlap2;
      }
      var leaves = this.row.leaves;
      var index = leaves.indexOf(this);
      return index === leaves.length - 1 ? noOverlap2 : overlap;
    }
  }, {
    key: "xOffset",
    get: function get() {
      if (this.rows) return 0;
      if (this.leaves) return this.container._width;
      var _this$row = this.row, leaves = _this$row.leaves, xOffset = _this$row.xOffset, _width = _this$row._width;
      var index = leaves.indexOf(this) + 1;
      return xOffset + index * _width;
    }
  }]);
})();
function onSameRow(a, b, minimumStartDifference) {
  return (
    // Occupies the same start slot.
    Math.abs(b.start - a.start) < minimumStartDifference || // A's start slot overlaps with b's end slot.
    b.start > a.start && b.start < a.end
  );
}
function sortByRender(events) {
  var sortedByTime = sortBy(events, ["startMs", function(e) {
    return -e.endMs;
  }]);
  var sorted = [];
  while (sortedByTime.length > 0) {
    var event = sortedByTime.shift();
    sorted.push(event);
    for (var i = 0; i < sortedByTime.length; i++) {
      var test = sortedByTime[i];
      if (event.endMs > test.startMs) continue;
      if (i > 0) {
        var _event = sortedByTime.splice(i, 1)[0];
        sorted.push(_event);
      }
      break;
    }
  }
  return sorted;
}
function getStyledEvents$1(_ref2) {
  var events = _ref2.events, minimumStartDifference = _ref2.minimumStartDifference, slotMetrics = _ref2.slotMetrics, accessors2 = _ref2.accessors;
  var proxies = events.map(function(event) {
    return new Event(event, {
      slotMetrics,
      accessors: accessors2
    });
  });
  var eventsInRenderOrder = sortByRender(proxies);
  var containerEvents = [];
  var _loop = function _loop2() {
    var event = eventsInRenderOrder[i];
    var container = containerEvents.find(function(c) {
      return c.end > event.start || Math.abs(event.start - c.start) < minimumStartDifference;
    });
    if (!container) {
      event.rows = [];
      containerEvents.push(event);
      return 1;
    }
    event.container = container;
    var row = null;
    for (var j = container.rows.length - 1; !row && j >= 0; j--) {
      if (onSameRow(container.rows[j], event, minimumStartDifference)) {
        row = container.rows[j];
      }
    }
    if (row) {
      row.leaves.push(event);
      event.row = row;
    } else {
      event.leaves = [];
      container.rows.push(event);
    }
  };
  for (var i = 0; i < eventsInRenderOrder.length; i++) {
    if (_loop()) continue;
  }
  return eventsInRenderOrder.map(function(event) {
    return {
      event: event.data,
      style: {
        top: event.top,
        height: event.height,
        width: event.width,
        xOffset: Math.max(0, event.xOffset)
      }
    };
  });
}
function getMaxIdxDFS(node, maxIdx, visited) {
  for (var i = 0; i < node.friends.length; ++i) {
    if (visited.indexOf(node.friends[i]) > -1) continue;
    maxIdx = maxIdx > node.friends[i].idx ? maxIdx : node.friends[i].idx;
    visited.push(node.friends[i]);
    var newIdx = getMaxIdxDFS(node.friends[i], maxIdx, visited);
    maxIdx = maxIdx > newIdx ? maxIdx : newIdx;
  }
  return maxIdx;
}
function noOverlap(_ref) {
  var events = _ref.events, minimumStartDifference = _ref.minimumStartDifference, slotMetrics = _ref.slotMetrics, accessors2 = _ref.accessors;
  var styledEvents = getStyledEvents$1({
    events,
    minimumStartDifference,
    slotMetrics,
    accessors: accessors2
  });
  styledEvents.sort(function(a, b) {
    a = a.style;
    b = b.style;
    if (a.top !== b.top) return a.top > b.top ? 1 : -1;
    else if (a.height !== b.height) return a.top + a.height < b.top + b.height ? 1 : -1;
    else return 0;
  });
  for (var i = 0; i < styledEvents.length; ++i) {
    styledEvents[i].friends = [];
    delete styledEvents[i].style.left;
    delete styledEvents[i].style.left;
    delete styledEvents[i].idx;
    delete styledEvents[i].size;
  }
  for (var _i = 0; _i < styledEvents.length - 1; ++_i) {
    var se1 = styledEvents[_i];
    var y1 = se1.style.top;
    var y2 = se1.style.top + se1.style.height;
    for (var j = _i + 1; j < styledEvents.length; ++j) {
      var se2 = styledEvents[j];
      var y3 = se2.style.top;
      var y4 = se2.style.top + se2.style.height;
      if (y3 >= y1 && y4 <= y2 || y4 > y1 && y4 <= y2 || y3 >= y1 && y3 < y2) {
        se1.friends.push(se2);
        se2.friends.push(se1);
      }
    }
  }
  for (var _i2 = 0; _i2 < styledEvents.length; ++_i2) {
    var se = styledEvents[_i2];
    var bitmap = [];
    for (var _j = 0; _j < 100; ++_j) bitmap.push(1);
    for (var _j2 = 0; _j2 < se.friends.length; ++_j2) if (se.friends[_j2].idx !== void 0) bitmap[se.friends[_j2].idx] = 0;
    se.idx = bitmap.indexOf(1);
  }
  for (var _i3 = 0; _i3 < styledEvents.length; ++_i3) {
    var size2 = 0;
    if (styledEvents[_i3].size) continue;
    var allFriends = [];
    var maxIdx = getMaxIdxDFS(styledEvents[_i3], 0, allFriends);
    size2 = 100 / (maxIdx + 1);
    styledEvents[_i3].size = size2;
    for (var _j3 = 0; _j3 < allFriends.length; ++_j3) allFriends[_j3].size = size2;
  }
  for (var _i4 = 0; _i4 < styledEvents.length; ++_i4) {
    var e = styledEvents[_i4];
    e.style.left = e.idx * e.size;
    var _maxIdx = 0;
    for (var _j4 = 0; _j4 < e.friends.length; ++_j4) {
      var idx = e.friends[_j4].idx;
      _maxIdx = _maxIdx > idx ? _maxIdx : idx;
    }
    if (_maxIdx <= e.idx) e.size = 100 - e.idx * e.size;
    var padding = e.idx === 0 ? 0 : 3;
    e.style.width = "calc(".concat(e.size, "% - ").concat(padding, "px)");
    e.style.height = "calc(".concat(e.style.height, "% - 2px)");
    e.style.xOffset = "calc(".concat(e.style.left, "% + ").concat(padding, "px)");
  }
  return styledEvents;
}
var DefaultAlgorithms = {
  overlap: getStyledEvents$1,
  "no-overlap": noOverlap
};
function isFunction(a) {
  return !!(a && a.constructor && a.call && a.apply);
}
function getStyledEvents(_ref) {
  _ref.events;
  _ref.minimumStartDifference;
  _ref.slotMetrics;
  _ref.accessors;
  var dayLayoutAlgorithm = _ref.dayLayoutAlgorithm;
  var algorithm = dayLayoutAlgorithm;
  if (dayLayoutAlgorithm in DefaultAlgorithms) algorithm = DefaultAlgorithms[dayLayoutAlgorithm];
  if (!isFunction(algorithm)) {
    return [];
  }
  return algorithm.apply(this, arguments);
}
function _callSuper$8(t, o2, e) {
  return o2 = _getPrototypeOf(o2), _possibleConstructorReturn(t, _isNativeReflectConstruct$8() ? Reflect.construct(o2, e || [], _getPrototypeOf(t).constructor) : o2.apply(t, e));
}
function _isNativeReflectConstruct$8() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct$8 = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
var TimeSlotGroup = /* @__PURE__ */ (function(_Component) {
  function TimeSlotGroup2() {
    _classCallCheck(this, TimeSlotGroup2);
    return _callSuper$8(this, TimeSlotGroup2, arguments);
  }
  _inherits(TimeSlotGroup2, _Component);
  return _createClass(TimeSlotGroup2, [{
    key: "render",
    value: function render() {
      var _this$props = this.props, renderSlot = _this$props.renderSlot, resource = _this$props.resource, group = _this$props.group, getters = _this$props.getters, _this$props$component = _this$props.components, _this$props$component2 = _this$props$component === void 0 ? {} : _this$props$component, _this$props$component3 = _this$props$component2.timeSlotWrapper, Wrapper = _this$props$component3 === void 0 ? NoopWrapper : _this$props$component3;
      var groupProps = getters ? getters.slotGroupProp(group) : {};
      return /* @__PURE__ */ r.createElement("div", _extends$1({
        className: "rbc-timeslot-group"
      }, groupProps), group.map(function(value, idx) {
        var slotProps = getters ? getters.slotProp(value, resource) : {};
        return /* @__PURE__ */ r.createElement(Wrapper, {
          key: idx,
          value,
          resource
        }, /* @__PURE__ */ r.createElement("div", _extends$1({}, slotProps, {
          className: clsx$1("rbc-time-slot", slotProps.className)
        }), renderSlot && renderSlot(value, idx)));
      }));
    }
  }]);
})(reactExports.Component);
TimeSlotGroup.propTypes = {};
function ownKeys$3(e, r2) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e);
    r2 && (o2 = o2.filter(function(r22) {
      return Object.getOwnPropertyDescriptor(e, r22).enumerable;
    })), t.push.apply(t, o2);
  }
  return t;
}
function _objectSpread$3(e) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$3(Object(t), true).forEach(function(r22) {
      _defineProperty$1(e, r22, t[r22]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function(r22) {
      Object.defineProperty(e, r22, Object.getOwnPropertyDescriptor(t, r22));
    });
  }
  return e;
}
function stringifyPercent(v) {
  return typeof v === "string" ? v : v + "%";
}
function TimeGridEvent$1(props) {
  var style2 = props.style, className = props.className, event = props.event, accessors2 = props.accessors, rtl = props.rtl, selected = props.selected, label = props.label, continuesPrior2 = props.continuesPrior, continuesAfter2 = props.continuesAfter, getters = props.getters, onClick = props.onClick, onDoubleClick = props.onDoubleClick, isBackgroundEvent = props.isBackgroundEvent, onKeyPress = props.onKeyPress, _props$components = props.components, Event2 = _props$components.event, EventWrapper2 = _props$components.eventWrapper;
  var title = accessors2.title(event);
  var tooltip = accessors2.tooltip(event);
  var end = accessors2.end(event);
  var start = accessors2.start(event);
  var userProps = getters.eventProp(event, start, end, selected);
  var inner = [/* @__PURE__ */ r.createElement("div", {
    key: "1",
    className: "rbc-event-label"
  }, label), /* @__PURE__ */ r.createElement("div", {
    key: "2",
    className: "rbc-event-content"
  }, Event2 ? /* @__PURE__ */ r.createElement(Event2, {
    event,
    title
  }) : title)];
  var height2 = style2.height, top = style2.top, width2 = style2.width, xOffset = style2.xOffset;
  var eventStyle = _objectSpread$3(_objectSpread$3({}, userProps.style), {}, _defineProperty$1({
    top: stringifyPercent(top),
    height: stringifyPercent(height2),
    width: stringifyPercent(width2)
  }, rtl ? "right" : "left", stringifyPercent(xOffset)));
  return /* @__PURE__ */ r.createElement(EventWrapper2, _extends$1({
    type: "time"
  }, props), /* @__PURE__ */ r.createElement("div", {
    role: "button",
    tabIndex: 0,
    onClick,
    onDoubleClick,
    style: eventStyle,
    onKeyDown: onKeyPress,
    title: tooltip ? (typeof label === "string" ? label + ": " : "") + tooltip : void 0,
    className: clsx$1(isBackgroundEvent ? "rbc-background-event" : "rbc-event", className, userProps.className, {
      "rbc-selected": selected,
      "rbc-event-continues-earlier": continuesPrior2,
      "rbc-event-continues-later": continuesAfter2
    })
  }, inner));
}
var DayColumnWrapper = function DayColumnWrapper2(_ref) {
  var children = _ref.children, className = _ref.className, style2 = _ref.style, innerRef = _ref.innerRef;
  return /* @__PURE__ */ r.createElement("div", {
    className,
    style: style2,
    ref: innerRef
  }, children);
};
var DayColumnWrapper$1 = /* @__PURE__ */ r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ r.createElement(DayColumnWrapper, _extends$1({}, props, {
    innerRef: ref
  }));
});
var _excluded$5 = ["dayProp"], _excluded2$1 = ["eventContainerWrapper", "timeIndicatorWrapper"];
function ownKeys$2(e, r2) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e);
    r2 && (o2 = o2.filter(function(r22) {
      return Object.getOwnPropertyDescriptor(e, r22).enumerable;
    })), t.push.apply(t, o2);
  }
  return t;
}
function _objectSpread$2(e) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$2(Object(t), true).forEach(function(r22) {
      _defineProperty$1(e, r22, t[r22]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r22) {
      Object.defineProperty(e, r22, Object.getOwnPropertyDescriptor(t, r22));
    });
  }
  return e;
}
function _callSuper$7(t, o2, e) {
  return o2 = _getPrototypeOf(o2), _possibleConstructorReturn(t, _isNativeReflectConstruct$7() ? Reflect.construct(o2, e || [], _getPrototypeOf(t).constructor) : o2.apply(t, e));
}
function _isNativeReflectConstruct$7() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct$7 = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
var DayColumn = /* @__PURE__ */ (function(_React$Component) {
  function DayColumn2() {
    var _this;
    _classCallCheck(this, DayColumn2);
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    _this = _callSuper$7(this, DayColumn2, [].concat(_args));
    _this.state = {
      selecting: false,
      timeIndicatorPosition: null
    };
    _this.intervalTriggered = false;
    _this.renderEvents = function(_ref) {
      var events = _ref.events, isBackgroundEvent = _ref.isBackgroundEvent;
      var _this$props = _this.props, rtl = _this$props.rtl, selected = _this$props.selected, accessors2 = _this$props.accessors, localizer2 = _this$props.localizer, getters = _this$props.getters, components2 = _this$props.components, step = _this$props.step, timeslots = _this$props.timeslots, dayLayoutAlgorithm = _this$props.dayLayoutAlgorithm, resizable = _this$props.resizable;
      var _this2 = _this, slotMetrics = _this2.slotMetrics;
      var messages2 = localizer2.messages;
      var styledEvents = getStyledEvents({
        events,
        accessors: accessors2,
        slotMetrics,
        minimumStartDifference: Math.ceil(step * timeslots / 2),
        dayLayoutAlgorithm
      });
      return styledEvents.map(function(_ref2, idx) {
        var _accessors$eventId;
        var event = _ref2.event, style2 = _ref2.style;
        var end = accessors2.end(event);
        var start = accessors2.start(event);
        var key = (_accessors$eventId = accessors2.eventId(event)) !== null && _accessors$eventId !== void 0 ? _accessors$eventId : "evt_" + idx;
        var format2 = "eventTimeRangeFormat";
        var label;
        var startsBeforeDay = slotMetrics.startsBeforeDay(start);
        var startsAfterDay = slotMetrics.startsAfterDay(end);
        if (startsBeforeDay) format2 = "eventTimeRangeEndFormat";
        else if (startsAfterDay) format2 = "eventTimeRangeStartFormat";
        if (startsBeforeDay && startsAfterDay) label = messages2.allDay;
        else label = localizer2.format({
          start,
          end
        }, format2);
        var continuesPrior2 = startsBeforeDay || slotMetrics.startsBefore(start);
        var continuesAfter2 = startsAfterDay || slotMetrics.startsAfter(end);
        return /* @__PURE__ */ r.createElement(TimeGridEvent$1, {
          style: style2,
          event,
          label,
          key,
          getters,
          rtl,
          components: components2,
          continuesPrior: continuesPrior2,
          continuesAfter: continuesAfter2,
          accessors: accessors2,
          resource: _this.props.resource,
          selected: isSelected(event, selected),
          onClick: function onClick(e) {
            return _this._select(_objectSpread$2(_objectSpread$2(_objectSpread$2({}, event), _this.props.resource && {
              sourceResource: _this.props.resource
            }), isBackgroundEvent && {
              isBackgroundEvent: true
            }), e);
          },
          onDoubleClick: function onDoubleClick(e) {
            return _this._doubleClick(event, e);
          },
          isBackgroundEvent,
          onKeyPress: function onKeyPress(e) {
            return _this._keyPress(event, e);
          },
          resizable
        });
      });
    };
    _this._selectable = function() {
      var node = _this.containerRef.current;
      var _this$props2 = _this.props, longPressThreshold = _this$props2.longPressThreshold, localizer2 = _this$props2.localizer;
      var selector = _this._selector = new Selection$1(function() {
        return node;
      }, {
        longPressThreshold
      });
      var maybeSelect = function maybeSelect2(box) {
        var onSelecting = _this.props.onSelecting;
        var current = _this.state || {};
        var state = selectionState(box);
        var start = state.startDate, end = state.endDate;
        if (onSelecting) {
          if (localizer2.eq(current.startDate, start, "minutes") && localizer2.eq(current.endDate, end, "minutes") || onSelecting({
            start,
            end,
            resourceId: _this.props.resource
          }) === false) return;
        }
        if (_this.state.start !== state.start || _this.state.end !== state.end || _this.state.selecting !== state.selecting) {
          _this.setState(state);
        }
      };
      var selectionState = function selectionState2(point) {
        var currentSlot = _this.slotMetrics.closestSlotFromPoint(point, getBoundsForNode(node));
        if (!_this.state.selecting) {
          _this._initialSlot = currentSlot;
        }
        var initialSlot = _this._initialSlot;
        if (localizer2.lte(initialSlot, currentSlot)) {
          currentSlot = _this.slotMetrics.nextSlot(currentSlot);
        } else if (localizer2.gt(initialSlot, currentSlot)) {
          initialSlot = _this.slotMetrics.nextSlot(initialSlot);
        }
        var selectRange = _this.slotMetrics.getRange(localizer2.min(initialSlot, currentSlot), localizer2.max(initialSlot, currentSlot));
        return _objectSpread$2(_objectSpread$2({}, selectRange), {}, {
          selecting: true,
          top: "".concat(selectRange.top, "%"),
          height: "".concat(selectRange.height, "%")
        });
      };
      var selectorClicksHandler = function selectorClicksHandler2(box, actionType) {
        if (!isEvent(_this.containerRef.current, box)) {
          var _selectionState = selectionState(box), startDate = _selectionState.startDate, endDate = _selectionState.endDate;
          _this._selectSlot({
            startDate,
            endDate,
            action: actionType,
            box
          });
        }
        _this.setState({
          selecting: false
        });
      };
      selector.on("selecting", maybeSelect);
      selector.on("selectStart", maybeSelect);
      selector.on("beforeSelect", function(box) {
        if (_this.props.selectable !== "ignoreEvents") return;
        return !isEvent(_this.containerRef.current, box);
      });
      selector.on("click", function(box) {
        return selectorClicksHandler(box, "click");
      });
      selector.on("doubleClick", function(box) {
        return selectorClicksHandler(box, "doubleClick");
      });
      selector.on("select", function(bounds) {
        if (_this.state.selecting) {
          _this._selectSlot(_objectSpread$2(_objectSpread$2({}, _this.state), {}, {
            action: "select",
            bounds
          }));
          _this.setState({
            selecting: false
          });
        }
      });
      selector.on("reset", function() {
        if (_this.state.selecting) {
          _this.setState({
            selecting: false
          });
        }
      });
    };
    _this._teardownSelectable = function() {
      if (!_this._selector) return;
      _this._selector.teardown();
      _this._selector = null;
    };
    _this._selectSlot = function(_ref3) {
      var startDate = _ref3.startDate, endDate = _ref3.endDate, action = _ref3.action, bounds = _ref3.bounds, box = _ref3.box;
      var current = startDate, slots = [];
      while (_this.props.localizer.lte(current, endDate)) {
        slots.push(current);
        current = new Date(+current + _this.props.step * 60 * 1e3);
      }
      notify(_this.props.onSelectSlot, {
        slots,
        start: startDate,
        end: endDate,
        resourceId: _this.props.resource,
        action,
        bounds,
        box
      });
    };
    _this._select = function() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      notify(_this.props.onSelectEvent, args);
    };
    _this._doubleClick = function() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      notify(_this.props.onDoubleClickEvent, args);
    };
    _this._keyPress = function() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      notify(_this.props.onKeyPressEvent, args);
    };
    _this.slotMetrics = getSlotMetrics(_this.props);
    _this.containerRef = /* @__PURE__ */ reactExports.createRef();
    return _this;
  }
  _inherits(DayColumn2, _React$Component);
  return _createClass(DayColumn2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.selectable && this._selectable();
      if (this.props.isNow) {
        this.setTimeIndicatorPositionUpdateInterval();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._teardownSelectable();
      this.clearTimeIndicatorInterval();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.selectable && !prevProps.selectable) this._selectable();
      if (!this.props.selectable && prevProps.selectable) this._teardownSelectable();
      var _this$props3 = this.props, getNow2 = _this$props3.getNow, isNow = _this$props3.isNow, localizer2 = _this$props3.localizer, date2 = _this$props3.date, min2 = _this$props3.min, max2 = _this$props3.max;
      var getNowChanged = localizer2.neq(prevProps.getNow(), getNow2(), "minutes");
      if (prevProps.isNow !== isNow || getNowChanged) {
        this.clearTimeIndicatorInterval();
        if (isNow) {
          var tail = !getNowChanged && localizer2.eq(prevProps.date, date2, "minutes") && prevState.timeIndicatorPosition === this.state.timeIndicatorPosition;
          this.setTimeIndicatorPositionUpdateInterval(tail);
        }
      } else if (isNow && (localizer2.neq(prevProps.min, min2, "minutes") || localizer2.neq(prevProps.max, max2, "minutes"))) {
        this.positionTimeIndicator();
      }
    }
    /**
     * @param tail {Boolean} - whether `positionTimeIndicator` call should be
     *   deferred or called upon setting interval (`true` - if deferred);
     */
  }, {
    key: "setTimeIndicatorPositionUpdateInterval",
    value: function setTimeIndicatorPositionUpdateInterval() {
      var _this3 = this;
      var tail = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
      if (!this.intervalTriggered && !tail) {
        this.positionTimeIndicator();
      }
      this._timeIndicatorTimeout = window.setTimeout(function() {
        _this3.intervalTriggered = true;
        _this3.positionTimeIndicator();
        _this3.setTimeIndicatorPositionUpdateInterval();
      }, 6e4);
    }
  }, {
    key: "clearTimeIndicatorInterval",
    value: function clearTimeIndicatorInterval() {
      this.intervalTriggered = false;
      window.clearTimeout(this._timeIndicatorTimeout);
    }
  }, {
    key: "positionTimeIndicator",
    value: function positionTimeIndicator() {
      var _this$props4 = this.props, min2 = _this$props4.min, max2 = _this$props4.max, getNow2 = _this$props4.getNow;
      var current = getNow2();
      if (current >= min2 && current <= max2) {
        var top = this.slotMetrics.getCurrentTimePosition(current);
        this.intervalTriggered = true;
        this.setState({
          timeIndicatorPosition: top
        });
      } else {
        this.clearTimeIndicatorInterval();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props, date2 = _this$props5.date, max2 = _this$props5.max, rtl = _this$props5.rtl, isNow = _this$props5.isNow, resource = _this$props5.resource, accessors2 = _this$props5.accessors, localizer2 = _this$props5.localizer, _this$props5$getters = _this$props5.getters, dayProp = _this$props5$getters.dayProp, getters = _objectWithoutProperties(_this$props5$getters, _excluded$5), _this$props5$componen = _this$props5.components, EventContainer = _this$props5$componen.eventContainerWrapper, TimeIndicatorWrapper = _this$props5$componen.timeIndicatorWrapper, components2 = _objectWithoutProperties(_this$props5$componen, _excluded2$1);
      this.slotMetrics = this.slotMetrics.update(this.props);
      var slotMetrics = this.slotMetrics;
      var _this$state = this.state, selecting = _this$state.selecting, top = _this$state.top, height2 = _this$state.height, startDate = _this$state.startDate, endDate = _this$state.endDate;
      var selectDates = {
        start: startDate,
        end: endDate
      };
      var _dayProp = dayProp(max2, resource), className = _dayProp.className, style2 = _dayProp.style;
      var timeIndicatorProps = {
        className: "rbc-current-time-indicator",
        style: {
          top: "".concat(this.state.timeIndicatorPosition, "%")
        }
      };
      var DayColumnWrapperComponent = components2.dayColumnWrapper || DayColumnWrapper$1;
      return /* @__PURE__ */ r.createElement(DayColumnWrapperComponent, {
        ref: this.containerRef,
        date: date2,
        style: style2,
        className: clsx$1(
          className,
          "rbc-day-slot",
          "rbc-time-column",
          isNow && "rbc-now",
          isNow && "rbc-today",
          // WHY
          selecting && "rbc-slot-selecting"
        ),
        slotMetrics,
        resource
      }, slotMetrics.groups.map(function(grp, idx) {
        return /* @__PURE__ */ r.createElement(TimeSlotGroup, {
          key: idx,
          group: grp,
          resource,
          getters,
          components: components2
        });
      }), /* @__PURE__ */ r.createElement(EventContainer, {
        localizer: localizer2,
        resource,
        accessors: accessors2,
        getters,
        components: components2,
        slotMetrics
      }, /* @__PURE__ */ r.createElement("div", {
        className: clsx$1("rbc-events-container", rtl && "rtl")
      }, this.renderEvents({
        events: this.props.backgroundEvents,
        isBackgroundEvent: true
      }), this.renderEvents({
        events: this.props.events
      }))), selecting && /* @__PURE__ */ r.createElement("div", {
        className: "rbc-slot-selection",
        style: {
          top,
          height: height2
        }
      }, /* @__PURE__ */ r.createElement("span", null, localizer2.format(selectDates, "selectRangeFormat"))), isNow && this.intervalTriggered && /* @__PURE__ */ r.createElement(TimeIndicatorWrapper, timeIndicatorProps, /* @__PURE__ */ r.createElement("div", timeIndicatorProps)));
    }
  }]);
})(r.Component);
DayColumn.propTypes = {};
DayColumn.defaultProps = {
  dragThroughEvents: true,
  timeslots: 2
};
var ResourceHeader = function ResourceHeader2(_ref) {
  var label = _ref.label;
  return /* @__PURE__ */ r.createElement(r.Fragment, null, label);
};
ResourceHeader.propTypes = {};
function _callSuper$6(t, o2, e) {
  return o2 = _getPrototypeOf(o2), _possibleConstructorReturn(t, _isNativeReflectConstruct$6() ? Reflect.construct(o2, e || [], _getPrototypeOf(t).constructor) : o2.apply(t, e));
}
function _isNativeReflectConstruct$6() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct$6 = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
var TimeGridHeader = /* @__PURE__ */ (function(_React$Component) {
  function TimeGridHeader2() {
    var _this;
    _classCallCheck(this, TimeGridHeader2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$6(this, TimeGridHeader2, [].concat(args));
    _this.handleHeaderClick = function(date2, view, e) {
      e.preventDefault();
      notify(_this.props.onDrillDown, [date2, view]);
    };
    _this.renderRow = function(resource) {
      var _this$props = _this.props, events = _this$props.events, rtl = _this$props.rtl, selectable = _this$props.selectable, getNow2 = _this$props.getNow, range2 = _this$props.range, getters = _this$props.getters, localizer2 = _this$props.localizer, accessors2 = _this$props.accessors, components2 = _this$props.components, resizable = _this$props.resizable;
      var resourceId = accessors2.resourceId(resource);
      var eventsToDisplay = resource ? events.filter(function(event) {
        return accessors2.resource(event) === resourceId;
      }) : events;
      return /* @__PURE__ */ r.createElement(DateContentRow, {
        isAllDay: true,
        rtl,
        getNow: getNow2,
        minRows: 2,
        maxRows: _this.props.allDayMaxRows + 1,
        range: range2,
        events: eventsToDisplay,
        resourceId,
        className: "rbc-allday-cell",
        selectable,
        selected: _this.props.selected,
        components: components2,
        accessors: accessors2,
        getters,
        localizer: localizer2,
        onSelect: _this.props.onSelectEvent,
        onShowMore: _this.props.onShowMore,
        onDoubleClick: _this.props.onDoubleClickEvent,
        onKeyPress: _this.props.onKeyPressEvent,
        onSelectSlot: _this.props.onSelectSlot,
        longPressThreshold: _this.props.longPressThreshold,
        resizable
      });
    };
    return _this;
  }
  _inherits(TimeGridHeader2, _React$Component);
  return _createClass(TimeGridHeader2, [{
    key: "renderHeaderCells",
    value: function renderHeaderCells(range2) {
      var _this2 = this;
      var _this$props2 = this.props, localizer2 = _this$props2.localizer, getDrilldownView = _this$props2.getDrilldownView, getNow2 = _this$props2.getNow, dayProp = _this$props2.getters.dayProp, _this$props2$componen = _this$props2.components.header, HeaderComponent = _this$props2$componen === void 0 ? Header : _this$props2$componen;
      var today = getNow2();
      return range2.map(function(date2, i) {
        var drilldownView = getDrilldownView(date2);
        var label = localizer2.format(date2, "dayFormat");
        var _dayProp = dayProp(date2), className = _dayProp.className, style2 = _dayProp.style;
        var header = /* @__PURE__ */ r.createElement(HeaderComponent, {
          date: date2,
          label,
          localizer: localizer2
        });
        return /* @__PURE__ */ r.createElement("div", {
          key: i,
          style: style2,
          className: clsx$1("rbc-header", className, localizer2.isSameDate(date2, today) && "rbc-today")
        }, drilldownView ? /* @__PURE__ */ r.createElement("button", {
          type: "button",
          className: "rbc-button-link",
          onClick: function onClick(e) {
            return _this2.handleHeaderClick(date2, drilldownView, e);
          }
        }, header) : /* @__PURE__ */ r.createElement("span", null, header));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props3 = this.props, width2 = _this$props3.width, rtl = _this$props3.rtl, resources = _this$props3.resources, range2 = _this$props3.range, events = _this$props3.events, getNow2 = _this$props3.getNow, accessors2 = _this$props3.accessors, selectable = _this$props3.selectable, components2 = _this$props3.components, getters = _this$props3.getters, scrollRef = _this$props3.scrollRef, localizer2 = _this$props3.localizer, isOverflowing = _this$props3.isOverflowing, _this$props3$componen = _this$props3.components, TimeGutterHeader = _this$props3$componen.timeGutterHeader, _this$props3$componen2 = _this$props3$componen.resourceHeader, ResourceHeaderComponent = _this$props3$componen2 === void 0 ? ResourceHeader : _this$props3$componen2, resizable = _this$props3.resizable;
      var style2 = {};
      if (isOverflowing) {
        style2[rtl ? "marginLeft" : "marginRight"] = "".concat(scrollbarSize$1() - 1, "px");
      }
      var groupedEvents = resources.groupEvents(events);
      return /* @__PURE__ */ r.createElement("div", {
        style: style2,
        ref: scrollRef,
        className: clsx$1("rbc-time-header", isOverflowing && "rbc-overflowing")
      }, /* @__PURE__ */ r.createElement("div", {
        className: "rbc-label rbc-time-header-gutter",
        style: {
          width: width2,
          minWidth: width2,
          maxWidth: width2
        }
      }, TimeGutterHeader && /* @__PURE__ */ r.createElement(TimeGutterHeader, null)), resources.map(function(_ref, idx) {
        var _ref2 = _slicedToArray(_ref, 2), id = _ref2[0], resource = _ref2[1];
        return /* @__PURE__ */ r.createElement("div", {
          className: "rbc-time-header-content",
          key: id || idx
        }, resource && /* @__PURE__ */ r.createElement("div", {
          className: "rbc-row rbc-row-resource",
          key: "resource_".concat(idx)
        }, /* @__PURE__ */ r.createElement("div", {
          className: "rbc-header"
        }, /* @__PURE__ */ r.createElement(ResourceHeaderComponent, {
          index: idx,
          label: accessors2.resourceTitle(resource),
          resource
        }))), /* @__PURE__ */ r.createElement("div", {
          className: "rbc-row rbc-time-header-cell".concat(range2.length <= 1 ? " rbc-time-header-cell-single-day" : "")
        }, _this3.renderHeaderCells(range2)), /* @__PURE__ */ r.createElement(DateContentRow, {
          isAllDay: true,
          rtl,
          getNow: getNow2,
          minRows: 2,
          maxRows: _this3.props.allDayMaxRows + 1,
          range: range2,
          events: groupedEvents.get(id) || [],
          resourceId: resource && id,
          className: "rbc-allday-cell",
          selectable,
          selected: _this3.props.selected,
          components: components2,
          accessors: accessors2,
          getters,
          localizer: localizer2,
          onSelect: _this3.props.onSelectEvent,
          onShowMore: _this3.props.onShowMore,
          onDoubleClick: _this3.props.onDoubleClickEvent,
          onKeyDown: _this3.props.onKeyPressEvent,
          onSelectSlot: _this3.props.onSelectSlot,
          longPressThreshold: _this3.props.longPressThreshold,
          resizable
        }));
      }));
    }
  }]);
})(r.Component);
TimeGridHeader.propTypes = {};
function _callSuper$5(t, o2, e) {
  return o2 = _getPrototypeOf(o2), _possibleConstructorReturn(t, _isNativeReflectConstruct$5() ? Reflect.construct(o2, e || [], _getPrototypeOf(t).constructor) : o2.apply(t, e));
}
function _isNativeReflectConstruct$5() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct$5 = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
var TimeGridHeaderResources = /* @__PURE__ */ (function(_React$Component) {
  function TimeGridHeaderResources2() {
    var _this;
    _classCallCheck(this, TimeGridHeaderResources2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$5(this, TimeGridHeaderResources2, [].concat(args));
    _this.handleHeaderClick = function(date2, view, e) {
      e.preventDefault();
      notify(_this.props.onDrillDown, [date2, view]);
    };
    return _this;
  }
  _inherits(TimeGridHeaderResources2, _React$Component);
  return _createClass(TimeGridHeaderResources2, [{
    key: "renderHeaderCells",
    value: function renderHeaderCells(range2) {
      var _this2 = this;
      var _this$props = this.props, localizer2 = _this$props.localizer, getDrilldownView = _this$props.getDrilldownView, getNow2 = _this$props.getNow, dayProp = _this$props.getters.dayProp, _this$props$component = _this$props.components, _this$props$component2 = _this$props$component.header, HeaderComponent = _this$props$component2 === void 0 ? Header : _this$props$component2, _this$props$component3 = _this$props$component.resourceHeader, ResourceHeaderComponent = _this$props$component3 === void 0 ? ResourceHeader : _this$props$component3, resources = _this$props.resources, accessors2 = _this$props.accessors, events = _this$props.events, rtl = _this$props.rtl, selectable = _this$props.selectable, components2 = _this$props.components, getters = _this$props.getters, resizable = _this$props.resizable;
      var today = getNow2();
      var groupedEvents = resources.groupEvents(events);
      return range2.map(function(date2, idx) {
        var drilldownView = getDrilldownView(date2);
        var label = localizer2.format(date2, "dayFormat");
        var _dayProp = dayProp(date2), className = _dayProp.className, style2 = _dayProp.style;
        var header = /* @__PURE__ */ r.createElement(HeaderComponent, {
          date: date2,
          label,
          localizer: localizer2
        });
        return /* @__PURE__ */ r.createElement("div", {
          key: idx,
          className: "rbc-time-header-content rbc-resource-grouping"
        }, /* @__PURE__ */ r.createElement("div", {
          className: "rbc-row rbc-time-header-cell".concat(range2.length <= 1 ? " rbc-time-header-cell-single-day" : "")
        }, /* @__PURE__ */ r.createElement("div", {
          style: style2,
          className: clsx$1("rbc-header", className, localizer2.isSameDate(date2, today) && "rbc-today")
        }, drilldownView ? /* @__PURE__ */ r.createElement("button", {
          type: "button",
          className: "rbc-button-link",
          onClick: function onClick(e) {
            return _this2.handleHeaderClick(date2, drilldownView, e);
          }
        }, header) : /* @__PURE__ */ r.createElement("span", null, header))), /* @__PURE__ */ r.createElement("div", {
          className: "rbc-row"
        }, resources.map(function(_ref, idx2) {
          var _ref2 = _slicedToArray(_ref, 2), id = _ref2[0], resource = _ref2[1];
          return /* @__PURE__ */ r.createElement("div", {
            key: "resource_".concat(id, "_").concat(idx2),
            className: clsx$1("rbc-header", className, localizer2.isSameDate(date2, today) && "rbc-today")
          }, /* @__PURE__ */ r.createElement(ResourceHeaderComponent, {
            index: idx2,
            label: accessors2.resourceTitle(resource),
            resource
          }));
        })), /* @__PURE__ */ r.createElement("div", {
          className: "rbc-row rbc-m-b-negative-3 rbc-h-full"
        }, resources.map(function(_ref3, idx2) {
          var _ref4 = _slicedToArray(_ref3, 2), id = _ref4[0], resource = _ref4[1];
          var filteredEvents = (groupedEvents.get(id) || []).filter(function(event) {
            return localizer2.isSameDate(event.start, date2) || localizer2.isSameDate(event.end, date2);
          });
          return /* @__PURE__ */ r.createElement(DateContentRow, {
            key: "resource_".concat(id, "_").concat(idx2),
            isAllDay: true,
            rtl,
            getNow: getNow2,
            minRows: 2,
            maxRows: _this2.props.allDayMaxRows + 1,
            range: [date2],
            events: filteredEvents,
            resourceId: resource && id,
            className: "rbc-allday-cell",
            selectable,
            selected: _this2.props.selected,
            components: components2,
            accessors: accessors2,
            getters,
            localizer: localizer2,
            onSelect: _this2.props.onSelectEvent,
            onShowMore: _this2.props.onShowMore,
            onDoubleClick: _this2.props.onDoubleClickEvent,
            onKeyDown: _this2.props.onKeyPressEvent,
            onSelectSlot: _this2.props.onSelectSlot,
            longPressThreshold: _this2.props.longPressThreshold,
            resizable
          });
        })));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props, width2 = _this$props2.width, rtl = _this$props2.rtl, range2 = _this$props2.range, scrollRef = _this$props2.scrollRef, isOverflowing = _this$props2.isOverflowing, TimeGutterHeader = _this$props2.components.timeGutterHeader;
      var style2 = {};
      if (isOverflowing) {
        style2[rtl ? "marginLeft" : "marginRight"] = "".concat(scrollbarSize$1() - 1, "px");
      }
      return /* @__PURE__ */ r.createElement("div", {
        style: style2,
        ref: scrollRef,
        className: clsx$1("rbc-time-header", isOverflowing && "rbc-overflowing")
      }, /* @__PURE__ */ r.createElement("div", {
        className: "rbc-label rbc-time-header-gutter",
        style: {
          width: width2,
          minWidth: width2,
          maxWidth: width2
        }
      }, TimeGutterHeader && /* @__PURE__ */ r.createElement(TimeGutterHeader, null)), this.renderHeaderCells(range2));
    }
  }]);
})(r.Component);
TimeGridHeaderResources.propTypes = {};
function adjustForDST(_ref) {
  var min2 = _ref.min, max2 = _ref.max, localizer2 = _ref.localizer;
  if (localizer2.getTimezoneOffset(min2) !== localizer2.getTimezoneOffset(max2)) {
    return {
      start: localizer2.add(min2, -1, "day"),
      end: localizer2.add(max2, -1, "day")
    };
  }
  return {
    start: min2,
    end: max2
  };
}
var TimeGutter = function TimeGutter2(_ref2) {
  var min2 = _ref2.min, max2 = _ref2.max, timeslots = _ref2.timeslots, step = _ref2.step, localizer2 = _ref2.localizer, getNow2 = _ref2.getNow, resource = _ref2.resource, components2 = _ref2.components, getters = _ref2.getters, gutterRef = _ref2.gutterRef;
  var TimeGutterWrapper = components2.timeGutterWrapper;
  var _useMemo = reactExports.useMemo(
    function() {
      return adjustForDST({
        min: min2,
        max: max2,
        localizer: localizer2
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [min2 === null || min2 === void 0 ? void 0 : min2.toISOString(), max2 === null || max2 === void 0 ? void 0 : max2.toISOString(), localizer2]
  ), start = _useMemo.start, end = _useMemo.end;
  var _useState = reactExports.useState(getSlotMetrics({
    min: start,
    max: end,
    timeslots,
    step,
    localizer: localizer2
  })), _useState2 = _slicedToArray(_useState, 2), slotMetrics = _useState2[0], setSlotMetrics = _useState2[1];
  reactExports.useEffect(function() {
    if (slotMetrics) {
      setSlotMetrics(slotMetrics.update({
        min: start,
        max: end,
        timeslots,
        step,
        localizer: localizer2
      }));
    }
  }, [start === null || start === void 0 ? void 0 : start.toISOString(), end === null || end === void 0 ? void 0 : end.toISOString(), timeslots, step]);
  var renderSlot = reactExports.useCallback(function(value, idx) {
    if (idx) return null;
    var isNow = slotMetrics.dateIsInGroup(getNow2(), idx);
    return /* @__PURE__ */ r.createElement("span", {
      className: clsx$1("rbc-label", isNow && "rbc-now")
    }, localizer2.format(value, "timeGutterFormat"));
  }, [slotMetrics, localizer2, getNow2]);
  return /* @__PURE__ */ r.createElement(TimeGutterWrapper, {
    slotMetrics
  }, /* @__PURE__ */ r.createElement("div", {
    className: "rbc-time-gutter rbc-time-column",
    ref: gutterRef
  }, slotMetrics.groups.map(function(grp, idx) {
    return /* @__PURE__ */ r.createElement(TimeSlotGroup, {
      key: idx,
      group: grp,
      resource,
      components: components2,
      renderSlot,
      getters
    });
  })));
};
TimeGutter.propTypes = {};
var TimeGutter$1 = /* @__PURE__ */ r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ r.createElement(TimeGutter, _extends$1({
    gutterRef: ref
  }, props));
});
var NONE = {};
function Resources(resources, accessors2) {
  return {
    map: function map(fn2) {
      if (!resources) return [fn2([NONE, null], 0)];
      return resources.map(function(resource, idx) {
        return fn2([accessors2.resourceId(resource), resource], idx);
      });
    },
    groupEvents: function groupEvents(events) {
      var eventsByResource = /* @__PURE__ */ new Map();
      if (!resources) {
        eventsByResource.set(NONE, events);
        return eventsByResource;
      }
      events.forEach(function(event) {
        var id = accessors2.resource(event) || NONE;
        if (Array.isArray(id)) {
          id.forEach(function(item) {
            var resourceEvents2 = eventsByResource.get(item) || [];
            resourceEvents2.push(event);
            eventsByResource.set(item, resourceEvents2);
          });
        } else {
          var resourceEvents = eventsByResource.get(id) || [];
          resourceEvents.push(event);
          eventsByResource.set(id, resourceEvents);
        }
      });
      return eventsByResource;
    }
  };
}
function ownKeys$1(e, r2) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e);
    r2 && (o2 = o2.filter(function(r22) {
      return Object.getOwnPropertyDescriptor(e, r22).enumerable;
    })), t.push.apply(t, o2);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$1(Object(t), true).forEach(function(r22) {
      _defineProperty$1(e, r22, t[r22]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r22) {
      Object.defineProperty(e, r22, Object.getOwnPropertyDescriptor(t, r22));
    });
  }
  return e;
}
function _callSuper$4(t, o2, e) {
  return o2 = _getPrototypeOf(o2), _possibleConstructorReturn(t, _isNativeReflectConstruct$4() ? Reflect.construct(o2, e || [], _getPrototypeOf(t).constructor) : o2.apply(t, e));
}
function _isNativeReflectConstruct$4() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct$4 = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
var TimeGrid = /* @__PURE__ */ (function(_Component) {
  function TimeGrid2(props) {
    var _this;
    _classCallCheck(this, TimeGrid2);
    _this = _callSuper$4(this, TimeGrid2, [props]);
    _this.handleScroll = function(e) {
      if (_this.scrollRef.current) {
        _this.scrollRef.current.scrollLeft = e.target.scrollLeft;
      }
    };
    _this.handleResize = function() {
      cancel(_this.rafHandle);
      _this.rafHandle = request(_this.checkOverflow);
    };
    _this.handleKeyPressEvent = function() {
      _this.clearSelection();
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      notify(_this.props.onKeyPressEvent, args);
    };
    _this.handleSelectEvent = function() {
      _this.clearSelection();
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      notify(_this.props.onSelectEvent, args);
    };
    _this.handleDoubleClickEvent = function() {
      _this.clearSelection();
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      notify(_this.props.onDoubleClickEvent, args);
    };
    _this.handleShowMore = function(events, date2, cell, slot, target) {
      var _this$props = _this.props, popup = _this$props.popup, onDrillDown = _this$props.onDrillDown, onShowMore = _this$props.onShowMore, getDrilldownView = _this$props.getDrilldownView, doShowMoreDrillDown = _this$props.doShowMoreDrillDown;
      _this.clearSelection();
      if (popup) {
        var position2 = position$1(cell, _this.containerRef.current);
        _this.setState({
          overlay: {
            date: date2,
            events,
            position: _objectSpread$1(_objectSpread$1({}, position2), {}, {
              width: "200px"
            }),
            target
          }
        });
      } else if (doShowMoreDrillDown) {
        notify(onDrillDown, [date2, getDrilldownView(date2) || views$1.DAY]);
      }
      notify(onShowMore, [events, date2, slot]);
    };
    _this.handleSelectAllDaySlot = function(slots, slotInfo) {
      var onSelectSlot = _this.props.onSelectSlot;
      var start = new Date(slots[0]);
      var end = new Date(slots[slots.length - 1]);
      end.setDate(slots[slots.length - 1].getDate() + 1);
      notify(onSelectSlot, {
        slots,
        start,
        end,
        action: slotInfo.action,
        resourceId: slotInfo.resourceId
      });
    };
    _this.overlayDisplay = function() {
      _this.setState({
        overlay: null
      });
    };
    _this.checkOverflow = function() {
      if (_this._updatingOverflow) return;
      var content = _this.contentRef.current;
      if (!(content !== null && content !== void 0 && content.scrollHeight)) return;
      var isOverflowing = content.scrollHeight > content.clientHeight;
      if (_this.state.isOverflowing !== isOverflowing) {
        _this._updatingOverflow = true;
        _this.setState({
          isOverflowing
        }, function() {
          _this._updatingOverflow = false;
        });
      }
    };
    _this.memoizedResources = memoizeOne(function(resources, accessors2) {
      return Resources(resources, accessors2);
    });
    _this.state = {
      gutterWidth: void 0,
      isOverflowing: null
    };
    _this.scrollRef = /* @__PURE__ */ r.createRef();
    _this.contentRef = /* @__PURE__ */ r.createRef();
    _this.containerRef = /* @__PURE__ */ r.createRef();
    _this._scrollRatio = null;
    _this.gutterRef = /* @__PURE__ */ reactExports.createRef();
    return _this;
  }
  _inherits(TimeGrid2, _Component);
  return _createClass(TimeGrid2, [{
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate() {
      this.checkOverflow();
      return null;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.width == null) {
        this.measureGutter();
      }
      this.calculateScroll();
      this.applyScroll();
      window.addEventListener("resize", this.handleResize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize);
      cancel(this.rafHandle);
      if (this.measureGutterAnimationFrameRequest) {
        window.cancelAnimationFrame(this.measureGutterAnimationFrameRequest);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.applyScroll();
    }
  }, {
    key: "renderDayColumn",
    value: function renderDayColumn(date2, id, resource, groupedEvents, groupedBackgroundEvents, localizer2, accessors2, components2, dayLayoutAlgorithm, now) {
      var _this$props2 = this.props, min2 = _this$props2.min, max2 = _this$props2.max;
      var daysEvents = (groupedEvents.get(id) || []).filter(function(event) {
        return localizer2.inRange(date2, accessors2.start(event), accessors2.end(event), "day");
      });
      var daysBackgroundEvents = (groupedBackgroundEvents.get(id) || []).filter(function(event) {
        return localizer2.inRange(date2, accessors2.start(event), accessors2.end(event), "day");
      });
      return /* @__PURE__ */ r.createElement(DayColumn, _extends$1({}, this.props, {
        localizer: localizer2,
        min: localizer2.merge(date2, min2),
        max: localizer2.merge(date2, max2),
        resource: resource && id,
        components: components2,
        isNow: localizer2.isSameDate(date2, now),
        key: "".concat(id, "-").concat(date2),
        date: date2,
        events: daysEvents,
        backgroundEvents: daysBackgroundEvents,
        dayLayoutAlgorithm
      }));
    }
  }, {
    key: "renderResourcesFirst",
    value: function renderResourcesFirst(range2, resources, groupedEvents, groupedBackgroundEvents, localizer2, accessors2, now, components2, dayLayoutAlgorithm) {
      var _this2 = this;
      return resources.map(function(_ref) {
        var _ref2 = _slicedToArray(_ref, 2), id = _ref2[0], resource = _ref2[1];
        return range2.map(function(date2) {
          return _this2.renderDayColumn(date2, id, resource, groupedEvents, groupedBackgroundEvents, localizer2, accessors2, components2, dayLayoutAlgorithm, now);
        });
      });
    }
  }, {
    key: "renderRangeFirst",
    value: function renderRangeFirst(range2, resources, groupedEvents, groupedBackgroundEvents, localizer2, accessors2, now, components2, dayLayoutAlgorithm) {
      var _this3 = this;
      return range2.map(function(date2) {
        return /* @__PURE__ */ r.createElement("div", {
          style: {
            display: "flex",
            minHeight: "100%",
            flex: 1
          },
          key: date2
        }, resources.map(function(_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2), id = _ref4[0], resource = _ref4[1];
          return /* @__PURE__ */ r.createElement("div", {
            style: {
              flex: 1
            },
            key: accessors2.resourceId(resource)
          }, _this3.renderDayColumn(date2, id, resource, groupedEvents, groupedBackgroundEvents, localizer2, accessors2, components2, dayLayoutAlgorithm, now));
        }));
      });
    }
  }, {
    key: "renderEvents",
    value: function renderEvents(range2, events, backgroundEvents, now) {
      var _this$props3 = this.props, accessors2 = _this$props3.accessors, localizer2 = _this$props3.localizer, resourceGroupingLayout = _this$props3.resourceGroupingLayout, components2 = _this$props3.components, dayLayoutAlgorithm = _this$props3.dayLayoutAlgorithm;
      var resources = this.memoizedResources(this.props.resources, accessors2);
      var groupedEvents = resources.groupEvents(events);
      var groupedBackgroundEvents = resources.groupEvents(backgroundEvents);
      if (!resourceGroupingLayout) {
        return this.renderResourcesFirst(range2, resources, groupedEvents, groupedBackgroundEvents, localizer2, accessors2, now, components2, dayLayoutAlgorithm);
      } else {
        return this.renderRangeFirst(range2, resources, groupedEvents, groupedBackgroundEvents, localizer2, accessors2, now, components2, dayLayoutAlgorithm);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$allDayMax;
      var _this$props4 = this.props, events = _this$props4.events, backgroundEvents = _this$props4.backgroundEvents, range2 = _this$props4.range, width2 = _this$props4.width, rtl = _this$props4.rtl, selected = _this$props4.selected, getNow2 = _this$props4.getNow, resources = _this$props4.resources, components2 = _this$props4.components, accessors2 = _this$props4.accessors, getters = _this$props4.getters, localizer2 = _this$props4.localizer, min2 = _this$props4.min, max2 = _this$props4.max, showMultiDayTimes = _this$props4.showMultiDayTimes, longPressThreshold = _this$props4.longPressThreshold, resizable = _this$props4.resizable, resourceGroupingLayout = _this$props4.resourceGroupingLayout;
      width2 = width2 || this.state.gutterWidth;
      var start = range2[0], end = range2[range2.length - 1];
      this.slots = range2.length;
      var allDayEvents = [], rangeEvents = [], rangeBackgroundEvents = [];
      events.forEach(function(event) {
        if (inRange(event, start, end, accessors2, localizer2)) {
          var eStart = accessors2.start(event), eEnd = accessors2.end(event);
          if (accessors2.allDay(event) || localizer2.startAndEndAreDateOnly(eStart, eEnd) || !showMultiDayTimes && !localizer2.isSameDate(eStart, eEnd)) {
            allDayEvents.push(event);
          } else {
            rangeEvents.push(event);
          }
        }
      });
      backgroundEvents.forEach(function(event) {
        if (inRange(event, start, end, accessors2, localizer2)) {
          rangeBackgroundEvents.push(event);
        }
      });
      allDayEvents.sort(function(a, b) {
        return sortEvents(a, b, accessors2, localizer2);
      });
      var headerProps = {
        range: range2,
        events: allDayEvents,
        width: width2,
        rtl,
        getNow: getNow2,
        localizer: localizer2,
        selected,
        allDayMaxRows: this.props.showAllEvents ? Infinity : (_this$props$allDayMax = this.props.allDayMaxRows) !== null && _this$props$allDayMax !== void 0 ? _this$props$allDayMax : Infinity,
        resources: this.memoizedResources(resources, accessors2),
        selectable: this.props.selectable,
        accessors: accessors2,
        getters,
        components: components2,
        scrollRef: this.scrollRef,
        isOverflowing: this.state.isOverflowing,
        longPressThreshold,
        onSelectSlot: this.handleSelectAllDaySlot,
        onSelectEvent: this.handleSelectEvent,
        onShowMore: this.handleShowMore,
        onDoubleClickEvent: this.props.onDoubleClickEvent,
        onKeyPressEvent: this.props.onKeyPressEvent,
        onDrillDown: this.props.onDrillDown,
        getDrilldownView: this.props.getDrilldownView,
        resizable
      };
      return /* @__PURE__ */ r.createElement("div", {
        className: clsx$1("rbc-time-view", resources && "rbc-time-view-resources"),
        ref: this.containerRef
      }, resources && resources.length > 1 && resourceGroupingLayout ? /* @__PURE__ */ r.createElement(TimeGridHeaderResources, headerProps) : /* @__PURE__ */ r.createElement(TimeGridHeader, headerProps), this.props.popup && this.renderOverlay(), /* @__PURE__ */ r.createElement("div", {
        ref: this.contentRef,
        className: "rbc-time-content",
        onScroll: this.handleScroll
      }, /* @__PURE__ */ r.createElement(TimeGutter$1, {
        date: start,
        ref: this.gutterRef,
        localizer: localizer2,
        min: localizer2.merge(start, min2),
        max: localizer2.merge(start, max2),
        step: this.props.step,
        getNow: this.props.getNow,
        timeslots: this.props.timeslots,
        components: components2,
        className: "rbc-time-gutter",
        getters
      }), this.renderEvents(range2, rangeEvents, rangeBackgroundEvents, getNow2())));
    }
  }, {
    key: "renderOverlay",
    value: function renderOverlay() {
      var _this$state$overlay, _this$state, _this4 = this;
      var overlay = (_this$state$overlay = (_this$state = this.state) === null || _this$state === void 0 ? void 0 : _this$state.overlay) !== null && _this$state$overlay !== void 0 ? _this$state$overlay : {};
      var _this$props5 = this.props, accessors2 = _this$props5.accessors, localizer2 = _this$props5.localizer, components2 = _this$props5.components, getters = _this$props5.getters, selected = _this$props5.selected, popupOffset = _this$props5.popupOffset, handleDragStart = _this$props5.handleDragStart;
      var onHide2 = function onHide22() {
        return _this4.setState({
          overlay: null
        });
      };
      return /* @__PURE__ */ r.createElement(PopOverlay, {
        overlay,
        accessors: accessors2,
        localizer: localizer2,
        components: components2,
        getters,
        selected,
        popupOffset,
        ref: this.containerRef,
        handleKeyPressEvent: this.handleKeyPressEvent,
        handleSelectEvent: this.handleSelectEvent,
        handleDoubleClickEvent: this.handleDoubleClickEvent,
        handleDragStart,
        show: !!overlay.position,
        overlayDisplay: this.overlayDisplay,
        onHide: onHide2
      });
    }
  }, {
    key: "clearSelection",
    value: function clearSelection() {
      clearTimeout(this._selectTimer);
      this._pendingSelection = [];
    }
  }, {
    key: "measureGutter",
    value: function measureGutter() {
      var _this5 = this;
      if (this.measureGutterAnimationFrameRequest) {
        window.cancelAnimationFrame(this.measureGutterAnimationFrameRequest);
      }
      this.measureGutterAnimationFrameRequest = window.requestAnimationFrame(function() {
        var _this5$gutterRef;
        var width2 = (_this5$gutterRef = _this5.gutterRef) !== null && _this5$gutterRef !== void 0 && _this5$gutterRef.current ? getWidth(_this5.gutterRef.current) : void 0;
        if (width2 && _this5.state.gutterWidth !== width2) {
          _this5.setState({
            gutterWidth: width2
          });
        }
      });
    }
  }, {
    key: "applyScroll",
    value: function applyScroll() {
      if (this._scrollRatio != null && this.props.enableAutoScroll === true) {
        var content = this.contentRef.current;
        content.scrollTop = content.scrollHeight * this._scrollRatio;
        this._scrollRatio = null;
      }
    }
  }, {
    key: "calculateScroll",
    value: function calculateScroll() {
      var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props;
      var min2 = props.min, max2 = props.max, scrollToTime = props.scrollToTime, localizer2 = props.localizer;
      var diffMillis = localizer2.diff(localizer2.merge(scrollToTime, min2), scrollToTime, "milliseconds");
      var totalMillis = localizer2.diff(min2, max2, "milliseconds");
      this._scrollRatio = diffMillis / totalMillis;
    }
  }]);
})(reactExports.Component);
TimeGrid.propTypes = {};
TimeGrid.defaultProps = {
  step: 30,
  timeslots: 2,
  // To be compatible with old versions, default as `false`.
  resourceGroupingLayout: false
};
var _excluded$4 = ["date", "localizer", "min", "max", "scrollToTime", "enableAutoScroll"];
function _callSuper$3(t, o2, e) {
  return o2 = _getPrototypeOf(o2), _possibleConstructorReturn(t, _isNativeReflectConstruct$3() ? Reflect.construct(o2, e || [], _getPrototypeOf(t).constructor) : o2.apply(t, e));
}
function _isNativeReflectConstruct$3() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct$3 = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
var Day = /* @__PURE__ */ (function(_React$Component) {
  function Day2() {
    _classCallCheck(this, Day2);
    return _callSuper$3(this, Day2, arguments);
  }
  _inherits(Day2, _React$Component);
  return _createClass(Day2, [{
    key: "render",
    value: function render() {
      var _this$props = this.props, date2 = _this$props.date, localizer2 = _this$props.localizer, _this$props$min = _this$props.min, min2 = _this$props$min === void 0 ? localizer2.startOf(/* @__PURE__ */ new Date(), "day") : _this$props$min, _this$props$max = _this$props.max, max2 = _this$props$max === void 0 ? localizer2.endOf(/* @__PURE__ */ new Date(), "day") : _this$props$max, _this$props$scrollToT = _this$props.scrollToTime, scrollToTime = _this$props$scrollToT === void 0 ? localizer2.startOf(/* @__PURE__ */ new Date(), "day") : _this$props$scrollToT, _this$props$enableAut = _this$props.enableAutoScroll, enableAutoScroll = _this$props$enableAut === void 0 ? true : _this$props$enableAut, props = _objectWithoutProperties(_this$props, _excluded$4);
      var range2 = Day2.range(date2, {
        localizer: localizer2
      });
      return /* @__PURE__ */ r.createElement(TimeGrid, _extends$1({}, props, {
        range: range2,
        eventOffset: 10,
        localizer: localizer2,
        min: min2,
        max: max2,
        scrollToTime,
        enableAutoScroll
      }));
    }
  }]);
})(r.Component);
Day.propTypes = {};
Day.range = function(date2, _ref) {
  var localizer2 = _ref.localizer;
  return [localizer2.startOf(date2, "day")];
};
Day.navigate = function(date2, action, _ref2) {
  var localizer2 = _ref2.localizer;
  switch (action) {
    case navigate.PREVIOUS:
      return localizer2.add(date2, -1, "day");
    case navigate.NEXT:
      return localizer2.add(date2, 1, "day");
    default:
      return date2;
  }
};
Day.title = function(date2, _ref3) {
  var localizer2 = _ref3.localizer;
  return localizer2.format(date2, "dayHeaderFormat");
};
var _excluded$3 = ["date", "localizer", "min", "max", "scrollToTime", "enableAutoScroll"];
function _arrayLikeToArray$1(r2, a) {
  (null == a || a > r2.length) && (a = r2.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r2[e];
  return n;
}
function _callSuper$2(t, o2, e) {
  return o2 = _getPrototypeOf(o2), _possibleConstructorReturn(t, _isNativeReflectConstruct$2() ? Reflect.construct(o2, e || [], _getPrototypeOf(t).constructor) : o2.apply(t, e));
}
function _isNativeReflectConstruct$2() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct$2 = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
var Week = /* @__PURE__ */ (function(_React$Component) {
  function Week2() {
    _classCallCheck(this, Week2);
    return _callSuper$2(this, Week2, arguments);
  }
  _inherits(Week2, _React$Component);
  return _createClass(Week2, [{
    key: "render",
    value: function render() {
      var _this$props = this.props, date2 = _this$props.date, localizer2 = _this$props.localizer, _this$props$min = _this$props.min, min2 = _this$props$min === void 0 ? localizer2.startOf(/* @__PURE__ */ new Date(), "day") : _this$props$min, _this$props$max = _this$props.max, max2 = _this$props$max === void 0 ? localizer2.endOf(/* @__PURE__ */ new Date(), "day") : _this$props$max, _this$props$scrollToT = _this$props.scrollToTime, scrollToTime = _this$props$scrollToT === void 0 ? localizer2.startOf(/* @__PURE__ */ new Date(), "day") : _this$props$scrollToT, _this$props$enableAut = _this$props.enableAutoScroll, enableAutoScroll = _this$props$enableAut === void 0 ? true : _this$props$enableAut, props = _objectWithoutProperties(_this$props, _excluded$3);
      var range2 = Week2.range(date2, this.props);
      return /* @__PURE__ */ r.createElement(TimeGrid, _extends$1({}, props, {
        range: range2,
        eventOffset: 15,
        localizer: localizer2,
        min: min2,
        max: max2,
        scrollToTime,
        enableAutoScroll
      }));
    }
  }]);
})(r.Component);
Week.propTypes = {};
Week.defaultProps = TimeGrid.defaultProps;
Week.navigate = function(date2, action, _ref) {
  var localizer2 = _ref.localizer;
  switch (action) {
    case navigate.PREVIOUS:
      return localizer2.add(date2, -1, "week");
    case navigate.NEXT:
      return localizer2.add(date2, 1, "week");
    default:
      return date2;
  }
};
Week.range = function(date2, _ref2) {
  var localizer2 = _ref2.localizer;
  var firstOfWeek = localizer2.startOfWeek();
  var start = localizer2.startOf(date2, "week", firstOfWeek);
  var end = localizer2.endOf(date2, "week", firstOfWeek);
  return localizer2.range(start, end);
};
Week.title = function(date2, _ref3) {
  var localizer2 = _ref3.localizer;
  var _Week$range = Week.range(date2, {
    localizer: localizer2
  }), _Week$range2 = _toArray(_Week$range), start = _Week$range2[0], rest = _arrayLikeToArray$1(_Week$range2).slice(1);
  return localizer2.format({
    start,
    end: rest.pop()
  }, "dayRangeHeaderFormat");
};
var _excluded$2 = ["date", "localizer", "min", "max", "scrollToTime", "enableAutoScroll"];
function _arrayLikeToArray(r2, a) {
  (null == a || a > r2.length) && (a = r2.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r2[e];
  return n;
}
function _callSuper$1(t, o2, e) {
  return o2 = _getPrototypeOf(o2), _possibleConstructorReturn(t, _isNativeReflectConstruct$1() ? Reflect.construct(o2, e || [], _getPrototypeOf(t).constructor) : o2.apply(t, e));
}
function _isNativeReflectConstruct$1() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct$1 = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
function workWeekRange(date2, options2) {
  return Week.range(date2, options2).filter(function(d) {
    return [6, 0].indexOf(d.getDay()) === -1;
  });
}
var WorkWeek = /* @__PURE__ */ (function(_React$Component) {
  function WorkWeek2() {
    _classCallCheck(this, WorkWeek2);
    return _callSuper$1(this, WorkWeek2, arguments);
  }
  _inherits(WorkWeek2, _React$Component);
  return _createClass(WorkWeek2, [{
    key: "render",
    value: function render() {
      var _this$props = this.props, date2 = _this$props.date, localizer2 = _this$props.localizer, _this$props$min = _this$props.min, min2 = _this$props$min === void 0 ? localizer2.startOf(/* @__PURE__ */ new Date(), "day") : _this$props$min, _this$props$max = _this$props.max, max2 = _this$props$max === void 0 ? localizer2.endOf(/* @__PURE__ */ new Date(), "day") : _this$props$max, _this$props$scrollToT = _this$props.scrollToTime, scrollToTime = _this$props$scrollToT === void 0 ? localizer2.startOf(/* @__PURE__ */ new Date(), "day") : _this$props$scrollToT, _this$props$enableAut = _this$props.enableAutoScroll, enableAutoScroll = _this$props$enableAut === void 0 ? true : _this$props$enableAut, props = _objectWithoutProperties(_this$props, _excluded$2);
      var range2 = workWeekRange(date2, this.props);
      return /* @__PURE__ */ r.createElement(TimeGrid, _extends$1({}, props, {
        range: range2,
        eventOffset: 15,
        localizer: localizer2,
        min: min2,
        max: max2,
        scrollToTime,
        enableAutoScroll
      }));
    }
  }]);
})(r.Component);
WorkWeek.propTypes = {};
WorkWeek.defaultProps = TimeGrid.defaultProps;
WorkWeek.range = workWeekRange;
WorkWeek.navigate = Week.navigate;
WorkWeek.title = function(date2, _ref) {
  var localizer2 = _ref.localizer;
  var _workWeekRange = workWeekRange(date2, {
    localizer: localizer2
  }), _workWeekRange2 = _toArray(_workWeekRange), start = _workWeekRange2[0], rest = _arrayLikeToArray(_workWeekRange2).slice(1);
  return localizer2.format({
    start,
    end: rest.pop()
  }, "dayRangeHeaderFormat");
};
var DEFAULT_LENGTH = 30;
function Agenda(_ref) {
  var accessors2 = _ref.accessors, components2 = _ref.components, date2 = _ref.date, events = _ref.events, getters = _ref.getters, _ref$length = _ref.length, length = _ref$length === void 0 ? DEFAULT_LENGTH : _ref$length, localizer2 = _ref.localizer, onDoubleClickEvent = _ref.onDoubleClickEvent, onSelectEvent = _ref.onSelectEvent, selected = _ref.selected;
  var headerRef = reactExports.useRef(null);
  var dateColRef = reactExports.useRef(null);
  var timeColRef = reactExports.useRef(null);
  var contentRef = reactExports.useRef(null);
  var tbodyRef = reactExports.useRef(null);
  reactExports.useEffect(function() {
    _adjustHeader();
  });
  var renderDay = function renderDay2(day2, events2, dayKey) {
    var Event2 = components2.event, AgendaDate = components2.date;
    events2 = events2.filter(function(e) {
      return inRange(e, localizer2.startOf(day2, "day"), localizer2.endOf(day2, "day"), accessors2, localizer2);
    });
    return events2.map(function(event, idx) {
      var title = accessors2.title(event);
      var end2 = accessors2.end(event);
      var start = accessors2.start(event);
      var userProps = getters.eventProp(event, start, end2, isSelected(event, selected));
      var dateLabel = idx === 0 && localizer2.format(day2, "agendaDateFormat");
      var first = idx === 0 ? /* @__PURE__ */ r.createElement("td", {
        rowSpan: events2.length,
        className: "rbc-agenda-date-cell"
      }, AgendaDate ? /* @__PURE__ */ r.createElement(AgendaDate, {
        day: day2,
        label: dateLabel
      }) : dateLabel) : false;
      return /* @__PURE__ */ r.createElement("tr", {
        key: dayKey + "_" + idx,
        className: userProps.className,
        style: userProps.style
      }, first, /* @__PURE__ */ r.createElement("td", {
        className: "rbc-agenda-time-cell"
      }, timeRangeLabel(day2, event)), /* @__PURE__ */ r.createElement("td", {
        className: "rbc-agenda-event-cell",
        onClick: function onClick(e) {
          return onSelectEvent && onSelectEvent(event, e);
        },
        onDoubleClick: function onDoubleClick(e) {
          return onDoubleClickEvent && onDoubleClickEvent(event, e);
        }
      }, Event2 ? /* @__PURE__ */ r.createElement(Event2, {
        event,
        title
      }) : title));
    }, []);
  };
  var timeRangeLabel = function timeRangeLabel2(day2, event) {
    var labelClass = "", TimeComponent = components2.time, label = localizer2.messages.allDay;
    var end2 = accessors2.end(event);
    var start = accessors2.start(event);
    if (!accessors2.allDay(event)) {
      if (localizer2.eq(start, end2)) {
        label = localizer2.format(start, "agendaTimeFormat");
      } else if (localizer2.isSameDate(start, end2)) {
        label = localizer2.format({
          start,
          end: end2
        }, "agendaTimeRangeFormat");
      } else if (localizer2.isSameDate(day2, start)) {
        label = localizer2.format(start, "agendaTimeFormat");
      } else if (localizer2.isSameDate(day2, end2)) {
        label = localizer2.format(end2, "agendaTimeFormat");
      }
    }
    if (localizer2.gt(day2, start, "day")) labelClass = "rbc-continues-prior";
    if (localizer2.lt(day2, end2, "day")) labelClass += " rbc-continues-after";
    return /* @__PURE__ */ r.createElement("span", {
      className: labelClass.trim()
    }, TimeComponent ? /* @__PURE__ */ r.createElement(TimeComponent, {
      event,
      day: day2,
      label
    }) : label);
  };
  var _adjustHeader = function _adjustHeader2() {
    if (!tbodyRef.current) return;
    var header = headerRef.current;
    var firstRow = tbodyRef.current.firstChild;
    if (!firstRow) return;
    var isOverflowing = contentRef.current.scrollHeight > contentRef.current.clientHeight;
    var _widths = [];
    var widths = _widths;
    _widths = [getWidth(firstRow.children[0]), getWidth(firstRow.children[1])];
    if (widths[0] !== _widths[0] || widths[1] !== _widths[1]) {
      dateColRef.current.style.width = _widths[0] + "px";
      timeColRef.current.style.width = _widths[1] + "px";
    }
    if (isOverflowing) {
      addClass$1(header, "rbc-header-overflowing");
      header.style.marginRight = scrollbarSize$1() + "px";
    } else {
      removeClass$1(header, "rbc-header-overflowing");
    }
  };
  var messages2 = localizer2.messages;
  var end = localizer2.add(date2, length, "day");
  var range2 = localizer2.range(date2, end, "day");
  events = events.filter(function(event) {
    return inRange(event, localizer2.startOf(date2, "day"), localizer2.endOf(end, "day"), accessors2, localizer2);
  });
  events.sort(function(a, b) {
    return +accessors2.start(a) - +accessors2.start(b);
  });
  return /* @__PURE__ */ r.createElement("div", {
    className: "rbc-agenda-view"
  }, events.length !== 0 ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("table", {
    ref: headerRef,
    className: "rbc-agenda-table"
  }, /* @__PURE__ */ r.createElement("thead", null, /* @__PURE__ */ r.createElement("tr", null, /* @__PURE__ */ r.createElement("th", {
    className: "rbc-header",
    ref: dateColRef
  }, messages2.date), /* @__PURE__ */ r.createElement("th", {
    className: "rbc-header",
    ref: timeColRef
  }, messages2.time), /* @__PURE__ */ r.createElement("th", {
    className: "rbc-header"
  }, messages2.event)))), /* @__PURE__ */ r.createElement("div", {
    className: "rbc-agenda-content",
    ref: contentRef
  }, /* @__PURE__ */ r.createElement("table", {
    className: "rbc-agenda-table"
  }, /* @__PURE__ */ r.createElement("tbody", {
    ref: tbodyRef
  }, range2.map(function(day2, idx) {
    return renderDay(day2, events, idx);
  }))))) : /* @__PURE__ */ r.createElement("span", {
    className: "rbc-agenda-empty"
  }, messages2.noEventsInRange));
}
Agenda.propTypes = {};
Agenda.range = function(start, _ref2) {
  var _ref2$length = _ref2.length, length = _ref2$length === void 0 ? DEFAULT_LENGTH : _ref2$length, localizer2 = _ref2.localizer;
  var end = localizer2.add(start, length, "day");
  return {
    start,
    end
  };
};
Agenda.navigate = function(date2, action, _ref3) {
  var _ref3$length = _ref3.length, length = _ref3$length === void 0 ? DEFAULT_LENGTH : _ref3$length, localizer2 = _ref3.localizer;
  switch (action) {
    case navigate.PREVIOUS:
      return localizer2.add(date2, -length, "day");
    case navigate.NEXT:
      return localizer2.add(date2, length, "day");
    default:
      return date2;
  }
};
Agenda.title = function(start, _ref4) {
  var _ref4$length = _ref4.length, length = _ref4$length === void 0 ? DEFAULT_LENGTH : _ref4$length, localizer2 = _ref4.localizer;
  var end = localizer2.add(start, length, "day");
  return localizer2.format({
    start,
    end
  }, "agendaHeaderFormat");
};
var VIEWS = _defineProperty$1(_defineProperty$1(_defineProperty$1(_defineProperty$1(_defineProperty$1({}, views$1.MONTH, MonthView), views$1.WEEK, Week), views$1.WORK_WEEK, WorkWeek), views$1.DAY, Day), views$1.AGENDA, Agenda);
var _excluded$1 = ["action", "date", "today"];
function moveDate(View, _ref) {
  var action = _ref.action, date2 = _ref.date, today = _ref.today, props = _objectWithoutProperties(_ref, _excluded$1);
  View = typeof View === "string" ? VIEWS[View] : View;
  switch (action) {
    case navigate.TODAY:
      date2 = today || /* @__PURE__ */ new Date();
      break;
    case navigate.DATE:
      break;
    default:
      invariant(View && typeof View.navigate === "function", "Calendar View components must implement a static `.navigate(date, action)` method.s");
      date2 = View.navigate(date2, action, props);
  }
  return date2;
}
function accessor(data, field) {
  var value = null;
  if (typeof field === "function") value = field(data);
  else if (typeof field === "string" && _typeof$1(data) === "object" && data != null && field in data) value = data[field];
  return value;
}
var wrapAccessor = function wrapAccessor2(acc) {
  return function(data) {
    return accessor(data, acc);
  };
};
var _excluded = ["view", "date", "getNow", "onNavigate"], _excluded2 = ["view", "toolbar", "events", "backgroundEvents", "resourceGroupingLayout", "style", "className", "elementProps", "date", "getNow", "length", "showMultiDayTimes", "onShowMore", "doShowMoreDrillDown", "components", "formats", "messages", "culture"];
function ownKeys(e, r2) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e);
    r2 && (o2 = o2.filter(function(r22) {
      return Object.getOwnPropertyDescriptor(e, r22).enumerable;
    })), t.push.apply(t, o2);
  }
  return t;
}
function _objectSpread(e) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys(Object(t), true).forEach(function(r22) {
      _defineProperty$1(e, r22, t[r22]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r22) {
      Object.defineProperty(e, r22, Object.getOwnPropertyDescriptor(t, r22));
    });
  }
  return e;
}
function _callSuper(t, o2, e) {
  return o2 = _getPrototypeOf(o2), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o2, e || [], _getPrototypeOf(t).constructor) : o2.apply(t, e));
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
function viewNames(_views) {
  if (Array.isArray(_views)) {
    return _views;
  }
  var views2 = [];
  for (var _i = 0, _Object$entries = Object.entries(_views); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1];
    if (value) {
      views2.push(key);
    }
  }
  return views2;
}
function isValidView(view, _ref) {
  var _views = _ref.views;
  var names = viewNames(_views);
  return names.indexOf(view) !== -1;
}
var Calendar = /* @__PURE__ */ (function(_React$Component) {
  function Calendar2() {
    var _this;
    _classCallCheck(this, Calendar2);
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Calendar2, [].concat(_args));
    _this.getViews = function() {
      var views2 = _this.props.views;
      if (Array.isArray(views2)) {
        return transform(views2, function(obj, name) {
          return obj[name] = VIEWS[name];
        }, {});
      }
      if (_typeof$1(views2) === "object") {
        return mapValues(views2, function(value, key) {
          if (value === true) {
            return VIEWS[key];
          }
          return value;
        });
      }
      return VIEWS;
    };
    _this.getView = function() {
      var views2 = _this.getViews();
      return views2[_this.props.view];
    };
    _this.getDrilldownView = function(date2) {
      var _this$props = _this.props, view = _this$props.view, drilldownView = _this$props.drilldownView, getDrilldownView = _this$props.getDrilldownView;
      if (!getDrilldownView) return drilldownView;
      return getDrilldownView(date2, view, Object.keys(_this.getViews()));
    };
    _this.handleRangeChange = function(date2, viewComponent, view) {
      var _this$props2 = _this.props, onRangeChange = _this$props2.onRangeChange, localizer2 = _this$props2.localizer;
      if (onRangeChange) {
        if (viewComponent.range) {
          onRangeChange(viewComponent.range(date2, {
            localizer: localizer2
          }), view);
        }
      }
    };
    _this.handleNavigate = function(action, newDate) {
      var _this$props3 = _this.props, view = _this$props3.view, date2 = _this$props3.date, getNow2 = _this$props3.getNow, onNavigate = _this$props3.onNavigate, props = _objectWithoutProperties(_this$props3, _excluded);
      var ViewComponent = _this.getView();
      var today = getNow2();
      date2 = moveDate(ViewComponent, _objectSpread(_objectSpread({}, props), {}, {
        action,
        date: newDate || date2 || today,
        today
      }));
      onNavigate(date2, view, action);
      _this.handleRangeChange(date2, ViewComponent);
    };
    _this.handleViewChange = function(view) {
      if (view !== _this.props.view && isValidView(view, _this.props)) {
        _this.props.onView(view);
      }
      var views2 = _this.getViews();
      _this.handleRangeChange(_this.props.date || _this.props.getNow(), views2[view], view);
    };
    _this.handleSelectEvent = function() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      notify(_this.props.onSelectEvent, args);
    };
    _this.handleDoubleClickEvent = function() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      notify(_this.props.onDoubleClickEvent, args);
    };
    _this.handleKeyPressEvent = function() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      notify(_this.props.onKeyPressEvent, args);
    };
    _this.handleSelectSlot = function(slotInfo) {
      notify(_this.props.onSelectSlot, slotInfo);
    };
    _this.handleDrillDown = function(date2, view) {
      var onDrillDown = _this.props.onDrillDown;
      if (onDrillDown) {
        onDrillDown(date2, view, _this.drilldownView);
        return;
      }
      if (view) _this.handleViewChange(view);
      _this.handleNavigate(navigate.DATE, date2);
    };
    _this.state = {
      context: Calendar2.getContext(_this.props)
    };
    return _this;
  }
  _inherits(Calendar2, _React$Component);
  return _createClass(Calendar2, [{
    key: "render",
    value: function render() {
      var _this$props4 = this.props, view = _this$props4.view, toolbar = _this$props4.toolbar, events = _this$props4.events, backgroundEvents = _this$props4.backgroundEvents, resourceGroupingLayout = _this$props4.resourceGroupingLayout, style2 = _this$props4.style, className = _this$props4.className, elementProps = _this$props4.elementProps, current = _this$props4.date, getNow2 = _this$props4.getNow, length = _this$props4.length, showMultiDayTimes = _this$props4.showMultiDayTimes, onShowMore = _this$props4.onShowMore, doShowMoreDrillDown = _this$props4.doShowMoreDrillDown;
      _this$props4.components;
      _this$props4.formats;
      _this$props4.messages;
      _this$props4.culture;
      var props = _objectWithoutProperties(_this$props4, _excluded2);
      current = current || getNow2();
      var View = this.getView();
      var _this$state$context = this.state.context, accessors2 = _this$state$context.accessors, components2 = _this$state$context.components, getters = _this$state$context.getters, localizer2 = _this$state$context.localizer, viewNames2 = _this$state$context.viewNames;
      var CalToolbar = components2.toolbar || Toolbar;
      var label = View.title(current, {
        localizer: localizer2,
        length
      });
      return /* @__PURE__ */ r.createElement("div", _extends$1({}, elementProps, {
        className: clsx$1(className, "rbc-calendar", props.rtl && "rbc-rtl"),
        style: style2
      }), toolbar && /* @__PURE__ */ r.createElement(CalToolbar, {
        date: current,
        view,
        views: viewNames2,
        label,
        onView: this.handleViewChange,
        onNavigate: this.handleNavigate,
        localizer: localizer2
      }), /* @__PURE__ */ r.createElement(View, _extends$1({}, props, {
        events,
        backgroundEvents,
        date: current,
        getNow: getNow2,
        length,
        localizer: localizer2,
        getters,
        components: components2,
        accessors: accessors2,
        showMultiDayTimes,
        getDrilldownView: this.getDrilldownView,
        onNavigate: this.handleNavigate,
        onDrillDown: this.handleDrillDown,
        onSelectEvent: this.handleSelectEvent,
        onDoubleClickEvent: this.handleDoubleClickEvent,
        onKeyPressEvent: this.handleKeyPressEvent,
        onSelectSlot: this.handleSelectSlot,
        onShowMore,
        doShowMoreDrillDown,
        resourceGroupingLayout
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      return {
        context: Calendar2.getContext(nextProps)
      };
    }
  }, {
    key: "getContext",
    value: function getContext(_ref2) {
      var startAccessor = _ref2.startAccessor, endAccessor = _ref2.endAccessor, allDayAccessor = _ref2.allDayAccessor, tooltipAccessor = _ref2.tooltipAccessor, titleAccessor = _ref2.titleAccessor, resourceAccessor = _ref2.resourceAccessor, resourceIdAccessor = _ref2.resourceIdAccessor, resourceTitleAccessor = _ref2.resourceTitleAccessor, eventIdAccessor = _ref2.eventIdAccessor, eventPropGetter = _ref2.eventPropGetter, backgroundEventPropGetter = _ref2.backgroundEventPropGetter, slotPropGetter = _ref2.slotPropGetter, slotGroupPropGetter = _ref2.slotGroupPropGetter, dayPropGetter = _ref2.dayPropGetter, view = _ref2.view, views2 = _ref2.views, localizer2 = _ref2.localizer, culture = _ref2.culture, _ref2$messages = _ref2.messages, messages$1 = _ref2$messages === void 0 ? {} : _ref2$messages, _ref2$components = _ref2.components, components2 = _ref2$components === void 0 ? {} : _ref2$components, _ref2$formats = _ref2.formats, formats2 = _ref2$formats === void 0 ? {} : _ref2$formats;
      var names = viewNames(views2);
      var msgs = messages(messages$1);
      return {
        viewNames: names,
        localizer: mergeWithDefaults(localizer2, culture, formats2, msgs),
        getters: {
          eventProp: function eventProp() {
            return eventPropGetter && eventPropGetter.apply(void 0, arguments) || {};
          },
          backgroundEventProp: function backgroundEventProp() {
            return backgroundEventPropGetter && backgroundEventPropGetter.apply(void 0, arguments) || {};
          },
          slotProp: function slotProp() {
            return slotPropGetter && slotPropGetter.apply(void 0, arguments) || {};
          },
          slotGroupProp: function slotGroupProp() {
            return slotGroupPropGetter && slotGroupPropGetter.apply(void 0, arguments) || {};
          },
          dayProp: function dayProp() {
            return dayPropGetter && dayPropGetter.apply(void 0, arguments) || {};
          }
        },
        components: defaults(components2[view] || {}, omit(components2, names), {
          eventWrapper: NoopWrapper,
          backgroundEventWrapper: NoopWrapper,
          eventContainerWrapper: NoopWrapper,
          dateCellWrapper: NoopWrapper,
          weekWrapper: NoopWrapper,
          timeSlotWrapper: NoopWrapper,
          timeGutterWrapper: NoopWrapper,
          timeIndicatorWrapper: NoopWrapper
        }),
        accessors: {
          start: wrapAccessor(startAccessor),
          end: wrapAccessor(endAccessor),
          allDay: wrapAccessor(allDayAccessor),
          tooltip: wrapAccessor(tooltipAccessor),
          title: wrapAccessor(titleAccessor),
          resource: wrapAccessor(resourceAccessor),
          resourceId: wrapAccessor(resourceIdAccessor),
          resourceTitle: wrapAccessor(resourceTitleAccessor),
          eventId: wrapAccessor(eventIdAccessor)
        }
      };
    }
  }]);
})(r.Component);
Calendar.defaultProps = {
  events: [],
  backgroundEvents: [],
  elementProps: {},
  popup: false,
  toolbar: true,
  view: views$1.MONTH,
  views: [views$1.MONTH, views$1.WEEK, views$1.DAY, views$1.AGENDA],
  step: 30,
  length: 30,
  allDayMaxRows: Infinity,
  doShowMoreDrillDown: true,
  drilldownView: views$1.DAY,
  titleAccessor: "title",
  tooltipAccessor: "title",
  allDayAccessor: "allDay",
  startAccessor: "start",
  endAccessor: "end",
  resourceAccessor: "resourceId",
  resourceIdAccessor: "id",
  resourceTitleAccessor: "title",
  eventIdAccessor: "id",
  longPressThreshold: 250,
  getNow: function getNow() {
    return /* @__PURE__ */ new Date();
  },
  dayLayoutAlgorithm: "overlap"
};
Calendar.propTypes = {};
var Calendar_default = uncontrollable(Calendar, {
  view: "onView",
  date: "onNavigate",
  selected: "onSelectEvent"
});
var dateRangeFormat$1 = function dateRangeFormat5(_ref, culture, local) {
  var start = _ref.start, end = _ref.end;
  return "".concat(local.format(start, "P", culture), " – ").concat(local.format(end, "P", culture));
};
var timeRangeFormat$1 = function timeRangeFormat5(_ref2, culture, local) {
  var start = _ref2.start, end = _ref2.end;
  return "".concat(local.format(start, "p", culture), " – ").concat(local.format(end, "p", culture));
};
var timeRangeStartFormat$1 = function timeRangeStartFormat5(_ref3, culture, local) {
  var start = _ref3.start;
  return "".concat(local.format(start, "h:mma", culture), " – ");
};
var timeRangeEndFormat$1 = function timeRangeEndFormat5(_ref4, culture, local) {
  var end = _ref4.end;
  return " – ".concat(local.format(end, "h:mma", culture));
};
var weekRangeFormat$1 = function weekRangeFormat5(_ref5, culture, local) {
  var start = _ref5.start, end = _ref5.end;
  return "".concat(local.format(start, "MMMM dd", culture), " – ").concat(local.format(end, eq(start, end, "month") ? "dd" : "MMMM dd", culture));
};
var formats$1 = {
  dateFormat: "dd",
  dayFormat: "dd eee",
  weekdayFormat: "ccc",
  selectRangeFormat: timeRangeFormat$1,
  eventTimeRangeFormat: timeRangeFormat$1,
  eventTimeRangeStartFormat: timeRangeStartFormat$1,
  eventTimeRangeEndFormat: timeRangeEndFormat$1,
  timeGutterFormat: "p",
  monthHeaderFormat: "MMMM yyyy",
  dayHeaderFormat: "cccc MMM dd",
  dayRangeHeaderFormat: weekRangeFormat$1,
  agendaHeaderFormat: dateRangeFormat$1,
  agendaDateFormat: "ccc MMM dd",
  agendaTimeFormat: "p",
  agendaTimeRangeFormat: timeRangeFormat$1
};
var dateFnsLocalizer = function dateFnsLocalizer2(_ref6) {
  var startOfWeek2 = _ref6.startOfWeek, getDay2 = _ref6.getDay, _format2 = _ref6.format, locales = _ref6.locales;
  return new DateLocalizer({
    formats: formats$1,
    firstOfWeek: function firstOfWeek(culture) {
      return getDay2(startOfWeek2(/* @__PURE__ */ new Date(), {
        locale: locales[culture]
      }));
    },
    format: function format2(value, formatString, culture) {
      return _format2(new Date(value), formatString, {
        locale: locales[culture]
      });
    }
  });
};
var dragAndDrop = {};
var interopRequireDefault = { exports: {} };
var hasRequiredInteropRequireDefault;
function requireInteropRequireDefault() {
  if (hasRequiredInteropRequireDefault) return interopRequireDefault.exports;
  hasRequiredInteropRequireDefault = 1;
  (function(module) {
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }
    module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(interopRequireDefault);
  return interopRequireDefault.exports;
}
var withDragAndDrop$1 = {};
var _extends = { exports: {} };
var hasRequired_extends;
function require_extends() {
  if (hasRequired_extends) return _extends.exports;
  hasRequired_extends = 1;
  (function(module) {
    function _extends2() {
      return module.exports = _extends2 = Object.assign ? Object.assign.bind() : function(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t = arguments[e];
          for (var r2 in t) ({}).hasOwnProperty.call(t, r2) && (n[r2] = t[r2]);
        }
        return n;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _extends2.apply(null, arguments);
    }
    module.exports = _extends2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(_extends);
  return _extends.exports;
}
var defineProperty = { exports: {} };
var toPropertyKey = { exports: {} };
var _typeof = { exports: {} };
var hasRequired_typeof;
function require_typeof() {
  if (hasRequired_typeof) return _typeof.exports;
  hasRequired_typeof = 1;
  (function(module) {
    function _typeof2(o2) {
      "@babel/helpers - typeof";
      return module.exports = _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
        return typeof o3;
      } : function(o3) {
        return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof2(o2);
    }
    module.exports = _typeof2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(_typeof);
  return _typeof.exports;
}
var toPrimitive = { exports: {} };
var hasRequiredToPrimitive;
function requireToPrimitive() {
  if (hasRequiredToPrimitive) return toPrimitive.exports;
  hasRequiredToPrimitive = 1;
  (function(module) {
    var _typeof2 = require_typeof()["default"];
    function toPrimitive2(t, e) {
      if ("object" != _typeof2(t) || !t) return t;
      var r2;
      if ("undefined" != typeof Symbol && void 0 !== (r2 = t[Symbol.toPrimitive])) {
        var i = r2.call(t, e || "default");
        if ("object" != _typeof2(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === e ? String : Number)(t);
    }
    module.exports = toPrimitive2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(toPrimitive);
  return toPrimitive.exports;
}
var hasRequiredToPropertyKey;
function requireToPropertyKey() {
  if (hasRequiredToPropertyKey) return toPropertyKey.exports;
  hasRequiredToPropertyKey = 1;
  (function(module) {
    var _typeof2 = require_typeof()["default"];
    var toPrimitive2 = requireToPrimitive();
    function toPropertyKey2(t) {
      var i = toPrimitive2(t, "string");
      return "symbol" == _typeof2(i) ? i : i + "";
    }
    module.exports = toPropertyKey2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(toPropertyKey);
  return toPropertyKey.exports;
}
var hasRequiredDefineProperty;
function requireDefineProperty() {
  if (hasRequiredDefineProperty) return defineProperty.exports;
  hasRequiredDefineProperty = 1;
  (function(module) {
    var toPropertyKey2 = requireToPropertyKey();
    function _defineProperty2(e, r2, t) {
      return (r2 = toPropertyKey2(r2)) in e ? Object.defineProperty(e, r2, {
        value: t,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[r2] = t, e;
    }
    module.exports = _defineProperty2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(defineProperty);
  return defineProperty.exports;
}
var objectWithoutProperties = { exports: {} };
var objectWithoutPropertiesLoose = { exports: {} };
var hasRequiredObjectWithoutPropertiesLoose;
function requireObjectWithoutPropertiesLoose() {
  if (hasRequiredObjectWithoutPropertiesLoose) return objectWithoutPropertiesLoose.exports;
  hasRequiredObjectWithoutPropertiesLoose = 1;
  (function(module) {
    function _objectWithoutPropertiesLoose2(r2, e) {
      if (null == r2) return {};
      var t = {};
      for (var n in r2) if ({}.hasOwnProperty.call(r2, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r2[n];
      }
      return t;
    }
    module.exports = _objectWithoutPropertiesLoose2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(objectWithoutPropertiesLoose);
  return objectWithoutPropertiesLoose.exports;
}
var hasRequiredObjectWithoutProperties;
function requireObjectWithoutProperties() {
  if (hasRequiredObjectWithoutProperties) return objectWithoutProperties.exports;
  hasRequiredObjectWithoutProperties = 1;
  (function(module) {
    var objectWithoutPropertiesLoose2 = requireObjectWithoutPropertiesLoose();
    function _objectWithoutProperties2(e, t) {
      if (null == e) return {};
      var o2, r2, i = objectWithoutPropertiesLoose2(e, t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for (r2 = 0; r2 < n.length; r2++) o2 = n[r2], -1 === t.indexOf(o2) && {}.propertyIsEnumerable.call(e, o2) && (i[o2] = e[o2]);
      }
      return i;
    }
    module.exports = _objectWithoutProperties2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(objectWithoutProperties);
  return objectWithoutProperties.exports;
}
var classCallCheck = { exports: {} };
var hasRequiredClassCallCheck;
function requireClassCallCheck() {
  if (hasRequiredClassCallCheck) return classCallCheck.exports;
  hasRequiredClassCallCheck = 1;
  (function(module) {
    function _classCallCheck2(a, n) {
      if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
    }
    module.exports = _classCallCheck2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(classCallCheck);
  return classCallCheck.exports;
}
var createClass = { exports: {} };
var hasRequiredCreateClass;
function requireCreateClass() {
  if (hasRequiredCreateClass) return createClass.exports;
  hasRequiredCreateClass = 1;
  (function(module) {
    var toPropertyKey2 = requireToPropertyKey();
    function _defineProperties2(e, r2) {
      for (var t = 0; t < r2.length; t++) {
        var o2 = r2[t];
        o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e, toPropertyKey2(o2.key), o2);
      }
    }
    function _createClass2(e, r2, t) {
      return r2 && _defineProperties2(e.prototype, r2), t && _defineProperties2(e, t), Object.defineProperty(e, "prototype", {
        writable: false
      }), e;
    }
    module.exports = _createClass2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(createClass);
  return createClass.exports;
}
var possibleConstructorReturn = { exports: {} };
var assertThisInitialized = { exports: {} };
var hasRequiredAssertThisInitialized;
function requireAssertThisInitialized() {
  if (hasRequiredAssertThisInitialized) return assertThisInitialized.exports;
  hasRequiredAssertThisInitialized = 1;
  (function(module) {
    function _assertThisInitialized2(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    module.exports = _assertThisInitialized2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(assertThisInitialized);
  return assertThisInitialized.exports;
}
var hasRequiredPossibleConstructorReturn;
function requirePossibleConstructorReturn() {
  if (hasRequiredPossibleConstructorReturn) return possibleConstructorReturn.exports;
  hasRequiredPossibleConstructorReturn = 1;
  (function(module) {
    var _typeof2 = require_typeof()["default"];
    var assertThisInitialized2 = requireAssertThisInitialized();
    function _possibleConstructorReturn2(t, e) {
      if (e && ("object" == _typeof2(e) || "function" == typeof e)) return e;
      if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
      return assertThisInitialized2(t);
    }
    module.exports = _possibleConstructorReturn2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(possibleConstructorReturn);
  return possibleConstructorReturn.exports;
}
var getPrototypeOf = { exports: {} };
var hasRequiredGetPrototypeOf;
function requireGetPrototypeOf() {
  if (hasRequiredGetPrototypeOf) return getPrototypeOf.exports;
  hasRequiredGetPrototypeOf = 1;
  (function(module) {
    function _getPrototypeOf2(t) {
      return module.exports = _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
        return t2.__proto__ || Object.getPrototypeOf(t2);
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _getPrototypeOf2(t);
    }
    module.exports = _getPrototypeOf2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(getPrototypeOf);
  return getPrototypeOf.exports;
}
var inherits = { exports: {} };
var setPrototypeOf = { exports: {} };
var hasRequiredSetPrototypeOf;
function requireSetPrototypeOf() {
  if (hasRequiredSetPrototypeOf) return setPrototypeOf.exports;
  hasRequiredSetPrototypeOf = 1;
  (function(module) {
    function _setPrototypeOf2(t, e) {
      return module.exports = _setPrototypeOf2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
        return t2.__proto__ = e2, t2;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _setPrototypeOf2(t, e);
    }
    module.exports = _setPrototypeOf2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(setPrototypeOf);
  return setPrototypeOf.exports;
}
var hasRequiredInherits;
function requireInherits() {
  if (hasRequiredInherits) return inherits.exports;
  hasRequiredInherits = 1;
  (function(module) {
    var setPrototypeOf2 = requireSetPrototypeOf();
    function _inherits2(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: true,
          configurable: true
        }
      }), Object.defineProperty(t, "prototype", {
        writable: false
      }), e && setPrototypeOf2(t, e);
    }
    module.exports = _inherits2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(inherits);
  return inherits.exports;
}
var clsx = { exports: {} };
var hasRequiredClsx;
function requireClsx() {
  if (hasRequiredClsx) return clsx.exports;
  hasRequiredClsx = 1;
  function r2(e2) {
    var o2, t, f = "";
    if ("string" == typeof e2 || "number" == typeof e2) f += e2;
    else if ("object" == typeof e2) if (Array.isArray(e2)) {
      var n = e2.length;
      for (o2 = 0; o2 < n; o2++) e2[o2] && (t = r2(e2[o2])) && (f && (f += " "), f += t);
    } else for (t in e2) e2[t] && (f && (f += " "), f += t);
    return f;
  }
  function e() {
    for (var e2, o2, t = 0, f = "", n = arguments.length; t < n; t++) (e2 = arguments[t]) && (o2 = r2(e2)) && (f && (f += " "), f += o2);
    return f;
  }
  clsx.exports = e, clsx.exports.clsx = e;
  return clsx.exports;
}
var propTypes = {};
var constants = {};
var hasRequiredConstants;
function requireConstants() {
  if (hasRequiredConstants) return constants;
  hasRequiredConstants = 1;
  Object.defineProperty(constants, "__esModule", {
    value: true
  });
  constants.views = constants.navigate = void 0;
  constants.navigate = {
    PREVIOUS: "PREV",
    NEXT: "NEXT",
    TODAY: "TODAY",
    DATE: "DATE"
  };
  constants.views = {
    MONTH: "month",
    WEEK: "week",
    WORK_WEEK: "work_week",
    DAY: "day",
    AGENDA: "agenda"
  };
  return constants;
}
var hasRequiredPropTypes;
function requirePropTypes() {
  if (hasRequiredPropTypes) return propTypes;
  hasRequiredPropTypes = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(propTypes, "__esModule", {
    value: true
  });
  propTypes.views = propTypes.dateRangeFormat = propTypes.dateFormat = propTypes.accessor = propTypes.DayLayoutAlgorithmPropType = void 0;
  var _propTypes = _interopRequireDefault(/* @__PURE__ */ requirePropTypes$1());
  var _constants = requireConstants();
  var viewNames2 = Object.keys(_constants.views).map(function(k) {
    return _constants.views[k];
  });
  propTypes.accessor = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]);
  propTypes.dateFormat = _propTypes.default.any;
  propTypes.dateRangeFormat = _propTypes.default.func;
  propTypes.views = _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOf(viewNames2)), _propTypes.default.objectOf(function(prop, key) {
    var isBuiltinView = viewNames2.indexOf(key) !== -1 && typeof prop[key] === "boolean";
    if (isBuiltinView) {
      return null;
    } else {
      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }
      return _propTypes.default.elementType.apply(_propTypes.default, [prop, key].concat(args));
    }
  })]);
  propTypes.DayLayoutAlgorithmPropType = _propTypes.default.oneOfType([_propTypes.default.oneOf(["overlap", "no-overlap"]), _propTypes.default.func]);
  return propTypes;
}
var EventWrapper = {};
var accessors = {};
var hasRequiredAccessors;
function requireAccessors() {
  if (hasRequiredAccessors) return accessors;
  hasRequiredAccessors = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(accessors, "__esModule", {
    value: true
  });
  accessors.accessor = accessor2;
  accessors.wrapAccessor = void 0;
  var _typeof2 = _interopRequireDefault(require_typeof());
  function accessor2(data, field) {
    var value = null;
    if (typeof field === "function") value = field(data);
    else if (typeof field === "string" && (0, _typeof2.default)(data) === "object" && data != null && field in data) value = data[field];
    return value;
  }
  accessors.wrapAccessor = function wrapAccessor3(acc) {
    return function(data) {
      return accessor2(data, acc);
    };
  };
  return accessors;
}
var DnDContext = {};
var hasRequiredDnDContext;
function requireDnDContext() {
  if (hasRequiredDnDContext) return DnDContext;
  hasRequiredDnDContext = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(DnDContext, "__esModule", {
    value: true
  });
  DnDContext.DnDContext = void 0;
  var _react = _interopRequireDefault(requireReact());
  DnDContext.DnDContext = /* @__PURE__ */ _react.default.createContext();
  return DnDContext;
}
var hasRequiredEventWrapper;
function requireEventWrapper() {
  if (hasRequiredEventWrapper) return EventWrapper;
  hasRequiredEventWrapper = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(EventWrapper, "__esModule", {
    value: true
  });
  EventWrapper.default = void 0;
  var _defineProperty2 = _interopRequireDefault(requireDefineProperty());
  var _classCallCheck2 = _interopRequireDefault(requireClassCallCheck());
  var _createClass2 = _interopRequireDefault(requireCreateClass());
  var _possibleConstructorReturn2 = _interopRequireDefault(requirePossibleConstructorReturn());
  var _getPrototypeOf2 = _interopRequireDefault(requireGetPrototypeOf());
  var _inherits2 = _interopRequireDefault(requireInherits());
  _interopRequireDefault(/* @__PURE__ */ requirePropTypes$1());
  var _react = _interopRequireDefault(requireReact());
  var _clsx = _interopRequireDefault(requireClsx());
  var _accessors = requireAccessors();
  var _DnDContext = requireDnDContext();
  function ownKeys2(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o2 = Object.getOwnPropertySymbols(e);
      r2 && (o2 = o2.filter(function(r22) {
        return Object.getOwnPropertyDescriptor(e, r22).enumerable;
      })), t.push.apply(t, o2);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys2(Object(t), true).forEach(function(r22) {
        (0, _defineProperty2.default)(e, r22, t[r22]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r22) {
        Object.defineProperty(e, r22, Object.getOwnPropertyDescriptor(t, r22));
      });
    }
    return e;
  }
  function _callSuper2(t, o2, e) {
    return o2 = (0, _getPrototypeOf2.default)(o2), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct2() ? Reflect.construct(o2, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o2.apply(t, e));
  }
  function _isNativeReflectConstruct2() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch (t2) {
    }
    return (_isNativeReflectConstruct2 = function _isNativeReflectConstruct22() {
      return !!t;
    })();
  }
  var EventWrapper$1 = /* @__PURE__ */ (function(_React$Component) {
    function EventWrapper2() {
      var _this;
      (0, _classCallCheck2.default)(this, EventWrapper2);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _callSuper2(this, EventWrapper2, [].concat(args));
      _this.handleResizeUp = function(e) {
        if (e.button !== 0) return;
        _this.context.draggable.onBeginAction(_this.props.event, "resize", "UP");
      };
      _this.handleResizeDown = function(e) {
        if (e.button !== 0) return;
        _this.context.draggable.onBeginAction(_this.props.event, "resize", "DOWN");
      };
      _this.handleResizeLeft = function(e) {
        if (e.button !== 0) return;
        _this.context.draggable.onBeginAction(_this.props.event, "resize", "LEFT");
      };
      _this.handleResizeRight = function(e) {
        if (e.button !== 0) return;
        _this.context.draggable.onBeginAction(_this.props.event, "resize", "RIGHT");
      };
      _this.handleStartDragging = function(e) {
        var _e$target$getAttribut;
        if (e.button !== 0) return;
        var isResizeHandle = (_e$target$getAttribut = e.target.getAttribute("class")) === null || _e$target$getAttribut === void 0 ? void 0 : _e$target$getAttribut.includes("rbc-addons-dnd-resize");
        if (!isResizeHandle) {
          var extendedEvent = _objectSpread2({}, _this.props.event);
          extendedEvent.sourceResource = _this.props.resource;
          _this.context.draggable.onBeginAction(_this.props.event, "move");
        }
      };
      return _this;
    }
    (0, _inherits2.default)(EventWrapper2, _React$Component);
    return (0, _createClass2.default)(EventWrapper2, [{
      key: "renderAnchor",
      value: function renderAnchor(direction) {
        var cls = direction === "Up" || direction === "Down" ? "ns" : "ew";
        return /* @__PURE__ */ _react.default.createElement("div", {
          className: "rbc-addons-dnd-resize-".concat(cls, "-anchor"),
          onMouseDown: this["handleResize".concat(direction)]
        }, /* @__PURE__ */ _react.default.createElement("div", {
          className: "rbc-addons-dnd-resize-".concat(cls, "-icon")
        }));
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props, event = _this$props.event, type = _this$props.type, continuesPrior2 = _this$props.continuesPrior, continuesAfter2 = _this$props.continuesAfter, resizable = _this$props.resizable;
        var children = this.props.children;
        if (event.__isPreview) return /* @__PURE__ */ _react.default.cloneElement(children, {
          className: (0, _clsx.default)(children.props.className, "rbc-addons-dnd-drag-preview")
        });
        var draggable = this.context.draggable;
        var draggableAccessor = draggable.draggableAccessor, resizableAccessor = draggable.resizableAccessor;
        var isDraggable = draggableAccessor ? !!(0, _accessors.accessor)(event, draggableAccessor) : true;
        if (!isDraggable) {
          return children;
        }
        var isResizable = resizable && (resizableAccessor ? !!(0, _accessors.accessor)(event, resizableAccessor) : true);
        if (isResizable || isDraggable) {
          var newProps = {
            onMouseDown: this.handleStartDragging,
            onTouchStart: this.handleStartDragging
          };
          if (isResizable) {
            var StartAnchor = null;
            var EndAnchor = null;
            if (type === "date") {
              StartAnchor = !continuesPrior2 && this.renderAnchor("Left");
              EndAnchor = !continuesAfter2 && this.renderAnchor("Right");
            } else {
              StartAnchor = !continuesPrior2 && this.renderAnchor("Up");
              EndAnchor = !continuesAfter2 && this.renderAnchor("Down");
            }
            newProps.children = /* @__PURE__ */ _react.default.createElement("div", {
              className: "rbc-addons-dnd-resizable"
            }, StartAnchor, children.props.children, EndAnchor);
          }
          if (draggable.dragAndDropAction.interacting && // if an event is being dragged right now
          draggable.dragAndDropAction.event === event) {
            newProps.className = (0, _clsx.default)(children.props.className, "rbc-addons-dnd-dragged-event");
          }
          children = /* @__PURE__ */ _react.default.cloneElement(children, newProps);
        }
        return children;
      }
    }]);
  })(_react.default.Component);
  EventWrapper$1.contextType = _DnDContext.DnDContext;
  EventWrapper$1.propTypes = {};
  EventWrapper.default = EventWrapper$1;
  return EventWrapper;
}
var EventContainerWrapper = {};
var cjs = {};
var activeElement = { exports: {} };
var ownerDocument = { exports: {} };
var hasRequiredOwnerDocument;
function requireOwnerDocument() {
  if (hasRequiredOwnerDocument) return ownerDocument.exports;
  hasRequiredOwnerDocument = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports.default = ownerDocument2;
    function ownerDocument2(node) {
      return node && node.ownerDocument || document;
    }
    module.exports = exports.default;
  })(ownerDocument, ownerDocument.exports);
  return ownerDocument.exports;
}
var hasRequiredActiveElement;
function requireActiveElement() {
  if (hasRequiredActiveElement) return activeElement.exports;
  hasRequiredActiveElement = 1;
  (function(module, exports) {
    var _interopRequireDefault = requireInteropRequireDefault();
    exports.__esModule = true;
    exports.default = activeElement2;
    var _ownerDocument = _interopRequireDefault(requireOwnerDocument());
    function activeElement2(doc = (0, _ownerDocument.default)()) {
      try {
        const active = doc.activeElement;
        if (!active || !active.nodeName) return null;
        return active;
      } catch (e) {
        return doc.body;
      }
    }
    module.exports = exports.default;
  })(activeElement, activeElement.exports);
  return activeElement.exports;
}
var addClass = { exports: {} };
var hasClass = { exports: {} };
var hasRequiredHasClass;
function requireHasClass() {
  if (hasRequiredHasClass) return hasClass.exports;
  hasRequiredHasClass = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports.default = hasClass2;
    function hasClass2(element, className) {
      if (element.classList) return !!className && element.classList.contains(className);
      return ` ${element.className.baseVal || element.className} `.indexOf(` ${className} `) !== -1;
    }
    module.exports = exports.default;
  })(hasClass, hasClass.exports);
  return hasClass.exports;
}
var hasRequiredAddClass;
function requireAddClass() {
  if (hasRequiredAddClass) return addClass.exports;
  hasRequiredAddClass = 1;
  (function(module, exports) {
    var _interopRequireDefault = requireInteropRequireDefault();
    exports.__esModule = true;
    exports.default = addClass2;
    var _hasClass = _interopRequireDefault(requireHasClass());
    function addClass2(element, className) {
      if (element.classList) element.classList.add(className);
      else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === "string") element.className = `${element.className} ${className}`;
      else element.setAttribute("class", `${element.className && element.className.baseVal || ""} ${className}`);
    }
    module.exports = exports.default;
  })(addClass, addClass.exports);
  return addClass.exports;
}
var addEventListener = {};
var canUseDOM = { exports: {} };
var hasRequiredCanUseDOM;
function requireCanUseDOM() {
  if (hasRequiredCanUseDOM) return canUseDOM.exports;
  hasRequiredCanUseDOM = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports.default = void 0;
    exports.default = !!(typeof window !== "undefined" && window.document && window.document.createElement);
    module.exports = exports.default;
  })(canUseDOM, canUseDOM.exports);
  return canUseDOM.exports;
}
var hasRequiredAddEventListener;
function requireAddEventListener() {
  if (hasRequiredAddEventListener) return addEventListener;
  hasRequiredAddEventListener = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  addEventListener.__esModule = true;
  addEventListener.optionsSupported = addEventListener.onceSupported = addEventListener.default = void 0;
  var _canUseDOM = _interopRequireDefault(requireCanUseDOM());
  let optionsSupported2 = addEventListener.optionsSupported = false;
  let onceSupported2 = addEventListener.onceSupported = false;
  try {
    const options2 = {
      get passive() {
        return addEventListener.optionsSupported = optionsSupported2 = true;
      },
      get once() {
        return addEventListener.onceSupported = onceSupported2 = addEventListener.optionsSupported = optionsSupported2 = true;
      }
    };
    if (_canUseDOM.default) {
      window.addEventListener("test", options2, options2);
      window.removeEventListener("test", options2, true);
    }
  } catch (e) {
  }
  function addEventListener$12(node, eventName, handler, options2) {
    if (options2 && typeof options2 !== "boolean" && !onceSupported2) {
      const {
        once,
        capture
      } = options2;
      let wrappedHandler = handler;
      if (!onceSupported2 && once) {
        wrappedHandler = handler.__once || function onceHandler(event) {
          this.removeEventListener(eventName, onceHandler, capture);
          handler.call(this, event);
        };
        handler.__once = wrappedHandler;
      }
      node.addEventListener(eventName, wrappedHandler, optionsSupported2 ? options2 : capture);
    }
    node.addEventListener(eventName, handler, options2);
  }
  addEventListener.default = addEventListener$12;
  return addEventListener;
}
var animate = { exports: {} };
var css = { exports: {} };
var getComputedStyle = { exports: {} };
var ownerWindow = { exports: {} };
var hasRequiredOwnerWindow;
function requireOwnerWindow() {
  if (hasRequiredOwnerWindow) return ownerWindow.exports;
  hasRequiredOwnerWindow = 1;
  (function(module, exports) {
    var _interopRequireDefault = requireInteropRequireDefault();
    exports.__esModule = true;
    exports.default = ownerWindow2;
    var _ownerDocument = _interopRequireDefault(requireOwnerDocument());
    function ownerWindow2(node) {
      const doc = (0, _ownerDocument.default)(node);
      return doc && doc.defaultView || window;
    }
    module.exports = exports.default;
  })(ownerWindow, ownerWindow.exports);
  return ownerWindow.exports;
}
var hasRequiredGetComputedStyle;
function requireGetComputedStyle() {
  if (hasRequiredGetComputedStyle) return getComputedStyle.exports;
  hasRequiredGetComputedStyle = 1;
  (function(module, exports) {
    var _interopRequireDefault = requireInteropRequireDefault();
    exports.__esModule = true;
    exports.default = getComputedStyle2;
    var _ownerWindow = _interopRequireDefault(requireOwnerWindow());
    function getComputedStyle2(node, psuedoElement) {
      return (0, _ownerWindow.default)(node).getComputedStyle(node, psuedoElement);
    }
    module.exports = exports.default;
  })(getComputedStyle, getComputedStyle.exports);
  return getComputedStyle.exports;
}
var hyphenateStyle = { exports: {} };
var hyphenate = { exports: {} };
var hasRequiredHyphenate;
function requireHyphenate() {
  if (hasRequiredHyphenate) return hyphenate.exports;
  hasRequiredHyphenate = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports.default = hyphenate2;
    const rUpper2 = /([A-Z])/g;
    function hyphenate2(string) {
      return string.replace(rUpper2, "-$1").toLowerCase();
    }
    module.exports = exports.default;
  })(hyphenate, hyphenate.exports);
  return hyphenate.exports;
}
var hasRequiredHyphenateStyle;
function requireHyphenateStyle() {
  if (hasRequiredHyphenateStyle) return hyphenateStyle.exports;
  hasRequiredHyphenateStyle = 1;
  (function(module, exports) {
    var _interopRequireDefault = requireInteropRequireDefault();
    exports.__esModule = true;
    exports.default = hyphenateStyleName2;
    var _hyphenate = _interopRequireDefault(requireHyphenate());
    const msPattern2 = /^ms-/;
    function hyphenateStyleName2(string) {
      return (0, _hyphenate.default)(string).replace(msPattern2, "-ms-");
    }
    module.exports = exports.default;
  })(hyphenateStyle, hyphenateStyle.exports);
  return hyphenateStyle.exports;
}
var isTransform = { exports: {} };
var hasRequiredIsTransform;
function requireIsTransform() {
  if (hasRequiredIsTransform) return isTransform.exports;
  hasRequiredIsTransform = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports.default = isTransform2;
    const supportedTransforms2 = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
    function isTransform2(value) {
      return !!(value && supportedTransforms2.test(value));
    }
    module.exports = exports.default;
  })(isTransform, isTransform.exports);
  return isTransform.exports;
}
var hasRequiredCss;
function requireCss() {
  if (hasRequiredCss) return css.exports;
  hasRequiredCss = 1;
  (function(module, exports) {
    var _interopRequireDefault = requireInteropRequireDefault();
    exports.__esModule = true;
    exports.default = void 0;
    var _getComputedStyle = _interopRequireDefault(requireGetComputedStyle());
    var _hyphenateStyle = _interopRequireDefault(requireHyphenateStyle());
    var _isTransform = _interopRequireDefault(requireIsTransform());
    function style2(node, property) {
      let css2 = "";
      let transforms = "";
      if (typeof property === "string") {
        return node.style.getPropertyValue((0, _hyphenateStyle.default)(property)) || (0, _getComputedStyle.default)(node).getPropertyValue((0, _hyphenateStyle.default)(property));
      }
      Object.keys(property).forEach((key) => {
        const value = property[key];
        if (!value && value !== 0) {
          node.style.removeProperty((0, _hyphenateStyle.default)(key));
        } else if ((0, _isTransform.default)(key)) {
          transforms += `${key}(${value}) `;
        } else {
          css2 += `${(0, _hyphenateStyle.default)(key)}: ${value};`;
        }
      });
      if (transforms) {
        css2 += `transform: ${transforms};`;
      }
      node.style.cssText += `;${css2}`;
    }
    exports.default = style2;
    module.exports = exports.default;
  })(css, css.exports);
  return css.exports;
}
var transitionEnd = { exports: {} };
var listen = { exports: {} };
var removeEventListener = { exports: {} };
var hasRequiredRemoveEventListener;
function requireRemoveEventListener() {
  if (hasRequiredRemoveEventListener) return removeEventListener.exports;
  hasRequiredRemoveEventListener = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports.default = void 0;
    function removeEventListener2(node, eventName, handler, options2) {
      const capture = options2 && typeof options2 !== "boolean" ? options2.capture : options2;
      node.removeEventListener(eventName, handler, capture);
      if (handler.__once) {
        node.removeEventListener(eventName, handler.__once, capture);
      }
    }
    exports.default = removeEventListener2;
    module.exports = exports.default;
  })(removeEventListener, removeEventListener.exports);
  return removeEventListener.exports;
}
var hasRequiredListen;
function requireListen() {
  if (hasRequiredListen) return listen.exports;
  hasRequiredListen = 1;
  (function(module, exports) {
    var _interopRequireDefault = requireInteropRequireDefault();
    exports.__esModule = true;
    exports.default = void 0;
    var _addEventListener = _interopRequireDefault(requireAddEventListener());
    var _removeEventListener = _interopRequireDefault(requireRemoveEventListener());
    function listen2(node, eventName, handler, options2) {
      (0, _addEventListener.default)(node, eventName, handler, options2);
      return () => {
        (0, _removeEventListener.default)(node, eventName, handler, options2);
      };
    }
    exports.default = listen2;
    module.exports = exports.default;
  })(listen, listen.exports);
  return listen.exports;
}
var triggerEvent = { exports: {} };
var hasRequiredTriggerEvent;
function requireTriggerEvent() {
  if (hasRequiredTriggerEvent) return triggerEvent.exports;
  hasRequiredTriggerEvent = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports.default = triggerEvent2;
    function triggerEvent2(node, eventName, bubbles = false, cancelable = true) {
      if (node) {
        const event = document.createEvent("HTMLEvents");
        event.initEvent(eventName, bubbles, cancelable);
        node.dispatchEvent(event);
      }
    }
    module.exports = exports.default;
  })(triggerEvent, triggerEvent.exports);
  return triggerEvent.exports;
}
var hasRequiredTransitionEnd;
function requireTransitionEnd() {
  if (hasRequiredTransitionEnd) return transitionEnd.exports;
  hasRequiredTransitionEnd = 1;
  (function(module, exports) {
    var _interopRequireDefault = requireInteropRequireDefault();
    exports.__esModule = true;
    exports.default = transitionEnd2;
    var _css = _interopRequireDefault(requireCss());
    var _listen = _interopRequireDefault(requireListen());
    var _triggerEvent = _interopRequireDefault(requireTriggerEvent());
    function parseDuration(node) {
      const str = (0, _css.default)(node, "transitionDuration") || "";
      const mult = str.indexOf("ms") === -1 ? 1e3 : 1;
      return parseFloat(str) * mult;
    }
    function emulateTransitionEnd(element, duration2, padding = 5) {
      let called = false;
      const handle = setTimeout(() => {
        if (!called) (0, _triggerEvent.default)(element, "transitionend", true);
      }, duration2 + padding);
      const remove2 = (0, _listen.default)(element, "transitionend", () => {
        called = true;
      }, {
        once: true
      });
      return () => {
        clearTimeout(handle);
        remove2();
      };
    }
    function transitionEnd2(element, handler, duration2, padding) {
      if (duration2 == null) duration2 = parseDuration(element) || 0;
      const removeEmulate = emulateTransitionEnd(element, duration2, padding);
      const remove2 = (0, _listen.default)(element, "transitionend", handler);
      return () => {
        removeEmulate();
        remove2();
      };
    }
    module.exports = exports.default;
  })(transitionEnd, transitionEnd.exports);
  return transitionEnd.exports;
}
var hasRequiredAnimate;
function requireAnimate() {
  if (hasRequiredAnimate) return animate.exports;
  hasRequiredAnimate = 1;
  (function(module, exports) {
    var _interopRequireDefault = requireInteropRequireDefault();
    exports.__esModule = true;
    exports.default = void 0;
    var _css = _interopRequireDefault(requireCss());
    var _hyphenate = _interopRequireDefault(requireHyphenate());
    var _isTransform = _interopRequireDefault(requireIsTransform());
    var _transitionEnd = _interopRequireDefault(requireTransitionEnd());
    const reset = {
      transition: "",
      "transition-duration": "",
      "transition-delay": "",
      "transition-timing-function": ""
    };
    function _animate({
      node,
      properties,
      duration: duration2 = 200,
      easing,
      callback
    }) {
      const cssProperties = [];
      const cssValues = {};
      let transforms = "";
      Object.keys(properties).forEach((key) => {
        const value = properties[key];
        if ((0, _isTransform.default)(key)) transforms += `${key}(${value}) `;
        else {
          cssValues[key] = value;
          cssProperties.push((0, _hyphenate.default)(key));
        }
      });
      if (transforms) {
        cssValues.transform = transforms;
        cssProperties.push("transform");
      }
      function done(event) {
        if (event.target !== event.currentTarget) return;
        (0, _css.default)(node, reset);
        if (callback) callback.call(this, event);
      }
      if (duration2 > 0) {
        cssValues.transition = cssProperties.join(", ");
        cssValues["transition-duration"] = `${duration2 / 1e3}s`;
        cssValues["transition-delay"] = "0s";
        cssValues["transition-timing-function"] = easing || "linear";
      }
      const removeListener = (0, _transitionEnd.default)(node, done, duration2);
      node.clientLeft;
      (0, _css.default)(node, cssValues);
      return {
        cancel() {
          removeListener();
          (0, _css.default)(node, reset);
        }
      };
    }
    function animate2(nodeOrOptions, properties, duration2, easing, callback) {
      if (!("nodeType" in nodeOrOptions)) {
        return _animate(nodeOrOptions);
      }
      if (!properties) {
        throw new Error("must include properties to animate");
      }
      if (typeof easing === "function") {
        callback = easing;
        easing = "";
      }
      return _animate({
        node: nodeOrOptions,
        properties,
        duration: duration2,
        easing,
        callback
      });
    }
    exports.default = animate2;
    module.exports = exports.default;
  })(animate, animate.exports);
  return animate.exports;
}
var animationFrame = {};
var hasRequiredAnimationFrame;
function requireAnimationFrame() {
  if (hasRequiredAnimationFrame) return animationFrame;
  hasRequiredAnimationFrame = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  animationFrame.__esModule = true;
  animationFrame.request = animationFrame.cancel = void 0;
  var _canUseDOM = _interopRequireDefault(requireCanUseDOM());
  let prev2 = (/* @__PURE__ */ new Date()).getTime();
  function fallback2(fn2) {
    const curr = (/* @__PURE__ */ new Date()).getTime();
    const ms = Math.max(0, 16 - (curr - prev2));
    const handle = setTimeout(fn2, ms);
    prev2 = curr;
    return handle;
  }
  const vendors2 = ["", "webkit", "moz", "o", "ms"];
  let cancelMethod2 = "clearTimeout";
  let rafImpl2 = fallback2;
  const getKey3 = (vendor, k) => `${vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1))}AnimationFrame`;
  if (_canUseDOM.default) {
    vendors2.some((vendor) => {
      const rafMethod = getKey3(vendor, "request");
      if (rafMethod in window) {
        cancelMethod2 = getKey3(vendor, "cancel");
        rafImpl2 = (cb) => window[rafMethod](cb);
      }
      return !!rafImpl2;
    });
  }
  const cancel2 = (id) => {
    if (typeof window[cancelMethod2] === "function") window[cancelMethod2](id);
  };
  animationFrame.cancel = cancel2;
  animationFrame.request = rafImpl2;
  return animationFrame;
}
var attribute = { exports: {} };
var hasRequiredAttribute;
function requireAttribute() {
  if (hasRequiredAttribute) return attribute.exports;
  hasRequiredAttribute = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports.default = attribute2;
    function attribute2(node, attr, val) {
      if (node) {
        if (typeof val === "undefined") {
          return node.getAttribute(attr);
        }
        if (!val && val !== "") {
          node.removeAttribute(attr);
        } else {
          node.setAttribute(attr, String(val));
        }
      }
    }
    module.exports = exports.default;
  })(attribute, attribute.exports);
  return attribute.exports;
}
var childElements = { exports: {} };
var hasRequiredChildElements;
function requireChildElements() {
  if (hasRequiredChildElements) return childElements.exports;
  hasRequiredChildElements = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports.default = childElements2;
    function childElements2(node) {
      return node ? Array.from(node.children) : [];
    }
    module.exports = exports.default;
  })(childElements, childElements.exports);
  return childElements.exports;
}
var clear = { exports: {} };
var hasRequiredClear;
function requireClear() {
  if (hasRequiredClear) return clear.exports;
  hasRequiredClear = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports.default = clear2;
    function clear2(node) {
      if (node) {
        while (node.firstChild) {
          node.removeChild(node.firstChild);
        }
        return node;
      }
      return null;
    }
    module.exports = exports.default;
  })(clear, clear.exports);
  return clear.exports;
}
var closest = { exports: {} };
var matches = { exports: {} };
var hasRequiredMatches;
function requireMatches() {
  if (hasRequiredMatches) return matches.exports;
  hasRequiredMatches = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports.default = matches2;
    let matchesImpl2;
    function matches2(node, selector) {
      if (!matchesImpl2) {
        const body = document.body;
        const nativeMatch = body.matches || body.matchesSelector || body.webkitMatchesSelector || body.mozMatchesSelector || body.msMatchesSelector;
        matchesImpl2 = (n, s) => nativeMatch.call(n, s);
      }
      return matchesImpl2(node, selector);
    }
    module.exports = exports.default;
  })(matches, matches.exports);
  return matches.exports;
}
var hasRequiredClosest;
function requireClosest() {
  if (hasRequiredClosest) return closest.exports;
  hasRequiredClosest = 1;
  (function(module, exports) {
    var _interopRequireDefault = requireInteropRequireDefault();
    exports.__esModule = true;
    exports.default = closest2;
    var _matches = _interopRequireDefault(requireMatches());
    function closest2(node, selector, stopAt) {
      if (node.closest && !stopAt) node.closest(selector);
      let nextNode = node;
      do {
        if ((0, _matches.default)(nextNode, selector)) return nextNode;
        nextNode = nextNode.parentElement;
      } while (nextNode && nextNode !== stopAt && nextNode.nodeType === document.ELEMENT_NODE);
      return null;
    }
    module.exports = exports.default;
  })(closest, closest.exports);
  return closest.exports;
}
var contains = { exports: {} };
var hasRequiredContains;
function requireContains() {
  if (hasRequiredContains) return contains.exports;
  hasRequiredContains = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports.default = contains2;
    function contains2(context, node) {
      if (context.contains) return context.contains(node);
      if (context.compareDocumentPosition) return context === node || !!(context.compareDocumentPosition(node) & 16);
    }
    module.exports = exports.default;
  })(contains, contains.exports);
  return contains.exports;
}
var childNodes = { exports: {} };
var hasRequiredChildNodes;
function requireChildNodes() {
  if (hasRequiredChildNodes) return childNodes.exports;
  hasRequiredChildNodes = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports.default = childNodes2;
    const toArray2 = Function.prototype.bind.call(Function.prototype.call, [].slice);
    function childNodes2(node) {
      return node ? toArray2(node.childNodes) : [];
    }
    module.exports = exports.default;
  })(childNodes, childNodes.exports);
  return childNodes.exports;
}
var filterEventHandler = { exports: {} };
var querySelectorAll = { exports: {} };
var hasRequiredQuerySelectorAll;
function requireQuerySelectorAll() {
  if (hasRequiredQuerySelectorAll) return querySelectorAll.exports;
  hasRequiredQuerySelectorAll = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports.default = qsa2;
    const toArray2 = Function.prototype.bind.call(Function.prototype.call, [].slice);
    function qsa2(element, selector) {
      return toArray2(element.querySelectorAll(selector));
    }
    module.exports = exports.default;
  })(querySelectorAll, querySelectorAll.exports);
  return querySelectorAll.exports;
}
var hasRequiredFilterEventHandler;
function requireFilterEventHandler() {
  if (hasRequiredFilterEventHandler) return filterEventHandler.exports;
  hasRequiredFilterEventHandler = 1;
  (function(module, exports) {
    var _interopRequireDefault = requireInteropRequireDefault();
    exports.__esModule = true;
    exports.default = filterEvents;
    var _contains = _interopRequireDefault(requireContains());
    var _querySelectorAll = _interopRequireDefault(requireQuerySelectorAll());
    function filterEvents(selector, handler) {
      return function filterHandler(e) {
        const top = e.currentTarget;
        const target = e.target;
        const matches2 = (0, _querySelectorAll.default)(top, selector);
        if (matches2.some((match2) => (0, _contains.default)(match2, target))) handler.call(this, e);
      };
    }
    module.exports = exports.default;
  })(filterEventHandler, filterEventHandler.exports);
  return filterEventHandler.exports;
}
var height = { exports: {} };
var isWindow = { exports: {} };
var isDocument = { exports: {} };
var hasRequiredIsDocument;
function requireIsDocument() {
  if (hasRequiredIsDocument) return isDocument.exports;
  hasRequiredIsDocument = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports.default = isDocument2;
    function isDocument2(element) {
      return "nodeType" in element && element.nodeType === document.DOCUMENT_NODE;
    }
    module.exports = exports.default;
  })(isDocument, isDocument.exports);
  return isDocument.exports;
}
var hasRequiredIsWindow;
function requireIsWindow() {
  if (hasRequiredIsWindow) return isWindow.exports;
  hasRequiredIsWindow = 1;
  (function(module, exports) {
    var _interopRequireDefault = requireInteropRequireDefault();
    exports.__esModule = true;
    exports.default = isWindow2;
    var _isDocument = _interopRequireDefault(requireIsDocument());
    function isWindow2(node) {
      if ("window" in node && node.window === node) return node;
      if ((0, _isDocument.default)(node)) return node.defaultView || false;
      return false;
    }
    module.exports = exports.default;
  })(isWindow, isWindow.exports);
  return isWindow.exports;
}
var offset = { exports: {} };
var scrollLeft = { exports: {} };
var getScrollAccessor = { exports: {} };
var hasRequiredGetScrollAccessor;
function requireGetScrollAccessor() {
  if (hasRequiredGetScrollAccessor) return getScrollAccessor.exports;
  hasRequiredGetScrollAccessor = 1;
  (function(module, exports) {
    var _interopRequireDefault = requireInteropRequireDefault();
    exports.__esModule = true;
    exports.default = getscrollAccessor2;
    var _isWindow = _interopRequireDefault(requireIsWindow());
    function getscrollAccessor2(offset2) {
      const prop = offset2 === "pageXOffset" ? "scrollLeft" : "scrollTop";
      function scrollAccessor(node, val) {
        const win = (0, _isWindow.default)(node);
        if (val === void 0) {
          return win ? win[offset2] : node[prop];
        }
        if (win) {
          win.scrollTo(win[offset2], val);
        } else {
          node[prop] = val;
        }
      }
      return scrollAccessor;
    }
    module.exports = exports.default;
  })(getScrollAccessor, getScrollAccessor.exports);
  return getScrollAccessor.exports;
}
var hasRequiredScrollLeft;
function requireScrollLeft() {
  if (hasRequiredScrollLeft) return scrollLeft.exports;
  hasRequiredScrollLeft = 1;
  (function(module, exports) {
    var _interopRequireDefault = requireInteropRequireDefault();
    exports.__esModule = true;
    exports.default = void 0;
    var _getScrollAccessor = _interopRequireDefault(requireGetScrollAccessor());
    exports.default = (0, _getScrollAccessor.default)("pageXOffset");
    module.exports = exports.default;
  })(scrollLeft, scrollLeft.exports);
  return scrollLeft.exports;
}
var scrollTop = { exports: {} };
var hasRequiredScrollTop;
function requireScrollTop() {
  if (hasRequiredScrollTop) return scrollTop.exports;
  hasRequiredScrollTop = 1;
  (function(module, exports) {
    var _interopRequireDefault = requireInteropRequireDefault();
    exports.__esModule = true;
    exports.default = void 0;
    var _getScrollAccessor = _interopRequireDefault(requireGetScrollAccessor());
    exports.default = (0, _getScrollAccessor.default)("pageYOffset");
    module.exports = exports.default;
  })(scrollTop, scrollTop.exports);
  return scrollTop.exports;
}
var hasRequiredOffset;
function requireOffset() {
  if (hasRequiredOffset) return offset.exports;
  hasRequiredOffset = 1;
  (function(module, exports) {
    var _interopRequireDefault = requireInteropRequireDefault();
    exports.__esModule = true;
    exports.default = offset2;
    var _contains = _interopRequireDefault(requireContains());
    var _ownerDocument = _interopRequireDefault(requireOwnerDocument());
    var _scrollLeft = _interopRequireDefault(requireScrollLeft());
    var _scrollTop = _interopRequireDefault(requireScrollTop());
    function offset2(node) {
      const doc = (0, _ownerDocument.default)(node);
      let box = {
        top: 0,
        left: 0,
        height: 0,
        width: 0
      };
      const docElem = doc && doc.documentElement;
      if (!docElem || !(0, _contains.default)(docElem, node)) return box;
      if (node.getBoundingClientRect !== void 0) box = node.getBoundingClientRect();
      box = {
        top: box.top + (0, _scrollTop.default)(docElem) - (docElem.clientTop || 0),
        left: box.left + (0, _scrollLeft.default)(docElem) - (docElem.clientLeft || 0),
        width: box.width,
        height: box.height
      };
      return box;
    }
    module.exports = exports.default;
  })(offset, offset.exports);
  return offset.exports;
}
var hasRequiredHeight;
function requireHeight() {
  if (hasRequiredHeight) return height.exports;
  hasRequiredHeight = 1;
  (function(module, exports) {
    var _interopRequireDefault = requireInteropRequireDefault();
    exports.__esModule = true;
    exports.default = height2;
    var _isWindow = _interopRequireDefault(requireIsWindow());
    var _offset = _interopRequireDefault(requireOffset());
    function height2(node, client) {
      const win = (0, _isWindow.default)(node);
      return win ? win.innerHeight : client ? node.clientHeight : (0, _offset.default)(node).height;
    }
    module.exports = exports.default;
  })(height, height.exports);
  return height.exports;
}
var insertAfter = { exports: {} };
var hasRequiredInsertAfter;
function requireInsertAfter() {
  if (hasRequiredInsertAfter) return insertAfter.exports;
  hasRequiredInsertAfter = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports.default = insertAfter2;
    function insertAfter2(node, refNode) {
      if (node && refNode && refNode.parentNode) {
        if (refNode.nextSibling) {
          refNode.parentNode.insertBefore(node, refNode.nextSibling);
        } else {
          refNode.parentNode.appendChild(node);
        }
        return node;
      }
      return null;
    }
    module.exports = exports.default;
  })(insertAfter, insertAfter.exports);
  return insertAfter.exports;
}
var isInput = { exports: {} };
var hasRequiredIsInput;
function requireIsInput() {
  if (hasRequiredIsInput) return isInput.exports;
  hasRequiredIsInput = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports.default = isInput2;
    const regExpInputs = /^(?:input|select|textarea|button)$/i;
    function isInput2(node) {
      return node ? regExpInputs.test(node.nodeName) : false;
    }
    module.exports = exports.default;
  })(isInput, isInput.exports);
  return isInput.exports;
}
var isVisible = { exports: {} };
var hasRequiredIsVisible;
function requireIsVisible() {
  if (hasRequiredIsVisible) return isVisible.exports;
  hasRequiredIsVisible = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports.default = isVisible2;
    function isVisible2(node) {
      return node ? !!(node.offsetWidth || node.offsetHeight || node.getClientRects().length) : false;
    }
    module.exports = exports.default;
  })(isVisible, isVisible.exports);
  return isVisible.exports;
}
var nextUntil = { exports: {} };
var collectSiblings = { exports: {} };
var hasRequiredCollectSiblings;
function requireCollectSiblings() {
  if (hasRequiredCollectSiblings) return collectSiblings.exports;
  hasRequiredCollectSiblings = 1;
  (function(module, exports) {
    var _interopRequireDefault = requireInteropRequireDefault();
    exports.__esModule = true;
    exports.default = collectSiblings2;
    var _matches = _interopRequireDefault(requireMatches());
    function collectSiblings2(node, refNode = null, selector = null) {
      const siblings2 = [];
      for (; node; node = node.nextElementSibling) {
        if (node !== refNode) {
          if (selector && (0, _matches.default)(node, selector)) {
            break;
          }
          siblings2.push(node);
        }
      }
      return siblings2;
    }
    module.exports = exports.default;
  })(collectSiblings, collectSiblings.exports);
  return collectSiblings.exports;
}
var hasRequiredNextUntil;
function requireNextUntil() {
  if (hasRequiredNextUntil) return nextUntil.exports;
  hasRequiredNextUntil = 1;
  (function(module, exports) {
    var _interopRequireDefault = requireInteropRequireDefault();
    exports.__esModule = true;
    exports.default = nextUntil2;
    var _collectSiblings = _interopRequireDefault(requireCollectSiblings());
    function nextUntil2(node, selector) {
      return (0, _collectSiblings.default)(node, node, selector);
    }
    module.exports = exports.default;
  })(nextUntil, nextUntil.exports);
  return nextUntil.exports;
}
var offsetParent = { exports: {} };
var hasRequiredOffsetParent;
function requireOffsetParent() {
  if (hasRequiredOffsetParent) return offsetParent.exports;
  hasRequiredOffsetParent = 1;
  (function(module, exports) {
    var _interopRequireDefault = requireInteropRequireDefault();
    exports.__esModule = true;
    exports.default = offsetParent2;
    var _css = _interopRequireDefault(requireCss());
    var _ownerDocument = _interopRequireDefault(requireOwnerDocument());
    const isHTMLElement2 = (e) => !!e && "offsetParent" in e;
    function offsetParent2(node) {
      const doc = (0, _ownerDocument.default)(node);
      let parent = node && node.offsetParent;
      while (isHTMLElement2(parent) && parent.nodeName !== "HTML" && (0, _css.default)(parent, "position") === "static") {
        parent = parent.offsetParent;
      }
      return parent || doc.documentElement;
    }
    module.exports = exports.default;
  })(offsetParent, offsetParent.exports);
  return offsetParent.exports;
}
var parents = { exports: {} };
var collectElements = { exports: {} };
var hasRequiredCollectElements;
function requireCollectElements() {
  if (hasRequiredCollectElements) return collectElements.exports;
  hasRequiredCollectElements = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports.default = collectElements2;
    function collectElements2(node, direction) {
      let nextNode = null;
      const nodes = [];
      nextNode = node ? node[direction] : null;
      while (nextNode && nextNode.nodeType !== 9) {
        nodes.push(nextNode);
        nextNode = nextNode[direction] || null;
      }
      return nodes;
    }
    module.exports = exports.default;
  })(collectElements, collectElements.exports);
  return collectElements.exports;
}
var hasRequiredParents;
function requireParents() {
  if (hasRequiredParents) return parents.exports;
  hasRequiredParents = 1;
  (function(module, exports) {
    var _interopRequireDefault = requireInteropRequireDefault();
    exports.__esModule = true;
    exports.default = parents2;
    var _collectElements = _interopRequireDefault(requireCollectElements());
    function parents2(node) {
      return (0, _collectElements.default)(node, "parentElement");
    }
    module.exports = exports.default;
  })(parents, parents.exports);
  return parents.exports;
}
var position = { exports: {} };
var hasRequiredPosition;
function requirePosition() {
  if (hasRequiredPosition) return position.exports;
  hasRequiredPosition = 1;
  (function(module, exports) {
    var _interopRequireDefault = requireInteropRequireDefault();
    exports.__esModule = true;
    exports.default = position2;
    var _css = _interopRequireDefault(requireCss());
    var _offset = _interopRequireDefault(requireOffset());
    var _offsetParent = _interopRequireDefault(requireOffsetParent());
    var _scrollLeft = _interopRequireDefault(requireScrollLeft());
    var _scrollTop = _interopRequireDefault(requireScrollTop());
    const nodeName2 = (node) => node.nodeName && node.nodeName.toLowerCase();
    function position2(node, offsetParent2) {
      let parentOffset = {
        top: 0,
        left: 0
      };
      let offset2;
      if ((0, _css.default)(node, "position") === "fixed") {
        offset2 = node.getBoundingClientRect();
      } else {
        const parent = offsetParent2 || (0, _offsetParent.default)(node);
        offset2 = (0, _offset.default)(node);
        if (nodeName2(parent) !== "html") parentOffset = (0, _offset.default)(parent);
        const borderTop = String((0, _css.default)(parent, "borderTopWidth") || 0);
        parentOffset.top += parseInt(borderTop, 10) - (0, _scrollTop.default)(parent) || 0;
        const borderLeft = String((0, _css.default)(parent, "borderLeftWidth") || 0);
        parentOffset.left += parseInt(borderLeft, 10) - (0, _scrollLeft.default)(parent) || 0;
      }
      const marginTop = String((0, _css.default)(node, "marginTop") || 0);
      const marginLeft = String((0, _css.default)(node, "marginLeft") || 0);
      return {
        ...offset2,
        top: offset2.top - parentOffset.top - (parseInt(marginTop, 10) || 0),
        left: offset2.left - parentOffset.left - (parseInt(marginLeft, 10) || 0)
      };
    }
    module.exports = exports.default;
  })(position, position.exports);
  return position.exports;
}
var prepend = { exports: {} };
var hasRequiredPrepend;
function requirePrepend() {
  if (hasRequiredPrepend) return prepend.exports;
  hasRequiredPrepend = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports.default = prepend2;
    function prepend2(node, parent) {
      if (node && parent) {
        if (parent.firstElementChild) {
          parent.insertBefore(node, parent.firstElementChild);
        } else {
          parent.appendChild(node);
        }
        return node;
      }
      return null;
    }
    module.exports = exports.default;
  })(prepend, prepend.exports);
  return prepend.exports;
}
var remove = { exports: {} };
var hasRequiredRemove;
function requireRemove() {
  if (hasRequiredRemove) return remove.exports;
  hasRequiredRemove = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports.default = remove2;
    function remove2(node) {
      if (node && node.parentNode) {
        node.parentNode.removeChild(node);
        return node;
      }
      return null;
    }
    module.exports = exports.default;
  })(remove, remove.exports);
  return remove.exports;
}
var removeClass = { exports: {} };
var hasRequiredRemoveClass;
function requireRemoveClass() {
  if (hasRequiredRemoveClass) return removeClass.exports;
  hasRequiredRemoveClass = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports.default = removeClass2;
    function replaceClassName2(origClass, classToRemove) {
      return origClass.replace(new RegExp(`(^|\\s)${classToRemove}(?:\\s|$)`, "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
    }
    function removeClass2(element, className) {
      if (element.classList) {
        element.classList.remove(className);
      } else if (typeof element.className === "string") {
        element.className = replaceClassName2(element.className, className);
      } else {
        element.setAttribute("class", replaceClassName2(element.className && element.className.baseVal || "", className));
      }
    }
    module.exports = exports.default;
  })(removeClass, removeClass.exports);
  return removeClass.exports;
}
var scrollbarSize = { exports: {} };
var hasRequiredScrollbarSize;
function requireScrollbarSize() {
  if (hasRequiredScrollbarSize) return scrollbarSize.exports;
  hasRequiredScrollbarSize = 1;
  (function(module, exports) {
    var _interopRequireDefault = requireInteropRequireDefault();
    exports.__esModule = true;
    exports.default = scrollbarSize2;
    var _canUseDOM = _interopRequireDefault(requireCanUseDOM());
    let size2;
    function scrollbarSize2(recalc) {
      if (!size2 && size2 !== 0 || recalc) {
        if (_canUseDOM.default) {
          const scrollDiv = document.createElement("div");
          scrollDiv.style.position = "absolute";
          scrollDiv.style.top = "-9999px";
          scrollDiv.style.width = "50px";
          scrollDiv.style.height = "50px";
          scrollDiv.style.overflow = "scroll";
          document.body.appendChild(scrollDiv);
          size2 = scrollDiv.offsetWidth - scrollDiv.clientWidth;
          document.body.removeChild(scrollDiv);
        }
      }
      return size2;
    }
    module.exports = exports.default;
  })(scrollbarSize, scrollbarSize.exports);
  return scrollbarSize.exports;
}
var scrollParent = { exports: {} };
var hasRequiredScrollParent;
function requireScrollParent() {
  if (hasRequiredScrollParent) return scrollParent.exports;
  hasRequiredScrollParent = 1;
  (function(module, exports) {
    var _interopRequireDefault = requireInteropRequireDefault();
    exports.__esModule = true;
    exports.default = scrollParent2;
    var _css = _interopRequireDefault(requireCss());
    var _height = _interopRequireDefault(requireHeight());
    var _isDocument = _interopRequireDefault(requireIsDocument());
    function scrollParent2(element, firstPossible) {
      const position2 = (0, _css.default)(element, "position");
      const excludeStatic = position2 === "absolute";
      const ownerDoc = element.ownerDocument;
      if (position2 === "fixed") return ownerDoc || document;
      while ((element = element.parentNode) && !(0, _isDocument.default)(element)) {
        const isStatic = excludeStatic && (0, _css.default)(element, "position") === "static";
        const style2 = ((0, _css.default)(element, "overflow") || "") + ((0, _css.default)(element, "overflow-y") || "") + (0, _css.default)(element, "overflow-x");
        if (isStatic) continue;
        if (/(auto|scroll)/.test(style2) && (firstPossible || (0, _height.default)(element) < element.scrollHeight)) {
          return element;
        }
      }
      return ownerDoc || document;
    }
    module.exports = exports.default;
  })(scrollParent, scrollParent.exports);
  return scrollParent.exports;
}
var scrollTo = { exports: {} };
var hasRequiredScrollTo;
function requireScrollTo() {
  if (hasRequiredScrollTo) return scrollTo.exports;
  hasRequiredScrollTo = 1;
  (function(module, exports) {
    var _interopRequireDefault = requireInteropRequireDefault();
    exports.__esModule = true;
    exports.default = scrollTo2;
    var _animationFrame = requireAnimationFrame();
    var _height = _interopRequireDefault(requireHeight());
    var _isWindow = _interopRequireDefault(requireIsWindow());
    var _offset = _interopRequireDefault(requireOffset());
    var _scrollParent = _interopRequireDefault(requireScrollParent());
    var _scrollTop = _interopRequireDefault(requireScrollTop());
    function scrollTo2(selected, scrollParent2) {
      let offset2 = (0, _offset.default)(selected);
      let poff = {
        top: 0,
        left: 0
      };
      if (!selected) return void 0;
      const list = scrollParent2 || (0, _scrollParent.default)(selected);
      const isWin = (0, _isWindow.default)(list);
      let listScrollTop = (0, _scrollTop.default)(list);
      const listHeight = (0, _height.default)(list, true);
      if (!isWin) poff = (0, _offset.default)(list);
      offset2 = {
        top: offset2.top - poff.top,
        left: offset2.left - poff.left,
        height: offset2.height,
        width: offset2.width
      };
      const selectedHeight = offset2.height;
      const selectedTop = offset2.top + (isWin ? 0 : listScrollTop);
      const bottom = selectedTop + selectedHeight;
      listScrollTop = listScrollTop > selectedTop ? selectedTop : bottom > listScrollTop + listHeight ? bottom - listHeight : listScrollTop;
      const id = (0, _animationFrame.request)(() => (0, _scrollTop.default)(list, listScrollTop));
      return () => (0, _animationFrame.cancel)(id);
    }
    module.exports = exports.default;
  })(scrollTo, scrollTo.exports);
  return scrollTo.exports;
}
var siblings = { exports: {} };
var hasRequiredSiblings;
function requireSiblings() {
  if (hasRequiredSiblings) return siblings.exports;
  hasRequiredSiblings = 1;
  (function(module, exports) {
    var _interopRequireDefault = requireInteropRequireDefault();
    exports.__esModule = true;
    exports.default = siblings2;
    var _collectSiblings = _interopRequireDefault(requireCollectSiblings());
    function siblings2(node) {
      return (0, _collectSiblings.default)(node && node.parentElement ? node.parentElement.firstElementChild : null, node);
    }
    module.exports = exports.default;
  })(siblings, siblings.exports);
  return siblings.exports;
}
var text = { exports: {} };
var hasRequiredText;
function requireText() {
  if (hasRequiredText) return text.exports;
  hasRequiredText = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports.default = text2;
    const regExpNbspEntity = /&nbsp;/gi;
    const regExpNbspHex = /\xA0/g;
    const regExpSpaces = /\s+([^\s])/gm;
    function text2(node, trim = true, singleSpaces = true) {
      let elementText = "";
      if (node) {
        elementText = (node.textContent || "").replace(regExpNbspEntity, " ").replace(regExpNbspHex, " ");
        if (trim) {
          elementText = elementText.trim();
        }
        if (singleSpaces) {
          elementText = elementText.replace(regExpSpaces, " $1");
        }
      }
      return elementText;
    }
    module.exports = exports.default;
  })(text, text.exports);
  return text.exports;
}
var toggleClass = { exports: {} };
var hasRequiredToggleClass;
function requireToggleClass() {
  if (hasRequiredToggleClass) return toggleClass.exports;
  hasRequiredToggleClass = 1;
  (function(module, exports) {
    var _interopRequireDefault = requireInteropRequireDefault();
    exports.__esModule = true;
    exports.default = toggleClass2;
    var _addClass = _interopRequireDefault(requireAddClass());
    var _hasClass = _interopRequireDefault(requireHasClass());
    var _removeClass = _interopRequireDefault(requireRemoveClass());
    function toggleClass2(element, className) {
      if (element.classList) element.classList.toggle(className);
      else if ((0, _hasClass.default)(element, className)) (0, _removeClass.default)(element, className);
      else (0, _addClass.default)(element, className);
    }
    module.exports = exports.default;
  })(toggleClass, toggleClass.exports);
  return toggleClass.exports;
}
var width = { exports: {} };
var hasRequiredWidth;
function requireWidth() {
  if (hasRequiredWidth) return width.exports;
  hasRequiredWidth = 1;
  (function(module, exports) {
    var _interopRequireDefault = requireInteropRequireDefault();
    exports.__esModule = true;
    exports.default = getWidth2;
    var _isWindow = _interopRequireDefault(requireIsWindow());
    var _offset = _interopRequireDefault(requireOffset());
    function getWidth2(node, client) {
      const win = (0, _isWindow.default)(node);
      return win ? win.innerWidth : client ? node.clientWidth : (0, _offset.default)(node).width;
    }
    module.exports = exports.default;
  })(width, width.exports);
  return width.exports;
}
var hasRequiredCjs;
function requireCjs() {
  if (hasRequiredCjs) return cjs;
  hasRequiredCjs = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  cjs.__esModule = true;
  cjs.default = void 0;
  var _activeElement = _interopRequireDefault(requireActiveElement());
  cjs.activeElement = _activeElement.default;
  var _addClass = _interopRequireDefault(requireAddClass());
  cjs.addClass = _addClass.default;
  var _addEventListener = _interopRequireDefault(requireAddEventListener());
  cjs.addEventListener = _addEventListener.default;
  var _animate = _interopRequireDefault(requireAnimate());
  cjs.animate = _animate.default;
  var _animationFrame = requireAnimationFrame();
  cjs.cancelAnimationFrame = _animationFrame.cancel;
  cjs.requestAnimationFrame = _animationFrame.request;
  var _attribute = _interopRequireDefault(requireAttribute());
  cjs.attribute = _attribute.default;
  var _childElements = _interopRequireDefault(requireChildElements());
  cjs.childElements = _childElements.default;
  var _clear = _interopRequireDefault(requireClear());
  cjs.clear = _clear.default;
  var _closest = _interopRequireDefault(requireClosest());
  cjs.closest = _closest.default;
  var _contains = _interopRequireDefault(requireContains());
  cjs.contains = _contains.default;
  var _childNodes = _interopRequireDefault(requireChildNodes());
  cjs.childNodes = _childNodes.default;
  var _css = _interopRequireDefault(requireCss());
  cjs.style = _css.default;
  var _filterEventHandler = _interopRequireDefault(requireFilterEventHandler());
  cjs.filter = _filterEventHandler.default;
  var _getComputedStyle = _interopRequireDefault(requireGetComputedStyle());
  cjs.getComputedStyle = _getComputedStyle.default;
  var _hasClass = _interopRequireDefault(requireHasClass());
  cjs.hasClass = _hasClass.default;
  var _height = _interopRequireDefault(requireHeight());
  cjs.height = _height.default;
  var _insertAfter = _interopRequireDefault(requireInsertAfter());
  cjs.insertAfter = _insertAfter.default;
  var _isInput = _interopRequireDefault(requireIsInput());
  cjs.isInput = _isInput.default;
  var _isVisible = _interopRequireDefault(requireIsVisible());
  cjs.isVisible = _isVisible.default;
  var _listen = _interopRequireDefault(requireListen());
  cjs.listen = _listen.default;
  var _matches = _interopRequireDefault(requireMatches());
  cjs.matches = _matches.default;
  var _nextUntil = _interopRequireDefault(requireNextUntil());
  cjs.nextUntil = _nextUntil.default;
  var _offset = _interopRequireDefault(requireOffset());
  cjs.offset = _offset.default;
  var _offsetParent = _interopRequireDefault(requireOffsetParent());
  cjs.offsetParent = _offsetParent.default;
  var _ownerDocument = _interopRequireDefault(requireOwnerDocument());
  cjs.ownerDocument = _ownerDocument.default;
  var _ownerWindow = _interopRequireDefault(requireOwnerWindow());
  cjs.ownerWindow = _ownerWindow.default;
  var _parents = _interopRequireDefault(requireParents());
  cjs.parents = _parents.default;
  var _position = _interopRequireDefault(requirePosition());
  cjs.position = _position.default;
  var _prepend = _interopRequireDefault(requirePrepend());
  cjs.prepend = _prepend.default;
  var _querySelectorAll = _interopRequireDefault(requireQuerySelectorAll());
  cjs.querySelectorAll = _querySelectorAll.default;
  var _remove = _interopRequireDefault(requireRemove());
  cjs.remove = _remove.default;
  var _removeClass = _interopRequireDefault(requireRemoveClass());
  cjs.removeClass = _removeClass.default;
  var _removeEventListener = _interopRequireDefault(requireRemoveEventListener());
  cjs.removeEventListener = _removeEventListener.default;
  var _scrollbarSize = _interopRequireDefault(requireScrollbarSize());
  cjs.scrollbarSize = _scrollbarSize.default;
  var _scrollLeft = _interopRequireDefault(requireScrollLeft());
  cjs.scrollLeft = _scrollLeft.default;
  var _scrollParent = _interopRequireDefault(requireScrollParent());
  cjs.scrollParent = _scrollParent.default;
  var _scrollTo = _interopRequireDefault(requireScrollTo());
  cjs.scrollTo = _scrollTo.default;
  var _scrollTop = _interopRequireDefault(requireScrollTop());
  cjs.scrollTop = _scrollTop.default;
  var _siblings = _interopRequireDefault(requireSiblings());
  cjs.siblings = _siblings.default;
  var _text = _interopRequireDefault(requireText());
  cjs.text = _text.default;
  var _toggleClass = _interopRequireDefault(requireToggleClass());
  cjs.toggleClass = _toggleClass.default;
  var _transitionEnd = _interopRequireDefault(requireTransitionEnd());
  cjs.transitionEnd = _transitionEnd.default;
  var _triggerEvent = _interopRequireDefault(requireTriggerEvent());
  cjs.triggerEvent = _triggerEvent.default;
  var _width = _interopRequireDefault(requireWidth());
  cjs.width = _width.default;
  cjs.default = {
    addEventListener: _addEventListener.default,
    removeEventListener: _removeEventListener.default,
    triggerEvent: _triggerEvent.default,
    animate: _animate.default,
    filter: _filterEventHandler.default,
    listen: _listen.default,
    style: _css.default,
    getComputedStyle: _getComputedStyle.default,
    attribute: _attribute.default,
    activeElement: _activeElement.default,
    ownerDocument: _ownerDocument.default,
    ownerWindow: _ownerWindow.default,
    requestAnimationFrame: _animationFrame.request,
    cancelAnimationFrame: _animationFrame.cancel,
    matches: _matches.default,
    height: _height.default,
    width: _width.default,
    offset: _offset.default,
    offsetParent: _offsetParent.default,
    position: _position.default,
    contains: _contains.default,
    scrollbarSize: _scrollbarSize.default,
    scrollLeft: _scrollLeft.default,
    scrollParent: _scrollParent.default,
    scrollTo: _scrollTo.default,
    scrollTop: _scrollTop.default,
    querySelectorAll: _querySelectorAll.default,
    closest: _closest.default,
    addClass: _addClass.default,
    removeClass: _removeClass.default,
    hasClass: _hasClass.default,
    toggleClass: _toggleClass.default,
    transitionEnd: _transitionEnd.default,
    childNodes: _childNodes.default,
    childElements: _childElements.default,
    nextUntil: _nextUntil.default,
    parents: _parents.default,
    siblings: _siblings.default,
    clear: _clear.default,
    insertAfter: _insertAfter.default,
    isInput: _isInput.default,
    isVisible: _isVisible.default,
    prepend: _prepend.default,
    remove: _remove.default,
    text: _text.default
  };
  return cjs;
}
var Selection = {};
var hasRequiredSelection$1;
function requireSelection$1() {
  if (hasRequiredSelection$1) return Selection;
  hasRequiredSelection$1 = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(Selection, "__esModule", {
    value: true
  });
  Selection.default = void 0;
  Selection.getBoundsForNode = getBoundsForNode2;
  Selection.getEventNodeFromPoint = getEventNodeFromPoint2;
  Selection.getShowMoreNodeFromPoint = getShowMoreNodeFromPoint2;
  Selection.isEvent = isEvent2;
  Selection.isShowMore = isShowMore2;
  Selection.objectsCollide = objectsCollide2;
  var _typeof2 = _interopRequireDefault(require_typeof());
  var _classCallCheck2 = _interopRequireDefault(requireClassCallCheck());
  var _createClass2 = _interopRequireDefault(requireCreateClass());
  var _contains = _interopRequireDefault(requireContains());
  var _closest = _interopRequireDefault(requireClosest());
  var _listen = _interopRequireDefault(requireListen());
  function addEventListener2(type, handler) {
    var target = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : document;
    return (0, _listen.default)(target, type, handler, {
      passive: false
    });
  }
  function isOverContainer2(container, x, y) {
    return !container || (0, _contains.default)(container, document.elementFromPoint(x, y));
  }
  function getEventNodeFromPoint2(node, _ref) {
    var clientX = _ref.clientX, clientY = _ref.clientY;
    var target = document.elementFromPoint(clientX, clientY);
    return (0, _closest.default)(target, ".rbc-event", node);
  }
  function getShowMoreNodeFromPoint2(node, _ref2) {
    var clientX = _ref2.clientX, clientY = _ref2.clientY;
    var target = document.elementFromPoint(clientX, clientY);
    return (0, _closest.default)(target, ".rbc-show-more", node);
  }
  function isEvent2(node, bounds) {
    return !!getEventNodeFromPoint2(node, bounds);
  }
  function isShowMore2(node, bounds) {
    return !!getShowMoreNodeFromPoint2(node, bounds);
  }
  function getEventCoordinates2(e) {
    var target = e;
    if (e.touches && e.touches.length) {
      target = e.touches[0];
    }
    return {
      clientX: target.clientX,
      clientY: target.clientY,
      pageX: target.pageX,
      pageY: target.pageY
    };
  }
  var clickTolerance2 = 5;
  var clickInterval2 = 250;
  var Selection$12 = /* @__PURE__ */ (function() {
    function Selection2(node) {
      var _ref3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref3$global = _ref3.global, global = _ref3$global === void 0 ? false : _ref3$global, _ref3$longPressThresh = _ref3.longPressThreshold, longPressThreshold = _ref3$longPressThresh === void 0 ? 250 : _ref3$longPressThresh, _ref3$validContainers = _ref3.validContainers, validContainers = _ref3$validContainers === void 0 ? [] : _ref3$validContainers;
      (0, _classCallCheck2.default)(this, Selection2);
      this._initialEvent = null;
      this.selecting = false;
      this.isDetached = false;
      this.container = node;
      this.globalMouse = !node || global;
      this.longPressThreshold = longPressThreshold;
      this.validContainers = validContainers;
      this._listeners = /* @__PURE__ */ Object.create(null);
      this._handleInitialEvent = this._handleInitialEvent.bind(this);
      this._handleMoveEvent = this._handleMoveEvent.bind(this);
      this._handleTerminatingEvent = this._handleTerminatingEvent.bind(this);
      this._keyListener = this._keyListener.bind(this);
      this._dropFromOutsideListener = this._dropFromOutsideListener.bind(this);
      this._dragOverFromOutsideListener = this._dragOverFromOutsideListener.bind(this);
      this._removeTouchMoveWindowListener = addEventListener2("touchmove", function() {
      }, window);
      this._removeKeyDownListener = addEventListener2("keydown", this._keyListener);
      this._removeKeyUpListener = addEventListener2("keyup", this._keyListener);
      this._removeDropFromOutsideListener = addEventListener2("drop", this._dropFromOutsideListener);
      this._removeDragOverFromOutsideListener = addEventListener2("dragover", this._dragOverFromOutsideListener);
      this._addInitialEventListener();
    }
    return (0, _createClass2.default)(Selection2, [{
      key: "on",
      value: function on(type, handler) {
        var handlers = this._listeners[type] || (this._listeners[type] = []);
        handlers.push(handler);
        return {
          remove: function remove2() {
            var idx = handlers.indexOf(handler);
            if (idx !== -1) handlers.splice(idx, 1);
          }
        };
      }
    }, {
      key: "emit",
      value: function emit(type) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        var result;
        var handlers = this._listeners[type] || [];
        handlers.forEach(function(fn2) {
          if (result === void 0) result = fn2.apply(void 0, args);
        });
        return result;
      }
    }, {
      key: "teardown",
      value: function teardown() {
        this._initialEvent = null;
        this._initialEventData = null;
        this._selectRect = null;
        this.selecting = false;
        this._lastClickData = null;
        this.isDetached = true;
        this._listeners = /* @__PURE__ */ Object.create(null);
        this._removeTouchMoveWindowListener && this._removeTouchMoveWindowListener();
        this._removeInitialEventListener && this._removeInitialEventListener();
        this._removeEndListener && this._removeEndListener();
        this._onEscListener && this._onEscListener();
        this._removeMoveListener && this._removeMoveListener();
        this._removeKeyUpListener && this._removeKeyUpListener();
        this._removeKeyDownListener && this._removeKeyDownListener();
        this._removeDropFromOutsideListener && this._removeDropFromOutsideListener();
        this._removeDragOverFromOutsideListener && this._removeDragOverFromOutsideListener();
      }
    }, {
      key: "isSelected",
      value: function isSelected2(node) {
        var box = this._selectRect;
        if (!box || !this.selecting) return false;
        return objectsCollide2(box, getBoundsForNode2(node));
      }
    }, {
      key: "filter",
      value: function filter(items) {
        var box = this._selectRect;
        if (!box || !this.selecting) return [];
        return items.filter(this.isSelected, this);
      }
      // Adds a listener that will call the handler only after the user has pressed on the screen
      // without moving their finger for 250ms.
    }, {
      key: "_addLongPressListener",
      value: function _addLongPressListener(handler, initialEvent) {
        var _this = this;
        var timer = null;
        var removeTouchMoveListener = null;
        var removeTouchEndListener = null;
        var handleTouchStart = function handleTouchStart2(initialEvent2) {
          timer = setTimeout(function() {
            cleanup();
            handler(initialEvent2);
          }, _this.longPressThreshold);
          removeTouchMoveListener = addEventListener2("touchmove", function() {
            return cleanup();
          });
          removeTouchEndListener = addEventListener2("touchend", function() {
            return cleanup();
          });
        };
        var removeTouchStartListener = addEventListener2("touchstart", handleTouchStart);
        var cleanup = function cleanup2() {
          if (timer) {
            clearTimeout(timer);
          }
          if (removeTouchMoveListener) {
            removeTouchMoveListener();
          }
          if (removeTouchEndListener) {
            removeTouchEndListener();
          }
          timer = null;
          removeTouchMoveListener = null;
          removeTouchEndListener = null;
        };
        if (initialEvent) {
          handleTouchStart(initialEvent);
        }
        return function() {
          cleanup();
          removeTouchStartListener();
        };
      }
      // Listen for mousedown and touchstart events. When one is received, disable the other and setup
      // future event handling based on the type of event.
    }, {
      key: "_addInitialEventListener",
      value: function _addInitialEventListener() {
        var _this2 = this;
        var removeMouseDownListener = addEventListener2("mousedown", function(e) {
          _this2._removeInitialEventListener();
          _this2._handleInitialEvent(e);
          _this2._removeInitialEventListener = addEventListener2("mousedown", _this2._handleInitialEvent);
        });
        var removeTouchStartListener = addEventListener2("touchstart", function(e) {
          _this2._removeInitialEventListener();
          _this2._removeInitialEventListener = _this2._addLongPressListener(_this2._handleInitialEvent, e);
        });
        this._removeInitialEventListener = function() {
          removeMouseDownListener();
          removeTouchStartListener();
        };
      }
    }, {
      key: "_dropFromOutsideListener",
      value: function _dropFromOutsideListener(e) {
        var _getEventCoordinates = getEventCoordinates2(e), pageX = _getEventCoordinates.pageX, pageY = _getEventCoordinates.pageY, clientX = _getEventCoordinates.clientX, clientY = _getEventCoordinates.clientY;
        this.emit("dropFromOutside", {
          x: pageX,
          y: pageY,
          clientX,
          clientY
        });
        e.preventDefault();
      }
    }, {
      key: "_dragOverFromOutsideListener",
      value: function _dragOverFromOutsideListener(e) {
        var _getEventCoordinates2 = getEventCoordinates2(e), pageX = _getEventCoordinates2.pageX, pageY = _getEventCoordinates2.pageY, clientX = _getEventCoordinates2.clientX, clientY = _getEventCoordinates2.clientY;
        this.emit("dragOverFromOutside", {
          x: pageX,
          y: pageY,
          clientX,
          clientY
        });
        e.preventDefault();
      }
    }, {
      key: "_handleInitialEvent",
      value: function _handleInitialEvent(e) {
        this._initialEvent = e;
        if (this.isDetached) {
          return;
        }
        var _getEventCoordinates3 = getEventCoordinates2(e), clientX = _getEventCoordinates3.clientX, clientY = _getEventCoordinates3.clientY, pageX = _getEventCoordinates3.pageX, pageY = _getEventCoordinates3.pageY;
        var node = this.container(), collides, offsetData;
        if (e.which === 3 || e.button === 2 || !isOverContainer2(node, clientX, clientY)) return;
        if (!this.globalMouse && node && !(0, _contains.default)(node, e.target)) {
          var _normalizeDistance = normalizeDistance2(0), top = _normalizeDistance.top, left = _normalizeDistance.left, bottom = _normalizeDistance.bottom, right = _normalizeDistance.right;
          offsetData = getBoundsForNode2(node);
          collides = objectsCollide2({
            top: offsetData.top - top,
            left: offsetData.left - left,
            bottom: offsetData.bottom + bottom,
            right: offsetData.right + right
          }, {
            top: pageY,
            left: pageX
          });
          if (!collides) return;
        }
        var result = this.emit("beforeSelect", this._initialEventData = {
          isTouch: /^touch/.test(e.type),
          x: pageX,
          y: pageY,
          clientX,
          clientY
        });
        if (result === false) return;
        switch (e.type) {
          case "mousedown":
            this._removeEndListener = addEventListener2("mouseup", this._handleTerminatingEvent);
            this._onEscListener = addEventListener2("keydown", this._handleTerminatingEvent);
            this._removeMoveListener = addEventListener2("mousemove", this._handleMoveEvent);
            break;
          case "touchstart":
            this._handleMoveEvent(e);
            this._removeEndListener = addEventListener2("touchend", this._handleTerminatingEvent);
            this._removeMoveListener = addEventListener2("touchmove", this._handleMoveEvent);
            break;
        }
      }
      // Check whether provided event target element
      // - is contained within a valid container
    }, {
      key: "_isWithinValidContainer",
      value: function _isWithinValidContainer(e) {
        var eventTarget = e.target;
        var containers = this.validContainers;
        if (!containers || !containers.length || !eventTarget) {
          return true;
        }
        return containers.some(function(target) {
          return !!eventTarget.closest(target);
        });
      }
    }, {
      key: "_handleTerminatingEvent",
      value: function _handleTerminatingEvent(e) {
        var selecting = this.selecting;
        var bounds = this._selectRect;
        if (!selecting && e.type.includes("key")) {
          e = this._initialEvent;
        }
        this.selecting = false;
        this._removeEndListener && this._removeEndListener();
        this._removeMoveListener && this._removeMoveListener();
        this._selectRect = null;
        this._initialEvent = null;
        this._initialEventData = null;
        if (!e) return;
        var inRoot = !this.container || (0, _contains.default)(this.container(), e.target);
        var isWithinValidContainer = this._isWithinValidContainer(e);
        if (e.key === "Escape" || !isWithinValidContainer) {
          return this.emit("reset");
        }
        if (!selecting && inRoot) {
          return this._handleClickEvent(e);
        }
        if (selecting) return this.emit("select", bounds);
        return this.emit("reset");
      }
    }, {
      key: "_handleClickEvent",
      value: function _handleClickEvent(e) {
        var _getEventCoordinates4 = getEventCoordinates2(e), pageX = _getEventCoordinates4.pageX, pageY = _getEventCoordinates4.pageY, clientX = _getEventCoordinates4.clientX, clientY = _getEventCoordinates4.clientY;
        var now = (/* @__PURE__ */ new Date()).getTime();
        if (this._lastClickData && now - this._lastClickData.timestamp < clickInterval2) {
          this._lastClickData = null;
          return this.emit("doubleClick", {
            x: pageX,
            y: pageY,
            clientX,
            clientY
          });
        }
        this._lastClickData = {
          timestamp: now
        };
        return this.emit("click", {
          x: pageX,
          y: pageY,
          clientX,
          clientY
        });
      }
    }, {
      key: "_handleMoveEvent",
      value: function _handleMoveEvent(e) {
        if (this._initialEventData === null || this.isDetached) {
          return;
        }
        var _this$_initialEventDa = this._initialEventData, x = _this$_initialEventDa.x, y = _this$_initialEventDa.y;
        var _getEventCoordinates5 = getEventCoordinates2(e), pageX = _getEventCoordinates5.pageX, pageY = _getEventCoordinates5.pageY;
        var w = Math.abs(x - pageX);
        var h = Math.abs(y - pageY);
        var left = Math.min(pageX, x), top = Math.min(pageY, y), old = this.selecting;
        var click = this.isClick(pageX, pageY);
        if (click && !old && !(w || h)) {
          return;
        }
        if (!old && !click) {
          this.emit("selectStart", this._initialEventData);
        }
        if (!click) {
          this.selecting = true;
          this._selectRect = {
            top,
            left,
            x: pageX,
            y: pageY,
            right: left + w,
            bottom: top + h
          };
          this.emit("selecting", this._selectRect);
        }
        e.preventDefault();
      }
    }, {
      key: "_keyListener",
      value: function _keyListener(e) {
        this.ctrl = e.metaKey || e.ctrlKey;
      }
    }, {
      key: "isClick",
      value: function isClick(pageX, pageY) {
        var _this$_initialEventDa2 = this._initialEventData, x = _this$_initialEventDa2.x, y = _this$_initialEventDa2.y, isTouch = _this$_initialEventDa2.isTouch;
        return !isTouch && Math.abs(pageX - x) <= clickTolerance2 && Math.abs(pageY - y) <= clickTolerance2;
      }
    }]);
  })();
  function normalizeDistance2() {
    var distance = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    if ((0, _typeof2.default)(distance) !== "object") distance = {
      top: distance,
      left: distance,
      right: distance,
      bottom: distance
    };
    return distance;
  }
  function objectsCollide2(nodeA, nodeB) {
    var tolerance = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    var _getBoundsForNode = getBoundsForNode2(nodeA), aTop = _getBoundsForNode.top, aLeft = _getBoundsForNode.left, _getBoundsForNode$rig = _getBoundsForNode.right, aRight = _getBoundsForNode$rig === void 0 ? aLeft : _getBoundsForNode$rig, _getBoundsForNode$bot = _getBoundsForNode.bottom, aBottom = _getBoundsForNode$bot === void 0 ? aTop : _getBoundsForNode$bot;
    var _getBoundsForNode2 = getBoundsForNode2(nodeB), bTop = _getBoundsForNode2.top, bLeft = _getBoundsForNode2.left, _getBoundsForNode2$ri = _getBoundsForNode2.right, bRight = _getBoundsForNode2$ri === void 0 ? bLeft : _getBoundsForNode2$ri, _getBoundsForNode2$bo = _getBoundsForNode2.bottom, bBottom = _getBoundsForNode2$bo === void 0 ? bTop : _getBoundsForNode2$bo;
    return !// 'a' bottom doesn't touch 'b' top
    (aBottom - tolerance < bTop || // 'a' top doesn't touch 'b' bottom
    aTop + tolerance > bBottom || // 'a' right doesn't touch 'b' left
    aRight - tolerance < bLeft || // 'a' left doesn't touch 'b' right
    aLeft + tolerance > bRight);
  }
  function getBoundsForNode2(node) {
    if (!node.getBoundingClientRect) return node;
    var rect = node.getBoundingClientRect(), left = rect.left + pageOffset2("left"), top = rect.top + pageOffset2("top");
    return {
      top,
      left,
      right: (node.offsetWidth || 0) + left,
      bottom: (node.offsetHeight || 0) + top
    };
  }
  function pageOffset2(dir) {
    if (dir === "left") return window.pageXOffset || document.body.scrollLeft || 0;
    if (dir === "top") return window.pageYOffset || document.body.scrollTop || 0;
  }
  Selection.default = Selection$12;
  return Selection;
}
var TimeGridEvent = {};
var hasRequiredTimeGridEvent;
function requireTimeGridEvent() {
  if (hasRequiredTimeGridEvent) return TimeGridEvent;
  hasRequiredTimeGridEvent = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(TimeGridEvent, "__esModule", {
    value: true
  });
  TimeGridEvent.default = void 0;
  var _extends2 = _interopRequireDefault(require_extends());
  var _defineProperty2 = _interopRequireDefault(requireDefineProperty());
  var _clsx = _interopRequireDefault(requireClsx());
  var _react = _interopRequireDefault(requireReact());
  function ownKeys2(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o2 = Object.getOwnPropertySymbols(e);
      r2 && (o2 = o2.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e, r3).enumerable;
      })), t.push.apply(t, o2);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys2(Object(t), true).forEach(function(r3) {
        (0, _defineProperty2.default)(e, r3, t[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r3) {
        Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
      });
    }
    return e;
  }
  function stringifyPercent2(v) {
    return typeof v === "string" ? v : v + "%";
  }
  function TimeGridEvent$12(props) {
    var style2 = props.style, className = props.className, event = props.event, accessors2 = props.accessors, rtl = props.rtl, selected = props.selected, label = props.label, continuesPrior2 = props.continuesPrior, continuesAfter2 = props.continuesAfter, getters = props.getters, onClick = props.onClick, onDoubleClick = props.onDoubleClick, isBackgroundEvent = props.isBackgroundEvent, onKeyPress = props.onKeyPress, _props$components = props.components, Event2 = _props$components.event, EventWrapper2 = _props$components.eventWrapper;
    var title = accessors2.title(event);
    var tooltip = accessors2.tooltip(event);
    var end = accessors2.end(event);
    var start = accessors2.start(event);
    var userProps = getters.eventProp(event, start, end, selected);
    var inner = [/* @__PURE__ */ _react.default.createElement("div", {
      key: "1",
      className: "rbc-event-label"
    }, label), /* @__PURE__ */ _react.default.createElement("div", {
      key: "2",
      className: "rbc-event-content"
    }, Event2 ? /* @__PURE__ */ _react.default.createElement(Event2, {
      event,
      title
    }) : title)];
    var height2 = style2.height, top = style2.top, width2 = style2.width, xOffset = style2.xOffset;
    var eventStyle = _objectSpread2(_objectSpread2({}, userProps.style), {}, (0, _defineProperty2.default)({
      top: stringifyPercent2(top),
      height: stringifyPercent2(height2),
      width: stringifyPercent2(width2)
    }, rtl ? "right" : "left", stringifyPercent2(xOffset)));
    return /* @__PURE__ */ _react.default.createElement(EventWrapper2, (0, _extends2.default)({
      type: "time"
    }, props), /* @__PURE__ */ _react.default.createElement("div", {
      role: "button",
      tabIndex: 0,
      onClick,
      onDoubleClick,
      style: eventStyle,
      onKeyDown: onKeyPress,
      title: tooltip ? (typeof label === "string" ? label + ": " : "") + tooltip : void 0,
      className: (0, _clsx.default)(isBackgroundEvent ? "rbc-background-event" : "rbc-event", className, userProps.className, {
        "rbc-selected": selected,
        "rbc-event-continues-earlier": continuesPrior2,
        "rbc-event-continues-later": continuesAfter2
      })
    }, inner));
  }
  TimeGridEvent.default = TimeGridEvent$12;
  return TimeGridEvent;
}
var common = {};
var hasRequiredCommon;
function requireCommon() {
  if (hasRequiredCommon) return common;
  hasRequiredCommon = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(common, "__esModule", {
    value: true
  });
  common.dragAccessors = void 0;
  common.eventTimes = eventTimes;
  common.mergeComponents = mergeComponents;
  common.pointInColumn = pointInColumn;
  var _defineProperty2 = _interopRequireDefault(requireDefineProperty());
  var _objectWithoutProperties2 = _interopRequireDefault(requireObjectWithoutProperties());
  var _accessors = requireAccessors();
  var _react = requireReact();
  var _excluded3 = ["children"];
  function ownKeys2(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o2 = Object.getOwnPropertySymbols(e);
      r2 && (o2 = o2.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e, r3).enumerable;
      })), t.push.apply(t, o2);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys2(Object(t), true).forEach(function(r3) {
        (0, _defineProperty2.default)(e, r3, t[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r3) {
        Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
      });
    }
    return e;
  }
  common.dragAccessors = {
    start: (0, _accessors.wrapAccessor)(function(e) {
      return e.start;
    }),
    end: (0, _accessors.wrapAccessor)(function(e) {
      return e.end;
    })
  };
  function nest() {
    for (var _len = arguments.length, Components = new Array(_len), _key = 0; _key < _len; _key++) {
      Components[_key] = arguments[_key];
    }
    var Nest = function Nest2(_ref) {
      var children = _ref.children, props = (0, _objectWithoutProperties2.default)(_ref, _excluded3);
      return Components.filter(Boolean).reduceRight(function(child, Component) {
        return /* @__PURE__ */ (0, _react.createElement)(Component, props, child);
      }, children);
    };
    return Nest;
  }
  function mergeComponents() {
    var components = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var addons = arguments.length > 1 ? arguments[1] : void 0;
    var keys = Object.keys(addons);
    var result = _objectSpread2({}, components);
    keys.forEach(function(key) {
      result[key] = components[key] ? nest(components[key], addons[key]) : addons[key];
    });
    return result;
  }
  function pointInColumn(bounds, point) {
    var left = bounds.left, right = bounds.right, top = bounds.top;
    var x = point.x, y = point.y;
    return x < right + 10 && x > left && y > top;
  }
  function eventTimes(event, accessors2, localizer2) {
    var start = accessors2.start(event);
    var end = accessors2.end(event);
    var isZeroDuration = localizer2.eq(start, end, "minutes") && localizer2.diff(start, end, "minutes") === 0;
    if (isZeroDuration) end = localizer2.add(end, 1, "day");
    var duration2 = localizer2.diff(start, end, "milliseconds");
    return {
      start,
      end,
      duration: duration2
    };
  }
  return common;
}
var hasRequiredEventContainerWrapper;
function requireEventContainerWrapper() {
  if (hasRequiredEventContainerWrapper) return EventContainerWrapper;
  hasRequiredEventContainerWrapper = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  var _typeof2 = require_typeof();
  Object.defineProperty(EventContainerWrapper, "__esModule", {
    value: true
  });
  EventContainerWrapper.default = void 0;
  var _defineProperty2 = _interopRequireDefault(requireDefineProperty());
  var _classCallCheck2 = _interopRequireDefault(requireClassCallCheck());
  var _createClass2 = _interopRequireDefault(requireCreateClass());
  var _possibleConstructorReturn2 = _interopRequireDefault(requirePossibleConstructorReturn());
  var _getPrototypeOf2 = _interopRequireDefault(requireGetPrototypeOf());
  var _inherits2 = _interopRequireDefault(requireInherits());
  var _domHelpers = requireCjs();
  var _querySelectorAll = _interopRequireDefault(requireQuerySelectorAll());
  _interopRequireDefault(/* @__PURE__ */ requirePropTypes$1());
  var _react = _interopRequireDefault(requireReact());
  var _DnDContext = requireDnDContext();
  var _Selection = _interopRequireWildcard(requireSelection$1());
  var _TimeGridEvent = _interopRequireDefault(requireTimeGridEvent());
  var _common = requireCommon();
  function _interopRequireWildcard(e, t) {
    if ("function" == typeof WeakMap) var r2 = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
    return (_interopRequireWildcard = function _interopRequireWildcard2(e2, t2) {
      if (!t2 && e2 && e2.__esModule) return e2;
      var o2, i, f = { __proto__: null, default: e2 };
      if (null === e2 || "object" != _typeof2(e2) && "function" != typeof e2) return f;
      if (o2 = t2 ? n : r2) {
        if (o2.has(e2)) return o2.get(e2);
        o2.set(e2, f);
      }
      for (var _t in e2) "default" !== _t && {}.hasOwnProperty.call(e2, _t) && ((i = (o2 = Object.defineProperty) && Object.getOwnPropertyDescriptor(e2, _t)) && (i.get || i.set) ? o2(f, _t, i) : f[_t] = e2[_t]);
      return f;
    })(e, t);
  }
  function ownKeys2(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o2 = Object.getOwnPropertySymbols(e);
      r2 && (o2 = o2.filter(function(r22) {
        return Object.getOwnPropertyDescriptor(e, r22).enumerable;
      })), t.push.apply(t, o2);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys2(Object(t), true).forEach(function(r22) {
        (0, _defineProperty2.default)(e, r22, t[r22]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r22) {
        Object.defineProperty(e, r22, Object.getOwnPropertyDescriptor(t, r22));
      });
    }
    return e;
  }
  function _callSuper2(t, o2, e) {
    return o2 = (0, _getPrototypeOf2.default)(o2), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct2() ? Reflect.construct(o2, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o2.apply(t, e));
  }
  function _isNativeReflectConstruct2() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch (t2) {
    }
    return (_isNativeReflectConstruct2 = function _isNativeReflectConstruct22() {
      return !!t;
    })();
  }
  var EventContainerWrapper$1 = /* @__PURE__ */ (function(_React$Component) {
    function EventContainerWrapper2() {
      var _this;
      (0, _classCallCheck2.default)(this, EventContainerWrapper2);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _callSuper2(this, EventContainerWrapper2, [].concat(args));
      _this.handleMove = function(point, bounds) {
        if (!(0, _common.pointInColumn)(bounds, point)) return _this.reset();
        var event = _this.context.draggable.dragAndDropAction.event;
        var _this$props = _this.props, accessors2 = _this$props.accessors, slotMetrics = _this$props.slotMetrics;
        var newSlot = slotMetrics.closestSlotFromPoint({
          y: point.y - _this.eventOffsetTop,
          x: point.x
        }, bounds);
        var _eventTimes = (0, _common.eventTimes)(event, accessors2, _this.props.localizer), duration2 = _eventTimes.duration;
        var newEnd = _this.props.localizer.add(newSlot, duration2, "milliseconds");
        _this.update(event, slotMetrics.getRange(newSlot, newEnd, false, true));
      };
      _this.handleDropFromOutside = function(point, boundaryBox) {
        var _this$props2 = _this.props, slotMetrics = _this$props2.slotMetrics, resource = _this$props2.resource;
        var start = slotMetrics.closestSlotFromPoint({
          y: point.y,
          x: point.x
        }, boundaryBox);
        var end = _this._calculateDnDEnd(start);
        _this.context.draggable.onDropFromOutside({
          start,
          end,
          allDay: false,
          resource
        });
        _this.reset();
      };
      _this.handleDragOverFromOutside = function(point, bounds) {
        var slotMetrics = _this.props.slotMetrics;
        var start = slotMetrics.closestSlotFromPoint({
          y: point.y,
          x: point.x
        }, bounds);
        var end = _this._calculateDnDEnd(start);
        var event = _this.context.draggable.dragFromOutsideItem();
        _this.update(event, slotMetrics.getRange(start, end, false, true));
      };
      _this._calculateDnDEnd = function(start) {
        var _this$props3 = _this.props, accessors2 = _this$props3.accessors, slotMetrics = _this$props3.slotMetrics, localizer2 = _this$props3.localizer;
        var event = _this.context.draggable.dragFromOutsideItem();
        var _eventTimes2 = (0, _common.eventTimes)(event, accessors2, localizer2), eventDuration = _eventTimes2.duration;
        var end = slotMetrics.nextSlot(start);
        var eventHasDuration = !isNaN(eventDuration);
        if (eventHasDuration) {
          var eventEndSlot = localizer2.add(start, eventDuration, "milliseconds");
          end = new Date(Math.max(eventEndSlot, end));
        }
        return end;
      };
      _this.updateParentScroll = function(parent, node) {
        setTimeout(function() {
          var draggedEl = (0, _querySelectorAll.default)(node, ".rbc-addons-dnd-drag-preview")[0];
          if (draggedEl) {
            if (draggedEl.offsetTop < parent.scrollTop) {
              (0, _domHelpers.scrollTop)(parent, Math.max(draggedEl.offsetTop, 0));
            } else if (draggedEl.offsetTop + draggedEl.offsetHeight > parent.scrollTop + parent.clientHeight) {
              (0, _domHelpers.scrollTop)(parent, Math.min(draggedEl.offsetTop - parent.offsetHeight + draggedEl.offsetHeight, parent.scrollHeight));
            }
          }
        });
      };
      _this._selectable = function() {
        var wrapper = _this.ref.current;
        var node = wrapper.children[0];
        var isBeingDragged = false;
        var selector = _this._selector = new _Selection.default(function() {
          return wrapper.closest(".rbc-time-view");
        });
        var parent = (0, _domHelpers.scrollParent)(wrapper);
        selector.on("beforeSelect", function(point) {
          var dragAndDropAction = _this.context.draggable.dragAndDropAction;
          if (!dragAndDropAction.action) return false;
          if (dragAndDropAction.action === "resize") {
            return (0, _common.pointInColumn)((0, _Selection.getBoundsForNode)(node), point);
          }
          var eventNode = (0, _Selection.getEventNodeFromPoint)(node, point);
          if (!eventNode) return false;
          _this.eventOffsetTop = point.y - (0, _Selection.getBoundsForNode)(eventNode).top;
        });
        selector.on("selecting", function(box) {
          var bounds = (0, _Selection.getBoundsForNode)(node);
          var dragAndDropAction = _this.context.draggable.dragAndDropAction;
          if (dragAndDropAction.action === "move") {
            _this.updateParentScroll(parent, node);
            _this.handleMove(box, bounds);
          }
          if (dragAndDropAction.action === "resize") {
            _this.updateParentScroll(parent, node);
            _this.handleResize(box, bounds);
          }
        });
        selector.on("dropFromOutside", function(point) {
          if (!_this.context.draggable.onDropFromOutside) return;
          var bounds = (0, _Selection.getBoundsForNode)(node);
          if (!(0, _common.pointInColumn)(bounds, point)) return;
          _this.handleDropFromOutside(point, bounds);
        });
        selector.on("dragOverFromOutside", function(point) {
          var item = _this.context.draggable.dragFromOutsideItem ? _this.context.draggable.dragFromOutsideItem() : null;
          if (!item) return;
          var bounds = (0, _Selection.getBoundsForNode)(node);
          if (!(0, _common.pointInColumn)(bounds, point)) return _this.reset();
          _this.handleDragOverFromOutside(point, bounds);
        });
        selector.on("selectStart", function() {
          isBeingDragged = true;
          _this.context.draggable.onStart();
        });
        selector.on("select", function(point) {
          var bounds = (0, _Selection.getBoundsForNode)(node);
          isBeingDragged = false;
          var dragAndDropAction = _this.context.draggable.dragAndDropAction;
          if (dragAndDropAction.action === "resize") {
            _this.handleInteractionEnd();
          } else if (!_this.state.event || !(0, _common.pointInColumn)(bounds, point)) {
            return;
          } else {
            _this.handleInteractionEnd();
          }
        });
        selector.on("click", function() {
          if (isBeingDragged) _this.reset();
          _this.context.draggable.onEnd(null);
        });
        selector.on("reset", function() {
          _this.reset();
          _this.context.draggable.onEnd(null);
        });
      };
      _this.handleInteractionEnd = function() {
        var resource = _this.props.resource;
        var event = _this.state.event;
        _this.reset();
        _this.context.draggable.onEnd({
          start: event.start,
          end: event.end,
          resourceId: resource
        });
      };
      _this._teardownSelectable = function() {
        if (!_this._selector) return;
        _this._selector.teardown();
        _this._selector = null;
      };
      _this.state = {};
      _this.ref = /* @__PURE__ */ _react.default.createRef();
      return _this;
    }
    (0, _inherits2.default)(EventContainerWrapper2, _React$Component);
    return (0, _createClass2.default)(EventContainerWrapper2, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this._selectable();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this._teardownSelectable();
      }
    }, {
      key: "reset",
      value: function reset() {
        if (this.state.event) this.setState({
          event: null,
          top: null,
          height: null
        });
      }
    }, {
      key: "update",
      value: function update(event, _ref) {
        var startDate = _ref.startDate, endDate = _ref.endDate, top = _ref.top, height2 = _ref.height;
        var lastEvent = this.state.event;
        if (lastEvent && startDate === lastEvent.start && endDate === lastEvent.end) {
          return;
        }
        this.setState({
          top,
          height: height2,
          event: _objectSpread2(_objectSpread2({}, event), {}, {
            start: startDate,
            end: endDate
          })
        });
      }
    }, {
      key: "handleResize",
      value: function handleResize(point, bounds) {
        var _this$props4 = this.props, accessors2 = _this$props4.accessors, slotMetrics = _this$props4.slotMetrics, localizer2 = _this$props4.localizer;
        var _this$context$draggab = this.context.draggable.dragAndDropAction, event = _this$context$draggab.event, direction = _this$context$draggab.direction;
        var newTime = slotMetrics.closestSlotFromPoint(point, bounds);
        var _eventTimes3 = (0, _common.eventTimes)(event, accessors2, localizer2), start = _eventTimes3.start, end = _eventTimes3.end;
        var newRange;
        if (direction === "UP") {
          var newStart = localizer2.min(newTime, slotMetrics.closestSlotFromDate(end, -1));
          newRange = slotMetrics.getRange(newStart, end);
          newRange = _objectSpread2(_objectSpread2({}, newRange), {}, {
            endDate: end
          });
        } else if (direction === "DOWN") {
          var newEnd = localizer2.max(newTime, slotMetrics.closestSlotFromDate(start));
          newRange = slotMetrics.getRange(start, newEnd);
          newRange = _objectSpread2(_objectSpread2({}, newRange), {}, {
            startDate: start
          });
        }
        this.update(event, newRange);
      }
    }, {
      key: "renderContent",
      value: function renderContent() {
        var _this$props5 = this.props, children = _this$props5.children, accessors2 = _this$props5.accessors, components = _this$props5.components, getters = _this$props5.getters, slotMetrics = _this$props5.slotMetrics, localizer2 = _this$props5.localizer;
        var _this$state = this.state, event = _this$state.event, top = _this$state.top, height2 = _this$state.height;
        if (!event) return children;
        var events = children.props.children;
        var start = event.start, end = event.end;
        var label;
        var format2 = "eventTimeRangeFormat";
        var startsBeforeDay = slotMetrics.startsBeforeDay(start);
        var startsAfterDay = slotMetrics.startsAfterDay(end);
        if (startsBeforeDay) format2 = "eventTimeRangeEndFormat";
        else if (startsAfterDay) format2 = "eventTimeRangeStartFormat";
        if (startsBeforeDay && startsAfterDay) label = localizer2.messages.allDay;
        else label = localizer2.format({
          start,
          end
        }, format2);
        return /* @__PURE__ */ _react.default.cloneElement(children, {
          children: /* @__PURE__ */ _react.default.createElement(_react.default.Fragment, null, events, event && /* @__PURE__ */ _react.default.createElement(_TimeGridEvent.default, {
            event,
            label,
            className: "rbc-addons-dnd-drag-preview",
            style: {
              top,
              height: height2,
              width: 100
            },
            getters,
            components,
            accessors: _objectSpread2(_objectSpread2({}, accessors2), _common.dragAccessors),
            continuesPrior: startsBeforeDay,
            continuesAfter: startsAfterDay
          }))
        });
      }
    }, {
      key: "render",
      value: function render() {
        return /* @__PURE__ */ _react.default.createElement("div", {
          ref: this.ref
        }, this.renderContent());
      }
    }]);
  })(_react.default.Component);
  EventContainerWrapper$1.contextType = _DnDContext.DnDContext;
  EventContainerWrapper$1.propTypes = {};
  EventContainerWrapper.default = EventContainerWrapper$1;
  return EventContainerWrapper;
}
var WeekWrapper = {};
var toConsumableArray = { exports: {} };
var arrayWithoutHoles = { exports: {} };
var arrayLikeToArray = { exports: {} };
var hasRequiredArrayLikeToArray;
function requireArrayLikeToArray() {
  if (hasRequiredArrayLikeToArray) return arrayLikeToArray.exports;
  hasRequiredArrayLikeToArray = 1;
  (function(module) {
    function _arrayLikeToArray2(r2, a) {
      (null == a || a > r2.length) && (a = r2.length);
      for (var e = 0, n = Array(a); e < a; e++) n[e] = r2[e];
      return n;
    }
    module.exports = _arrayLikeToArray2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(arrayLikeToArray);
  return arrayLikeToArray.exports;
}
var hasRequiredArrayWithoutHoles;
function requireArrayWithoutHoles() {
  if (hasRequiredArrayWithoutHoles) return arrayWithoutHoles.exports;
  hasRequiredArrayWithoutHoles = 1;
  (function(module) {
    var arrayLikeToArray2 = requireArrayLikeToArray();
    function _arrayWithoutHoles2(r2) {
      if (Array.isArray(r2)) return arrayLikeToArray2(r2);
    }
    module.exports = _arrayWithoutHoles2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(arrayWithoutHoles);
  return arrayWithoutHoles.exports;
}
var iterableToArray = { exports: {} };
var hasRequiredIterableToArray;
function requireIterableToArray() {
  if (hasRequiredIterableToArray) return iterableToArray.exports;
  hasRequiredIterableToArray = 1;
  (function(module) {
    function _iterableToArray2(r2) {
      if ("undefined" != typeof Symbol && null != r2[Symbol.iterator] || null != r2["@@iterator"]) return Array.from(r2);
    }
    module.exports = _iterableToArray2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(iterableToArray);
  return iterableToArray.exports;
}
var unsupportedIterableToArray = { exports: {} };
var hasRequiredUnsupportedIterableToArray;
function requireUnsupportedIterableToArray() {
  if (hasRequiredUnsupportedIterableToArray) return unsupportedIterableToArray.exports;
  hasRequiredUnsupportedIterableToArray = 1;
  (function(module) {
    var arrayLikeToArray2 = requireArrayLikeToArray();
    function _unsupportedIterableToArray2(r2, a) {
      if (r2) {
        if ("string" == typeof r2) return arrayLikeToArray2(r2, a);
        var t = {}.toString.call(r2).slice(8, -1);
        return "Object" === t && r2.constructor && (t = r2.constructor.name), "Map" === t || "Set" === t ? Array.from(r2) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? arrayLikeToArray2(r2, a) : void 0;
      }
    }
    module.exports = _unsupportedIterableToArray2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(unsupportedIterableToArray);
  return unsupportedIterableToArray.exports;
}
var nonIterableSpread = { exports: {} };
var hasRequiredNonIterableSpread;
function requireNonIterableSpread() {
  if (hasRequiredNonIterableSpread) return nonIterableSpread.exports;
  hasRequiredNonIterableSpread = 1;
  (function(module) {
    function _nonIterableSpread2() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    module.exports = _nonIterableSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(nonIterableSpread);
  return nonIterableSpread.exports;
}
var hasRequiredToConsumableArray;
function requireToConsumableArray() {
  if (hasRequiredToConsumableArray) return toConsumableArray.exports;
  hasRequiredToConsumableArray = 1;
  (function(module) {
    var arrayWithoutHoles2 = requireArrayWithoutHoles();
    var iterableToArray2 = requireIterableToArray();
    var unsupportedIterableToArray2 = requireUnsupportedIterableToArray();
    var nonIterableSpread2 = requireNonIterableSpread();
    function _toConsumableArray2(r2) {
      return arrayWithoutHoles2(r2) || iterableToArray2(r2) || unsupportedIterableToArray2(r2) || nonIterableSpread2();
    }
    module.exports = _toConsumableArray2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(toConsumableArray);
  return toConsumableArray.exports;
}
var EventRow = {};
var EventRowMixin = {};
var EventCell = {};
var hasRequiredEventCell;
function requireEventCell() {
  if (hasRequiredEventCell) return EventCell;
  hasRequiredEventCell = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(EventCell, "__esModule", {
    value: true
  });
  EventCell.default = void 0;
  var _extends2 = _interopRequireDefault(require_extends());
  var _defineProperty2 = _interopRequireDefault(requireDefineProperty());
  var _objectWithoutProperties2 = _interopRequireDefault(requireObjectWithoutProperties());
  var _classCallCheck2 = _interopRequireDefault(requireClassCallCheck());
  var _createClass2 = _interopRequireDefault(requireCreateClass());
  var _possibleConstructorReturn2 = _interopRequireDefault(requirePossibleConstructorReturn());
  var _getPrototypeOf2 = _interopRequireDefault(requireGetPrototypeOf());
  var _inherits2 = _interopRequireDefault(requireInherits());
  _interopRequireDefault(/* @__PURE__ */ requirePropTypes$1());
  var _react = _interopRequireDefault(requireReact());
  var _clsx = _interopRequireDefault(requireClsx());
  var _excluded3 = ["style", "className", "event", "selected", "isAllDay", "onSelect", "onDoubleClick", "onKeyPress", "localizer", "continuesPrior", "continuesAfter", "accessors", "getters", "children", "components", "slotStart", "slotEnd"];
  function ownKeys2(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o2 = Object.getOwnPropertySymbols(e);
      r2 && (o2 = o2.filter(function(r22) {
        return Object.getOwnPropertyDescriptor(e, r22).enumerable;
      })), t.push.apply(t, o2);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys2(Object(t), true).forEach(function(r22) {
        (0, _defineProperty2.default)(e, r22, t[r22]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r22) {
        Object.defineProperty(e, r22, Object.getOwnPropertyDescriptor(t, r22));
      });
    }
    return e;
  }
  function _callSuper2(t, o2, e) {
    return o2 = (0, _getPrototypeOf2.default)(o2), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct2() ? Reflect.construct(o2, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o2.apply(t, e));
  }
  function _isNativeReflectConstruct2() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch (t2) {
    }
    return (_isNativeReflectConstruct2 = function _isNativeReflectConstruct22() {
      return !!t;
    })();
  }
  var EventCell$12 = /* @__PURE__ */ (function(_React$Component) {
    function EventCell2() {
      (0, _classCallCheck2.default)(this, EventCell2);
      return _callSuper2(this, EventCell2, arguments);
    }
    (0, _inherits2.default)(EventCell2, _React$Component);
    return (0, _createClass2.default)(EventCell2, [{
      key: "render",
      value: function render() {
        var _this$props = this.props, style2 = _this$props.style, className = _this$props.className, event = _this$props.event, selected = _this$props.selected, isAllDay = _this$props.isAllDay, onSelect = _this$props.onSelect, _onDoubleClick = _this$props.onDoubleClick, onKeyPress = _this$props.onKeyPress, localizer2 = _this$props.localizer, continuesPrior2 = _this$props.continuesPrior, continuesAfter2 = _this$props.continuesAfter, accessors2 = _this$props.accessors, getters = _this$props.getters, children = _this$props.children, _this$props$component = _this$props.components, Event2 = _this$props$component.event, EventWrapper2 = _this$props$component.eventWrapper, slotStart = _this$props.slotStart, slotEnd = _this$props.slotEnd, props = (0, _objectWithoutProperties2.default)(_this$props, _excluded3);
        delete props.resizable;
        var title = accessors2.title(event);
        var tooltip = accessors2.tooltip(event);
        var end = accessors2.end(event);
        var start = accessors2.start(event);
        var allDay = accessors2.allDay(event);
        var showAsAllDay = isAllDay || allDay || localizer2.diff(start, localizer2.ceil(end, "day"), "day") > 1;
        var userProps = getters.eventProp(event, start, end, selected);
        var content = /* @__PURE__ */ _react.default.createElement("div", {
          className: "rbc-event-content",
          title: tooltip || void 0
        }, Event2 ? /* @__PURE__ */ _react.default.createElement(Event2, {
          event,
          continuesPrior: continuesPrior2,
          continuesAfter: continuesAfter2,
          title,
          isAllDay: allDay,
          localizer: localizer2,
          slotStart,
          slotEnd
        }) : title);
        return /* @__PURE__ */ _react.default.createElement(EventWrapper2, (0, _extends2.default)({}, this.props, {
          type: "date"
        }), /* @__PURE__ */ _react.default.createElement("div", (0, _extends2.default)({}, props, {
          style: _objectSpread2(_objectSpread2({}, userProps.style), style2),
          className: (0, _clsx.default)("rbc-event", className, userProps.className, {
            "rbc-selected": selected,
            "rbc-event-allday": showAsAllDay,
            "rbc-event-continues-prior": continuesPrior2,
            "rbc-event-continues-after": continuesAfter2
          }),
          onClick: function onClick(e) {
            return onSelect && onSelect(event, e);
          },
          onDoubleClick: function onDoubleClick(e) {
            return _onDoubleClick && _onDoubleClick(event, e);
          },
          onKeyDown: function onKeyDown(e) {
            return onKeyPress && onKeyPress(event, e);
          }
        }), typeof children === "function" ? children(content) : content));
      }
    }]);
  })(_react.default.Component);
  EventCell$12.propTypes = {};
  EventCell.default = EventCell$12;
  return EventCell;
}
var selection = {};
var hasRequiredSelection;
function requireSelection() {
  if (hasRequiredSelection) return selection;
  hasRequiredSelection = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(selection, "__esModule", {
    value: true
  });
  selection.dateCellSelection = dateCellSelection2;
  selection.getSlotAtX = getSlotAtX2;
  selection.isSelected = isSelected2;
  selection.pointInBox = pointInBox2;
  selection.slotWidth = slotWidth2;
  var _isEqual = _interopRequireDefault(requireIsEqual());
  function isSelected2(event, selected) {
    if (!event || selected == null) return false;
    return (0, _isEqual.default)(event, selected);
  }
  function slotWidth2(rowBox, slots) {
    var rowWidth = rowBox.right - rowBox.left;
    var cellWidth = rowWidth / slots;
    return cellWidth;
  }
  function getSlotAtX2(rowBox, x, rtl, slots) {
    var cellWidth = slotWidth2(rowBox, slots);
    return rtl ? slots - 1 - Math.floor((x - rowBox.left) / cellWidth) : Math.floor((x - rowBox.left) / cellWidth);
  }
  function pointInBox2(box, _ref) {
    var x = _ref.x, y = _ref.y;
    return y >= box.top && y <= box.bottom && x >= box.left && x <= box.right;
  }
  function dateCellSelection2(start, rowBox, box, slots, rtl) {
    var startIdx = -1;
    var endIdx = -1;
    var lastSlotIdx = slots - 1;
    var cellWidth = slotWidth2(rowBox, slots);
    var currentSlot = getSlotAtX2(rowBox, box.x, rtl, slots);
    var isCurrentRow = rowBox.top < box.y && rowBox.bottom > box.y;
    var isStartRow = rowBox.top < start.y && rowBox.bottom > start.y;
    var isAboveStart = start.y > rowBox.bottom;
    var isBelowStart = rowBox.top > start.y;
    var isBetween = box.top < rowBox.top && box.bottom > rowBox.bottom;
    if (isBetween) {
      startIdx = 0;
      endIdx = lastSlotIdx;
    }
    if (isCurrentRow) {
      if (isBelowStart) {
        startIdx = 0;
        endIdx = currentSlot;
      } else if (isAboveStart) {
        startIdx = currentSlot;
        endIdx = lastSlotIdx;
      }
    }
    if (isStartRow) {
      startIdx = endIdx = rtl ? lastSlotIdx - Math.floor((start.x - rowBox.left) / cellWidth) : Math.floor((start.x - rowBox.left) / cellWidth);
      if (isCurrentRow) {
        if (currentSlot < startIdx) startIdx = currentSlot;
        else endIdx = currentSlot;
      } else if (start.y < box.y) {
        endIdx = lastSlotIdx;
      } else {
        startIdx = 0;
      }
    }
    return {
      startIdx,
      endIdx
    };
  }
  return selection;
}
var hasRequiredEventRowMixin;
function requireEventRowMixin() {
  if (hasRequiredEventRowMixin) return EventRowMixin;
  hasRequiredEventRowMixin = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(EventRowMixin, "__esModule", {
    value: true
  });
  EventRowMixin.default = void 0;
  var _propTypes = _interopRequireDefault(/* @__PURE__ */ requirePropTypes$1());
  var _react = _interopRequireDefault(requireReact());
  var _EventCell = _interopRequireDefault(requireEventCell());
  var _selection = requireSelection();
  EventRowMixin.default = {
    propTypes: {
      slotMetrics: _propTypes.default.object.isRequired,
      selected: _propTypes.default.object,
      isAllDay: _propTypes.default.bool,
      accessors: _propTypes.default.object.isRequired,
      localizer: _propTypes.default.object.isRequired,
      components: _propTypes.default.object.isRequired,
      getters: _propTypes.default.object.isRequired,
      onSelect: _propTypes.default.func,
      onDoubleClick: _propTypes.default.func,
      onKeyPress: _propTypes.default.func
    },
    defaultProps: {
      segments: [],
      selected: {}
    },
    renderEvent: function renderEvent2(props, event) {
      var selected = props.selected;
      props.isAllDay;
      var accessors2 = props.accessors, getters = props.getters, onSelect = props.onSelect, onDoubleClick = props.onDoubleClick, onKeyPress = props.onKeyPress, localizer2 = props.localizer, slotMetrics = props.slotMetrics, components = props.components, resizable = props.resizable;
      var continuesPrior2 = slotMetrics.continuesPrior(event);
      var continuesAfter2 = slotMetrics.continuesAfter(event);
      return /* @__PURE__ */ _react.default.createElement(_EventCell.default, {
        event,
        getters,
        localizer: localizer2,
        accessors: accessors2,
        components,
        onSelect,
        onDoubleClick,
        onKeyPress,
        continuesPrior: continuesPrior2,
        continuesAfter: continuesAfter2,
        slotStart: slotMetrics.first,
        slotEnd: slotMetrics.last,
        selected: (0, _selection.isSelected)(event, selected),
        resizable
      });
    },
    renderSpan: function renderSpan2(slots, len, key) {
      var content = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : " ";
      var per = Math.abs(len) / slots * 100 + "%";
      return /* @__PURE__ */ _react.default.createElement("div", {
        key,
        className: "rbc-row-segment",
        style: {
          WebkitFlexBasis: per,
          flexBasis: per,
          maxWidth: per
        }
      }, content);
    }
  };
  return EventRowMixin;
}
var hasRequiredEventRow;
function requireEventRow() {
  if (hasRequiredEventRow) return EventRow;
  hasRequiredEventRow = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(EventRow, "__esModule", {
    value: true
  });
  EventRow.default = void 0;
  var _defineProperty2 = _interopRequireDefault(requireDefineProperty());
  var _classCallCheck2 = _interopRequireDefault(requireClassCallCheck());
  var _createClass2 = _interopRequireDefault(requireCreateClass());
  var _possibleConstructorReturn2 = _interopRequireDefault(requirePossibleConstructorReturn());
  var _getPrototypeOf2 = _interopRequireDefault(requireGetPrototypeOf());
  var _inherits2 = _interopRequireDefault(requireInherits());
  _interopRequireDefault(/* @__PURE__ */ requirePropTypes$1());
  var _clsx = _interopRequireDefault(requireClsx());
  var _react = _interopRequireDefault(requireReact());
  var _EventRowMixin = _interopRequireDefault(requireEventRowMixin());
  function ownKeys2(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o2 = Object.getOwnPropertySymbols(e);
      r2 && (o2 = o2.filter(function(r22) {
        return Object.getOwnPropertyDescriptor(e, r22).enumerable;
      })), t.push.apply(t, o2);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys2(Object(t), true).forEach(function(r22) {
        (0, _defineProperty2.default)(e, r22, t[r22]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r22) {
        Object.defineProperty(e, r22, Object.getOwnPropertyDescriptor(t, r22));
      });
    }
    return e;
  }
  function _callSuper2(t, o2, e) {
    return o2 = (0, _getPrototypeOf2.default)(o2), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct2() ? Reflect.construct(o2, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o2.apply(t, e));
  }
  function _isNativeReflectConstruct2() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch (t2) {
    }
    return (_isNativeReflectConstruct2 = function _isNativeReflectConstruct22() {
      return !!t;
    })();
  }
  var EventRow$12 = /* @__PURE__ */ (function(_React$Component) {
    function EventRow2() {
      (0, _classCallCheck2.default)(this, EventRow2);
      return _callSuper2(this, EventRow2, arguments);
    }
    (0, _inherits2.default)(EventRow2, _React$Component);
    return (0, _createClass2.default)(EventRow2, [{
      key: "render",
      value: function render() {
        var _this = this;
        var _this$props = this.props, segments = _this$props.segments, slots = _this$props.slotMetrics.slots, className = _this$props.className;
        var lastEnd = 1;
        return /* @__PURE__ */ _react.default.createElement("div", {
          className: (0, _clsx.default)(className, "rbc-row")
        }, segments.reduce(function(row, _ref, li) {
          var event = _ref.event, left = _ref.left, right = _ref.right, span = _ref.span;
          var key = "_lvl_" + li;
          var gap = left - lastEnd;
          var content = _EventRowMixin.default.renderEvent(_this.props, event);
          if (gap) row.push(_EventRowMixin.default.renderSpan(slots, gap, "".concat(key, "_gap")));
          row.push(_EventRowMixin.default.renderSpan(slots, span, key, content));
          lastEnd = right + 1;
          return row;
        }, []));
      }
    }]);
  })(_react.default.Component);
  EventRow$12.propTypes = {};
  EventRow$12.defaultProps = _objectSpread2({}, _EventRowMixin.default.defaultProps);
  EventRow.default = EventRow$12;
  return EventRow;
}
var eventLevels = {};
var hasRequiredEventLevels;
function requireEventLevels() {
  if (hasRequiredEventLevels) return eventLevels;
  hasRequiredEventLevels = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(eventLevels, "__esModule", {
    value: true
  });
  eventLevels.endOfRange = endOfRange2;
  eventLevels.eventLevels = eventLevels$12;
  eventLevels.eventSegments = eventSegments2;
  eventLevels.inRange = inRange2;
  eventLevels.segsOverlap = segsOverlap2;
  eventLevels.sortEvents = sortEvents2;
  eventLevels.sortWeekEvents = sortWeekEvents2;
  var _toConsumableArray2 = _interopRequireDefault(requireToConsumableArray());
  var _findIndex = _interopRequireDefault(requireFindIndex());
  function endOfRange2(_ref) {
    var dateRange = _ref.dateRange, _ref$unit = _ref.unit, unit = _ref$unit === void 0 ? "day" : _ref$unit, localizer2 = _ref.localizer;
    return {
      first: dateRange[0],
      last: localizer2.add(dateRange[dateRange.length - 1], 1, unit)
    };
  }
  function eventSegments2(event, range2, accessors2, localizer2) {
    var _endOfRange = endOfRange2({
      dateRange: range2,
      localizer: localizer2
    }), first = _endOfRange.first, last = _endOfRange.last;
    var slots = localizer2.diff(first, last, "day");
    var start = localizer2.max(localizer2.startOf(accessors2.start(event), "day"), first);
    var end = localizer2.min(localizer2.ceil(accessors2.end(event), "day"), last);
    var padding = (0, _findIndex.default)(range2, function(x) {
      return localizer2.isSameDate(x, start);
    });
    var span = localizer2.diff(start, end, "day");
    span = Math.min(span, slots);
    span = Math.max(span - localizer2.segmentOffset, 1);
    return {
      event,
      span,
      left: padding + 1,
      right: Math.max(padding + span, 1)
    };
  }
  function eventLevels$12(rowSegments) {
    var limit = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity;
    var i, j, seg, levels = [], extra = [];
    for (i = 0; i < rowSegments.length; i++) {
      seg = rowSegments[i];
      for (j = 0; j < levels.length; j++) if (!segsOverlap2(seg, levels[j])) break;
      if (j >= limit) {
        extra.push(seg);
      } else {
        (levels[j] || (levels[j] = [])).push(seg);
      }
    }
    for (i = 0; i < levels.length; i++) {
      levels[i].sort(function(a, b) {
        return a.left - b.left;
      });
    }
    return {
      levels,
      extra
    };
  }
  function inRange2(e, start, end, accessors2, localizer2) {
    var event = {
      start: accessors2.start(e),
      end: accessors2.end(e)
    };
    var range2 = {
      start,
      end
    };
    return localizer2.inEventRange({
      event,
      range: range2
    });
  }
  function segsOverlap2(seg, otherSegs) {
    return otherSegs.some(function(otherSeg) {
      return otherSeg.left <= seg.right && otherSeg.right >= seg.left;
    });
  }
  function sortWeekEvents2(events, accessors2, localizer2) {
    var base = (0, _toConsumableArray2.default)(events);
    var multiDayEvents = [];
    var standardEvents = [];
    base.forEach(function(event) {
      var startCheck = accessors2.start(event);
      var endCheck = accessors2.end(event);
      if (localizer2.daySpan(startCheck, endCheck) > 1) {
        multiDayEvents.push(event);
      } else {
        standardEvents.push(event);
      }
    });
    var multiSorted = multiDayEvents.sort(function(a, b) {
      return sortEvents2(a, b, accessors2, localizer2);
    });
    var standardSorted = standardEvents.sort(function(a, b) {
      return sortEvents2(a, b, accessors2, localizer2);
    });
    return [].concat((0, _toConsumableArray2.default)(multiSorted), (0, _toConsumableArray2.default)(standardSorted));
  }
  function sortEvents2(eventA, eventB, accessors2, localizer2) {
    var evtA = {
      start: accessors2.start(eventA),
      end: accessors2.end(eventA),
      allDay: accessors2.allDay(eventA)
    };
    var evtB = {
      start: accessors2.start(eventB),
      end: accessors2.end(eventB),
      allDay: accessors2.allDay(eventB)
    };
    return localizer2.sortEvents({
      evtA,
      evtB
    });
  }
  return eventLevels;
}
var hasRequiredWeekWrapper;
function requireWeekWrapper() {
  if (hasRequiredWeekWrapper) return WeekWrapper;
  hasRequiredWeekWrapper = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  var _typeof2 = require_typeof();
  Object.defineProperty(WeekWrapper, "__esModule", {
    value: true
  });
  WeekWrapper.default = void 0;
  var _extends2 = _interopRequireDefault(require_extends());
  var _defineProperty2 = _interopRequireDefault(requireDefineProperty());
  var _toConsumableArray2 = _interopRequireDefault(requireToConsumableArray());
  var _classCallCheck2 = _interopRequireDefault(requireClassCallCheck());
  var _createClass2 = _interopRequireDefault(requireCreateClass());
  var _possibleConstructorReturn2 = _interopRequireDefault(requirePossibleConstructorReturn());
  var _getPrototypeOf2 = _interopRequireDefault(requireGetPrototypeOf());
  var _inherits2 = _interopRequireDefault(requireInherits());
  _interopRequireDefault(/* @__PURE__ */ requirePropTypes$1());
  var _react = _interopRequireDefault(requireReact());
  var _EventRow = _interopRequireDefault(requireEventRow());
  var _Selection = _interopRequireWildcard(requireSelection$1());
  var _eventLevels = requireEventLevels();
  var _selection = requireSelection();
  var _common = requireCommon();
  var _DnDContext = requireDnDContext();
  function _interopRequireWildcard(e, t) {
    if ("function" == typeof WeakMap) var r2 = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
    return (_interopRequireWildcard = function _interopRequireWildcard2(e2, t2) {
      if (!t2 && e2 && e2.__esModule) return e2;
      var o2, i, f = { __proto__: null, default: e2 };
      if (null === e2 || "object" != _typeof2(e2) && "function" != typeof e2) return f;
      if (o2 = t2 ? n : r2) {
        if (o2.has(e2)) return o2.get(e2);
        o2.set(e2, f);
      }
      for (var _t in e2) "default" !== _t && {}.hasOwnProperty.call(e2, _t) && ((i = (o2 = Object.defineProperty) && Object.getOwnPropertyDescriptor(e2, _t)) && (i.get || i.set) ? o2(f, _t, i) : f[_t] = e2[_t]);
      return f;
    })(e, t);
  }
  function ownKeys2(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o2 = Object.getOwnPropertySymbols(e);
      r2 && (o2 = o2.filter(function(r22) {
        return Object.getOwnPropertyDescriptor(e, r22).enumerable;
      })), t.push.apply(t, o2);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys2(Object(t), true).forEach(function(r22) {
        (0, _defineProperty2.default)(e, r22, t[r22]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r22) {
        Object.defineProperty(e, r22, Object.getOwnPropertyDescriptor(t, r22));
      });
    }
    return e;
  }
  function _callSuper2(t, o2, e) {
    return o2 = (0, _getPrototypeOf2.default)(o2), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct2() ? Reflect.construct(o2, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o2.apply(t, e));
  }
  function _isNativeReflectConstruct2() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch (t2) {
    }
    return (_isNativeReflectConstruct2 = function _isNativeReflectConstruct22() {
      return !!t;
    })();
  }
  var WeekWrapper$1 = /* @__PURE__ */ (function(_React$Component) {
    function WeekWrapper2() {
      var _this;
      (0, _classCallCheck2.default)(this, WeekWrapper2);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _callSuper2(this, WeekWrapper2, [].concat(args));
      _this.handleMove = function(point, bounds, draggedEvent) {
        if (!(0, _selection.pointInBox)(bounds, point)) return _this.reset();
        var event = _this.context.draggable.dragAndDropAction.event || draggedEvent;
        var _this$props = _this.props, accessors2 = _this$props.accessors, slotMetrics = _this$props.slotMetrics, rtl = _this$props.rtl, localizer2 = _this$props.localizer;
        var slot = (0, _selection.getSlotAtX)(bounds, point.x, rtl, slotMetrics.slots);
        var date2 = slotMetrics.getDateForSlot(slot);
        var _eventTimes = (0, _common.eventTimes)(event, accessors2, localizer2), start = _eventTimes.start, duration2 = _eventTimes.duration;
        start = localizer2.merge(date2, start);
        var end = localizer2.add(start, duration2, "milliseconds");
        _this.update(event, start, end);
      };
      _this.handleDropFromOutside = function(point, bounds) {
        if (!_this.context.draggable.onDropFromOutside) return;
        var _this$props2 = _this.props, slotMetrics = _this$props2.slotMetrics, rtl = _this$props2.rtl, localizer2 = _this$props2.localizer;
        var slot = (0, _selection.getSlotAtX)(bounds, point.x, rtl, slotMetrics.slots);
        var start = slotMetrics.getDateForSlot(slot);
        _this.context.draggable.onDropFromOutside({
          start,
          end: localizer2.add(start, 1, "day"),
          allDay: false
        });
      };
      _this.handleDragOverFromOutside = function(point, node) {
        var item = _this.context.draggable.dragFromOutsideItem ? _this.context.draggable.dragFromOutsideItem() : null;
        if (!item) return;
        _this.handleMove(point, node, item);
      };
      _this._selectable = function() {
        var node = _this.ref.current.closest(".rbc-month-row, .rbc-allday-cell");
        var container = node.closest(".rbc-month-view, .rbc-time-view");
        var isMonthRow = node.classList.contains("rbc-month-row");
        var selector = _this._selector = new _Selection.default(function() {
          return container;
        }, {
          validContainers: (0, _toConsumableArray2.default)(!isMonthRow ? [".rbc-day-slot", ".rbc-allday-cell"] : [])
        });
        selector.on("beforeSelect", function(point) {
          var isAllDay = _this.props.isAllDay;
          var action = _this.context.draggable.dragAndDropAction.action;
          var bounds = (0, _Selection.getBoundsForNode)(node);
          var isInBox = (0, _selection.pointInBox)(bounds, point);
          return action === "move" || action === "resize" && (!isAllDay || isInBox);
        });
        selector.on("selecting", function(box) {
          var bounds = (0, _Selection.getBoundsForNode)(node);
          var dragAndDropAction = _this.context.draggable.dragAndDropAction;
          if (dragAndDropAction.action === "move") _this.handleMove(box, bounds);
          if (dragAndDropAction.action === "resize") _this.handleResize(box, bounds);
        });
        selector.on("selectStart", function() {
          return _this.context.draggable.onStart();
        });
        selector.on("select", function(point) {
          var bounds = (0, _Selection.getBoundsForNode)(node);
          if (!_this.state.segment) return;
          if (!(0, _selection.pointInBox)(bounds, point)) {
            _this.reset();
          } else {
            _this.handleInteractionEnd();
          }
        });
        selector.on("dropFromOutside", function(point) {
          if (!_this.context.draggable.onDropFromOutside) return;
          var bounds = (0, _Selection.getBoundsForNode)(node);
          if (!(0, _selection.pointInBox)(bounds, point)) return;
          _this.handleDropFromOutside(point, bounds);
        });
        selector.on("dragOverFromOutside", function(point) {
          if (!_this.context.draggable.dragFromOutsideItem) return;
          var bounds = (0, _Selection.getBoundsForNode)(node);
          _this.handleDragOverFromOutside(point, bounds);
        });
        selector.on("click", function() {
          return _this.context.draggable.onEnd(null);
        });
        selector.on("reset", function() {
          _this.reset();
          _this.context.draggable.onEnd(null);
        });
      };
      _this.handleInteractionEnd = function() {
        var _this$props3 = _this.props, resourceId = _this$props3.resourceId, isAllDay = _this$props3.isAllDay;
        var event = _this.state.segment.event;
        _this.reset();
        _this.context.draggable.onEnd({
          start: event.start,
          end: event.end,
          resourceId,
          isAllDay
        });
      };
      _this._teardownSelectable = function() {
        if (!_this._selector) return;
        _this._selector.teardown();
        _this._selector = null;
      };
      _this.state = {};
      _this.ref = /* @__PURE__ */ _react.default.createRef();
      return _this;
    }
    (0, _inherits2.default)(WeekWrapper2, _React$Component);
    return (0, _createClass2.default)(WeekWrapper2, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this._selectable();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this._teardownSelectable();
      }
    }, {
      key: "reset",
      value: function reset() {
        if (this.state.segment) this.setState({
          segment: null
        });
      }
    }, {
      key: "update",
      value: function update(event, start, end) {
        var segment = (0, _eventLevels.eventSegments)(_objectSpread2(_objectSpread2({}, event), {}, {
          end,
          start,
          __isPreview: true
        }), this.props.slotMetrics.range, _common.dragAccessors, this.props.localizer);
        var lastSegment = this.state.segment;
        if (lastSegment && segment.span === lastSegment.span && segment.left === lastSegment.left && segment.right === lastSegment.right) {
          return;
        }
        this.setState({
          segment
        });
      }
    }, {
      key: "handleResize",
      value: function handleResize(point, bounds) {
        var _this$context$draggab = this.context.draggable.dragAndDropAction, event = _this$context$draggab.event, direction = _this$context$draggab.direction;
        var _this$props4 = this.props, accessors2 = _this$props4.accessors, slotMetrics = _this$props4.slotMetrics, rtl = _this$props4.rtl, localizer2 = _this$props4.localizer;
        var _eventTimes2 = (0, _common.eventTimes)(event, accessors2, localizer2), start = _eventTimes2.start, end = _eventTimes2.end;
        var slot = (0, _selection.getSlotAtX)(bounds, point.x, rtl, slotMetrics.slots);
        var date2 = slotMetrics.getDateForSlot(slot);
        var cursorInRow = (0, _selection.pointInBox)(bounds, point);
        if (direction === "RIGHT") {
          if (cursorInRow) {
            if (slotMetrics.last < start) return this.reset();
            if (localizer2.eq(localizer2.startOf(end, "day"), end)) end = localizer2.add(date2, 1, "day");
            else end = date2;
          } else if (localizer2.inRange(start, slotMetrics.first, slotMetrics.last) || bounds.bottom < point.y && +slotMetrics.first > +start) {
            end = localizer2.add(slotMetrics.last, 1, "milliseconds");
          } else {
            this.setState({
              segment: null
            });
            return;
          }
          var originalEnd = accessors2.end(event);
          end = localizer2.merge(end, originalEnd);
          if (localizer2.lt(end, start)) {
            end = originalEnd;
          }
        } else if (direction === "LEFT") {
          if (cursorInRow) {
            if (slotMetrics.first > end) return this.reset();
            start = date2;
          } else if (localizer2.inRange(end, slotMetrics.first, slotMetrics.last) || bounds.top > point.y && localizer2.lt(slotMetrics.last, end)) {
            start = localizer2.add(slotMetrics.first, -1, "milliseconds");
          } else {
            this.reset();
            return;
          }
          var originalStart = accessors2.start(event);
          start = localizer2.merge(start, originalStart);
          if (localizer2.gt(start, end)) {
            start = originalStart;
          }
        }
        this.update(event, start, end);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props5 = this.props, children = _this$props5.children, accessors2 = _this$props5.accessors;
        var segment = this.state.segment;
        return /* @__PURE__ */ _react.default.createElement("div", {
          ref: this.ref,
          className: "rbc-addons-dnd-row-body"
        }, children, segment && /* @__PURE__ */ _react.default.createElement(_EventRow.default, (0, _extends2.default)({}, this.props, {
          selected: null,
          className: "rbc-addons-dnd-drag-row",
          segments: [segment],
          accessors: _objectSpread2(_objectSpread2({}, accessors2), _common.dragAccessors)
        })));
      }
    }]);
  })(_react.default.Component);
  WeekWrapper$1.contextType = _DnDContext.DnDContext;
  WeekWrapper$1.propTypes = {};
  WeekWrapper.default = WeekWrapper$1;
  return WeekWrapper;
}
var hasRequiredWithDragAndDrop;
function requireWithDragAndDrop() {
  if (hasRequiredWithDragAndDrop) return withDragAndDrop$1;
  hasRequiredWithDragAndDrop = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(withDragAndDrop$1, "__esModule", {
    value: true
  });
  withDragAndDrop$1.default = withDragAndDrop2;
  var _extends2 = _interopRequireDefault(require_extends());
  var _defineProperty2 = _interopRequireDefault(requireDefineProperty());
  var _objectWithoutProperties2 = _interopRequireDefault(requireObjectWithoutProperties());
  var _classCallCheck2 = _interopRequireDefault(requireClassCallCheck());
  var _createClass2 = _interopRequireDefault(requireCreateClass());
  var _possibleConstructorReturn2 = _interopRequireDefault(requirePossibleConstructorReturn());
  var _getPrototypeOf2 = _interopRequireDefault(requireGetPrototypeOf());
  var _inherits2 = _interopRequireDefault(requireInherits());
  _interopRequireDefault(/* @__PURE__ */ requirePropTypes$1());
  var _react = _interopRequireDefault(requireReact());
  var _clsx = _interopRequireDefault(requireClsx());
  requirePropTypes();
  var _EventWrapper = _interopRequireDefault(requireEventWrapper());
  var _EventContainerWrapper = _interopRequireDefault(requireEventContainerWrapper());
  var _WeekWrapper = _interopRequireDefault(requireWeekWrapper());
  var _common = requireCommon();
  var _DnDContext = requireDnDContext();
  var _excluded3 = ["selectable", "elementProps", "components"];
  function ownKeys2(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o2 = Object.getOwnPropertySymbols(e);
      r2 && (o2 = o2.filter(function(r22) {
        return Object.getOwnPropertyDescriptor(e, r22).enumerable;
      })), t.push.apply(t, o2);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys2(Object(t), true).forEach(function(r22) {
        (0, _defineProperty2.default)(e, r22, t[r22]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r22) {
        Object.defineProperty(e, r22, Object.getOwnPropertyDescriptor(t, r22));
      });
    }
    return e;
  }
  function _callSuper2(t, o2, e) {
    return o2 = (0, _getPrototypeOf2.default)(o2), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct2() ? Reflect.construct(o2, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o2.apply(t, e));
  }
  function _isNativeReflectConstruct2() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch (t2) {
    }
    return (_isNativeReflectConstruct2 = function _isNativeReflectConstruct22() {
      return !!t;
    })();
  }
  function withDragAndDrop2(Calendar2) {
    var DragAndDropCalendar = /* @__PURE__ */ (function(_React$Component) {
      function DragAndDropCalendar2() {
        var _this;
        (0, _classCallCheck2.default)(this, DragAndDropCalendar2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _callSuper2(this, DragAndDropCalendar2, [].concat(args));
        _this.defaultOnDragOver = function(event) {
          event.preventDefault();
        };
        _this.handleBeginAction = function(event, action, direction) {
          _this.setState({
            event,
            action,
            direction
          });
          var onDragStart = _this.props.onDragStart;
          if (onDragStart) onDragStart({
            event,
            action,
            direction
          });
        };
        _this.handleInteractionStart = function() {
          if (_this.state.interacting === false) _this.setState({
            interacting: true
          });
        };
        _this.handleInteractionEnd = function(interactionInfo) {
          var _this$state = _this.state, action = _this$state.action, event = _this$state.event;
          if (!action) return;
          _this.setState({
            action: null,
            event: null,
            interacting: false,
            direction: null
          });
          if (interactionInfo == null) return;
          interactionInfo.event = event;
          var _this$props = _this.props, onEventDrop = _this$props.onEventDrop, onEventResize = _this$props.onEventResize;
          if (action === "move" && onEventDrop) onEventDrop(interactionInfo);
          if (action === "resize" && onEventResize) onEventResize(interactionInfo);
        };
        _this.state = {
          interacting: false
        };
        return _this;
      }
      (0, _inherits2.default)(DragAndDropCalendar2, _React$Component);
      return (0, _createClass2.default)(DragAndDropCalendar2, [{
        key: "getDnDContextValue",
        value: function getDnDContextValue() {
          return {
            draggable: {
              onStart: this.handleInteractionStart,
              onEnd: this.handleInteractionEnd,
              onBeginAction: this.handleBeginAction,
              onDropFromOutside: this.props.onDropFromOutside,
              dragFromOutsideItem: this.props.dragFromOutsideItem,
              draggableAccessor: this.props.draggableAccessor,
              resizableAccessor: this.props.resizableAccessor,
              dragAndDropAction: this.state
            }
          };
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props2 = this.props, selectable = _this$props2.selectable, elementProps = _this$props2.elementProps, components = _this$props2.components, props = (0, _objectWithoutProperties2.default)(_this$props2, _excluded3);
          var interacting = this.state.interacting;
          delete props.onEventDrop;
          delete props.onEventResize;
          props.selectable = selectable ? "ignoreEvents" : false;
          this.components = (0, _common.mergeComponents)(components, {
            eventWrapper: _EventWrapper.default,
            eventContainerWrapper: _EventContainerWrapper.default,
            weekWrapper: _WeekWrapper.default
          });
          var elementPropsWithDropFromOutside = this.props.onDropFromOutside ? _objectSpread2(_objectSpread2({}, elementProps), {}, {
            onDragOver: this.props.onDragOver || this.defaultOnDragOver
          }) : elementProps;
          props.className = (0, _clsx.default)(props.className, "rbc-addons-dnd", !!interacting && "rbc-addons-dnd-is-dragging");
          var context = this.getDnDContextValue();
          return /* @__PURE__ */ _react.default.createElement(_DnDContext.DnDContext.Provider, {
            value: context
          }, /* @__PURE__ */ _react.default.createElement(Calendar2, (0, _extends2.default)({}, props, {
            elementProps: elementPropsWithDropFromOutside,
            components: this.components
          })));
        }
      }]);
    })(_react.default.Component);
    DragAndDropCalendar.defaultProps = _objectSpread2(_objectSpread2({}, Calendar2.defaultProps), {}, {
      draggableAccessor: null,
      resizableAccessor: null,
      resizable: true
    });
    DragAndDropCalendar.propTypes = {};
    return DragAndDropCalendar;
  }
  return withDragAndDrop$1;
}
var hasRequiredDragAndDrop;
function requireDragAndDrop() {
  if (hasRequiredDragAndDrop) return dragAndDrop;
  hasRequiredDragAndDrop = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(dragAndDrop, "__esModule", {
    value: true
  });
  dragAndDrop.default = void 0;
  var _withDragAndDrop = _interopRequireDefault(requireWithDragAndDrop());
  dragAndDrop.default = _withDragAndDrop.default;
  return dragAndDrop;
}
var dragAndDropExports = requireDragAndDrop();
const withDragAndDrop = /* @__PURE__ */ getDefaultExportFromCjs(dragAndDropExports);
function hexToRgba(hex, alpha) {
  const clean = hex.replace("#", "");
  const r2 = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return `rgba(${r2}, ${g}, ${b}, ${alpha})`;
}
function transformAppointmentsForCalendar(appointments) {
  const events = [];
  appointments.forEach((appointment) => {
    const appointmentStart = /* @__PURE__ */ new Date(`${appointment.appointment_date}T${appointment.start_time}`);
    const appointmentEnd = /* @__PURE__ */ new Date(`${appointment.appointment_date}T${appointment.end_time}`);
    const clientName = appointment.client ? `${appointment.client.first_name} ${appointment.client.last_name}` : "Unknown Client";
    const statusOpacity = STATUS_OPACITY[appointment.status] ?? DEFAULT_STATUS_OPACITY;
    const sortedServices = appointment.services?.sort((a, b) => a.display_order - b.display_order) || [];
    let currentStart = new Date(appointmentStart);
    sortedServices.forEach((service, index) => {
      let serviceStart;
      let serviceEnd;
      if (service.start_time && service.end_time) {
        serviceStart = /* @__PURE__ */ new Date(`${appointment.appointment_date}T${service.start_time}`);
        serviceEnd = /* @__PURE__ */ new Date(`${appointment.appointment_date}T${service.end_time}`);
        currentStart = new Date(serviceEnd);
      } else {
        serviceStart = new Date(currentStart);
        serviceEnd = new Date(currentStart.getTime() + service.duration_minutes * 6e4);
        currentStart = new Date(serviceEnd);
      }
      const stylistId = service.performed_by || appointment.stylist_id;
      const staffColor = service.staff?.calendar_color || appointment.stylist?.calendar_color || getDefaultStylistColor(stylistId);
      const eventColor = staffColor;
      events.push({
        id: `${appointment.id}-${service.id}`,
        // Unique id for each service event
        title: `${clientName} `,
        start: serviceStart,
        end: serviceEnd,
        color: eventColor,
        stylistColor: staffColor,
        statusOpacity,
        textColor: "#ffffff",
        resourceId: service.performed_by,
        extendedProps: {
          // Store full appointment and service data
          appointmentId: appointment.id,
          serviceId: service.id,
          // Appointment-level times (the canonical start/end, not the service's dragged position)
          appointmentStartTime: appointment.start_time,
          appointmentEndTime: appointment.end_time,
          appointmentNumber: appointment.appointment_number,
          confirmationCode: appointment.confirmation_code,
          status: appointment.status,
          client: appointment.client,
          stylist: appointment.stylist,
          services: appointment.services,
          currentService: service,
          clientNotes: appointment.client_notes,
          internalNotes: appointment.internal_notes,
          specialRequests: appointment.special_requests,
          totalAmount: appointment.total_amount,
          paymentStatus: appointment.payment_status,
          depositRequired: appointment.deposit_required,
          depositPaid: appointment.deposit_paid,
          branch_id: appointment.branch_id
        }
      });
    });
    if (!sortedServices.length) {
      const stylistId = appointment.stylist_id;
      const staffColor = appointment.stylist?.calendar_color || getDefaultStylistColor(stylistId);
      const eventColor = hexToRgba(staffColor, statusOpacity);
      events.push({
        id: appointment.id,
        title: `${clientName} - No services`,
        start: appointmentStart,
        end: appointmentEnd,
        color: eventColor,
        stylistColor: staffColor,
        statusOpacity,
        textColor: "#ffffff",
        resourceId: appointment.stylist_id,
        extendedProps: {
          appointmentId: appointment.id,
          appointmentNumber: appointment.appointment_number,
          confirmationCode: appointment.confirmation_code,
          status: appointment.status,
          client: appointment.client,
          stylist: appointment.stylist,
          services: appointment.services,
          clientNotes: appointment.client_notes,
          internalNotes: appointment.internal_notes,
          specialRequests: appointment.special_requests,
          totalAmount: appointment.total_amount,
          paymentStatus: appointment.payment_status,
          depositRequired: appointment.deposit_required,
          depositPaid: appointment.deposit_paid,
          branch_id: appointment.branch_id
        }
      });
    }
  });
  return events;
}
function StylistColorDialog({ open, stylist, onClose, onSaved }) {
  const [color, setColor] = reactExports.useState(null);
  const [saving, setSaving] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (stylist) {
      setColor(stylist.calendar_color || getDefaultStylistColor(stylist.id));
    }
  }, [stylist]);
  const displayName = stylist ? `${stylist.first_name} ${stylist.last_name}` : "";
  const initials = stylist ? `${stylist.first_name?.[0] ?? ""}${stylist.last_name?.[0] ?? ""}` : "";
  const stylistLevel = stylist?.stylist_level;
  const handleSave = async () => {
    if (!stylist) return;
    setSaving(true);
    try {
      const { error } = await updateEmployee(stylist.id, { calendar_color: color });
      if (error) throw error;
      toast.success(`Color updated for ${displayName}`);
      onSaved?.();
      onClose();
    } catch (err) {
      console.error("Failed to update stylist color:", err);
      toast.error("Failed to update color");
    } finally {
      setSaving(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, maxWidth: "sm", fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Stylist Calendar Color" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", sx: { mb: 3 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ListItemAvatar, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Avatar,
          {
            sx: {
              bgcolor: color,
              color: "#fff",
              width: 56,
              height: 56,
              fontSize: "1.25rem",
              fontWeight: 700
            },
            children: initials
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ListItemText,
          {
            primary: displayName,
            secondary: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Chip,
              {
                label: stylistLevel || "No level configured",
                size: "small",
                sx: { textTransform: "capitalize", mt: 0.5 }
              }
            )
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StylistColorPicker, { value: color, onChange: setColor })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outlined", onClick: onClose, disabled: saving, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingButton, { variant: "contained", loading: saving, onClick: handleSave, children: "Save" })
    ] })
  ] });
}
function applyFilter({ inputData, filters, dateError }) {
  const { colors, startDate, endDate, clientName, stylistIds, branchIds } = filters;
  const stabilizedThis = inputData.map((el, index) => [el, index]);
  inputData = stabilizedThis.map((el) => el[0]);
  if (colors.length) {
    inputData = inputData.filter((event) => colors.includes(event.stylistColor));
  }
  if (clientName) {
    inputData = inputData.filter((event) => {
      const client = event.extendedProps?.client;
      if (!client) return false;
      const fullName = `${client.first_name} ${client.last_name}`.toLowerCase();
      return fullName.includes(clientName.toLowerCase());
    });
  }
  if (stylistIds && stylistIds.length > 0) {
    inputData = inputData.filter((event) => {
      const services = event.extendedProps?.services;
      if (!services || services.length === 0) return false;
      return services.some((service) => stylistIds.includes(service.performed_by));
    });
  }
  if (branchIds && branchIds.length > 0) {
    inputData = inputData.filter((event) => branchIds.includes(event.extendedProps?.branch_id));
  }
  if (!dateError) {
    if (startDate && endDate) {
      inputData = inputData.filter((event) => fIsBetween(event.start, startDate, endDate));
    }
  }
  return inputData;
}
function ZoomControl({
  zoomLevel,
  zoomIn,
  zoomOut,
  step,
  hZoomLevel,
  hZoomIn,
  hZoomOut,
  hZoomEnabled
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Box,
    {
      sx: {
        position: "absolute",
        top: 8,
        right: 8,
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        gap: 0.25,
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 1.5,
        boxShadow: 1,
        px: 0.5,
        py: 0.25
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Zoom out (larger slots)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          IconButton,
          {
            size: "small",
            color: "primary",
            onClick: zoomOut,
            disabled: zoomLevel === 1,
            sx: { p: 0.5 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "carbon:zoom-out", width: 16 })
          }
        ) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: `${step} min slots`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Typography,
          {
            variant: "caption",
            sx: {
              px: 0.5,
              fontWeight: 600,
              color: "text.secondary",
              userSelect: "none",
              minWidth: 28,
              textAlign: "center"
            },
            children: [
              step,
              "m"
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Zoom in (smaller slots)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          IconButton,
          {
            size: "small",
            color: "primary",
            onClick: zoomIn,
            disabled: zoomLevel === ZOOM_STEPS.length,
            sx: { p: 0.5 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "carbon:zoom-in", width: 16 })
          }
        ) }) }),
        hZoomEnabled && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { orientation: "vertical", flexItem: true, sx: { mx: 0.25 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Narrow columns", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            IconButton,
            {
              size: "small",
              color: "primary",
              onClick: hZoomOut,
              disabled: hZoomLevel === 1,
              sx: { p: 0.5 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:arrowhead-left-fill", width: 16 })
            }
          ) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Widen columns", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            IconButton,
            {
              color: "primary",
              size: "small",
              onClick: hZoomIn,
              disabled: hZoomLevel === H_ZOOM_STEPS.length,
              sx: { p: 0.5 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:arrowhead-right-fill", width: 16 })
            }
          ) }) })
        ] })
      ]
    }
  );
}
const millisecondsInWeek = 6048e5;
const millisecondsInDay = 864e5;
const constructFromSymbol = /* @__PURE__ */ Symbol.for("constructDateFrom");
function constructFrom(date2, value) {
  if (typeof date2 === "function") return date2(value);
  if (date2 && typeof date2 === "object" && constructFromSymbol in date2)
    return date2[constructFromSymbol](value);
  if (date2 instanceof Date) return new date2.constructor(value);
  return new Date(value);
}
function toDate(argument, context) {
  return constructFrom(context || argument, argument);
}
function addDays(date2, amount, options2) {
  const _date = toDate(date2, options2?.in);
  if (isNaN(amount)) return constructFrom(date2, NaN);
  if (!amount) return _date;
  _date.setDate(_date.getDate() + amount);
  return _date;
}
let defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function startOfWeek(date2, options2) {
  const defaultOptions2 = getDefaultOptions();
  const weekStartsOn = options2?.weekStartsOn ?? options2?.locale?.options?.weekStartsOn ?? defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 0;
  const _date = toDate(date2, options2?.in);
  const day2 = _date.getDay();
  const diff2 = (day2 < weekStartsOn ? 7 : 0) + day2 - weekStartsOn;
  _date.setDate(_date.getDate() - diff2);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
function startOfISOWeek(date2, options2) {
  return startOfWeek(date2, { ...options2, weekStartsOn: 1 });
}
function getISOWeekYear(date2, options2) {
  const _date = toDate(date2, options2?.in);
  const year2 = _date.getFullYear();
  const fourthOfJanuaryOfNextYear = constructFrom(_date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year2 + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
  const fourthOfJanuaryOfThisYear = constructFrom(_date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year2, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year2 + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year2;
  } else {
    return year2 - 1;
  }
}
function getTimezoneOffsetInMilliseconds(date2) {
  const _date = toDate(date2);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds()
    )
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date2 - +utcDate;
}
function normalizeDates(context, ...dates2) {
  const normalize = constructFrom.bind(
    null,
    dates2.find((date2) => typeof date2 === "object")
  );
  return dates2.map(normalize);
}
function startOfDay(date2, options2) {
  const _date = toDate(date2, options2?.in);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
function differenceInCalendarDays(laterDate, earlierDate, options2) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options2?.in,
    laterDate,
    earlierDate
  );
  const laterStartOfDay = startOfDay(laterDate_);
  const earlierStartOfDay = startOfDay(earlierDate_);
  const laterTimestamp = +laterStartOfDay - getTimezoneOffsetInMilliseconds(laterStartOfDay);
  const earlierTimestamp = +earlierStartOfDay - getTimezoneOffsetInMilliseconds(earlierStartOfDay);
  return Math.round((laterTimestamp - earlierTimestamp) / millisecondsInDay);
}
function startOfISOWeekYear(date2, options2) {
  const year2 = getISOWeekYear(date2, options2);
  const fourthOfJanuary = constructFrom(date2, 0);
  fourthOfJanuary.setFullYear(year2, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return startOfISOWeek(fourthOfJanuary);
}
function constructNow(date2) {
  return constructFrom(date2, Date.now());
}
function isSameDay(laterDate, earlierDate, options2) {
  const [dateLeft_, dateRight_] = normalizeDates(
    options2?.in,
    laterDate,
    earlierDate
  );
  return +startOfDay(dateLeft_) === +startOfDay(dateRight_);
}
function isDate(value) {
  return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
function isValid(date2) {
  return !(!isDate(date2) && typeof date2 !== "number" || isNaN(+toDate(date2)));
}
function startOfYear(date2, options2) {
  const date_ = toDate(date2, options2?.in);
  date_.setFullYear(date_.getFullYear(), 0, 1);
  date_.setHours(0, 0, 0, 0);
  return date_;
}
const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
const formatDistance = (token, count, options2) => {
  let result;
  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options2?.addSuffix) {
    if (options2.comparison && options2.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};
function buildFormatLongFn(args) {
  return (options2 = {}) => {
    const width2 = options2.width ? String(options2.width) : args.defaultWidth;
    const format2 = args.formats[width2] || args.formats[args.defaultWidth];
    return format2;
  };
}
const dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
const formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};
const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
const formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];
function buildLocalizeFn(args) {
  return (value, options2) => {
    const context = options2?.context ? String(options2.context) : "standalone";
    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width2 = options2?.width ? String(options2.width) : defaultWidth;
      valuesArray = args.formattingValues[width2] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width2 = options2?.width ? String(options2.width) : args.defaultWidth;
      valuesArray = args.values[width2] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;
    return valuesArray[index];
  };
}
const eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
};
const dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
};
const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};
const localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};
function buildMatchFn(args) {
  return (string, options2 = {}) => {
    const width2 = options2.width;
    const matchPattern = width2 && args.matchPatterns[width2] || args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];
    const parsePatterns = width2 && args.parsePatterns[width2] || args.parsePatterns[args.defaultParseWidth];
    const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString)) : (
      // [TODO] -- I challenge you to fix the type
      findKey(parsePatterns, (pattern) => pattern.test(matchedString))
    );
    let value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options2.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      options2.valueCallback(value)
    ) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}
function findKey(object, predicate) {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}
function buildMatchPatternFn(args) {
  return (string, options2 = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];
    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options2.valueCallback ? options2.valueCallback(value) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}
const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
};
const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
const match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10)
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};
const enUS = {
  code: "en-US",
  formatDistance,
  formatLong,
  formatRelative,
  localize,
  match,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function getDayOfYear(date2, options2) {
  const _date = toDate(date2, options2?.in);
  const diff2 = differenceInCalendarDays(_date, startOfYear(_date));
  const dayOfYear = diff2 + 1;
  return dayOfYear;
}
function getISOWeek(date2, options2) {
  const _date = toDate(date2, options2?.in);
  const diff2 = +startOfISOWeek(_date) - +startOfISOWeekYear(_date);
  return Math.round(diff2 / millisecondsInWeek) + 1;
}
function getWeekYear(date2, options2) {
  const _date = toDate(date2, options2?.in);
  const year2 = _date.getFullYear();
  const defaultOptions2 = getDefaultOptions();
  const firstWeekContainsDate = options2?.firstWeekContainsDate ?? options2?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const firstWeekOfNextYear = constructFrom(options2?.in || date2, 0);
  firstWeekOfNextYear.setFullYear(year2 + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfWeek(firstWeekOfNextYear, options2);
  const firstWeekOfThisYear = constructFrom(options2?.in || date2, 0);
  firstWeekOfThisYear.setFullYear(year2, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfWeek(firstWeekOfThisYear, options2);
  if (+_date >= +startOfNextYear) {
    return year2 + 1;
  } else if (+_date >= +startOfThisYear) {
    return year2;
  } else {
    return year2 - 1;
  }
}
function startOfWeekYear(date2, options2) {
  const defaultOptions2 = getDefaultOptions();
  const firstWeekContainsDate = options2?.firstWeekContainsDate ?? options2?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const year2 = getWeekYear(date2, options2);
  const firstWeek = constructFrom(options2?.in || date2, 0);
  firstWeek.setFullYear(year2, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = startOfWeek(firstWeek, options2);
  return _date;
}
function getWeek(date2, options2) {
  const _date = toDate(date2, options2?.in);
  const diff2 = +startOfWeek(_date, options2) - +startOfWeekYear(_date, options2);
  return Math.round(diff2 / millisecondsInWeek) + 1;
}
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}
const lightFormatters = {
  // Year
  y(date2, token) {
    const signedYear = date2.getFullYear();
    const year2 = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === "yy" ? year2 % 100 : year2, token.length);
  },
  // Month
  M(date2, token) {
    const month2 = date2.getMonth();
    return token === "M" ? String(month2 + 1) : addLeadingZeros(month2 + 1, 2);
  },
  // Day of the month
  d(date2, token) {
    return addLeadingZeros(date2.getDate(), token.length);
  },
  // AM or PM
  a(date2, token) {
    const dayPeriodEnumValue = date2.getHours() / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(date2, token) {
    return addLeadingZeros(date2.getHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H(date2, token) {
    return addLeadingZeros(date2.getHours(), token.length);
  },
  // Minute
  m(date2, token) {
    return addLeadingZeros(date2.getMinutes(), token.length);
  },
  // Second
  s(date2, token) {
    return addLeadingZeros(date2.getSeconds(), token.length);
  },
  // Fraction of second
  S(date2, token) {
    const numberOfDigits = token.length;
    const milliseconds2 = date2.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds2 * Math.pow(10, numberOfDigits - 3)
    );
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};
const dayPeriodEnum = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};
const formatters = {
  // Era
  G: function(date2, token, localize2) {
    const era = date2.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize2.era(era, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return localize2.era(era, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize2.era(era, { width: "wide" });
    }
  },
  // Year
  y: function(date2, token, localize2) {
    if (token === "yo") {
      const signedYear = date2.getFullYear();
      const year2 = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize2.ordinalNumber(year2, { unit: "year" });
    }
    return lightFormatters.y(date2, token);
  },
  // Local week-numbering year
  Y: function(date2, token, localize2, options2) {
    const signedWeekYear = getWeekYear(date2, options2);
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }
    if (token === "Yo") {
      return localize2.ordinalNumber(weekYear, { unit: "year" });
    }
    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function(date2, token) {
    const isoWeekYear = getISOWeekYear(date2);
    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(date2, token) {
    const year2 = date2.getFullYear();
    return addLeadingZeros(year2, token.length);
  },
  // Quarter
  Q: function(date2, token, localize2) {
    const quarter = Math.ceil((date2.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize2.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(date2, token, localize2) {
    const quarter = Math.ceil((date2.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize2.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(date2, token, localize2) {
    const month2 = date2.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return lightFormatters.M(date2, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize2.ordinalNumber(month2 + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize2.month(month2, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return localize2.month(month2, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize2.month(month2, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(date2, token, localize2) {
    const month2 = date2.getMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month2 + 1);
      // 01, 02, ..., 12
      case "LL":
        return addLeadingZeros(month2 + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize2.ordinalNumber(month2 + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize2.month(month2, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return localize2.month(month2, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize2.month(month2, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(date2, token, localize2, options2) {
    const week = getWeek(date2, options2);
    if (token === "wo") {
      return localize2.ordinalNumber(week, { unit: "week" });
    }
    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function(date2, token, localize2) {
    const isoWeek = getISOWeek(date2);
    if (token === "Io") {
      return localize2.ordinalNumber(isoWeek, { unit: "week" });
    }
    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function(date2, token, localize2) {
    if (token === "do") {
      return localize2.ordinalNumber(date2.getDate(), { unit: "date" });
    }
    return lightFormatters.d(date2, token);
  },
  // Day of year
  D: function(date2, token, localize2) {
    const dayOfYear = getDayOfYear(date2);
    if (token === "Do") {
      return localize2.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }
    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function(date2, token, localize2) {
    const dayOfWeek = date2.getDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(date2, token, localize2, options2) {
    const dayOfWeek = date2.getDay();
    const localDayOfWeek = (dayOfWeek - options2.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return addLeadingZeros(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize2.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(date2, token, localize2, options2) {
    const dayOfWeek = date2.getDay();
    const localDayOfWeek = (dayOfWeek - options2.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return addLeadingZeros(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize2.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(date2, token, localize2) {
    const dayOfWeek = date2.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return addLeadingZeros(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize2.ordinalNumber(isoDayOfWeek, { unit: "day" });
      // Tue
      case "iii":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(date2, token, localize2) {
    const hours2 = date2.getHours();
    const dayPeriodEnumValue = hours2 / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(date2, token, localize2) {
    const hours2 = date2.getHours();
    let dayPeriodEnumValue;
    if (hours2 === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours2 === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours2 / 12 >= 1 ? "pm" : "am";
    }
    switch (token) {
      case "b":
      case "bb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(date2, token, localize2) {
    const hours2 = date2.getHours();
    let dayPeriodEnumValue;
    if (hours2 >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours2 >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours2 >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(date2, token, localize2) {
    if (token === "ho") {
      let hours2 = date2.getHours() % 12;
      if (hours2 === 0) hours2 = 12;
      return localize2.ordinalNumber(hours2, { unit: "hour" });
    }
    return lightFormatters.h(date2, token);
  },
  // Hour [0-23]
  H: function(date2, token, localize2) {
    if (token === "Ho") {
      return localize2.ordinalNumber(date2.getHours(), { unit: "hour" });
    }
    return lightFormatters.H(date2, token);
  },
  // Hour [0-11]
  K: function(date2, token, localize2) {
    const hours2 = date2.getHours() % 12;
    if (token === "Ko") {
      return localize2.ordinalNumber(hours2, { unit: "hour" });
    }
    return addLeadingZeros(hours2, token.length);
  },
  // Hour [1-24]
  k: function(date2, token, localize2) {
    let hours2 = date2.getHours();
    if (hours2 === 0) hours2 = 24;
    if (token === "ko") {
      return localize2.ordinalNumber(hours2, { unit: "hour" });
    }
    return addLeadingZeros(hours2, token.length);
  },
  // Minute
  m: function(date2, token, localize2) {
    if (token === "mo") {
      return localize2.ordinalNumber(date2.getMinutes(), { unit: "minute" });
    }
    return lightFormatters.m(date2, token);
  },
  // Second
  s: function(date2, token, localize2) {
    if (token === "so") {
      return localize2.ordinalNumber(date2.getSeconds(), { unit: "second" });
    }
    return lightFormatters.s(date2, token);
  },
  // Fraction of second
  S: function(date2, token) {
    return lightFormatters.S(date2, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(date2, token, _localize) {
    const timezoneOffset = date2.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(date2, token, _localize) {
    const timezoneOffset = date2.getTimezoneOffset();
    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (GMT)
  O: function(date2, token, _localize) {
    const timezoneOffset = date2.getTimezoneOffset();
    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(date2, token, _localize) {
    const timezoneOffset = date2.getTimezoneOffset();
    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Seconds timestamp
  t: function(date2, token, _localize) {
    const timestamp = Math.trunc(+date2 / 1e3);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function(date2, token, _localize) {
    return addLeadingZeros(+date2, token.length);
  }
};
function formatTimezoneShort(offset2, delimiter = "") {
  const sign = offset2 > 0 ? "-" : "+";
  const absOffset = Math.abs(offset2);
  const hours2 = Math.trunc(absOffset / 60);
  const minutes2 = absOffset % 60;
  if (minutes2 === 0) {
    return sign + String(hours2);
  }
  return sign + String(hours2) + delimiter + addLeadingZeros(minutes2, 2);
}
function formatTimezoneWithOptionalMinutes(offset2, delimiter) {
  if (offset2 % 60 === 0) {
    const sign = offset2 > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset2) / 60, 2);
  }
  return formatTimezone(offset2, delimiter);
}
function formatTimezone(offset2, delimiter = "") {
  const sign = offset2 > 0 ? "-" : "+";
  const absOffset = Math.abs(offset2);
  const hours2 = addLeadingZeros(Math.trunc(absOffset / 60), 2);
  const minutes2 = addLeadingZeros(absOffset % 60, 2);
  return sign + hours2 + delimiter + minutes2;
}
const dateLongFormatter = (pattern, formatLong2) => {
  switch (pattern) {
    case "P":
      return formatLong2.date({ width: "short" });
    case "PP":
      return formatLong2.date({ width: "medium" });
    case "PPP":
      return formatLong2.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong2.date({ width: "full" });
  }
};
const timeLongFormatter = (pattern, formatLong2) => {
  switch (pattern) {
    case "p":
      return formatLong2.time({ width: "short" });
    case "pp":
      return formatLong2.time({ width: "medium" });
    case "ppp":
      return formatLong2.time({ width: "long" });
    case "pppp":
    default:
      return formatLong2.time({ width: "full" });
  }
};
const dateTimeLongFormatter = (pattern, formatLong2) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong2);
  }
  let dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong2.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong2.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong2.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong2.dateTime({ width: "full" });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong2)).replace("{{time}}", timeLongFormatter(timePattern, formatLong2));
};
const longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;
const throwTokens = ["D", "DD", "YY", "YYYY"];
function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}
function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}
function warnOrThrowProtectedError(token, format2, input) {
  const _message = message(token, format2, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}
function message(token, format2, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format2}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(date2, formatStr, options2) {
  const defaultOptions2 = getDefaultOptions();
  const locale = options2?.locale ?? defaultOptions2.locale ?? enUS;
  const firstWeekContainsDate = options2?.firstWeekContainsDate ?? options2?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const weekStartsOn = options2?.weekStartsOn ?? options2?.locale?.options?.weekStartsOn ?? defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 0;
  const originalDate = toDate(date2, options2?.in);
  if (!isValid(originalDate)) {
    throw new RangeError("Invalid time value");
  }
  let parts = formatStr.match(longFormattingTokensRegExp).map((substring) => {
    const firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      const longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp).map((substring) => {
    if (substring === "''") {
      return { isToken: false, value: "'" };
    }
    const firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return { isToken: false, value: cleanEscapedString(substring) };
    }
    if (formatters[firstCharacter]) {
      return { isToken: true, value: substring };
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + firstCharacter + "`"
      );
    }
    return { isToken: false, value: substring };
  });
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }
  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale
  };
  return parts.map((part) => {
    if (!part.isToken) return part.value;
    const token = part.value;
    if (!options2?.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token) || !options2?.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) {
      warnOrThrowProtectedError(token, formatStr, String(date2));
    }
    const formatter = formatters[token[0]];
    return formatter(originalDate, token, locale.localize, formatterOptions);
  }).join("");
}
function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}
function getDay(date2, options2) {
  return toDate(date2, options2?.in).getDay();
}
function isToday(date2, options2) {
  return isSameDay(
    constructFrom(date2, date2),
    constructNow(date2)
  );
}
function CalendarToolbar({
  view,
  title,
  loading,
  canReset,
  viewOptions,
  currentDate,
  onGotoDate,
  onChangeView,
  onOpenFilters,
  onDateNavigation,
  onBookingDialogClick,
  branches,
  selectedBranchId,
  onBranchChange,
  branchColorMap = {},
  children
}) {
  const mobileActions = Me();
  const [datePickerAnchor, setDatePickerAnchor] = reactExports.useState(null);
  const [mobileDrawerOpen, setMobileDrawerOpen] = reactExports.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const selectedView = viewOptions.find((option) => option.value === view) ?? viewOptions[0];
  const renderDesktopMenuItems = () => /* @__PURE__ */ jsxRuntimeExports.jsx(
    ToggleButtonGroup,
    {
      exclusive: true,
      size: "small",
      "aria-label": "calendar view",
      value: view,
      onChange: (event, newAlignment) => {
        if (newAlignment !== null) {
          onChangeView?.(newAlignment);
        }
      },
      sx: { display: { xs: "none", sm: "inline-flex" } },
      children: viewOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: option.label, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleButton, { value: option.value, "aria-label": `${option.label} view`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: option.icon }) }) }, option.value))
    }
  );
  const renderMobileMenuItems = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        size: "small",
        color: "inherit",
        onClick: mobileActions.onOpen,
        sx: { minWidth: "auto", display: { sm: "none" } },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: selectedView.icon, sx: { mr: 0.5 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:arrow-ios-downward-fill", width: 18 })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CustomPopover,
      {
        open: mobileActions.open,
        anchorEl: mobileActions.anchorEl,
        onClose: mobileActions.onClose,
        slotProps: { arrow: { placement: "top-left" } },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuList, { children: viewOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          MenuItem,
          {
            selected: option.value === view,
            onClick: () => {
              mobileActions.onClose();
              onChangeView?.(option.value);
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: option.icon }),
              option.label
            ]
          },
          option.value
        )) })
      }
    )
  ] });
  const renderDateNavigation = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Box,
    {
      sx: {
        gap: { sm: 1 },
        display: "flex",
        flex: "1 1 auto",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: () => onDateNavigation?.("prev"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:arrow-ios-back-fill" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Jump to date", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box,
          {
            onClick: (e) => setDatePickerAnchor(e.currentTarget),
            sx: {
              typography: { xs: "subtitle2", sm: "h6" },
              cursor: "pointer",
              borderRadius: 1,
              px: 1,
              py: 0.25,
              "&:hover": { bgcolor: "action.hover" }
            },
            children: title
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Popover,
          {
            open: Boolean(datePickerAnchor),
            anchorEl: datePickerAnchor,
            onClose: () => setDatePickerAnchor(null),
            anchorOrigin: { vertical: "bottom", horizontal: "center" },
            transformOrigin: { vertical: "top", horizontal: "center" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(LocalizationProvider, { dateAdapter: AdapterDayjs, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              DateCalendar,
              {
                value: currentDate ? dayjs(currentDate) : dayjs(),
                onChange: (val) => {
                  if (val) {
                    onGotoDate?.(val.toDate());
                    setDatePickerAnchor(null);
                  }
                }
              }
            ) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: () => onDateNavigation?.("next"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:arrow-ios-forward-fill" }) })
      ]
    }
  );
  const renderTodayAndFilters = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { gap: 1, display: "flex", alignItems: "center" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        size: "small",
        color: "error",
        variant: isToday(currentDate) ? "contained" : "outlined",
        onClick: () => onDateNavigation?.("today"),
        sx: { display: { xs: "none", sm: "inline-flex" } },
        children: "Today"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        size: "small",
        variant: "outlined",
        startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" }),
        onClick: onBookingDialogClick,
        sx: { display: { xs: "none", sm: "inline-flex" } },
        children: "Book Appointment"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Book Appointment", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      IconButton,
      {
        onClick: onBookingDialogClick,
        sx: { display: { xs: "inline-flex", sm: "none" } },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line" })
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: onOpenFilters, sx: { display: { xs: "none", sm: "inline-flex" } }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { color: "error", variant: "dot", invisible: !canReset, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "ic:round-filter-list" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "More options", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      IconButton,
      {
        onClick: () => setMobileDrawerOpen(true),
        sx: { display: { xs: "inline-flex", sm: "none" } },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:more-vertical-fill" })
      }
    ) })
  ] });
  const renderMobileDrawer = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Drawer,
    {
      anchor: "bottom",
      open: mobileDrawerOpen,
      onClose: () => setMobileDrawerOpen(false),
      PaperProps: {
        sx: { borderRadius: "16px 16px 0 0", px: 2.5, pt: 2.5, pb: 4 }
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box,
          {
            sx: {
              width: 36,
              height: 4,
              borderRadius: 2,
              bgcolor: "text.disabled",
              mx: "auto",
              mb: 2.5
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", fontWeight: "bold", sx: { mb: 2 }, children: "Calendar Options" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            fullWidth: true,
            size: "large",
            color: "error",
            variant: "contained",
            onClick: () => {
              onDateNavigation?.("today");
              setMobileDrawerOpen(false);
            },
            sx: { mb: 1.5 },
            children: "Go to Today"
          }
        ),
        branches?.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { my: 1.5 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", sx: { display: "block", mb: 0.75 }, children: "Branch" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              fullWidth: true,
              size: "small",
              value: selectedBranchId ?? "all",
              onChange: (e) => {
                onBranchChange?.(e.target.value);
                setMobileDrawerOpen(false);
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "all", children: "All Branches" }),
                branches.map((branch) => /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuItem, { value: branch.id, children: [
                  branchColorMap[branch.id] && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Box,
                    {
                      component: "span",
                      sx: {
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        bgcolor: branchColorMap[branch.id],
                        display: "inline-block",
                        mr: 1,
                        flexShrink: 0
                      }
                    }
                  ),
                  branch.name
                ] }, branch.id))
              ]
            }
          )
        ] }),
        children && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { my: 1.5 } }),
          children
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { my: 1.5 } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            fullWidth: true,
            size: "large",
            variant: "outlined",
            startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { color: "error", variant: "dot", invisible: !canReset, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "ic:round-filter-list" }) }),
            onClick: () => {
              onOpenFilters?.();
              setMobileDrawerOpen(false);
            },
            children: [
              "Filters",
              canReset ? " (Active)" : ""
            ]
          }
        )
      ]
    }
  );
  const renderLoading = () => /* @__PURE__ */ jsxRuntimeExports.jsx(
    LinearProgress,
    {
      color: "inherit",
      sx: {
        left: 0,
        width: 1,
        height: 2,
        bottom: 0,
        borderRadius: 0,
        position: "absolute"
      }
    }
  );
  const renderBranchSelector = () => {
    if (!branches || branches.length <= 1) return null;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Select,
      {
        size: "small",
        value: selectedBranchId ?? "all",
        onChange: (e) => onBranchChange?.(e.target.value),
        input: /* @__PURE__ */ jsxRuntimeExports.jsx(InputBase, {}),
        sx: {
          ml: 1,
          fontSize: "body2.fontSize",
          fontWeight: "fontWeightMedium",
          "& .MuiSelect-select": {
            py: 0.5,
            px: 1,
            borderRadius: 1,
            "&:hover": { bgcolor: "action.hover" }
          }
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "all", children: "All Branches" }),
          branches.map((branch) => /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuItem, { value: branch.id, children: [
            branchColorMap[branch.id] && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Box,
              {
                component: "span",
                sx: {
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  bgcolor: branchColorMap[branch.id],
                  display: "inline-block",
                  mr: 1,
                  flexShrink: 0
                }
              }
            ),
            branch.name
          ] }, branch.id))
        ]
      }
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box,
      {
        sx: {
          pr: { xs: 1, sm: 2 },
          pl: { xs: 1.5, sm: 2.5 },
          py: { xs: 1, sm: 2.5 },
          display: "flex",
          alignItems: "center",
          position: "relative"
        },
        children: [
          renderDesktopMenuItems(),
          !isMobile && renderBranchSelector(),
          !isMobile && children,
          renderMobileMenuItems(),
          renderDateNavigation(),
          renderTodayAndFilters(),
          loading && renderLoading()
        ]
      }
    ),
    renderMobileDrawer()
  ] });
}
function CalendarFilters({
  open,
  events,
  onClose,
  filters,
  canReset,
  dateError,
  colorOptions,
  staff = [],
  branches = [],
  onClickEvent
}) {
  const { state: currentFilters, setState: updateFilters, resetState: resetFilters } = filters;
  const handleFilterColors = reactExports.useCallback(
    (newValue) => {
      updateFilters({ colors: newValue });
    },
    [updateFilters]
  );
  const handleFilterStartDate = reactExports.useCallback(
    (newValue) => {
      updateFilters({ startDate: newValue });
    },
    [updateFilters]
  );
  const handleFilterEndDate = reactExports.useCallback(
    (newValue) => {
      updateFilters({ endDate: newValue });
    },
    [updateFilters]
  );
  const handleFilterClientName = reactExports.useCallback(
    (event) => {
      updateFilters({ clientName: event.target.value });
    },
    [updateFilters]
  );
  const handleFilterStylistId = reactExports.useCallback(
    (event, newValue) => {
      updateFilters({ stylistIds: newValue.map((stylist) => stylist.id) });
    },
    [updateFilters]
  );
  const handleFilterBranchId = reactExports.useCallback(
    (event, newValue) => {
      updateFilters({ branchIds: newValue.map((branch) => branch.id) });
    },
    [updateFilters]
  );
  const renderHead = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box,
      {
        sx: {
          py: 2,
          pr: 1,
          pl: 2.5,
          display: "flex",
          alignItems: "center"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", sx: { flexGrow: 1 }, children: "Filters" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Reset", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: () => resetFilters(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { color: "error", variant: "dot", invisible: !canReset, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "solar:restart-bold" }) }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:close-line" }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { borderStyle: "dashed" } })
  ] });
  const renderColors = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Box,
    {
      sx: {
        my: 3,
        px: 2.5,
        display: "flex",
        flexDirection: "column"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { mb: 1 }, children: "Colors" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ColorPicker,
          {
            options: STYLIST_CALENDAR_COLORS,
            value: currentFilters.colors,
            onChange: handleFilterColors
          }
        )
      ]
    }
  );
  const renderDateRange = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Box,
    {
      sx: {
        mb: 3,
        px: 2.5,
        display: "flex",
        flexDirection: "column"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { mb: 1.5 }, children: "Range" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          DatePicker,
          {
            label: "Start date",
            value: currentFilters.startDate,
            onChange: handleFilterStartDate,
            sx: { mb: 2.5 }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          DatePicker,
          {
            label: "End date",
            value: currentFilters.endDate,
            onChange: handleFilterEndDate,
            slotProps: {
              textField: {
                error: dateError,
                helperText: dateError ? "End date must be later than start date" : null
              }
            }
          }
        )
      ]
    }
  );
  const renderClientName = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Box,
    {
      sx: {
        mb: 3,
        px: 2.5,
        display: "flex",
        flexDirection: "column"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { mb: 1.5 }, children: "Client Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextField,
          {
            label: "Search client",
            value: currentFilters.clientName,
            onChange: handleFilterClientName,
            placeholder: "Enter client name...",
            size: "small"
          }
        )
      ]
    }
  );
  const renderStylist = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Box,
    {
      sx: {
        mb: 3,
        px: 2.5,
        display: "flex",
        flexDirection: "column"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { mb: 1.5 }, children: "Stylist" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Autocomplete,
          {
            multiple: true,
            options: staff,
            getOptionLabel: (option) => `${option.first_name} ${option.last_name}`,
            value: staff.filter((stylist) => currentFilters.stylistIds.includes(stylist.id)),
            onChange: handleFilterStylistId,
            renderTags: (value, getTagProps) => value.map((option, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Chip,
              {
                label: `${option.first_name} ${option.last_name}`,
                size: "small",
                ...getTagProps({ index })
              },
              option.id
            )),
            renderInput: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextField,
              {
                ...params,
                label: "Select stylists",
                placeholder: "Choose stylists...",
                size: "small"
              }
            ),
            size: "small"
          }
        )
      ]
    }
  );
  const renderBranch = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Box,
    {
      sx: {
        mb: 3,
        px: 2.5,
        display: "flex",
        flexDirection: "column"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { mb: 1.5 }, children: "Branch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Autocomplete,
          {
            multiple: true,
            options: branches,
            getOptionLabel: (option) => option.name,
            value: branches.filter((branch) => currentFilters.branchIds.includes(branch.id)),
            onChange: handleFilterBranchId,
            renderTags: (value, getTagProps) => value.map((option, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { label: option.name, size: "small", ...getTagProps({ index }) }, option.id)),
            renderInput: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextField,
              {
                ...params,
                label: "Select branches",
                placeholder: "Choose branches...",
                size: "small"
              }
            ),
            size: "small"
          }
        )
      ]
    }
  );
  const renderEvents = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "subtitle2", sx: { px: 2.5, mb: 1 }, children: [
      "Events (",
      events.length,
      ")"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { component: "ul", children: orderBy(events, ["end"], ["desc"]).map((event) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      ListItemButton,
      {
        onClick: () => onClickEvent(`${event.id}`),
        sx: [
          (theme) => ({ py: 1.5, borderBottom: `dashed 1px ${theme.vars.palette.divider}` })
        ],
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Box,
            {
              sx: {
                top: 16,
                left: 0,
                width: 0,
                height: 0,
                position: "absolute",
                borderRight: "10px solid transparent",
                borderTop: `10px solid ${event.color}`
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ListItemText,
            {
              primary: event.allDay ? fDate(event.start) : `${fDateTime(event.start)} - ${fDateTime(event.end)}`,
              secondary: event.title,
              slotProps: {
                primary: {
                  sx: { typography: "caption", color: "text.disabled" }
                },
                secondary: {
                  sx: { mt: 0.5, color: "text.primary", typography: "subtitle2" }
                }
              }
            }
          )
        ]
      }
    ) }, event.id)) })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Drawer,
    {
      anchor: "right",
      open,
      onClose,
      slotProps: {
        backdrop: { invisible: true },
        paper: { sx: { width: 320 } }
      },
      children: [
        renderHead(),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Scrollbar, { children: [
          renderColors(),
          renderDateRange(),
          renderClientName(),
          renderStylist(),
          renderBranch(),
          renderEvents()
        ] })
      ]
    }
  );
}
const BigCalendarRoot = styled("div")(({ theme }) => {
  const reactBigCalendarStyles = {
    "& .rbc-calendar": {
      fontSize: "0.95rem",
      color: theme.vars.palette.text.primary,
      boxShadow: theme.vars.customShadows.z1
    },
    "& .rbc-time-view .rbc-allday-cell": {
      height: "30%",
      backgroundColor: theme.vars.palette.background.neutral
    },
    "& .rbc-header": {
      fontSize: "1rem",
      fontWeight: theme.typography.fontWeightBold,
      padding: theme.spacing(1.2, 0),
      border: "none",
      background: "transparent",
      color: theme.vars.palette.text.secondary
    },
    "& .rbc-header + .rbc-header": {
      borderLeft: "none"
    },
    "& .rbc-month-view": {
      border: "none",
      background: "transparent"
    },
    "& .rbc-today": {
      backgroundColor: "transparent"
    },
    "& .rbc-date-cell": {
      padding: theme.spacing(0.5),
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.vars.palette.text.secondary
    },
    "& .rbc-date-cell.rbc-now.rbc-current .rbc-button-link": {
      backgroundColor: theme.vars.palette.error.main,
      borderRadius: "50%",
      color: theme.vars.palette.error.contrastText,
      fontWeight: theme.typography.fontWeightSemiBold,
      padding: "4px",
      position: "relative",
      zIndex: 1
    },
    "& .rbc-month-row + .rbc-month-row": {
      borderTop: `1px solid ${theme.vars.palette.divider}`
    },
    "& .rbc-day-bg + .rbc-day-bg": {
      borderLeft: `1px solid ${theme.vars.palette.divider}`
    },
    "& .rbc-day-bg": {
      borderTop: `1px solid ${theme.vars.palette.divider}`,
      // borderBottom: `1px solid ${theme.vars.palette.divider}`,
      background: "transparent"
    },
    "& .rbc-time-content": {
      borderBottom: `1px solid ${theme.vars.palette.divider}`,
      background: "transparent",
      borderTop: `4px solid ${theme.vars.palette.divider}`
      // overflowX: 'hidden',
    },
    "& .rbc-event": {
      fontSize: "0.85rem",
      padding: "2px 6px",
      borderRadius: 6,
      background: theme.vars.palette.primary.main,
      color: theme.vars.palette.primary.contrastText,
      border: "none",
      boxShadow: "none"
    },
    "& .rbc-time-view-resources .rbc-time-gutter, .rbc-time-view-resources .rbc-time-header-gutter": {
      // backgroundColor: 'transparent',
      backgroundColor: theme.vars.palette.background.paper,
      borderRight: "1px solid " + theme.vars.palette.divider
    },
    "& .rbc-event-label": {
      fontSize: "0.75rem",
      color: theme.vars.palette.text.disabled
    },
    "& .rbc-time-view .rbc-time-slot": {
      fontSize: "0.85rem",
      borderBottom: `1px solid ${theme.vars.palette.divider}`
    },
    "& .rbc-time-view": {
      border: "none",
      overflow: "unset"
    },
    // Week-view column min-width — driven by --rbc-week-col-width CSS variable set on BigCalendarRoot
    "& .rbc-time-header-content .rbc-header": {
      minWidth: "var(--rbc-week-col-width)"
    },
    "& .rbc-time-content .rbc-day-slot": {
      minWidth: "var(--rbc-week-col-width)"
    },
    "& .rbc-time-header-cell": {
      fontSize: "0.9rem",
      color: theme.vars.palette.text.secondary
    },
    "& .rbc-time-header-content": {
      fontSize: "0.9rem",
      borderLeft: `1px solid ${theme.vars.palette.divider}`
    },
    "& .rbc-time-content > * + * > * ": {
      borderLeft: `1px solid ${theme.vars.palette.divider}`
    },
    "& .rbc-timeslot-group": {
      borderBottom: `1px solid ${theme.vars.palette.divider}`
    },
    "& .rbc-month-view .rbc-date-cell": {
      fontSize: "0.95rem"
    },
    "& .rbc-month-view .rbc-date-cell > a": {
      fontSize: "0.95rem"
    },
    "& .rbc-agenda-view .rbc-agenda-date-cell": {
      fontSize: "0.9rem",
      backgroundColor: theme.vars.palette.background.paper,
      color: theme.vars.palette.text.primary
    },
    "&. .rbc-agenda-date-cell": {
      backgroundColor: "transparent"
    },
    "& .rbc-agenda-view .rbc-agenda-event-cell": {
      fontSize: "0.85rem"
    },
    "& .rbc-day-slot .rbc-time-slot": {
      border: "none",
      borderBottom: `1px solid ${theme.vars.palette.divider}`
    },
    "& .rbc-off-range": {
      color: theme.vars.palette.text.disabled,
      opacity: 0.4
    },
    "& .rbc-toolbar": {
      background: "transparent",
      color: theme.vars.palette.text.primary,
      border: "none",
      marginBottom: theme.spacing(2)
    },
    "& .rbc-toolbar button": {
      background: theme.vars.palette.error.main,
      color: theme.vars.palette.error.contrastText,
      borderRadius: 8,
      border: "none",
      fontWeight: theme.typography.fontWeightBold,
      fontSize: "1rem",
      padding: theme.spacing(0.5, 2),
      boxShadow: theme.vars.customShadows.z1,
      transition: theme.transitions.create(["background", "color"]),
      "&:hover": {
        background: theme.vars.palette.error.dark,
        color: theme.vars.palette.error.contrastText
      }
    },
    "& .rbc-toolbar .rbc-toolbar-label": {
      color: theme.vars.palette.text.primary,
      fontWeight: theme.typography.fontWeightBold,
      fontSize: "1.25rem",
      letterSpacing: 0.5
    },
    "& .rbc-btn-group button": {
      background: theme.vars.palette.background.neutral,
      color: theme.vars.palette.text.secondary,
      borderRadius: 8,
      border: "none",
      margin: theme.spacing(0, 0.5),
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: "1rem",
      "&.rbc-active, &:active, &:focus": {
        background: theme.vars.palette.background.paper,
        color: theme.vars.palette.text.primary
      }
    },
    "& .rbc-row-bg": {
      background: "transparent"
    },
    "& .rbc-show-more": {
      background: "rgba(255,255,255,0.05)",
      color: theme.vars.palette.primary.main,
      fontWeight: theme.typography.fontWeightBold,
      fontSize: "0.95rem",
      borderRadius: 6,
      "&:hover": {
        color: theme.vars.palette.primary.dark,
        background: "rgba(255,255,255,0.10)"
      }
    },
    "& .rbc-selected-cell": {
      background: "rgba(255,255,255,0.04)"
    },
    "& .rbc-current-time-indicator": {
      background: theme.vars.palette.error.main
    },
    "& .rbc-toolbar button[disabled]": {
      opacity: 0.5,
      cursor: "not-allowed"
    },
    "& .rbc-agenda-table thead > tr > th": {
      backgroundColor: theme.vars.palette.background.neutral,
      color: theme.vars.palette.text.secondary
    },
    "& .rbc-agenda-table": {
      border: "none !important"
    },
    "& .rbc-agenda-view table.rbc-agenda-table tbody > tr + tr": {
      borderTop: `1px solid ${theme.vars.palette.divider} !important`
    },
    "& .rbc-agenda-view table.rbc-agenda-table tbody > tr > td + td": {
      borderLeft: `2px solid ${theme.vars.palette.divider} !important`
    },
    ".rbc-agenda-view table.rbc-agenda-table thead > tr > th": {
      borderBottom: `2px solid ${theme.vars.palette.divider} !important`
    }
  };
  ({
    "--fc-border-color": theme.vars.palette.TableCell.border,
    "--fc-page-bg-color": theme.vars.palette.background.default,
    "--fc-neutral-text-color": theme.vars.palette.text.secondary,
    "--fc-neutral-bg-color": theme.vars.palette.background.neutral,
    "--fc-list-event-hover-bg-color": theme.vars.palette.action.hover,
    "--fc-now-indicator-color": theme.vars.palette.error.main,
    "--fc-highlight-color": U(theme.vars.palette.grey["500Channel"], 0.12),
    "--fc-non-business-color": U(theme.vars.palette.grey["500Channel"], 0.08),
    "--custom-day-other-color": theme.vars.palette.action.disabled,
    "--custom-day-business-color": theme.vars.palette.text.secondary,
    "--custom-today-color": theme.vars.palette.error.contrastText,
    "--custom-today-bg": theme.vars.palette.error.main
  });
  return {
    ...reactBigCalendarStyles
  };
});
function useBufferEvents({
  events,
  currentBranchId,
  branches,
  bufferMinutes,
  hasMultipleBranches
}) {
  return reactExports.useMemo(() => {
    if (!hasMultipleBranches || bufferMinutes === 0) return [];
    const bufferMs = bufferMinutes * 60 * 1e3;
    const result = [];
    events.forEach((evt) => {
      const evtBranchId = evt.extendedProps?.branch_id;
      const status = evt.extendedProps?.status;
      if (!evtBranchId || evtBranchId === currentBranchId) return;
      if (status === "cancelled" || status === "canceled") return;
      if (!evt.resourceId) return;
      const branchName = branches.find((b) => b.id === evtBranchId)?.name ?? "another branch";
      const base = { resourceId: evt.resourceId, isBufferZone: true, bufferBranchName: branchName };
      result.push({
        ...base,
        id: `buffer-before-${evt.id}`,
        title: "buffer",
        start: new Date(evt.start.getTime() - bufferMs),
        end: evt.start
      });
      result.push({
        ...base,
        id: `buffer-after-${evt.id}`,
        title: "buffer",
        start: evt.end,
        end: new Date(evt.end.getTime() + bufferMs)
      });
    });
    return result;
  }, [events, hasMultipleBranches, currentBranchId, bufferMinutes, branches]);
}
const getTitle = (currentDate, currentView) => {
  const options2 = { year: "numeric", month: "long" };
  if (currentView === "timeGridDay") {
    return currentDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  } else if (currentView === "timeGridWeek") {
    const weekStart = new Date(currentDate);
    weekStart.setDate(currentDate.getDate() - currentDate.getDay());
    const endOfWeek = new Date(weekStart);
    endOfWeek.setDate(weekStart.getDate() + 6);
    return `${weekStart.toLocaleDateString("en-US", { month: "long", day: "numeric" })} - ${endOfWeek.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`;
  } else if (currentView === "listWeek") {
    const endDate = new Date(currentDate);
    endDate.setDate(currentDate.getDate() + 6);
    return `${currentDate.toLocaleDateString("en-US", { month: "long", day: "numeric" })} - ${endDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`;
  } else {
    return currentDate.toLocaleDateString("en-US", options2);
  }
};
const localizer$1 = dateFnsLocalizer({
  format,
  startOfWeek,
  getDay,
  locales: {
    "en-US": enUS
  }
});
const SWR_OPTIONS = {
  revalidateOnFocus: false,
  dedupingInterval: 5e3,
  keepPreviousData: true
};
async function fetchStaffSchedules(branchId, dateRangeStart, dateRangeEnd) {
  const [schedulesResult, exceptionsResult] = await Promise.all([
    supabase.from("employee_schedules").select("employee_id, day_of_week, start_time, end_time").eq("branch_id", branchId).eq("is_active", true),
    supabase.from("employee_availability_exceptions").select("employee_id, start_datetime, end_datetime, is_all_day, exception_type").eq("branch_id", branchId).eq("status", "approved").gte("end_datetime", dateRangeStart ?? new Date(Date.now() - 864e5 * 7).toISOString()).lte(
      "start_datetime",
      dateRangeEnd ?? new Date(Date.now() + 864e5 * 30).toISOString()
    )
  ]);
  const schedules = {};
  if (!schedulesResult.error && schedulesResult.data) {
    schedulesResult.data.forEach((row) => {
      if (!schedules[row.employee_id]) schedules[row.employee_id] = [];
      schedules[row.employee_id].push(row);
    });
  }
  const exceptions = {};
  if (!exceptionsResult.error && exceptionsResult.data) {
    exceptionsResult.data.forEach((row) => {
      if (!exceptions[row.employee_id]) exceptions[row.employee_id] = [];
      exceptions[row.employee_id].push(row);
    });
  }
  return { schedules, exceptions };
}
function useStaffSchedules(branchId, dateRangeStart, dateRangeEnd, enabled = true) {
  const cacheKey = branchId && enabled ? `staff_schedules:${branchId}:${dateRangeStart}:${dateRangeEnd}` : null;
  const { data } = useSWR(
    cacheKey,
    () => fetchStaffSchedules(branchId, dateRangeStart, dateRangeEnd),
    SWR_OPTIONS
  );
  const schedulesByStaff = reactExports.useMemo(() => data?.schedules ?? {}, [data]);
  const exceptionsByStaff = reactExports.useMemo(() => data?.exceptions ?? {}, [data]);
  return { schedulesByStaff, exceptionsByStaff };
}
const STORAGE_KEY$1 = "calendarSelectedBranchId";
const EVENT_NAME$1 = "calendarBranchChange";
function useSharedBranchId() {
  const [branchId, setBranchIdState] = reactExports.useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY$1);
    return stored !== null && stored !== "" ? stored : null;
  });
  reactExports.useEffect(() => {
    const handler = (e) => {
      setBranchIdState(e.detail ?? null);
    };
    window.addEventListener(EVENT_NAME$1, handler);
    return () => window.removeEventListener(EVENT_NAME$1, handler);
  }, []);
  const setBranchId = reactExports.useCallback((value) => {
    const normalized = value ?? null;
    localStorage.setItem(STORAGE_KEY$1, normalized ?? "");
    setBranchIdState(normalized);
    window.dispatchEvent(new CustomEvent(EVENT_NAME$1, { detail: normalized }));
  }, []);
  return [branchId, setBranchId];
}
function StylistFilterBar({
  resourceViewEnabled,
  setResourceViewEnabled,
  staff,
  selectedStylists,
  setSelectedStylists,
  getDefaultStylistColor: getDefaultStylistColor2,
  setColorDialogStylist,
  makeLongPressProps
}) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Box,
    {
      sx: {
        px: { xs: 1, sm: 2 },
        py: 1,
        gap: 1,
        display: "flex",
        flexWrap: { xs: "nowrap", sm: "wrap" },
        overflowX: { xs: "auto", sm: "unset" },
        alignItems: "center",
        borderBottom: 1,
        borderColor: "divider",
        // Hide scrollbar track on mobile for a cleaner look
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" }
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: resourceViewEnabled ? "Disable stylist columns" : "Enable stylist columns", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          IconButton,
          {
            size: "small",
            color: resourceViewEnabled ? "primary" : "default",
            onClick: () => setResourceViewEnabled((v) => !v),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:columns-3-line" })
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Chip,
          {
            size: "small",
            label: "All",
            variant: selectedStylists.length === 0 ? "filled" : "outlined",
            color: selectedStylists.length === 0 ? "primary" : "default",
            disabled: !resourceViewEnabled,
            onClick: () => setSelectedStylists([])
          }
        ),
        staff.map((stylist) => {
          const isSelected2 = selectedStylists.some((s) => s.id === stylist.id);
          const initials = `${stylist.first_name?.[0] ?? ""}${stylist.last_name?.[0] ?? ""}`;
          const stylistColor = stylist.calendar_color || getDefaultStylistColor2(stylist.id);
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Chip,
            {
              size: "small",
              disabled: !resourceViewEnabled,
              label: isMobile ? stylist.first_name : `${stylist.first_name} ${stylist.last_name}`,
              variant: isSelected2 ? "filled" : "outlined",
              color: isSelected2 ? "primary" : "default",
              avatar: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Avatar,
                {
                  sx: {
                    bgcolor: `${stylistColor} !important`,
                    color: "#fff !important"
                  },
                  children: initials
                }
              ),
              onClick: () => setSelectedStylists(
                (prev2) => isSelected2 ? prev2.filter((s) => s.id !== stylist.id) : [...prev2, stylist]
              ),
              ...makeLongPressProps(() => setColorDialogStylist(stylist)),
              sx: { userSelect: "none" }
            },
            stylist.id
          );
        })
      ]
    }
  );
}
const DIAGONAL_STRIPE = (opacity = 0.15) => `
  repeating-linear-gradient(
    -45deg,
    transparent, transparent 6px,
     rgba(255, 255, 255, 0.15) 15px,
     rgba(255, 255, 255, 0.15) 8px
  )
`;
const CROSS_STRIPE = (opacity = 0.15) => `
  ${DIAGONAL_STRIPE(opacity)},
  repeating-linear-gradient(
    45deg,
    transparent, transparent 6px,
     rgba(255, 255, 255, 0.15) 15px,
    rgba(255, 255, 255, 0.15) 8px
  )
`;
const eventStyleGetter = (event, mode = "light", branchColor = null) => {
  if (event.isUnavailableZone) {
    return {
      style: {
        backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 4px, rgba(211,47,47,0.07) 4px, rgba(211,47,47,0.07) 8px)",
        backgroundColor: "rgba(211,47,47,0.05)",
        borderRadius: 0,
        color: "transparent",
        border: "none",
        padding: 0,
        pointerEvents: "none",
        zIndex: 0,
        cursor: "not-allowed"
      }
    };
  }
  if (event.isBufferZone) {
    const isDark = mode === "dark";
    return {
      style: {
        backgroundColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)",
        borderRadius: "4px",
        color: isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.35)",
        border: isDark ? "1px dashed rgba(255,255,255,0.2)" : "1px dashed rgba(0,0,0,0.18)",
        padding: 0,
        pointerEvents: "none",
        zIndex: 0
      }
    };
  }
  const status = event.extendedProps?.status;
  const isCancelled = status === "cancelled";
  const isNoShow = status === "no_show";
  const isCompleted = status === "completed";
  return {
    style: {
      backgroundColor: event.color,
      borderRadius: "6px",
      color: "white",
      border: "none",
      borderLeft: `${branchColor ? "8px" : "3px"} solid ${branchColor || event.stylistColor || "rgba(255,255,255,0.4)"}`,
      boxShadow: branchColor ? "inset 1px 0 0 0 rgba(255,255,255,0.85)" : "none",
      padding: 0,
      overflow: "hidden",
      ...isNoShow && {
        ...isNoShow && { backgroundImage: DIAGONAL_STRIPE(), textDecoration: "line-through" }
      },
      ...isCancelled && { backgroundImage: CROSS_STRIPE(), textDecoration: "line-through" },
      ...isCompleted && {
        filter: "brightness(0.9)"
      }
    }
  };
};
function CalendarFiltersResult({ filters, totalResults, sx, staff = [], branches = [] }) {
  const { state: currentFilters, setState: updateFilters, resetState: resetFilters } = filters;
  const handleRemoveColor = reactExports.useCallback(
    (inputValue) => {
      const newValue = currentFilters.colors.filter((item) => item !== inputValue);
      updateFilters({ colors: newValue });
    },
    [updateFilters, currentFilters.colors]
  );
  const handleRemoveDate = reactExports.useCallback(() => {
    updateFilters({ startDate: null, endDate: null });
  }, [updateFilters]);
  const handleRemoveClientName = reactExports.useCallback(() => {
    updateFilters({ clientName: "" });
  }, [updateFilters]);
  const handleRemoveStylist = reactExports.useCallback(
    (stylistId) => {
      const newValue = currentFilters.stylistIds.filter((id) => id !== stylistId);
      updateFilters({ stylistIds: newValue });
    },
    [updateFilters, currentFilters.stylistIds]
  );
  const handleRemoveBranch = reactExports.useCallback(
    (branchId) => {
      const newValue = currentFilters.branchIds.filter((id) => id !== branchId);
      updateFilters({ branchIds: newValue });
    },
    [updateFilters, currentFilters.branchIds]
  );
  const selectedStylists = staff.filter((s) => currentFilters.stylistIds.includes(s.id));
  const selectedBranches = branches.filter((b) => currentFilters.branchIds.includes(b.id));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FiltersResult, { totalResults, onReset: () => resetFilters(), sx, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FiltersBlock, { label: "Colors:", isShow: !!currentFilters.colors.length, children: currentFilters.colors.map((item) => /* @__PURE__ */ reactExports.createElement(
      Chip,
      {
        ...chipProps,
        key: item,
        label: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box,
          {
            sx: [
              (theme) => ({
                ml: -0.5,
                width: 18,
                height: 18,
                bgcolor: item,
                borderRadius: "50%",
                border: `solid 1px ${U(theme.vars.palette.common.whiteChannel, 0.24)}`
              })
            ]
          }
        ),
        onDelete: () => handleRemoveColor(item)
      }
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FiltersBlock,
      {
        label: "Date:",
        isShow: Boolean(currentFilters.startDate && currentFilters.endDate),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Chip,
          {
            ...chipProps,
            label: fDateRangeShortLabel(currentFilters.startDate, currentFilters.endDate),
            onDelete: handleRemoveDate
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FiltersBlock, { label: "Client:", isShow: !!currentFilters.clientName, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { ...chipProps, label: currentFilters.clientName, onDelete: handleRemoveClientName }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FiltersBlock, { label: "Stylist:", isShow: !!currentFilters.stylistIds.length, children: selectedStylists.map((stylist) => /* @__PURE__ */ reactExports.createElement(
      Chip,
      {
        ...chipProps,
        key: stylist.id,
        label: `${stylist.first_name} ${stylist.last_name}`,
        onDelete: () => handleRemoveStylist(stylist.id)
      }
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FiltersBlock, { label: "Branch:", isShow: !!currentFilters.branchIds.length, children: selectedBranches.map((branch) => /* @__PURE__ */ reactExports.createElement(
      Chip,
      {
        ...chipProps,
        key: branch.id,
        label: branch.name,
        onDelete: () => handleRemoveBranch(branch.id)
      }
    )) })
  ] });
}
const formatRange = (start, end) => `${format(start, "h:mm a")} – ${format(end, "h:mm a")}`;
function AgendaEventContent({ event }) {
  const { extendedProps, start } = event;
  const client = extendedProps?.client;
  const status = extendedProps?.status;
  const appointmentStylist = extendedProps?.stylist;
  const clientName = client ? `${client.first_name} ${client.last_name}` : "Unknown Client";
  const clientImportance = client?.client_importance || "normal";
  const birthdayWeek = isBirthdayThisWeek(client?.date_of_birth, start);
  const birthdayToday = isBirthdayToday(client?.date_of_birth, start);
  const serviceEvents = [...event.serviceEvents || []].sort((a, b) => a.start - b.start);
  const getStylistName = (service) => {
    const staff = service?.staff || (!service?.performed_by ? appointmentStylist : null);
    return staff ? `${staff.first_name} ${staff.last_name}` : "Unassigned";
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { py: 0.5 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", gap: 1, sx: { mb: 0.75 }, children: [
      clientImportance > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(ClientImportanceLabel, { clientImportance }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { sx: { fontSize: "0.95rem", fontWeight: 700, lineHeight: 1.3 }, children: clientName }),
      birthdayWeek && /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: birthdayToday ? "🎂 Birthday today!" : "🎂 Birthday this week!", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "noto:birthday-cake", width: 18 }) }),
      status && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box,
        {
          component: "span",
          sx: {
            px: 0.75,
            py: 0.125,
            borderRadius: 0.75,
            fontSize: "0.7rem",
            fontWeight: 600,
            textTransform: "capitalize",
            bgcolor: "rgba(0,0,0,0.2)"
          },
          children: status.replace(/_/g, " ")
        }
      )
    ] }),
    serviceEvents.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { sx: { fontSize: "0.8rem", opacity: 0.85 }, children: "No services" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        component: "ul",
        sx: { m: 0, p: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 0.5 },
        children: serviceEvents.map(({ service, start: serviceStart, end: serviceEnd, color }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Box,
          {
            component: "li",
            sx: {
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "140px minmax(0, 1fr) auto" },
              columnGap: 2,
              alignItems: "center",
              fontSize: "0.8rem"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { sx: { fontSize: "inherit", opacity: 0.8, whiteSpace: "nowrap" }, children: formatRange(serviceStart, serviceEnd) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { noWrap: true, sx: { fontSize: "inherit", fontWeight: 600 }, children: service?.service_name || "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", gap: 0.75, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Box,
                  {
                    sx: {
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      flexShrink: 0,
                      bgcolor: color,
                      border: "1.5px solid #fff"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { noWrap: true, sx: { fontSize: "inherit" }, children: getStylistName(service) })
              ] })
            ]
          },
          service?.id ?? serviceStart.getTime()
        ))
      }
    )
  ] });
}
function CalendarEventContentTooltip({
  clientName,
  timeRange,
  services,
  currentServiceId,
  clientImportance
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { maxWidth: 240 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box,
      {
        sx: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          gap: 1,
          mb: services.length > 0 ? 0.75 : 0
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", gap: 0.5, children: [
            clientImportance > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(ClientImportanceLabel, { clientImportance }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { sx: { fontSize: "0.78rem", fontWeight: 700, lineHeight: 1.3 }, children: clientName })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Typography,
            {
              sx: {
                fontSize: "0.68rem",
                opacity: 0.75,
                whiteSpace: "nowrap",
                lineHeight: 1.3
              },
              children: timeRange
            }
          )
        ]
      }
    ),
    services.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box,
      {
        sx: {
          borderTop: "1px solid rgba(255,255,255,0.15)",
          pt: 0.5,
          display: "flex",
          flexDirection: "column",
          gap: 0.25
        },
        children: [
          services.slice(0, 3).map((service, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Box,
            {
              sx: {
                display: "flex",
                justifyContent: "space-between",
                gap: 1
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Typography,
                  {
                    sx: {
                      fontSize: "0.68rem",
                      lineHeight: 1.4,
                      fontWeight: service.id === currentServiceId ? 700 : 400
                    },
                    children: service.service_name
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Typography,
                  {
                    sx: {
                      fontSize: "0.65rem",
                      opacity: 0.65,
                      lineHeight: 1.4,
                      whiteSpace: "nowrap"
                    },
                    children: [
                      service?.staff?.first_name,
                      " ",
                      service?.staff?.last_name
                    ]
                  }
                )
              ]
            },
            index
          )),
          services.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { sx: { fontSize: "0.65rem", opacity: 0.6, lineHeight: 1.4 }, children: [
            "+",
            services.length - 3,
            " more"
          ] })
        ]
      }
    )
  ] });
}
function CalendarEventContent({ event }) {
  const { extendedProps, start, end } = event;
  const services = extendedProps?.services || [];
  const client = extendedProps?.client;
  const status = extendedProps?.status;
  const timeRange = start && end ? `${format(start, "h:mm a")} – ${format(end, "h:mm a")}` : start ? format(start, "h:mm a") : "";
  const clientName = client ? `${client.first_name} ${client.last_name}` : "Unknown Client";
  const currentService = extendedProps?.currentService;
  const currentServiceIndex = currentService ? services.findIndex((service) => service.id === currentService.id) : -1;
  let serviceName;
  let serviceMeta = null;
  if (currentService) {
    serviceName = currentService.service_name;
    if (services.length > 1 && currentServiceIndex >= 0) {
      serviceMeta = `${currentServiceIndex + 1}/${services.length}`;
    }
  } else {
    serviceName = services[0]?.service_name || "—";
    if (services.length > 1) serviceMeta = `+${services.length - 1} more`;
  }
  const clientImportance = client?.client_importance || "normal";
  const birthdayWeek = isBirthdayThisWeek(client?.date_of_birth, start);
  const birthdayToday = isBirthdayToday(client?.date_of_birth, start);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Tooltip,
    {
      title: /* @__PURE__ */ jsxRuntimeExports.jsx(
        CalendarEventContentTooltip,
        {
          clientName,
          timeRange,
          services,
          currentServiceId: currentService?.id,
          clientImportance
        }
      ),
      placement: "top",
      arrow: true,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Box,
        {
          sx: {
            px: 0.75,
            pt: 0.5,
            height: "100%",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            gap: 0.125
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", gap: 0.5, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Typography,
                {
                  noWrap: true,
                  sx: {
                    fontSize: "0.65rem",
                    opacity: 0.8,
                    lineHeight: 1.4,
                    fontWeight: 500,
                    fontVariantNumeric: "tabular-nums"
                  },
                  children: timeRange
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", alignItems: "center", gap: 0.25, children: [
                birthdayWeek && /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: birthdayToday ? "🎂 Birthday today!" : "🎂 Birthday this week!", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Iconify,
                  {
                    icon: "noto:birthday-cake",
                    width: 18,
                    sx: { flexShrink: 0, filter: "drop-shadow(0 0 2px rgba(0,0,0,0.35))" }
                  }
                ) }),
                clientImportance > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(ClientImportanceLabel, { clientImportance })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Typography,
              {
                noWrap: true,
                sx: { fontSize: "0.78rem", fontWeight: 700, lineHeight: 1.25, letterSpacing: "0.01em" },
                children: clientName
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { noWrap: true, sx: { fontSize: "0.72rem", fontWeight: 600, lineHeight: 1.3 }, children: [
              serviceName,
              serviceMeta && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Box,
                {
                  component: "span",
                  sx: { ml: 0.5, fontWeight: 500, opacity: 0.7, fontVariantNumeric: "tabular-nums" },
                  children: serviceMeta
                }
              )
            ] }),
            status && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Typography,
              {
                noWrap: true,
                sx: {
                  mt: 0.25,
                  fontSize: "0.6rem",
                  fontWeight: 600,
                  lineHeight: 1.3,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  opacity: 0.7
                },
                children: status.replace(/_/g, " ")
              }
            )
          ]
        }
      )
    }
  );
}
function BufferZoneEventRenderer({ event, mode = "light" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Box,
    {
      sx: {
        px: 0.5,
        py: 0.25,
        height: "100%",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        pointerEvents: "none"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Typography,
        {
          noWrap: true,
          sx: {
            fontSize: "0.6rem",
            color: mode === "dark" ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.35)",
            lineHeight: 1.2,
            fontStyle: "italic"
          },
          children: [
            "Travel buffer · ",
            event.bufferBranchName
          ]
        }
      )
    }
  );
}
const groupLabel = Object.fromEntries(SERVICE_GROUPS.map((g) => [g.value, g.label]));
function ServicePanel({
  branchId,
  selectedService,
  onServiceSelect,
  onServiceDragStart,
  onServiceDragEnd,
  clientNotes,
  internalNotes,
  specialRequests,
  onNotesChange
}) {
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [activeGroup, setActiveGroup] = reactExports.useState("all");
  const [notesOpen, setNotesOpen] = reactExports.useState(false);
  const { services: servicesData, servicesLoading } = useGetServices({
    pageSize: 1e3,
    filters: { isActive: true },
    branchId
  });
  const services = servicesData.map((s) => ({
    id: s.id,
    service_id: s.id,
    service_name: s.service_name,
    category: s.category,
    service_group: s.service_group || s.category || "Other",
    duration_minutes: s.duration_minutes || 60,
    price: s.senior_price || s.junior_price || s.prive_price || 0
  }));
  const groups = ["all", ...new Set(services.map((s) => s.service_group))];
  const filtered = services.filter((s) => {
    const matchesSearch = s.service_name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGroup = activeGroup === "all" || s.service_group === activeGroup;
    return matchesSearch && matchesGroup;
  });
  const grouped = filtered.reduce((acc, svc) => {
    const g = svc.service_group;
    if (!acc[g]) acc[g] = [];
    acc[g].push(svc);
    return acc;
  }, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Box,
    {
      sx: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { p: 1.5, borderBottom: 1, borderColor: "divider" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Typography,
            {
              variant: "overline",
              sx: { color: "text.disabled", mb: 1, display: "block", lineHeight: 1 },
              children: "Services"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextField,
            {
              size: "small",
              fullWidth: true,
              placeholder: "Search services...",
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value),
              InputProps: {
                startAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:search-fill", width: 16, sx: { color: "text.disabled" } }) })
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box,
          {
            sx: {
              px: 1.5,
              py: 1,
              display: "flex",
              gap: 0.5,
              flexWrap: "wrap",
              borderBottom: 1,
              borderColor: "divider"
            },
            children: groups.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Chip,
              {
                size: "small",
                label: g === "all" ? "All" : groupLabel[g] ?? g,
                variant: activeGroup === g ? "filled" : "outlined",
                color: activeGroup === g ? "primary" : "default",
                onClick: () => setActiveGroup(g),
                sx: { fontSize: "0.68rem", height: 22 }
              },
              g
            ))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { flex: 1, overflowY: "auto", px: 1, py: 0.5 }, children: [
          servicesLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { display: "flex", justifyContent: "center", py: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 24 }) }),
          !servicesLoading && Object.entries(grouped).map(([group, groupServices]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { mb: 1.5, mt: 1 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Typography,
              {
                variant: "caption",
                sx: {
                  color: "text.disabled",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                  px: 0.5,
                  display: "block",
                  mb: 0.5
                },
                children: groupLabel[group] ?? group
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 0.5, children: groupServices.map((svc) => {
              const isSelected2 = selectedService?.id === svc.id;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                Tooltip,
                {
                  title: "Drag onto the calendar, or click to select then click a time slot",
                  placement: "right",
                  enterDelay: 600,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Box,
                    {
                      draggable: true,
                      onDragStart: (e) => {
                        e.dataTransfer.setData("text/plain", svc.service_name);
                        onServiceDragStart(svc);
                      },
                      onDragEnd: () => onServiceDragEnd?.(),
                      onClick: () => onServiceSelect(isSelected2 ? null : svc),
                      sx: {
                        px: 1.25,
                        py: 0.75,
                        borderRadius: 1,
                        cursor: "grab",
                        border: "1px solid",
                        borderColor: isSelected2 ? "primary.main" : "divider",
                        bgcolor: isSelected2 ? "primary.lighter" : "background.paper",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 1,
                        transition: "all 0.15s",
                        "&:hover": {
                          borderColor: "primary.light",
                          bgcolor: isSelected2 ? "primary.lighter" : "action.hover"
                        },
                        "&:active": { cursor: "grabbing" }
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { minWidth: 0 }, children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Typography,
                            {
                              noWrap: true,
                              variant: "body2",
                              sx: {
                                fontWeight: 600,
                                fontSize: "0.78rem",
                                color: isSelected2 ? "primary.main" : "text.primary"
                              },
                              children: svc.service_name
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            Typography,
                            {
                              variant: "caption",
                              sx: { color: "text.secondary", fontSize: "0.7rem" },
                              children: [
                                svc.duration_minutes >= 60 ? `${Math.floor(svc.duration_minutes / 60)}h${svc.duration_minutes % 60 > 0 ? ` ${svc.duration_minutes % 60}m` : ""}` : `${svc.duration_minutes}m`,
                                svc.price > 0 ? ` · $${svc.price}` : ""
                              ]
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Iconify,
                          {
                            icon: "mingcute:drag-line",
                            width: 14,
                            sx: { color: "text.disabled", flexShrink: 0 }
                          }
                        )
                      ]
                    }
                  )
                },
                svc.id
              );
            }) })
          ] }, group)),
          !servicesLoading && filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Typography,
            {
              variant: "body2",
              color: "text.disabled",
              textAlign: "center",
              sx: { py: 4, fontSize: "0.8rem" },
              children: "No services found"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { borderTop: 1, borderColor: "divider" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Box,
            {
              onClick: () => setNotesOpen((v) => !v),
              sx: {
                px: 1.5,
                py: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
                "&:hover": { bgcolor: "action.hover" }
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { fontWeight: 600, color: "text.secondary" }, children: "Notes" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Iconify,
                  {
                    icon: notesOpen ? "eva:chevron-up-fill" : "eva:chevron-down-fill",
                    width: 16,
                    sx: { color: "text.secondary" }
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Collapse, { in: notesOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { px: 1.5, pb: 1.5, display: "flex", flexDirection: "column", gap: 1 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextField,
              {
                size: "small",
                label: "Client notes",
                multiline: true,
                rows: 2,
                fullWidth: true,
                value: clientNotes,
                onChange: (e) => onNotesChange("clientNotes", e.target.value)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextField,
              {
                size: "small",
                label: "Internal notes",
                multiline: true,
                rows: 2,
                fullWidth: true,
                value: internalNotes,
                onChange: (e) => onNotesChange("internalNotes", e.target.value)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextField,
              {
                size: "small",
                label: "Special requests",
                multiline: true,
                rows: 2,
                fullWidth: true,
                value: specialRequests,
                onChange: (e) => onNotesChange("specialRequests", e.target.value)
              }
            )
          ] }) })
        ] })
      ]
    }
  );
}
ServicePanel.propTypes = {
  branchId: o.string,
  selectedService: o.object,
  onServiceSelect: o.func.isRequired,
  onServiceDragStart: o.func.isRequired,
  onServiceDragEnd: o.func,
  clientNotes: o.string,
  internalNotes: o.string,
  specialRequests: o.string,
  onNotesChange: o.func.isRequired
};
const STORAGE_KEY = "calendarDefaultNewAppointmentBranchId";
const EVENT_NAME = "calendarDefaultNewAppointmentBranchChange";
function useDefaultNewAppointmentBranch() {
  const [branchId, setBranchIdState] = reactExports.useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored !== null && stored !== "" ? stored : null;
  });
  reactExports.useEffect(() => {
    const handler = (e) => {
      setBranchIdState(e.detail ?? null);
    };
    window.addEventListener(EVENT_NAME, handler);
    return () => window.removeEventListener(EVENT_NAME, handler);
  }, []);
  const setBranchId = reactExports.useCallback((value) => {
    const normalized = value ?? null;
    localStorage.setItem(STORAGE_KEY, normalized ?? "");
    setBranchIdState(normalized);
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: normalized }));
  }, []);
  return [branchId, setBranchId];
}
const DAY_NAMES = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const CALENDAR_MIN_TIME = "07:00";
const CALENDAR_MAX_TIME = "23:00";
function useUnavailabilityEvents({
  resources,
  schedulesByStaff,
  exceptionsByStaff,
  currentDate,
  calendarView
}) {
  return reactExports.useMemo(() => {
    if (!resources.length || !Object.keys(schedulesByStaff).length) return [];
    let dates2;
    if (calendarView === "day") {
      dates2 = [currentDate];
    } else {
      const weekStart = startOfWeek(currentDate);
      dates2 = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));
    }
    const events = [];
    dates2.forEach((date2) => {
      const dayName = DAY_NAMES[date2.getDay()];
      const dateStr = format(date2, "yyyy-MM-dd");
      const dayStart = /* @__PURE__ */ new Date(`${dateStr}T${CALENDAR_MIN_TIME}:00`);
      const dayEnd = /* @__PURE__ */ new Date(`${dateStr}T${CALENDAR_MAX_TIME}:00`);
      resources.forEach((resource) => {
        const staffSchedules = schedulesByStaff[resource.id];
        if (!staffSchedules) return;
        const daySchedule = staffSchedules.find((s) => s.day_of_week === dayName);
        if (!daySchedule) {
          events.push({
            id: `unavail-allday-${resource.id}-${dateStr}`,
            title: "Not Working",
            start: dayStart,
            end: dayEnd,
            resourceId: resource.id,
            isUnavailableZone: true
          });
        } else {
          const workStart = daySchedule.start_time.slice(0, 5);
          const workEnd = daySchedule.end_time.slice(0, 5);
          if (workStart > CALENDAR_MIN_TIME) {
            events.push({
              id: `unavail-before-${resource.id}-${dateStr}`,
              title: "Not Working",
              start: dayStart,
              end: /* @__PURE__ */ new Date(`${dateStr}T${workStart}:00`),
              resourceId: resource.id,
              isUnavailableZone: true
            });
          }
          if (workEnd < CALENDAR_MAX_TIME) {
            events.push({
              id: `unavail-after-${resource.id}-${dateStr}`,
              title: "Not Working",
              start: /* @__PURE__ */ new Date(`${dateStr}T${workEnd}:00`),
              end: dayEnd,
              resourceId: resource.id,
              isUnavailableZone: true
            });
          }
        }
        const exceptions = exceptionsByStaff?.[resource.id] ?? [];
        exceptions.forEach((exc, idx) => {
          const excStart = new Date(exc.start_datetime);
          const excEnd = new Date(exc.end_datetime);
          const blockStart = excStart < dayStart ? dayStart : excStart;
          const blockEnd = excEnd > dayEnd ? dayEnd : excEnd;
          if (exc.is_all_day) {
            const excDate = format(excStart, "yyyy-MM-dd");
            const excEndDate = format(excEnd, "yyyy-MM-dd");
            if (dateStr < excDate || dateStr > excEndDate) return;
            events.push({
              id: `timeoff-allday-${resource.id}-${dateStr}-${idx}`,
              title: "Time Off",
              start: dayStart,
              end: dayEnd,
              resourceId: resource.id,
              isUnavailableZone: true
            });
          } else {
            if (blockStart >= blockEnd) return;
            events.push({
              id: `timeoff-${resource.id}-${dateStr}-${idx}`,
              title: "Time Off",
              start: blockStart,
              end: blockEnd,
              resourceId: resource.id,
              isUnavailableZone: true
            });
          }
        });
      });
    });
    return events;
  }, [schedulesByStaff, exceptionsByStaff, currentDate, calendarView, resources]);
}
function checkScheduleAvailability(stylistId, date2, startTime, endTime, schedulesByStaff, exceptionsByStaff = {}) {
  if (!stylistId) return { available: true };
  const staffSchedules = schedulesByStaff[stylistId];
  if (!staffSchedules) return { available: true };
  const dayName = DAY_NAMES[(/* @__PURE__ */ new Date(`${date2}T12:00:00`)).getDay()];
  const daySchedule = staffSchedules.find((s) => s.day_of_week === dayName);
  if (!daySchedule) {
    return { available: false, reason: "not_working_day" };
  }
  const workStart = daySchedule.start_time.slice(0, 5);
  const workEnd = daySchedule.end_time.slice(0, 5);
  if (startTime < workStart || endTime > workEnd) {
    return { available: false, reason: "outside_hours", workStart, workEnd };
  }
  const exceptions = exceptionsByStaff?.[stylistId] ?? [];
  const apptStart = (/* @__PURE__ */ new Date(`${date2}T${startTime}:00`)).getTime();
  const apptEnd = (/* @__PURE__ */ new Date(`${date2}T${endTime}:00`)).getTime();
  for (const exc of exceptions) {
    let excStart;
    let excEnd;
    if (exc.is_all_day) {
      excStart = (/* @__PURE__ */ new Date(`${date2}T00:00:00`)).getTime();
      excEnd = (/* @__PURE__ */ new Date(`${date2}T23:59:59`)).getTime();
    } else {
      excStart = new Date(exc.start_datetime).getTime();
      excEnd = new Date(exc.end_datetime).getTime();
    }
    if (apptStart < excEnd && apptEnd > excStart) {
      return { available: false, reason: "time_off" };
    }
  }
  return { available: true };
}
const localizer = dateFnsLocalizer({
  format,
  startOfWeek,
  getDay,
  locales: { "en-US": enUS }
});
const DnDCalendar$1 = withDragAndDrop(Calendar_default);
function DnDAppointmentQuickBookDialog({ open, onClose }) {
  const { colorScheme } = useColorScheme();
  const mode = colorScheme ?? "light";
  const [currentDate, setCurrentDate] = reactExports.useState(/* @__PURE__ */ new Date());
  const [calendarView, setCalendarView] = reactExports.useState("day");
  const [pendingSlots, setPendingSlots] = reactExports.useState([]);
  const [selectedService, setSelectedService] = reactExports.useState(null);
  const [selectedClient, setSelectedClient] = reactExports.useState(null);
  const [selectedStylists, setSelectedStylists] = reactExports.useState([]);
  const [quickAddOpen, setQuickAddOpen] = reactExports.useState(false);
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [zoomLevel, setZoomLevel] = reactExports.useState(() => {
    const stored = localStorage.getItem("stylistCalendarZoomLevel");
    return stored !== null ? Number(stored) : 3;
  });
  const [hZoomLevel, setHZoomLevel] = reactExports.useState(() => {
    const stored = localStorage.getItem("stylistCalendarHZoomLevel");
    return stored !== null ? Number(stored) : 2;
  });
  const [datePickerAnchor, setDatePickerAnchor] = reactExports.useState(null);
  const [crossBranchBufferMinutes, setCrossBranchBufferMinutes] = reactExports.useState(() => {
    const stored = localStorage.getItem("crossBranchBufferMinutes");
    return stored !== null ? Number(stored) : DEFAULT_CROSS_BRANCH_BUFFER_MINUTES;
  });
  const [crossBranchWarning, setCrossBranchWarning] = reactExports.useState(null);
  const [notes, setNotes] = reactExports.useState({
    clientNotes: "",
    internalNotes: "",
    specialRequests: ""
  });
  const draggingServiceRef = reactExports.useRef(null);
  const [draggingService, setDraggingService] = reactExports.useState(null);
  const [overlapConfirm, setOverlapConfirm] = reactExports.useState(null);
  const [unavailabilityWarning, setUnavailabilityWarning] = reactExports.useState(null);
  const {
    branchesOnly: branches,
    primaryBranch,
    hasMultipleBranchesOnly: hasMultipleBranches
  } = useUserBranches();
  const [branchId, setBranchId] = useSharedBranchId();
  const [defaultNewAppointmentBranchId, setDefaultNewAppointmentBranchId] = useDefaultNewAppointmentBranch();
  const isAllBranches = branchId === "all";
  const effectiveBranchId = isAllBranches ? null : branchId || primaryBranch?.id;
  const { staff } = useStaffData(effectiveBranchId, {
    branchIds: isAllBranches ? branches.map((b) => b.id) : void 0
  });
  const { branches: allBranchesWithColors } = useAllBranches();
  const branchColorMap = reactExports.useMemo(
    () => Object.fromEntries(
      branches.map((branch, i) => {
        const full = allBranchesWithColors.find((b) => b.id === branch.id);
        return [
          branch.id,
          full?.calendar_color || STYLIST_CALENDAR_COLORS[i % STYLIST_CALENDAR_COLORS.length]
        ];
      })
    ),
    [branches, allBranchesWithColors]
  );
  const step = ZOOM_STEPS[zoomLevel - 1];
  const colWidth = H_ZOOM_STEPS[hZoomLevel - 1];
  const DIALOG_GUTTER_WIDTH = 60;
  const now = dayjs(currentDate);
  const { appointments } = useAppointments({
    branchId: effectiveBranchId,
    startDate: now.startOf("month"),
    endDate: now.endOf("month"),
    enabled: open
  });
  const existingEvents = transformAppointmentsForCalendar(appointments);
  const scheduleRangeStart = now.startOf("month").toISOString();
  const scheduleRangeEnd = now.endOf("month").toISOString();
  const { schedulesByStaff, exceptionsByStaff } = useStaffSchedules(
    effectiveBranchId,
    scheduleRangeStart,
    scheduleRangeEnd,
    open
  );
  const pendingEvents = pendingSlots.map((slot) => ({
    id: slot.id,
    title: slot.service.service_name,
    start: /* @__PURE__ */ new Date(`${slot.date}T${slot.startTime}`),
    end: /* @__PURE__ */ new Date(`${slot.date}T${slot.endTime}`),
    color: PENDING_COLOR,
    resourceId: slot.stylistId,
    isPending: true,
    slotId: slot.id
  }));
  const bufferEvents = useBufferEvents({
    events: existingEvents,
    currentBranchId: effectiveBranchId,
    branches,
    bufferMinutes: crossBranchBufferMinutes,
    hasMultipleBranches
  });
  const resources = selectedStylists.length > 0 ? selectedStylists.map((s) => ({ id: s.id, title: s.display_name })) : staff.map((s) => ({ id: s.id, title: s.display_name }));
  const unavailabilityEvents = useUnavailabilityEvents({
    resources,
    schedulesByStaff,
    exceptionsByStaff,
    currentDate,
    calendarView
  });
  const allEvents = [...existingEvents, ...bufferEvents, ...unavailabilityEvents, ...pendingEvents];
  const dialogNumColumns = calendarView === "week" ? 7 : resources.length || 1;
  const dialogCalendarWidth = DIALOG_GUTTER_WIDTH + colWidth * dialogNumColumns;
  const hasOverlap = reactExports.useCallback(
    (date2, startTime, endTime, stylistId, excludeSlotId = null) => {
      const newStart = (/* @__PURE__ */ new Date(`${date2}T${startTime}`)).getTime();
      const newEnd = (/* @__PURE__ */ new Date(`${date2}T${endTime}`)).getTime();
      const existingOverlap = existingEvents.some((evt) => {
        if (stylistId && evt.resourceId !== stylistId) return false;
        if (evt.extendedProps?.status === "canceled") return false;
        return newStart < evt.end.getTime() && newEnd > evt.start.getTime();
      });
      if (existingOverlap) return true;
      return pendingSlots.some((slot) => {
        if (slot.id === excludeSlotId) return false;
        if (stylistId && slot.stylistId && slot.stylistId !== stylistId) return false;
        const slotStart = (/* @__PURE__ */ new Date(`${slot.date}T${slot.startTime}`)).getTime();
        const slotEnd = (/* @__PURE__ */ new Date(`${slot.date}T${slot.endTime}`)).getTime();
        return newStart < slotEnd && newEnd > slotStart;
      });
    },
    [existingEvents, pendingSlots]
  );
  const confirmOverlap = reactExports.useCallback(
    (slot) => new Promise((resolve) => {
      setOverlapConfirm({ slot, resolve });
    }),
    []
  );
  const confirmUnavailability = reactExports.useCallback(
    (message2) => new Promise((resolve) => {
      setUnavailabilityWarning({ message: message2, resolve });
    }),
    []
  );
  const hasCrossBranchConflict = reactExports.useCallback(
    (date2, startTime, endTime, stylistId) => {
      if (!hasMultipleBranches || !stylistId) return null;
      const newStart = (/* @__PURE__ */ new Date(`${date2}T${startTime}`)).getTime();
      const newEnd = (/* @__PURE__ */ new Date(`${date2}T${endTime}`)).getTime();
      const bufferMs = crossBranchBufferMinutes * 60 * 1e3;
      for (const evt of existingEvents) {
        if (evt.resourceId !== stylistId) continue;
        const status = evt.extendedProps?.status;
        if (status === "cancelled" || status === "canceled") continue;
        const evtBranchId = evt.extendedProps?.branch_id;
        if (evtBranchId === effectiveBranchId) continue;
        const evtStart = evt.start.getTime();
        const evtEnd = evt.end.getTime();
        let gapMs;
        if (newStart >= evtEnd) {
          gapMs = newStart - evtEnd;
        } else if (evtStart >= newEnd) {
          gapMs = evtStart - newEnd;
        } else {
          gapMs = 0;
        }
        if (gapMs < bufferMs) {
          const otherBranch = branches.find((b) => b.id === evtBranchId);
          const stylistObj = staff.find((s) => s.id === stylistId);
          return {
            stylistName: stylistObj?.display_name ?? "This stylist",
            branchName: otherBranch?.name ?? "another branch",
            evtStart: evt.start,
            evtEnd: evt.end,
            gapMinutes: Math.round(gapMs / 6e4)
          };
        }
      }
      return null;
    },
    [
      existingEvents,
      hasMultipleBranches,
      effectiveBranchId,
      crossBranchBufferMinutes,
      branches,
      staff
    ]
  );
  const confirmCrossBranch = reactExports.useCallback(
    (conflictInfo) => new Promise((resolve) => {
      setCrossBranchWarning({ conflictInfo, resolve });
    }),
    []
  );
  const handleServiceDragStart = reactExports.useCallback((svc) => {
    draggingServiceRef.current = svc;
    setDraggingService(svc);
  }, []);
  const handleServiceDragEnd = reactExports.useCallback(() => {
    setDraggingService(null);
  }, []);
  const activeService = selectedService || draggingService;
  const capableStylistIds = reactExports.useMemo(() => {
    if (!activeService) return null;
    const svcId = activeService.service_id ?? activeService.id;
    return new Set(
      staff.filter((s) => s.services?.some((sv) => sv.service_id === svcId || sv.id === svcId)).map((s) => s.id)
    );
  }, [activeService, staff]);
  const dragFromOutsideItem = reactExports.useCallback(() => {
    const svc = draggingServiceRef.current;
    const duration2 = svc?.duration_minutes || 60;
    const start = /* @__PURE__ */ new Date();
    const end = new Date(start.getTime() + duration2 * 6e4);
    return {
      title: svc?.service_name || "Service",
      start,
      end
    };
  }, []);
  const handleDropFromOutside = reactExports.useCallback(
    async ({ start, resource }) => {
      const svc = draggingServiceRef.current;
      if (!svc) return;
      draggingServiceRef.current = null;
      const date2 = format(start, "yyyy-MM-dd");
      const startTime = format(start, "HH:mm");
      const endDate = new Date(start.getTime() + (svc.duration_minutes || 60) * 6e4);
      const endTime = format(endDate, "HH:mm");
      const stylistId = resource ?? null;
      const newSlot = {
        id: `pending-${Date.now()}-${Math.random().toString(36).slice(2)}`,
        service: svc,
        stylistId,
        date: date2,
        startTime,
        endTime
      };
      if (hasOverlap(date2, startTime, endTime, stylistId)) {
        const proceed = await confirmOverlap(newSlot);
        if (!proceed) return;
      }
      const scheduleCheck = checkScheduleAvailability(
        stylistId,
        date2,
        startTime,
        endTime,
        schedulesByStaff,
        exceptionsByStaff
      );
      if (!scheduleCheck.available) {
        const stylistName = staff.find((s) => s.id === stylistId)?.display_name ?? "This stylist";
        const msg = scheduleCheck.reason === "not_working_day" ? `${stylistName} is not scheduled to work on this day.` : scheduleCheck.reason === "time_off" ? `${stylistName} has approved time off during this period.` : `${stylistName} works from ${scheduleCheck.workStart} to ${scheduleCheck.workEnd}. This time is outside their working hours.`;
        const proceed = await confirmUnavailability(msg);
        if (!proceed) return;
      }
      const crossBranchConflict = hasCrossBranchConflict(date2, startTime, endTime, stylistId);
      if (crossBranchConflict) {
        const proceed = await confirmCrossBranch(crossBranchConflict);
        if (!proceed) return;
      }
      setPendingSlots((prev2) => [...prev2, newSlot]);
      setSelectedService(null);
      setDraggingService(null);
    },
    [
      hasOverlap,
      confirmOverlap,
      schedulesByStaff,
      exceptionsByStaff,
      staff,
      confirmUnavailability,
      hasCrossBranchConflict,
      confirmCrossBranch
    ]
  );
  const handleSelectSlot = reactExports.useCallback(
    async ({ start, resourceId }) => {
      if (!selectedService) return;
      const date2 = format(start, "yyyy-MM-dd");
      const startTime = format(start, "HH:mm");
      const endDate = new Date(start.getTime() + (selectedService.duration_minutes || 60) * 6e4);
      const endTime = format(endDate, "HH:mm");
      const stylistId = resourceId ?? null;
      const newSlot = {
        id: `pending-${Date.now()}-${Math.random().toString(36).slice(2)}`,
        service: selectedService,
        stylistId,
        date: date2,
        startTime,
        endTime
      };
      if (hasOverlap(date2, startTime, endTime, stylistId)) {
        const proceed = await confirmOverlap(newSlot);
        if (!proceed) return;
      }
      const scheduleCheck = checkScheduleAvailability(
        stylistId,
        date2,
        startTime,
        endTime,
        schedulesByStaff,
        exceptionsByStaff
      );
      if (!scheduleCheck.available) {
        const stylistName = staff.find((s) => s.id === stylistId)?.display_name ?? "This stylist";
        const msg = scheduleCheck.reason === "not_working_day" ? `${stylistName} is not scheduled to work on this day.` : scheduleCheck.reason === "time_off" ? `${stylistName} has approved time off during this period.` : `${stylistName} works from ${scheduleCheck.workStart} to ${scheduleCheck.workEnd}. This time is outside their working hours.`;
        const proceed = await confirmUnavailability(msg);
        if (!proceed) return;
      }
      const crossBranchConflict = hasCrossBranchConflict(date2, startTime, endTime, stylistId);
      if (crossBranchConflict) {
        const proceed = await confirmCrossBranch(crossBranchConflict);
        if (!proceed) return;
      }
      setPendingSlots((prev2) => [...prev2, newSlot]);
      setSelectedService(null);
    },
    [
      selectedService,
      hasOverlap,
      confirmOverlap,
      schedulesByStaff,
      exceptionsByStaff,
      staff,
      confirmUnavailability,
      hasCrossBranchConflict,
      confirmCrossBranch
    ]
  );
  const handleEventDrop = reactExports.useCallback(
    async ({ event, start, end, resourceId }) => {
      if (!event.isPending) return;
      const date2 = format(start, "yyyy-MM-dd");
      const startTime = format(start, "HH:mm");
      const endTime = format(end, "HH:mm");
      const stylistId = resourceId ?? event.resourceId ?? null;
      if (hasOverlap(date2, startTime, endTime, stylistId, event.slotId)) {
        const proceed = await confirmOverlap(null);
        if (!proceed) return;
      }
      const scheduleCheck = checkScheduleAvailability(
        stylistId,
        date2,
        startTime,
        endTime,
        schedulesByStaff,
        exceptionsByStaff
      );
      if (!scheduleCheck.available) {
        const stylistName = staff.find((s) => s.id === stylistId)?.display_name ?? "This stylist";
        const msg = scheduleCheck.reason === "not_working_day" ? `${stylistName} is not scheduled to work on this day.` : scheduleCheck.reason === "time_off" ? `${stylistName} has approved time off during this period.` : `${stylistName} works from ${scheduleCheck.workStart} to ${scheduleCheck.workEnd}. This time is outside their working hours.`;
        const proceed = await confirmUnavailability(msg);
        if (!proceed) return;
      }
      const crossBranchConflict = hasCrossBranchConflict(date2, startTime, endTime, stylistId);
      if (crossBranchConflict) {
        const proceed = await confirmCrossBranch(crossBranchConflict);
        if (!proceed) return;
      }
      setPendingSlots(
        (prev2) => prev2.map(
          (slot) => slot.id === event.slotId ? { ...slot, date: date2, startTime, endTime, stylistId } : slot
        )
      );
    },
    [
      hasOverlap,
      confirmOverlap,
      schedulesByStaff,
      exceptionsByStaff,
      staff,
      confirmUnavailability,
      hasCrossBranchConflict,
      confirmCrossBranch
    ]
  );
  const handleEventResize = reactExports.useCallback(
    async ({ event, start, end }) => {
      if (!event.isPending) return;
      const date2 = format(start, "yyyy-MM-dd");
      const startTime = format(start, "HH:mm");
      const endTime = format(end, "HH:mm");
      const stylistId = event.resourceId ?? null;
      if (hasOverlap(date2, startTime, endTime, stylistId, event.slotId)) {
        const proceed = await confirmOverlap(null);
        if (!proceed) return;
      }
      const crossBranchConflict = hasCrossBranchConflict(date2, startTime, endTime, stylistId);
      if (crossBranchConflict) {
        const proceed = await confirmCrossBranch(crossBranchConflict);
        if (!proceed) return;
      }
      setPendingSlots(
        (prev2) => prev2.map(
          (slot) => slot.id === event.slotId ? { ...slot, date: date2, startTime, endTime } : slot
        )
      );
    },
    [hasOverlap, confirmOverlap, hasCrossBranchConflict, confirmCrossBranch]
  );
  const removePendingSlot = (slotId) => {
    setPendingSlots((prev2) => prev2.filter((s) => s.id !== slotId));
  };
  const eventPropGetter = reactExports.useCallback(
    (event) => {
      if (event.isUnavailableZone) {
        return {
          style: {
            backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 4px, rgba(211,47,47,0.07) 4px, rgba(211,47,47,0.07) 8px)",
            backgroundColor: "rgba(211,47,47,0.05)",
            borderRadius: 0,
            color: "transparent",
            border: "none",
            padding: 0,
            pointerEvents: "none",
            zIndex: 0,
            cursor: "not-allowed"
          }
        };
      }
      if (event.isBufferZone) {
        return {
          style: {
            backgroundColor: "rgba(0,0,0,0.07)",
            borderRadius: "4px",
            color: "rgba(0,0,0,0.35)",
            border: "1px dashed rgba(0,0,0,0.18)",
            padding: 0,
            pointerEvents: "none",
            zIndex: 0
          }
        };
      }
      if (event.isPending) {
        return {
          style: {
            backgroundColor: "rgba(255, 112, 67, 0.12)",
            borderRadius: "6px",
            color: "#bf360c",
            border: `2px dashed ${PENDING_COLOR}`,
            padding: "2px 6px",
            fontWeight: 600
          }
        };
      }
      return {
        style: {
          backgroundColor: event.color,
          borderRadius: "6px",
          color: "white",
          border: "none",
          borderLeft: `${branchColorMap[event.extendedProps?.branch_id] ? "8px" : "3px"} solid ${branchColorMap[event.extendedProps?.branch_id] || "rgba(255,255,255,0.35)"}`,
          boxShadow: branchColorMap[event.extendedProps?.branch_id] ? "inset 3px 0 0 0 rgba(255,255,255,0.85)" : "none",
          padding: 0,
          overflow: "hidden"
        }
      };
    },
    [branchColorMap]
  );
  const handleNotesChange = reactExports.useCallback((field, value) => {
    setNotes((prev2) => ({ ...prev2, [field]: value }));
  }, []);
  const handleNavigate = (action) => {
    const d = new Date(currentDate);
    if (action === "today") {
      setCurrentDate(/* @__PURE__ */ new Date());
      return;
    }
    const delta = calendarView === "day" ? 1 : 7;
    if (action === "prev") d.setDate(d.getDate() - delta);
    if (action === "next") d.setDate(d.getDate() + delta);
    setCurrentDate(d);
  };
  const dateLabel = calendarView === "day" ? format(currentDate, "EEE, MMM d, yyyy") : (() => {
    const weekStart = new Date(currentDate);
    weekStart.setDate(currentDate.getDate() - currentDate.getDay());
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);
    return `${format(weekStart, "MMM d")} – ${format(weekEnd, "MMM d, yyyy")}`;
  })();
  const handleSubmit = async () => {
    if (!selectedClient) {
      toast.error("Please select a client");
      return;
    }
    if (pendingSlots.length === 0) {
      toast.error("Drag or click a service onto the calendar to add it");
      return;
    }
    setIsSubmitting(true);
    reactExports.startTransition(async () => {
      try {
        const sorted = [...pendingSlots].sort(
          (a, b) => `${a.date}T${a.startTime}`.localeCompare(`${b.date}T${b.startTime}`)
        );
        const first = sorted[0];
        const last = sorted[sorted.length - 1];
        const totalDuration2 = pendingSlots.reduce(
          (sum, s) => sum + (s.service.duration_minutes || 0),
          0
        );
        const appointmentData = {
          branch_id: (isAllBranches ? staff.find((s) => s.id === sorted[0]?.stylistId)?.branch_id : null) || effectiveBranchId || primaryBranch?.id,
          client_id: selectedClient.id,
          appointment_date: first.date,
          start_time: first.startTime,
          end_time: last.endTime,
          duration_minutes: totalDuration2,
          status: "scheduled",
          client_notes: notes.clientNotes,
          internal_notes: notes.internalNotes,
          special_requests: notes.specialRequests,
          services: pendingSlots.map((slot) => {
            const stylist = slot.stylistId ? staff.find((s) => s.id === slot.stylistId) : null;
            const stylistPrice = stylist?.services?.find(
              (s) => s.service_id === (slot.service.service_id ?? slot.service.id)
            )?.price;
            return {
              service_id: slot.service.service_id ?? slot.service.id,
              service_name: slot.service.service_name,
              service_category: slot.service.category ?? "",
              duration_minutes: slot.service.duration_minutes ?? 60,
              price: stylistPrice ?? slot.service.price ?? 0,
              performed_by: slot.stylistId ?? null,
              start_time: slot.startTime,
              end_time: slot.endTime
            };
          })
        };
        const { error } = await createAppointment(appointmentData);
        if (error) throw error;
        toast.success("Appointment booked!");
        invalidateAppointments();
        handleClose();
      } catch (err) {
        console.error(err);
        toast.error(err?.message ?? "Failed to book appointment");
      } finally {
        setIsSubmitting(false);
      }
    });
  };
  const handleClose = () => {
    setPendingSlots([]);
    setSelectedService(null);
    setSelectedClient(null);
    setNotes({ clientNotes: "", internalNotes: "", specialRequests: "" });
    onClose();
  };
  const totalDuration = pendingSlots.reduce((sum, s) => sum + (s.service.duration_minutes || 0), 0);
  const totalCost = pendingSlots.reduce((sum, slot) => {
    const stylist = slot.stylistId ? staff.find((s) => s.id === slot.stylistId) : null;
    const stylistPrice = stylist?.services?.find(
      (s) => s.service_id === (slot.service.service_id ?? slot.service.id)
    )?.price;
    return sum + (stylistPrice ?? slot.service.price ?? 0);
  }, 0);
  const canBook = !!selectedClient && pendingSlots.length > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Dialog,
    {
      open,
      onClose: handleClose,
      fullScreen: true,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Box,
          {
            sx: {
              px: 2,
              py: 1,
              display: "flex",
              alignItems: "center",
              gap: 2,
              borderBottom: 1,
              borderColor: "divider",
              flexShrink: 0
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", sx: { mr: hasMultipleBranches ? 0 : "auto" }, children: "New Appointment" }),
              hasMultipleBranches && /* @__PURE__ */ jsxRuntimeExports.jsx(
                BranchSelect,
                {
                  label: "",
                  branches,
                  value: effectiveBranchId || "all",
                  onChange: (val) => {
                    setBranchId(val === "all" ? "all" : val ?? null);
                    setPendingSlots([]);
                    setSelectedStylists([]);
                  },
                  showAllOption: true,
                  allLabel: "All Branches",
                  sx: { ml: "auto" }
                }
              ),
              isAllBranches && /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { size: "small", sx: { minWidth: 200 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { id: "default-branch-label", children: "Default branch for new appointments" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    labelId: "default-branch-label",
                    id: "default-branch-select",
                    variant: "outlined",
                    label: "Default branch for new appointments",
                    value: defaultNewAppointmentBranchId ?? "",
                    onChange: (e) => setDefaultNewAppointmentBranchId?.(e.target.value),
                    sx: {
                      "& .MuiSelect-select": {
                        borderRadius: 1,
                        "&:hover": { bgcolor: "action.hover" }
                      }
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "", disabled: true, children: "Select branch for appointment" }),
                      branches.map((branch) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: branch.id, children: branch.name }, branch.id))
                    ]
                  }
                )
              ] }),
              hasMultipleBranches && /* @__PURE__ */ jsxRuntimeExports.jsx(
                TravelBufferSelect,
                {
                  value: crossBranchBufferMinutes,
                  onChange: (e) => {
                    const val = Number(e.target.value);
                    localStorage.setItem("crossBranchBufferMinutes", val);
                    setCrossBranchBufferMinutes(val);
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", onClick: handleClose, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:close-fill" }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", flex: 1, overflow: "hidden" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Box,
            {
              sx: {
                display: "flex",
                flexDirection: "column",
                width: 272,
                flexShrink: 0,
                borderRight: 1,
                borderColor: "divider",
                overflow: "hidden"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { p: 1.5, borderBottom: 1, borderColor: "divider", flexShrink: 0 }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Typography,
                    {
                      variant: "overline",
                      sx: { color: "text.disabled", mb: 0.75, display: "block", lineHeight: 1 },
                      children: "Client"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", gap: 1 }, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ClientAutocompleteField,
                      {
                        size: "small",
                        compactImportance: true,
                        label: "Search client",
                        value: selectedClient,
                        branchId: effectiveBranchId,
                        onChange: (client) => setSelectedClient(client),
                        sx: { flex: 1 }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Quick add client", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", onClick: () => setQuickAddOpen(true), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "mingcute:add-line", width: 18 }) }) })
                  ] }),
                  selectedClient && isBirthdayThisWeek(selectedClient.date_of_birth) && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Alert,
                    {
                      severity: "success",
                      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "noto:birthday-cake", width: 16 }),
                      sx: { mt: 1, py: 0.25, px: 1, fontSize: "0.72rem", borderRadius: 1 },
                      children: isBirthdayToday(selectedClient.date_of_birth) ? `Happy Birthday, ${selectedClient.first_name}! 🎉` : `${selectedClient.first_name}'s birthday is this week! 🎂`
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ServicePanel,
                  {
                    branchId: effectiveBranchId,
                    selectedService,
                    onServiceSelect: setSelectedService,
                    onServiceDragStart: handleServiceDragStart,
                    onServiceDragEnd: handleServiceDragEnd,
                    clientNotes: notes.clientNotes,
                    internalNotes: notes.internalNotes,
                    specialRequests: notes.specialRequests,
                    onNotesChange: handleNotesChange
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Box,
              {
                sx: {
                  px: 2,
                  py: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  borderBottom: 1,
                  borderColor: "divider",
                  flexShrink: 0,
                  flexWrap: "wrap"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", onClick: () => handleNavigate("prev"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:arrow-ios-back-fill", width: 18 }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Jump to date", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Typography,
                    {
                      variant: "subtitle2",
                      onClick: (e) => setDatePickerAnchor(e.currentTarget),
                      sx: {
                        minWidth: 160,
                        textAlign: "center",
                        cursor: "pointer",
                        borderRadius: 1,
                        px: 1,
                        py: 0.25,
                        "&:hover": { bgcolor: "action.hover" }
                      },
                      children: dateLabel
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Pick a date", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", onClick: (e) => setDatePickerAnchor(e.currentTarget), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:calendar-outline", width: 18 }) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Popover,
                    {
                      open: Boolean(datePickerAnchor),
                      anchorEl: datePickerAnchor,
                      onClose: () => setDatePickerAnchor(null),
                      anchorOrigin: { vertical: "bottom", horizontal: "center" },
                      transformOrigin: { vertical: "top", horizontal: "center" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(LocalizationProvider, { dateAdapter: AdapterDayjs, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        DateCalendar,
                        {
                          value: dayjs(currentDate),
                          onChange: (val) => {
                            if (val) setCurrentDate(val.toDate());
                            setDatePickerAnchor(null);
                          }
                        }
                      ) })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", onClick: () => handleNavigate("next"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:arrow-ios-forward-fill", width: 18 }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "small",
                      variant: isToday(currentDate) ? "contained" : "outlined",
                      onClick: () => handleNavigate("today"),
                      sx: { minWidth: 0, px: 1.5, py: 0.25, fontSize: "0.75rem" },
                      children: "Today"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { flex: 1 } }),
                  [
                    { value: "day", label: "Day" },
                    { value: "week", label: "Week" }
                  ].map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "small",
                      variant: calendarView === v.value ? "contained" : "outlined",
                      onClick: () => setCalendarView(v.value),
                      sx: { minWidth: 0, px: 1.5, py: 0.25, fontSize: "0.75rem" },
                      children: v.label
                    },
                    v.value
                  )),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Box,
                    {
                      sx: {
                        display: "flex",
                        alignItems: "center",
                        gap: 0.25,
                        border: "1px solid",
                        borderColor: "divider",
                        borderRadius: 1,
                        px: 0.5,
                        py: 0.25
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Zoom out", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          IconButton,
                          {
                            color: "primary",
                            size: "small",
                            sx: { p: 0.25 },
                            onClick: () => setZoomLevel((z) => {
                              const next = Math.max(z - 1, 1);
                              localStorage.setItem("stylistCalendarZoomLevel", next);
                              return next;
                            }),
                            disabled: zoomLevel === 1,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "carbon:zoom-out", width: 14 })
                          }
                        ) }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Typography,
                          {
                            variant: "caption",
                            sx: { px: 0.25, minWidth: 26, textAlign: "center", fontWeight: 600 },
                            children: [
                              step,
                              "m"
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Zoom in", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          IconButton,
                          {
                            color: "primary",
                            size: "small",
                            sx: { p: 0.25 },
                            onClick: () => setZoomLevel((z) => {
                              const next = Math.min(z + 1, ZOOM_STEPS.length);
                              localStorage.setItem("stylistCalendarZoomLevel", next);
                              return next;
                            }),
                            disabled: zoomLevel === ZOOM_STEPS.length,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "carbon:zoom-in", width: 14 })
                          }
                        ) }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { width: "1px", height: 16, bgcolor: "divider", mx: 0.25 } }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Narrow columns", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          IconButton,
                          {
                            color: "primary",
                            size: "small",
                            sx: { p: 0.25 },
                            onClick: () => setHZoomLevel((z) => {
                              const next = Math.max(z - 1, 1);
                              localStorage.setItem("stylistCalendarHZoomLevel", next);
                              return next;
                            }),
                            disabled: hZoomLevel === 1,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:arrowhead-left-fill", width: 14 })
                          }
                        ) }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "Widen columns", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          IconButton,
                          {
                            color: "primary",
                            size: "small",
                            sx: { p: 0.25 },
                            onClick: () => setHZoomLevel((z) => {
                              const next = Math.min(z + 1, H_ZOOM_STEPS.length);
                              localStorage.setItem("stylistCalendarHZoomLevel", next);
                              return next;
                            }),
                            disabled: hZoomLevel === H_ZOOM_STEPS.length,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:arrowhead-right-fill", width: 14 })
                          }
                        ) }) })
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Box,
              {
                sx: {
                  px: 2,
                  py: 0.75,
                  display: "flex",
                  gap: 0.75,
                  flexWrap: "wrap",
                  alignItems: "center",
                  borderBottom: 1,
                  borderColor: "divider",
                  flexShrink: 0
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Chip,
                    {
                      size: "small",
                      label: "All",
                      variant: selectedStylists.length === 0 ? "filled" : "outlined",
                      color: selectedStylists.length === 0 ? "primary" : "default",
                      onClick: () => setSelectedStylists([]),
                      sx: { height: 24, fontSize: "0.72rem" }
                    }
                  ),
                  staff.map((stylist) => {
                    const isSelected2 = selectedStylists.some((s) => s.id === stylist.id);
                    const initial = stylist.display_name?.[0] ?? "";
                    return /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Chip,
                      {
                        size: "small",
                        label: stylist.display_name,
                        variant: isSelected2 ? "filled" : "outlined",
                        color: isSelected2 ? "primary" : "default",
                        avatar: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Avatar,
                          {
                            sx: {
                              width: 18,
                              height: 18,
                              fontSize: "0.6rem",
                              backgroundColor: stylist.calendar_color
                            },
                            children: initial
                          }
                        ),
                        onClick: () => setSelectedStylists(
                          (prev2) => isSelected2 ? prev2.filter((s) => s.id !== stylist.id) : [...prev2, stylist]
                        ),
                        sx: { height: 24, fontSize: "0.72rem" }
                      },
                      stylist.id
                    );
                  })
                ]
              }
            ),
            selectedService && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Alert,
              {
                severity: "info",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "eva:pin-fill" }),
                sx: { borderRadius: 0 },
                action: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "contained",
                    size: "small",
                    sx: { ml: "auto", fontSize: "0.7rem", py: 0, minWidth: 0 },
                    onClick: () => setSelectedService(null),
                    children: "Cancel"
                  }
                ),
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", children: [
                  "Click a time slot to place ",
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { children: [
                    '"',
                    selectedService.service_name,
                    '"'
                  ] })
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { flex: 1, overflow: "hidden", overflowX: "auto" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { height: "100%", width: "100%", minWidth: `${dialogCalendarWidth}px` }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              BigCalendarRoot,
              {
                sx: {
                  height: "100%",
                  ...calendarView === "week" && { "--rbc-week-col-width": `${colWidth}px` }
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  DnDCalendar$1,
                  {
                    localizer,
                    events: allEvents,
                    resources,
                    resourceIdAccessor: "id",
                    resourceTitleAccessor: "title",
                    startAccessor: "start",
                    endAccessor: "end",
                    titleAccessor: "title",
                    view: calendarView,
                    date: currentDate,
                    onView: setCalendarView,
                    onNavigate: setCurrentDate,
                    onSelectSlot: handleSelectSlot,
                    onEventDrop: handleEventDrop,
                    onEventResize: handleEventResize,
                    onDropFromOutside: handleDropFromOutside,
                    dragFromOutsideItem,
                    draggableAccessor: (event) => !!event.isPending && !event.isBufferZone,
                    resizable: true,
                    selectable: true,
                    step,
                    timeslots: 1,
                    style: { height: "100%" },
                    eventPropGetter,
                    views: ["day", "week"],
                    defaultView: "day",
                    showMultiDayTimes: true,
                    min: new Date(0, 0, 0, 7, 0),
                    max: new Date(0, 0, 0, 23, 0),
                    formats: {
                      timeGutterFormat: "h:mm a",
                      eventTimeRangeFormat: () => ""
                    },
                    components: {
                      toolbar: () => null,
                      resourceHeader: ({ label, resource }) => {
                        const isCapable = capableStylistIds ? capableStylistIds.has(resource.id) : false;
                        const isIncapable = capableStylistIds ? !capableStylistIds.has(resource.id) : false;
                        const todayName = [
                          "sunday",
                          "monday",
                          "tuesday",
                          "wednesday",
                          "thursday",
                          "friday",
                          "saturday"
                        ][currentDate.getDay()];
                        const staffSchedules = schedulesByStaff[resource.id];
                        const isDayOff = calendarView === "day" && staffSchedules !== void 0 && !staffSchedules.some((s) => s.day_of_week === todayName);
                        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Box,
                          {
                            sx: {
                              mx: -0.5,
                              my: -1.2,
                              py: 1,
                              px: 1,
                              textAlign: "center",
                              fontWeight: 600,
                              fontSize: "0.8rem",
                              borderRadius: 0,
                              transition: "background 0.2s, opacity 0.2s",
                              bgcolor: isDayOff ? "warning.lighter" : isCapable ? "success.lighter" : "transparent",
                              color: isDayOff ? "warning.darker" : isCapable ? "success.darker" : isIncapable ? "text.disabled" : "text.primary",
                              opacity: isIncapable && !isDayOff ? 0.45 : 1,
                              outline: isCapable && !isDayOff ? "2px solid" : "none",
                              outlineColor: "success.light",
                              position: "relative"
                            },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Box,
                                {
                                  sx: {
                                    height: !isDayOff && 36,
                                    flexShrink: 0,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                  },
                                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    Typography,
                                    {
                                      noWrap: true,
                                      sx: {
                                        fontWeight: 600,
                                        fontSize: "0.8rem",
                                        lineHeight: 1.2,
                                        maxWidth: "100%",
                                        color: "inherit"
                                      },
                                      children: label
                                    }
                                  )
                                }
                              ),
                              isDayOff && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Box,
                                {
                                  component: "span",
                                  sx: {
                                    fontSize: "0.55rem",
                                    fontWeight: 700,
                                    letterSpacing: "0.04em",
                                    textTransform: "uppercase",
                                    px: 0.6,
                                    py: 0.1,
                                    borderRadius: 0.75,
                                    bgcolor: "warning.main",
                                    color: "warning.contrastText",
                                    lineHeight: 1.6,
                                    flexShrink: 0
                                  },
                                  children: "Day Off"
                                }
                              )
                            ]
                          }
                        );
                      },
                      event: ({ event }) => {
                        if (event.isUnavailableZone) {
                          return null;
                        }
                        if (event.isBufferZone) {
                          return /* @__PURE__ */ jsxRuntimeExports.jsx(BufferZoneEventRenderer, { event, mode });
                        }
                        if (event.isPending) {
                          return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { px: 0.75, py: 0.25, height: "100%", overflow: "hidden" }, children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Typography,
                              {
                                noWrap: true,
                                sx: { fontSize: "0.72rem", fontWeight: 700, lineHeight: 1.35 },
                                children: event.title
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              Typography,
                              {
                                noWrap: true,
                                sx: { fontSize: "0.65rem", opacity: 0.8, lineHeight: 1.2 },
                                children: [
                                  event.start && format(event.start, "h:mm a"),
                                  " –",
                                  " ",
                                  event.end && format(event.end, "h:mm a")
                                ]
                              }
                            )
                          ] });
                        }
                        const { extendedProps } = event;
                        const client = extendedProps?.client;
                        const clientName = client ? `${client.first_name} ${client.last_name}` : "Unknown";
                        const hasBirthday = isBirthdayThisWeek(client?.date_of_birth, event.start);
                        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { px: 0.75, py: 0.25, height: "100%", overflow: "hidden" }, children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Typography,
                            {
                              noWrap: true,
                              sx: { fontSize: "0.65rem", opacity: 0.8, lineHeight: 1.3 },
                              children: event.start && format(event.start, "h:mm a")
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            Box,
                            {
                              sx: { display: "flex", alignItems: "center", gap: 0.5, minWidth: 0 },
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  Typography,
                                  {
                                    noWrap: true,
                                    sx: {
                                      fontSize: "0.72rem",
                                      fontWeight: 700,
                                      lineHeight: 1.3,
                                      color: "white"
                                    },
                                    children: clientName
                                  }
                                ),
                                hasBirthday && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  Iconify,
                                  {
                                    icon: "noto:birthday-cake",
                                    width: 16,
                                    sx: {
                                      flexShrink: 0,
                                      filter: "drop-shadow(0 0 2px rgba(0,0,0,0.3))"
                                    }
                                  }
                                )
                              ]
                            }
                          )
                        ] });
                      }
                    }
                  }
                )
              }
            ) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Box,
          {
            sx: {
              px: 2,
              py: 1.25,
              borderTop: 1,
              borderColor: "divider",
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexShrink: 0,
              flexWrap: "wrap"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { flex: 1, display: "flex", gap: 0.75, flexWrap: "wrap", alignItems: "center" }, children: pendingSlots.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.disabled", sx: { fontSize: "0.8rem" }, children: "Drag or click a service from the panel onto the calendar" }) : pendingSlots.map((slot) => {
                const stylistName = slot.stylistId ? staff.find((s) => s.id === slot.stylistId)?.display_name ?? null : null;
                const fmt12 = (t) => {
                  const [h, m] = t.split(":").map(Number);
                  const ampm = h >= 12 ? "pm" : "am";
                  const h12 = h % 12 || 12;
                  return `${h12}:${String(m).padStart(2, "0")} ${ampm}`;
                };
                const label = [
                  slot.service.service_name,
                  stylistName ? `· ${stylistName}` : null,
                  `· ${fmt12(slot.startTime)}`
                ].filter(Boolean).join(" ");
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Chip,
                  {
                    size: "small",
                    label,
                    onDelete: () => removePendingSlot(slot.id),
                    sx: {
                      bgcolor: "rgba(255,112,67,0.12)",
                      border: "1px dashed #ff7043",
                      color: "#bf360c",
                      fontWeight: 600,
                      fontSize: "0.72rem",
                      "& .MuiChip-deleteIcon": { color: "#ff7043" }
                    }
                  },
                  slot.id
                );
              }) }),
              totalDuration > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", sx: { flexShrink: 0 }, children: [
                Math.floor(totalDuration / 60) > 0 && `${Math.floor(totalDuration / 60)}h `,
                totalDuration % 60 > 0 && `${totalDuration % 60}m`
              ] }),
              totalCost > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Typography,
                {
                  variant: "subtitle2",
                  sx: { flexShrink: 0, fontWeight: 700, color: "text.primary" },
                  children: [
                    "$",
                    totalCost.toFixed(2)
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "contained",
                  onClick: handleSubmit,
                  disabled: !canBook || isSubmitting,
                  sx: { flexShrink: 0 },
                  children: isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 20, color: "inherit" }) : "Book Appointment"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ClientQuickAddDialog,
          {
            openDialog: quickAddOpen,
            setOpenDialog: setQuickAddOpen,
            onSuccess: (client) => {
              setSelectedClient(client);
              setQuickAddOpen(false);
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ConfirmDialog,
          {
            open: !!overlapConfirm,
            onClose: () => {
              overlapConfirm?.resolve(false);
              setOverlapConfirm(null);
            },
            title: "Time Slot Overlap",
            content: "This service overlaps with an existing appointment or another service you've already placed. Do you want to add it anyway?",
            action: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "contained",
                color: "warning",
                onClick: () => {
                  overlapConfirm?.resolve(true);
                  setOverlapConfirm(null);
                },
                children: "Add Anyway"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ConfirmDialog,
          {
            open: !!crossBranchWarning,
            onClose: () => {
              crossBranchWarning?.resolve(false);
              setCrossBranchWarning(null);
            },
            title: "Stylist at Another Branch",
            content: crossBranchWarning && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", gutterBottom: true, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: crossBranchWarning.conflictInfo.stylistName }),
                " already has an appointment at ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: crossBranchWarning.conflictInfo.branchName }),
                " from",
                " ",
                format(crossBranchWarning.conflictInfo.evtStart, "h:mm a"),
                " to",
                " ",
                format(crossBranchWarning.conflictInfo.evtEnd, "h:mm a"),
                "."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
                "With a",
                " ",
                CROSS_BRANCH_BUFFER_OPTIONS.find((o2) => o2.value === crossBranchBufferMinutes)?.label ?? `${crossBranchBufferMinutes} min`,
                " ",
                "travel buffer, they may not have enough time to get between branches. Are you sure you want to book this?"
              ] })
            ] }),
            action: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "contained",
                color: "warning",
                onClick: () => {
                  crossBranchWarning?.resolve(true);
                  setCrossBranchWarning(null);
                },
                children: "Book Anyway"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ConfirmDialog,
          {
            open: !!unavailabilityWarning,
            onClose: () => {
              unavailabilityWarning?.resolve(false);
              setUnavailabilityWarning(null);
            },
            title: "Stylist Not Available",
            content: unavailabilityWarning && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", gutterBottom: true, children: unavailabilityWarning.message }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "Do you still want to book this appointment?" })
            ] }),
            action: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "contained",
                color: "warning",
                onClick: () => {
                  unavailabilityWarning?.resolve(true);
                  setUnavailabilityWarning(null);
                },
                children: "Book Anyway"
              }
            )
          }
        )
      ]
    }
  );
}
DnDAppointmentQuickBookDialog.propTypes = {
  open: o.bool.isRequired,
  onClose: o.func.isRequired
};
const viewMapping = {
  dayGridMonth: "month",
  timeGridWeek: "week",
  timeGridDay: "day",
  listWeek: "agenda"
};
const reverseViewMapping = {
  month: "dayGridMonth",
  week: "timeGridWeek",
  day: "timeGridDay",
  agenda: "listWeek"
};
const getCalendarMin = () => {
  const stored = localStorage.getItem("calendarMinHour");
  const hour = stored !== null ? Number(stored) : 7;
  return new Date(0, 0, 0, hour, 0);
};
const getCalendarMax = () => {
  const stored = localStorage.getItem("calendarMaxHour");
  const hour = stored !== null ? Number(stored) : 23;
  return new Date(0, 0, 0, hour, 0);
};
const calendarMin = getCalendarMin();
const calendarMax = getCalendarMax();
const calendarFormats = {
  timeGutterFormat: "h:mm a",
  eventTimeRangeFormat: () => "",
  agendaTimeFormat: "h:mm a",
  agendaTimeRangeFormat: ({ start, end }, culture, loc) => `${loc.format(start, "h:mm a", culture)} - ${loc.format(end, "h:mm a", culture)}`
};
const calendarViewOptions = [
  { value: "dayGridMonth", label: "Month", icon: "mingcute:calendar-month-line" },
  { value: "timeGridWeek", label: "Week", icon: "mingcute:calendar-week-line" },
  { value: "timeGridDay", label: "Day", icon: "mingcute:calendar-day-line" },
  { value: "listWeek", label: "Agenda", icon: "custom:calendar-agenda-outline" }
];
const DnDCalendar = withDragAndDrop(Calendar_default);
const UNASSIGNED_RESOURCE_ID = "__unassigned__";
function mergeServiceEventsByAppointment(events) {
  const merged = /* @__PURE__ */ new Map();
  events.forEach((event) => {
    const key = event.extendedProps?.appointmentId ?? event.id;
    const existing = merged.get(key);
    const serviceEvent = {
      service: event.extendedProps?.currentService,
      start: event.start,
      end: event.end,
      color: event.stylistColor
    };
    if (!existing) {
      merged.set(key, { ...event, id: key, serviceEvents: [serviceEvent] });
      return;
    }
    if (event.start < existing.start) existing.start = event.start;
    if (event.end > existing.end) existing.end = event.end;
    existing.serviceEvents.push(serviceEvent);
  });
  return [...merged.values()];
}
function CalendarViewStylist() {
  const { open, currentEvent, onOpen, onClose } = useAppointmentModalV2();
  const { colorScheme } = useColorScheme();
  const mode = colorScheme ?? "light";
  const bookingDialog = Ee();
  const confirmDialog = Ee();
  const unavailabilityDialog = Ee();
  const openFilters = Ee();
  const [unavailabilityMessage, setUnavailabilityMessage] = reactExports.useState(null);
  const [currentDate, setCurrentDate] = reactExports.useState(/* @__PURE__ */ new Date());
  const [pendingDrop, setPendingDrop] = reactExports.useState(null);
  const [colorDialogStylist, setColorDialogStylist] = reactExports.useState(null);
  const {
    primaryBranch,
    branchesOnly: branches,
    hasMultipleBranchesOnly: hasMultipleBranches
  } = useUserBranches();
  const [selectedBranchId, setSelectedBranchId] = useSharedBranchId();
  const isAllBranches = selectedBranchId === "all";
  const { branches: allBranchesWithColors } = useAllBranches();
  const branchColorMap = reactExports.useMemo(
    () => Object.fromEntries(
      branches.map((branch, i) => {
        const fullBranch = allBranchesWithColors.find((b) => b.id === branch.id);
        return [
          branch.id,
          fullBranch?.calendar_color || STYLIST_CALENDAR_COLORS[i % STYLIST_CALENDAR_COLORS.length]
        ];
      })
    ),
    [isAllBranches, branches, allBranchesWithColors]
  );
  const activeBranchId = isAllBranches ? null : selectedBranchId ?? primaryBranch?.id;
  const { staff } = useGetStaff({
    branchId: isAllBranches ? void 0 : activeBranchId,
    branchIds: isAllBranches ? branches.map((b) => b.id) : void 0,
    pageSize: 100,
    filters: { role: "stylist", status: "active" }
  });
  const [currentView, setCurrentView] = reactExports.useState("timeGridDay");
  const now = dayjs(currentDate);
  const currentDateStr = now.format("YYYY-MM-DD");
  const dateRange = reactExports.useMemo(() => {
    const d = dayjs(currentDateStr);
    switch (currentView) {
      case "timeGridDay":
        return { startDate: d.startOf("day"), endDate: d.endOf("day") };
      case "timeGridWeek":
      case "listWeek":
        return { startDate: d.startOf("week"), endDate: d.endOf("week") };
      default:
        return { startDate: d.startOf("month"), endDate: d.endOf("month") };
    }
  }, [currentDateStr, currentView]);
  const {
    appointments,
    loading: eventsLoading,
    refetch
  } = useAppointments({
    branchId: activeBranchId,
    startDate: dateRange.startDate,
    endDate: dateRange.endDate
  });
  const events = reactExports.useMemo(() => transformAppointmentsForCalendar(appointments), [appointments]);
  const filters = ze({
    colors: [],
    startDate: null,
    endDate: null,
    clientName: "",
    stylistIds: [],
    branchIds: []
  });
  const { state: currentFilters } = filters;
  const dateError = fIsAfter(currentFilters.startDate, currentFilters.endDate);
  const [selectedStylists, setSelectedStylists] = reactExports.useState([]);
  const [resourceViewEnabled, setResourceViewEnabled] = reactExports.useState(
    () => typeof window === "undefined" || window.innerWidth >= 600
  );
  const [zoomLevel, setZoomLevel] = reactExports.useState(() => {
    const stored = localStorage.getItem("stylistCalendarZoomLevel");
    return stored !== null ? Number(stored) : 3;
  });
  const step = ZOOM_STEPS[zoomLevel - 1];
  const zoomIn = () => setZoomLevel((z) => {
    const next = Math.min(z + 1, ZOOM_STEPS.length);
    localStorage.setItem("stylistCalendarZoomLevel", next);
    return next;
  });
  const zoomOut = () => setZoomLevel((z) => {
    const next = Math.max(z - 1, 1);
    localStorage.setItem("stylistCalendarZoomLevel", next);
    return next;
  });
  const [hZoomLevel, setHZoomLevel] = reactExports.useState(() => {
    const stored = localStorage.getItem("stylistCalendarHZoomLevel");
    if (stored !== null) return Number(stored);
    return typeof window !== "undefined" && window.innerWidth < 600 ? 1 : 2;
  });
  const colWidth = H_ZOOM_STEPS[hZoomLevel - 1];
  const hZoomIn = () => setHZoomLevel((z) => {
    const next = Math.min(z + 1, H_ZOOM_STEPS.length);
    localStorage.setItem("stylistCalendarHZoomLevel", next);
    return next;
  });
  const hZoomOut = () => setHZoomLevel((z) => {
    const next = Math.max(z - 1, 1);
    localStorage.setItem("stylistCalendarHZoomLevel", next);
    return next;
  });
  const [crossBranchBufferMinutes, setCrossBranchBufferMinutes] = reactExports.useState(() => {
    const stored = localStorage.getItem("crossBranchBufferMinutes");
    return stored !== null ? Number(stored) : DEFAULT_CROSS_BRANCH_BUFFER_MINUTES;
  });
  const bigCalendarView = viewMapping[currentView] || "month";
  const title = getTitle(currentDate, currentView);
  const handleViewChange = (newView) => {
    setCurrentView(newView);
  };
  const handleDateNavigation = (action) => {
    const newDate = new Date(currentDate);
    switch (action) {
      case "today":
        setCurrentDate(/* @__PURE__ */ new Date());
        break;
      case "prev":
        if (currentView === "dayGridMonth") {
          newDate.setMonth(newDate.getMonth() - 1);
        } else if (currentView === "timeGridWeek" || currentView === "listWeek") {
          newDate.setDate(newDate.getDate() - 7);
        } else if (currentView === "timeGridDay") {
          newDate.setDate(newDate.getDate() - 1);
        }
        setCurrentDate(newDate);
        break;
      case "next":
        if (currentView === "dayGridMonth") {
          newDate.setMonth(newDate.getMonth() + 1);
        } else if (currentView === "timeGridWeek" || currentView === "listWeek") {
          newDate.setDate(newDate.getDate() + 7);
        } else if (currentView === "timeGridDay") {
          newDate.setDate(newDate.getDate() + 1);
        }
        setCurrentDate(newDate);
        break;
    }
  };
  const handleBigCalendarViewChange = (view) => {
    const fullCalendarView = reverseViewMapping[view] || "dayGridMonth";
    setCurrentView(fullCalendarView);
  };
  const handleBigCalendarNavigate = (date2) => {
    setCurrentDate(date2);
  };
  const canReset = currentFilters.colors.length > 0 || !!currentFilters.startDate && !!currentFilters.endDate || !!currentFilters.clientName || currentFilters.stylistIds.length > 0 || currentFilters.branchIds.length > 0;
  const dataFiltered = applyFilter({
    inputData: events,
    filters: currentFilters,
    dateError
  });
  const bufferEvents = useBufferEvents({
    events,
    currentBranchId: primaryBranch?.id,
    branches,
    bufferMinutes: crossBranchBufferMinutes,
    hasMultipleBranches
  });
  const scheduleRangeStart = dateRange.startDate.toISOString();
  const scheduleRangeEnd = dateRange.endDate.toISOString();
  const { schedulesByStaff, exceptionsByStaff } = useStaffSchedules(
    activeBranchId,
    scheduleRangeStart,
    scheduleRangeEnd
  );
  const filteredEvents = resourceViewEnabled ? dataFiltered.filter((event) => {
    if (selectedStylists.length === 0) return true;
    if (!event.resourceId) return true;
    return selectedStylists.some((stylist) => stylist.id === event.resourceId);
  }).map((event) => ({
    ...event,
    resourceId: event.resourceId ?? UNASSIGNED_RESOURCE_ID
  })) : dataFiltered;
  const unavailabilityCalendarView = bigCalendarView === "day" || bigCalendarView === "week" ? bigCalendarView : "day";
  const hasUnassignedEvents = resourceViewEnabled && filteredEvents.some((event) => event.resourceId === UNASSIGNED_RESOURCE_ID);
  const resources = resourceViewEnabled ? [
    ...hasUnassignedEvents ? [{ id: UNASSIGNED_RESOURCE_ID, title: "Unassigned" }] : [],
    ...selectedStylists.length > 0 ? selectedStylists.map((s) => ({
      id: s.id,
      title: `${s.first_name} ${s.last_name}`
    })) : staff.map((s) => ({
      id: s.id,
      title: `${s.first_name} ${s.last_name}`
    }))
  ] : [];
  const unavailabilityEvents = useUnavailabilityEvents({
    resources,
    schedulesByStaff,
    exceptionsByStaff,
    currentDate,
    calendarView: unavailabilityCalendarView
  });
  const flexStyles = {
    flex: "1 1 auto",
    display: "flex",
    flexDirection: "column"
  };
  const GUTTER_WIDTH = 60;
  const isDayView = currentView === "timeGridDay";
  const isWeekView = currentView === "timeGridWeek";
  const numColumns = isDayView ? resources.length || 1 : isWeekView ? 7 : 1;
  const isHZoomView = isDayView && resourceViewEnabled || isWeekView;
  const calendarTotalWidth = isHZoomView ? GUTTER_WIDTH + colWidth * numColumns : void 0;
  const handleEventClick = (event) => {
    onOpen({
      id: event.extendedProps.appointmentId,
      extendedProps: {
        ...event.extendedProps,
        appointmentStartTime: event.start.toTimeString().slice(0, 5),
        appointmentEndTime: event.end.toTimeString().slice(0, 5)
      },
      start: dayjs(event.start).format("YYYY-MM-DDTHH:mm:ss"),
      end: dayjs(event.end).format("YYYY-MM-DDTHH:mm:ss")
    });
  };
  const handleDateSelect = (slotInfo) => {
    const startStr = slotInfo.start.toISOString();
    const endStr = slotInfo.end.toISOString();
    const selectedDate = dayjs(slotInfo.start).format("YYYY-MM-DD");
    const startHours = slotInfo.start.getHours();
    const startMinutes = slotInfo.start.getMinutes();
    const endHours = slotInfo.end.getHours();
    const endMinutes = slotInfo.end.getMinutes();
    const selectedStartTime = startHours === 0 && startMinutes === 0 ? "09:00" : `${String(startHours).padStart(2, "0")}:${String(startMinutes).padStart(2, "0")}`;
    const selectedEndTime = endHours === 0 && endMinutes === 0 ? "10:00" : `${String(endHours).padStart(2, "0")}:${String(endMinutes).padStart(2, "0")}`;
    const selectedTimeSlot = {
      extendedProps: {
        selectedDate,
        selectedStartTime,
        selectedEndTime
      },
      start: startStr,
      end: endStr
    };
    onOpen(selectedTimeSlot);
  };
  const checkForOverlap = (appointmentId, start, end, targetResourceId) => {
    const startTime = new Date(start).getTime();
    const endTime = new Date(end).getTime();
    const relevantAppointments = filteredEvents.filter(
      (evt) => evt.extendedProps.appointmentId !== appointmentId && evt.resourceId === targetResourceId && evt.extendedProps.status !== "canceled"
    );
    return relevantAppointments.some((evt) => {
      const evtStart = new Date(evt.start).getTime();
      const evtEnd = new Date(evt.end).getTime();
      return startTime < evtEnd && endTime > evtStart;
    });
  };
  const executeMove = async (dropData) => {
    const { event, start, end, resourceId } = dropData;
    const resolvedResourceId = resourceId === UNASSIGNED_RESOURCE_ID ? null : resourceId;
    const originalResourceId = event.resourceId === UNASSIGNED_RESOURCE_ID ? null : event.resourceId;
    const appointmentId = event.extendedProps.appointmentId;
    const serviceRowId = event.extendedProps.serviceId;
    const appointmentDate = start.toISOString().split("T")[0];
    const startTime = start.toTimeString().slice(0, 5);
    const endTime = end.toTimeString().slice(0, 5);
    const toastId = toast.loading("Moving appointment...");
    reactExports.startTransition(async () => {
      try {
        if (serviceRowId) {
          const serviceUpdates = {
            start_time: startTime,
            end_time: endTime
          };
          if (resourceId != null && resolvedResourceId !== originalResourceId) {
            serviceUpdates.performed_by = resolvedResourceId;
          }
          const serviceResult = await updateAppointmentService(serviceRowId, serviceUpdates);
          const originalDate = event.start ? new Date(event.start).toISOString().split("T")[0] : null;
          if (originalDate && originalDate !== appointmentDate) {
            await updateAppointment(appointmentId, { appointment_date: appointmentDate });
          }
          if (serviceResult.error) {
            console.error("Error updating service:", serviceResult.error);
            toast.error("Failed to move service", { id: toastId });
          } else {
            toast.success("Service moved successfully", { id: toastId });
          }
        } else {
          const updates = {
            appointment_date: appointmentDate,
            start_time: startTime,
            end_time: endTime
          };
          if (resourceId != null && resolvedResourceId !== originalResourceId) {
            updates.stylist_id = resolvedResourceId;
            updates.updateServicesStylist = true;
          }
          const result = await updateAppointment(appointmentId, updates);
          if (result.error) {
            console.error("Error updating appointment:", result.error);
            toast.error("Failed to move appointment", { id: toastId });
          } else {
            toast.success("Appointment moved successfully", { id: toastId });
          }
        }
        refetch();
      } catch (error) {
        console.error("Error updating appointment:", error);
        toast.error("Failed to move appointment", { id: toastId });
      }
    });
  };
  const handleEventDrop = (dropData) => {
    const { event, start, end, resourceId } = dropData;
    const appointmentId = event.extendedProps.appointmentId;
    const targetResourceId = resourceId !== void 0 ? resourceId : event.resourceId;
    const resolvedTargetId = targetResourceId === UNASSIGNED_RESOURCE_ID ? null : targetResourceId;
    const appointmentDate = start.toISOString().split("T")[0];
    const startTime = start.toTimeString().slice(0, 5);
    const endTime = end.toTimeString().slice(0, 5);
    if (resolvedTargetId) {
      const scheduleCheck = checkScheduleAvailability(
        resolvedTargetId,
        appointmentDate,
        startTime,
        endTime,
        schedulesByStaff,
        exceptionsByStaff
      );
      if (!scheduleCheck.available) {
        let message2;
        if (scheduleCheck.reason === "not_working_day") {
          message2 = "This stylist is not scheduled to work on this day.";
        } else if (scheduleCheck.reason === "outside_hours") {
          message2 = `This stylist works ${scheduleCheck.workStart}–${scheduleCheck.workEnd} on this day. The appointment falls outside their working hours.`;
        } else if (scheduleCheck.reason === "time_off") {
          message2 = "This stylist has approved time off during this period.";
        } else {
          message2 = "This stylist is not available at this time.";
        }
        setUnavailabilityMessage(message2);
        setPendingDrop(dropData);
        unavailabilityDialog.onTrue();
        return;
      }
    }
    const hasOverlap = checkForOverlap(appointmentId, start, end, targetResourceId);
    if (hasOverlap) {
      setPendingDrop(dropData);
      confirmDialog.onTrue();
    } else {
      executeMove(dropData);
    }
  };
  const handleConfirmOverlap = () => {
    if (pendingDrop) {
      executeMove(pendingDrop);
      setPendingDrop(null);
    }
    confirmDialog.onFalse();
  };
  const handleCancelOverlap = () => {
    setPendingDrop(null);
    confirmDialog.onFalse();
    refetch();
  };
  const handleConfirmUnavailability = () => {
    unavailabilityDialog.onFalse();
    setUnavailabilityMessage(null);
    if (pendingDrop) {
      const { event, start, end, resourceId } = pendingDrop;
      const appointmentId = event.extendedProps.appointmentId;
      const targetResourceId = resourceId !== void 0 ? resourceId : event.resourceId;
      const hasOverlap = checkForOverlap(appointmentId, start, end, targetResourceId);
      if (hasOverlap) {
        confirmDialog.onTrue();
      } else {
        executeMove(pendingDrop);
        setPendingDrop(null);
      }
    }
  };
  const handleCancelUnavailability = () => {
    setPendingDrop(null);
    setUnavailabilityMessage(null);
    unavailabilityDialog.onFalse();
    refetch();
  };
  const handleEventResize = ({ event, start, end }) => {
    const appointmentId = event.extendedProps.appointmentId;
    const serviceRowId = event.extendedProps.serviceId;
    const appointmentDate = start.toISOString().split("T")[0];
    const startTime = start.toTimeString().slice(0, 5);
    const endTime = end.toTimeString().slice(0, 5);
    const toastId = toast.loading("Resizing appointment...");
    reactExports.startTransition(async () => {
      try {
        if (serviceRowId) {
          await updateAppointmentService(serviceRowId, {
            start_time: startTime,
            end_time: endTime
          });
          await updateAppointment(appointmentId, {
            appointment_date: appointmentDate,
            start_time: startTime,
            end_time: endTime
          });
        } else {
          await updateAppointment(appointmentId, {
            appointment_date: appointmentDate,
            start_time: startTime,
            end_time: endTime
          });
        }
        toast.success("Appointment resized", { id: toastId });
      } catch (error) {
        console.error("Error resizing appointment:", error);
        toast.error("Failed to resize appointment", { id: toastId });
      }
      refetch();
    });
  };
  const longPressTimerRef = reactExports.useRef(null);
  const makeLongPressProps = (callback, delay = 500) => ({
    onMouseDown: (e) => {
      if (e.button !== 0) return;
      longPressTimerRef.current = setTimeout(callback, delay);
    },
    onMouseUp: () => clearTimeout(longPressTimerRef.current),
    onMouseLeave: () => clearTimeout(longPressTimerRef.current),
    onTouchStart: () => {
      longPressTimerRef.current = setTimeout(callback, delay);
    },
    onTouchEnd: () => clearTimeout(longPressTimerRef.current),
    onTouchMove: () => clearTimeout(longPressTimerRef.current)
  });
  const handleModalClose = () => {
    onClose();
    setTimeout(() => refetch(), 300);
  };
  const renderFiltersDrawer = () => /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalendarFilters,
    {
      events,
      filters,
      canReset,
      dateError,
      open: openFilters.value,
      onClose: openFilters.onFalse,
      staff,
      branches
    }
  );
  const renderResults = () => /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalendarFiltersResult,
    {
      filters,
      totalResults: dataFiltered.length,
      sx: { mb: { xs: 3, md: 5 } },
      staff,
      branches
    }
  );
  const calendarEvents = currentView === "listWeek" ? mergeServiceEventsByAppointment(filteredEvents) : [...filteredEvents, ...bufferEvents, ...unavailabilityEvents];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { ...flexStyles }, children: [
      canReset && renderResults(),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { sx: { ...flexStyles, minHeight: "50vh", borderRadius: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        BigCalendarRoot,
        {
          sx: {
            ...flexStyles,
            ...isWeekView && isHZoomView && { "--rbc-week-col-width": `${colWidth}px` }
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CalendarToolbar,
              {
                view: currentView,
                title,
                canReset,
                loading: eventsLoading,
                currentDate,
                onGotoDate: (date2) => setCurrentDate(date2),
                onChangeView: handleViewChange,
                onDateNavigation: handleDateNavigation,
                onOpenFilters: openFilters.onTrue,
                onBookingDialogClick: bookingDialog.onTrue,
                viewOptions: calendarViewOptions,
                branches,
                selectedBranchId: selectedBranchId ?? primaryBranch?.id,
                branchColorMap,
                onBranchChange: (id) => {
                  setSelectedBranchId(id);
                  setSelectedStylists([]);
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StylistFilterBar,
              {
                resourceViewEnabled,
                setResourceViewEnabled,
                staff,
                selectedStylists,
                setSelectedStylists,
                getDefaultStylistColor,
                setColorDialogStylist,
                makeLongPressProps
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Box,
              {
                sx: {
                  height: { xs: "70vh", sm: "75vh", md: "80vh", lg: "85vh" },
                  position: "relative"
                },
                children: [
                  (currentView === "timeGridDay" || currentView === "timeGridWeek") && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ZoomControl,
                    {
                      zoomLevel,
                      zoomIn,
                      zoomOut,
                      step,
                      hZoomLevel,
                      hZoomIn,
                      hZoomOut,
                      hZoomEnabled: isHZoomView
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { height: "100%", overflowX: isHZoomView ? "auto" : "unset" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Box,
                    {
                      sx: {
                        height: "100%",
                        width: "100%",
                        minWidth: calendarTotalWidth ? `${calendarTotalWidth}px` : void 0
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        DnDCalendar,
                        {
                          localizer: localizer$1,
                          events: calendarEvents,
                          ...resourceViewEnabled && {
                            resources,
                            resourceIdAccessor: "id",
                            resourceTitleAccessor: "title"
                          },
                          startAccessor: "start",
                          endAccessor: "end",
                          titleAccessor: "title",
                          view: bigCalendarView,
                          date: currentDate,
                          onView: handleBigCalendarViewChange,
                          onNavigate: handleBigCalendarNavigate,
                          onSelectEvent: handleEventClick,
                          onSelectSlot: handleDateSelect,
                          onEventDrop: handleEventDrop,
                          onEventResize: handleEventResize,
                          selectable: true,
                          resizable: true,
                          draggableAccessor: (event) => !event.isBufferZone && !event.isUnavailableZone,
                          dayLayoutAlgorithm: "no-overlap",
                          eventPropGetter: (event) => eventStyleGetter(
                            event,
                            mode,
                            isAllBranches ? branchColorMap[event.extendedProps?.branch_id] : null
                          ),
                          views: ["month", "week", "day", "agenda"],
                          defaultView: "month",
                          length: bigCalendarView === "agenda" ? 7 : void 0,
                          step,
                          showMultiDayTimes: true,
                          popup: true,
                          min: calendarMin,
                          max: calendarMax,
                          formats: calendarFormats,
                          components: {
                            toolbar: () => null,
                            // Hide default toolbar, using our custom one
                            event: ({ event }) => {
                              if (event.isUnavailableZone) {
                                return null;
                              }
                              if (event.isBufferZone) {
                                return /* @__PURE__ */ jsxRuntimeExports.jsx(BufferZoneEventRenderer, { event, mode });
                              }
                              return /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarEventContent, { event });
                            },
                            agenda: {
                              event: AgendaEventContent
                            }
                          }
                        }
                      )
                    }
                  ) })
                ]
              }
            )
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AppointmentDialog, { open, onClose: handleModalClose, currentEvent }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DnDAppointmentQuickBookDialog, { open: bookingDialog.value, onClose: bookingDialog.onFalse }),
    renderFiltersDrawer(),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: confirmDialog.value,
        onClose: handleCancelOverlap,
        title: "Appointment Overlap",
        content: "This appointment will overlap with an existing appointment. Do you want to proceed?",
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "contained", color: "primary", onClick: handleConfirmOverlap, children: "Proceed" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: unavailabilityDialog.value,
        onClose: handleCancelUnavailability,
        title: "Stylist Not Available",
        content: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", gutterBottom: true, children: unavailabilityMessage }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "Do you still want to move this appointment?" })
        ] }),
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "contained", color: "warning", onClick: handleConfirmUnavailability, children: "Move Anyway" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      StylistColorDialog,
      {
        open: Boolean(colorDialogStylist),
        stylist: colorDialogStylist,
        onClose: () => setColorDialogStylist(null),
        onSaved: () => {
          setColorDialogStylist(null);
          refetch();
        }
      }
    )
  ] });
}
const metadata = { title: `Appointments | Dashboard - ${CONFIG.appName}` };
function AppointmentsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metadata.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarViewStylist, {})
  ] });
}
export {
  AppointmentsPage as default
};
