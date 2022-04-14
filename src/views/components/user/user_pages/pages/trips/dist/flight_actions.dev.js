"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SearchInternationalFlightsOneway = exports.SearchInternationalFlightsReturn = void 0;

var _react = _interopRequireDefault(require("react"));

var _apiServices = _interopRequireDefault(require("../../../../actions/apiServices"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var SearchInternationalFlightsReturn = function SearchInternationalFlightsReturn() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var responseData = null;

  _apiServices["default"].fetch('/api/trips/international_flights', data, true).then(function (res) {
    responseData = (_readOnlyError("responseData"), res.data);
  })["catch"](console.error());

  return responseData;
};

exports.SearchInternationalFlightsReturn = SearchInternationalFlightsReturn;

var SearchInternationalFlightsOneway = function SearchInternationalFlightsOneway() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var responseData = null;

  _apiServices["default"].fetch('/api/trips/international_flights', data, true).then(function (res) {
    responseData = (_readOnlyError("responseData"), res.data);
    console.log(responseData);
  })["catch"](console.error());

  GetFlightResponseData(responseData);
};

exports.SearchInternationalFlightsOneway = SearchInternationalFlightsOneway;

var GetFlightResponseData = function GetFlightResponseData(data) {
  return data;
};

var _default = GetFlightResponseData;
exports["default"] = _default;