import React from 'react'
import Logo from '../Utils/Logo.png'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../Utils/appSlice';

function Head() {
  const dispatch = useDispatch();
  const toggleMenuHandler =()=>{
    dispatch(toggleMenu());


  };
  return (
    <div className='grid grid-flow-col  p-2 m-2 shadow-lg'>
        <div className='flex col-span-1'>

        <img alt="menu" className='h-10 cursor-pointer' 
        onClick={()=>toggleMenuHandler()} src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"  />
        <a href=''>
        <img className='h-10 ' alt="logo" src={Logo}/>
        </a>
       <p className='text-2xl font-bold'>Video</p>
            
        </div>
        <div className='col-span-10 text-center '>
            <input type='text' className='w-1/2 border border-gray-200 hover:border-gray-400 p-2 rounded-l-full'/>
            <button className='border border-gray-400 p-2 rounded-r-full px-5 py-2'>🔍</button>
        </div>
        <div className='col-span-1'>
            <img className='h-8' src='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg'/>
        </div>
    </div>
  )
}

export default Head