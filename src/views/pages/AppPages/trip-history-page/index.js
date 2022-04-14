import React from "react";
import NavBar from "../../../components/user/NavBar";
import TripHistoryComponent from "../../../components/user/trip-history";
import AppNavBar from "../../../components/user/user_pages/AppNavbar/app_nav";

function TripHistoryPage(){
    return(
        <>
        <AppNavBar/>
        <TripHistoryComponent />
        </>
    )
}

export default TripHistoryPage;