"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _SearchBox_style = require("./SearchBox_style");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var SearchBox = function SearchBox(_ref) {
  var values = _ref.values,
      handleSearchChange = _ref.handleSearchChange,
      clearInput = _ref.clearInput,
      handleSearchSubmit = _ref.handleSearchSubmit,
      suggestions = _ref.suggestions,
      selectSuggestion = _ref.selectSuggestion,
      handleKeyDown = _ref.handleKeyDown;
  var suggestionsBoxIsActive = suggestions && suggestions.size > 0;
  return /*#__PURE__*/React.createElement(_SearchBox_style.SearchSectionWrapper, null, /*#__PURE__*/React.createElement(_SearchBox_style.SearchBoxWrapper, {
    suggestionsBoxIsActive: suggestionsBoxIsActive
  }, /*#__PURE__*/React.createElement(_SearchBox_style.SearchBoxInput, {
    type: "text",
    placeholder: "search",
    values: values,
    onChange: function onChange(e) {
      return handleSearchChange(e);
    },
    onKeyDown: function onKeyDown(e) {
      return handleKeyDown(e);
    }
  }), /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faTimes,
    onClick: function onClick() {
      return clearInput();
    }
  }), /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faSearch,
    onClick: function onClick() {
      return handleSearchSubmit();
    }
  })), suggestions && suggestions.size > 0 && /*#__PURE__*/React.createElement(_SearchBox_style.SearchSuggestionsWrapper, null, /*#__PURE__*/React.createElement("ul", null, _toConsumableArray(suggestions.keys()).map(function (s) {
    return /*#__PURE__*/React.createElement("li", {
      key: Math.random(),
      onClick: function onClick() {
        return selectSuggestion(s);
      }
    }, s);
  }))));
};

var _default = SearchBox;
exports.default = _default;