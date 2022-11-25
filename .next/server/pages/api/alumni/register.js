"use strict";
(() => {
var exports = {};
exports.id = 9090;
exports.ids = [9090];
exports.modules = {

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

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

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 1075:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_Alumni_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(488);
/* harmony import */ var _utils_connectMongo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7861);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6113);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8432);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5616);
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5184);
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_4__]);
next_connect__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_4__["default"])();
let transporter = nodemailer__WEBPACK_IMPORTED_MODULE_5___default().createTransport({
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
    //check email exist or not
    const isExist = await _models_Alumni_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findOne */ .Z.findOne({
      email: req.body.email
    });

    if (isExist) {
      res.send("Sorry, this email address already exists with another account.");
    }

    const {
      name,
      email,
      password,
      createdAt
    } = req.body;
    await (0,_utils_connectMongo_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const newAlumni = new _models_Alumni_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z({
      name,
      email,
      password: bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().hashSync(password),
      emailToken: crypto__WEBPACK_IMPORTED_MODULE_2___default().randomBytes(64).toString("hex"),
      createdAt
    });
    await newAlumni.save(); //send mail to user

    const details = {
      from: `Verify your email porijit35-2711@diu.edu.bd`,
      to: newAlumni.email,
      subject: `porijit35-2711@diu.edu.bd -Verify your email`,
      html: `<h2>Thanks for registration</h2>
      <h4>Please verify your email...</h4>
      <a href="http://${req.headers.host}/alumni/verify-email/${newAlumni.emailToken}">Verify your email</a>
      `
    }; //send mail

    transporter.sendMail(details, error => {
      if (error) {
        console.log(error);
      } else {
        res.send(`Thanks for registration.Verification mail has been sent to ${newAlumni.email}. Please check your email to verify your account.`);
      }
    });
  } catch (error) {
    res.send(error.message);
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
var __webpack_exports__ = __webpack_require__.X(0, [632], () => (__webpack_exec__(1075)));
module.exports = __webpack_exports__;

})();