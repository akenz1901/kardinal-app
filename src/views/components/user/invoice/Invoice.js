import React from "react";
import './index.css';

function Invoice(){
    return(
        <div className="main-container" id="container">
            <div className="overlay"></div>
            <div className="search-overlay"></div>
            {/* <!--  BEGIN CONTENT AREA  --> */}
            <div id="content" className="main-content">
                <div className="layout-px-spacing">
                    <div className="page-header">
                        <div className="page-title">
                            <h3>Invoice</h3>
                        </div> 
                    </div>
                    <div className="row layout-spacing">
                        <div className="col-lg-12">
                            <div className="widget box-shadow  widget-chart-three" style={{padding: "0px 20px"}}>
                                <div className="widget-heading" style={{padding: "20px 0px"}}>
                                    <div>
                                        <h5>Invoices</h5>
                                    </div>
                                </div>
                                <div className="widget-header">
                                    <div className="row mt-3" style={{padding: "0px 5%"}}>
                                        <div className="card component-card_1 col-md-5">     
                                            <div className="card-body">
                                                <p className="card-text">Overdue</p>
                                                <h5 className="card-title">1,373,905.50 NGN</h5>
                                                <p className="card-text">Last updated a minute ago</p>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                        </div>
                                        <div className="card component-card_1 col-md-5">  
                                            <div className="card-body">
                                                <p className="card-text">Due within next 30 days</p>
                                                <h5 className="card-title">2,938,299.50 NGN</h5>
                                                <p className="card-text">Last updated a minute ago</p>
                                            </div>
                                        </div>   
                                    </div>
                                    <form className="mt-5">
                                        <div className="form-row mb-3">
                                            <div className="form-group col-md-4"> 
                                                <select className="form-control">
                                                    <option>Select One</option>
                                                    <option value="01">January</option>
                                                    <option value="02">February</option>
                                                    <option value="03">March</option>
                                                    <option value="04">April</option>
                                                    <option value="05">May</option>
                                                    <option value="06">June</option>
                                                    <option value="07">July</option>
                                                    <option value="08">August</option>
                                                    <option value="09">September</option>
                                                    <option value="10">October</option>
                                                    <option value="11">November</option>
                                                    <option value="12">December</option>
                                                </select>  
                                            </div>
                                            <div className="form-group col-md-3">
                                                <select className="form-control">
                                                    <option>All statues</option>
                                                    <option value="01">Over due</option>
                                                    <option value="02">Not due</option>
                                                    <option value="03">Paid</option>
                                                </select>
                                            </div>
                                            <div className="input-group col-md-5">
                                                <input type="text" className="form-control" placeholder="Enter invoice#" />
                                                <div className="input-group-append">
                                                <button className="btn btn-primary" style={{marginBottom: "15px"}}>
                                                    <i className="fa fa-search"></i>
                                                </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>   
                                <div className="widget-content widget-content-area">
                                    <div className="table-responsive mb-4">
                                        <div className="row">
                                            <div className="col-xl-6 " >
                                                <ul className="nav nav-tabs  mb-3" id="lineTab" role="tablist">
                                                    <li className="nav-item">
                                                        <a className="nav-link active" id="underline-home-tab" data-toggle="tab" href="#underline-home" role="tab" aria-controls="underline-home" aria-selected="false">Unpaid</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" id="underline-profile-tab" data-toggle="tab" href="#underline-profile" role="tab" aria-controls="underline-profile" aria-selected="false">Draft</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link " id="underline-car-tab" data-toggle="tab" href="#underline-car" role="tab" aria-controls="underline-car" aria-selected="true">All invoices</a>
                                                    </li>
                                                </ul>     
                                            </div>
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
                                    <div className="row">
                                        <div className="col-sm-12 col-md-5">
                                            <div className="dataTables_info" id="DataTables_Table_1_info" role="status" aria-live="polite">Showing page 1 of 2</div>
                                        </div>
                                    <div className="col-sm-12 col-md-7">
                                        <div className="dataTables_paginate paging_simple_numbers" id="DataTables_Table_1_paginate">
                                            <ul className="pagination">
                                                <li className="paginate_button page-item previous disabled" id="DataTables_Table_1_previous">
                                                    <a href="..." aria-controls="DataTables_Table_1" data-dt-idx="0" tabindex="0" className="page-link">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-left">
                                                            <line x1="19" y1="12" x2="5" y2="12"></line>
                                                            <polyline points="12 19 5 12 12 5"></polyline>
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li className="paginate_button page-item active">
                                                    <a href="..." aria-controls="DataTables_Table_1" data-dt-idx="1" tabindex="0" className="page-link">1</a>
                                                </li>
                                                <li className="paginate_button page-item ">
                                                    <a href="..." aria-controls="DataTables_Table_1" data-dt-idx="2" tabindex="0" className="page-link">2</a>
                                                </li>
                                                <li className="paginate_button page-item next" id="DataTables_Table_1_next">
                                                    <a href="..." aria-controls="DataTables_Table_1" data-dt-idx="3" tabindex="0" className="page-link">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right">
                                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                                            <polyline points="12 5 19 12 12 19"></polyline>
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
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
    </div>
    )
}

export default Invoice;