(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[136],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/authentication/Login.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/authentication/Login.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _core_layouts_components_Logo_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/layouts/components/Logo.vue */ "./resources/js/src/@core/layouts/components/Logo.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _auth_jwt_useJwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/auth/jwt/useJwt */ "./resources/js/src/auth/jwt/useJwt.js");
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @validations */ "./resources/js/src/@core/utils/validations/validations.js");
/* harmony import */ var _core_mixins_ui_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/mixins/ui/forms */ "./resources/js/src/@core/mixins/ui/forms.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/store/index */ "./resources/js/src/store/index.js");
/* harmony import */ var _auth_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/auth/utils */ "./resources/js/src/auth/utils.js");
/* harmony import */ var _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent.vue */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* eslint-disable global-require */









/* harmony default export */ __webpack_exports__["default"] = ({
  directives: {
    'b-tooltip': bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["VBTooltip"]
  },
  components: {
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BCol"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BLink"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BFormInput"],
    BInputGroupAppend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BInputGroupAppend"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BInputGroup"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BFormCheckbox"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BCardText"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BCardTitle"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BImg"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BForm"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BButton"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BAlert"],
    VuexyLogo: _core_layouts_components_Logo_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_3__["ValidationProvider"],
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_3__["ValidationObserver"]
  },
  mixins: [_core_mixins_ui_forms__WEBPACK_IMPORTED_MODULE_8__["togglePasswordVisibility"]],
  data: function data() {
    return {
      status: '',
      password: 'admin',
      userEmail: 'admin@demo.com',
      sideImg: __webpack_require__(/*! @/assets/images/pages/login-v2.svg */ "./resources/js/src/assets/images/pages/login-v2.svg"),
      // validation rules
      required: _validations__WEBPACK_IMPORTED_MODULE_7__["required"],
      email: _validations__WEBPACK_IMPORTED_MODULE_7__["email"]
    };
  },
  computed: {
    passwordToggleIcon: function passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon';
    },
    imgUrl: function imgUrl() {
      if (_store_index__WEBPACK_IMPORTED_MODULE_9__["default"].state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = __webpack_require__(/*! @/assets/images/pages/login-v2-dark.svg */ "./resources/js/src/assets/images/pages/login-v2-dark.svg");
        return this.sideImg;
      }

      return this.sideImg;
    }
  },
  methods: {
    login: function login() {
      var _this = this;

      this.$refs.loginForm.validate().then(function (success) {
        if (success) {
          _auth_jwt_useJwt__WEBPACK_IMPORTED_MODULE_6__["default"].login({
            email: _this.userEmail,
            password: _this.password
          }).then(function (response) {
            var userData = response.data.userData;
            _auth_jwt_useJwt__WEBPACK_IMPORTED_MODULE_6__["default"].setToken(response.data.accessToken);
            _auth_jwt_useJwt__WEBPACK_IMPORTED_MODULE_6__["default"].setRefreshToken(response.data.refreshToken);
            localStorage.setItem('userData', JSON.stringify(userData));

            _this.$ability.update(userData.ability); // ? This is just for demo purpose as well.
            // ? Because we are showing eCommerce app's cart items count in navbar


            _this.$store.commit('app-ecommerce/UPDATE_CART_ITEMS_COUNT', userData.extras.eCommerceCartItemsCount); // ? This is just for demo purpose. Don't think CASL is role based in this case, we used role in if condition just for ease


            _this.$router.replace(Object(_auth_utils__WEBPACK_IMPORTED_MODULE_10__["getHomeRouteForLoggedInUser"])(userData.role)).then(function () {
              _this.$toast({
                component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
                position: 'top-right',
                props: {
                  title: "Welcome ".concat(userData.fullName || userData.username),
                  icon: 'CoffeeIcon',
                  variant: 'success',
                  text: "You have successfully logged in as ".concat(userData.role, ". Now you can start to explore!")
                }
              });
            });
          })["catch"](function (error) {
            _this.$refs.loginForm.setErrors(error.response.data.error);
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/internals/get-substitution.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/get-substitution.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var floor = Math.floor;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice(str, 0, position);
      case "'": return stringSlice(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.replace.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var getSubstitution = __webpack_require__(/*! ../internals/get-substitution */ "./node_modules/core-js/internals/get-substitution.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? call(replacer, searchValue, O, replaceValue)
        : call(nativeReplace, toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          var replacement = toString(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/authentication/Login.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/authentication/Login.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n   ╷\n18 │ @import 'scss/variables/variables'; // Bootstrap custom variable override (for user purpose)\r\n   │         ^^^^^^^^^^^^^^^^^^^^^^^^^^\n   ╵\n  resources/scss/base/bootstrap-extended/_include.scss 18:9    @import\n  resources/scss/base/pages/page-auth.scss 1:9                 @import\n  resources/scss/vue/pages/page-auth.scss 1:9                  @import\n  resources/js/src/views/pages/authentication/Login.vue 335:9  root stylesheet");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/authentication/Login.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/authentication/Login.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/authentication/Login.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/authentication/Login.vue?vue&type=template&id=92be1b32&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/authentication/Login.vue?vue&type=template&id=92be1b32& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "auth-wrapper auth-v2" },
    [
      _c(
        "b-row",
        { staticClass: "auth-inner m-0" },
        [
          _c(
            "b-link",
            { staticClass: "brand-logo" },
            [
              _c("vuexy-logo"),
              _vm._v(" "),
              _c("h2", { staticClass: "brand-text text-primary ml-1" }, [
                _vm._v("\n        Vuexy\n      "),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            {
              staticClass: "d-none d-lg-flex align-items-center p-5",
              attrs: { lg: "8" },
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "w-100 d-lg-flex align-items-center justify-content-center px-5",
                },
                [
                  _c("b-img", {
                    attrs: { fluid: "", src: _vm.imgUrl, alt: "Login V2" },
                  }),
                ],
                1
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "b-col",
            {
              staticClass: "d-flex align-items-center auth-bg px-2 p-lg-5",
              attrs: { lg: "4" },
            },
            [
              _c(
                "b-col",
                {
                  staticClass: "px-xl-2 mx-auto",
                  attrs: { sm: "8", md: "6", lg: "12" },
                },
                [
                  _c(
                    "b-card-title",
                    {
                      staticClass: "mb-1 font-weight-bold",
                      attrs: { "title-tag": "h2" },
                    },
                    [_vm._v("\n          Welcome to Vuexy! 👋\n        ")]
                  ),
                  _vm._v(" "),
                  _c("b-card-text", { staticClass: "mb-2" }, [
                    _vm._v(
                      "\n          Please sign-in to your account and start the adventure\n        "
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-alert",
                    { attrs: { variant: "primary", show: "" } },
                    [
                      _c("div", { staticClass: "alert-body font-small-2" }, [
                        _c("p", [
                          _c("small", { staticClass: "mr-50" }, [
                            _c("span", { staticClass: "font-weight-bold" }, [
                              _vm._v("Admin:"),
                            ]),
                            _vm._v(" admin@demo.com | admin"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _c("small", { staticClass: "mr-50" }, [
                            _c("span", { staticClass: "font-weight-bold" }, [
                              _vm._v("Client:"),
                            ]),
                            _vm._v(" client@demo.com | client"),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("feather-icon", {
                        directives: [
                          {
                            name: "b-tooltip",
                            rawName: "v-b-tooltip.hover.left",
                            value: "This is just for ACL demo purpose",
                            expression: "'This is just for ACL demo purpose'",
                            modifiers: { hover: true, left: true },
                          },
                        ],
                        staticClass: "position-absolute",
                        staticStyle: { top: "10", right: "10" },
                        attrs: { icon: "HelpCircleIcon", size: "18" },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("validation-observer", {
                    ref: "loginForm",
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function (ref) {
                          var invalid = ref.invalid
                          return [
                            _c(
                              "b-form",
                              {
                                staticClass: "auth-login-form mt-2",
                                on: {
                                  submit: function ($event) {
                                    $event.preventDefault()
                                    return _vm.login.apply(null, arguments)
                                  },
                                },
                              },
                              [
                                _c(
                                  "b-form-group",
                                  {
                                    attrs: {
                                      label: "Email",
                                      "label-for": "login-email",
                                    },
                                  },
                                  [
                                    _c("validation-provider", {
                                      attrs: {
                                        name: "Email",
                                        vid: "email",
                                        rules: "required|email",
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function (ref) {
                                              var errors = ref.errors
                                              return [
                                                _c("b-form-input", {
                                                  attrs: {
                                                    id: "login-email",
                                                    state:
                                                      errors.length > 0
                                                        ? false
                                                        : null,
                                                    name: "login-email",
                                                    placeholder:
                                                      "john@example.com",
                                                  },
                                                  model: {
                                                    value: _vm.userEmail,
                                                    callback: function ($$v) {
                                                      _vm.userEmail = $$v
                                                    },
                                                    expression: "userEmail",
                                                  },
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "small",
                                                  {
                                                    staticClass: "text-danger",
                                                  },
                                                  [_vm._v(_vm._s(errors[0]))]
                                                ),
                                              ]
                                            },
                                          },
                                        ],
                                        null,
                                        true
                                      ),
                                    }),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-form-group",
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "d-flex justify-content-between",
                                      },
                                      [
                                        _c(
                                          "label",
                                          { attrs: { for: "login-password" } },
                                          [_vm._v("Password")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-link",
                                          {
                                            attrs: {
                                              to: {
                                                name: "auth-forgot-password",
                                              },
                                            },
                                          },
                                          [
                                            _c("small", [
                                              _vm._v("Forgot Password?"),
                                            ]),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("validation-provider", {
                                      attrs: {
                                        name: "Password",
                                        vid: "password",
                                        rules: "required",
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function (ref) {
                                              var errors = ref.errors
                                              return [
                                                _c(
                                                  "b-input-group",
                                                  {
                                                    staticClass:
                                                      "input-group-merge",
                                                    class:
                                                      errors.length > 0
                                                        ? "is-invalid"
                                                        : null,
                                                  },
                                                  [
                                                    _c("b-form-input", {
                                                      staticClass:
                                                        "form-control-merge",
                                                      attrs: {
                                                        id: "login-password",
                                                        state:
                                                          errors.length > 0
                                                            ? false
                                                            : null,
                                                        type: _vm.passwordFieldType,
                                                        name: "login-password",
                                                        placeholder: "Password",
                                                      },
                                                      model: {
                                                        value: _vm.password,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.password = $$v
                                                        },
                                                        expression: "password",
                                                      },
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "b-input-group-append",
                                                      {
                                                        attrs: {
                                                          "is-text": "",
                                                        },
                                                      },
                                                      [
                                                        _c("feather-icon", {
                                                          staticClass:
                                                            "cursor-pointer",
                                                          attrs: {
                                                            icon: _vm.passwordToggleIcon,
                                                          },
                                                          on: {
                                                            click:
                                                              _vm.togglePasswordVisibility,
                                                          },
                                                        }),
                                                      ],
                                                      1
                                                    ),
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "small",
                                                  {
                                                    staticClass: "text-danger",
                                                  },
                                                  [_vm._v(_vm._s(errors[0]))]
                                                ),
                                              ]
                                            },
                                          },
                                        ],
                                        null,
                                        true
                                      ),
                                    }),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-form-group",
                                  [
                                    _c(
                                      "b-form-checkbox",
                                      {
                                        attrs: {
                                          id: "remember-me",
                                          name: "checkbox-1",
                                        },
                                        model: {
                                          value: _vm.status,
                                          callback: function ($$v) {
                                            _vm.status = $$v
                                          },
                                          expression: "status",
                                        },
                                      },
                                      [
                                        _vm._v(
                                          "\n                Remember Me\n              "
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-button",
                                  {
                                    attrs: {
                                      type: "submit",
                                      variant: "primary",
                                      block: "",
                                      disabled: invalid,
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n              Sign in\n            "
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ]
                        },
                      },
                    ]),
                  }),
                  _vm._v(" "),
                  _c(
                    "b-card-text",
                    { staticClass: "text-center mt-2" },
                    [
                      _c("span", [_vm._v("New on our platform? ")]),
                      _vm._v(" "),
                      _c(
                        "b-link",
                        { attrs: { to: { name: "auth-register" } } },
                        [_c("span", [_vm._v(" Create an account")])]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "divider my-2" }, [
                    _c("div", { staticClass: "divider-text" }, [
                      _vm._v("\n            or\n          "),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "auth-footer-btn d-flex justify-content-center",
                    },
                    [
                      _c(
                        "b-button",
                        {
                          attrs: {
                            variant: "facebook",
                            href: "javascript:void(0)",
                          },
                        },
                        [
                          _c("feather-icon", {
                            attrs: { icon: "FacebookIcon" },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          attrs: {
                            variant: "twitter",
                            href: "javascript:void(0)",
                          },
                        },
                        [
                          _c("feather-icon", {
                            attrs: { icon: "TwitterIcon" },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          attrs: {
                            variant: "google",
                            href: "javascript:void(0)",
                          },
                        },
                        [_c("feather-icon", { attrs: { icon: "MailIcon" } })],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          attrs: {
                            variant: "github",
                            href: "javascript:void(0)",
                          },
                        },
                        [_c("feather-icon", { attrs: { icon: "GithubIcon" } })],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/authentication/Login.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/views/pages/authentication/Login.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_92be1b32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=92be1b32& */ "./resources/js/src/views/pages/authentication/Login.vue?vue&type=template&id=92be1b32&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/authentication/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Login_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/authentication/Login.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_92be1b32___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_92be1b32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/authentication/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/authentication/Login.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/authentication/Login.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/authentication/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/authentication/Login.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/authentication/Login.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/authentication/Login.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/authentication/Login.vue?vue&type=template&id=92be1b32&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/authentication/Login.vue?vue&type=template&id=92be1b32& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_92be1b32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=92be1b32& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/authentication/Login.vue?vue&type=template&id=92be1b32&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_92be1b32___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_92be1b32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);