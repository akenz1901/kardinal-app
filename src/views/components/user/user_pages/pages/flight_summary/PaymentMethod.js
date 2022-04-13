import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import './style.css'
import { useNavigate } from 'react-router-dom';

function PaymentMethod() {
    let navigate = useNavigate();
    const closeAndNavigateBack = () => navigate(-1);
    return (
        <main className='payment-m'>
            <div>
                <h1 className='payment-method-heading'>Choose your preferred payment method</h1>
                <section className='paynow'>
                    <h1 className='payment-method-heading t-spacing'>Pay now</h1>
                    <CloseIcon
                        sx={{ color: '#000', fontSize: 25 }}
                        className='close_icon'
                        onClick={closeAndNavigateBack}
                    />
                    <div className='divider'></div>
                    <ul className='options-bullets'>
                        <li>
                            <h4>Book on hold</h4>
                            <h5>Hold this trip pending confirmation. (T & C applies)</h5>
                        </li>
                        <li>
                            <h4>Pay with wallet</h4>
                            <h5>Use your existing wallet balance to pay for this trip</h5>
                        </li>
                        <li>
                            <h4>Pay with credit</h4>
                            <h5>Use your credit balance to pay for this trip (includes a ₦ 2000 flat rate fee)</h5>
                        </li>
                        <li>
                            <h4>Pay with card</h4>
                        </li>
                        <li>
                            <h4>Pay with bank transfer</h4>
                        </li>
                        <li>
                            <h4>Pay with Cryptocurrency (coming soon)</h4>
                        </li>
                    </ul>
                </section>
            </div>
        </main>
    )
}

export default PaymentMethod