module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+wlD":
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Fg0m");


/***/ }),

/***/ "73Hx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return postsReducer; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+wlD");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const postsReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: "posts",
  initialState: [],
  reducers: {
    getPosts: (state, {
      payload
    }) => {
      return [...payload];
    },
    deletePost: (state, {
      payload
    }) => {
      return state.filter(post => post.id !== payload);
    }
  }
});

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "AJJM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "FGIR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deletePosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getPost; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slices_postsSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("73Hx");
/* harmony import */ var _slices_postSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("u3xH");



const getPosts = params => async (dispatch, getState) => {
  try {
    const data = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("https://simple-blog-api.crew.red/posts/");
    dispatch(_slices_postsSlice__WEBPACK_IMPORTED_MODULE_1__[/* postsReducer */ "a"].actions.getPosts(data.data));
  } catch (err) {
    console.log(err);
  }
};
const deletePosts = id => async (dispatch, getState) => {
  console.log(id);

  try {
    const data = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`https://simple-blog-api.crew.red/posts/${id}`);

    if (data.status === 200) {
      console.log("post deleted");
    }

    dispatch(_slices_postsSlice__WEBPACK_IMPORTED_MODULE_1__[/* postsReducer */ "a"].actions.deletePost(id));
  } catch (err) {
    console.log(err);
  }
};
const createPost = body => async (dispatch, getState) => {
  try {
    const result = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("https://simple-blog-api.crew.red/posts/", body);

    if (result.status === 201) {
      console.log("POST CREATED");
    }
  } catch (err) {
    console.log(err);
  }
};
const getPost = id => async (dispatch, getState) => {
  try {
    const data = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`https://simple-blog-api.crew.red/posts/${id}`);

    if (data.status === 200) {
      console.log("Got post");
      dispatch(_slices_postSlice__WEBPACK_IMPORTED_MODULE_2__[/* postReducer */ "a"].actions.getPost(data.data));
    }
  } catch (err) {
    console.log(err);
  }
};

/***/ }),

/***/ "Fg0m":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Layout.tsx + 1 modules
var Layout = __webpack_require__("apO0");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "react-notifications"
var external_react_notifications_ = __webpack_require__("gWK2");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/TextField"
var TextField_ = __webpack_require__("IbbU");
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./lib/operations/postsOperation.js
var postsOperation = __webpack_require__("FGIR");

// CONCATENATED MODULE: ./components/createForm/CreateForm.js
var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const useStyles = Object(styles_["makeStyles"])(theme => Object(styles_["createStyles"])({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));
const initialState = {
  title: "",
  body: ""
};
function CreateForm() {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const classes = useStyles();
  const {
    0: value,
    1: setValue
  } = Object(external_react_["useState"])(initialState);

  const handleChange = event => {
    const {
      target: {
        name,
        value
      }
    } = event;
    console.log(name, value);
    setValue(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!value.title.length || !value.body.length) {
      external_react_notifications_["NotificationManager"].warning("Fields must contain something");
      return;
    } else {
      dispatch(Object(postsOperation["a" /* createPost */])(value));
      setValue(initialState);
      external_react_notifications_["NotificationManager"].success("Good job, you might have created a post");
    }
  };

  return __jsx("div", null, __jsx("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off"
  }, __jsx("div", null, __jsx(TextField_default.a, {
    id: "standard-multiline-flexible",
    label: "Title",
    multiline: true,
    rowsMax: 1,
    value: value.title,
    name: "title",
    onChange: handleChange,
    style: {
      width: "100%"
    }
  })), __jsx("div", null, __jsx(TextField_default.a, {
    id: "standard-multiline-static",
    label: "Content",
    multiline: true,
    rows: 4,
    name: "body",
    value: value.body,
    defaultValue: "Default Value",
    onChange: handleChange,
    style: {
      width: "100%"
    }
  })), __jsx(core_["Button"], {
    variant: "outlined",
    onClick: handleSubmit,
    style: {
      width: "100%"
    }
  }, "SUBMIT")), __jsx(external_react_notifications_["NotificationContainer"], null));
}
// CONCATENATED MODULE: ./pages/posts/new.tsx

var new_jsx = external_react_default.a.createElement;



const New = () => {
  return new_jsx(Layout["a" /* default */], null, new_jsx(CreateForm, null));
};

/* harmony default export */ var posts_new = __webpack_exports__["default"] = (New);

/***/ }),

/***/ "IbbU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "KkvU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Whatshot");

/***/ }),

/***/ "MCme":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "Uynj":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "YZXy":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Home");

/***/ }),

/***/ "apO0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Layout; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/Breadcrumbs"
var Breadcrumbs_ = __webpack_require__("nZMi");
var Breadcrumbs_default = /*#__PURE__*/__webpack_require__.n(Breadcrumbs_);

// EXTERNAL MODULE: external "@material-ui/core/Link"
var Link_ = __webpack_require__("MCme");
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);

// EXTERNAL MODULE: external "@material-ui/icons/Home"
var Home_ = __webpack_require__("YZXy");
var Home_default = /*#__PURE__*/__webpack_require__.n(Home_);

// EXTERNAL MODULE: external "@material-ui/icons/Whatshot"
var Whatshot_ = __webpack_require__("KkvU");
var Whatshot_default = /*#__PURE__*/__webpack_require__.n(Whatshot_);

// CONCATENATED MODULE: ./components/navBar/NavBar.tsx
var __jsx = external_react_default.a.createElement;






const useStyles = Object(styles_["makeStyles"])(theme => Object(styles_["createStyles"])({
  link: {
    display: "flex"
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20
  }
}));

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function IconBreadcrumbs() {
  const classes = useStyles();
  return __jsx(Breadcrumbs_default.a, {
    "aria-label": "breadcrumb"
  }, __jsx(Link_default.a, {
    color: "inherit",
    href: "/",
    className: classes.link
  }, __jsx(Home_default.a, {
    className: classes.icon
  }), "Home"), __jsx(Link_default.a, {
    color: "inherit",
    href: "/posts/new" // onClick={handleClick}
    ,
    className: classes.link
  }, __jsx(Whatshot_default.a, {
    className: classes.icon
  }), "Add post"));
}
// EXTERNAL MODULE: external "@material-ui/core/CssBaseline"
var CssBaseline_ = __webpack_require__("AJJM");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_);

// EXTERNAL MODULE: external "@material-ui/core/Container"
var Container_ = __webpack_require__("Uynj");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);

// CONCATENATED MODULE: ./components/Layout.tsx
var Layout_jsx = external_react_default.a.createElement;




function Layout(props) {
  return Layout_jsx(external_react_default.a.Fragment, null, Layout_jsx(CssBaseline_default.a, null), Layout_jsx(Container_default.a, {
    maxWidth: "lg",
    style: {
      padding: 0
    }
  }, Layout_jsx(IconBreadcrumbs, null), Layout_jsx("div", null, props.children)));
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "gWK2":
/***/ (function(module, exports) {

module.exports = require("react-notifications");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "nZMi":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Breadcrumbs");

/***/ }),

/***/ "u3xH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return postReducer; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+wlD");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const postReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: "post",
  initialState: {},
  reducers: {
    getPost: (state, {
      payload
    }) => {
      return payload;
    }
  }
});

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });