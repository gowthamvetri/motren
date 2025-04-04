import React, { useState } from 'react'
import Dot from '../components/common/Dot'
import Menu from '../components/profileEdit/Menu'
import { Outlet } from 'react-router'
import ProfilePhoto from '../components/profileEdit/ProfilePhoto'

function UserProfileEdit() {
  const [updateProf,setUpdateProf] = useState(false);

  const onClose = ()=>{
    setUpdateProf(false);
  }

  return (
    <div className='px-8 py-10 flex flex-col gap-10'>
        <ProfilePhoto isVisible={updateProf} onClose={onClose}/>
        <section className={`${updateProf?"blur-xs":" "} flex items-center justify-between px-10`}>
          <div className='flex gap-5 items-center'>
            <div className='w-20 rounded-full overflow-hidden border-2 border-blue-400'>
              <img src="https://picsum.photos/200" alt="" className='cursor-pointer' onClick={()=>setUpdateProf(true)}/>
            </div>
            <div>
              <div className='text-2xl'>
                <h3>Bharath Kumar M S</h3>
              </div>
              <div className='flex items-center gap-2'>
                <Dot color={"blue"}/>
                <p>Subscriber</p>
              </div>
            </div>
          </div>
          <div className='bg-blue-500 px-6 py-3 rounded-2xl text-white'>
            <button>
              Logout
            </button>
          </div>
        </section>
        <section className={`${updateProf?"blur-xs":" "} px-5 flex gap-10`}>
          <div><Menu/></div>
          <div className='w-[80%]'><Outlet/></div>
        </section>
    </div>
  )
}

export default UserProfileEdit