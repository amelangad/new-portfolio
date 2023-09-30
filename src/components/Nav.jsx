import React from 'react'
import {Link} from 'react-scroll'

export default function Nav() {
  return (
    <div className = "left-0 top-0 bg-pink w-full h-20 fixed z-50 shadow-xl overflow-hidden">
        <ul className ="flex flex-row gap-3 lg:gap-5 justify-center items-center h-full text-lg md:text-lg lg:text-xl">
        <li className ="relative cursor-pointer before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-black hover:before:w-full before:transition-all duration-200 
                ease-in"><Link to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
        <li className ="relative cursor-pointer before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-black hover:before:w-full before:transition-all duration-200 
                ease-in"><Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
        <li className ="relative cursor-pointer before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-black hover:before:w-full before:transition-all duration-200 
                ease-in"> <Link to="skills" spy={true} smooth={true} offset={50} duration={500}>Skills</Link></li>
        <li className ="relative cursor-pointer before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-black hover:before:w-full before:transition-all duration-200 
                ease-in"> <Link to="projects" spy={true} smooth={true} offset={50} duration={500}>Projects</Link></li>
        <li className ="relative cursor-pointer before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-black hover:before:w-full before:transition-all duration-200 
                ease-in"> <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>
   
        </ul>
    </div>
  )
}
