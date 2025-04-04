import React, { useState } from 'react'

function Add({prompt}) {
    const [turnButton,setTurnButton] = useState(false);

    const handleChange = ()=>{
        setTurnButton((pre)=>!pre);
    }

  return (
    <div className='bg-gray-400 flex px-3 py-1 gap-10 rounded-full text-sm'>
        <div>
            <h1>{prompt}</h1>
        </div>
        <div className={`${turnButton ? " justify-end ":"justify-start "} flex bg-gray-300 w-12 rounded-full`}>
            <div className='bg-blue-400 w-fit px-1.5 rounded-full items-center cursor-pointer transition-all ease-out' onClick={handleChange}>+</div>
        </div>
    </div>
  )
}

export default Add