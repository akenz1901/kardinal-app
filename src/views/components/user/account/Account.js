import React from 'react';
import Loader from '../Loader';
import Main from './Main';
import NavBar from '../NavBar';


function Account(){
    return(
            <body className="sidebar-noneoverflow">
                {/* BEGIN LOADER */}

                    <Loader/>

                {/* END LOADER */}

                {/* BEGIN NAVBAR  */}
                
                    <NavBar />

                {/* END NAVBAR */}

                    {/* BEGIN MAIN CONTAINER */}
                        <Main />
                    {/* END MAIN CONTAINER */}
            </body>

    )
}

export default Account;