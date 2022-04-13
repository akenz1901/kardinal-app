import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './style.css'
import { Modal } from '@mui/material';
function ShareTripDetail({ openShareTrip, setOpenShareTrip}) {
    const closeAndNavigateBack = () => setOpenShareTrip(false);
    return (
        <div>
            <Modal
                open={openShareTrip}
                onClose={closeAndNavigateBack}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className='share-trip-info'>
                    <h1 className='payment-method-heading t-spacing'>Share trip details</h1>
                    <CloseIcon
                        sx={{
                            color: '#000000',
                            fontSize: 30,
                            position: 'absolute',
                            top: 30,
                            right: 30,
                            cursor: 'pointer'
                        }}
                        onClick={closeAndNavigateBack}
                    />
                    <div className='divider'></div>
                    <div className='send-emailto'>
                        <h5>Send email to</h5>
                        <input type={'text'} placeholder='separate emails by comma' />
                        <br />
                        <label>
                            <input type={'checkbox'} placeholder='separate emails by comma' />
                            send me a copy
                        </label>
                    </div>
                    <button onClick={closeAndNavigateBack}>Save</button>
                </div>
            </Modal>
        </div>
    )
}

export default ShareTripDetail