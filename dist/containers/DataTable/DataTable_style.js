"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableWrapper = exports.TableHeaderIconWrapper = exports.StyledTableRow = exports.StyledTableHeader = exports.StyledTable = exports.ComponentWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ComponentWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    height:100vh; width: 90%;\n    margin:auto; padding-top: 5%;\n"])));

exports.ComponentWrapper = ComponentWrapper;

var TableWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: flex;\n    max-height: 90%;\n    overflow: scroll;\n    border:1px solid grey;\n"])));

exports.TableWrapper = TableWrapper;

var StyledTable = _styledComponents.default.table(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([" \n    width: 100%;\n    tbody { font-size: 0.8rem; }\n"])));

exports.StyledTable = StyledTable;

var StyledTableHeader = _styledComponents.default.thead(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    min-height: 2rem;\n    text-transform: uppercase;\n    font-size: 0.8em;\n    th {\n        height: 3.5rem;\n        position: sticky; top: 0; \n        color: white; \n        background-color: #888; \n    }\n"])));

exports.StyledTableHeader = StyledTableHeader;

var TableHeaderIconWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    min-height: 1rem;\n    \n"])));

exports.TableHeaderIconWrapper = TableHeaderIconWrapper;

var StyledTableRow = _styledComponents.default.tr(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    height: 2rem;\n    \n    :nth-child(even) {background-color: #ccc }\n    &:hover { background-color: lightblue; color: white;  }\n    \n    td { \n        width: 10%;\n        overflow: hidden;\n    }\n"])));

exports.StyledTableRow = StyledTableRow;