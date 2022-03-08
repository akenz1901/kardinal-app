import React, { useState } from 'react';
import { AddTraveler } from '../../actions';

export function TravelersModal(){
    const [title, setTitle] = useState("");
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [email, setEmail] = useState("");
    const [phone_number, setPhone_number] = useState("");
    const [gender, setGender] = useState("");
    const [date_of_birth, setDate_of_birth] = useState("");
    const [nationality, setNationality] = useState("");
    const [identification_expiry, setIdentification_expiry] = useState("");
    const [identification_issue, setIdentification_issue] = useState("");
    const [identification_country, setIdentification_country] = useState("");
    const [means_of_identification, setMeans_of_identification] = useState("");
    const [identification_number, setIdentification_number] = useState("");
    const [passenger_type, setPassenger_type] = useState("");
    const [isSubmit, setIsSubmit] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            title: title,
            first_name: first_name,
            last_name: last_name,
            email: email,
            phone_number: phone_number,
            gender: gender,
            date_of_birth: date_of_birth,
            nationality: nationality,
            identification_expiry: identification_expiry,
            identification_issue: identification_issue,
            identification_country: identification_country,
            means_of_identification: means_of_identification,
            identification_number: identification_number,
            passenger_type: passenger_type
          };
        setIsSubmit(true);
        setTimeout(() => {
            return setIsSubmit(false);
        }, 3000)
        return AddTraveler(data).then((res) => {
            return res;
        })
    }
    return(
        <div className="modal fade" id="addNewTraveler" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <form onSubmit={handleSubmit} className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="addNewTraveler">New Traveler</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </div>
                    <div className="modal-body">
                    <div className="form-group mb-4">
                            <label htmlFor="title">Title</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="title" 
                                placeholder="Title" 
                                name='title'
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="first_name">First name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="first_name" 
                                placeholder="First Name" 
                                name='first_name'
                                value={first_name}
                                onChange={e => setFirst_name(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="last_name">Last name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="last_name" 
                                placeholder="Last Name" 
                                name='last_name'
                                value={last_name}
                                onChange={e => setLast_name(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="date_of_birth">Date of birth</label>
                            <input 
                                type="date" 
                                className="form-control" 
                                id="date_of_birth" 
                                placeholder="Date Of Birth" 
                                name='date_of_birth'
                                value={date_of_birth}
                                onChange={e => setDate_of_birth(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="email" 
                                placeholder="Last Name" 
                                name='email'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="phone_number">Phone Number</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="phone_number" 
                                placeholder="Phone number" 
                                name='phone_number'
                                value={phone_number}
                                onChange={e => setPhone_number(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="gender">Gender</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="gender" 
                                placeholder="Gender" 
                                name='gender'
                                value={gender}
                                onChange={e => setGender(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="nationality">Nationality</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="nationality" 
                                placeholder="Nationality" 
                                name='nationality'
                                value={nationality}
                                onChange={e => setNationality(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="identification_expiry">Identification expiry</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="identification_expiry" 
                                placeholder="Identification expiry" 
                                name='identification_expiry'
                                value={identification_expiry}
                                onChange={e => setIdentification_expiry(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="identification_issue">Identification issue</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="identification_issue" 
                                placeholder="Identification issue" 
                                name='identification_issue'
                                value={identification_issue}
                                onChange={e => setIdentification_issue(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="identification_country">Identification country</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="identification_country" 
                                placeholder="Identification country" 
                                name='identification_country'
                                value={identification_country}
                                onChange={e => setIdentification_country(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="means_of_identification">Means of identification</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="means_of_identification" 
                                placeholder="Means of identification" 
                                name='means_of_identification'
                                value={means_of_identification}
                                onChange={e => setMeans_of_identification(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="identification_number">Identification number</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="identification_number" 
                                placeholder="Identification number" 
                                name='identification_number'
                                value={identification_number}
                                onChange={e => setIdentification_number(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="passenger_type">Passenger type</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="passenger_type" 
                                placeholder="Passenger type" 
                                name='passenger_type'
                                value={passenger_type}
                                onChange={e => setPassenger_type(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn" data-dismiss="modal"><i className="flaticon-cancel-12"></i> Cancel</button>
                        <button onClick={e => handleSubmit(e)} type="button" className="btn btn-primary">
                        {isSubmit ? 
                        <div class="spinner-border text-white" role="status">
                            <span className="sr-only login-sr">Loading...</span>
                        </div>: "Add"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default function TravelersProfile(){
    return(
        <div className="widget-content widget-content-area ">
            <div className="row mb-5" tyle={{padding: "0px 20px"}}>
                <div className="col-md-6">
                    <h5>Travelers List</h5>
                    <p>Click to view list of travellers</p>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-lg-6">
                            {/* <!--<p className="mb-4"><code>To view all</code></p>--> */}
                            <a href="..." className="btn btn-primary mb-2">View all</a>
                        </div>
                        <div className="col-lg-6">
                            {/* <!--<p className="mb-4"><code>To add new travlers</code></p>--> */}
                            <button href="..." className="btn btn-outline-primary mb-2"  data-toggle="modal" data-target="#addNewTraveler">Add Traveler</button>
                            <TravelersModal />
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}