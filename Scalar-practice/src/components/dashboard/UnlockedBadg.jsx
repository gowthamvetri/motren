import React from 'react'
import { BiTargetLock } from "react-icons/bi";


function UnlockedBadg() {
  return (
    <div className='p-3 bg-amber-100 flex flex-col gap-2 rounded-2xl'>
      <section className='flex items-center justify-between'>
        <div className='flex gap-2 items-center'>
          <h1>Unlocked</h1>
          <span className='text-yellow-400'>9</span>
          <h1>&gt;</h1>
        </div>
        <div className='flex gap-2 items-center'>
          <h2>target</h2>
          <BiTargetLock/>
        </div>
      </section>
      <section className='w-full flex items-center justify-center'>
      <div className='w-35 '>
          <img src="https://assets.leetcode.com/users/images/20b0a625-ea31-4a3e-b561-7000deae15cc_1708636184.9909492.gif" alt="" />
        </div>
      </section>
      <section className='flex justify-end'>
        <div className='flex gap-2 text-xs'>
          <h2>Up Next</h2>
          <img src="https://assets.leetcode.com/users/images/20b0a625-ea31-4a3e-b561-7000deae15cc_1708636184.9909492.gif" alt="" width={20}/>
        </div>
      </section>
    </div>
  )
}

export default UnlockedBadg