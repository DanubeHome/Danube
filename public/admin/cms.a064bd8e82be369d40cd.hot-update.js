webpackHotUpdate("cms",{

/***/ "./src/components/about/Portfolio.js":
/*!*******************************************!*\
  !*** ./src/components/about/Portfolio.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");


var _jsxFileName = "/home/luezoid/React_projects/danubehome/src/components/about/Portfolio.js",
    _this3 = undefined;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




var Portfolio = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Portfolio, _React$Component);

  var _proto = Portfolio.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var data = this.props.data;

    if (!data) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "portfolio-section",
      id: "ourportfolio",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }
    }, data.map(function (category) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 29
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 33
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col text-center",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 37
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "section-heading text-theme",
        style: {
          background: '#CC1E1E',
          color: 'white',
          textAlign: 'left',
          padding: '10px 20px',
          marginBottom: '25px',
          fontSize: '28px'
        },
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 41
        }
      }, category.node.frontmatter.title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 37
        }
      }, category.node.frontmatter.subCategories && category.node.frontmatter.subCategories.length ? category.node.frontmatter.subCategories.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-md-6 col-lg-4",
          key: index,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 57
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "portfolio-box position-relative",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 61
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "portfolio-box-img",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 65
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          to: category.node.fields.slug + item.urlSlug,
          className: "d-block",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 69
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: !!item.images[0].image.childImageSharp ? item.images[0].image.childImageSharp.fluid.src : item.images[0].image,
          alt: "image",
          className: "img-fluid",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 73
          }
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "portfolio-box-info",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 65
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          to: category.node.fields.slug + item.urlSlug,
          className: "title d-block pr-3",
          title: "Furniture",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 69
          }
        }, item.title)))));
      }) : ''));
    }));
  };

  function Portfolio(props) {
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

  return Portfolio;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var _default = function _default() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "3046798771",
    render: function render(data, count) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Portfolio, {
        data: data.allMarkdownRemark.edges,
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 34
        }
      });
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Portfolio, "Portfolio", "/home/luezoid/React_projects/danubehome/src/components/about/Portfolio.js");
  reactHotLoader.register(_default, "default", "/home/luezoid/React_projects/danubehome/src/components/about/Portfolio.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.a064bd8e82be369d40cd.hot-update.js.map