import React, { useState } from 'react';
import imageOne from "../../../assets/user-assets/assets/img/90x90.jpg";
import './index.css';
import SideBar from './SideBar.js';

function NavBar(){
    const [profile, setProfile] = useState(null);
    const [openUser, setOpenUser] = useState(false)
    const [loggedOut, setLogOut] = useState(false)
    
    const dropProfile = () => {
        setProfile(true ? true : false)
    }
    const dropUser = () => {
        setOpenUser(!openUser);
        console.log(openUser)
    }
    const logOut = () =>{
        setLogOut(true)
        setTimeout(() => {return setLogOut(true)}, 1000)
        localStorage.removeItem("token")
    }

    return(
        <div className="header-container">
        {/* <a>Hello</a> */}
                <header className="header navbar navbar-expand-sm">
                <a onClick={dropProfile} className="sidebarCollapse" data-placement="bottom" href='...'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" 
                        stroke-linejoin="round" className="feather feather-menu"
                    >
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </a>
                {profile ? <SideBar profile={profile} /> : null}
                {/* <Backdrop /> */}
                <div className="brand-logo">
                    <a href="/">
                        <img src="https://res.cloudinary.com/kardinal/image/upload/v1646050697/kardinal/logos/logo-kardinal_rlges3.png" alt="logo" />
                    </a>
                </div>
                <ul className="navbar-item topbar-navigation">

                {/* BEGIN TOPBAR */}
                <div className="topbar-nav header navbar" role="banner">
                <nav id="topbar">
                    {/* <ul className="navbar-nav theme-brand flex-row  text-center">
                        <li className="nav-item theme-logo">
                            <a className='logo-anchor' href="/"> */}
                                {/* <img src="https://res.cloudinary.com/kardinal/image/upload/v1646050697/kardinal/logos/logo-kardinal_rlges3.png" className="navbar-logo" alt="logo" /> */}
                            {/* </a>
                        </li>
                    </ul> */}
                <ul className="list-unstyled menu-categories" id="topAccordion">
                    <li className="menu single-menu active">
                        <a href="/dashboard">
                        <div className="nav-items">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            <span>Dashboard</span>
                        </div>
                        </a>
                    </li>
                    <li className="menu single-menu">
                        <a href="/trip">
                            <div className="nav-items">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-cpu"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
                                <span>Trips</span>
                            </div>
                        </a>
                    </li>
                    <li className="menu single-menu">
                        <a href="/invoice">
                            <div className="nav-items">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                            
                                <span>Invoice </span>
                            </div>
                        </a>
                    </li>
                    <li className="menu single-menu">
                        <a href="/reporting">
                            <div className="nav-items">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                            
                                <span>Reporting</span>
                            </div>
                        </a>
                    </li>
                    <li className="menu single-menu">
                        <a href="/trip-history">
                            <div className="nav-items">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-layout"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                                <span>Trip History</span>
                            </div>
                        </a>
                    </li>
                    <li className="menu single-menu">
                        <a href="/setting">
                            <div className="nav-items">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" 
                                stroke-linecap="round" stroke-linejoin="round" className="feather feather-clipboard">
                                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2">
                                </path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
                            <span>Setting</span>
                            </div>
                        </a>
                    </li>

                    <li className="menu single-menu">
                        <a>
                            <div className="nav-items">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-layout"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg> */}
                                <span>           </span>
                            </div>
                        </a>
                    </li>
                    <li className="menu single-menu">
                        <a>
                            <div className="nav-items">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-layout"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg> */}
                                <span>           </span>
                            </div>
                        </a>
                    </li>
                    <li className="menu single-menu">
                        <a>
                            <div className="nav-items">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-layout"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg> */}
                                <span>           </span>
                            </div>
                        </a>
                    </li>
                {/* <li className="menu single-menu">
                    <a href="/event">
                        <div className="nav-items">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clipboard"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>  
                            <span>Event</span>
                        </div>
                </a>
                </li> */}
                {/* <li className="menu single-menu">
                    <a href="/wallet">
                        <div className="nav-items">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clipboard"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>  
                            <span>Wallet</span>
                        </div>
                </a>
                </li> */}
                </ul>
                </nav>
                </div>
                <div className="menu menu-single">

                </div>
                {/* END TOPBAR */}
                
                </ul>
                    {/* <ul className="navbar-item flex-row ml-auto">
                        <li className="font-weight-bold">Username</li>
                    </ul> */}
                    <div>
                    <button
                        role="menuitem"
                        className="btn btn-primary mb-2"
                        onClick={logOut}
                        >
                            
                                {loggedOut ? 
                                <div className="spinner-border text-dark" role="status">
                                    <span className="sr-only login-sr">Loading...</span>
                                </div>: <a href="/">Logout</a>}
                            </button>
                    </div>

                    <ul className="navbar-item flex-row nav-dropdowns" style={{ marginLeft:90}}>
                        <li className="nav-item dropdown user-profile-dropdown order-lg-0 order-1">
                            <div onClick={dropUser} className="nav-link user profile-opener">
                                <div className="media">
                                    <img src={imageOne} className="img-fluid avatar-sm" alt="admin-profile" />
                                    {/* <!-- <div className="media-body align-self-center">
                                    <h6><span>Hi,</span> Alan</h6>
                                    </div> --> */}
                                </div>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg> */}
                            </div>
                            {openUser === true ? 
                            <div className="dropdown-menu">
                                <div className="user-profile-section">
                                    <div className="media mx-auto">
                                        <img src={imageOne} className="img-fluid  mr-2" alt="avatar" />
                                        <div className="media-body">
                                            <h5>Username</h5>
                                            <p>Role</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown-item">
                                    <a href="/profile">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> <span>My Profile</span>
                                    </a>
                                    </div>
                                    <div className="dropdown-item">
                                    <a href="/inbox">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg> <span>My Inbox</span>
                                    </a>
                                </div>
                                <div className="dropdown-item">
                                    <a href="/lock-screen">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> <span>Lock Screen</span>
                                    </a>
                                </div>
                                <div className="dropdown-item">
                                    <a href="/auth_login">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg> <span>Log Out</span>
                                    </a>
                                </div>
                            </div> : openUser}
                        </li>
                    </ul>
                </header>
            </div>
    )
}

export default NavBar;