import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './styles.css'
import { useNavigate } from 'react-router-dom';
import AppNavBar from '../../../AppNavbar/app_nav'

let flightDetail = [
  {
    brand: require('../../../../../../../assets/pages/flight_summary/airline_logo.png'),
    airline_name: 'Emirates',
    date: '18:10',
    time: '04:15',
    duration: '7h 5m',
    cost: 'N18,000',
    detail: 'departure',
    stay: []
  },
  {
    brand: require('../../../../../../../assets/pages/flight_summary/Kenya-Airways-removebg-preview1.png'),
    airline_name: 'Kenya Airways',
    date: '18:10',
    time: '04:15',
    duration: '7h 5m',
    cost: 'N18,000',
    detail: 'return',
    stay: ['NBO']
  },
  {
    brand: require('../../../../../../../assets/pages/flight_summary/51c515f31725bbc72bf5685c69657d15-removebg-preview1.png'),
    airline_name: 'Ethiopian Airlines',
    date: '18:10',
    time: '04:15',
    duration: '7h 5m',
    cost: 'N18,000',
    detail: 'other',
    stay: ['LFW', 'ADD']
  },
]

function SearchFlight() {
  const [selected, setSelected] = useState([]);
  const [onewayData, setFlightData] = useState({})

  // React.useEffect(() => {
  //   setFlightData(flightData())
  //   console.log(onewayData),
  //   []
  // })

  let navigate = useNavigate()
  return (
    <>
    <AppNavBar />
    <main>
      <section className='search-flight'>
        <div className='search-flight-heading-cont'>
          <h2>Lagos (LOS) <img src={require('../../../../../../../assets/pages/flight_summary/arrow-dig.png')} /> Dubai (DXB)</h2>
          <button onClick={() => navigate(-1)}>Edit</button>
        </div>
        <h4>Mon, 28 Feb&nbsp; -&nbsp; Sat, 26 Mar &nbsp; &nbsp; 1 adult &nbsp;&nbsp; Economy</h4>
        <ButtonGroup />
        <h5 className='info-alert' style={{
          height: '50px', paddingTop: '18px', paddingLeft: '10%', color: '#000000'
        }}>Transparent pricing. Zero hidden or booking charge.</h5>
        {selected.length !== 0 && <SelectedFlight selected={selected} setSelected={setSelected} />}
        <div className='big-box'>
          <h1>{selected.length + 1}</h1>
          {selected.length === 0 ?
            <h3>Select departure flight &nbsp; &nbsp; Mon 28 Feb</h3>
            :
            <h3>Select return flight &nbsp; &nbsp; Mon 28 Feb</h3>
          }
        </div>
        <FLightSelection selected={selected} setSelected={setSelected} />
      </section>
    </main>
    </>
  )
}

const ButtonGroup = () => {
  return (
    <section style={{ marginTop: '5%' }}>
      <Dropdown className="d-inline dropdown-btn">
        <Dropdown.Toggle id="dropdown-autoclose-true" style={{ width: '167.51px' }}>
          Sort by: Class
          <img className='chevRon' src={require('../../../../../../../assets/pages/flight_summary/Chevron.png')} alt='Chevron' />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item className='dd-item'>
            <img src={require('../../../../../../../assets/pages/flight_summary/bullet.png')} alt='butllet' />
            Economy
          </Dropdown.Item>
          <Dropdown.Item className='dd-item'>
            <img src={require('../../../../../../../assets/pages/flight_summary/bullet.png')} alt='butllet' />
            Premium
          </Dropdown.Item>
          <Dropdown.Item className='dd-item'>
            <img src={require('../../../../../../../assets/pages/flight_summary/bullet.png')} alt='butllet' />
            Business
          </Dropdown.Item>
          <Dropdown.Item className='dd-item'>
            <img src={require('../../../../../../../assets/pages/flight_summary/bullet.png')} alt='butllet' />
            First
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="d-inline mx-2 dropdown-btn">
        <Dropdown.Toggle id="dropdown-autoclose-true">
          Stops
          <img className='chevRon' src={require('../../../../../../../assets/pages/flight_summary/Chevron.png')} alt='Chevron' />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item className='dd-item'>
            <img src={require('../../../../../../../assets/pages/flight_summary/bullet.png')} alt='butllet' />
            Non-stop
          </Dropdown.Item>
          <Dropdown.Item className='dd-item'>
            <img src={require('../../../../../../../assets/pages/flight_summary/bullet.png')} alt='butllet' />
            1 stop or fewer
          </Dropdown.Item>
          <Dropdown.Item className='dd-item'>
            <img src={require('../../../../../../../assets/pages/flight_summary/bullet.png')} alt='butllet' />
            2 stop or fewer
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="d-inline mx-2 dropdown-btn">
        <Dropdown.Toggle id="dropdown-autoclose-true">
          Times
          <img className='chevRon' src={require('../../../../../../../assets/pages/flight_summary/Chevron.png')} alt='Chevron' />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <div className='dm-custom'>
            <div className='dd-item-custom'>
              <h5>Depature time</h5>
              <label className='f-time'>
                <input type={'checkbox'} />
                <div className='fligh-timing'>
                  <h6>Early</h6>
                  <h6>00:00 - 06:00</h6>
                </div>
              </label>
              <label className='f-time'>
                <input type={'checkbox'} />
                <div className='fligh-timing'>
                  <h6>Early</h6>
                  <h6>00:00 - 06:00</h6>
                </div>
              </label>
              <label className='f-time'>
                <input type={'checkbox'} />
                <div className='fligh-timing'>
                  <h6>Early</h6>
                  <h6>00:00 - 06:00</h6>
                </div>
              </label>
              <label className='f-time'>
                <input type={'checkbox'} />
                <div className='fligh-timing'>
                  <h6>Early</h6>
                  <h6>00:00 - 06:00</h6>
                </div>
              </label>
            </div>
            <div className='dd-item-custom'>
              <h5>Arrival time</h5>
              <label className='f-time'>
                <input type={'checkbox'} />
                <div className='fligh-timing'>
                  <h6>Early</h6>
                  <h6>00:00 - 06:00</h6>
                </div>
              </label>
              <label className='f-time'>
                <input type={'checkbox'} />
                <div className='fligh-timing'>
                  <h6>Early</h6>
                  <h6>00:00 - 06:00</h6>
                </div>
              </label>
              <label className='f-time'>
                <input type={'checkbox'} />
                <div className='fligh-timing'>
                  <h6>Early</h6>
                  <h6>00:00 - 06:00</h6>
                </div>
              </label>
              <label className='f-time'>
                <input type={'checkbox'} />
                <div className='fligh-timing'>
                  <h6>Early</h6>
                  <h6>00:00 - 06:00</h6>
                </div>
              </label>
            </div>
          </div>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="d-inline mx-2 dropdown-btn">
        <Dropdown.Toggle id="dropdown-autoclose-true">
          Price
          <img className='chevRon' src={require('../../../../../../../assets/pages/flight_summary/Chevron.png')} alt='Chevron' />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item className='dd-item'>
            <img src={require('../../../../../../../assets/pages/flight_summary/bullet.png')} alt='butllet' />
            Refundable
          </Dropdown.Item>
          <Dropdown.Item className='dd-item'>
            <img src={require('../../../../../../../assets/pages/flight_summary/bullet.png')} alt='butllet' />
            Non refundable
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="d-inline mx-2 dropdown-btn">
        <Dropdown.Toggle id="dropdown-autoclose-true">
          Airline
          <img className='chevRon' src={require('../../../../../../../assets/pages/flight_summary/Chevron.png')} alt='Chevron' />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item className='dd-item'>
            <img src={require('../../../../../../../assets/pages/flight_summary/bullet.png')} alt='butllet' />
            Qatar
          </Dropdown.Item>
          <Dropdown.Item className='dd-item'>
            <img src={require('../../../../../../../assets/pages/flight_summary/bullet.png')} alt='butllet' />
            Ethiopian
          </Dropdown.Item>
          <Dropdown.Item className='dd-item'>
            <img src={require('../../../../../../../assets/pages/flight_summary/bullet.png')} alt='butllet' />
            Airpeace
          </Dropdown.Item>
          <Dropdown.Item className='dd-item'>
            <img src={require('../../../../../../../assets/pages/flight_summary/bullet.png')} alt='butllet' />
            Arik air
          </Dropdown.Item>
          <Dropdown.Item className='dd-item'>
            <img src={require('../../../../../../../assets/pages/flight_summary/bullet.png')} alt='butllet' />
            Emirates
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </section>
  )
}

const FLightSelection = ({ selected, setSelected }) => {
  const [openDetailBar, setOpenDetailBar] = useState(false);
  const [getPosition, setGetPosition] = useState(0);
  return (
    <>
      {flightDetail.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <div className={`flight-selection ${flightDetail.length - 1 !== index && 'cntr'}`}>
              <div className='part-a'>
                <img src={item.brand} alt='airline logo' />
                <h4>{item.airline_name}</h4>
              </div>
              <div className='part-b'>
                <table className='timeline'>
                  <thead>
                    <tr>
                      <td>{item.date}</td>
                      <td>
                        <div className={`${item.stay.length > 1 ? 'twostay' : 'timebar'}`}>
                          {item.stay.map((item, index) => {
                            return <h6 key={index}>{item}</h6>
                          })}
                        </div>
                      </td>
                      <td>{item.time}</td>
                      <td>{item.duration}</td>
                      <td>{item.cost}</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>DXB</td>
                      <td></td>
                      <td>LOS</td>
                      <td>non-stop</td>
                      <td>return <br />
                        <ExpandMoreIcon
                          onClick={() => {
                            setGetPosition(index);
                            setOpenDetailBar(true);
                          }}
                          sx={{
                            color: '#655F5F',
                            fontSize: 30,
                            position: 'absolute',
                            top: 20,
                            right: 50,
                            cursor: 'pointer'
                          }} />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {
              openDetailBar && getPosition === index &&
              <DepartureFlight
                selected={selected} setSelected={setSelected}
                setOpenDetailBar={setOpenDetailBar} flightDetail={item}
              />
            }
          </React.Fragment>
        )
      })}
    </>
  )
}

const DepartureFlight = ({ setOpenDetailBar, flightDetail, selected, setSelected }) => {
  let navigate = useNavigate()
  const handleSelect = () => {
    if (selected.length === 0) {
      let getSelected = [flightDetail, ...selected];
      setSelected(getSelected)
      setOpenDetailBar(false)
    } else {
      navigate('/flight-summary')
    }
  }
  return (
    <>
      {flightDetail.airline_name === 'Emirates' &&
        <section className='departure-flight'>
          <h6>Departure Mon, 28 Feb</h6>
          <div className='flight-info'>
            <img src={require('../../../../../../../assets/pages/flight_summary/modal_airline_brand.png')} alt='flight-brand' />
            <h3> 18:10 <br /><br /> 04:15</h3>
            <div className='airport-name'>
              <h3>LOS  Murtala Muhammed International</h3>
              <h3>DXB Dubai International</h3>
              <h4>7h 5m &nbsp;&nbsp;&nbsp;Emirates EK-784 Economy</h4>
            </div>
          </div>
          <h5 className='refunable'>Refundable&nbsp; &nbsp; &nbsp;Baggage 2 pieces</h5>
          <button onClick={handleSelect}>Select</button>
        </section>
      }
      {flightDetail.airline_name === 'Kenya Airways' &&
        <>
          <section className='departure-flight custom-changes'>
            <h6>Departure Mon, 28 Feb</h6>
            <div className='flight-info'>
              <img src={flightDetail.brand} alt='flight-brand' />
              <h3> 18:10 <br /><br /> 04:15</h3>
              <div className='airport-name'>
                <h3>LOS  Murtala Muhammed International</h3>
                <h3>NBO Jomo Kenyatta International </h3>
                <h4>7h 5m &nbsp;&nbsp;&nbsp;Emirates EK-784 Economy</h4>
              </div>
            </div>
            <h5 className='refunable'>Refundable&nbsp; &nbsp; &nbsp;Baggage 2 pieces</h5>
          </section>
          <div className='nex-t'>
            <div className='next'>
              <h1>Layover at Nairobi (NBO) </h1>
              <h1>Long Layover &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   11h 25m </h1>
            </div>
          </div>
          <section className='departure-flight'>
            <h6>Departure Mon, 28 Feb</h6>
            <div className='flight-info'>
              <img src={flightDetail.brand} alt='flight-brand' />
              <h3> 18:10 <br /><br /> 04:15</h3>
              <div className='airport-name'>
                <h3>NBO Jomo Kenyatta International </h3>
                <h3>DXB Dubai International</h3>
                <h4>7h 5m &nbsp;&nbsp;&nbsp;Emirates EK-784 Economy</h4>
              </div>
            </div>
            <h5 className='refunable'>Refundable&nbsp; &nbsp; &nbsp;Baggage 2 pieces</h5>
            <button onClick={handleSelect}>Select</button>
          </section>
        </>
      }
      {flightDetail.airline_name === 'Ethiopian Airlines' &&
        <>
          <section className='departure-flight custom-changes'>
            <h6>Departure Mon, 28 Feb</h6>
            <div className='flight-info'>
              <img src={flightDetail.brand} alt='flight-brand' />
              <h3> 18:10 <br /><br /> 04:15</h3>
              <div className='airport-name'>
                <h3>LOS  Murtala Muhammed International</h3>
                <h3>DXB Dubai International</h3>
                <h4>7h 5m &nbsp;&nbsp;&nbsp;Emirates EK-784 Economy</h4>
              </div>
            </div>
            <h5 className='refunable'>Refundable&nbsp; &nbsp; &nbsp;Baggage 2 pieces</h5>
          </section>
          <div className='nex-t change-bg'>
            <div className='next'>
              <h1>Layover at Nairobi (NBO) </h1>
              <h1>Long Layover &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   11h 25m </h1>
            </div>
          </div>
          <section className='departure-flight custom-changes'>
            <h6>Departure Mon, 28 Feb</h6>
            <div className='flight-info'>
              <img src={flightDetail.brand} alt='flight-brand' />
              <h3> 18:10 <br /><br /> 04:15</h3>
              <div className='airport-name'>
                <h3>LOS  Murtala Muhammed International</h3>
                <h3>DXB Dubai International</h3>
                <h4>7h 5m &nbsp;&nbsp;&nbsp;Emirates EK-784 Economy</h4>
              </div>
            </div>
            <h5 className='refunable'>Refundable&nbsp; &nbsp; &nbsp;Baggage 2 pieces</h5>
          </section>
          <div className='nex-t change-bg'>
            <div className='next'>
              <h1>Layover at Nairobi (NBO) </h1>
              <h1>Long Layover &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   11h 25m </h1>
            </div>
          </div>
          <section className='departure-flight custom-changes'>
            <h6>Departure Mon, 28 Feb</h6>
            <div className='flight-info'>
              <img src={flightDetail.brand} alt='flight-brand' />
              <h3> 18:10 <br /><br /> 04:15</h3>
              <div className='airport-name'>
                <h3>LOS  Murtala Muhammed International</h3>
                <h3>DXB Dubai International</h3>
                <h4>7h 5m &nbsp;&nbsp;&nbsp;Emirates EK-784 Economy</h4>
              </div>
            </div>
            <h5 className='refunable'>Refundable&nbsp; &nbsp; &nbsp;Baggage 2 pieces</h5>
            <button onClick={handleSelect}>Select</button>
          </section>
        </>
      }
    </>
  )
}

const SelectedFlight = ({ selected, setSelected }) => {
  const handleChangeSelectedFlight = () => setSelected([]);
  return (
    <section className='selected-flight'>
      <div className='selected-flight-type'>
        <h1>Departure selected</h1>
        <h1>Mon,28 Feb</h1>
        <button onClick={handleChangeSelectedFlight}>Change</button>
      </div>
      {flightDetail.map((item, index) => {
        return (
          <React.Fragment key={index}>
            {item.detail === selected[0].detail &&
              <div className={`flight-selection ${flightDetail.length - 1 !== index && 'cntr'}`}>
                <div className='part-a'>
                  <img src={item.brand} alt='airline logo' />
                  <h4>{item.airline_name}</h4>
                </div>
                <div className='part-b'>
                  <table className='timeline'>
                    <thead>

                      <tr>
                        <th>{item.date}</th>
                        <th>
                          <div className='timebar'></div>
                        </th>
                        <th>{item.time}</th>
                        <th>{item.duration}</th>
                        <th>{item.cost}</th>
                      </tr>
                    </thead>
                    <tbody>

                      <tr>
                        <td>DXB</td>
                        <td></td>
                        <td>LOS</td>
                        <td>non-stop</td>
                        <td>return <br />
                          <ExpandMoreIcon
                            sx={{
                              color: '#655F5F',
                              fontSize: 30,
                              position: 'absolute',
                              top: 20,
                              right: 50,
                              cursor: 'pointer'
                            }} />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>}
          </React.Fragment>
        )
      })}
    </section>
  )
}
export default SearchFlight