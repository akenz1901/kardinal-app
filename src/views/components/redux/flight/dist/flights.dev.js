"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addSearchedFlights = addSearchedFlights;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _redux = require("redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ADD_FLIGHT = 'ADD_FLIGHT';
var ADD_HOTEL = 'ADD_HOTEL';

function addSearchedFlights(flightData) {
  return {
    type: ADD_FLIGHT,
    flightData: flightData
  };
}

var defaultState = {
  message: 'failed',
  data: []
};

function flightSearches() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_FLIGHT:
      return state;

    default:
      return state.message;
  }
}

;
var flightSearchRes = (0, _redux.combineReducers)({
  flightSearches: flightSearches
});
var _default = flightSearchRes;
exports["default"] = _default;