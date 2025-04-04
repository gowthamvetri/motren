import React from 'react'
import Post from './Post'

function Activity() {

  const arr = ["Posts","Comments","Liked","Saved"]

  return (
    <div className='bg-amber-100 rounded-2xl py-3 px-3 flex flex-col gap-2'>
      <section className='text-sm font-semibold'>
        <h1>Activity</h1>
      </section>
      <section>
        <div className='grid grid-flow-col gap-3 text-sm'>
          {arr.map((element,index) => {
            return (<h3 className='px-2 border border-blue-400 rounded-full text-center' key={index}>{element}</h3>)
          })
          }
        </div>
      </section>
      <section>
        <div className='text-sm font-semibold'>
          <h1>{"Bharath"} posted this</h1>
        </div>
        <Post/>
      </section>
      <hr />
    </div>
  )
}

export default Activity