import React from 'react';
import Modal from '@mui/material/Modal';
import './style.css'
export default function PassangerDetails({ enableModal, setEnableModal }) {

    return (
        <div>
            <Modal
                open={enableModal}
                onClose={() => setEnableModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <section className='passangerDetails'>
                    <h2>Passengers Details</h2>
                    <div className='divider'></div>
                    <div className='collect-passanger-info'>
                        <h3>Choose the travelling passenger</h3>
                        <select>
                            <option></option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <h5 className='info-alert'>Traveller names must match government-issued photo ID.</h5>
                        <form className='passanger-info-form'>
                            <label>
                                First name
                                <input placeholder='Onyekachi' value={'Onyekachi'} />
                            </label>
                            <label>
                                Middle name
                                <input placeholder='Sunday' value={'Sunday'} />
                            </label>
                            <label>
                                Surname
                                <input placeholder='Nwagwu' value={'Nwagwu'} />
                            </label>
                            <label>
                                Gender
                                <select className='dropdown_select'>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </label>
                            <label>
                                Phone number
                                <input placeholder='+234 | 8125337315' value={'+234 | 8125337315'} />
                            </label>
                            <label>
                                Email address
                                <input placeholder='nkachi@gokardinal.com' value={'nkachi@gokardinal.com'} />
                            </label>
                            <label>
                                Passport number
                                <input placeholder='A17665232' value={'A17665232'} />
                            </label>
                            <label>
                                Expiry date
                                <input placeholder='08/09/2027' value={'08/09/2027'} />
                            </label>
                            <label>
                                Nationality
                                <select className='dropdown_select'>
                                    <option value="Pakistan">Pakistan</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="Canada">Canada</option>
                                </select>
                            </label>
                            <button>Save</button>
                        </form>
                    </div>
                </section>
            </Modal>
        </div>
    );
}
