import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./views/components/actions/Login";
import DashboardPage from './views/pages/AppPages/dashboard-one-page';
import Footer from './views/components/user/Footer';
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
// import PrivateRoute from './privateRoute';
// import WebApp from './layout/web-app';

// const Login = React.lazy(() => import("./views/components/authentication/Login"));
// const Onboarding = React.lazy(() => import("./views/components/authentication/Registration"));
// const Dashboard = React.lazy(() => import("./layout/web-app"));
// const Home = React.lazy(() => import("./layout/website"));
// export const Backdrop = () => {
//   return(
//     <div className='backdrop'></div>
//   )
// }
function App() {
  return (
    <>
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
            name="Home" 
            element={<Customer />}
            />
        {/* <NavBar /> */}
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
          element={<DashboardPage />}
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
          path="/login"
          name="Login"
          element={<Login />}
        />
        <Route
          exact
          path="/register"
          name="register"
          element={<Onboarding />}
        />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
