import React from 'react';
import Main from './Main';
import NavBar from '../NavBar'
import AppNavBar from '../user_pages/AppNavbar/app_nav';
import Dashboard from '../user_pages/pages/deshboard/Dashboard';

function DashboardMain(){
    return(
        <div className="alt-menu sidebar-noneoverflow">
            {/* BEGIN LOADER */}
                {/* <Loader/> */}
            {/* END LOADER */}
            {/* <NavBar/> */}
            <AppNavBar />
            <Dashboard />
            {/* BEGIN MAIN CONTAINER */}
                {/* <Main /> */}
            {/* END MAIN CONTAINER */}
        </div>
    )
}

export default DashboardMain;