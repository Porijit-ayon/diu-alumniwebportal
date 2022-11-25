"use strict";
exports.id = 905;
exports.ids = [905];
exports.modules = {

/***/ 905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Footer)
});

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/icons-material/Phone"
var Phone_ = __webpack_require__(6872);
var Phone_default = /*#__PURE__*/__webpack_require__.n(Phone_);
// EXTERNAL MODULE: external "@mui/icons-material/Email"
var Email_ = __webpack_require__(9226);
var Email_default = /*#__PURE__*/__webpack_require__.n(Email_);
// EXTERNAL MODULE: external "@mui/icons-material/LocationOn"
var LocationOn_ = __webpack_require__(2625);
var LocationOn_default = /*#__PURE__*/__webpack_require__.n(LocationOn_);
// EXTERNAL MODULE: external "react-social-icons"
var external_react_social_icons_ = __webpack_require__(3468);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/SocialMediaLInk.jsx





function SocialMediaLink() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Box, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Typography, {
      variant: "bold",
      component: "h2",
      children: "Social Links"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Stack, {
      direction: "row",
      spacing: 2,
      mt: 2,
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
        url: "https://www.linkedin.com"
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
        url: "https://mobile.twitter.com"
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_.SocialIcon, {
        url: "https://www.facebook.com"
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./components/Footer.jsx








function Footer() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Box, {
    sx: {
      backgroundColor: "#E9E9E9",
      paddingY: "25px",
      borderTop: "1px solid #ccc"
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Container, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Stack, {
        direction: {
          xs: "column",
          sm: "row",
          md: "row"
        },
        spacing: 1,
        children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Box, {
          sx: {
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
              xl: "block"
            },
            width: {
              xs: "100%",
              sm: "100%",
              md: "50%"
            },
            height: "300px",
            display: "grid",
            placeContent: "center"
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(SocialMediaLink, {})
        }), /*#__PURE__*/jsx_runtime_.jsx(material_.Box, {
          sx: {
            flexGrow: 1,
            height: "300px",
            display: "grid",
            placeContent: "center"
          },
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.List, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.ListItem, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(material_.ListItemIcon, {
                children: /*#__PURE__*/jsx_runtime_.jsx((Phone_default()), {
                  sx: {
                    color: "#21335C"
                  }
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(material_.ListItemText, {
                primary: "Phone",
                secondary: "+8801733791787"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.ListItem, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(material_.ListItemIcon, {
                children: /*#__PURE__*/jsx_runtime_.jsx((Email_default()), {
                  sx: {
                    color: "#21335C"
                  }
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(material_.ListItemText, {
                primary: "Email",
                secondary: "porijit35-2711@diu.edu.bd"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.ListItem, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(material_.ListItemIcon, {
                children: /*#__PURE__*/jsx_runtime_.jsx((LocationOn_default()), {
                  sx: {
                    color: "#21335C"
                  }
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(material_.ListItemText, {
                primary: "Address",
                secondary: "Dhanmondi, Dhaka"
              })]
            })]
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(material_.Divider, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Typography, {
      align: "center",
      sx: {
        color: "gray",
        mt: "20px"
      },
      children: ["All Rights Reserved @ ", new Date().getFullYear(), " Daffodil International University"]
    })]
  });
}

/***/ })

};
;