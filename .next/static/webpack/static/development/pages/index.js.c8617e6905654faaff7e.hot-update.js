webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_loginLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/loginLayout */ "./components/loginLayout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.css */ "./index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-facebook-login */ "./node_modules/react-facebook-login/dist/facebook-login-with-button.js");
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login__WEBPACK_IMPORTED_MODULE_4__);




 // const responseFacebook = (response) => {
//     console.log(response);
// }

var data = [];

var responseFacebook = function responseFacebook(response) {
  console.log(response);
  data = response;
}; // class FacebookComponent extends React.Component{
//     responseFacebook = (response) => {
//         console.log(response);
//     }
// }


var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_loginLayout__WEBPACK_IMPORTED_MODULE_0__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "LoginContent"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/Family.png"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "LoginTitle"
  }, "SCRAPPBOOK"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    placeholder: "Username",
    className: "LoginInput"
  }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "password",
    placeholder: "Password",
    className: "LoginInput"
  }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    className: "LoginBtn"
  }, "Log in"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    className: "LoginBtn"
  }, "Sign Up"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "HorizontalDiv"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_facebook_login__WEBPACK_IMPORTED_MODULE_4___default.a, {
    appId: "461136824455844",
    autoLoad: false,
    fields: "name,email,picture",
    callback: responseFacebook,
    cssClass: "FacebookBtn",
    icon: "fa-facebook"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, data.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "footerDiv"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
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
//# sourceMappingURL=index.js.c8617e6905654faaff7e.hot-update.js.map