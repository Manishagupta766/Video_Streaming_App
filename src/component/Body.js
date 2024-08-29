import React from 'react'
import SideBar from './SideBar';

import { Outlet } from 'react-router-dom';


function Body() {
  return (
    <div className='grid grid-flow-col'>
        
        <SideBar/>
        <Outlet/>
        
    </div>
  )
}

export default Body