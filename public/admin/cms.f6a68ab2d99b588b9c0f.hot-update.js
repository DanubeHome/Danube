webpackHotUpdate("cms",{

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es7.promise.finally */ "./node_modules/core-js/modules/es7.promise.finally.js");
/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _img_logo_white_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/logo-white.png */ "./src/img/logo-white.png");
/* harmony import */ var _img_logo_white_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_logo_white_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _img_footerbg_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/footerbg.jpg */ "./src/img/footerbg.jpg");
/* harmony import */ var _img_footerbg_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_footerbg_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_0_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/0.png */ "./src/img/0.png");
/* harmony import */ var _img_0_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_0_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _img_social_facebook_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/social/facebook.svg */ "./src/img/social/facebook.svg");
/* harmony import */ var _img_social_facebook_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_social_facebook_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _img_social_instagram_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/social/instagram.svg */ "./src/img/social/instagram.svg");
/* harmony import */ var _img_social_instagram_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_img_social_instagram_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _img_social_twitter_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/social/twitter.svg */ "./src/img/social/twitter.svg");
/* harmony import */ var _img_social_twitter_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_social_twitter_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _img_social_vimeo_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/social/vimeo.svg */ "./src/img/social/vimeo.svg");
/* harmony import */ var _img_social_vimeo_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_img_social_vimeo_svg__WEBPACK_IMPORTED_MODULE_12__);





var _temp,
    _jsxFileName = "/home/luezoid/React_projects/danubehome/src/components/Footer.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};











var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var Footer = (_temp = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Footer, _React$Component);

  function Footer(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.validEmail = function (mail) {
      return mail && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
    };

    _this.state = {
      error: false,
      submitted: false,
      email: '',
      chatActive: false
    };
    return _this;
  }

  var _proto = Footer.prototype;

  _proto.toggleWhatsappHelp = function toggleWhatsappHelp() {
    this.setState({
      chatActive: !this.state.chatActive
    });
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$state = this.state,
        email = _this$state.email,
        submitted = _this$state.submitted,
        error = _this$state.error,
        chatActive = _this$state.chatActive;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("footer", {
      className: "py-5 position-relative",
      style: {
        zIndex: 999,
        background: "transparent url(" + _img_footerbg_jpg__WEBPACK_IMPORTED_MODULE_7___default.a + ") center center/cover no-repeat"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "wa__btn_popup " + (chatActive ? 'wa__active' : ''),
      onClick: function onClick() {
        _this2.toggleWhatsappHelp();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "wa__btn_popup_txt",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 56
      }
    }, "Need Help? ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "wa__btn_popup_icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "wa__popup_chat_box " + (chatActive ? 'wa__pending wa__active wa__lauch' : ''),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "wa__popup_heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "wa__popup_title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 25
      }
    }, "Start a Conversation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "wa__popup_intro",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 25
      }
    }, "Hi! Click one of our member below to chat on ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 32
      }
    }, "Whatsapp"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "wa__popup_content wa__popup_content_left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "wa__popup_notice",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 25
      }
    }, "The team typically replies in a few minutes."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "wa__popup_content_list",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "wa__popup_content_item ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      target: "_blank",
      href: "https://web.whatsapp.com/send?phone=971506243275&text=Hi, I visited Danube Franchise Website and have some queries.",
      className: "wa__stt wa__stt_online",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "wa__popup_avatar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "wa__cs_img_wrap",
      style: {
        background: "url(" + _img_0_png__WEBPACK_IMPORTED_MODULE_8___default.a + ") center center no-repeat",
        backgroundSize: "cover"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 41
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "wa__popup_txt",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "wa__member_name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 41
      }
    }, "Sayed Habib"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "wa__member_duty",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 41
      }
    }, "GM-Buying & Business Development")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "wa__popup_content_item ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      target: "_blank",
      href: "https://web.whatsapp.com/send?phone=971565004617&text=Hi, I visited Danube Franchise Website and have some queries.",
      className: "wa__stt wa__stt_online",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "wa__popup_avatar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "wa__cs_img_wrap",
      style: {
        background: "url(" + _img_0_png__WEBPACK_IMPORTED_MODULE_8___default.a + ") center center no-repeat",
        backgroundSize: "cover"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 41
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "wa__popup_txt",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "wa__member_name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 41
      }
    }, "Sambit Sahoo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "wa__member_duty",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 41
      }
    }, "Franchise Consultant")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "wa__popup_content_item ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      target: "_blank",
      href: "https://web.whatsapp.com/send?phone=971554717055&text=Hi, I visited Danube Franchise Website and have some queries.",
      className: "wa__stt wa__stt_online",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "wa__popup_avatar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "wa__cs_img_wrap",
      style: {
        background: "url(" + _img_0_png__WEBPACK_IMPORTED_MODULE_8___default.a + ") center center no-repeat; backgroundSize: cover"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 41
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "wa__popup_txt",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "wa__member_name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 41
      }
    }, "Rajat Sharma"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "wa__member_duty",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 41
      }
    }, "Franchise Consultant"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "col-lg-3 col-sm-6 mb-5 mb-lg-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: "/home",
      className: "d-block mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
      src: _img_logo_white_png__WEBPACK_IMPORTED_MODULE_6___default.a,
      alt: "logo",
      className: "img-fluid",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 33
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
      className: "social-list list-inline",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
      className: "list-inline-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: "https://facebook.com/danubehome",
      target: "_blank",
      title: "Facebook",
      className: "social-icon-link",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
      className: "fa fa-facebook",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 41
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
      className: "list-inline-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: "https://twitter.com/danubehome",
      target: "_blank",
      title: "Twitter",
      className: "social-icon-link",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
      className: "fa fa-twitter",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 41
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
      className: "list-inline-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: "https://www.instagram.com/danubehome/",
      target: "_blank",
      title: "Instagram",
      className: "social-icon-link",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
      className: "fa fa-instagram",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 41
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
      className: "list-inline-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: "https://www.youtube.com/playlist?list=PLEUc5QNk8ydP6iT9-ikqQR_1SJSIhKUP4",
      target: "_blank",
      title: "Youtube",
      className: "social-icon-link",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
      className: "fa fa-youtube",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 41
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
      className: "list-inline-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: "https://www.linkedin.com/in/danubehomefranchise/",
      target: "_blank",
      title: "Linkedin",
      className: "social-icon-link",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
      className: "fa fa-linkedin",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 41
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "d-block copyright",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 29
      }
    }, "Copyright \xA9 2020 Danube Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "col-lg-3 col-sm-6 mb-5 mb-lg-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "footer-widget-title mb-3 h3 text-white",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 29
      }
    }, "Quick Links"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
      className: "list-unstyled quick-links-list",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: "/become-a-franchise",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 37
      }
    }, "Become a Franchise")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: "/become-a-seller",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 37
      }
    }, "Become Seller")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: "/about/#ourportfolio",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 37
      }
    }, "Our Portfolio")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: "/about/#ourcatalogues",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 37
      }
    }, "Our Catalogues")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: "/our-journey/#ourpresence",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 37
      }
    }, "Our Presence")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "col-lg-3 col-sm-6 mb-5 mb-lg-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "footer-widget-title mb-3 h3 text-white",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 29
      }
    }, "Danube Home \u2013 HO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "footer-widget-content mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      href: "tel:+971 4 808 5563",
      className: "phone",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 33
      }
    }, "+971 4 808 5563"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 33
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      href: "mailto: franchise@danubehome.com",
      className: "mail",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 33
      }
    }, "franchise@danubehome.com")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "footer-widget-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "phone",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 33
      }
    }, "Jebel Ali, JAFZA 4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 33
      }
    }), "Dubai - UAE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "col-lg-3 col-sm-6 mb-5 mb-lg-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "footer-widget-title mb-3 h3 text-white",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 29
      }
    }, "Our Newsletter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", {
      className: "mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "tnp-field tnp-field-email",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 37
      }
    }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
      value: email,
      onChange: function onChange(e) {
        _this2.setState({
          email: e.target.value
        });
      },
      className: "form-control-plaintext custom-form-control bg-transparent text-white border mb-3  " + (error ? 'error-input' : ''),
      type: "email",
      name: "ne",
      required: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 37
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
      className: "btn btn-danger btn-block rounded-0 newsletter-btn",
      onClick: function onClick() {
        if (submitted) {
          return;
        }

        if (!_this2.validEmail(email)) {
          _this2.setState({
            error: true
          });
        }

        _this2.setState({
          submitted: true
        });

        var self = _this2;
        axios.post('https://franchise.danubehome.com/.netlify/functions/contact-form', {
          type: 'NEWS_LETTER',
          email: email
        }).then(function (response) {
          // handle success
          self.setState({
            error: false,
            submitted: false,
            email: ''
          });
        }).catch(function (error) {
          // handle error
          console.log(error);
        }).finally(function () {
          self.setState({
            submitted: false
          }); // always executed
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 33
      }
    }, "Subscribe")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "copyright",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 29
      }
    }, "Subscribe to our mailing list to get the updates to your email inbox.")))));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component), _temp);
var _default = Footer;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Footer, "Footer", "/home/luezoid/React_projects/danubehome/src/components/Footer.js");
  reactHotLoader.register(_default, "default", "/home/luezoid/React_projects/danubehome/src/components/Footer.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.f6a68ab2d99b588b9c0f.hot-update.js.map
