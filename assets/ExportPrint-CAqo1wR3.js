import { r as reactExports, c_ as useLazyRef, aR as useEnhancedEffect, cl as _extends, j as jsxRuntimeExports, ck as _objectWithoutPropertiesLoose, aJ as useId, c$ as debounce, d0 as useForkRef } from "./index-B08HRm4A.js";
const reactMajor = parseInt(reactExports.version, 10);
const forwardRef = (render) => {
  if (reactMajor >= 19) {
    const Component = (props) => render(props, props.ref ?? null);
    Component.displayName = render.displayName ?? render.name;
    return Component;
  }
  return /* @__PURE__ */ reactExports.forwardRef(render);
};
const GridRootPropsContext = /* @__PURE__ */ reactExports.createContext(void 0);
const useGridRootProps = () => {
  const contextValue = reactExports.useContext(GridRootPropsContext);
  if (!contextValue) {
    throw new Error("MUI X: useGridRootProps should only be used inside the DataGrid, DataGridPro or DataGridPremium component.");
  }
  return contextValue;
};
const GridApiContext = /* @__PURE__ */ reactExports.createContext(void 0);
function useGridApiContext() {
  const apiRef = reactExports.useContext(GridApiContext);
  if (apiRef === void 0) {
    throw new Error(["MUI X: Could not find the Data Grid context.", "It looks like you rendered your component outside of a DataGrid, DataGridPro or DataGridPremium parent component.", "This can also happen if you are bundling multiple versions of the Data Grid."].join("\n"));
  }
  return apiRef;
}
const is = Object.is;
function fastObjectShallowCompare(a, b) {
  if (a === b) {
    return true;
  }
  if (!(a instanceof Object) || !(b instanceof Object)) {
    return false;
  }
  let aLength = 0;
  let bLength = 0;
  for (const key in a) {
    aLength += 1;
    if (!is(a[key], b[key])) {
      return false;
    }
    if (!(key in b)) {
      return false;
    }
  }
  for (const _ in b) {
    bLength += 1;
  }
  return aLength === bLength;
}
const defaultCompare = Object.is;
const objectShallowCompare = fastObjectShallowCompare;
const arrayShallowCompare = (a, b) => {
  if (a === b) {
    return true;
  }
  return a.length === b.length && a.every((v, i) => v === b[i]);
};
const argsEqual = (prev, curr) => {
  let fn = Object.is;
  if (curr instanceof Array) {
    fn = arrayShallowCompare;
  } else if (curr instanceof Object) {
    fn = objectShallowCompare;
  }
  return fn(prev, curr);
};
const createRefs = () => ({
  state: null,
  equals: null,
  selector: null,
  args: void 0,
  storeState: null
});
const EMPTY = [];
function useGridSelector(apiRef, selector, args = void 0, equals = defaultCompare) {
  if (!apiRef.current.state) ;
  const refs = useLazyRef(createRefs);
  const didInit = refs.current.selector !== null;
  const [state, setState] = reactExports.useState(
    // We don't use an initialization function to avoid allocations
    didInit ? null : selector(apiRef, args)
  );
  refs.current.state = state;
  if (!didInit) {
    refs.current.storeState = apiRef.current.store.state;
  }
  refs.current.equals = equals;
  refs.current.selector = selector;
  const prevArgs = refs.current.args;
  refs.current.args = args;
  if (didInit && !argsEqual(prevArgs, args)) {
    const newState = refs.current.selector(apiRef, refs.current.args);
    if (!refs.current.equals(refs.current.state, newState)) {
      refs.current.state = newState;
      setState(newState);
    }
    refs.current.storeState = apiRef.current.store.state;
  }
  const updateState = reactExports.useCallback(
    () => {
      const storeState = apiRef.current.store.state;
      if (refs.current.storeState !== storeState) {
        const newState = refs.current.selector(apiRef, refs.current.args);
        refs.current.storeState = storeState;
        if (!refs.current.equals(refs.current.state, newState)) {
          refs.current.state = newState;
          setState(newState);
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    EMPTY
  );
  useEnhancedEffect(() => {
    updateState();
    return apiRef.current.store.subscribe(updateState);
  }, EMPTY);
  return state;
}
var StrongRef = class {
  constructor(value) {
    this.value = value;
  }
  deref() {
    return this.value;
  }
};
var getWeakRef = () => typeof WeakRef === "undefined" ? StrongRef : WeakRef;
var Ref = /* @__PURE__ */ getWeakRef();
var UNTERMINATED = 0;
var TERMINATED = 1;
function createCacheNode() {
  return {
    s: UNTERMINATED,
    v: void 0,
    o: null,
    p: null
  };
}
function maybeDeref(r) {
  if (r instanceof Ref) {
    return r.deref();
  }
  return r;
}
function weakMapMemoize(func, options = {}) {
  let fnNode = createCacheNode();
  const { resultEqualityCheck, maxSize } = options;
  const useGenerations = maxSize !== void 0;
  if (useGenerations && (!Number.isInteger(maxSize) || maxSize < 1)) {
    throw new TypeError(
      `maxSize must be a positive integer, received: ${maxSize}`
    );
  }
  let prevNode = null;
  let insertionCount = 0;
  let lastResult;
  let resultsCount = 0;
  function maybeFlipGenerations() {
    if (insertionCount >= maxSize) {
      prevNode = fnNode;
      fnNode = createCacheNode();
      insertionCount = 0;
    }
  }
  function memoized() {
    let cacheNode = fnNode;
    const { length } = arguments;
    for (let i = 0, l = length; i < l; i++) {
      const arg = arguments[i];
      if (typeof arg === "function" || typeof arg === "object" && arg !== null) {
        let objectCache = cacheNode.o;
        if (objectCache === null) {
          cacheNode.o = objectCache = /* @__PURE__ */ new WeakMap();
        }
        const objectNode = objectCache.get(arg);
        if (objectNode === void 0) {
          cacheNode = createCacheNode();
          objectCache.set(arg, cacheNode);
        } else {
          cacheNode = objectNode;
        }
      } else {
        let primitiveCache = cacheNode.p;
        if (primitiveCache === null) {
          cacheNode.p = primitiveCache = /* @__PURE__ */ new Map();
        }
        const primitiveNode = primitiveCache.get(arg);
        if (primitiveNode === void 0) {
          cacheNode = createCacheNode();
          primitiveCache.set(arg, cacheNode);
          insertionCount++;
        } else {
          cacheNode = primitiveNode;
        }
      }
    }
    if (cacheNode.s === TERMINATED) {
      return cacheNode.v;
    }
    if (prevNode !== null) {
      let prevCacheNode = prevNode;
      for (let i = 0, l = length; i < l; i++) {
        const arg = arguments[i];
        let next;
        if (typeof arg === "function" || typeof arg === "object" && arg !== null) {
          const prevObjectCache = prevCacheNode.o;
          next = prevObjectCache !== null ? prevObjectCache.get(arg) : void 0;
        } else {
          const prevPrimitiveCache = prevCacheNode.p;
          next = prevPrimitiveCache !== null ? prevPrimitiveCache.get(arg) : void 0;
        }
        if (next === void 0) {
          prevCacheNode = null;
          break;
        }
        prevCacheNode = next;
      }
      if (prevCacheNode !== null && prevCacheNode.s === TERMINATED) {
        const promotedNode = cacheNode;
        promotedNode.s = TERMINATED;
        promotedNode.v = prevCacheNode.v;
        maybeFlipGenerations();
        return prevCacheNode.v;
      }
    }
    const terminatedNode = cacheNode;
    let result = func.apply(null, arguments);
    resultsCount++;
    if (resultEqualityCheck) {
      const lastResultValue = maybeDeref(lastResult);
      if (lastResultValue != null && resultEqualityCheck(lastResultValue, result)) {
        result = lastResultValue;
        resultsCount !== 0 && resultsCount--;
      }
      const needsWeakRef = typeof result === "object" && result !== null || typeof result === "function";
      lastResult = needsWeakRef ? /* @__PURE__ */ new Ref(result) : result;
    }
    terminatedNode.s = TERMINATED;
    terminatedNode.v = result;
    if (useGenerations) {
      maybeFlipGenerations();
    }
    return result;
  }
  memoized.clearCache = () => {
    fnNode = createCacheNode();
    prevNode = null;
    insertionCount = 0;
    memoized.resetResultsCount();
  };
  memoized.resultsCount = () => resultsCount;
  memoized.resetResultsCount = () => {
    resultsCount = 0;
  };
  return memoized;
}
var NOT_FOUND = /* @__PURE__ */ Symbol("NOT_FOUND");
function assertIsFunction(func, errorMessage = `expected a function, instead received ${typeof func}`) {
  if (typeof func !== "function") {
    throw new TypeError(errorMessage);
  }
}
function assertIsArrayOfFunctions(array, errorMessage = `expected all items to be functions, instead received the following types: `) {
  if (!array.every((item) => typeof item === "function")) {
    const itemTypes = array.map(
      (item) => typeof item === "function" ? `function ${item.name || "unnamed"}()` : typeof item
    ).join(", ");
    throw new TypeError(`${errorMessage}[${itemTypes}]`);
  }
}
var ensureIsArray = (item) => {
  return Array.isArray(item) ? item : [item];
};
function getDependencies(createSelectorArgs) {
  const dependencies = Array.isArray(createSelectorArgs[0]) ? createSelectorArgs[0] : createSelectorArgs;
  assertIsArrayOfFunctions(
    dependencies,
    `createSelector expects all input-selectors to be functions, but received the following types: `
  );
  return dependencies;
}
function createSelectorCreator(memoizeOrOptions, ...memoizeOptionsFromArgs) {
  const createSelectorCreatorOptions = typeof memoizeOrOptions === "function" ? {
    memoize: memoizeOrOptions,
    memoizeOptions: memoizeOptionsFromArgs
  } : memoizeOrOptions;
  const createSelector2 = (...createSelectorArgs) => {
    let recomputations = 0;
    let dependencyRecomputations = 0;
    let lastResult;
    let directlyPassedOptions = {};
    let resultFunc = createSelectorArgs.pop();
    if (typeof resultFunc === "object") {
      directlyPassedOptions = resultFunc;
      resultFunc = createSelectorArgs.pop();
    }
    assertIsFunction(
      resultFunc,
      `createSelector expects an output function after the inputs, but received: [${typeof resultFunc}]`
    );
    const combinedOptions = {
      ...createSelectorCreatorOptions,
      ...directlyPassedOptions
    };
    const {
      memoize,
      memoizeOptions = [],
      argsMemoize = weakMapMemoize,
      argsMemoizeOptions = []
    } = combinedOptions;
    const finalMemoizeOptions = ensureIsArray(memoizeOptions);
    const finalArgsMemoizeOptions = ensureIsArray(argsMemoizeOptions);
    const dependencies = getDependencies(createSelectorArgs);
    const memoizedResultFunc = memoize(function recomputationWrapper() {
      recomputations++;
      return resultFunc.apply(
        null,
        arguments
      );
    }, ...finalMemoizeOptions);
    const selector = argsMemoize(function dependenciesChecker() {
      dependencyRecomputations++;
      const { length } = dependencies;
      const inputSelectorResults = new Array(length);
      for (let i = 0; i < length; i++) {
        inputSelectorResults[i] = dependencies[i].apply(null, arguments);
      }
      lastResult = memoizedResultFunc.apply(null, inputSelectorResults);
      return lastResult;
    }, ...finalArgsMemoizeOptions);
    return Object.assign(selector, {
      resultFunc,
      memoizedResultFunc,
      dependencies,
      dependencyRecomputations: () => dependencyRecomputations,
      resetDependencyRecomputations: () => {
        dependencyRecomputations = 0;
      },
      lastResult: () => lastResult,
      recomputations: () => recomputations,
      resetRecomputations: () => {
        recomputations = 0;
      },
      memoize,
      argsMemoize
    });
  };
  Object.assign(createSelector2, {
    withTypes: () => createSelector2
  });
  return createSelector2;
}
function createSingletonCache(equals) {
  let entry;
  return {
    get(key) {
      if (entry && equals(entry.key, key)) {
        return entry.value;
      }
      return NOT_FOUND;
    },
    put(key, value) {
      entry = { key, value };
    },
    findMatchingEntry(value, resultEqualityCheck) {
      const current = entry;
      return current !== void 0 && resultEqualityCheck(current.value, value) ? current : void 0;
    },
    clear() {
      entry = void 0;
    }
  };
}
function createLruCache(maxSize, equals) {
  let entries = [];
  function get(key) {
    const cacheIndex = entries.findIndex((entry) => equals(entry.key, key));
    if (cacheIndex > -1) {
      const entry = entries[cacheIndex];
      if (cacheIndex > 0) {
        entries.splice(cacheIndex, 1);
        entries.unshift(entry);
      }
      return entry.value;
    }
    return NOT_FOUND;
  }
  function put(key, value) {
    entries.unshift({ key, value });
    if (entries.length > maxSize) {
      entries.pop();
    }
  }
  function findMatchingEntry(value, resultEqualityCheck) {
    const currentEntries = entries;
    const { length } = currentEntries;
    for (let i = 0; i < length; i++) {
      const entry = currentEntries[i];
      if (resultEqualityCheck(entry.value, value)) {
        return entry;
      }
    }
    return void 0;
  }
  function clear() {
    entries = [];
  }
  return { get, put, findMatchingEntry, clear };
}
var referenceEqualityCheck = (a, b) => a === b;
function createCacheKeyComparator(equalityCheck) {
  return function areArgumentsShallowlyEqual(prev, next) {
    if (prev === null || next === null || prev.length !== next.length) {
      return false;
    }
    const { length } = prev;
    for (let i = 0; i < length; i++) {
      if (!equalityCheck(prev[i], next[i])) {
        return false;
      }
    }
    return true;
  };
}
function lruMemoize(func, equalityCheckOrOptions) {
  const providedOptions = typeof equalityCheckOrOptions === "object" ? equalityCheckOrOptions : { equalityCheck: equalityCheckOrOptions };
  const {
    equalityCheck = referenceEqualityCheck,
    maxSize = 1,
    resultEqualityCheck
  } = providedOptions;
  const comparator = createCacheKeyComparator(equalityCheck);
  let resultsCount = 0;
  const cache = maxSize <= 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator);
  function memoized() {
    let value = cache.get(arguments);
    if (value === NOT_FOUND) {
      value = func.apply(null, arguments);
      resultsCount++;
      if (resultEqualityCheck) {
        const matchingEntry = cache.findMatchingEntry(
          value,
          resultEqualityCheck
        );
        if (matchingEntry) {
          value = matchingEntry.value;
          resultsCount !== 0 && resultsCount--;
        }
      }
      cache.put(arguments, value);
    }
    return value;
  }
  memoized.clearCache = () => {
    cache.clear();
    memoized.resetResultsCount();
  };
  memoized.resultsCount = () => resultsCount;
  memoized.resetResultsCount = () => {
    resultsCount = 0;
  };
  return memoized;
}
const reselectCreateSelector = createSelectorCreator({
  memoize: lruMemoize,
  memoizeOptions: {
    maxSize: 1,
    equalityCheck: Object.is
  }
});
const createSelector$1 = (a, b, c, d, e, f, g, h, ...other) => {
  if (other.length > 0) {
    throw new Error("Unsupported number of selectors");
  }
  let selector;
  if (a && b && c && d && e && f && g && h) {
    selector = (state, a1, a2, a3) => {
      const va = a(state, a1, a2, a3);
      const vb = b(state, a1, a2, a3);
      const vc = c(state, a1, a2, a3);
      const vd = d(state, a1, a2, a3);
      const ve = e(state, a1, a2, a3);
      const vf = f(state, a1, a2, a3);
      const vg = g(state, a1, a2, a3);
      return h(va, vb, vc, vd, ve, vf, vg, a1, a2, a3);
    };
  } else if (a && b && c && d && e && f && g) {
    selector = (state, a1, a2, a3) => {
      const va = a(state, a1, a2, a3);
      const vb = b(state, a1, a2, a3);
      const vc = c(state, a1, a2, a3);
      const vd = d(state, a1, a2, a3);
      const ve = e(state, a1, a2, a3);
      const vf = f(state, a1, a2, a3);
      return g(va, vb, vc, vd, ve, vf, a1, a2, a3);
    };
  } else if (a && b && c && d && e && f) {
    selector = (state, a1, a2, a3) => {
      const va = a(state, a1, a2, a3);
      const vb = b(state, a1, a2, a3);
      const vc = c(state, a1, a2, a3);
      const vd = d(state, a1, a2, a3);
      const ve = e(state, a1, a2, a3);
      return f(va, vb, vc, vd, ve, a1, a2, a3);
    };
  } else if (a && b && c && d && e) {
    selector = (state, a1, a2, a3) => {
      const va = a(state, a1, a2, a3);
      const vb = b(state, a1, a2, a3);
      const vc = c(state, a1, a2, a3);
      const vd = d(state, a1, a2, a3);
      return e(va, vb, vc, vd, a1, a2, a3);
    };
  } else if (a && b && c && d) {
    selector = (state, a1, a2, a3) => {
      const va = a(state, a1, a2, a3);
      const vb = b(state, a1, a2, a3);
      const vc = c(state, a1, a2, a3);
      return d(va, vb, vc, a1, a2, a3);
    };
  } else if (a && b && c) {
    selector = (state, a1, a2, a3) => {
      const va = a(state, a1, a2, a3);
      const vb = b(state, a1, a2, a3);
      return c(va, vb, a1, a2, a3);
    };
  } else if (a && b) {
    selector = (state, a1, a2, a3) => {
      const va = a(state, a1, a2, a3);
      return b(va, a1, a2, a3);
    };
  } else if (a) {
    selector = a;
  } else {
    throw new Error("Missing arguments");
  }
  return selector;
};
const createSelectorMemoizedWithOptions = (options) => (...inputs) => {
  const cache = /* @__PURE__ */ new WeakMap();
  let nextCacheId = 1;
  const combiner = inputs[inputs.length - 1];
  const nSelectors = inputs.length - 1 || 1;
  const argsLength = Math.max(combiner.length - nSelectors, 0);
  if (argsLength > 3) {
    throw new Error("Unsupported number of arguments");
  }
  const selector = (state, a1, a2, a3) => {
    let cacheKey = state.__cacheKey__;
    if (!cacheKey) {
      cacheKey = {
        id: nextCacheId
      };
      state.__cacheKey__ = cacheKey;
      nextCacheId += 1;
    }
    let fn = cache.get(cacheKey);
    if (!fn) {
      const selectors = inputs.length === 1 ? [(x) => x, combiner] : inputs;
      let reselectArgs = inputs;
      const selectorArgs = [void 0, void 0, void 0];
      switch (argsLength) {
        case 0:
          break;
        case 1: {
          reselectArgs = [...selectors.slice(0, -1), () => selectorArgs[0], combiner];
          break;
        }
        case 2: {
          reselectArgs = [...selectors.slice(0, -1), () => selectorArgs[0], () => selectorArgs[1], combiner];
          break;
        }
        case 3: {
          reselectArgs = [...selectors.slice(0, -1), () => selectorArgs[0], () => selectorArgs[1], () => selectorArgs[2], combiner];
          break;
        }
        default:
          throw new Error("Unsupported number of arguments");
      }
      fn = reselectCreateSelector(...reselectArgs);
      fn.selectorArgs = selectorArgs;
      cache.set(cacheKey, fn);
    }
    switch (argsLength) {
      case 3:
        fn.selectorArgs[2] = a3;
      case 2:
        fn.selectorArgs[1] = a2;
      case 1:
        fn.selectorArgs[0] = a1;
    }
    switch (argsLength) {
      case 0:
        return fn(state);
      case 1:
        return fn(state, a1);
      case 2:
        return fn(state, a1, a2);
      case 3:
        return fn(state, a1, a2, a3);
      default:
        throw new Error("unreachable");
    }
  };
  return selector;
};
const createSelectorMemoized$1 = createSelectorMemoizedWithOptions();
const createSelector = (...args) => {
  const baseSelector = createSelector$1(...args);
  const selector = (apiRef, a1, a2, a3) => baseSelector(unwrapIfNeeded(apiRef), a1, a2, a3);
  return selector;
};
const createSelectorMemoized = (...args) => {
  const baseSelector = createSelectorMemoized$1(...args);
  const selector = (apiRef, a1, a2, a3) => baseSelector(unwrapIfNeeded(apiRef), a1, a2, a3);
  return selector;
};
const createRootSelector = (fn) => (apiRef, args) => fn(unwrapIfNeeded(apiRef), args);
function unwrapIfNeeded(refOrState) {
  if ("current" in refOrState) {
    return refOrState.current.state;
  }
  return refOrState;
}
const gridRowsStateSelector = createRootSelector((state) => state.rows);
const gridRowCountSelector = createSelector(gridRowsStateSelector, (rows) => rows.totalRowCount);
const gridRowsLoadingSelector = createSelector(gridRowsStateSelector, (rows) => rows.loading);
const gridTopLevelRowCountSelector = createSelector(gridRowsStateSelector, (rows) => rows.totalTopLevelRowCount);
const gridRowsLookupSelector = createSelector(gridRowsStateSelector, (rows) => rows.dataRowIdToModelLookup);
createSelector(gridRowsLookupSelector, (rows, id) => rows[id]);
const gridRowTreeSelector = createSelector(gridRowsStateSelector, (rows) => rows.tree);
const gridRowNodeSelector = createSelector(gridRowTreeSelector, (rowTree, rowId) => rowTree[rowId]);
const gridRowGroupsToFetchSelector = createSelector(gridRowsStateSelector, (rows) => rows.groupsToFetch);
const gridRowGroupingNameSelector = createSelector(gridRowsStateSelector, (rows) => rows.groupingName);
const gridRowTreeDepthsSelector = createSelector(gridRowsStateSelector, (rows) => rows.treeDepths);
const gridRowMaximumTreeDepthSelector = createSelectorMemoized(gridRowsStateSelector, (rows) => {
  const entries = Object.entries(rows.treeDepths);
  if (entries.length === 0) {
    return 1;
  }
  return (entries.filter(([, nodeCount]) => nodeCount > 0).map(([depth]) => Number(depth)).sort((a, b) => b - a)[0] ?? 0) + 1;
});
const gridDataRowIdsSelector = createSelector(gridRowsStateSelector, (rows) => rows.dataRowIds);
const gridDataRowsSelector = createSelectorMemoized(gridDataRowIdsSelector, gridRowsLookupSelector, (dataRowIds, rowsLookup) => dataRowIds.reduce((acc, id) => {
  if (!rowsLookup[id]) {
    return acc;
  }
  acc.push(rowsLookup[id]);
  return acc;
}, []));
const gridAdditionalRowGroupsSelector = createSelector(gridRowsStateSelector, (rows) => rows?.additionalRowGroups);
const gridPinnedRowsSelector = createSelectorMemoized(gridAdditionalRowGroupsSelector, (additionalRowGroups) => {
  const rawPinnedRows = additionalRowGroups?.pinnedRows;
  return {
    bottom: rawPinnedRows?.bottom?.map((rowEntry) => ({
      id: rowEntry.id,
      model: rowEntry.model ?? {}
    })) ?? [],
    top: rawPinnedRows?.top?.map((rowEntry) => ({
      id: rowEntry.id,
      model: rowEntry.model ?? {}
    })) ?? []
  };
});
const gridPinnedRowsCountSelector = createSelector(gridPinnedRowsSelector, (pinnedRows) => {
  return (pinnedRows?.top?.length || 0) + (pinnedRows?.bottom?.length || 0);
});
const GRID_ROOT_GROUP_ID = `auto-generated-group-node-root`;
const GRID_ID_AUTOGENERATED = /* @__PURE__ */ Symbol("mui.id_autogenerated");
const buildRootGroup = () => ({
  type: "group",
  id: GRID_ROOT_GROUP_ID,
  depth: -1,
  groupingField: null,
  groupingKey: null,
  isAutoGenerated: true,
  children: [],
  // Prototype-less so user-supplied grouping values like `'constructor'`
  // or `'__proto__'` cannot collide with `Object.prototype` properties.
  childrenFromPath: /* @__PURE__ */ Object.create(null),
  childrenExpanded: true,
  parent: null
});
function checkGridRowIdIsValid(id, row, detailErrorMessage = "A row was provided without id in the rows prop:") {
  if (id == null) {
    throw new Error(["MUI X: The Data Grid component requires all rows to have a unique `id` property.", "Alternatively, you can use the `getRowId` prop to specify a custom id for each row.", detailErrorMessage, JSON.stringify(row)].join("\n"));
  }
}
const getRowIdFromRowModel = (rowModel, getRowId, detailErrorMessage) => {
  const id = getRowId ? getRowId(rowModel) : rowModel.id;
  checkGridRowIdIsValid(id, rowModel, detailErrorMessage);
  return id;
};
const getRowValue = (row, colDef, apiRef) => {
  const field = colDef.field;
  if (!colDef || !colDef.valueGetter) {
    return row[field];
  }
  const value = row[colDef.field];
  return colDef.valueGetter(value, row, colDef, apiRef);
};
const createRowsInternalCache = ({
  rows,
  getRowId,
  loading,
  rowCount
}) => {
  const updates = {
    type: "full",
    rows: []
  };
  const dataRowIdToModelLookup = {};
  for (let i = 0; i < rows.length; i += 1) {
    const model = rows[i];
    const id = getRowIdFromRowModel(model, getRowId);
    dataRowIdToModelLookup[id] = model;
    updates.rows.push(id);
  }
  return {
    rowsBeforePartialUpdates: rows,
    loadingPropBeforePartialUpdates: loading,
    rowCountPropBeforePartialUpdates: rowCount,
    updates,
    dataRowIdToModelLookup
  };
};
const getTopLevelRowCount = ({
  tree,
  rowCountProp = 0
}) => {
  const rootGroupNode = tree[GRID_ROOT_GROUP_ID];
  return Math.max(rowCountProp, rootGroupNode.children.length + (rootGroupNode.footerId == null ? 0 : 1));
};
const getRowsStateFromCache = ({
  apiRef,
  rowCountProp = 0,
  loadingProp,
  previousTree,
  previousTreeDepths,
  previousGroupsToFetch
}) => {
  const cache = apiRef.current.caches.rows;
  const {
    tree: unProcessedTree,
    treeDepths: unProcessedTreeDepths,
    dataRowIds: unProcessedDataRowIds,
    groupingName,
    groupsToFetch = []
  } = apiRef.current.applyStrategyProcessor("rowTreeCreation", {
    previousTree,
    previousTreeDepths,
    updates: cache.updates,
    dataRowIdToModelLookup: cache.dataRowIdToModelLookup,
    previousGroupsToFetch
  });
  const groupingParamsWithHydrateRows = apiRef.current.unstable_applyPipeProcessors("hydrateRows", {
    tree: unProcessedTree,
    treeDepths: unProcessedTreeDepths,
    dataRowIds: unProcessedDataRowIds,
    dataRowIdToModelLookup: cache.dataRowIdToModelLookup
  });
  apiRef.current.caches.rows.updates = {
    type: "partial",
    actions: {
      insert: [],
      modify: [],
      remove: []
    },
    idToActionLookup: {}
  };
  return _extends({}, groupingParamsWithHydrateRows, {
    totalRowCount: Math.max(rowCountProp, groupingParamsWithHydrateRows.dataRowIds.length),
    totalTopLevelRowCount: getTopLevelRowCount({
      tree: groupingParamsWithHydrateRows.tree,
      rowCountProp
    }),
    groupingName,
    loading: loadingProp,
    groupsToFetch
  });
};
const isAutogeneratedRow = (row) => GRID_ID_AUTOGENERATED in row;
const isAutogeneratedRowNode = (rowNode) => rowNode.type === "skeletonRow" || rowNode.type === "footer" || rowNode.type === "group" && rowNode.isAutoGenerated || rowNode.type === "pinnedRow" && rowNode.isAutoGenerated;
const getTreeNodeDescendants = (tree, parentId, skipAutoGeneratedRows, directChildrenOnly) => {
  const node = tree[parentId];
  if (node?.type !== "group") {
    return [];
  }
  const validDescendants = [];
  for (let i = 0; i < node.children.length; i += 1) {
    const child = node.children[i];
    if (!skipAutoGeneratedRows || !isAutogeneratedRowNode(tree[child])) {
      validDescendants.push(child);
    }
    if (directChildrenOnly) {
      continue;
    }
    const childDescendants = getTreeNodeDescendants(tree, child, skipAutoGeneratedRows, directChildrenOnly);
    for (let j = 0; j < childDescendants.length; j += 1) {
      validDescendants.push(childDescendants[j]);
    }
  }
  if (!skipAutoGeneratedRows && node.footerId != null) {
    validDescendants.push(node.footerId);
  }
  return validDescendants;
};
const updateCacheWithNewRows = ({
  previousCache,
  getRowId,
  updates,
  groupKeys
}) => {
  if (previousCache.updates.type === "full") {
    throw new Error("MUI X: Unable to prepare a partial update if a full update is not applied yet.");
  }
  const uniqueUpdates = /* @__PURE__ */ new Map();
  updates.forEach((update) => {
    const id = getRowIdFromRowModel(update, getRowId, "A row was provided without id when calling updateRows():");
    if (uniqueUpdates.has(id)) {
      uniqueUpdates.set(id, _extends({}, uniqueUpdates.get(id), update));
    } else {
      uniqueUpdates.set(id, update);
    }
  });
  const partialUpdates = {
    type: "partial",
    actions: {
      insert: [...previousCache.updates.actions.insert ?? []],
      modify: [...previousCache.updates.actions.modify ?? []],
      remove: [...previousCache.updates.actions.remove ?? []]
    },
    idToActionLookup: _extends({}, previousCache.updates.idToActionLookup),
    groupKeys
  };
  const dataRowIdToModelLookup = _extends({}, previousCache.dataRowIdToModelLookup);
  const alreadyAppliedActionsToRemove = {
    insert: {},
    modify: {},
    remove: {}
  };
  uniqueUpdates.forEach((partialRow, id) => {
    const actionAlreadyAppliedToRow = partialUpdates.idToActionLookup[id];
    if (partialRow._action === "delete") {
      if (actionAlreadyAppliedToRow === "remove" || !dataRowIdToModelLookup[id]) {
        return;
      }
      if (actionAlreadyAppliedToRow != null) {
        alreadyAppliedActionsToRemove[actionAlreadyAppliedToRow][id] = true;
      }
      partialUpdates.actions.remove.push(id);
      delete dataRowIdToModelLookup[id];
      return;
    }
    const oldRow = dataRowIdToModelLookup[id];
    if (oldRow) {
      if (actionAlreadyAppliedToRow === "remove") {
        alreadyAppliedActionsToRemove.remove[id] = true;
        partialUpdates.actions.modify.push(id);
      } else if (actionAlreadyAppliedToRow == null) {
        partialUpdates.actions.modify.push(id);
      }
      dataRowIdToModelLookup[id] = _extends({}, oldRow, partialRow);
      return;
    }
    if (actionAlreadyAppliedToRow === "remove") {
      alreadyAppliedActionsToRemove.remove[id] = true;
      partialUpdates.actions.insert.push(id);
    } else if (actionAlreadyAppliedToRow == null) {
      partialUpdates.actions.insert.push(id);
    }
    dataRowIdToModelLookup[id] = partialRow;
  });
  const actionTypeWithActionsToRemove = Object.keys(alreadyAppliedActionsToRemove);
  for (let i = 0; i < actionTypeWithActionsToRemove.length; i += 1) {
    const actionType = actionTypeWithActionsToRemove[i];
    const idsToRemove = alreadyAppliedActionsToRemove[actionType];
    if (Object.keys(idsToRemove).length > 0) {
      partialUpdates.actions[actionType] = partialUpdates.actions[actionType].filter((id) => !idsToRemove[id]);
    }
  }
  return {
    dataRowIdToModelLookup,
    updates: partialUpdates,
    rowsBeforePartialUpdates: previousCache.rowsBeforePartialUpdates,
    loadingPropBeforePartialUpdates: previousCache.loadingPropBeforePartialUpdates,
    rowCountPropBeforePartialUpdates: previousCache.rowCountPropBeforePartialUpdates
  };
};
const minimalContentHeight = "var(--DataGrid-overlayHeight, calc(var(--height) * 2))";
function computeRowsUpdates(apiRef, updates, getRowId) {
  const nonPinnedRowsUpdates = [];
  updates.forEach((update) => {
    const id = getRowIdFromRowModel(update, getRowId, "A row was provided without id when calling updateRows():");
    const rowNode = gridRowNodeSelector(apiRef, id);
    if (rowNode?.type === "pinnedRow") {
      const pinnedRowsCache = apiRef.current.caches.pinnedRows;
      const prevModel = pinnedRowsCache.idLookup[id];
      if (prevModel) {
        pinnedRowsCache.idLookup[id] = _extends({}, prevModel, update);
      }
    } else {
      nonPinnedRowsUpdates.push(update);
    }
  });
  return nonPinnedRowsUpdates;
}
const getValidRowHeight = (rowHeightProp, defaultRowHeight, warningMessage) => {
  if (typeof rowHeightProp === "number" && rowHeightProp > 0) {
    return rowHeightProp;
  }
  return defaultRowHeight;
};
let GridPinnedColumnPosition = /* @__PURE__ */ (function(GridPinnedColumnPosition2) {
  GridPinnedColumnPosition2["LEFT"] = "left";
  GridPinnedColumnPosition2["RIGHT"] = "right";
  return GridPinnedColumnPosition2;
})({});
const EMPTY_PINNED_COLUMN_FIELDS = {
  left: [],
  right: []
};
const gridListViewSelector = createRootSelector((state) => state.props.listView ?? false);
const gridListColumnSelector = createRootSelector((state) => state.listViewColumn);
const gridColumnsStateSelector = createRootSelector((state) => state.columns);
const gridColumnFieldsSelector = createSelector(gridColumnsStateSelector, (columnsState) => columnsState.orderedFields);
const gridColumnLookupSelector = createSelector(gridColumnsStateSelector, (columnsState) => columnsState.lookup);
const gridColumnDefinitionsSelector = createSelectorMemoized(gridColumnFieldsSelector, gridColumnLookupSelector, (allFields, lookup) => allFields.map((field) => lookup[field]));
const gridColumnVisibilityModelSelector = createSelector(gridColumnsStateSelector, (columnsState) => columnsState.columnVisibilityModel);
const gridInitialColumnVisibilityModelSelector = createSelector(gridColumnsStateSelector, (columnsState) => columnsState.initialColumnVisibilityModel);
const gridVisibleColumnDefinitionsSelector = createSelectorMemoized(gridColumnDefinitionsSelector, gridColumnVisibilityModelSelector, gridListViewSelector, gridListColumnSelector, (columns, columnVisibilityModel, listView, listColumn) => listView && listColumn ? [listColumn] : columns.filter((column) => columnVisibilityModel[column.field] !== false));
const gridVisibleColumnFieldsSelector = createSelectorMemoized(gridVisibleColumnDefinitionsSelector, (visibleColumns) => visibleColumns.map((column) => column.field));
const gridPinnedColumnsSelector = createRootSelector((state) => state.pinnedColumns);
createSelectorMemoized(gridPinnedColumnsSelector, gridColumnFieldsSelector, (model, orderedFields) => filterMissingColumns(model, orderedFields));
const gridVisiblePinnedColumnDefinitionsSelector = createSelectorMemoized(gridColumnsStateSelector, gridPinnedColumnsSelector, gridVisibleColumnFieldsSelector, gridListViewSelector, (columnsState, model, visibleColumnFields, listView) => {
  if (listView) {
    return EMPTY_PINNED_COLUMN_FIELDS;
  }
  const visiblePinnedFields = filterMissingColumns(model, visibleColumnFields);
  const visiblePinnedColumns = {
    left: visiblePinnedFields.left.map((field) => columnsState.lookup[field]),
    right: visiblePinnedFields.right.map((field) => columnsState.lookup[field])
  };
  return visiblePinnedColumns;
});
function filterMissingColumns(pinnedColumns, columns) {
  if (!Array.isArray(pinnedColumns.left) && !Array.isArray(pinnedColumns.right)) {
    return EMPTY_PINNED_COLUMN_FIELDS;
  }
  if (pinnedColumns.left?.length === 0 && pinnedColumns.right?.length === 0) {
    return EMPTY_PINNED_COLUMN_FIELDS;
  }
  const filter = (newPinnedColumns, remainingColumns) => {
    if (!Array.isArray(newPinnedColumns)) {
      return [];
    }
    return newPinnedColumns.filter((field) => remainingColumns.includes(field));
  };
  const leftPinnedColumns = filter(pinnedColumns.left, columns);
  const columnsWithoutLeftPinnedColumns = columns.filter((field) => !leftPinnedColumns.includes(field));
  const rightPinnedColumns = filter(pinnedColumns.right, columnsWithoutLeftPinnedColumns);
  return {
    left: leftPinnedColumns,
    right: rightPinnedColumns
  };
}
const gridColumnPositionsSelector = createSelectorMemoized(gridVisibleColumnDefinitionsSelector, (visibleColumns) => {
  const positions = [];
  let currentPosition = 0;
  for (let i = 0; i < visibleColumns.length; i += 1) {
    positions.push(currentPosition);
    currentPosition += visibleColumns[i].computedWidth;
  }
  return positions;
});
const gridFilterableColumnDefinitionsSelector = createSelectorMemoized(gridColumnDefinitionsSelector, (columns) => columns.filter((col) => col.filterable));
const gridFilterableColumnLookupSelector = createSelectorMemoized(gridColumnDefinitionsSelector, (columns) => columns.reduce((acc, col) => {
  if (col.filterable) {
    acc[col.field] = col;
  }
  return acc;
}, {}));
const gridHasColSpanSelector = createSelectorMemoized(gridColumnDefinitionsSelector, (columns) => columns.some((column) => column.colSpan !== void 0));
function isObjectEmpty(object) {
  for (const _ in object) {
    return false;
  }
  return true;
}
const gridSortingStateSelector = createRootSelector((state) => state.sorting);
const gridSortedRowIdsSelector = createSelector(gridSortingStateSelector, (sortingState) => sortingState.sortedRows);
const gridSortedRowEntriesSelector = createSelectorMemoized(gridSortedRowIdsSelector, gridRowsLookupSelector, gridRowTreeSelector, (sortedIds, idRowsLookup, rowTree) => sortedIds.reduce((acc, id) => {
  const model = idRowsLookup[id];
  if (model) {
    acc.push({
      id,
      model
    });
  } else {
    const rowNode = rowTree[id];
    if (rowNode && isAutogeneratedRowNode(rowNode)) {
      acc.push({
        id,
        model: {
          [GRID_ID_AUTOGENERATED]: id
        }
      });
    }
  }
  return acc;
}, []));
const gridSortModelSelector = createSelector(gridSortingStateSelector, (sorting) => sorting.sortModel);
const gridSortColumnLookupSelector = createSelectorMemoized(gridSortModelSelector, (sortModel) => {
  const result = sortModel.reduce((res, sortItem, index) => {
    res[sortItem.field] = {
      sortDirection: sortItem.sort,
      sortIndex: sortModel.length > 1 ? index + 1 : void 0
    };
    return res;
  }, {});
  return result;
});
createSelectorMemoized(gridSortedRowIdsSelector, (sortedIds) => {
  return sortedIds.reduce((acc, id, index) => {
    acc[id] = index;
    return acc;
  }, /* @__PURE__ */ Object.create(null));
});
const gridFilterStateSelector = createRootSelector((state) => state.filter);
const gridFilterModelSelector = createSelector(gridFilterStateSelector, (filterState) => filterState.filterModel);
const gridQuickFilterValuesSelector = createSelector(gridFilterModelSelector, (filterModel) => filterModel.quickFilterValues);
const gridVisibleRowsLookupSelector = createRootSelector((state) => state.visibleRowsLookup);
const gridFilteredRowsLookupSelector = createSelector(gridFilterStateSelector, (filterState) => filterState.filteredRowsLookup);
createSelector(gridFilterStateSelector, (filterState) => filterState.filteredChildrenCountLookup);
createSelector(gridFilterStateSelector, (filterState) => filterState.filteredDescendantCountLookup);
const gridExpandedSortedRowEntriesSelector = createSelectorMemoized(gridVisibleRowsLookupSelector, gridSortedRowEntriesSelector, (visibleRowsLookup, sortedRows) => {
  if (isObjectEmpty(visibleRowsLookup)) {
    return sortedRows;
  }
  return sortedRows.filter((row) => visibleRowsLookup[row.id] !== false);
});
const gridExpandedSortedRowIdsSelector = createSelectorMemoized(gridExpandedSortedRowEntriesSelector, (visibleSortedRowEntries) => visibleSortedRowEntries.map((row) => row.id));
const gridFilteredSortedRowEntriesSelector = createSelectorMemoized(gridFilteredRowsLookupSelector, gridSortedRowEntriesSelector, (filteredRowsLookup, sortedRows) => isObjectEmpty(filteredRowsLookup) ? sortedRows : sortedRows.filter((row) => filteredRowsLookup[row.id] !== false));
const gridFilteredSortedRowIdsSelector = createSelectorMemoized(gridFilteredSortedRowEntriesSelector, (filteredSortedRowEntries) => filteredSortedRowEntries.map((row) => row.id));
createSelectorMemoized(gridExpandedSortedRowIdsSelector, gridRowTreeSelector, (visibleSortedRowIds, rowTree) => {
  const depthPositionCounter = {};
  let lastDepth = 0;
  return visibleSortedRowIds.reduce((acc, rowId) => {
    const rowNode = rowTree[rowId];
    if (!depthPositionCounter[rowNode.depth]) {
      depthPositionCounter[rowNode.depth] = 0;
    }
    if (rowNode.depth > lastDepth) {
      depthPositionCounter[rowNode.depth] = 0;
    }
    lastDepth = rowNode.depth;
    depthPositionCounter[rowNode.depth] += 1;
    acc[rowId] = depthPositionCounter[rowNode.depth];
    return acc;
  }, {});
});
const gridFilteredSortedDepthRowEntriesSelector = createSelectorMemoized(gridFilteredSortedRowEntriesSelector, gridRowTreeSelector, gridRowMaximumTreeDepthSelector, (sortedRows, rowTree, rowTreeDepth) => {
  if (rowTreeDepth < 2) {
    return [sortedRows];
  }
  return sortedRows.reduce((acc, row) => {
    const depth = rowTree[row.id]?.depth;
    if (depth === void 0) {
      return acc;
    }
    if (!acc[depth]) {
      acc[depth] = [];
    }
    acc[depth].push(row);
    return acc;
  }, [[]]);
});
const gridFilteredSortedTopLevelRowEntriesSelector = createSelector(gridFilteredSortedDepthRowEntriesSelector, (filteredSortedDepthRows) => filteredSortedDepthRows[0] ?? []);
const gridExpandedRowCountSelector = createSelector(gridExpandedSortedRowEntriesSelector, (visibleSortedRows) => visibleSortedRows.length);
const gridFilteredTopLevelRowCountSelector = createSelector(gridFilteredSortedTopLevelRowEntriesSelector, (visibleSortedTopLevelRows) => visibleSortedTopLevelRows.length);
const gridFilteredRowCountSelector = createSelector(gridFilteredSortedRowEntriesSelector, (filteredSortedRowEntries) => filteredSortedRowEntries.length);
createSelector(gridFilteredRowCountSelector, gridFilteredTopLevelRowCountSelector, (totalRowCount, topLevelRowCount) => totalRowCount - topLevelRowCount);
const gridFilterActiveItemsSelector = createSelectorMemoized(gridFilterModelSelector, gridColumnLookupSelector, (filterModel, columnLookup) => filterModel.items?.filter((item) => {
  if (!item.field) {
    return false;
  }
  const column = columnLookup[item.field];
  if (!column?.filterOperators || column?.filterOperators?.length === 0) {
    return false;
  }
  const filterOperator = column.filterOperators.find((operator) => operator.value === item.operator);
  if (!filterOperator) {
    return false;
  }
  const hasFilterValue = Array.isArray(item.value) ? item.value.length > 0 : item.value != null && item.value?.toString() !== "";
  return !filterOperator.InputComponent || hasFilterValue;
}));
const gridFilterActiveItemsLookupSelector = createSelectorMemoized(gridFilterActiveItemsSelector, (activeFilters) => {
  const result = activeFilters.reduce((res, filterItem) => {
    if (!res[filterItem.field]) {
      res[filterItem.field] = [filterItem];
    } else {
      res[filterItem.field].push(filterItem);
    }
    return res;
  }, {});
  return result;
});
const gridExpandedSortedRowIndexLookupSelector = createSelectorMemoized(gridExpandedSortedRowIdsSelector, (expandedSortedIds) => {
  return expandedSortedIds.reduce((acc, id, index) => {
    acc[id] = index;
    return acc;
  }, /* @__PURE__ */ Object.create(null));
});
const gridPreferencePanelStateSelector = createRootSelector((state) => state.preferencePanel);
const gridPreferencePanelSelectorWithLabel = createSelector(gridPreferencePanelStateSelector, (panel, labelId) => {
  if (panel.open && panel.labelId === labelId) {
    return true;
  }
  return false;
});
var GridPreferencePanelsValue = /* @__PURE__ */ (function(GridPreferencePanelsValue2) {
  GridPreferencePanelsValue2["filters"] = "filters";
  GridPreferencePanelsValue2["columns"] = "columns";
  GridPreferencePanelsValue2["aiAssistant"] = "aiAssistant";
  return GridPreferencePanelsValue2;
})(GridPreferencePanelsValue || {});
function isDeepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (a && b && typeof a === "object" && typeof b === "object") {
    if (a.constructor !== b.constructor) {
      return false;
    }
    if (Array.isArray(a)) {
      const length2 = a.length;
      if (length2 !== b.length) {
        return false;
      }
      for (let i = 0; i < length2; i += 1) {
        if (!isDeepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    if (a instanceof Map && b instanceof Map) {
      if (a.size !== b.size) {
        return false;
      }
      const entriesA = Array.from(a.entries());
      for (let i = 0; i < entriesA.length; i += 1) {
        if (!b.has(entriesA[i][0])) {
          return false;
        }
      }
      for (let i = 0; i < entriesA.length; i += 1) {
        const entryA = entriesA[i];
        if (!isDeepEqual(entryA[1], b.get(entryA[0]))) {
          return false;
        }
      }
      return true;
    }
    if (a instanceof Set && b instanceof Set) {
      if (a.size !== b.size) {
        return false;
      }
      const entries = Array.from(a.entries());
      for (let i = 0; i < entries.length; i += 1) {
        if (!b.has(entries[i][0])) {
          return false;
        }
      }
      return true;
    }
    if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      const length2 = a.length;
      if (length2 !== b.length) {
        return false;
      }
      for (let i = 0; i < length2; i += 1) {
        if (a[i] !== b[i]) {
          return false;
        }
      }
      return true;
    }
    if (a.constructor === RegExp) {
      return a.source === b.source && a.flags === b.flags;
    }
    if (a.valueOf !== Object.prototype.valueOf) {
      return a.valueOf() === b.valueOf();
    }
    if (a.toString !== Object.prototype.toString) {
      return a.toString() === b.toString();
    }
    const keys = Object.keys(a);
    const length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (let i = 0; i < length; i += 1) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (let i = 0; i < length; i += 1) {
      const key = keys[i];
      if (!isDeepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
const GridPanelContext = /* @__PURE__ */ reactExports.createContext(void 0);
function useGridPanelContext() {
  const context = reactExports.useContext(GridPanelContext);
  if (context === void 0) {
    throw new Error("MUI X: Missing context.");
  }
  return context;
}
function GridPanelContextProvider({
  children
}) {
  const [triggerElements, setTriggerElements] = reactExports.useState({
    columnsPanel: null,
    filterPanel: null,
    aiAssistantPanel: null
  });
  const updateTriggerElement = reactExports.useCallback((key, instance) => {
    setTriggerElements((prev) => {
      if (prev[key] === instance) {
        return prev;
      }
      return _extends({}, prev, {
        [key]: instance
      });
    });
  }, []);
  const setColumnsPanelTrigger = reactExports.useCallback((instance) => {
    updateTriggerElement("columnsPanel", instance);
  }, [updateTriggerElement]);
  const setFilterPanelTrigger = reactExports.useCallback((instance) => {
    updateTriggerElement("filterPanel", instance);
  }, [updateTriggerElement]);
  const setAiAssistantPanelTrigger = reactExports.useCallback((instance) => {
    updateTriggerElement("aiAssistantPanel", instance);
  }, [updateTriggerElement]);
  const value = reactExports.useMemo(() => ({
    triggers: {
      columnsPanel: {
        element: triggerElements.columnsPanel,
        setRef: setColumnsPanelTrigger
      },
      filterPanel: {
        element: triggerElements.filterPanel,
        setRef: setFilterPanelTrigger
      },
      aiAssistantPanel: {
        element: triggerElements.aiAssistantPanel,
        setRef: setAiAssistantPanelTrigger
      }
    }
  }), [triggerElements, setColumnsPanelTrigger, setFilterPanelTrigger, setAiAssistantPanelTrigger]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(GridPanelContext.Provider, {
    value,
    children
  });
}
function useComponentRenderer(defaultElement, render, props, state = {}) {
  if (typeof render === "function") {
    return render(props, state);
  }
  if (render) {
    if (render.props.className) {
      props.className = mergeClassNames(render.props.className, props.className);
    }
    if (render.props.style || props.style) {
      props.style = _extends({}, props.style, render.props.style);
    }
    return /* @__PURE__ */ reactExports.cloneElement(render, props);
  }
  return /* @__PURE__ */ reactExports.createElement(defaultElement, props);
}
function mergeClassNames(className, otherClassName) {
  if (!className || !otherClassName) {
    return className || otherClassName;
  }
  return `${className} ${otherClassName}`;
}
const QuickFilterContext = /* @__PURE__ */ reactExports.createContext(void 0);
function useQuickFilterContext() {
  const context = reactExports.useContext(QuickFilterContext);
  if (context === void 0) {
    throw new Error("MUI X: Missing context. Quick Filter subcomponents must be placed within a <QuickFilter /> component.");
  }
  return context;
}
const _excluded$6 = ["render", "className", "parser", "formatter", "debounceMs", "defaultExpanded", "expanded", "onExpandedChange"];
const DEFAULT_PARSER = (searchText) => searchText.split(" ").filter((word) => word !== "");
const DEFAULT_FORMATTER = (values) => values.join(" ");
function QuickFilter(props) {
  const rootProps = useGridRootProps();
  const {
    render,
    className,
    parser = DEFAULT_PARSER,
    formatter = DEFAULT_FORMATTER,
    debounceMs = rootProps.filterDebounceMs,
    defaultExpanded,
    expanded,
    onExpandedChange
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$6);
  const apiRef = useGridApiContext();
  const controlRef = reactExports.useRef(null);
  const triggerRef = reactExports.useRef(null);
  const quickFilterValues = useGridSelector(apiRef, gridQuickFilterValuesSelector);
  const [value, setValue] = reactExports.useState(formatter(quickFilterValues ?? []));
  const [internalExpanded, setInternalExpanded] = reactExports.useState(defaultExpanded ?? value.length > 0);
  const expandedValue = expanded ?? internalExpanded;
  const state = reactExports.useMemo(() => ({
    value,
    expanded: expandedValue
  }), [value, expandedValue]);
  const resolvedClassName = typeof className === "function" ? className(state) : className;
  const ref = reactExports.useRef(null);
  const controlId = useId();
  const handleExpandedChange = reactExports.useCallback((newExpanded) => {
    if (onExpandedChange) {
      onExpandedChange(newExpanded);
    }
    if (expanded === void 0) {
      setInternalExpanded(newExpanded);
    }
  }, [onExpandedChange, expanded]);
  const prevQuickFilterValuesRef = reactExports.useRef(quickFilterValues);
  reactExports.useEffect(() => {
    if (!isDeepEqual(prevQuickFilterValuesRef.current, quickFilterValues)) {
      prevQuickFilterValuesRef.current = quickFilterValues;
      setValue((prevSearchValue) => isDeepEqual(parser(prevSearchValue), quickFilterValues) ? prevSearchValue : formatter(quickFilterValues ?? []));
    }
  }, [quickFilterValues, formatter, parser]);
  const isFirstRender = reactExports.useRef(true);
  const previousExpandedValue = reactExports.useRef(expandedValue);
  reactExports.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (previousExpandedValue.current !== expandedValue) {
      if (expandedValue) {
        requestAnimationFrame(() => {
          controlRef.current?.focus({
            preventScroll: true
          });
        });
      } else {
        triggerRef.current?.focus({
          preventScroll: true
        });
      }
      previousExpandedValue.current = expandedValue;
    }
  }, [expandedValue]);
  const setQuickFilterValueDebounced = reactExports.useMemo(() => debounce((newValue) => {
    const newQuickFilterValues = parser(newValue);
    prevQuickFilterValuesRef.current = newQuickFilterValues;
    apiRef.current.setQuickFilterValues(newQuickFilterValues);
  }, debounceMs), [apiRef, debounceMs, parser]);
  reactExports.useEffect(() => setQuickFilterValueDebounced.clear, [setQuickFilterValueDebounced]);
  const handleValueChange = reactExports.useCallback((event) => {
    const newValue = event.target.value;
    setValue(newValue);
    setQuickFilterValueDebounced(newValue);
  }, [setQuickFilterValueDebounced]);
  const handleClearValue = reactExports.useCallback(() => {
    setValue("");
    apiRef.current.setQuickFilterValues([]);
    controlRef.current?.focus();
  }, [apiRef, controlRef]);
  const contextValue = reactExports.useMemo(() => ({
    controlRef,
    triggerRef,
    state,
    controlId,
    clearValue: handleClearValue,
    onValueChange: handleValueChange,
    onExpandedChange: handleExpandedChange
  }), [controlId, state, handleValueChange, handleClearValue, handleExpandedChange]);
  useEnhancedEffect(() => {
    if (ref.current && triggerRef.current) {
      ref.current.style.setProperty("--trigger-width", `${triggerRef.current?.offsetWidth}px`);
    }
  }, []);
  const element = useComponentRenderer("div", render, _extends({
    className: resolvedClassName
  }, other, {
    ref
  }), state);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QuickFilterContext.Provider, {
    value: contextValue,
    children: element
  });
}
const _excluded$5 = ["render", "className", "slotProps", "onKeyDown", "onChange"];
const QuickFilterControl = forwardRef(function QuickFilterControl2(props, ref) {
  const {
    render,
    className,
    slotProps,
    onKeyDown,
    onChange
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$5);
  const rootProps = useGridRootProps();
  const {
    state,
    controlId,
    controlRef,
    onValueChange,
    onExpandedChange,
    clearValue
  } = useQuickFilterContext();
  const resolvedClassName = typeof className === "function" ? className(state) : className;
  const handleRef = useForkRef(controlRef, ref);
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      if (state.value === "") {
        onExpandedChange(false);
      } else {
        clearValue();
      }
    }
    onKeyDown?.(event);
  };
  const handleBlur = (event) => {
    if (state.value === "") {
      onExpandedChange(false);
    }
    slotProps?.htmlInput?.onBlur?.(event);
  };
  const handleChange = (event) => {
    if (!state.expanded) {
      onExpandedChange(true);
    }
    onValueChange(event);
    onChange?.(event);
  };
  const element = useComponentRenderer(rootProps.slots.baseTextField, render, _extends({}, rootProps.slotProps?.baseTextField, {
    slotProps: _extends({
      htmlInput: _extends({
        role: "searchbox",
        id: controlId,
        tabIndex: state.expanded ? void 0 : -1
      }, slotProps?.htmlInput, {
        onBlur: handleBlur
      })
    }, slotProps),
    value: state.value,
    className: resolvedClassName
  }, other, {
    onChange: handleChange,
    onKeyDown: handleKeyDown,
    ref: handleRef
  }), state);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, {
    children: element
  });
});
const _excluded$4 = ["render", "className", "onClick"];
const QuickFilterClear = forwardRef(function QuickFilterClear2(props, ref) {
  const {
    render,
    className,
    onClick
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$4);
  const rootProps = useGridRootProps();
  const {
    state,
    clearValue
  } = useQuickFilterContext();
  const resolvedClassName = typeof className === "function" ? className(state) : className;
  const handleClick = (event) => {
    clearValue();
    onClick?.(event);
  };
  const element = useComponentRenderer(rootProps.slots.baseIconButton, render, _extends({}, rootProps.slotProps?.baseIconButton, {
    className: resolvedClassName,
    tabIndex: -1
  }, other, {
    onClick: handleClick,
    ref
  }), state);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, {
    children: element
  });
});
const _excluded$3 = ["render", "className", "onClick", "onPointerUp"];
const FilterPanelTrigger = forwardRef(function FilterPanelTrigger2(props, ref) {
  const {
    render,
    className,
    onClick,
    onPointerUp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$3);
  const rootProps = useGridRootProps();
  const buttonId = useId();
  const panelId = useId();
  const apiRef = useGridApiContext();
  const panelState = useGridSelector(apiRef, gridPreferencePanelStateSelector);
  const open = panelState.open && panelState.openedPanelValue === GridPreferencePanelsValue.filters;
  const activeFilters = useGridSelector(apiRef, gridFilterActiveItemsSelector);
  const filterCount = activeFilters.length;
  const state = {
    open,
    filterCount
  };
  const resolvedClassName = typeof className === "function" ? className(state) : className;
  const {
    triggers
  } = useGridPanelContext();
  const handleRef = useForkRef(ref, triggers.filterPanel.setRef);
  const handleClick = (event) => {
    if (open) {
      apiRef.current.hidePreferences();
    } else {
      apiRef.current.showPreferences(GridPreferencePanelsValue.filters, panelId, buttonId);
    }
    onClick?.(event);
  };
  const handlePointerUp = (event) => {
    if (open) {
      event.stopPropagation();
    }
    onPointerUp?.(event);
  };
  const element = useComponentRenderer(rootProps.slots.baseButton, render, _extends({}, rootProps.slotProps?.baseButton, {
    id: buttonId,
    "aria-haspopup": "true",
    "aria-expanded": open ? "true" : void 0,
    "aria-controls": open ? panelId : void 0,
    onClick: handleClick,
    onPointerUp: handlePointerUp,
    className: resolvedClassName
  }, other, {
    ref: handleRef
  }), state);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, {
    children: element
  });
});
const _excluded$2 = ["render", "className", "onClick", "onPointerUp"];
const ColumnsPanelTrigger = forwardRef(function ColumnsPanelTrigger2(props, ref) {
  const {
    render,
    className,
    onClick,
    onPointerUp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$2);
  const rootProps = useGridRootProps();
  const buttonId = useId();
  const panelId = useId();
  const apiRef = useGridApiContext();
  const panelState = useGridSelector(apiRef, gridPreferencePanelStateSelector);
  const open = panelState.open && panelState.openedPanelValue === GridPreferencePanelsValue.columns;
  const state = {
    open
  };
  const resolvedClassName = typeof className === "function" ? className(state) : className;
  const {
    triggers
  } = useGridPanelContext();
  const handleRef = useForkRef(ref, triggers.columnsPanel.setRef);
  const handleClick = (event) => {
    if (open) {
      apiRef.current.hidePreferences();
    } else {
      apiRef.current.showPreferences(GridPreferencePanelsValue.columns, panelId, buttonId);
    }
    onClick?.(event);
  };
  const handlePointerUp = (event) => {
    if (open) {
      event.stopPropagation();
    }
    onPointerUp?.(event);
  };
  const element = useComponentRenderer(rootProps.slots.baseButton, render, _extends({}, rootProps.slotProps?.baseButton, {
    id: buttonId,
    "aria-haspopup": "true",
    "aria-expanded": open ? "true" : void 0,
    "aria-controls": open ? panelId : void 0,
    className: resolvedClassName
  }, other, {
    onPointerUp: handlePointerUp,
    onClick: handleClick,
    ref: handleRef
  }), state);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, {
    children: element
  });
});
const _excluded$1 = ["render", "options", "onClick"];
const ExportCsv = forwardRef(function ExportCsv2(props, ref) {
  const {
    render,
    options,
    onClick
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$1);
  const rootProps = useGridRootProps();
  const apiRef = useGridApiContext();
  const handleClick = (event) => {
    apiRef.current.exportDataAsCsv(options);
    onClick?.(event);
  };
  const element = useComponentRenderer(rootProps.slots.baseButton, render, _extends({}, rootProps.slotProps?.baseButton, {
    onClick: handleClick
  }, other, {
    ref
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, {
    children: element
  });
});
const _excluded = ["render", "options", "onClick"];
const ExportPrint = forwardRef(function ExportPrint2(props, ref) {
  const {
    render,
    options,
    onClick
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const rootProps = useGridRootProps();
  const apiRef = useGridApiContext();
  const handleClick = (event) => {
    apiRef.current.exportDataAsPrint(options);
    onClick?.(event);
  };
  const element = useComponentRenderer(rootProps.slots.baseButton, render, _extends({}, rootProps.slotProps?.baseButton, {
    onClick: handleClick
  }, other, {
    ref
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, {
    children: element
  });
});
export {
  minimalContentHeight as $,
  GRID_ROOT_GROUP_ID as A,
  gridRowTreeSelector as B,
  ColumnsPanelTrigger as C,
  gridSortedRowIdsSelector as D,
  ExportPrint as E,
  FilterPanelTrigger as F,
  GridPreferencePanelsValue as G,
  gridColumnDefinitionsSelector as H,
  objectShallowCompare as I,
  gridExpandedSortedRowIdsSelector as J,
  gridExpandedSortedRowEntriesSelector as K,
  gridFilteredSortedTopLevelRowEntriesSelector as L,
  isAutogeneratedRow as M,
  gridColumnsStateSelector as N,
  gridRowCountSelector as O,
  gridExpandedRowCountSelector as P,
  QuickFilter as Q,
  gridPinnedRowsCountSelector as R,
  gridVisibleColumnDefinitionsSelector as S,
  gridRowsLoadingSelector as T,
  gridFilterActiveItemsLookupSelector as U,
  gridSortColumnLookupSelector as V,
  createSelectorMemoized$1 as W,
  isDeepEqual as X,
  createSelector$1 as Y,
  gridPinnedRowsSelector as Z,
  gridPinnedColumnsSelector as _,
  QuickFilterControl as a,
  gridVisiblePinnedColumnDefinitionsSelector as a0,
  gridHasColSpanSelector as a1,
  getValidRowHeight as a2,
  gridColumnPositionsSelector as a3,
  lruMemoize as a4,
  GridPinnedColumnPosition as a5,
  useComponentRenderer as a6,
  gridPreferencePanelSelectorWithLabel as a7,
  gridSortModelSelector as a8,
  gridFilterableColumnDefinitionsSelector as a9,
  buildRootGroup as aA,
  gridListColumnSelector as aB,
  gridQuickFilterValuesSelector as aC,
  gridSortedRowEntriesSelector as aD,
  gridFilterModelSelector as aa,
  gridFilterableColumnLookupSelector as ab,
  gridInitialColumnVisibilityModelSelector as ac,
  useQuickFilterContext as ad,
  gridTopLevelRowCountSelector as ae,
  gridFilteredTopLevelRowCountSelector as af,
  isObjectEmpty as ag,
  gridExpandedSortedRowIndexLookupSelector as ah,
  getRowValue as ai,
  GridRootPropsContext as aj,
  GridApiContext as ak,
  GridPanelContextProvider as al,
  EMPTY_PINNED_COLUMN_FIELDS as am,
  gridFilteredSortedRowIdsSelector as an,
  gridVisibleColumnFieldsSelector as ao,
  createRowsInternalCache as ap,
  computeRowsUpdates as aq,
  updateCacheWithNewRows as ar,
  getTreeNodeDescendants as as,
  getRowIdFromRowModel as at,
  gridRowGroupingNameSelector as au,
  gridRowTreeDepthsSelector as av,
  getTopLevelRowCount as aw,
  gridDataRowsSelector as ax,
  getRowsStateFromCache as ay,
  gridRowGroupsToFetchSelector as az,
  QuickFilterClear as b,
  ExportCsv as c,
  useGridRootProps as d,
  useGridPanelContext as e,
  forwardRef as f,
  useGridSelector as g,
  gridPreferencePanelStateSelector as h,
  gridFilterActiveItemsSelector as i,
  gridColumnLookupSelector as j,
  createRootSelector as k,
  createSelector as l,
  fastObjectShallowCompare as m,
  gridRowNodeSelector as n,
  gridColumnFieldsSelector as o,
  gridColumnVisibilityModelSelector as p,
  isAutogeneratedRowNode as q,
  reactMajor as r,
  gridRowMaximumTreeDepthSelector as s,
  createSelectorMemoized as t,
  useGridApiContext as u,
  gridDataRowIdsSelector as v,
  gridRowsLookupSelector as w,
  gridFilteredRowCountSelector as x,
  GRID_ID_AUTOGENERATED as y,
  gridFilteredRowsLookupSelector as z
};
