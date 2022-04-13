import React from 'react';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';

export default function BasicModal({ enableModal, setEnableModal }) {
    let navigate = useNavigate();
    const handleModal = () => setEnableModal(false);
    const proceed = () => {
        navigate('/flight-summary');
        setEnableModal(false);
    }
    return (
        <div>
            <Modal
                open={enableModal}
                onClose={() => enableModal(false)}
            >
                <section className='modal-view'>
                    <h2>Heads up!</h2>
                    <p>You are about to process this ticket,
                        do you wish to continue?</p>
                    <div className='btnCon'>
                        <button onClick={handleModal}>Return</button>
                        <button onClick={proceed}>Proceed</button>
                    </div>
                </section>
            </Modal>
        </div>
    );
}
