import React from "react";
import api from "./apiServices";
import swal from "sweetalert";
// import { history } from "../../../history";
// import { FETCH_ONBOARDING } from "./types";

// import { Storage } from "../../../utilities/storage/storage";

export const EmailValidation = async (data) => {
  let email = data.workEmail;
  let body = {
    email: email,
  };
  return await api
    .post(`/api/accounts/validate_email`, body)
    .then((response) => {
      const resData = response;
      if (resData.message === "success") {
        setTimeout(
          swal("Please check your email inbox or spam for verification code"),
          2000
        );
        return true;
      } else {
        swal(resData.error);
        return false;
      }
    })
    .catch((err) => {});
  // })
};

export const CodeConfirmation = async (info) => {
  let data = {
    email: info.workEmail,
    otp: `${info.isCode}`,
  };
  return await api
    .post(`/api/accounts/confirm_email`, data)
    .then((response) => {
      const responseData = response;
      if (responseData.message !== "failed") {
        setTimeout(
          swal(
            "Congratulations, you are now being redirected to the next page" 
          ),
          3000
        );
        return true;
      } else {
        setTimeout(swal(responseData.data), 3000);
      }
      return false;
    })
    .catch((err) => {});
};

export const RegisterUser = async (info) => {
  console.log(info)
  let data ={
    "username": info.userName,
    "email": info.email,
    "password1": info.password,
    "password2": info.password,
    "job_role": info.role,
    "phone_number":info.number,
    "credit_required": info.credit,
    "company_name": info.companyName,
    "location":info.location,
    "company_size": info.companySize,
    "credit_amount": info.amount,
    "credit_period": info.period,
    "travel_volume": info.volume,
    "annual_travel_budget": info.budget
}
  return await api
    .post(`/auth/registration/`, data)
    .then((response) => {
      const responseData = response;
      if (responseData.message !== "failed") {
        localStorage.setItem(
          "token", (JSON.stringify(responseData.key))
        )
        setTimeout(
          swal(
            "Congratulations, you are now being redirected to the next page"
          ),
          3000
        );
        return true;
      } else {
        setTimeout(swal(responseData.data), 3000);
      }
      return false;
    })
    .catch((err) => {});
};

export const LoginService = async (info) => {
  const data = {
    username: info.username,
    password: info.password
  };
  return await api
    .post(`/auth/login/`, data)
      .then((response) => {
        let responseData = response.key;
        console.log(responseData)
            localStorage.setItem(
              "token", (JSON.stringify(responseData))
            );
            setTimeout(
              swal(
                "Welcome back, you are now being redirected to your account."
              ),
              3000
            );
            return true;
        }
      )
    .catch((err) => {
      setTimeout(() => {
        return swal(err.data.message)
      }, 3000);
    });
}

export const PasswordResetCode = async (data) => {
  // const [isSent, setIsSent] = useState(data.isSent)
  let email = data.workEmail;
  let body = {
    email: email,
  };
  return await api
    .post(`/auth/password_reset/`, body)
    .then((response) => {
      const resData = response;
      if (resData.status === "Ok") {
        setTimeout(
          swal("Please check your email inbox or spam for verification code"),
          100
        );
        return true;
      } else {
        swal(resData.error);
        return false;
      }
    })
    // .catch((err) => {});
    .catch((err) => {
      console.log(err)
    })
  // })
};

export const PasswordReset = async (info) => {
  let data = {
    email: info.workEmail,
    token: `${info.isCode}`,
  };
  return await api
    .post(`/auth/password_reset/confirm/`, data)
    .then((response) => {
      const responseData = response;
      if (responseData.status === "Ok") {
        setTimeout(
          swal(
            "Password reset, you can now login." 
          ),
          3000
        );
        return true;
      } else {
        setTimeout(swal(responseData.data), 3000);
      }
      return false;
    })
    .catch((err) => {});
};

// export function appLogout (dispatch){
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
export const PasswordChange = async (info) => {
  let data = {
    old_password: info.old_password,
    new_password1: info.new_password1,
    new_password2: info.new_password2
  };
  return await api
    .post(`/auth/password/change/`, data)
    .then((response) => {
      const responseData = response;
      if (responseData.details === "New password has been saved") {
        setTimeout(
          swal(
            "Congratulations ! New password has been saved." 
          ),
          3000
        );
        return true;
      } else {
        setTimeout(swal(responseData.data), 3000);
      }
      return false;
    })
    .catch((err) => {});
};

export const CompanyProfile = async (info) => {
  let data = {
    logo: info.logo,
    business_name: info.business_name, 
    business_bio: info.business_bio,
    business_industry: info.business_industry,
    business_address: info.business_address,
    business_city: info.business_city,
    business_state: info.business_state,
    business_country: info.business_country
  };
  return await api
    .post(`/api/trips/company/`, data)
    .then((response) => {
      const responseData = response;
      if (responseData) {
        setTimeout(
          swal(
            "Congrats ! Business profile saved." 
          ),
          3000
        );
        return true;
      } else {
        setTimeout(swal(responseData), 3000);
      }
      return false;
    })
    .catch((err) => {});
};

export const AddTraveler = async (info) => {
  let data = {
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
  return await api
    .post(`/api/trips/passenger/`, data)
    .then((response) => {
      const responseData = response;
      if (responseData) {
        setTimeout(
          swal(
            "Traveler successfully added." 
          ),
          3000
        );
        return true;
      } else {
        setTimeout(swal(responseData), 3000);
      }
      return false;
    })
    .catch((err) => {});
};