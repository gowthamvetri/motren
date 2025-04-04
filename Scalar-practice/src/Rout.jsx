import React from 'react'
import {Outlet} from 'react-router'
import NavBar from './components/common/NavBar'
import TopProfile from './components/common/TopProfile'

function Rout() {
    return (
        <>
        <div className="flex">
        <NavBar/>
        <div className="flex flex-col w-full">
          <div><TopProfile/></div>
          <div className=""><Outlet/></div>
        </div>
      </div>
      </>
  )
}

export default Rout