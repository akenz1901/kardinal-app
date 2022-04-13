import React, { useState } from 'react';
import './style.css';
// material ui elements
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNavigate } from 'react-router-dom';
import PassangerDetails from './PassangerDetail';
import { DepartureDetail, ReturnDetail } from './DetailModal';
import ShareTripDetail from './ShareTripDetail';

// Material ui icon imports
import FlightTakeoffSharpIcon from '@mui/icons-material/FlightTakeoffSharp';
import FlightLandSharpIcon from '@mui/icons-material/FlightLandSharp';

function FlightSummary() {
    const [enableModal, setEnableModal] = useState(false);
    const [openShareTrip, setOpenShareTrip] = useState(false);
    const [enableDepartureModal, setDepartModalEnable] = useState(false);
    const [enableReturnDetailModal, setReturnDetailModalEnable] = useState(false);
    const passangerDetails = () => setEnableModal(true);
    let navigate = useNavigate();
    const proceedToPay = () => navigate('/payment-method')
    return (
        <main>
            <h1 className='summary-title-text'>Here’s your flight summary</h1>
            <section className='flight-summary-section-one'>
                {/* Share trip details */}
                <div className='share-trip-detail'>
                    <h5 onClick={() => setOpenShareTrip(true)} >Share trip details</h5>
                    <h2>Lagos (LOS) <img src={require('../../../../../../assets/pages/flight_summary/arrow-dig.png')} alt='arrow' /> Dubai (DXB)</h2>
                    <h6>Mon, 28 Feb&nbsp; &nbsp;-&nbsp; &nbsp;Sat, 26 Mar </h6>
                    <div className='divider'></div>
                    <h4>Team traveling</h4>
                    <Stack direction="row" spacing={2}>
                        <Avatar sx={{cursor: 'pointer'}} onClick={passangerDetails}>ON</Avatar>
                        <Avatar sx={{cursor: 'pointer'}} onClick={passangerDetails}>CU</Avatar>
                        <Avatar sx={{cursor: 'pointer'}} onClick={passangerDetails}>FA</Avatar>
                        <Avatar sx={{cursor: 'pointer'}} onClick={passangerDetails}>AI</Avatar>
                    </Stack>
                    {enableModal && <PassangerDetails enableModal={enableModal} setEnableModal={setEnableModal} />}
                    {openShareTrip && <ShareTripDetail openShareTrip={openShareTrip} setOpenShareTrip={setOpenShareTrip} />}
                </div>
                {/* Price breakdown */}
                <div className='section-part-two'>
                    <div className='price-breakdown'>
                        <h5>Price breakdown</h5>
                        <div className='divider'></div>
                        <div>
                            <h6>Adult x4</h6>
                            <h6>₦ 264,261</h6>
                        </div>
                        <div>
                            <h6>Taxes and Fees</h6>
                            <h6>₦ 264,261</h6>
                        </div>
                        <div>
                            <h6>Booking fee</h6>
                            <h6>Free</h6>
                        </div>
                        <div>
                            <h6>Grand Total</h6>
                            <h6>₦ 264,261</h6>
                        </div>
                    </div>
                    <button className='proceeding_handler' onClick={proceedToPay}>
                        Proceed to pay <ArrowRightAltIcon sx={{ color: '#fff', fontSize: 30, marginLeft: 2 }} />
                    </button>
                </div>
            </section>
            <section className='flight-summary-section-two'>
                <div className='depart-info'>
                    <div className='depart-info-header autoflex'>
                        <h5>Depart (LOS - DXB)</h5>
                        <h5 style={{cursor: 'pointer'}} onClick={()=> setDepartModalEnable(true)} >Details</h5>
                    </div>
                    <div className='divider'></div>
                    {/* flight info section */}
                    <div className='flight-brand-info'>
                        {/* plane brand logo */}
                        <img src={require('../../../../../../assets/pages/flight_summary/airline_logo.png')} alt='airplane-logo' />
                        <div>
                            <h5>Emirates</h5>
                            <h5>Economy</h5>
                        </div>
                    </div>
                    {/* flight time durations */}
                    <div className='flight-time-duration-info'>
                        {/* plane brand logo */}
                        <FlightTakeoffSharpIcon sx={{ color: '#40798C', fontSize: 50 }} />
                        <div>
                            <h5>Lagos LOS</h5>
                            <h5>18:10&nbsp;&nbsp;&nbsp;<span>Mon, 28 Feb</span></h5>
                        </div>
                    </div>
                    <div className='flight-time-duration-info'>
                        {/* plane brand logo */}
                        <FlightLandSharpIcon sx={{ color: '#40798C', fontSize: 50 }} />
                        <div>
                            <h5>Dubai DXB</h5>
                            <h5>04: 15&nbsp;&nbsp;&nbsp;<span>Tue, 1 Mar</span></h5>
                        </div>
                    </div>
                    <h6>1 baggage included</h6>
                </div>
                {enableDepartureModal && <DepartureDetail enableDepartureModal={enableDepartureModal} setDepartModalEnable={setDepartModalEnable} />}
            </section>
            <section className='flight-summary-section-two top-spacing'>
                <div className='depart-info'>
                    <div className='depart-info-header autoflex'>
                        <h5>Return (DXB - LOS)</h5>
                        <h5 style={{ cursor: 'pointer' }} onClick={() => setReturnDetailModalEnable(true)}>Details</h5>
                    </div>
                    <div className='divider'></div>
                    {/* flight info section */}
                    <div className='flight-brand-info'>
                        {/* plane brand logo */}
                        <img src={require('../../../../../../assets/pages/flight_summary/airline_logo.png')} alt='airplane-logo' />
                        <div>
                            <h5>Emirates</h5>
                            <h5>Economy</h5>
                        </div>
                    </div>
                    {/* flight time durations */}
                    <div className='flight-time-duration-info'>
                        {/* plane brand logo */}
                        <FlightTakeoffSharpIcon sx={{ color: '#40798C', fontSize: 50 }} />
                        <div>
                            <h5>Lagos LOS</h5>
                            <h5>18:10&nbsp;&nbsp;&nbsp;<span>Mon, 28 Feb</span></h5>
                        </div>
                    </div>
                    <div className='flight-time-duration-info'>
                        {/* plane brand logo */}
                        <FlightLandSharpIcon sx={{ color: '#40798C', fontSize: 50 }} />
                        <div>
                            <h5>Dubai DXB</h5>
                            <h5>04: 15&nbsp;&nbsp;&nbsp;<span>Tue, 1 Mar</span></h5>
                        </div>
                    </div>
                    <h6>1 baggage included</h6>
                </div>
                {enableReturnDetailModal && <ReturnDetail enableReturnDetailModal={enableReturnDetailModal} setReturnDetailModalEnable={setReturnDetailModalEnable} />}
                <button className='proceeding_handler left-spacing' onClick={proceedToPay}>
                    Proceed to pay <ArrowRightAltIcon sx={{ color: '#fff', fontSize: 30, marginLeft: 2 }} />
                </button>
            </section>
        </main>
    )
}

export default FlightSummary