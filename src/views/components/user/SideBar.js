import React from "react";
import logo from "../../../assets/general-assets/img/kardinal.png";
import navLogo from "../../../assets/general-assets/img/logo-kardinal.png";
import imageOne from "../../../assets/user-assets/assets/img/90x90.jpg";
import './index.css';

export default function SideBar() {
    return(
        <div className="sidebar-open" role="banner">
                <nav id="topbar">
                    <ul className="navbar-nav row justify-content-between pl-5 pr-5 theme-brand flex-row  text-center">
                        <li className="nav-item">
                            <a className='' href="/">
                                <img src={navLogo} className="" alt="logo" />
                            </a>
                        </li>
                        {/* <li className="nav-item theme-logo logout">
                            <a className='' href="/">
                                <b>Logout</b>
                            </a>
                        </li> */}
                    </ul>
                <ul className="list-unstyled menu-categories sidebar-menu-categories" id="topAccordion">
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
                
                </ul>
                </nav>
                </div>
                // {/* END TOPBAR */}
                    
    )
}