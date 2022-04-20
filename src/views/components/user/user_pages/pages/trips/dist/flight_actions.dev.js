"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchInternationalFlightsOneway = exports.SearchInternationalFlightsReturn = void 0;

var _react = _interopRequireDefault(require("react"));

var _apiServices = _interopRequireDefault(require("../../../../actions/apiServices"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
};

exports.SearchInternationalFlightsReturn = SearchInternationalFlightsReturn;

var SearchInternationalFlightsOneway = function SearchInternationalFlightsOneway(data) {
  return regeneratorRuntime.async(function SearchInternationalFlightsOneway$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_apiServices["default"].fetch('/api/trips/international_flights', data, true).then(function (res) {
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

        case 2:
          return _context2.abrupt("return", _context2.sent);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.SearchInternationalFlightsOneway = SearchInternationalFlightsOneway;