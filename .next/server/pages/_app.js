(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: external "@mui/material/CssBaseline"
const CssBaseline_namespaceObject = require("@mui/material/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
// EXTERNAL MODULE: ./src/theme.js + 1 modules
var theme = __webpack_require__(4984);
// EXTERNAL MODULE: ./src/createEmotionCache.js + 1 modules
var createEmotionCache = __webpack_require__(6136);
// EXTERNAL MODULE: ./utils/Store.js
var Store = __webpack_require__(5601);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: external "@mui/icons-material/AddCircle"
var AddCircle_ = __webpack_require__(3992);
var AddCircle_default = /*#__PURE__*/__webpack_require__.n(AddCircle_);
// EXTERNAL MODULE: external "@mui/icons-material/AccountCircle"
var AccountCircle_ = __webpack_require__(1883);
var AccountCircle_default = /*#__PURE__*/__webpack_require__.n(AccountCircle_);
// EXTERNAL MODULE: external "@mui/icons-material/Edit"
var Edit_ = __webpack_require__(1664);
var Edit_default = /*#__PURE__*/__webpack_require__.n(Edit_);
// EXTERNAL MODULE: external "@mui/icons-material/LockReset"
var LockReset_ = __webpack_require__(7250);
var LockReset_default = /*#__PURE__*/__webpack_require__.n(LockReset_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "@mui/icons-material/Login"
const Login_namespaceObject = require("@mui/icons-material/Login");
var Login_default = /*#__PURE__*/__webpack_require__.n(Login_namespaceObject);
// EXTERNAL MODULE: external "sweetalert2"
var external_sweetalert2_ = __webpack_require__(271);
var external_sweetalert2_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_);
;// CONCATENATED MODULE: external "@mui/icons-material/Menu"
const Menu_namespaceObject = require("@mui/icons-material/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Logout"
const Logout_namespaceObject = require("@mui/icons-material/Logout");
var Logout_default = /*#__PURE__*/__webpack_require__.n(Logout_namespaceObject);
// EXTERNAL MODULE: external "@rehooks/local-storage"
var local_storage_ = __webpack_require__(4156);
// EXTERNAL MODULE: external "@mui/icons-material/Close"
var Close_ = __webpack_require__(4173);
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Navbar.jsx




















function Navbar() {
  const {
    0: show,
    1: setShow
  } = (0,external_react_.useState)(false);
  const [userInfo] = (0,local_storage_.useLocalStorage)("userInfo");
  const {
    dispatch
  } = (0,external_react_.useContext)(Store/* contextStore */.v);
  const router = (0,router_.useRouter)(); //logout

  const userLogOut = () => {
    external_sweetalert2_default().fire({
      title: "Are you sure?",
      text: "You want to logout now.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    }).then(result => {
      if (result.value) {
        dispatch({
          type: "USER_LOGOUT"
        });
        router.push("/");
      }
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(material_.AppBar, {
      position: "sticky",
      className: "navBgColor",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Toolbar, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Typography, {
          sx: {
            cursor: "pointer"
          },
          onClick: () => router.push("/"),
          children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
            src: "/img/logo.png",
            alt: "logo",
            height: 50,
            width: 50,
            quality: 100
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(material_.Typography, {
          flexGrow: 1
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: userInfo ? userInfo.name ? userInfo.name : null : null
        }), userInfo ? /*#__PURE__*/jsx_runtime_.jsx(material_.IconButton, {
          sx: {
            display: {
              xs: "none",
              sm: "none",
              md: "block"
            },
            color: "red"
          },
          variant: "outlined",
          onClick: () => userLogOut(),
          children: /*#__PURE__*/jsx_runtime_.jsx((Logout_default()), {})
        }) : /*#__PURE__*/jsx_runtime_.jsx(material_.IconButton, {
          onClick: () => router.push("/alumni/login"),
          sx: {
            color: "#115D56",
            display: {
              xs: "none",
              sm: "none",
              md: "block"
            }
          },
          variant: "outlined",
          children: /*#__PURE__*/jsx_runtime_.jsx((Login_default()), {})
        }), /*#__PURE__*/jsx_runtime_.jsx(material_.IconButton, {
          sx: {
            display: {
              xs: "block",
              sm: "block",
              md: "none"
            }
          },
          variant: "outlined",
          onClick: () => setShow(true),
          children: /*#__PURE__*/jsx_runtime_.jsx((Menu_default()), {})
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(material_.Drawer, {
      open: show,
      onClose: () => setShow(false),
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Stack, {
        sx: {
          padding: "20px",
          width: "100vw"
        },
        spacing: 1,
        children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Button, {
          onClick: () => setShow(false),
          type: "button",
          sx: {
            width: "5px",
            marginLeft: "auto",
            color: "black",
            border: "1px dotted #ccc"
          },
          children: /*#__PURE__*/jsx_runtime_.jsx((Close_default()), {})
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Stack, {
          spacing: 1,
          sx: {
            paddingX: "50px"
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Typography, {
            align: "center",
            children: userInfo ? userInfo.name ? userInfo.name : null : null
          }), userInfo ? userInfo.isAdmin ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.List, {
            dense: true,
            sx: {
              width: "90%",
              marginX: "auto"
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx(material_.ListItem, {
              disablePadding: true,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.ListItemButton, {
                onClick: () => {
                  setShow(false);
                  router.push("/dashboard/manage-alumni");
                },
                children: [/*#__PURE__*/jsx_runtime_.jsx(material_.ListItemIcon, {
                  children: /*#__PURE__*/jsx_runtime_.jsx((AccountCircle_default()), {})
                }), /*#__PURE__*/jsx_runtime_.jsx(material_.ListItemText, {
                  children: "Manage Alumni"
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(material_.ListItem, {
              disablePadding: true,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.ListItemButton, {
                onClick: () => {
                  setShow(false);
                  router.push("/dashboard/manage-poll");
                },
                children: [/*#__PURE__*/jsx_runtime_.jsx(material_.ListItemIcon, {
                  children: /*#__PURE__*/jsx_runtime_.jsx((Edit_default()), {})
                }), /*#__PURE__*/jsx_runtime_.jsx(material_.ListItemText, {
                  children: "Manage poll"
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(material_.ListItem, {
              disablePadding: true,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.ListItemButton, {
                onClick: () => {
                  setShow(false);
                  router.push("/password-reset");
                },
                children: [/*#__PURE__*/jsx_runtime_.jsx(material_.ListItemIcon, {
                  children: /*#__PURE__*/jsx_runtime_.jsx((LockReset_default()), {})
                }), /*#__PURE__*/jsx_runtime_.jsx(material_.ListItemText, {
                  children: "Change Password"
                })]
              })
            })]
          }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.List, {
            dense: true,
            sx: {
              width: "90%",
              marginX: "auto"
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx(material_.ListItem, {
              disablePadding: true,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.ListItemButton, {
                onClick: () => {
                  setShow(false);
                  router.push("/alumni/profile");
                },
                children: [/*#__PURE__*/jsx_runtime_.jsx(material_.ListItemIcon, {
                  children: /*#__PURE__*/jsx_runtime_.jsx((AccountCircle_default()), {})
                }), /*#__PURE__*/jsx_runtime_.jsx(material_.ListItemText, {
                  children: "Profile"
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(material_.ListItem, {
              disablePadding: true,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.ListItemButton, {
                onClick: () => {
                  setShow(false);
                  router.push("/alumni/profile/update");
                },
                children: [/*#__PURE__*/jsx_runtime_.jsx(material_.ListItemIcon, {
                  children: /*#__PURE__*/jsx_runtime_.jsx((Edit_default()), {})
                }), /*#__PURE__*/jsx_runtime_.jsx(material_.ListItemText, {
                  children: "Profile Update"
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(material_.ListItem, {
              disablePadding: true,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.ListItemButton, {
                onClick: () => {
                  setShow(false);
                  router.push("/alumni/add-skills");
                },
                children: [/*#__PURE__*/jsx_runtime_.jsx(material_.ListItemIcon, {
                  children: /*#__PURE__*/jsx_runtime_.jsx((AddCircle_default()), {})
                }), /*#__PURE__*/jsx_runtime_.jsx(material_.ListItemText, {
                  children: "Add Skill"
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(material_.ListItem, {
              disablePadding: true,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.ListItemButton, {
                onClick: () => {
                  setShow(false);
                  router.push("/alumni/add-social-media-links");
                },
                children: [/*#__PURE__*/jsx_runtime_.jsx(material_.ListItemIcon, {
                  children: /*#__PURE__*/jsx_runtime_.jsx((AddCircle_default()), {})
                }), /*#__PURE__*/jsx_runtime_.jsx(material_.ListItemText, {
                  children: "Add Social Link"
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(material_.ListItem, {
              disablePadding: true,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.ListItemButton, {
                onClick: () => {
                  setShow(false);
                  router.push("/password-reset");
                },
                children: [/*#__PURE__*/jsx_runtime_.jsx(material_.ListItemIcon, {
                  children: /*#__PURE__*/jsx_runtime_.jsx((LockReset_default()), {})
                }), /*#__PURE__*/jsx_runtime_.jsx(material_.ListItemText, {
                  children: "Change Password"
                })]
              })
            })]
          }) : null, /*#__PURE__*/jsx_runtime_.jsx(material_.List, {
            dense: true,
            children: userInfo ? /*#__PURE__*/jsx_runtime_.jsx(material_.ListItem, {
              disablePadding: true,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.ListItemButton, {
                sx: {
                  color: "red"
                },
                onClick: () => {
                  setShow(false);
                  userLogOut();
                },
                children: [/*#__PURE__*/jsx_runtime_.jsx(material_.ListItemIcon, {
                  sx: {
                    color: "red"
                  },
                  children: /*#__PURE__*/jsx_runtime_.jsx((Logout_default()), {})
                }), /*#__PURE__*/jsx_runtime_.jsx(material_.ListItemText, {
                  children: "Logout"
                })]
              })
            }) : /*#__PURE__*/jsx_runtime_.jsx(material_.ListItem, {
              disablePadding: true,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.ListItemButton, {
                sx: {
                  color: "green"
                },
                onClick: () => {
                  setShow(false);
                  router.push("/alumni/login");
                },
                children: [/*#__PURE__*/jsx_runtime_.jsx(material_.ListItemIcon, {
                  sx: {
                    color: "green"
                  },
                  children: /*#__PURE__*/jsx_runtime_.jsx((Login_default()), {})
                }), /*#__PURE__*/jsx_runtime_.jsx(material_.ListItemText, {
                  children: "Login"
                })]
              })
            })
          })]
        })]
      })
    })]
  });
}

/* harmony default export */ const components_Navbar = (dynamic_default()(() => Promise.resolve(Navbar), {
  ssr: false
}));
// EXTERNAL MODULE: ./components/Footer.jsx + 1 modules
var Footer = __webpack_require__(905);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











 // Client-side cache shared for the whole session
// of the user in the browser.



const clientSideEmotionCache = (0,createEmotionCache/* default */.Z)();
function MyApp(props) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx(Store/* default */.Z, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_namespaceObject.CacheProvider, {
      value: emotionCache,
      children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
        children: /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "viewport",
          content: "initial-scale=1, width=device-width"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
        theme: theme/* default */.Z,
        children: [/*#__PURE__*/jsx_runtime_.jsx((CssBaseline_default()), {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(components_Navbar, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
        })]
      })]
    })
  });
}

/***/ }),

/***/ 6136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ createEmotionCache)
});

;// CONCATENATED MODULE: external "@emotion/cache"
const cache_namespaceObject = require("@emotion/cache");
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_namespaceObject);
;// CONCATENATED MODULE: ./src/createEmotionCache.js

function createEmotionCache() {
  return cache_default()({
    key: 'css',
    prepend: true
  });
}

/***/ }),

/***/ 4984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ src_theme)
});

// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: external "@mui/material/colors"
const colors_namespaceObject = require("@mui/material/colors");
;// CONCATENATED MODULE: ./src/theme.js

 // Create a theme instance.

const theme = (0,styles_.createTheme)({
  palette: {
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: colors_namespaceObject.red.A400
    },
    customBlack: {
      main: "#001E3C"
    }
  }
});
/* harmony default export */ const src_theme = (theme);

/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 1883:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/AccountCircle");

/***/ }),

/***/ 3992:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/AddCircle");

/***/ }),

/***/ 4173:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Close");

/***/ }),

/***/ 1664:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Edit");

/***/ }),

/***/ 9226:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Email");

/***/ }),

/***/ 2625:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/LocationOn");

/***/ }),

/***/ 7250:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/LockReset");

/***/ }),

/***/ 6872:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Phone");

/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 8442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ 4156:
/***/ ((module) => {

"use strict";
module.exports = require("@rehooks/local-storage");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 3468:
/***/ ((module) => {

"use strict";
module.exports = require("react-social-icons");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 271:
/***/ ((module) => {

"use strict";
module.exports = require("sweetalert2");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5675,5152,5601,905], () => (__webpack_exec__(571)));
module.exports = __webpack_exports__;

})();