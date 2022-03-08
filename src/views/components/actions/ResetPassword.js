import React from "react";
import AuthContainer from "./AuthContainer";
import login_slide from "../../../assets/general-assets/onboarding/images/login-slide.svg";
import { Formik } from 'formik';
import * as yup from "yup";
import './index.scss';

const schema = yup.object({
    newPassword: yup
      .string()
      .required(<div className="red">Enter your old password !</div>),
    newPassword: yup
      .string()
      .required(<div className="red">Enter your new password !</div>)
      .matches(
        "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
        "Password must contain at least 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special case character"
      ),
    confirmPassword: yup
      .string()
      .required(<div className="red">Confirm your password !</div>)
      .oneOf([yup.ref("password"), null], "Password must match")
  });

export let passwordReset;
passwordReset = (
    <div className="wrapper">
    <Formik
       initialValues={
           { oldPassword: '', 
           newPassword: '', 
           confirmPassword: '' 
            }
        }
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({values, errors, touched, handleChange, handleBlur,handleSubmit, isSubmitting,
       }) => (<form onSubmit={handleSubmit}  id="wizard">
                <section>
                    <div className="inner">
						<div className="image-hold">
							<img src={login_slide} alt="" />
						</div>
						<div className="form-content" >
							<p>Reset Password</p>
							<div className="form-group">
                                <label for="oldPassword_">Old password</label>
                                <input 
                                    type="password" 
                                    name="oldPassword"
                                    value={values.oldPassword}
                                    className="form-control" 
                                    id="oldPassword_" 
                                    placeholder="Old password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <div className="alart">
                                    {errors.oldPassword && touched.oldPassword && errors.oldPassword}
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="newPassword_">New password</label>
                                <input 
                                    type="password"
                                    name="newPassword"
                                    value={values.newPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="form-control" 
                                    id="newPassword_"
                                    placeholder="New password" 
                                />
                                <div className="alart">
                                    {errors.newPassword && touched.newPassword && errors.newPassword}
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="confirmPpassword_">Confirm password</label>
                                <input 
                                    type="password"
                                    name="confirmPassword"
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="form-control" 
                                    id="confirmPassword_"
                                    placeholder="Confirm password"
                                />
                                <div className="alart">
                                    {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                                </div>
                            </div>
                            <span className="row reset-bottom">
							<p className="login-p">
                                Back to {" "}
                                <a href="/login">
                                    <b>Login</b>
                                </a> 
                            </p>
                                <button 
                                    disabled={isSubmitting} 
                                    className="btn btn-primary btn-login">
                                    Reset
                                </button>
                            </span>
						</div>
					</div>
                </section>
            </form>)}
        </Formik>
	</div>
)
function ResetPassword(){
    return(
        <>
            <AuthContainer data={passwordReset}/>
        </>
    )
}

export default ResetPassword;