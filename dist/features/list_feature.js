"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeEntriesAmount = void 0;
exports.fetchList = fetchList;
exports.updatePage = exports.sortList = exports.requestSetSearchTerm = exports.requestSetAllSuggestionsAsResults = exports.requestListAsSearchResults = void 0;

var _store = require("../state/store");

var _Actions = require("../state/actions/Actions");

var _client = require("../api/client");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// ......................................................
// FETCH
// ......................................................
function fetchList(_x, _x2) {
  return _fetchList.apply(this, arguments);
} // ......................................................
// SET UP PAGINATION : thunks dispatching multiple pagination actions
// ......................................................


function _fetchList() {
  _fetchList = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState) {
    var status, response, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // rtk = createAsyncThunk
            status = (0, _store.listState)(getState()).status;

            if (!(status === 'pending' || status === 'loading')) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            dispatch((0, _Actions.listFetching)());
            _context.prev = 4;
            _context.next = 7;
            return _client.client.get('/fakeApi/employees-list');

          case 7:
            response = _context.sent;
            _context.next = 10;
            return response;

          case 10:
            data = _context.sent;
            dispatch((0, _Actions.listResolved)(data));
            dispatch((0, _Actions.setCollection)(data.employees)); // set default collection to all list

            dispatch(changeEntriesAmount(15)); // set default entries to 15

            _context.next = 19;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](4);
            dispatch((0, _Actions.listRejected)(_context.t0));

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 16]]);
  }));
  return _fetchList.apply(this, arguments);
}

var updatePage = function updatePage(pageNumber) {
  return function (dispatch, getState) {
    dispatch((0, _Actions.setCurrentActivePageIndex)(pageNumber));
    dispatch((0, _Actions.setCurrentActivePage)(pageNumber));
  };
};

exports.updatePage = updatePage;

var changeEntriesAmount = function changeEntriesAmount(entries) {
  return function (dispatch, getState) {
    dispatch((0, _Actions.setEntriesPerPage)(entries));
    var currentList = (0, _store.listState)(getState()).collection; // console.log('CURRENTLIST COLLECTION WHEN SET COLLECTION AS PAGES (SET PAGE(entries))=========>', currentList)

    var currentActivePageIndex = (0, _store.listState)(getState()).currentPageIndex;
    var outputPages = [];
    var from = 0;
    var totalPages = Math.floor(currentList.length / entries);
    dispatch((0, _Actions.setTotalPages)(totalPages)); // setup pages arrays

    for (var i = from; i <= totalPages; i++) {
      var to = from + entries;
      outputPages.push(currentList.slice(from, to));
      from += entries;
    } // set current page to default only if unset (otherwise keep current page after rearranging after entries amount changed)


    if (!currentActivePageIndex) {
      dispatch((0, _Actions.setCurrentActivePageIndex)(0));
    }

    dispatch((0, _Actions.setCollectionAsPages)(outputPages));
  };
}; // ......................................................
// LIST SORTING
// ......................................................


exports.changeEntriesAmount = changeEntriesAmount;

var sortList = function sortList(sortParam, reverseOrder) {
  return function (dispatch, getState) {
    var currentList = (0, _store.listState)(getState()).collection;

    _store.store.dispatch((0, _Actions.sortStatusChanged)('true'));

    _store.store.dispatch((0, _Actions.sortParamChanged)(sortParam, reverseOrder));

    var currentEntries = (0, _store.listState)(getState()).entries;

    var sortedList = _toConsumableArray(currentList); // ---- for 'sort()' will try to mutate 'currentList' and fail ---- !


    if (sortParam === 'state') {
      !reverseOrder ? sortedList.sort(function (a, b) {
        return a[sortParam].name.localeCompare(b[sortParam].name);
      }) : sortedList.sort(function (a, b) {
        return b[sortParam].name.localeCompare(a[sortParam].name);
      });
    } else {
      !reverseOrder ? sortedList.sort(function (a, b) {
        return a[sortParam].localeCompare(b[sortParam]);
      }) // a, b = employee objects of employees array
      : sortedList.sort(function (a, b) {
        return b[sortParam].localeCompare(a[sortParam]);
      });
    }

    dispatch((0, _Actions.setCollection)(sortedList));
    dispatch(changeEntriesAmount(currentEntries));
  };
}; // ......................................................
// LIST SEARCHING
// ......................................................


exports.sortList = sortList;

var requestSetSearchTerm = function requestSetSearchTerm(searchTerm) {
  _store.store.dispatch((0, _Actions.searchtermChanged)(searchTerm));
};

exports.requestSetSearchTerm = requestSetSearchTerm;

var requestListAsSearchResults = function requestListAsSearchResults(resultsOfClickedSuggestion) {
  _store.store.dispatch((0, _Actions.setCollection)(resultsOfClickedSuggestion));
};

exports.requestListAsSearchResults = requestListAsSearchResults;

var requestSetAllSuggestionsAsResults = function requestSetAllSuggestionsAsResults(suggested) {
  _store.store.dispatch((0, _Actions.setCollection)(suggested));
};

exports.requestSetAllSuggestionsAsResults = requestSetAllSuggestionsAsResults;