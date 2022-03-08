import React from "react";
import './dashboard.css';

function Loader(){
    return(
        <>
        {/* ======= Start Preloader =======*/}
        <div className="preloader">
            <div className="lds-spinner">
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
        </div> 
        {/* ======= End Preloader ======= */}
        </>
    )
}

export default Loader;