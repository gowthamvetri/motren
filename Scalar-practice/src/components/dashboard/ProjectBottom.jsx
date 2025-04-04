import React from 'react'
import Example from './ProgressBar'
import JoinBtn from './JoinBtn'
import { LiaCoinsSolid } from "react-icons/lia";
function ProjectBottom() {
  return (
    <div className='bg-amber-300 px-3 py-2 rounded-2xl'>
        <section className='flex items-center justify-between'>
            <div className='flex items-center gap-5'>
                <div className='text-md font-medium'><h1>Project Name</h1></div>
                <div className='flex items-center align-bottom gap-2 text-sm'><div className='w-2 h-2 bg-blue-400 rounded-full'></div>working</div>
            </div>
            <div>
                <div>
                    <p>expires in <span className='text-red-500'>2 days</span></p>
                </div>
            </div>
        </section>
        <section className='flex items-center justify-between'>
            <div className='w-80'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni vero a id alias impedit. Blanditiis.
            </div>
            <div className='flex items-center'>
                <div className='flex'>
                    <img src="https://picsum.photos/300/300?grayscale" alt="" width={40} className='rounded-full relative' />
                    <img src="https://picsum.photos/seed/picsum/300/300" alt="" width={40} className='rounded-full relative right-4'/>
                    <img src="https://picsum.photos/id/237/300/300" alt="" width={40} className='rounded-full relative right-8'/>
                </div>
                <div>
                    <JoinBtn/>
                </div>
            </div>
            <div>
                <div className='flex items-center text-sm gap-1 text-amber-600'>
                    <LiaCoinsSolid className='text-lg'/>
                    <h3>{200}</h3>
                </div>
            </div>
        </section>
        <Example/>
    </div>
  )
}

export default ProjectBottom