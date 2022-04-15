import React from 'react';
import SideBar from '../SideBar';
import DashboardMain from './Dashboard';

function DashboardComponent(){
    return(
        <>
        <SideBar />
          <DashboardMain />  
        </>
    )
}

export default DashboardComponent;