"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _SelectEntriesBox_style = require("./SelectEntriesBox_style");

var _reactRedux = require("react-redux");

var SelectEntriesBox = function SelectEntriesBox(_ref) {
  var options = _ref.options,
      selectEntriesAmount = _ref.selectEntriesAmount,
      currentlyshowing = _ref.currentlyshowing,
      listTotal = _ref.listTotal;
  var currentEntries = (0, _reactRedux.useSelector)(function (initialState) {
    return initialState.list.entries;
  });
  return /*#__PURE__*/React.createElement(_SelectEntriesBox_style.SelectEntriesBoxWrapper, null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "entries"
  }, "Show per page:"), /*#__PURE__*/React.createElement("select", {
    options: options,
    name: "entries",
    value: currentEntries,
    onChange: function onChange(e) {
      return console.log(e.target.value);
    },
    "aria-required": "true"
  }, options.map(function (o) {
    return /*#__PURE__*/React.createElement("option", {
      key: Math.random(),
      onClick: function onClick() {
        selectEntriesAmount(o);
      }
    }, o);
  })), /*#__PURE__*/React.createElement("div", {
    currentlyshowing: currentlyshowing
  }, "Showing: ", currentlyshowing, " of ", listTotal));
};

var _default = SelectEntriesBox;
exports.default = _default;