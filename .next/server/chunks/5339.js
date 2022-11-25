"use strict";
exports.id = 5339;
exports.ids = [5339];
exports.modules = {

/***/ 5339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5063);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7749);
/* harmony import */ var _mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5601);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);













function Login() {
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: apiRes,
    1: setApiRes
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_utils_Store__WEBPACK_IMPORTED_MODULE_6__/* .contextStore */ .v);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)(); //login

  const submitHanler = async e => {
    e.preventDefault();
    setOpen(true);
    e.target.reset();

    try {
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_8___default().post(`/api/alumni/login?email=${email}&password=${password}`);

      if (email.localeCompare(data.email) === 0) {
        dispatch({
          type: "USER_LOGIN",
          payload: data
        });

        if (data.isAdmin) {
          return router.push("/dashboard");
        } else {
          return router.push("/alumni/profile");
        }
      }

      setApiRes(data);
    } catch (error) {
      console.log(error.message);
    }

    setOpen(false);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Stack, {
      direction: "row",
      spacing: 1,
      sx: {
        marginTop: "50px"
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box, {
        sx: {
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
            xl: "block"
          },
          width: "50%"
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {
          style: {
            height: "400px",
            display: "grid",
            placeContent: "center"
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
            src: "/img/alumni.png",
            alt: "alumni pic",
            width: 400,
            height: 400
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box, {
        sx: {
          flexGrow: 1,
          height: "400px",
          display: "grid",
          placeContent: "center"
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Paper, {
          sx: {
            padding: "20px"
          },
          elevation: 2,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Stack, {
            onSubmit: submitHanler,
            spacing: 1,
            component: "form",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
              src: "/img/logo.png",
              alt: "logo",
              width: 300,
              height: 100
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {
              align: "center",
              variant: "bold",
              component: "h1",
              children: "Sign in"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {
              color: "error",
              align: "center",
              children: apiRes ? apiRes : null
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TextField, {
              label: "Email address",
              type: "email",
              placeholder: "E-mail address",
              size: "small",
              required: true,
              fullWidth: true,
              color: "secondary",
              onChange: e => setEmail(e.target.value)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TextField, {
              label: "Password",
              type: "password",
              placeholder: "Password",
              size: "small",
              required: true,
              fullWidth: true,
              color: "secondary",
              InputProps: {
                endAdornment: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((_mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_4___default()), {})
              },
              onChange: e => setPassword(e.target.value)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {
              align: "center",
              children: "admin@alumni.com | admin123"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box, {
              style: {
                textAlign: "center"
              },
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Button, {
                type: "submit",
                variant: "contained",
                color: "secondary",
                fullWidth: true,
                disableFocusRipple: true,
                children: "Login"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/password-reset",
                passHress: true,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("a", {
                  children: "Forgot password?"
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/alumni/registration",
                passHress: true,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("a", {
                  style: {
                    color: "green"
                  },
                  children: " Register now"
                })
              })
            })]
          })
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Backdrop, {
      open: open,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.CircularProgress, {
        color: "inherit"
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(() => Promise.resolve(Login), {
  ssr: false
}));

/***/ })

};
;