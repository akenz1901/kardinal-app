import React from 'react'
import Navbar from './Navbar'
import Analytic from './Analytic'
import WalletTransactions from './WalletTransactions'
import Loader from '../Loader'
function Dashboard() {
    return (
        <body className="alt-menu sidebar-noneoverflow">
            {/* BEGIN LOADER */}
                <Loader/>
            {/* END LOADER */}
            <div className="main-container" id="container">
                <div className="overlay"></div>
                <div className="search-overlay"></div>
            <div id="content" className="main-content">
                <div className="layout-px-spacing">       
                        <Navbar />
                        <Analytic />
                        <WalletTransactions />    
                </div>
            </div>
        </div>
    </body>
    )
}

export default Dashboard;
