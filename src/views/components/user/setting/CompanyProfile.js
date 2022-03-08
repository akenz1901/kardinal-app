import React, { useState } from 'react';
import { CompanyProfile } from '../../actions';

export default function CompanyProfileComponent(){
    const [logo, setLogo] = useState("");
    const [business_name, setBusiness_name] = useState("");
    const [business_bio, setBusiness_bio] = useState("");
    const [business_industry, setBusiness_industry] = useState("");
    const [business_address, setBusiness_address] = useState("");
    const [business_city, setBusiness_city] = useState("");
    const [business_state, setBusiness_state] = useState("");
    const [business_country, setBusiness_country] = useState("");
    const [isSubmit, setIsSubmit] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            logo: logo,
            business_name: business_name, 
            business_bio: business_bio,
            business_industry: business_industry,
            business_address: business_address,
            business_city: business_city,
            business_state: business_state,
            business_country: business_country
        };
        setIsSubmit(true);
        setTimeout(() => {
            return setIsSubmit(false);
        }, 3000)
        return CompanyProfile(data).then((res) => {
            return res;
        })
    }
    return(
        <div className="widget-content widget-content-area ">
            <form onSubmit={handleSubmit}>
                <div className="row mb-5" tyle={{padding: "0px 20px"}}>
                    <div className="col-md-6">
                        <h5>Company Logo</h5>
                        <p>Please upload a valid (500*500) PNG format of your logo</p>
                    </div>
                    <div className="col-md-6">
                        <div className="custom-file-container" data-upload-id="myFirstImage">
                            <label className="custom-file-container__custom-file" >
                                <input 
                                    type="file" 
                                    className="custom-file-container__custom-file__custom-file-input" 
                                    accept="png, jpg, jpeg" 
                                    name='logo'
                                    required
                                    value={logo}
                                    onChange={e => setLogo(e.target.value)}
                                />
                                <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
                                <span className="custom-file-container__custom-file__custom-file-control"></span>
                            </label>
                            {/* <!--<div className="custom-file-container__image-preview"></div>--> */}
                        </div>
                    </div>
                </div>
                <div className="row mb-5" tyle={{padding: "0px 20px"}}>
                    <div className="col-md-6">
                        <h5>Business Name</h5>
                        <p>You can change your name after your account has been created</p>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="business_name" 
                                placeholder="Business Name" 
                                name='business_name'
                                required
                                value={business_name}
                                onChange={e => setBusiness_name(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="row mb-5" tyle={{padding: "0px 20px"}}>
                    <div className="col-md-6">
                        <h5>Company bio</h5>
                        <p>Tell us a little about your business</p>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <textarea 
                                className="form-control p-3" 
                                id="business_bio" 
                                rows="9"
                                name='business_bio'
                                required
                                value={business_bio}
                                onChange={e => setBusiness_bio(e.target.value)}
                            >
                            </textarea>
                        </div>
                    </div>
                </div>
                
                <div className="row mb-5" tyle={{padding: "0px 20px"}}>
                    <div className="col-md-6">
                        <h5>Business Industry</h5>
                        <p>The industry closest to the one in which your company operates</p>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <select 
                                className="form-control" 
                                id="business_industry"
                                name='business_industry'
                                required
                                value={business_industry}
                                onChange={e => setBusiness_industry(e.target.value)}
                            >
                                <option>Textile</option>
                                <option>Information Technology</option>
                                <option>Media &amp; Finanace</option>
                                <option>Civil Works</option>
                                <option>Electrical</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row mb-5" tyle={{padding: "0px 20px"}}>
                    <div className="col-md-6">
                        <h5>Business address</h5>
                        <p>This is where your business is located</p>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="business_address" 
                                placeholder="Business Address" 
                                name='business_address'
                                required
                                value={business_address}
                                onChange={e => setBusiness_address(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="business_state" 
                                placeholder="State" 
                                name='business_state'
                                required
                                value={business_state}
                                onChange={e => setBusiness_state(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="business_city" 
                                placeholder="City" 
                                name='business_city'
                                required
                                value={business_city}
                                onChange={e => setBusiness_city(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="business_country" 
                                placeholder="Country" 
                                name='business_country'
                                required
                                value={business_country}
                                onChange={e => setBusiness_country(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="mb-3" style={{padding: "0 20px", textAlign: "right"}}>
                    <button onClick={e => handleSubmit(e)} type="submit" className="btn btn-primary mt-3">
                        {isSubmit ? 
                        <div class="spinner-border text-white" role="status">
                            <span className="sr-only login-sr">Loading...</span>
                        </div>: "Save profile"}
                    </button>
                </div>
            </form>
        </div>      
    )
}