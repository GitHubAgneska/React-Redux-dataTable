"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = listReducer;

var _store = require("../store");

var _immer = _interopRequireDefault(require("immer"));

var _actionsTypes = require("../actions/actions-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ......................................................
// EMPLOYEES LIST  REDUCER
// ......................................................
function listReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _store.initialState.list;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _immer.default)(state, function (draft) {
    switch (action.type) {
      // FETCH ACTIONS
      case _actionsTypes.LIST_FETCHING:
        {
          if (draft.status === 'void') {
            draft.status = 'loading';
            return;
          }

          if (draft.status === 'rejected') {
            draft.error = null;
            draft.status = 'loading';
            return;
          }

          if (draft.status === 'resolved') {
            draft.status = 'updating'; // ongoing request but presence of data

            return;
          }

          return; // else action ignored
        }

      case _actionsTypes.LIST_RESOLVED:
        {
          if (draft.status === 'loading' || draft.status === 'updating') {
            draft.status = 'resolved';
            draft.data = action.payload.employees;

            if (!draft.collection) {
              draft.collection = action.payload.employees;
            }

            return;
          }

          return;
        }

      case _actionsTypes.LIST_REJECTED:
        {
          if (draft.status === 'loading' || draft.status === 'updating') {
            // set to rejected, save error, delete data
            draft.status = 'rejected';
            draft.error = action.payload;
            draft.payload = null;
            return;
          }

          return;
        }
      // CURRENT COLLECTION ( all results || sorted || searched )

      case _actionsTypes.SETUP_COLLECTION:
        {
          if (draft.collection) {
            draft.collection = null;
          } // reset collection


          draft.collection = action.payload;
          return;
        }
      // PAGINATE ACTIONS (NOT ASYNC)

      case _actionsTypes.SET_ENTRIES_COUNT:
        {
          var newAmount = action.payload;
          return _objectSpread(_objectSpread({}, state), {}, {
            entries: newAmount
          });
        }

      case _actionsTypes.SETUP_COLLECTION_AS_PAGES:
        {
          var pages = action.payload;

          if (draft.collectionAsPages) {
            draft.collectionAsPages = null;
          } // reset collection


          draft.collectionAsPages = pages;
          return;
        }

      case _actionsTypes.SET_CURRENT_PAGE_INDEX:
        {
          var pageRequested = action.payload;
          return _objectSpread(_objectSpread({}, state), {}, {
            currentPageIndex: pageRequested
          });
        }

      case _actionsTypes.SET_TOTAL_PAGES:
        {
          var newPagesAmount = action.payload;
          return _objectSpread(_objectSpread({}, state), {}, {
            totalPages: newPagesAmount
          });
        }

      case _actionsTypes.SET_CURRENT_ACTIVE_PAGE:
        {
          var requestedIndex = action.payload;
          return _objectSpread(_objectSpread({}, state), {}, {
            currentPage: state.collectionAsPages[requestedIndex + 1]
          });
        }
      // SORT ACTIONS

      case _actionsTypes.SORT_STATUS_CHANGED:
        {
          var status = action.payload;
          return _objectSpread(_objectSpread({}, state), {}, {
            sorted: status
          });
        }

      case _actionsTypes.SORT_PARAM_CHANGED:
        {
          var _action$payload = action.payload,
              param = _action$payload.param,
              reverseOrder = _action$payload.reverseOrder;
          return _objectSpread(_objectSpread({}, state), {}, {
            sortedBy: {
              param: param,
              reverseOrder: reverseOrder
            }
          });
        }
      // SEARCH ACTIONS

      case _actionsTypes.SEARCHTERM_CHANGED:
        {
          var newSearchterm = action.payload;
          return _objectSpread(_objectSpread({}, state), {}, {
            searchTerm: newSearchterm,
            searchActive: true
          });
        }

      default:
        return state;
    }
  });
}