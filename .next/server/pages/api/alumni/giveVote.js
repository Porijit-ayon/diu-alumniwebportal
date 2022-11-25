"use strict";
(() => {
var exports = {};
exports.id = 4522;
exports.ids = [4522];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 4290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const poleSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  votes: [{
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    vote: {
      type: String,
      required: true,
      default: null
    }
  }],
  createdAt: {
    type: String,
    required: true
  }
});
const Poll = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Poll) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Poll", poleSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Poll);

/***/ }),

/***/ 7112:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_Poll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4290);
/* harmony import */ var _utils_connectMongo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7861);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5616);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_2__]);
next_connect__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_2__["default"])();
handler.post(async (req, res, next) => {
  try {
    await (0,_utils_connectMongo_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const isVoted = await _models_Poll_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].find */ .Z.find({
      "votes.email": req.body.email
    });

    if (isVoted) {
      res.send("Vote updated");
    } else {
      res.send("Voted");
    }
  } catch (error) {
    res.send(error.message);
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);


const connectMongo = async () => mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectMongo);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7112));
module.exports = __webpack_exports__;

})();