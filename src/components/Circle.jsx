import React, {useState} from 'react'
import logo from '../assets//logo.svg';
import prof from '../assets/prof.jpeg'
import { motion } from "framer-motion"

export default function Circle() {
  const [isVisible, setIsVisible] = useState(true);

  const show = {
    opacity: 1,
    display: "block",
    scale: 1,
  };
  
  const hide = {
    opacity: 0,
    scale: .8,
  };

  return (
    <div className="relative w-auto h-auto flex justify-center items-center">
      <motion.div className="bg-pink rounded-full w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] cursor-pointer"
      animate={isVisible ? show : hide}
      transition ={{ duration: .5}}>
      </motion.div>
      <motion.img
        src={prof}
        alt="prof"
        className="absolute rounded-full w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] box"
        animate={isVisible ? hide : show}
        transition ={{ duration: .5}}
      />
      <motion.img className="absolute right-0 w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] cursor-pointer " src={logo} alt="logo"
         onClick= { () => setIsVisible(!isVisible)}
         whileHover ={{opacity:0}}
      ></motion.img>
    </div>
  )
}
