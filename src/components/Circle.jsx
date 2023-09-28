import React from 'react'
import logo from '../assets//logo.svg';

export default function Circle() {
  return (
    <>
    <div className ="relative bg-pink rounded-full top-1/3 w-[15rem] h-[15rem] lg:w-[25rem] lg:h-[25rem]">
    <img  className ="absolute bottom-0 left-0 z-20" src={logo} alt= "logo"/>
    </div>


    </>
  )
}
