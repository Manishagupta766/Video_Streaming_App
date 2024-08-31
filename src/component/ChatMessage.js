import React from 'react'


function ChatMessage({name ,message}) {
  return (
    <div className='flex'>
     <img
          className="h-8 rounded-full"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
          alt="user-profile"
        />
        <span className='pr-2'>{name}</span>
        <span>{message}</span>

    </div>
  )
}

export default ChatMessage