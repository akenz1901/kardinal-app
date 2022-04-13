import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import './search_hotel.css'
import { useNavigate } from 'react-router-dom';
function StaySummary() {
    let navigate = useNavigate();
    return (
        <main>
            <section className='stay-summary-sec'>
                <h1>Here’s your stay summary</h1>
                <div className='stay-summary'>
                    <div>
                        <div className='you-stay'>
                            <div className='you-stay-header'>
                                <h1>Your Stay</h1>
                                <h1>Details</h1>
                            </div>
                            <div className='divider'></div>
                            <div className='stay_part2'>
                                <div className='h-d'>
                                    <h3>Breakfast included</h3>
                                    <h3>free cancellation</h3>
                                </div>
                                <h3>Insert address here</h3>
                                <h2>09 nights</h2>
                                <div className='hotel-specs'>
                                    <img src={require('../../../assets/pages/hotel/preview_hotel.png')} alt='preview_hotel' />
                                    <div>
                                        <label>
                                            <h4>Room Type</h4>
                                            <h5>Single Deluxe</h5>
                                        </label>
                                        <label>
                                            <h4>Room</h4>
                                            <h5>1 room</h5>
                                        </label>
                                        <label>
                                            <h4>Guest</h4>
                                            <h5>2 adults</h5>
                                        </label>
                                    </div>
                                </div>
                                <div className='time-duration'>
                                    <label>
                                        <h4>Check - in</h4>
                                        <h5>18:10   Mon, 11 Apr 2022</h5>
                                    </label>
                                    <label>
                                        <h4>Check - Out</h4>
                                        <h5>11:15   Wed, 20 Apr 2022</h5>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button className='proceeding_handler l-s' onClick={() => navigate('/payment-method')} >
                            Proceed to pay <ArrowRightAltIcon sx={{ color: '#fff', fontSize: 30, marginLeft: 2 }} />
                        </button>
                    </div>
                    <div className='price-breakdown p0b'>
                        <h2>Price breakdown</h2>
                        <div className='divider'></div>
                        <label>
                            Beckett Suites
                            <div>
                                <h4>1 king bed</h4>
                                <h4>Breakfast included</h4>
                            </div>
                        </label>
                        <label>
                            Single Deluxe
                            <div>
                                <h4>09 nights, 1 room</h4>
                                <h4>09 x 1 x  ₦50,000</h4>
                            </div>
                        </label>
                        <div className='divider'></div>
                        <div className='pricing_br'>
                            <h3>Grand Total</h3>
                            <h3>₦ 450,000</h3>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    )
}

export default StaySummary