"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortStatusChanged = exports.sortParamChanged = exports.setTotalPages = exports.setEntriesPerPage = exports.setCurrentActivePageIndex = exports.setCurrentActivePage = exports.setCollectionAsPages = exports.setCollection = exports.searchtermChanged = exports.listResolved = exports.listRejected = exports.listFetching = void 0;

var _actionsTypes = require("./actions-types");

// ................................................................................. 
// ACTIONS CREATORS : LIST 
// ................................................................................. 
// LIST - FETCH actions...................................................
var listFetching = function listFetching() {
  return function (dispatch) {
    return dispatch({
      type: _actionsTypes.LIST_FETCHING
    });
  };
};

exports.listFetching = listFetching;

var listResolved = function listResolved(data) {
  return function (dispatch) {
    return dispatch({
      type: _actionsTypes.LIST_RESOLVED,
      payload: data
    });
  };
};

exports.listResolved = listResolved;

var listRejected = function listRejected(error) {
  return function (dispatch) {
    return dispatch({
      type: _actionsTypes.LIST_REJECTED,
      payload: error
    });
  };
};

exports.listRejected = listRejected;

var setCollection = function setCollection(data) {
  return function (dispatch) {
    return dispatch({
      type: _actionsTypes.SETUP_COLLECTION,
      payload: data
    });
  };
}; // LIST - PAGINATE actions...............................................


exports.setCollection = setCollection;

var setCollectionAsPages = function setCollectionAsPages(pages) {
  return {
    type: _actionsTypes.SETUP_COLLECTION_AS_PAGES,
    payload: pages
  };
};

exports.setCollectionAsPages = setCollectionAsPages;

var setEntriesPerPage = function setEntriesPerPage(entries) {
  return {
    type: _actionsTypes.SET_ENTRIES_COUNT,
    payload: entries
  };
};

exports.setEntriesPerPage = setEntriesPerPage;

var setTotalPages = function setTotalPages(n) {
  return {
    type: _actionsTypes.SET_TOTAL_PAGES,
    payload: n
  };
};

exports.setTotalPages = setTotalPages;

var setCurrentActivePageIndex = function setCurrentActivePageIndex(i) {
  return {
    type: _actionsTypes.SET_CURRENT_PAGE_INDEX,
    payload: i
  };
};

exports.setCurrentActivePageIndex = setCurrentActivePageIndex;

var setCurrentActivePage = function setCurrentActivePage(i) {
  return {
    type: _actionsTypes.SET_CURRENT_ACTIVE_PAGE,
    payload: i
  };
}; // LIST - SORT actions...................................................


exports.setCurrentActivePage = setCurrentActivePage;

var sortStatusChanged = function sortStatusChanged(data) {
  return {
    type: _actionsTypes.SORT_STATUS_CHANGED,
    payload: data
  };
};

exports.sortStatusChanged = sortStatusChanged;

var sortParamChanged = function sortParamChanged(param, reverseOrder) {
  return {
    type: _actionsTypes.SORT_PARAM_CHANGED,
    payload: {
      param: param,
      reverseOrder: reverseOrder
    }
  };
};

exports.sortParamChanged = sortParamChanged;

var searchtermChanged = function searchtermChanged(searchterm) {
  return {
    type: _actionsTypes.SEARCHTERM_CHANGED,
    payload: searchterm
  };
}; // ............................................


exports.searchtermChanged = searchtermChanged;