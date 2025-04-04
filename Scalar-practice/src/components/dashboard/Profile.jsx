import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";
import { LiaCoinsSolid } from "react-icons/lia";
import EditBtn from './EditBtn';
import { MdAutoGraph } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { MdWork } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { Link } from 'react-router';

function Profile() {
  return (
    <div className='row-span-3 bg-amber-100 px-4 py-3 rounded-2xl'>
      <section className=' flex items-center flex-col px-4 py-3 gap-3'>
        <div className='w-16 rounded-full border border-blue-400'>
          <img src="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" alt="" className='rounded-full'/>
        </div>
        <h2>Bharath Kumar</h2>
        <div className='flex items-center justify-center gap-2 text-xs'>
          <div className='w-2 h-2 bg-amber-300 rounded-full'></div>
          <h2>Subscriber</h2>
        </div>
        <div className='flex items-center'>
          <FaLocationDot className='text-xs'/>
          <h4>Tamil Nadu,India</h4>
        </div>
        <div className='flex items-center gap-5'>
          <FaLinkedin/>
          <BsGithub/>
          <TbWorldWww/>
        </div>
        <Link to={'/profile-edit'} className='w-full'><EditBtn/></Link>
        <div className='flex text-sm justify-between w-[80%]'>
          <div>
            <h2>Fund Grand</h2>
            <div className='flex items-center gap-1'>
              <MdAutoGraph/>
              898990
            </div>
          </div>
          <div>
            <h2>Points</h2>
            <div className='flex items-center gap-1'>
              <LiaCoinsSolid/>
              988674
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col gap-3 mb-15'>
        <h2>More about me!</h2>
        <div className='flex gap-3 items-center'>
          <IoMdHome/>
          <p>Place</p>
        </div>
        <div className='flex gap-3 items-center'>
          <MdWork/>
          <p>Profession</p>
        </div>
      </section>
      <hr />
      <section className='flex flex-col gap-2'>
      <h2>Connect with me!</h2>
        <div className='flex items-center justify-between px-4'>
          <FaFacebook/>
          <AiFillInstagram/>
          <FaSnapchatGhost/>
          <FaThreads/>
        </div>
      </section>
    </div>
  )
}

export default Profile