(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[119],{

/***/ "./node_modules/@vueuse/core/dist/index.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/@vueuse/core/dist/index.esm.js ***!
  \*****************************************************/
/*! exports provided: and, assert, biSyncRef, bypassFilter, clamp, containsProp, controlledComputed, controlledRef, createEventHook, createFilterWrapper, createSingletonPromise, debounceFilter, debouncedWatch, extendRef, get, ignorableWatch, increaseWithUnit, invoke, isBoolean, isClient, isDef, isFunction, isNumber, isObject, isString, isWindow, makeDestructurable, noop, not, now, or, pausableFilter, pausableWatch, promiseTimeout, reactify, reactifyObject, reactivePick, set, syncRef, throttleFilter, throttledWatch, timestamp, tryOnMounted, tryOnUnmounted, until, useCounter, useDebounce, useDebounceFn, useInterval, useIntervalFn, useLastChanged, useThrottle, useThrottleFn, useTimeout, useTimeoutFn, useToggle, watchWithFilter, when, whenever, DefaultMagicKeysAliasMap, SwipeDirection, TransitionPresets, asyncComputed, autoResetRef, breakpointsAntDesign, breakpointsBootstrapV5, breakpointsSematic, breakpointsTailwind, breakpointsVuetify, createFetch, createGlobalState, onClickOutside, onKeyDown, onKeyPressed, onKeyStroke, onKeyUp, onStartTyping, templateRef, toRefs, unrefElement, useActiveElement, useAsyncState, useBattery, useBreakpoints, useBrowserLocation, useClipboard, useCssVar, useDark, useDeviceLight, useDeviceMotion, useDeviceOrientation, useDevicePixelRatio, useDevicesList, useDocumentVisibility, useElementBounding, useElementSize, useElementVisibility, useEventListener, useEventSource, useFavicon, useFetch, useFullscreen, useGeolocation, useIdle, useIntersectionObserver, useLocalStorage, useMagicKeys, useManualRefHistory, useMediaControls, useMediaQuery, useMouse, useMouseInElement, useMousePressed, useMutationObserver, useNetwork, useNow, useOnline, usePageLeave, useParallax, usePermission, usePointerSwipe, usePreferredColorScheme, usePreferredDark, usePreferredLanguages, useRafFn, useRefHistory, useResizeObserver, useScriptTag, useSessionStorage, useShare, useSpeechRecognition, useStorage, useSwipe, useTimeAgo, useTimestamp, useTitle, useTransition, useUrlSearchParams, useUserMedia, useVModel, useVModels, useWebSocket, useWebWorker, useWebWorkerFn, useWindowScroll, useWindowSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultMagicKeysAliasMap", function() { return DefaultMagicKeysAliasMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwipeDirection", function() { return SwipeDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitionPresets", function() { return TransitionPresets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncComputed", function() { return asyncComputed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoResetRef", function() { return autoResetRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpointsAntDesign", function() { return breakpointsAntDesign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpointsBootstrapV5", function() { return breakpointsBootstrapV5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpointsSematic", function() { return breakpointsSematic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpointsTailwind", function() { return breakpointsTailwind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpointsVuetify", function() { return breakpointsVuetify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFetch", function() { return createFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalState", function() { return createGlobalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onClickOutside", function() { return onClickOutside; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onKeyDown", function() { return onKeyDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onKeyPressed", function() { return onKeyPressed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onKeyStroke", function() { return onKeyStroke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onKeyUp", function() { return onKeyUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStartTyping", function() { return onStartTyping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateRef", function() { return templateRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRefs", function() { return toRefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unrefElement", function() { return unrefElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useActiveElement", function() { return useActiveElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAsyncState", function() { return useAsyncState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useBattery", function() { return useBattery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useBreakpoints", function() { return useBreakpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useBrowserLocation", function() { return useBrowserLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useClipboard", function() { return useClipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCssVar", function() { return useCssVar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDark", function() { return useDark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeviceLight", function() { return useDeviceLight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeviceMotion", function() { return useDeviceMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeviceOrientation", function() { return useDeviceOrientation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDevicePixelRatio", function() { return useDevicePixelRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDevicesList", function() { return useDevicesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDocumentVisibility", function() { return useDocumentVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useElementBounding", function() { return useElementBounding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useElementSize", function() { return useElementSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useElementVisibility", function() { return useElementVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEventListener", function() { return useEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEventSource", function() { return useEventSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFavicon", function() { return useFavicon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFetch", function() { return useFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFullscreen", function() { return useFullscreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGeolocation", function() { return useGeolocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIdle", function() { return useIdle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIntersectionObserver", function() { return useIntersectionObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLocalStorage", function() { return useLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMagicKeys", function() { return useMagicKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useManualRefHistory", function() { return useManualRefHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMediaControls", function() { return useMediaControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMediaQuery", function() { return useMediaQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMouse", function() { return useMouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMouseInElement", function() { return useMouseInElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMousePressed", function() { return useMousePressed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMutationObserver", function() { return useMutationObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useNetwork", function() { return useNetwork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useNow", function() { return useNow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOnline", function() { return useOnline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePageLeave", function() { return usePageLeave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useParallax", function() { return useParallax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePermission", function() { return usePermission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePointerSwipe", function() { return usePointerSwipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePreferredColorScheme", function() { return usePreferredColorScheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePreferredDark", function() { return usePreferredDark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePreferredLanguages", function() { return usePreferredLanguages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRafFn", function() { return useRafFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRefHistory", function() { return useRefHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useResizeObserver", function() { return useResizeObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useScriptTag", function() { return useScriptTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSessionStorage", function() { return useSessionStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useShare", function() { return useShare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSpeechRecognition", function() { return useSpeechRecognition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStorage", function() { return useStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSwipe", function() { return useSwipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTimeAgo", function() { return useTimeAgo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTimestamp", function() { return useTimestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTitle", function() { return useTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTransition", function() { return useTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUrlSearchParams", function() { return useUrlSearchParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUserMedia", function() { return useUserMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useVModel", function() { return useVModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useVModels", function() { return useVModels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWebSocket", function() { return useWebSocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWebWorker", function() { return useWebWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWebWorkerFn", function() { return useWebWorkerFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWindowScroll", function() { return useWindowScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWindowSize", function() { return useWindowSize; });
/* harmony import */ var vue_demi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-demi */ "./node_modules/vue-demi/lib/index.mjs");
/* harmony import */ var _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vueuse/shared */ "./node_modules/@vueuse/shared/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "and", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["and"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["assert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "biSyncRef", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["biSyncRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bypassFilter", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["bypassFilter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["clamp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "containsProp", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["containsProp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "controlledComputed", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["controlledComputed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "controlledRef", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["controlledRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createEventHook", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["createEventHook"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFilterWrapper", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["createFilterWrapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSingletonPromise", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["createSingletonPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounceFilter", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["debounceFilter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debouncedWatch", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["debouncedWatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendRef", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["extendRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "get", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["get"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ignorableWatch", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["ignorableWatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "increaseWithUnit", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["increaseWithUnit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invoke", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["invoke"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["isBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isClient", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["isClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDef", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["isDef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWindow", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["isWindow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeDestructurable", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["makeDestructurable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["noop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "not", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["not"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "now", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["now"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "or", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["or"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pausableFilter", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["pausableFilter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pausableWatch", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["pausableWatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "promiseTimeout", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["promiseTimeout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reactify", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["reactify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reactifyObject", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["reactifyObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reactivePick", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["reactivePick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "set", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["set"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "syncRef", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["syncRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttleFilter", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["throttleFilter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttledWatch", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["throttledWatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timestamp", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["timestamp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tryOnMounted", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["tryOnMounted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tryOnUnmounted", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["tryOnUnmounted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "until", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["until"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCounter", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["useCounter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDebounce", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["useDebounce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDebounceFn", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["useDebounceFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useInterval", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["useInterval"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useIntervalFn", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["useIntervalFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLastChanged", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["useLastChanged"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useThrottle", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["useThrottle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useThrottleFn", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["useThrottleFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTimeout", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["useTimeout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTimeoutFn", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["useTimeoutFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useToggle", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["useToggle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchWithFilter", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["watchWithFilter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "when", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["when"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "whenever", function() { return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["whenever"]; });





/**
 * Create an asynchronous computed dependency.
 *
 * @see https://vueuse.org/asyncComputed
 * @param evaluationCallback     The promise-returning callback which generates the computed value
 * @param initialState           The initial state, used until the first evaluation finishes
 * @param optionsOrRef           Additional options or a ref passed to receive the updates of the async evaluation
 */
function asyncComputed(evaluationCallback, initialState, optionsOrRef) {
    let options;
    if (Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["isRef"])(optionsOrRef)) {
        options = {
            evaluating: optionsOrRef,
        };
    }
    else {
        options = optionsOrRef || {};
    }
    const { lazy = false, evaluating = undefined, } = options;
    const started = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(!lazy);
    const current = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(initialState);
    let counter = 0;
    Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watchEffect"])(async (onInvalidate) => {
        if (!started.value)
            return;
        counter++;
        const counterAtBeginning = counter;
        let hasFinished = false;
        try {
            // Defer initial setting of `evaluating` ref
            // to avoid having it as a dependency
            if (evaluating) {
                Promise.resolve().then(() => {
                    evaluating.value = true;
                });
            }
            const result = await evaluationCallback((cancelCallback) => {
                onInvalidate(() => {
                    if (evaluating)
                        evaluating.value = false;
                    if (!hasFinished)
                        cancelCallback();
                });
            });
            if (counterAtBeginning === counter)
                current.value = result;
        }
        finally {
            if (evaluating)
                evaluating.value = false;
            hasFinished = true;
        }
    });
    if (lazy) {
        return Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(() => {
            started.value = true;
            return current.value;
        });
    }
    else {
        return current;
    }
}

/**
 * Create a ref which will be reset to the default value after some time.
 *
 * @see https://vueuse.org/autoResetRef
 * @param defaultValue The value which will be set.
 * @param afterMs      A zero-or-greater delay in milliseconds.
 */
function autoResetRef(defaultValue, afterMs = 10000) {
    return Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["customRef"])((track, trigger) => {
        let value = defaultValue;
        let timer;
        const resetAfter = () => setTimeout(() => {
            value = defaultValue;
            trigger();
        }, Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(afterMs));
        return {
            get() {
                track();
                return value;
            },
            set(newValue) {
                value = newValue;
                trigger();
                clearTimeout(timer);
                timer = resetAfter();
            },
        };
    });
}

const defaultWindow = /* #__PURE__ */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["isClient"] ? window : undefined;
const defaultDocument = /* #__PURE__ */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["isClient"] ? window.document : undefined;
const defaultNavigator = /* #__PURE__ */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["isClient"] ? window.navigator : undefined;

function withScope(factory) {
    let state = null;
    const document = defaultDocument;
    if (document) {
        const container = document.createElement('div');
        Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["createApp"])({
            setup() {
                state = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["reactive"])(factory());
            },
            render: () => null,
        }).mount(container);
    }
    else {
        state = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["reactive"])(factory());
    }
    return state;
}
/**
 * Keep states in the global scope to be reusable across Vue instances.
 *
 * @see https://vueuse.org/createGlobalState
 * @param stateFactory A factory function to create the state
 */
function createGlobalState(stateFactory) {
    let state;
    return () => {
        if (state == null)
            state = withScope(stateFactory);
        return state;
    };
}

/**
 * Get the dom element of a ref of element or Vue component instance
 *
 * @param elRef
 */
function unrefElement(elRef) {
    var _a, _b;
    const plain = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(elRef);
    return (_b = (_a = plain) === null || _a === void 0 ? void 0 : _a.$el) !== null && _b !== void 0 ? _b : plain;
}

function useEventListener(...args) {
    let target;
    let event;
    let listener;
    let options;
    if (Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["isString"])(args[0])) {
        [event, listener, options] = args;
        target = defaultWindow;
    }
    else {
        [target, event, listener, options] = args;
    }
    if (!target)
        return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["noop"];
    let cleanup = _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["noop"];
    const stopWatch = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])(() => Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(target), (el) => {
        cleanup();
        if (!el)
            return;
        el.addEventListener(event, listener, options);
        cleanup = () => {
            el.removeEventListener(event, listener, options);
            cleanup = _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["noop"];
        };
    }, { immediate: true, flush: 'post' });
    const stop = () => {
        stopWatch();
        cleanup();
    };
    Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["tryOnUnmounted"])(stop);
    return stop;
}

/**
 * Listen for clicks outside of an element.
 *
 * @see https://vueuse.org/onClickOutside
 * @param target
 * @param handler
 * @param options
 */
function onClickOutside(target, handler, options = {}) {
    const { window = defaultWindow, event = 'pointerdown' } = options;
    if (!window)
        return;
    const listener = (event) => {
        const el = unrefElement(target);
        if (!el)
            return;
        if (el === event.target || event.composedPath().includes(el))
            return;
        handler(event);
    };
    return useEventListener(window, event, listener, { passive: true });
}

const createKeyPredicate = (keyFilter) => typeof keyFilter === 'function'
    ? keyFilter
    : typeof keyFilter === 'string'
        ? (event) => event.key === keyFilter
        : keyFilter
            ? () => true
            : () => false;
/**
 * Listen for keyboard keys being stroked.
 *
 * @see https://vueuse.org/onKeyStroke
 * @param key
 * @param handler
 * @param options
 */
function onKeyStroke(key, handler, options = {}) {
    const { target = defaultWindow, eventName = 'keydown', passive = false } = options;
    const predicate = createKeyPredicate(key);
    const listener = (e) => {
        if (predicate(e))
            handler(e);
    };
    return useEventListener(target, eventName, listener, passive);
}
/**
 * Listen to the keydown event of the given key.
 *
 * @see https://vueuse.org/onKeyStroke
 * @param key
 * @param handler
 * @param options
 */
function onKeyDown(key, handler, options = {}) {
    return onKeyStroke(key, handler, Object.assign(Object.assign({}, options), { eventName: 'keydown' }));
}
/**
 * Listen to the keypress event of the given key.
 *
 * @see https://vueuse.org/onKeyStroke
 * @param key
 * @param handler
 * @param options
 */
function onKeyPressed(key, handler, options = {}) {
    return onKeyStroke(key, handler, Object.assign(Object.assign({}, options), { eventName: 'keypress' }));
}
/**
 * Listen to the keyup event of the given key.
 *
 * @see https://vueuse.org/onKeyStroke
 * @param key
 * @param handler
 * @param options
 */
function onKeyUp(key, handler, options = {}) {
    return onKeyStroke(key, handler, Object.assign(Object.assign({}, options), { eventName: 'keyup' }));
}

/* this implementation is original ported from https://github.com/streamich/react-use by Vadim Dalecky */
const isFocusedElementEditable = () => {
    const { activeElement, body } = document;
    if (!activeElement)
        return false;
    // If not element has focus, we assume it is not editable, too.
    if (activeElement === body)
        return false;
    // Assume <input> and <textarea> elements are editable.
    switch (activeElement.tagName) {
        case 'INPUT':
        case 'TEXTAREA':
            return true;
    }
    // Check if any other focused element id editable.
    return activeElement.hasAttribute('contenteditable');
};
const isTypedCharValid = ({ keyCode, metaKey, ctrlKey, altKey, }) => {
    if (metaKey || ctrlKey || altKey)
        return false;
    // 0...9
    if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105))
        return true;
    // a...z
    if (keyCode >= 65 && keyCode <= 90)
        return true;
    // All other keys.
    return false;
};
/**
 * Fires when users start typing on non-editable elements.
 *
 * @see https://vueuse.org/onStartTyping
 * @param callback
 * @param options
 */
function onStartTyping(callback, options = {}) {
    const { document = defaultDocument } = options;
    const keydown = (event) => {
        !isFocusedElementEditable()
            && isTypedCharValid(event)
            && callback(event);
    };
    if (document)
        useEventListener(document, 'keydown', keydown, { passive: true });
}

/**
 * Shorthand for binding ref to template element.
 *
 * @see https://vueuse.org/templateRef
 * @param key
 * @param initialValue
 */
function templateRef(key, initialValue = null) {
    const instance = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["getCurrentInstance"])();
    let _trigger = () => { };
    const element = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["customRef"])((track, trigger) => {
        _trigger = trigger;
        return {
            get() {
                var _a, _b;
                track();
                return (_b = (_a = instance === null || instance === void 0 ? void 0 : instance.proxy) === null || _a === void 0 ? void 0 : _a.$refs[key]) !== null && _b !== void 0 ? _b : initialValue;
            },
            set() { },
        };
    });
    Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["onMounted"])(_trigger);
    Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["onUpdated"])(_trigger);
    return element;
}

/**
 * Extended `toRefs` that also accepts refs of an object.
 *
 * @see https://vueuse.org/toRefs
 * @param objectRef A ref or normal object or array.
 */
function toRefs(objectRef) {
    if (!Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["isRef"])(objectRef))
        return Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["toRefs"])(objectRef);
    const ret = Array.isArray(objectRef.value)
        ? new Array(objectRef.value.length)
        : {};
    // eslint-disable-next-line no-restricted-syntax
    for (const key in objectRef.value) {
        ret[key] = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])({
            get() {
                return objectRef.value[key];
            },
            set(v) {
                objectRef.value[key] = v;
            },
        });
    }
    return ret;
}

/**
 * Reactive `document.activeElement`
 *
 * @see https://vueuse.org/useActiveElement
 * @param options
 */
function useActiveElement(options = {}) {
    const { window = defaultWindow } = options;
    const counter = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
    if (window) {
        useEventListener(window, 'blur', () => counter.value += 1, true);
        useEventListener(window, 'focus', () => counter.value += 1, true);
    }
    return Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(() => {
        // eslint-disable-next-line no-unused-expressions
        counter.value;
        return window === null || window === void 0 ? void 0 : window.document.activeElement;
    });
}

/**
 * Reactive async state. Will not block your setup function and will triggers changes once
 * the promise is ready.
 *
 * @see https://vueuse.org/useAsyncState
 * @param promise         The promise / async function to be resolved
 * @param initialState    The initial state, used until the first evaluation finishes
 * @param options
 */
function useAsyncState(promise, initialState, options = {}) {
    const { immediate = true, delay = 0, onError = _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["noop"], resetOnExecute = true, } = options;
    const state = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["shallowRef"])(initialState);
    const isReady = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
    const error = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(undefined);
    async function execute(delay = 0) {
        if (resetOnExecute)
            state.value = initialState;
        error.value = undefined;
        isReady.value = false;
        if (delay > 0)
            await Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["promiseTimeout"])(delay);
        const _promise = typeof promise === 'function'
            ? promise()
            : promise;
        try {
            const data = await _promise;
            // @ts-ignore
            state.value = data;
            isReady.value = true;
        }
        catch (e) {
            error.value = e;
            onError(e);
        }
    }
    if (immediate)
        execute(delay);
    return {
        state,
        isReady,
        /** @deprecated, use isReady instead */
        ready: isReady,
        error,
        execute,
    };
}

/* this implementation is original ported from https://github.com/logaretm/vue-use-web by Abdelrahman Awad */
/**
 * Reactive Battery Status API.
 *
 * @see https://vueuse.org/useBattery
 * @param options
 */
function useBattery({ navigator = defaultNavigator } = {}) {
    const events = ['chargingchange', 'chargingtimechange', 'dischargingtimechange', 'levelchange'];
    const isSupported = navigator && 'getBattery' in navigator;
    const charging = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
    const chargingTime = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
    const dischargingTime = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
    const level = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(1);
    let battery;
    function updateBatteryInfo() {
        charging.value = this.charging;
        chargingTime.value = this.chargingTime || 0;
        dischargingTime.value = this.dischargingTime || 0;
        level.value = this.level;
    }
    if (isSupported) {
        navigator
            .getBattery()
            .then((_battery) => {
            battery = _battery;
            updateBatteryInfo.call(battery);
            for (const event of events)
                useEventListener(battery, event, updateBatteryInfo, { passive: true });
        });
    }
    return {
        isSupported,
        charging,
        chargingTime,
        dischargingTime,
        level,
    };
}

/* this implementation is original ported from https://github.com/logaretm/vue-use-web by Abdelrahman Awad */
/**
 * Reactive Media Query.
 *
 * @see https://vueuse.org/useMediaQuery
 * @param query
 * @param options
 */
function useMediaQuery(query, options = {}) {
    const { window = defaultWindow } = options;
    if (!window)
        return Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
    const mediaQuery = window.matchMedia(query);
    const matches = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(mediaQuery.matches);
    const handler = (event) => {
        matches.value = event.matches;
    };
    if ('addEventListener' in mediaQuery) {
        mediaQuery.addEventListener('change', handler);
    }
    else {
        // @ts-expect-error - fallback for Safari < 14 and older browsers
        mediaQuery.addListener(handler);
    }
    Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["tryOnUnmounted"])(() => {
        if ('removeEventListener' in mediaQuery) {
            mediaQuery.removeEventListener('change', handler);
        }
        else {
            // @ts-expect-error - fallback for Safari < 14 and older browsers
            mediaQuery.removeListener(handler);
        }
    });
    return matches;
}

/**
 * Breakpoints from Tailwind V2
 *
 * @see https://tailwindcss.com/docs/breakpoints
 */
const breakpointsTailwind = {
    'sm': 640,
    'md': 768,
    'lg': 1024,
    'xl': 1280,
    '2xl': 1536,
};
/**
 * Breakpoints from Bootstrap V5
 *
 * @see https://getbootstrap.com/docs/5.0/layout/breakpoints
 */
const breakpointsBootstrapV5 = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
};
/**
 * Breakpoints from Vuetify V2
 *
 * @see https://vuetifyjs.com/en/features/breakpoints
 */
const breakpointsVuetify = {
    xs: 600,
    sm: 960,
    md: 1264,
    lg: 1904,
};
/**
 * Breakpoints from Ant Design
 *
 * @see https://ant.design/components/layout/#breakpoint-width
 */
const breakpointsAntDesign = {
    xs: 480,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1600,
};
/**
 * Sematic Breakpoints
 */
const breakpointsSematic = {
    mobileS: 320,
    mobileM: 375,
    mobileL: 425,
    tablet: 768,
    laptop: 1024,
    laptopL: 1440,
    desktop4K: 2560,
};

/**
 * Reactively viewport breakpoints
 *
 * @see https://vueuse.org/useBreakpoints
 * @param options
 */
function useBreakpoints(breakpoints, options = {}) {
    function getValue(k, delta) {
        let v = breakpoints[k];
        if (delta != null)
            v = Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["increaseWithUnit"])(v, delta);
        if (typeof v === 'number')
            v = `${v}px`;
        return v;
    }
    const { window = defaultWindow } = options;
    function match(query) {
        if (!window)
            return false;
        return window.matchMedia(query).matches;
    }
    return {
        greater(k) {
            return useMediaQuery(`(min-width: ${getValue(k)})`, options);
        },
        smaller(k) {
            return useMediaQuery(`(max-width: ${getValue(k, -0.1)})`, options);
        },
        between(a, b) {
            return useMediaQuery(`(min-width: ${getValue(a)}) and (max-width: ${getValue(b, -0.1)})`, options);
        },
        isGreater(k) {
            return match(`(min-width: ${getValue(k)})`);
        },
        isSmaller(k) {
            return match(`(max-width: ${getValue(k, -0.1)})`);
        },
        isInBetween(a, b) {
            return match(`(min-width: ${getValue(a)}) and (max-width: ${getValue(b, -0.1)})`);
        },
    };
}

/* this implementation is original ported from https://github.com/logaretm/vue-use-web by Abdelrahman Awad */
/**
 * Reactive browser location.
 *
 * @see https://vueuse.org/useBrowserLocation
 * @param options
 */
function useBrowserLocation({ window = defaultWindow } = {}) {
    const buildState = (trigger) => {
        const { state, length } = (window === null || window === void 0 ? void 0 : window.history) || {};
        const { hash, host, hostname, href, origin, pathname, port, protocol, search } = (window === null || window === void 0 ? void 0 : window.location) || {};
        return {
            trigger,
            state,
            length,
            hash,
            host,
            hostname,
            href,
            origin,
            pathname,
            port,
            protocol,
            search,
        };
    };
    const state = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(buildState('load'));
    if (window) {
        useEventListener(window, 'popstate', () => state.value = buildState('popstate'), { passive: true });
        useEventListener(window, 'hashchange', () => state.value = buildState('hashchange'), { passive: true });
    }
    return state;
}

/* this implementation is original ported from https://github.com/logaretm/vue-use-web by Abdelrahman Awad */
function useClipboard(options = {}) {
    const { navigator = defaultNavigator, read = true, source, copiedDuring = 1500, } = options;
    const events = ['copy', 'cut'];
    const isSupported = Boolean(navigator && 'clipboard' in navigator);
    const text = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])('');
    const copied = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
    const timeout = Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["useTimeoutFn"])(() => copied.value = false, copiedDuring);
    function updateText() {
        // @ts-expect-error untyped API
        navigator.clipboard.readText().then((value) => {
            text.value = value;
        });
    }
    if (isSupported && read) {
        for (const event of events)
            useEventListener(event, updateText);
    }
    async function copy(value = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(source)) {
        if (isSupported && value != null) {
            // @ts-expect-error untyped API
            await navigator.clipboard.writeText(value);
            text.value = value;
            copied.value = true;
            timeout.start();
        }
    }
    return {
        isSupported,
        text: text,
        copied: copied,
        copy,
    };
}

/**
 * Manipulate CSS variables.
 *
 * @see https://vueuse.org/useCssVar
 * @param prop
 * @param el
 * @param options
 */
function useCssVar(prop, target, { window = defaultWindow } = {}) {
    const variable = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])('');
    const elRef = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(() => { var _a; return unrefElement(target) || ((_a = window === null || window === void 0 ? void 0 : window.document) === null || _a === void 0 ? void 0 : _a.documentElement); });
    Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])(elRef, (el) => {
        if (el && window)
            variable.value = window.getComputedStyle(el).getPropertyValue(prop);
    }, { immediate: true });
    Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])(variable, (val) => {
        var _a;
        if ((_a = elRef.value) === null || _a === void 0 ? void 0 : _a.style)
            elRef.value.style.setProperty(prop, val);
    });
    return variable;
}

const Serializers = {
    boolean: {
        read: (v) => v != null ? v === 'true' : null,
        write: (v) => String(v),
    },
    object: {
        read: (v) => v ? JSON.parse(v) : null,
        write: (v) => JSON.stringify(v),
    },
    number: {
        read: (v) => v != null ? Number.parseFloat(v) : null,
        write: (v) => String(v),
    },
    any: {
        read: (v) => v != null ? v : null,
        write: (v) => String(v),
    },
    string: {
        read: (v) => v != null ? v : null,
        write: (v) => String(v),
    },
};
/**
 * Reactive LocalStorage/SessionStorage.
 *
 * @see https://vueuse.org/useStorage
 * @param key
 * @param defaultValue
 * @param storage
 * @param options
 */
function useStorage(key, defaultValue, storage = defaultWindow === null || defaultWindow === void 0 ? void 0 : defaultWindow.localStorage, options = {}) {
    var _a;
    const { flush = 'pre', deep = true, listenToStorageChanges = true, window = defaultWindow, eventFilter, } = options;
    const data = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(defaultValue);
    const type = defaultValue == null
        ? 'any'
        : typeof defaultValue === 'boolean'
            ? 'boolean'
            : typeof defaultValue === 'string'
                ? 'string'
                : typeof defaultValue === 'object'
                    ? 'object'
                    : Array.isArray(defaultValue)
                        ? 'object'
                        : !Number.isNaN(defaultValue)
                            ? 'number'
                            : 'any';
    const serializer = (_a = options.serializer) !== null && _a !== void 0 ? _a : Serializers[type];
    function read(event) {
        if (!storage)
            return;
        if (event && event.key !== key)
            return;
        try {
            const rawValue = event ? event.newValue : storage.getItem(key);
            if (rawValue == null) {
                data.value = defaultValue;
                storage.setItem(key, serializer.write(defaultValue));
            }
            else {
                data.value = serializer.read(rawValue);
            }
        }
        catch (e) {
            console.warn(e);
        }
    }
    read();
    if (window && listenToStorageChanges)
        useEventListener(window, 'storage', read);
    Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["watchWithFilter"])(data, () => {
        if (!storage) // SSR
            return;
        try {
            if (data.value == null)
                storage.removeItem(key);
            else
                storage.setItem(key, serializer.write(data.value));
        }
        catch (e) {
            console.warn(e);
        }
    }, {
        flush,
        deep,
        eventFilter,
    });
    return data;
}

/**
 * Reactive dark theme preference.
 *
 * @see https://vueuse.org/usePreferredDark
 * @param [options]
 */
function usePreferredDark(options) {
    return useMediaQuery('(prefers-color-scheme: dark)', options);
}

/**
 * Reactive dark mode with auto data persistence.
 *
 * @see https://vueuse.org/useDark
 * @param options
 */
function useDark(options = {}) {
    const { selector = 'html', attribute = 'class', valueDark = 'dark', valueLight = '', window = defaultWindow, storage = defaultWindow === null || defaultWindow === void 0 ? void 0 : defaultWindow.localStorage, storageKey = 'vueuse-color-scheme', listenToStorageChanges = true, } = options;
    const preferredDark = usePreferredDark({ window });
    const store = storageKey == null
        ? Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])('auto')
        : useStorage(storageKey, 'auto', storage, { window, listenToStorageChanges });
    const isDark = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])({
        get() {
            return store.value === 'auto'
                ? preferredDark.value
                : store.value === 'dark';
        },
        set(v) {
            if (v === preferredDark.value)
                store.value = 'auto';
            else
                store.value = v ? 'dark' : 'light';
        },
    });
    const onChanged = options.onChanged || ((v) => {
        const el = window === null || window === void 0 ? void 0 : window.document.querySelector(selector);
        if (attribute === 'class') {
            el === null || el === void 0 ? void 0 : el.classList.toggle(valueDark, v);
            if (valueLight)
                el === null || el === void 0 ? void 0 : el.classList.toggle(valueLight, !v);
        }
        else {
            el === null || el === void 0 ? void 0 : el.setAttribute(attribute, v ? valueDark : valueLight);
        }
    });
    Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])(isDark, onChanged, { flush: 'post' });
    Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["tryOnMounted"])(() => onChanged(isDark.value));
    return isDark;
}

/* this implementation is original ported from https://github.com/logaretm/vue-use-web by Abdelrahman Awad */
/**
 * Reactive DeviceLightEvent.
 *
 * @see https://vueuse.org/useDeviceLight
 * @param options
 */
function useDeviceLight({ window = defaultWindow } = {}) {
    const light = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
    if (window) {
        useEventListener(window, 'devicelight', (event) => {
            light.value = event.value;
        });
    }
    return light;
}

/* this implementation is original ported from https://github.com/logaretm/vue-use-web by Abdelrahman Awad */
/**
 * Reactive DeviceMotionEvent.
 *
 * @see https://vueuse.org/useDeviceMotion
 * @param options
 */
function useDeviceMotion(options = {}) {
    const { window = defaultWindow, eventFilter = _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["bypassFilter"], } = options;
    const acceleration = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])({ x: null, y: null, z: null });
    const rotationRate = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])({ alpha: null, beta: null, gamma: null });
    const interval = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
    const accelerationIncludingGravity = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])({
        x: null,
        y: null,
        z: null,
    });
    if (window) {
        const onDeviceMotion = Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["createFilterWrapper"])(eventFilter, (event) => {
            acceleration.value = event.acceleration;
            accelerationIncludingGravity.value = event.accelerationIncludingGravity;
            rotationRate.value = event.rotationRate;
            interval.value = event.interval;
        });
        useEventListener(window, 'devicemotion', onDeviceMotion);
    }
    return {
        acceleration,
        accelerationIncludingGravity,
        rotationRate,
        interval,
    };
}

/* this implementation is original ported from https://github.com/logaretm/vue-use-web by Abdelrahman Awad */
/**
 * Reactive DeviceOrientationEvent.
 *
 * @see https://vueuse.org/useDeviceOrientation
 * @param options
 */
function useDeviceOrientation(options = {}) {
    const { window = defaultWindow } = options;
    const isSupported = Boolean(window && 'DeviceOrientationEvent' in window);
    const isAbsolute = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
    const alpha = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
    const beta = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
    const gamma = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
    if (window && isSupported) {
        useEventListener(window, 'deviceorientation', (event) => {
            isAbsolute.value = event.absolute;
            alpha.value = event.alpha;
            beta.value = event.beta;
            gamma.value = event.gamma;
        });
    }
    return {
        isSupported,
        isAbsolute,
        alpha,
        beta,
        gamma,
    };
}

// device pixel ratio statistics from https://www.mydevice.io/
const DEVICE_PIXEL_RATIO_SCALES = [
    1,
    1.325,
    1.4,
    1.5,
    1.8,
    2,
    2.4,
    2.5,
    2.75,
    3,
    3.5,
    4,
];
/**
 * Reactively track `window.devicePixelRatio`.
 *
 * @see https://vueuse.org/useDevicePixelRatio
 * @param options
 */
function useDevicePixelRatio({ window = defaultWindow, } = {}) {
    if (!window) {
        return {
            pixelRatio: Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(1),
        };
    }
    const pixelRatio = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(window.devicePixelRatio);
    const handleDevicePixelRatio = () => {
        pixelRatio.value = window.devicePixelRatio;
    };
    useEventListener(window, 'resize', handleDevicePixelRatio, { passive: true });
    DEVICE_PIXEL_RATIO_SCALES.forEach((dppx) => {
        // listen mql events in both sides
        const mqlMin = useMediaQuery(`screen and (min-resolution: ${dppx}dppx)`);
        const mqlMax = useMediaQuery(`screen and (max-resolution: ${dppx}dppx)`);
        Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])([mqlMin, mqlMax], handleDevicePixelRatio);
    });
    return { pixelRatio };
}

function usePermission(permissionDesc, options = {}) {
    const { controls = false, navigator = defaultNavigator, } = options;
    const isSupported = Boolean(navigator && 'permissions' in navigator);
    let permissionStatus;
    const desc = typeof permissionDesc === 'string'
        ? { name: permissionDesc }
        : permissionDesc;
    const state = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])();
    const onChange = () => {
        if (permissionStatus)
            state.value = permissionStatus.state;
    };
    const query = Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["createSingletonPromise"])(async () => {
        if (!isSupported)
            return;
        if (!permissionStatus) {
            try {
                permissionStatus = await navigator.permissions.query(desc);
                useEventListener(permissionStatus, 'change', onChange);
                onChange();
            }
            catch (_a) {
                state.value = 'prompt';
            }
        }
        return permissionStatus;
    });
    query();
    if (controls) {
        return {
            state: state,
            isSupported,
            query,
        };
    }
    else {
        return state;
    }
}

/* this implementation is original ported from https://github.com/logaretm/vue-use-web by Abdelrahman Awad */
/**
 * Reactive `enumerateDevices` listing avaliable input/output devices
 *
 * @see https://vueuse.org/useDevicesList
 * @param options
 */
function useDevicesList(options = {}) {
    const { navigator = defaultNavigator, requestPermissions = false, onUpdated, } = options;
    const devices = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])([]);
    const videoInputs = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(() => devices.value.filter(i => i.kind === 'videoinput'));
    const audioInputs = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(() => devices.value.filter(i => i.kind === 'audioinput'));
    const audioOutputs = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(() => devices.value.filter(i => i.kind === 'audiooutput'));
    let isSupported = false;
    const permissionGranted = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
    async function update() {
        if (!isSupported)
            return;
        devices.value = await navigator.mediaDevices.enumerateDevices();
        onUpdated === null || onUpdated === void 0 ? void 0 : onUpdated(devices.value);
    }
    async function ensurePermissions() {
        if (!isSupported)
            return false;
        if (permissionGranted.value)
            return true;
        const { state, query } = usePermission('camera', { controls: true });
        await query();
        if (state.value !== 'granted') {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
            stream.getTracks().forEach(t => t.stop());
            update();
            permissionGranted.value = true;
        }
        else {
            permissionGranted.value = true;
        }
        return permissionGranted.value;
    }
    if (navigator) {
        isSupported = Boolean(navigator.mediaDevices && navigator.mediaDevices.enumerateDevices);
        if (isSupported) {
            if (requestPermissions)
                ensurePermissions();
            useEventListener(navigator.mediaDevices, 'devicechange', update);
            update();
        }
    }
    return {
        devices,
        ensurePermissions,
        permissionGranted,
        videoInputs,
        audioInputs,
        audioOutputs,
        isSupported,
    };
}

/**
 * Reactively track `document.visibilityState`.
 *
 * @see https://vueuse.org/useDocumentVisibility
 * @param options
 */
function useDocumentVisibility({ document = defaultDocument } = {}) {
    if (!document)
        return Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])('visible');
    const visibility = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(document.visibilityState);
    useEventListener(document, 'visibilitychange', () => {
        visibility.value = document.visibilityState;
    });
    return visibility;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

/**
 * Reports changes to the dimensions of an Element's content or the border-box
 *
 * @see https://vueuse.org/useResizeObserver
 * @param target
 * @param callback
 * @param options
 */
function useResizeObserver(target, callback, options = {}) {
    const { window = defaultWindow } = options, observerOptions = __rest(options, ["window"]);
    let observer;
    const isSupported = window && 'ResizeObserver' in window;
    const cleanup = () => {
        if (observer) {
            observer.disconnect();
            observer = undefined;
        }
    };
    const stopWatch = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])(() => unrefElement(target), (el) => {
        cleanup();
        if (isSupported && window && el) {
            // @ts-expect-error missing type
            observer = new window.ResizeObserver(callback);
            observer.observe(el, observerOptions);
        }
    }, { immediate: true, flush: 'post' });
    const stop = () => {
        cleanup();
        stopWatch();
    };
    Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["tryOnUnmounted"])(stop);
    return {
        isSupported,
        stop,
    };
}

/**
 * Reactive size of an HTML element.
 *
 * @see https://vueuse.org/useElementSize
 * @param target
 * @param callback
 * @param options
 */
function useElementBounding(target, options = {}) {
    const height = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
    const bottom = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
    const left = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
    const right = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
    const top = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
    const width = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
    const x = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
    const y = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
    useResizeObserver(target, ([entry]) => {
        height.value = entry.contentRect.height;
        bottom.value = entry.contentRect.bottom;
        left.value = entry.contentRect.left;
        right.value = entry.contentRect.right;
        top.value = entry.contentRect.top;
        width.value = entry.contentRect.width;
        x.value = entry.contentRect.x;
        y.value = entry.contentRect.y;
    }, options);
    return {
        x,
        y,
        top,
        right,
        bottom,
        left,
        width,
        height,
    };
}

/**
 * Reactive size of an HTML element.
 *
 * @see https://vueuse.org/useElementSize
 * @param target
 * @param callback
 * @param options
 */
function useElementSize(target, initialSize = { width: 0, height: 0 }, options = {}) {
    const width = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(initialSize.width);
    const height = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(initialSize.height);
    useResizeObserver(target, ([entry]) => {
        width.value = entry.contentRect.width;
        height.value = entry.contentRect.height;
    }, options);
    return {
        width,
        height,
    };
}

/**
 * Tracks the visibility of an element within the viewport.
 *
 * @see https://vueuse.org/useElementVisibility
 * @param element
 * @param options
 */
function useElementVisibility(element, { window = defaultWindow, scrollTarget } = {}) {
    const elementIsVisible = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
    const testBounding = () => {
        if (!window)
            return;
        const document = window.document;
        if (!element.value) {
            elementIsVisible.value = false;
        }
        else {
            const rect = element.value.getBoundingClientRect();
            elementIsVisible.value = (rect.top <= (window.innerHeight || document.documentElement.clientHeight)
                && rect.left <= (window.innerWidth || document.documentElement.clientWidth)
                && rect.bottom >= 0
                && rect.right >= 0);
        }
    };
    Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["tryOnMounted"])(testBounding);
    if (window)
        Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["tryOnMounted"])(() => useEventListener((scrollTarget === null || scrollTarget === void 0 ? void 0 : scrollTarget.value) || window, 'scroll', testBounding, { capture: false, passive: true }));
    return elementIsVisible;
}

/**
 * Reactive wrapper for EventSource.
 *
 * @see https://vueuse.org/useEventSource
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventSource/EventSource EventSource
 * @param url
 * @param events
 */
function useEventSource(url, events = []) {
    const event = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
    const data = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
    const status = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])('CONNECTING');
    const eventSource = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
    const error = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
    const close = () => {
        if (eventSource.value) {
            eventSource.value.close();
            eventSource.value = null;
            status.value = 'CLOSED';
        }
    };
    Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["tryOnMounted"])(() => {
        const es = new EventSource(url);
        eventSource.value = es;
        es.onopen = () => {
            status.value = 'OPEN';
            error.value = null;
        };
        es.onerror = (e) => {
            status.value = 'CLOSED';
            error.value = e;
        };
        es.onmessage = (e) => {
            event.value = null;
            data.value = e.data;
        };
        for (const event_name of events) {
            useEventListener(es, event_name, (e) => {
                event.value = event_name;
                data.value = e.data || null;
            });
        }
    });
    Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["tryOnUnmounted"])(() => {
        close();
    });
    return {
        eventSource,
        event,
        data,
        status,
        error,
        close,
    };
}

/**
 * Reactive favicon.
 *
 * @see https://vueuse.org/useFavicon
 * @param newIcon
 * @param options
 */
function useFavicon(newIcon = null, options = {}) {
    const { baseUrl = '', rel = 'icon', document = defaultDocument, } = options;
    const favicon = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["isRef"])(newIcon)
        ? newIcon
        : Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(newIcon);
    const applyIcon = (icon) => {
        document === null || document === void 0 ? void 0 : document.head.querySelectorAll(`link[rel*="${rel}"]`).forEach(el => el.href = `${baseUrl}${icon}`);
    };
    Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])(favicon, (i, o) => {
        if (Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["isString"])(i) && i !== o)
            applyIcon(i);
    }, { immediate: true });
    return favicon;
}

/**
 * !!!IMPORTANT!!!
 *
 * If you update the UseFetchOptions interface, be sure to update this object
 * to include the new options
 */
function isFetchOptions(obj) {
    return Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["containsProp"])(obj, 'immediate', 'refetch', 'beforeFetch', 'afterFetch');
}
function createFetch(config = {}) {
    let options = config.options || {};
    let fetchOptions = config.fetchOptions || {};
    function useFactoryFetch(url, ...args) {
        const computedUrl = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(() => config.baseUrl
            ? joinPaths(Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(config.baseUrl), Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(url))
            : Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(url));
        // Merge properties into a single object
        if (args.length > 0) {
            if (isFetchOptions(args[0])) {
                options = Object.assign(Object.assign({}, options), args[0]);
            }
            else {
                fetchOptions = Object.assign(Object.assign(Object.assign({}, fetchOptions), args[0]), { headers: Object.assign(Object.assign({}, (fetchOptions.headers || {})), (args[0].headers || {})) });
            }
        }
        if (args.length > 1 && isFetchOptions(args[1]))
            options = Object.assign(Object.assign({}, options), args[1]);
        return useFetch(computedUrl, fetchOptions, options);
    }
    return useFactoryFetch;
}
function useFetch(url, ...args) {
    const supportsAbort = typeof AbortController === 'function';
    let fetchOptions = {};
    let options = { immediate: true, refetch: false };
    const config = {
        method: 'get',
        type: 'text',
        payload: undefined,
        payloadType: 'json',
    };
    let initialized = false;
    if (args.length > 0) {
        if (isFetchOptions(args[0]))
            options = Object.assign(Object.assign({}, options), args[0]);
        else
            fetchOptions = args[0];
    }
    if (args.length > 1) {
        if (isFetchOptions(args[1]))
            options = Object.assign(Object.assign({}, options), args[1]);
    }
    const { fetch = defaultWindow === null || defaultWindow === void 0 ? void 0 : defaultWindow.fetch, } = options;
    // Event Hooks
    const responseEvent = Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["createEventHook"])();
    const errorEvent = Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["createEventHook"])();
    const isFinished = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
    const isFetching = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
    const aborted = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
    const statusCode = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
    const response = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["shallowRef"])(null);
    const error = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
    const data = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["shallowRef"])(null);
    const canAbort = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(() => supportsAbort && isFetching.value);
    let controller;
    const abort = () => {
        if (supportsAbort && controller)
            controller.abort();
    };
    const execute = async () => {
        initialized = true;
        isFetching.value = true;
        isFinished.value = false;
        error.value = null;
        statusCode.value = null;
        aborted.value = false;
        controller = undefined;
        if (supportsAbort) {
            controller = new AbortController();
            controller.signal.onabort = () => aborted.value = true;
            fetchOptions = Object.assign(Object.assign({}, fetchOptions), { signal: controller.signal });
        }
        const defaultFetchOptions = {
            method: config.method,
            headers: {},
        };
        if (config.payload) {
            const headers = defaultFetchOptions.headers;
            if (config.payloadType === 'json') {
                defaultFetchOptions.body = JSON.stringify(config.payload);
                headers['Content-Type'] = 'application/json';
            }
            else {
                defaultFetchOptions.body = config.payload;
                headers['Content-Type'] = config.payloadType === 'formData'
                    ? 'multipart/form-data'
                    : 'text/plain';
            }
        }
        let isCanceled = false;
        const context = { url: Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(url), options: fetchOptions, cancel: () => { isCanceled = true; } };
        if (options.beforeFetch)
            Object.assign(context, await options.beforeFetch(context));
        if (isCanceled || !fetch)
            return Promise.resolve();
        return new Promise((resolve) => {
            var _a;
            fetch(context.url, Object.assign(Object.assign(Object.assign({}, defaultFetchOptions), context.options), { headers: Object.assign(Object.assign({}, defaultFetchOptions.headers), (_a = context.options) === null || _a === void 0 ? void 0 : _a.headers) }))
                .then(async (fetchResponse) => {
                response.value = fetchResponse;
                statusCode.value = fetchResponse.status;
                let responseData = await fetchResponse[config.type]();
                // see: https://www.tjvantoll.com/2015/09/13/fetch-and-errors/
                if (!fetchResponse.ok)
                    throw new Error(fetchResponse.statusText);
                if (options.afterFetch)
                    ({ data: responseData } = await options.afterFetch({ data: responseData, response: fetchResponse }));
                data.value = responseData;
                responseEvent.trigger(fetchResponse);
                resolve(fetchResponse);
            })
                .catch((fetchError) => {
                error.value = fetchError.message || fetchError.name;
                errorEvent.trigger(fetchError);
            })
                .finally(() => {
                isFinished.value = true;
                isFetching.value = false;
            });
        });
    };
    Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])(() => [
        Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(url),
        Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(options.refetch),
    ], () => Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(options.refetch) && execute(), { deep: true });
    const base = {
        isFinished,
        statusCode,
        response,
        error,
        data,
        isFetching,
        canAbort,
        aborted,
        abort,
        execute,
        onFetchResponse: responseEvent.on,
        onFetchError: errorEvent.on,
    };
    const shell = Object.assign(Object.assign({}, base), { get: setMethod('get'), put: setMethod('put'), post: setMethod('post'), delete: setMethod('delete'), json: setType('json'), text: setType('text'), blob: setType('blob'), arrayBuffer: setType('arrayBuffer'), formData: setType('formData') });
    function setMethod(method) {
        return (payload, payloadType) => {
            if (!initialized) {
                config.method = method;
                config.payload = payload;
                config.payloadType = payloadType || typeof payload === 'string' ? 'text' : 'json';
                return shell;
            }
            return undefined;
        };
    }
    function setType(type) {
        return () => {
            if (!initialized) {
                config.type = type;
                return base;
            }
            return undefined;
        };
    }
    if (options.immediate)
        setTimeout(execute, 0);
    return shell;
}
function joinPaths(start, end) {
    if (!start.endsWith('/') && !end.startsWith('/'))
        return `${start}/${end}`;
    return `${start}${end}`;
}

/* this implementation is original ported from https://github.com/logaretm/vue-use-web by Abdelrahman Awad */
// from: https://github.com/sindresorhus/screenfull.js/blob/master/src/screenfull.js
const functionsMap = [
    [
        'requestFullscreen',
        'exitFullscreen',
        'fullscreenElement',
        'fullscreenEnabled',
        'fullscreenchange',
        'fullscreenerror',
    ],
    // New WebKit
    [
        'webkitRequestFullscreen',
        'webkitExitFullscreen',
        'webkitFullscreenElement',
        'webkitFullscreenEnabled',
        'webkitfullscreenchange',
        'webkitfullscreenerror',
    ],
    // Old WebKit
    [
        'webkitRequestFullScreen',
        'webkitCancelFullScreen',
        'webkitCurrentFullScreenElement',
        'webkitCancelFullScreen',
        'webkitfullscreenchange',
        'webkitfullscreenerror',
    ],
    [
        'mozRequestFullScreen',
        'mozCancelFullScreen',
        'mozFullScreenElement',
        'mozFullScreenEnabled',
        'mozfullscreenchange',
        'mozfullscreenerror',
    ],
    [
        'msRequestFullscreen',
        'msExitFullscreen',
        'msFullscreenElement',
        'msFullscreenEnabled',
        'MSFullscreenChange',
        'MSFullscreenError',
    ],
];
/**
 * Reactive Fullscreen API.
 *
 * @see https://vueuse.org/useFullscreen
 * @param target
 * @param options
 */
function useFullscreen(target, options = {}) {
    const { document = defaultDocument } = options;
    const targetRef = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(target || (document === null || document === void 0 ? void 0 : document.querySelector('html')));
    const isFullscreen = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
    let isSupported = false;
    let map = functionsMap[0];
    if (!document) {
        isSupported = false;
    }
    else {
        for (const m of functionsMap) {
            if (m[1] in document) {
                map = m;
                isSupported = true;
                break;
            }
        }
    }
    const [REQUEST, EXIT, ELEMENT, , EVENT] = map;
    async function exit() {
        if (!isSupported)
            return;
        if (document === null || document === void 0 ? void 0 : document[ELEMENT])
            await document[EXIT]();
        isFullscreen.value = false;
    }
    async function enter() {
        if (!isSupported)
            return;
        await exit();
        if (targetRef.value) {
            await targetRef.value[REQUEST]();
            isFullscreen.value = true;
        }
    }
    async function toggle() {
        if (isFullscreen.value)
            await exit();
        else
            await enter();
    }
    if (document) {
        useEventListener(document, EVENT, () => {
            isFullscreen.value = !!(document === null || document === void 0 ? void 0 : document[ELEMENT]);
        }, false);
    }
    return {
        isSupported,
        isFullscreen,
        enter,
        exit,
        toggle,
    };
}

/* this implementation is original ported from https://github.com/logaretm/vue-use-web by Abdelrahman Awad */
/**
 * Reactive Geolocation API.
 *
 * @see https://vueuse.org/useGeolocation
 * @param options
 */
function useGeolocation(options = {}) {
    const { enableHighAccuracy = true, maximumAge = 30000, timeout = 27000, navigator = defaultNavigator, } = options;
    const isSupported = navigator && 'geolocation' in navigator;
    const locatedAt = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
    const error = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
    const coords = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])({
        accuracy: 0,
        latitude: 0,
        longitude: 0,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        speed: null,
    });
    function updatePosition(position) {
        locatedAt.value = position.timestamp;
        coords.value = position.coords;
        error.value = null;
    }
    let watcher;
    Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["tryOnMounted"])(() => {
        if (isSupported) {
            watcher = navigator.geolocation.watchPosition(updatePosition, err => error.value = err, {
                enableHighAccuracy,
                maximumAge,
                timeout,
            });
        }
    });
    Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["tryOnUnmounted"])(() => {
        if (watcher && navigator)
            navigator.geolocation.clearWatch(watcher);
    });
    return {
        isSupported,
        coords,
        locatedAt,
        error,
    };
}

const defaultEvents = ['mousemove', 'mousedown', 'resize', 'keydown', 'touchstart', 'wheel'];
const oneMinute = 60000;
/**
 * Tracks whether the user is being inactive.
 *
 * @see https://vueuse.org/useIdle
 * @param timeout default to 1 minute
 * @param options IdleOptions
 */
function useIdle(timeout = oneMinute, options = {}) {
    const { initialState = false, listenForVisibilityChange = true, events = defaultEvents, window = defaultWindow, eventFilter = Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["throttleFilter"])(50), } = options;
    const idle = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(initialState);
    const lastActive = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["timestamp"])());
    let timer;
    const onEvent = Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["createFilterWrapper"])(eventFilter, () => {
        idle.value = false;
        lastActive.value = Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["timestamp"])();
        clearTimeout(timer);
        timer = setTimeout(() => idle.value = true, timeout);
    });
    if (window) {
        const document = window.document;
        for (const event of events)
            useEventListener(window, event, onEvent, { passive: true });
        if (listenForVisibilityChange) {
            useEventListener(document, 'visibilitychange', () => {
                if (!document.hidden)
                    onEvent();
            });
        }
    }
    timer = setTimeout(() => idle.value = true, timeout);
    return { idle, lastActive };
}

/**
 * Detects that a target element's visibility.
 *
 * @see https://vueuse.org/useIntersectionObserver
 * @param target
 * @param callback
 * @param options
 */
function useIntersectionObserver(target, callback, options = {}) {
    const { root, rootMargin = '0px', threshold = 0.1, window = defaultWindow, } = options;
    const isSupported = window && 'IntersectionObserver' in window;
    let cleanup = _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["noop"];
    const stopWatch = isSupported
        ? Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])(() => ({
            el: unrefElement(target),
            root: unrefElement(root),
        }), ({ el, root }) => {
            cleanup();
            if (!el)
                return;
            // @ts-expect-error missing type
            const observer = new window.IntersectionObserver(callback, {
                root,
                rootMargin,
                threshold,
            });
            observer.observe(el);
            cleanup = () => {
                observer.disconnect();
                cleanup = _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["noop"];
            };
        }, { immediate: true, flush: 'post' })
        : _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["noop"];
    const stop = () => {
        cleanup();
        stopWatch();
    };
    Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["tryOnUnmounted"])(stop);
    return {
        isSupported,
        stop,
    };
}

/**
 * Reactive LocalStorage.
 *
 * @see https://vueuse.org/useLocalStorage
 * @param key
 * @param defaultValue
 * @param options
 */
function useLocalStorage(key, defaultValue, options = {}) {
    const { window = defaultWindow } = options;
    return useStorage(key, defaultValue, window === null || window === void 0 ? void 0 : window.localStorage, options);
}

const DefaultMagicKeysAliasMap = {
    ctrl: 'control',
    command: 'meta',
    cmd: 'meta',
    option: 'alt',
    up: 'arrowup',
    down: 'arrowdown',
    left: 'arrowleft',
    right: 'arrowright',
};

function useMagicKeys(options = {}) {
    const { reactive: useReactive = false, target = defaultWindow, aliasMap = DefaultMagicKeysAliasMap, passive = true, onEventFired = _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["noop"], } = options;
    const current = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["reactive"])(new Set());
    const obj = { toJSON() { return {}; }, current };
    const refs = useReactive ? Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["reactive"])(obj) : obj;
    function updateRefs(e, value) {
        const key = e.key.toLowerCase();
        const code = e.code.toLowerCase();
        const values = [code, key];
        // current set
        if (value)
            current.add(e.code);
        else
            current.delete(e.code);
        for (const key of values) {
            if (key in refs) {
                if (useReactive)
                    refs[key] = value;
                else
                    refs[key].value = value;
            }
        }
    }
    if (target) {
        useEventListener(target, 'keydown', (e) => {
            updateRefs(e, true);
            return onEventFired(e);
        }, { passive });
        useEventListener(target, 'keyup', (e) => {
            updateRefs(e, false);
            return onEventFired(e);
        }, { passive });
    }
    const proxy = new Proxy(refs, {
        get(target, prop, rec) {
            if (typeof prop !== 'string')
                return Reflect.get(target, prop, rec);
            prop = prop.toLowerCase();
            // alias
            if (prop in aliasMap)
                prop = aliasMap[prop];
            // create new tracking
            if (!(prop in refs)) {
                if (/[+_-]/.test(prop)) {
                    const keys = prop.split(/[+_-]/g).map(i => i.trim());
                    refs[prop] = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(() => keys.every(key => Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(proxy[key])));
                }
                else {
                    refs[prop] = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
                }
            }
            const r = Reflect.get(target, prop, rec);
            return useReactive ? Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(r) : r;
        },
    });
    return proxy;
}

const fnClone = (v) => JSON.parse(JSON.stringify(v));
const fnBypass = (v) => v;
const fnSetSource = (source, value) => source.value = value;
function defaultDump(clone) {
    return (clone ? Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(clone) ? clone : fnClone : fnBypass);
}
function defaultParse(clone) {
    return (clone ? Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(clone) ? clone : fnClone : fnBypass);
}
/**
 * Track the change history of a ref, also provides undo and redo functionality.
 *
 * @see https://vueuse.org/useManualRefHistory
 * @param source
 * @param options
 */
function useManualRefHistory(source, options = {}) {
    const { clone = false, dump = defaultDump(clone), parse = defaultParse(clone), setSource = fnSetSource, } = options;
    function _createHistoryRecord() {
        return Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["markRaw"])({
            snapshot: dump(source.value),
            timestamp: Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["timestamp"])(),
        });
    }
    const last = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(_createHistoryRecord());
    const undoStack = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])([]);
    const redoStack = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])([]);
    const _setSource = (record) => {
        setSource(source, parse(record.snapshot));
        last.value = record;
    };
    const commit = () => {
        undoStack.value.unshift(last.value);
        last.value = _createHistoryRecord();
        if (options.capacity && undoStack.value.length > options.capacity)
            undoStack.value.splice(options.capacity, Infinity);
        if (redoStack.value.length)
            redoStack.value.splice(0, redoStack.value.length);
    };
    const clear = () => {
        undoStack.value.splice(0, undoStack.value.length);
        redoStack.value.splice(0, redoStack.value.length);
    };
    const undo = () => {
        const state = undoStack.value.shift();
        if (state) {
            redoStack.value.unshift(last.value);
            _setSource(state);
        }
    };
    const redo = () => {
        const state = redoStack.value.shift();
        if (state) {
            undoStack.value.unshift(last.value);
            _setSource(state);
        }
    };
    const reset = () => {
        _setSource(last.value);
    };
    const history = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(() => [last.value, ...undoStack.value]);
    const canUndo = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(() => undoStack.value.length > 0);
    const canRedo = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(() => redoStack.value.length > 0);
    return {
        source,
        undoStack,
        redoStack,
        last,
        history,
        canUndo,
        canRedo,
        clear,
        commit,
        reset,
        undo,
        redo,
    };
}

/**
 * Automatically check if the ref exists and if it does run the cb fn
 */
function usingElRef(source, cb) {
    if (Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(source))
        cb(Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(source));
}
/**
 * Converts a TimeRange object to an array
 */
function timeRangeToArray(timeRanges) {
    let ranges = [];
    for (let i = 0; i < timeRanges.length; ++i)
        ranges = [...ranges, [timeRanges.start(i), timeRanges.end(i)]];
    return ranges;
}
/**
 * Converts a TextTrackList object to an array of `UseMediaTextTrack`
 */
function tracksToArray(tracks) {
    return Array.from(tracks)
        .map(({ label, kind, language, mode, activeCues, cues, inBandMetadataTrackDispatchType }, id) => ({ id, label, kind, language, mode, activeCues, cues, inBandMetadataTrackDispatchType }));
}
const defaultOptions = {
    src: '',
    tracks: [],
};
function useMediaControls(target, options = {}) {
    options = Object.assign(Object.assign({}, defaultOptions), options);
    const { document = defaultDocument, } = options;
    const currentTime = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
    const duration = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
    const seeking = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
    const buffering = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
    const volume = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(1);
    const waiting = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
    const ended = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
    const playing = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
    const rate = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(1);
    const stalled = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
    const buffered = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])([]);
    const tracks = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])([]);
    const selectedTrack = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(-1);
    const isPictureInPicture = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
    const muted = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(options.muted) || false);
    const supportsPictureInPicture = document && 'pictureInPictureEnabled' in document;
    // Events
    const sourceErrorEvent = Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["createEventHook"])();
    /**
     * Disables the specified track. If no track is specified then
     * all tracks will be disabled
     *
     * @param track The id of the track to disable
     */
    const disableTrack = (track) => {
        usingElRef(target, (el) => {
            if (track) {
                const id = Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(track) ? track : track.id;
                el.textTracks[id].mode = 'disabled';
            }
            else {
                for (let i = 0; i < el.textTracks.length; ++i)
                    el.textTracks[i].mode = 'disabled';
            }
            selectedTrack.value = -1;
        });
    };
    /**
     * Enables the specified track and disables the
     * other tracks unless otherwise specified
     *
     * @param track The track of the id of the track to enable
     * @param disableTracks Disable all other tracks
     */
    const enableTrack = (track, disableTracks = true) => {
        usingElRef(target, (el) => {
            const id = Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(track) ? track : track.id;
            if (disableTracks)
                disableTrack();
            el.textTracks[id].mode = 'showing';
            selectedTrack.value = id;
        });
    };
    /**
     * Toggle picture in picture mode for the player.
     */
    const togglePictureInPicture = () => {
        return new Promise((resolve, reject) => {
            usingElRef(target, async (el) => {
                if (supportsPictureInPicture) {
                    if (!isPictureInPicture.value) {
                        el.requestPictureInPicture()
                            .then(resolve)
                            .catch(reject);
                    }
                    else {
                        document.exitPictureInPicture()
                            .then(resolve)
                            .catch(reject);
                    }
                }
            });
        });
    };
    // Apply Options
    Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watchEffect"])(() => {
        const el = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(target);
        if (!el)
            return;
        const loop = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(options.loop);
        if (loop !== undefined)
            el.loop = loop;
        const controls = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(options.controls);
        if (controls !== undefined)
            el.controls = controls;
        const muted = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(options.muted);
        if (muted !== undefined)
            el.muted = muted;
        const preload = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(options.preload);
        if (preload !== undefined)
            el.preload = preload;
        const autoplay = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(options.autoplay);
        if (autoplay !== undefined)
            el.autoplay = autoplay;
        const poster = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(options.poster);
        if (poster !== undefined)
            el.poster = poster;
        const playsInline = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(options.playsinline);
        if (playsInline !== undefined)
            el.playsInline = playsInline;
        const autoPictureInPicture = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(options.autoPictureInPicture);
        // @ts-expect-error HTMLVideoElement.autoPictureInPicture not implemented in TS
        if (autoPictureInPicture !== undefined)
            el.autoPictureInPicture = autoPictureInPicture;
    });
    /**
     * This will automatically inject sources to the media element. The sources will be
     * appended as children to the media element as `<source>` elements.
     */
    Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watchEffect"])(() => {
        if (!document)
            return;
        const el = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(target);
        if (!el)
            return;
        const src = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(options.src);
        let sources = [];
        if (!src)
            return;
        // Merge sources into an array
        if (Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["isString"])(src))
            sources = [{ src }];
        else if (Array.isArray(src))
            sources = src;
        else if (Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["isObject"])(src))
            sources = [src];
        // Clear the sources
        el.querySelectorAll('source').forEach((e) => {
            e.removeEventListener('error', sourceErrorEvent.trigger);
            e.remove();
        });
        // Add new sources
        sources.forEach(({ src, type }) => {
            const source = document.createElement('source');
            source.setAttribute('src', src);
            source.setAttribute('type', type || '');
            source.addEventListener('error', sourceErrorEvent.trigger);
            el.appendChild(source);
        });
        // Finally, load the new sources.
        el.load();
    });
    // Remove source error listeners
    Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["tryOnUnmounted"])(() => {
        const el = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(target);
        if (!el)
            return;
        el.querySelectorAll('source').forEach(e => e.removeEventListener('error', sourceErrorEvent.trigger));
    });
    /**
     * Watch volume and change player volume when volume prop changes
     */
    Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])(volume, (vol) => {
        const el = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(target);
        if (!el)
            return;
        el.volume = vol;
    });
    Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])(muted, (mute) => {
        const el = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(target);
        if (!el)
            return;
        el.muted = mute;
    });
    /**
     * Load Tracks
     */
    Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watchEffect"])(() => {
        if (!document)
            return;
        const textTracks = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(options.tracks);
        const el = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(target);
        if (!textTracks || !textTracks.length || !el)
            return;
        /**
         * The MediaAPI provides an API for adding text tracks, but they don't currently
         * have an API for removing text tracks, so instead we will just create and remove
         * the tracks manually using the HTML api.
         */
        el.querySelectorAll('track').forEach(e => e.remove());
        textTracks.forEach(({ default: isDefault, kind, label, src, srcLang }, i) => {
            const track = document.createElement('track');
            track.default = isDefault || false;
            track.kind = kind;
            track.label = label;
            track.src = src;
            track.srclang = srcLang;
            if (track.default)
                selectedTrack.value = i;
            el.appendChild(track);
        });
    });
    /**
     * This will allow us to update the current time from the timeupdate event
     * without setting the medias current position, but if the user changes the
     * current time via the ref, then the media will seek.
     *
     * If we did not use an ignorable watch, then the current time update from
     * the timeupdate event would cause the media to stutter.
     */
    const { ignoreUpdates: ignoreCurrentTimeUpdates } = Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["ignorableWatch"])(currentTime, (time) => {
        const el = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(target);
        if (!el)
            return;
        el.currentTime = time;
    });
    /**
     * Using an ignorable watch so we can control the play state using a ref and not
     * a function
     */
    const { ignoreUpdates: ignorePlayingUpdates } = Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["ignorableWatch"])(playing, (isPlaying) => {
        const el = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(target);
        if (!el)
            return;
        isPlaying ? el.play() : el.pause();
    });
    useEventListener(target, 'timeupdate', () => ignoreCurrentTimeUpdates(() => currentTime.value = (Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(target)).currentTime));
    useEventListener(target, 'durationchange', () => duration.value = (Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(target)).duration);
    useEventListener(target, 'progress', () => buffered.value = timeRangeToArray((Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(target)).buffered));
    useEventListener(target, 'seeking', () => seeking.value = true);
    useEventListener(target, 'seeked', () => seeking.value = false);
    useEventListener(target, 'waiting', () => waiting.value = true);
    useEventListener(target, 'playing', () => waiting.value = false);
    useEventListener(target, 'ratechange', () => rate.value = (Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(target)).playbackRate);
    useEventListener(target, 'stalled', () => stalled.value = true);
    useEventListener(target, 'ended', () => ended.value = true);
    useEventListener(target, 'pause', () => ignorePlayingUpdates(() => playing.value = false));
    useEventListener(target, 'play', () => ignorePlayingUpdates(() => playing.value = true));
    useEventListener(target, 'enterpictureinpicture', () => isPictureInPicture.value = true);
    useEventListener(target, 'leavepictureinpicture', () => isPictureInPicture.value = false);
    useEventListener(target, 'volumechange', () => {
        const el = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(target);
        if (!el)
            return;
        volume.value = el.volume;
        muted.value = el.muted;
    });
    /**
     * The following listeners need to listen to a nested
     * object on the target, so we will have to use a nested
     * watch and manually remove the listeners
     */
    const listeners = [];
    const stop = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])([target], () => {
        const el = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(target);
        if (!el)
            return;
        stop();
        listeners[0] = useEventListener(el.textTracks, 'addtrack', () => tracks.value = tracksToArray(el.textTracks));
        listeners[1] = useEventListener(el.textTracks, 'removetrack', () => tracks.value = tracksToArray(el.textTracks));
        listeners[2] = useEventListener(el.textTracks, 'change', () => tracks.value = tracksToArray(el.textTracks));
    });
    // Remove text track listeners
    Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["tryOnUnmounted"])(() => listeners.forEach(listener => listener()));
    return {
        currentTime,
        duration,
        buffering,
        waiting,
        seeking,
        ended,
        stalled,
        buffered,
        playing,
        // Volume
        volume,
        muted,
        // Tracks
        tracks,
        selectedTrack,
        enableTrack,
        disableTrack,
        // Picture in Picture
        supportsPictureInPicture,
        togglePictureInPicture,
        isPictureInPicture,
        // Events
        onSourceError: sourceErrorEvent.on,
    };
}

/**
 * Reactive mouse position.
 *
 * @see https://vueuse.org/useMouse
 * @param options
 */
function useMouse(options = {}) {
    const { touch = true, resetOnTouchEnds = false, initialValue = { x: 0, y: 0 }, window = defaultWindow, } = options;
    const x = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(initialValue.x);
    const y = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(initialValue.y);
    const sourceType = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
    const mouseHandler = (event) => {
        x.value = event.pageX;
        y.value = event.pageY;
        sourceType.value = 'mouse';
    };
    const reset = () => {
        x.value = initialValue.x;
        y.value = initialValue.y;
    };
    const touchHandler = (event) => {
        if (event.touches.length > 0) {
            x.value = event.touches[0].clientX;
            y.value = event.touches[0].clientY;
            sourceType.value = 'touch';
        }
    };
    if (window) {
        useEventListener(window, 'mousemove', mouseHandler, { passive: true });
        if (touch) {
            useEventListener(window, 'touchstart', touchHandler, { passive: true });
            useEventListener(window, 'touchmove', touchHandler, { passive: true });
            if (resetOnTouchEnds)
                useEventListener(window, 'touchend', reset, { passive: true });
        }
    }
    return {
        x,
        y,
        sourceType,
    };
}

/**
 * Reactive mouse position related to an element.
 *
 * @see https://vueuse.org/useMouseInElement
 * @param target
 * @param options
 */
function useMouseInElement(target, options = {}) {
    const { handleOutside = true, window = defaultWindow, } = options;
    const { x, y, sourceType } = useMouse(options);
    const targetRef = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(target !== null && target !== void 0 ? target : window === null || window === void 0 ? void 0 : window.document.body);
    const elementX = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
    const elementY = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
    const elementPositionX = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
    const elementPositionY = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
    const elementHeight = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
    const elementWidth = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
    const isOutside = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
    let stop = () => { };
    if (window) {
        stop = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])([targetRef, x, y], () => {
            const el = unrefElement(targetRef);
            if (!el)
                return;
            const { left, top, width, height, } = el.getBoundingClientRect();
            elementPositionX.value = left + window.pageXOffset;
            elementPositionY.value = top + window.pageYOffset;
            elementHeight.value = height;
            elementWidth.value = width;
            const elX = x.value - elementPositionX.value;
            const elY = y.value - elementPositionY.value;
            isOutside.value = elX < 0 || elY < 0 || elX > elementWidth.value || elY > elementHeight.value;
            if (handleOutside || !isOutside.value) {
                elementX.value = elX;
                elementY.value = elY;
            }
        }, { immediate: true });
    }
    return {
        x,
        y,
        sourceType,
        elementX,
        elementY,
        elementPositionX,
        elementPositionY,
        elementHeight,
        elementWidth,
        isOutside,
        stop,
    };
}

/**
 * Reactive mouse position.
 *
 * @see https://vueuse.org/useMousePressed
 * @param options
 */
function useMousePressed(options = {}) {
    const { touch = true, initialValue = false, window = defaultWindow, } = options;
    const pressed = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(initialValue);
    const sourceType = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
    if (!window) {
        return {
            pressed,
            sourceType,
        };
    }
    const onReleased = () => {
        pressed.value = false;
        sourceType.value = null;
    };
    const target = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(() => unrefElement(options.target) || window);
    useEventListener(window, 'mouseleave', onReleased, { passive: true });
    useEventListener(window, 'mouseup', onReleased, { passive: true });
    useEventListener(target, 'mousedown', () => {
        pressed.value = true;
        sourceType.value = 'mouse';
    }, { passive: true });
    if (touch) {
        useEventListener(window, 'touchend', onReleased, { passive: true });
        useEventListener(window, 'touchcancel', onReleased, { passive: true });
        useEventListener(target, 'touchstart', () => {
            pressed.value = true;
            sourceType.value = 'touch';
        }, { passive: true });
    }
    return {
        pressed,
        sourceType,
    };
}

/**
 * Watch for changes being made to the DOM tree.
 *
 * @see https://vueuse.org/useMutationObserver
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver MutationObserver MDN
 * @param target
 * @param callback
 * @param options
 */
function useMutationObserver(target, callback, options = {}) {
    const { window = defaultWindow } = options, mutationOptions = __rest(options, ["window"]);
    let observer;
    const isSupported = window && 'IntersectionObserver' in window;
    const cleanup = () => {
        if (observer) {
            observer.disconnect();
            observer = undefined;
        }
    };
    const stopWatch = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])(() => unrefElement(target), (el) => {
        cleanup();
        if (isSupported && window && el) {
            // @ts-expect-error missing type
            observer = new window.MutationObserver(callback);
            observer.observe(el, mutationOptions);
        }
    }, { immediate: true });
    const stop = () => {
        cleanup();
        stopWatch();
    };
    Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["tryOnUnmounted"])(stop);
    return {
        isSupported,
        stop,
    };
}

/* this implementation is original ported from https://github.com/logaretm/vue-use-web by Abdelrahman Awad */
/**
 * Reactive Network status.
 *
 * @see https://vueuse.org/useNetwork
 * @param options
 */
function useNetwork(options = {}) {
    const { window = defaultWindow } = options;
    const navigator = window === null || window === void 0 ? void 0 : window.navigator;
    const isSupported = Boolean(navigator && 'connection' in navigator);
    const isOnline = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(true);
    const saveData = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
    const offlineAt = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(undefined);
    const downlink = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(undefined);
    const downlinkMax = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(undefined);
    const effectiveType = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(undefined);
    const type = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])('unknown');
    const connection = isSupported && navigator.connection;
    function updateNetworkInformation() {
        if (!navigator)
            return;
        isOnline.value = navigator.onLine;
        offlineAt.value = isOnline.value ? undefined : Date.now();
        if (connection) {
            downlink.value = connection.downlink;
            downlinkMax.value = connection.downlinkMax;
            effectiveType.value = connection.effectiveType;
            saveData.value = connection.saveData;
            type.value = connection.type;
        }
    }
    if (window) {
        useEventListener(window, 'offline', () => {
            isOnline.value = false;
            offlineAt.value = Date.now();
        });
        useEventListener(window, 'online', () => {
            isOnline.value = true;
        });
    }
    if (connection)
        useEventListener(connection, 'change', updateNetworkInformation, false);
    updateNetworkInformation();
    return {
        isSupported,
        isOnline,
        saveData,
        offlineAt,
        downlink,
        downlinkMax,
        effectiveType,
        type,
    };
}

/**
 * Call function on every `requestAnimationFrame`. With controls of pausing and resuming.
 *
 * @see https://vueuse.org/useRafFn
 * @param fn
 * @param options
 */
function useRafFn(fn, options = {}) {
    const { immediate = true, window = defaultWindow, } = options;
    const isActive = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
    function loop() {
        if (!isActive.value)
            return;
        fn();
        if (window)
            window.requestAnimationFrame(loop);
    }
    function resume() {
        if (!isActive.value) {
            isActive.value = true;
            loop();
        }
    }
    function pause() {
        isActive.value = false;
    }
    if (immediate)
        resume();
    Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["tryOnUnmounted"])(pause);
    return {
        isActive,
        pause,
        resume,
        stop: pause,
        start: resume,
    };
}

/**
 * Reactive current timestamp.
 *
 * @see https://vueuse.org/useNow
 * @param options
 */
function useNow(options = {}) {
    const { interval = 'requestAnimationFrame', } = options;
    const now = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(new Date());
    const update = () => now.value = new Date();
    const controls = interval === 'requestAnimationFrame'
        ? useRafFn(update, { immediate: true })
        : Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["useIntervalFn"])(update, interval, true);
    return Object.assign({ now }, controls);
}

/**
 * Reactive online state.
 *
 * @see https://vueuse.org/useOnline
 * @param options
 */
function useOnline(options = {}) {
    const { isOnline } = useNetwork(options);
    return isOnline;
}

/**
 * Reactive state to show whether mouse leaves the page.
 *
 * @see https://vueuse.org/usePageLeave
 * @param options
 */
function usePageLeave(options = {}) {
    const { window = defaultWindow } = options;
    const isLeft = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
    const handler = (event) => {
        if (!window)
            return;
        event = event || window.event;
        // @ts-ignore
        const from = event.relatedTarget || event.toElement;
        isLeft.value = !from;
    };
    if (window) {
        useEventListener(window, 'mouseout', handler, { passive: true });
        useEventListener(window.document, 'mouseleave', handler, { passive: true });
        useEventListener(window.document, 'mouseenter', handler, { passive: true });
    }
    return isLeft;
}

/**
 * Create parallax effect easily. It uses `useDeviceOrientation` and fallback to `useMouse`
 * if orientation is not supported.
 *
 * @param target
 * @param options
 */
function useParallax(target, options = {}) {
    const { deviceOrientationTiltAdjust = i => i, deviceOrientationRollAdjust = i => i, mouseTiltAdjust = i => i, mouseRollAdjust = i => i, window = defaultWindow, } = options;
    const orientation = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["reactive"])(useDeviceOrientation({ window }));
    const { elementX: x, elementY: y, elementWidth: width, elementHeight: height, } = useMouseInElement(target, { handleOutside: false, window });
    const source = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(() => {
        if (orientation.isSupported
            && ((orientation.alpha != null && orientation.alpha !== 0) || (orientation.gamma != null && orientation.gamma !== 0)))
            return 'deviceOrientation';
        return 'mouse';
    });
    const roll = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(() => {
        if (source.value === 'deviceOrientation') {
            const value = -orientation.beta / 90;
            return deviceOrientationRollAdjust(value);
        }
        else {
            const value = -(y.value - height.value / 2) / height.value;
            return mouseRollAdjust(value);
        }
    });
    const tilt = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(() => {
        if (source.value === 'deviceOrientation') {
            const value = orientation.gamma / 90;
            return deviceOrientationTiltAdjust(value);
        }
        else {
            const value = (x.value - width.value / 2) / width.value;
            return mouseTiltAdjust(value);
        }
    });
    return { roll, tilt, source };
}

var SwipeDirection;
(function (SwipeDirection) {
    SwipeDirection["UP"] = "UP";
    SwipeDirection["RIGHT"] = "RIGHT";
    SwipeDirection["DOWN"] = "DOWN";
    SwipeDirection["LEFT"] = "LEFT";
    SwipeDirection["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
/**
 * Reactive swipe detection.
 *
 * @see https://vueuse.org/useSwipe
 * @param target
 * @param options
 */
function useSwipe(target, options = {}) {
    const { threshold = 50, onSwipe, onSwipeEnd, onSwipeStart, passive = true, window = defaultWindow, } = options;
    const coordsStart = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["reactive"])({ x: 0, y: 0 });
    const coordsEnd = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["reactive"])({ x: 0, y: 0 });
    const diffX = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(() => coordsStart.x - coordsEnd.x);
    const diffY = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(() => coordsStart.y - coordsEnd.y);
    const { max, abs } = Math;
    const isThresholdExceeded = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(() => max(abs(diffX.value), abs(diffY.value)) >= threshold);
    const isSwiping = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
    const direction = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(() => {
        if (!isThresholdExceeded.value)
            return SwipeDirection.NONE;
        if (abs(diffX.value) > abs(diffY.value)) {
            return diffX.value > 0
                ? SwipeDirection.LEFT
                : SwipeDirection.RIGHT;
        }
        else {
            return diffY.value > 0
                ? SwipeDirection.UP
                : SwipeDirection.DOWN;
        }
    });
    const getTouchEventCoords = (e) => [e.touches[0].clientX, e.touches[0].clientY];
    const updateCoordsStart = (x, y) => {
        coordsStart.x = x;
        coordsStart.y = y;
    };
    const updateCoordsEnd = (x, y) => {
        coordsEnd.x = x;
        coordsEnd.y = y;
    };
    let listenerOptions;
    const isPassiveEventSupported = checkPassiveEventSupport(window === null || window === void 0 ? void 0 : window.document);
    if (!passive)
        listenerOptions = isPassiveEventSupported ? { passive: false, capture: true } : { capture: true };
    else
        listenerOptions = isPassiveEventSupported ? { passive: true } : { capture: false };
    const stops = [
        useEventListener(target, 'touchstart', (e) => {
            if (listenerOptions.capture && !listenerOptions.passive)
                e.preventDefault();
            const [x, y] = getTouchEventCoords(e);
            updateCoordsStart(x, y);
            updateCoordsEnd(x, y);
            onSwipeStart === null || onSwipeStart === void 0 ? void 0 : onSwipeStart(e);
        }, listenerOptions),
        useEventListener(target, 'touchmove', (e) => {
            const [x, y] = getTouchEventCoords(e);
            updateCoordsEnd(x, y);
            if (!isSwiping.value && isThresholdExceeded.value)
                isSwiping.value = true;
            if (isSwiping.value)
                onSwipe === null || onSwipe === void 0 ? void 0 : onSwipe(e);
        }, listenerOptions),
        useEventListener(target, 'touchend', (e) => {
            if (isSwiping.value)
                onSwipeEnd === null || onSwipeEnd === void 0 ? void 0 : onSwipeEnd(e, direction.value);
            isSwiping.value = false;
        }, listenerOptions),
    ];
    const stop = () => stops.forEach(s => s());
    return {
        isPassiveEventSupported,
        isSwiping,
        direction,
        coordsStart,
        coordsEnd,
        lengthX: diffX,
        lengthY: diffY,
        stop,
    };
}
/**
 * This is a polyfill for passive event support detection
 * @see https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 */
function checkPassiveEventSupport(document) {
    if (!document)
        return false;
    let supportsPassive = false;
    const optionsBlock = {
        get passive() {
            supportsPassive = true;
            return false;
        },
    };
    document.addEventListener('x', _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["noop"], optionsBlock);
    document.removeEventListener('x', _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["noop"]);
    return supportsPassive;
}

/**
 * Reactive swipe detection based on PointerEvents.
 *
 * @see https://vueuse.org/usePointerSwipe
 * @param target
 * @param options
 */
function usePointerSwipe(target, options = {}) {
    const targetRef = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(target);
    const { threshold = 50, onSwipe, onSwipeEnd, onSwipeStart, } = options;
    const posStart = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["reactive"])({ x: 0, y: 0 });
    const updatePosStart = (x, y) => {
        posStart.x = x;
        posStart.y = y;
    };
    const posEnd = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["reactive"])({ x: 0, y: 0 });
    const updatePosEnd = (x, y) => {
        posEnd.x = x;
        posEnd.y = y;
    };
    const distanceX = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(() => posStart.x - posEnd.x);
    const distanceY = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(() => posStart.y - posEnd.y);
    const { max, abs } = Math;
    const isThresholdExceeded = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(() => max(abs(distanceX.value), abs(distanceY.value)) >= threshold);
    const isSwiping = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
    const isPointerDown = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
    const direction = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(() => {
        if (!isThresholdExceeded.value)
            return SwipeDirection.NONE;
        if (abs(distanceX.value) > abs(distanceY.value)) {
            return distanceX.value > 0
                ? SwipeDirection.LEFT
                : SwipeDirection.RIGHT;
        }
        else {
            return distanceY.value > 0
                ? SwipeDirection.UP
                : SwipeDirection.DOWN;
        }
    });
    const stops = [
        useEventListener(target, 'pointerdown', (e) => {
            var _a, _b;
            isPointerDown.value = true;
            // Disable scroll on for TouchEvents
            (_a = targetRef.value) === null || _a === void 0 ? void 0 : _a.setAttribute('style', 'touch-action: none');
            // Future pointer events will be retargeted to target until pointerup/cancel
            (_b = targetRef.value) === null || _b === void 0 ? void 0 : _b.setPointerCapture(e.pointerId);
            const { clientX: x, clientY: y } = e;
            updatePosStart(x, y);
            updatePosEnd(x, y);
            onSwipeStart === null || onSwipeStart === void 0 ? void 0 : onSwipeStart(e);
        }),
        useEventListener(target, 'pointermove', (e) => {
            if (!isPointerDown.value)
                return;
            const { clientX: x, clientY: y } = e;
            updatePosEnd(x, y);
            if (!isSwiping.value && isThresholdExceeded.value)
                isSwiping.value = true;
            if (isSwiping.value)
                onSwipe === null || onSwipe === void 0 ? void 0 : onSwipe(e);
        }),
        useEventListener(target, 'pointerup', (e) => {
            var _a;
            if (isSwiping.value)
                onSwipeEnd === null || onSwipeEnd === void 0 ? void 0 : onSwipeEnd(e, direction.value);
            isPointerDown.value = false;
            isSwiping.value = false;
            (_a = targetRef.value) === null || _a === void 0 ? void 0 : _a.setAttribute('style', 'touch-action: initial');
        }),
    ];
    const stop = () => stops.forEach(s => s());
    return {
        isSwiping: Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["readonly"])(isSwiping),
        direction: Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["readonly"])(direction),
        posStart: Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["readonly"])(posStart),
        posEnd: Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["readonly"])(posEnd),
        distanceX,
        distanceY,
        stop,
    };
}

/**
 * Reactive prefers-color-scheme media query.
 *
 * @see https://vueuse.org/usePreferredColorScheme
 * @param [options]
 */
function usePreferredColorScheme(options) {
    const isLight = useMediaQuery('(prefers-color-scheme: light)', options);
    const isDark = useMediaQuery('(prefers-color-scheme: dark)', options);
    return Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(() => {
        if (isDark.value)
            return 'dark';
        if (isLight.value)
            return 'light';
        return 'no-preference';
    });
}

/**
 * Reactive Navigator Languages.
 *
 * @see https://vueuse.org/usePreferredLanguages
 * @param options
 */
function usePreferredLanguages(options = {}) {
    const { window = defaultWindow } = options;
    if (!window)
        return Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(['en']);
    const navigator = window.navigator;
    const value = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(navigator.languages);
    useEventListener(window, 'languagechange', () => {
        value.value = navigator.languages;
    });
    return value;
}

/**
 * Track the change history of a ref, also provides undo and redo functionality.
 *
 * @see https://vueuse.org/useRefHistory
 * @param source
 * @param options
 */
function useRefHistory(source, options = {}) {
    const { deep = false, flush = 'pre', } = options;
    const { eventFilter, pause, resume: resumeTracking, isActive: isTracking } = Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["pausableFilter"])();
    const { ignoreUpdates, ignorePrevAsyncUpdates, stop } = Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["ignorableWatch"])(source, commit, { deep, flush, eventFilter });
    function setSource(source, value) {
        // Support changes that are done after the last history operation
        // examples:
        //   undo, modify
        //   undo, undo, modify
        // If there were already changes in the state, they will be ignored
        // examples:
        //   modify, undo
        //   undo, modify, undo
        ignorePrevAsyncUpdates();
        ignoreUpdates(() => {
            source.value = value;
        });
    }
    const manualHistory = useManualRefHistory(source, Object.assign(Object.assign({}, options), { clone: options.clone || deep, setSource }));
    const { clear, commit: manualCommit } = manualHistory;
    function commit() {
        // This guard only applies for flush 'pre' and 'post'
        // If the user triggers a commit manually, then reset the watcher
        // so we do not trigger an extra commit in the async watcher
        ignorePrevAsyncUpdates();
        manualCommit();
    }
    function resume(commitNow) {
        resumeTracking();
        if (commitNow)
            commit();
    }
    function batch(fn) {
        let canceled = false;
        const cancel = () => canceled = true;
        ignoreUpdates(() => {
            fn(cancel);
        });
        if (!canceled)
            commit();
    }
    function dispose() {
        stop();
        clear();
    }
    return Object.assign(Object.assign({}, manualHistory), { isTracking,
        pause,
        resume,
        commit,
        batch,
        dispose });
}

/**
 * Async script tag loading.
 *
 * @see https://vueuse.org/useScriptTag
 * @param src
 */
function useScriptTag(src, onLoaded = _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["noop"], options = {}) {
    const { immediate = true, manual = false, type = 'text/javascript', async = true, crossOrigin, referrerPolicy, noModule, defer, document = defaultDocument, } = options;
    const scriptTag = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
    let _promise = null;
    /**
     * Load the script specified via `src`.
     *
     * @param waitForScriptLoad Whether if the Promise should resolve once the "load" event is emitted by the <script> attribute, or right after appending it to the DOM.
     * @returns Promise<HTMLScriptElement>
     */
    const loadScript = (waitForScriptLoad) => new Promise((resolve, reject) => {
        // Some little closure for resolving the Promise.
        const resolveWithElement = (el) => {
            scriptTag.value = el;
            resolve(el);
            return el;
        };
        // Check if document actually exists, otherwise resolve the Promise (SSR Support).
        if (!document) {
            resolve(false);
            return;
        }
        // Local variable defining if the <script> tag should be appended or not.
        let shouldAppend = false;
        let el = document.querySelector(`script[src="${src}"]`);
        // Script tag not found, preparing the element for appending
        if (!el) {
            el = document.createElement('script');
            el.type = type;
            el.async = async;
            el.src = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(src);
            // Optional attributes
            if (defer)
                el.defer = defer;
            if (crossOrigin)
                el.crossOrigin = crossOrigin;
            if (noModule)
                el.noModule = noModule;
            if (referrerPolicy)
                el.referrerPolicy = referrerPolicy;
            // Enables shouldAppend
            shouldAppend = true;
        }
        // Script tag already exists, resolve the loading Promise with it.
        else if (el.hasAttribute('data-loaded')) {
            resolveWithElement(el);
        }
        // Event listeners
        el.addEventListener('error', event => reject(event));
        el.addEventListener('abort', event => reject(event));
        el.addEventListener('load', () => {
            el.setAttribute('data-loaded', 'true');
            onLoaded(el);
            resolveWithElement(el);
        });
        // Append the <script> tag to head.
        if (shouldAppend)
            el = document.head.appendChild(el);
        // If script load awaiting isn't needed, we can resolve the Promise.
        if (!waitForScriptLoad)
            resolveWithElement(el);
    });
    /**
     * Exposed singleton wrapper for `loadScript`, avoiding calling it twice.
     *
     * @param waitForScriptLoad Whether if the Promise should resolve once the "load" event is emitted by the <script> attribute, or right after appending it to the DOM.
     * @returns Promise<HTMLScriptElement>
     */
    const load = (waitForScriptLoad = true) => {
        if (!_promise)
            _promise = loadScript(waitForScriptLoad);
        return _promise;
    };
    /**
     * Unload the script specified by `src`.
     */
    const unload = () => {
        if (!document)
            return;
        _promise = null;
        if (scriptTag.value) {
            document.head.removeChild(scriptTag.value);
            scriptTag.value = null;
        }
    };
    if (immediate && !manual)
        Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["tryOnMounted"])(load);
    if (!manual)
        Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["tryOnUnmounted"])(unload);
    return { scriptTag, load, unload };
}

/**
 * Reactive SessionStorage.
 *
 * @see https://vueuse.org/useSessionStorage
 * @param key
 * @param defaultValue
 * @param options
 */
function useSessionStorage(key, defaultValue, options = {}) {
    const { window = defaultWindow } = options;
    return useStorage(key, defaultValue, window === null || window === void 0 ? void 0 : window.sessionStorage, options);
}

/**
 * Reactive Web Share API.
 *
 * @see https://vueuse.org/useShare
 * @param shareOptions
 * @param options
 */
function useShare(shareOptions = {}, options = {}) {
    const { navigator = defaultNavigator } = options;
    const _navigator = navigator;
    const isSupported = _navigator && 'canShare' in _navigator;
    const share = async (overrideOptions = {}) => {
        if (isSupported) {
            const data = Object.assign(Object.assign({}, Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(shareOptions)), Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(overrideOptions));
            let granted = true;
            if (data.files && _navigator.canShare)
                granted = _navigator.canShare({ files: data.files });
            if (granted)
                return _navigator.share(data);
        }
    };
    return {
        isSupported,
        share,
    };
}

// ported from https://www.reddit.com/r/vuejs/comments/jksizl/speech_recognition_as_a_vue_3_hook
/**
 * Reactive SpeechRecognition.
 *
 * @see https://vueuse.org/useSpeechRecognition
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition SpeechRecognition
 * @param options
 */
function useSpeechRecognition(options = {}) {
    const { lang = 'en-US', interimResults = true, continuous = true, window = defaultWindow, } = options;
    const isListening = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
    const isFinal = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
    const result = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])('');
    const error = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["shallowRef"])(undefined);
    const toggle = (value = !isListening.value) => {
        isListening.value = value;
    };
    const start = () => {
        isListening.value = true;
    };
    const stop = () => {
        isListening.value = false;
    };
    const SpeechRecognition = window && (window.SpeechRecognition || window.webkitSpeechRecognition);
    const isSupported = Boolean(SpeechRecognition);
    let recognition;
    if (isSupported) {
        recognition = new SpeechRecognition();
        recognition.continuous = continuous;
        recognition.interimResults = interimResults;
        recognition.lang = lang;
        recognition.onstart = () => {
            isFinal.value = false;
        };
        recognition.onresult = (event) => {
            const transcript = Array.from(event.results)
                .map((result) => {
                isFinal.value = result.isFinal;
                return result[0];
            })
                .map(result => result.transcript)
                .join('');
            result.value = transcript;
            error.value = undefined;
        };
        recognition.onerror = (event) => {
            error.value = event;
        };
        recognition.onend = () => {
            isListening.value = false;
        };
        Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])(isListening, () => {
            if (isListening.value)
                recognition.start();
            else
                recognition.stop();
        });
    }
    Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["tryOnUnmounted"])(() => {
        isListening.value = false;
    });
    return {
        isSupported,
        isListening,
        isFinal,
        recognition,
        result,
        error,
        toggle,
        start,
        stop,
    };
}

const UNITS = [
    { max: 60000, value: 1000, name: 'second' },
    { max: 2760000, value: 60000, name: 'minute' },
    { max: 72000000, value: 3600000, name: 'hour' },
    { max: 518400000, value: 86400000, name: 'day' },
    { max: 2419200000, value: 604800000, name: 'week' },
    { max: 28512000000, value: 2592000000, name: 'month' },
    { max: Infinity, value: 31536000000, name: 'year' },
];
const DEFAULT_MESSAGES = {
    justNow: 'just now',
    past: n => n.match(/\d/) ? `${n} ago` : n,
    future: n => n.match(/\d/) ? `in ${n}` : n,
    month: (n, past) => n === 1
        ? past
            ? 'last month'
            : 'next month'
        : `${n} month${n > 1 ? 's' : ''}`,
    year: (n, past) => n === 1
        ? past
            ? 'last year'
            : 'next year'
        : `${n} year${n > 1 ? 's' : ''}`,
    day: (n, past) => n === 1
        ? past
            ? 'yesterday'
            : 'tomorrow'
        : `${n} day${n > 1 ? 's' : ''}`,
    week: (n, past) => n === 1
        ? past
            ? 'last week'
            : 'next week'
        : `${n} week${n > 1 ? 's' : ''}`,
    hour: n => `${n} hour${n > 1 ? 's' : ''}`,
    minute: n => `${n} minute${n > 1 ? 's' : ''}`,
    second: n => `${n} second${n > 1 ? 's' : ''}`,
};
const DEFAULT_FORMATTER = (date) => date.toISOString().slice(0, 10);
/**
 * Reactive time ago formatter.
 *
 * @see https://vueuse.org/useTimeAgo
 * @param options
 */
function useTimeAgo(time, options = {}) {
    const { max, updateInterval = 30000, messages = DEFAULT_MESSAGES, fullDateFormatter = DEFAULT_FORMATTER, } = options;
    const { abs, round } = Math;
    const { now } = useNow({ interval: updateInterval });
    function getTimeago(from, now) {
        var _a;
        const diff = +now - +from;
        const absDiff = abs(diff);
        // less than a minute
        if (absDiff < 60000)
            return messages.justNow;
        if (typeof max === 'number' && absDiff > max)
            return fullDateFormatter(new Date(from));
        if (typeof max === 'string') {
            const unitMax = (_a = UNITS.find(i => i.name === max)) === null || _a === void 0 ? void 0 : _a.max;
            if (unitMax && absDiff > unitMax)
                return fullDateFormatter(new Date(from));
        }
        for (const unit of UNITS) {
            if (absDiff < unit.max)
                return format(diff, unit);
        }
    }
    function applyFormat(name, val, isPast) {
        const formatter = messages[name];
        if (typeof formatter === 'function')
            return formatter(val, isPast);
        return formatter.replace('{0}', val.toString());
    }
    function format(diff, unit) {
        const val = round(abs(diff) / unit.value);
        const past = diff > 0;
        const str = applyFormat(unit.name, val, past);
        return applyFormat(past ? 'past' : 'future', str, past);
    }
    return Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(() => getTimeago(new Date(Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(time)), Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(now.value)));
}

/**
 * Reactive current timestamp.
 *
 * @see https://vueuse.org/useTimestamp
 * @param options
 */
function useTimestamp(options = {}) {
    const { offset = 0, interval = 'requestAnimationFrame', } = options;
    const ts = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["timestamp"])() + offset);
    const update = () => ts.value = Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["timestamp"])() + offset;
    const controls = interval === 'requestAnimationFrame'
        ? useRafFn(update, { immediate: true })
        : Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["useIntervalFn"])(update, interval, true);
    return Object.assign({ timestamp: ts }, controls);
}

/**
 * Reactive document title.
 *
 * @see https://vueuse.org/useTitle
 * @param newTitle
 * @param options
 */
function useTitle(newTitle = null, options = {}) {
    var _a, _b;
    const { document = defaultDocument, observe = false, } = options;
    const title = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])((_a = newTitle !== null && newTitle !== void 0 ? newTitle : document === null || document === void 0 ? void 0 : document.title) !== null && _a !== void 0 ? _a : null);
    Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])(title, (t, o) => {
        if (Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["isString"])(t) && t !== o && document)
            document.title = t;
    }, { immediate: true });
    if (observe && document) {
        useMutationObserver((_b = document.head) === null || _b === void 0 ? void 0 : _b.querySelector('title'), () => {
            if (document && document.title !== title.value)
                title.value = document.title;
        }, { childList: true });
    }
    return title;
}

/**
 * Create an easing function from cubic bezier points.
 */
function createEasingFunction([p0, p1, p2, p3]) {
    const a = (a1, a2) => 1 - 3 * a2 + 3 * a1;
    const b = (a1, a2) => 3 * a2 - 6 * a1;
    const c = (a1) => 3 * a1;
    const calcBezier = (t, a1, a2) => ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
    const getSlope = (t, a1, a2) => 3 * a(a1, a2) * t * t + 2 * b(a1, a2) * t + c(a1);
    const getTforX = (x) => {
        let aGuessT = x;
        for (let i = 0; i < 4; ++i) {
            const currentSlope = getSlope(aGuessT, p0, p2);
            if (currentSlope === 0)
                return aGuessT;
            const currentX = calcBezier(aGuessT, p0, p2) - x;
            aGuessT -= currentX / currentSlope;
        }
        return aGuessT;
    };
    return (x) => p0 === p1 && p2 === p3 ? x : calcBezier(getTforX(x), p1, p3);
}
/**
 * Common transitions
 *
 * @see https://easings.net
 */
const TransitionPresets = {
    linear: [0, 0, 1, 1],
    easeInSine: [0.12, 0, 0.39, 0],
    easeOutSine: [0.61, 1, 0.88, 1],
    easeInQuad: [0.11, 0, 0.5, 0],
    easeOutQuad: [0.5, 1, 0.89, 1],
    easeInCubic: [0.32, 0, 0.67, 0],
    easeOutCubic: [0.33, 1, 0.68, 1],
    easeInOutCubic: [0.65, 0, 0.35, 1],
    easeInQuart: [0.5, 0, 0.75, 0],
    easeOutQuart: [0.25, 1, 0.5, 1],
    easeInOutQuart: [0.76, 0, 0.24, 1],
    easeInQuint: [0.64, 0, 0.78, 0],
    easeOutQuint: [0.22, 1, 0.36, 1],
    easeInOutQuint: [0.83, 0, 0.17, 1],
    easeInExpo: [0.7, 0, 0.84, 0],
    easeOutExpo: [0.16, 1, 0.3, 1],
    easeInOutExpo: [0.87, 0, 0.13, 1],
    easeInCirc: [0.55, 0, 1, 0.45],
    easeOutCirc: [0, 0.55, 0.45, 1],
    easeInOutCirc: [0.85, 0, 0.15, 1],
    easeInBack: [0.36, 0, 0.66, -0.56],
    easeOutBack: [0.34, 1.56, 0.64, 1],
    easeInOutBack: [0.68, -0.6, 0.32, 1.6],
};
/**
 * Transition between values.
 *
 * @see https://vueuse.org/useTransition
 * @param source
 * @param options
 */
function useTransition(source, options = {}) {
    const { duration = 500, onFinished = _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["noop"], onStarted = _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["noop"], transition = (n) => n, } = options;
    const output = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(source.value);
    const currentTransition = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(() => {
        const t = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(transition);
        return Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(t) ? t : createEasingFunction(t);
    });
    let currentDuration = 0;
    let diff = 0;
    let endAt = 0;
    let startAt = 0;
    let startValue = 0;
    const { resume, pause } = useRafFn(() => {
        const now = Date.now();
        const progress = Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["clamp"])(1 - ((endAt - now) / currentDuration), 0, 1);
        output.value = startValue + (diff * currentTransition.value(progress));
        if (progress >= 1) {
            pause();
            onFinished();
        }
    }, { immediate: false });
    Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])(source, () => {
        pause();
        currentDuration = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(duration);
        diff = source.value - output.value;
        startValue = output.value;
        startAt = Date.now();
        endAt = startAt + currentDuration;
        resume();
        onStarted();
    });
    return output;
}

/**
 * Reactive URLSearchParams
 *
 * @see https://vueuse.org/useUrlSearchParams
 * @param mode
 * @param options
 */
function useUrlSearchParams(mode = 'history', options = {}) {
    const { window = defaultWindow } = options;
    if (!window)
        return Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["reactive"])(Object.assign({}));
    const hashWithoutParams = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(() => {
        const hash = window.location.hash || '';
        const index = hash.indexOf('?');
        return index > 0 ? hash.substring(0, index) : hash;
    });
    const read = () => {
        if (mode === 'hash') {
            const hash = window.location.hash || '';
            const index = hash.indexOf('?');
            return new URLSearchParams(index >= 0 ? hash.substring(index + 1) : '');
        }
        else {
            return new URLSearchParams(window.location.search || '');
        }
    };
    let params = read();
    const paramsMap = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["reactive"])(Object.assign({}));
    function writeToParamsMap(key, value) {
        return paramsMap[key] = value;
    }
    function updateParamsMap() {
        Object.keys(paramsMap).forEach(key => delete paramsMap[key]);
        for (const key of params.keys()) {
            const paramsForKey = params.getAll(key);
            writeToParamsMap(key, paramsForKey.length > 1 ? paramsForKey : (params.get(key) || ''));
        }
    }
    // Update the paramsMap with initial values
    updateParamsMap();
    const { pause, resume } = Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["pausableWatch"])(paramsMap, () => {
        params = new URLSearchParams('');
        Object.keys(paramsMap).forEach((key) => {
            const mapEntry = paramsMap[key];
            if (Array.isArray(mapEntry))
                mapEntry.forEach(value => params.append(key, value));
            else
                params.set(key, mapEntry);
        });
        write(params);
    }, { deep: true });
    function write(params, shouldUpdateParamsMap) {
        pause();
        if (shouldUpdateParamsMap)
            updateParamsMap();
        const empty = !params.keys().next();
        const query = empty
            ? hashWithoutParams.value
            : (mode === 'hash')
                ? `${hashWithoutParams.value}?${params}`
                : `?${params}${hashWithoutParams.value}`;
        if (window)
            window.history.replaceState({}, '', window.location.pathname + query);
        resume();
    }
    useEventListener(window, 'popstate', () => {
        params = read();
        write(params, true);
    });
    return paramsMap;
}

/* this implementation is original ported from https://github.com/logaretm/vue-use-web by Abdelrahman Awad */
/**
 * Reactive `mediaDevices.getUserMedia` streaming
 *
 * @see https://vueuse.org/useUserMedia
 * @param options
 */
function useUserMedia(options = {}) {
    var _a, _b, _c;
    const enabled = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])((_a = options.enabled) !== null && _a !== void 0 ? _a : false);
    const autoSwitch = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])((_b = options.autoSwitch) !== null && _b !== void 0 ? _b : true);
    const videoDeviceId = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(options.videoDeviceId);
    const audioDeviceId = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(options.audioDeviceId);
    const { navigator = defaultNavigator } = options;
    const isSupported = Boolean((_c = navigator === null || navigator === void 0 ? void 0 : navigator.mediaDevices) === null || _c === void 0 ? void 0 : _c.getUserMedia);
    const stream = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["shallowRef"])();
    function getDeviceOptions(device) {
        if (device.value === 'none' || device.value === false)
            return false;
        if (device.value == null)
            return true;
        return {
            deviceId: device.value,
        };
    }
    async function _start() {
        if (!isSupported || stream.value)
            return;
        stream.value = await navigator.mediaDevices.getUserMedia({
            video: getDeviceOptions(videoDeviceId),
            audio: getDeviceOptions(audioDeviceId),
        });
        return stream.value;
    }
    async function _stop() {
        var _a;
        (_a = stream.value) === null || _a === void 0 ? void 0 : _a.getTracks().forEach(t => t.stop());
        stream.value = undefined;
    }
    function stop() {
        _stop();
        enabled.value = false;
    }
    async function start() {
        await _start();
        if (stream.value)
            enabled.value = true;
        return stream.value;
    }
    async function restart() {
        _stop();
        return await start();
    }
    Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])(enabled, (v) => {
        if (v)
            _start();
        else
            _stop();
    }, { immediate: true });
    Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])([videoDeviceId, audioDeviceId], () => {
        if (autoSwitch.value && stream.value)
            restart();
    }, { immediate: true });
    return {
        isSupported,
        stream,
        start,
        stop,
        restart,
        videoDeviceId,
        audioDeviceId,
        enabled,
        autoSwitch,
    };
}

/**
 * Shorthand for v-model binding, props + emit -> ref
 *
 * @see https://vueuse.org/useVModel
 * @param props
 * @param key (default 'value' in Vue 2 and 'modelValue' in Vue 3)
 * @param emit
 */
function useVModel(props, key, emit, options = {}) {
    var _a, _b, _c;
    const { passive = false, eventName, } = options;
    const vm = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["getCurrentInstance"])();
    // @ts-expect-error mis-alignment with @vue/composition-api
    const _emit = emit || (vm === null || vm === void 0 ? void 0 : vm.emit) || ((_a = vm === null || vm === void 0 ? void 0 : vm.$emit) === null || _a === void 0 ? void 0 : _a.bind(vm));
    let event = eventName;
    if (!key) {
        if (vue_demi__WEBPACK_IMPORTED_MODULE_0__["isVue2"]) {
            const modelOptions = (_c = (_b = vm === null || vm === void 0 ? void 0 : vm.proxy) === null || _b === void 0 ? void 0 : _b.$options) === null || _c === void 0 ? void 0 : _c.model;
            key = (modelOptions === null || modelOptions === void 0 ? void 0 : modelOptions.value) || 'value';
            if (!eventName)
                event = (modelOptions === null || modelOptions === void 0 ? void 0 : modelOptions.event) || 'input';
        }
        else {
            key = 'modelValue';
        }
    }
    event = eventName || event || `update:${key}`;
    if (passive) {
        const proxy = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(props[key]);
        Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])(() => props[key], v => proxy.value = v);
        Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])(proxy, (v) => {
            if (v !== props[key])
                _emit(event, v);
        });
        return proxy;
    }
    else {
        return Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])({
            get() {
                return props[key];
            },
            set(value) {
                _emit(event, value);
            },
        });
    }
}

/**
 * Shorthand for props v-model binding. Think like `toRefs(props)` but changes will also emit out.
 *
 * @see https://vueuse.org/useVModels
 * @param props
 * @param emit
 */
function useVModels(props, emit, options = {}) {
    const ret = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const key in props)
        ret[key] = useVModel(props, key, emit, options);
    return ret;
}

function resolveNestedOptions(options) {
    if (options === true)
        return {};
    return options;
}
/**
 * Reactive WebSocket client.
 *
 * @see https://vueuse.org/useWebSocket
 * @param url
 */
function useWebSocket(url, options = {}) {
    const { onConnected, onDisconnected, onError, onMessage, } = options;
    const data = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
    const status = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])('CONNECTING');
    const wsRef = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])();
    let heartbeatPause;
    let heartbeatResume;
    let explicitlyClosed = false;
    let retried = 0;
    let bufferedData = [];
    const close = (code, reason) => {
        if (!wsRef.value)
            return;
        explicitlyClosed = true;
        heartbeatPause === null || heartbeatPause === void 0 ? void 0 : heartbeatPause();
        wsRef.value.close(code, reason);
    };
    const _sendBuffer = () => {
        if (bufferedData.length && wsRef.value && status.value === 'OPEN') {
            for (const buffer of bufferedData)
                wsRef.value.send(buffer);
            bufferedData = [];
        }
    };
    const send = (data, useBuffer = true) => {
        if (!wsRef.value || status.value !== 'OPEN') {
            if (useBuffer)
                bufferedData.push(data);
            return false;
        }
        _sendBuffer();
        wsRef.value.send(data);
        return true;
    };
    const _init = () => {
        const ws = new WebSocket(url);
        wsRef.value = ws;
        status.value = 'CONNECTING';
        explicitlyClosed = false;
        ws.onopen = () => {
            status.value = 'OPEN';
            onConnected === null || onConnected === void 0 ? void 0 : onConnected(ws);
            heartbeatResume === null || heartbeatResume === void 0 ? void 0 : heartbeatResume();
            _sendBuffer();
        };
        ws.onclose = (ev) => {
            status.value = 'CLOSED';
            wsRef.value = undefined;
            onDisconnected === null || onDisconnected === void 0 ? void 0 : onDisconnected(ws, ev);
            if (!explicitlyClosed && options.autoReconnect) {
                const { retries = -1, delay = 1000, onFailed, } = resolveNestedOptions(options.autoReconnect);
                retried += 1;
                if (retries < 0 || retried < retries)
                    setTimeout(_init, delay);
                else
                    onFailed === null || onFailed === void 0 ? void 0 : onFailed();
            }
        };
        ws.onerror = (e) => {
            onError === null || onError === void 0 ? void 0 : onError(ws, e);
        };
        ws.onmessage = (e) => {
            data.value = e.data;
            onMessage === null || onMessage === void 0 ? void 0 : onMessage(ws, e);
        };
    };
    if (options.heartbeat) {
        const { message = 'ping', interval = 1000, } = resolveNestedOptions(options.heartbeat);
        const { pause, resume } = Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["useIntervalFn"])(() => send(message, false), interval, false);
        heartbeatPause = pause;
        heartbeatResume = resume;
    }
    if (options.immediate)
        _init();
    const open = () => {
        close();
        retried = 0;
        _init();
    };
    Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["tryOnUnmounted"])(close);
    return {
        data,
        status,
        close,
        send,
        open,
        ws: wsRef,
    };
}

/* this implementation is original ported from https://github.com/logaretm/vue-use-web by Abdelrahman Awad */
/**
 * Simple Web Workers registration and communication.
 *
 * @see https://vueuse.org/useWebWorker
 * @param url
 * @param workerOptions
 * @param options
 */
function useWebWorker(url, workerOptions, options = {}) {
    const { window = defaultWindow, } = options;
    const data = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
    const worker = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["shallowRef"])();
    const post = function post(val) {
        if (!worker.value)
            return;
        worker.value.postMessage(val);
    };
    const terminate = function terminate() {
        if (!worker.value)
            return;
        worker.value.terminate();
    };
    if (window) {
        // @ts-expect-error untyped
        worker.value = new window.Worker(url, workerOptions);
        worker.value.onmessage = (e) => {
            data.value = e.data;
        };
        Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["tryOnUnmounted"])(() => {
            if (worker.value)
                worker.value.terminate();
        });
    }
    return {
        data,
        post,
        terminate,
        worker,
    };
}

/**
 * This function accepts as a parameter a function "userFunc"
 * And as a result returns an anonymous function.
 * This anonymous function, accepts as arguments,
 * the parameters to pass to the function "useArgs" and returns a Promise
 * This function can be used as a wrapper, only inside a Worker
 * because it depends by "postMessage".
 *
 * @param {Function} userFunc {Function} fn the function to run with web worker
 *
 * @returns {Function} returns a function that accepts the parameters
 * to be passed to the "userFunc" function
 */
const jobRunner = (userFunc) => (e) => {
    const userFuncArgs = e.data[0];
    // eslint-disable-next-line prefer-spread
    return Promise.resolve(userFunc.apply(undefined, userFuncArgs))
        .then((result) => {
        // @ts-ignore
        postMessage(['SUCCESS', result]);
    })
        .catch((error) => {
        // @ts-ignore
        postMessage(['ERROR', error]);
    });
};

/**
 *
 * Concatenates the dependencies into a comma separated string.
 * this string will then be passed as an argument to the "importScripts" function
 *
 * @param {Array.<String>}} deps array of string
 * @returns {String} a string composed by the concatenation of the array
 * elements "deps" and "importScripts".
 *
 * @example
 * depsParser(['demo1', 'demo2']) // return importScripts('demo1, demo2')
 */
const depsParser = (deps) => {
    if (deps.length === 0)
        return '';
    const depsString = deps.map(dep => `${dep}`).toString();
    return `importScripts('${depsString}')`;
};

/**
 * Converts the "fn" function into the syntax needed to be executed within a web worker
 *
 * @param {Function} fn the function to run with web worker
 * @param {Array.<String>} deps array of strings, imported into the worker through "importScripts"
 *
 * @returns {String} a blob url, containing the code of "fn" as a string
 *
 * @example
 * createWorkerBlobUrl((a,b) => a+b, [])
 * // return "onmessage=return Promise.resolve((a,b) => a + b)
 * .then(postMessage(['SUCCESS', result]))
 * .catch(postMessage(['ERROR', error])"
 */
const createWorkerBlobUrl = (fn, deps) => {
    const blobCode = `${depsParser(deps)}; onmessage=(${jobRunner})(${fn})`;
    const blob = new Blob([blobCode], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    return url;
};

/* this implementation is a vue port of https://github.com/alewin/useWorker by Alessio Koci */
/**
 * Run expensive function without blocking the UI, using a simple syntax that makes use of Promise.
 *
 * @see https://vueuse.org/useWebWorkerFn
 * @param fn
 * @param options
 */
const useWebWorkerFn = (fn, options = {}) => {
    const { dependencies = [], timeout, window = defaultWindow, } = options;
    const worker = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])();
    const workerStatus = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])('PENDING');
    const promise = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])({});
    const timeoutId = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])();
    const workerTerminate = (status = 'PENDING') => {
        if (worker.value && worker.value._url && window) {
            worker.value.terminate();
            URL.revokeObjectURL(worker.value._url);
            promise.value = {};
            worker.value = undefined;
            window.clearTimeout(timeoutId.value);
            workerStatus.value = status;
        }
    };
    workerTerminate();
    Object(_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__["tryOnUnmounted"])(workerTerminate);
    const generateWorker = () => {
        const blobUrl = createWorkerBlobUrl(fn, dependencies);
        const newWorker = new Worker(blobUrl);
        newWorker._url = blobUrl;
        newWorker.onmessage = (e) => {
            const { resolve = () => { }, reject = () => { } } = promise.value;
            const [status, result] = e.data;
            switch (status) {
                case 'SUCCESS':
                    resolve(result);
                    workerTerminate(status);
                    break;
                default:
                    reject(result);
                    workerTerminate('ERROR');
                    break;
            }
        };
        newWorker.onerror = (e) => {
            const { reject = () => { } } = promise.value;
            reject(e);
            workerTerminate('ERROR');
        };
        if (timeout) {
            timeoutId.value = setTimeout(() => workerTerminate('TIMEOUT_EXPIRED'), timeout);
        }
        return newWorker;
    };
    const callWorker = (...fnArgs) => new Promise((resolve, reject) => {
        promise.value = {
            resolve,
            reject,
        };
        worker.value && worker.value.postMessage([[...fnArgs]]);
        workerStatus.value = 'RUNNING';
    });
    const workerFn = (...fnArgs) => {
        if (workerStatus.value === 'RUNNING') {
            /* eslint-disable-next-line no-console */
            console.error('[useWebWorkerFn] You can only run one instance of the worker at a time.');
            /* eslint-disable-next-line prefer-promise-reject-errors */
            return Promise.reject();
        }
        worker.value = generateWorker();
        return callWorker(...fnArgs);
    };
    return {
        workerFn,
        workerStatus,
        workerTerminate,
    };
};

/**
 * Reactive window scroll.
 *
 * @see https://vueuse.org/useWindowScroll
 * @param options
 */
function useWindowScroll({ window = defaultWindow } = {}) {
    if (!window) {
        return {
            x: Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(0),
            y: Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(0),
        };
    }
    const x = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(window.pageXOffset);
    const y = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(window.pageYOffset);
    useEventListener('scroll', () => {
        x.value = window.pageXOffset;
        y.value = window.pageYOffset;
    }, {
        capture: false,
        passive: true,
    });
    return { x, y };
}

/**
 * Reactive window size.
 *
 * @see https://vueuse.org/useWindowSize
 * @param options
 */
function useWindowSize({ window = defaultWindow, initialWidth = Infinity, initialHeight = Infinity } = {}) {
    if (!window) {
        return {
            width: Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(initialWidth),
            height: Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(initialHeight),
        };
    }
    const width = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(window.innerWidth);
    const height = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(window.innerHeight);
    useEventListener('resize', () => {
        width.value = window.innerWidth;
        height.value = window.innerHeight;
    }, { passive: true });
    return { width, height };
}




/***/ }),

/***/ "./node_modules/@vueuse/shared/dist/index.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@vueuse/shared/dist/index.esm.js ***!
  \*******************************************************/
/*! exports provided: and, assert, biSyncRef, bypassFilter, clamp, containsProp, controlledComputed, controlledRef, createEventHook, createFilterWrapper, createSingletonPromise, debounceFilter, debouncedWatch, extendRef, get, ignorableWatch, increaseWithUnit, invoke, isBoolean, isClient, isDef, isFunction, isNumber, isObject, isString, isWindow, makeDestructurable, noop, not, now, or, pausableFilter, pausableWatch, promiseTimeout, reactify, reactifyObject, reactivePick, set, syncRef, throttleFilter, throttledWatch, timestamp, tryOnMounted, tryOnUnmounted, until, useCounter, useDebounce, useDebounceFn, useInterval, useIntervalFn, useLastChanged, useThrottle, useThrottleFn, useTimeout, useTimeoutFn, useToggle, watchWithFilter, when, whenever */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "and", function() { return and; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "biSyncRef", function() { return biSyncRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bypassFilter", function() { return bypassFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsProp", function() { return containsProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controlledComputed", function() { return controlledComputed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controlledRef", function() { return controlledRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventHook", function() { return createEventHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilterWrapper", function() { return createFilterWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSingletonPromise", function() { return createSingletonPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounceFilter", function() { return debounceFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debouncedWatch", function() { return debouncedWatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendRef", function() { return extendRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignorableWatch", function() { return ignorableWatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increaseWithUnit", function() { return increaseWithUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invoke", function() { return invoke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClient", function() { return isClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDef", function() { return isDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWindow", function() { return isWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeDestructurable", function() { return makeDestructurable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not", function() { return not; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "or", function() { return or; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pausableFilter", function() { return pausableFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pausableWatch", function() { return pausableWatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promiseTimeout", function() { return promiseTimeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactify", function() { return reactify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactifyObject", function() { return reactifyObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactivePick", function() { return reactivePick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syncRef", function() { return syncRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttleFilter", function() { return throttleFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttledWatch", function() { return throttledWatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timestamp", function() { return timestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryOnMounted", function() { return tryOnMounted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryOnUnmounted", function() { return tryOnUnmounted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "until", function() { return until; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCounter", function() { return useCounter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDebounce", function() { return useDebounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDebounceFn", function() { return useDebounceFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInterval", function() { return useInterval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIntervalFn", function() { return useIntervalFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLastChanged", function() { return useLastChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useThrottle", function() { return useThrottle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useThrottleFn", function() { return useThrottleFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTimeout", function() { return useTimeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTimeoutFn", function() { return useTimeoutFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useToggle", function() { return useToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchWithFilter", function() { return watchWithFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "when", function() { return when; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenever", function() { return whenever; });
/* harmony import */ var vue_demi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-demi */ "./node_modules/vue-demi/lib/index.mjs");


/**
 * `AND` conditions for refs.
 *
 * @see https://vueuse.org/and
 */
function and(...args) {
    return Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(() => args.every(i => Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(i)));
}

/**
 * Two-way refs synchronization.
 *
 * @param a
 * @param b
 */
function biSyncRef(a, b) {
    const flush = 'sync';
    const stop1 = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])(a, (newValue) => {
        b.value = newValue;
    }, {
        flush,
        immediate: true,
    });
    const stop2 = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])(b, (newValue) => {
        a.value = newValue;
    }, {
        flush,
        immediate: true,
    });
    return () => {
        stop1();
        stop2();
    };
}

/**
 * Explicitly define the deps of computed.
 *
 * @param source
 * @param fn
 */
function controlledComputed(source, fn) {
    let v = undefined;
    let track;
    let trigger;
    const dirty = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(true);
    Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])(source, () => {
        dirty.value = true;
        trigger();
    }, { flush: 'sync' });
    return Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["customRef"])((_track, _trigger) => {
        track = _track;
        trigger = _trigger;
        return {
            get() {
                if (dirty.value) {
                    v = fn();
                    dirty.value = false;
                }
                track();
                return v;
            },
            set() { },
        };
    });
}

function __onlyVue3(name = 'this function') {
    if (vue_demi__WEBPACK_IMPORTED_MODULE_0__["isVue3"])
        return;
    throw new Error(`[VueUse] ${name} is only works on Vue 3.`);
}

// implementation
function extendRef(ref, extend, { enumerable = false, unwrap = true } = {}) {
    __onlyVue3();
    for (const [key, value] of Object.entries(extend)) {
        if (key === 'value')
            continue;
        if (Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["isRef"])(value) && unwrap) {
            Object.defineProperty(ref, key, {
                get() {
                    return value.value;
                },
                set(v) {
                    value.value = v;
                },
                enumerable,
            });
        }
        else {
            Object.defineProperty(ref, key, { value, enumerable });
        }
    }
    return ref;
}

/**
 * Explicitly define the deps of computed.
 *
 * @param source
 * @param fn
 */
function controlledRef(initial, options = {}) {
    let source = initial;
    let track;
    let trigger;
    const ref = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["customRef"])((_track, _trigger) => {
        track = _track;
        trigger = _trigger;
        return {
            get() {
                return get();
            },
            set(v) {
                set(v);
            },
        };
    });
    function get(tracking = true) {
        if (tracking)
            track();
        return source;
    }
    function set(value, triggering = true) {
        var _a, _b;
        if (value === source)
            return;
        const old = source;
        if (((_a = options.onBeforeChange) === null || _a === void 0 ? void 0 : _a.call(options, value, old)) === false)
            return; // dismissed
        source = value;
        (_b = options.onChanged) === null || _b === void 0 ? void 0 : _b.call(options, value, old);
        if (triggering)
            trigger();
    }
    /**
     * Get the value without tracked in the reactivity system
     */
    const untrackedGet = () => get(false);
    /**
     * Set the value without triggering the reactivity system
     */
    const silentSet = (v) => set(v, false);
    /**
     * Get the value without tracked in the reactivity system.
     *
     * Alias for `untrackedGet()`
     */
    const peek = () => get(false);
    /**
     * Set the value without triggering the reactivity system
     *
     * Alias for `silentSet(v)`
     */
    const lay = (v) => set(v, false);
    return extendRef(ref, {
        get,
        set,
        untrackedGet,
        silentSet,
        peek,
        lay,
    }, { enumerable: true });
}

/**
 * The source code for this function was inspired by vue-apollo's `useEventHook` util
 * https://github.com/vuejs/vue-apollo/blob/v4/packages/vue-apollo-composable/src/util/useEventHook.ts
 */
/**
 * Utility for creating event hooks
 *
 * @see https://vueuse.org/createEventHook
 */
function createEventHook() {
    const fns = [];
    const off = (fn) => {
        const index = fns.indexOf(fn);
        if (index !== -1)
            fns.splice(index, 1);
    };
    const on = (fn) => {
        fns.push(fn);
        return {
            off: () => off(fn),
        };
    };
    const trigger = (param) => {
        fns.forEach(fn => fn(param));
    };
    return {
        on,
        off,
        trigger,
    };
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

const isClient = typeof window !== 'undefined';
const isDef = (val) => typeof val !== 'undefined';
const assert = (condition, ...infos) => {
    if (!condition)
        console.warn(...infos);
};
const toString = Object.prototype.toString;
const isBoolean = (val) => typeof val === 'boolean';
const isFunction = (val) => typeof val === 'function';
const isNumber = (val) => typeof val === 'number';
const isString = (val) => typeof val === 'string';
const isObject = (val) => toString.call(val) === '[object Object]';
const isWindow = (val) => typeof window !== 'undefined' && toString.call(val) === '[object Window]';
const now = () => Date.now();
const timestamp = () => +Date.now();
const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
const noop = () => { };

/**
 * @internal
 */
function createFilterWrapper(filter, fn) {
    function wrapper(...args) {
        filter(() => fn.apply(this, args), { fn, thisArg: this, args });
    }
    return wrapper;
}
const bypassFilter = (invoke) => {
    return invoke();
};
/**
 * Create an EventFilter that debounce the events
 *
 * @param ms
 */
function debounceFilter(ms) {
    let timer;
    const filter = (invoke) => {
        const duration = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(ms);
        if (timer)
            clearTimeout(timer);
        if (duration <= 0)
            return invoke();
        timer = setTimeout(invoke, duration);
    };
    return filter;
}
/**
 * Create an EventFilter that throttle the events
 *
 * @param ms
 * @param [trailing=true]
 */
function throttleFilter(ms, trailing = true) {
    let lastExec = 0;
    let timer;
    const clear = () => {
        if (timer) {
            clearTimeout(timer);
            timer = undefined;
        }
    };
    const filter = (invoke) => {
        const duration = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(ms);
        const elapsed = Date.now() - lastExec;
        clear();
        if (duration <= 0) {
            lastExec = Date.now();
            return invoke();
        }
        if (elapsed > duration) {
            lastExec = Date.now();
            invoke();
        }
        else if (trailing) {
            timer = setTimeout(() => {
                clear();
                invoke();
            }, duration);
        }
    };
    return filter;
}
/**
 * EventFilter that gives extra controls to pause and resume the filter
 *
 * @param extendFilter  Extra filter to apply when the PauseableFilter is active, default to none
 *
 */
function pausableFilter(extendFilter = bypassFilter) {
    const isActive = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(true);
    function pause() {
        isActive.value = false;
    }
    function resume() {
        isActive.value = true;
    }
    const eventFilter = (...args) => {
        if (isActive.value)
            extendFilter(...args);
    };
    return { isActive, pause, resume, eventFilter };
}

function promiseTimeout(ms, throwOnTimeout = false, reason = 'Timeout') {
    return new Promise((resolve, reject) => {
        if (throwOnTimeout)
            setTimeout(() => reject(reason), ms);
        else
            setTimeout(resolve, ms);
    });
}
/**
 * Create singleton promise function
 *
 * @example
 * ```
 * const promise = createSingletonPromise(async () => { ... })
 *
 * await promise()
 * await promise() // all of them will be bind to a single promise instance
 * await promise() // and be resolved together
 * ```
 */
function createSingletonPromise(fn) {
    let _promise;
    function wrapper() {
        if (!_promise)
            _promise = fn();
        return _promise;
    }
    wrapper.reset = async () => {
        const _prev = _promise;
        _promise = undefined;
        if (_prev)
            await _prev;
    };
    return wrapper;
}
function invoke(fn) {
    return fn();
}
function containsProp(obj, ...props) {
    return props.some(k => k in obj);
}
function increaseWithUnit(target, delta) {
    var _a;
    if (typeof target === 'number')
        return target + delta;
    const value = ((_a = target.match(/^-?[0-9]+\.?[0-9]*/)) === null || _a === void 0 ? void 0 : _a[0]) || '';
    const unit = target.slice(value.length);
    const result = (parseFloat(value) + delta);
    if (Number.isNaN(result))
        return target;
    return result + unit;
}

// implementation
function watchWithFilter(source, cb, options = {}) {
    const { eventFilter = bypassFilter } = options, watchOptions = __rest(options, ["eventFilter"]);
    return Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])(source, createFilterWrapper(eventFilter, cb), watchOptions);
}

// implementation
function debouncedWatch(source, cb, options = {}) {
    const { debounce = 0 } = options, watchOptions = __rest(options, ["debounce"]);
    return watchWithFilter(source, cb, Object.assign(Object.assign({}, watchOptions), { eventFilter: debounceFilter(debounce) }));
}

function get(obj, key) {
    if (key == null)
        return Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(obj);
    return Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(obj)[key];
}

function ignorableWatch(source, cb, options = {}) {
    const { eventFilter = bypassFilter } = options, watchOptions = __rest(options, ["eventFilter"]);
    const filteredCb = createFilterWrapper(eventFilter, cb);
    let ignoreUpdates;
    let ignorePrevAsyncUpdates;
    let stop;
    if (watchOptions.flush === 'sync') {
        const ignore = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
        // no op for flush: sync
        ignorePrevAsyncUpdates = () => { };
        ignoreUpdates = (updater) => {
            // Call the updater function and count how many sync updates are performed,
            // then add them to the ignore count
            ignore.value = true;
            updater();
            ignore.value = false;
        };
        stop = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])(source, (...args) => {
            if (!ignore.value)
                filteredCb(...args);
        }, watchOptions);
    }
    else {
        // flush 'pre' and 'post'
        const disposables = [];
        // counters for how many following changes to be ignored
        // ignoreCounter is incremented before there is a history operation
        // affecting the source ref value (undo, redo, revert).
        // syncCounter is incremented in sync with every change to the
        // source ref value. This let us know how many times the ref
        // was modified and support chained sync operations. If there
        // are more sync triggers than the ignore count, the we now
        // there are modifications in the source ref value that we
        // need to commit
        const ignoreCounter = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
        const syncCounter = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
        ignorePrevAsyncUpdates = () => {
            ignoreCounter.value = syncCounter.value;
        };
        // Sync watch to count modifications to the source
        disposables.push(Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])(source, () => {
            syncCounter.value++;
        }, Object.assign(Object.assign({}, watchOptions), { flush: 'sync' })));
        ignoreUpdates = (updater) => {
            // Call the updater function and count how many sync updates are performed,
            // then add them to the ignore count
            const syncCounterPrev = syncCounter.value;
            updater();
            ignoreCounter.value += syncCounter.value - syncCounterPrev;
        };
        disposables.push(Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])(source, (...args) => {
            // If a history operation was performed (ignoreCounter > 0) and there are
            // no other changes to the source ref value afterwards, then ignore this commit
            const ignore = ignoreCounter.value > 0 && ignoreCounter.value === syncCounter.value;
            ignoreCounter.value = 0;
            syncCounter.value = 0;
            if (ignore)
                return;
            filteredCb(...args);
        }, watchOptions));
        stop = () => {
            disposables.forEach(fn => fn());
        };
    }
    return { stop, ignoreUpdates, ignorePrevAsyncUpdates };
}

function makeDestructurable(obj, arr) {
    if (typeof Symbol !== 'undefined') {
        const clone = Object.assign({}, obj);
        Object.defineProperty(clone, Symbol.iterator, {
            enumerable: false,
            value() {
                let index = 0;
                return {
                    next: () => ({
                        value: arr[index++],
                        done: index > arr.length,
                    }),
                };
            },
        });
        return clone;
    }
    else {
        return Object.assign([...arr], obj);
    }
}

/**
 * `NOT` conditions for refs.
 *
 * @see https://vueuse.org/not
 */
function not(v) {
    return Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(() => !Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(v));
}

/**
 * `OR` conditions for refs.
 *
 * @see https://vueuse.org/or
 */
function or(...args) {
    return Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(() => args.some(i => Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(i)));
}

// implementation
function pausableWatch(source, cb, options = {}) {
    const { eventFilter: filter } = options, watchOptions = __rest(options, ["eventFilter"]);
    const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
    const stop = watchWithFilter(source, cb, Object.assign(Object.assign({}, watchOptions), { eventFilter }));
    return { stop, pause, resume, isActive };
}

/**
 * Converts plain function into a reactive function.
 * The converted function accepts refs as it's arguments
 * and returns a ComputedRef, with proper typing.
 *
 * @param fn - Source function
 */
function reactify(fn) {
    return function (...args) {
        return Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(() => fn.apply(this, args.map(i => Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(i))));
    };
}

function reactifyObject(obj, optionsOrKeys = {}) {
    let keys = [];
    if (Array.isArray(optionsOrKeys)) {
        keys = optionsOrKeys;
    }
    else {
        const { includeOwnProperties = true } = optionsOrKeys;
        keys.push(...Object.keys(obj));
        if (includeOwnProperties)
            keys.push(...Object.getOwnPropertyNames(obj));
    }
    return Object.fromEntries(keys
        .map((key) => {
        const value = obj[key];
        return [
            key,
            typeof value === 'function'
                ? reactify(value.bind(obj))
                : value,
        ];
    }));
}

/**
 * Reactively pick fields from a reactive object
 *
 * @see https://vueuse.js.org/reactivePick
 */
function reactivePick(obj, ...keys) {
    return Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["reactive"])(Object.fromEntries(keys.map(k => [k, Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["toRef"])(obj, k)])));
}

/**
 *  Shorthand for `ref.value = x`
 */
function set(...args) {
    if (args.length === 2) {
        const [ref, value] = args;
        ref.value = value;
    }
    if (args.length === 3) {
        if (vue_demi__WEBPACK_IMPORTED_MODULE_0__["isVue2"]) {
            // use @vue/composition-api's set API
            __webpack_require__(/*! vue-demi */ "./node_modules/vue-demi/lib/index.mjs").set(...args);
        }
        else {
            const [target, key, value] = args;
            target[key] = value;
        }
    }
}

/**
 * Keep target ref(s) in sync with the source ref
 *
 * @param source source ref
 * @param targets
 */
function syncRef(source, targets, { flush = 'sync', deep = false, immediate = true, } = {}) {
    if (!Array.isArray(targets))
        targets = [targets];
    return Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])(source, (newValue) => {
        targets.forEach(target => target.value = newValue);
    }, {
        flush,
        deep,
        immediate,
    });
}

// implementation
function throttledWatch(source, cb, options = {}) {
    const { throttle = 0 } = options, watchOptions = __rest(options, ["throttle"]);
    return watchWithFilter(source, cb, Object.assign(Object.assign({}, watchOptions), { eventFilter: throttleFilter(throttle) }));
}

/**
 * Call onMounted() if it's inside a component lifecycle, if not, run just call the function
 *
 * @param fn
 * @param sync if set to false, it will run in the nextTick() of Vue
 */
function tryOnMounted(fn, sync = true) {
    if (Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["getCurrentInstance"])())
        Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["onMounted"])(fn);
    else if (sync)
        fn();
    else
        Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["nextTick"])(fn);
}

/**
 * Call onUnmounted() if it's inside a component lifecycle, if not, do nothing
 *
 * @param fn
 */
function tryOnUnmounted(fn) {
    if (Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["getCurrentInstance"])())
        Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["onUnmounted"])(fn);
}

function until(r) {
    let isNot = false;
    function toMatch(condition, { flush = 'sync', deep = false, timeout, throwOnTimeout } = {}) {
        let stop = null;
        const watcher = new Promise((resolve) => {
            stop = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])(r, (v) => {
                if (condition(v) === !isNot) {
                    stop === null || stop === void 0 ? void 0 : stop();
                    resolve();
                }
            }, {
                flush,
                deep,
                immediate: true,
            });
        });
        const promises = [watcher];
        if (timeout) {
            promises.push(promiseTimeout(timeout, throwOnTimeout).finally(() => {
                stop === null || stop === void 0 ? void 0 : stop();
            }));
        }
        return Promise.race(promises);
    }
    function toBe(value, options) {
        return toMatch(v => v === Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(value), options);
    }
    function toBeTruthy(options) {
        return toMatch(v => Boolean(v), options);
    }
    function toBeNull(options) {
        return toBe(null, options);
    }
    function toBeUndefined(options) {
        return toBe(undefined, options);
    }
    function toBeNaN(options) {
        return toMatch(Number.isNaN, options);
    }
    function toContains(value, options) {
        return toMatch((v) => {
            const array = Array.from(v);
            return array.includes(value) || array.includes(Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(value));
        }, options);
    }
    function changed(options) {
        return changedTimes(1, options);
    }
    function changedTimes(n = 1, options) {
        let count = -1; // skip the immediate check
        return toMatch(() => {
            count += 1;
            return count >= n;
        }, options);
    }
    if (Array.isArray(Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(r))) {
        const instance = {
            toMatch,
            toContains,
            changed,
            changedTimes,
            get not() {
                isNot = !isNot;
                return this;
            },
        };
        return instance;
    }
    else {
        const instance = {
            toMatch,
            toBe,
            toBeTruthy,
            toBeNull,
            toBeNaN,
            toBeUndefined,
            changed,
            changedTimes,
            get not() {
                isNot = !isNot;
                return this;
            },
        };
        return instance;
    }
}
/**
 * @deprecated `when` is renamed to `util`, use `until` instead. This will be removed in next major version.
 */
const when = until;

/**
 * Basic counter with utility functions.
 *
 * @see https://vueuse.org/useCounter
 * @param [initialValue=0]
 */
function useCounter(initialValue = 0) {
    const count = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(initialValue);
    const inc = (delta = 1) => (count.value += delta);
    const dec = (delta = 1) => (count.value -= delta);
    const get = () => count.value;
    const set = (val) => (count.value = val);
    const reset = (val = initialValue) => {
        initialValue = val;
        return set(val);
    };
    return { count, inc, dec, get, set, reset };
}

/**
 * Debounce execution of a function.
 *
 * @param  fn          A function to be executed after delay milliseconds debounced.
 * @param  ms          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 *
 * @return A new, debounce, function.
 */
function useDebounceFn(fn, ms = 200) {
    return createFilterWrapper(debounceFilter(ms), fn);
}

function useDebounce(value, ms = 200) {
    if (ms <= 0)
        return value;
    const debounced = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(value.value);
    const updater = useDebounceFn(() => {
        debounced.value = value.value;
    }, ms);
    Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])(value, () => updater());
    return debounced;
}

/**
 * Wrapper for `setInterval` with controls
 *
 * @param cb
 * @param interval
 * @param immediate
 */
function useIntervalFn(cb, interval = 1000, immediate = true) {
    let timer = null;
    const isActive = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
    function clean() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    }
    function pause() {
        isActive.value = false;
        clean();
    }
    function resume() {
        if (interval <= 0)
            return;
        isActive.value = true;
        clean();
        timer = setInterval(cb, interval);
    }
    if (immediate && isClient)
        resume();
    tryOnUnmounted(pause);
    return {
        isActive,
        pause,
        resume,
        start: resume,
        stop: pause,
    };
}

function useInterval(interval = 1000, immediate = true) {
    const counter = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
    return Object.assign({ counter }, useIntervalFn(() => counter.value += 1, interval, immediate));
}

function useLastChanged(source, options = {}) {
    var _a;
    const ms = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])((_a = options.initialValue) !== null && _a !== void 0 ? _a : null);
    Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])(source, () => ms.value = timestamp(), options);
    return ms;
}

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param   fn             A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param   ms             A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 *
 * @return  A new, throttled, function.
 */
function useThrottleFn(fn, ms = 200, trailing = true) {
    return createFilterWrapper(throttleFilter(ms, trailing), fn);
}

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  delay  A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 */
function useThrottle(value, delay = 200) {
    if (delay <= 0)
        return value;
    const throttled = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(value.value);
    const updater = useThrottleFn(() => {
        throttled.value = value.value;
    }, delay);
    Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])(value, () => updater());
    return throttled;
}

/**
 * Wrapper for `setTimeout` with controls.
 *
 * @param cb
 * @param interval
 * @param immediate
 */
function useTimeoutFn(cb, interval, immediate = true) {
    const isPending = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
    let timer = null;
    function clear() {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    }
    function stop() {
        isPending.value = false;
        clear();
    }
    function start(...args) {
        clear();
        isPending.value = true;
        timer = setTimeout(() => {
            isPending.value = false;
            timer = null;
            // eslint-disable-next-line node/no-callback-literal
            cb(...args);
        }, interval);
    }
    if (immediate) {
        isPending.value = true;
        if (isClient)
            start();
    }
    tryOnUnmounted(stop);
    return {
        isPending,
        start,
        stop,
        isActive: isPending,
    };
}

/**
 * Update value after a given time with controls.
 *
 * @param interval
 * @param immediate
 */
function useTimeout(interval = 1000, immediate = true) {
    const ready = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
    const controls = useTimeoutFn(() => ready.value = true, interval, immediate);
    function stop() {
        ready.value = false;
        controls.stop();
    }
    function start() {
        ready.value = false;
        controls.start();
    }
    return {
        ready,
        isActive: controls.isActive,
        start,
        stop,
    };
}

function useToggle(initialValue = false) {
    if (Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["isRef"])(initialValue)) {
        return () => (initialValue.value = !initialValue.value);
    }
    else {
        const boolean = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(initialValue);
        const toggle = () => (boolean.value = !boolean.value);
        return [boolean, toggle];
    }
}

/**
 * Shorthand for watching value to be truthy
 *
 * @see https://vueuse.js.org/whenever
 */
function whenever(source, cb, options) {
    return Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])(source, (v) => { if (v)
        cb(); }, options);
}




/***/ }),

/***/ "./node_modules/vue-demi/lib/index.mjs":
/*!*********************************************!*\
  !*** ./node_modules/vue-demi/lib/index.mjs ***!
  \*********************************************/
/*! exports provided: EffectScope, computed, createApp, createRef, customRef, defineAsyncComponent, defineComponent, del, effectScope, getCurrentInstance, getCurrentScope, h, inject, isRaw, isReactive, isReadonly, isRef, markRaw, nextTick, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onScopeDispose, onServerPrefetch, onUnmounted, onUpdated, provide, proxyRefs, reactive, readonly, ref, set, shallowReactive, shallowReadonly, shallowRef, toRaw, toRef, toRefs, triggerRef, unref, useAttrs, useCSSModule, useCssModule, useSlots, warn, watch, watchEffect, watchPostEffect, watchSyncEffect, Vue, Vue2, isVue2, isVue3, version, install */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vue2", function() { return Vue2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVue2", function() { return isVue2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVue3", function() { return isVue3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Vue", function() { return vue__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api/dist/vue-composition-api.mjs */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EffectScope", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["EffectScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computed", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["computed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createApp", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["createApp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["createRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customRef", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["customRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineAsyncComponent", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["defineAsyncComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineComponent", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["defineComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "del", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["del"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effectScope", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["effectScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentInstance", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["getCurrentInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentScope", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["getCurrentScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["inject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRaw", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["isRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReactive", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["isReactive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReadonly", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["isReadonly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRef", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["isRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "markRaw", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["markRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["nextTick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onActivated", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["onActivated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeforeMount", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["onBeforeMount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeforeUnmount", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["onBeforeUnmount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeforeUpdate", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["onBeforeUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onDeactivated", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["onDeactivated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onErrorCaptured", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["onErrorCaptured"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onMounted", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["onMounted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onScopeDispose", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["onScopeDispose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onServerPrefetch", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["onServerPrefetch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onUnmounted", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["onUnmounted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onUpdated", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["onUpdated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "provide", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["provide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "proxyRefs", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["proxyRefs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reactive", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["reactive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readonly", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["readonly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ref", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["ref"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "set", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["set"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowReactive", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["shallowReactive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowReadonly", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["shallowReadonly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowRef", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["shallowRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toRaw", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["toRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toRef", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["toRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toRefs", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["toRefs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "triggerRef", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["triggerRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unref", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["unref"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAttrs", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["useAttrs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCSSModule", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["useCSSModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCssModule", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["useCssModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSlots", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["useSlots"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["warn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watch", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["watch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchEffect", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["watchEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchPostEffect", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["watchPostEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchSyncEffect", function() { return _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["watchSyncEffect"]; });




function install(_vue) {
  _vue = _vue || vue__WEBPACK_IMPORTED_MODULE_0__
  if (_vue && !_vue['__composition_api_installed__'])
    vue__WEBPACK_IMPORTED_MODULE_0__.use(_vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])
}

install(vue__WEBPACK_IMPORTED_MODULE_0__)

var isVue2 = true
var isVue3 = false
var Vue2 = vue__WEBPACK_IMPORTED_MODULE_0__
var version = vue__WEBPACK_IMPORTED_MODULE_0__.version

/**VCA-EXPORTS**/

/**VCA-EXPORTS**/




/***/ }),

/***/ "./node_modules/vue-toastification/composition/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-toastification/composition/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js"); // eslint-disable-line @typescript-eslint/no-var-requires
const { inject, provide } = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs"); // eslint-disable-line @typescript-eslint/no-var-requires

const toastSymbol = Symbol("Vue Toastification");

let createToastInterface = () => {
  const toast = () =>
    console.warn("[Vue Toastification] This plugin does not support SSR!");
  return new Proxy(toast, {
    get: function() {
      return toast;
    }
  });
};

if (typeof window !== "undefined") {
  const toastification = __webpack_require__(/*! vue-toastification */ "./node_modules/vue-toastification/dist/esm/index.js"); // eslint-disable-line @typescript-eslint/no-var-requires
  createToastInterface = toastification.createToastInterface;
}

/** @type {ReturnType<typeof createToastInterface>} */
const interfaceFromBus = bus => {
  const VueClass = typeof Vue.prototype === "undefined" ? Vue.default : Vue;
  return bus instanceof VueClass ? createToastInterface(bus) : undefined;
};

// Generate provider and consumer
const provideToast = options =>
  provide(toastSymbol, createToastInterface(options));
const useToast = eventBus =>
  interfaceFromBus(eventBus) || inject(toastSymbol, interfaceFromBus(eventBus));

module.exports = { provideToast, useToast };


/***/ })

}]);