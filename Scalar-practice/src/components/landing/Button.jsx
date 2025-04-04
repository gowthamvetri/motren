import React from 'react'


function Button({icon,content,color}) {
  return (
    <div>
        <section className={`flex gap-4 items-center bg-${color} px-4 py-2 w-xs rounded-xl text-white cursor-pointer`}>
            <div className='text-3xl'>{icon}</div>
            <div className='flex flex-col'>
                <h1 className='text-2xl'>{content}</h1>
                <p className='text-sm'>with us</p>
            </div>
        </section>
    </div>
  )
}

export default Button