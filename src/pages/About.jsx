import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.div
    className ="w-full h-full bg-pink flex justify-center items-center overflow-hidden"
    id ="about"
    initial={{y:100}}
    whileInView={{y:0}}
    transition={{delay: .3, duration: .5}}>
        <div className="bg-white w-3/4 h-auto p-x-12 py-10 lg:p-48 relative lg:rounded-bl-[20rem] lg:rounded-tr-[20rem] flex justify-center items-center">
        <div className ="absolute w-1/2 lg:w-1/4 h-12 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl border-black border flex justify-center items-center">
            <p className ="uppercase text-sm lg:text-2xl absolute ">About me</p>
        </div>
        <div className ="w-4/5 h-full flex justify-center items-center"><p className ="text-xsm lg:text-xl lg: leading-loose">I have been interested in programming for several years. Previously, I created websites based on WordPress CMS. Programming is my passion. I am self-taught. I am convinced that my skills can grow much faster when working with more experienced developers.
Ultimately, I would like to develop into a full-stack developer.</p></div>
        </div>
    </motion.div>
  )
}
