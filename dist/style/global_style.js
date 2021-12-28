"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SrOnlyH2 = exports.SrOnlyH1 = exports.GlobalStyle = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    * {\n        box-sizing: border-box;\n        -webkit-box-sizing: border-box;\n        -moz-box-sizing: border-box;\n        scroll-behavior: smooth;\n    }\n    html {\n        font-size: 100%; /* = 16px default */\n        font-family: Avenir, Helvetica, Arial, sans-serif;\n        text-rendering: optimizeLegibility;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        text-align: center;\n        color: #2c3e50;\n    }\n    body {\n        margin: 0;\n        display: flex;\n        flex-direction: column;\n        min-height: 100vh;\n    }\n    a { text-decoration: none; color: inherit; }\n    /* input { border: transparent; } */\n    ul { margin: 0; padding: 0;}\n    ul li { list-style: none; }\n    button { display: block; border: none; }\n    main { width: 90%; margin: auto; }\n    .container { max-height:100vh; width:100%; /* position:fixed; */}\n"])));
/* accessibility - .sr-only class */

exports.GlobalStyle = GlobalStyle;

var SrOnlyH1 = _styledComponents.default.h1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    border: 0 !important;\n    clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */\n    -webkit-clip-path: inset(50%) !important;\n    clip-path: inset(50%) !important; /* 2 */\n    height: 1px !important;\n    margin: -1px !important;\n    overflow: hidden !important;\n    padding: 0 !important;\n    position: absolute !important;\n    width: 1px !important;\n    white-space: nowrap !important; /* 3 */\n"])));

exports.SrOnlyH1 = SrOnlyH1;

var SrOnlyH2 = _styledComponents.default.h2(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    border: 0 !important;\n    clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */\n    -webkit-clip-path: inset(50%) !important;\n    clip-path: inset(50%) !important; /* 2 */\n    height: 1px !important;\n    margin: -1px !important;\n    overflow: hidden !important;\n    padding: 0 !important;\n    position: absolute !important;\n    width: 1px !important;\n    white-space: nowrap !important; /* 3 */\n"])));

exports.SrOnlyH2 = SrOnlyH2;