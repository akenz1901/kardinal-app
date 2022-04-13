import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Avatar from '@mui/material/Avatar'; 
import SearchIcon from '@mui/icons-material/Search'; 
import './nav.css'
// import images
import SiteLogo from '../../../../../assets/navbar/SiteLogo.png'
import AvatarImg from '../../../../../assets/navbar/avatar.png'
import { useNavigate } from 'react-router-dom';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import FlightIcon from '@mui/icons-material/Flight';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AssessmentIcon from '@mui/icons-material/Assessment';
import EventAvailableSharpIcon from '@mui/icons-material/EventAvailableSharp';
import TravelExploreSharpIcon from '@mui/icons-material/TravelExploreSharp';
import api from '../../../actions/apiServices'


function AppNavBar() {
  const [user, setUser] = React.useState(null)
  let navigate = useNavigate();
  const handleNavigate = (routeName) => navigate(routeName);

  React.useEffect(() => {
    api
    .fetch('/api/trips/company/', {},true)
    .then(response =>{
      console.log(response.data)
        setUser(response.data)            
    }).catch(err => {console.log(err)}),
    []
  })
  return (
    <Navbar expand="lg" className='appbar'>
      <Container>
        <Navbar.Brand onClick={() => handleNavigate('/')}>
          <img src={SiteLogo} alt='brand-logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 menu-items"
            style={{ maxHeight: '400px' }}
          >
            <Nav.Link onClick={()=> handleNavigate('/dashboard')} className='navLink'>
              <DashboardCustomizeIcon sx={{ color: '#243256', fontSize: 25}} />
              <h3>Dashboard</h3>
            </Nav.Link>
            <Nav.Link onClick={()=> handleNavigate('/trip')} className='navLink'>
              <FlightIcon sx={{ color: '#243256', fontSize: 25 }} />
              <h3>Trips</h3>
            </Nav.Link>
            <Nav.Link onClick={()=> handleNavigate('/invoice')} className='navLink'>
              <ReceiptLongIcon sx={{ color: '#243256', fontSize: 25 }} />
              <h3>Invoicing</h3>
            </Nav.Link>
            <Nav.Link onClick={()=> handleNavigate('/reporting')} className='navLink'>
              <AssessmentIcon sx={{ color: '#243256', fontSize: 25 }} />
              <h3>Reporting</h3>
            </Nav.Link>
            <Nav.Link onClick={()=> handleNavigate('/trip-history')} className='navLink'>
              <TravelExploreSharpIcon sx={{ color: '#243256', fontSize: 25 }} />
              <h3>Trip History</h3>
            </Nav.Link>
            <Nav.Link onClick={()=> handleNavigate('/')} className='navLink'>
              <EventAvailableSharpIcon sx={{ color: '#243256', fontSize: 25 }} />
              <h3>Events</h3>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav onClick={() => handleNavigate('/setting')} className='profile-info'>
          <SearchIcon sx={{ color: '#40798C', fontSize: 25 }} />
          <h3>Profile</h3>
          <Avatar alt="Remy Sharp" src={user != null ? user.logo: AvatarImg} />
          {/* <Avatar alt="Remy Sharp" src={AvatarImg} /> */}
        </Nav>
      </Container>
    </Navbar>
  )
}

export default AppNavBar