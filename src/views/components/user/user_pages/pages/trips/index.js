import React, { useState } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Form from 'react-bootstrap/Form'
import './style.css'
import FlightLoader, { HotelLoader } from './loader'
import {SearchInternationalFlightsOneway, SearchInternationalFlightsReturn} from './flight_actions'

// Material ui icon imports
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import FlightLandOutlinedIcon from '@mui/icons-material/FlightLandOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import HouseboatOutlinedIcon from '@mui/icons-material/HouseboatOutlined';
import DatePicker from "react-multi-date-picker"
import PassangerDetails from './PassangerDetail'

const Trips = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <section className='trips-section-main'>
            <Tabs
                defaultActiveKey="Flight"
                transition={false}
                id="noanim-tab-example"
                className="tab-view"
            >
                <Tab eventKey="Flight" title="Flight">
                    <FlightTab setOpenModal={setOpenModal} />
                </Tab>
                <Tab eventKey="Hotel" title="Hotel">
                    <HotelTab setOpenModal={setOpenModal} />
                </Tab>
                <Tab eventKey="Car" title="Car" >
                    <h1>Car</h1>
                </Tab>
                <Tab eventKey="Custom Order" title="Custom Order" >
                    <h1>Custom Order</h1>
                </Tab>
            </Tabs>
            {openModal && <PassangerDetails openModal={openModal} setOpenModal={setOpenModal} />}
        </section>
    )
}

const FlightTab = ({ setOpenModal}) => {
    const [enableModal, setEnableModal] = useState(false);
    const [tripType, setTripType] = useState('roundtrip');
    const handleRadioChange = event => {
        setTripType(event.target.value);
    }

    return (
        <div>
            <section className='f-sec1'>
                <label>
                    Select up to 5 travelers
                    <button>Choose</button>
                </label>
                <label>
                    Are you making a booking for a guest?
                    <button onClick={() => setOpenModal(true)}>+ Add guest traveler</button>
                </label>
            </section>
            <div className='deshedDivider'></div>
            <section className='f-sec2'>
                <div className='select-trips'>
                    <label>
                        <input type={'radio'} className="active" name='trip' value={'roundtrip'} onChange={(e) => handleRadioChange(e)} />
                        Roundtrip
                    </label>
                    <label>
                        <input type={'radio'} name='trip' value={'oneway'} onChange={(e) => handleRadioChange(e)} />
                        Oneway
                    </label>
                    <label>
                        <input type={'radio'} name='trip' value={'multicity'} onChange={(e) => handleRadioChange(e)} />
                        Multicity
                    </label>
                    <label>
                        <input type={'checkbox'} name='Email Request' />
                        Email Request
                    </label>
                </div>
                <TripsType tripType={tripType} />
                <div className='airplane-flight-information'>
                    <label>
                        Travel Class
                        <div className='select-flight-infos'>
                            <Form.Select aria-label="Default select example">
                                <option>Economy</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                    </label>
                    <label>
                        Travel Path
                        <div className='select-flight-infos' >
                            <Form.Select aria-label="Default select example">
                                <option>Non Stop</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                    </label>
                    <label>
                        Baggage
                        <div className='select-flight-infos' >
                            <Form.Select aria-label="Default select example">
                                <option>Included</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                    </label>
                    <label>
                        Conditions
                        <div className='select-flight-infos'>
                            <Form.Select aria-label="Default select example">
                                <option>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                    </label>
                </div>
                <button onClick={() => setEnableModal(true)}>Find Flight</button>
            </section>
            {enableModal && <FlightLoader enableModal={enableModal} setEnableModal={setEnableModal} />}
        </div>
    )
}

let data = {}

export const flightData = () =>{
    return data
};

const TripsType = ({ tripType }) => {
    const [multiCityList, setMultiCityList] = useState(['one', 'two']);
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [from2, setFrom2] = useState('')
    const [to2, setTo2] = useState('')
    const [departureDate1, setDepartureDate1] = useState('')
    const [departureDate2, setDepartureDate2] = useState('')
    const [numberOfAdults, setNumberOfAdult] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();

    const returnData = {
        flight_type:tripType,
        from1:from,
        to1:to,
        departure_date1:departureDate1,
        adults:numberOfAdults,
        from2:from2,
        to2:to2,
        departure_date2:departureDate2
    }

    const onewayData = {
        flight_type:'oneway',
        from:from,
        to:to,
        departure_date:'2022-09-17',
        adults:2
    }


    data =  SearchInternationalFlightsOneway(onewayData)

}
    console.log(data)

    let addTrip = () => {
        let newTrip = ['new', ...multiCityList]
        setMultiCityList(newTrip)
    }
    let cancelTrip = index => {
        let removeTrip = [...multiCityList];
        removeTrip.splice(index, 1)
        setMultiCityList(removeTrip)
    }
    return (
        <>
            {tripType === 'roundtrip' && <div className='flight-information'>
            <Form onChange={handleSubmit}>
                <label>
                    Departure
                    <div className='select-flight-infos'>
                        <FlightTakeoffOutlinedIcon sx={{ color: '#40798C', fontSize: 25, marginBottom: 1 }} />
                        <Form.Select 
                        aria-label="Default select example" 
                        style={{ width: '150px' }}
                        onChange={e => setFrom(e.target.value)}
                        value={from}
                        >
                            <option>From</option>
                            <option value="1">ABV</option>
                            <option value="2">LOS</option>
                            <option value="3">MIA</option>
                        </Form.Select>
                    </div>
                </label>
                <label>
                    Destination
                    <div className='select-flight-infos'>
                        <FlightLandOutlinedIcon sx={{ color: '#40798C', fontSize: 25, marginBottom: 1 }} />
                        <Form.Select 
                        aria-label="Default select example" 
                        style={{ width: '160px' }} 
                        onChange={e => setTo(e.target.value)}
                        value={to}
                        >
                            <option>To</option>
                            <option value="1">ABV</option>
                            <option value="2">LOS</option>
                            <option value="3">MIA</option>
                        </Form.Select>
                    </div>
                </label>
                <label>
                    Start Date
                    <div className='select-flight-infos' >
                        <EventOutlinedIcon sx={{ color: '#40798C', fontSize: 25, marginRight: 1 }} />
                        <input type={'date'} />
                    </div>
                </label>
                <label>
                    End Date
                    <div className='select-flight-infos'>
                        <EventOutlinedIcon sx={{ color: '#40798C', fontSize: 25, marginRight: 1 }} />
                        <input type={'date'} />
                    </div>
                </label>
                </Form>
            </div>}
            {tripType === 'oneway' && <div className='flight-information'>
                <label>
                    Departure
                    <div className='select-flight-infos'>
                        <FlightTakeoffOutlinedIcon sx={{ color: '#40798C', fontSize: 25, marginBottom: 1 }} />
                        <Form.Select aria-label="Default select example" style={{ width: '150px' }} 
                        onChange={e => setFrom(e.target.value)}
                        value={from}
                        >
                            <option>From</option>
                            <option value="ABV">ABV</option>
                            <option value="LOS">LOS</option>
                            <option value="MIA">MIA</option>
                        </Form.Select>
                    </div>
                </label>
                <label>
                    Destination
                    <div className='select-flight-infos'>
                        <FlightLandOutlinedIcon sx={{ color: '#40798C', fontSize: 25, marginBottom: 1 }} />
                        <Form.Select aria-label="Default select example" style={{ width: '160px' }}
                        onChange={e => setTo(e.target.value)}
                        value={to}
                        >
                            <option>To</option>
                            <option value="ABV">ABV</option>
                            <option value="LOS">LOS</option>
                            <option value="MIA">MIA</option>
                        </Form.Select>
                    </div>
                </label>
                <label>
                    Start Date
                    <div className='select-flight-infos' >
                        <EventOutlinedIcon sx={{ color: '#40798C', fontSize: 25, marginRight: 1 }} />
                        <input type={'date'} 
                        onChange={e => setDepartureDate1(e.target.value)} 
                        value={departureDate1}
                        />
                    </div>
                </label>
                <label className='cancel_trip'>
                    cancel
                </label>
            </div>}
            {tripType === 'multicity' &&
                <>
                    {multiCityList.map((_, index) => {
                        return (
                            <div className='flight-information'>
                                <label>
                                    {index === 0 && 'Departure'}
                                    <div className='select-flight-infos'>
                                        <FlightTakeoffOutlinedIcon sx={{ color: '#40798C', fontSize: 25, marginBottom: 1 }} />
                                        <Form.Select aria-label="Default select example" style={{ width: '150px' }}>
                                            <option>From</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </div>
                                </label>
                                <label>
                                    {index === 0 && 'Destination'}
                                    <div className='select-flight-infos'>
                                        <FlightLandOutlinedIcon sx={{ color: '#40798C', fontSize: 25, marginBottom: 1 }} />
                                        <Form.Select aria-label="Default select example" style={{ width: '160px' }}>
                                            <option>To</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </div>
                                </label>
                                <label>
                                    {index === 0 && 'Start Date'}
                                    <div className='select-flight-infos' >
                                        <EventOutlinedIcon sx={{ color: '#40798C', fontSize: 25, marginRight: 1 }} />
                                        <input type={'date'} />
                                    </div>
                                </label>
                                <label className='cancel_trip' onClick={() => cancelTrip(index)}>
                                    cancel
                                </label>
                            </div>
                        )
                    })}
                    <button className='add_trip' onClick={addTrip}>Add a trip</button>
                </>

            }
        </>
    )
}

const HotelTab = ({ setOpenModal}) => {
    const [enableModal, setEnableModal] = useState(false);
    const [multiDate, setMultiDate] = useState([]);
    return (
        <div>
            <section className='f-sec1'>
                <label>
                    Select up to 5 travelers
                    <button>Choose</button>
                </label>
                <label>
                    Are you making a booking for a guest?
                    <button onClick={()=> setOpenModal(true)}>+ Add guest traveler</button>
                </label>
            </section>
            <div className='deshedDivider'></div>
            <section className='h-sec2'>
                <label>
                    Destination
                    <div>
                        <HouseboatOutlinedIcon sx={{ color: '#40798C', fontSize: 35 }} />
                        <input placeholder='Type City, State or Location' />
                    </div>
                </label>
                <div className='date-management'>
                    <label>Dates</label>
                    <EventOutlinedIcon sx={{
                        cursor: 'pointer',
                        color: '#40798C',
                        fontSize: 25,
                        position: 'absolute',
                        top: 40,
                        left: 20
                    }} />
                    <DatePicker
                        placeholder='Mar 10 -- Apr 27'
                        value={multiDate}
                        range={2}
                        onChange={setMultiDate}
                        multiple
                        sort
                        onlyShowInRangeDates={2}
                        numberOfMonths={2}
                    />
                </div>
                <button onClick={() => setEnableModal(true)}>Search Hotels</button>
            </section>
            {enableModal && <HotelLoader enableModal={enableModal} setEnableModal={setEnableModal} />}
        </div>
    )
}

export default Trips
