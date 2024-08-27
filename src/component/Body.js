import React from 'react'
import SideBar from './SideBar';
import MainContainer from './MainContainer'
import Head from './Head';


function Body() {
  return (
    <div className='grid grid-flow-col'>
        
        <SideBar/>
        <MainContainer/>
        
    </div>
  )
}

export default Body