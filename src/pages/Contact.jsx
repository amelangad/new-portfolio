import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion"

export default function Contact() {
  const data = new Date();
  const year = data.getFullYear();


  return (
    <motion.div id="contact"
    className= "flex flex-col-reverse lg:flex-row  justify-center lg:justify-between items-center w-full h-auto overflow-hidden lg:overflow-visible"
    >
        <motion.div
        className ="text-xl ml-5 flex justify-center overflow-hidden"
        initial={{y:-110, x:800 }}
        whileInView={{y: 0 ,x:0}}
        transition ={{ duration: .5, delay: .1}}>
      &copy; Magda {year}</motion.div>
    <motion.div
      className="lg:h-20 flex flex-row justify-end items-center mr-0 lg:mr-10"
      initial={{y:-110, x:-800 }}
        whileInView={{y: 0 ,x:0}}
        transition ={{ duration: .5, delay: .1}}>
          <motion.div
           whileTap={{ scale: 0.6}}
           whileHover={{ y: [0, -5, 0]}}
           transition={{ duration: .5 }}
           className="p-3 m-5 rounded-xl bg-pink cursor-pointer">
           <a 
           href="mailto:slodzinska.magdalena@gmail.com"
            className=" text-md lg:text-3xl  px-3 lg:px-10 flex justify-center">
            <FaEnvelope /></a></motion.div>
            <motion.div
           whileTap={{ scale: 0.6}}
           whileHover={{ y: [0, -5, 0]}}
           transition={{ duration: .5 }}
           className="p-3 m-5 rounded-xl bg-pink cursor-pointer">
           <a 
           href="https://github.com/amelangad"
            className=" text-md lg:text-3xl  px-3 lg:px-10 flex justify-center">
            <FaGithub /></a></motion.div>
            <motion.div
           whileTap={{ scale: 0.6}}
           whileHover={{ y: [0, -5, 0]}}
           transition={{ duration: .5 }}
           className="p-3 m-5 rounded-xl px-5 bg-pink cursor-pointer">
           <a 
            href="tel:+48535828465"
            className=" text-md lg:text-3xl">
           <FaPhoneAlt /></a></motion.div>
           </motion.div>
    </motion.div>
  )
  
}
