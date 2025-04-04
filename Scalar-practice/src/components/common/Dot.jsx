import React from 'react'

function Dot({color}) {
  return (
    <div className={`w-2 h-2 rounded-full bg-${color}-400 inline-block`}></div>
  )
}

export default Dot