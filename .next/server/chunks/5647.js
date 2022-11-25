"use strict";
exports.id = 5647;
exports.ids = [5647];
exports.modules = {

/***/ 3066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5339);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(489);
/* harmony import */ var _rehooks_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4156);
/* harmony import */ var _rehooks_local_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_rehooks_local_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








function AdminProtected({
  children
}) {
  const [userInfo] = (0,_rehooks_local_storage__WEBPACK_IMPORTED_MODULE_3__.useLocalStorage)("userInfo");

  if (userInfo ? userInfo.isAdmin ? true : false : false) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: children
    });
  } else {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      pageTitle: "login",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_Login__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(() => Promise.resolve(AdminProtected), {
  ssr: false
}));

/***/ }),

/***/ 6152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ DashboardLayout)
});

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@mui/icons-material/LockReset"
var LockReset_ = __webpack_require__(7250);
var LockReset_default = /*#__PURE__*/__webpack_require__.n(LockReset_);
// EXTERNAL MODULE: external "@mui/icons-material/Dashboard"
var Dashboard_ = __webpack_require__(7235);
var Dashboard_default = /*#__PURE__*/__webpack_require__.n(Dashboard_);
// EXTERNAL MODULE: external "@mui/icons-material/Group"
var Group_ = __webpack_require__(7549);
var Group_default = /*#__PURE__*/__webpack_require__.n(Group_);
// EXTERNAL MODULE: external "@mui/icons-material/Poll"
var Poll_ = __webpack_require__(9587);
var Poll_default = /*#__PURE__*/__webpack_require__.n(Poll_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/DashboardOption.jsx











function Profile() {
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Typography, {
      sx: {
        textAlign: "center",
        padding: "13px"
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx((image_default()), {
        src: "/img/profile.png",
        alt: "Profile",
        width: 100,
        height: 100,
        quality: 100
      }), /*#__PURE__*/jsx_runtime_.jsx(material_.Divider, {
        children: "Admin"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.List, {
      dense: true,
      sx: {
        width: "90%",
        marginX: "auto"
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(material_.ListItem, {
        disablePadding: true,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.ListItemButton, {
          onClick: () => router.push("/dashboard"),
          children: [/*#__PURE__*/jsx_runtime_.jsx(material_.ListItemIcon, {
            children: /*#__PURE__*/jsx_runtime_.jsx((Dashboard_default()), {})
          }), /*#__PURE__*/jsx_runtime_.jsx(material_.ListItemText, {
            children: "Dashboard"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(material_.ListItem, {
        disablePadding: true,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.ListItemButton, {
          onClick: () => router.push("/dashboard/manage-alumni"),
          children: [/*#__PURE__*/jsx_runtime_.jsx(material_.ListItemIcon, {
            children: /*#__PURE__*/jsx_runtime_.jsx((Group_default()), {})
          }), /*#__PURE__*/jsx_runtime_.jsx(material_.ListItemText, {
            children: "Manage Alumni"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(material_.ListItem, {
        disablePadding: true,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.ListItemButton, {
          onClick: () => router.push("/dashboard/manage-poll"),
          children: [/*#__PURE__*/jsx_runtime_.jsx(material_.ListItemIcon, {
            children: /*#__PURE__*/jsx_runtime_.jsx((Poll_default()), {})
          }), /*#__PURE__*/jsx_runtime_.jsx(material_.ListItemText, {
            children: "Manage Poll"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(material_.ListItem, {
        disablePadding: true,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.ListItemButton, {
          onClick: () => {
            router.push("/password-reset");
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx(material_.ListItemIcon, {
            children: /*#__PURE__*/jsx_runtime_.jsx((LockReset_default()), {
              sx: {
                color: "green"
              }
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(material_.ListItemText, {
            sx: {
              color: "green"
            },
            children: "Change Password"
          })]
        })
      })]
    })]
  });
}
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./components/DashboardLayout.jsx









function Dashboard({
  children,
  pageTitle
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: pageTitle ? "Alumni System | " + pageTitle : "Dashboard"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Stack, {
      direction: "row",
      sx: {
        backgroundColor: "#F9FBFA"
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Box, {
        sx: {
          display: {
            xs: "none",
            sm: "none",
            md: "block"
          },
          minHeight: "100vh",
          width: "250px"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(material_.Paper, {
          sx: {
            position: "fixed",
            width: "280px",
            height: "100vh"
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(Profile, {})
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(material_.Box, {
        sx: {
          flexGrow: 1,
          minHeight: "100vh",
          marginBottom: "100px"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(material_.Container, {
          sx: {
            marginTop: "10px"
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(material_.Paper, {
            sx: {
              mx: "20px",
              p: "20px"
            },
            children: children
          })
        })
      })]
    })]
  });
}

/* harmony default export */ const DashboardLayout = (dynamic_default()(() => Promise.resolve(Dashboard), {
  ssr: false
}));

/***/ })

};
;