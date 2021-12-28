"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _DataTable_style = require("../../containers/DataTable/DataTable_style");

var headers = ['firstName', 'lastName', 'dob', 'startDate', 'street', 'city', 'state', 'zipcode', 'department'];

var TableHeader = function TableHeader(_ref) {
  var sortListBy = _ref.sortListBy;
  return /*#__PURE__*/React.createElement(_react.Fragment, null, /*#__PURE__*/React.createElement("tr", null, headers.map(function (h) {
    return /*#__PURE__*/React.createElement("th", {
      key: Math.random()
    }, h, /*#__PURE__*/React.createElement(_DataTable_style.TableHeaderIconWrapper, null, /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faArrowCircleDown,
      onClick: function onClick() {
        return sortListBy(h, false);
      }
    }), /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faArrowCircleUp,
      onClick: function onClick() {
        return sortListBy(h, true);
      }
    })));
  })));
};

var _default = TableHeader;
exports.default = _default;