import React from 'react'
import EventNoteIcon from '@mui/icons-material/EventNote';
import './report.css'
const Reporting = () => {
  return (
    <div className='reporting'>
      <h1>Reporting</h1>
      <div className='r-sectioning'>
        {/* <section className='vitualization'>
          <div className='topAirline'></div>
        </section> */}
        <section className='part-debit'>
          <h1>Filter by booking dates</h1>
          <div className='select-date'>
            <input />
          </div>
          <img src={require('../../assets/report/debit.jpeg')} />
        </section>
      </div>
    </div>
  )
}

export default Reporting