"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddTraveler = exports.CompanyProfile = exports.PasswordChange = exports.PasswordReset = exports.PasswordResetCode = exports.LoginService = exports.RegisterUser = exports.CodeConfirmation = exports.EmailValidation = void 0;

var _react = _interopRequireDefault(require("react"));

var _apiServices = _interopRequireDefault(require("./apiServices"));

var _sweetalert = _interopRequireDefault(require("sweetalert"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import { history } from "../../../history";
// import { FETCH_ONBOARDING } from "./types";
// import { Storage } from "../../../utilities/storage/storage";
var EmailValidation = function EmailValidation(data) {
  var email, body;
  return regeneratorRuntime.async(function EmailValidation$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          email = data.workEmail;
          body = {
            email: email
          };
          _context.next = 4;
          return regeneratorRuntime.awrap(_apiServices["default"].post("/api/accounts/validate_email", body).then(function (response) {
            var resData = response;

            if (resData.message === "success") {
              setTimeout((0, _sweetalert["default"])("Please check your email inbox or spam for verification code"), 2000);
              return true;
            } else {
              (0, _sweetalert["default"])(resData.error);
              return false;
            }
          })["catch"](function (err) {}));

        case 4:
          return _context.abrupt("return", _context.sent);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.EmailValidation = EmailValidation;

var CodeConfirmation = function CodeConfirmation(info) {
  var data;
  return regeneratorRuntime.async(function CodeConfirmation$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          data = {
            email: info.workEmail,
            otp: "".concat(info.isCode)
          };
          _context2.next = 3;
          return regeneratorRuntime.awrap(_apiServices["default"].post("/api/accounts/confirm_email", data).then(function (response) {
            var responseData = response;

            if (responseData.message !== "failed") {
              setTimeout((0, _sweetalert["default"])("Congratulations, you are now being redirected to the next page"), 3000);
              return true;
            } else {
              setTimeout((0, _sweetalert["default"])(responseData.data), 3000);
            }

            return false;
          })["catch"](function (err) {}));

        case 3:
          return _context2.abrupt("return", _context2.sent);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.CodeConfirmation = CodeConfirmation;

var RegisterUser = function RegisterUser(info) {
  var data;
  return regeneratorRuntime.async(function RegisterUser$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log(info);
          data = {
            "username": info.userName,
            "email": info.email,
            "password1": info.password,
            "password2": info.password,
            "job_role": info.role,
            "phone_number": info.number,
            "credit_required": info.credit,
            "company_name": info.companyName,
            "location": info.location,
            "company_size": info.companySize,
            "credit_amount": info.amount,
            "credit_period": info.period,
            "travel_volume": info.volume,
            "annual_travel_budget": info.budget
          };
          _context3.next = 4;
          return regeneratorRuntime.awrap(_apiServices["default"].post("/auth/registration/", data).then(function (response) {
            var responseData = response;

            if (responseData.message !== "failed") {
              localStorage.setItem("token", JSON.stringify(responseData.key));
              setTimeout((0, _sweetalert["default"])("Congratulations, you are now being redirected to the next page"), 3000);
              return true;
            } else {
              setTimeout((0, _sweetalert["default"])(responseData.data), 3000);
            }

            return false;
          })["catch"](function (err) {}));

        case 4:
          return _context3.abrupt("return", _context3.sent);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.RegisterUser = RegisterUser;

var LoginService = function LoginService(info) {
  var data;
  return regeneratorRuntime.async(function LoginService$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          data = {
            username: info.username,
            password: info.password
          };
          _context4.next = 3;
          return regeneratorRuntime.awrap(_apiServices["default"].post("/auth/login/", data).then(function (response) {
            // let responseData = response.key;
            console.log(response);
            localStorage.setItem("token", JSON.stringify(response));
            setTimeout("success", 3000);
            return true;
          })["catch"](function (err) {
            setTimeout(function () {
              return (0, _sweetalert["default"])(err.data.message);
            }, 3000);
          }));

        case 3:
          return _context4.abrupt("return", _context4.sent);

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.LoginService = LoginService;

var PasswordResetCode = function PasswordResetCode(data) {
  var email, body;
  return regeneratorRuntime.async(function PasswordResetCode$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          // const [isSent, setIsSent] = useState(data.isSent)
          email = data.workEmail;
          body = {
            email: email
          };
          _context5.next = 4;
          return regeneratorRuntime.awrap(_apiServices["default"].post("/auth/password_reset/", body).then(function (response) {
            var resData = response;

            if (resData.status === "Ok") {
              setTimeout((0, _sweetalert["default"])("Please check your email inbox or spam for verification code"), 100);
              return true;
            } else {
              (0, _sweetalert["default"])(resData.error);
              return false;
            }
          }) // .catch((err) => {});
          ["catch"](function (err) {
            console.log(err);
          }));

        case 4:
          return _context5.abrupt("return", _context5.sent);

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  });
};

exports.PasswordResetCode = PasswordResetCode;

var PasswordReset = function PasswordReset(info) {
  var data;
  return regeneratorRuntime.async(function PasswordReset$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          data = {
            email: info.workEmail,
            token: "".concat(info.isCode)
          };
          _context6.next = 3;
          return regeneratorRuntime.awrap(_apiServices["default"].post("/auth/password_reset/confirm/", data).then(function (response) {
            var responseData = response;

            if (responseData.status === "Ok") {
              setTimeout((0, _sweetalert["default"])("Password reset, you can now login."), 3000);
              return true;
            } else {
              setTimeout((0, _sweetalert["default"])(responseData.data), 3000);
            }

            return false;
          })["catch"](function (err) {}));

        case 3:
          return _context6.abrupt("return", _context6.sent);

        case 4:
        case "end":
          return _context6.stop();
      }
    }
  });
}; // export function appLogout (dispatch){
//     const email = Storage.getItem("user")["username"];
//     const body = {email: email};
//     api
//       .post("/api/users/logout", body)
//       .then(() => {
//         Storage.removeItem("user");
//         dispatch({ type: "LOGOUT" });
//         history.push("/login");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     }
// export const setCurrentUsers = (response) => {
//   console.log(response);
//   return (dispatch) =>
//     dispatch({ type: "AUTHENTICATION_SUCCESS", response });
// };

/*----------------------
      SETTINGS
----------------------*/


exports.PasswordReset = PasswordReset;

var PasswordChange = function PasswordChange(info) {
  var data;
  return regeneratorRuntime.async(function PasswordChange$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          data = {
            old_password: info.old_password,
            new_password1: info.new_password1,
            new_password2: info.new_password2
          };
          _context7.next = 3;
          return regeneratorRuntime.awrap(_apiServices["default"].post("/auth/password/change/", data).then(function (response) {
            var responseData = response;

            if (responseData.details === "New password has been saved") {
              setTimeout((0, _sweetalert["default"])("Congratulations ! New password has been saved."), 3000);
              return true;
            } else {
              setTimeout((0, _sweetalert["default"])(responseData.data), 3000);
            }

            return false;
          })["catch"](function (err) {}));

        case 3:
          return _context7.abrupt("return", _context7.sent);

        case 4:
        case "end":
          return _context7.stop();
      }
    }
  });
};

exports.PasswordChange = PasswordChange;

var CompanyProfile = function CompanyProfile(info) {
  var data;
  return regeneratorRuntime.async(function CompanyProfile$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          data = {
            logo: info.logo,
            business_name: info.business_name,
            business_bio: info.business_bio,
            business_industry: info.business_industry,
            business_address: info.business_address,
            business_city: info.business_city,
            business_state: info.business_state,
            business_country: info.business_country
          };
          _context8.next = 3;
          return regeneratorRuntime.awrap(_apiServices["default"].post("/api/trips/company/", data).then(function (response) {
            var responseData = response;

            if (responseData) {
              setTimeout((0, _sweetalert["default"])("Congrats ! Business profile saved."), 3000);
              return true;
            } else {
              setTimeout((0, _sweetalert["default"])(responseData), 3000);
            }

            return false;
          })["catch"](function (err) {}));

        case 3:
          return _context8.abrupt("return", _context8.sent);

        case 4:
        case "end":
          return _context8.stop();
      }
    }
  });
};

exports.CompanyProfile = CompanyProfile;

var AddTraveler = function AddTraveler(info) {
  var data;
  return regeneratorRuntime.async(function AddTraveler$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          data = {
            title: info.title,
            first_name: info.first_name,
            last_name: info.last_name,
            email: info.email,
            phone_number: info.phone_number,
            gender: info.gender,
            date_of_birth: info.date_of_birth,
            nationality: info.nationality,
            identification_expiry: info.identification_expiry,
            identification_issue: info.identification_issue,
            identification_country: info.identification_country,
            means_of_identification: info.means_of_identification,
            identification_number: info.identification_number,
            passenger_type: info.passenger_type
          };
          _context9.next = 3;
          return regeneratorRuntime.awrap(_apiServices["default"].post("/api/trips/passenger/", data).then(function (response) {
            var responseData = response;

            if (responseData) {
              setTimeout((0, _sweetalert["default"])("Traveler successfully added."), 3000);
              return true;
            } else {
              setTimeout((0, _sweetalert["default"])(responseData), 3000);
            }

            return false;
          })["catch"](function (err) {}));

        case 3:
          return _context9.abrupt("return", _context9.sent);

        case 4:
        case "end":
          return _context9.stop();
      }
    }
  });
};

exports.AddTraveler = AddTraveler;