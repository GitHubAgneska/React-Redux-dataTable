"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DataTable = void 0;

var _reactRedux = require("react-redux");

var _react = require("react");

var _list_feature = require("../../features/list_feature");

var _Actions = require("../../state/actions/Actions");

var _Table = _interopRequireDefault(require("../../components/Table/Table"));

var _Pagination = _interopRequireDefault(require("../../components/Pagination/Pagination"));

var _SelectEntriesBox = _interopRequireDefault(require("../../components/SelectEntriesBox/SelectEntriesBox"));

var _SearchBox = _interopRequireDefault(require("../../components/SearchBox/SearchBox"));

var _searchText = require("../../utils/searchText");

var _DataTable_style = require("./DataTable_style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DataTable = function DataTable() {
  var _collectionAsPages$cu;

  var dispatch = (0, _reactRedux.useDispatch)();
  var collection = (0, _reactRedux.useSelector)(function (initialState) {
    return initialState.list.collection;
  });
  var collectionAsPages = (0, _reactRedux.useSelector)(function (initialState) {
    return initialState.list.collectionAsPages;
  });
  var currentPageIndex = (0, _reactRedux.useSelector)(function (initialState) {
    return initialState.list.currentPageIndex;
  });
  var currentPageToDisplay = (_collectionAsPages$cu = collectionAsPages[currentPageIndex]) !== null && _collectionAsPages$cu !== void 0 ? _collectionAsPages$cu : collectionAsPages[0];
  var totalPages = (0, _reactRedux.useSelector)(function (initialState) {
    return initialState.list.totalPages;
  });

  var sortListBy = function sortListBy(filterParam, reverse) {
    dispatch((0, _list_feature.sortList)(filterParam, reverse));
  };

  var changePage = function changePage(pageNumber) {
    console.log('page requested:', pageNumber);
    dispatch((0, _list_feature.updatePage)(pageNumber));
  };

  var entriesOptions = [15, 30, 50];
  var currentEntriesAmount = (0, _reactRedux.useSelector)(function (initialState) {
    return initialState.list.entries;
  });

  var selectEntriesAmount = function selectEntriesAmount(n) {
    dispatch((0, _list_feature.changeEntriesAmount)(n));
  };

  var currentlyShowing = currentPageToDisplay.length;
  var listTotal = collection.length;
  var input = document.querySelector('input');

  var _useState = (0, _react.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      searchInputValues = _useState2[0],
      setSearchInputValues = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      suggestions = _useState4[0],
      setSuggestions = _useState4[1];

  var originalListData = (0, _reactRedux.useSelector)(function (initialState) {
    return initialState.list.data;
  });

  var handleSearchChange = function handleSearchChange(e) {
    var query = e.target.value;
    (0, _list_feature.requestSetSearchTerm)(query);

    if (query.length > 2) {
      var sugg = (0, _searchText.searchSuggestions)(query, collection);
      setSuggestions(sugg);
    } else {
      setSuggestions([]);
      dispatch((0, _Actions.setCollection)(originalListData));
      dispatch((0, _list_feature.changeEntriesAmount)(currentEntriesAmount));
    }
  };

  var handleKeyDown = function handleKeyDown(e) {
    var key = e.code;

    if (key === 'Enter') {
      validateCurrentSearch();
    }
  };

  var validateCurrentSearch = function validateCurrentSearch() {
    var suggestedResults = Array.from(suggestions.values()).flat();
    dispatch((0, _Actions.setCollection)(suggestedResults));
    dispatch((0, _list_feature.changeEntriesAmount)(currentEntriesAmount));
    setSuggestions([]);
  };

  var clearInput = function clearInput() {
    if (input.value !== "") {
      setSearchInputValues("");
      input.value = "";
      setSuggestions([]);
      dispatch((0, _Actions.setCollection)(originalListData));
      dispatch((0, _list_feature.changeEntriesAmount)(currentEntriesAmount));
      (0, _list_feature.requestSetSearchTerm)('');
    } else {
      return;
    }
  };

  var selectSuggestion = function selectSuggestion(suggestion) {
    input.value = suggestion;
    var resultsOfClickedSuggestion = suggestions.get(suggestion);
    setSuggestions([]);
    dispatch((0, _Actions.setCollection)(resultsOfClickedSuggestion));
    dispatch((0, _list_feature.changeEntriesAmount)(currentEntriesAmount));
  };

  var handleSearchSubmit = function handleSearchSubmit() {
    return input.value !== "" ? validateCurrentSearch() : null;
  };

  return /*#__PURE__*/React.createElement(_DataTable_style.ComponentWrapper, null, /*#__PURE__*/React.createElement(_SelectEntriesBox.default, {
    options: entriesOptions,
    selectEntriesAmount: selectEntriesAmount,
    currentlyshowing: currentlyShowing,
    listTotal: listTotal
  }), /*#__PURE__*/React.createElement(_SearchBox.default, {
    handleSearchChange: handleSearchChange,
    handleSearchSubmit: handleSearchSubmit,
    clearInput: clearInput,
    values: searchInputValues,
    suggestions: suggestions,
    selectSuggestion: selectSuggestion,
    handleKeyDown: handleKeyDown
  }), collectionAsPages && /*#__PURE__*/React.createElement(_Table.default, {
    currentPageToDisplay: currentPageToDisplay,
    sortListBy: sortListBy
  }), /*#__PURE__*/React.createElement(_Pagination.default, {
    totalPages: totalPages,
    currentActivePage: currentPageIndex,
    changePage: changePage
  }));
};

exports.DataTable = DataTable;
var _default = DataTable;
exports.default = _default;