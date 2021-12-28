"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TableHeader = _interopRequireDefault(require("./Table-header"));

var _DataTable_style = require("../../containers/DataTable/DataTable_style");

var _moment = _interopRequireDefault(require("moment"));

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Table = function Table(_ref) {
  var currentPageToDisplay = _ref.currentPageToDisplay,
      sortListBy = _ref.sortListBy;
  var currentQuery = (0, _reactRedux.useSelector)(function (initialState) {
    return initialState.list.searchTerm;
  });
  var tableHead = ['firstName', 'lastName', 'dob', 'startDate', 'street', 'city', 'state', 'zipcode', 'department'];

  var tableRow = function tableRow(employee) {
    // eslint-disable-next-line no-unused-vars
    var key = employee.key,
        value = employee.value;
    var tableCell = [].concat(tableHead);
    var columnData = tableCell.map(function (prop) {
      var valueToDisplay;

      if (key[prop].hasOwnProperty('name')) {
        valueToDisplay = key[prop]['name'];
      } else if (prop === 'dob' || prop === 'startDate') {
        valueToDisplay = (0, _moment.default)(key[prop]).format('MM/DD/YY');
      } else {
        valueToDisplay = key[prop];
      }

      var match = false;

      if (currentQuery.length > 4 && valueToDisplay.toLowerCase().includes(currentQuery)) {
        match = true;
      }

      return /*#__PURE__*/React.createElement("td", {
        key: Math.random(),
        style: {
          backgroundColor: match ? 'yellow' : 'none'
        }
      }, valueToDisplay);
    });
    return /*#__PURE__*/React.createElement(_DataTable_style.StyledTableRow, {
      key: Math.random()
    }, columnData);
  };

  var tableData = function tableData() {
    return currentPageToDisplay.map(function (key, index) {
      return tableRow({
        key: key,
        index: index
      });
    });
  };

  return /*#__PURE__*/React.createElement(_DataTable_style.TableWrapper, null, /*#__PURE__*/React.createElement(_DataTable_style.StyledTable, null, /*#__PURE__*/React.createElement(_DataTable_style.StyledTableHeader, null, /*#__PURE__*/React.createElement(_TableHeader.default, {
    sortListBy: sortListBy
  })), /*#__PURE__*/React.createElement("tbody", null, tableData())));
};

var _default = Table;
exports.default = _default;