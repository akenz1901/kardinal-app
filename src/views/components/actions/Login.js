import React, { useState } from "react";
import AuthContainer from "./AuthContainer";
import { createBrowserHistory } from "history";
import login_slide from "../../../assets/general-assets/onboarding/images/login-slide.svg";
import NavBarHome from '../home/NavBarHome'
import { LoginService } from "."

function Login() {
    const [page, setPage] = useState(1);
    const [isLogin, setIsLogin] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let history = createBrowserHistory();
    const LoginUser = (e) => {
        e.preventDefault();
        const data = {
            username: username,
            password: password
        };
        LoginService(data).then((res) => {
            res ? history.push('/dashboard') : setPage(page);
        });
        setIsLogin(true);
        setTimeout(() => {
            return setIsLogin(false);
        }, 3000)
    };
    let login;
    login = (
        <>
        <NavBarHome />
        <div className="wrapper">
            <form onSubmit={LoginUser}  id="wizard">
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
                                onClick={() => LoginUser()}
                                type="submit"
                                href="/dashboard"
                                role="menuitem"
                                className="btn btn-primary mb-2"
                            >
                                {isLogin ? 
                                <div class="spinner-border text-dark" role="status">
                                    <span className="sr-only login-sr">Loading...</span>
                                </div>: "Login"}
                            </button>
                            <a className="resetpassword" href="/reset-password" style={{fontSize:12, paddingLeft:90}}>Forgot password?</a>
                        </span>
                    </div>
                </div>
            </section>
        </form>
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