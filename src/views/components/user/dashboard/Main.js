import React, {useState} from 'react';
import Modal from './Modal';
import ReactApexChart from 'react-apexcharts';
import { optionVisitors } from '../../../../utilities/scripts';
import api from '../../actions/apiServices';

function Main(){
    const [credit, setCredit] = useState(null)
    const [wallet, setWallet] = useState(null)
    // const [spending, setSummary] = useState(null)
    React.useEffect(() => {
        api
        .fetch('/api/finance/credit_balance/', {},true)
        .then(response =>{
            setCredit(response.data[0])
            console.log(credit.balance)
            
        })
        .catch(err => {console.log(err)}),
        api
        .fetch('/api/finance/fundwallet/', {},true)
        .then(response =>{
            setWallet(response.data[0])
            console.log(wallet.balance)
        }).catch(err => {console.log(err)}),

        // api
        // .fetch('/api/finance/transactions_summary', {},true)
        // .then(response =>{
        //     setSummary(response.data[0])
        // }).catch(err => {console.log(err)})
        // , 
        []
    })

    return(
        <>
        <div className="main-container" id="container">
            <div className="overlay"></div>
            <div className="search-overlay"></div>         
                {/* BEGIN CONTENT PART */}
                <div id="content" className="main-content">
                    <div className="layout-px-spacing">
                        <div className="page-header">
                            <div className="page-title">
                                <h3>Dashboard</h3>
                            </div>
                            <div className="toggle-switch">
                                <button type="button" className="btn btn-primary mb-2 mr-2" data-toggle="modal" href="#fundYourAccount">
                                    Fund your account
                                </button>
                            </div> 
                            {/* <!-- Modal --> */}
                            <Modal />
                        {/* <!-- Modal End--> */}
                        </div>
                        <div className="row layout-top-spacing">
                            <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                                <div className="widget widget-chart-three">
                                    <div className="widget-heading">
                                        <div className="">
                                            <h5 className="">Trip activities</h5>
                                        </div>
                                        <div className="dropdown  custom-dropdown">
                                            <a className="dropdown-toggle" href="..." role="button" id="uniqueVisitors" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" 
                                                stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1">
                                                    </circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="uniqueVisitors">
                                                <a className="dropdown-item" href="...">View</a>
                                                <a className="dropdown-item" href="...">Update</a>
                                                <a className="dropdown-item" href="...">Download</a>
                                                {/* javascript:void(0) */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-content" style={{padding: "10px 20px"}}>
                                        <div className="tabs tab-content">
                                            <div className="tabcontent"> 
                                                <ReactApexChart
                                                    options={optionVisitors}
                                                    series={optionVisitors.series}
                                                    type="line"
                                                    height={380}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing sales">
                                <div className="widget widget-account-invoice-one widget-chart-three"  style={{padding: "0px 20px"}}>
                                    <div className="widget-heading" style={{padding: "20px 0px"}}>
                                        <div>
                                            <h5>Transactions</h5>
                                        </div>
                                    </div>
                                    <div className="widget-content">
                                        <div className="invoice-box"> 
                                            <div className='row balances'>
                                            <div className="acc-total-info">
                                                <p className="acc-amount">NGN{credit != null ? credit.balance : ""}</p>

                                                <h5>Credit Balance</h5>
                                                </div>
                                        
                                            
                                            <div className="acc-total-info">
                                                <p className="acc-amount">NGN{wallet != null ? wallet.balance:""}</p>
                                                <h5>Wallet Balance</h5>
                                            </div>
                                            </div>
                                            <div className="inv-detail" style={{borderBottom:"none"}}>                                        
                                                <div className="info-detail-1">
                                                    <p style={{fontWeight: "bold"}}>Total Spend</p>
                                                    <p style={{fontWeight: "bold"}}>NGN4,508.77</p>
                                                    {/* <p style={{fontWeight: "bold"}}>NGN{spending.Total_Spend != null ? spending.Total_Spend: ''}</p> */}
                                                </div>
                                                <div className="info-detail-2">
                                                    <p>Travel Spend</p>
                                                    <p>NGN8760.00</p>
                                                </div>
                                                <div className="info-detail-2">
                                                    <p>Car Spend</p>
                                                    <p>NGN1345.00</p>
                                                </div>
                                                {/* <div className="info-detail-2">
                                                    <p>Mileage</p>
                                                    <p>NGN4,321.25</p>
                                                </div> */}
                                                <div className="info-detail-2">
                                                    <p>Hotel Spend</p>
                                                    <p>NGN1345.82</p>
                                                </div>
                                                <div className="info-detail-2">
                                                    <p>Bonus Points</p>
                                                    <p>10</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 layout-spacing"> 
                                <div className="widget widget-account-invoice-one widget-chart-three">
                                    <div className="widget-heading">
                                        <div>
                                            <h5>On Hold Booking</h5>
                                        </div>
                                    </div>
                                    <div className="widget-content widget-content-area">
                                            <div className="table-responsive">
                                                <table className="table mb-4">
                                                    <thead>
                                                        <tr>
                                                            <th>Booking Ref</th>
                                                            <th>Lead Pax</th>
                                                            <th>Destinations</th>
                                                            <th>Cancellation Deadline</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><span className="">FL1234</span></td>
                                                            <td>Mr George Angel</td>
                                                            <td>Delhi</td>
                                                            <td>20-Feb-2018</td>
                                                        </tr>
                                                        <tr>
                                                            <td><span className="">FL1233</span></td>
                                                            <td>Mr George</td>
                                                            <td>Mumbai</td>
                                                            <td>23-jan-2017</td>
                                                        </tr>
                                                        <tr>
                                                            <td><span className="">FL1232</span></td>
                                                            <td>Mr Arpit Garg </td>
                                                            <td>Dubai</td>
                                                            <td>08-jan-2017</td>  
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing trip-summary">
                                <div className="widget widget-three widget-chart-three" style={{padding: "0px"}}>
                                    <div className="widget-heading"  style={{padding: "20px"}}>
                                        <h5 className="">Trip Summary</h5>
                                    </div>
                                    <div className="widget-content"   style={{padding: "30px 20px"}}>
                                        <div className="order-summary">
                                            <div className="summary-list">
                                                <div className="w-icon">
                                                    <i className="fa fa-plane"></i>
                                                </div>
                                                <div className="w-summary-details">      
                                                    <div className="w-summary-info">
                                                        <h6>Flights</h6>
                                                        <p className="summary-count">NGN92,600</p>
                                                    </div>
                                                    <div className="w-summary-stats">
                                                        <div className="progress">
                                                            <div className="progress-bar bg-gradient-secondary" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="summary-list">
                                                <div className="w-icon">
                                                    <i className="fas fa-car-alt"></i>    
                                                </div>
                                                <div className="w-summary-details"> 
                                                    <div className="w-summary-info">
                                                        <h6>Cars</h6>
                                                        <p className="summary-count">NGN37,515</p>
                                                    </div>
                                                    <div className="w-summary-stats">
                                                        <div className="progress">
                                                            <div className="progress-bar bg-gradient-success" role="progressbar" style={{width: "65%"}}></div>
                                                            {/* ariaNalueNow="65", ariaValueMin="0", ariaValueMax="100" */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="summary-list">
                                                <div className="w-icon">
                                                    <i className="fas fa-hotel"></i>    
                                                </div>
                                                <div className="w-summary-details">    
                                                    <div className="w-summary-info">
                                                        <h6>Hotels</h6>
                                                        <p className="summary-count">NGN55,085</p>
                                                    </div>
                                                    <div className="w-summary-stats">
                                                        <div className="progress">
                                                            <div className="progress-bar bg-gradient-warning" role="progressbar" style={{width: "80%"}}></div>
                                                            {/* ariaValuenow="80" aria-valuemin="0" aria-valuemax="100" */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>   
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">   
                                <div className="widget  widget-account-invoice-one widget-chart-three">
                                    <div className="widget-heading">
                                        <div>
                                            <h5>History</h5>
                                        </div>
                                    </div>
                                    <div className="widget-content widget-content-area">
                                            <div className="table-responsive">
                                                <table className="table mb-4">
                                                <thead>
                                                        <tr>
                                                            <th><div className="th-content">S/N</div></th>
                                                            <th><div className="th-content">Date</div></th>
                                                            <th><div className="th-content">Name of Passenger</div></th>
                                                            <th><div className="th-content">Booking ID</div></th>
                                                            <th><div className="th-content">Request Type</div></th>
                                                            <th><div className="th-content">Status</div></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>05-Aug-2021</td>
                                                            <td> Lilian Bach</td>
                                                            <td>VM342</td>
                                                            <td>Flight</td>
                                                            <td><span className="badge badge-success">Completed</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td><span className="">05-Aug-2021</span></td>
                                                            <td>Austin Malone</td>
                                                            <td>QO1345</td>
                                                            <td>Hotel</td>
                                                            <td><span className="badge badge-warning">Processed</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td><span className="">05-Aug-2021</span></td>
                                                            <td>Cardi Notsob</td>
                                                            <td>N2-121</td>
                                                            <td>Car</td>
                                                            <td><span className="badge badge-info">On Hold</span></td>        
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
                    {/* END CONTENT PART */}
                </div>
                </>
    )
}

export default Main;