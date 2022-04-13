import React, { useEffect } from 'react'
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import './style.css'
function FlightLoader({ enableModal, setEnableModal }) {
    let navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate('search-flight');
            setEnableModal(false)
        }, 1000);
    }, []);
    return (
        <div>
            <Modal
                open={enableModal}
                onClose={() => enableModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <section className='loader-view'>
                    <div>
                        <img src={require('../../../../../../assets/pages/loaderplane.png')} alt='loader-plane' />
                        <div className='line'>
                            <div className='ani-line'></div>
                        </div>
                        <p>Price and availability for your trip may have changed in the last 30 minutes</p>
                    </div>
                </section>
            </Modal>
        </div>
    )
}

export function HotelLoader({ enableModal, setEnableModal }) {
    let navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate('search-hotel');
            setEnableModal(false)
        }, 1100);
    }, []);
    return (
        <div>
            <Modal
                open={enableModal}
                onClose={() => enableModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <section className='loader-view'>
                    <div>
                        <img className='hotel' src={require('../../../../../../assets/pages/SchoolBuilding.png')} alt='loader-plane' />
                        <div className='line'>
                            <div className='ani-line-h'></div>
                        </div>
                        <p>Price and availability for your trip may have changed in the last 30 minutes</p>
                    </div>
                </section>
            </Modal>
        </div>
    )
}
export default FlightLoader