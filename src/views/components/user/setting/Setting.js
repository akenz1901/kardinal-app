import React from "react";
import TravelersProfile from "./TravelersProfile";
import TwoFactor from "./TwoFactor";
import ChangePassword from "./ChangePassword";
import CompanyProfileComponent from "./CompanyProfile";

function Setting(){


    return(
        <div className="main-container" id="container">
            <div className="overlay"></div>
            <div className="search-overlay"></div>
            {/* <!--  BEGIN CONTENT AREA  --> */}
            <div id="content" className="main-content">
            <div className="layout-px-spacing">
                <div className="page-header">
                    <div className="page-title">
                        <h3>Settings</h3>
                    </div>
                </div>
                <div className="row layout-spacing">
                    <div className="col-lg-12">
                        <div className="statbox widget box-shadow widget-chart-three" style={{padding: "0px 20px"}}> 
                            <div className="widget-heading" style={{padding: "20px 0px"}}>
                                <div>
                                    <h5>Settings</h5>
                                </div>
                            </div>
                            <div className="widget-content widget-content-area border-top-tab">
                                <ul className="nav nav-tabs mb-3 mt-3" id="borderTop" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="border-top-security-tab" data-toggle="tab" style={{padding: "12px 100px"}} href="#border-top-security" role="tab" aria-controls="border-top-security" aria-selected="true">Security</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="border-top-company-tab" data-toggle="tab" style={{padding: "12px 100px"}} href="#border-top-company" role="tab" aria-controls="border-top-company" aria-selected="false">Company</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="border-top-travelers-tab" data-toggle="tab" style={{padding: "12px 100px"}} href="#border-top-travelers" role="tab" aria-controls="border-top-travelers" aria-selected="false">Travelers</a>
                                    </li>  
                                </ul>    
                                <div className="tab-content" id="borderTopContent">
                                    <div className="tab-pane fade show active" id="border-top-security" role="tabpanel" aria-labelledby="border-top-security-tab"> 
                                        <div className="row">  
                                            <div id="flRegistrationForm" className="col-lg-12 layout-spacing">
                                                <div className="statbox widget box-shadow">
                                                    <div className="widget-header">                                
                                                        <div className="row">
                                                            <div className="col-xl-12 col-md-12 col-sm-12 col-12">
                                                                <h4>...</h4>
                                                            </div>                                                                        
                                                        </div>
                                                    </div>
                                                    <ChangePassword />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 layout-spacing">
                                                <div className="statbox widget box-shadow">
                                                    <div className="widget-header">                                
                                                        <div className="row">
                                                            <div className="col-xl-12 col-md-12 col-sm-12 col-12">
                                                                <h4>...</h4>
                                                            </div>                                                                        
                                                        </div>
                                                    </div>
                                                    <TwoFactor />
                                                </div>
                                            </div>
                                        </div>  
                                    </div>
                                    <div className="tab-pane fade" id="border-top-company" role="tabpanel" aria-labelledby="border-top-company-tab">
                                        <div className="row">
                                            <div id="flRegistrationForm" className="col-lg-12 layout-spacing">
                                                <div className="statbox widget box-shadow">
                                                    <div className="widget-header">                                
                                                        <div className="row">
                                                            <div className="col-xl-12 col-md-12 col-sm-12 col-12">
                                                                <h4>...</h4>
                                                            </div>                                                                        
                                                        </div>
                                                    </div>
                                                    <CompanyProfileComponent />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="border-top-travelers" role="tabpanel" aria-labelledby="border-top-travelers-tab">
                                        <div className="row">
                                            <div className="col-lg-12 layout-spacing">
                                                <div className="statbox box-shadow">
                                                    <div className="widget-header">                                
                                                        <div className="row">
                                                            <div className="col-xl-12 col-md-12 col-sm-12 col-12">
                                                                <h4>...</h4>
                                                            </div>                                                                        
                                                        </div>
                                                    </div>
                                                    <TravelersProfile />  
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Add New Traveler Modal --> */}
                    
                </div>
            </div>
        {/* <!--  END CONTENT AREA  --> */}
        </div>
    )
}

export default Setting;