import React, { useRef, useState, useEffect } from 'react'
import { motion } from "framer-motion"
import images from '../images.js';



export default function Slider() {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect (()=> {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, [])
  
  return (
     <motion.div className ="cursor-grab overflow-hidden h-1/3 w-full">
     <motion.div 
     animate={{ x: [null, -width/4] }}
     transition={{
      duration: 8,
      type: "tween",
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
      repeatDelay: 1,
    }}
     ref ={carousel}
     drag ="x" 
     dragConstraints={{right: 0, left:-width}} 
     className ="flex " >
     {images.map((image) =>{ return (
    <motion.div 
    className = "min-w-[30rem] max-h-[300px] px-[15px]" 
   
    key={image}>
            <img
         src={image} 
         alt="" 
         className = "pointer-events-none py-12"/>
        </motion.div>
    
     )})}
     </motion.div>
     </motion.div>
  )
}
