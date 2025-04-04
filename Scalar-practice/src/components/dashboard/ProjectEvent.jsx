import React, { useState } from 'react'
import ProjectBottom from './ProjectBottom'

function ProjectEvent() {
    const [select,setSelect] = useState("project")
  return (
    <div className='bg-amber-100 w-full px-6 py-8 rounded-2xl flex flex-col gap-3'>
        <section className='flex gap-12 cursor-pointer'>
            <h1 onClick={(e)=>setSelect("project")} className={`${select=="project"?"border border-x-0 border-t-0 border-b-3 border-blue-400":"border-none"}`} >Projects</h1>
            <h1 onClick={(e)=>setSelect("events")} className={`${select=="events"?"border border-x-0 border-t-0 border-b-3 border-blue-400":"border-none"}`} >Events</h1>
        </section>
        <section className='flex flex-col gap-2'>
            <ProjectBottom/>
            <ProjectBottom/>
        </section>
    </div>
  )
}

export default ProjectEvent