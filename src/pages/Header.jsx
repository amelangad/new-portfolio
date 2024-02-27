import React from 'react'
import Nav from '../components/Nav'
import Circle from '../components/Circle.jsx'


export default function Header() {
  return (
<div className ="w-full h-full flex flex-col lg:flex-row lg:justify-between justify-center items-center px-[10%] mb-24">
      <Nav/>
      <div className ="">
      <p className = "text-5xl lg:text-7xl text-center lg:text-start ani">Hi, I'm <span className ="relative before:w-2/3 before:h-2 before:bg-pink before:absolute before:right-0 before:bottom-0 before:mt-5">Magda</span></p>
         <p className ="uppercase text-2xl lg:text-5xl font-light mt-5 text-center lg:text-start mb-24 lg:mb-0 ani-text">junior frontend developer</p>
        </div>
        <Circle/>
        </div>
    

  )}
