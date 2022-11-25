"use strict";
(() => {
var exports = {};
exports.id = 9901;
exports.ids = [9901];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 6521:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_Alumni_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(488);
/* harmony import */ var _utils_connectMongo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7861);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5616);
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5184);
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_2__]);
next_connect__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_2__["default"])();
let transporter = nodemailer__WEBPACK_IMPORTED_MODULE_3___default().createTransport({
  service: "gmail",
  auth: {
    user: "porijit35-2711@diu.edu.bd",
    pass: process.env.emailPass
  },
  tls: {
    rejectUnauthorized: false
  }
});
handler.post(async (req, res) => {
  try {
    await (0,_utils_connectMongo_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(); //check email exist or not

    const isExist = await _models_Alumni_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findOne */ .Z.findOne({
      email: req.query.email
    });

    if (isExist) {
      //send mail to user
      const details = {
        from: `Verify your email porijit35-2711@diu.edu.bd`,
        to: isExist.email,
        subject: `porijit35-2711@diu.edu.bd -Verify your email`,
        html: `<h2>Verification code for reset your password</h2>
        <h4>Verification code: ${req.query.code}</h4>`
      }; //send mail

      transporter.sendMail(details, error => {
        if (error) {
          console.log(error);
        } else {
          res.send(`Verification code has been sent to ${isExist.email}.Please check your email address`);
        }
      });
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
var __webpack_exports__ = __webpack_require__.X(0, [632], () => (__webpack_exec__(6521)));
module.exports = __webpack_exports__;

})();