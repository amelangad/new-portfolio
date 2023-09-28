import React from 'react'
import Nav from '../components/Nav'
import Circle from '../components/Circle.jsx'


export default function Header() {
  return (
    <div id ="home" className ="relative w-full h-full bg-white flex items-center justify-center lg:justify-between lg:px-24">
        <Nav/>
        <div className ="flex flex-col lg:flex-row justify-center gap-24 items-center text-black">
         <p className = "text-5xl lg:text-7xl text-center lg:text-start ">Hi, I'm Magda
            <span className ="uppercase text-2xl lg:text-5xl font-light "><br/>junior frontend developer</span></p>
            <Circle/>
            <div>
        </div>
        </div>

    </div>
  )
}
