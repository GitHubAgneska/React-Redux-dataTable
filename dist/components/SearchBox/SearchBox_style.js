"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchSuggestionsWrapper = exports.SearchSectionWrapper = exports.SearchBoxWrapper = exports.SearchBoxInput = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SearchSectionWrapper = _styledComponents.default.section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    margin-bottom: 2%;\n"])));

exports.SearchSectionWrapper = SearchSectionWrapper;

var SearchBoxWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: 100%;\n    border: 3px solid #ccc;\n    display: inline-flex;\n    margin-top: 2%;\n    align-items: center;\n    svg { margin: 1%; }\n    \n\n    ", "\n    \n    ", "\n\n"])), function (_ref) {
  var suggestionsBoxIsActive = _ref.suggestionsBoxIsActive;
  return suggestionsBoxIsActive && "border-top-right-radius: 15px;\n        border-top-left-radius: 15px; ";
}, function (_ref2) {
  var suggestionsBoxIsActive = _ref2.suggestionsBoxIsActive;
  return !suggestionsBoxIsActive && "border-radius: 15px ";
});

exports.SearchBoxWrapper = SearchBoxWrapper;

var SearchBoxInput = _styledComponents.default.input(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    width: 95%; height: 25px;\n    border: none !important;\n    outline: none;\n    border-radius: 15px;\n    padding: 0px 5px;\n    ::placeholder { font-weight: light; opacity: 0.8; }\n"])));

exports.SearchBoxInput = SearchBoxInput;

var SearchSuggestionsWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    \n    border: 2px solid #ccc;\n    text-align: justify;\n    margin-bottom: 2%;\n    color: #888;\n    ul {\n        li { \n            min-height: 2rem;\n            display: flex;\n            align-items: center;\n            padding: 1%;\n            font-size: 0.8rem;\n            &:hover { background-color: #ccc; color:white; }\n        }\n        li:not(:first-child) {\xA0border-top: 1px solid #ccc; }\n    }\n\n    border-bottom-right-radius: 15px;\n    border-bottom-left-radius: 15px;\n\n"])));

exports.SearchSuggestionsWrapper = SearchSuggestionsWrapper;