import React from "react";

function Main(){
    return(
        <div className="main-container" id="container">
            <div className="overlay"></div>
            <div className="search-overlay"></div>
            {/* <!--  BEGIN CONTENT AREA  --> */}
            <div id="content" className="main-content">
                <div className="layout-px-spacing">

                    <div className="page-header">
                        <nav className="breadcrumb-one" aria-label="breadcrumb">
                            <div className="title">
                                <h3>Kardinal</h3>
                            </div>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href={{javascript:void(0)}}>Satement of Accounts</a></li>
                            </ol>
                        </nav>
                    </div>
                    <div className="row layout-spacing">
                        <div className="col-lg-12">
                            <div className="statbox widget box box-shadow">
                                <div className="widget-header">
                                    <form className="mt-3">
                                        <div className="form-row mb-4">
                                            <div className="form-group col-md-4">
                                                <label for="input"> Date From</label>
                                                <input type="date" className="form-control" id="inputf" placeholder="Select date" />  
                                            </div>         
                                            <div className="form-group col-md-4">
                                                <label for="input">Date To</label>
                                                <input type="date" className="form-control" id="inputt" placeholder="Select date" />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label for="input">Channel</label>
                                                <select id="inputd" className="form-control">
                                                    <option selected>All</option>
                                                    <option value="01">1</option>
                                                    <option value="02">2</option>
                                                    <option value="03">3</option>
                                                    <option value="04">4</option>
                                                    <option value="05">5</option>
                                                    <option value="06">6</option>
                                                    <option value="07">7</option>
                                                    <option value="08">8</option>
                                                    <option value="09">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                </select>
                                            </div>
                                        </div>
                                        <a className="dot" href="default.asp" target="_blank">View Report</a>   
                                    </form>  
                                    <div className="row">
                                        <div className="col-xl-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center">
                                            <h4>Satement of Accounts</h4>
                                        </div>
                                        <div className="col-xl-6 " id="#html5-extension">
                                            <div className="dt-buttons"> 
                                            <button className="dt-button buttons-copy buttons-html5 btn" tabindex="0" aria-controls="html5-extension"><span>Copy</span></button>
                                            <button className="dt-button buttons-csv buttons-html5 btn" tabindex="0" aria-controls="html5-extension"><span>CSV</span></button>
                                            <button className="dt-button buttons-excel buttons-html5 btn" tabindex="0" aria-controls="html5-extension"><span>Excel</span></button>
                                            <button className="dt-button buttons-print btn" tabindex="0" aria-controls="html5-extension"><span>Print</span></button>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 d-flex justify-content-end"><div id="style-2_filter" className="dataTables_filter"><label>    
                                            <input type="search" className="form-control" placeholder="Search..." aria-controls="style-2" /></label></div></div>  
                                        </div>
                                </div>
                                <div className="widget-content widget-content-area">
                                    <div className="table-responsive mb-4"> 
                                        <table className="table style-3  table-hover">
                                            <thead>
                                                <tr>
                                                    <th className="checkbox-column text-center">Date</th>
                                                    <th>Description</th>
                                                    <th>Date</th>
                                                    <th>Debit</th>
                                                    <th>Credit</th>
                                                    <th className="text-center">Running Balance</th>   
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="checkbox-column text-center">May 24,2020</td>
                                                    <td></td>
                                                    <td>24/05/2020<br/>12:00:00AM</td>
                                                    <td>USD 617.13</td>
                                                    <td></td>
                                                    <td className="text-center">USD -617.13</td> 
                                                </tr>
                                                <tr>
                                                    <td className="checkbox-column text-center">Jul 17,2020</td>
                                                    <td></td>
                                                    <td>17/07/2020<br/>12:00:00AM</td>
                                                    <td>USD 67.087029 </td>
                                                    <td></td>
                                                    <td className="text-center">USD -67.087029</td>
                                                </tr>
                                                <tr>
                                                    <td className="checkbox-column text-center">Sep 09,2020</td>
                                                    <td></td>
                                                    <td>17/07/2020<br/>12:00:00AM</td>
                                                    <td>USD 67.087029 </td>
                                                    <td></td>
                                                    <td className="text-center">USD -67.087029</td>  
                                                </tr>
                                                <tr>
                                                    <td className="checkbox-column text-center">Jul 17,2020</td>
                                                    <td></td>
                                                    <td>17/07/2020<br/>12:00:00AM</td>
                                                    <td>USD 67.087029 </td>
                                                    <td></td>
                                                    <td className="text-center">USD -67.087029</td>
                                                
                                                </tr>
                                                <tr>
                                                    <td className="checkbox-column text-center">Jul 17,2020</td>
                                                    <td></td>
                                                    <td>17/07/2020<br/>12:00:00AM</td>
                                                    <td>USD 67.087029 </td>
                                                    <td></td>
                                                    <td className="text-center">USD -67.087029</td>    
                                                </tr>
                                                <tr>
                                                    <td className="checkbox-column text-center">Jul 17,2020</td>
                                                    <td></td>
                                                    <td>17/07/2020<br/>12:00:00AM</td>
                                                    <td>USD 67.087029 </td>
                                                    <td></td>
                                                    <td className="text-center">USD -67.087029</td>     
                                                </tr>
                                                <tr>
                                                    <td className="checkbox-column text-center">Jul 17,2020</td>
                                                    <td></td>
                                                    <td>17/07/2020<br/>12:00:00AM</td>
                                                    <td>USD 67.087029 </td>
                                                    <td></td>
                                                    <td className="text-center">USD -67.087029</td>     
                                                </tr>
                                                <tr>
                                                    <td className="checkbox-column text-center">Jul 17,2020</td>
                                                    <td></td>
                                                    <td>17/07/2020<br/>12:00:00AM</td>
                                                    <td>USD 67.087029 </td>
                                                    <td></td>
                                                    <td className="text-center">USD -67.087029</td>     
                                                </tr>
                                                <tr>
                                                    <td className="checkbox-column text-center">Jul 17,2020</td>
                                                    <td></td>
                                                    <td>17/07/2020<br/>12:00:00AM</td>
                                                    <td>USD 67.087029 </td>
                                                    <td></td>
                                                    <td className="text-center">USD -67.087029</td>     
                                                </tr>
                                                <tr>
                                                    <td className="checkbox-column text-center">Jul 17,2020</td>
                                                    <td></td>
                                                    <td>17/07/2020<br/>12:00:00AM</td>
                                                    <td>USD 67.087029 </td>
                                                    <td></td>
                                                    <td className="text-center">USD -67.087029</td>     
                                                </tr>
                                                <tr>
                                                    <td className="checkbox-column text-center">Jul 17,2020</td>
                                                    <td></td>
                                                    <td>17/07/2020<br/>12:00:00AM</td>
                                                    <td>USD 67.087029 </td>
                                                    <td></td>
                                                    <td className="text-center">USD -67.087029</td>     
                                                </tr>
                                                <tr>
                                                    <td className="checkbox-column text-center">Jul 17,2020</td>
                                                    <td></td>
                                                    <td>17/07/2020<br/>12:00:00AM</td>
                                                    <td>USD 67.087029 </td>
                                                    <td></td>
                                                    <td className="text-center">USD -67.087029</td>     
                                                </tr>
                                                <tr>
                                                    <td className="checkbox-column text-center">Jul 17,2020</td>
                                                    <td></td>
                                                    <td>17/07/2020<br/>12:00:00AM</td>
                                                    <td>USD 67.087029 </td>
                                                    <td></td>
                                                    <td className="text-center">USD -67.087029</td>     
                                                </tr>
                                                <tr>
                                                    <td className="checkbox-column text-center">Jul 17,2020</td>
                                                    <td></td>
                                                    <td>17/07/2020<br/>12:00:00AM</td>
                                                    <td>USD 67.087029 </td>
                                                    <td></td>
                                                    <td className="text-center">USD -67.087029</td>    
                                                </tr>
                                                <tr>
                                                    <td className="checkbox-column text-center">Jul 17,2020</td>
                                                    <td></td>
                                                    <td>17/07/2020<br/>12:00:00AM</td>
                                                    <td>USD 67.087029 </td>
                                                    <td></td>
                                                    <td className="text-center">USD -67.087029</td>   
                                                </tr>
                                                <tr>
                                                    <td className="checkbox-column text-center">Jul 17,2020</td>
                                                    <td></td>
                                                    <td>17/07/2020<br/>12:00:00AM</td>
                                                    <td>USD 67.087029 </td>
                                                    <td></td>
                                                    <td className="text-center">USD -67.087029</td>   
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

export default Main;