import React from "react";
import { MultiSelect } from "../../../../utilities/multi-select-form";
import '../index.css';
import GuestTravelModal from "./GuestTravelModal";

    const travelers = [
    { value: 'chocolate', label: 'Ghulam Abbas' },
    { value: 'strawberry', label: 'M Abbas' },
    { value: 'vanilla', label: 'M Ulfat' }
    ]
  const conditions = [
    { value: 'chocolate', label: 'Rebookable' },
    { value: 'strawberry', label: 'Cancelable' }
  ]
function Trip(){
    return(
        <div className="main-container" id="container">
        
    <div className="overlay"></div>
        <div className="search-overlay"></div>
            {/* <!--  BEGIN CONTENT AREA  --> */}
            <div id="content" className="main-content">
                <div className="layout-px-spacing">
                    <div className="page-header">
                        <div className="page-title">
                            <h3>Trips</h3>
                        </div>
                    </div>
                    <div className="col-lg-12 col-12 layout-spacing">
                        <div className="widget widget-content widget-content-area border-tab widget-account-invoice-one widget-chart-three"  style={{padding: "0px 20px"}}>
                            <div className="widget-heading" style={{padding: "20px 0px"}}>
                                <div>
                                    <h5>Trips</h5>
                                </div>
                            </div>
                            <ul className="nav nav-tabs mt-3" id="border-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="border-travel-tab" data-toggle="tab" href="#border-travel" role="tab" aria-controls="border-travel" aria-selected="true">
                                        <i className="fa fa-plane"></i> 
                                        Flight</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="border-hotel-tab" data-toggle="tab" href="#border-hotel" role="tab" aria-controls="border-hotel" aria-selected="false">
                                        <i className="fa fa-hotel"></i> 
                                        Hotel</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="border-package-tab" data-toggle="tab" href="#border-package" role="tab" aria-controls="border-package" aria-selected="false">
                                    <i className="fa fa-hotel"></i> Train</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="border-car-tab" data-toggle="tab" href="#border-car" role="tab" aria-controls="border-car" aria-selected="false">
                                    <i className="fa fa-car"></i> Car</a>
                                </li>
                            </ul>
                            <div className="tab-content mb-4" id="border-tabsContent">
                                <div className="tab-pane fade show active" id="border-travel" role="tabpanel" ariaLabelledby="border-travel-tab">
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="input">Select up to 5 travelers</label>
                                            <MultiSelect option={travelers}/>
                                        </div>
                                        
                                        <div className="form-group col-md-6">
                                            <label for="input">Are you making a booking for a guest?</label>
                                            <p className="form-control"><a href="#addGuestTravelerModal" data-toggle="modal" data-target="#addGuestTravelerModal">+ Add guest traveler</a></p>
                                            <GuestTravelModal />
                                        </div>
                                    </div>
                                    <div className="form-row mb-4">
                                        <div className="form-group col-md-12">
                                            <label className="new-control new-radio radio-primary">
                                                <input type="radio" className="new-control-input" name="custom-radio-1" checked />
                                                <span className="new-control-indicator"></span>Roundtrip
                                            </label>
                                            <label className="new-control new-radio radio-primary">
                                                <input type="radio" className="new-control-input" name="custom-radio-1" />
                                                <span className="new-control-indicator"></span>Oneway
                                            </label>
                                            <label className="new-control new-radio radio-primary">
                                                <input type="radio" className="new-control-input" name="custom-radio-1" />
                                                <span className="new-control-indicator"></span>Multicity
                                            </label>
                                            <label className="new-control new-checkbox checkbox-dark">
                                                <input type="checkbox" className="new-control-input" />
                                                <span className="new-control-indicator"></span>Email Request
                                            </label>
                                        </div>
                                    </div>    
                                    <div className="form-row mb-4">
                                        <div className="form-group col-md-4">
                                            <label for="departure">Departure</label>
                                            <input type="text" className="form-control" id="departure" placeholder="Departure" />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="destination">Destination</label>
                                            <input type="text" className="form-control" id="destination" placeholder="Destination" />
                                        </div>
                                        <div className="form-group col-md-2">
                                            <label for="start_date">Start Date</label>
                                            <input type="date" className="form-control" id="start_date" />
                                        </div>
                                        <div className="form-group col-md-2">
                                            <label for="end_date">End Date</label>
                                            <input type="date" className="form-control" id="end_date" />
                                        </div>
                                    </div>
                                    <div className="form-row mb-4">
                                        <div className="form-group col-md-3">
                                            <label for="travel_className">Travel ClassName</label>
                                            <select id="travel_className" className="form-control">
                                                <option value="Economy" selected>Economy</option>
                                                <option value="Economy Plus">Economy Plus</option>
                                                <option value="Business">Business</option>
                                                <option value="First">First</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label for="travel_path">Travel Path</label>
                                            <select id="travel_path" className="form-control">
                                                <option value="Nonstop only">Nonstop only</option>
                                                <option value="Max. 1 stop" selected>Max. 1 stop</option>
                                                <option value="Max. 2 stops">Max. 2 stops</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label for="baggage">Baggage</label>
                                            <select id="baggage" className="form-control">
                                                <option>Excluded</option>
                                                <option>Included</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label for="conditions">Conditions</label>
                                            <MultiSelect option={conditions}/>
                                        </div>
                                    </div>
                                    <div className="form-row mb-4">
                                        <div className="form-group col-md-12">
                                            <button type="submit" className="btn btn-primary mt-3" style={{float: "right"}}>Find Flights</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="border-hotel" role="tabpanel" ariaLabelledby="border-hotel-tab">
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="input">Select up to 5 travelers</label>
                                            <MultiSelect option={travelers}/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="input">Are you making a booking for a guest?</label>
                                            <p className="form-control"><button data-toggle="modal" data-target="#addGuestTravelerModal">+ Add guest traveler</button></p>
                                            <GuestTravelModal />
                                        </div>
                                    </div>
                                    <div className="form-row mb-4">
                                        <div className="form-group col-md-6">
                                            <label for="input">Search By</label>
                                            <input type="text" className="form-control" id="inputf" placeholder="Search By Destination/Hotels" />
                                        </div>
                                        
                                        <div className="form-group col-md-3">
                                            <label for="input">Check-in</label>
                                            <input type="date" className="form-control" id="inputdd" placeholder="Check-in " />
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label for="input">Check-out</label>
                                            <input type="date" className="form-control" id="inputdd" placeholder=" Check-out" />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <button type="submit" className="btn btn-primary mt-3" style={{float: "right"}}>Find Hotels</button>
                                        </div>
                                    </div>
                                    <div className="form-row mb-4">
                                        <div className="form-group col-md-3">
                                            <label for="travel_className">Travel ClassName</label>
                                            <select id="travel_className" className="form-control">
                                                <option value="Economy" selected>Economy</option>
                                                <option value="Economy Plus">Economy Plus</option>
                                                <option value="Business">Business</option>
                                                <option value="First">First</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label for="travel_path">Travel Path</label>
                                            <select id="travel_path" className="form-control">
                                                <option value="Nonstop only">Nonstop only</option>
                                                <option value="Max. 1 stop" selected>Max. 1 stop</option>
                                                <option value="Max. 2 stops">Max. 2 stops</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label for="baggage">Baggage</label>
                                            <select id="baggage" className="form-control">
                                                <option>Excluded</option>
                                                <option>Included</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label for="conditions">Conditions</label>
                                            <MultiSelect option={conditions}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="border-car" role="tabpanel" ariaLabelledby="border-car-tab">
                                    <form>
                                        <div className="form-row mb-4">
                                            <div className="form-group col-md-6">
                                                <label for="input">Pickup location</label>
                                                <input type="text" className="form-control" id="pickupLocation" placeholder="Pickup location" />
                                                <label className="new-control new-checkbox checkbox-dark mt-2">
                                                    <input type="checkbox" className="new-control-input" checked />
                                                    <span className="new-control-indicator"></span>Return car to same location
                                                </label>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label for="input">Start Date</label>
                                                    <input type="date" className="form-control" id="startDate" />
                                                    <label className="new-control new-checkbox checkbox-dark mt-2">
                                                    <input type="checkbox" className="new-control-input" />
                                                    <span className="new-control-indicator"></span>Primary Driver is 25 or older
                                                </label>
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label for="input">End Date</label>
                                                    <input type="date" className="form-control" id="endDate" />
                                                </div>
                                                </div>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label for="input">Pickup time</label>
                                                <input type="time" className="form-control" id="inputf" placeholder="Pickup time" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label for="input">Drop off time</label>
                                                <input type="time" className="form-control" id="inputf" placeholder=" Drop off time" />
                                            </div>
                                            <div className="form-group col-md-12">
                                                <button type="submit" className="btn btn-primary mt-3" style={{float: "right"}}>Find Cars</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="tab-pane fade" id="border-package" role="tabpanel" ariaLabelledby="border-package-tab">
                                    <form>
                                        <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="input">Select up to 5 travelers</label>
                                            <MultiSelect option={travelers}/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="input">Are you making a booking for a guest?</label>
                                            <p className="form-control"><button data-toggle="modal" data-target="#addGuestTravelerModal">+ Add guest traveler</button></p>
                                            <GuestTravelModal />
                                        </div>
                                    </div>
                                    <div className="form-row mb-4">
                                        <div className="row col-md-12">
                                            <label className="new-control new-radio radio-primary">
                                                <input type="radio" className="new-control-input" name="custom-radio-1" checked />
                                                <span className="new-control-indicator"></span>Roundtrip
                                            </label>
                                            <label className="new-control new-radio radio-primary">
                                                <input type="radio" className="new-control-input" name="custom-radio-1" />
                                                <span className="new-control-indicator"></span>Oneway
                                            </label>
                                            <label className="new-control new-checkbox checkbox-dark">
                                                <input type="checkbox" className="new-control-input" />
                                                <span className="new-control-indicator"></span>Email Request
                                            </label>
                                        </div>
                                    </div>    
                                    <div className="form-row mb-4">
                                        <div className="form-group col-md-4">
                                            <label for="departure">Departure</label>
                                            <input type="text" className="form-control" id="departure" placeholder="Departure" />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="destination">Destination</label>
                                            <input type="text" className="form-control" id="destination" placeholder="Destination" />
                                        </div>
                                        <div className="form-group col-md-2">
                                            <label for="start_date">Start Date</label>
                                            <input type="date" className="form-control" id="start_date" />
                                        </div>
                                        <div className="form-group col-md-2">
                                            <label for="end_date">End Date</label>
                                            <input type="date" className="form-control" id="end_date" />
                                        </div>
                                    </div>
                                    <div className="form-row mb-4">
                                        <div className="form-group col-md-3">
                                            <label for="travel_className">Travel ClassName</label>
                                            <select id="travel_className" className="form-control">
                                                <option value="1st ClassName" selected>1st ClassName</option>
                                                <option value="2nd ClassName">2nd ClassName</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label for="conditions">Conditions</label>
                                            <MultiSelect option={conditions}/>
                                        </div>
                                    </div>
                                    <div className="form-row mb-4">
                                        <div className="form-group col-md-12">
                                            <button type="submit" className="btn btn-primary mt-3" style={{float: "right"}}>Show my options</button>
                                        </div>
                                    </div>
                                </form>
                            </div>     
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Trip;