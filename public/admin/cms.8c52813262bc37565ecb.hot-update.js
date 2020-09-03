webpackHotUpdate("cms",{

/***/ "./src/templates/index-page.js":
/*!*************************************!*\
  !*** ./src/templates/index-page.js ***!
  \*************************************/
/*! exports provided: IndexPageTemplate, default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageTemplate", function() { return IndexPageTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_home_InfoCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/home/InfoCard */ "./src/components/home/InfoCard.js");
/* harmony import */ var _components_home_About__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/home/About */ "./src/components/home/About.js");
/* harmony import */ var _components_home_WhyDanube__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/home/WhyDanube */ "./src/components/home/WhyDanube.js");
/* harmony import */ var _components_home_VideoGallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/home/VideoGallery */ "./src/components/home/VideoGallery.js");
/* harmony import */ var _components_home_MainSlider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/home/MainSlider */ "./src/components/home/MainSlider.js");
/* harmony import */ var _components_home_slider_Slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/home/slider/Slider */ "./src/components/home/slider/Slider.js");


var _this = undefined,
    _jsxFileName = "/home/luezoid/React_projects/danubehome/src/templates/index-page.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};










var IndexPageTemplate = function IndexPageTemplate(_ref) {
  var showVideos = _ref.showVideos,
      innerWidth = _ref.innerWidth,
      frontmatter = _ref.frontmatter,
      currentSlide = _ref.currentSlide,
      changeSlide = _ref.changeSlide;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_home_slider_Slider__WEBPACK_IMPORTED_MODULE_9__["default"], {
    innerWidth: innerWidth,
    changeSlide: changeSlide,
    slides: frontmatter.slider,
    currentSlide: currentSlide,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_home_InfoCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    info: frontmatter.infoCards,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_home_About__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: frontmatter.aboutSection,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_home_WhyDanube__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: frontmatter.whySection,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), showVideos && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_home_VideoGallery__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: frontmatter.videoSection,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 27
    }
  }));
};

var IndexPage = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(IndexPage, _React$Component);

  function IndexPage(props) {
    var _this2;

    _this2 = _React$Component.call(this, props) || this;
    _this2.timeout = void 0;

    _this2.callNext = function () {
      var data = _this2.props.data;
      var frontmatter = data.markdownRemark.frontmatter;
      var slides = frontmatter.slider;
      var currentSlide = _this2.state.currentSlide;

      _this2.setState({
        currentSlide: currentSlide === slides.length - 1 ? 0 : currentSlide + 1
      });

      _this2.timeout = setTimeout(function () {
        _this2.callNext();
      }, 7000);
    };

    _this2.changeSlide = function (index) {
      if (_this2.timeout) {
        clearTimeout(_this2.timeout);
      }

      _this2.setState({
        currentSlide: index
      });

      _this2.timeout = setTimeout(function () {
        _this2.callNext();
      }, 7000);
    };

    _this2.state = {
      currentSlide: 0,
      innerWidth: 1,
      showVideos: false
    };
    return _this2;
  }

  var _proto = IndexPage.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this3 = this;

    this.timeout = setTimeout(function () {
      _this3.callNext();
    }, 7000);

    if (typeof window !== 'undefined') {
      this.setState({
        innerWidth: window.innerWidth
      });
    }

    setTimeout(function () {
      _this3.setState({
        showVideos: true
      });
    }, 1000);
  };

  _proto.render = function render() {
    var data = this.props.data;
    var _this$state = this.state,
        currentSlide = _this$state.currentSlide,
        innerWidth = _this$state.innerWidth,
        showVideos = _this$state.showVideos;
    var frontmatter = data.markdownRemark.frontmatter;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 16
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IndexPageTemplate, {
      changeSlide: this.changeSlide,
      currentSlide: currentSlide,
      showVideos: showVideos,
      innerWidth: innerWidth,
      frontmatter: frontmatter,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }
    }));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return IndexPage;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

IndexPage.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    markdownRemark: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
      frontmatter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
    })
  })
};
var _default = IndexPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
var pageQuery = "4292016027";
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(IndexPageTemplate, "IndexPageTemplate", "/home/luezoid/React_projects/danubehome/src/templates/index-page.js");
  reactHotLoader.register(IndexPage, "IndexPage", "/home/luezoid/React_projects/danubehome/src/templates/index-page.js");
  reactHotLoader.register(pageQuery, "pageQuery", "/home/luezoid/React_projects/danubehome/src/templates/index-page.js");
  reactHotLoader.register(_default, "default", "/home/luezoid/React_projects/danubehome/src/templates/index-page.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.8c52813262bc37565ecb.hot-update.js.map