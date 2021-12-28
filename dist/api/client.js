"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.client = client;
var _excluded = ["body"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// chunk adapted from redux official doc https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers
// A tiny wrapper around fetch(), borrowed from
// https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper
// https://codesandbox.io/s/github/reduxjs/redux-fundamentals-example-app/tree/master/?from-embed=&file=/src/api/server.js:0-3041
// https://codesandbox.io/s/github/reduxjs/redux-fundamentals-example-app/tree/tutorial-steps?file=/src/App.js:0-6
function client(_x) {
  return _client.apply(this, arguments);
}

function _client() {
  _client = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(endpoint) {
    var _ref,
        body,
        customConfig,
        headers,
        config,
        data,
        response,
        _args = arguments;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref = _args.length > 1 && _args[1] !== undefined ? _args[1] : {}, body = _ref.body, customConfig = _objectWithoutProperties(_ref, _excluded);
            headers = {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            };
            config = _objectSpread(_objectSpread({
              method: body ? 'POST' : 'GET'
            }, customConfig), {}, {
              headers: _objectSpread(_objectSpread({}, headers), customConfig.headers)
            });

            if (body) {
              config.body = JSON.stringify(body);
            }

            _context.prev = 4;
            _context.next = 7;
            return window.fetch(endpoint, config);

          case 7:
            response = _context.sent;
            _context.next = 10;
            return response.json();

          case 10:
            data = _context.sent;

            if (!response.ok) {
              _context.next = 13;
              break;
            }

            return _context.abrupt("return", data);

          case 13:
            throw new Error(response.statusText);

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](4);
            return _context.abrupt("return", Promise.reject(_context.t0.message ? _context.t0.message : data));

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 16]]);
  }));
  return _client.apply(this, arguments);
}

client.get = function (endpoint) {
  var customConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return client(endpoint, _objectSpread(_objectSpread({}, customConfig), {}, {
    method: 'GET'
  }));
};

client.post = function (endpoint, body) {
  var customConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return client(endpoint, _objectSpread(_objectSpread({}, customConfig), {}, {
    body: body
  }));
};