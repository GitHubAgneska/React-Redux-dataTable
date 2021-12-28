"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectEntriesBoxWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SelectEntriesBoxWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width:30%;\n    height: 45px;\n    font-size:0.8rem;\n    text-align: left; \n"])));

exports.SelectEntriesBoxWrapper = SelectEntriesBoxWrapper;