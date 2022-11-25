"use strict";
(() => {
var exports = {};
exports.id = 6968;
exports.ids = [6968];
exports.modules = {

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 8922:
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
/* harmony import */ var _utils_auth_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2732);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_2__]);
next_connect__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_2__["default"])();
handler.post(async (req, res, next) => {
  try {
    await (0,_utils_connectMongo_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const alumni = await _models_Alumni_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findOne */ .Z.findOne({
      email: req.query.email
    });

    if (alumni && bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().compareSync(req.query.password, alumni.password)) {
      const token = (0,_utils_auth_js__WEBPACK_IMPORTED_MODULE_4__/* .signToken */ .f)(alumni);
      res.send({
        token,
        _id: alumni._id,
        name: alumni.name,
        id: alumni.id,
        gander: alumni.gander,
        email: alumni.email,
        phone: alumni.phone,
        address: alumni.address,
        maritalStatus: alumni.maritalStatus,
        dateOfBirth: alumni.dateOfBirth,
        vrstyName: alumni.vrstyName,
        dep: alumni.dep,
        batch: alumni.batch,
        passingYear: alumni.passingYear,
        cgpa: alumni.cgpa,
        professionalTitle: alumni.professionalTitle,
        favoritSubject: alumni.favoritSubject,
        expOrFra: alumni.expOrFra,
        currentJob: alumni.currentJob,
        createdAt: alumni.createdAt,
        isVerified: alumni.isVerified,
        isAdmin: alumni.isAdmin
      });
    } else if (alumni) {
      res.send("Invalid email or password");
    } else {
      res.send("Sorry, no account exists with this email address");
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
var __webpack_exports__ = __webpack_require__.X(0, [632,9552], () => (__webpack_exec__(8922)));
module.exports = __webpack_exports__;

})();