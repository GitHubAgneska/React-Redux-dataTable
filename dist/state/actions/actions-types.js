"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SORT_STATUS_CHANGED = exports.SORT_PARAM_CHANGED = exports.SET_TOTAL_PAGES = exports.SET_ENTRIES_COUNT = exports.SET_CURRENT_PAGE_INDEX = exports.SET_CURRENT_ACTIVE_PAGE = exports.SETUP_COLLECTION_AS_PAGES = exports.SETUP_COLLECTION = exports.SEARCHTERM_CHANGED = exports.LIST_RESOLVED = exports.LIST_REJECTED = exports.LIST_FETCHING = void 0;
// LIST ACTIONS TYPES .................................
var LIST_FETCHING = 'list/fetching';
exports.LIST_FETCHING = LIST_FETCHING;
var LIST_RESOLVED = 'list/resolved';
exports.LIST_RESOLVED = LIST_RESOLVED;
var LIST_REJECTED = 'list/rejected';
exports.LIST_REJECTED = LIST_REJECTED;
var SETUP_COLLECTION = 'list/collection';
exports.SETUP_COLLECTION = SETUP_COLLECTION;
var SETUP_COLLECTION_AS_PAGES = 'list/collection/pages';
exports.SETUP_COLLECTION_AS_PAGES = SETUP_COLLECTION_AS_PAGES;
var SET_ENTRIES_COUNT = 'list/collection/entries';
exports.SET_ENTRIES_COUNT = SET_ENTRIES_COUNT;
var SET_TOTAL_PAGES = 'list/collection/total-pages';
exports.SET_TOTAL_PAGES = SET_TOTAL_PAGES;
var SET_CURRENT_ACTIVE_PAGE = 'list/collection/active-page';
exports.SET_CURRENT_ACTIVE_PAGE = SET_CURRENT_ACTIVE_PAGE;
var SET_CURRENT_PAGE_INDEX = 'list/collection/active-index';
exports.SET_CURRENT_PAGE_INDEX = SET_CURRENT_PAGE_INDEX;
var SORT_STATUS_CHANGED = 'list/collection/sort-status-changed';
exports.SORT_STATUS_CHANGED = SORT_STATUS_CHANGED;
var SORT_PARAM_CHANGED = 'list/collection/sort-param-changed';
exports.SORT_PARAM_CHANGED = SORT_PARAM_CHANGED;
var SEARCHTERM_CHANGED = 'list/collection/searchterm-changed';
exports.SEARCHTERM_CHANGED = SEARCHTERM_CHANGED;