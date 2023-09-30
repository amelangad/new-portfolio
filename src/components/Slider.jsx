import React, { useRef, useState, useEffect } from 'react'
import { motion } from "framer-motion"
import images from '../images.js';



export default function Slider() {
   const [width, setWidth] = useState(0);
   const carousel = useRef();

   useEffect(() => {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
   }, [])

   return (
      <motion.div className="flex justify-center items-center cursor-grab overflow-hidden h-2/3 w-full bg-pink z-100 ">
         <motion.div
            className="flex bg-pink w-full min-h-[500px] border-b border-black mt-[100px]"
            animate={{ x: [0, -width]}}
            transition={{
               duration: 8,
               type: "tween",
               ease: "easeInOut",
               times: [0, 0.2, 0.5, 0.8, 1],
               repeat: Infinity,
               repeatDelay: 1,
               repeatType: "reverse",
            }}
            ref={carousel}
            drag="x"
            dragConstraints={{ right: 0, left: -width }} >
            {images.map((image) => {
               return (
                  <motion.a
                     href={image.href}
                     className=" min-w-[30rem] mx-[15px] max-h-[250px] cursor-pointer"
                     key={image}
                  >
                     <img
                        src={image.src}
                        alt=""
                        className="pointer-events-none py-0 rounded-b-[30px]" />

                  </motion.a>


               )
            })}
         </motion.div>
      </motion.div>
   )
}
