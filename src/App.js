import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import Login from "./views/components/actions/Login";
import AccountPage from './views/pages/AppPages/accounting-page';
import InvoicePage from './views/pages/AppPages/invoice-page';
import ProfilePage from './views/pages/AppPages/profile-page';
import ReportingPage from './views/pages/AppPages/reporting-page';
import SettingPage from './views/pages/AppPages/setting-page';
import TripPage from './views/pages/AppPages/trip-page';
import TripHistoryPage from './views/pages/AppPages/trip-history-page';
import Onboarding from './views/components/actions/Registration';
import ResetPasswordPage from './views/pages/AppPages/reset-password-page';
import HomeComponents from './views/components/index';
import Customer from './views/components/customer/Customer'
import DashboardMain from './views/components/user/dashboard/Dashboard';
import FlightSummary from './views/components/user/user_pages/pages/flight_summary';
import FlightPage from './views/components/user/user_pages/pages/trips/FlightPage';

function App() {
  return (
    <>
    {/* <AppContext.Provider value={{isAuthenticated, userHasAuthenticated}}>

    </AppContext.Provider> */}
    <BrowserRouter>
      <div className='App'>
      <Routes>
        <Route exact 
            path='/' 
            name="Home" 
            element={<HomeComponents />}

        />
        <Route exact 
            path='/customer' 
            name="Customer" 
            element={<Customer />}
            />

        <Route
          exact
          path="/login"
          name="Login"
          element={<Login />}
        />
    
        <Route
          exact
          path="/account"
          name="Account"
          element={<AccountPage />}
        />
        <Route
          exact
          path="/dashboard"
          name="Dashboard"
          element={<DashboardMain />}
        />
        <Route
          exact
          path="/invoice"
          name="Invoice"
          element={<InvoicePage />}
        />
        <Route
          exact
          path="/profile"
          name="Profile"
          element={<ProfilePage />}
        />
        <Route
          exact
          path="/reporting"
          name="Reporting"
          element={<ReportingPage />}
        />
        <Route
          exact
          path="/setting"
          name="Setting"
          element={<SettingPage />}
        />
        <Route
          exact
          path="/trip"
          name="Trip"
          element={<FlightPage />}
        />

        <Route 
        exact path="/trip/flights"
          element={<TripPage />}
        />
        <Route
          exact
          path="/trip-history"
          name="TripHistory"
          element={<TripHistoryPage />}
        />
      
        <Route
          exact
          path="/reset-password"
          name="ResetPassword"
          element={<ResetPasswordPage />}
        />
        
        <Route
          exact
          path="/register"
          name="register"
          element={<Onboarding />}
        />

        <Route exact path='/flight-summary' element={<FlightSummary />}/>
        <Route path="*" element={<NoResource />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}
const NoResource = () => {
  return <h1>ERROR 404</h1>
}

export default App;