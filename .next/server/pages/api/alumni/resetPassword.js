"use strict";
(() => {
var exports = {};
exports.id = 9235;
exports.ids = [9235];
exports.modules = {

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 2401:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_Alumni_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(488);
/* harmony import */ var _utils_connectMongo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7861);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5616);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8432);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_2__]);
next_connect__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_2__["default"])();
handler.put(async (req, res) => {
  try {
    await (0,_utils_connectMongo_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const isExist = await _models_Alumni_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findOne */ .Z.findOne({
      email: req.query.email
    });

    if (isExist) {
      await _models_Alumni_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findByIdAndUpdate */ .Z.findByIdAndUpdate({
        _id: isExist._id
      }, {
        password: bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().hashSync(req.query.password)
      });
      res.send("Password has been changed successfully. Now you can login");
    } else {
      res.send("Sorry, no account found with this email address");
    }
  } catch (error) {
    console.log(error.message);
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [632], () => (__webpack_exec__(2401)));
module.exports = __webpack_exports__;

})();