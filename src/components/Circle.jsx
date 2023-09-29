import React from 'react'
import logo from '../assets//logo.svg';

export default function Circle() {
  return (
    <div className ="relative w-auto h-auto flex justify-center items-center">
      <div className = "bg-pink rounded-full  w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]"></div>
      <img  className ="absolute right-0 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] " src={logo} alt="logo"></img>
  

    </div>
  )
}
