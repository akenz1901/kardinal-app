import React from "react";
import ReactApexChart from "react-apexcharts";
import { salesByCategory, uniqueVisitorsOptions1 } from '../../../../utilities/scripts';

function Reporting(){

    return(
        <div className="main-container" id="container">
        <div className="overlay"></div>
        <div className="search-overlay"></div>
        {/* <!--  BEGIN CONTENT AREA  --> */}
        <div id="content" className="main-content">
            <div className="layout-px-spacing">
            <div className="page-header">
                    <div className="page-title">
                        <h3>Reporting</h3>
                    </div>
                    <div className="toggle-switch row">
                        <div className="form-group mr-2">
                            <input type="date" className="form-control" id="start_date" toltip="date" />
                        </div>             
                        <div className="form-group mr-2">
                            <input type="date" className="form-control" id="end_date" toltip="date" />
                        </div>
                        <div className="form-group mr-2">
                            <button className="btn btn-primary" style={{padding: "11px 25px"}}>Search</button>
                        </div>
                    </div>
                </div>
                <div className="row analytics ">
                    <div className="col-xl-3 col-sm-12 col-12 layout-spacing">
                        <div className="widget widget-five">
                            <div className="widget-content">
                                <div className="w-content">
                                    <div className="">                                            
                                        <h2>2</h2>
                                        <p className="task-completed"><span>Total Number of Trips</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-12 col-12 layout-spacing">
                        <div className="widget widget-five">
                            <div className="widget-content">
                                <div className="w-content">
                                    <div className="">                                            
                                        <h2>₦102</h2>
                                        <p className="task-completed"><span>Average Ticket Price</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-12 col-12 layout-spacing">
                        <div className="widget widget-five">
                            <div className="widget-content">
                                <div className="w-content">
                                    <div className="">                                            
                                        <h2>8</h2>
                                        <p className="task-completed"><span>Total Number of Stays</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-12 col-12 layout-spacing">
                        <div className="widget widget-five">
                            <div className="widget-content">
                                <div className="w-content">
                                    <div className="">                                            
                                        <h2>₦8008</h2>
                                        <p className="task-completed"><span>Average Hotel Price</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>     
                <div className="row analytics">
                    <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                        <div className="widget widget-chart-three">
                            <div className="widget-heading">
                                <div className="">
                                    <h5 className="">Total Deposits</h5>
                                </div>
                                <div className="dropdown  custom-dropdown">
                                    <a className="dropdown-toggle" href="..." role="button" id="dropdownMenuLink-1" dataToggle="dropdown" ariaHaspopup="true" ariaExpanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink-1">
                                        <a className="dropdown-item" href={{javascript:void(0)}}>View</a>
                                        <a className="dropdown-item" href={{javascript:void(0)}}>Update</a>
                                        <a className="dropdown-item" href={{javascript:void(0)}}>Download</a>
                                    </div>
                                </div>
                            </div>
                            <div className="widget-content">
                            <div >
                                <ReactApexChart 
                                    options={uniqueVisitorsOptions1}
                                    series={uniqueVisitorsOptions1.series}
                                    type="bar"
                                    height={350}
                                />
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                        <div className="widget widget-chart-two">
                            <div className="widget-heading">
                                <h5 className="">Total Spend</h5>
                            </div>
                            <div className="widget-content">
                            <ReactApexChart 
                                    options={salesByCategory}
                                    series={salesByCategory.series}
                                    type="donut"
                                    height={380}
                                />
                            </div>
                        </div>
                    </div>   
                </div>    
                <div className="row layout-spacing">
                    <div className="col-lg-12">
                        <div className="statbox widget box-shadow"  style={{padding: "20px"}}>
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
                                            <label for="input">Module</label>
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
                                        <div className="form-group col-md-12" style={{textAlign: "right"}}>
                                            <a className="dot" href="..." target="_blank" rel="noreferrer">View Report</a>
                                        </div>
                                    </div>
                                </form> 
                            </div> 
                            <div>
                                <div className="dt-buttons" style={{textAlign:"right"}}> 
                                    <button className="dt-button1 buttons-copy buttons-html5 btn" tabindex="0" ariaControls="html5-extension"><span>Copy</span></button>
                                    <button className="dt-button1 buttons-csv buttons-html5 btn" tabindex="0" ariaControls="html5-extension"><span>CSV</span></button>
                                    <button className="dt-button1 buttons-excel buttons-html5 btn" tabindex="0" ariaControls="html5-extension"><span>Excel</span></button>
                                    <button className="dt-button1 buttons-print btn" tabindex="0" ariaControls="html5-extension"><span>Print</span></button>
                                </div>
                                <div className="table-responsive mb-4">
                                    <table className="table style-3  table-hover">
                                        <thead>
                                            <tr>
                                                <th className="checkbox-column text-center"> Depart </th>
                                                <th>SL NO.</th>
                                                <th>Service Type</th>
                                                <th>Customer ID</th>
                                                <th>Booking ID</th>
                                                <th>Flown Date</th>
                                                <th>Amount</th> 
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="checkbox-column text-center">12345 </td>
                                                <td>3401-Sales trip to London</td>
                                                <td>C112334</td>
                                                <td>BOOK3224 </td>
                                                <td>25 July 2021</td>
                                                <td>5000</td>   
                                            </tr>
                                            <tr>
                                                <td className="checkbox-column text-center">12345 </td>
                                                <td>3401-Sales trip to London</td>
                                                <td>C112334</td>
                                                <td>BOOK3224 </td>
                                                <td>25 July 2021</td>
                                                <td>5000</td>    
                                            </tr>
                                            <tr>
                                                <td className="checkbox-column text-center">12345 </td>
                                                <td>3401-Sales trip to London</td>
                                                <td>C112334</td>
                                                <td>BOOK3224 </td>
                                                <td>25 July 2021</td>
                                                <td>5000</td>  
                                            </tr>
                                            <tr>
                                                <td className="checkbox-column text-center">12345 </td>
                                                <td>3401-Sales trip to London</td>
                                                <td>C112334</td>
                                                <td>BOOK3224 </td>
                                                <td>25 July 2021</td>
                                                <td>5000</td>     
                                            </tr>
                                            <tr>
                                                <td className="checkbox-column text-center">12345 </td>
                                                <td>3401-Sales trip to London</td>
                                                <td>C112334</td>
                                                <td>BOOK3224 </td>
                                                <td>25 July 2021</td>
                                                <td>5000</td>    
                                            </tr>
                                            <tr>
                                                <td className="checkbox-column text-center">12345 </td>
                                                <td>3401-Sales trip to London</td>
                                                <td>C112334</td>
                                                <td>BOOK3224 </td>
                                                <td>25 July 2021</td>
                                                <td>5000</td>     
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

{/* 




        <div class="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
            <div class="widget widget-chart-two">
                <div class="widget-heading">
                    <h5 class="">Total spend</h5>
                </div>
                <div class="widget-content" style={{position: "relative"}}>
                    <div id="chart-2" class="" style={{minHeight: "380px"}}>
                        <div id="apexcharts850pxr22k" class="apexcharts-canvas apexcharts850pxr22k light" style={{width: "380px", height: "380px"}}>
                            <svg id="SvgjsSvg1685" width="380" height="380" xmlns="http://www.w3.org/2000/svg" version="1.1"  transform="translate(0, 0)" style={{background: "transparent"}}>
                                <foreignObject x="0" y="0" width="380" height="380">
                                    <div class="apexcharts-legend center position-bottom" xmlns="http://www.w3.org/1999/xhtml" style={{inset: "auto 0px 10px", position: "absolute"}}>
                                        <div class="apexcharts-legend-series" rel="1" collapsed="false" style={{margin: "0px 8px"}}>
                                            <span class="apexcharts-legend-marker" rel="1" collapsed="false" style={{background: "rgb(92, 26, 195)", color: "rgb(92, 26, 195)", height: "10px", width: "10px", left: "0px", top: "0px", borderWidth: "0px", borderColor: "rgb(255, 255, 255)", borderRadius: "12px"}}></span>
                                            <span class="apexcharts-legend-text" rel="1" collapsed="false" style={{color: "rgb(55, 61, 63)", fontSize: "14px", fontFamily: "Helvetica, Arial, sans-serif"}}>Apparel</span>
                                        </div>
                                        <div class="apexcharts-legend-series" rel="2" collapsed="false" style={{margin: "0px 8px"}}>
                                            <span class="apexcharts-legend-marker" rel="2" collapsed="false" style={{background: "rgb(226, 160, 63)", color: "rgb(226, 160, 63)", height: "10px", width: "10px", left: "0px", top: "0px", borderWidth: "0px", borderColor: "rgb(255, 255, 255)", borderRadius: "12px"}}></span>
                                            <span class="apexcharts-legend-text" rel="2" collapsed="false" style={{color: "rgb(55, 61, 63)", fontSize: "14px", fontFamily: "Helvetica, Arial, sans-serif"}}>Electronic</span>
                                        </div>
                                        <div class="apexcharts-legend-series" rel="3" collapsed="false" style={{margin: "0px 8px"}}>
                                            <span class="apexcharts-legend-marker" rel="3" collapsed="false" style={{background: "rgb(231, 81, 90)", color: "rgb(231, 81, 90)", height: "10px", width: "10px", left: "0px", top: "0px", borderWidth: "0px", borderColor: "rgb(255, 255, 255)", borderRadius: "12px"}}></span>
                                            <span class="apexcharts-legend-text" rel="3" collapsed="false" style={{color: "rgb(55, 61, 63)", fontSize: "14px", fontFamily: "Helvetica, Arial, sans-serif"}}>Others</span>
                                        </div>
                                    </div>
                                            
                                    </foreignObject>
                                        <g id="SvgjsG1687" class="apexcharts-inner apexcharts-graphical" transform="translate(37.5, 0)">
                                        <defs id="SvgjsDefs1686">
                                            <clipPath id="gridRectMask850pxr22k">
                                                <rect id="SvgjsRect1688" width="332" height="344" x="-12.5" y="-12.5" rx="0" ry="0" fill="#ffffff" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0"></rect>
                                            </clipPath>
                                            <clipPath id="gridRectMarkerMask850pxr22k">
                                                <rect id="SvgjsRect1689" width="309" height="321" x="-1" y="-1" rx="0" ry="0" fill="#ffffff" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0"></rect>
                                            </clipPath>
                                        </defs>
                                        <g id="SvgjsG1691" class="apexcharts-pie" innerTranslateX="0" innerTranslateY="-25">
                                        <g id="SvgjsG1693" class="apexcharts-datalabels-group" transform="translate(0, 0)">
                                            <text id="SvgjsText1694" font-family="Nunito, sans-serif" x="153.5" y="143.5" textAnchor="middle" dominantBaseline="auto" fontSize="29px" fill="#888ea8" class="apexcharts-datalabel-label" style={{fontFamily: "Nunito, sans-serif"}}>Total</text>
                                            <text id="SvgjsText1695" font-family="Nunito, sans-serif" x="153.5" y="185.5" textAnchor="middle" dominantBaseline="auto" fontSize="26px" fill="20" class="apexcharts-datalabel-value" style={{fontFamily: "Nunito, sans-serif"}}>1992</text>
                                        </g>
                                        <g id="SvgjsG1692" transform="translate(0, -5) scale(1)">
                                        <circle id="SvgjsCircle1696" r="78.49146341463417" cx="153.5" cy="153.5" fill="transparent"></circle>
                                        <g id="SvgjsG1697">
                                            <g id="apexcharts-series-0" class="apexcharts-series apexcharts-pie-series" seriesName="Apparel" rel="1">
                                                <path id="apexcharts-donut-slice-0" d="M 153.5 32.74390243902437 A 120.75609756097563 120.75609756097563 0 0 1 157.68894973557033 274.18341973224295 L 156.22281732812073 231.94422282595792 A 78.49146341463417 78.49146341463417 0 0 0 153.5 75.00853658536583 L 153.5 32.74390243902437 z" fill="rgba(92,26,195,1)" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="butt" stroke-width="25" stroke-dasharray="0" class="apexcharts-pie-area" index="0" j="0" angle="178.0120481927711" startAngle="0" strokeWidth="25" value={value} pathOrig="M 153.5 32.74390243902437 A 120.75609756097563 120.75609756097563 0 0 1 157.68894973557033 274.18341973224295 L 156.22281732812073 231.94422282595792 A 78.49146341463417 78.49146341463417 0 0 0 153.5 75.00853658536583 L 153.5 32.74390243902437 z"></path>
                                            </g>
                                            <g id="apexcharts-series-1" class="apexcharts-series apexcharts-pie-series" seriesName="Electronic" rel="2">
                                                <path id="apexcharts-donut-slice-1" d="M 157.68894973557033 274.18341973224295 A 120.75609756097563 120.75609756097563 0 0 1 62.64800252972418 73.95158924392732 L 94.44620164432071 101.79353300855274 A 78.49146341463417 78.49146341463417 0 0 0 156.22281732812073 231.94422282595792 L 157.68894973557033 274.18341973224295 z" fill="rgba(226,160,63,1)" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="butt" stroke-width="25" stroke-dasharray="0" class="apexcharts-pie-area" index="0" j="1" angle="133.19277108433732" startAngle="178.0120481927711" strokeWidth="25" value="737" pathOrig="M 157.68894973557033 274.18341973224295 A 120.75609756097563 120.75609756097563 0 0 1 62.64800252972418 73.95158924392732 L 94.44620164432071 101.79353300855274 A 78.49146341463417 78.49146341463417 0 0 0 156.22281732812073 231.94422282595792 L 157.68894973557033 274.18341973224295 z"></path>
                                            </g>
                                            <g id="apexcharts-series-2" class="apexcharts-series apexcharts-pie-series" seriesName="Others" rel="3">
                                                <path id="apexcharts-donut-slice-2" d="M 62.64800252972418 73.95158924392732 A 120.75609756097563 120.75609756097563 0 0 1 153.47892408516398 32.7439042782449 L 153.4863006553566 75.00853778085917 A 78.49146341463417 78.49146341463417 0 0 0 94.44620164432071 101.79353300855274 L 62.64800252972418 73.95158924392732 z" fill="rgba(231,81,90,1)" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="butt" stroke-width="25" stroke-dasharray="0" class="apexcharts-pie-area" index="0" j="2" angle="48.79518072289159" startAngle="311.2048192771084" strokeWidth="25" value="270" pathOrig="M 62.64800252972418 73.95158924392732 A 120.75609756097563 120.75609756097563 0 0 1 153.47892408516398 32.7439042782449 L 153.4863006553566 75.00853778085917 A 78.49146341463417 78.49146341463417 0 0 0 94.44620164432071 101.79353300855274 L 62.64800252972418 73.95158924392732 z"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <line id="SvgjsLine1704" x1="0" y1="0" x2="307" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" class="apexcharts-ycrosshairs"></line>
                                <line id="SvgjsLine1705" x1="0" y1="0" x2="307" y2="0" stroke-dasharray="0" stroke-width="0" class="apexcharts-ycrosshairs-hidden"></line>
                                </g>
                                </svg>
                                <div class="apexcharts-tooltip dark">
                                    <div class="apexcharts-tooltip-series-group">
                                        <span class="apexcharts-tooltip-marker" style={{backgroundColor: "rgb(92, 26, 195)"}}></span>
                                    <div class="apexcharts-tooltip-text" style={{fontFamily: "Helvetica, Arial, sans-serif", fontSize: "12px"}}>
                                        <div class="apexcharts-tooltip-y-group">
                                            <span class="apexcharts-tooltip-text-label"></span>
                                            <span class="apexcharts-tooltip-text-value"></span>
                                        </div><div class="apexcharts-tooltip-z-group">
                                            <span class="apexcharts-tooltip-text-z-label"></span>
                                            <span class="apexcharts-tooltip-text-z-value"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="apexcharts-tooltip-series-group">
                                    <span class="apexcharts-tooltip-marker" style={{backgroundColor: "rgb(226, 160, 63)"}}></span>
                                    <div class="apexcharts-tooltip-text" style={{fontFamily: "Helvetica, Arial, sans-serif", fontSize: "12px"}}>
                                        <div class="apexcharts-tooltip-y-group">
                                            <span class="apexcharts-tooltip-text-label"></span>
                                            <span class="apexcharts-tooltip-text-value"></span>
                                        </div>
                                        <div class="apexcharts-tooltip-z-group">
                                            <span class="apexcharts-tooltip-text-z-label"></span>
                                            <span class="apexcharts-tooltip-text-z-value"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="apexcharts-tooltip-series-group">
                                    <span class="apexcharts-tooltip-marker" style={{backgroundColor: "rgb(231, 81, 90)"}}></span>
                                    <div class="apexcharts-tooltip-text" style={{fontFamily: "Helvetica, Arial, sans-serif", fontSize: "12px"}}>
                                        <div class="apexcharts-tooltip-y-group">
                                            <span class="apexcharts-tooltip-text-label"></span>
                                            <span class="apexcharts-tooltip-text-value"></span>
                                        </div>
                                        <div class="apexcharts-tooltip-z-group">
                                            <span class="apexcharts-tooltip-text-z-label"></span>
                                            <span class="apexcharts-tooltip-text-z-value"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="resize-triggers">
                        <div class="expand-trigger">
                            <div style={{width: "438px", height: "401px"}}></div>
                        </div>
                        <div class="contract-trigger"></div>
                    </div>
                </div>
            </div>
        </div>
 */}

    </div>
    )
}

export default Reporting;