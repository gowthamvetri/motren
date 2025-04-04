import React, { useState } from 'react'
import { IoIosInformationCircle } from "react-icons/io";
import { LiaCoinsSolid } from "react-icons/lia";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { PiRocketLaunchFill } from "react-icons/pi";
import { Link } from 'react-router';

function Menu() {
    const [select,setSelect] = useState("basicInfo");
  return (
    <div className='text-nowrap px-8 py-6 bg-amber-100 rounded-2xl'>
        <section className='flex flex-col text-xl gap-3.5'>
            <Link className={`${select=="basicInfo"?"border-b-2 border-blue-400":"border-b-1 border-black"} flex items-center gap-3 cursor-pointer`} onClick={()=>setSelect("basicInfo")} to={''}>
                <IoIosInformationCircle/>
                <p >Basic info</p>
            </Link>
            <Link className={`${select=="pa"?"border-b-2 border-blue-400":"border-b-1 border-black"} flex items-center gap-3 cursor-pointer`} onClick={()=>setSelect("pa")} to={'points'}>
                <LiaCoinsSolid/>
                <p >Points Activity</p>
            </Link>
            <div className={`${select=="fg"?"border-b-2 border-blue-400":"border-b-1 border-black"} flex items-center gap-3 cursor-pointer`} onClick={()=>setSelect("fg")}>
                <FaArrowTrendUp/>
                <p>Fund Grade</p>
            </div>
            <div className={`${select=="ev"?"border-b-2 border-blue-400":"border-b-1 border-black"} flex items-center gap-3 cursor-pointer`} onClick={()=>setSelect("ev")}>
                <FaEnvelope/>
                <p >Envelop Activity</p>
            </div>
            <div className={`${select=="account"?"border-b-2 border-blue-400":"border-b-1 border-black"} flex items-center gap-3 cursor-pointer`} onClick={()=>setSelect("account")}>
                <IoMdSettings/>
                <p >Account</p>
            </div>
            <div className={`${select=="order"?"border-b-2 border-blue-400":"border-b-1 border-black"} flex items-center gap-3 cursor-pointer`} onClick={()=>setSelect("order")}>
                <PiRocketLaunchFill/>
                <p >Orders</p>
            </div>
        </section>
    </div>
  )
}

export default Menu