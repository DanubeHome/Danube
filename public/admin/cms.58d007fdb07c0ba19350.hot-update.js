webpackHotUpdate("cms",{

/***/ "./src/components/home/About.js":
/*!**************************************!*\
  !*** ./src/components/home/About.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _img_brand_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/brand.png */ "./src/img/brand.png");
/* harmony import */ var _img_brand_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_brand_png__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "/home/luezoid/React_projects/danubehome/src/components/home/About.js",
    _this3 = undefined;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





var AboutComp = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AboutComp, _React$Component);

  function AboutComp(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      active: false,
      aboutCardsAnimationStarted: false
    };
    return _this;
  }

  var _proto = AboutComp.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var self = this;

    if (typeof window != 'undefined') {
      window.addEventListener('scroll', function (event) {
        var el = document.getElementById('aboutus-section');

        if (el && el.getBoundingClientRect().top < window.innerHeight - 200) {
          self.setState({
            aboutCardsAnimationStarted: true
          });
        }
      });
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    var aboutCardsAnimationStarted = this.state.aboutCardsAnimationStarted;
    var data = this.props.data;

    if (!data) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "aboutus-section py-5",
      style: {
        background: '#EDE6DA'
      },
      id: 'aboutus-section',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "section-heading",
      style: {
        marginBottom: '50px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 29
      }
    }, data.heading))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }
    }, data.aboutCards.map(function (item, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-md-4",
        key: index,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 37
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: 'about-box-wrapper position-relative',
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 41
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "about-box p-3",
        style: {
          visibility: 'hidden'
        },
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 45
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "about-box-title",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 49
        }
      }, !!item.aboutCardTitle ? item.aboutCardTitle : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "description",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 49
        }
      }, !!item.aboutCardContent ? item.aboutCardContent : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AnimatedAboutCard, {
        aboutCardsAnimationStarted: aboutCardsAnimationStarted,
        item: item,
        index: index,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 45
        }
      })));
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row mt-5 pb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: data.actionLink,
      className: "btn-theme",
      target: "_blank",
      rel: "noopener noreferrer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 29
      }
    }, data.actionTitle ? data.actionTitle : 'Click')))));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return AboutComp;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var AnimatedAboutCard = function AnimatedAboutCard(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "about-box p-3 position-absolute animate__animated animate__slow " + (props.aboutCardsAnimationStarted ? 'animate__fadeInUp' : ''),
    style: {
      top: 0,
      left: 0,
      animationDelay: props.index * .1 + "s"
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: 'about-box-icon',
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _img_brand_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "",
    style: {
      maxWidth: '50px'
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "about-box-title",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, !!props.item.aboutCardTitle ? props.item.aboutCardTitle : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "description",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, !!props.item.aboutCardContent ? props.item.aboutCardContent : ''));
};

var _default = AboutComp;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AboutComp, "AboutComp", "/home/luezoid/React_projects/danubehome/src/components/home/About.js");
  reactHotLoader.register(AnimatedAboutCard, "AnimatedAboutCard", "/home/luezoid/React_projects/danubehome/src/components/home/About.js");
  reactHotLoader.register(_default, "default", "/home/luezoid/React_projects/danubehome/src/components/home/About.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.58d007fdb07c0ba19350.hot-update.js.map