import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from 'react-router';

function TopProfile() {
  return (
    <div className="w-full top-0 right-0 pt-3 px-8">
    <section className="flex justify-end w-full">
      <div className="flex gap-5 items-center text-xl">
        <div className="border p-3 rounded-2xl">
          <IoIosSearch />
        </div>
        <div className="border p-3 rounded-2xl">
          <FaBell />
        </div>
        <Link className="flex items-center gap-2 border px-2 py-1.5 rounded-2xl" to={'/profile'}>
          <div className="w-8 rounded-full overflow-hidden">
            <img src="https://picsum.photos/50/50" alt="" />
          </div>
          <div>
            <FaGreaterThan />
          </div>
        </Link>
      </div>
    </section>
  </div>
  )
}

export default TopProfile