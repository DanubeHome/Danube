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
/* harmony import */ var _img_Branches_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/Branches.png */ "./src/img/Branches.png");
/* harmony import */ var _img_Branches_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_Branches_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_value_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/value.png */ "./src/img/value.png");
/* harmony import */ var _img_value_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_value_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_accolades_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/accolades.png */ "./src/img/accolades.png");
/* harmony import */ var _img_accolades_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_accolades_png__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/home/luezoid/React_projects/danubehome/src/components/about/Counter.js",
    _this3 = undefined;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






var Counter = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Counter, _React$Component);

  function Counter(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      active: false
    };
    return _this;
  }

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
        lineNumber: 21,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "heading-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 33
      }
    }, data.heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 33
      }
    }, data.caption)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }
    }, data.counterBox.map(function (item, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CounterCard, {
        item: item,
        index: index,
        key: index,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 37
        }
      });
    }))));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return Counter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var CounterCard = function CounterCard(props) {
  var icon;

  if (props.index == 0) {
    icon = _img_Branches_png__WEBPACK_IMPORTED_MODULE_2___default.a;
  } else if (props.index == 1) {
    icon = _img_value_png__WEBPACK_IMPORTED_MODULE_3___default.a;
  } else if (props.index == 2) {
    icon = _img_accolades_png__WEBPACK_IMPORTED_MODULE_4___default.a;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-lg-3 col-6 mb-5 mb-sm-0 text-lg-left",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "counter-box d-sm-inline-flex align-items-center",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
    className: 'mb-0 mr-sm-3 mb-3 mb-sm-0',
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: icon,
    alt: "",
    className: 'counter-icon',
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "counter-heading",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, props.item.counterBoxTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }, props.item.counterBoxContent))));
};

var _default = Counter;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Counter, "Counter", "/home/luezoid/React_projects/danubehome/src/components/about/Counter.js");
  reactHotLoader.register(CounterCard, "CounterCard", "/home/luezoid/React_projects/danubehome/src/components/about/Counter.js");
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
//# sourceMappingURL=cms.01fab717f44f67dcd6e1.hot-update.js.map