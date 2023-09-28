import React from 'react'
import Slider from '../components/Slider'
import line from '../assets/line.svg'

export default function Projects() {
    return (
        <div 
        id ="projects"
        className ="w-full h-auto bg-pink flex flex-col items-center p-[10%]">
            <h1 className= "relative inline-block uppercase text-2xl text-center py-20 w-full">Projects
            <img src= {line} alt =""
            className = "absolute bottom-0 0 hidden lg:flex left-1/3"/></h1>
        <Slider/>
        </div>
      )
    }
