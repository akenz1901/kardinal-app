import React from "react";
import Home from "./home/Home";
import NavBarHome from './home/NavBarHome';
import Footer from "./user/Footer";

function HomeComponents(){
    return(
        <>
        <NavBarHome/>        
        <Home />
        <Footer />
        </>
    )
}

export default HomeComponents;