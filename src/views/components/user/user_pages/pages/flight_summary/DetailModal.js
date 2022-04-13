import React from 'react';
import Modal from '@mui/material/Modal';
import './style.css'
export function DepartureDetail({ enableDepartureModal, setDepartModalEnable }) {
    return (
        <div>
            <Modal
                open={enableDepartureModal}
                onClose={() => setDepartModalEnable(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <section className='flight-modal-view'>
                    <h6>Departure Mon, 28 Feb</h6>
                    <div className='flight-info'>
                        <img src={require('../../../../../../assets/pages/flight_summary/modal_airline_brand.png')} alt='flight-brand' />
                        <h3>18:10 <br /><br />04:15</h3>
                        <div className='airport-name'>
                            <h3>LOS  Murtala Muhammed International</h3>
                            <h3>DXB Dubai International</h3>
                            <h4>7h 5m &nbsp;&nbsp;&nbsp;Emirates EK-784 Economy</h4>
                        </div>
                    </div>
                    <h5 className='refunable'>Refundable&nbsp; &nbsp; &nbsp;Baggage 2 pieces</h5>
                </section>
            </Modal>
        </div>
    );
}

export function ReturnDetail({ enableReturnDetailModal, setReturnDetailModalEnable }) {
    return (
        <div>
            <Modal
                open={enableReturnDetailModal}
                onClose={() => setReturnDetailModalEnable(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <section className='flight-modal-view'>
                    <h6>Departure Mon, 28 Feb</h6>
                    <div className='flight-info'>
                        <img src={require('../../../../../../assets/pages/flight_summary/modal_airline_brand.png')} alt='flight-brand' />
                        <h3>18:10 <br /><br />04:15</h3>
                        <div className='airport-name'>
                            <h3>LOS  Murtala Muhammed International</h3>
                            <h3>DXB Dubai International</h3>
                            <h4>7h 5m &nbsp;&nbsp;&nbsp;Emirates EK-784 Economy</h4>
                        </div>
                    </div>
                    <h5 className='refunable'>Refundable&nbsp; &nbsp; &nbsp;Baggage 2 pieces</h5>
                </section>
            </Modal>
        </div>
    );
}
