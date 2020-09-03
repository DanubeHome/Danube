webpackHotUpdate("cms",{

/***/ "./src/components/home/WhyDanube.js":
/*!******************************************!*\
  !*** ./src/components/home/WhyDanube.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");


var _jsxFileName = "/home/luezoid/React_projects/danubehome/src/components/home/WhyDanube.js",
    _this3 = undefined;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




var WhyDanube = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(WhyDanube, _React$Component);

  function WhyDanube(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      active: false,
      whyDenubeAnimationStarted: false
    };
    return _this;
  }

  var _proto = WhyDanube.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var self = this;

    if (typeof window != 'undefined') {
      window.addEventListener('scroll', function (event) {
        var el = document.getElementById('why-us-section');

        if (el && el.getBoundingClientRect().top < window.innerHeight - 200) {
          self.setState({
            whyDenubeAnimationStarted: true
          });
        }
      });
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    var data = this.props.data;
    var whyDenubeAnimationStarted = this.state.whyDenubeAnimationStarted;

    if (!data) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "why-section my-3 py-5",
      style: {
        backgroundColor: this.props.bgColor ? this.props.bgColor : '#fff'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "section-heading mb-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 29
      }
    }, data.heading))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row",
      id: 'why-us-section',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 21
      }
    }, data.whyCards ? data.whyCards.map(function (item, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: 'col-sm-6 col-lg-4',
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 41
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: 'position-relative',
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 45
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "why-card-wrapper d-flex align-items-center",
        style: {
          visibility: 'hidden'
        },
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 49
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "why-card d-flex align-items-center",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 53
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: 'text-theme ' + (!!item.whyCardIcon ? item.whyCardIcon : ''),
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 57
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "why-card-title",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 57
        }
      }, !!item.title ? item.title : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AnimatedCard, {
        whyDenubeAnimationStarted: whyDenubeAnimationStarted,
        item: item,
        index: index,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 49
        }
      })));
    }) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row mt-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
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
        lineNumber: 61,
        columnNumber: 29
      }
    }, data.actionTitle ? data.actionTitle : 'Click')))));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return WhyDanube;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var AnimatedCard = function AnimatedCard(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "why-card-wrapper d-flex align-items-center position-absolute animate__animated animate__faster " + (props.whyDenubeAnimationStarted ? 'animate__zoomIn' : ''),
    style: {
      width: '100%',
      top: 0,
      left: 0,
      animationDelay: props.index * .1 + "s"
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "why-card d-flex align-items-center",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: 'text-theme ' + (!!props.item.whyCardIcon ? props.item.whyCardIcon : ''),
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "why-card-title",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, !!props.item.title ? props.item.title : '')));
};

var _default = WhyDanube;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(WhyDanube, "WhyDanube", "/home/luezoid/React_projects/danubehome/src/components/home/WhyDanube.js");
  reactHotLoader.register(AnimatedCard, "AnimatedCard", "/home/luezoid/React_projects/danubehome/src/components/home/WhyDanube.js");
  reactHotLoader.register(_default, "default", "/home/luezoid/React_projects/danubehome/src/components/home/WhyDanube.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.7ab9b790abe118daad34.hot-update.js.map