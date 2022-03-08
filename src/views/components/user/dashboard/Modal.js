import React from 'react';
import './dashboard.css';

function Modal(){
    return(
        <div className="modal fade" id="fundYourAccount" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">Fund your account</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="widget-content widget-content-area justify-pill" style={{padding: "5px 10px"}}>
                            <ul className="nav nav-pills mb-3 nav-fill" id="justify-pills-tab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="justify-pills-home-tab" data-toggle="pill" href="#justify-pills-home" role="tab" aria-controls="justify-pills-home" aria-selected="true">Bank Transfer</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="justify-pills-profile-tab" data-toggle="pill" href="#justify-pills-profile" role="tab" aria-controls="justify-pills-profile" aria-selected="false">Pay with card</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="justify-pills-tabContent">
                                <div className="tab-pane fade show active" id="justify-pills-home" role="tabpanel" aria-labelledby="justify-pills-home-tab">
                                    <div className="">
                                    <h5 style={{lineHeight: "20px"}} className="card-title mb-4">Bank transfer information</h5>
                                    <p style={{fontSize: "1rem", textAlign: "left", lineHeight: "20px"}} className="card-text mb-1">Wema Bank</p>
                                    <p style={{fontSize: "1rem", textAlign: "left", lineHeight: "20px"}} className="card-text mb-1"> Kardinal Corporate Extern</p>
                                    <p style={{fontSize: "1rem", textAlign: "left", lineHeight: "20px"}} className="card-text mb-1"> 7820059143</p>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="justify-pills-profile" role="tabpanel" aria-labelledby="justify-pills-profile-tab">
                                    <p style={{fontSize: "1rem", textAlign: "left", lineHeight: "20px"}} className="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.                                                
                                    </p>
                                </div>
                            </div>
                        </div>    
                    </div>
                    <div className="modal-footer">
                        <button className="btn" data-dismiss="modal"><i className="flaticon-cancel-12"></i> Discard</button>
                        <button type="button" className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>   
        </div>                                  
    )
}

export default Modal;