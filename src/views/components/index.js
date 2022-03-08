import React from "react";
import Home from "./home/Home";
import SideBar from "./user/SideBar";
import NavBarHome from './home/NavBarHome';

function HomeComponents(){
    return(
        <>
        <NavBarHome/>        
        <Home />
        </>
    )
}

export default HomeComponents;