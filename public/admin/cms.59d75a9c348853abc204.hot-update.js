webpackHotUpdate("cms",{

/***/ "./src/components/home/slider/Slider.js":
/*!**********************************************!*\
  !*** ./src/components/home/slider/Slider.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteralLoose */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _SliderContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SliderContent */ "./src/components/home/slider/SliderContent.js");
/* harmony import */ var _Slide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Slide */ "./src/components/home/slider/Slide.js");
/* harmony import */ var _Arrow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Arrow */ "./src/components/home/slider/Arrow.js");
/* harmony import */ var _Dots__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Dots */ "./src/components/home/slider/Dots.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");


var _this = undefined,
    _jsxFileName = "/home/demon/Downloads/Danube/src/components/home/slider/Slider.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  height: 155px;\n  width: 100vw;\n  margin: 0 auto;\n  background-position: center;\n  background-size: cover;\n  overflow: hidden;\n  white-space: nowrap;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  height: ", "px;\n  width: 100vw;\n  margin: 0 auto;\n  background-position: center;\n  background-size: cover;\n  overflow: hidden;\n  white-space: nowrap;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n                          height: 100%;\n                          background-image: url('", "');\n                          background-size: cover;\n                          transform:scale(1.05);\n                          background-repeat: no-repeat;\n                          background-position: center;\n                          transition: padding 0.3s;\n                          background-clip: content-box;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/** @jsx jsx */








var getWidth = function getWidth() {
  return window.innerWidth;
};
/**
 * @function Slider
 */


var Slider = function Slider(props) {
  var slides = props.slides,
      currentSlide = props.currentSlide,
      changeSlide = props.changeSlide,
      innerWidth = props.innerWidth;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("section", {
    css: innerWidth < 768 ? MobileSliderCSS : SliderCSS(innerWidth),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, slides.map(function (s, i) {
    return i === currentSlide ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
      rel: "noopener noreferrer",
      href: s.link || '/about',
      target: "_blank",
      className: currentSlide === i ? "d-block zoom-in" : 'd-block hidden-slide',
      css: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject(), slides[currentSlide].image.childImageSharp.fluid.src),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 49
      }
    }) : '';
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "dotts-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, slides.map(function (s, i) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      onClick: function onClick() {
        return changeSlide(i);
      },
      className: "dot " + (currentSlide === i ? 'active' : ''),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 32
      }
    });
  })));
};

var SliderCSS = function SliderCSS(innerWidth) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2(), innerWidth * 550 / 1266);
};

var MobileSliderCSS = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject3());
var _default = Slider;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getWidth, "getWidth", "/home/demon/Downloads/Danube/src/components/home/slider/Slider.js");
  reactHotLoader.register(Slider, "Slider", "/home/demon/Downloads/Danube/src/components/home/slider/Slider.js");
  reactHotLoader.register(SliderCSS, "SliderCSS", "/home/demon/Downloads/Danube/src/components/home/slider/Slider.js");
  reactHotLoader.register(MobileSliderCSS, "MobileSliderCSS", "/home/demon/Downloads/Danube/src/components/home/slider/Slider.js");
  reactHotLoader.register(_default, "default", "/home/demon/Downloads/Danube/src/components/home/slider/Slider.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.59d75a9c348853abc204.hot-update.js.map