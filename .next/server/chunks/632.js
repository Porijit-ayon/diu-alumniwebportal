"use strict";
exports.id = 632;
exports.ids = [632];
exports.modules = {

/***/ 488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const alumniSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  name: {
    type: String,
    required: true
  },
  id: {
    type: String
  },
  gander: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  address: {
    type: String
  },
  maritalStatus: {
    type: String
  },
  dateOfBirth: {
    type: String
  },
  vrstyName: {
    type: String
  },
  dep: {
    type: String
  },
  batch: {
    type: String
  },
  passingYear: {
    type: String
  },
  cgpa: {
    type: String
  },
  professionalTitle: {
    type: String
  },
  favoritSubject: {
    type: String
  },
  expOrFra: {
    type: String
  },
  currentJob: {
    type: String
  },
  skills: {
    skill1: {
      type: String
    },
    skill2: {
      type: String
    },
    skill3: {
      type: String
    },
    skill4: {
      type: String
    },
    skill5: {
      type: String
    },
    skill6: {
      type: String
    },
    skill7: {
      type: String
    }
  },
  socialLinks: {
    facebook: {
      type: String
    },
    twitter: {
      type: String
    },
    linkedin: {
      type: String
    },
    github: {
      type: String
    }
  },
  emailToken: {
    type: String
  },
  isVerified: {
    type: Boolean,
    required: true,
    default: false
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  },
  createdAt: {
    type: String,
    required: true
  }
});
const Alumni = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Alumni) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Alumni", alumniSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Alumni);

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