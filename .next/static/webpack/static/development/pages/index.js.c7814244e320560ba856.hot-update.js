webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _components_loginLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/loginLayout */ "./components/loginLayout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index.css */ "./index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-facebook-login */ "./node_modules/react-facebook-login/dist/facebook-login-with-button.js");
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login__WEBPACK_IMPORTED_MODULE_6__);








var responseFacebook = function responseFacebook(response) {
  console.log(response);
  Index.getInitialProps =
  /*#__PURE__*/
  Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return response.json();

          case 2:
            data = _context.sent;
            console.log(data);
            return _context.abrupt("return", {
              details: data
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
};

var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_loginLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "LoginContent"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "/static/Family.png"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "LoginTitle"
  }, "SCRAPPBOOK"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "text",
    placeholder: "Username",
    className: "LoginInput"
  }), " ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "password",
    placeholder: "Password",
    className: "LoginInput"
  }), " ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    type: "button",
    className: "LoginBtn"
  }, "Log in"), " ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    type: "button",
    className: "LoginBtn"
  }, "Sign Up"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    class: "HorizontalDiv"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_facebook_login__WEBPACK_IMPORTED_MODULE_6___default.a, {
    appId: "461136824455844",
    autoLoad: false,
    fields: "name,email,picture",
    callback: responseFacebook,
    cssClass: "FacebookBtn",
    icon: "fa-facebook"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, props.details(function (detail) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, detail.name, detail.email);
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "footerDiv"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
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
//# sourceMappingURL=index.js.c7814244e320560ba856.hot-update.js.map