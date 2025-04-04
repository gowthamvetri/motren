import React, { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { FaSave } from "react-icons/fa";

function BasicInfo() {
    const [edit,setEdit] = useState("");
    const [user,setUser] = useState({
        name:"Bharath Kumar",
        gender:"Male",
        location:"Coimbatore TamilNadu",
        birthday:"22/6/2005",
        summary:"hello this is a note fro developer",
        website:"hostinger.com",
        github:"githubcopilot.com"
    })

    const handleChange = (e)=>{
        const name = e.target.name;
        setUser({
            ...user,
            [name] : e.target.value
        })
    }
    const handleSave = (e)=>{
        e.preventDefault()
        setEdit("")
    }


  return (
    <div className='w-full bg-amber-100 rounded-2xl text-nowrap'> 
            <form action="" onSubmit={handleSave} className='px-5 py-8 flex flex-col gap-5'>
            <div className='flex items-center bg-amber-200 px-8 py-4 justify-between rounded-xl'>
                <div><h2>Name</h2></div>
                <div className='w-80'>{edit=="name"?<input type='text' autoFocus value={user.name} onChange={handleChange} name='name' id='name'/> :user.name}</div>
                <div className='flex items-center gap-2 cursor-pointer' onClick={()=>setEdit("name")}>
                    {edit=='name'?<label htmlFor="submit"><FaSave /></label>:<FaEdit/>}
                    {edit=='name'?<input type="submit" value={"save"} id='submit'/>: <h2>Edit</h2>}
                </div>
            </div>
            <div className='flex items-center bg-amber-200 px-8 py-4 justify-between rounded-xl'>
                <div>Gender</div>
                <div className='w-80'>{edit=='gender'?<input type='text' autoFocus value={user.gender} onChange={handleChange} name='gender'/>:user.gender}</div>
                <div className='flex items-center gap-2 cursor-pointer' onClick={()=>setEdit("gender")}>
                    {edit=='gender'?<label htmlFor="submit"><FaSave/></label>:<FaEdit/>}
                    {edit=='gender'?<input type="submit" value={"save"} id='submit'/>: <h2>Edit</h2>}
                </div>
            </div>
            <div className='flex items-center  bg-amber-200 px-8 py-4 justify-between rounded-xl'>
                <div>Location</div>
                <div className='w-80'>{edit=='location'?<input type='text' autoFocus value={user.location} onChange={handleChange} name='location'/>:user.location}</div>
                <div className='flex items-center gap-2 cursor-pointer' onClick={()=>setEdit("location")}>
                    {edit=='location'?<label htmlFor="submit"><FaSave /></label>:<FaEdit/>}
                    {edit=='location'?<input type="submit" value={"save"} id='submit'/>: <h2>Edit</h2>}
                </div>
            </div>
            <div className='flex items-center  bg-amber-200 px-8 py-4 justify-between rounded-xl'>
                <div>BirthDay</div>
                <div className='w-80'>{edit=='birth'?<input type='text' autoFocus value={user.birthday} onChange={handleChange} name='birthday'/>:user.birthday}</div>
                <div className='flex items-center gap-2 cursor-pointer' onClick={()=>setEdit("birth")}>
                    {edit=='birth'?<label htmlFor="submit"><FaSave /></label>:<FaEdit/>}
                    {edit=='birth'?<input type="submit" value={"save"} id='submit'/>: <h2>Edit</h2>}
                </div>
            </div>
            <div className='flex items-center  bg-amber-200 px-8 py-4 justify-between rounded-xl'>
                <div>Summary</div>
                <div className='w-80'>{edit=='summary'?<textarea className='w-120' type='text-aera' autoFocus value={user.summary} onChange={handleChange} name='summary'/>:user.summary.substring(0,40)+"...."}</div>
                <div className='flex items-center gap-2 cursor-pointer'onClick={()=>setEdit("summary")}>
                    {edit=='summary'?<label htmlFor="submit"><FaSave /></label>:<FaEdit/>}
                    {edit=='summary'?<input type="submit" value={"save"} id='submit'/>: <h2>Edit</h2>}
                </div>
            </div>
            <div className='flex items-center  bg-amber-200 px-8 py-4 justify-between rounded-xl'>
                <div>Website</div>
                <div className='w-80'>{edit=='website'?<input type='text' autoFocus value={user.website} onChange={handleChange} name='website'/>:user.website}</div>
                <div className='flex items-center gap-2 cursor-pointer' onClick={()=>setEdit("website")}>
                    {edit=='website'?<label htmlFor="submit"><FaSave /></label>:<FaEdit/>}
                    {edit=='website'?<input type="submit" value={"save"} id='submit'/>: <h2>Edit</h2>}
                </div>
            </div>
            <div className='flex items-center  bg-amber-200 px-8 py-4 justify-between rounded-xl'>
                <div>Github</div>
                <div className='w-80'>{edit=='github'?<input type='text' autoFocus value={user.github} onChange={handleChange} name='github'/>:user.github}</div>
                <div className='flex items-center gap-2 cursor-pointer' onClick={()=>setEdit("github")}>
                    {edit=='github'?<label htmlFor="submit"><FaSave /></label>:<FaEdit/>}
                    {edit=='github'?<input type="submit" value={"save"} id='submit'/>: <h2>Edit</h2>}
                </div>
            </div>
            </form>
    </div>
  )
}

export default BasicInfo