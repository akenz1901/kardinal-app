import React from "react";
import './dashboard.css';
import SecondModal from "./SecondModal";

function SecondMain(){
    return(
        <div className="main-container" id="container">
            <div className="overlay"></div>
                <div className="search-overlay"></div>
                    {/* <!--  BEGIN CONTENT PART  --> */}
                    <div id="content" className="main-content">
                        <div className="layout-px-spacing">
                        <div className="page-header">
                            <div className="page-title">
                                <h3>Dashboard</h3>
                            </div>
                            <div className="toggle-switch">
                                <button className="btn btn-primary mb-2" data-toggle="modal" href="#fund">Fund your account</button>
                                </div>
                            </div>
                        {/* <!-- Modal --> */}
                            <SecondModal />
                        {/* <!-- Modal End--> */}
                        <div className="row layout-top-spacing">
                        <div id="chartArea" className="col-xl-7 layout-spacing">
                        <div className="statbox widget box box-shadow">
                            <div className="widget-header">                                
                                <div className="row">
                                    <div className="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Simple Area</h4> 
                                    </div>
                                </div>
                            </div>
                        <div className="widget-content widget-content-area">
                        <div id="s-line-area" className="" style={{minHeight: "365px"}}>
                            <div id="apexcharts8dnfaev6" className="apexcharts-canvas apexcharts8dnfaev6 light zoomable" style={{width: "681px", height: "350px"}}>
                                <svg id="SvgjsSvg1869" width="681" height="350" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.com/svgjs" className="apexcharts-svg" xmlnsData="ApexChartsNS" transform="translate(0, 0)}}" style={{background: "transparent"}}>
                                    <foreignObject x="0" y="0" width="681" height="350">
                                        <div className="apexcharts-legend center position-bottom" xmlns="http://www.w3.org/1999/xhtml" style={{inset: "auto 0px 10px", position: "absolute"}}>
                                            <div className="apexcharts-legend-series" rel="1" dataCollapsed="false" style={{margin: "0px 5px"}}>
                                                <span className="apexcharts-legend-marker" rel="1" dataCollapsed="false" style={{background: "rgb(0, 143, 251)", color: "rgb(0, 143, 251)", height: "12px", width: "12px", left: "0px", top: "0px", borderWidth: "0px", borderColor: "rgb(255, 255, 255)", borderRadius: "12px"}}></span>
                                                <span className="apexcharts-legend-text" rel="1" dataCollapsed="false" style={{color: "rgb(55, 61, 63)", fontSize: "12px", fontFamily: "Helvetica, Arial, sans-serif"}}>series1</span>
                                            </div>
                                        </div>
                                    </foreignObject>
                                    <g id="SvgjsG1871" className="apexcharts-inner apexcharts-graphical" transform="translate(56.359375, 40)">
                                        <defs id="SvgjsDefs1870">
                                            <clipPath id="gridRectMask8dnfaev6"><rect id="SvgjsRect1884" width="618.640625" height="257.348" x="-2" y="-2" rx="0" ry="0" fill="#ffffff" opacity="1" strokeWidth="0" stroke="none" strokeDasharray="0"></rect></clipPath>
                                            <clipPath id="gridRectMarkerMask8dnfaev6"><rect id="SvgjsRect1885" width="616.640625" height="255.348" x="-1" y="-1" rx="0" ry="0" fill="#ffffff" opacity="1" strokeWidth="0" stroke="none" strokeDasharray="0"></rect></clipPath>
                                            <linearGradient id="SvgjsLinearGradient1891" x1="0" y1="0" x2="0" y2="1">
                                                <stop id="SvgjsStop1892" stopOpacity="0.65" stopColor="rgba(0,143,251,0.65)" offset="0"></stop>
                                                <stop id="SvgjsStop1893" stopOpacity="0.5" stopColor="rgba(128,199,253,0.5)" offset="1"></stop>
                                                <stop id="SvgjsStop1894" stopOpacity="0.5" stopColor="rgba(128,199,253,0.5)" offset="1"></stop>
                                            </linearGradient>
                                            <linearGradient id="SvgjsLinearGradient1900" x1="0" y1="0" x2="0" y2="1">
                                                <stop id="SvgjsStop1901" stopOpacity="0.65" stopColor="rgba(0,227,150,0.65)" offset="0"></stop>
                                                <stop id="SvgjsStop1902" stopOpacity="0.5" stopColor="rgba(128,241,203,0.5)" offset="1"></stop>
                                                <stop id="SvgjsStop1903" stopOpacity="0.5" stopColor="rgba(128,241,203,0.5)" offset="1"></stop>
                                            </linearGradient>
                                        </defs>
                                        <line id="SvgjsLine1875" x1="519.5805288461538" y1="0" x2="519.5805288461538" y2="253.348" stroke="#b6b6b6" strokeDasharray="3" className="apexcharts-xcrosshairs" x="519.5805288461538" y="0" width="1" height="253.348" fill="#b1b9c4" filter="none" fillOpacity="0.9" strokeWidth="1"></line>
                                        <g id="SvgjsG1906" className="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG1907" className="apexcharts-xaxis-texts-g" transform="translate(0, -4)">
                                            <text id="SvgjsText1908" fontFamily="Helvetica, Arial, sans-serif" x="0" y="282.348" textAnchor="middle" dominantBaseline="auto" fontSize="12px" fill="#373d3f" className="apexcharts-xaxis-label " style={{fontFamily: "Helvetica, Arial, sans-serif"}}>
                                                <tspan id="SvgjsTspan1909" style={{fontFamily: "Helvetica, Arial, sans-serif"}}>01 aug</tspan>
                                                <title>01 aug</title>
                                            </text>
                                            <text id="SvgjsText1910" fontFamily="Helvetica, Arial, sans-serif" x="94.56009615384615" y="282.348" textAnchor="middle" dominantBaseline="auto" fontSize="12px" fill="#373d3f" className="apexcharts-xaxis-label " style={{fontFamily: "Helvetica, Arial, sans-serif"}}>
                                                <tspan id="SvgjsTspan1911" style={{fontFamily: "Helvetica, Arial, sans-serif"}}>02 aug</tspan>
                                                <title>02 aug</title>
                                            </text>
                                            <text id="SvgjsText1912" fontFamily="Helvetica, Arial, sans-serif" x="189.1201923076923" y="282.348" textAnchor="middle" dominantBaseline="auto" fontSize="12px" fill="#373d3f" className="apexcharts-xaxis-label " style={{fontFamily: "Helvetica, Arial, sans-serif"}}>
                                                <tspan id="SvgjsTspan1913" style={{fontFamily: "Helvetica, Arial, sans-serif"}}>03 aug</tspan>
                                                <title>03 Aug</title>
                                            </text>
                                            <text id="SvgjsText1914" fontFamily="Helvetica, Arial, sans-serif" x="283.68028846153845" y="282.348" textAnchor="middle" dominantBaseline="auto" fontSize="12px" fill="#373d3f" className="apexcharts-xaxis-label " style={{fontFamily: "Helvetica, Arial, sans-serif"}}>
                                                <tspan id="SvgjsTspan1915" style={{fontFamily: "Helvetica, Arial, sans-serif"}}>04 aug</tspan>
                                                <title>04 aug</title>
                                            </text>
                                            <text id="SvgjsText1916" fontFamily="Helvetica, Arial, sans-serif" x="378.2403846153846" y="282.348" textAnchor="middle" dominantBaseline="auto" fontSize="12px" fill="#373d3f" className="apexcharts-xaxis-label " style={{fontFamily: "Helvetica, Arial, sans-serif"}}>
                                                <tspan id="SvgjsTspan1917" style={{fontFamily: "Helvetica, Arial, sans-serif"}}>05 aug</tspan>
                                                <title>05 aug</title>
                                            </text>
                                        </g>
                                        <line id="SvgjsLine1922" x1="0" y1="254.348" x2="614.640625" y2="254.348" stroke="#78909c" strokeDasharray="0" strokeWidth="1"></line>
                                    </g>
                                    <g id="SvgjsG1932" className="apexcharts-grid">
                                        <line id="SvgjsLine1948" x1="0" y1="253.34800000000004" x2="614.640625" y2="253.34800000000004" stroke="#e0e0e0" strokeDasharray="0" className="apexcharts-gridline"></line>
                                    </g>
                                    <g id="SvgjsG1934" className="apexcharts-gridlines-vertical">
                                        <line id="SvgjsLine1935" x1="0" y1="254.348" x2="0" y2="260.348" stroke="#78909c" strokeDasharray="0" className="apexcharts-xaxis-tick"></line>
                                        <line id="SvgjsLine1936" x1="94.56009615384615" y1="254.348" x2="94.56009615384615" y2="260.348" stroke="#78909c" strokeDasharray="0" className="apexcharts-xaxis-tick"></line>
                                        <line id="SvgjsLine1937" x1="189.1201923076923" y1="254.348" x2="189.1201923076923" y2="260.348" stroke="#78909c" strokeDasharray="0" className="apexcharts-xaxis-tick"></line>
                                        <line id="SvgjsLine1938" x1="283.68028846153845" y1="254.348" x2="283.68028846153845" y2="260.348" stroke="#78909c" strokeDasharray="0" className="apexcharts-xaxis-tick"></line>
                                        <line id="SvgjsLine1939" x1="378.2403846153846" y1="254.348" x2="378.2403846153846" y2="260.348" stroke="#78909c" strokeDasharray="0" className="apexcharts-xaxis-tick"></line>
                                        <line id="SvgjsLine1940" x1="472.8004807692307" y1="254.348" x2="472.8004807692307" y2="260.348" stroke="#78909c" strokeDasharray="0" className="apexcharts-xaxis-tick"></line>
                                        <line id="SvgjsLine1941" x1="567.3605769230769" y1="254.348" x2="567.3605769230769" y2="260.348" stroke="#78909c" strokeDasharray="0" className="apexcharts-xaxis-tick"></line>
                                        <line id="SvgjsLine1950" x1="0" y1="253.348" x2="614.640625" y2="253.348" stroke="transparent" strokeDasharray="0"></line>
                                        <line id="SvgjsLine1949" x1="0" y1="1" x2="0" y2="253.348" stroke="transparent" strokeDasharray="0"></line>
                                    </g>
                                    <g id="SvgjsG1887" className="apexcharts-area-series apexcharts-plot-series">        
                                        <g id="SvgjsG1898" className="apexcharts-series-markers-wrap">
                                            <g className="apexcharts-series-markers">
                                                <circle id="SvgjsCircle1956" r="0" cx="520.0805288461538" cy="143.56386666666668" className="apexcharts-marker w6qkmh8bt no-pointer-events" stroke="#ffffff" fill="#00e396" fillOpacity="1" strokeWidth="2" strokeOpacity="0.9" default-marker-size="0"></circle>
                                            </g>
                                        </g>
                                        <g id="SvgjsG1899" className="apexcharts-datalabels"></g>
                                    </g>
                                    <g id="SvgjsG1888" className="apexcharts-series" seriesName="series1" dataLongestSeries="true" rel="1" dataRealIndex="0">
                                        <path id="apexcharts-area-0" d="M 0 253.348L 0 187.89976666666666C 49.644050480769224 187.89976666666666 92.19609375 168.89866666666666 
                                            141.84014423076923 168.89866666666666C 174.93617788461538 168.89866666666666 203.30420673076924 194.2334666666667 236.4002403846154 
                                            194.2334666666667C 269.49627403846154 194.2334666666667 297.86430288461537 145.6751 330.96033653846155 145.6751C 364.05637019230767 
                                            145.6751 392.42439903846156 164.6762 425.5204326923077 164.6762C 458.6164663461538 164.6762 486.9844951923077 23.22356666666667 
                                            520.0805288461538 23.22356666666667C 553.1765624999999 23.22356666666667 581.5445913461539 42.22466666666668 614.640625 42.22466666666668C 
                                            614.640625 42.22466666666668 614.640625 42.22466666666668 614.640625 253.348M 614.640625 42.22466666666668z" fill="url(#SvgjsLinearGradient1891)" 
                                            fillOpacity="1" strokeOpacity="1" strokeLinecap="butt" strokeWidth="0" strokeDasharray="0" className="apexcharts-area" index="0" 
                                            clipPath="url(#gridRectMask8dnfaev6)" pathTo="M 0 253.348L 0 187.89976666666666C 49.644050480769224 187.89976666666666 92.19609375 
                                            168.89866666666666 141.84014423076923 168.89866666666666C 174.93617788461538 168.89866666666666 203.30420673076924 194.2334666666667 
                                            236.4002403846154 194.2334666666667C 269.49627403846154 194.2334666666667 297.86430288461537 145.6751 330.96033653846155 145.6751C 
                                            364.05637019230767 145.6751 392.42439903846156 164.6762 425.5204326923077 164.6762C 458.6164663461538 164.6762 486.9844951923077 23.22356666666667 
                                            520.0805288461538 23.22356666666667C 553.1765624999999 23.22356666666667 581.5445913461539 42.22466666666668 614.640625 42.22466666666668C 614.640625 
                                            42.22466666666668 614.640625 42.22466666666668 614.640625 253.348M 614.640625 42.22466666666668z" pathFrom="M -1 253.348L -1 253.348L 141.84014423076923 
                                            253.348L 236.4002403846154 253.348L 330.96033653846155 253.348L 425.5204326923077 253.348L 520.0805288461538 253.348L 614.640625 253.348">     
                                        </path>
                                        <path id="apexcharts-area-0" d="M 0 187.89976666666666C 49.644050480769224 187.89976666666666 92.19609375 168.89866666666666 141.84014423076923 
                                            168.89866666666666C 174.93617788461538 168.89866666666666 203.30420673076924 194.2334666666667 236.4002403846154 194.2334666666667C 269.49627403846154 
                                            194.2334666666667 297.86430288461537 145.6751 330.96033653846155 145.6751C 364.05637019230767 145.6751 392.42439903846156 164.6762 425.5204326923077 
                                            164.6762C 458.6164663461538 164.6762 486.9844951923077 23.22356666666667 520.0805288461538 23.22356666666667C 553.1765624999999 23.22356666666667 
                                            581.5445913461539 42.22466666666668 614.640625 42.22466666666668" fill="none" fillOpacity="1" stroke="#008ffb" strokeOpacity="1" strokeLinecap="butt" 
                                            strokeWidth="4" strokeDasharray="0" className="apexcharts-area" index="0" clipPath="url(#gridRectMask8dnfaev6)" pathTo="M 0 187.89976666666666C 
                                            49.644050480769224 187.89976666666666 92.19609375 168.89866666666666 141.84014423076923 168.89866666666666C 174.93617788461538 168.89866666666666 
                                            203.30420673076924 194.2334666666667 236.4002403846154 194.2334666666667C 269.49627403846154 194.2334666666667 297.86430288461537 145.6751 330.96033653846155 
                                            145.6751C 364.05637019230767 145.6751 392.42439903846156 164.6762 425.5204326923077 164.6762C 458.6164663461538 164.6762 486.9844951923077 
                                            23.22356666666667 520.0805288461538 23.22356666666667C 553.1765624999999 23.22356666666667 581.5445913461539 42.22466666666668 614.640625 42.22466666666668" 
                                            pathFrom="M -1 253.348L -1 253.348L 141.84014423076923 253.348L 236.4002403846154 253.348L 330.96033653846155 253.348L 425.5204326923077 253.348L 520.0805288461538 
                                            253.348L 614.640625 253.348">
                                        </path>
                                        <g id="SvgjsG1889" className="apexcharts-series-markers-wrap">
                                            <g className="apexcharts-series-markers">
                                                <circle id="SvgjsCircle1957" r="0" cx="520.0805288461538" cy="23.22356666666667" className="apexcharts-marker woff19yay no-pointer-events" stroke="#ffffff" fill="#008ffb" fillOpacity="1" strokeWidth="2" strokeOpacity="0.9" default-marker-size="0"></circle>
                                            </g>
                                        </g>
                                        <g id="SvgjsG1890" className="apexcharts-datalabels"></g>
                                    </g>
                                    <line id="SvgjsLine1951" x1="0" y1="0" x2="614.640625" y2="0" stroke="#b6b6b6" strokeDasharray="0" strokeWidth="1" className="apexcharts-ycrosshairs"></line>
                                    <line id="SvgjsLine1952" x1="0" y1="0" x2="614.640625" y2="0" strokeDasharray="0" strokeWidth="0" className="apexcharts-ycrosshairs-hidden"></line>
                                    <g id="SvgjsG1953" className="apexcharts-yaxis-annotations"></g>
                                    <g id="SvgjsG1954" className="apexcharts-xaxis-annotations"></g>
                                    <g id="SvgjsG1955" className="apexcharts-point-annotations"></g>
                                    <rect id="SvgjsRect1958" width="0" height="0" x="0" y="0" rx="0" ry="0" fill="#fefefe" opacity="1" strokeWidth="0" stroke="none" strokeDasharray="0" className="apexcharts-zoom-rect"></rect>
                                    <rect id="SvgjsRect1959" width="0" height="0" x="0" y="0" rx="0" ry="0" fill="#fefefe" opacity="1" strokeWidth="0" stroke="none" strokeDasharray="0" className="apexcharts-selection-rect"></rect></g>
                                    <rect id="SvgjsRect1874" width="0" height="0" x="0" y="0" rx="0" ry="0" fill="#fefefe" opacity="1" strokeWidth="0" stroke="none" strokeDasharray="0"></rect>
                                    <g id="SvgjsG1923" className="apexcharts-yaxis" rel="0" transform="translate(23.359375, 0)">
                                        <g id="SvgjsG1924" className="apexcharts-yaxis-texts-g">
                                            <text id="SvgjsText1925" fontFamily="Helvetica, Arial, sans-serif" x="20" y="41.6" textAnchor="end" dominantBaseline="auto" fontSize="11px" fill="#373d3f" className="apexcharts-yaxis-label " style={{fontFamily: "Helvetica, Arial, sans-serif"}}>50K</text>
                                            <text id="SvgjsText1926" fontFamily="Helvetica, Arial, sans-serif" x="20" y="83.92466666666667" textAnchor="end" dominantBaseline="auto" fontSize="11px" fill="#373d3f" className="apexcharts-yaxis-label " style={{fontFamily: "Helvetica, Arial, sans-serif"}}>40K</text>
                                            <text id="SvgjsText1927" fontFamily="Helvetica, Arial, sans-serif" x="20" y="126.24933333333334" textAnchor="end" dominantBaseline="auto" fontSize="11px" fill="#373d3f" className="apexcharts-yaxis-label " style={{fontFamily: "Helvetica, Arial, sans-serif"}}>30K</text>
                                            <text id="SvgjsText1928" fontFamily="Helvetica, Arial, sans-serif" x="20" y="168.574" textAnchor="end" dominantBaseline="auto" fontSize="11px" fill="#373d3f" className="apexcharts-yaxis-label " style={{fontFamily: "Helvetica, Arial, sans-serif"}}>20K</text>
                                            <text id="SvgjsText1929" fontFamily="Helvetica, Arial, sans-serif" x="20" y="210.89866666666668" textAnchor="end" dominantBaseline="auto" fontSize="11px" fill="#373d3f" className="apexcharts-yaxis-label " style={{fontFamily: "Helvetica, Arial, sans-serif"}}>10K</text>
                                            <text id="SvgjsText1930" fontFamily="Helvetica, Arial, sans-serif" x="20" y="253.22333333333336" textAnchor="end" dominantBaseline="auto" fontSize="11px" fill="#373d3f" className="apexcharts-yaxis-label " style={{fontFamily: "Helvetica, Arial, sans-serif"}}>5K</text>
                                            <text id="SvgjsText1931" fontFamily="Helvetica, Arial, sans-serif" x="20" y="295.54800000000006" textAnchor="end" dominantBaseline="auto" fontSize="11px" fill="#373d3f" className="apexcharts-yaxis-label " style={{fontFamily: "Helvetica, Arial, sans-serif"}}>0</text>
                                        </g>
                                    </g>
                                </svg>
                                <div className="apexcharts-tooltip light" style={{left: "445.969px", top: "26px"}}>
                                    <div className="apexcharts-tooltip-title" style={{fontFamily: "Helvetica, Arial, sans-serif", fontSize: "12px"}}>19/09/18 05:30</div>
                                        <div className="apexcharts-tooltip-series-group active" style={{display: "flex"}}>
                                            <span className="apexcharts-tooltip-marker" style={{backgroundColor: "rgb(0, 143, 251)"}}></span>
                                            <div className="apexcharts-tooltip-text" style={{fontFamily: "Helvetica, Arial, sans-serif", fontSize: "12px"}}>
                                                <div className="apexcharts-tooltip-y-group">
                                                    <span className="apexcharts-tooltip-text-label">series1: </span>
                                                    <span className="apexcharts-tooltip-text-value">109</span>
                                                </div>
                                                    <div className="apexcharts-tooltip-z-group">
                                                        <span className="apexcharts-tooltip-text-z-label"></span>
                                                        <span className="apexcharts-tooltip-text-z-value"></span>
                                                    </div>
                                                </div>
                                            </div>
                                                <div className="apexcharts-tooltip-series-group active" style={{display: "flex"}}>
                                                    <span className="apexcharts-tooltip-marker" style={{backgroundColor: "rgb(0, 227, 150)"}}></span>
                                                        <div className="apexcharts-tooltip-text" style={{fontFamily: "Helvetica, Arial, sans-serif", fontSize: "12px"}}>
                                                            <div className="apexcharts-tooltip-y-group">
                                                                <span className="apexcharts-tooltip-text-label">series2: </span>
                                                                <span className="apexcharts-tooltip-text-value">52</span>
                                                            </div>
                                                            <div className="apexcharts-tooltip-z-group">
                                                                <span className="apexcharts-tooltip-text-z-label"></span>
                                                                <span className="apexcharts-tooltip-text-z-value"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom light" style={{left: "521.401px", top: "295.348px"}}>
                                                    <div className="apexcharts-xaxistooltip-text" style={{fontFamily: "Helvetica, Arial, sans-serif", fontSize: "12px", minWidth: "100.125px"}}>19/09/18 05:30</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ChartArea */}
                            <div id="chartArea" className="col-xl-5 layout-spacing" >
                                <div className="statbox widget box box-shadow  widget-table-one" style={{paddingBottom: "35px"}}>
                                    <div className="widget-header">                                
                                        <div className="row">
                                            <div className="col-xl-12 col-md-12 col-sm-12 col-12">
                                                <h4>Transactions</h4> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-content widget-content-area">
                                        <div className="transactions-list">
                                            <div className="t-item">
                                                <div className="t-company-name">
                                                    <div className="t-icon">
                                                        <div className="icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                                                        </div>
                                                    </div>
                                                    <div className="t-name">
                                                        <h4>Total Spend</h4>
                                                        <div className="t-rate rate-inc">
                                                            <p><span>+$4,508.771</span> </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="t-company-name">
                                                <div className="t-icon">
                                                    <div className="avatar avatar-xl">
                                                        <span className="avatar-title rounded-circle"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-down"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg></span>
                                                    </div>
                                                </div>
                                                <div className="t-name">
                                                    <h4>Credit Available</h4>
                                                    <div className="t-rate rate-dec">
                                                        <p><span>-$3,000,000</span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="transactions-list">
                                        <div className="t-item">
                                            <div className="t-company-name">
                                                <div className="t-icon">
                                                    <div className="icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                                                    </div>
                                                </div>
                                                <div className="t-name">
                                                    <h4>Travel Spend</h4>
                                                    <div className="t-rate rate-inc">
                                                        <p><span>+$876</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="t-company-name" style={{marginRight: "45px"}}>
                                                <div className="t-icon">
                                                    <div className="icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                                                    </div>
                                                </div>
                                                <div className="t-name">
                                                    <h4>Mileage</h4>
                                                    <div className="t-rate rate-inc">
                                                        <p><span>+$4,321,429</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="transactions-list">
                                        <div className="t-item">
                                            <div className="t-company-name">
                                                <div className="t-icon">
                                                    <div className="icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                                                    </div>
                                                </div>
                                                <div className="t-name">
                                                    <h4>Car Spend</h4>
                                                    <div className="t-rate rate-inc">
                                                        <p><span>+$1345</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="t-company-name" style={{marginRight: "20px"}}>
                                                <div className="t-icon">
                                                    <div className="icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                                                    </div>
                                                </div>
                                            <div className="t-name">
                                                <h4>Bonus Points</h4>
                                                <div className="t-rate rate-inc">
                                                    <p><span>+$4,321,429</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>   
                                <div className="transactions-list">
                                    <div className="t-item">
                                        <div className="t-company-name">
                                            <div className="t-icon">
                                                <div className="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                                                </div>
                                            </div>
                                            <div className="t-name">
                                                <h4>Hotel Spend</h4>
                                                <div className="t-rate rate-inc">
                                                    <p><span>+$1345</span> </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>   
                    <div id="chartArea" className="col-xl-6 layout-spacing">
                        <div className="statbox widget box box-shadow widget widget-table-two" >
                            <div className="widget-header">                                
                                <div className="row">
                                    <div className="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Histroy</h4> 
                                    </div>
                                </div>
                            </div>
                            <div className="widget-content widget-content-area">
                                <div className="table-responsive">
                                    <table className="table">
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
                                                <td><div className="td-content">1</div></td>
                                                <td><div className="td-content">05-Aug-2021</div></td>
                                                <td><div className="td-content"> Lilian Bach</div></td>
                                                <td><div className="td-content">VM342</div></td>
                                                <td><div className="td-content">Flight</div></td>
                                                <td><div className="td-content">Processed</div></td>
                                            </tr>
                                            <tr>
                                                <td><div className="td-content">2</div></td>
                                                <td><div className="td-content"><span className="">05-Aug-2021</span></div></td>
                                                <td><div className="td-content ">Austin Malone</div></td>
                                                <td><div className="td-content">QO1345</div></td>
                                                <td><div className="td-content">Hotel</div></td>
                                                <td><div className="td-content">Processed</div></td>
                                            </tr>
                                            <tr>
                                                <td><div className="td-content">3</div></td>
                                                <td><div className="td-content"><span className="">05-Aug-2021</span></div></td>
                                                <td><div className="td-content ">Cardi Notsob</div></td>
                                                <td><div className="td-content">N2-121</div></td>
                                                <td><div className="td-content">Car</div></td>
                                                <td><div className="td-content">On Hold</div></td>        
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="chartArea" className="col-xl-6 layout-spacing">
                        <div className="statbox widget box box-shadow widget widget-table-two" style={{paddingBottom: "20px"}}>
                            <div className="widget-header">  
                                <div className="row">
                                    <div className="col-xl-12">
                                        <h4>On Holding Bookings</h4> 
                                    </div>
                                </div>
                            </div>
                            <div className="widget-content widget-content-area">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th><div className="th-content">Booking Ref</div></th>
                                                <th><div className="th-content">Lead Pax</div></th>
                                                <th><div className="th-content">Destinations</div></th>
                                                <th><div className="th-content">Cancellation Deadline</div></th>   
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><div className="td-content"><span className="">FL1234</span></div></td>
                                                <td><div className="td-content">Mr George Angel</div></td>
                                                <td><div className="td-content">Delhi</div></td>
                                                <td><div className="td-content">20-Feb-2018</div></td>
                                            </tr>
                                            <tr>
                                                <td><div className="td-content"><span className="">FL1233</span></div></td>
                                                <td><div className="td-content ">Mr George</div></td>
                                                <td><div className="td-content">Mumbai</div></td>
                                                <td><div className="td-content">23-jan-2017</div></td>
                                            </tr>
                                            <tr>
                                                <td><div className="td-content"><span className="">FL1232</span></div></td>
                                                <td><div className="td-content ">Mr Arpit Garg </div></td>
                                                <td><div className="td-content">Dubai</div></td>
                                                <td><div className="td-content">08-jan-2017</div></td>  
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-12  layout-spacing">
                        <div className="widget widget-five">
                            <div className="widget-content">
                                <div className="header">
                                    <div className="header-body">
                                        <h6>Trip Summary</h6>
                                    </div>
                                </div>
                                <div className="w-content">
                                    <div className="row">    
                                        <div className="col-xl-4">   
                                            <p className="task-completed"><span>Flights</span></p>                                     
                                            <p className="task-left"><i className="fa fa-plane"></i></p>
                                        <div className="t-rate rate-inc">
                                            <p className="task-completed"><span>+$4,508.771</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg></p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4">     
                                        <p className="task-completed"><span>Cars</span></p>                                     
                                        <p className="task-left"><i className="fas fa-car-alt"></i></p>
                                        <div className="t-rate rate-inc">
                                            <p className="task-completed"><span>+$3,000.000</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg></p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4"> 
                                        <p className="task-completed"><span>Hotel</span></p>                                         
                                        <p className="task-left"><i className="fas fa-hotel"></i></p>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* // <!--  END CONTENT PART  --> */}
</div>
/* // <!-- END MAIN CONTAINER --> */
    )
}

export default SecondMain;