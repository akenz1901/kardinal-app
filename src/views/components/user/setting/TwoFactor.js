import React from 'react';

export default function TwoFactor(){
    return(
        <div className="widget-content widget-content-area ">
            <form>
                <div className="row" style={{padding: "0 20px"}}>
                    <div className="col-md-6">
                        <h5>Two-Factor authenication(2FA)</h5>
                        <p>Decide your prefered method of receiving one time password(OTP)</p>
                    </div>
                    <div className="col-md-6">
                        <div className="n-chk mb-4">
                            <label className="new-control new-radio new-radio-text">
                                <input type="radio" className="new-control-input" name="custom-radio-4" />
                                <span className="new-control-indicator"></span><span className="new-radio-content">Recieve OTP via email</span>
                            </label>
                        </div>
                        <div className="n-chk mb-4">
                            <label className="new-control new-radio new-radio-text">
                                <input type="radio" className="new-control-input" name="custom-radio-4" checked />
                                <span className="new-control-indicator"></span><span className="new-radio-content">Recieve OTP via authenticator app</span>
                            </label>
                        </div>
                    </div>
                </div>
            </form>
        </div>       
    )
}