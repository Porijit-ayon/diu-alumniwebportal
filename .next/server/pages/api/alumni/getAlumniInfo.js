"use strict";
(() => {
var exports = {};
exports.id = 351;
exports.ids = [351];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 2759:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_Alumni_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(488);
/* harmony import */ var _utils_connectMongo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7861);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5616);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_2__]);
next_connect__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_2__["default"])();
handler.get(async (req, res, next) => {
  try {
    await (0,_utils_connectMongo_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const totalAlumni = await _models_Alumni_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].find */ .Z.find({
      isAdmin: false
    });
    const joinToday = await _models_Alumni_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].find */ .Z.find({
      isAdmin: false,
      createdAt: req.query.date
    });
    res.send({
      totalAlumni: totalAlumni.length,
      joinToday: joinToday.length
    });
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
var __webpack_exports__ = __webpack_require__.X(0, [632], () => (__webpack_exec__(2759)));
module.exports = __webpack_exports__;

})();