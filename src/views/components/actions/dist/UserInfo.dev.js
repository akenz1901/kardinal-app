"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _apiServices = _interopRequireDefault(require("./apiServices"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var User = function User() {
  var userRes;
  return regeneratorRuntime.async(function User$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          userRes = '';
          _context.next = 3;
          return regeneratorRuntime.awrap(_apiServices["default"].fetch('/auth/user/', {}, true).then(function (response) {
            console.log(response);
            localStorage.setItem('email', response.email);
          })["catch"](function (err) {
            console.log(err);
          }));

        case 3:
          if (!(userRes != '')) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", userRes);

        case 7:
          return _context.abrupt("return", 'user@kardinal.com');

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = User;
exports["default"] = _default;