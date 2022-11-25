"use strict";
exports.id = 9552;
exports.ids = [9552];
exports.modules = {

/***/ 2732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ signToken)
/* harmony export */ });
/* unused harmony export isAuth */
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);

const signToken = alumni => {
  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({
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
  }, process.env.JWT_Secreet, {
    expiresIn: "30d"
  });
};
const isAuth = (req, res, next) => {
  const {
    authorization
  } = req.headers;

  if (authorization) {
    const token = authorization.slice(7, authorization.length);
    jwt.verify(token, process.env.JWT_Secreet, (error, decode) => {
      if (error) {
        res.send("Token is not valid");
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    res.send("Token is empty");
  }
}; // export const isAdmin = async (req, res, next) => {
//   if (req.user.isAdmin) {
//     next();
//   } else {
//     res.status(401).send({ message: "User is not admin" });
//   }
// };

/***/ })

};
;