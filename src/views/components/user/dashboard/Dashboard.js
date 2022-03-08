import React from 'react';
import Loader from '../Loader';
import Main from './Main';

function Dashboard(){
    return(
        <body className="alt-menu sidebar-noneoverflow">
            {/* BEGIN LOADER */}
                <Loader/>
            {/* END LOADER */}

            {/* BEGIN MAIN CONTAINER */}
                <Main />
            {/* END MAIN CONTAINER */}
        </body>
    )
}

export default Dashboard;