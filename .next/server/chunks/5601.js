"use strict";
exports.id = 5601;
exports.ids = [5601];
exports.modules = {

/***/ 5601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ StoreProvider),
/* harmony export */   "v": () => (/* binding */ contextStore)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rehooks_local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4156);
/* harmony import */ var _rehooks_local_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rehooks_local_storage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const contextStore = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();

const reducer = (state, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      {
        const loginUser = action.payload;
        (0,_rehooks_local_storage__WEBPACK_IMPORTED_MODULE_1__.writeStorage)("userInfo", loginUser);
        return _objectSpread(_objectSpread({}, state), {}, {
          userInfo: loginUser
        });
      }

    case "USER_LOGOUT":
      {
        (0,_rehooks_local_storage__WEBPACK_IMPORTED_MODULE_1__.deleteFromStorage)("userInfo");
        return _objectSpread(_objectSpread({}, state), {}, {
          userInfo: null
        });
      }

    default:
      return state;
  }
};

function StoreProvider(props) {
  const [userInfo] = (0,_rehooks_local_storage__WEBPACK_IMPORTED_MODULE_1__.useLocalStorage)("userInfo");
  const initialState = {
    userInfo: userInfo ? userInfo : null
  };
  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(reducer, initialState);
  const value = {
    state,
    dispatch
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(contextStore.Provider, {
    value: value,
    children: props.children
  });
}

/***/ })

};
;