import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import AuthContainer from "./AuthContainer.js";
import { useNavigate } from "react-router";
import onboarding from "../../../assets/general-assets/onboarding/images/slide-1.svg";
import onboarding_slide_2 from "../../../assets/general-assets/onboarding/images/slide-2.svg";
import onboarding_slide_3 from "../../../assets/general-assets/onboarding/images/slide-3.svg";
import onboarding_slide_4 from "../../../assets/general-assets/onboarding/images/slide-4.svg";
import onboarding_slide_5 from "../../../assets/general-assets/onboarding/images/slide-5.svg";
import NavBarHome from "../home/NavBarHome"
import "./index.scss";
import { CodeConfirmation, EmailValidation, RegisterUser } from ".";

function Onboarding() {
  const [page, setPage] = useState(1);
  const [sent, setSent] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [credit, setCredit] = useState("false");
  const [code, setCode] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [userName, setUserName] = useState("");
  const [locate, setLocate] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [creditPeriod, setCreditPeriod] = useState("");
  const [monthlySpend, setMonthlySpend] = useState("");
  const [annualTravelBudget, setAnnualTravelBudget] = useState("");
  const [isTrue, setCreditStatus] = useState(false)

  const decrement = () => {
    setPage(page - 1);
    if (page < 2) {
      return setPage(5);
    }
    console.log(page);
  };
  const increment = (e) => {
    e.preventDefault();
    setPage(page + 1);
    setSent(false);
    if (page > 5) {
      return setPage(1);
    };
    // setFormErrors(validate(formValues));
  };
  const selectCredit = (e) => {
    setCredit(e.target.value)
  }
  const setBackCreditPage = () => {
    if(credit === "false"){
    setCredit("hide")
    }else{
      setCredit("show");
    };
  };
  if(credit === "true"){
    setCreditStatus(true)
  }

  const navigation = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();
    let data = {
      firstName:firstName,
      lastName:lastName,
      number:number,
      password:password,
      companyName:companyName,
      companySize:`${companySize === "10" ? 10 : 
                    companySize === "50" ? 50 : 
                    companySize === "500" ? 500 : 
                    companySize === "1000" ? 1000 : null}`,
      userName:userName,
      code:code,
      location: locate,
      role:role,
      credit:`${credit === "true" ? true : false}`,
      email:email,
      amount:amount,
      period:creditPeriod,
      volume:monthlySpend,
      budget:annualTravelBudget,
    };
    
    setIsSubmit(true);
    setTimeout(() => {
      setIsSubmit(false)
    }, 3000)
    console.log(data)
    RegisterUser(data).then((res) => {
      res ? setPage(page + 1) : setPage(3);
    });
    navigation('/login', {replace: true})
  };
  const codeSender = async (e, email) => {
    e.preventDefault();
    setEmail(email);
    let info = {
      workEmail: email,
    };
    EmailValidation(info).then((res) => setSent(res));
  };

  const codeVerifyer = (e, code) => {
    e.preventDefault();
    let info = {
      workEmail: email,
      isCode: code,
    };
    CodeConfirmation(info).then((res) => setSent(res));
  };

  // function validateForm() {
  //   return username.length > 0 && password.length >= 8;
  // }



  // setTimeout(() => {
  //   setIsSubmit(false)
  // }, 3000)

  const setPageToOne = () =>{
    return setPage(page = 1)
  }
 
  let register;
  register = (
    <>
    <NavBarHome/>
      <div className="wrapper">
      <Form onSubmit={registerUser} id="wizard">
        <div className="content">
          {/* <!-- SECTION 1 --> */}
          {/* <h2></h2> */}
          <div className="steps clearfix">
            <ul role="tablist" className="row">
              <li
                role="tab"
                ariaDisabled="false"
                className="first checked current"
                ariaSelected="true"
              >
                <a
                  id="wizard-t-0"
                  className="row"
                  href="#wizard-h-0"
                  aria-controls="wizard-p-0"
                >
                  <span
                    className={
                      page >= 1 ? "span-animate number" : "number"
                    }
                  ></span>
                  <div
                    className={page > 1 ? "div-animate number" : "number"}
                  ></div>
                </a>
              </li>
              <li
                role="tab"
                ariaDisabled="false"
                className="done"
                ariaSelected="false"
              >
                <a
                  id="wizard-t-1"
                  className="row"
                  href='#'
                  
                  aria-controls="wizard-p-1"
                
                >
                  <span
                    className={
                      page >= 2 ? "span-animate number" : "number"
                    }
                    
                  ></span>
                  <div
                    className={page > 2 ? "div-animate number" : "number"}
                  ></div>
                </a>
              </li>
              <li role="tab" ariaDisabled="false">
                <a
                  id="wizard-t-2"
                  className="row"
                  href="#wizard-h-2"
                  aria-controls="wizard-p-2"
                >
                  <span
                    className={
                      page >= 3 ? "span-animate number" : "number"
                    }
                  ></span>
                  <div
                    className={page > 3 ? "div-animate number" : "number"}
                  ></div>
                </a>
              </li>
              <li role="tab" ariaDisabled="false">
                <a
                  id="wizard-t-3"
                  className="row"
                  href="#wizard-h-3"
                  aria-controls="wizard-p-3"
                >
                  <span
                    className={
                      page >= 4 ? "span-animate number" : "number"
                    }
                  ></span>
                  <div
                    className={page > 4 ? "div-animate number" : "number"}
                  ></div>
                </a>
              </li>
              <li role="tab" aria-disabled="false" className="last">
                <a
                  id="wizard-t-4"
                  className="row"
                  href="#wizard-h-4"
                  aria-controls="wizard-p-4"
                >
                  <span
                    className={
                      page === 5 ? "span-animate number" : "number"
                    }
                  ></span>
                </a>
              </li>
            </ul>
          </div>
          {page === 1 ? (
              <div className="inner">
                <div className="image-hold">
                  <img src={onboarding} alt="" />
                </div>
                <div className="form-content">
                  <p>Lets get started</p>
                  <div className="input-group mb-3">
                    <>
                    <label htmlFor="email">
                      Please type in your work email
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control form-control-special"
                      placeholder="Work email"
                      ariaLabel="Work email"
                      aria-describedby="basic-addon2"
                      // type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                    <div className="input-group-append">
                      <button onClick={(e) => codeSender(e, email)}
                        className="btn btn-control"
                        type="submit"
                      >
                        {sent ? <div className=" text-dark" role="status">
                          <span className="sr-only login-sr"></span>                   
                        </div>: "Send code"}
                                                
                      </button>
                    </div>
                    </>
                  </div>
                  <p style={{ textAlign: "left", fontSize: "14px" }}>
                    Already have an account with Kardinal?{" "}
                    <a href="/">
                      <b>Log in instead</b>
                    </a>
                  </p>
                </div>
              </div>
          ) : null}
          {/* <!-- SECTION 2 --> */}
          {page === 2 ? (
            <section>
              <div className="inner">
                <div className="image-hold">
                  <img src={onboarding_slide_2} alt="" />
                </div>
                <div className="form-content">
                  <p>We have sent a confirmation code to {email}</p>
                  <div className="form-group">
                    <>
                    <label htmlFor="confirmCode">
                      Input the six digit code received
                    </label>
                    <input
                      type="number"
                      className="form-control form-control-special"
                      id="code"
                      placeholder="1234"
                      value={code}
                      onChange={e => setCode(e.target.value)}
                    />
                    <div class="input-group-append">
                      <button
                        ariaLabel="Work email"
                        aria-describedby="basic-addon2"
                        onClick={(e) => codeVerifyer(e, code)}
                        className="btn btn-control"
                        type="submit"
                      >
                        {sent ? <div className=" text-dark" role="status">
                          <span className="sr-only">Loading...</span>
                        </div>: "Verify"}
                      </button>
                    </div>
                    </>
                  </div>
                  <p style={{ fontSize: "11px" }}>
                    <b onClick={e => decrement(e)} className="click-here">Click here</b>{" "}
                    to resend if you haven't received any mail or check
                    your spam folder
                  </p>
                </div>
              </div>
            </section>
          ) : null}
          {/* <!-- SECTION 3 --> */}
          {page === 3 ? (
            <section>
              <div className="inner">
                <div className="image-hold">
                  <img src={onboarding_slide_3} alt="" />
                </div>
                <div className="form-content">
                  <p>Tell us about yourself</p>
                  <div className="row mb-2">
                    <div className="col">
                      <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="First name"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        id="firstName"
                      />
                      {/* {console.log("First name::",firstName)} */}
                  
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="Last name"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        id="lastName"
                      />
                    </div>
                  </div>
                  <div className="row mb-2">
                  <div className="col">
                    <input
                      type="number"
                      required
                      className="form-control"
                      id="phoneNumber"
                      placeholder="Phone Number"
                      value={number}
                      onChange={e => setNumber(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      required
                      className="form-control"
                      name="userName"
                      id="userName"
                      placeholder="Username"
                      value={userName}
                      onChange={e => setUserName(e.target.value)}
                    />
                  </div>
                </div>
                  <div className="form-group mb-2">
                    <input
                      type="password"
                      required
                      className="form-control"
                      id="password"
                      placeholder="At least 8 characters"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </div>
                  <p style={{ textAlign: "left", fontSize: "12px" }}>
                    By signing up, you agree to our
                    <a
                      href="https://gokardinal.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Terms of Conditions and Privacy policy.
                    </a>
                  </p>
                </div>
              </div>
            </section>
          ) : null}
          {/* <!-- SECTION 4 --> */}
          {page === 4 ? (
            <section>
              <div className="inner">
                <div className="image-hold">
                  <img src={onboarding_slide_4} alt="" />
                </div>
                <div id="false" style={{display: credit === "false" ? "block" : "none"}} className="form-content">
                  <p>Tell us about your company</p>
                  <div className="form-group mb-2">
                    <input
                      type="text"
                      required
                      className="form-control"
                      name="companyName"
                      placeholder="Company Name"
                      value={companyName}
                      onChange={e => setCompanyName(e.target.value)}
                      id="companyName"
                    />
                  </div>
                  <div className="form-group mb-2">
                    <select
                      className="form-control"
                      id="locate"
                      required
                      name="locate"
                      value={locate}
                      onChange={e => setLocate(e.target.value)}
                    >
                      <option>Select your locate</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Ghana">Ghana</option>
                    </select>
                  </div>
                  <div className="form-group mb-2">
                    <select
                      className="form-control"
                      id="role"
                      required
                      name="role"
                      value={role}
                      onChange={e => setRole(e.target.value)}
                    >
                      <option>What is your role</option>
                      <option value="Business Owner">Business Owner</option>
                      <option value="Admin">Admin</option>
                      <option value="HR">HR</option>
                      <option value="Finance">Finance</option>
                      <option value="Procurement">Procurement</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  <div className="form-group mb-2">
                    <select
                      className="form-control"
                      id="company_size"
                      required
                      onChange={e => setCompanySize(e.target.value)}
                      value={companySize}
                    >
                      <option>What is the size of your company?</option>
                      <option value="10">1-10</option>
                      <option value="50">11-50</option>
                      <option value="500">50-500</option>
                      <option value="1000">Above 500</option>
                    </select>
                  </div>
                  <div className="form-group mb-2">
                    <select
                      className="form-control"
                      id="credit_facility"
                      required
                      value={credit}
                      onChange={(e) => selectCredit(e)}
                    >
                      <option value="0">
                        Would you require credit facility?
                      </option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                    
                  </div>
                </div>
                <div id="true" style={{display: credit === "true" ? "block" : "none"}} class="form-content">
                    <span className="row justify-content-center">
                      <svg className="cursor-pointer" onClick={setBackCreditPage} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                      </svg>{" "}{" "}
                      <p className="text-center flex-1 col-10">Credit Facility</p>
                    </span>
                    <div className="form-group mb-2">
                        <select 
                          className="form-control" 
                          value={amount}
                          required={isTrue}
                          onChange={e => setAmount(e.target.value)}
                        >
                          <option>Credit Amount</option>
                            <option value="1000000">1,000,000</option>
                            <option value="3000000">3,000,000</option>
                            <option value="5000000">5,000,000</option>
                            <option value="6000000">&gt; 5,000,000</option>
                        </select>
                        {/* <div className="alart">
                          {formErrors.amount}
                        </div> */}
                    </div>
                    <div className="form-group mb-2">
                        <select 
                          className="form-control" 
                          value={creditPeriod}
                          required={isTrue}
                          onChange={e => setCreditPeriod(e.target.value)}
                        >
                          <option>Credit period</option>
                            <option value="7">7 days</option>
                            <option value="14">14 days</option>
                            <option value="14">&gt; 14 days</option>
                        </select>
                    </div>
                    <div className="form-group mb-2">
                        <input 
                          type="number"
                          required={isTrue}
                          className="form-control" 
                          placeholder="Estimated travel monthly spend" 
                          value={monthlySpend}
                          onChange={e => setMonthlySpend(e.target.value)}
                          id="monthlySpend"
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input 
                          type="number"
                          required={isTrue}
                          className="form-control"  
                          placeholder="Estimated annual travel budget" 
                          value={annualTravelBudget}
                          onChange={e => setAnnualTravelBudget(e.target.value)}
                          id="annualTravelBudget"
                        />
                    </div>
                </div>
              </div>
            </section>
          ) : null}
          {/* <!-- SECTION 5 --> */}
          {page === 5 ? (
            <section>
              <div className="inner">
                <div className="image-hold">
                  <img src={onboarding_slide_5} alt="" />
                </div>
                <div className="form-content">
                  <p>You are done 🎉!</p>
                  <p
                    style={{
                      textAlign: "left",
                      fontSize: "12px",
                      marginBottom: "5px",
                    }}
                  >
                    Invite Someone
                  </p>
                  <p style={{ textAlign: "center", fontSize: "12px" }}>
                    Don't be in the future alone, invite your friends from
                    other businesses to join you
                  </p>
                  <ul
                    className="nav nav-pills mb-3 mt-3 nav-fill"
                    id="justify-pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="invite_by_email_tab"
                        data-toggle="pill"
                        href="#"
                        role="tab"
                        aria-controls="justify-pills-home"
                        ariaSelected="true"
                      >
                        Invite by Email
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="invite_by_link_tab"
                        data-toggle="pill"
                        href="#"
                        role="tab"
                        aria-controls="justify-pills-profile"
                        ariaSelected="false"
                      >
                        Invite by Link
                      </a>
                    </li>
                  </ul>
                  <div
                    className="tab-content"
                    id="justify-pills-tabContent"
                  >
                    <div
                      className="tab-pane fade show active"
                      id="invite_by_email"
                      role="tabpanel"
                      ariaLabelledby="invite_by_email_tab"
                    >
                      <div className="form-group mb-2">
                        <label
                          htmlFor="invite_by_email_input"
                          className="sr-only"
                        >
                          Email addresses separated by comma
                        </label>
                        <input
                          type="text"
                          required
                          className="form-control"
                          id="invite_by_email_input"
                          placeholder="Email addresses separated by comma"
                        />
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="invite_by_link"
                      role="tabpanel"
                      ariaLabelledby="invite_by_link_tab"
                    >
                      <div className="form-group mb-2">
                        <label
                          htmlFor="invite_by_link_input"
                          className="sr-only"
                        >
                          Share this link to your colleagues
                        </label>
                        <input
                          type="text"
                          required
                          className="form-control"
                          id="invite_by_link_input"
                          placeholder="Link"
                          
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ) : null}
          <div className="btn-cover">
            <ul role="" className="row buttons" ariaLabel="Pagination">
              {page > 1 ? (
                <li className="" onClick={decrement} ariaDisabled="false">
                  <a
                    href="#previous"
                    role="menuitem"
                    className="btn btn-outline-primary mb-2"
                  >
                    Previous
                  </a>
                </li>
              ) : null}
              {page === 5 ? (
                <li ariaHidden="true">
                  <a
                    href="/login"
                    role="menuitem"
                    className="btn btn-primary mb-2"
                  >
                    Finish
                  </a>
                </li>
              ) : null}
              {page < 1 || page === 5 ? null : (
                <li
                  hidden={!sent}
                  onClick={(e) => increment(e)}
                  ariaDisabled="false"
                  className=""
                >
                  <a
                    href="#next"
                    role="menuitem"
                    className="btn btn-primary mb-2"
                  >
                    Next
                  </a>
                </li>

              )}
                { page === 3 ? (
                <li
                  hidden={sent}
                  onClick={(e) => increment(e)}
                  ariaDisabled="false"
                  className=""
                >
                  <a
                    href="#next"
                    role="menuitem"
                    className="btn btn-primary mb-2"
                  >
                    Next
                  </a>
                </li>
                
              ):null}
              { page === 4 ? (
                <button
                  hidden={sent}
                  // onClick={() => registerUser()}
                  ariaDisabled="false"
                  className="btn btn-primary mb-2"
                  href="/login"
                >
                  {/* <a
                    href="#next"
                    role="menuitem"
                    className="btn btn-primary mb-2"
                  > */}
                  {/* spinner-border */}
                    {isSubmit ? 
                      <div class=" text-dark" role="status">
                          <span className="sr-only login-sr">Loading...</span>
                      </div>: "Register"}
                  {/* </a> */}
                </button>
              ) : null}
            </ul>
          </div>
        </div>
      </Form>
    </div>
  </>
  );
  return (
    <>
      <AuthContainer data={register} />
    </>
  );
}

export default Onboarding;
