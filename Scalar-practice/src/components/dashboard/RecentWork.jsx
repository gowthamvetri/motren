import React from 'react'
import Project from './RecentProject'

function RecentWork() {
  return (
    <div className='bg-amber-100 px-2 flex flex-col gap-3 py-1.5 rounded-2xl'>
      <section>
        <h1>
          Recently worked on:
        </h1>
      </section>
      <section className='flex flex-col gap-1.5'>
        <Project/>
        <Project/>
      </section>
    </div>
  )
}

export default RecentWork