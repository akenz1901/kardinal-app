import React from "react";
import Pagination from "../../../../utilities/pagination";

function Profile(){
    return(
        <div className="main-container" id="container">
        <div className="overlay"></div>
        <div className="search-overlay"></div> 
        {/* <!--  BEGIN CONTENT AREA  --> */}
        <div id="content" className="main-content">
            <div className="layout-px-spacing">
                <div className="page-header">
                    <nav className="breadcrumb-one" aria-label="breadcrumb">
                        <div className="title">
                            <h3>User Profile</h3>
                        </div>
                    </nav>
                </div>
                <div className="row layout-spacing">
                    {/* <!-- Content --> */}
                    <div className="col-xl-4 col-lg-6 col-md-5 col-sm-12 layout-top-spacing">
                        <div className="user-profile layout-spacing">
                            <div className="widget-content widget-content-area">
                                <div className="d-flex justify-content-between">
                                    <h3 className="">Info</h3>
                                    <button className="mt-2 edit-profile"  data-toggle="modal" data-target="#editProfileModal"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg></button>
                                </div>
                                <div className="text-center user-info">
                                    <img src="assets/img/90x90.jpg" alt="avatar" />
                                    <p className="">Ghulam Abbas</p>
                                </div>
                                <div className="user-info-list">
                                    <div className="">
                                        <ul className="contacts-block list-unstyled">
                                            <li className="contacts-block__item">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-coffee"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg> Admin
                                            </li>
                                            <li className="contacts-block__item">
                                                <a href="mailto:abbas@mail.com"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>abbas@gmail.com</a>
                                            </li>
                                            <li className="contacts-block__item">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>New York, USA
                                            </li>
                                            <li className="contacts-block__item">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> +1 (530) 555-12121
                                            </li>
                                        </ul>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-6 col-md-7 col-sm-12 layout-top-spacing">
                        <div className="bio layout-spacing ">
                            <div className="widget-content widget-content-area">
                                <h3 className="">Travel documents <div className="text-right" style={{marginTop: "-30px"}}><button id="add-travel-documents" className="btn btn-primary"  data-toggle="modal" data-target="#addTravelDocument">Add</button></div></h3>
                                <div className="bio-skill-box">
                                    <div className="row">
                                        <div className="col-12 col-xl-6 col-lg-12 mb-xl-5 mb-5 "> 
                                            <div className="b-skills">
                                                <h5>Passport (Andorra)</h5>
                                                <div className="text-right">
                                                    <div className="task-action" style={{marginTop: "-32px"}}>
                                                        <div className="dropdown  custom-dropdown">
                                                            <a className="dropdown-toggle" href="..." role="button" id="pendingTask" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="pendingTask">
                                                                <a className="dropdown-item" href={{javascript:void(0)}}>Add</a>
                                                                <a className="dropdown-item" href={{javascript:void(0)}}>View</a>
                                                                <a className="dropdown-item" href={{javascript:void(0)}}>Update</a>
                                                                <a className="dropdown-item" href={{javascript:void(0)}}>Clear All</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p>Desmond Ezebuiro</p>
                                                <p>222222222222</p>
                                                <p className="text-right">Expires Jul 6, 2050</p>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>                                
                        </div>
                        <div className="bio layout-spacing ">
                            <div className="widget-content widget-content-area">
                                <h3 className="">Loyalty programs <div className="text-right" style={{marginTop: "-30px"}}><button id="add-travel-documents" className="btn btn-primary"  data-toggle="modal" data-target="#addLoyaltyProgram">Add</button></div></h3>
                                <div className="bio-skill-box">
                                    <div className="row">
                                        <div className="col-12 col-xl-6 col-lg-12 mb-xl-5 mb-5">
                                            <p>You haven’t added any loyalty programs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>                                
                        </div>  
                    </div>
                </div>
            </div>
        <div className="footer-wrapper">
            <Pagination />
                <div className="footer-section f-section-1">
                    <p className="">Copyright © 2021 <a target="_blank" href="https://elabdisb.com" rel="noreferrer">Abbas</a>, All rights reserved.</p>
                </div>
                <div className="footer-section f-section-2">
                    <p className="">Coded with <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></p>
                </div>
            </div>
        </div>
        {/* <!--  END CONTENT AREA  --> */}
        {/* <!--  START MODALS AREA  --> */}
        {/* <!--  EDIT PROFILE MODAL AREA  --> */}
        <div id="editProfileModal" className="modal animated fadeInUp custo-fadeInUp" role="dialog">
            <div className="modal-dialog modal-lg">
                {/* <!-- Modal content--> */}
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Profile</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 layout-spacing">
                                    <form id="general-info" className="section general-info">
                                        <div className="info">
                                            <div className="row">
                                                <div className="col-lg-11 mx-auto">
                                                    <div className="row">
                                                        
                                                        <div className="col-xl-12 col-lg-12">
                                                            <div className="form">
                                                                <div className="row">
                                                                    <div className="col-sm-12">
                                                                        <div className="form-group">
                                                                            <label for="email">Email</label>
                                                                            <input type="email" className="form-control mb-4" id="email" placeholder="Email Addres" value="abbas@gmail.com" />
                                                                        </div>
                                                                    </div>
                                                                </div>   
                                                                <div className="row">
                                                                    <div className="col-sm-6">
                                                                        <div className="form-group">
                                                                            <label for="fullName">First Name</label>
                                                                            <input type="text" className="form-control mb-4" id="firstName" placeholder="First Name" value="Ghulam" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-6">
                                                                        <div className="form-group">
                                                                            <label for="fullName">Last Name</label>
                                                                            <input type="text" className="form-control mb-4" id="lastName" placeholder="Last Name" value="Abbas" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-sm-6">
                                                                        <div className="form-group">
                                                                            <label for="gender">Gender</label>
                                                                            <select className="form-control" id="gender">
                                                                                    <option selected>Male</option>
                                                                                    <option>Female</option>
                                                                                </select>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-6">
                                                                        <div className="form-group">
                                                                            <label className="dob-input">Date of Birth</label>
                                                                            <div className="d-sm-flex d-block">
                                                                            <div className="form-group mr-1">
                                                                                <select className="form-control" id="exampleFormControlSelect1">
                                                                                  <option>Day</option>
                                                                                  <option>1</option>
                                                                                  <option>2</option>
                                                                                  <option>3</option>
                                                                                  <option>4</option>
                                                                                  <option>5</option>
                                                                                  <option>6</option>
                                                                                  <option>7</option>
                                                                                  <option>8</option>
                                                                                  <option>9</option>
                                                                                  <option>10</option>
                                                                                  <option>11</option>
                                                                                  <option>12</option>
                                                                                  <option>13</option>
                                                                                  <option>14</option>
                                                                                  <option>15</option>
                                                                                  <option>16</option>
                                                                                  <option>17</option>
                                                                                  <option>18</option>
                                                                                  <option>19</option>
                                                                                  <option selected>20</option>
                                                                                  <option>21</option>
                                                                                  <option>22</option>
                                                                                  <option>23</option>
                                                                                  <option>24</option>
                                                                                  <option>25</option>
                                                                                  <option>26</option>
                                                                                  <option>27</option>
                                                                                  <option>28</option>
                                                                                  <option>29</option>
                                                                                  <option>30</option>
                                                                                </select>
                                                                            </div>
                                                                            <div className="form-group mr-1">
                                                                                <select className="form-control" id="month">
                                                                                    <option>Month</option>
                                                                                    <option selected>Jan</option>
                                                                                    <option>Feb</option>
                                                                                    <option>Mar</option>
                                                                                    <option>Apr</option>
                                                                                    <option>May</option>
                                                                                    <option>Jun</option>
                                                                                    <option>Jul</option>
                                                                                    <option>Aug</option>
                                                                                    <option>Sep</option>
                                                                                    <option>Oct</option>
                                                                                    <option>Nov</option>
                                                                                    <option>Dec</option>
                                                                                </select>
                                                                            </div>
                                                                            <div className="form-group mr-1">
                                                                                <select className="form-control" id="year">
                                                                                  <option>Year</option>
                                                                                  <option>2018</option>
                                                                                  <option>2017</option>
                                                                                  <option>2016</option>
                                                                                  <option>2015</option>
                                                                                  <option>2014</option>
                                                                                  <option>2013</option>
                                                                                  <option>2012</option>
                                                                                  <option>2011</option>
                                                                                  <option>2010</option>
                                                                                  <option>2009</option>
                                                                                  <option>2008</option>
                                                                                  <option>2007</option>
                                                                                  <option>2006</option>
                                                                                  <option>2005</option>
                                                                                  <option>2004</option>
                                                                                  <option>2003</option>
                                                                                  <option>2002</option>
                                                                                  <option>2001</option>
                                                                                  <option>2000</option>
                                                                                  <option>1999</option>
                                                                                  <option>1998</option>
                                                                                  <option>1997</option>
                                                                                  <option>1996</option>
                                                                                  <option>1995</option>
                                                                                  <option>1994</option>
                                                                                  <option>1993</option>
                                                                                  <option>1992</option>
                                                                                  <option>1991</option>
                                                                                  <option>1990</option>
                                                                                  <option selected>1989</option>
                                                                                  <option>1988</option>
                                                                                  <option>1987</option>
                                                                                  <option>1986</option>
                                                                                  <option>1985</option>
                                                                                  <option>1984</option>
                                                                                  <option>1983</option>
                                                                                  <option>1982</option>
                                                                                  <option>1981</option>
                                                                                  <option>1980</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>    
                                                                        </div>
                                                                    </div>
                                                                </div>   
                                                                <div className="row">
                                                                    <div className="col-sm-12">
                                                                        <div className="form-group">
                                                                            <label for="contact-number">Contact number</label>
                                                                            <div className="row">
                                                                                <div className="col-sm-2">
                                                                                    <input type="number" className="form-control mb-4" id="contact-number" placeholder="Contact Number" value="92" />
                                                                                </div>
                                                                                <div className="col-sm-10">
                                                                                    <input type="number" className="form-control mb-4" id="contact-number" placeholder="Contact Number" value="3320661463" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-sm-12">
                                                                        <div className="form-group">
                                                                            <label for="country">Country of residence</label>
                                                                            <select className="form-control" id="country">
                                                                                  <option>American Samoa</option>
                                                                                  <option>Angola</option>
                                                                                  <option selected>Algeria</option>
                                                                            </select>    
                                                                        </div>
                                                                    </div>
                                                                </div>  
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>   
                        </div>
                    <div className="modal-footer md-button">
                        <button className="btn" data-dismiss="modal"><i className="flaticon-cancel-12"></i> Discard</button>
                        <button type="button" className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
        {/* <!--  ADD DOCUMENT MODAL AREA  --> */}
        <div id="addTravelDocument" className="modal animated fadeInUp custo-fadeInUp" role="dialog">
            <div className="modal-dialog">
                {/* <!-- Modal content--> */}
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">New Travel Document</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p className="modal-text">Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin luctus sapien nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.</p>
                    </div>
                    <div className="modal-footer md-button">
                        <button className="btn" data-dismiss="modal"><i className="flaticon-cancel-12"></i> Discard</button>
                        <button type="button" className="btn btn-primary">Add</button>
                    </div>
                </div>
            </div>
        </div>
        {/* <!--  ADD LOYALTY PROGRAM MODAL AREA  --> */}
        <div id="addLoyaltyProgram" className="modal animated fadeInUp custo-fadeInUp" role="dialog">
            <div className="modal-dialog">
                {/* <!-- Modal content--> */}
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">New Loayalty Program</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 layout-spacing">
                                    <form id="general-info" className="section general-info">
                                        <div className="info">
                                            <div className="row">
                                                <div className="col-lg-11 mx-auto">
                                                    <div className="row">
                                                        <div className="col-xl-12 col-lg-12">
                                                            <div className="form">
                                                                <div className="row">
                                                                    <div className="col-sm-12">
                                                                        <div className="form-group">
                                                                            <label for="country">Loyalty program name</label>
                                                                            <select className="form-control" id="country">
                                                                                  <option>ANA Milage Club</option>
                                                                                  <option>ASKY ASKY Club</option>
                                                                                  <option selected>Aer Lingue Aerclub</option>
                                                                            </select>    
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-sm-12">
                                                                        <div className="form-group">
                                                                            <label for="email">Loyalty program number</label>
                                                                            <input type="text" className="form-control mb-4" id="email" placeholder="Loyalty program number" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                        </div>          
                    </div>
                    <div className="modal-footer md-button">
                        <button className="btn" data-dismiss="modal"><i className="flaticon-cancel-12"></i> Discard</button>
                        <button type="button" className="btn btn-primary">Add</button>
                    </div>
                </div>
            </div>
        </div>
        {/* <!--  END MODAL AREA  --> */}
    </div>
    )
}

export default Profile;