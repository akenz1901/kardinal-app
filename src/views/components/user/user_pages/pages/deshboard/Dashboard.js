import React from 'react'
import './dashboard.css'
import ImageCarosel from '../utils/swipeable/SwipeableView'
import { BookingOnHold, SearchHistory } from '../../tabletemplate'
import BasicModal from '../utils/Modal'
import PaymentModal from '../utils/modal/PaymentModal'
import api from '../../../../actions/apiServices'

import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';


function Dashboard() {
  const [enableModal, setEnableModal] = React.useState(false);
  const [enablePaymentModal, setEnablePaymentModal] = React.useState(false);
  const [credit, setCredit] = React.useState(null)
  const [wallet, setWallet] = React.useState(null)
  const [summary, setSummary] = React.useState(null)

  React.useEffect(() => {
      api
      .fetch('/api/finance/credit_balance/', {},true)
      .then(response =>{
          setCredit(response.data[0])            
      })
      .catch(err => {console.log(err)}),

      api
      .fetch('/api/finance/fundwallet/', {},true)
      .then(response =>{
          setWallet(response.data[0])
      }).catch(err => {console.log(err)}),

      api
      .fetch('/api/finance/transactions_summary', {},true)
      .then(response =>{
          setSummary(response.data[0])
      }).catch(err => {console.log(err)})
      ,  
      []
  })
  return (
    <main>
      <h2 className='content-heading'>Dashboard</h2>
      <section className='section1'>
        {/* swiper images */}
        <ImageCarosel />
        <div className='fund-your-acc'>
          <div onClick={() => setEnablePaymentModal(true)}>
            <AddCardOutlinedIcon sx={{ color: '#fff', fontSize: 30 }} />
            <h2 className='fund-your-acc-text'>Fund your account</h2>
          </div>
          <div className='fund-amount'>
            <div>
              <CreditCardOutlinedIcon sx={{ color: '#cdcdcd', fontSize: 25, marginRight: 1 }} />
              <h4>Credit balance</h4>
              <h4 className='amount₦'>{credit != null ? '₦' + credit.balance:"NILL"}</h4>
            </div>
            <div>
              <AccountBalanceWalletOutlinedIcon sx={{ color: '#cdcdcd', fontSize: 25, marginRight: 1 }} />
              <h4>Wallet balance</h4>
              <h4 className='amount₦'>{wallet != null ? '₦' + wallet.balance:"NILL"}</h4>
            </div>
            <div>
              <BalanceOutlinedIcon sx={{ color: '#cdcdcd', fontSize: 25, marginRight: 1 }} />
              <h4>Total balance</h4>
              <h4 className='amount₦'>{summary != null ? '₦' + summary.total_spend:"NILL"}</h4>
            </div>
            <div>
              <AddCircleOutlinedIcon sx={{ color: '#cdcdcd', fontSize: 25, marginRight: 1 }} />
              <h4>Bonus Points</h4>
              <h4 className='amount₦'>{summary != null ? summary.bonus_spend:""}</h4>
            </div>
          </div>
        </div>
      </section>
      <h2 className='content-heading'>Flight Summary</h2>
      <section className='section2 autoflex'>
        <div className='box autoflex'>
          <div>
            <AirplaneTicketOutlinedIcon sx={{ color: '#40798C', fontSize: 25 }} />
            <h4 className='info-title'>Flights</h4>
          </div>
          <div>
            <h4 className='quan-info'>400</h4>
            <h4 className='amount-info'>₦0</h4>
          </div>
        </div>
        <div className='box autoflex'>
          <div>
            <HotelOutlinedIcon sx={{ color: '#40798C', fontSize: 25 }} />
            <h4 className='info-title'>Hotel</h4>
          </div>
          <div>
            <h4 className='quan-info'>50</h4>
            <h4 className='amount-info'>{summary != null ?'₦' + summary.hotel_spend:"NIL"}</h4>
          </div>
        </div>
        <div className='box autoflex'>
          <div>
            <DirectionsCarFilledOutlinedIcon sx={{ color: '#40798C', fontSize: 25 }} />
            <h4 className='info-title'>Car</h4>
          </div>
          <div>
            <h4 className='quan-info'>50</h4>
            <h4 className='amount-info'>{summary != null ?'₦' + summary.car_spend:"NIL"}</h4>
          </div>
        </div>
        <div className='box autoflex'>
          <div>
            <EventOutlinedIcon sx={{ color: '#40798C', fontSize: 25 }} />
            <h4 className='info-title'>Events</h4>
          </div>
          <div>
            <h4 className='quan-info'>09</h4>
            <h4 className='amount-info'>₦0</h4>
          </div>
        </div>
      </section>
      <section className='section3 autoflex'>
        <BookingOnHold setEnableModal={setEnableModal} />
        <SearchHistory />
      </section>
      {enableModal === true && <BasicModal setEnableModal={setEnableModal} enableModal={enableModal} />}
      {enablePaymentModal === true && <PaymentModal setPaymentModal={setEnablePaymentModal} paymentModal={enablePaymentModal} />}
    </main>
  )
}

export default Dashboard