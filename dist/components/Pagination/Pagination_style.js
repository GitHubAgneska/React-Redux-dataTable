"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaginationWrapper = exports.Paginated = exports.PageNumber = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PaginationWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 80%; margin: 3% auto;\n    \n    display: flex; flex-flow: row nowrap;\n    justify-content: center;\n    border: 1px solid grey; border-radius: 5px;\n"])));

exports.PaginationWrapper = PaginationWrapper;

var PageNumber = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    font-size:1.5rem;\n    height:2rem; width: 2rem;margin: 1%;\n    background-color: lightgray;\n    display: flex; justify-content: center; align-content:center;\n    border-radius: 50%;\n    ", "\n"])), function (_ref) {
  var currentActivePage = _ref.currentActivePage;
  return currentActivePage && 'border: 1px solid red';
});

exports.PageNumber = PageNumber;

var Paginated = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    width: 80%; border: 1px solid red;\n"])));

exports.Paginated = Paginated;