webpackHotUpdate("cms",{

/***/ "./src/components/about/Counter.js":
/*!*****************************************!*\
  !*** ./src/components/about/Counter.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/luezoid/React_projects/danubehome/src/components/about/Counter.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



var Counter = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Counter, _React$Component);

  var _proto = Counter.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var data = this.props.data;

    if (!data) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "counter py-5",
      style: {
        background: 'linear-gradient(45deg,#282828, #282828d9)'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "heading-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 33
      }
    }, data.heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 33
      }
    }, data.caption)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }
    }, data.counterBox.map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-md-3 col-6 mb-3 mb-sm-0",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 37
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "counter-box",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 41
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
        class: 'mb-0',
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 45
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "",
        alt: "",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 49
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 45
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "counter-heading",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 49
        }
      }, item.counterBoxTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 49
        }
      }, item.counterBoxContent))));
    }))));
  };

  function Counter(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      active: false
    };
    return _this;
  }

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return Counter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var _default = Counter;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Counter, "Counter", "/home/luezoid/React_projects/danubehome/src/components/about/Counter.js");
  reactHotLoader.register(_default, "default", "/home/luezoid/React_projects/danubehome/src/components/about/Counter.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.0e387656967ee301b183.hot-update.js.map