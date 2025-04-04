import React from 'react'
import { FaEdit } from "react-icons/fa";

function EditBtn() {
  return (
    <div className='flex gap-3 items-center w-[100%] py-2 bg-blue-500 text-white rounded-xl justify-center cursor-pointer '>
        <FaEdit/>
        <p>Edit Profile</p>
    </div>
  )
}

export default EditBtn