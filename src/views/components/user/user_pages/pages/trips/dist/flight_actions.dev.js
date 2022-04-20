"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
<<<<<<< HEAD
exports.SearchInternationalFlightsOneway = exports.SearchInternationalFlightsReturn = void 0;
=======
exports["default"] = exports.SearchInternationalFlightsOneway = exports.SearchInternationalFlightsReturn = void 0;
>>>>>>> 57198c10b28243c32c65a5c9005da730b69a75d7

var _react = _interopRequireDefault(require("react"));

var _apiServices = _interopRequireDefault(require("../../../../actions/apiServices"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

<<<<<<< HEAD
var SearchInternationalFlightsReturn = function SearchInternationalFlightsReturn() {
  var data,
      _args = arguments;
  return regeneratorRuntime.async(function SearchInternationalFlightsReturn$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          data = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
          _context.next = 3;
          return regeneratorRuntime.awrap(_apiServices["default"].fetch('/api/trips/international_flights', data, true).then(function (res) {
            responseData = res.data;
          })["catch"](function (error) {
            console.log(error);
          }));

        case 3:
          return _context.abrupt("return", _context.sent);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
=======
function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var SearchInternationalFlightsReturn = function SearchInternationalFlightsReturn() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var responseData = null;

  _apiServices["default"].fetch('/api/trips/international_flights', data, true).then(function (res) {
    responseData = (_readOnlyError("responseData"), res.data);
  })["catch"](console.error());

  return responseData;
>>>>>>> 57198c10b28243c32c65a5c9005da730b69a75d7
};

exports.SearchInternationalFlightsReturn = SearchInternationalFlightsReturn;

var SearchInternationalFlightsOneway = function SearchInternationalFlightsOneway() {
<<<<<<< HEAD
  var data,
      _args2 = arguments;
  return regeneratorRuntime.async(function SearchInternationalFlightsOneway$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          data = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
          _context2.next = 3;
          return regeneratorRuntime.awrap(_apiServices["default"].fetch('/api/trips/international_flights', data, true).then(function (res) {
            console.log(res);
            console.log(res.data);
            console.log(res.message);

            if (res.message === 'success') {
              localStorage.setItem("flight", JSON.stringify(res.data));
            } else {
              localStorage.setItem("flight", JSON.stringify(res.message));
            }
          })["catch"](function (error) {
            console.log(error);
          }));

        case 3:
          return _context2.abrupt("return", _context2.sent);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.SearchInternationalFlightsOneway = SearchInternationalFlightsOneway;
=======
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
>>>>>>> 57198c10b28243c32c65a5c9005da730b69a75d7
