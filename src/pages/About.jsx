import React from 'react'

export default function About() {
  return (
    <div
    className ="w-full h-full bg-pink flex justify-center items-center"
    id ="about">
        <div className="bg-white w-3/4 h-auto p-x-12 py-10 lg:p-48 relative lg:rounded-bl-[10rem] lg:rounded-tr-[10rem] flex justify-center items-center">
        <div className ="absolute w-1/2 lg:w-1/4 h-12 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md border-black border flex justify-center items-center">
            <p className ="uppercase text-sm lg:text-2xl absolute ">About me</p>
        </div>
        <div className ="w-3/4 h-full flex justify-center items-center"><p className ="text-xsm lg:text-xl lg: leading-loose">I have been interested in programming for several years. Previously, I created websites based on WordPress CMS. Programming is my passion. I am self-taught. I am convinced that my skills can grow much faster when working with more experienced developers.
Ultimately, I would like to develop into a full-stack developer.</p></div>
        </div>
    </div>
  )
}
