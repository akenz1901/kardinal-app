import React from "react";

function TripHistory(){
    return(
        <div className="main-container" id="container">
        <div className="overlay"></div>
        <div className="search-overlay"></div>
        {/* <!--  BEGIN CONTENT AREA  --> */}
        <div id="content" className="main-content">
            <div className="layout-px-spacing">
                <div className="page-header">
                    <div className="page-title">
                        <h3>Trip History</h3>
                    </div> 
                </div>
                <div className="row layout-spacing">
                    <div className="col-lg-12">
                        <div className="statbox widget box-shadow widget-chart-three" style={{padding: "0px 20px"}}>
                            <div className="widget-heading" style={{padding: "20px 0px"}}>
                                <div>
                                    <h5>All trips</h5>
                                </div>
                            </div>    
                            <div className="widget-content widget-content-area border-top-tab">
                                <ul className="nav nav-tabs mb-3 mt-3" id="borderTop" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="border-top-all-tab" data-toggle="tab" href="#border-top-all" role="tab" aria-controls="border-top-all" aria-selected="true">All</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="border-top-upcoming-tab" data-toggle="tab" href="#border-top-upcoming" role="tab" aria-controls="border-top-upcoming" aria-selected="false">Upcoming Trips</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="border-top-current-tab" data-toggle="tab" href="#border-top-current" role="tab" aria-controls="border-top-current" aria-selected="false">Travelling Now</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="border-top-past-tab" data-toggle="tab" href="#border-top-past" role="tab" aria-controls="border-top-past" aria-selected="false">Past Trips</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="border-top-tickets-tab" data-toggle="tab" href="#border-top-tickets" role="tab" aria-controls="border-top-tickets" aria-selected="false">Open Tickets</a>
                                    </li>
                                </ul>  
                                <div className="tab-content" id="borderTopContent">
                                    <div className="tab-pane fade show active" id="border-top-all" role="tabpanel" aria-labelledby="border-top-all-tab">    
                                        <div className="dt-buttons" style={{textAlign: "right"}}> 
                                            <button className="dt-button1 buttons-copy buttons-html5 btn" tabindex="0" aria-controls="html5-extension"><span>Copy</span></button>
                                            <button className="dt-button1 buttons-csv buttons-html5 btn" tabindex="0" aria-controls="html5-extension"><span>CSV</span></button>
                                            <button className="dt-button1 buttons-excel buttons-html5 btn" tabindex="0" aria-controls="html5-extension"><span>Excel</span></button>
                                            <button className="dt-button1 buttons-print btn" tabindex="0" aria-controls="html5-extension"><span>Print</span></button>
                                        </div> 
                                        <div className="table-responsive mb-4">
                                            <table className="table style-3  table-hover">
                                                <thead>
                                                    <tr>
                                                        <th className="checkbox-column text-center"> Depart </th>
                                                        <th>Trip ID and purpose</th>
                                                        <th>Airline name</th>
                                                        <th>Travelers</th>
                                                        <th>Flight</th>
                                                        <th>Hotel</th>
                                                        <th className="text-center">Status</th>    
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="checkbox-column text-center">Jul 19 </td>
                                                        <td>3401-Sales trip to London</td>
                                                        <td>Qatar airways </td>
                                                        <td>JavierSuarez </td>
                                                        <td><i className='fas fa-plane'></i> BCN<span>&#8596;</span>STN</td>
                                                        <td><i className="fas fa-bed"></i> Grange Lancaster Hotel</td>
                                                        <td className="text-center"><span className="shadow-none badge badge-warning">Process</span></td>    
                                                    </tr>
                                                    <tr>
                                                        <td className="checkbox-column text-center">Jul 19 </td>
                                                        <td>3383-London trip to visit</td>
                                                        <td>Fly Emirates </td>
                                                        <td>JavierSuarez </td>
                                                        <td><i className='fas fa-plane'></i> BCN<span>&#8596;</span>LTN</td>
                                                        <td><i className="fas fa-bed"></i> Covent Garden Guesthouse</td>
                                                        <td className="text-center"><span className="shadow-none badge badge-warning">Process</span></td> 
                                                    </tr>
                                                    <tr>
                                                        <td className="checkbox-column text-center">Jul 24</td>
                                                        <td>3401-Sales trip to London</td>
                                                        <td>Etihad Airways</td>
                                                        <td>JavierSuarez </td>
                                                        <td><i className='fas fa-plane'></i> LHR<span>&#8596;</span>AMS</td>
                                                        <td><i className="fas fa-bed"></i> Canal House Suites a Sofit</td>
                                                        <td className="text-center"><span className="shadow-none badge badge-warning">Process</span></td>   
                                                    </tr>
                                                    <tr>
                                                        <td className="checkbox-column text-center">Aug 6 </td>
                                                        <td>3322-Sales Meeting to R</td>
                                                        <td>Etihad Airways</td>
                                                        <td>Luca Cozzolino </td>
                                                        <td><i className='fas fa-plane'></i> BCN<span>&#8596;</span>FCO</td>
                                                        <td><i className="fas fa-bed"></i>---</td>
                                                        <td className="text-center"><span className="shadow-none badge badge-warning">Process</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="checkbox-column text-center">Jul 20 </td>
                                                        <td>3266-Ben</td>
                                                        <td>Etihad Airways</td>
                                                        <td>Benjamin Magnan</td>
                                                        <td><i className='fas fa-plane'></i> BCN<span>&#8596;</span>LYS</td>
                                                        <td><i className="fas fa-bed"></i>---</td>
                                                        <td className="text-center"><span className="shadow-none badge badge-warning">Process</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="checkbox-column text-center">Jul 12 </td>
                                                        <td>3236-Ben</td>
                                                        <td>Etihad Airways</td>
                                                        <td>Benjamin Magnan</td>
                                                        <td><i className='fas fa-plane'></i> BCN<span>&#8596;</span>MAD</td>
                                                        <td><i className="fas fa-bed"></i>---</td>
                                                        <td className="text-center"><span className="shadow-none badge badge-warning">Process</span></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>      
                                    </div>
                                    <div className="tab-pane fade" id="border-top-upcoming" role="tabpanel" aria-labelledby="border-top-upcoming-tab">
                                        <div className="table-responsive mb-4">
                                            <div className="dt-buttons" style={{textAlign: "right"}}> 
                                                <button className="dt-button1 buttons-copy buttons-html5 btn" tabindex="0" aria-controls="html5-extension"><span>Copy</span></button>
                                                <button className="dt-button1 buttons-csv buttons-html5 btn" tabindex="0" aria-controls="html5-extension"><span>CSV</span></button>
                                                <button className="dt-button1 buttons-excel buttons-html5 btn" tabindex="0" aria-controls="html5-extension"><span>Excel</span></button>
                                                <button className="dt-button1 buttons-print btn" tabindex="0" aria-controls="html5-extension"><span>Print</span></button>
                                            </div>
                                            <table className="table style style-3  table-hover">
                                                <thead>
                                                    <tr>
                                                        <th className="checkbox-column text-center"> Depart </th>
                                                        <th>Trip ID and purpose</th>
                                                        <th>Airline name</th>
                                                        <th>Travelers</th>
                                                        <th>Flight</th>
                                                        <th>Hotel</th>
                                                        <th className="text-center">Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="checkbox-column text-center">Jul 19 </td>
                                                        <td>3401-Sales trip to London</td>
                                                        <td>Qatar airways </td>
                                                        <td>JavierSuarez </td>
                                                        <td><i className='fas fa-plane'></i> BCN<span>&#8596;</span>STN</td>
                                                        <td><i className="fas fa-bed"></i> Grange Lancaster Hotel</td>
                                                        <td className="text-center"><span className="shadow-none badge badge-warning">Process</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="checkbox-column text-center">Jul 19 </td>
                                                        <td>3383-London trip to visit</td>
                                                        <td>Fly Emirates </td>
                                                        <td>JavierSuarez </td>
                                                        <td><i className='fas fa-plane'></i> BCN<span>&#8596;</span>LTN</td>
                                                        <td><i className="fas fa-bed"></i> Covent Garden Guesthouse</td>
                                                        <td className="text-center"><span className="shadow-none badge badge-warning">Process</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="checkbox-column text-center">Jul 24</td>
                                                        <td>3401-Sales trip to London</td>
                                                        <td>Etihad Airways</td>
                                                        <td>JavierSuarez </td>
                                                        <td><i className='fas fa-plane'></i> LHR<span>&#8596;</span>AMS</td>
                                                        <td><i className="fas fa-bed"></i> Canal House Suites a Sofit</td>
                                                        <td className="text-center"><span className="shadow-none badge badge-warning">Process</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="checkbox-column text-center">Aug 6 </td>
                                                        <td>3322-Sales Meeting to R</td>
                                                        <td>Etihad Airways</td>
                                                        <td>Luca Cozzolino </td>
                                                        <td><i className='fas fa-plane'></i> BCN<span>&#8596;</span>FCO</td>
                                                        <td><i className="fas fa-bed"></i>---</td>
                                                        <td className="text-center"><span className="shadow-none badge badge-warning">Process</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="checkbox-column text-center">Jul 20 </td>
                                                        <td>3266-Ben</td>
                                                        <td>Etihad Airways</td>
                                                        <td>Benjamin Magnan</td>
                                                        <td><i className='fas fa-plane'></i> BCN<span>&#8596;</span>LYS</td>
                                                        <td><i className="fas fa-bed"></i>---</td>
                                                        <td className="text-center"><span className="shadow-none badge badge-warning">Process</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="checkbox-column text-center">Jul 12 </td>
                                                        <td>3236-Ben</td>
                                                        <td>Etihad Airways</td>
                                                        <td>Benjamin Magnan</td>
                                                        <td><i className='fas fa-plane'></i> BCN<span>&#8596;</span>MAD</td>
                                                        <td><i className="fas fa-bed"></i>---</td>
                                                        <td className="text-center"><span className="shadow-none badge badge-warning">Process</span></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="border-top-current" role="tabpanel" aria-labelledby="border-top-current-tab">
                                        <div className="table-responsive mb-4">
                                            <div className="dt-buttons" style={{textAlign: "right"}}> 
                                                <button className="dt-button1 buttons-copy buttons-html5 btn" tabindex="0" aria-controls="html5-extension"><span>Copy</span></button>
                                                <button className="dt-button1 buttons-csv buttons-html5 btn" tabindex="0" aria-controls="html5-extension"><span>CSV</span></button>
                                                <button className="dt-button1 buttons-excel buttons-html5 btn" tabindex="0" aria-controls="html5-extension"><span>Excel</span></button>
                                                <button className="dt-button1 buttons-print btn" tabindex="0" aria-controls="html5-extension"><span>Print</span></button>
                                            </div>
                                            <table className="table style-3  table-hover">
                                                <thead>
                                                    <tr>
                                                        <th className="checkbox-column text-center"> Depart </th>
                                                        <th>Trip ID and purpose</th>
                                                        <th>Airline name</th>
                                                        <th>Travelers</th>
                                                        <th>Flight</th>
                                                        <th>Hotel</th>
                                                        <th className="text-center">Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="checkbox-column text-center">Jul 19 </td>
                                                        <td>3401-Sales trip to London</td>
                                                        <td>Qatar airways </td>
                                                        <td>JavierSuarez </td>
                                                        <td><i className='fas fa-plane'></i> BCN<span>&#8596;</span>STN</td>
                                                        <td><i className="fas fa-bed"></i> Grange Lancaster Hotel</td>
                                                        <td className="text-center"><span className="shadow-none badge badge-warning">Process</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="checkbox-column text-center">Jul 19 </td>
                                                        <td>3383-London trip to visit</td>
                                                        <td>Fly Emirates </td>
                                                        <td>JavierSuarez </td>
                                                        <td><i className='fas fa-plane'></i> BCN<span>&#8596;</span>LTN</td>
                                                        <td><i className="fas fa-bed"></i> Covent Garden Guesthouse</td>
                                                        <td className="text-center"><span className="shadow-none badge badge-warning">Process</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="checkbox-column text-center">Jul 24</td>
                                                        <td>3401-Sales trip to London</td>
                                                        <td>Etihad Airways</td>
                                                        <td>JavierSuarez </td>
                                                        <td><i className='fas fa-plane'></i> LHR<span>&#8596;</span>AMS</td>
                                                        <td><i className="fas fa-bed"></i> Canal House Suites a Sofit</td>
                                                        <td className="text-center"><span className="shadow-none badge badge-warning">Process</span></td> 
                                                    </tr>
                                                    <tr>
                                                        <td className="checkbox-column text-center">Aug 6 </td>
                                                        <td>3322-Sales Meeting to R</td>
                                                        <td>Etihad Airways</td>
                                                        <td>Luca Cozzolino </td>
                                                        <td><i className='fas fa-plane'></i> BCN<span>&#8596;</span>FCO</td>
                                                        <td><i className="fas fa-bed"></i>---</td>
                                                        <td className="text-center"><span className="shadow-none badge badge-warning">Process</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="checkbox-column text-center">Jul 20 </td>
                                                        <td>3266-Ben</td>
                                                        <td>Etihad Airways</td>
                                                        <td>Benjamin Magnan</td>
                                                        <td><i className='fas fa-plane'></i> BCN<span>&#8596;</span>LYS</td>
                                                        <td><i className="fas fa-bed"></i>---</td>
                                                        <td className="text-center"><span className="shadow-none badge badge-warning">Process</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="checkbox-column text-center">Jul 12 </td>
                                                        <td>3236-Ben</td>
                                                        <td>Etihad Airways</td>
                                                        <td>Benjamin Magnan</td>
                                                        <td><i className='fas fa-plane'></i> BCN<span>&#8596;</span>MAD</td>
                                                        <td><i className="fas fa-bed"></i>---</td>
                                                        <td className="text-center"><span className="shadow-none badge badge-warning">Process</span></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="border-top-past" role="tabpanel" aria-labelledby="border-top-past-tab">
                                        <div className="table-responsive mb-4">
                                            <div className="dt-buttons" style={{textAlign: "right"}}> 
                                                <button className="dt-button1 buttons-copy buttons-html5 btn" tabindex="0" aria-controls="html5-extension"><span>Copy</span></button>
                                                <button className="dt-button1 buttons-csv buttons-html5 btn" tabindex="0" aria-controls="html5-extension"><span>CSV</span></button>
                                                <button className="dt-button1 buttons-excel buttons-html5 btn" tabindex="0" aria-controls="html5-extension"><span>Excel</span></button>
                                                <button className="dt-button1 buttons-print btn" tabindex="0" aria-controls="html5-extension"><span>Print</span></button>
                                            </div>
                                            <table className="table style-3  table-hover">
                                                <thead>
                                                    <tr>
                                                        <th className="checkbox-column text-center"> Depart </th>
                                                        <th>Trip ID and purpose</th>
                                                        <th>Airline name</th>
                                                        <th>Travelers</th>
                                                        <th>Flight</th>
                                                        <th>Hotel</th>
                                                        <th className="text-center">Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="checkbox-column text-center">Jul 19 </td>
                                                        <td>3401-Sales trip to London</td>
                                                        <td>Qatar airways </td>
                                                        <td>JavierSuarez </td>
                                                        <td><i className='fas fa-plane'></i> BCN<span>&#8596;</span>STN</td>
                                                        <td><i className="fas fa-bed"></i> Grange Lancaster Hotel</td>
                                                        <td className="text-center"><span className="shadow-none badge badge-warning">Process</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="checkbox-column text-center">Jul 19 </td>
                                                        <td>3383-London trip to visit</td>
                                                        <td>Fly Emirates </td>
                                                        <td>JavierSuarez </td>
                                                        <td><i className='fas fa-plane'></i> BCN<span>&#8596;</span>LTN</td>
                                                        <td><i className="fas fa-bed"></i> Covent Garden Guesthouse</td>
                                                        <td className="text-center"><span className="shadow-none badge badge-warning">Process</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="checkbox-column text-center">Jul 24</td>
                                                        <td>3401-Sales trip to London</td>
                                                        <td>Etihad Airways</td>
                                                        <td>JavierSuarez </td>
                                                        <td><i className='fas fa-plane'></i> LHR<span>&#8596;</span>AMS</td>
                                                        <td><i className="fas fa-bed"></i> Canal House Suites a Sofit</td>
                                                        <td className="text-center"><span className="shadow-none badge badge-warning">Process</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="checkbox-column text-center">Aug 6 </td>
                                                        <td>3322-Sales Meeting to R</td>
                                                        <td>Etihad Airways</td>
                                                        <td>Luca Cozzolino </td>
                                                        <td><i className='fas fa-plane'></i> BCN<span>&#8596;</span>FCO</td>
                                                        <td><i className="fas fa-bed"></i>---</td>
                                                        <td className="text-center"><span className="shadow-none badge badge-warning">Process</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="checkbox-column text-center">Jul 20 </td>
                                                        <td>3266-Ben</td>
                                                        <td>Etihad Airways</td>
                                                        <td>Benjamin Magnan</td>
                                                        <td><i className='fas fa-plane'></i> BCN<span>&#8596;</span>LYS</td>
                                                        <td><i className="fas fa-bed"></i>---</td>
                                                        <td className="text-center"><span className="shadow-none badge badge-warning">Process</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="checkbox-column text-center">Jul 12 </td>
                                                        <td>3236-Ben</td>
                                                        <td>Etihad Airways</td>
                                                        <td>Benjamin Magnan</td>
                                                        <td><i className='fas fa-plane'></i> BCN<span>&#8596;</span>MAD</td>
                                                        <td><i className="fas fa-bed"></i>---</td>
                                                        <td className="text-center"><span className="shadow-none badge badge-warning">Process</span></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="border-top-tickets" role="tabpanel" aria-labelledby="border-top-tickets-tab">
                                        <div className="table-responsive mb-4">
                                            <div className="dt-buttons" style={{textAlign: "right"}}> 
                                                <button className="dt-button1 buttons-copy buttons-html5 btn" tabindex="0" aria-controls="html5-extension"><span>Copy</span></button>
                                                <button className="dt-button1 buttons-csv buttons-html5 btn" tabindex="0" aria-controls="html5-extension"><span>CSV</span></button>
                                                <button className="dt-button1 buttons-excel buttons-html5 btn" tabindex="0" aria-controls="html5-extension"><span>Excel</span></button>
                                                <button className="dt-button1 buttons-print btn" tabindex="0" aria-controls="html5-extension"><span>Print</span></button>
                                            </div>
                                            <table className="table style-3  table-hover">
                                                <thead>
                                                    <tr>
                                                        <th className="checkbox-column text-center"> Depart </th>
                                                        <th>Trip ID and purpose</th>
                                                        <th>Airline name</th>
                                                        <th>Travelers</th>
                                                        <th>Flight</th>
                                                        <th>Hotel</th>
                                                        <th className="text-center">Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="checkbox-column text-center">Jul 19 </td>
                                                        <td>3401-Sales trip to London</td>
                                                        <td>Qatar airways </td>
                                                        <td>JavierSuarez </td>
                                                        <td><i className='fas fa-plane'></i> BCN<span>&#8596;</span>STN</td>
                                                        <td><i className="fas fa-bed"></i> Grange Lancaster Hotel</td>
                                                        <td className="text-center"><span className="shadow-none badge badge-warning">Process</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="checkbox-column text-center">Jul 19 </td>
                                                        <td>3383-London trip to visit</td>
                                                        <td>Fly Emirates </td>
                                                        <td>JavierSuarez </td>
                                                        <td><i className='fas fa-plane'></i> BCN<span>&#8596;</span>LTN</td>
                                                        <td><i className="fas fa-bed"></i> Covent Garden Guesthouse</td>
                                                        <td className="text-center"><span className="shadow-none badge badge-warning">Process</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="checkbox-column text-center">Jul 24</td>
                                                        <td>3401-Sales trip to London</td>
                                                        <td>Etihad Airways</td>
                                                        <td>JavierSuarez </td>
                                                        <td><i className='fas fa-plane'></i> LHR<span>&#8596;</span>AMS</td>
                                                        <td><i className="fas fa-bed"></i> Canal House Suites a Sofit</td>
                                                        <td className="text-center"><span className="shadow-none badge badge-warning">Process</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="checkbox-column text-center">Aug 6 </td>
                                                        <td>3322-Sales Meeting to R</td>
                                                        <td>Etihad Airways</td>
                                                        <td>Luca Cozzolino </td>
                                                        <td><i className='fas fa-plane'></i> BCN<span>&#8596;</span>FCO</td>
                                                        <td><i className="fas fa-bed"></i>---</td>
                                                        <td className="text-center"><span className="shadow-none badge badge-warning">Process</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="checkbox-column text-center">Jul 20 </td>
                                                        <td>3266-Ben</td>
                                                        <td>Etihad Airways</td>
                                                        <td>Benjamin Magnan</td>
                                                        <td><i className='fas fa-plane'></i> BCN<span>&#8596;</span>LYS</td>
                                                        <td><i className="fas fa-bed"></i>---</td>
                                                        <td className="text-center"><span className="shadow-none badge badge-warning">Process</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="checkbox-column text-center">Jul 12 </td>
                                                        <td>3236-Ben</td>
                                                        <td>Etihad Airways</td>
                                                        <td>Benjamin Magnan</td>
                                                        <td><i className='fas fa-plane'></i> BCN<span>&#8596;</span>MAD</td>
                                                        <td><i className="fas fa-bed"></i>---</td>
                                                        <td className="text-center"><span className="shadow-none badge badge-warning">Process</span></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default TripHistory;