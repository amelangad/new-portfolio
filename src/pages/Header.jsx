import React from 'react'
import Nav from '../components/Nav'
import Circle from '../components/Circle.jsx'


export default function Header() {
  return (
<div className ="max-w-full h-full flex flex-col xl:flex-row xl:justify-between  justify-center items-center px-[10%] xl:px-[5%] mb-24 overflow-hidden">
      <Nav/>
      <div className ="lg:mt-20 xl:mt-0 lg:p-24 xl:p-0 flex justify-center flex-col  gap-5 xl:gap-3 items-center xl:items-start">
      <p className = "text-5xl lg:text-6xl xl:text-7xl text-center lg:text-start ani">Hi, I'm <span className ="relative before:w-2/3 before:h-2 before:bg-pink before:absolute before:right-0 before:bottom-0 before:mt-5">Magda</span></p>
         <p className ="h-auto uppercase text-md md:text-3xl xl:text-5xl font-light mt-5 text-center lg:text-start mb-24 lg:mb-0 ani-text">junior frontend developer</p>
        </div>
        <Circle/>
        </div>
    

  )}
