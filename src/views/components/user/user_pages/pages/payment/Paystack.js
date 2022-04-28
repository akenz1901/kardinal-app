import React from 'react';
import logo from '../../../../../../assets/pages/paystack_logo.png';
import { PaystackButton } from 'react-paystack';
import User from '../../../../actions/UserInfo';
// import './paystack.css';
import { Modal } from '@mui/material';
import '../utils/modal/modal.css'


function PaystackPayment({ paymentModal, setPaymentModal }) {
  const [amount, setAmount] = React.useState(0)
  const [userEmail, setUserEmail] = React.useState('')
  const email = localStorage.getItem('email')

  React.useEffect(() =>{
    setUserEmail(email),
    []
  });
  
  const config = {
    reference: (new Date()).getTime().toString(),
    email: userEmail,
    amount: amount,
    publicKey: 'pk_test_927b826de7774ad0c52c1d8f2abe1f70c216f1fe',
  };
  // you can call this function anything
  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }

  const componentProps = {
      ...config,
      text: 'Pay now',
      onSuccess: (reference) => handlePaystackSuccessAction(reference),
      onClose: handlePaystackCloseAction,
  };

  return (
    <>
    <Modal
    open={paymentModal}
    onClose={() => setPaymentModal(false)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
    <section className='payment_modal_cont'>
    <div className="USSD">
    {/* <img src={logo} className="App-logo" alt="logo" width={30}/> */}
    <h1 className='modal_sub_heading_top'style={{fontSize:17}}>Fund your wallet and get your credit topped</h1>
    <div>
    <input 
      placeholder='Amount' 
      className='card_number' 
      onChange={(e) => setAmount(e.target.value)}
      style={{height: 50, paddingLeft:15}}
      />
      </div>
    {/* <a onClick={() => setPaymentModal(false)} > */}
    <PaystackButton {...componentProps} />
    {/* </a> */}
    <button className='cancel-payment' onClick={() => setPaymentModal(false)}>
                Cancel payment
            </button>
    </div>
    </section>
    </Modal>
    </>
  );
}

export default PaystackPayment;