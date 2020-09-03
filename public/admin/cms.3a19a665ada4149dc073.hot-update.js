webpackHotUpdate("cms",{

/***/ "./src/components/home/VideoGallery.js":
/*!*********************************************!*\
  !*** ./src/components/home/VideoGallery.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _stypes_customSlick_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../stypes/customSlick.scss */ "./src/stypes/customSlick.scss");
/* harmony import */ var _stypes_customSlick_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_stypes_customSlick_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");


var _jsxFileName = "/home/luezoid/React_projects/danubehome/src/components/home/VideoGallery.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};








var VideoGallery = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(VideoGallery, _React$Component);

  function VideoGallery(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      active: false
    };
    return _this;
  }

  var _proto = VideoGallery.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var settings = {
      className: "center VideoGallerySlider",
      infinite: true,
      centerMode: true,
      centerPadding: "260px",
      slidesToShow: 1,
      speed: 500,
      dots: true,
      responsive: [{
        breakpoint: 992,
        settings: {
          centerMode: true,
          centerPadding: "100px",
          slidesToShow: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: "0px",
          arrows: false
        }
      }]
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, Object.assign({}, settings, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 21
      }
    }), this.props.data.videos.map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: 'px-3 pt-2',
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 37
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("iframe", {
        width: "100%",
        height: "325",
        src: item.url,
        frameBorder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowFullScreen: true,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 41
        }
      }));
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "row mt-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "col text-center mb-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_7__["Link"], {
      to: !!this.props.data.actionLink ? this.props.data.actionLink : '#',
      className: "btn-theme",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 29
      }
    }, !!this.props.data.actionTitle ? this.props.data.actionTitle : 'Click')))))
    /*
    <section className="video-gallery-section py-5">
        <div className="container">
            <div className="horiontal-scroll-container">
                <div className="horizontal-swiper">
                    {
                        this.props.data.videos.map((item) => {
                            return (
                                <div className="swipe-cards">
                                    <iframe width="100%" height="315"
                                            src={item.url}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
             <div className="row">
                <div className="col text-center mb-5">
                    <Link to={!!this.props.data.actionLink ? this.props.data.actionLink : '#'}
                          className="btn-theme">
                        {!!this.props.data.actionTitle ? this.props.data.actionTitle : 'Click'}
                    </Link>
                </div>
            </div>
        </div>
    </section>
    */
    ;
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return VideoGallery;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

var _default = VideoGallery;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(VideoGallery, "VideoGallery", "/home/luezoid/React_projects/danubehome/src/components/home/VideoGallery.js");
  reactHotLoader.register(_default, "default", "/home/luezoid/React_projects/danubehome/src/components/home/VideoGallery.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.3a19a665ada4149dc073.hot-update.js.map