"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = exports.rootReducer = exports.reducers = exports.listState = exports.initialState = void 0;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _listReducer = _interopRequireDefault(require("./reducers/list-reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  list: {
    status: 'void',
    data: null,
    error: null,
    collection: null,
    sorted: false,
    sortedBy: {
      sortParam: '',
      reverse: false
    },
    searchActive: false,
    searchTerm: '',
    collectionAsPages: null,
    entries: 15,
    currentPage: null,
    currentPageIndex: null,
    totalPages: 1
  }
}; // SELECTORS

exports.initialState = initialState;

var listState = function listState(initialState) {
  return initialState.list;
};

exports.listState = listState;
var reducers = (0, _redux.combineReducers)({
  list: _listReducer.default
});
exports.reducers = reducers;

var rootReducer = function rootReducer(state, action) {
  return reducers(state, action);
};

exports.rootReducer = rootReducer;

var reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

var store = (0, _redux.createStore)(rootReducer, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk.default), reduxDevtools));
exports.store = store;
store.subscribe(function () {
  console.log('NEW STATE===>', store.getState());
});