import React from 'react'
import ButtonList from './ButtonList'
import VideocContainer from './VideocContainer'

function MainContainer() {
  return (
    <div className='flex' ><ButtonList/>
    <VideocContainer/>
    </div>
  )
}

export default MainContainer