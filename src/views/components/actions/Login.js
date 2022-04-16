import React, { useState } from "react";
import AuthContainer from "./AuthContainer.js";
// import { createBrowserHistory } from "history";
import login_slide from "../../../assets/general-assets/onboarding/images/login-slide.svg";
import NavBarHome from '../home/NavBarHome'
import { LoginService } from "."
import Form from 'react-bootstrap/Form'
import {useNavigate} from 'react-router-dom'
import swal from "sweetalert";
import { _isUndefined } from "gsap/gsap-core";
import './login.css'

function Login() {
    const [isLogin, setIsLogin] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [isAuthenticated, userHasAuthenticated] = useState(false)

    let navLinks = useNavigate();

    function validateForm() {
        return username.length > 0 && password.length >= 8;
      }

      const handleSubmit = (e) => {
        e.preventDefault();

        // const LoginUser = () => {
            const data = {
                username: username,
                password: password
            };
            try{
            LoginService(data).then((res) => {
                console.log(res.status) //new
                setTimeout(3000)
                if(localStorage.getItem("token") === null){
                    
                }else{
                    handleClick()
                    // setIsLogin(true);
                }
            });
        }catch(e){
            console.log(e)
        }finally{    
                setTimeout(() => {
                    return setIsLogin(false);
                }, 4000)
        }
        
            
        // };
    }

    const handleClick = () =>{
        navLinks("/dashboard", {replace: true})
    }


    // let history = createBrowserHistory();
    let login;
    login = (
        <>
        <NavBarHome />
        <div className="wrapper">
           {/* <form> */}
           <Form onSubmit={handleSubmit}>
                <section>
                    <div className="inner">
                        <div className="image-hold">
                            <img src={login_slide} alt="" />
                        </div>
                        <div className="form-content" >
                            <p>Sign In</p>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input 
                                    type="username" 
                                    name="username"
                                    required
                                    value={username}
                                    className="form-control" 
                                    id="username" 
                                    placeholder="work username"
                                    onChange={e => setUsername(e.target.value)}
                                />
                                {/* <div className="alart">
                                    {formErrors.email}
                                </div> */}
                            </div>
                            <div className="form-group">
                                <label className="row password-label">
                                    <label htmlFor="password">Password</label>
                                </label>
                                <input 
                                    type="password"
                                    name="password"
                                    required
                                    placeholder="Password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    className="form-control" 
                                    id="password" 
                                    autoFocus
                                />
                            </div>
                            <p className="login-p">
                                Don't have an account with Kardinal? {" "}
                                <a href="/register">
                                    <b>Create an account</b>
                                </a> 
                            </p>
                            <span className="row reset-bottom">
                            <button
                                role="menuitem"
                                className="btn btn-primary mb-2"
                                type="submit"
                                disabled={!validateForm()}
                                onClick={() => setIsLogin(true)}
                            >
                            {/* spinner-border */}
                                {isLogin ? 
                                <div className="spinner-border text-dark" role="status">
                                    <span className="sr-only login-sr">Loading...</span>
                                </div>: "Login"}
                            </button>
                            <a className="resetpassword" href="/reset-password" style={{fontSize:12, paddingLeft:90}}>Forgot password?</a>
                        </span>
                    </div>
                </div>
            </section>
            </Form>
            {/* </form> */}
    </div>
    </>
    )
    return(
        <>
            <AuthContainer data={login}/>
        </>
    )
}

export default Login;