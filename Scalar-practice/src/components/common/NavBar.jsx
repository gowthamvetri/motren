import React from "react";
import { BsFillBoxFill } from "react-icons/bs";
import { FaCompass } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa6";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { LuMessageCircleQuestion } from "react-icons/lu";
import { Link } from "react-router";


function NavBar() {
  return (
    <>
      <div className="px-6 py-10 h-screen sticky left-0 top-0 text-3xl bg-amber-100">
        <section className="absolute text-yellow-400">
          <Link to={'/'}><BsFillBoxFill /></Link>
        </section>
        <section className="flex items-center justify-center h-full">
          <div className="flex flex-col justify-between h-[60%]">
            <FaCompass />
            <FaCalendarCheck />
            <BsFillRocketTakeoffFill />
            <Link to={'/contactUs'}><LuMessageCircleQuestion/></Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default NavBar;
