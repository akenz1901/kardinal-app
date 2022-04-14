import React from "react";
import Footer from "../user/Footer";

function AuthContainer(props){
    return(
        <>
            {props.data} 
            <Footer />
        </>
    )
    
}

export default AuthContainer;