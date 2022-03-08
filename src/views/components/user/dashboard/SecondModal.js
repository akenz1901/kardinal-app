import React from "react";

function SecondModal(){
    return(
        <div className="modal fade" id="fundYourAccount" tabindex="-1" role="dialog" ariaLabelledby="exampleModalLabel" ariaHidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="container mt-3">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-12">
                        <h4 style={{textAlign: "center"}} >Add money to account</h4>
                    </div>
                    <div col-md-6><button className="btn btn-outline-primary mb-2">Pay with card</button></div>
                    <div col-md-6><button className="btn btn-primary mb-2" style={{marginLeft: "20px"}}>Bank transfer</button></div>  
                    </div>
                    </div>
                    <div className="container-fluid mt-5">
                        <div className="content2">
                        <h5>Bank transfer information</h5>
                        <p>Bank name:  Wema Bank</p>
                        <p>Account name:  Kardinal Corporate Extern</p>
                        <p>Bank name:  7820059143</p>
                    </div>
                    <p>Accept transfer from customers or send to this account</p>
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

export default SecondModal;