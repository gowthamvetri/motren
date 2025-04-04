import React from 'react'
import Add from './Add'

function MotrenCard() {
  return (
    <div className='bg-amber-100 flex flex-col gap-3 px-3 py-2 rounded-2xl'>
      <section className='flex flex-col gap-2'>
        <h1 className='text-sm font-semibold'>Motren Awaits</h1>
        <p className='text-xs'>Earn rewards while making difference</p>
      </section>
      <section className='flex flex-col items-center gap-2'>
        <Add prompt={"Start a Project"}/>
        <p className='text-xs'>Turn action into impact!</p>
      </section>
    </div>
  )
}

export default MotrenCard