"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeServer = makeServer;

var _miragejs = require("miragejs");

var _faker = _interopRequireDefault(require("faker"));

var _seedrandom = _interopRequireDefault(require("seedrandom"));

var _lodash = _interopRequireDefault(require("lodash"));

var _departments = require("../data/departments");

var _usStates = require("../data/us-states");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// chunk adapted from redux official doc https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers
// https://codesandbox.io/s/github/reduxjs/redux-fundamentals-example-app/tree/master/?from-embed=&file=/src/api/server.js:0-3041
// https://codesandbox.io/s/github/reduxjs/redux-fundamentals-example-app/tree/tutorial-steps?file=/src/App.js:0-6

/* eslint-disable no-unused-vars */
// backend API mock
// js library for generating fake data
var IdSerializer = _miragejs.RestSerializer.extend({
  serializeIds: 'always'
}); // Set up a seeded random number generator, so that we get
// a consistent set of users / entries each time the page loads.
// This can be reset by deleting this localStorage value,
// or turned off by setting `useSeededRNG` to false.


var useSeededRNG = false;
var rng = (0, _seedrandom.default)();

if (useSeededRNG) {
  var randomSeedString = localStorage.getItem('randomTimestampSeed');
  var seedDate;

  if (randomSeedString) {
    seedDate = new Date(randomSeedString);
  } else {
    seedDate = new Date();
    randomSeedString = seedDate.toISOString();
    localStorage.setItem('randomTimestampSeed', randomSeedString);
  }

  rng = (0, _seedrandom.default)(randomSeedString);

  _faker.default.seed(seedDate.getTime());
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(rng() * (max - min + 1)) + min;
}

var randomFromArray = function randomFromArray(array) {
  var index = getRandomInt(0, array.length - 1);
  return array[index];
};
/* original example
    const todoTemplates = [
        { base: 'Buy $THING', values: ['milk', 'bread', 'cheese', 'toys'] },
        { base: 'Clean $THING', values: ['house', 'yard', 'bedroom', 'car'] },
        { base: 'Read $THING', values: ['newspaper', 'book', 'email'] },
    ]
    const generateTodoText = () => {
        const template = randomFromArray(todoTemplates)
        const value = randomFromArray(template.values)
        const text = template.base.replace('$THING', value)
        return text
    } 
*/
// export function makeServer({ environment = "development" } = {}) {


function makeServer() {
  var server = (0, _miragejs.createServer)({
    //environment,
    routes: function routes() {
      this.namespace = 'fakeApi';
      this.timing = 2000;
      this.resource('employee'); // define multiple Shorthands for a given resource => get/post/patch/del

      this.resource('employees-list');
      var server = this;
      this.get("/employees-list", function (schema) {
        return schema.employees.all();
      });
      this.post('/employees-list', function (schema, req) {
        // const data = this.normalizedRequestAttrs() // helper that returns the body of a request in a normalized form
        // console.log('NORMALIZED DATA==', data)
        var data = JSON.parse(req.requestBody); // schema.results.create(attrs);

        if (data.text === 'error') {
          throw new Error('Could not save the employee!');
        }

        var result = server.create('employee', data);
        return result;
      });
    },
    models: {
      employee: _miragejs.Model.extend({}),
      employeesList: _miragejs.Model.extend({
        employees: (0, _miragejs.hasMany)()
      })
    },
    factories: {
      employee: _miragejs.Factory.extend({
        id: function id(i) {
          return Number(i);
        },
        firstName: function firstName() {
          return _faker.default.name.firstName();
        },
        lastName: function lastName() {
          return _faker.default.name.lastName();
        },
        dob: function dob() {
          return _faker.default.date.past(50, new Date(2002, 0, 1));
        },
        // -- keep date's ISO original format, then format to dd/mm/yyyy only when rendering
        startDate: function startDate() {
          return _faker.default.date.past(10, new Date());
        },
        street: function street() {
          return _faker.default.datatype.number().toString() + ' ' + _faker.default.address.streetName();
        },
        city: function city() {
          return _faker.default.address.city();
        },
        state: function state() {
          return randomFromArray(_usStates.states);
        },
        zipcode: function zipcode() {
          return _lodash.default.times(5, function () {
            return _lodash.default.sample('123456789');
          }).join('');
        },
        department: function department() {
          return randomFromArray(_departments.departments);
        }
      })
    },
    serializers: {
      employee: IdSerializer.extend({
        serialize: function serialize(object, request) {
          // HACK Mirage keeps wanting to store integer IDs as strings. Always convert them to numbers for now.
          var numerifyId = function numerifyId(employee) {
            employee.id = Number(employee.id);
          };

          var json = IdSerializer.prototype.serialize.apply(this, arguments);

          if (json.employee) {
            numerifyId(json.employee);
          } else if (json.employees) {
            json.employees.forEach(numerifyId);
          }

          return json;
        }
      }),
      employeesList: IdSerializer
    },
    seeds: function seeds(server) {
      server.createList('employee', 100);
      console.log('---- server creating List ----- ');
    }
  });
  return server;
}