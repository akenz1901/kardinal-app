import React from 'react'
import { Dropdown } from 'react-bootstrap'
import StarRatings from 'react-star-ratings';
import { useNavigate } from 'react-router-dom'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import './search_hotel.css'


let hotelRoomDetailInfo = [
    {
        preview: require('../../../assets/pages/hotel/hotel1.png'),
        roomName: 'Beckett suites',
        distance: '8.81 km from city center',
        rating: 4,
        benifits: [
            {
                name: 'Breakfast available',
                iconImg: require('../../../assets/pages/hotel/coffee.png'),
            },
            {
                name: 'Fitness',
                iconImg: require('../../../assets/pages/hotel/dumbell.png'),
            }
        ],
        pricing: '₦50,000',
        members: '1 Adult / 11 nights'
    },
    {
        preview: require('../../../assets/pages/hotel/hotel2.png'),
        roomName: 'Ag hotel',
        distance: '8.81 km from city center',
        rating: 4,
        benifits: [
            {
                name: 'Breakfast available',
                iconImg: require('../../../assets/pages/hotel/coffee.png'),
            },
            {
                name: 'Fitness',
                iconImg: require('../../../assets/pages/hotel/dumbell.png'),
            }
        ],
        pricing: '₦45,300',
        members: '1 Adult / 2 nights'
    },
    {
        preview: require('../../../assets/pages/hotel/hotel3.png'),
        roomName: 'Grand cubana Hotels',
        distance: '8.81 km from city center',
        rating: 3,
        benifits: [
            {
                name: 'Fitness',
                iconImg: require('../../../assets/pages/hotel/dumbell.png'),
            },
            {
                name: 'Wifi',
                iconImg: require('../../../assets/pages/hotel/_wifi.png'),
            }
        ],
        pricing: '₦50,000',
        members: '1 Adult / 11 nights'
    },
    {
        preview: require('../../../assets/pages/hotel/hotel4.png'),
        roomName: 'Apartment suite 1',
        distance: '8.81 km from city center',
        rating: 4,
        benifits: [
            {
                name: 'Breakfast available',
                iconImg: require('../../../assets/pages/hotel/coffee.png'),
            },
            {
                name: 'Wifi',
                iconImg: require('../../../assets/pages/hotel/_wifi.png'),
            }
        ],
        pricing: '₦50,000',
        members: '1 Adult / 11 nights'
    },
    {
        preview: require('../../../assets/pages/hotel/hotel5.png'),
        roomName: 'Degok Hotel',
        distance: '8.81 km from city center',
        rating: 3,
        benifits: [
            {
                name: 'Breakfast available',
                iconImg: require('../../../assets/pages/hotel/coffee.png'),
            },
            {
                name: 'Fitness',
                iconImg: require('../../../assets/pages/hotel/dumbell.png'),
            }
        ],
        pricing: '₦50,000',
        members: '1 Adult / 11 nights'
    },
    {
        preview: require('../../../assets/pages/hotel/hotel6.png'),
        roomName: 'The Ambassador',
        distance: '8.81 km from city center',
        rating: 4,
        benifits: [
            {
                name: 'Breakfast available',
                iconImg: require('../../../assets/pages/hotel/coffee.png'),
            },
            {
                name: 'Fitness',
                iconImg: require('../../../assets/pages/hotel/dumbell.png'),
            }
        ],
        pricing: '₦35,500',
        members: '2 Adult / 18 nights'
    },
    {
        preview: require('../../../assets/pages/hotel/hotel2.png'),
        roomName: 'Ag hotel',
        distance: '8.81 km from city center',
        rating: 4,
        benifits: [
            {
                name: 'Breakfast available',
                iconImg: require('../../../assets/pages/hotel/coffee.png'),
            },
            {
                name: 'Fitness',
                iconImg: require('../../../assets/pages/hotel/dumbell.png'),
            }
        ],
        pricing: '₦45,300',
        members: '1 Adult / 2 nights'
    },
]

function SearchHotel() {
    let navigate = useNavigate()
    return (
        <main>
            <div className='search-flight-heading-cont'>
                <h2>Dubai, Sharj</h2>
                <button onClick={() => navigate(-1)}>Edit</button>
            </div>
            <h4 className='flight-des'>Mon, 28 Feb&nbsp; -&nbsp; Sat, 26 Mar &nbsp; &nbsp; 1 adult</h4>
            <h3>Abuja: 199 properties found all at the best rates that are only available online</h3>
            <ButtonGroup />
            <HotelCard />
        </main>
    )
}

const ButtonGroup = () => {
    return (
        <section className='hotel-btn-group' style={{ marginTop: '5%' }}>
            <Dropdown className="d-inline dropdown-btn">
                <Dropdown.Toggle id="dropdown-autoclose-true">
                    Work trip
                    <ExpandMoreIcon sx={{
                        color: "#fff",
                        position: 'absolute',
                        right: 3,
                    }} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <div style={{ padding: 10 }}>

                        <div className='dd-item-custom'>
                            <h5>Work trip   </h5>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Breakfast included</h6>
                                    <h6>145</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Free cancellation </h6>
                                    <h6>203</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Covid-19 measures</h6>
                                    <h6>79</h6>
                                </div>
                            </label>
                        </div>
                    </div>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="d-inline dropdown-btn">
                <Dropdown.Toggle id="dropdown-autoclose-true" style={{ width: '125.56px' }}>
                    Hotel name
                    <ExpandMoreIcon sx={{
                        color: "#fff",
                        position: 'absolute',
                        right: 3,
                    }} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <div style={{ padding: 10 }}>
                        <div className='dd-item-custom'>
                            <h5>Hotel name   </h5>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Executive experience</h6>
                                    <h6>0</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Booked by my colleagues</h6>
                                    <h6>0</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Exclusive price</h6>
                                    <h6>0</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Cooperate Price</h6>
                                    <h6>0</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Company favourite</h6>
                                    <h6>0</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>My favourite</h6>
                                    <h6>0</h6>
                                </div>
                            </label>
                        </div>
                    </div>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="d-inline dropdown-btn">
                <Dropdown.Toggle id="dropdown-autoclose-true" style={{ width: '140.56px' }}>
                    Review score
                    <ExpandMoreIcon sx={{
                        color: "#fff",
                        position: 'absolute',
                        right: 3,
                    }} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <div style={{ padding: 10 }}>
                        <div className='dd-item-custom'>
                            <h5>Review score</h5>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Any</h6>
                                    <h6>145</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Exceptional: 9.5+</h6>
                                    <h6>203</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Wonderful: 8.5+</h6>
                                    <h6>79</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Very good: 8+</h6>
                                    <h6>103</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Good: 8+</h6>
                                    <h6>143</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Pleasant</h6>
                                    <h6>39</h6>
                                </div>
                            </label>
                        </div>
                    </div>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="d-inline dropdown-btn">
                <Dropdown.Toggle id="dropdown-autoclose-true" style={{ width: '200.56px' }}>
                    Accomodation type
                    <ExpandMoreIcon sx={{
                        color: "#fff",
                        position: 'absolute',
                        right: 3,
                    }} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <div style={{ padding: 10 }}>
                        <div className='dd-item-custom'>
                            <h5>Accomodation types</h5>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Apartment </h6>
                                    <h6>145</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Aparthotel</h6>
                                    <h6>203</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6> Bed and breakfast</h6>
                                    <h6>79</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Condo hotel</h6>
                                    <h6>103</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Guesthouse</h6>
                                    <h6>143</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Hotel</h6>
                                    <h6>39</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Residence</h6>
                                    <h6>212</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Resort</h6>
                                    <h6>77</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Vacation homes </h6>
                                    <h6>200</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Spa</h6>
                                    <h6>34</h6>
                                </div>
                            </label>
                        </div>
                    </div>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="d-inline dropdown-btn">
                <Dropdown.Toggle id="dropdown-autoclose-true" style={{ width: '200.56px' }}>
                    Popular amenities
                    <ExpandMoreIcon sx={{
                        color: "#fff",
                        position: 'absolute',
                        right: 3,
                    }} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <div style={{ padding: 10 }}>
                        <div className='dd-item-custom'>
                            <h5>Popular amenities</h5>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Apartment </h6>
                                    <h6>145</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Aparthotel</h6>
                                    <h6>203</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6> Bed and breakfast</h6>
                                    <h6>79</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Condo hotel</h6>
                                    <h6>103</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Guesthouse</h6>
                                    <h6>143</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Hotel</h6>
                                    <h6>39</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Residence</h6>
                                    <h6>212</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Resort</h6>
                                    <h6>77</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Vacation homes </h6>
                                    <h6>200</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Spa</h6>
                                    <h6>34</h6>
                                </div>
                            </label>
                        </div>
                    </div>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="d-inline dropdown-btn">
                <Dropdown.Toggle id="dropdown-autoclose-true" style={{ width: '240.56px', marginTop: 10 }}>
                    Display Price: Per night
                    <ExpandMoreIcon sx={{
                        color: "#fff",
                        position: 'absolute',
                        right: 3,
                    }} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <div style={{ padding: 10 }}>
                        <div className='dd-item-custom'>
                            <h5>Display Price: Per night</h5>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Apartment </h6>
                                    <h6>145</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Aparthotel</h6>
                                    <h6>203</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6> Bed and breakfast</h6>
                                    <h6>79</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Condo hotel</h6>
                                    <h6>103</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Guesthouse</h6>
                                    <h6>143</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Hotel</h6>
                                    <h6>39</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Residence</h6>
                                    <h6>212</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Resort</h6>
                                    <h6>77</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Vacation homes </h6>
                                    <h6>200</h6>
                                </div>
                            </label>
                            <label className='f-time'>
                                <input type={'checkbox'} />
                                <div className='fligh-timing'>
                                    <h6>Spa</h6>
                                    <h6>34</h6>
                                </div>
                            </label>
                        </div>
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        </section>
    )
}

const HotelCard = () => {
    const [position, setPosition] = React.useState(null);
    const [liked, setLiked] = React.useState(null);

    return (
        <>
            {hotelRoomDetailInfo.map((item, index) => {
                return (
                    <>
                        <section key={index} className='hotel-card'>
                            <div className='hotel-img'>
                                <img src={item.preview} alt='hotel' />
                            </div>
                            <div className='hotel-info'>
                                <div className='inf01'>
                                    <h1>{item.roomName}</h1>
                                    <h4>{item.distance}</h4>
                                    <div className='rating-part'>
                                        <h5>Exceptional (1)</h5>
                                        <StarRatings
                                            rating={item.rating}
                                            starRatedColor="#000"
                                            starDimension="17.22px"
                                            starSpacing='2px'
                                            numberOfStars={item.rating}
                                            name='rating'
                                        />
                                    </div>
                                    <div className='breakfastandfitness'>
                                        {item.benifits.map((benifits, _index) => {
                                            return <h6>{benifits.name} <img src={benifits.iconImg} alt={benifits.name} style={{ marginLeft: 5 }} /> </h6>
                                        })}
                                    </div>
                                </div>
                                <div className='view-map'>
                                    <div onClick={() => setLiked(index)}>
                                        {liked === index ?
                                            <img src={require('../../../assets/pages/hotel/loved.png')} alt='like'
                                                 />
                                            :
                                            <img src={require('../../../assets/pages/hotel/love.png')} alt='like'
                                            />}
                                    </div>
                                    <h5>view map</h5>
                                </div>
                                <div className='divider0'></div>
                                <div className='pricing'>
                                    <h3>{item.pricing}</h3>
                                    <h6>{item.members}</h6>
                                    <button onClick={() => setPosition(index)}>
                                        See options
                                        {position === index ?
                                            <ExpandLessIcon sx={{ color: "#fff", fontSize: 20 }} />
                                            :
                                            <ExpandMoreIcon sx={{ color: "#fff", fontSize: 20 }} />
                                        }
                                    </button>
                                </div>
                            </div>
                        </section>
                        {position === index && <HotelDetail price={item.pricing} />}
                    </>
                )
            })}
        </>
    )
}

const HotelDetail = ({ price }) => {
    const [opt, setOpt] = React.useState(1);
    let data = [1, 2, 3, 4]
    return (
        <section className='hotel-detail'>
            <div className='hotel-detail-opt'>
                <h1 onClick={() => setOpt(1)}>Available rooms</h1>
                <h2 onClick={() => setOpt(2)}>Details</h2>
                <button>Free cancellation</button>
                <button>Breakfast included</button>
                <button>Double bed or bigger</button>
                <div className={`activeOpt ${opt === 1 ? 'activeOptA' : 'activeOptD'}`}></div>
            </div>
            {opt === 1 && data.map((_, i) => {
                return (
                    <>
                        <HotelInfoPart price={price} />
                        {i !== 3 && <div className='h-divider'></div>}
                    </>
                )
            })}
            {opt === 2 && <HotelDetailOpt />}
        </section>
    )
}

const HotelInfoPart = ({ price }) => {
    let navigate = useNavigate()
    return (
        <div className='hotel-room-detail'>
            <div className='room-pricing'>
                <h1>Lower class room 1</h1>
                <h1>{price}</h1>
            </div>
            <h4>Type of bed</h4>
            <div className='noofrooms'>
                <div className='room-snaps'>
                    <img src={require('../../../assets/pages/hotel/room.png')} alt='room' />
                    <img src={require('../../../assets/pages/hotel/room.png')} alt='room' />
                    <img src={require('../../../assets/pages/hotel/room.png')} alt='room' />
                    <img src={require('../../../assets/pages/hotel/room.png')} alt='room' />
                    <img src={require('../../../assets/pages/hotel/room.png')} alt='room' />
                    <img src={require('../../../assets/pages/hotel/room.png')} alt='room' />
                </div>
                <div className='room-more-info'>
                    <label>
                        <img src={require('../../../assets/pages/hotel/spoon.png')} alt='spoon' />
                        Breakfast included
                    </label>
                    <div>
                        <label>
                            <img src={require('../../../assets/pages/hotel/cencelation.png')} alt='spoon' />
                            free cancellation
                        </label>
                        <h2>More options</h2>
                        <button onClick={() => navigate('stay-summary')}>Choose room</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const HotelDetailOpt = () => {
    const EssentialAmenities = [
        {
            sign: require('../../../assets/pages/hotel/wifi.png'),
            label: 'Wi-Fi available',
            active: true
        },
        {
            sign: require('../../../assets/pages/hotel/air_shuttle.png'),
            label: 'Airport shuttle',
            active: false
        },
        {
            sign: require('../../../assets/pages/hotel/resturant.png'),
            label: 'Restaurant',
            active: true
        },
        {
            sign: require('../../../assets/pages/hotel/24h.png'),
            label: '24h reception',
            active: true
        },
        {
            sign: require('../../../assets/pages/hotel/parking.png'),
            label: 'Parking',
            active: false
        },
        {
            sign: require('../../../assets/pages/hotel/business_center.png'),
            label: 'Business centre',
            active: false
        },
        {
            sign: require('../../../assets/pages/hotel/pool.png'),
            label: 'Pool',
            active: true
        },
        {
            sign: require('../../../assets/pages/hotel/room_service.png'),
            label: 'Room service',
            active: false
        },
        {
            sign: require('../../../assets/pages/hotel/meeting_room.png'),
            label: 'Meeting rooms',
            active: true
        },
        {
            sign: require('../../../assets/pages/hotel/laundary.png'),
            label: 'Laundry service',
            active: true
        },
    ]
    const quantity = () => {
        let arr = []
        for (let index = 0; index < 15; index++) {
            arr[index] = index;
        }
        return arr
    }
    let imgQuan = quantity();
    return (
        <section className='hotel-d-info'>
            <h4>Hotel Address</h4>
            <p>NG Abuja Plot 123 Cadastral Zone A0, Central Business Dis 900103, Abuja, Nigeria</p>
            <div className='h-divider'></div>
            <div style={{ height: '20px' }}></div>
            <h4>See where you’ll be staying</h4>
            <div style={{ height: '20px' }}></div>
            <div className='hotel_img_bunch'>
                {imgQuan.map((_, i) => {
                    return <img key={i} src={require('../../../assets/pages/hotel/room.png')} alt='room' />
                })}
            </div>
            <div className='h-spacing'></div>
            <div className='h-divider'></div>
            <div style={{ height: '20px' }}></div>
            <h4>Essential Amenities include</h4>
            <div className='h-spacing'></div>
            <div className='EssentialAmenities'>
                {EssentialAmenities.map((item, index) => {
                    return (
                        <div key={index} className='Essential_Amenities_inclu'>
                            <img src={item.sign} alt='sign' />
                            <h3 className={item.active ? 'active_essential' : 'inactive_essential'}>{item.label}</h3>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default SearchHotel