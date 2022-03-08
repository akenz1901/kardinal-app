import React from "react";
import ReactApexChart from 'react-apexcharts';
import { uniqueVisitorsOptions1 } from '../../../../utilities/scripts';
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

function WalletTransactions(){
    return(
        <div >
                <div style={{marginTop: "20px"}} className="row layout-spacing">
                    <div className="col-lg-12">
                        <div className="statbox widget box-shadow widget-chart-three" style={{padding: "0px 20px"}}>
                            <div className="widget-heading" style={{padding: "20px 0px"}}>
                                <div>
                                <select className="form-control">
                                    <option>Wallet History</option>
                                    <option value="01">Wallet Transactions</option>
                                </select>
                                </div>
                                <div className="toggle-switch">
                                    <button type="button" className="btn btn-primary mb-2 mr-2" data-toggle="modal" href="#fundYourAccount">
                                        Make Transfer
                                    </button>
                                </div>
                            </div>    
                            <div className="widget-content widget-content-area border-top-tab">
                                <div style={{justifyContent: "space-between"}} className="row">
                                <ul className="nav nav-tabs mb-3 mt-3" id="borderTop" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="border-top-all-tab" data-toggle="tab" href="#border-top-all" role="tab" aria-controls="border-top-all" aria-selected="true">All</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="border-top-upcoming-tab" data-toggle="tab" href="#border-top-upcoming" role="tab" aria-controls="border-top-upcoming" aria-selected="false">Balance</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="border-top-current-tab" data-toggle="tab" href="#border-top-current" role="tab" aria-controls="border-top-current" aria-selected="false">Transfer</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="border-top-past-tab" data-toggle="tab" href="#border-top-past" role="tab" aria-controls="border-top-past" aria-selected="false">Bills</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="border-top-tickets-tab" data-toggle="tab" href="#border-top-tickets" role="tab" aria-controls="border-top-tickets" aria-selected="false">Open Tickets</a>
                                    </li>
                                    
                                </ul>
                                <li className="nav-item">
                                    <Div className="search">
                                        <BiSearch />
                                        <input type="text" placeholder="Search" />
                                    </Div>
                                    </li>
                                </div>  
                                <div className="tab-content" id="borderTopContent">
                                    <div className="tab-pane fade show active" id="border-top-all" role="tabpanel" aria-labelledby="border-top-all-tab">    
                                        <div className="dt-buttons" style={{textAlign: "right"}}> 
                                            <button className="dt-button1 buttons-copy buttons-html5 btn" tabindex="0" aria-controls="html5-extension"><span>Copy</span></button>
                                            <button className="dt-button1 buttons-csv buttons-html5 btn" tabindex="0" aria-controls="html5-extension"><span>CSV</span></button>
                                            <button className="dt-button1 buttons-excel buttons-html5 btn" tabindex="0" aria-controls="html5-extension"><span>Excel</span></button>
                                            <button className="dt-button1 buttons-print btn" tabindex="0" aria-controls="html5-extension"><span>Print</span></button>
                                        </div> 
                                        <div className="table-responsive mb-4">
                                        <Section>
                                            <div className="sales">
                                                <div className="sales__details">
                                                    <div>
                                                        <h6>All Transactions</h6>
                                                    </div>
                                                    <div>
                                                        <h6>Past 30 Days</h6>
                                                    </div>
                                                </div>
                                                    <ReactApexChart 
                                                        options={uniqueVisitorsOptions1}
                                                        series={uniqueVisitorsOptions1.series}t
                                                        type="bar"
                                                        height={400}
                                                    />
                                            </div>
                                        </Section>
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
                                            <button className="dt-button1 buttons-copy buttons-html5 btn" tabindex="0" aria-controls="html5-extension"><span>Transfer</span></button>
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
                                            <button className="dt-button1 buttons-copy buttons-html5 btn" tabindex="0" aria-controls="html5-extension"><span>Pay Bills</span></button> 
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
                                                    <th className="text-center"> Date</th>
                                                    <th>Due</th>
                                                    <th>Number</th>
                                                    <th>Amount due</th>
                                                    <th className="checkbox-column  text-center">Status</th>
                                                    <th className="text-center">Action</th>         
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="checkbox-column text-center">2021-07-31 </td>
                                                    <td>11 days ago</td>
                                                    <td>0001112</td>
                                                    <td>6624,405.00 NGN</td>
                                                    <td className="text-center"><span className="shadow-none badge badge-danger">Overdue</span></td>
                                                    <td className="text-center">
                                                        <div className="btn-group">
                                                            <button type="button" className="btn btn-dark btn-sm">Open</button>
                                                            <button type="button" className="btn btn-dark btn-sm dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-reference="parent">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-down">
                                                                    <polyline points="6 9 12 15 18 9"></polyline>
                                                                </svg>
                                                            </button>
                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuReference1" style={{willChange: "transform"}}>
                                                                <a className="dropdown-item" href="...">Download</a>
                                                                <a className="dropdown-item" href="...">Pay</a>     
                                                            </div>
                                                        </div>     
                                                    </td>        
                                                </tr>
                                                <tr>
                                                    <td className="checkbox-column text-center">2021-07-31 </td>
                                                    <td>11 days ago</td>
                                                    <td>0001112</td>
                                                    <td>6624,405.00 NGN</td>
                                                    <td className="text-center"><span className="shadow-none badge badge-danger">Overdue</span></td>
                                                    <td className="text-center">
                                                        <div className="btn-group">
                                                            <button type="button" className="btn btn-dark btn-sm">Open</button>
                                                            <button type="button" className="btn btn-dark btn-sm dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-reference="parent">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-down">
                                                                    <polyline points="6 9 12 15 18 9"></polyline>
                                                                </svg>
                                                            </button>
                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuReference2" >
                                                            <a className="dropdown-item" href="...">Download</a>
                                                            <a className="dropdown-item" href="...">Pay</a>     
                                                            </div>
                                                        </div>     
                                                    </td>  
                                                </tr>
                                                <tr>
                                                    <td className="checkbox-column text-center">2021-07-31 </td>
                                                    <td>11 days ago</td>
                                                    <td>0001112</td>
                                                    <td>6624,405.00 NGN</td>
                                                    <td className="text-center"><span className="shadow-none badge badge-primary">Sent</span></td>
                                                    <td className="text-center">
                                                        <div className="btn-group">
                                                            <button type="button" className="btn btn-dark btn-sm">Open</button>
                                                                <button type="button" className="btn btn-dark btn-sm dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-reference="parent">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                                                </button>
                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuReference3" style={{willChange: "transform"}}>
                                                                <a className="dropdown-item" href="...">Download</a>
                                                                <a className="dropdown-item" href="...">Pay</a>     
                                                            </div>
                                                        </div>     
                                                    </td> 
                                                </tr>
                                                <tr>
                                                    <td className="checkbox-column text-center">2021-07-31 </td>
                                                    <td>11 days ago</td>
                                                    <td>0001112</td>
                                                    <td>6624,405.00 NGN</td>
                                                    <td className="text-center"><span className="shadow-none badge badge-primary">Sent</span></td>
                                                    <td className="text-center">
                                                        <div className="btn-group">
                                                            <button type="button" className="btn btn-dark btn-sm">Open</button>
                                                            <button type="button" className="btn btn-dark btn-sm dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-reference="parent">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-down">
                                                                    <polyline points="6 9 12 15 18 9"></polyline>
                                                                </svg>
                                                            </button>
                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuReference4" style={{willChange: "transform"}}>
                                                                <a className="dropdown-item" href="...">Download</a>
                                                                <a className="dropdown-item" href="...">Pay</a>     
                                                            </div>
                                                        </div>     
                                                    </td> 
                                                </tr>
                                                <tr>
                                                    <td className="checkbox-column text-center">2021-07-31 </td>
                                                    <td>11 days ago</td>
                                                    <td>0001112</td>
                                                    <td>6624,405.00 NGN</td>
                                                    <td className="text-center"><span className="shadow-none badge badge-warning">Viewed</span></td>
                                                    <td className="text-center">
                                                        <div className="btn-group">
                                                            <button type="button" className="btn btn-dark btn-sm">Open</button>
                                                            <button type="button" className="btn btn-dark btn-sm dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-reference="parent">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-down">
                                                                <polyline points="6 9 12 15 18 9"></polyline>
                                                            </svg>
                                                            </button>
                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuReference5" style={{willChange: "transform"}}>
                                                                <a className="dropdown-item" href="...">Download</a>
                                                                <a className="dropdown-item" href="...">Pay</a>     
                                                            </div>
                                                        </div>     
                                                    </td>  
                                                </tr>
                                                <tr>
                                                    <td className="checkbox-column text-center">2021-07-31 </td>
                                                    <td>11 days ago</td>
                                                    <td>0001112</td>
                                                    <td>6624,405.00 NGN</td>
                                                    <td className="text-center"><span className="shadow-none badge badge-warning">Viewed</span></td>
                                                    <td className="text-center">
                                                        <div className="btn-group">
                                                            <button type="button" className="btn btn-dark btn-sm">Open</button>
                                                            <button type="button" className="btn btn-dark btn-sm dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-reference="parent">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-down">
                                                                    <polyline points="6 9 12 15 18 9"></polyline>
                                                                </svg>
                                                            </button>
                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuReference6" style={{willChange: "transform"}}>
                                                                <a className="dropdown-item" href="...">Download</a>
                                                                <a className="dropdown-item" href="...">Pay</a>     
                                                            </div>
                                                        </div>     
                                                    </td>  
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
    )
}

const Section = styled.section`
.sales{
    color: black;
    width: 100%;
    .sales__details {
        display: flex;
        justify-content: space-between;
        margin: 1rem 0;
        div{
            display: flex;
            gap: 1rem;
            h5{
                color: gray;
            }
        }
    }
    .sales__graph{
        height: 10rem;
        width: 100%;
        .recharts-default-tooltip {
            background-color: black !important;
            border-color: black !important;
            color: white !important;
        }
    }
}

`;
const Div = styled.div`
color: black;
background-color: white;
display: flex;
align-items: center;
gap: 1rem;
border-radius: 1.5rem;
padding: 6px;
box-shadow: 0px 5px 20px 0 rgb(0 0 0 / 10%);
svg{
    color: grey;
}
input{
    background-color: transparent;
    border: none;
    color: grey;
    &:focus{
        outline: none;
    }
    &::placeholder {
        color: grey;
    }
}
`;

export default WalletTransactions