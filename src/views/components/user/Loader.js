import {React, useState} from 'react';

function Loader(){
    return(
        <div id="load_screen" > 
            <div className="loader"> 
                <div className="loader-content">
                    {/* <div className="spinner-grow align-self-center">Hello</div> */}
                </div>
            </div>
        </div>
    )
}

export default Loader;