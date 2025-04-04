import React from 'react'
import { RxCross2 } from "react-icons/rx";

function ProfilePhoto({isVisible,onClose}) {

  return (
    isVisible && (
    <div className='absolute left-[50%] top-[50%] translate-[-50%] bg-amber-100 px-10 py-8 z-10'>
        <section className='flex flex-col gap-5'>
            <RxCross2 className='absolute right-6 top-6 cursor-pointer' onClick={()=>onClose()}/>
            <div>
                <h1>Update a New Avatar</h1>
            </div>
            <div>
                <img src="https://picsum.photos/200" alt="" />
            </div>
            <div className='text-center'>
                <label htmlFor="image">Choose Images</label>
                <input type="file" id='image' className='hidden'/>
            </div>
            <div className='flex gap-3 justify-end'>
                <button>Save</button>
                <button onClick={()=>onClose()}>Cancel</button>
            </div>
        </section>
    </div>)
  )
}

export default ProfilePhoto