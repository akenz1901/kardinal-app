import React from 'react';
import Loader from '../Loader';
import Main from './Main';
import NavBar from '../NavBar'

function Dashboard(){
    return(
        <div className="alt-menu sidebar-noneoverflow">
            {/* BEGIN LOADER */}
                {/* <Loader/> */}
            {/* END LOADER */}
            <NavBar/>

            {/* BEGIN MAIN CONTAINER */}
                <Main />
            {/* END MAIN CONTAINER */}
        </div>
    )
}

export default Dashboard;