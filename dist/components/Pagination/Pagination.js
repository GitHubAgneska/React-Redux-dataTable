"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Pagination_style = require("./Pagination_style");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Pagination = function Pagination(_ref) {
  var totalPages = _ref.totalPages,
      currentActivePage = _ref.currentActivePage,
      changePage = _ref.changePage;
  return /*#__PURE__*/React.createElement(_Pagination_style.PaginationWrapper, null, _toConsumableArray(Array(totalPages)).map(function (x, i) {
    return /*#__PURE__*/React.createElement(_Pagination_style.PageNumber, {
      key: Math.random(),
      currentActivePage: i === currentActivePage,
      onClick: function onClick() {
        return changePage(i);
      }
    }, i + 1);
  }));
};

var _default = Pagination;
exports.default = _default;