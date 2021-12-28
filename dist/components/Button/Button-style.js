"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledBtn = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledBtn = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral([" \n    display: block;\n    padding: 8px;\n    font-size: 1.1rem;\n    font-weight: bold;\n    margin-top: 1rem;\n    color: #fff;\n    border-radius: 5px;\n    width: ", "\n"])), function (props) {
  return props.width ? props.width : '100%';
});

exports.StyledBtn = StyledBtn;