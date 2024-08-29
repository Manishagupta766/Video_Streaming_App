import React from 'react'

function button({name}) {
    
  return (
    <div>
        <button className='px-5 m-2 py-2 bg-gray-200 rounded-lg'  >
        {name}

</button>
    </div>
  )
}

export default button