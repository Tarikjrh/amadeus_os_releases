import { o } from "./index-Di_Bgabu.js";
import { dn as useTheme, dp as getThemeProps, dq as React, r as reactExports, aR as useEnhancedEffect, cl as _extends, dr as PickerAdapterContext, j as jsxRuntimeExports, ds as LocalizationProvider, dt as _inheritsLoose, du as forceReflow, ck as _objectWithoutPropertiesLoose, f as r, dv as Transition, br as createSvgIcon, a9 as generateUtilityClass, $ as generateUtilityClasses, cr as useRtl, cj as useThemeProps, d4 as useSlotProps, l as clsx, c as Typography, o as composeClasses, q as styled, I as IconButton, aK as useControlled, aM as useEventCallback, dw as ownerDocument, d0 as useForkRef, bz as ButtonBase, a5 as alpha, dx as useTimeout, da as reactDomExports, dy as pickersSectionListClasses, dz as getPickersSectionListUtilityClass, k as useFormControl, dA as pickersInputBaseClasses, n as capitalize, dB as getPickersInputBaseUtilityClass, df as visuallyHidden, d6 as shouldForwardProp, dC as getPickersOutlinedInputUtilityClass, dD as pickersOutlinedInputClasses, dE as getPickersFilledInputUtilityClass, dF as pickersFilledInputClasses, aJ as useId, cm as resolveComponentProps, bX as useTheme$1, cn as Fade, dG as TransitionGroup, dH as THEME_ID, d7 as Grow, dI as FocusTrap, aS as Paper, aT as Popper, d as Button, i as useDefaultProps, dJ as ListContext, aa as useSlot, dK as isHostComponent, v as memoTheme, dL as listItemButtonClasses, a2 as Chip, cg as List } from "./index-B08HRm4A.js";
import { I as InputLabel, b as FormHelperText, F as FormControl, T as TextField, i as isMuiElement } from "./TextField-CIuP940C.js";
import { I as InputAdornment } from "./InputAdornment-BqZyQBIE.js";
import { b as DialogActions, D as Dialog, d as dialogClasses, a as DialogContent } from "./Dialog-C5RfKkDi.js";
function useMediaQueryOld(query, defaultMatches, matchMedia, ssrMatchMedia, noSsr) {
  const [match, setMatch] = reactExports.useState(() => {
    if (noSsr && matchMedia) {
      return matchMedia(query).matches;
    }
    if (ssrMatchMedia) {
      return ssrMatchMedia(query).matches;
    }
    return defaultMatches;
  });
  useEnhancedEffect(() => {
    if (!matchMedia) {
      return void 0;
    }
    const queryList = matchMedia(query);
    const updateMatch = () => {
      setMatch(queryList.matches);
    };
    updateMatch();
    queryList.addEventListener("change", updateMatch);
    return () => {
      queryList.removeEventListener("change", updateMatch);
    };
  }, [query, matchMedia]);
  return match;
}
const safeReact = {
  ...React
};
const maybeReactUseSyncExternalStore = safeReact.useSyncExternalStore;
function useMediaQueryNew(query, defaultMatches, matchMedia, ssrMatchMedia, noSsr) {
  const getDefaultSnapshot = reactExports.useCallback(() => defaultMatches, [defaultMatches]);
  const getServerSnapshot = reactExports.useMemo(() => {
    if (noSsr && matchMedia) {
      return () => matchMedia(query).matches;
    }
    if (ssrMatchMedia !== null) {
      const {
        matches
      } = ssrMatchMedia(query);
      return () => matches;
    }
    return getDefaultSnapshot;
  }, [getDefaultSnapshot, query, ssrMatchMedia, noSsr, matchMedia]);
  const [getSnapshot, subscribe] = reactExports.useMemo(() => {
    if (matchMedia === null) {
      return [getDefaultSnapshot, () => () => {
      }];
    }
    const mediaQueryList = matchMedia(query);
    return [() => mediaQueryList.matches, (notify) => {
      mediaQueryList.addEventListener("change", notify);
      return () => {
        mediaQueryList.removeEventListener("change", notify);
      };
    }];
  }, [getDefaultSnapshot, matchMedia, query]);
  const match = maybeReactUseSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return match;
}
function unstable_createUseMediaQuery(params = {}) {
  const {
    themeId
  } = params;
  return function useMediaQuery2(queryInput, options = {}) {
    let theme = useTheme();
    if (theme && themeId) {
      theme = theme[themeId] || theme;
    }
    const supportMatchMedia = typeof window !== "undefined" && typeof window.matchMedia !== "undefined";
    const {
      defaultMatches = false,
      matchMedia = supportMatchMedia ? window.matchMedia : null,
      ssrMatchMedia = null,
      noSsr = false
    } = getThemeProps({
      name: "MuiUseMediaQuery",
      props: options,
      theme
    });
    let query = typeof queryInput === "function" ? queryInput(theme) : queryInput;
    query = query.replace(/^@media( ?)/m, "");
    if (query.includes("print")) {
      console.warn([`MUI: You have provided a \`print\` query to the \`useMediaQuery\` hook.`, "Using the print media query to modify print styles can lead to unexpected results.", "Consider using the `displayPrint` field in the `sx` prop instead.", "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join("\n"));
    }
    const useMediaQueryImplementation = maybeReactUseSyncExternalStore !== void 0 ? useMediaQueryNew : useMediaQueryOld;
    const match = useMediaQueryImplementation(query, defaultMatches, matchMedia, ssrMatchMedia, noSsr);
    return match;
  };
}
unstable_createUseMediaQuery();
const getPickersLocalization = (pickersTranslations) => {
  return {
    components: {
      MuiLocalizationProvider: {
        defaultProps: {
          localeText: _extends({}, pickersTranslations)
        }
      }
    }
  };
};
const enUSPickers = {
  // Calendar navigation
  previousMonth: "Previous month",
  nextMonth: "Next month",
  // View navigation
  openPreviousView: "Open previous view",
  openNextView: "Open next view",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "year view is open, switch to calendar view" : "calendar view is open, switch to year view",
  // DateRange labels
  start: "Start",
  end: "End",
  startDate: "Start date",
  startTime: "Start time",
  endDate: "End date",
  endTime: "End time",
  // Action bar
  cancelButtonLabel: "Cancel",
  clearButtonLabel: "Clear",
  okButtonLabel: "OK",
  todayButtonLabel: "Today",
  nextStepButtonLabel: "Next",
  // Toolbar titles
  datePickerToolbarTitle: "Select date",
  dateTimePickerToolbarTitle: "Select date & time",
  timePickerToolbarTitle: "Select time",
  dateRangePickerToolbarTitle: "Select date range",
  timeRangePickerToolbarTitle: "Select time range",
  // Clock labels
  clockLabelText: (view, formattedTime) => `Select ${view}. ${!formattedTime ? "No time selected" : `Selected time is ${formattedTime}`}`,
  hoursClockNumberText: (hours) => `${hours} hours`,
  minutesClockNumberText: (minutes) => `${minutes} minutes`,
  secondsClockNumberText: (seconds) => `${seconds} seconds`,
  // Digital clock labels
  selectViewText: (view) => `Select ${view}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Week number",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Week ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open Picker labels
  openDatePickerDialogue: (formattedDate) => formattedDate ? `Choose date, selected date is ${formattedDate}` : "Choose date",
  openTimePickerDialogue: (formattedTime) => formattedTime ? `Choose time, selected time is ${formattedTime}` : "Choose time",
  openRangePickerDialogue: (formattedRange) => formattedRange ? `Choose range, selected range is ${formattedRange}` : "Choose range",
  fieldClearLabel: "Clear",
  // Table labels
  timeTableLabel: "pick time",
  dateTableLabel: "pick date",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Y".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa",
  // View names
  year: "Year",
  month: "Month",
  day: "Day",
  weekDay: "Week day",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds",
  meridiem: "Meridiem",
  // Common
  empty: "Empty"
};
const DEFAULT_LOCALE = enUSPickers;
getPickersLocalization(enUSPickers);
const useLocalizationContext = () => {
  const localization = reactExports.useContext(PickerAdapterContext);
  if (localization === null) {
    throw new Error(["MUI X: Can not find the date and time pickers localization context.", "It looks like you forgot to wrap your component in LocalizationProvider.", "This can also happen if you are bundling multiple versions of the `@mui/x-date-pickers` package"].join("\n"));
  }
  if (localization.adapter === null) {
    throw new Error(["MUI X: Can not find the date and time pickers adapter from its localization context.", "It looks like you forgot to pass a `dateAdapter` to your LocalizationProvider."].join("\n"));
  }
  const localeText = reactExports.useMemo(() => _extends({}, DEFAULT_LOCALE, localization.localeText), [localization.localeText]);
  return reactExports.useMemo(() => _extends({}, localization, {
    localeText
  }), [localization, localeText]);
};
const usePickerAdapter = () => useLocalizationContext().adapter;
const usePickerTranslations = () => useLocalizationContext().localeText;
const DATE_VALIDATION_PROP_NAMES = ["disablePast", "disableFuture", "minDate", "maxDate", "shouldDisableDate", "shouldDisableMonth", "shouldDisableYear"];
const TIME_VALIDATION_PROP_NAMES = ["disablePast", "disableFuture", "minTime", "maxTime", "shouldDisableTime", "minutesStep", "ampm", "disableIgnoringDatePartForTimeValidation"];
const DATE_TIME_VALIDATION_PROP_NAMES = ["minDateTime", "maxDateTime"];
const VALIDATION_PROP_NAMES = [...DATE_VALIDATION_PROP_NAMES, ...TIME_VALIDATION_PROP_NAMES, ...DATE_TIME_VALIDATION_PROP_NAMES];
const extractValidationProps = (props) => VALIDATION_PROP_NAMES.reduce((extractedProps, propName) => {
  if (props.hasOwnProperty(propName)) {
    extractedProps[propName] = props[propName];
  }
  return extractedProps;
}, {});
const SHARED_FIELD_INTERNAL_PROP_NAMES = ["value", "defaultValue", "referenceDate", "format", "formatDensity", "onChange", "timezone", "onError", "shouldRespectLeadingZeros", "selectedSections", "onSelectedSectionsChange", "unstableFieldRef", "unstableStartFieldRef", "unstableEndFieldRef", "enableAccessibleFieldDOMStructure", "disabled", "readOnly", "dateSeparator", "autoFocus", "focused"];
const useSplitFieldProps = (props, valueType) => {
  return reactExports.useMemo(() => {
    const forwardedProps = _extends({}, props);
    const internalProps = {};
    const extractProp = (propName) => {
      if (forwardedProps.hasOwnProperty(propName)) {
        internalProps[propName] = forwardedProps[propName];
        delete forwardedProps[propName];
      }
    };
    SHARED_FIELD_INTERNAL_PROP_NAMES.forEach(extractProp);
    if (valueType === "date") {
      DATE_VALIDATION_PROP_NAMES.forEach(extractProp);
    } else if (valueType === "time") {
      TIME_VALIDATION_PROP_NAMES.forEach(extractProp);
    } else if (valueType === "date-time") {
      DATE_VALIDATION_PROP_NAMES.forEach(extractProp);
      TIME_VALIDATION_PROP_NAMES.forEach(extractProp);
      DATE_TIME_VALIDATION_PROP_NAMES.forEach(extractProp);
    }
    return {
      forwardedProps,
      internalProps
    };
  }, [props, valueType]);
};
const areViewsEqual = (views, expectedViews) => {
  if (views.length !== expectedViews.length) {
    return false;
  }
  return expectedViews.every((expectedView) => views.includes(expectedView));
};
const applyDefaultViewProps = ({
  openTo,
  defaultOpenTo,
  views,
  defaultViews
}) => {
  const viewsWithDefault = views ?? defaultViews;
  let openToWithDefault;
  if (openTo != null) {
    openToWithDefault = openTo;
  } else if (viewsWithDefault.includes(defaultOpenTo)) {
    openToWithDefault = defaultOpenTo;
  } else if (viewsWithDefault.length > 0) {
    openToWithDefault = viewsWithDefault[0];
  } else {
    throw new Error("MUI X: The `views` prop must contain at least one view.");
  }
  return {
    views: viewsWithDefault,
    openTo: openToWithDefault
  };
};
const mergeDateAndTime = (adapter, dateParam, timeParam) => {
  let mergedDate = dateParam;
  mergedDate = adapter.setHours(mergedDate, adapter.getHours(timeParam));
  mergedDate = adapter.setMinutes(mergedDate, adapter.getMinutes(timeParam));
  mergedDate = adapter.setSeconds(mergedDate, adapter.getSeconds(timeParam));
  mergedDate = adapter.setMilliseconds(mergedDate, adapter.getMilliseconds(timeParam));
  return mergedDate;
};
const findClosestEnabledDate = ({
  date,
  disableFuture,
  disablePast,
  maxDate,
  minDate,
  isDateDisabled,
  adapter,
  timezone
}) => {
  const today = mergeDateAndTime(adapter, adapter.date(void 0, timezone), date);
  if (disablePast && adapter.isBefore(minDate, today)) {
    minDate = today;
  }
  if (disableFuture && adapter.isAfter(maxDate, today)) {
    maxDate = today;
  }
  let forward = date;
  let backward = date;
  if (adapter.isBefore(date, minDate)) {
    forward = minDate;
    backward = null;
  }
  if (adapter.isAfter(date, maxDate)) {
    if (backward) {
      backward = maxDate;
    }
    forward = null;
  }
  while (forward || backward) {
    if (forward && adapter.isAfter(forward, maxDate)) {
      forward = null;
    }
    if (backward && adapter.isBefore(backward, minDate)) {
      backward = null;
    }
    if (forward) {
      if (!isDateDisabled(forward)) {
        return forward;
      }
      forward = adapter.addDays(forward, 1);
    }
    if (backward) {
      if (!isDateDisabled(backward)) {
        return backward;
      }
      backward = adapter.addDays(backward, -1);
    }
  }
  return null;
};
const replaceInvalidDateByNull = (adapter, value) => !adapter.isValid(value) ? null : value;
const applyDefaultDate = (adapter, value, defaultValue) => {
  if (value == null || !adapter.isValid(value)) {
    return defaultValue;
  }
  return value;
};
const areDatesEqual = (adapter, a, b) => {
  if (!adapter.isValid(a) && a != null && !adapter.isValid(b) && b != null) {
    return true;
  }
  return adapter.isEqual(a, b);
};
const getMonthsInYear = (adapter, year) => {
  const firstMonth = adapter.startOfYear(year);
  const months = [firstMonth];
  while (months.length < 12) {
    const prevMonth = months[months.length - 1];
    months.push(adapter.addMonths(prevMonth, 1));
  }
  return months;
};
const getTodayDate = (adapter, timezone, valueType) => valueType === "date" ? adapter.startOfDay(adapter.date(void 0, timezone)) : adapter.date(void 0, timezone);
const formatMeridiem = (adapter, meridiem) => {
  const date = adapter.setHours(adapter.date(), meridiem === "am" ? 2 : 14);
  return adapter.format(date, "meridiem");
};
const DATE_VIEWS = ["year", "month", "day"];
const isDatePickerView = (view) => DATE_VIEWS.includes(view);
const resolveDateFormat = (adapter, {
  format,
  views
}, isInToolbar) => {
  if (format != null) {
    return format;
  }
  const formats = adapter.formats;
  if (areViewsEqual(views, ["year"])) {
    return formats.year;
  }
  if (areViewsEqual(views, ["month"])) {
    return formats.month;
  }
  if (areViewsEqual(views, ["day"])) {
    return formats.dayOfMonth;
  }
  if (areViewsEqual(views, ["month", "year"])) {
    return `${formats.month} ${formats.year}`;
  }
  if (areViewsEqual(views, ["day", "month"])) {
    return `${formats.month} ${formats.dayOfMonth}`;
  }
  if (isInToolbar) {
    return /en/.test(adapter.getCurrentLocaleCode()) ? formats.normalDateWithWeekday : formats.normalDate;
  }
  return formats.keyboardDate;
};
const getWeekdays = (adapter, date) => {
  const start = adapter.startOfWeek(date);
  return [0, 1, 2, 3, 4, 5, 6].map((diff) => adapter.addDays(start, diff));
};
const EXPORTED_TIME_VIEWS = ["hours", "minutes", "seconds"];
const TIME_VIEWS = ["hours", "minutes", "seconds", "meridiem"];
const isTimeView = (view) => EXPORTED_TIME_VIEWS.includes(view);
const isInternalTimeView = (view) => TIME_VIEWS.includes(view);
const getMeridiem = (date, adapter) => {
  if (!date) {
    return null;
  }
  return adapter.getHours(date) >= 12 ? "pm" : "am";
};
const convertValueToMeridiem = (value, meridiem, ampm) => {
  if (ampm) {
    const currentMeridiem = value >= 12 ? "pm" : "am";
    if (currentMeridiem !== meridiem) {
      return meridiem === "am" ? value - 12 : value + 12;
    }
  }
  return value;
};
const convertToMeridiem = (time, meridiem, ampm, adapter) => {
  const newHoursAmount = convertValueToMeridiem(adapter.getHours(time), meridiem, ampm);
  return adapter.setHours(time, newHoursAmount);
};
const getSecondsInDay = (date, adapter) => {
  return adapter.getHours(date) * 3600 + adapter.getMinutes(date) * 60 + adapter.getSeconds(date);
};
const createIsAfterIgnoreDatePart = (disableIgnoringDatePartForTimeValidation, adapter) => (dateLeft, dateRight) => {
  if (disableIgnoringDatePartForTimeValidation) {
    return adapter.isAfter(dateLeft, dateRight);
  }
  return getSecondsInDay(dateLeft, adapter) > getSecondsInDay(dateRight, adapter);
};
const resolveTimeFormat = (adapter, {
  format,
  views,
  ampm
}) => {
  if (format != null) {
    return format;
  }
  const formats = adapter.formats;
  if (areViewsEqual(views, ["hours"])) {
    return ampm ? `${formats.hours12h} ${formats.meridiem}` : formats.hours24h;
  }
  if (areViewsEqual(views, ["minutes"])) {
    return formats.minutes;
  }
  if (areViewsEqual(views, ["seconds"])) {
    return formats.seconds;
  }
  if (areViewsEqual(views, ["minutes", "seconds"])) {
    return `${formats.minutes}:${formats.seconds}`;
  }
  if (areViewsEqual(views, ["hours", "minutes", "seconds"])) {
    return ampm ? `${formats.hours12h}:${formats.minutes}:${formats.seconds} ${formats.meridiem}` : `${formats.hours24h}:${formats.minutes}:${formats.seconds}`;
  }
  return ampm ? `${formats.hours12h}:${formats.minutes} ${formats.meridiem}` : `${formats.hours24h}:${formats.minutes}`;
};
const getDateSectionConfigFromFormatToken = (adapter, formatToken) => {
  const config = adapter.formatTokenMap[formatToken];
  if (config == null) {
    throw new Error([`MUI X: The token "${formatToken}" is not supported by the Date and Time Pickers.`, "Please try using another token or open an issue on https://github.com/mui/mui-x/issues/new/choose if you think it should be supported."].join("\n"));
  }
  if (typeof config === "string") {
    return {
      type: config,
      contentType: config === "meridiem" ? "letter" : "digit",
      maxLength: void 0
    };
  }
  return {
    type: config.sectionType,
    contentType: config.contentType,
    maxLength: config.maxLength
  };
};
const getDaysInWeekStr = (adapter, format) => {
  const elements = [];
  const now = adapter.date(void 0, "default");
  const startDate = adapter.startOfWeek(now);
  const endDate = adapter.endOfWeek(now);
  let current = startDate;
  while (adapter.isBefore(current, endDate)) {
    elements.push(current);
    current = adapter.addDays(current, 1);
  }
  return elements.map((weekDay) => adapter.formatByString(weekDay, format));
};
const getLetterEditingOptions = (adapter, timezone, sectionType, format) => {
  switch (sectionType) {
    case "month": {
      return getMonthsInYear(adapter, adapter.date(void 0, timezone)).map((month) => adapter.formatByString(month, format));
    }
    case "weekDay": {
      return getDaysInWeekStr(adapter, format);
    }
    case "meridiem": {
      const now = adapter.date(void 0, timezone);
      return [adapter.startOfDay(now), adapter.endOfDay(now)].map((date) => adapter.formatByString(date, format));
    }
    default: {
      return [];
    }
  }
};
const FORMAT_SECONDS_NO_LEADING_ZEROS = "s";
const NON_LOCALIZED_DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const getLocalizedDigits = (adapter) => {
  const today = adapter.date(void 0);
  const formattedZero = adapter.formatByString(adapter.setSeconds(today, 0), FORMAT_SECONDS_NO_LEADING_ZEROS);
  if (formattedZero === "0") {
    return NON_LOCALIZED_DIGITS;
  }
  return Array.from({
    length: 10
  }).map((_, index) => adapter.formatByString(adapter.setSeconds(today, index), FORMAT_SECONDS_NO_LEADING_ZEROS));
};
const removeLocalizedDigits = (valueStr, localizedDigits) => {
  if (localizedDigits[0] === "0") {
    return valueStr;
  }
  const digits = [];
  let currentFormattedDigit = "";
  for (let i = 0; i < valueStr.length; i += 1) {
    currentFormattedDigit += valueStr[i];
    const matchingDigitIndex = localizedDigits.indexOf(currentFormattedDigit);
    if (matchingDigitIndex > -1) {
      digits.push(matchingDigitIndex.toString());
      currentFormattedDigit = "";
    }
  }
  return digits.join("");
};
const applyLocalizedDigits = (valueStr, localizedDigits) => {
  if (localizedDigits[0] === "0") {
    return valueStr;
  }
  return valueStr.split("").map((char) => localizedDigits[Number(char)]).join("");
};
const isStringNumber = (valueStr, localizedDigits) => {
  const nonLocalizedValueStr = removeLocalizedDigits(valueStr, localizedDigits);
  return nonLocalizedValueStr !== " " && !Number.isNaN(Number(nonLocalizedValueStr));
};
const cleanLeadingZeros = (valueStr, size) => {
  return Number(valueStr).toString().padStart(size, "0");
};
const cleanDigitSectionValue = (adapter, value, sectionBoundaries, localizedDigits, section) => {
  if (section.type === "day" && section.contentType === "digit-with-letter") {
    const date = adapter.setDate(sectionBoundaries.longestMonth, value);
    return adapter.formatByString(date, section.format);
  }
  let valueStr = value.toString();
  if (section.hasLeadingZerosInInput) {
    valueStr = cleanLeadingZeros(valueStr, section.maxLength);
  }
  return applyLocalizedDigits(valueStr, localizedDigits);
};
const getSectionVisibleValue = (section, target, localizedDigits) => {
  let value = section.value || section.placeholder;
  const hasLeadingZeros = target === "non-input" ? section.hasLeadingZerosInFormat : section.hasLeadingZerosInInput;
  if (target === "non-input" && section.hasLeadingZerosInInput && !section.hasLeadingZerosInFormat) {
    value = Number(removeLocalizedDigits(value, localizedDigits)).toString();
  }
  const shouldAddInvisibleSpace = ["input-rtl", "input-ltr"].includes(target) && section.contentType === "digit" && !hasLeadingZeros && value.length === 1;
  if (shouldAddInvisibleSpace) {
    value = `${value}‎`;
  }
  if (target === "input-rtl") {
    value = `⁨${value}⁩`;
  }
  return value;
};
const changeSectionValueFormat = (adapter, valueStr, currentFormat, newFormat) => {
  return adapter.formatByString(adapter.parse(valueStr, currentFormat), newFormat);
};
const isFourDigitYearFormat = (adapter, format) => adapter.formatByString(adapter.date(void 0, "system"), format).length === 4;
const doesSectionFormatHaveLeadingZeros = (adapter, contentType, sectionType, format) => {
  if (contentType !== "digit") {
    return false;
  }
  const now = adapter.date(void 0, "default");
  switch (sectionType) {
    // We can't use `changeSectionValueFormat`, because  `adapter.parse('1', 'YYYY')` returns `1971` instead of `1`.
    case "year": {
      if (adapter.lib === "dayjs" && format === "YY") {
        return true;
      }
      return adapter.formatByString(adapter.setYear(now, 1), format).startsWith("0");
    }
    case "month": {
      return adapter.formatByString(adapter.startOfYear(now), format).length > 1;
    }
    case "day": {
      return adapter.formatByString(adapter.startOfMonth(now), format).length > 1;
    }
    case "weekDay": {
      return adapter.formatByString(adapter.startOfWeek(now), format).length > 1;
    }
    case "hours": {
      return adapter.formatByString(adapter.setHours(now, 1), format).length > 1;
    }
    case "minutes": {
      return adapter.formatByString(adapter.setMinutes(now, 1), format).length > 1;
    }
    case "seconds": {
      return adapter.formatByString(adapter.setSeconds(now, 1), format).length > 1;
    }
    default: {
      throw new Error("Invalid section type");
    }
  }
};
const getDateFromDateSections = (adapter, sections, localizedDigits) => {
  const shouldSkipWeekDays = sections.some((section) => section.type === "day");
  const sectionFormats = [];
  const sectionValues = [];
  for (let i = 0; i < sections.length; i += 1) {
    const section = sections[i];
    const shouldSkip = shouldSkipWeekDays && section.type === "weekDay";
    if (!shouldSkip) {
      sectionFormats.push(section.format);
      sectionValues.push(getSectionVisibleValue(section, "non-input", localizedDigits));
    }
  }
  const formatWithoutSeparator = sectionFormats.join(" ");
  const dateWithoutSeparatorStr = sectionValues.join(" ");
  return adapter.parse(dateWithoutSeparatorStr, formatWithoutSeparator);
};
const createDateStrForV7HiddenInputFromSections = (sections) => sections.map((section) => {
  return `${section.startSeparator}${section.value || section.placeholder}${section.endSeparator}`;
}).join("");
const createDateStrForV6InputFromSections = (sections, localizedDigits, isRtl) => {
  const formattedSections = sections.map((section) => {
    const dateValue = getSectionVisibleValue(section, isRtl ? "input-rtl" : "input-ltr", localizedDigits);
    return `${section.startSeparator}${dateValue}${section.endSeparator}`;
  });
  const dateStr = formattedSections.join("");
  if (!isRtl) {
    return dateStr;
  }
  return `⁦${dateStr}⁩`;
};
const getSectionsBoundaries = (adapter, localizedDigits, timezone) => {
  const today = adapter.date(void 0, timezone);
  const endOfYear = adapter.endOfYear(today);
  const endOfDay = adapter.endOfDay(today);
  const {
    maxDaysInMonth,
    longestMonth
  } = getMonthsInYear(adapter, today).reduce((acc, month) => {
    const daysInMonth = adapter.getDaysInMonth(month);
    if (daysInMonth > acc.maxDaysInMonth) {
      return {
        maxDaysInMonth: daysInMonth,
        longestMonth: month
      };
    }
    return acc;
  }, {
    maxDaysInMonth: 0,
    longestMonth: null
  });
  return {
    year: ({
      format
    }) => ({
      minimum: 0,
      maximum: isFourDigitYearFormat(adapter, format) ? 9999 : 99
    }),
    month: () => ({
      minimum: 1,
      // Assumption: All years have the same amount of months
      maximum: adapter.getMonth(endOfYear) + 1
    }),
    day: ({
      currentDate
    }) => ({
      minimum: 1,
      maximum: adapter.isValid(currentDate) ? adapter.getDaysInMonth(currentDate) : maxDaysInMonth,
      longestMonth
    }),
    weekDay: ({
      format,
      contentType
    }) => {
      if (contentType === "digit") {
        const daysInWeek = getDaysInWeekStr(adapter, format).map(Number);
        return {
          minimum: Math.min(...daysInWeek),
          maximum: Math.max(...daysInWeek)
        };
      }
      return {
        minimum: 1,
        maximum: 7
      };
    },
    hours: ({
      format
    }) => {
      const lastHourInDay = adapter.getHours(endOfDay);
      const hasMeridiem = removeLocalizedDigits(adapter.formatByString(adapter.endOfDay(today), format), localizedDigits) !== lastHourInDay.toString();
      if (hasMeridiem) {
        return {
          minimum: 1,
          // Some days skip midnight (`America/Santiago` on 2026-09-06), but 2000-01-01 has a midnight in all timezones.
          maximum: Number(removeLocalizedDigits(adapter.formatByString(adapter.date("2000-01-01T00:00", timezone), format), localizedDigits))
        };
      }
      return {
        minimum: 0,
        maximum: lastHourInDay
      };
    },
    minutes: () => ({
      minimum: 0,
      // Assumption: All years have the same amount of minutes
      maximum: adapter.getMinutes(endOfDay)
    }),
    seconds: () => ({
      minimum: 0,
      // Assumption: All years have the same amount of seconds
      maximum: adapter.getSeconds(endOfDay)
    }),
    meridiem: () => ({
      minimum: 0,
      maximum: 1
    }),
    empty: () => ({
      minimum: 0,
      maximum: 0
    })
  };
};
const transferDateSectionValue = (adapter, section, dateToTransferFrom, dateToTransferTo) => {
  switch (section.type) {
    case "year": {
      return adapter.setYear(dateToTransferTo, adapter.getYear(dateToTransferFrom));
    }
    case "month": {
      return adapter.setMonth(dateToTransferTo, adapter.getMonth(dateToTransferFrom));
    }
    case "weekDay": {
      let dayInWeekStrOfActiveDate = adapter.formatByString(dateToTransferFrom, section.format);
      if (section.hasLeadingZerosInInput) {
        dayInWeekStrOfActiveDate = cleanLeadingZeros(dayInWeekStrOfActiveDate, section.maxLength);
      }
      const formattedDaysInWeek = getDaysInWeekStr(adapter, section.format);
      const dayInWeekOfActiveDate = formattedDaysInWeek.indexOf(dayInWeekStrOfActiveDate);
      const dayInWeekOfNewSectionValue = formattedDaysInWeek.indexOf(section.value);
      const diff = dayInWeekOfNewSectionValue - dayInWeekOfActiveDate;
      return adapter.addDays(dateToTransferFrom, diff);
    }
    case "day": {
      return adapter.setDate(dateToTransferTo, adapter.getDate(dateToTransferFrom));
    }
    case "meridiem": {
      const meridiem = adapter.getHours(dateToTransferFrom) < 12 ? "am" : "pm";
      return convertToMeridiem(dateToTransferTo, meridiem, true, adapter);
    }
    case "hours": {
      return adapter.setHours(dateToTransferTo, adapter.getHours(dateToTransferFrom));
    }
    case "minutes": {
      return adapter.setMinutes(dateToTransferTo, adapter.getMinutes(dateToTransferFrom));
    }
    case "seconds": {
      return adapter.setSeconds(dateToTransferTo, adapter.getSeconds(dateToTransferFrom));
    }
    default: {
      return dateToTransferTo;
    }
  }
};
const reliableSectionModificationOrder = {
  year: 1,
  month: 2,
  day: 3,
  weekDay: 4,
  hours: 5,
  minutes: 6,
  seconds: 7,
  meridiem: 8,
  empty: 9
};
const mergeDateIntoReferenceDate = (adapter, dateToTransferFrom, sections, referenceDate, shouldLimitToEditedSections) => (
  // cloning sections before sort to avoid mutating it
  [...sections].sort((a, b) => reliableSectionModificationOrder[a.type] - reliableSectionModificationOrder[b.type]).reduce((mergedDate, section) => {
    if (!shouldLimitToEditedSections || section.modified) {
      return transferDateSectionValue(adapter, section, dateToTransferFrom, mergedDate);
    }
    return mergedDate;
  }, referenceDate)
);
const isAndroid = () => navigator.userAgent.toLowerCase().includes("android");
const getSectionOrder = (sections, shouldApplyRTL) => {
  const neighbors = {};
  if (!shouldApplyRTL) {
    sections.forEach((_, index) => {
      const leftIndex = index === 0 ? null : index - 1;
      const rightIndex = index === sections.length - 1 ? null : index + 1;
      neighbors[index] = {
        leftIndex,
        rightIndex
      };
    });
    return {
      neighbors,
      startIndex: 0,
      endIndex: sections.length - 1
    };
  }
  const rtl2ltr = {};
  const ltr2rtl = {};
  let groupedSectionsStart = 0;
  let groupedSectionsEnd = 0;
  let RTLIndex = sections.length - 1;
  while (RTLIndex >= 0) {
    groupedSectionsEnd = sections.findIndex(
      // eslint-disable-next-line @typescript-eslint/no-loop-func
      (section, index) => index >= groupedSectionsStart && section.endSeparator?.includes(" ") && // Special case where the spaces were not there in the initial input
      section.endSeparator !== " / "
    );
    if (groupedSectionsEnd === -1) {
      groupedSectionsEnd = sections.length - 1;
    }
    for (let i = groupedSectionsEnd; i >= groupedSectionsStart; i -= 1) {
      ltr2rtl[i] = RTLIndex;
      rtl2ltr[RTLIndex] = i;
      RTLIndex -= 1;
    }
    groupedSectionsStart = groupedSectionsEnd + 1;
  }
  sections.forEach((_, index) => {
    const rtlIndex = ltr2rtl[index];
    const leftIndex = rtlIndex === 0 ? null : rtl2ltr[rtlIndex - 1];
    const rightIndex = rtlIndex === sections.length - 1 ? null : rtl2ltr[rtlIndex + 1];
    neighbors[index] = {
      leftIndex,
      rightIndex
    };
  });
  return {
    neighbors,
    startIndex: rtl2ltr[0],
    endIndex: rtl2ltr[sections.length - 1]
  };
};
const parseSelectedSections = (selectedSections, sections) => {
  if (selectedSections == null) {
    return null;
  }
  if (selectedSections === "all") {
    return "all";
  }
  if (typeof selectedSections === "string") {
    const index = sections.findIndex((section) => section.type === selectedSections);
    return index === -1 ? null : index;
  }
  return selectedSections;
};
const expandFormat = ({
  adapter,
  format
}) => {
  let formatExpansionOverflow = 10;
  let prevFormat = format;
  let nextFormat = adapter.expandFormat(format);
  while (nextFormat !== prevFormat) {
    prevFormat = nextFormat;
    nextFormat = adapter.expandFormat(prevFormat);
    formatExpansionOverflow -= 1;
    if (formatExpansionOverflow < 0) {
      throw new Error("MUI X: The format expansion seems to be in an infinite loop. Please open an issue with the format passed to the component.");
    }
  }
  return nextFormat;
};
const getEscapedPartsFromFormat = ({
  adapter,
  expandedFormat
}) => {
  const escapedParts = [];
  const {
    start: startChar,
    end: endChar
  } = adapter.escapedCharacters;
  const regExp = new RegExp(`(\\${startChar}[^\\${endChar}]*\\${endChar})+`, "g");
  let match = null;
  while (match = regExp.exec(expandedFormat)) {
    escapedParts.push({
      start: match.index,
      end: regExp.lastIndex - 1
    });
  }
  return escapedParts;
};
const getSectionPlaceholder = (adapter, localeText, sectionConfig, sectionFormat) => {
  switch (sectionConfig.type) {
    case "year": {
      return localeText.fieldYearPlaceholder({
        digitAmount: adapter.formatByString(adapter.date(void 0, "default"), sectionFormat).length,
        format: sectionFormat
      });
    }
    case "month": {
      return localeText.fieldMonthPlaceholder({
        contentType: sectionConfig.contentType,
        format: sectionFormat
      });
    }
    case "day": {
      return localeText.fieldDayPlaceholder({
        format: sectionFormat
      });
    }
    case "weekDay": {
      return localeText.fieldWeekDayPlaceholder({
        contentType: sectionConfig.contentType,
        format: sectionFormat
      });
    }
    case "hours": {
      return localeText.fieldHoursPlaceholder({
        format: sectionFormat
      });
    }
    case "minutes": {
      return localeText.fieldMinutesPlaceholder({
        format: sectionFormat
      });
    }
    case "seconds": {
      return localeText.fieldSecondsPlaceholder({
        format: sectionFormat
      });
    }
    case "meridiem": {
      return localeText.fieldMeridiemPlaceholder({
        format: sectionFormat
      });
    }
    default: {
      return sectionFormat;
    }
  }
};
const createSection = ({
  adapter,
  date,
  shouldRespectLeadingZeros,
  localeText,
  localizedDigits,
  now,
  token,
  startSeparator
}) => {
  if (token === "") {
    throw new Error("MUI X: Should not call `commitToken` with an empty token");
  }
  const sectionConfig = getDateSectionConfigFromFormatToken(adapter, token);
  const hasLeadingZerosInFormat = doesSectionFormatHaveLeadingZeros(adapter, sectionConfig.contentType, sectionConfig.type, token);
  const hasLeadingZerosInInput = shouldRespectLeadingZeros ? hasLeadingZerosInFormat : sectionConfig.contentType === "digit";
  const isValidDate = adapter.isValid(date);
  let sectionValue = isValidDate ? adapter.formatByString(date, token) : "";
  let maxLength = null;
  if (hasLeadingZerosInInput) {
    if (hasLeadingZerosInFormat) {
      maxLength = sectionValue === "" ? adapter.formatByString(now, token).length : sectionValue.length;
    } else {
      if (sectionConfig.maxLength == null) {
        throw new Error(`MUI X: The token ${token} should have a 'maxLength' property on it's adapter`);
      }
      maxLength = sectionConfig.maxLength;
      if (isValidDate) {
        sectionValue = applyLocalizedDigits(cleanLeadingZeros(removeLocalizedDigits(sectionValue, localizedDigits), maxLength), localizedDigits);
      }
    }
  }
  return _extends({}, sectionConfig, {
    format: token,
    maxLength,
    value: sectionValue,
    placeholder: getSectionPlaceholder(adapter, localeText, sectionConfig, token),
    hasLeadingZerosInFormat,
    hasLeadingZerosInInput,
    startSeparator,
    endSeparator: "",
    modified: false
  });
};
const buildSections = (parameters) => {
  const {
    adapter,
    expandedFormat,
    escapedParts
  } = parameters;
  const now = adapter.date(void 0);
  const sections = [];
  let startSeparator = "";
  const validTokens = Object.keys(adapter.formatTokenMap).sort((a, b) => b.length - a.length);
  const regExpFirstWordInFormat = /^([a-zA-Z]+)/;
  const regExpWordOnlyComposedOfTokens = new RegExp(`^(${validTokens.join("|")})*$`);
  const regExpFirstTokenInWord = new RegExp(`^(${validTokens.join("|")})`);
  const getEscapedPartOfCurrentChar = (i2) => escapedParts.find((escapeIndex) => escapeIndex.start <= i2 && escapeIndex.end >= i2);
  let i = 0;
  while (i < expandedFormat.length) {
    const escapedPartOfCurrentChar = getEscapedPartOfCurrentChar(i);
    const isEscapedChar = escapedPartOfCurrentChar != null;
    const firstWordInFormat = regExpFirstWordInFormat.exec(expandedFormat.slice(i))?.[1];
    if (!isEscapedChar && firstWordInFormat != null && regExpWordOnlyComposedOfTokens.test(firstWordInFormat)) {
      let word = firstWordInFormat;
      while (word.length > 0) {
        const firstWord = regExpFirstTokenInWord.exec(word)[1];
        word = word.slice(firstWord.length);
        sections.push(createSection(_extends({}, parameters, {
          now,
          token: firstWord,
          startSeparator
        })));
        startSeparator = "";
      }
      i += firstWordInFormat.length;
    } else {
      const char = expandedFormat[i];
      const isEscapeBoundary = isEscapedChar && escapedPartOfCurrentChar?.start === i || escapedPartOfCurrentChar?.end === i;
      if (!isEscapeBoundary) {
        if (sections.length === 0) {
          startSeparator += char;
        } else {
          sections[sections.length - 1].endSeparator += char;
          sections[sections.length - 1].isEndFormatSeparator = true;
        }
      }
      i += 1;
    }
  }
  if (sections.length === 0 && startSeparator.length > 0) {
    sections.push({
      type: "empty",
      contentType: "letter",
      maxLength: null,
      format: "",
      value: "",
      placeholder: "",
      hasLeadingZerosInFormat: false,
      hasLeadingZerosInInput: false,
      startSeparator,
      endSeparator: "",
      modified: false
    });
  }
  return sections;
};
const postProcessSections = ({
  isRtl,
  formatDensity,
  sections
}) => {
  return sections.map((section) => {
    const cleanSeparator = (separator) => {
      let cleanedSeparator = separator;
      if (isRtl && cleanedSeparator !== null && cleanedSeparator.includes(" ")) {
        cleanedSeparator = `⁩${cleanedSeparator}⁦`;
      }
      if (formatDensity === "spacious" && ["/", ".", "-"].includes(cleanedSeparator)) {
        cleanedSeparator = ` ${cleanedSeparator} `;
      }
      return cleanedSeparator;
    };
    section.startSeparator = cleanSeparator(section.startSeparator);
    section.endSeparator = cleanSeparator(section.endSeparator);
    return section;
  });
};
const buildSectionsFromFormat = (parameters) => {
  let expandedFormat = expandFormat(parameters);
  if (parameters.isRtl && parameters.enableAccessibleFieldDOMStructure) {
    expandedFormat = expandedFormat.split(" ").reverse().join(" ");
  }
  const escapedParts = getEscapedPartsFromFormat(_extends({}, parameters, {
    expandedFormat
  }));
  const sections = buildSections(_extends({}, parameters, {
    expandedFormat,
    escapedParts
  }));
  return postProcessSections(_extends({}, parameters, {
    sections
  }));
};
const PickerContext = /* @__PURE__ */ reactExports.createContext(null);
const usePickerContext = () => {
  const value = reactExports.useContext(PickerContext);
  if (value == null) {
    throw new Error("MUI X: The `usePickerContext` hook can only be called inside the context of a Picker component");
  }
  return value;
};
const useNullablePickerContext = () => reactExports.useContext(PickerContext);
const IsValidValueContext = /* @__PURE__ */ reactExports.createContext(() => true);
function useIsValidValue() {
  return reactExports.useContext(IsValidValueContext);
}
const PickerFieldPrivateContext = /* @__PURE__ */ reactExports.createContext(null);
function useNullableFieldPrivateContext() {
  return reactExports.useContext(PickerFieldPrivateContext);
}
const PickerActionsContext = /* @__PURE__ */ reactExports.createContext(null);
const PickerPrivateContext = /* @__PURE__ */ reactExports.createContext({
  ownerState: {
    isPickerDisabled: false,
    isPickerReadOnly: false,
    isPickerValueEmpty: false,
    isPickerOpen: false,
    pickerVariant: "desktop",
    pickerOrientation: "portrait"
  },
  rootRefObject: {
    current: null
  },
  labelId: void 0,
  dismissViews: () => {
  },
  hasUIView: true,
  getCurrentViewMode: () => "UI",
  triggerElement: null,
  viewContainerRole: null,
  defaultActionBarActions: [],
  onPopperExited: void 0
});
function PickerProvider(props) {
  const {
    contextValue,
    actionsContextValue,
    privateContextValue,
    fieldPrivateContextValue,
    isValidContextValue,
    localeText,
    children
  } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PickerContext.Provider, {
    value: contextValue,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(PickerActionsContext.Provider, {
      value: actionsContextValue,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(PickerPrivateContext.Provider, {
        value: privateContextValue,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(PickerFieldPrivateContext.Provider, {
          value: fieldPrivateContextValue,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(IsValidValueContext.Provider, {
            value: isValidContextValue,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(LocalizationProvider, {
              localeText,
              children
            })
          })
        })
      })
    })
  });
}
const usePickerActionsContext = () => {
  const value = reactExports.useContext(PickerActionsContext);
  if (value == null) {
    throw new Error(["MUI X: The `usePickerActionsContext` can only be called in fields that are used as a slot of a Picker component"].join("\n"));
  }
  return value;
};
const useDefaultDates = () => useLocalizationContext().defaultDates;
const useNow = (timezone) => {
  const adapter = usePickerAdapter();
  const now = reactExports.useRef(void 0);
  if (now.current === void 0) {
    now.current = adapter.date(void 0, timezone);
  }
  return now.current;
};
const refType = o.oneOfType([o.func, o.object]);
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
function addClass(element, className) {
  if (element.classList) element.classList.add(className);
  else if (!hasClass(element, className)) if (typeof element.className === "string") element.className = element.className + " " + className;
  else element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
}
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
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
var _addClass = function addClass$1(node, classes) {
  return node && classes && classes.split(" ").forEach(function(c) {
    return addClass(node, c);
  });
};
var removeClass = function removeClass2(node, classes) {
  return node && classes && classes.split(" ").forEach(function(c) {
    return removeClass$1(node, c);
  });
};
var CSSTransition = /* @__PURE__ */ (function(_React$Component) {
  _inheritsLoose(CSSTransition2, _React$Component);
  function CSSTransition2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };
    _this.onEnter = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument[0], appearing = _this$resolveArgument[1];
      _this.removeClasses(node, "exit");
      _this.addClass(node, appearing ? "appear" : "enter", "base");
      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };
    _this.onEntering = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument2[0], appearing = _this$resolveArgument2[1];
      var type = appearing ? "appear" : "enter";
      _this.addClass(node, type, "active");
      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };
    _this.onEntered = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument3[0], appearing = _this$resolveArgument3[1];
      var type = appearing ? "appear" : "enter";
      _this.removeClasses(node, type);
      _this.addClass(node, type, "done");
      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };
    _this.onExit = function(maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode), node = _this$resolveArgument4[0];
      _this.removeClasses(node, "appear");
      _this.removeClasses(node, "enter");
      _this.addClass(node, "exit", "base");
      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };
    _this.onExiting = function(maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode), node = _this$resolveArgument5[0];
      _this.addClass(node, "exit", "active");
      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };
    _this.onExited = function(maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode), node = _this$resolveArgument6[0];
      _this.removeClasses(node, "exit");
      _this.addClass(node, "exit", "done");
      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };
    _this.resolveArguments = function(maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] : [maybeNode, maybeAppearing];
    };
    _this.getClassNames = function(type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === "string";
      var prefix = isStringClassNames && classNames ? classNames + "-" : "";
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName,
        activeClassName,
        doneClassName
      };
    };
    return _this;
  }
  var _proto = CSSTransition2.prototype;
  _proto.addClass = function addClass2(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];
    var _this$getClassNames = this.getClassNames("enter"), doneClassName = _this$getClassNames.doneClassName;
    if (type === "appear" && phase === "done" && doneClassName) {
      className += " " + doneClassName;
    }
    if (phase === "active") {
      if (node) forceReflow(node);
    }
    if (className) {
      this.appliedClasses[type][phase] = className;
      _addClass(node, className);
    }
  };
  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type], baseClassName = _this$appliedClasses$.base, activeClassName = _this$appliedClasses$.active, doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};
    if (baseClassName) {
      removeClass(node, baseClassName);
    }
    if (activeClassName) {
      removeClass(node, activeClassName);
    }
    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };
  _proto.render = function render() {
    var _this$props = this.props;
    _this$props.classNames;
    var props = _objectWithoutPropertiesLoose(_this$props, ["classNames"]);
    return /* @__PURE__ */ r.createElement(Transition, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };
  return CSSTransition2;
})(r.Component);
CSSTransition.defaultProps = {
  classNames: ""
};
CSSTransition.propTypes = {};
const ArrowDropDownIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M7 10l5 5 5-5z"
}));
const ArrowLeftIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
}));
const ArrowRightIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
}));
const CalendarIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
}));
const ClockIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
  children: [/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), /* @__PURE__ */ jsxRuntimeExports.jsx("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  })]
}));
const DateRangeIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
}));
const TimeIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
  children: [/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), /* @__PURE__ */ jsxRuntimeExports.jsx("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  })]
}));
const ClearIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}));
function getPickersArrowSwitcherUtilityClass(slot) {
  return generateUtilityClass("MuiPickersArrowSwitcher", slot);
}
generateUtilityClasses("MuiPickersArrowSwitcher", ["root", "spacer", "button", "previousIconButton", "nextIconButton", "leftArrowIcon", "rightArrowIcon"]);
const usePickerPrivateContext = () => reactExports.useContext(PickerPrivateContext);
const _excluded$r = ["children", "className", "slots", "slotProps", "isNextDisabled", "isNextHidden", "onGoToNext", "nextLabel", "isPreviousDisabled", "isPreviousHidden", "onGoToPrevious", "previousLabel", "labelId", "classes"], _excluded2$6 = ["ownerState"], _excluded3$1 = ["ownerState"];
const PickersArrowSwitcherRoot = styled("div", {
  name: "MuiPickersArrowSwitcher",
  slot: "Root"
})({
  display: "flex"
});
const PickersArrowSwitcherSpacer = styled("div", {
  name: "MuiPickersArrowSwitcher",
  slot: "Spacer"
})(({
  theme
}) => ({
  width: theme.spacing(3)
}));
const PickersArrowSwitcherButton = styled(IconButton, {
  name: "MuiPickersArrowSwitcher",
  slot: "Button"
})({
  variants: [{
    props: {
      isButtonHidden: true
    },
    style: {
      visibility: "hidden"
    }
  }]
});
const useUtilityClasses$m = (classes) => {
  const slots = {
    root: ["root"],
    spacer: ["spacer"],
    button: ["button"],
    previousIconButton: ["previousIconButton"],
    nextIconButton: ["nextIconButton"],
    leftArrowIcon: ["leftArrowIcon"],
    rightArrowIcon: ["rightArrowIcon"]
  };
  return composeClasses(slots, getPickersArrowSwitcherUtilityClass, classes);
};
const PickersArrowSwitcher = /* @__PURE__ */ reactExports.forwardRef(function PickersArrowSwitcher2(inProps, ref) {
  const isRtl = useRtl();
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersArrowSwitcher"
  });
  const {
    children,
    className,
    slots,
    slotProps,
    isNextDisabled,
    isNextHidden,
    onGoToNext,
    nextLabel,
    isPreviousDisabled,
    isPreviousHidden,
    onGoToPrevious,
    previousLabel,
    labelId,
    classes: classesProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$r);
  const {
    ownerState
  } = usePickerPrivateContext();
  const classes = useUtilityClasses$m(classesProp);
  const nextProps = {
    isDisabled: isNextDisabled,
    isHidden: isNextHidden,
    goTo: onGoToNext,
    label: nextLabel
  };
  const previousProps = {
    isDisabled: isPreviousDisabled,
    isHidden: isPreviousHidden,
    goTo: onGoToPrevious,
    label: previousLabel
  };
  const PreviousIconButton = slots?.previousIconButton ?? PickersArrowSwitcherButton;
  const previousIconButtonProps = useSlotProps({
    elementType: PreviousIconButton,
    externalSlotProps: slotProps?.previousIconButton,
    additionalProps: {
      size: "medium",
      title: previousProps.label,
      "aria-label": previousProps.label,
      disabled: previousProps.isDisabled,
      edge: "end",
      onClick: previousProps.goTo
    },
    ownerState: _extends({}, ownerState, {
      isButtonHidden: previousProps.isHidden ?? false
    }),
    className: clsx(classes.button, classes.previousIconButton)
  });
  const NextIconButton = slots?.nextIconButton ?? PickersArrowSwitcherButton;
  const nextIconButtonProps = useSlotProps({
    elementType: NextIconButton,
    externalSlotProps: slotProps?.nextIconButton,
    additionalProps: {
      size: "medium",
      title: nextProps.label,
      "aria-label": nextProps.label,
      disabled: nextProps.isDisabled,
      edge: "start",
      onClick: nextProps.goTo
    },
    ownerState: _extends({}, ownerState, {
      isButtonHidden: nextProps.isHidden ?? false
    }),
    className: clsx(classes.button, classes.nextIconButton)
  });
  const LeftArrowIcon = slots?.leftArrowIcon ?? ArrowLeftIcon;
  const _useSlotProps = useSlotProps({
    elementType: LeftArrowIcon,
    externalSlotProps: slotProps?.leftArrowIcon,
    additionalProps: {
      fontSize: "inherit"
    },
    ownerState,
    className: classes.leftArrowIcon
  }), leftArrowIconProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded2$6);
  const RightArrowIcon = slots?.rightArrowIcon ?? ArrowRightIcon;
  const _useSlotProps2 = useSlotProps({
    elementType: RightArrowIcon,
    externalSlotProps: slotProps?.rightArrowIcon,
    additionalProps: {
      fontSize: "inherit"
    },
    ownerState,
    className: classes.rightArrowIcon
  }), rightArrowIconProps = _objectWithoutPropertiesLoose(_useSlotProps2, _excluded3$1);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PickersArrowSwitcherRoot, _extends({
    ref,
    className: clsx(classes.root, className),
    ownerState
  }, other, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(PreviousIconButton, _extends({}, previousIconButtonProps, {
      children: isRtl ? /* @__PURE__ */ jsxRuntimeExports.jsx(RightArrowIcon, _extends({}, rightArrowIconProps)) : /* @__PURE__ */ jsxRuntimeExports.jsx(LeftArrowIcon, _extends({}, leftArrowIconProps))
    })), children ? /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, {
      variant: "subtitle1",
      component: "span",
      id: labelId,
      children
    }) : /* @__PURE__ */ jsxRuntimeExports.jsx(PickersArrowSwitcherSpacer, {
      className: classes.spacer,
      ownerState
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(NextIconButton, _extends({}, nextIconButtonProps, {
      children: isRtl ? /* @__PURE__ */ jsxRuntimeExports.jsx(LeftArrowIcon, _extends({}, leftArrowIconProps)) : /* @__PURE__ */ jsxRuntimeExports.jsx(RightArrowIcon, _extends({}, rightArrowIconProps))
    }))]
  }));
});
const DEFAULT_STEP_NAVIGATION = {
  hasNextStep: false,
  hasSeveralSteps: false,
  goToNextStep: () => {
  },
  areViewsInSameStep: () => true
};
function createStepNavigation(parameters) {
  const {
    steps,
    isViewMatchingStep,
    onStepChange
  } = parameters;
  return (parametersBis) => {
    if (steps == null) {
      return DEFAULT_STEP_NAVIGATION;
    }
    const currentStepIndex = steps.findIndex((step) => isViewMatchingStep(parametersBis.view, step));
    const nextStep = currentStepIndex === -1 || currentStepIndex === steps.length - 1 ? null : steps[currentStepIndex + 1];
    return {
      hasNextStep: nextStep != null,
      hasSeveralSteps: steps.length > 1,
      goToNextStep: () => {
        if (nextStep == null) {
          return;
        }
        onStepChange(_extends({}, parametersBis, {
          step: nextStep
        }));
      },
      areViewsInSameStep: (viewA, viewB) => {
        const stepA = steps.find((step) => isViewMatchingStep(viewA, step));
        const stepB = steps.find((step) => isViewMatchingStep(viewB, step));
        return stepA === stepB;
      }
    };
  };
}
function useViews({
  onChange,
  onViewChange,
  openTo,
  view: inView,
  views,
  autoFocus,
  focusedView: inFocusedView,
  onFocusedViewChange,
  getStepNavigation
}) {
  const previousOpenTo = reactExports.useRef(openTo);
  const previousViews = reactExports.useRef(views);
  const defaultView = reactExports.useRef(views.includes(openTo) ? openTo : views[0]);
  const [view, setView] = useControlled({
    name: "useViews",
    state: "view",
    controlled: inView,
    default: defaultView.current
  });
  const defaultFocusedView = reactExports.useRef(autoFocus ? view : null);
  const [focusedView, setFocusedView] = useControlled({
    name: "useViews",
    state: "focusedView",
    controlled: inFocusedView,
    default: defaultFocusedView.current
  });
  const stepNavigation = getStepNavigation ? getStepNavigation({
    setView,
    view,
    defaultView: defaultView.current,
    views
  }) : DEFAULT_STEP_NAVIGATION;
  reactExports.useEffect(() => {
    if (previousOpenTo.current && previousOpenTo.current !== openTo || previousViews.current && previousViews.current.some((previousView2) => !views.includes(previousView2))) {
      setView(views.includes(openTo) ? openTo : views[0]);
      previousViews.current = views;
      previousOpenTo.current = openTo;
    }
  }, [openTo, setView, view, views]);
  const viewIndex = views.indexOf(view);
  const previousView = views[viewIndex - 1] ?? null;
  const nextView = views[viewIndex + 1] ?? null;
  const handleFocusedViewChange = useEventCallback((viewToFocus, hasFocus) => {
    if (hasFocus) {
      setFocusedView(viewToFocus);
    } else {
      setFocusedView(
        (prevFocusedView) => viewToFocus === prevFocusedView ? null : prevFocusedView
        // If false the blur is due to view switching
      );
    }
    onFocusedViewChange?.(viewToFocus, hasFocus);
  });
  const handleChangeView = useEventCallback((newView) => {
    handleFocusedViewChange(newView, true);
    if (newView === view) {
      return;
    }
    setView(newView);
    if (onViewChange) {
      onViewChange(newView);
    }
  });
  const goToNextView = useEventCallback(() => {
    if (nextView) {
      handleChangeView(nextView);
    }
  });
  const setValueAndGoToNextView = useEventCallback((value, currentViewSelectionState, selectedView) => {
    const isSelectionFinishedOnCurrentView = currentViewSelectionState === "finish";
    const hasMoreViews = selectedView ? (
      // handles case like `DateTimePicker`, where a view might return a `finish` selection state
      // but when it's not the final view given all `views` -> overall selection state should be `partial`.
      views.indexOf(selectedView) < views.length - 1
    ) : Boolean(nextView);
    const globalSelectionState = isSelectionFinishedOnCurrentView && hasMoreViews ? "partial" : currentViewSelectionState;
    onChange(value, globalSelectionState, selectedView);
    let currentView = null;
    if (selectedView != null && selectedView !== view) {
      currentView = selectedView;
    } else if (isSelectionFinishedOnCurrentView) {
      currentView = view;
    }
    if (currentView == null) {
      return;
    }
    const viewToNavigateTo = views[views.indexOf(currentView) + 1];
    if (viewToNavigateTo == null || !stepNavigation.areViewsInSameStep(currentView, viewToNavigateTo)) {
      return;
    }
    handleChangeView(viewToNavigateTo);
  });
  return _extends({}, stepNavigation, {
    view,
    setView: handleChangeView,
    focusedView,
    setFocusedView: handleFocusedViewChange,
    nextView,
    previousView,
    // Always return up-to-date default view instead of the initial one (i.e. defaultView.current)
    defaultView: views.includes(openTo) ? openTo : views[0],
    goToNextView,
    setValueAndGoToNextView
  });
}
function useNextMonthDisabled(month, {
  disableFuture,
  maxDate,
  timezone
}) {
  const adapter = usePickerAdapter();
  return reactExports.useMemo(() => {
    const now = adapter.date(void 0, timezone);
    const lastEnabledMonth = adapter.startOfMonth(disableFuture && adapter.isBefore(now, maxDate) ? now : maxDate);
    return !adapter.isAfter(lastEnabledMonth, month);
  }, [disableFuture, maxDate, month, adapter, timezone]);
}
function usePreviousMonthDisabled(month, {
  disablePast,
  minDate,
  timezone
}) {
  const adapter = usePickerAdapter();
  return reactExports.useMemo(() => {
    const now = adapter.date(void 0, timezone);
    const firstEnabledMonth = adapter.startOfMonth(disablePast && adapter.isAfter(now, minDate) ? now : minDate);
    return !adapter.isBefore(firstEnabledMonth, month);
  }, [disablePast, minDate, month, adapter, timezone]);
}
function useMeridiemMode(date, ampm, onChange, selectionState) {
  const adapter = usePickerAdapter();
  const cleanDate = reactExports.useMemo(() => !adapter.isValid(date) ? null : date, [adapter, date]);
  const meridiemMode = getMeridiem(cleanDate, adapter);
  const handleMeridiemChange = reactExports.useCallback((mode) => {
    const timeWithMeridiem = cleanDate == null ? null : convertToMeridiem(cleanDate, mode, Boolean(ampm), adapter);
    onChange(timeWithMeridiem, selectionState ?? "partial");
  }, [ampm, cleanDate, onChange, selectionState, adapter]);
  return {
    meridiemMode,
    handleMeridiemChange
  };
}
const DAY_SIZE = 36;
const DAY_MARGIN = 2;
const DIALOG_WIDTH = 320;
const MAX_CALENDAR_HEIGHT = 280;
const VIEW_HEIGHT = 336;
const DIGITAL_CLOCK_VIEW_HEIGHT = 232;
const MULTI_SECTION_CLOCK_SECTION_WIDTH = 48;
const PickerViewRoot = styled("div", {
  slot: "internal",
  shouldForwardProp: void 0
})({
  overflow: "hidden",
  width: DIALOG_WIDTH,
  maxHeight: VIEW_HEIGHT,
  display: "flex",
  flexDirection: "column",
  margin: "0 auto"
});
const useControlledValue = ({
  name,
  timezone: timezoneProp,
  value: valueProp,
  defaultValue,
  referenceDate,
  onChange: onChangeProp,
  valueManager
}) => {
  const adapter = usePickerAdapter();
  const [valueWithInputTimezone, setValue] = useControlled({
    name,
    state: "value",
    controlled: valueProp,
    default: defaultValue ?? valueManager.emptyValue
  });
  const inputTimezone = reactExports.useMemo(() => valueManager.getTimezone(adapter, valueWithInputTimezone), [adapter, valueManager, valueWithInputTimezone]);
  const setInputTimezone = useEventCallback((newValue) => {
    if (inputTimezone == null) {
      return newValue;
    }
    return valueManager.setTimezone(adapter, inputTimezone, newValue);
  });
  const timezoneToRender = reactExports.useMemo(() => {
    if (timezoneProp) {
      return timezoneProp;
    }
    if (inputTimezone) {
      return inputTimezone;
    }
    if (referenceDate) {
      return adapter.getTimezone(Array.isArray(referenceDate) ? referenceDate[0] : referenceDate);
    }
    return "default";
  }, [timezoneProp, inputTimezone, referenceDate, adapter]);
  const valueWithTimezoneToRender = reactExports.useMemo(() => valueManager.setTimezone(adapter, timezoneToRender, valueWithInputTimezone), [valueManager, adapter, timezoneToRender, valueWithInputTimezone]);
  const handleValueChange = useEventCallback((newValue, ...otherParams) => {
    const newValueWithInputTimezone = setInputTimezone(newValue);
    setValue(newValueWithInputTimezone);
    onChangeProp?.(newValueWithInputTimezone, ...otherParams);
  });
  return {
    value: valueWithTimezoneToRender,
    handleValueChange,
    timezone: timezoneToRender
  };
};
const SECTION_TYPE_GRANULARITY = {
  year: 1,
  month: 2,
  day: 3,
  hours: 4,
  minutes: 5,
  seconds: 6,
  milliseconds: 7
};
const getSectionTypeGranularity = (sections) => Math.max(...sections.map((section) => SECTION_TYPE_GRANULARITY[section.type] ?? 1));
const roundDate = (adapter, granularity, date) => {
  if (granularity === SECTION_TYPE_GRANULARITY.year) {
    return adapter.startOfYear(date);
  }
  if (granularity === SECTION_TYPE_GRANULARITY.month) {
    return adapter.startOfMonth(date);
  }
  if (granularity === SECTION_TYPE_GRANULARITY.day) {
    return adapter.startOfDay(date);
  }
  let roundedDate = date;
  if (granularity < SECTION_TYPE_GRANULARITY.minutes) {
    roundedDate = adapter.setMinutes(roundedDate, 0);
  }
  if (granularity < SECTION_TYPE_GRANULARITY.seconds) {
    roundedDate = adapter.setSeconds(roundedDate, 0);
  }
  if (granularity < SECTION_TYPE_GRANULARITY.milliseconds) {
    roundedDate = adapter.setMilliseconds(roundedDate, 0);
  }
  return roundedDate;
};
const getDefaultReferenceDate = ({
  props,
  adapter,
  granularity,
  timezone,
  getTodayDate: inGetTodayDate
}) => {
  let referenceDate = inGetTodayDate ? inGetTodayDate() : roundDate(adapter, granularity, getTodayDate(adapter, timezone));
  if (props.minDate != null && adapter.isAfterDay(props.minDate, referenceDate)) {
    referenceDate = roundDate(adapter, granularity, props.minDate);
  }
  if (props.maxDate != null && adapter.isBeforeDay(props.maxDate, referenceDate)) {
    referenceDate = roundDate(adapter, granularity, props.maxDate);
  }
  const isAfter = createIsAfterIgnoreDatePart(props.disableIgnoringDatePartForTimeValidation ?? false, adapter);
  if (props.minTime != null && isAfter(props.minTime, referenceDate)) {
    referenceDate = roundDate(adapter, granularity, props.disableIgnoringDatePartForTimeValidation ? props.minTime : mergeDateAndTime(adapter, referenceDate, props.minTime));
  }
  if (props.maxTime != null && isAfter(referenceDate, props.maxTime)) {
    referenceDate = roundDate(adapter, granularity, props.disableIgnoringDatePartForTimeValidation ? props.maxTime : mergeDateAndTime(adapter, referenceDate, props.maxTime));
  }
  return referenceDate;
};
const _excluded$q = ["value", "referenceDate"];
const singleItemValueManager = {
  emptyValue: null,
  getTodayValue: getTodayDate,
  getInitialReferenceValue: (_ref) => {
    let {
      value,
      referenceDate
    } = _ref, params = _objectWithoutPropertiesLoose(_ref, _excluded$q);
    if (params.adapter.isValid(value)) {
      return value;
    }
    if (referenceDate != null) {
      return referenceDate;
    }
    return getDefaultReferenceDate(params);
  },
  cleanValue: replaceInvalidDateByNull,
  areValuesEqual: areDatesEqual,
  isSameError: (a, b) => a === b,
  hasError: (error) => error != null,
  defaultErrorState: null,
  getTimezone: (adapter, value) => adapter.isValid(value) ? adapter.getTimezone(value) : null,
  setTimezone: (adapter, timezone, value) => value == null ? null : adapter.setTimezone(value, timezone)
};
const singleItemFieldValueManager = {
  updateReferenceValue: (adapter, value, prevReferenceValue) => adapter.isValid(value) ? value : prevReferenceValue,
  getSectionsFromValue: (date, getSectionsFromDate) => getSectionsFromDate(date),
  getV7HiddenInputValueFromSections: createDateStrForV7HiddenInputFromSections,
  getV6InputValueFromSections: createDateStrForV6InputFromSections,
  parseValueStr: (valueStr, referenceValue, parseDate) => parseDate(valueStr.trim(), referenceValue),
  getDateFromSection: (value) => value,
  getDateSectionsFromValue: (sections) => sections,
  updateDateInValue: (value, activeSection, activeDate) => activeDate,
  clearDateSections: (sections) => sections.map((section) => _extends({}, section, {
    value: ""
  }))
};
function arrayIncludes(array, itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.every((item) => array.indexOf(item) !== -1);
  }
  return array.indexOf(itemOrItems) !== -1;
}
const executeInTheNextEventLoopTick = (fn) => {
  setTimeout(fn, 0);
};
const getActiveElementInternal = (root = document) => {
  const activeEl = root.activeElement;
  if (!activeEl) {
    return null;
  }
  if (activeEl.shadowRoot) {
    return getActiveElementInternal(activeEl.shadowRoot);
  }
  return activeEl;
};
const getActiveElement = (node) => {
  return getActiveElementInternal(ownerDocument(node));
};
const getFocusedListItemIndex = (listElement) => {
  const children = Array.from(listElement.children);
  return children.indexOf(getActiveElement(listElement));
};
const DEFAULT_DESKTOP_MODE_MEDIA_QUERY = "@media (pointer: fine)";
function mergeSx(...sxProps) {
  return sxProps.reduce((acc, sxProp) => {
    if (Array.isArray(sxProp)) {
      acc.push(...sxProp);
    } else if (sxProp != null) {
      acc.push(sxProp);
    }
    return acc;
  }, []);
}
function getPickersDayUtilityClass(slot) {
  return generateUtilityClass("MuiPickersDay", slot);
}
const pickersDayClasses = generateUtilityClasses("MuiPickersDay", ["root", "dayWithMargin", "dayOutsideMonth", "hiddenDaySpacingFiller", "today", "selected", "disabled"]);
function usePickerDayOwnerState(parameters) {
  const {
    disabled,
    selected,
    today,
    outsideCurrentMonth,
    day,
    disableMargin,
    disableHighlightToday,
    showDaysOutsideCurrentMonth
  } = parameters;
  const adapter = usePickerAdapter();
  const {
    ownerState: pickerOwnerState
  } = usePickerPrivateContext();
  return reactExports.useMemo(() => _extends({}, pickerOwnerState, {
    day,
    isDaySelected: selected ?? false,
    isDayDisabled: disabled ?? false,
    isDayCurrent: today ?? false,
    isDayOutsideMonth: outsideCurrentMonth ?? false,
    isDayStartOfWeek: adapter.isSameDay(day, adapter.startOfWeek(day)),
    isDayEndOfWeek: adapter.isSameDay(day, adapter.endOfWeek(day)),
    disableMargin: disableMargin ?? false,
    disableHighlightToday: disableHighlightToday ?? false,
    showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth ?? false
  }), [adapter, pickerOwnerState, day, selected, disabled, today, outsideCurrentMonth, disableMargin, disableHighlightToday, showDaysOutsideCurrentMonth]);
}
const _excluded$p = ["autoFocus", "className", "classes", "hidden", "isAnimating", "onClick", "onDaySelect", "onFocus", "onBlur", "onKeyDown", "onMouseDown", "onMouseEnter", "children", "isFirstVisibleCell", "isLastVisibleCell", "day", "selected", "disabled", "today", "outsideCurrentMonth", "disableMargin", "disableHighlightToday", "showDaysOutsideCurrentMonth"];
const useUtilityClasses$l = (classes, ownerState) => {
  const {
    isDaySelected,
    isDayDisabled,
    isDayCurrent,
    isDayOutsideMonth,
    disableMargin,
    disableHighlightToday,
    showDaysOutsideCurrentMonth
  } = ownerState;
  const isHiddenDaySpacingFiller = isDayOutsideMonth && !showDaysOutsideCurrentMonth;
  const slots = {
    root: ["root", isDaySelected && !isHiddenDaySpacingFiller && "selected", isDayDisabled && "disabled", !disableMargin && "dayWithMargin", !disableHighlightToday && isDayCurrent && "today", isDayOutsideMonth && showDaysOutsideCurrentMonth && "dayOutsideMonth", isHiddenDaySpacingFiller && "hiddenDaySpacingFiller"],
    hiddenDaySpacingFiller: ["hiddenDaySpacingFiller"]
  };
  return composeClasses(slots, getPickersDayUtilityClass, classes);
};
const styleArg = ({
  theme
}) => _extends({}, theme.typography.caption, {
  display: "flex",
  lineHeight: 1,
  width: DAY_SIZE,
  height: DAY_SIZE,
  borderRadius: "50%",
  padding: 0,
  // explicitly setting to `transparent` to avoid potentially getting impacted by change from the overridden component
  backgroundColor: "transparent",
  transition: theme.transitions.create("background-color", {
    duration: theme.transitions.duration.short
  }),
  color: (theme.vars || theme).palette.text.primary,
  "@media (pointer: fine)": {
    "&:hover": {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity)
    }
  },
  "&:focus": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.focusOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.focusOpacity),
    [`&.${pickersDayClasses.selected}`]: {
      willChange: "background-color",
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  },
  [`&.${pickersDayClasses.selected}`]: {
    color: (theme.vars || theme).palette.primary.contrastText,
    backgroundColor: (theme.vars || theme).palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    "&:hover": {
      willChange: "background-color",
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  },
  [`&.${pickersDayClasses.disabled}:not(.${pickersDayClasses.selected})`]: {
    color: (theme.vars || theme).palette.text.disabled
  },
  [`&.${pickersDayClasses.disabled}&.${pickersDayClasses.selected}`]: {
    opacity: 0.6
  },
  variants: [{
    props: {
      disableMargin: false
    },
    style: {
      margin: `0 ${DAY_MARGIN}px`
    }
  }, {
    props: {
      isDayOutsideMonth: true,
      showDaysOutsideCurrentMonth: true
    },
    style: {
      color: (theme.vars || theme).palette.text.secondary
    }
  }, {
    props: {
      disableHighlightToday: false,
      isDayCurrent: true
    },
    style: {
      [`&:not(.${pickersDayClasses.selected})`]: {
        border: `1px solid ${(theme.vars || theme).palette.text.secondary}`
      }
    }
  }]
});
const overridesResolver$1 = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, !ownerState.disableMargin && styles.dayWithMargin, !ownerState.disableHighlightToday && ownerState.isDayCurrent && styles.today, ownerState.isDayOutsideMonth && ownerState.showDaysOutsideCurrentMonth && styles.dayOutsideMonth, ownerState.isDayOutsideMonth && !ownerState.showDaysOutsideCurrentMonth && styles.hiddenDaySpacingFiller];
};
const PickersDayRoot = styled(ButtonBase, {
  name: "MuiPickersDay",
  slot: "Root",
  overridesResolver: overridesResolver$1
})(styleArg);
const PickersDayFiller = styled("div", {
  name: "MuiPickersDay",
  slot: "Root",
  overridesResolver: overridesResolver$1
})(({
  theme
}) => _extends({}, styleArg({
  theme
}), {
  // visibility: 'hidden' does not work here as it hides the element from screen readers as well
  opacity: 0,
  pointerEvents: "none"
}));
const noop$1 = () => {
};
const PickersDayRaw = /* @__PURE__ */ reactExports.forwardRef(function PickersDay2(inProps, forwardedRef) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersDay"
  });
  const {
    autoFocus = false,
    className,
    classes: classesProp,
    isAnimating,
    onClick,
    onDaySelect,
    onFocus = noop$1,
    onBlur = noop$1,
    onKeyDown = noop$1,
    onMouseDown = noop$1,
    onMouseEnter = noop$1,
    children,
    day,
    selected,
    disabled,
    today,
    outsideCurrentMonth,
    disableMargin,
    disableHighlightToday,
    showDaysOutsideCurrentMonth
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$p);
  const ownerState = usePickerDayOwnerState({
    day,
    selected,
    disabled,
    today,
    outsideCurrentMonth,
    disableMargin,
    disableHighlightToday,
    showDaysOutsideCurrentMonth
  });
  const classes = useUtilityClasses$l(classesProp, ownerState);
  const adapter = usePickerAdapter();
  const ref = reactExports.useRef(null);
  const handleRef = useForkRef(ref, forwardedRef);
  useEnhancedEffect(() => {
    if (autoFocus && !disabled && !isAnimating && !outsideCurrentMonth) {
      ref.current.focus();
    }
  }, [autoFocus, disabled, isAnimating, outsideCurrentMonth]);
  const handleMouseDown = (event) => {
    onMouseDown(event);
    if (outsideCurrentMonth) {
      event.preventDefault();
    }
  };
  const handleClick = (event) => {
    event.defaultMuiPrevented = true;
    if (!disabled) {
      onDaySelect(day);
    }
    if (outsideCurrentMonth) {
      event.currentTarget.focus();
    }
    if (onClick) {
      onClick(event);
    }
  };
  if (outsideCurrentMonth && !showDaysOutsideCurrentMonth) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(PickersDayFiller, {
      className: clsx(classes.root, classes.hiddenDaySpacingFiller, className),
      ownerState,
      role: other.role
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PickersDayRoot, _extends({
    className: clsx(classes.root, className),
    ref: handleRef,
    centerRipple: true,
    disabled,
    tabIndex: selected ? 0 : -1,
    onKeyDown: (event) => onKeyDown(event, day),
    onFocus: (event) => onFocus(event, day),
    onBlur: (event) => onBlur(event, day),
    onMouseEnter: (event) => onMouseEnter(event, day),
    onClick: handleClick,
    onMouseDown: handleMouseDown
  }, other, {
    ownerState,
    children: children ?? adapter.format(day, "dayOfMonth")
  }));
});
const PickersDay = /* @__PURE__ */ reactExports.memo(PickersDayRaw);
const isQueryResponseWithoutValue = (response) => response.saveQuery != null;
const useFieldCharacterEditing = ({
  stateResponse: {
    // States and derived states
    localizedDigits,
    sectionsValueBoundaries,
    state,
    timezone,
    // Methods to update the states
    setCharacterQuery,
    setTempAndroidValueStr,
    updateSectionValue
  }
}) => {
  const adapter = usePickerAdapter();
  const applyQuery = ({
    keyPressed,
    sectionIndex
  }, getFirstSectionValueMatchingWithQuery, isValidQueryValue) => {
    const cleanKeyPressed = keyPressed.toLowerCase();
    const activeSection = state.sections[sectionIndex];
    if (state.characterQuery != null && (!isValidQueryValue || isValidQueryValue(state.characterQuery.value)) && state.characterQuery.sectionIndex === sectionIndex) {
      const concatenatedQueryValue = `${state.characterQuery.value}${cleanKeyPressed}`;
      const queryResponse2 = getFirstSectionValueMatchingWithQuery(concatenatedQueryValue, activeSection);
      if (!isQueryResponseWithoutValue(queryResponse2)) {
        setCharacterQuery({
          sectionIndex,
          value: concatenatedQueryValue,
          sectionType: activeSection.type
        });
        return queryResponse2;
      }
    }
    const queryResponse = getFirstSectionValueMatchingWithQuery(cleanKeyPressed, activeSection);
    if (isQueryResponseWithoutValue(queryResponse) && !queryResponse.saveQuery) {
      setCharacterQuery(null);
      return null;
    }
    setCharacterQuery({
      sectionIndex,
      value: cleanKeyPressed,
      sectionType: activeSection.type
    });
    if (isQueryResponseWithoutValue(queryResponse)) {
      return null;
    }
    return queryResponse;
  };
  const applyLetterEditing = (params) => {
    const findMatchingOptions = (format, options, queryValue) => {
      const matchingValues = options.filter((option) => option.toLowerCase().startsWith(queryValue));
      if (matchingValues.length === 0) {
        return {
          saveQuery: false
        };
      }
      return {
        sectionValue: matchingValues[0],
        shouldGoToNextSection: matchingValues.length === 1
      };
    };
    const testQueryOnFormatAndFallbackFormat = (queryValue, activeSection, fallbackFormat, formatFallbackValue) => {
      const getOptions = (format) => getLetterEditingOptions(adapter, timezone, activeSection.type, format);
      if (activeSection.contentType === "letter") {
        return findMatchingOptions(activeSection.format, getOptions(activeSection.format), queryValue);
      }
      if (fallbackFormat && formatFallbackValue != null && getDateSectionConfigFromFormatToken(adapter, fallbackFormat).contentType === "letter") {
        const fallbackOptions = getOptions(fallbackFormat);
        const response = findMatchingOptions(fallbackFormat, fallbackOptions, queryValue);
        if (isQueryResponseWithoutValue(response)) {
          return {
            saveQuery: false
          };
        }
        return _extends({}, response, {
          sectionValue: formatFallbackValue(response.sectionValue, fallbackOptions)
        });
      }
      return {
        saveQuery: false
      };
    };
    const getFirstSectionValueMatchingWithQuery = (queryValue, activeSection) => {
      switch (activeSection.type) {
        case "month": {
          const formatFallbackValue = (fallbackValue) => changeSectionValueFormat(adapter, fallbackValue, adapter.formats.month, activeSection.format);
          return testQueryOnFormatAndFallbackFormat(queryValue, activeSection, adapter.formats.month, formatFallbackValue);
        }
        case "weekDay": {
          const formatFallbackValue = (fallbackValue, fallbackOptions) => fallbackOptions.indexOf(fallbackValue).toString();
          return testQueryOnFormatAndFallbackFormat(queryValue, activeSection, adapter.formats.weekday, formatFallbackValue);
        }
        case "meridiem": {
          return testQueryOnFormatAndFallbackFormat(queryValue, activeSection);
        }
        default: {
          return {
            saveQuery: false
          };
        }
      }
    };
    return applyQuery(params, getFirstSectionValueMatchingWithQuery);
  };
  const applyNumericEditing = (params) => {
    const getNewSectionValue = ({
      queryValue,
      skipIfBelowMinimum,
      section
    }) => {
      const cleanQueryValue = removeLocalizedDigits(queryValue, localizedDigits);
      const queryValueNumber = Number(cleanQueryValue);
      const sectionBoundaries = sectionsValueBoundaries[section.type]({
        currentDate: null,
        format: section.format,
        contentType: section.contentType
      });
      if (queryValueNumber > sectionBoundaries.maximum) {
        return {
          saveQuery: false
        };
      }
      if (skipIfBelowMinimum && queryValueNumber < sectionBoundaries.minimum) {
        return {
          saveQuery: true
        };
      }
      const shouldGoToNextSection = queryValueNumber * 10 > sectionBoundaries.maximum || cleanQueryValue.length === sectionBoundaries.maximum.toString().length;
      const newSectionValue = cleanDigitSectionValue(adapter, queryValueNumber, sectionBoundaries, localizedDigits, section);
      return {
        sectionValue: newSectionValue,
        shouldGoToNextSection
      };
    };
    const getFirstSectionValueMatchingWithQuery = (queryValue, activeSection) => {
      if (activeSection.contentType === "digit" || activeSection.contentType === "digit-with-letter") {
        return getNewSectionValue({
          queryValue,
          skipIfBelowMinimum: false,
          section: activeSection
        });
      }
      if (activeSection.type === "month") {
        doesSectionFormatHaveLeadingZeros(adapter, "digit", "month", "MM");
        const response = getNewSectionValue({
          queryValue,
          skipIfBelowMinimum: true,
          section: {
            type: activeSection.type,
            format: "MM",
            hasLeadingZerosInInput: true,
            contentType: "digit",
            maxLength: 2
          }
        });
        if (isQueryResponseWithoutValue(response)) {
          return response;
        }
        const formattedValue = changeSectionValueFormat(adapter, response.sectionValue, "MM", activeSection.format);
        return _extends({}, response, {
          sectionValue: formattedValue
        });
      }
      if (activeSection.type === "weekDay") {
        const response = getNewSectionValue({
          queryValue,
          skipIfBelowMinimum: true,
          section: activeSection
        });
        if (isQueryResponseWithoutValue(response)) {
          return response;
        }
        const formattedValue = getDaysInWeekStr(adapter, activeSection.format)[Number(response.sectionValue) - 1];
        return _extends({}, response, {
          sectionValue: formattedValue
        });
      }
      return {
        saveQuery: false
      };
    };
    return applyQuery(params, getFirstSectionValueMatchingWithQuery, (queryValue) => isStringNumber(queryValue, localizedDigits));
  };
  return useEventCallback((params) => {
    const section = state.sections[params.sectionIndex];
    const isNumericEditing = isStringNumber(params.keyPressed, localizedDigits);
    const response = isNumericEditing ? applyNumericEditing(_extends({}, params, {
      keyPressed: applyLocalizedDigits(params.keyPressed, localizedDigits)
    })) : applyLetterEditing(params);
    if (response == null) {
      setTempAndroidValueStr(null);
      return;
    }
    updateSectionValue({
      section,
      newSectionValue: response.sectionValue,
      shouldGoToNextSection: response.shouldGoToNextSection
    });
  });
};
const validateDate = ({
  props,
  value,
  timezone,
  adapter
}) => {
  if (value === null) {
    return null;
  }
  const {
    shouldDisableDate,
    shouldDisableMonth,
    shouldDisableYear,
    disablePast,
    disableFuture,
    minDate,
    maxDate
  } = props;
  const now = adapter.date(void 0, timezone);
  switch (true) {
    case !adapter.isValid(value):
      return "invalidDate";
    case Boolean(shouldDisableDate && shouldDisableDate(value)):
      return "shouldDisableDate";
    case Boolean(shouldDisableMonth && shouldDisableMonth(value)):
      return "shouldDisableMonth";
    case Boolean(shouldDisableYear && shouldDisableYear(value)):
      return "shouldDisableYear";
    case Boolean(disableFuture && adapter.isAfterDay(value, now)):
      return "disableFuture";
    case Boolean(disablePast && adapter.isBeforeDay(value, now)):
      return "disablePast";
    case Boolean(minDate && adapter.isBeforeDay(value, minDate)):
      return "minDate";
    case Boolean(maxDate && adapter.isAfterDay(value, maxDate)):
      return "maxDate";
    default:
      return null;
  }
};
validateDate.valueManager = singleItemValueManager;
function useValidation(options) {
  const {
    props,
    validator,
    value,
    timezone,
    onError
  } = options;
  const adapter = usePickerAdapter();
  const previousValidationErrorRef = reactExports.useRef(validator.valueManager.defaultErrorState);
  const validationError = validator({
    adapter,
    value,
    timezone,
    props
  });
  const hasValidationError = validator.valueManager.hasError(validationError);
  reactExports.useEffect(() => {
    if (onError && !validator.valueManager.isSameError(validationError, previousValidationErrorRef.current)) {
      onError(validationError, value);
    }
    previousValidationErrorRef.current = validationError;
  }, [validator, onError, validationError, value]);
  const getValidationErrorForNewValue = useEventCallback((newValue) => {
    return validator({
      adapter,
      value: newValue,
      timezone,
      props
    });
  });
  return {
    validationError,
    hasValidationError,
    getValidationErrorForNewValue
  };
}
const QUERY_LIFE_DURATION_MS = 5e3;
const useFieldState = (parameters) => {
  const adapter = usePickerAdapter();
  const translations = usePickerTranslations();
  const isRtl = useRtl();
  const {
    manager: {
      validator,
      valueType,
      internal_valueManager: valueManager,
      internal_fieldValueManager: fieldValueManager
    },
    internalPropsWithDefaults,
    internalPropsWithDefaults: {
      value: valueProp,
      defaultValue,
      referenceDate: referenceDateProp,
      onChange,
      format,
      formatDensity = "dense",
      selectedSections: selectedSectionsProp,
      onSelectedSectionsChange,
      shouldRespectLeadingZeros = false,
      timezone: timezoneProp,
      enableAccessibleFieldDOMStructure = true
    },
    forwardedProps: {
      error: errorProp
    }
  } = parameters;
  const {
    value,
    handleValueChange,
    timezone
  } = useControlledValue({
    name: "a field component",
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    onChange,
    valueManager
  });
  const valueRef = reactExports.useRef(value);
  reactExports.useEffect(() => {
    valueRef.current = value;
  }, [value]);
  const {
    hasValidationError
  } = useValidation({
    props: internalPropsWithDefaults,
    validator,
    timezone,
    value,
    onError: internalPropsWithDefaults.onError
  });
  const localizedDigits = reactExports.useMemo(() => getLocalizedDigits(adapter), [adapter]);
  const sectionsValueBoundaries = reactExports.useMemo(() => getSectionsBoundaries(adapter, localizedDigits, timezone), [adapter, localizedDigits, timezone]);
  const getSectionsFromValue = reactExports.useCallback((valueToAnalyze) => fieldValueManager.getSectionsFromValue(valueToAnalyze, (date) => buildSectionsFromFormat({
    adapter,
    localeText: translations,
    localizedDigits,
    format,
    date,
    formatDensity,
    shouldRespectLeadingZeros,
    enableAccessibleFieldDOMStructure,
    isRtl
  })), [fieldValueManager, format, translations, localizedDigits, isRtl, shouldRespectLeadingZeros, adapter, formatDensity, enableAccessibleFieldDOMStructure]);
  const [state, setState] = reactExports.useState(() => {
    const sections = getSectionsFromValue(value);
    const stateWithoutReferenceDate = {
      sections,
      lastExternalValue: value,
      lastSectionsDependencies: {
        format,
        isRtl,
        locale: adapter.locale
      },
      tempValueStrAndroid: null,
      characterQuery: null
    };
    const granularity = getSectionTypeGranularity(sections);
    const referenceValue = valueManager.getInitialReferenceValue({
      referenceDate: referenceDateProp,
      value,
      adapter,
      props: internalPropsWithDefaults,
      granularity,
      timezone
    });
    return _extends({}, stateWithoutReferenceDate, {
      referenceValue
    });
  });
  const [selectedSections, innerSetSelectedSections] = useControlled({
    controlled: selectedSectionsProp,
    default: null,
    name: "useField",
    state: "selectedSections"
  });
  const setSelectedSections = (newSelectedSections) => {
    innerSetSelectedSections(newSelectedSections);
    onSelectedSectionsChange?.(newSelectedSections);
  };
  const parsedSelectedSections = reactExports.useMemo(() => parseSelectedSections(selectedSections, state.sections), [selectedSections, state.sections]);
  const activeSectionIndex = parsedSelectedSections === "all" ? 0 : parsedSelectedSections;
  const sectionOrder = reactExports.useMemo(() => getSectionOrder(state.sections, isRtl && !enableAccessibleFieldDOMStructure), [state.sections, isRtl, enableAccessibleFieldDOMStructure]);
  const areAllSectionsEmpty = reactExports.useMemo(() => state.sections.every((section) => section.value === ""), [state.sections]);
  const hasPartiallyFilledSectionsOnBlur = reactExports.useMemo(() => {
    if (activeSectionIndex != null) {
      return false;
    }
    const filledSections = state.sections.filter((s) => s.value !== "");
    return filledSections.length > 0 && state.sections.length - filledSections.length > 0;
  }, [state.sections, activeSectionIndex]);
  const error = reactExports.useMemo(() => {
    if (errorProp !== void 0) {
      return errorProp;
    }
    return hasValidationError || hasPartiallyFilledSectionsOnBlur;
  }, [hasValidationError, hasPartiallyFilledSectionsOnBlur, errorProp]);
  const publishValue = (newValue) => {
    const context = {
      validationError: validator({
        adapter,
        value: newValue,
        timezone,
        props: internalPropsWithDefaults
      })
    };
    handleValueChange(newValue, context);
  };
  const setSectionValue = (sectionIndex, newSectionValue) => {
    const newSections = [...state.sections];
    newSections[sectionIndex] = _extends({}, newSections[sectionIndex], {
      value: newSectionValue,
      modified: true
    });
    return newSections;
  };
  const sectionToUpdateOnNextInvalidDateRef = reactExports.useRef(null);
  const updateSectionValueOnNextInvalidDateTimeout = useTimeout();
  const setSectionUpdateToApplyOnNextInvalidDate = (newSectionValue) => {
    if (activeSectionIndex == null) {
      return;
    }
    sectionToUpdateOnNextInvalidDateRef.current = {
      sectionIndex: activeSectionIndex,
      value: newSectionValue
    };
    updateSectionValueOnNextInvalidDateTimeout.start(0, () => {
      sectionToUpdateOnNextInvalidDateRef.current = null;
    });
  };
  const clearValue = () => {
    if (valueManager.areValuesEqual(adapter, value, valueManager.emptyValue)) {
      setState((prevState) => _extends({}, prevState, {
        sections: prevState.sections.map((section) => _extends({}, section, {
          value: ""
        })),
        tempValueStrAndroid: null,
        characterQuery: null
      }));
    } else {
      setState((prevState) => _extends({}, prevState, {
        characterQuery: null
      }));
      publishValue(valueManager.emptyValue);
    }
  };
  const clearActiveSection = () => {
    if (activeSectionIndex == null) {
      return;
    }
    const activeSection = state.sections[activeSectionIndex];
    if (activeSection.value === "") {
      return;
    }
    setSectionUpdateToApplyOnNextInvalidDate("");
    if (fieldValueManager.getDateFromSection(value, activeSection) === null) {
      setState((prevState) => _extends({}, prevState, {
        sections: setSectionValue(activeSectionIndex, ""),
        tempValueStrAndroid: null,
        characterQuery: null
      }));
    } else {
      setState((prevState) => _extends({}, prevState, {
        characterQuery: null
      }));
      publishValue(fieldValueManager.updateDateInValue(value, activeSection, null));
    }
  };
  const updateValueFromValueStr = (valueStr) => {
    const parseDateStr = (dateStr, referenceDate) => {
      const date = adapter.parse(dateStr, format);
      if (!adapter.isValid(date)) {
        return null;
      }
      const sections = buildSectionsFromFormat({
        adapter,
        localeText: translations,
        localizedDigits,
        format,
        date,
        formatDensity,
        shouldRespectLeadingZeros,
        enableAccessibleFieldDOMStructure,
        isRtl
      });
      return mergeDateIntoReferenceDate(adapter, date, sections, referenceDate, false);
    };
    const newValue = fieldValueManager.parseValueStr(valueStr, state.referenceValue, parseDateStr);
    publishValue(newValue);
  };
  const cleanActiveDateSectionsIfValueNullTimeout = useTimeout();
  const updateSectionValue = ({
    section,
    newSectionValue,
    shouldGoToNextSection
  }) => {
    updateSectionValueOnNextInvalidDateTimeout.clear();
    cleanActiveDateSectionsIfValueNullTimeout.clear();
    const activeDate = fieldValueManager.getDateFromSection(value, section);
    if (shouldGoToNextSection && activeSectionIndex < state.sections.length - 1) {
      setSelectedSections(activeSectionIndex + 1);
    }
    const newSections = setSectionValue(activeSectionIndex, newSectionValue);
    const newActiveDateSections = fieldValueManager.getDateSectionsFromValue(newSections, section);
    const newActiveDate = getDateFromDateSections(adapter, newActiveDateSections, localizedDigits);
    if (adapter.isValid(newActiveDate)) {
      const mergedDate = mergeDateIntoReferenceDate(adapter, newActiveDate, newActiveDateSections, fieldValueManager.getDateFromSection(state.referenceValue, section), true);
      if (activeDate == null) {
        cleanActiveDateSectionsIfValueNullTimeout.start(0, () => {
          if (valueRef.current === value) {
            setState((prevState) => _extends({}, prevState, {
              sections: fieldValueManager.clearDateSections(state.sections, section),
              tempValueStrAndroid: null
            }));
          }
        });
      }
      return publishValue(fieldValueManager.updateDateInValue(value, section, mergedDate));
    }
    if (newActiveDateSections.every((sectionBis) => sectionBis.value !== "") && (activeDate == null || adapter.isValid(activeDate))) {
      setSectionUpdateToApplyOnNextInvalidDate(newSectionValue);
      return publishValue(fieldValueManager.updateDateInValue(value, section, newActiveDate));
    }
    if (activeDate != null) {
      setSectionUpdateToApplyOnNextInvalidDate(newSectionValue);
      publishValue(fieldValueManager.updateDateInValue(value, section, newActiveDate));
    }
    return setState((prevState) => _extends({}, prevState, {
      sections: newSections,
      tempValueStrAndroid: null
    }));
  };
  const setTempAndroidValueStr = (tempValueStrAndroid) => setState((prevState) => _extends({}, prevState, {
    tempValueStrAndroid
  }));
  const setCharacterQuery = useEventCallback((newCharacterQuery) => {
    setState((prevState) => _extends({}, prevState, {
      characterQuery: newCharacterQuery
    }));
  });
  if (value !== state.lastExternalValue) {
    const isActiveDateInvalid = sectionToUpdateOnNextInvalidDateRef.current != null && !adapter.isValid(fieldValueManager.getDateFromSection(value, state.sections[sectionToUpdateOnNextInvalidDateRef.current.sectionIndex]));
    let sections;
    if (isActiveDateInvalid) {
      sections = setSectionValue(sectionToUpdateOnNextInvalidDateRef.current.sectionIndex, sectionToUpdateOnNextInvalidDateRef.current.value);
    } else {
      sections = getSectionsFromValue(value);
    }
    setState((prevState) => _extends({}, prevState, {
      lastExternalValue: value,
      sections,
      sectionsDependencies: {
        format,
        isRtl,
        locale: adapter.locale
      },
      referenceValue: isActiveDateInvalid ? prevState.referenceValue : fieldValueManager.updateReferenceValue(adapter, value, prevState.referenceValue),
      tempValueStrAndroid: null
    }));
  }
  if (isRtl !== state.lastSectionsDependencies.isRtl || format !== state.lastSectionsDependencies.format || adapter.locale !== state.lastSectionsDependencies.locale) {
    const sections = getSectionsFromValue(value);
    setState((prevState) => _extends({}, prevState, {
      lastSectionsDependencies: {
        format,
        isRtl,
        locale: adapter.locale
      },
      sections,
      tempValueStrAndroid: null,
      characterQuery: null
    }));
  }
  if (state.characterQuery != null && !error && activeSectionIndex == null) {
    setCharacterQuery(null);
  }
  if (state.characterQuery != null && state.sections[state.characterQuery.sectionIndex]?.type !== state.characterQuery.sectionType) {
    setCharacterQuery(null);
  }
  reactExports.useEffect(() => {
    if (sectionToUpdateOnNextInvalidDateRef.current != null) {
      sectionToUpdateOnNextInvalidDateRef.current = null;
    }
  });
  const cleanCharacterQueryTimeout = useTimeout();
  reactExports.useEffect(() => {
    if (state.characterQuery != null) {
      cleanCharacterQueryTimeout.start(QUERY_LIFE_DURATION_MS, () => setCharacterQuery(null));
    }
    return () => {
    };
  }, [state.characterQuery, setCharacterQuery, cleanCharacterQueryTimeout]);
  reactExports.useEffect(() => {
    if (state.tempValueStrAndroid != null && activeSectionIndex != null) {
      clearActiveSection();
    }
  }, [state.sections]);
  return {
    // States and derived states
    activeSectionIndex,
    areAllSectionsEmpty,
    error,
    localizedDigits,
    parsedSelectedSections,
    sectionOrder,
    sectionsValueBoundaries,
    state,
    timezone,
    value,
    // Methods to update the states
    clearValue,
    clearActiveSection,
    setCharacterQuery,
    setSelectedSections,
    setTempAndroidValueStr,
    updateSectionValue,
    updateValueFromValueStr,
    // Utilities methods
    getSectionsFromValue
  };
};
function useFieldInternalPropsWithDefaults(parameters) {
  const {
    manager: {
      internal_useApplyDefaultValuesToFieldInternalProps: useApplyDefaultValuesToFieldInternalProps
    },
    internalProps,
    skipContextFieldRefAssignment
  } = parameters;
  const pickerContext = useNullablePickerContext();
  const fieldPrivateContext = useNullableFieldPrivateContext();
  const handleFieldRef = useForkRef(internalProps.unstableFieldRef, skipContextFieldRefAssignment ? null : fieldPrivateContext?.fieldRef);
  const setValue = pickerContext?.setValue;
  const handleChangeFromPicker = reactExports.useCallback((newValue, ctx) => {
    return setValue?.(newValue, {
      validationError: ctx.validationError,
      shouldClose: false
    });
  }, [setValue]);
  const internalPropsWithDefaultsFromContext = reactExports.useMemo(() => {
    if (fieldPrivateContext != null && pickerContext != null) {
      return _extends({
        value: pickerContext.value,
        onChange: handleChangeFromPicker,
        timezone: pickerContext.timezone,
        disabled: pickerContext.disabled,
        readOnly: pickerContext.readOnly,
        autoFocus: pickerContext.autoFocus && !pickerContext.open,
        focused: pickerContext.open ? true : void 0,
        format: pickerContext.fieldFormat,
        formatDensity: fieldPrivateContext.formatDensity,
        enableAccessibleFieldDOMStructure: fieldPrivateContext.enableAccessibleFieldDOMStructure,
        selectedSections: fieldPrivateContext.selectedSections,
        onSelectedSectionsChange: fieldPrivateContext.onSelectedSectionsChange,
        unstableFieldRef: handleFieldRef
      }, internalProps);
    }
    return internalProps;
  }, [pickerContext, fieldPrivateContext, internalProps, handleChangeFromPicker, handleFieldRef]);
  return useApplyDefaultValuesToFieldInternalProps(internalPropsWithDefaultsFromContext);
}
function syncSelectionToDOM(parameters) {
  const {
    focused,
    domGetters,
    stateResponse: {
      // States and derived states
      parsedSelectedSections,
      state
    }
  } = parameters;
  if (!domGetters.isReady()) {
    return;
  }
  const selection = ownerDocument(domGetters.getRoot()).getSelection();
  if (!selection) {
    return;
  }
  if (parsedSelectedSections == null) {
    if (selection.rangeCount > 0 && // Firefox can return a Restricted object here
    selection.getRangeAt(0).startContainer instanceof Node && domGetters.getRoot().contains(selection.getRangeAt(0).startContainer)) {
      selection.removeAllRanges();
    }
    if (focused) {
      domGetters.getRoot().blur();
    }
    return;
  }
  if (!domGetters.getRoot().contains(getActiveElement(domGetters.getRoot()))) {
    return;
  }
  const range = new window.Range();
  let target;
  if (parsedSelectedSections === "all") {
    target = domGetters.getRoot();
  } else {
    const section = state.sections[parsedSelectedSections];
    if (section.type === "empty") {
      target = domGetters.getSectionContainer(parsedSelectedSections);
    } else {
      target = domGetters.getSectionContent(parsedSelectedSections);
    }
  }
  range.selectNodeContents(target);
  target.focus();
  selection.removeAllRanges();
  selection.addRange(range);
}
function useFieldRootHandleKeyDown(parameters) {
  const adapter = usePickerAdapter();
  const {
    manager: {
      internal_fieldValueManager: fieldValueManager
    },
    internalPropsWithDefaults: {
      minutesStep,
      disabled,
      readOnly
    },
    stateResponse: {
      // States and derived states
      state,
      value,
      activeSectionIndex,
      parsedSelectedSections,
      sectionsValueBoundaries,
      localizedDigits,
      timezone,
      sectionOrder,
      // Methods to update the states
      clearValue,
      clearActiveSection,
      setSelectedSections,
      updateSectionValue
    }
  } = parameters;
  return useEventCallback((event) => {
    if (disabled) {
      return;
    }
    switch (true) {
      // Select all
      case ((event.ctrlKey || event.metaKey) && String.fromCharCode(event.keyCode) === "A" && !event.shiftKey && !event.altKey): {
        event.preventDefault();
        setSelectedSections("all");
        break;
      }
      // Move selection to next section
      case event.key === "ArrowRight": {
        event.preventDefault();
        if (parsedSelectedSections == null) {
          setSelectedSections(sectionOrder.startIndex);
        } else if (parsedSelectedSections === "all") {
          setSelectedSections(sectionOrder.endIndex);
        } else {
          const nextSectionIndex = sectionOrder.neighbors[parsedSelectedSections].rightIndex;
          if (nextSectionIndex !== null) {
            setSelectedSections(nextSectionIndex);
          }
        }
        break;
      }
      // Move selection to previous section
      case event.key === "ArrowLeft": {
        event.preventDefault();
        if (parsedSelectedSections == null) {
          setSelectedSections(sectionOrder.endIndex);
        } else if (parsedSelectedSections === "all") {
          setSelectedSections(sectionOrder.startIndex);
        } else {
          const nextSectionIndex = sectionOrder.neighbors[parsedSelectedSections].leftIndex;
          if (nextSectionIndex !== null) {
            setSelectedSections(nextSectionIndex);
          }
        }
        break;
      }
      // Reset the value of the selected section
      case event.key === "Delete": {
        event.preventDefault();
        if (readOnly) {
          break;
        }
        if (parsedSelectedSections == null || parsedSelectedSections === "all") {
          clearValue();
        } else {
          clearActiveSection();
        }
        break;
      }
      // Increment / decrement the selected section value
      case ["ArrowUp", "ArrowDown", "Home", "End", "PageUp", "PageDown"].includes(event.key): {
        event.preventDefault();
        if (readOnly || activeSectionIndex == null) {
          break;
        }
        if (parsedSelectedSections === "all") {
          setSelectedSections(activeSectionIndex);
        }
        const activeSection = state.sections[activeSectionIndex];
        const newSectionValue = adjustSectionValue(adapter, timezone, activeSection, event.key, sectionsValueBoundaries, localizedDigits, fieldValueManager.getDateFromSection(value, activeSection), {
          minutesStep
        });
        updateSectionValue({
          section: activeSection,
          newSectionValue,
          shouldGoToNextSection: false
        });
        break;
      }
    }
  });
}
function getDeltaFromKeyCode(keyCode) {
  switch (keyCode) {
    case "ArrowUp":
      return 1;
    case "ArrowDown":
      return -1;
    case "PageUp":
      return 5;
    case "PageDown":
      return -5;
    default:
      return 0;
  }
}
function adjustSectionValue(adapter, timezone, section, keyCode, sectionsValueBoundaries, localizedDigits, activeDate, stepsAttributes) {
  const delta = getDeltaFromKeyCode(keyCode);
  const isStart = keyCode === "Home";
  const isEnd = keyCode === "End";
  const shouldSetAbsolute = section.value === "" || isStart || isEnd;
  const adjustDigitSection = () => {
    const sectionBoundaries = sectionsValueBoundaries[section.type]({
      currentDate: activeDate,
      format: section.format,
      contentType: section.contentType
    });
    const getCleanValue = (value) => cleanDigitSectionValue(adapter, value, sectionBoundaries, localizedDigits, section);
    const step = section.type === "minutes" && stepsAttributes?.minutesStep ? stepsAttributes.minutesStep : 1;
    let newSectionValueNumber;
    if (shouldSetAbsolute) {
      if (section.type === "year" && !isEnd && !isStart) {
        return adapter.formatByString(adapter.date(void 0, timezone), section.format);
      }
      if (delta > 0 || isStart) {
        newSectionValueNumber = sectionBoundaries.minimum;
      } else {
        newSectionValueNumber = sectionBoundaries.maximum;
      }
    } else {
      const currentSectionValue = parseInt(removeLocalizedDigits(section.value, localizedDigits), 10);
      newSectionValueNumber = currentSectionValue + delta * step;
    }
    if (newSectionValueNumber % step !== 0) {
      if (delta < 0 || isStart) {
        newSectionValueNumber += step - (step + newSectionValueNumber) % step;
      }
      if (delta > 0 || isEnd) {
        newSectionValueNumber -= newSectionValueNumber % step;
      }
    }
    if (newSectionValueNumber > sectionBoundaries.maximum) {
      return getCleanValue(sectionBoundaries.minimum + (newSectionValueNumber - sectionBoundaries.maximum - 1) % (sectionBoundaries.maximum - sectionBoundaries.minimum + 1));
    }
    if (newSectionValueNumber < sectionBoundaries.minimum) {
      return getCleanValue(sectionBoundaries.maximum - (sectionBoundaries.minimum - newSectionValueNumber - 1) % (sectionBoundaries.maximum - sectionBoundaries.minimum + 1));
    }
    return getCleanValue(newSectionValueNumber);
  };
  const adjustLetterSection = () => {
    const options = getLetterEditingOptions(adapter, timezone, section.type, section.format);
    if (options.length === 0) {
      return section.value;
    }
    if (shouldSetAbsolute) {
      if (delta > 0 || isStart) {
        return options[0];
      }
      return options[options.length - 1];
    }
    const currentOptionIndex = options.indexOf(section.value);
    const newOptionIndex = (currentOptionIndex + delta) % options.length;
    const clampedIndex = (newOptionIndex + options.length) % options.length;
    return options[clampedIndex];
  };
  if (section.contentType === "digit" || section.contentType === "digit-with-letter") {
    return adjustDigitSection();
  }
  return adjustLetterSection();
}
function useFieldRootProps(parameters) {
  const {
    manager,
    focused,
    setFocused,
    domGetters,
    stateResponse,
    applyCharacterEditing,
    internalPropsWithDefaults,
    stateResponse: {
      // States and derived states
      parsedSelectedSections,
      sectionOrder,
      state,
      // Methods to update the states
      clearValue,
      setCharacterQuery,
      setSelectedSections,
      updateValueFromValueStr
    },
    internalPropsWithDefaults: {
      disabled = false,
      readOnly = false
    }
  } = parameters;
  const handleKeyDown = useFieldRootHandleKeyDown({
    manager,
    internalPropsWithDefaults,
    stateResponse
  });
  const containerClickTimeout = useTimeout();
  const handleClick = useEventCallback(() => {
    if (disabled || !domGetters.isReady()) {
      return;
    }
    if (parsedSelectedSections === "all") {
      setFocused(true);
      containerClickTimeout.start(0, () => {
        const selection = document.getSelection();
        if (!selection || selection.rangeCount === 0) {
          setSelectedSections(sectionOrder.startIndex);
          return;
        }
        const cursorPosition = selection.getRangeAt(0).startOffset;
        if (cursorPosition === 0) {
          setSelectedSections(sectionOrder.startIndex);
          return;
        }
        let sectionIndex = 0;
        let cursorOnStartOfSection = 0;
        while (cursorOnStartOfSection < cursorPosition && sectionIndex < state.sections.length) {
          const section = state.sections[sectionIndex];
          sectionIndex += 1;
          cursorOnStartOfSection += `${section.startSeparator}${section.value || section.placeholder}${section.endSeparator}`.length;
        }
        setSelectedSections(sectionIndex - 1);
      });
      return;
    }
    if (!focused) {
      setFocused(true);
      if (parsedSelectedSections == null) {
        setSelectedSections(sectionOrder.startIndex);
      }
    }
  });
  const handleMouseDown = useEventCallback((event) => {
    if (disabled || !domGetters.isReady() || parsedSelectedSections === "all") {
      return;
    }
    if (event.button !== 0) {
      return;
    }
    const target = event.target;
    const sectionListRoot = domGetters.getRoot();
    const isInsideSectionList = sectionListRoot.contains(target);
    if (!isInsideSectionList && target !== event.currentTarget) {
      return;
    }
    const sectionElement = isInsideSectionList ? target.closest("[data-sectionindex]") : null;
    const isBlankSpaceClick = sectionElement == null && (!isInsideSectionList || isPointOutsideSections(sectionListRoot, event.clientX));
    if (isBlankSpaceClick) {
      event.preventDefault();
      if (!focused) {
        reactDomExports.flushSync(() => {
          setFocused(true);
          setSelectedSections(sectionOrder.startIndex);
        });
      }
      return;
    }
    const parsedIndex = sectionElement ? Number(sectionElement.dataset.sectionindex) : findClosestSectionIndexToPoint(sectionListRoot, event.clientX);
    if (parsedIndex == null || !Number.isInteger(parsedIndex)) {
      return;
    }
    event.preventDefault();
    reactDomExports.flushSync(() => {
      setFocused(true);
      setSelectedSections(parsedIndex);
    });
  });
  const handleInput = useEventCallback((event) => {
    if (!domGetters.isReady() || parsedSelectedSections !== "all") {
      return;
    }
    const target = event.target;
    const keyPressed = target.textContent ?? "";
    domGetters.getRoot().innerHTML = state.sections.map((section) => `${section.startSeparator}${section.value || section.placeholder}${section.endSeparator}`).join("");
    syncSelectionToDOM({
      focused,
      domGetters,
      stateResponse
    });
    if (keyPressed.length === 0 || keyPressed.charCodeAt(0) === 10) {
      clearValue();
      setSelectedSections("all");
    } else if (keyPressed.length > 1) {
      updateValueFromValueStr(keyPressed);
    } else {
      if (parsedSelectedSections === "all") {
        setSelectedSections(0);
      }
      applyCharacterEditing({
        keyPressed,
        sectionIndex: 0
      });
    }
  });
  const handlePaste = useEventCallback((event) => {
    if (readOnly || parsedSelectedSections !== "all") {
      event.preventDefault();
      return;
    }
    const pastedValue = event.clipboardData.getData("text");
    event.preventDefault();
    setCharacterQuery(null);
    updateValueFromValueStr(pastedValue);
  });
  const handleFocus = useEventCallback(() => {
    if (focused || disabled || !domGetters.isReady()) {
      return;
    }
    const activeElement = getActiveElement(domGetters.getRoot());
    setFocused(true);
    const isFocusInsideASection = domGetters.getSectionIndexFromDOMElement(activeElement) != null;
    if (!isFocusInsideASection) {
      setSelectedSections(sectionOrder.startIndex);
    }
  });
  const handleBlur = useEventCallback(() => {
    setTimeout(() => {
      if (!domGetters.isReady()) {
        return;
      }
      const activeElement = getActiveElement(domGetters.getRoot());
      const shouldBlur = !domGetters.getRoot().contains(activeElement);
      if (shouldBlur) {
        setFocused(false);
        setSelectedSections(null);
      }
    });
  });
  return {
    // Event handlers
    onKeyDown: handleKeyDown,
    onBlur: handleBlur,
    onFocus: handleFocus,
    onClick: handleClick,
    onMouseDown: handleMouseDown,
    onPaste: handlePaste,
    onInput: handleInput,
    // Other
    contentEditable: parsedSelectedSections === "all",
    tabIndex: internalPropsWithDefaults.disabled || parsedSelectedSections === 0 ? -1 : 0
    // TODO: Try to set to undefined when there is a section selected.
  };
}
const BLANK_SPACE_TOLERANCE = 4;
function isPointOutsideSections(root, clientX) {
  const sections = root.querySelectorAll("[data-sectionindex]");
  if (sections.length === 0) {
    return false;
  }
  let left = Infinity;
  let right = -Infinity;
  for (let i = 0; i < sections.length; i += 1) {
    const rect = sections[i].getBoundingClientRect();
    left = Math.min(left, rect.left);
    right = Math.max(right, rect.right);
  }
  return clientX < left - BLANK_SPACE_TOLERANCE || clientX > right + BLANK_SPACE_TOLERANCE;
}
function findClosestSectionIndexToPoint(root, clientX) {
  const sections = root.querySelectorAll('[role="spinbutton"]');
  if (sections.length === 0) {
    return null;
  }
  let closestIndex = 0;
  let closestDistance = Infinity;
  for (let i = 0; i < sections.length; i += 1) {
    const rect = sections[i].getBoundingClientRect();
    const center = (rect.left + rect.right) / 2;
    const distance = Math.abs(clientX - center);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = i;
    }
  }
  return closestIndex;
}
function useFieldHiddenInputProps(parameters) {
  const {
    manager: {
      internal_fieldValueManager: fieldValueManager
    },
    stateResponse: {
      // States and derived states
      areAllSectionsEmpty,
      state,
      // Methods to update the states
      updateValueFromValueStr
    }
  } = parameters;
  const handleChange = useEventCallback((event) => {
    updateValueFromValueStr(event.target.value);
  });
  const valueStr = reactExports.useMemo(() => areAllSectionsEmpty ? "" : fieldValueManager.getV7HiddenInputValueFromSections(state.sections), [areAllSectionsEmpty, state.sections, fieldValueManager]);
  return {
    value: valueStr,
    onChange: handleChange
  };
}
function useFieldSectionContainerProps(parameters) {
  const {
    stateResponse: {
      // States and derived states
      parsedSelectedSections,
      // Methods to update the states
      setSelectedSections
    },
    internalPropsWithDefaults: {
      disabled = false
    }
  } = parameters;
  const handleClick = useEventCallback((event) => {
    if (disabled || event.isDefaultPrevented()) {
      return;
    }
    const sectionIndex = Number(event.currentTarget.dataset.sectionindex);
    if (!Number.isInteger(sectionIndex)) {
      return;
    }
    if (parsedSelectedSections === sectionIndex) {
      return;
    }
    setSelectedSections(sectionIndex);
  });
  return reactExports.useCallback((sectionIndex) => ({
    "data-sectionindex": sectionIndex,
    onClick: handleClick
  }), [handleClick]);
}
function useFieldSectionContentProps(parameters) {
  const adapter = usePickerAdapter();
  const translations = usePickerTranslations();
  const {
    focused,
    domGetters,
    stateResponse,
    applyCharacterEditing,
    manager: {
      internal_fieldValueManager: fieldValueManager
    },
    stateResponse: {
      // States and derived states
      parsedSelectedSections,
      sectionsValueBoundaries,
      state,
      value,
      localizedDigits,
      // Methods to update the states
      clearActiveSection,
      setCharacterQuery,
      setSelectedSections,
      updateSectionValue,
      updateValueFromValueStr
    },
    internalPropsWithDefaults: {
      disabled = false,
      readOnly = false
    }
  } = parameters;
  const isContainerEditable = parsedSelectedSections === "all";
  const isEditable = !isContainerEditable && !disabled && !readOnly;
  const revertDOMSectionChange = useEventCallback((sectionIndex) => {
    if (!domGetters.isReady()) {
      return;
    }
    const section = state.sections[sectionIndex];
    domGetters.getSectionContent(sectionIndex).innerHTML = section.value || section.placeholder;
    syncSelectionToDOM({
      focused,
      domGetters,
      stateResponse
    });
  });
  const handleInput = useEventCallback((event) => {
    if (!domGetters.isReady()) {
      return;
    }
    const target = event.target;
    const keyPressed = target.textContent ?? "";
    const sectionIndex = domGetters.getSectionIndexFromDOMElement(target);
    const section = state.sections[sectionIndex];
    if (readOnly) {
      revertDOMSectionChange(sectionIndex);
      return;
    }
    if (keyPressed.length === 0) {
      if (section.value === "") {
        revertDOMSectionChange(sectionIndex);
        return;
      }
      const inputType = event.nativeEvent.inputType;
      if (inputType === "insertParagraph" || inputType === "insertLineBreak") {
        revertDOMSectionChange(sectionIndex);
        return;
      }
      revertDOMSectionChange(sectionIndex);
      clearActiveSection();
      return;
    }
    applyCharacterEditing({
      keyPressed,
      sectionIndex
    });
    revertDOMSectionChange(sectionIndex);
  });
  const handleMouseUp = useEventCallback((event) => {
    event.preventDefault();
  });
  const handlePaste = useEventCallback((event) => {
    event.preventDefault();
    if (readOnly || disabled || typeof parsedSelectedSections !== "number") {
      return;
    }
    const activeSection = state.sections[parsedSelectedSections];
    const pastedValue = event.clipboardData.getData("text");
    const lettersOnly = /^[a-zA-Z]+$/.test(pastedValue);
    const digitsOnly = /^[0-9]+$/.test(pastedValue);
    const digitsAndLetterOnly = /^(([a-zA-Z]+)|)([0-9]+)(([a-zA-Z]+)|)$/.test(pastedValue);
    const isValidPastedValue = activeSection.contentType === "letter" && lettersOnly || activeSection.contentType === "digit" && digitsOnly || activeSection.contentType === "digit-with-letter" && digitsAndLetterOnly;
    if (isValidPastedValue) {
      setCharacterQuery(null);
      updateSectionValue({
        section: activeSection,
        newSectionValue: pastedValue,
        shouldGoToNextSection: true
      });
    } else if (!lettersOnly && !digitsOnly) {
      setCharacterQuery(null);
      updateValueFromValueStr(pastedValue);
    }
  });
  const handleDragOver = useEventCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "none";
  });
  const createFocusHandler = reactExports.useCallback((sectionIndex) => () => {
    if (disabled) {
      return;
    }
    setSelectedSections(sectionIndex);
  }, [disabled, setSelectedSections]);
  return reactExports.useCallback((section, sectionIndex) => {
    const sectionBoundaries = sectionsValueBoundaries[section.type]({
      currentDate: fieldValueManager.getDateFromSection(value, section),
      contentType: section.contentType,
      format: section.format
    });
    return {
      // Event handlers
      onInput: handleInput,
      onPaste: handlePaste,
      onMouseUp: handleMouseUp,
      onDragOver: handleDragOver,
      onFocus: createFocusHandler(sectionIndex),
      // Aria attributes
      "aria-readonly": readOnly,
      "aria-valuenow": getSectionValueNow(section, adapter, localizedDigits),
      "aria-valuemin": sectionBoundaries.minimum,
      "aria-valuemax": sectionBoundaries.maximum,
      "aria-valuetext": section.value ? getSectionValueText(section, adapter, localizedDigits) : translations.empty,
      "aria-label": translations[section.type],
      "aria-disabled": disabled,
      // Other
      tabIndex: !isEditable || isContainerEditable || sectionIndex > 0 ? -1 : 0,
      contentEditable: !isContainerEditable && !disabled && !readOnly,
      role: "spinbutton",
      "data-range-position": section.dateName || void 0,
      spellCheck: isEditable ? false : void 0,
      // Firefox hydrates this as `'none`' instead of `'off'`. No problems in chromium with both values.
      // For reference https://github.com/mui/mui-x/issues/19012
      autoCapitalize: isEditable ? "none" : void 0,
      autoCorrect: isEditable ? "off" : void 0,
      children: section.value || section.placeholder,
      inputMode: section.contentType === "letter" ? "text" : "numeric"
    };
  }, [sectionsValueBoundaries, isContainerEditable, disabled, readOnly, isEditable, translations, adapter, localizedDigits, handleInput, handlePaste, handleMouseUp, handleDragOver, createFocusHandler, fieldValueManager, value]);
}
function getSectionValueText(section, adapter, localizedDigits) {
  if (!section.value) {
    return void 0;
  }
  switch (section.type) {
    case "month": {
      if (section.contentType === "digit") {
        const dateWithMonth = adapter.setMonth(adapter.date(), Number(removeLocalizedDigits(section.value, localizedDigits)) - 1);
        return adapter.isValid(dateWithMonth) ? adapter.format(dateWithMonth, "month") : "";
      }
      const parsedDate = adapter.parse(section.value, section.format);
      return parsedDate && adapter.isValid(parsedDate) ? adapter.format(parsedDate, "month") : void 0;
    }
    case "day":
      if (section.contentType === "digit") {
        const dateWithDay = adapter.setDate(adapter.startOfYear(adapter.date()), Number(removeLocalizedDigits(section.value, localizedDigits)));
        return adapter.isValid(dateWithDay) ? adapter.format(dateWithDay, "dayOfMonthFull") : "";
      }
      return section.value;
    case "weekDay":
      return void 0;
    default:
      return void 0;
  }
}
function getSectionValueNow(section, adapter, localizedDigits) {
  if (!section.value) {
    return void 0;
  }
  const nonLocalizedValue = removeLocalizedDigits(section.value, localizedDigits);
  switch (section.type) {
    case "weekDay": {
      if (section.contentType === "letter") {
        return void 0;
      }
      return Number(nonLocalizedValue);
    }
    case "meridiem": {
      const parsedDate = adapter.parse(`01:00 ${section.value}`, `${adapter.formats.hours12h}:${adapter.formats.minutes} ${section.format}`);
      if (parsedDate) {
        return adapter.getHours(parsedDate) >= 12 ? 1 : 0;
      }
      return void 0;
    }
    case "day":
      return section.contentType === "digit-with-letter" ? parseInt(nonLocalizedValue, 10) : Number(nonLocalizedValue);
    case "month": {
      if (section.contentType === "digit") {
        return Number(nonLocalizedValue);
      }
      const parsedDate = adapter.parse(section.value, section.format);
      return parsedDate ? adapter.getMonth(parsedDate) + 1 : void 0;
    }
    default:
      return section.contentType !== "letter" ? Number(nonLocalizedValue) : void 0;
  }
}
const useFieldV7TextField = (parameters) => {
  const {
    props,
    manager,
    skipContextFieldRefAssignment,
    manager: {
      valueType,
      internal_useOpenPickerButtonAriaLabel: useOpenPickerButtonAriaLabel2
    }
  } = parameters;
  const {
    internalProps,
    forwardedProps
  } = useSplitFieldProps(props, valueType);
  const internalPropsWithDefaults = useFieldInternalPropsWithDefaults({
    manager,
    internalProps,
    skipContextFieldRefAssignment
  });
  const {
    sectionListRef: sectionListRefProp,
    onBlur,
    onClick,
    onMouseDown,
    onFocus,
    onInput,
    onPaste,
    onKeyDown,
    onClear,
    clearable
  } = forwardedProps;
  const {
    disabled = false,
    readOnly = false,
    autoFocus = false,
    focused: focusedProp,
    unstableFieldRef
  } = internalPropsWithDefaults;
  const sectionListRef = reactExports.useRef(null);
  const handleSectionListRef = useForkRef(sectionListRefProp, sectionListRef);
  const domGetters = reactExports.useMemo(() => ({
    isReady: () => sectionListRef.current != null,
    getRoot: () => sectionListRef.current.getRoot(),
    getSectionContainer: (sectionIndex) => sectionListRef.current.getSectionContainer(sectionIndex),
    getSectionContent: (sectionIndex) => sectionListRef.current.getSectionContent(sectionIndex),
    getSectionIndexFromDOMElement: (element) => sectionListRef.current.getSectionIndexFromDOMElement(element)
  }), [sectionListRef]);
  const stateResponse = useFieldState({
    manager,
    internalPropsWithDefaults,
    forwardedProps
  });
  const {
    // States and derived states
    areAllSectionsEmpty,
    error,
    parsedSelectedSections,
    sectionOrder,
    state,
    value,
    // Methods to update the states
    clearValue,
    setSelectedSections
  } = stateResponse;
  const applyCharacterEditing = useFieldCharacterEditing({
    stateResponse
  });
  const openPickerAriaLabel = useOpenPickerButtonAriaLabel2(value);
  const [focused, setFocused] = reactExports.useState(false);
  function focusField(newSelectedSections = 0) {
    if (disabled || !sectionListRef.current || // if the field is already focused, we don't need to focus it again
    getActiveSectionIndex(sectionListRef) != null) {
      return;
    }
    const newParsedSelectedSections = parseSelectedSections(newSelectedSections, state.sections);
    setFocused(true);
    sectionListRef.current.getSectionContent(newParsedSelectedSections).focus();
  }
  const rootProps = useFieldRootProps({
    manager,
    internalPropsWithDefaults,
    stateResponse,
    applyCharacterEditing,
    focused,
    setFocused,
    domGetters
  });
  const hiddenInputProps = useFieldHiddenInputProps({
    manager,
    stateResponse
  });
  const createSectionContainerProps = useFieldSectionContainerProps({
    stateResponse,
    internalPropsWithDefaults
  });
  const createSectionContentProps = useFieldSectionContentProps({
    manager,
    stateResponse,
    applyCharacterEditing,
    internalPropsWithDefaults,
    domGetters,
    focused
  });
  const handleRootKeyDown = useEventCallback((event) => {
    onKeyDown?.(event);
    rootProps.onKeyDown(event);
  });
  const handleRootBlur = useEventCallback((event) => {
    onBlur?.(event);
    rootProps.onBlur(event);
  });
  const handleRootFocus = useEventCallback((event) => {
    onFocus?.(event);
    rootProps.onFocus(event);
  });
  const handleRootClick = useEventCallback((event) => {
    if (event.isDefaultPrevented()) {
      return;
    }
    onClick?.(event);
    rootProps.onClick(event);
  });
  const handleRootMouseDown = useEventCallback((event) => {
    if (event.isDefaultPrevented()) {
      return;
    }
    onMouseDown?.(event);
    rootProps.onMouseDown(event);
  });
  const handleRootPaste = useEventCallback((event) => {
    onPaste?.(event);
    rootProps.onPaste(event);
  });
  const handleRootInput = useEventCallback((event) => {
    onInput?.(event);
    rootProps.onInput(event);
  });
  const handleClear = useEventCallback((event, ...args) => {
    event.preventDefault();
    onClear?.(event, ...args);
    clearValue();
    if (!isFieldFocused$1(sectionListRef)) {
      focusField(0);
    } else {
      setSelectedSections(sectionOrder.startIndex);
    }
  });
  const elements = reactExports.useMemo(() => {
    return state.sections.map((section, sectionIndex) => {
      const content = createSectionContentProps(section, sectionIndex);
      return {
        container: createSectionContainerProps(sectionIndex),
        content: createSectionContentProps(section, sectionIndex),
        before: {
          children: section.startSeparator
        },
        after: {
          children: section.endSeparator,
          "data-range-position": section.isEndFormatSeparator ? content["data-range-position"] : void 0
        }
      };
    });
  }, [state.sections, createSectionContainerProps, createSectionContentProps]);
  reactExports.useEffect(() => {
    if (sectionListRef.current == null) {
      throw new Error(["MUI X: The `sectionListRef` prop has not been initialized by `PickersSectionList`", "You probably tried to pass a component to the `textField` slot that contains an `<input />` element instead of a `PickersSectionList`.", "", "If you want to keep using an `<input />` HTML element for the editing, please add the `enableAccessibleFieldDOMStructure={false}` prop to your Picker or Field component:", "", "<DatePicker enableAccessibleFieldDOMStructure={false} slots={{ textField: MyCustomTextField }} />", "", "Learn more about the field accessible DOM structure on the MUI documentation: https://mui.com/x/react-date-pickers/fields/#fields-to-edit-a-single-element"].join("\n"));
    }
    if (autoFocus && !disabled && sectionListRef.current) {
      sectionListRef.current.getSectionContent(sectionOrder.startIndex).focus();
    }
  }, []);
  useEnhancedEffect(() => {
    if (!focused || !sectionListRef.current) {
      return;
    }
    if (parsedSelectedSections === "all") {
      sectionListRef.current.getRoot().focus();
    } else if (typeof parsedSelectedSections === "number") {
      const domElement = sectionListRef.current.getSectionContent(parsedSelectedSections);
      if (domElement) {
        domElement.focus();
      }
    }
  }, [parsedSelectedSections, focused]);
  useEnhancedEffect(() => {
    syncSelectionToDOM({
      focused,
      domGetters,
      stateResponse
    });
  });
  reactExports.useImperativeHandle(unstableFieldRef, () => ({
    getSections: () => state.sections,
    getActiveSectionIndex: () => getActiveSectionIndex(sectionListRef),
    setSelectedSections: (newSelectedSections) => {
      if (disabled || !sectionListRef.current) {
        return;
      }
      const newParsedSelectedSections = parseSelectedSections(newSelectedSections, state.sections);
      const newActiveSectionIndex = newParsedSelectedSections === "all" ? 0 : newParsedSelectedSections;
      setFocused(newActiveSectionIndex !== null);
      setSelectedSections(newSelectedSections);
    },
    focusField,
    isFieldFocused: () => isFieldFocused$1(sectionListRef)
  }));
  return _extends({}, forwardedProps, rootProps, {
    onBlur: handleRootBlur,
    onClick: handleRootClick,
    onMouseDown: handleRootMouseDown,
    onFocus: handleRootFocus,
    onInput: handleRootInput,
    onPaste: handleRootPaste,
    onKeyDown: handleRootKeyDown,
    onClear: handleClear
  }, hiddenInputProps, {
    error,
    clearable: Boolean(clearable && !areAllSectionsEmpty && !readOnly && !disabled),
    focused: focusedProp ?? focused,
    sectionListRef: handleSectionListRef,
    // Additional
    enableAccessibleFieldDOMStructure: true,
    elements,
    areAllSectionsEmpty,
    disabled,
    readOnly,
    autoFocus,
    openPickerAriaLabel
  });
};
function getActiveSectionIndex(sectionListRef) {
  const activeElement = getActiveElement(sectionListRef.current?.getRoot());
  if (!activeElement || !sectionListRef.current || !sectionListRef.current.getRoot().contains(activeElement)) {
    return null;
  }
  return sectionListRef.current.getSectionIndexFromDOMElement(activeElement);
}
function isFieldFocused$1(sectionListRef) {
  const activeElement = getActiveElement(sectionListRef.current?.getRoot());
  return !!sectionListRef.current && sectionListRef.current.getRoot().contains(activeElement);
}
const cleanString = (dirtyString) => dirtyString.replace(/[\u2066\u2067\u2068\u2069]/g, "");
const addPositionPropertiesToSections = (sections, localizedDigits, isRtl) => {
  let position = 0;
  let positionInInput = isRtl ? 1 : 0;
  const newSections = [];
  for (let i = 0; i < sections.length; i += 1) {
    const section = sections[i];
    const renderedValue = getSectionVisibleValue(section, isRtl ? "input-rtl" : "input-ltr", localizedDigits);
    const sectionStr = `${section.startSeparator}${renderedValue}${section.endSeparator}`;
    const sectionLength = cleanString(sectionStr).length;
    const sectionLengthInInput = sectionStr.length;
    const cleanedValue = cleanString(renderedValue);
    const startInInput = positionInInput + (cleanedValue === "" ? 0 : renderedValue.indexOf(cleanedValue[0])) + section.startSeparator.length;
    const endInInput = startInInput + cleanedValue.length;
    newSections.push(_extends({}, section, {
      start: position,
      end: position + sectionLength,
      startInInput,
      endInInput
    }));
    position += sectionLength;
    positionInInput += sectionLengthInInput;
  }
  return newSections;
};
const useFieldV6TextField = (parameters) => {
  const isRtl = useRtl();
  const focusTimeout = useTimeout();
  const selectionSyncTimeout = useTimeout();
  const {
    props,
    manager,
    skipContextFieldRefAssignment,
    manager: {
      valueType,
      internal_valueManager: valueManager,
      internal_fieldValueManager: fieldValueManager,
      internal_useOpenPickerButtonAriaLabel: useOpenPickerButtonAriaLabel2
    }
  } = parameters;
  const {
    internalProps,
    forwardedProps
  } = useSplitFieldProps(props, valueType);
  const internalPropsWithDefaults = useFieldInternalPropsWithDefaults({
    manager,
    internalProps,
    skipContextFieldRefAssignment
  });
  const {
    onFocus,
    onClick,
    onPaste,
    onBlur,
    onKeyDown,
    onClear,
    clearable,
    inputRef: inputRefProp,
    placeholder: inPlaceholder
  } = forwardedProps;
  const {
    readOnly = false,
    disabled = false,
    autoFocus = false,
    focused,
    unstableFieldRef
  } = internalPropsWithDefaults;
  const inputRef = reactExports.useRef(null);
  const handleRef = useForkRef(inputRefProp, inputRef);
  const stateResponse = useFieldState({
    manager,
    internalPropsWithDefaults,
    forwardedProps
  });
  const {
    // States and derived states
    activeSectionIndex,
    areAllSectionsEmpty,
    error,
    localizedDigits,
    parsedSelectedSections,
    sectionOrder,
    state,
    value,
    // Methods to update the states
    clearValue,
    clearActiveSection,
    setCharacterQuery,
    setSelectedSections,
    setTempAndroidValueStr,
    updateSectionValue,
    updateValueFromValueStr,
    // Utilities methods
    getSectionsFromValue
  } = stateResponse;
  const applyCharacterEditing = useFieldCharacterEditing({
    stateResponse
  });
  const openPickerAriaLabel = useOpenPickerButtonAriaLabel2(value);
  const sections = reactExports.useMemo(() => addPositionPropertiesToSections(state.sections, localizedDigits, isRtl), [state.sections, localizedDigits, isRtl]);
  function syncSelectionFromDOM() {
    const browserStartIndex = inputRef.current.selectionStart ?? 0;
    let nextSectionIndex;
    if (browserStartIndex <= sections[0].startInInput) {
      nextSectionIndex = 1;
    } else if (browserStartIndex >= sections[sections.length - 1].endInInput) {
      nextSectionIndex = 1;
    } else {
      nextSectionIndex = sections.findIndex((section) => section.startInInput - section.startSeparator.length > browserStartIndex);
    }
    const sectionIndex = nextSectionIndex === -1 ? sections.length - 1 : nextSectionIndex - 1;
    setSelectedSections(sectionIndex);
  }
  function focusField(newSelectedSection = 0) {
    if (getActiveElement(inputRef.current) === inputRef.current) {
      return;
    }
    inputRef.current?.focus();
    setSelectedSections(newSelectedSection);
  }
  const handleInputFocus = useEventCallback((event) => {
    onFocus?.(event);
    const input = inputRef.current;
    focusTimeout.start(0, () => {
      if (!input || input !== inputRef.current) {
        return;
      }
      if (activeSectionIndex != null) {
        return;
      }
      if (
        // avoid selecting all sections when focusing empty field without value
        input.value.length && Number(input.selectionEnd) - Number(input.selectionStart) === input.value.length
      ) {
        setSelectedSections("all");
      } else {
        syncSelectionFromDOM();
      }
    });
  });
  const handleInputClick = useEventCallback((event, ...args) => {
    if (event.isDefaultPrevented()) {
      return;
    }
    onClick?.(event, ...args);
    syncSelectionFromDOM();
  });
  const handleInputPaste = useEventCallback((event) => {
    onPaste?.(event);
    event.preventDefault();
    if (readOnly || disabled) {
      return;
    }
    const pastedValue = event.clipboardData.getData("text");
    if (typeof parsedSelectedSections === "number") {
      const activeSection = state.sections[parsedSelectedSections];
      const lettersOnly = /^[a-zA-Z]+$/.test(pastedValue);
      const digitsOnly = /^[0-9]+$/.test(pastedValue);
      const digitsAndLetterOnly = /^(([a-zA-Z]+)|)([0-9]+)(([a-zA-Z]+)|)$/.test(pastedValue);
      const isValidPastedValue = activeSection.contentType === "letter" && lettersOnly || activeSection.contentType === "digit" && digitsOnly || activeSection.contentType === "digit-with-letter" && digitsAndLetterOnly;
      if (isValidPastedValue) {
        setCharacterQuery(null);
        updateSectionValue({
          section: activeSection,
          newSectionValue: pastedValue,
          shouldGoToNextSection: true
        });
        return;
      }
      if (lettersOnly || digitsOnly) {
        return;
      }
    }
    setCharacterQuery(null);
    updateValueFromValueStr(pastedValue);
  });
  const handleContainerBlur = useEventCallback((event) => {
    onBlur?.(event);
    setSelectedSections(null);
  });
  const handleInputChange = useEventCallback((event) => {
    if (readOnly) {
      return;
    }
    const targetValue = event.target.value;
    if (targetValue === "") {
      clearValue();
      return;
    }
    const eventData = event.nativeEvent.data;
    const shouldUseEventData = eventData && eventData.length > 1;
    const valueStr2 = shouldUseEventData ? eventData : targetValue;
    const cleanValueStr = cleanString(valueStr2);
    if (parsedSelectedSections === "all") {
      setSelectedSections(activeSectionIndex);
    }
    if (activeSectionIndex == null || shouldUseEventData) {
      updateValueFromValueStr(shouldUseEventData ? eventData : cleanValueStr);
      return;
    }
    let keyPressed;
    if (parsedSelectedSections === "all" && cleanValueStr.length === 1) {
      keyPressed = cleanValueStr;
    } else {
      const prevValueStr = cleanString(fieldValueManager.getV6InputValueFromSections(sections, localizedDigits, isRtl));
      let startOfDiffIndex = -1;
      let endOfDiffIndex = -1;
      for (let i = 0; i < prevValueStr.length; i += 1) {
        if (startOfDiffIndex === -1 && prevValueStr[i] !== cleanValueStr[i]) {
          startOfDiffIndex = i;
        }
        if (endOfDiffIndex === -1 && prevValueStr[prevValueStr.length - i - 1] !== cleanValueStr[cleanValueStr.length - i - 1]) {
          endOfDiffIndex = i;
        }
      }
      const activeSection = sections[activeSectionIndex];
      const hasDiffOutsideOfActiveSection = startOfDiffIndex < activeSection.start || prevValueStr.length - endOfDiffIndex - 1 > activeSection.end;
      if (hasDiffOutsideOfActiveSection) {
        return;
      }
      const activeSectionEndRelativeToNewValue = cleanValueStr.length - prevValueStr.length + activeSection.end - cleanString(activeSection.endSeparator || "").length;
      keyPressed = cleanValueStr.slice(activeSection.start + cleanString(activeSection.startSeparator || "").length, activeSectionEndRelativeToNewValue);
    }
    if (keyPressed.length === 0) {
      if (isAndroid()) {
        setTempAndroidValueStr(valueStr2);
      }
      clearActiveSection();
      return;
    }
    applyCharacterEditing({
      keyPressed,
      sectionIndex: activeSectionIndex
    });
  });
  const handleClear = useEventCallback((event, ...args) => {
    event.preventDefault();
    onClear?.(event, ...args);
    clearValue();
    if (!isFieldFocused(inputRef)) {
      focusField(0);
    } else {
      setSelectedSections(sectionOrder.startIndex);
    }
  });
  const handleContainerKeyDown = useFieldRootHandleKeyDown({
    manager,
    internalPropsWithDefaults,
    stateResponse
  });
  const wrappedHandleContainerKeyDown = useEventCallback((event) => {
    onKeyDown?.(event);
    handleContainerKeyDown(event);
  });
  const placeholder = reactExports.useMemo(() => {
    if (inPlaceholder !== void 0) {
      return inPlaceholder;
    }
    return fieldValueManager.getV6InputValueFromSections(getSectionsFromValue(valueManager.emptyValue), localizedDigits, isRtl);
  }, [inPlaceholder, fieldValueManager, getSectionsFromValue, valueManager.emptyValue, localizedDigits, isRtl]);
  const valueStr = reactExports.useMemo(() => state.tempValueStrAndroid ?? fieldValueManager.getV6InputValueFromSections(state.sections, localizedDigits, isRtl), [state.sections, fieldValueManager, state.tempValueStrAndroid, localizedDigits, isRtl]);
  reactExports.useEffect(() => {
    if (inputRef.current && inputRef.current === getActiveElement(inputRef.current)) {
      setSelectedSections("all");
    }
  }, []);
  useEnhancedEffect(() => {
    function syncSelectionToDOM2() {
      if (!inputRef.current) {
        return;
      }
      if (parsedSelectedSections == null) {
        if (inputRef.current.scrollLeft) {
          inputRef.current.scrollLeft = 0;
        }
        return;
      }
      if (inputRef.current !== getActiveElement(inputRef.current)) {
        return;
      }
      const currentScrollTop = inputRef.current.scrollTop;
      if (parsedSelectedSections === "all") {
        inputRef.current.select();
      } else {
        const selectedSection = sections[parsedSelectedSections];
        const selectionStart = selectedSection.type === "empty" ? selectedSection.startInInput - selectedSection.startSeparator.length : selectedSection.startInInput;
        const selectionEnd = selectedSection.type === "empty" ? selectedSection.endInInput + selectedSection.endSeparator.length : selectedSection.endInInput;
        if (selectionStart !== inputRef.current.selectionStart || selectionEnd !== inputRef.current.selectionEnd) {
          if (inputRef.current === getActiveElement(inputRef.current)) {
            inputRef.current.setSelectionRange(selectionStart, selectionEnd);
          }
        }
        selectionSyncTimeout.start(0, () => {
          if (inputRef.current && inputRef.current === getActiveElement(inputRef.current) && // The section might loose all selection, where `selectionStart === selectionEnd`
          // https://github.com/mui/mui-x/pull/13652
          inputRef.current.selectionStart === inputRef.current.selectionEnd && (inputRef.current.selectionStart !== selectionStart || inputRef.current.selectionEnd !== selectionEnd)) {
            syncSelectionToDOM2();
          }
        });
      }
      inputRef.current.scrollTop = currentScrollTop;
    }
    syncSelectionToDOM2();
  });
  const inputMode = reactExports.useMemo(() => {
    if (activeSectionIndex == null) {
      return "text";
    }
    if (state.sections[activeSectionIndex].contentType === "letter") {
      return "text";
    }
    return "numeric";
  }, [activeSectionIndex, state.sections]);
  const inputHasFocus = inputRef.current && inputRef.current === getActiveElement(inputRef.current);
  const shouldShowPlaceholder = !inputHasFocus && areAllSectionsEmpty;
  reactExports.useImperativeHandle(unstableFieldRef, () => ({
    getSections: () => state.sections,
    getActiveSectionIndex: () => {
      const browserStartIndex = inputRef.current.selectionStart ?? 0;
      const browserEndIndex = inputRef.current.selectionEnd ?? 0;
      if (browserStartIndex === 0 && browserEndIndex === 0) {
        return null;
      }
      const nextSectionIndex = browserStartIndex <= sections[0].startInInput ? 1 : sections.findIndex((section) => section.startInInput - section.startSeparator.length > browserStartIndex);
      return nextSectionIndex === -1 ? sections.length - 1 : nextSectionIndex - 1;
    },
    setSelectedSections: (newSelectedSections) => setSelectedSections(newSelectedSections),
    focusField,
    isFieldFocused: () => isFieldFocused(inputRef)
  }));
  return _extends({}, forwardedProps, {
    error,
    "aria-invalid": error,
    clearable: Boolean(clearable && !areAllSectionsEmpty && !readOnly && !disabled),
    onBlur: handleContainerBlur,
    onClick: handleInputClick,
    onFocus: handleInputFocus,
    onPaste: handleInputPaste,
    onKeyDown: wrappedHandleContainerKeyDown,
    onClear: handleClear,
    inputRef: handleRef,
    // Additional
    enableAccessibleFieldDOMStructure: false,
    placeholder,
    inputMode,
    autoComplete: "off",
    value: shouldShowPlaceholder ? "" : valueStr,
    onChange: handleInputChange,
    focused,
    disabled,
    readOnly,
    autoFocus,
    openPickerAriaLabel
  });
};
function isFieldFocused(inputRef) {
  return inputRef.current === getActiveElement(inputRef.current);
}
const useField = (parameters) => {
  const fieldPrivateContext = useNullableFieldPrivateContext();
  const enableAccessibleFieldDOMStructure = parameters.props.enableAccessibleFieldDOMStructure ?? fieldPrivateContext?.enableAccessibleFieldDOMStructure ?? true;
  const useFieldTextField = enableAccessibleFieldDOMStructure ? useFieldV7TextField : useFieldV6TextField;
  return useFieldTextField(parameters);
};
function useDateManager(parameters = {}) {
  const {
    enableAccessibleFieldDOMStructure = true
  } = parameters;
  return reactExports.useMemo(() => ({
    valueType: "date",
    validator: validateDate,
    internal_valueManager: singleItemValueManager,
    internal_fieldValueManager: singleItemFieldValueManager,
    internal_enableAccessibleFieldDOMStructure: enableAccessibleFieldDOMStructure,
    internal_useApplyDefaultValuesToFieldInternalProps: useApplyDefaultValuesToDateFieldInternalProps,
    internal_useOpenPickerButtonAriaLabel: useOpenPickerButtonAriaLabel
  }), [enableAccessibleFieldDOMStructure]);
}
function useOpenPickerButtonAriaLabel(value) {
  const adapter = usePickerAdapter();
  const translations = usePickerTranslations();
  return reactExports.useMemo(() => {
    const formattedValue = adapter.isValid(value) ? adapter.format(value, "fullDate") : null;
    return translations.openDatePickerDialogue(formattedValue);
  }, [value, translations, adapter]);
}
function useApplyDefaultValuesToDateFieldInternalProps(internalProps) {
  const adapter = usePickerAdapter();
  const validationProps = useApplyDefaultValuesToDateValidationProps(internalProps);
  return reactExports.useMemo(() => _extends({}, internalProps, validationProps, {
    format: internalProps.format ?? adapter.formats.keyboardDate
  }), [internalProps, validationProps, adapter]);
}
function useApplyDefaultValuesToDateValidationProps(props) {
  const adapter = usePickerAdapter();
  const defaultDates = useDefaultDates();
  return reactExports.useMemo(() => ({
    disablePast: props.disablePast ?? false,
    disableFuture: props.disableFuture ?? false,
    minDate: applyDefaultDate(adapter, props.minDate, defaultDates.minDate),
    maxDate: applyDefaultDate(adapter, props.maxDate, defaultDates.maxDate)
  }), [props.minDate, props.maxDate, props.disableFuture, props.disablePast, adapter, defaultDates]);
}
const major = Number("7");
function useFieldOwnerState(parameters) {
  const {
    ownerState: pickerOwnerState
  } = usePickerPrivateContext();
  const isRtl = useRtl();
  return reactExports.useMemo(() => _extends({}, pickerOwnerState, {
    isFieldDisabled: parameters.disabled ?? false,
    isFieldReadOnly: parameters.readOnly ?? false,
    isFieldRequired: parameters.required ?? false,
    fieldDirection: isRtl ? "rtl" : "ltr"
  }), [pickerOwnerState, parameters.disabled, parameters.readOnly, parameters.required, isRtl]);
}
function getPickersTextFieldUtilityClass(slot) {
  return generateUtilityClass("MuiPickersTextField", slot);
}
generateUtilityClasses("MuiPickersTextField", ["root", "focused", "disabled", "error", "required"]);
const _excluded$o = ["slots", "slotProps", "elements", "sectionListRef", "classes"];
const PickersSectionListRoot = styled("div", {
  name: "MuiPickersSectionList",
  slot: "Root"
})({
  direction: "ltr /*! @noflip */",
  outline: "none"
});
const PickersSectionListSection = styled("span", {
  name: "MuiPickersSectionList",
  slot: "Section"
})({});
const PickersSectionListSectionSeparator = styled("span", {
  name: "MuiPickersSectionList",
  slot: "SectionSeparator"
})({
  whiteSpace: "pre"
});
const PickersSectionListSectionContent = styled("span", {
  name: "MuiPickersSectionList",
  slot: "SectionContent"
})({
  outline: "none"
});
const useUtilityClasses$k = (classes) => {
  const slots = {
    root: ["root"],
    section: ["section"],
    sectionContent: ["sectionContent"]
  };
  return composeClasses(slots, getPickersSectionListUtilityClass, classes);
};
function PickersSection(props) {
  const {
    slots,
    slotProps,
    element,
    classes
  } = props;
  const {
    ownerState
  } = usePickerPrivateContext();
  const Section = slots?.section ?? PickersSectionListSection;
  const sectionProps = useSlotProps({
    elementType: Section,
    externalSlotProps: slotProps?.section,
    externalForwardedProps: element.container,
    className: classes.section,
    ownerState
  });
  const SectionContent = slots?.sectionContent ?? PickersSectionListSectionContent;
  const sectionContentProps = useSlotProps({
    elementType: SectionContent,
    externalSlotProps: slotProps?.sectionContent,
    externalForwardedProps: element.content,
    additionalProps: {
      suppressContentEditableWarning: true
    },
    className: classes.sectionContent,
    ownerState
  });
  const SectionSeparator = slots?.sectionSeparator ?? PickersSectionListSectionSeparator;
  const sectionSeparatorBeforeProps = useSlotProps({
    elementType: SectionSeparator,
    externalSlotProps: slotProps?.sectionSeparator,
    externalForwardedProps: element.before,
    ownerState: _extends({}, ownerState, {
      separatorPosition: "before"
    })
  });
  const sectionSeparatorAfterProps = useSlotProps({
    elementType: SectionSeparator,
    externalSlotProps: slotProps?.sectionSeparator,
    externalForwardedProps: element.after,
    ownerState: _extends({}, ownerState, {
      separatorPosition: "after"
    })
  });
  const sectionContentRef = reactExports.useRef(null);
  const handleSectionContentRef = useForkRef(sectionContentProps.ref, sectionContentRef);
  const handleContentBlur = (event) => {
    const next = event.relatedTarget;
    const root = event.currentTarget.closest(`.${pickersSectionListClasses.root}`);
    if (root && next instanceof Node && root.contains(next)) {
      event.stopPropagation();
      return;
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, _extends({}, sectionProps, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(SectionSeparator, _extends({}, sectionSeparatorBeforeProps)), /* @__PURE__ */ jsxRuntimeExports.jsx(SectionContent, _extends({}, sectionContentProps, {
      ref: handleSectionContentRef,
      onBlur: handleContentBlur
    })), /* @__PURE__ */ jsxRuntimeExports.jsx(SectionSeparator, _extends({}, sectionSeparatorAfterProps))]
  }));
}
const PickersSectionList = /* @__PURE__ */ reactExports.forwardRef(function PickersSectionList2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersSectionList"
  });
  const {
    slots,
    slotProps,
    elements,
    sectionListRef,
    classes: classesProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$o);
  const classes = useUtilityClasses$k(classesProp);
  const {
    ownerState
  } = usePickerPrivateContext();
  const rootRef = reactExports.useRef(null);
  const handleRootRef = useForkRef(ref, rootRef);
  const getRoot = (methodName) => {
    if (!rootRef.current) {
      throw new Error(`MUI X: Cannot call sectionListRef.${methodName} before the mount of the component.`);
    }
    return rootRef.current;
  };
  reactExports.useImperativeHandle(sectionListRef, () => ({
    getRoot() {
      return getRoot("getRoot");
    },
    getSectionContainer(index) {
      const root = getRoot("getSectionContainer");
      return root.querySelector(`.${pickersSectionListClasses.section}[data-sectionindex="${index}"]`);
    },
    getSectionContent(index) {
      const root = getRoot("getSectionContent");
      return root.querySelector(`.${pickersSectionListClasses.section}[data-sectionindex="${index}"] .${pickersSectionListClasses.sectionContent}`);
    },
    getSectionIndexFromDOMElement(element) {
      const root = getRoot("getSectionIndexFromDOMElement");
      if (element == null || !root.contains(element)) {
        return null;
      }
      let sectionContainer = null;
      if (element.classList.contains(pickersSectionListClasses.section)) {
        sectionContainer = element;
      } else if (element.classList.contains(pickersSectionListClasses.sectionContent)) {
        sectionContainer = element.parentElement;
      }
      if (sectionContainer == null) {
        return null;
      }
      return Number(sectionContainer.dataset.sectionindex);
    }
  }));
  const Root = slots?.root ?? PickersSectionListRoot;
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps?.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: handleRootRef,
      suppressContentEditableWarning: true
    },
    className: classes.root,
    ownerState
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root, _extends({}, rootProps, {
    children: rootProps.contentEditable ? elements.map(({
      content,
      before,
      after
    }) => `${before.children}${content.children}${after.children}`).join("") : /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, {
      children: elements.map((element, elementIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx(PickersSection, {
        slots,
        slotProps,
        element,
        classes
      }, elementIndex))
    })
  }));
});
const PickerTextFieldOwnerStateContext = /* @__PURE__ */ reactExports.createContext(null);
const usePickerTextFieldOwnerState = () => {
  const value = reactExports.useContext(PickerTextFieldOwnerStateContext);
  if (value == null) {
    throw new Error(["MUI X: The `usePickerTextFieldOwnerState` can only be called in components that are used inside a PickerTextField component"].join("\n"));
  }
  return value;
};
const _excluded$n = ["elements", "areAllSectionsEmpty", "defaultValue", "label", "value", "onChange", "id", "autoFocus", "endAdornment", "startAdornment", "renderSuffix", "slots", "slotProps", "contentEditable", "tabIndex", "onInput", "onPaste", "onKeyDown", "fullWidth", "name", "readOnly", "inputProps", "inputRef", "sectionListRef", "onFocus", "onBlur", "classes", "ownerState"];
const round = (value) => Math.round(value * 1e5) / 1e5;
const PickersInputBaseRoot = styled("div", {
  name: "MuiPickersInputBase",
  slot: "Root"
})(({
  theme
}) => _extends({}, theme.typography.body1, {
  color: (theme.vars || theme).palette.text.primary,
  cursor: "text",
  padding: 0,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  letterSpacing: `${round(0.15 / 16)}em`,
  [`&.${pickersInputBaseClasses.disabled}`]: {
    color: (theme.vars || theme).palette.action.disabled,
    cursor: "default"
  },
  variants: [{
    props: {
      isInputInFullWidth: true
    },
    style: {
      width: "100%"
    }
  }]
}));
const PickersInputBaseSectionsContainer = styled(PickersSectionListRoot, {
  name: "MuiPickersInputBase",
  slot: "SectionsContainer"
})(({
  theme
}) => ({
  padding: "4px 0 5px",
  fontFamily: theme.typography.fontFamily,
  fontSize: "inherit",
  lineHeight: "1.4375em",
  // 23px
  flexGrow: 1,
  outline: "none",
  display: "flex",
  flexWrap: "nowrap",
  overflow: "hidden",
  letterSpacing: "inherit",
  // Baseline behavior
  width: "182px",
  variants: [{
    props: {
      fieldDirection: "rtl"
    },
    style: {
      justifyContent: "end"
    }
  }, {
    props: {
      inputSize: "small"
    },
    style: {
      paddingTop: 1
    }
  }, {
    // While the field is empty and blurred, the format is shown as a placeholder.
    props: {
      isFieldFocused: false,
      isFieldValueEmpty: true
    },
    style: theme.vars ? {
      opacity: theme.vars.opacity.inputPlaceholder
    } : {
      opacity: theme.palette.mode === "light" ? 0.42 : 0.5
    }
  }, {
    // ...except when a non-shrunk label sits in the notch, where the format would overlap it.
    // A start adornment always shrinks the label, so it never triggers this case.
    props: {
      isFieldFocused: false,
      isFieldValueEmpty: true,
      hasStartAdornment: false,
      inputHasLabel: true,
      isLabelShrunk: false
    },
    style: {
      opacity: 0
    }
  }]
}));
const PickersInputBaseSection = styled(PickersSectionListSection, {
  name: "MuiPickersInputBase",
  slot: "Section"
})(({
  theme
}) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: "inherit",
  letterSpacing: "inherit",
  lineHeight: "1.4375em",
  // 23px
  display: "inline-block",
  whiteSpace: "nowrap"
}));
const PickersInputBaseSectionContent = styled(PickersSectionListSectionContent, {
  name: "MuiPickersInputBase",
  slot: "SectionContent",
  overridesResolver: (props, styles) => styles.content
  // FIXME: Inconsistent naming with slot
})(({
  theme
}) => ({
  fontFamily: theme.typography.fontFamily,
  lineHeight: "1.4375em",
  // 23px
  letterSpacing: "inherit",
  width: "fit-content",
  outline: "none",
  // Disables Chromium's focus-delegation onto contenteditable descendants
  // while the field is not focused. Gated to Chromium via a Blink-only
  // property, because the rule breaks Playwright's `fill()` on WebKit.
  "@supports (-webkit-app-region: drag)": {
    [`.${pickersInputBaseClasses.root}:not(:focus-within) &`]: {
      WebkitUserModify: "read-only",
      userSelect: "none"
    }
  }
}));
const PickersInputBaseSectionSeparator = styled(PickersSectionListSectionSeparator, {
  name: "MuiPickersInputBase",
  slot: "Separator"
})(() => ({
  whiteSpace: "pre",
  letterSpacing: "inherit"
}));
const PickersInputBaseInput = styled("input", {
  name: "MuiPickersInputBase",
  slot: "Input",
  overridesResolver: (props, styles) => styles.hiddenInput
  // FIXME: Inconsistent naming with slot
})(_extends({}, visuallyHidden));
const PickersInputBaseActiveBar = styled("div", {
  name: "MuiPickersInputBase",
  slot: "ActiveBar"
})(({
  theme,
  ownerState
}) => ({
  display: "none",
  position: "absolute",
  height: 2,
  bottom: 2,
  borderTopLeftRadius: 2,
  borderTopRightRadius: 2,
  transition: theme.transitions.create(["width", "left"], {
    duration: theme.transitions.duration.shortest
  }),
  backgroundColor: (theme.vars || theme).palette.primary.main,
  '[data-active-range-position="start"] &, [data-active-range-position="end"] &': {
    display: "block"
  },
  '[data-active-range-position="start"] &': {
    left: ownerState.sectionOffsets[0]
  },
  '[data-active-range-position="end"] &': {
    left: ownerState.sectionOffsets[1]
  }
}));
const useUtilityClasses$j = (classes, ownerState) => {
  const {
    isFieldFocused: isFieldFocused2,
    isFieldDisabled,
    isFieldReadOnly,
    hasFieldError,
    inputSize,
    isInputInFullWidth,
    inputColor,
    hasStartAdornment,
    hasEndAdornment
  } = ownerState;
  const slots = {
    root: ["root", isFieldFocused2 && !isFieldDisabled && "focused", isFieldDisabled && "disabled", isFieldReadOnly && "readOnly", hasFieldError && "error", isInputInFullWidth && "fullWidth", `color${capitalize(inputColor)}`, inputSize === "small" && "inputSizeSmall", hasStartAdornment && "adornedStart", hasEndAdornment && "adornedEnd"],
    notchedOutline: ["notchedOutline"],
    input: ["input"],
    sectionsContainer: ["sectionsContainer"],
    sectionContent: ["sectionContent"],
    sectionBefore: ["sectionBefore"],
    sectionAfter: ["sectionAfter"],
    activeBar: ["activeBar"]
  };
  return composeClasses(slots, getPickersInputBaseUtilityClass, classes);
};
function resolveSectionElementWidth(sectionElement, rootRef, index, dateRangePosition) {
  if (sectionElement.content["data-range-position"] !== void 0) {
    const activeSectionElements = rootRef.current?.querySelectorAll(`[data-sectionindex="${index}"] [data-range-position="${dateRangePosition}"]`);
    if (activeSectionElements) {
      return Array.from(activeSectionElements).reduce((currentActiveBarWidth, element) => {
        return currentActiveBarWidth + element.offsetWidth;
      }, 0);
    }
  }
  return 0;
}
function resolveSectionWidthAndOffsets(elements, rootRef) {
  let activeBarWidth = 0;
  const activeRangePosition = rootRef.current?.getAttribute("data-active-range-position");
  if (activeRangePosition === "end") {
    for (let i = elements.length - 1; i >= elements.length / 2; i -= 1) {
      activeBarWidth += resolveSectionElementWidth(elements[i], rootRef, i, "end");
    }
  } else {
    for (let i = 0; i < elements.length / 2; i += 1) {
      activeBarWidth += resolveSectionElementWidth(elements[i], rootRef, i, "start");
    }
  }
  return {
    activeBarWidth,
    sectionOffsets: [rootRef.current?.querySelector(`[data-sectionindex="0"]`)?.offsetLeft || 0, rootRef.current?.querySelector(`[data-sectionindex="${elements.length / 2}"]`)?.offsetLeft || 0]
  };
}
const PickersInputBase = /* @__PURE__ */ reactExports.forwardRef(function PickersInputBase2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersInputBase"
  });
  const {
    elements,
    areAllSectionsEmpty,
    value,
    onChange,
    id,
    endAdornment,
    startAdornment,
    renderSuffix,
    slots,
    slotProps,
    contentEditable,
    tabIndex,
    onInput,
    onPaste,
    onKeyDown,
    name,
    readOnly,
    inputProps,
    inputRef,
    sectionListRef,
    onFocus,
    onBlur,
    classes: classesProp,
    ownerState: ownerStateProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$n);
  const ownerStateContext = usePickerTextFieldOwnerState();
  const rootRef = reactExports.useRef(null);
  const activeBarRef = reactExports.useRef(null);
  const sectionOffsetsRef = reactExports.useRef([]);
  const handleRootRef = useForkRef(ref, rootRef);
  const handleInputRef = useForkRef(inputProps?.ref, inputRef);
  const muiFormControl = useFormControl();
  if (!muiFormControl) {
    throw new Error("MUI X: PickersInputBase should always be used inside a PickersTextField component");
  }
  const ownerState = ownerStateProp ?? ownerStateContext;
  const handleInputFocus = (event) => {
    muiFormControl.onFocus?.(event);
    onFocus?.(event);
  };
  const handleHiddenInputFocus = (event) => {
    handleInputFocus(event);
  };
  const handleKeyDown = (event) => {
    onKeyDown?.(event);
    if (event.key === "Enter" && !event.defaultMuiPrevented) {
      if (rootRef.current?.dataset.multiInput) {
        return;
      }
      const closestForm = rootRef.current?.closest("form");
      const submitTrigger = closestForm?.querySelector('[type="submit"]');
      if (!closestForm || !submitTrigger) {
        return;
      }
      event.preventDefault();
      closestForm.requestSubmit(submitTrigger);
    }
  };
  const handleInputBlur = (event) => {
    muiFormControl.onBlur?.(event);
    onBlur?.(event);
  };
  reactExports.useEffect(() => {
    if (muiFormControl) {
      muiFormControl.setAdornedStart(Boolean(startAdornment));
    }
  }, [muiFormControl, startAdornment]);
  reactExports.useEffect(() => {
    if (!muiFormControl) {
      return;
    }
    if (areAllSectionsEmpty) {
      muiFormControl.onEmpty();
    } else {
      muiFormControl.onFilled();
    }
  }, [muiFormControl, areAllSectionsEmpty]);
  const classes = useUtilityClasses$j(classesProp, ownerState);
  const InputRoot = slots?.root || PickersInputBaseRoot;
  const inputRootProps = useSlotProps({
    elementType: InputRoot,
    externalSlotProps: slotProps?.root,
    externalForwardedProps: other,
    additionalProps: {
      "aria-invalid": muiFormControl.error,
      ref: handleRootRef
    },
    className: classes.root,
    ownerState
  });
  const InputSectionsContainer = slots?.input || PickersInputBaseSectionsContainer;
  const isSingleInputRange = elements.some((element) => element.content["data-range-position"] !== void 0);
  reactExports.useEffect(() => {
    if (!isSingleInputRange || !ownerState.isPickerOpen) {
      return;
    }
    const {
      activeBarWidth,
      sectionOffsets
    } = resolveSectionWidthAndOffsets(elements, rootRef);
    sectionOffsetsRef.current = [sectionOffsets[0], sectionOffsets[1]];
    if (activeBarRef.current) {
      activeBarRef.current.style.width = `${activeBarWidth}px`;
    }
  }, [elements, isSingleInputRange, ownerState.isPickerOpen]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(InputRoot, _extends({}, inputRootProps, {
    children: [startAdornment, /* @__PURE__ */ jsxRuntimeExports.jsx(PickersSectionList, {
      sectionListRef,
      elements,
      contentEditable,
      tabIndex,
      className: classes.sectionsContainer,
      onFocus: handleInputFocus,
      onBlur: handleInputBlur,
      onInput,
      onPaste,
      onKeyDown: handleKeyDown,
      slots: {
        root: InputSectionsContainer,
        section: PickersInputBaseSection,
        sectionContent: PickersInputBaseSectionContent,
        sectionSeparator: PickersInputBaseSectionSeparator
      },
      slotProps: {
        root: _extends({}, slotProps?.input, {
          ownerState
        }),
        sectionContent: {
          className: pickersInputBaseClasses.sectionContent
        },
        sectionSeparator: ({
          separatorPosition
        }) => ({
          className: separatorPosition === "before" ? pickersInputBaseClasses.sectionBefore : pickersInputBaseClasses.sectionAfter
        })
      }
    }), endAdornment, renderSuffix ? renderSuffix(_extends({}, muiFormControl)) : null, /* @__PURE__ */ jsxRuntimeExports.jsx(PickersInputBaseInput, _extends({
      name,
      className: classes.input,
      value,
      onChange,
      id,
      "aria-hidden": "true",
      tabIndex: -1,
      readOnly,
      required: muiFormControl.required,
      disabled: muiFormControl.disabled,
      onFocus: handleHiddenInputFocus
    }, inputProps, {
      ref: handleInputRef
    })), isSingleInputRange && /* @__PURE__ */ jsxRuntimeExports.jsx(PickersInputBaseActiveBar, {
      className: classes.activeBar,
      ref: activeBarRef,
      ownerState: {
        sectionOffsets: sectionOffsetsRef.current
      }
    })]
  }));
});
const _excluded$m = ["children", "className", "label", "notched", "shrink"];
const OutlineRoot = styled("fieldset", {
  name: "MuiPickersOutlinedInput",
  slot: "NotchedOutline"
})(({
  theme
}) => {
  const borderColor = theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    textAlign: "left",
    position: "absolute",
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: "0 8px",
    pointerEvents: "none",
    borderRadius: "inherit",
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
    minWidth: "0%",
    borderColor: theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor
  };
});
const OutlineLabel = styled("span", {
  slot: "internal",
  shouldForwardProp: void 0
})(({
  theme
}) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: "inherit"
}));
const OutlineLegend = styled("legend", {
  slot: "internal",
  shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== "notched"
})(({
  theme
}) => ({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden",
  // Fix Horizontal scroll when label too long
  variants: [{
    props: {
      inputHasLabel: false
    },
    style: {
      padding: 0,
      lineHeight: "11px",
      // sync with `height` in `legend` styles
      transition: theme.transitions.create("width", {
        duration: 150,
        easing: theme.transitions.easing.easeOut
      })
    }
  }, {
    props: {
      inputHasLabel: true
    },
    style: {
      display: "block",
      // Fix conflict with normalize.css and sanitize.css
      padding: 0,
      height: 11,
      // sync with `lineHeight` in `legend` styles
      fontSize: "0.75em",
      visibility: "hidden",
      maxWidth: 0.01,
      transition: theme.transitions.create("max-width", {
        duration: 50,
        easing: theme.transitions.easing.easeOut
      }),
      whiteSpace: "nowrap",
      "& > span": {
        paddingLeft: 5,
        paddingRight: 5,
        display: "inline-block",
        opacity: 0,
        visibility: "visible"
      }
    }
  }, {
    props: {
      inputHasLabel: true,
      notched: true
    },
    style: {
      maxWidth: "100%",
      transition: theme.transitions.create("max-width", {
        duration: 100,
        easing: theme.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
}));
function Outline(props) {
  const {
    className,
    label,
    notched
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$m);
  const ownerState = usePickerTextFieldOwnerState();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(OutlineRoot, _extends({
    "aria-hidden": true,
    className
  }, other, {
    ownerState,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(OutlineLegend, {
      ownerState,
      notched,
      children: label ? /* @__PURE__ */ jsxRuntimeExports.jsx(OutlineLabel, {
        children: label
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        /* @__PURE__ */ jsxRuntimeExports.jsx(OutlineLabel, {
          className: "notranslate",
          children: "​"
        })
      )
    })
  }));
}
const _excluded$l = ["label", "autoFocus", "ownerState", "classes", "notched"];
const PickersOutlinedInputRoot = styled(PickersInputBaseRoot, {
  name: "MuiPickersOutlinedInput",
  slot: "Root"
})(({
  theme
}) => {
  const borderColor = theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    padding: "0 14px",
    borderRadius: (theme.vars || theme).shape.borderRadius,
    [`&:hover .${pickersOutlinedInputClasses.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${pickersOutlinedInputClasses.notchedOutline}`]: {
        borderColor: theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor
      }
    },
    [`&.${pickersOutlinedInputClasses.focused} .${pickersOutlinedInputClasses.notchedOutline}`]: {
      borderStyle: "solid",
      borderWidth: 2
    },
    [`&.${pickersOutlinedInputClasses.error} .${pickersOutlinedInputClasses.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette.error.main
    },
    [`&.${pickersOutlinedInputClasses.disabled}`]: {
      [`& .${pickersOutlinedInputClasses.notchedOutline}`]: {
        borderColor: (theme.vars || theme).palette.action.disabled
      }
    },
    variants: Object.keys((theme.vars ?? theme).palette).filter((key) => (theme.vars ?? theme).palette[key]?.main ?? false).map((color) => ({
      props: {
        inputColor: color
      },
      style: {
        [`&.${pickersOutlinedInputClasses.focused}:not(.${pickersOutlinedInputClasses.error}) .${pickersOutlinedInputClasses.notchedOutline}`]: {
          // @ts-ignore
          borderColor: (theme.vars || theme).palette[color].main
        }
      }
    }))
  };
});
const PickersOutlinedInputSectionsContainer = styled(PickersInputBaseSectionsContainer, {
  name: "MuiPickersOutlinedInput",
  slot: "SectionsContainer"
})({
  padding: "16.5px 0",
  variants: [{
    props: {
      inputSize: "small"
    },
    style: {
      padding: "8.5px 0"
    }
  }]
});
const useUtilityClasses$i = (classes) => {
  const slots = {
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getPickersOutlinedInputUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
const PickersOutlinedInput = /* @__PURE__ */ reactExports.forwardRef(function PickersOutlinedInput2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersOutlinedInput"
  });
  const {
    label,
    classes: classesProp,
    notched
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$l);
  const muiFormControl = useFormControl();
  const classes = useUtilityClasses$i(classesProp);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PickersInputBase, _extends({
    slots: {
      root: PickersOutlinedInputRoot,
      input: PickersOutlinedInputSectionsContainer
    },
    renderSuffix: (state) => {
      const isNotched = typeof notched !== "undefined" ? notched : Boolean(state.adornedStart || state.focused || state.filled);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Outline, {
        shrink: isNotched,
        notched: isNotched,
        className: classes.notchedOutline,
        label: label != null && label !== "" && muiFormControl?.required ? /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
          children: [label, " ", "*"]
        }) : label
      });
    }
  }, other, {
    label,
    classes,
    ref
  }));
});
PickersOutlinedInput.muiName = "Input";
const _excluded$k = ["label", "autoFocus", "disableUnderline", "hiddenLabel", "classes"];
const PickersFilledInputRoot = styled(PickersInputBaseRoot, {
  name: "MuiPickersFilledInput",
  slot: "Root",
  shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== "disableUnderline"
})(({
  theme
}) => {
  const light = theme.palette.mode === "light";
  const bottomLineColor = light ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  const backgroundColor = light ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)";
  const hoverBackground = light ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)";
  const disabledBackground = light ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return {
    backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor,
    borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
    borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
    transition: theme.transitions.create("background-color", {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.hoverBg : hoverBackground,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor
      }
    },
    [`&.${pickersFilledInputClasses.focused}`]: {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor
    },
    [`&.${pickersFilledInputClasses.disabled}`]: {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.disabledBg : disabledBackground
    },
    variants: [...Object.keys((theme.vars ?? theme).palette).filter((key) => (theme.vars ?? theme).palette[key].main).map((color) => ({
      props: {
        inputColor: color,
        disableUnderline: false
      },
      style: {
        "&::after": {
          // @ts-ignore
          borderBottom: `2px solid ${(theme.vars || theme).palette[color]?.main}`
        }
      }
    })), {
      props: {
        disableUnderline: false
      },
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${pickersFilledInputClasses.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${pickersFilledInputClasses.error}`]: {
          "&:before, &:after": {
            borderBottomColor: (theme.vars || theme).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})` : bottomLineColor}`,
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: theme.transitions.create("border-bottom-color", {
            duration: theme.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${pickersFilledInputClasses.disabled}, .${pickersFilledInputClasses.error}):before`]: {
          borderBottom: `1px solid ${(theme.vars || theme).palette.text.primary}`
        },
        [`&.${pickersFilledInputClasses.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, {
      props: {
        hasStartAdornment: true
      },
      style: {
        paddingLeft: 12
      }
    }, {
      props: {
        hasEndAdornment: true
      },
      style: {
        paddingRight: 12
      }
    }]
  };
});
const PickersFilledSectionsContainer = styled(PickersInputBaseSectionsContainer, {
  name: "MuiPickersFilledInput",
  slot: "sectionsContainer",
  shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== "hiddenLabel"
})({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12,
  variants: [{
    props: {
      inputSize: "small"
    },
    style: {
      paddingTop: 21,
      paddingBottom: 4
    }
  }, {
    props: {
      hasStartAdornment: true
    },
    style: {
      paddingLeft: 0
    }
  }, {
    props: {
      hasEndAdornment: true
    },
    style: {
      paddingRight: 0
    }
  }, {
    props: {
      hiddenLabel: true
    },
    style: {
      paddingTop: 16,
      paddingBottom: 17
    }
  }, {
    props: {
      hiddenLabel: true,
      inputSize: "small"
    },
    style: {
      paddingTop: 8,
      paddingBottom: 9
    }
  }]
});
const useUtilityClasses$h = (classes, ownerState) => {
  const {
    inputHasUnderline
  } = ownerState;
  const slots = {
    root: ["root", inputHasUnderline && "underline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getPickersFilledInputUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
const PickersFilledInput = /* @__PURE__ */ reactExports.forwardRef(function PickersFilledInput2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersFilledInput"
  });
  const {
    label,
    disableUnderline = false,
    hiddenLabel = false,
    classes: classesProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$k);
  const pickerTextFieldOwnerState = usePickerTextFieldOwnerState();
  const ownerState = _extends({}, pickerTextFieldOwnerState, {
    inputHasUnderline: !disableUnderline
  });
  const classes = useUtilityClasses$h(classesProp, ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PickersInputBase, _extends({
    slots: {
      root: PickersFilledInputRoot,
      input: PickersFilledSectionsContainer
    },
    slotProps: {
      root: {
        disableUnderline
      },
      input: {
        hiddenLabel
      }
    }
  }, other, {
    label,
    classes,
    ref,
    ownerState
  }));
});
PickersFilledInput.muiName = "Input";
function getPickersInputUtilityClass(slot) {
  return generateUtilityClass("MuiPickersFilledInput", slot);
}
const pickersInputClasses = _extends({}, pickersInputBaseClasses, generateUtilityClasses("MuiPickersInput", ["root", "underline", "input"]));
const _excluded$j = ["label", "autoFocus", "disableUnderline", "ownerState", "classes"];
const PickersInputRoot = styled(PickersInputBaseRoot, {
  name: "MuiPickersInput",
  slot: "Root",
  shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== "disableUnderline"
})(({
  theme
}) => {
  const light = theme.palette.mode === "light";
  let bottomLineColor = light ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  if (theme.vars) {
    bottomLineColor = `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})`;
  }
  return {
    "label + &": {
      marginTop: 16
    },
    variants: [...Object.keys((theme.vars ?? theme).palette).filter((key) => (theme.vars ?? theme).palette[key].main).map((color) => ({
      props: {
        inputColor: color,
        inputHasUnderline: true
      },
      style: {
        "&::after": {
          // @ts-ignore
          borderBottom: `2px solid ${(theme.vars || theme).palette[color].main}`
        }
      }
    })), {
      props: {
        inputHasUnderline: true
      },
      style: {
        "&::after": {
          background: "red",
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${pickersInputClasses.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${pickersInputClasses.error}`]: {
          "&:before, &:after": {
            borderBottomColor: (theme.vars || theme).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${bottomLineColor}`,
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: theme.transitions.create("border-bottom-color", {
            duration: theme.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${pickersInputClasses.disabled}, .${pickersInputClasses.error}):before`]: {
          borderBottom: `2px solid ${(theme.vars || theme).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${bottomLineColor}`
          }
        },
        [`&.${pickersInputClasses.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }]
  };
});
const useUtilityClasses$g = (classes, ownerState) => {
  const {
    inputHasUnderline
  } = ownerState;
  const slots = {
    root: ["root", !inputHasUnderline && "underline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getPickersInputUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
const PickersInput = /* @__PURE__ */ reactExports.forwardRef(function PickersInput2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersInput"
  });
  const {
    label,
    disableUnderline = false,
    classes: classesProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$j);
  const pickerTextFieldOwnerState = usePickerTextFieldOwnerState();
  const ownerState = _extends({}, pickerTextFieldOwnerState, {
    inputHasUnderline: !disableUnderline
  });
  const classes = useUtilityClasses$g(classesProp, ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PickersInputBase, _extends({
    slots: {
      root: PickersInputRoot
    },
    slotProps: {
      root: {
        disableUnderline
      }
    }
  }, other, {
    ownerState,
    label,
    classes,
    ref
  }));
});
PickersInput.muiName = "Input";
const _excluded$i = ["onFocus", "onBlur", "className", "classes", "color", "disabled", "error", "variant", "required", "hiddenLabel", "InputProps", "inputProps", "inputRef", "sectionListRef", "elements", "areAllSectionsEmpty", "onClick", "onMouseDown", "onKeyDown", "onKeyUp", "onPaste", "onInput", "endAdornment", "startAdornment", "tabIndex", "contentEditable", "focused", "value", "onChange", "fullWidth", "id", "name", "helperText", "FormHelperTextProps", "label", "InputLabelProps", "data-active-range-position"];
const VARIANT_COMPONENT = {
  standard: PickersInput,
  filled: PickersFilledInput,
  outlined: PickersOutlinedInput
};
const PickersTextFieldRoot = styled(FormControl, {
  name: "MuiPickersTextField",
  slot: "Root"
})({
  maxWidth: "100%"
});
const useUtilityClasses$f = (classes, ownerState) => {
  const {
    isFieldFocused: isFieldFocused2,
    isFieldDisabled,
    isFieldRequired
  } = ownerState;
  const slots = {
    root: ["root", isFieldFocused2 && !isFieldDisabled && "focused", isFieldDisabled && "disabled", isFieldRequired && "required"]
  };
  return composeClasses(slots, getPickersTextFieldUtilityClass, classes);
};
const PickersTextField = /* @__PURE__ */ reactExports.forwardRef(function PickersTextField2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersTextField"
  });
  const {
    // Props used by FormControl
    onFocus,
    onBlur,
    className,
    classes: classesProp,
    color = "primary",
    disabled = false,
    error = false,
    variant = "outlined",
    required = false,
    hiddenLabel = false,
    // Props used by PickersInput
    InputProps,
    inputProps,
    inputRef,
    sectionListRef,
    elements,
    areAllSectionsEmpty,
    onClick,
    onMouseDown,
    onKeyDown,
    onKeyUp,
    onPaste,
    onInput,
    endAdornment,
    startAdornment,
    tabIndex,
    contentEditable,
    focused,
    value,
    onChange,
    fullWidth,
    id: idProp,
    name,
    // Props used by FormHelperText
    helperText,
    FormHelperTextProps,
    // Props used by InputLabel
    label,
    InputLabelProps,
    // @ts-ignore
    "data-active-range-position": dataActiveRangePosition
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$i);
  const rootRef = reactExports.useRef(null);
  const handleRootRef = useForkRef(ref, rootRef);
  const id = useId(idProp);
  const helperTextId = helperText && id ? `${id}-helper-text` : void 0;
  const inputLabelId = label && id ? `${id}-label` : void 0;
  const fieldOwnerState = useFieldOwnerState({
    disabled: props.disabled,
    required: props.required,
    readOnly: InputProps?.readOnly
  });
  const ownerState = reactExports.useMemo(() => _extends({}, fieldOwnerState, {
    isFieldValueEmpty: areAllSectionsEmpty,
    isFieldFocused: focused ?? false,
    hasFieldError: error ?? false,
    inputSize: props.size ?? "medium",
    inputColor: color ?? "primary",
    isInputInFullWidth: fullWidth ?? false,
    hasStartAdornment: Boolean(startAdornment ?? InputProps?.startAdornment),
    hasEndAdornment: Boolean(endAdornment ?? InputProps?.endAdornment),
    inputHasLabel: !!label,
    isLabelShrunk: Boolean(InputLabelProps?.shrink)
  }), [fieldOwnerState, areAllSectionsEmpty, focused, error, props.size, color, fullWidth, startAdornment, endAdornment, InputProps?.startAdornment, InputProps?.endAdornment, label, InputLabelProps?.shrink]);
  const classes = useUtilityClasses$f(classesProp, ownerState);
  const PickersInputComponent = VARIANT_COMPONENT[variant];
  const inputAdditionalProps = {};
  if (variant === "outlined") {
    if (InputLabelProps && typeof InputLabelProps.shrink !== "undefined") {
      inputAdditionalProps.notched = InputLabelProps.shrink;
    }
    inputAdditionalProps.label = label;
  } else if (variant === "filled") {
    inputAdditionalProps.hiddenLabel = hiddenLabel;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PickerTextFieldOwnerStateContext.Provider, {
    value: ownerState,
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PickersTextFieldRoot, _extends({
      className: clsx(classes.root, className),
      ref: handleRootRef,
      focused,
      disabled,
      variant,
      error,
      color,
      fullWidth,
      required,
      ownerState
    }, other, {
      children: [label != null && label !== "" && /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, _extends({
        htmlFor: id,
        id: inputLabelId
      }, InputLabelProps, {
        children: label
      })), /* @__PURE__ */ jsxRuntimeExports.jsx(PickersInputComponent, _extends({
        elements,
        areAllSectionsEmpty,
        onClick,
        onMouseDown,
        onKeyDown,
        onKeyUp,
        onInput,
        onPaste,
        onFocus,
        onBlur,
        endAdornment,
        startAdornment,
        tabIndex,
        contentEditable,
        value,
        onChange,
        id,
        fullWidth,
        inputProps,
        inputRef,
        sectionListRef,
        label,
        name,
        role: "group",
        "aria-labelledby": inputLabelId,
        "aria-describedby": helperTextId,
        "aria-live": helperTextId ? "polite" : void 0,
        "data-active-range-position": dataActiveRangePosition
      }, inputAdditionalProps, InputProps)), helperText && /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, _extends({
        id: helperTextId
      }, FormHelperTextProps, {
        children: helperText
      }))]
    }))
  });
});
const _excluded$h = ["enableAccessibleFieldDOMStructure"], _excluded2$5 = ["InputProps", "readOnly", "onClear", "clearable", "clearButtonPosition", "openPickerButtonPosition", "openPickerAriaLabel"], _excluded3 = ["onPaste", "onKeyDown", "inputMode", "readOnly", "InputProps", "inputProps", "inputRef", "onClear", "clearable", "clearButtonPosition", "openPickerButtonPosition", "openPickerAriaLabel"], _excluded4 = ["ownerState"], _excluded5 = ["ownerState"], _excluded6 = ["ownerState"], _excluded7 = ["ownerState"], _excluded8 = ["InputProps", "inputProps"];
const noop = () => {
};
const cleanFieldResponse = (_ref) => {
  let {
    enableAccessibleFieldDOMStructure
  } = _ref, fieldResponse = _objectWithoutPropertiesLoose(_ref, _excluded$h);
  if (enableAccessibleFieldDOMStructure) {
    const {
      InputProps: InputProps2,
      readOnly: readOnly2,
      onClear: onClear2,
      clearable: clearable2,
      clearButtonPosition: clearButtonPosition2,
      openPickerButtonPosition: openPickerButtonPosition2,
      openPickerAriaLabel: openPickerAriaLabel2
    } = fieldResponse, other2 = _objectWithoutPropertiesLoose(fieldResponse, _excluded2$5);
    const mergedInputProps2 = major >= 6 && other2?.slotProps?.input ? mergeSlotProps(other2?.slotProps?.input, InputProps2) : noop;
    return {
      clearable: clearable2,
      onClear: onClear2,
      clearButtonPosition: clearButtonPosition2,
      openPickerButtonPosition: openPickerButtonPosition2,
      openPickerAriaLabel: openPickerAriaLabel2,
      textFieldProps: _extends({}, other2, major >= 6 && other2?.slotProps?.input ? {
        slotProps: _extends({}, other2?.slotProps, {
          input: (ownerState) => _extends({}, resolveComponentProps(mergedInputProps2, ownerState), {
            readOnly: readOnly2
          })
        })
      } : {
        InputProps: _extends({}, InputProps2 ?? {}, {
          readOnly: readOnly2
        })
      })
    };
  }
  const {
    onPaste,
    onKeyDown,
    inputMode,
    readOnly,
    InputProps,
    inputProps,
    inputRef,
    onClear,
    clearable,
    clearButtonPosition,
    openPickerButtonPosition,
    openPickerAriaLabel
  } = fieldResponse, other = _objectWithoutPropertiesLoose(fieldResponse, _excluded3);
  const mergedInputProps = major >= 6 && other?.slotProps?.input ? mergeSlotProps(other?.slotProps?.input, InputProps) : noop;
  const mergedHtmlInputProps = major >= 6 && other?.slotProps?.htmlInput ? mergeSlotProps(other?.slotProps?.htmlInput, inputProps) : noop;
  return {
    clearable,
    onClear,
    clearButtonPosition,
    openPickerButtonPosition,
    openPickerAriaLabel,
    textFieldProps: _extends({}, other, major >= 6 && (other?.slotProps?.input || other?.slotProps?.htmlInput) ? {
      slotProps: _extends({}, other?.slotProps, {
        input: (ownerState) => _extends({}, resolveComponentProps(mergedInputProps, ownerState), {
          readOnly
        }),
        htmlInput: (ownerState) => _extends({}, resolveComponentProps(mergedHtmlInputProps, ownerState), {
          inputMode,
          onPaste,
          onKeyDown,
          ref: inputRef
        })
      })
    } : {
      InputProps: _extends({}, InputProps ?? {}, {
        readOnly
      }),
      inputProps: _extends({}, inputProps ?? {}, {
        inputMode,
        onPaste,
        onKeyDown,
        ref: inputRef
      })
    })
  };
};
const PickerFieldUIContext = /* @__PURE__ */ reactExports.createContext({
  slots: {},
  slotProps: {},
  inputRef: void 0
});
function PickerFieldUI(props) {
  const {
    fieldResponse,
    defaultOpenPickerIcon
  } = props;
  const translations = usePickerTranslations();
  const pickerContext = useNullablePickerContext();
  const pickerFieldUIContext = reactExports.useContext(PickerFieldUIContext);
  const {
    textFieldProps,
    onClear,
    clearable,
    openPickerAriaLabel,
    clearButtonPosition: clearButtonPositionProp = "end",
    openPickerButtonPosition: openPickerButtonPositionProp = "end"
  } = cleanFieldResponse(fieldResponse);
  const ownerState = useFieldOwnerState(textFieldProps);
  const handleClickOpeningButton = useEventCallback((event) => {
    event.preventDefault();
    pickerContext?.setOpen((prev) => !prev);
  });
  const triggerStatus = pickerContext ? pickerContext.triggerStatus : "hidden";
  const clearButtonPosition = clearable ? clearButtonPositionProp : null;
  const openPickerButtonPosition = triggerStatus !== "hidden" ? openPickerButtonPositionProp : null;
  const TextField$1 = pickerFieldUIContext.slots.textField ?? (fieldResponse.enableAccessibleFieldDOMStructure === false ? TextField : PickersTextField);
  const InputAdornment$1 = pickerFieldUIContext.slots.inputAdornment ?? InputAdornment;
  const _useSlotProps = useSlotProps({
    elementType: InputAdornment$1,
    externalSlotProps: pickerFieldUIContext.slotProps.inputAdornment,
    additionalProps: {
      position: "start"
    },
    ownerState: _extends({}, ownerState, {
      position: "start"
    })
  }), startInputAdornmentProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded4);
  const _useSlotProps2 = useSlotProps({
    elementType: InputAdornment$1,
    externalSlotProps: pickerFieldUIContext.slotProps.inputAdornment,
    additionalProps: {
      position: "end"
    },
    ownerState: _extends({}, ownerState, {
      position: "end"
    })
  }), endInputAdornmentProps = _objectWithoutPropertiesLoose(_useSlotProps2, _excluded5);
  const OpenPickerButton = pickerFieldUIContext.slots.openPickerButton ?? IconButton;
  const _useSlotProps3 = useSlotProps({
    elementType: OpenPickerButton,
    externalSlotProps: pickerFieldUIContext.slotProps.openPickerButton,
    additionalProps: {
      disabled: triggerStatus === "disabled",
      onClick: handleClickOpeningButton,
      "aria-label": openPickerAriaLabel,
      edge: (
        // open button is always rendered at the edge
        textFieldProps.variant !== "standard" ? openPickerButtonPosition : false
      )
    },
    ownerState
  }), openPickerButtonProps = _objectWithoutPropertiesLoose(_useSlotProps3, _excluded6);
  const OpenPickerIcon = pickerFieldUIContext.slots.openPickerIcon ?? defaultOpenPickerIcon;
  const openPickerIconProps = useSlotProps({
    elementType: OpenPickerIcon,
    externalSlotProps: pickerFieldUIContext.slotProps.openPickerIcon,
    ownerState
  });
  const ClearButton = pickerFieldUIContext.slots.clearButton ?? IconButton;
  const _useSlotProps4 = useSlotProps({
    elementType: ClearButton,
    externalSlotProps: pickerFieldUIContext.slotProps.clearButton,
    className: "clearButton",
    additionalProps: {
      title: translations.fieldClearLabel,
      tabIndex: -1,
      onClick: onClear,
      disabled: fieldResponse.disabled || fieldResponse.readOnly,
      edge: (
        // clear button can only be at the edge if it's position differs from the open button
        textFieldProps.variant !== "standard" && clearButtonPosition !== openPickerButtonPosition ? clearButtonPosition : false
      )
    },
    ownerState
  }), clearButtonProps = _objectWithoutPropertiesLoose(_useSlotProps4, _excluded7);
  const ClearIcon$1 = pickerFieldUIContext.slots.clearIcon ?? ClearIcon;
  const clearIconProps = useSlotProps({
    elementType: ClearIcon$1,
    externalSlotProps: pickerFieldUIContext.slotProps.clearIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState
  });
  textFieldProps.ref = useForkRef(textFieldProps.ref, pickerContext?.rootRef);
  const additionalTextFieldInputProps = {};
  const textFieldInputProps = resolveComponentProps((major >= 6 && textFieldProps?.slotProps?.input) ?? textFieldProps.InputProps, ownerState);
  if (pickerContext) {
    additionalTextFieldInputProps.ref = pickerContext.triggerRef;
  }
  if (!textFieldInputProps?.startAdornment && (clearButtonPosition === "start" || openPickerButtonPosition === "start")) {
    additionalTextFieldInputProps.startAdornment = /* @__PURE__ */ jsxRuntimeExports.jsxs(InputAdornment$1, _extends({}, startInputAdornmentProps, {
      children: [openPickerButtonPosition === "start" && /* @__PURE__ */ jsxRuntimeExports.jsx(OpenPickerButton, _extends({}, openPickerButtonProps, {
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(OpenPickerIcon, _extends({}, openPickerIconProps))
      })), clearButtonPosition === "start" && /* @__PURE__ */ jsxRuntimeExports.jsx(ClearButton, _extends({}, clearButtonProps, {
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ClearIcon$1, _extends({}, clearIconProps))
      }))]
    }));
  }
  if (!textFieldInputProps?.endAdornment && (clearButtonPosition === "end" || openPickerButtonPosition === "end")) {
    additionalTextFieldInputProps.endAdornment = /* @__PURE__ */ jsxRuntimeExports.jsxs(InputAdornment$1, _extends({}, endInputAdornmentProps, {
      children: [clearButtonPosition === "end" && /* @__PURE__ */ jsxRuntimeExports.jsx(ClearButton, _extends({}, clearButtonProps, {
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ClearIcon$1, _extends({}, clearIconProps))
      })), openPickerButtonPosition === "end" && /* @__PURE__ */ jsxRuntimeExports.jsx(OpenPickerButton, _extends({}, openPickerButtonProps, {
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(OpenPickerIcon, _extends({}, openPickerIconProps))
      }))]
    }));
  }
  if (!additionalTextFieldInputProps?.endAdornment && !additionalTextFieldInputProps?.startAdornment && pickerFieldUIContext.slots.inputAdornment) {
    additionalTextFieldInputProps.endAdornment = /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment$1, _extends({}, endInputAdornmentProps));
  }
  if (clearButtonPosition != null) {
    textFieldProps.sx = [{
      "& .clearButton": {
        opacity: 1
      },
      "@media (pointer: fine)": {
        "& .clearButton": {
          opacity: 0
        },
        "&:hover, &:focus-within": {
          ".clearButton": {
            opacity: 1
          }
        }
      }
    }, ...Array.isArray(textFieldProps.sx) ? textFieldProps.sx : [textFieldProps.sx]];
  }
  const resolvedTextFieldInputProps = major >= 6 && textFieldProps?.slotProps?.input ? resolveComponentProps(mergeSlotProps(textFieldInputProps, additionalTextFieldInputProps), ownerState) : _extends({}, textFieldInputProps, additionalTextFieldInputProps);
  textFieldProps.inputProps = major >= 6 && textFieldProps?.slotProps?.htmlInput ? resolveComponentProps(textFieldProps.slotProps.htmlInput, ownerState) : textFieldProps.inputProps;
  delete textFieldProps?.slotProps?.input;
  if (fieldResponse.enableAccessibleFieldDOMStructure) {
    delete textFieldProps?.slotProps;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TextField$1, _extends({}, textFieldProps, {
    InputProps: resolvedTextFieldInputProps
  }));
}
function mergeSlotProps(slotPropsA, slotPropsB) {
  if (!slotPropsA) {
    return slotPropsB;
  }
  if (!slotPropsB) {
    return slotPropsA;
  }
  return (ownerState) => {
    return _extends({}, resolveComponentProps(slotPropsB, ownerState), resolveComponentProps(slotPropsA, ownerState));
  };
}
function useFieldTextFieldProps(parameters) {
  const {
    ref,
    externalForwardedProps,
    slotProps
  } = parameters;
  const pickerFieldUIContext = reactExports.useContext(PickerFieldUIContext);
  const pickerContext = useNullablePickerContext();
  const ownerState = useFieldOwnerState(externalForwardedProps);
  const {
    InputProps,
    inputProps
  } = externalForwardedProps, otherExternalForwardedProps = _objectWithoutPropertiesLoose(externalForwardedProps, _excluded8);
  const textFieldProps = useSlotProps({
    elementType: PickersTextField,
    externalSlotProps: mergeSlotProps(pickerFieldUIContext.slotProps.textField, slotProps?.textField),
    externalForwardedProps: otherExternalForwardedProps,
    additionalProps: {
      ref,
      sx: pickerContext?.rootSx,
      label: pickerContext?.label,
      name: pickerContext?.name,
      className: pickerContext?.rootClassName,
      inputRef: pickerFieldUIContext.inputRef
    },
    ownerState
  });
  textFieldProps.inputProps = _extends({}, inputProps, textFieldProps.inputProps);
  textFieldProps.InputProps = _extends({}, InputProps, textFieldProps.InputProps);
  return textFieldProps;
}
function PickerFieldUIContextProvider(props) {
  const {
    slots = {},
    slotProps = {},
    inputRef,
    children
  } = props;
  const contextValue = reactExports.useMemo(() => ({
    inputRef,
    slots: {
      openPickerButton: slots.openPickerButton,
      openPickerIcon: slots.openPickerIcon,
      textField: slots.textField,
      inputAdornment: slots.inputAdornment,
      clearIcon: slots.clearIcon,
      clearButton: slots.clearButton
    },
    slotProps: {
      openPickerButton: slotProps.openPickerButton,
      openPickerIcon: slotProps.openPickerIcon,
      textField: slotProps.textField,
      inputAdornment: slotProps.inputAdornment,
      clearIcon: slotProps.clearIcon,
      clearButton: slotProps.clearButton
    }
  }), [inputRef, slots.openPickerButton, slots.openPickerIcon, slots.textField, slots.inputAdornment, slots.clearIcon, slots.clearButton, slotProps.openPickerButton, slotProps.openPickerIcon, slotProps.textField, slotProps.inputAdornment, slotProps.clearIcon, slotProps.clearButton]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PickerFieldUIContext.Provider, {
    value: contextValue,
    children
  });
}
const useIsDateDisabled = ({
  shouldDisableDate,
  shouldDisableMonth,
  shouldDisableYear,
  minDate,
  maxDate,
  disableFuture,
  disablePast,
  timezone
}) => {
  const adapter = usePickerAdapter();
  return reactExports.useCallback((day) => validateDate({
    adapter,
    value: day,
    timezone,
    props: {
      shouldDisableDate,
      shouldDisableMonth,
      shouldDisableYear,
      minDate,
      maxDate,
      disableFuture,
      disablePast
    }
  }) !== null, [adapter, shouldDisableDate, shouldDisableMonth, shouldDisableYear, minDate, maxDate, disableFuture, disablePast, timezone]);
};
const createCalendarStateReducer = (reduceAnimations, adapter) => (state, action) => {
  switch (action.type) {
    case "setVisibleDate":
      return _extends({}, state, {
        slideDirection: action.direction,
        currentMonth: action.month,
        isMonthSwitchingAnimating: !adapter.isSameMonth(action.month, state.currentMonth) && !reduceAnimations && !action.skipAnimation,
        focusedDay: action.focusedDay
      });
    case "changeMonthTimezone": {
      const newTimezone = action.newTimezone;
      if (adapter.getTimezone(state.currentMonth) === newTimezone) {
        return state;
      }
      let newCurrentMonth = adapter.setTimezone(state.currentMonth, newTimezone);
      if (adapter.getMonth(newCurrentMonth) !== adapter.getMonth(state.currentMonth)) {
        newCurrentMonth = adapter.setMonth(newCurrentMonth, adapter.getMonth(state.currentMonth));
      }
      return _extends({}, state, {
        currentMonth: newCurrentMonth
      });
    }
    case "finishMonthSwitchingAnimation":
      return _extends({}, state, {
        isMonthSwitchingAnimating: false
      });
    default:
      throw new Error("missing support");
  }
};
const useCalendarState = (params) => {
  const {
    value,
    referenceDate: referenceDateProp,
    disableFuture,
    disablePast,
    maxDate,
    minDate,
    onMonthChange,
    onYearChange,
    reduceAnimations,
    shouldDisableDate,
    timezone,
    getCurrentMonthFromVisibleDate
  } = params;
  const adapter = usePickerAdapter();
  const reducerFn = reactExports.useRef(createCalendarStateReducer(Boolean(reduceAnimations), adapter)).current;
  const referenceDate = reactExports.useMemo(
    () => {
      return singleItemValueManager.getInitialReferenceValue({
        value,
        adapter,
        timezone,
        props: params,
        referenceDate: referenceDateProp,
        granularity: SECTION_TYPE_GRANULARITY.day
      });
    },
    // We want the `referenceDate` to update on prop and `timezone` change (https://github.com/mui/mui-x/issues/10804)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [referenceDateProp, timezone]
  );
  const [calendarState, dispatch] = reactExports.useReducer(reducerFn, {
    isMonthSwitchingAnimating: false,
    focusedDay: referenceDate,
    // Keep the time from the reference date when computing the current month anchor.
    // Using startOfMonth would reset the time to 00:00 which breaks expectations
    // that month selections preserve the referenceDate time when no value is provided.
    // See tests: "should use `referenceDate` when no value defined".
    currentMonth: adapter.setDate(referenceDate, 1),
    slideDirection: "left"
  });
  const focusedDayRef = reactExports.useRef(calendarState.focusedDay);
  const isDateDisabled = useIsDateDisabled({
    shouldDisableDate,
    minDate,
    maxDate,
    disableFuture,
    disablePast,
    timezone
  });
  reactExports.useEffect(() => {
    dispatch({
      type: "changeMonthTimezone",
      newTimezone: adapter.getTimezone(referenceDate)
    });
  }, [referenceDate, adapter]);
  const setVisibleDate = useEventCallback(({
    target,
    reason
  }) => {
    if (reason === "cell-interaction" && focusedDayRef.current != null && adapter.isSameDay(target, focusedDayRef.current)) {
      return;
    }
    const skipAnimation = reason === "cell-interaction";
    let month;
    let focusedDay;
    if (reason === "cell-interaction") {
      month = getCurrentMonthFromVisibleDate(target, calendarState.currentMonth);
      focusedDay = target;
    } else {
      month = adapter.isSameMonth(target, calendarState.currentMonth) ? calendarState.currentMonth : adapter.startOfMonth(target);
      focusedDay = target;
      if (isDateDisabled(focusedDay)) {
        const startOfMonth = adapter.startOfMonth(target);
        const endOfMonth = adapter.endOfMonth(target);
        focusedDay = findClosestEnabledDate({
          adapter,
          date: focusedDay,
          minDate: adapter.isBefore(minDate, startOfMonth) ? startOfMonth : minDate,
          maxDate: adapter.isAfter(maxDate, endOfMonth) ? endOfMonth : maxDate,
          disablePast,
          disableFuture,
          isDateDisabled,
          timezone
        });
      }
    }
    const hasChangedMonth = !adapter.isSameMonth(calendarState.currentMonth, month);
    const hasChangedYear = !adapter.isSameYear(calendarState.currentMonth, month);
    if (hasChangedMonth) {
      onMonthChange?.(month);
    }
    if (hasChangedYear) {
      onYearChange?.(adapter.startOfYear(month));
    }
    focusedDayRef.current = calendarState.focusedDay != null && focusedDay != null && adapter.isSameDay(focusedDay, calendarState.focusedDay) ? calendarState.focusedDay : focusedDay;
    dispatch({
      type: "setVisibleDate",
      month,
      direction: adapter.isAfterDay(month, calendarState.currentMonth) ? "left" : "right",
      focusedDay: focusedDayRef.current,
      skipAnimation
    });
  });
  const onMonthSwitchingAnimationEnd = reactExports.useCallback(() => {
    dispatch({
      type: "finishMonthSwitchingAnimation"
    });
  }, []);
  return {
    referenceDate,
    calendarState,
    setVisibleDate,
    isDateDisabled,
    onMonthSwitchingAnimationEnd
  };
};
const getPickersFadeTransitionGroupUtilityClass = (slot) => generateUtilityClass("MuiPickersFadeTransitionGroup", slot);
generateUtilityClasses("MuiPickersFadeTransitionGroup", ["root"]);
const _excluded$g = ["children"];
const useUtilityClasses$e = (classes) => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getPickersFadeTransitionGroupUtilityClass, classes);
};
const PickersFadeTransitionGroupRoot = styled(TransitionGroup, {
  name: "MuiPickersFadeTransitionGroup",
  slot: "Root"
})({
  display: "block",
  position: "relative"
});
function PickersFadeTransitionGroup(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersFadeTransitionGroup"
  });
  const {
    className,
    reduceAnimations,
    transKey,
    classes: classesProp
  } = props;
  const {
    children
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$g);
  const classes = useUtilityClasses$e(classesProp);
  const theme = useTheme$1();
  if (reduceAnimations) {
    return children;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PickersFadeTransitionGroupRoot, {
    className: clsx(classes.root, className),
    ownerState: other,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Fade, {
      appear: false,
      mountOnEnter: true,
      unmountOnExit: true,
      timeout: {
        appear: theme.transitions.duration.enteringScreen,
        enter: theme.transitions.duration.enteringScreen,
        exit: 0
      },
      children
    }, transKey)
  });
}
const getPickersSlideTransitionUtilityClass = (slot) => generateUtilityClass("MuiPickersSlideTransition", slot);
const pickersSlideTransitionClasses = generateUtilityClasses("MuiPickersSlideTransition", ["root", "slideEnter-left", "slideEnter-right", "slideEnterActive", "slideExit", "slideExitActiveLeft-left", "slideExitActiveLeft-right"]);
const _excluded$f = ["children", "className", "reduceAnimations", "slideDirection", "transKey", "classes"];
const useUtilityClasses$d = (classes, ownerState) => {
  const {
    slideDirection
  } = ownerState;
  const slots = {
    root: ["root"],
    exit: ["slideExit"],
    enterActive: ["slideEnterActive"],
    enter: [`slideEnter-${slideDirection}`],
    exitActive: [`slideExitActiveLeft-${slideDirection}`]
  };
  return composeClasses(slots, getPickersSlideTransitionUtilityClass, classes);
};
const PickersSlideTransitionRoot = styled(TransitionGroup, {
  name: "MuiPickersSlideTransition",
  slot: "Root",
  overridesResolver: (_, styles) => [styles.root, {
    [`.${pickersSlideTransitionClasses["slideEnter-left"]}`]: styles["slideEnter-left"]
  }, {
    [`.${pickersSlideTransitionClasses["slideEnter-right"]}`]: styles["slideEnter-right"]
  }, {
    [`.${pickersSlideTransitionClasses.slideEnterActive}`]: styles.slideEnterActive
  }, {
    [`.${pickersSlideTransitionClasses.slideExit}`]: styles.slideExit
  }, {
    [`.${pickersSlideTransitionClasses["slideExitActiveLeft-left"]}`]: styles["slideExitActiveLeft-left"]
  }, {
    [`.${pickersSlideTransitionClasses["slideExitActiveLeft-right"]}`]: styles["slideExitActiveLeft-right"]
  }]
})(({
  theme
}) => {
  const slideTransition = theme.transitions.create("transform", {
    duration: theme.transitions.duration.complex,
    easing: "cubic-bezier(0.35, 0.8, 0.4, 1)"
  });
  return {
    display: "block",
    position: "relative",
    overflowX: "hidden",
    "& > *": {
      position: "absolute",
      top: 0,
      right: 0,
      left: 0
    },
    [`& .${pickersSlideTransitionClasses["slideEnter-left"]}`]: {
      willChange: "transform",
      transform: "translate(100%)",
      zIndex: 1
    },
    [`& .${pickersSlideTransitionClasses["slideEnter-right"]}`]: {
      willChange: "transform",
      transform: "translate(-100%)",
      zIndex: 1
    },
    [`& .${pickersSlideTransitionClasses.slideEnterActive}`]: {
      transform: "translate(0%)",
      transition: slideTransition
    },
    [`& .${pickersSlideTransitionClasses.slideExit}`]: {
      transform: "translate(0%)"
    },
    [`& .${pickersSlideTransitionClasses["slideExitActiveLeft-left"]}`]: {
      willChange: "transform",
      transform: "translate(-100%)",
      transition: slideTransition,
      zIndex: 0
    },
    [`& .${pickersSlideTransitionClasses["slideExitActiveLeft-right"]}`]: {
      willChange: "transform",
      transform: "translate(100%)",
      transition: slideTransition,
      zIndex: 0
    }
  };
});
function PickersSlideTransition(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersSlideTransition"
  });
  const {
    children,
    className,
    reduceAnimations,
    slideDirection,
    transKey,
    classes: classesProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$f);
  const {
    ownerState: pickerOwnerState
  } = usePickerPrivateContext();
  const ownerState = _extends({}, pickerOwnerState, {
    slideDirection
  });
  const classes = useUtilityClasses$d(classesProp, ownerState);
  const theme = useTheme$1();
  if (reduceAnimations) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: clsx(classes.root, className),
      children
    });
  }
  const transitionClasses = {
    exit: classes.exit,
    enterActive: classes.enterActive,
    enter: classes.enter,
    exitActive: classes.exitActive
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PickersSlideTransitionRoot, {
    className: clsx(classes.root, className),
    childFactory: (element) => /* @__PURE__ */ reactExports.cloneElement(element, {
      classNames: transitionClasses
    }),
    role: "presentation",
    ownerState,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CSSTransition, _extends({
      mountOnEnter: true,
      unmountOnExit: true,
      timeout: theme.transitions.duration.complex,
      classNames: transitionClasses
    }, other, {
      children
    }), transKey)
  });
}
const getDayCalendarUtilityClass = (slot) => generateUtilityClass("MuiDayCalendar", slot);
generateUtilityClasses("MuiDayCalendar", ["root", "header", "weekDayLabel", "loadingContainer", "slideTransition", "monthContainer", "weekContainer", "weekNumberLabel", "weekNumber"]);
const _excluded$e = ["parentProps", "day", "focusedDay", "selectedDays", "isDateDisabled", "currentMonthNumber", "isViewFocused"], _excluded2$4 = ["ownerState"];
const useUtilityClasses$c = (classes) => {
  const slots = {
    root: ["root"],
    header: ["header"],
    weekDayLabel: ["weekDayLabel"],
    loadingContainer: ["loadingContainer"],
    slideTransition: ["slideTransition"],
    monthContainer: ["monthContainer"],
    weekContainer: ["weekContainer"],
    weekNumberLabel: ["weekNumberLabel"],
    weekNumber: ["weekNumber"]
  };
  return composeClasses(slots, getDayCalendarUtilityClass, classes);
};
const weeksContainerHeight = (DAY_SIZE + DAY_MARGIN * 2) * 6;
const PickersCalendarDayRoot = styled("div", {
  name: "MuiDayCalendar",
  slot: "Root"
})({});
const PickersCalendarDayHeader = styled("div", {
  name: "MuiDayCalendar",
  slot: "Header"
})({
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});
const PickersCalendarWeekDayLabel = styled(Typography, {
  name: "MuiDayCalendar",
  slot: "WeekDayLabel"
})(({
  theme
}) => ({
  width: 36,
  height: 40,
  margin: "0 2px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: (theme.vars || theme).palette.text.secondary
}));
const PickersCalendarWeekNumberLabel = styled(Typography, {
  name: "MuiDayCalendar",
  slot: "WeekNumberLabel"
})(({
  theme
}) => ({
  width: 36,
  height: 40,
  margin: "0 2px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: (theme.vars || theme).palette.text.disabled
}));
const PickersCalendarWeekNumber = styled(Typography, {
  name: "MuiDayCalendar",
  slot: "WeekNumber"
})(({
  theme
}) => _extends({}, theme.typography.caption, {
  width: DAY_SIZE,
  height: DAY_SIZE,
  padding: 0,
  margin: `0 ${DAY_MARGIN}px`,
  color: (theme.vars || theme).palette.text.disabled,
  fontSize: "0.75rem",
  alignItems: "center",
  justifyContent: "center",
  display: "inline-flex"
}));
const PickersCalendarLoadingContainer = styled("div", {
  name: "MuiDayCalendar",
  slot: "LoadingContainer"
})({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: weeksContainerHeight
});
const PickersCalendarSlideTransition = styled(PickersSlideTransition, {
  name: "MuiDayCalendar",
  slot: "SlideTransition"
})({
  minHeight: weeksContainerHeight
});
const PickersCalendarWeekContainer = styled("div", {
  name: "MuiDayCalendar",
  slot: "MonthContainer"
})({
  overflow: "hidden"
});
const PickersCalendarWeek = styled("div", {
  name: "MuiDayCalendar",
  slot: "WeekContainer"
})({
  margin: `${DAY_MARGIN}px 0`,
  display: "flex",
  justifyContent: "center"
});
function WrappedDay(_ref) {
  let {
    parentProps,
    day,
    focusedDay,
    selectedDays,
    isDateDisabled,
    currentMonthNumber,
    isViewFocused
  } = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded$e);
  const {
    disabled,
    disableHighlightToday,
    isMonthSwitchingAnimating,
    showDaysOutsideCurrentMonth,
    slots,
    slotProps,
    timezone
  } = parentProps;
  const adapter = usePickerAdapter();
  const now = useNow(timezone);
  const isFocusableDay = focusedDay != null && adapter.isSameDay(day, focusedDay);
  const isFocusedDay = isViewFocused && isFocusableDay;
  const isSelected = selectedDays.some((selectedDay) => adapter.isSameDay(selectedDay, day));
  const isToday = adapter.isSameDay(day, now);
  const isDisabled = reactExports.useMemo(() => disabled || isDateDisabled(day), [disabled, isDateDisabled, day]);
  const isOutsideCurrentMonth = reactExports.useMemo(() => adapter.getMonth(day) !== currentMonthNumber, [adapter, day, currentMonthNumber]);
  const ownerState = usePickerDayOwnerState({
    day,
    selected: isSelected,
    disabled: isDisabled,
    today: isToday,
    outsideCurrentMonth: isOutsideCurrentMonth,
    disableMargin: void 0,
    // This prop can only be defined using slotProps.day so the ownerState for useSlotProps cannot have its value.
    disableHighlightToday,
    showDaysOutsideCurrentMonth
  });
  const Day = slots?.day ?? PickersDay;
  const _useSlotProps = useSlotProps({
    elementType: Day,
    externalSlotProps: slotProps?.day,
    additionalProps: _extends({
      disableHighlightToday,
      showDaysOutsideCurrentMonth,
      role: "gridcell",
      isAnimating: isMonthSwitchingAnimating,
      // it is used in date range dragging logic by accessing `dataset.timestamp`
      "data-timestamp": adapter.toJsDate(day).valueOf()
    }, other),
    ownerState: _extends({}, ownerState, {
      day,
      isDayDisabled: isDisabled,
      isDaySelected: isSelected
    })
  }), dayProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded2$4);
  const isFirstVisibleCell = reactExports.useMemo(() => {
    const startOfMonth = adapter.startOfMonth(adapter.setMonth(day, currentMonthNumber));
    if (!showDaysOutsideCurrentMonth) {
      return adapter.isSameDay(day, startOfMonth);
    }
    return adapter.isSameDay(day, adapter.startOfWeek(startOfMonth));
  }, [currentMonthNumber, day, showDaysOutsideCurrentMonth, adapter]);
  const isLastVisibleCell = reactExports.useMemo(() => {
    const endOfMonth = adapter.endOfMonth(adapter.setMonth(day, currentMonthNumber));
    if (!showDaysOutsideCurrentMonth) {
      return adapter.isSameDay(day, endOfMonth);
    }
    return adapter.isSameDay(day, adapter.endOfWeek(endOfMonth));
  }, [currentMonthNumber, day, showDaysOutsideCurrentMonth, adapter]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Day, _extends({}, dayProps, {
    day,
    disabled: isDisabled,
    autoFocus: !isOutsideCurrentMonth && isFocusedDay,
    today: isToday,
    outsideCurrentMonth: isOutsideCurrentMonth,
    isFirstVisibleCell,
    isLastVisibleCell,
    selected: isSelected,
    tabIndex: isFocusableDay ? 0 : -1,
    "aria-selected": isSelected,
    "aria-current": isToday ? "date" : void 0
  }));
}
function DayCalendar(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDayCalendar"
  });
  const adapter = usePickerAdapter();
  const {
    onFocusedDayChange,
    className,
    classes: classesProp,
    currentMonth,
    selectedDays,
    focusedDay,
    loading,
    onSelectedDaysChange,
    onMonthSwitchingAnimationEnd,
    readOnly,
    reduceAnimations,
    renderLoading = () => /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "..."
    }),
    slideDirection,
    TransitionProps,
    disablePast,
    disableFuture,
    minDate,
    maxDate,
    shouldDisableDate,
    shouldDisableMonth,
    shouldDisableYear,
    dayOfWeekFormatter = (date) => adapter.format(date, "weekdayShort").charAt(0).toUpperCase(),
    hasFocus,
    onFocusedViewChange,
    gridLabelId,
    displayWeekNumber,
    fixedWeekNumber,
    timezone
  } = props;
  const now = useNow(timezone);
  const classes = useUtilityClasses$c(classesProp);
  const isRtl = useRtl();
  const isDateDisabled = useIsDateDisabled({
    shouldDisableDate,
    shouldDisableMonth,
    shouldDisableYear,
    minDate,
    maxDate,
    disablePast,
    disableFuture,
    timezone
  });
  const translations = usePickerTranslations();
  const handleDaySelect = useEventCallback((day) => {
    if (readOnly) {
      return;
    }
    onSelectedDaysChange(day);
  });
  const focusDay = (day) => {
    if (!isDateDisabled(day)) {
      onFocusedDayChange(day);
      onFocusedViewChange?.(true);
    }
  };
  const handleKeyDown = useEventCallback((event, day) => {
    switch (event.key) {
      case "ArrowUp":
        focusDay(adapter.addDays(day, -7));
        event.preventDefault();
        break;
      case "ArrowDown":
        focusDay(adapter.addDays(day, 7));
        event.preventDefault();
        break;
      case "ArrowLeft": {
        const newFocusedDayDefault = adapter.addDays(day, isRtl ? 1 : -1);
        const nextAvailableMonth = adapter.addMonths(day, isRtl ? 1 : -1);
        const closestDayToFocus = findClosestEnabledDate({
          adapter,
          date: newFocusedDayDefault,
          minDate: isRtl ? newFocusedDayDefault : adapter.startOfMonth(nextAvailableMonth),
          maxDate: isRtl ? adapter.endOfMonth(nextAvailableMonth) : newFocusedDayDefault,
          isDateDisabled,
          timezone
        });
        focusDay(closestDayToFocus || newFocusedDayDefault);
        event.preventDefault();
        break;
      }
      case "ArrowRight": {
        const newFocusedDayDefault = adapter.addDays(day, isRtl ? -1 : 1);
        const nextAvailableMonth = adapter.addMonths(day, isRtl ? -1 : 1);
        const closestDayToFocus = findClosestEnabledDate({
          adapter,
          date: newFocusedDayDefault,
          minDate: isRtl ? adapter.startOfMonth(nextAvailableMonth) : newFocusedDayDefault,
          maxDate: isRtl ? newFocusedDayDefault : adapter.endOfMonth(nextAvailableMonth),
          isDateDisabled,
          timezone
        });
        focusDay(closestDayToFocus || newFocusedDayDefault);
        event.preventDefault();
        break;
      }
      case "Home":
        focusDay(adapter.startOfWeek(day));
        event.preventDefault();
        break;
      case "End":
        focusDay(adapter.endOfWeek(day));
        event.preventDefault();
        break;
      case "PageUp":
        focusDay(adapter.addMonths(day, 1));
        event.preventDefault();
        break;
      case "PageDown":
        focusDay(adapter.addMonths(day, -1));
        event.preventDefault();
        break;
      case "Enter":
      case " ":
        handleDaySelect(day);
        event.preventDefault();
        break;
    }
  });
  const handleFocus = useEventCallback((event, day) => focusDay(day));
  const handleBlur = useEventCallback((event, day) => {
    if (focusedDay != null && adapter.isSameDay(focusedDay, day)) {
      onFocusedViewChange?.(false);
    }
  });
  const currentMonthNumber = adapter.getMonth(currentMonth);
  const currentYearNumber = adapter.getYear(currentMonth);
  const validSelectedDays = reactExports.useMemo(() => selectedDays.filter((day) => !!day).map((day) => adapter.startOfDay(day)), [adapter, selectedDays]);
  const transitionKey = `${currentYearNumber}-${currentMonthNumber}`;
  const slideNodeRef = reactExports.useMemo(() => /* @__PURE__ */ reactExports.createRef(), [transitionKey]);
  const weeksToDisplay = reactExports.useMemo(() => {
    const toDisplay = adapter.getWeekArray(currentMonth);
    let nextMonth = adapter.addMonths(currentMonth, 1);
    while (fixedWeekNumber && toDisplay.length < fixedWeekNumber) {
      const additionalWeeks = adapter.getWeekArray(nextMonth);
      const hasCommonWeek = adapter.isSameDay(toDisplay[toDisplay.length - 1][0], additionalWeeks[0][0]);
      additionalWeeks.slice(hasCommonWeek ? 1 : 0).forEach((week) => {
        if (toDisplay.length < fixedWeekNumber) {
          toDisplay.push(week);
        }
      });
      nextMonth = adapter.addMonths(nextMonth, 1);
    }
    return toDisplay;
  }, [currentMonth, fixedWeekNumber, adapter]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PickersCalendarDayRoot, {
    role: "grid",
    "aria-labelledby": gridLabelId,
    className: classes.root,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsxs(PickersCalendarDayHeader, {
      role: "row",
      className: classes.header,
      children: [displayWeekNumber && /* @__PURE__ */ jsxRuntimeExports.jsx(PickersCalendarWeekNumberLabel, {
        variant: "caption",
        role: "columnheader",
        "aria-label": translations.calendarWeekNumberHeaderLabel,
        className: classes.weekNumberLabel,
        children: translations.calendarWeekNumberHeaderText
      }), getWeekdays(adapter, now).map((weekday, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(PickersCalendarWeekDayLabel, {
        variant: "caption",
        role: "columnheader",
        "aria-label": adapter.format(weekday, "weekday"),
        className: classes.weekDayLabel,
        children: dayOfWeekFormatter(weekday)
      }, i.toString()))]
    }), loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(PickersCalendarLoadingContainer, {
      className: classes.loadingContainer,
      children: renderLoading()
    }) : /* @__PURE__ */ jsxRuntimeExports.jsx(PickersCalendarSlideTransition, _extends({
      transKey: transitionKey,
      onExited: onMonthSwitchingAnimationEnd,
      reduceAnimations,
      slideDirection,
      className: clsx(className, classes.slideTransition)
    }, TransitionProps, {
      nodeRef: slideNodeRef,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(PickersCalendarWeekContainer, {
        ref: slideNodeRef,
        role: "rowgroup",
        className: classes.monthContainer,
        children: weeksToDisplay.map((week, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(PickersCalendarWeek, {
          role: "row",
          className: classes.weekContainer,
          "aria-rowindex": index + 1,
          children: [displayWeekNumber && /* @__PURE__ */ jsxRuntimeExports.jsx(PickersCalendarWeekNumber, {
            className: classes.weekNumber,
            role: "rowheader",
            "aria-label": translations.calendarWeekNumberAriaLabelText(adapter.getWeekNumber(week[0])),
            children: translations.calendarWeekNumberText(adapter.getWeekNumber(week[0]))
          }), week.map((day, dayIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx(WrappedDay, {
            parentProps: props,
            day,
            selectedDays: validSelectedDays,
            isViewFocused: hasFocus,
            focusedDay,
            onKeyDown: handleKeyDown,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onDaySelect: handleDaySelect,
            isDateDisabled,
            currentMonthNumber,
            "aria-colindex": dayIndex + 1
          }, day.toString()))]
        }, `week-${week[0]}`))
      })
    }))]
  });
}
function getMonthCalendarUtilityClass(slot) {
  return generateUtilityClass("MuiMonthCalendar", slot);
}
const monthCalendarClasses = generateUtilityClasses("MuiMonthCalendar", ["root", "button", "disabled", "selected"]);
const _excluded$d = ["autoFocus", "classes", "disabled", "selected", "value", "onClick", "onKeyDown", "onFocus", "onBlur", "slots", "slotProps"];
const useUtilityClasses$b = (classes, ownerState) => {
  const slots = {
    button: ["button", ownerState.isMonthDisabled && "disabled", ownerState.isMonthSelected && "selected"]
  };
  return composeClasses(slots, getMonthCalendarUtilityClass, classes);
};
const DefaultMonthButton = styled("button", {
  name: "MuiMonthCalendar",
  slot: "Button",
  overridesResolver: (_, styles) => [styles.button, {
    [`&.${monthCalendarClasses.disabled}`]: styles.disabled
  }, {
    [`&.${monthCalendarClasses.selected}`]: styles.selected
  }]
})(({
  theme
}) => _extends({
  color: "unset",
  backgroundColor: "transparent",
  border: 0,
  outline: 0
}, theme.typography.subtitle1, {
  height: 36,
  width: 72,
  borderRadius: 18,
  cursor: "pointer",
  "&:focus": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
  },
  "&:hover": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
  },
  "&:disabled": {
    cursor: "auto",
    pointerEvents: "none"
  },
  [`&.${monthCalendarClasses.disabled}`]: {
    color: (theme.vars || theme).palette.text.secondary
  },
  [`&.${monthCalendarClasses.selected}`]: {
    color: (theme.vars || theme).palette.primary.contrastText,
    backgroundColor: (theme.vars || theme).palette.primary.main,
    "&:focus, &:hover": {
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  }
}));
const MonthCalendarButton = /* @__PURE__ */ reactExports.memo(function MonthCalendarButton2(props) {
  const {
    autoFocus,
    classes: classesProp,
    disabled,
    selected,
    value,
    onClick,
    onKeyDown,
    onFocus,
    onBlur,
    slots,
    slotProps
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$d);
  const ref = reactExports.useRef(null);
  const {
    ownerState: pickerOwnerState
  } = usePickerPrivateContext();
  const ownerState = _extends({}, pickerOwnerState, {
    isMonthDisabled: disabled,
    isMonthSelected: selected
  });
  const classes = useUtilityClasses$b(classesProp, ownerState);
  useEnhancedEffect(() => {
    if (autoFocus) {
      ref.current?.focus();
    }
  }, [autoFocus]);
  const MonthButton = slots?.monthButton ?? DefaultMonthButton;
  const monthButtonProps = useSlotProps({
    elementType: MonthButton,
    externalSlotProps: slotProps?.monthButton,
    externalForwardedProps: other,
    additionalProps: {
      disabled,
      ref,
      type: "button",
      role: "radio",
      "aria-checked": selected,
      onClick: (event) => onClick(event, value),
      onKeyDown: (event) => onKeyDown(event, value),
      onFocus: (event) => onFocus(event, value),
      onBlur: (event) => onBlur(event, value)
    },
    ownerState,
    className: classes.button
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MonthButton, _extends({}, monthButtonProps));
});
const _excluded$c = ["autoFocus", "className", "currentMonth", "classes", "value", "defaultValue", "referenceDate", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "shouldDisableMonth", "readOnly", "disableHighlightToday", "onMonthFocus", "hasFocus", "onFocusedViewChange", "monthsPerRow", "timezone", "gridLabelId", "slots", "slotProps"];
const useUtilityClasses$a = (classes) => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getMonthCalendarUtilityClass, classes);
};
function useMonthCalendarDefaultizedProps(props, name) {
  const themeProps = useThemeProps({
    props,
    name
  });
  const validationProps = useApplyDefaultValuesToDateValidationProps(themeProps);
  return _extends({}, themeProps, validationProps, {
    monthsPerRow: themeProps.monthsPerRow ?? 3
  });
}
const isSameMonth = (monthA, monthB, yearA, yearB, adapter) => Boolean(monthA === monthB && yearB && adapter.isSameYear(yearA, yearB));
const MonthCalendarRoot = styled("div", {
  name: "MuiMonthCalendar",
  slot: "Root",
  shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== "monthsPerRow"
})({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  rowGap: 16,
  padding: "8px 0",
  width: DIALOG_WIDTH,
  // avoid padding increasing width over defined
  boxSizing: "border-box",
  variants: [{
    props: {
      monthsPerRow: 3
    },
    style: {
      columnGap: 24
    }
  }, {
    props: {
      monthsPerRow: 4
    },
    style: {
      columnGap: 0
    }
  }]
});
const MonthCalendar = /* @__PURE__ */ reactExports.forwardRef(function MonthCalendar2(inProps, ref) {
  const props = useMonthCalendarDefaultizedProps(inProps, "MuiMonthCalendar");
  const {
    autoFocus,
    className,
    currentMonth,
    classes: classesProp,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    disabled,
    disableFuture,
    disablePast,
    maxDate,
    minDate,
    onChange,
    shouldDisableMonth,
    readOnly,
    onMonthFocus,
    hasFocus,
    onFocusedViewChange,
    monthsPerRow,
    timezone: timezoneProp,
    gridLabelId,
    slots,
    slotProps
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$c);
  const {
    value,
    handleValueChange,
    timezone
  } = useControlledValue({
    name: "MonthCalendar",
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    onChange,
    valueManager: singleItemValueManager
  });
  const now = useNow(timezone);
  const isRtl = useRtl();
  const adapter = usePickerAdapter();
  const {
    ownerState
  } = usePickerPrivateContext();
  const referenceDate = reactExports.useMemo(
    () => singleItemValueManager.getInitialReferenceValue({
      value,
      adapter,
      props,
      timezone,
      referenceDate: referenceDateProp,
      granularity: SECTION_TYPE_GRANULARITY.month
    }),
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  );
  const classes = useUtilityClasses$a(classesProp);
  const todayMonth = reactExports.useMemo(() => adapter.getMonth(now), [adapter, now]);
  const selectedMonth = reactExports.useMemo(() => {
    if (value != null) {
      return adapter.getMonth(value);
    }
    return null;
  }, [value, adapter]);
  const [focusedMonth, setFocusedMonth] = reactExports.useState(() => selectedMonth || adapter.getMonth(referenceDate));
  const [internalHasFocus, setInternalHasFocus] = useControlled({
    name: "MonthCalendar",
    state: "hasFocus",
    controlled: hasFocus,
    default: autoFocus ?? false
  });
  const changeHasFocus = useEventCallback((newHasFocus) => {
    setInternalHasFocus(newHasFocus);
    if (onFocusedViewChange) {
      onFocusedViewChange(newHasFocus);
    }
  });
  const isMonthDisabled = reactExports.useCallback((dateToValidate) => {
    const firstEnabledMonth = adapter.startOfMonth(disablePast && adapter.isAfter(now, minDate) ? now : minDate);
    const lastEnabledMonth = adapter.startOfMonth(disableFuture && adapter.isBefore(now, maxDate) ? now : maxDate);
    const monthToValidate = adapter.startOfMonth(dateToValidate);
    if (adapter.isBefore(monthToValidate, firstEnabledMonth)) {
      return true;
    }
    if (adapter.isAfter(monthToValidate, lastEnabledMonth)) {
      return true;
    }
    if (!shouldDisableMonth) {
      return false;
    }
    return shouldDisableMonth(monthToValidate);
  }, [disableFuture, disablePast, maxDate, minDate, now, shouldDisableMonth, adapter]);
  const handleMonthSelection = useEventCallback((_event, month) => {
    if (readOnly) {
      return;
    }
    const currentValue = value && currentMonth && !adapter.isSameYear(value, currentMonth) ? adapter.setYear(value, adapter.getYear(currentMonth)) : value;
    const baseDateForMonth = currentValue ?? currentMonth ?? referenceDate;
    const newDate = adapter.setMonth(baseDateForMonth, month);
    handleValueChange(newDate);
  });
  const focusMonth = useEventCallback((month) => {
    if (!isMonthDisabled(adapter.setMonth(value ?? currentMonth ?? referenceDate, month))) {
      setFocusedMonth(month);
      changeHasFocus(true);
      if (onMonthFocus) {
        onMonthFocus(month);
      }
    }
  });
  reactExports.useEffect(() => {
    setFocusedMonth((prevFocusedMonth) => selectedMonth !== null && prevFocusedMonth !== selectedMonth ? selectedMonth : prevFocusedMonth);
  }, [selectedMonth]);
  const handleKeyDown = useEventCallback((event, month) => {
    const monthsInYear = 12;
    switch (event.key) {
      case "ArrowUp":
        focusMonth((monthsInYear + month - monthsPerRow) % monthsInYear);
        event.preventDefault();
        break;
      case "ArrowDown":
        focusMonth((monthsInYear + month + monthsPerRow) % monthsInYear);
        event.preventDefault();
        break;
      case "ArrowLeft":
        focusMonth((monthsInYear + month + (isRtl ? 1 : -1)) % monthsInYear);
        event.preventDefault();
        break;
      case "ArrowRight":
        focusMonth((monthsInYear + month + (isRtl ? -1 : 1)) % monthsInYear);
        event.preventDefault();
        break;
      case "Enter":
      case " ":
        handleMonthSelection(event, month);
        event.preventDefault();
        break;
    }
  });
  const handleMonthFocus = useEventCallback((event, month) => {
    focusMonth(month);
  });
  const handleMonthBlur = useEventCallback((event, month) => {
    if (focusedMonth === month) {
      changeHasFocus(false);
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MonthCalendarRoot, _extends({
    ref,
    className: clsx(classes.root, className),
    ownerState,
    role: "radiogroup",
    "aria-labelledby": gridLabelId,
    monthsPerRow
  }, other, {
    children: getMonthsInYear(adapter, currentMonth ?? value ?? referenceDate).map((month) => {
      const monthNumber = adapter.getMonth(month);
      const monthText = adapter.format(month, "monthShort");
      const monthLabel = adapter.format(month, "month");
      const isSelected = isSameMonth(monthNumber, selectedMonth, month, value, adapter);
      const isDisabled = disabled || isMonthDisabled(month);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(MonthCalendarButton, {
        selected: isSelected,
        value: monthNumber,
        onClick: handleMonthSelection,
        onKeyDown: handleKeyDown,
        autoFocus: internalHasFocus && monthNumber === focusedMonth,
        disabled: isDisabled,
        tabIndex: monthNumber === focusedMonth && !isDisabled ? 0 : -1,
        onFocus: handleMonthFocus,
        onBlur: handleMonthBlur,
        "aria-current": isSameMonth(monthNumber, todayMonth, month, now, adapter) ? "date" : void 0,
        "aria-label": monthLabel,
        slots,
        slotProps,
        classes: classesProp,
        children: monthText
      }, monthText);
    })
  }));
});
function getYearCalendarUtilityClass(slot) {
  return generateUtilityClass("MuiYearCalendar", slot);
}
const yearCalendarClasses = generateUtilityClasses("MuiYearCalendar", ["root", "button", "disabled", "selected"]);
const _excluded$b = ["autoFocus", "classes", "disabled", "selected", "value", "onClick", "onKeyDown", "onFocus", "onBlur", "slots", "slotProps"];
const useUtilityClasses$9 = (classes, ownerState) => {
  const slots = {
    button: ["button", ownerState.isYearDisabled && "disabled", ownerState.isYearSelected && "selected"]
  };
  return composeClasses(slots, getYearCalendarUtilityClass, classes);
};
const DefaultYearButton = styled("button", {
  name: "MuiYearCalendar",
  slot: "Button",
  overridesResolver: (_, styles) => [styles.button, {
    [`&.${yearCalendarClasses.disabled}`]: styles.disabled
  }, {
    [`&.${yearCalendarClasses.selected}`]: styles.selected
  }]
})(({
  theme
}) => _extends({
  color: "unset",
  backgroundColor: "transparent",
  border: 0,
  outline: 0
}, theme.typography.subtitle1, {
  height: 36,
  width: 72,
  borderRadius: 18,
  cursor: "pointer",
  "&:focus": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.focusOpacity})` : alpha(theme.palette.action.active, theme.palette.action.focusOpacity)
  },
  "&:hover": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
  },
  "&:disabled": {
    cursor: "auto",
    pointerEvents: "none"
  },
  [`&.${yearCalendarClasses.disabled}`]: {
    color: (theme.vars || theme).palette.text.secondary
  },
  [`&.${yearCalendarClasses.selected}`]: {
    color: (theme.vars || theme).palette.primary.contrastText,
    backgroundColor: (theme.vars || theme).palette.primary.main,
    "&:focus, &:hover": {
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  }
}));
const YearCalendarButton = /* @__PURE__ */ reactExports.memo(function YearCalendarButton2(props) {
  const {
    autoFocus,
    classes: classesProp,
    disabled,
    selected,
    value,
    onClick,
    onKeyDown,
    onFocus,
    onBlur,
    slots,
    slotProps
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$b);
  const ref = reactExports.useRef(null);
  const {
    ownerState: pickerOwnerState
  } = usePickerPrivateContext();
  const ownerState = _extends({}, pickerOwnerState, {
    isYearDisabled: disabled,
    isYearSelected: selected
  });
  const classes = useUtilityClasses$9(classesProp, ownerState);
  useEnhancedEffect(() => {
    if (autoFocus) {
      ref.current?.focus();
    }
  }, [autoFocus]);
  const YearButton = slots?.yearButton ?? DefaultYearButton;
  const yearButtonProps = useSlotProps({
    elementType: YearButton,
    externalSlotProps: slotProps?.yearButton,
    externalForwardedProps: other,
    additionalProps: {
      disabled,
      ref,
      type: "button",
      role: "radio",
      "aria-checked": selected,
      onClick: (event) => onClick(event, value),
      onKeyDown: (event) => onKeyDown(event, value),
      onFocus: (event) => onFocus(event, value),
      onBlur: (event) => onBlur(event, value)
    },
    ownerState,
    className: classes.button
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(YearButton, _extends({}, yearButtonProps));
});
const _excluded$a = ["autoFocus", "className", "classes", "value", "defaultValue", "referenceDate", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "readOnly", "shouldDisableYear", "disableHighlightToday", "onYearFocus", "hasFocus", "onFocusedViewChange", "yearsOrder", "yearsPerRow", "timezone", "gridLabelId", "slots", "slotProps"];
const useUtilityClasses$8 = (classes) => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getYearCalendarUtilityClass, classes);
};
function useYearCalendarDefaultizedProps(props, name) {
  const themeProps = useThemeProps({
    props,
    name
  });
  const validationProps = useApplyDefaultValuesToDateValidationProps(themeProps);
  return _extends({}, themeProps, validationProps, {
    yearsPerRow: themeProps.yearsPerRow ?? 3,
    yearsOrder: themeProps.yearsOrder ?? "asc"
  });
}
const YearCalendarRoot = styled("div", {
  name: "MuiYearCalendar",
  slot: "Root",
  shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== "yearsPerRow"
})({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  rowGap: 12,
  padding: "6px 0",
  overflowY: "auto",
  height: "100%",
  width: DIALOG_WIDTH,
  maxHeight: MAX_CALENDAR_HEIGHT,
  // avoid padding increasing width over defined
  boxSizing: "border-box",
  position: "relative",
  variants: [{
    props: {
      yearsPerRow: 3
    },
    style: {
      columnGap: 24
    }
  }, {
    props: {
      yearsPerRow: 4
    },
    style: {
      columnGap: 0,
      padding: "0 2px"
    }
  }]
});
const YearCalendarButtonFiller = styled("div", {
  name: "MuiYearCalendar",
  slot: "ButtonFiller"
})({
  height: 36,
  width: 72
});
const YearCalendar = /* @__PURE__ */ reactExports.forwardRef(function YearCalendar2(inProps, ref) {
  const props = useYearCalendarDefaultizedProps(inProps, "MuiYearCalendar");
  const {
    autoFocus,
    className,
    classes: classesProp,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    disabled,
    disableFuture,
    disablePast,
    maxDate,
    minDate,
    onChange,
    readOnly,
    shouldDisableYear,
    onYearFocus,
    hasFocus,
    onFocusedViewChange,
    yearsOrder,
    yearsPerRow,
    timezone: timezoneProp,
    gridLabelId,
    slots,
    slotProps
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$a);
  const {
    value,
    handleValueChange,
    timezone
  } = useControlledValue({
    name: "YearCalendar",
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    onChange,
    valueManager: singleItemValueManager
  });
  const now = useNow(timezone);
  const isRtl = useRtl();
  const adapter = usePickerAdapter();
  const {
    ownerState
  } = usePickerPrivateContext();
  const referenceDate = reactExports.useMemo(
    () => singleItemValueManager.getInitialReferenceValue({
      value,
      adapter,
      props,
      timezone,
      referenceDate: referenceDateProp,
      granularity: SECTION_TYPE_GRANULARITY.year
    }),
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  );
  const classes = useUtilityClasses$8(classesProp);
  const todayYear = reactExports.useMemo(() => adapter.getYear(now), [adapter, now]);
  const selectedYear = reactExports.useMemo(() => {
    if (value != null) {
      return adapter.getYear(value);
    }
    return null;
  }, [value, adapter]);
  const [focusedYear, setFocusedYear] = reactExports.useState(() => selectedYear || adapter.getYear(referenceDate));
  const [internalHasFocus, setInternalHasFocus] = useControlled({
    name: "YearCalendar",
    state: "hasFocus",
    controlled: hasFocus,
    default: autoFocus ?? false
  });
  const changeHasFocus = useEventCallback((newHasFocus) => {
    setInternalHasFocus(newHasFocus);
    if (onFocusedViewChange) {
      onFocusedViewChange(newHasFocus);
    }
  });
  const isYearDisabled = reactExports.useCallback((dateToValidate) => {
    if (disablePast && adapter.isBeforeYear(dateToValidate, now)) {
      return true;
    }
    if (disableFuture && adapter.isAfterYear(dateToValidate, now)) {
      return true;
    }
    if (minDate && adapter.isBeforeYear(dateToValidate, minDate)) {
      return true;
    }
    if (maxDate && adapter.isAfterYear(dateToValidate, maxDate)) {
      return true;
    }
    if (!shouldDisableYear) {
      return false;
    }
    const yearToValidate = adapter.startOfYear(dateToValidate);
    return shouldDisableYear(yearToValidate);
  }, [disableFuture, disablePast, maxDate, minDate, now, shouldDisableYear, adapter]);
  const handleYearSelection = useEventCallback((_event, year) => {
    if (readOnly) {
      return;
    }
    const newDate = adapter.setYear(value ?? referenceDate, year);
    handleValueChange(newDate);
  });
  const focusYear = useEventCallback((year) => {
    if (!isYearDisabled(adapter.setYear(value ?? referenceDate, year))) {
      setFocusedYear(year);
      changeHasFocus(true);
      onYearFocus?.(year);
    }
  });
  reactExports.useEffect(() => {
    setFocusedYear((prevFocusedYear) => selectedYear !== null && prevFocusedYear !== selectedYear ? selectedYear : prevFocusedYear);
  }, [selectedYear]);
  const verticalDirection = yearsOrder !== "desc" ? yearsPerRow * 1 : yearsPerRow * -1;
  const horizontalDirection = isRtl && yearsOrder === "asc" || !isRtl && yearsOrder === "desc" ? -1 : 1;
  const handleKeyDown = useEventCallback((event, year) => {
    switch (event.key) {
      case "ArrowUp":
        focusYear(year - verticalDirection);
        event.preventDefault();
        break;
      case "ArrowDown":
        focusYear(year + verticalDirection);
        event.preventDefault();
        break;
      case "ArrowLeft":
        focusYear(year - horizontalDirection);
        event.preventDefault();
        break;
      case "ArrowRight":
        focusYear(year + horizontalDirection);
        event.preventDefault();
        break;
      case "Enter":
      case " ":
        handleYearSelection(event, year);
        event.preventDefault();
        break;
    }
  });
  const handleYearFocus = useEventCallback((event, year) => {
    focusYear(year);
  });
  const handleYearBlur = useEventCallback((event, year) => {
    if (focusedYear === year) {
      changeHasFocus(false);
    }
  });
  const scrollerRef = reactExports.useRef(null);
  const handleRef = useForkRef(ref, scrollerRef);
  reactExports.useEffect(() => {
    if (autoFocus || scrollerRef.current === null) {
      return;
    }
    const tabbableButton = scrollerRef.current.querySelector('[tabindex="0"]');
    if (!tabbableButton) {
      return;
    }
    const offsetHeight = tabbableButton.offsetHeight;
    const offsetTop = tabbableButton.offsetTop;
    const clientHeight = scrollerRef.current.clientHeight;
    const scrollTop = scrollerRef.current.scrollTop;
    const elementBottom = offsetTop + offsetHeight;
    if (offsetHeight > clientHeight || offsetTop < scrollTop) {
      return;
    }
    scrollerRef.current.scrollTop = elementBottom - clientHeight / 2 - offsetHeight / 2;
  }, [autoFocus]);
  const yearRange = adapter.getYearRange([minDate, maxDate]);
  if (yearsOrder === "desc") {
    yearRange.reverse();
  }
  let fillerAmount = yearsPerRow - yearRange.length % yearsPerRow;
  if (fillerAmount === yearsPerRow) {
    fillerAmount = 0;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(YearCalendarRoot, _extends({
    ref: handleRef,
    className: clsx(classes.root, className),
    ownerState,
    role: "radiogroup",
    "aria-labelledby": gridLabelId,
    yearsPerRow
  }, other, {
    children: [yearRange.map((year) => {
      const yearNumber = adapter.getYear(year);
      const isSelected = yearNumber === selectedYear;
      const isDisabled = disabled || isYearDisabled(year);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(YearCalendarButton, {
        selected: isSelected,
        value: yearNumber,
        onClick: handleYearSelection,
        onKeyDown: handleKeyDown,
        autoFocus: internalHasFocus && yearNumber === focusedYear,
        disabled: isDisabled,
        tabIndex: yearNumber === focusedYear && !isDisabled ? 0 : -1,
        onFocus: handleYearFocus,
        onBlur: handleYearBlur,
        "aria-current": todayYear === yearNumber ? "date" : void 0,
        slots,
        slotProps,
        classes: classesProp,
        children: adapter.format(year, "year")
      }, adapter.format(year, "year"));
    }), Array.from({
      length: fillerAmount
    }, (_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(YearCalendarButtonFiller, {}, index))]
  }));
});
const getPickersCalendarHeaderUtilityClass = (slot) => generateUtilityClass("MuiPickersCalendarHeader", slot);
const pickersCalendarHeaderClasses = generateUtilityClasses("MuiPickersCalendarHeader", ["root", "labelContainer", "label", "switchViewButton", "switchViewIcon"]);
const _excluded$9 = ["slots", "slotProps", "currentMonth", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onMonthChange", "onViewChange", "view", "reduceAnimations", "views", "labelId", "className", "classes", "timezone", "format"], _excluded2$3 = ["ownerState"];
const useUtilityClasses$7 = (classes) => {
  const slots = {
    root: ["root"],
    labelContainer: ["labelContainer"],
    label: ["label"],
    switchViewButton: ["switchViewButton"],
    switchViewIcon: ["switchViewIcon"]
  };
  return composeClasses(slots, getPickersCalendarHeaderUtilityClass, classes);
};
const PickersCalendarHeaderRoot = styled("div", {
  name: "MuiPickersCalendarHeader",
  slot: "Root"
})({
  display: "flex",
  alignItems: "center",
  marginTop: 12,
  marginBottom: 4,
  paddingLeft: 24,
  paddingRight: 12,
  // prevent jumping in safari
  maxHeight: 40,
  minHeight: 40
});
const PickersCalendarHeaderLabelContainer = styled("div", {
  name: "MuiPickersCalendarHeader",
  slot: "LabelContainer"
})(({
  theme
}) => _extends({
  display: "flex",
  overflow: "hidden",
  alignItems: "center",
  cursor: "pointer",
  marginRight: "auto"
}, theme.typography.body1, {
  fontWeight: theme.typography.fontWeightMedium
}));
const PickersCalendarHeaderLabel = styled("div", {
  name: "MuiPickersCalendarHeader",
  slot: "Label"
})({
  marginRight: 6
});
const PickersCalendarHeaderSwitchViewButton = styled(IconButton, {
  name: "MuiPickersCalendarHeader",
  slot: "SwitchViewButton"
})({
  marginRight: "auto",
  variants: [{
    props: {
      view: "year"
    },
    style: {
      [`.${pickersCalendarHeaderClasses.switchViewIcon}`]: {
        transform: "rotate(180deg)"
      }
    }
  }]
});
const PickersCalendarHeaderSwitchViewIcon = styled(ArrowDropDownIcon, {
  name: "MuiPickersCalendarHeader",
  slot: "SwitchViewIcon"
})(({
  theme
}) => ({
  willChange: "transform",
  transition: theme.transitions.create("transform"),
  transform: "rotate(0deg)"
}));
const PickersCalendarHeader = /* @__PURE__ */ reactExports.forwardRef(function PickersCalendarHeader2(inProps, ref) {
  const translations = usePickerTranslations();
  const adapter = usePickerAdapter();
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersCalendarHeader"
  });
  const {
    slots,
    slotProps,
    currentMonth: month,
    disabled,
    disableFuture,
    disablePast,
    maxDate,
    minDate,
    onMonthChange,
    onViewChange,
    view,
    reduceAnimations,
    views,
    labelId,
    className,
    classes: classesProp,
    timezone,
    format = `${adapter.formats.month} ${adapter.formats.year}`
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$9);
  const {
    ownerState
  } = usePickerPrivateContext();
  const classes = useUtilityClasses$7(classesProp);
  const SwitchViewButton = slots?.switchViewButton ?? PickersCalendarHeaderSwitchViewButton;
  const switchViewButtonProps = useSlotProps({
    elementType: SwitchViewButton,
    externalSlotProps: slotProps?.switchViewButton,
    additionalProps: {
      size: "small",
      "aria-label": translations.calendarViewSwitchingButtonAriaLabel(view)
    },
    ownerState: _extends({}, ownerState, {
      view
    }),
    className: classes.switchViewButton
  });
  const SwitchViewIcon = slots?.switchViewIcon ?? PickersCalendarHeaderSwitchViewIcon;
  const _useSlotProps = useSlotProps({
    elementType: SwitchViewIcon,
    externalSlotProps: slotProps?.switchViewIcon,
    ownerState,
    className: classes.switchViewIcon
  }), switchViewIconProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded2$3);
  const selectNextMonth = () => onMonthChange(adapter.addMonths(month, 1));
  const selectPreviousMonth = () => onMonthChange(adapter.addMonths(month, -1));
  const isNextMonthDisabled = useNextMonthDisabled(month, {
    disableFuture,
    maxDate,
    timezone
  });
  const isPreviousMonthDisabled = usePreviousMonthDisabled(month, {
    disablePast,
    minDate,
    timezone
  });
  const handleToggleView = () => {
    if (views.length === 1 || !onViewChange || disabled) {
      return;
    }
    if (views.length === 2) {
      onViewChange(views.find((el) => el !== view) || views[0]);
    } else {
      const nextIndexToOpen = views.indexOf(view) !== 0 ? 0 : 1;
      onViewChange(views[nextIndexToOpen]);
    }
  };
  if (views.length === 1 && views[0] === "year") {
    return null;
  }
  const label = adapter.formatByString(month, format);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PickersCalendarHeaderRoot, _extends({}, other, {
    ownerState,
    className: clsx(classes.root, className),
    ref,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsxs(PickersCalendarHeaderLabelContainer, {
      role: "presentation",
      onClick: handleToggleView,
      ownerState,
      "aria-live": "polite",
      className: classes.labelContainer,
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(PickersFadeTransitionGroup, {
        reduceAnimations,
        transKey: label,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(PickersCalendarHeaderLabel, {
          id: labelId,
          ownerState,
          className: classes.label,
          children: label
        })
      }), views.length > 1 && !disabled && /* @__PURE__ */ jsxRuntimeExports.jsx(SwitchViewButton, _extends({}, switchViewButtonProps, {
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SwitchViewIcon, _extends({}, switchViewIconProps))
      }))]
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Fade, {
      in: view === "day",
      appear: !reduceAnimations,
      enter: !reduceAnimations,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(PickersArrowSwitcher, {
        slots,
        slotProps,
        onGoToPrevious: selectPreviousMonth,
        isPreviousDisabled: isPreviousMonthDisabled,
        previousLabel: translations.previousMonth,
        onGoToNext: selectNextMonth,
        isNextDisabled: isNextMonthDisabled,
        nextLabel: translations.nextMonth
      })
    })]
  }));
});
const useMediaQuery = unstable_createUseMediaQuery({
  themeId: THEME_ID
});
const PREFERS_REDUCED_MOTION = "@media (prefers-reduced-motion: reduce)";
const mobileVersionMatches = typeof navigator !== "undefined" && navigator.userAgent.match(/android\s(\d+)|OS\s(\d+)/i);
const androidVersion = mobileVersionMatches && mobileVersionMatches[1] ? parseInt(mobileVersionMatches[1], 10) : null;
const iOSVersion = mobileVersionMatches && mobileVersionMatches[2] ? parseInt(mobileVersionMatches[2], 10) : null;
const slowAnimationDevices = androidVersion && androidVersion < 10 || iOSVersion && iOSVersion < 13 || false;
function useReduceAnimations(customReduceAnimations) {
  const prefersReduced = useMediaQuery(PREFERS_REDUCED_MOTION, {
    defaultMatches: false
  });
  if (customReduceAnimations != null) {
    return customReduceAnimations;
  }
  return prefersReduced || slowAnimationDevices;
}
const getDateCalendarUtilityClass = (slot) => generateUtilityClass("MuiDateCalendar", slot);
generateUtilityClasses("MuiDateCalendar", ["root", "viewTransitionContainer"]);
const _excluded$8 = ["autoFocus", "onViewChange", "value", "defaultValue", "referenceDate", "disableFuture", "disablePast", "onChange", "onYearChange", "onMonthChange", "reduceAnimations", "shouldDisableDate", "shouldDisableMonth", "shouldDisableYear", "view", "views", "openTo", "className", "classes", "disabled", "readOnly", "minDate", "maxDate", "disableHighlightToday", "focusedView", "onFocusedViewChange", "showDaysOutsideCurrentMonth", "fixedWeekNumber", "dayOfWeekFormatter", "slots", "slotProps", "loading", "renderLoading", "displayWeekNumber", "yearsOrder", "yearsPerRow", "monthsPerRow", "timezone"];
const useUtilityClasses$6 = (classes) => {
  const slots = {
    root: ["root"],
    viewTransitionContainer: ["viewTransitionContainer"]
  };
  return composeClasses(slots, getDateCalendarUtilityClass, classes);
};
function useDateCalendarDefaultizedProps(props, name) {
  const themeProps = useThemeProps({
    props,
    name
  });
  const reduceAnimations = useReduceAnimations(themeProps.reduceAnimations);
  const validationProps = useApplyDefaultValuesToDateValidationProps(themeProps);
  return _extends({}, themeProps, validationProps, {
    loading: themeProps.loading ?? false,
    openTo: themeProps.openTo ?? "day",
    views: themeProps.views ?? ["year", "day"],
    reduceAnimations,
    renderLoading: themeProps.renderLoading ?? (() => /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "..."
    }))
  });
}
const DateCalendarRoot = styled(PickerViewRoot, {
  name: "MuiDateCalendar",
  slot: "Root"
})({
  display: "flex",
  flexDirection: "column",
  height: VIEW_HEIGHT
});
const DateCalendarViewTransitionContainer = styled(PickersFadeTransitionGroup, {
  name: "MuiDateCalendar",
  slot: "ViewTransitionContainer"
})({});
const DateCalendar = /* @__PURE__ */ reactExports.forwardRef(function DateCalendar2(inProps, ref) {
  const adapter = usePickerAdapter();
  const {
    ownerState
  } = usePickerPrivateContext();
  const id = useId();
  const props = useDateCalendarDefaultizedProps(inProps, "MuiDateCalendar");
  const {
    autoFocus,
    onViewChange,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    disableFuture,
    disablePast,
    onChange,
    onYearChange,
    onMonthChange,
    reduceAnimations,
    shouldDisableDate,
    shouldDisableMonth,
    shouldDisableYear,
    view: inView,
    views,
    openTo,
    className,
    classes: classesProp,
    disabled,
    readOnly,
    minDate,
    maxDate,
    disableHighlightToday,
    focusedView: focusedViewProp,
    onFocusedViewChange,
    showDaysOutsideCurrentMonth,
    fixedWeekNumber,
    dayOfWeekFormatter,
    slots,
    slotProps,
    loading,
    renderLoading,
    displayWeekNumber,
    yearsOrder,
    yearsPerRow,
    monthsPerRow,
    timezone: timezoneProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$8);
  const {
    value,
    handleValueChange,
    timezone
  } = useControlledValue({
    name: "DateCalendar",
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    onChange,
    valueManager: singleItemValueManager
  });
  const {
    view,
    setView,
    focusedView,
    setFocusedView,
    goToNextView,
    setValueAndGoToNextView
  } = useViews({
    view: inView,
    views,
    openTo,
    onChange: handleValueChange,
    onViewChange,
    autoFocus,
    focusedView: focusedViewProp,
    onFocusedViewChange
  });
  const {
    referenceDate,
    calendarState,
    setVisibleDate,
    isDateDisabled,
    onMonthSwitchingAnimationEnd
  } = useCalendarState({
    value,
    referenceDate: referenceDateProp,
    reduceAnimations,
    onMonthChange,
    onYearChange,
    minDate,
    maxDate,
    shouldDisableDate,
    disablePast,
    disableFuture,
    timezone,
    getCurrentMonthFromVisibleDate: (visibleDate, prevMonth) => {
      if (adapter.isSameMonth(visibleDate, prevMonth)) {
        return prevMonth;
      }
      return adapter.startOfMonth(visibleDate);
    }
  });
  const minDateWithDisabled = disabled && value || minDate;
  const maxDateWithDisabled = disabled && value || maxDate;
  const gridLabelId = `${id}-grid-label`;
  const hasFocus = focusedView !== null;
  const CalendarHeader = slots?.calendarHeader ?? PickersCalendarHeader;
  const calendarHeaderProps = useSlotProps({
    elementType: CalendarHeader,
    externalSlotProps: slotProps?.calendarHeader,
    additionalProps: {
      views,
      view,
      currentMonth: calendarState.currentMonth,
      onViewChange: setView,
      onMonthChange: (month) => setVisibleDate({
        target: month,
        reason: "header-navigation"
      }),
      minDate: minDateWithDisabled,
      maxDate: maxDateWithDisabled,
      disabled,
      disablePast,
      disableFuture,
      reduceAnimations,
      timezone,
      labelId: gridLabelId
    },
    ownerState
  });
  const handleDateMonthChange = useEventCallback((newDate) => {
    const startOfMonth = adapter.startOfMonth(newDate);
    const endOfMonth = adapter.endOfMonth(newDate);
    const closestEnabledDate = isDateDisabled(newDate) ? findClosestEnabledDate({
      adapter,
      date: newDate,
      minDate: adapter.isBefore(minDate, startOfMonth) ? startOfMonth : minDate,
      maxDate: adapter.isAfter(maxDate, endOfMonth) ? endOfMonth : maxDate,
      disablePast,
      disableFuture,
      isDateDisabled,
      timezone
    }) : newDate;
    if (closestEnabledDate) {
      setValueAndGoToNextView(closestEnabledDate, "finish");
      setVisibleDate({
        target: closestEnabledDate,
        reason: "cell-interaction"
      });
    } else {
      goToNextView();
      setVisibleDate({
        target: startOfMonth,
        reason: "cell-interaction"
      });
    }
  });
  const handleDateYearChange = useEventCallback((newDate) => {
    const startOfYear = adapter.startOfYear(newDate);
    const endOfYear = adapter.endOfYear(newDate);
    const closestEnabledDate = isDateDisabled(newDate) ? findClosestEnabledDate({
      adapter,
      date: newDate,
      minDate: adapter.isBefore(minDate, startOfYear) ? startOfYear : minDate,
      maxDate: adapter.isAfter(maxDate, endOfYear) ? endOfYear : maxDate,
      disablePast,
      disableFuture,
      isDateDisabled,
      timezone
    }) : newDate;
    if (closestEnabledDate) {
      setValueAndGoToNextView(closestEnabledDate, "finish");
      setVisibleDate({
        target: closestEnabledDate,
        reason: "cell-interaction"
      });
    } else {
      goToNextView();
      setVisibleDate({
        target: startOfYear,
        reason: "cell-interaction"
      });
    }
  });
  const handleSelectedDayChange = useEventCallback((day) => {
    if (day) {
      return handleValueChange(mergeDateAndTime(adapter, day, value ?? referenceDate), "finish", view);
    }
    return handleValueChange(day, "finish", view);
  });
  reactExports.useEffect(() => {
    if (adapter.isValid(value)) {
      setVisibleDate({
        target: value,
        reason: "controlled-value-change"
      });
    }
  }, [value]);
  const classes = useUtilityClasses$6(classesProp);
  const baseDateValidationProps = {
    disablePast,
    disableFuture,
    maxDate,
    minDate
  };
  const commonViewProps = {
    disableHighlightToday,
    readOnly,
    disabled,
    timezone,
    gridLabelId,
    slots,
    slotProps
  };
  const prevOpenViewRef = reactExports.useRef(view);
  reactExports.useEffect(() => {
    if (prevOpenViewRef.current === view) {
      return;
    }
    if (focusedView === prevOpenViewRef.current) {
      setFocusedView(view, true);
    }
    prevOpenViewRef.current = view;
  }, [focusedView, setFocusedView, view]);
  const selectedDays = reactExports.useMemo(() => [value], [value]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DateCalendarRoot, _extends({
    ref,
    className: clsx(classes.root, className),
    ownerState
  }, other, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(CalendarHeader, _extends({}, calendarHeaderProps, {
      slots,
      slotProps
    })), /* @__PURE__ */ jsxRuntimeExports.jsx(DateCalendarViewTransitionContainer, {
      reduceAnimations,
      className: classes.viewTransitionContainer,
      transKey: view,
      ownerState,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        children: [view === "year" && /* @__PURE__ */ jsxRuntimeExports.jsx(YearCalendar, _extends({}, baseDateValidationProps, commonViewProps, {
          value,
          onChange: handleDateYearChange,
          shouldDisableYear,
          hasFocus,
          onFocusedViewChange: (isViewFocused) => setFocusedView("year", isViewFocused),
          yearsOrder,
          yearsPerRow,
          referenceDate
        })), view === "month" && /* @__PURE__ */ jsxRuntimeExports.jsx(MonthCalendar, _extends({}, baseDateValidationProps, commonViewProps, {
          currentMonth: calendarState.currentMonth,
          hasFocus,
          className,
          value,
          onChange: handleDateMonthChange,
          shouldDisableMonth,
          onFocusedViewChange: (isViewFocused) => setFocusedView("month", isViewFocused),
          monthsPerRow,
          referenceDate
        })), view === "day" && /* @__PURE__ */ jsxRuntimeExports.jsx(DayCalendar, _extends({}, calendarState, baseDateValidationProps, commonViewProps, {
          onMonthSwitchingAnimationEnd,
          hasFocus,
          onFocusedDayChange: (focusedDate) => setVisibleDate({
            target: focusedDate,
            reason: "cell-interaction"
          }),
          reduceAnimations,
          selectedDays,
          onSelectedDaysChange: handleSelectedDayChange,
          shouldDisableDate,
          shouldDisableMonth,
          shouldDisableYear,
          onFocusedViewChange: (isViewFocused) => setFocusedView("day", isViewFocused),
          showDaysOutsideCurrentMonth,
          fixedWeekNumber,
          dayOfWeekFormatter,
          displayWeekNumber,
          loading,
          renderLoading
        }))]
      })
    })]
  }));
});
function getPickersToolbarUtilityClass(slot) {
  return generateUtilityClass("MuiPickersToolbar", slot);
}
const pickersToolbarClasses = generateUtilityClasses("MuiPickersToolbar", ["root", "title", "content"]);
function useToolbarOwnerState() {
  const {
    ownerState: pickerOwnerState
  } = usePickerPrivateContext();
  const isRtl = useRtl();
  return reactExports.useMemo(() => _extends({}, pickerOwnerState, {
    toolbarDirection: isRtl ? "rtl" : "ltr"
  }), [pickerOwnerState, isRtl]);
}
const _excluded$7 = ["children", "className", "classes", "toolbarTitle", "hidden", "titleId", "classes", "landscapeDirection"];
const useUtilityClasses$5 = (classes) => {
  const slots = {
    root: ["root"],
    title: ["title"],
    content: ["content"]
  };
  return composeClasses(slots, getPickersToolbarUtilityClass, classes);
};
const PickersToolbarRoot = styled("div", {
  name: "MuiPickersToolbar",
  slot: "Root"
})(({
  theme
}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  padding: theme.spacing(2, 3),
  variants: [{
    props: {
      pickerOrientation: "landscape"
    },
    style: {
      height: "auto",
      maxWidth: 160,
      padding: 16,
      justifyContent: "flex-start",
      flexWrap: "wrap"
    }
  }]
}));
const PickersToolbarContent = styled("div", {
  name: "MuiPickersToolbar",
  slot: "Content",
  shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== "landscapeDirection"
})({
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  flex: 1,
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
  variants: [{
    props: {
      pickerOrientation: "landscape"
    },
    style: {
      justifyContent: "flex-start",
      alignItems: "flex-start",
      flexDirection: "column"
    }
  }, {
    props: {
      pickerOrientation: "landscape",
      landscapeDirection: "row"
    },
    style: {
      flexDirection: "row"
    }
  }]
});
const PickersToolbar = /* @__PURE__ */ reactExports.forwardRef(function PickersToolbar2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersToolbar"
  });
  const {
    children,
    className,
    classes: classesProp,
    toolbarTitle,
    hidden,
    titleId,
    landscapeDirection
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$7);
  const ownerState = useToolbarOwnerState();
  const classes = useUtilityClasses$5(classesProp);
  if (hidden) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PickersToolbarRoot, _extends({
    ref,
    className: clsx(classes.root, className),
    ownerState
  }, other, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Typography, {
      color: "text.secondary",
      variant: "overline",
      id: titleId,
      className: classes.title,
      children: toolbarTitle
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarContent, {
      className: classes.content,
      ownerState,
      landscapeDirection,
      children
    })]
  }));
});
function getPickerPopperUtilityClass(slot) {
  return generateUtilityClass("MuiPickerPopper", slot);
}
generateUtilityClasses("MuiPickerPopper", ["root", "paper"]);
const _excluded$6 = ["PaperComponent", "ownerState", "children", "paperSlotProps", "paperClasses", "onPaperClick", "onPaperTouchStart"];
const useUtilityClasses$4 = (classes) => {
  const slots = {
    root: ["root"],
    paper: ["paper"]
  };
  return composeClasses(slots, getPickerPopperUtilityClass, classes);
};
const PickerPopperRoot = styled(Popper, {
  name: "MuiPickerPopper",
  slot: "Root"
})(({
  theme
}) => ({
  zIndex: theme.zIndex.modal
}));
const PickerPopperPaper = styled(Paper, {
  name: "MuiPickerPopper",
  slot: "Paper"
})({
  outline: 0,
  transformOrigin: "top center",
  variants: [{
    props: ({
      popperPlacement
    }) => (/* @__PURE__ */ new Set(["top", "top-start", "top-end"])).has(popperPlacement),
    style: {
      transformOrigin: "bottom center"
    }
  }]
});
function clickedRootScrollbar(event, doc) {
  return doc.documentElement.clientWidth < event.clientX || doc.documentElement.clientHeight < event.clientY;
}
function useClickAwayListener(active, onClickAway) {
  const movedRef = reactExports.useRef(false);
  const syntheticEventRef = reactExports.useRef(false);
  const nodeRef = reactExports.useRef(null);
  const activatedRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    if (!active) {
      return void 0;
    }
    function armClickAwayListener() {
      activatedRef.current = true;
    }
    document.addEventListener("mousedown", armClickAwayListener, true);
    document.addEventListener("touchstart", armClickAwayListener, true);
    return () => {
      document.removeEventListener("mousedown", armClickAwayListener, true);
      document.removeEventListener("touchstart", armClickAwayListener, true);
      activatedRef.current = false;
    };
  }, [active]);
  const handleClickAway = useEventCallback((event) => {
    if (!activatedRef.current) {
      return;
    }
    const insideReactTree = syntheticEventRef.current;
    syntheticEventRef.current = false;
    const doc = ownerDocument(nodeRef.current);
    if (!nodeRef.current || // is a TouchEvent?
    "clientX" in event && clickedRootScrollbar(event, doc)) {
      return;
    }
    if (movedRef.current) {
      movedRef.current = false;
      return;
    }
    let insideDOM;
    if (event.composedPath) {
      insideDOM = event.composedPath().indexOf(nodeRef.current) > -1;
    } else {
      insideDOM = !doc.documentElement.contains(event.target) || nodeRef.current.contains(event.target);
    }
    if (!insideDOM && !insideReactTree) {
      onClickAway(event);
    }
  });
  const handleSynthetic = (event) => {
    if (!event.defaultMuiPrevented) {
      syntheticEventRef.current = true;
    }
  };
  reactExports.useEffect(() => {
    if (active) {
      const doc = ownerDocument(nodeRef.current);
      const handleTouchMove = () => {
        movedRef.current = true;
      };
      doc.addEventListener("touchstart", handleClickAway);
      doc.addEventListener("touchmove", handleTouchMove);
      return () => {
        doc.removeEventListener("touchstart", handleClickAway);
        doc.removeEventListener("touchmove", handleTouchMove);
      };
    }
    return void 0;
  }, [active, handleClickAway]);
  reactExports.useEffect(() => {
    if (active) {
      const doc = ownerDocument(nodeRef.current);
      doc.addEventListener("click", handleClickAway);
      return () => {
        doc.removeEventListener("click", handleClickAway);
        syntheticEventRef.current = false;
      };
    }
    return void 0;
  }, [active, handleClickAway]);
  return [nodeRef, handleSynthetic, handleSynthetic];
}
const PickerPopperPaperWrapper = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const {
    PaperComponent,
    ownerState,
    children,
    paperSlotProps,
    paperClasses,
    onPaperClick,
    onPaperTouchStart
    // picks up the style props provided by `Transition`
    // https://mui.com/material-ui/transitions/#child-requirement
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$6);
  const paperProps = useSlotProps({
    elementType: PaperComponent,
    externalSlotProps: paperSlotProps,
    additionalProps: {
      tabIndex: -1,
      elevation: 8,
      ref
    },
    className: paperClasses,
    ownerState
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PaperComponent, _extends({}, other, paperProps, {
    onClick: (event) => {
      onPaperClick(event);
      paperProps.onClick?.(event);
    },
    onTouchStart: (event) => {
      onPaperTouchStart(event);
      paperProps.onTouchStart?.(event);
    },
    ownerState,
    children
  }));
});
function PickerPopper(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickerPopper"
  });
  const {
    children,
    placement = "bottom-start",
    slots,
    slotProps,
    classes: classesProp
  } = props;
  const {
    open,
    popupRef,
    reduceAnimations
  } = usePickerContext();
  const {
    ownerState: pickerOwnerState,
    rootRefObject
  } = usePickerPrivateContext();
  const {
    dismissViews,
    getCurrentViewMode,
    onPopperExited,
    triggerElement,
    viewContainerRole
  } = usePickerPrivateContext();
  reactExports.useEffect(() => {
    function handleKeyDown2(nativeEvent) {
      if (open && nativeEvent.key === "Escape") {
        dismissViews();
      }
    }
    document.addEventListener("keydown", handleKeyDown2);
    return () => {
      document.removeEventListener("keydown", handleKeyDown2);
    };
  }, [dismissViews, open]);
  const lastFocusedElementRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (viewContainerRole === "tooltip" || getCurrentViewMode() === "field") {
      return;
    }
    if (open) {
      lastFocusedElementRef.current = getActiveElement(rootRefObject.current);
    } else if (lastFocusedElementRef.current && lastFocusedElementRef.current instanceof HTMLElement) {
      setTimeout(() => {
        if (lastFocusedElementRef.current instanceof HTMLElement) {
          lastFocusedElementRef.current.focus();
        }
      });
    }
  }, [open, viewContainerRole, getCurrentViewMode, rootRefObject]);
  const classes = useUtilityClasses$4(classesProp);
  const handleClickAway = useEventCallback(() => {
    if (viewContainerRole === "tooltip") {
      executeInTheNextEventLoopTick(() => {
        if (rootRefObject.current?.contains(getActiveElement(rootRefObject.current)) || popupRef.current?.contains(getActiveElement(popupRef.current))) {
          return;
        }
        dismissViews();
      });
    } else {
      dismissViews();
    }
  });
  const [clickAwayRef, onPaperClick, onPaperTouchStart] = useClickAwayListener(open, handleClickAway);
  const paperRef = reactExports.useRef(null);
  const handleRef = useForkRef(paperRef, popupRef);
  const handlePaperRef = useForkRef(handleRef, clickAwayRef);
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      event.stopPropagation();
      dismissViews();
    }
  };
  const Transition2 = slots?.desktopTransition ?? reduceAnimations ? Fade : Grow;
  const FocusTrap$1 = slots?.desktopTrapFocus ?? FocusTrap;
  const Paper2 = slots?.desktopPaper ?? PickerPopperPaper;
  const Popper2 = slots?.popper ?? PickerPopperRoot;
  const popperProps = useSlotProps({
    elementType: Popper2,
    externalSlotProps: slotProps?.popper,
    additionalProps: {
      transition: true,
      role: viewContainerRole == null ? void 0 : viewContainerRole,
      open,
      placement,
      anchorEl: triggerElement,
      onKeyDown: handleKeyDown
    },
    className: classes.root,
    ownerState: pickerOwnerState
  });
  const ownerState = reactExports.useMemo(() => _extends({}, pickerOwnerState, {
    popperPlacement: popperProps.placement
  }), [pickerOwnerState, popperProps.placement]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Popper2, _extends({}, popperProps, {
    children: ({
      TransitionProps
    }) => /* @__PURE__ */ jsxRuntimeExports.jsx(FocusTrap$1, _extends({
      open,
      disableAutoFocus: true,
      disableRestoreFocus: true,
      disableEnforceFocus: viewContainerRole === "tooltip",
      isEnabled: () => true
    }, slotProps?.desktopTrapFocus, {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Transition2, _extends({}, TransitionProps, slotProps?.desktopTransition, {
        onExited: (event) => {
          onPopperExited?.();
          slotProps?.desktopTransition?.onExited?.(event);
          TransitionProps?.onExited?.();
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(PickerPopperPaperWrapper, {
          PaperComponent: Paper2,
          ownerState,
          ref: handlePaperRef,
          onPaperClick,
          onPaperTouchStart,
          paperClasses: classes.paper,
          paperSlotProps: slotProps?.desktopPaper,
          children
        })
      }))
    }))
  }));
}
function getOrientation() {
  if (typeof window === "undefined") {
    return "portrait";
  }
  if (window.screen && window.screen.orientation && window.screen.orientation.angle) {
    return Math.abs(window.screen.orientation.angle) === 90 ? "landscape" : "portrait";
  }
  if (window.orientation) {
    return Math.abs(Number(window.orientation)) === 90 ? "landscape" : "portrait";
  }
  return "portrait";
}
function useOrientation(views, customOrientation) {
  const [orientation, setOrientation] = reactExports.useState(getOrientation);
  useEnhancedEffect(() => {
    const eventHandler = () => {
      setOrientation(getOrientation());
    };
    window.addEventListener("orientationchange", eventHandler);
    return () => {
      window.removeEventListener("orientationchange", eventHandler);
    };
  }, []);
  if (arrayIncludes(views, ["hours", "minutes", "seconds"])) {
    return "portrait";
  }
  return customOrientation ?? orientation;
}
function useValueAndOpenStates(parameters) {
  const {
    props,
    valueManager,
    validator
  } = parameters;
  const {
    value: valueProp,
    defaultValue: defaultValueProp,
    onChange,
    referenceDate,
    timezone: timezoneProp,
    onAccept,
    closeOnSelect,
    open: openProp,
    onOpen,
    onClose
  } = props;
  const {
    current: defaultValue
  } = reactExports.useRef(defaultValueProp);
  const {
    current: isValueControlled
  } = reactExports.useRef(valueProp !== void 0);
  const {
    current: isOpenControlled
  } = reactExports.useRef(openProp !== void 0);
  const adapter = usePickerAdapter();
  const {
    timezone,
    value,
    handleValueChange
  } = useControlledValue({
    name: "a picker component",
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    referenceDate,
    onChange,
    valueManager
  });
  const [state, setState] = reactExports.useState(() => ({
    open: false,
    lastExternalValue: value,
    clockShallowValue: void 0,
    lastCommittedValue: value,
    hasBeenModifiedSinceMount: false
  }));
  const {
    getValidationErrorForNewValue
  } = useValidation({
    props,
    validator,
    timezone,
    value,
    onError: props.onError
  });
  const setOpen = useEventCallback((action) => {
    const newOpen = typeof action === "function" ? action(state.open) : action;
    if (!isOpenControlled) {
      setState((prevState) => _extends({}, prevState, {
        open: newOpen
      }));
    }
    if (newOpen && onOpen) {
      onOpen();
    }
    if (!newOpen) {
      onClose?.();
    }
  });
  const setValue = useEventCallback((newValue, options) => {
    const {
      changeImportance = "accept",
      skipPublicationIfPristine = false,
      validationError,
      shortcut,
      source,
      shouldClose = changeImportance === "accept"
    } = options ?? {};
    let shouldFireOnChange;
    let shouldFireOnAccept;
    if (!skipPublicationIfPristine && !isValueControlled && !state.hasBeenModifiedSinceMount) {
      shouldFireOnChange = true;
      shouldFireOnAccept = changeImportance === "accept";
    } else {
      shouldFireOnChange = !valueManager.areValuesEqual(adapter, newValue, value);
      shouldFireOnAccept = changeImportance === "accept" && !valueManager.areValuesEqual(adapter, newValue, state.lastCommittedValue);
    }
    setState((prevState) => _extends({}, prevState, {
      // We reset the shallow value whenever we fire onChange.
      clockShallowValue: shouldFireOnChange ? void 0 : prevState.clockShallowValue,
      lastCommittedValue: shouldFireOnAccept ? newValue : prevState.lastCommittedValue,
      hasBeenModifiedSinceMount: true
    }));
    let cachedContext = null;
    const getContext = () => {
      if (!cachedContext) {
        let inferredSource;
        if (source) {
          inferredSource = source;
        } else if (shortcut) {
          inferredSource = "view";
        } else {
          inferredSource = "unknown";
        }
        cachedContext = {
          validationError: validationError == null ? getValidationErrorForNewValue(newValue) : validationError,
          source: inferredSource
        };
        if (shortcut) {
          cachedContext.shortcut = shortcut;
        }
      }
      return cachedContext;
    };
    if (shouldFireOnChange) {
      handleValueChange(newValue, getContext());
    }
    if (shouldFireOnAccept && onAccept) {
      onAccept(newValue, getContext());
    }
    if (shouldClose) {
      setOpen(false);
    }
  });
  if (value !== state.lastExternalValue) {
    setState((prevState) => _extends({}, prevState, {
      lastExternalValue: value,
      clockShallowValue: void 0,
      hasBeenModifiedSinceMount: true
    }));
  }
  const setValueFromView = useEventCallback((newValue, selectionState = "partial") => {
    if (selectionState === "shallow") {
      setState((prev) => _extends({}, prev, {
        clockShallowValue: newValue,
        hasBeenModifiedSinceMount: true
      }));
      return;
    }
    setValue(newValue, {
      changeImportance: selectionState === "finish" && closeOnSelect ? "accept" : "set",
      source: "view"
    });
  });
  reactExports.useEffect(() => {
    if (isOpenControlled) {
      if (openProp === void 0) {
        throw new Error("You must not mix controlling and uncontrolled mode for `open` prop");
      }
      setState((prevState) => _extends({}, prevState, {
        open: openProp
      }));
    }
  }, [isOpenControlled, openProp]);
  const viewValue = reactExports.useMemo(() => valueManager.cleanValue(adapter, state.clockShallowValue === void 0 ? value : state.clockShallowValue), [adapter, valueManager, state.clockShallowValue, value]);
  return {
    timezone,
    state,
    setValue,
    setValueFromView,
    setOpen,
    value,
    viewValue
  };
}
const _excluded$5 = ["className", "sx"];
const usePicker = ({
  ref,
  props,
  valueManager,
  valueType,
  variant,
  validator,
  onPopperExited,
  autoFocusView,
  rendererInterceptor: RendererInterceptor,
  localeText,
  viewContainerRole,
  getStepNavigation
}) => {
  const {
    // View props
    views,
    view: viewProp,
    openTo,
    onViewChange,
    viewRenderers,
    reduceAnimations: reduceAnimationsProp,
    orientation: orientationProp,
    disableOpenPicker,
    closeOnSelect,
    // Form props
    disabled,
    readOnly,
    // Field props
    formatDensity,
    enableAccessibleFieldDOMStructure,
    selectedSections,
    onSelectedSectionsChange,
    format,
    label,
    // Other props
    autoFocus,
    name
  } = props;
  const {
    className,
    sx
  } = props, propsToForwardToView = _objectWithoutPropertiesLoose(props, _excluded$5);
  const labelId = useId();
  const adapter = usePickerAdapter();
  const reduceAnimations = useReduceAnimations(reduceAnimationsProp);
  const orientation = useOrientation(views, orientationProp);
  const {
    current: initialView
  } = reactExports.useRef(openTo ?? null);
  const [triggerElement, triggerRef] = reactExports.useState(null);
  const popupRef = reactExports.useRef(null);
  const fieldRef = reactExports.useRef(null);
  const rootRefObject = reactExports.useRef(null);
  const rootRef = useForkRef(ref, rootRefObject);
  const {
    timezone,
    state,
    setOpen,
    setValue,
    setValueFromView,
    value,
    viewValue
  } = useValueAndOpenStates({
    props,
    valueManager,
    validator
  });
  const {
    view,
    setView,
    defaultView,
    focusedView,
    setFocusedView,
    setValueAndGoToNextView,
    goToNextStep,
    hasNextStep,
    hasSeveralSteps
  } = useViews({
    view: viewProp,
    views,
    openTo,
    onChange: setValueFromView,
    onViewChange,
    autoFocus: autoFocusView,
    getStepNavigation
  });
  const clearValue = useEventCallback(() => setValue(valueManager.emptyValue, {
    source: "view"
  }));
  const setValueToToday = useEventCallback(() => setValue(valueManager.getTodayValue(adapter, timezone, valueType), {
    source: "view"
  }));
  const acceptValueChanges = useEventCallback(() => setValue(value, {
    source: "view"
  }));
  const cancelValueChanges = useEventCallback(() => setValue(state.lastCommittedValue, {
    skipPublicationIfPristine: true,
    source: "view"
  }));
  const dismissViews = useEventCallback(() => {
    setValue(value, {
      skipPublicationIfPristine: true,
      source: "view"
    });
  });
  const {
    hasUIView,
    viewModeLookup,
    timeViewsCount
  } = reactExports.useMemo(() => views.reduce((acc, viewForReduce) => {
    const viewMode = viewRenderers[viewForReduce] == null ? "field" : "UI";
    acc.viewModeLookup[viewForReduce] = viewMode;
    if (viewMode === "UI") {
      acc.hasUIView = true;
      if (isTimeView(viewForReduce)) {
        acc.timeViewsCount += 1;
      }
    }
    return acc;
  }, {
    hasUIView: false,
    viewModeLookup: {},
    timeViewsCount: 0
  }), [viewRenderers, views]);
  const currentViewMode = viewModeLookup[view];
  const getCurrentViewMode = useEventCallback(() => currentViewMode);
  const [popperView, setPopperView] = reactExports.useState(currentViewMode === "UI" ? view : null);
  if (popperView !== view && viewModeLookup[view] === "UI") {
    setPopperView(view);
  }
  useEnhancedEffect(() => {
    if (currentViewMode === "field" && state.open) {
      setOpen(false);
      setTimeout(() => {
        fieldRef?.current?.setSelectedSections(view);
        fieldRef?.current?.focusField(view);
      });
    }
  }, [view]);
  useEnhancedEffect(() => {
    if (!state.open) {
      return;
    }
    let newView = view;
    if (currentViewMode === "field" && popperView != null) {
      newView = popperView;
    }
    if (newView !== defaultView && viewModeLookup[newView] === "UI" && viewModeLookup[defaultView] === "UI") {
      newView = defaultView;
    }
    if (newView !== view) {
      setView(newView);
    }
    setFocusedView(newView, true);
  }, [state.open]);
  const ownerState = reactExports.useMemo(() => ({
    isPickerValueEmpty: valueManager.areValuesEqual(adapter, value, valueManager.emptyValue),
    isPickerOpen: state.open,
    isPickerDisabled: props.disabled ?? false,
    isPickerReadOnly: props.readOnly ?? false,
    pickerOrientation: orientation,
    pickerVariant: variant
  }), [adapter, valueManager, value, state.open, orientation, variant, props.disabled, props.readOnly]);
  const triggerStatus = reactExports.useMemo(() => {
    if (disableOpenPicker || !hasUIView) {
      return "hidden";
    }
    if (disabled || readOnly) {
      return "disabled";
    }
    return "enabled";
  }, [disableOpenPicker, hasUIView, disabled, readOnly]);
  const wrappedGoToNextStep = useEventCallback(goToNextStep);
  const defaultActionBarActions = reactExports.useMemo(() => {
    if (closeOnSelect && !hasSeveralSteps) {
      return [];
    }
    return ["cancel", "nextOrAccept"];
  }, [closeOnSelect, hasSeveralSteps]);
  const actionsContextValue = reactExports.useMemo(() => ({
    setValue,
    setOpen,
    clearValue,
    setValueToToday,
    acceptValueChanges,
    cancelValueChanges,
    setView,
    goToNextStep: wrappedGoToNextStep
  }), [setValue, setOpen, clearValue, setValueToToday, acceptValueChanges, cancelValueChanges, setView, wrappedGoToNextStep]);
  const contextValue = reactExports.useMemo(() => _extends({}, actionsContextValue, {
    value,
    timezone,
    open: state.open,
    views,
    view: popperView,
    initialView,
    disabled: disabled ?? false,
    readOnly: readOnly ?? false,
    autoFocus: autoFocus ?? false,
    variant,
    orientation,
    popupRef,
    reduceAnimations,
    triggerRef,
    triggerStatus,
    hasNextStep,
    fieldFormat: format ?? "",
    name,
    label,
    rootSx: sx,
    rootRef,
    rootClassName: className
  }), [actionsContextValue, value, rootRef, variant, orientation, reduceAnimations, disabled, readOnly, format, className, name, label, sx, triggerStatus, hasNextStep, timezone, state.open, popperView, views, initialView, autoFocus]);
  const privateContextValue = reactExports.useMemo(() => ({
    dismissViews,
    ownerState,
    hasUIView,
    getCurrentViewMode,
    rootRefObject,
    labelId,
    triggerElement,
    viewContainerRole,
    defaultActionBarActions,
    onPopperExited
  }), [dismissViews, ownerState, hasUIView, getCurrentViewMode, labelId, triggerElement, viewContainerRole, defaultActionBarActions, onPopperExited]);
  const fieldPrivateContextValue = reactExports.useMemo(() => ({
    formatDensity,
    enableAccessibleFieldDOMStructure,
    selectedSections,
    onSelectedSectionsChange,
    fieldRef
  }), [formatDensity, enableAccessibleFieldDOMStructure, selectedSections, onSelectedSectionsChange, fieldRef]);
  const isValidContextValue = (testedValue) => {
    const error = validator({
      adapter,
      value: testedValue,
      timezone,
      props
    });
    return !valueManager.hasError(error);
  };
  const renderCurrentView = () => {
    if (popperView == null) {
      return null;
    }
    const renderer = viewRenderers[popperView];
    if (renderer == null) {
      return null;
    }
    const rendererProps = _extends({}, propsToForwardToView, {
      views,
      timezone,
      value: viewValue,
      onChange: setValueAndGoToNextView,
      view: popperView,
      onViewChange: setView,
      showViewSwitcher: timeViewsCount > 1,
      timeViewsCount
    }, viewContainerRole === "tooltip" ? {
      focusedView: null,
      onFocusedViewChange: () => {
      }
    } : {
      focusedView,
      onFocusedViewChange: setFocusedView
    });
    if (RendererInterceptor) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(RendererInterceptor, {
        viewRenderers,
        popperView,
        rendererProps
      });
    }
    return renderer(rendererProps);
  };
  return {
    providerProps: {
      localeText,
      contextValue,
      privateContextValue,
      actionsContextValue,
      fieldPrivateContextValue,
      isValidContextValue
    },
    renderCurrentView,
    ownerState
  };
};
function getPickersLayoutUtilityClass(slot) {
  return generateUtilityClass("MuiPickersLayout", slot);
}
const pickersLayoutClasses = generateUtilityClasses("MuiPickersLayout", ["root", "landscape", "contentWrapper", "toolbar", "actionBar", "tabs", "shortcuts"]);
const _excluded$4 = ["actions"];
const PickersActionBarRoot = styled(DialogActions, {
  name: "MuiPickersLayout",
  slot: "ActionBar"
})({});
function PickersActionBarComponent(props) {
  const {
    actions
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$4);
  const translations = usePickerTranslations();
  const {
    clearValue,
    setValueToToday,
    acceptValueChanges,
    cancelValueChanges,
    goToNextStep,
    hasNextStep
  } = usePickerContext();
  if (actions == null || actions.length === 0) {
    return null;
  }
  const buttons = actions?.map((actionType) => {
    switch (actionType) {
      case "clear":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Button, {
          onClick: clearValue,
          children: translations.clearButtonLabel
        }, actionType);
      case "cancel":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Button, {
          onClick: cancelValueChanges,
          children: translations.cancelButtonLabel
        }, actionType);
      case "accept":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Button, {
          onClick: acceptValueChanges,
          children: translations.okButtonLabel
        }, actionType);
      case "today":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Button, {
          onClick: setValueToToday,
          children: translations.todayButtonLabel
        }, actionType);
      case "next":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Button, {
          onClick: goToNextStep,
          children: translations.nextStepButtonLabel
        }, actionType);
      case "nextOrAccept":
        if (hasNextStep) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Button, {
            onClick: goToNextStep,
            children: translations.nextStepButtonLabel
          }, actionType);
        }
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Button, {
          onClick: acceptValueChanges,
          children: translations.okButtonLabel
        }, actionType);
      default:
        return null;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PickersActionBarRoot, _extends({}, other, {
    children: buttons
  }));
}
const PickersActionBar = /* @__PURE__ */ reactExports.memo(PickersActionBarComponent);
function getListItemUtilityClass(slot) {
  return generateUtilityClass("MuiListItem", slot);
}
generateUtilityClasses("MuiListItem", ["root", "container", "dense", "alignItemsFlexStart", "divider", "gutters", "padding", "secondaryAction"]);
function getListItemSecondaryActionClassesUtilityClass(slot) {
  return generateUtilityClass("MuiListItemSecondaryAction", slot);
}
generateUtilityClasses("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const useUtilityClasses$3 = (ownerState) => {
  const {
    disableGutters,
    classes
  } = ownerState;
  const slots = {
    root: ["root", disableGutters && "disableGutters"]
  };
  return composeClasses(slots, getListItemSecondaryActionClassesUtilityClass, classes);
};
const ListItemSecondaryActionRoot = styled("div", {
  name: "MuiListItemSecondaryAction",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.disableGutters && styles.disableGutters];
  }
})({
  position: "absolute",
  right: 16,
  top: "50%",
  transform: "translateY(-50%)",
  variants: [{
    props: ({
      ownerState
    }) => ownerState.disableGutters,
    style: {
      right: 0
    }
  }]
});
const ListItemSecondaryAction = /* @__PURE__ */ reactExports.forwardRef(function ListItemSecondaryAction2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiListItemSecondaryAction"
  });
  const {
    className,
    ...other
  } = props;
  const context = reactExports.useContext(ListContext);
  const ownerState = {
    ...props,
    disableGutters: context.disableGutters
  };
  const classes = useUtilityClasses$3(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ListItemSecondaryActionRoot, {
    className: clsx(classes.root, className),
    ownerState,
    ref,
    ...other
  });
});
ListItemSecondaryAction.muiName = "ListItemSecondaryAction";
const overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, ownerState.dense && styles.dense, ownerState.alignItems === "flex-start" && styles.alignItemsFlexStart, ownerState.divider && styles.divider, !ownerState.disableGutters && styles.gutters, !ownerState.disablePadding && styles.padding, ownerState.hasSecondaryAction && styles.secondaryAction];
};
const useUtilityClasses$2 = (ownerState) => {
  const {
    alignItems,
    classes,
    dense,
    disableGutters,
    disablePadding,
    divider,
    hasSecondaryAction
  } = ownerState;
  const slots = {
    root: ["root", dense && "dense", !disableGutters && "gutters", !disablePadding && "padding", divider && "divider", alignItems === "flex-start" && "alignItemsFlexStart", hasSecondaryAction && "secondaryAction"],
    container: ["container"],
    secondaryAction: ["secondaryAction"]
  };
  return composeClasses(slots, getListItemUtilityClass, classes);
};
const ListItemRoot = styled("div", {
  name: "MuiListItem",
  slot: "Root",
  overridesResolver
})(memoTheme(({
  theme
}) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  width: "100%",
  boxSizing: "border-box",
  textAlign: "left",
  variants: [{
    props: ({
      ownerState
    }) => !ownerState.disablePadding,
    style: {
      paddingTop: 8,
      paddingBottom: 8
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.disablePadding && ownerState.dense,
    style: {
      paddingTop: 4,
      paddingBottom: 4
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.disablePadding && !ownerState.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.disablePadding && !!ownerState.secondaryAction,
    style: {
      // Add some space to avoid collision as `ListItemSecondaryAction`
      // is absolutely positioned.
      paddingRight: 48
    }
  }, {
    props: ({
      ownerState
    }) => !!ownerState.secondaryAction,
    style: {
      [`& > .${listItemButtonClasses.root}`]: {
        paddingRight: 48
      }
    }
  }, {
    props: {
      alignItems: "flex-start"
    },
    style: {
      alignItems: "flex-start"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.divider,
    style: {
      borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
      backgroundClip: "padding-box"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.button,
    style: {
      transition: theme.transitions.create("background-color", {
        duration: theme.transitions.duration.shortest
      }),
      "&:hover": {
        textDecoration: "none",
        backgroundColor: (theme.vars || theme).palette.action.hover,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.hasSecondaryAction,
    style: {
      // Add some space to avoid collision as `ListItemSecondaryAction`
      // is absolutely positioned.
      paddingRight: 48
    }
  }]
})));
const ListItemContainer = styled("li", {
  name: "MuiListItem",
  slot: "Container"
})({
  position: "relative"
});
const ListItem = /* @__PURE__ */ reactExports.forwardRef(function ListItem2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiListItem"
  });
  const {
    alignItems = "center",
    children: childrenProp,
    className,
    component: componentProp,
    components = {},
    componentsProps = {},
    ContainerComponent = "li",
    ContainerProps: {
      className: ContainerClassName,
      ...ContainerProps
    } = {},
    dense = false,
    disableGutters = false,
    disablePadding = false,
    divider = false,
    secondaryAction,
    slotProps = {},
    slots = {},
    ...other
  } = props;
  const context = reactExports.useContext(ListContext);
  const childContext = reactExports.useMemo(() => ({
    dense: dense || context.dense || false,
    alignItems,
    disableGutters
  }), [alignItems, context.dense, dense, disableGutters]);
  const listItemRef = reactExports.useRef(null);
  const children = reactExports.Children.toArray(childrenProp);
  const hasSecondaryAction = children.length && isMuiElement(children[children.length - 1], ["ListItemSecondaryAction"]);
  const ownerState = {
    ...props,
    alignItems,
    dense: childContext.dense,
    disableGutters,
    disablePadding,
    divider,
    hasSecondaryAction
  };
  const classes = useUtilityClasses$2(ownerState);
  const handleRef = useForkRef(listItemRef, ref);
  const externalForwardedProps = {
    slots,
    slotProps
  };
  const [SecondaryActionSlot, secondaryActionSlotProps] = useSlot("secondaryAction", {
    elementType: ListItemSecondaryAction,
    externalForwardedProps,
    ownerState,
    className: classes.secondaryAction
  });
  const Root = slots.root || components.Root || ListItemRoot;
  const rootProps = slotProps.root || componentsProps.root || {};
  const componentProps = {
    className: clsx(classes.root, rootProps.className, className),
    ...other
  };
  let Component = componentProp || "li";
  if (hasSecondaryAction) {
    Component = !componentProps.component && !componentProp ? "div" : Component;
    if (ContainerComponent === "li") {
      if (Component === "li") {
        Component = "div";
      } else if (componentProps.component === "li") {
        componentProps.component = "div";
      }
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ListContext.Provider, {
      value: childContext,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ListItemContainer, {
        as: ContainerComponent,
        className: clsx(classes.container, ContainerClassName),
        ref: handleRef,
        ownerState,
        ...ContainerProps,
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Root, {
          ...rootProps,
          ...!isHostComponent(Root) && {
            as: Component,
            ownerState: {
              ...ownerState,
              ...rootProps.ownerState
            }
          },
          ...componentProps,
          children
        }), children.pop()]
      })
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ListContext.Provider, {
    value: childContext,
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Root, {
      ...rootProps,
      as: Component,
      ref: handleRef,
      ...!isHostComponent(Root) && {
        ownerState: {
          ...ownerState,
          ...rootProps.ownerState
        }
      },
      ...componentProps,
      children: [children, secondaryAction && /* @__PURE__ */ jsxRuntimeExports.jsx(SecondaryActionSlot, {
        ...secondaryActionSlotProps,
        children: secondaryAction
      })]
    })
  });
});
const _excluded$3 = ["items", "changeImportance"], _excluded2$2 = ["getValue"];
const PickersShortcutsRoot = styled(List, {
  name: "MuiPickersLayout",
  slot: "Shortcuts"
})({});
function PickersShortcuts(props) {
  const {
    items,
    changeImportance = "accept"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$3);
  const {
    setValue
  } = usePickerActionsContext();
  const isValidValue = useIsValidValue();
  if (items == null || items.length === 0) {
    return null;
  }
  const resolvedItems = items.map((_ref) => {
    let {
      getValue
    } = _ref, item = _objectWithoutPropertiesLoose(_ref, _excluded2$2);
    const newValue = getValue({
      isValid: isValidValue
    });
    return _extends({}, item, {
      label: item.label,
      onClick: () => {
        setValue(newValue, {
          changeImportance,
          shortcut: item,
          source: "view"
        });
      },
      disabled: !isValidValue(newValue)
    });
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PickersShortcutsRoot, _extends({
    dense: true,
    sx: [{
      maxHeight: VIEW_HEIGHT,
      maxWidth: 200,
      overflow: "auto"
    }, ...Array.isArray(other.sx) ? other.sx : [other.sx]]
  }, other, {
    children: resolvedItems.map((item) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ListItem, {
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, _extends({}, item))
      }, item.id ?? item.label);
    })
  }));
}
const _excluded$2 = ["ownerState"];
function toolbarHasView(toolbarProps) {
  return toolbarProps.view !== null;
}
const useUtilityClasses$1 = (classes, ownerState) => {
  const {
    pickerOrientation
  } = ownerState;
  const slots = {
    root: ["root", pickerOrientation === "landscape" && "landscape"],
    contentWrapper: ["contentWrapper"],
    toolbar: ["toolbar"],
    actionBar: ["actionBar"],
    tabs: ["tabs"],
    landscape: ["landscape"],
    shortcuts: ["shortcuts"]
  };
  return composeClasses(slots, getPickersLayoutUtilityClass, classes);
};
const usePickerLayout = (props) => {
  const {
    ownerState: pickerOwnerState,
    defaultActionBarActions
  } = usePickerPrivateContext();
  const {
    view
  } = usePickerContext();
  const isRtl = useRtl();
  const {
    children,
    slots,
    slotProps,
    classes: classesProp
  } = props;
  const ownerState = reactExports.useMemo(() => _extends({}, pickerOwnerState, {
    layoutDirection: isRtl ? "rtl" : "ltr",
    hasShortcuts: false
  }), [pickerOwnerState, isRtl]);
  const classes = useUtilityClasses$1(classesProp, ownerState);
  const ActionBar = slots?.actionBar ?? PickersActionBar;
  const _useSlotProps = useSlotProps({
    elementType: ActionBar,
    externalSlotProps: slotProps?.actionBar,
    additionalProps: {
      actions: defaultActionBarActions
    },
    className: classes.actionBar,
    ownerState
  }), actionBarProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded$2);
  const actionBar = /* @__PURE__ */ jsxRuntimeExports.jsx(ActionBar, _extends({}, actionBarProps));
  const Toolbar = slots?.toolbar;
  const toolbarProps = useSlotProps({
    elementType: Toolbar,
    externalSlotProps: slotProps?.toolbar,
    className: classes.toolbar,
    ownerState
  });
  const toolbar = toolbarHasView(toolbarProps) && !!Toolbar ? /* @__PURE__ */ jsxRuntimeExports.jsx(Toolbar, _extends({}, toolbarProps)) : null;
  const content = children;
  const Tabs = slots?.tabs;
  const tabs = view && Tabs ? /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs, _extends({
    className: classes.tabs
  }, slotProps?.tabs)) : null;
  const Shortcuts = slots?.shortcuts ?? PickersShortcuts;
  const shortcutsProps = useSlotProps({
    elementType: Shortcuts,
    externalSlotProps: slotProps?.shortcuts,
    className: classes.shortcuts,
    ownerState
  });
  const hasShortcuts = Array.isArray(shortcutsProps?.items) && shortcutsProps.items.length > 0;
  const shortcuts = view && !!Shortcuts ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shortcuts, _extends({}, shortcutsProps)) : null;
  return {
    toolbar,
    content,
    tabs,
    actionBar,
    shortcuts,
    ownerState: _extends({}, ownerState, {
      hasShortcuts
    })
  };
};
const useUtilityClasses = (classes, ownerState) => {
  const {
    pickerOrientation
  } = ownerState;
  const slots = {
    root: ["root", pickerOrientation === "landscape" && "landscape"],
    contentWrapper: ["contentWrapper"]
  };
  return composeClasses(slots, getPickersLayoutUtilityClass, classes);
};
const PickersLayoutRoot = styled("div", {
  name: "MuiPickersLayout",
  slot: "Root"
})({
  display: "grid",
  gridAutoColumns: "max-content auto max-content",
  gridAutoRows: "max-content auto max-content",
  [`& .${pickersLayoutClasses.actionBar}`]: {
    gridColumn: "1 / 4",
    gridRow: 3
  },
  variants: [{
    props: {
      pickerOrientation: "landscape",
      hasShortcuts: false
    },
    style: {
      [`& .${pickersLayoutClasses.toolbar}`]: {
        gridColumn: 1,
        gridRow: "1 / 3"
      }
    }
  }, {
    props: {
      pickerOrientation: "landscape",
      hasShortcuts: true
    },
    style: {
      [`& .${pickersLayoutClasses.toolbar}`]: {
        gridColumn: "2 / 4",
        gridRow: 1,
        maxWidth: "max-content"
      },
      [`& .${pickersLayoutClasses.shortcuts}`]: {
        gridColumn: 1,
        gridRow: 2
      }
    }
  }, {
    props: {
      pickerOrientation: "portrait"
    },
    style: {
      [`& .${pickersLayoutClasses.toolbar}`]: {
        gridColumn: "2 / 4",
        gridRow: 1
      },
      [`& .${pickersLayoutClasses.shortcuts}`]: {
        gridColumn: 1,
        gridRow: "2 / 3"
      }
    }
  }, {
    props: {
      hasShortcuts: true,
      layoutDirection: "rtl"
    },
    style: {
      [`& .${pickersLayoutClasses.shortcuts}`]: {
        gridColumn: 4
      }
    }
  }]
});
const PickersLayoutContentWrapper = styled("div", {
  name: "MuiPickersLayout",
  slot: "ContentWrapper"
})({
  gridColumn: "2 / 4",
  gridRow: 2,
  display: "flex",
  flexDirection: "column"
});
const PickersLayout = /* @__PURE__ */ reactExports.forwardRef(function PickersLayout2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersLayout"
  });
  const {
    toolbar,
    content,
    tabs,
    actionBar,
    shortcuts,
    ownerState
  } = usePickerLayout(props);
  const {
    orientation,
    variant
  } = usePickerContext();
  const {
    sx,
    className,
    classes: classesProp
  } = props;
  const classes = useUtilityClasses(classesProp, ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PickersLayoutRoot, {
    ref,
    sx,
    className: clsx(classes.root, className),
    ownerState,
    children: [orientation === "landscape" ? shortcuts : toolbar, orientation === "landscape" ? toolbar : shortcuts, /* @__PURE__ */ jsxRuntimeExports.jsx(PickersLayoutContentWrapper, {
      className: classes.contentWrapper,
      ownerState,
      children: variant === "desktop" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
        children: [content, tabs]
      }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
        children: [tabs, content]
      })
    }), actionBar]
  });
});
function createNonRangePickerStepNavigation(parameters) {
  const {
    steps
  } = parameters;
  return createStepNavigation({
    steps,
    isViewMatchingStep: (view, step) => {
      return step.views == null || step.views.includes(view);
    },
    onStepChange: ({
      step,
      defaultView,
      setView,
      view,
      views
    }) => {
      const targetView = step.views == null ? defaultView : step.views.find((viewBis) => views.includes(viewBis));
      if (targetView !== view) {
        setView(targetView);
      }
    }
  });
}
const _excluded$1 = ["props", "steps"], _excluded2$1 = ["ownerState"];
const useDesktopPicker = (_ref) => {
  let {
    props,
    steps
  } = _ref, pickerParams = _objectWithoutPropertiesLoose(_ref, _excluded$1);
  const {
    slots,
    slotProps: innerSlotProps,
    label,
    inputRef,
    localeText
  } = props;
  const getStepNavigation = createNonRangePickerStepNavigation({
    steps
  });
  const {
    providerProps,
    renderCurrentView,
    ownerState
  } = usePicker(_extends({}, pickerParams, {
    props,
    localeText,
    autoFocusView: true,
    viewContainerRole: "dialog",
    variant: "desktop",
    getStepNavigation
  }));
  const labelId = providerProps.privateContextValue.labelId;
  const isToolbarHidden = innerSlotProps?.toolbar?.hidden ?? false;
  const Field = slots.field;
  const _useSlotProps = useSlotProps({
    elementType: Field,
    externalSlotProps: innerSlotProps?.field,
    additionalProps: _extends({}, isToolbarHidden && {
      id: labelId
    }),
    ownerState
  }), fieldProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded2$1);
  const Layout = slots.layout ?? PickersLayout;
  let labelledById = labelId;
  if (isToolbarHidden) {
    if (label) {
      labelledById = `${labelId}-label`;
    } else {
      labelledById = void 0;
    }
  }
  const slotProps = _extends({}, innerSlotProps, {
    toolbar: _extends({}, innerSlotProps?.toolbar, {
      titleId: labelId
    }),
    popper: _extends({
      "aria-labelledby": labelledById
    }, innerSlotProps?.popper)
  });
  const renderPicker = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(PickerProvider, _extends({}, providerProps, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Field, _extends({}, fieldProps, {
      slots: _extends({}, slots, fieldProps.slots),
      slotProps: _extends({}, slotProps, fieldProps.slotProps),
      inputRef
    })), /* @__PURE__ */ jsxRuntimeExports.jsx(PickerPopper, {
      slots,
      slotProps,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, _extends({}, slotProps?.layout, {
        slots,
        slotProps,
        children: renderCurrentView()
      }))
    })]
  }));
  return {
    renderPicker
  };
};
const renderDateViewCalendar = ({
  view,
  onViewChange,
  views,
  focusedView,
  onFocusedViewChange,
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minDate,
  maxDate,
  shouldDisableDate,
  shouldDisableMonth,
  shouldDisableYear,
  reduceAnimations,
  onMonthChange,
  monthsPerRow,
  onYearChange,
  yearsOrder,
  yearsPerRow,
  slots,
  slotProps,
  loading,
  renderLoading,
  disableHighlightToday,
  readOnly,
  disabled,
  showDaysOutsideCurrentMonth,
  dayOfWeekFormatter,
  sx,
  autoFocus,
  fixedWeekNumber,
  displayWeekNumber,
  timezone
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(DateCalendar, {
  view,
  onViewChange,
  views: views.filter(isDatePickerView),
  focusedView: focusedView && isDatePickerView(focusedView) ? focusedView : null,
  onFocusedViewChange,
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minDate,
  maxDate,
  shouldDisableDate,
  shouldDisableMonth,
  shouldDisableYear,
  reduceAnimations,
  onMonthChange,
  monthsPerRow,
  onYearChange,
  yearsOrder,
  yearsPerRow,
  slots,
  slotProps,
  loading,
  renderLoading,
  disableHighlightToday,
  readOnly,
  disabled,
  showDaysOutsideCurrentMonth,
  dayOfWeekFormatter,
  sx,
  autoFocus,
  fixedWeekNumber,
  displayWeekNumber,
  timezone
});
const PickersModalDialogRoot = styled(Dialog, {
  slot: "internal"
})({
  [`& .${dialogClasses.container}`]: {
    outline: 0
  },
  [`& .${dialogClasses.paper}`]: {
    outline: 0,
    minWidth: DIALOG_WIDTH
  }
});
const PickersModalDialogContent = styled(DialogContent, {
  slot: "internal"
})({
  "&:first-of-type": {
    padding: 0
  }
});
function PickersModalDialog(props) {
  const {
    children,
    slots,
    slotProps
  } = props;
  const {
    open
  } = usePickerContext();
  const {
    dismissViews,
    onPopperExited
  } = usePickerPrivateContext();
  const Dialog2 = slots?.dialog ?? PickersModalDialogRoot;
  const Transition2 = slots?.mobileTransition ?? Fade;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog2, _extends({
    open,
    onClose: () => {
      dismissViews();
      onPopperExited?.();
    }
  }, slotProps?.dialog, {
    TransitionComponent: Transition2,
    TransitionProps: slotProps?.mobileTransition,
    PaperComponent: slots?.mobilePaper,
    PaperProps: slotProps?.mobilePaper,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(PickersModalDialogContent, {
      children
    })
  }));
}
const _excluded = ["props", "steps"], _excluded2 = ["ownerState"];
const useMobilePicker = (_ref) => {
  let {
    props,
    steps
  } = _ref, pickerParams = _objectWithoutPropertiesLoose(_ref, _excluded);
  const {
    slots,
    slotProps: innerSlotProps,
    label,
    inputRef,
    localeText
  } = props;
  const getStepNavigation = createNonRangePickerStepNavigation({
    steps
  });
  const {
    providerProps,
    renderCurrentView,
    ownerState
  } = usePicker(_extends({}, pickerParams, {
    props,
    localeText,
    autoFocusView: true,
    viewContainerRole: "dialog",
    variant: "mobile",
    getStepNavigation
  }));
  const labelId = providerProps.privateContextValue.labelId;
  const isToolbarHidden = innerSlotProps?.toolbar?.hidden ?? false;
  const Field = slots.field;
  const _useSlotProps = useSlotProps({
    elementType: Field,
    externalSlotProps: innerSlotProps?.field,
    additionalProps: _extends({}, isToolbarHidden && {
      id: labelId
    }),
    ownerState
  }), fieldProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded2);
  const Layout = slots.layout ?? PickersLayout;
  let labelledById = labelId;
  if (isToolbarHidden) {
    if (label) {
      labelledById = `${labelId}-label`;
    } else {
      labelledById = void 0;
    }
  }
  const slotProps = _extends({}, innerSlotProps, {
    toolbar: _extends({}, innerSlotProps?.toolbar, {
      titleId: labelId
    }),
    mobilePaper: _extends({
      "aria-labelledby": labelledById
    }, innerSlotProps?.mobilePaper)
  });
  const renderPicker = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(PickerProvider, _extends({}, providerProps, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Field, _extends({}, fieldProps, {
      slots: _extends({}, slots, fieldProps.slots),
      slotProps: _extends({}, slotProps, fieldProps.slotProps),
      inputRef
    })), /* @__PURE__ */ jsxRuntimeExports.jsx(PickersModalDialog, {
      slots,
      slotProps,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, _extends({}, slotProps?.layout, {
        slots,
        slotProps,
        children: renderCurrentView()
      }))
    })]
  }));
  return {
    renderPicker
  };
};
export {
  VIEW_HEIGHT as $,
  useMeridiemMode as A,
  convertValueToMeridiem as B,
  CalendarIcon as C,
  DEFAULT_DESKTOP_MODE_MEDIA_QUERY as D,
  createIsAfterIgnoreDatePart as E,
  PickerViewRoot as F,
  PickersArrowSwitcher as G,
  DIGITAL_CLOCK_VIEW_HEIGHT as H,
  getFocusedListItemIndex as I,
  useDefaultDates as J,
  applyDefaultDate as K,
  singleItemFieldValueManager as L,
  MULTI_SECTION_CLOCK_SECTION_WIDTH as M,
  getPickersToolbarUtilityClass as N,
  isTimeView as O,
  PickerFieldUIContextProvider as P,
  isInternalTimeView as Q,
  isDatePickerView as R,
  SECTION_TYPE_GRANULARITY as S,
  resolveTimeFormat as T,
  DateRangeIcon as U,
  TimeIcon as V,
  pickersToolbarClasses as W,
  usePickerLayout as X,
  PickersLayoutRoot as Y,
  PickersLayoutContentWrapper as Z,
  pickersLayoutClasses as _,
  useDateManager as a,
  mergeSx as a0,
  DIALOG_WIDTH as a1,
  DATE_VIEWS as a2,
  EXPORTED_TIME_VIEWS as a3,
  ClockIcon as a4,
  arrayIncludes as a5,
  DateCalendar as a6,
  useField as b,
  useFieldTextFieldProps as c,
  PickerFieldUI as d,
  usePickerAdapter as e,
  usePickerContext as f,
  usePickerTranslations as g,
  useToolbarOwnerState as h,
  PickersToolbar as i,
  useApplyDefaultValuesToDateValidationProps as j,
  applyDefaultViewProps as k,
  renderDateViewCalendar as l,
  extractValidationProps as m,
  useDesktopPicker as n,
  refType as o,
  useMobilePicker as p,
  usePickerPrivateContext as q,
  resolveDateFormat as r,
  singleItemValueManager as s,
  formatMeridiem as t,
  useMediaQuery as u,
  validateDate as v,
  getTodayDate as w,
  useControlledValue as x,
  useNow as y,
  useViews as z
};
