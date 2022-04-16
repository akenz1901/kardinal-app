"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _apiServices = _interopRequireDefault(require("../../../../actions/apiServices"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var flightCategories = {
  SearchInternationalFlightsReturn: function SearchInternationalFlightsReturn() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var responseData = null;

    _apiServices["default"].fetch('/api/trips/international_flights', data, true).then(function (res) {
      responseData = (_readOnlyError("responseData"), res.data);
    })["catch"](console.error());

    return responseData;
  },
  SearchInternationalFlightsOneway: function SearchInternationalFlightsOneway() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var responseData = null;

    _apiServices["default"].fetch('/api/trips/international_flights', data, true).then(function (res) {
      responseData = (_readOnlyError("responseData"), res.data);
      console.log(responseData);
    })["catch"](console.error());
  },
  data: ''
};
var _default = SearchInternationalFlightsOneway;
exports["default"] = _default;