import * as React from 'react';
import './modal.css'
import Modal from '@mui/material/Modal';

// Material ui icon import
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
// import CopyIcon from '../../assets/pages/copyIcon.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';


export default function PaymentModal({ paymentModal, setPaymentModal }) {
    const [activebtn, setActivebtn] = React.useState('bt');
    return (
        <div>
            <Modal
                open={paymentModal}
                onClose={() => setPaymentModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <section className='payment_modal_cont'>
                    <h1 className='modal_heading_top'>Choose a payment method</h1>
                    <h1 className='modal_sub_heading_top'>Fund your wallet and get your credit topped</h1>
                    <div className='buttonCont'>
                        <button
                            onClick={() => setActivebtn('bt')}
                            className={activebtn === 'bt' ? 'active_option' : 'inactive_option'}>
                            <ArrowRightAltIcon sx={{ color: activebtn === 'bt' ? '#fff' : '#252627', fontSize: 15 }} />
                            <AccountBalanceIcon sx={{ color: activebtn === 'bt' ? '#fff' : '#252627', fontSize: 15 }} />
                            <h4>Bank transfer</h4>
                        </button>
                        <button
                            onClick={() => setActivebtn('cc')}
                            className={activebtn === 'cc' ? 'active_option' : 'inactive_option'}>
                            <CreditCardIcon sx={{ color: activebtn === 'cc' ? '#fff' : '#252627', fontSize: 15 }} />
                            <h4>Corporate Card</h4>
                        </button>
                        <button
                            onClick={() => setActivebtn('USSD')}
                            className={activebtn === 'USSD' ? 'active_option' : 'inactive_option'}>
                            <ArrowRightAltIcon sx={{ color: activebtn === 'USSD' ? '#fff' : '#252627', fontSize: 15 }} />
                            <AccountBalanceIcon sx={{ color: activebtn === 'USSD' ? '#fff' : '#252627', fontSize: 15 }} />
                            <h4>USSD</h4>
                        </button>
                    </div>
                    {activebtn === 'bt' && <BankTransferComp setPaymentModal={setPaymentModal} />}
                    {activebtn === 'cc' && <CorporateCard setPaymentModal={setPaymentModal} />}
                    {activebtn === 'USSD' && <USSD setPaymentModal={setPaymentModal} />}
                </section>
            </Modal>
        </div>
    );
}


const BankTransferComp = ({setPaymentModal}) => {
    return (
        <section className='banktransfercont'>
            <h2 className='bank-payment-info'>Bank payment information</h2>
            <div className='info-cont'>
                <div>
                    <h4>Bank name:</h4>
                    <h3>Wema Bank</h3>
                </div>
                <div>
                    <h4>Account name:</h4>
                    <h3>Kardinal Corporate External Services</h3>
                </div>
                <div>
                    <h4>Account number:</h4>
                    <h3>7820059143</h3>
                </div>
                <ContentCopyOutlinedIcon className='copy-icon' sx={{color: '#cdcdcd', fontSize: 20}} />
            </div>
            <button className='send-money-btn'>
                I have sent the money
            </button>
            <button className='cancel-payment' onClick={() => setPaymentModal(false)}>
                Cancel payment
            </button>
        </section>
    )
}

const CorporateCard = ({setPaymentModal}) => {
    return (
        <section className='USSD'>
            <h2 className='bank-payment-info'>Credit/Debit card infromation</h2>
            <form>
                <input placeholder='Card Number' className='card_number' />
                <input placeholder='First name' className='corporate_card_input' />
                <input placeholder='Last name' className='corporate_card_input' />
                <input placeholder='Security code' className='corporate_card_input' />
                <input placeholder='Date' className='corporate_card_input' />
            </form>
            <button className='cancel-payment' onClick={() => setPaymentModal(false)}>
                Cancel payment
            </button>
        </section>
    )
}

const USSD = ({setPaymentModal}) => {
    return (
        <section className='USSD'>
            <h2 className='bank-payment-info'>USSD payment information</h2>
            <div className='info-cont fitCenter'>
                <h1>Coming soon</h1>
            </div>
            <button className='cancel-payment' onClick={() => setPaymentModal(false)}>
                Cancel payment
            </button>
        </section>
    )
}