webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _components_loginLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/loginLayout */ "./components/loginLayout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../index.css */ "./index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-facebook-login */ "./node_modules/react-facebook-login/dist/facebook-login-with-button.js");
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login__WEBPACK_IMPORTED_MODULE_10__);










 // const responseFacebook = (response) => {
//     console.log(response);
// }

var FacebookComponent =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(FacebookComponent, _React$Component);

  function FacebookComponent() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FacebookComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(FacebookComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "responseFacebook", function (response) {
      console.log(response);
    });

    return _this;
  }

  return FacebookComponent;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_loginLayout__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "LoginContent"
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
    src: "/static/Family.png"
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
    className: "LoginTitle"
  }, "SCRAPPBOOK"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
    type: "text",
    placeholder: "Username",
    className: "LoginInput"
  }), " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
    type: "password",
    placeholder: "Password",
    className: "LoginInput"
  }), " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
    type: "button",
    className: "LoginBtn"
  }, "Log in"), " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
    type: "button",
    className: "LoginBtn"
  }, "Sign Up"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    class: "HorizontalDiv"
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_facebook_login__WEBPACK_IMPORTED_MODULE_10___default.a, {
    appId: "461136824455844",
    autoLoad: false,
    fields: "name,email,picture",
    callback: responseFacebook,
    cssClass: "FacebookBtn",
    icon: "fa-facebook"
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "footerDiv"
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
    src: "/static/CAappsLogoTran.png",
    className: "footerLogo"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index); // export default function Blog(){
//     return(
//         <LoginLayout>
//             <div className="LoginContent">
//                 <img src="/static/Family.png"/>
//                 <p className="LoginTitle">SCRAPPBOOK</p>
//                 <input type="text" placeholder="Username" className="LoginInput"/> <br/>
//                 <input type="password" placeholder="Password" className="LoginInput"/> <br />
//                 <button type="button" className="LoginBtn">Log in</button> <br/>
//                 <button type="button" className="LoginBtn">Sign Up</button><br/>
//                 <div class="HorizontalDiv"></div>
//                 <FacebookLogin
//                     appId="461136824455844"
//                     autoLoad={false}
//                     fields="name,email,picture"
//                     callback={responseFacebook}
//                     cssClass="FacebookBtn"
//                     icon="fa-facebook"
//                 />
//             </div>
//             <div className="footerDiv">
//                 <img src="/static/CAappsLogoTran.png" className="footerLogo"/>
//             </div>
//         </LoginLayout>
//     );
// }

/***/ })

})
//# sourceMappingURL=index.js.88ef3db1c8f39412ef52.hot-update.js.map