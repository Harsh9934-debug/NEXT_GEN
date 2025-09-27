import React, { useRef, useEffect } from 'react'
import { useScroll, useTransform, motion } from "framer-motion";

function Page3ofAgence() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  }) 

  return (
    <div ref={container} className="relative h-[200vh]">
      <Section1 scrollYProgress={scrollYProgress}/>
      <Section2 scrollYProgress={scrollYProgress}/>
    </div>
  )
}

const Section1 = ({scrollYProgress}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])
  
  return (
    <motion.div 
      style={{scale, rotate}} 
      className="sticky top-0 h-screen bg-black text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]"
    >
      {/* Central Image - Full Screen Height */}
      <div className="relative w-[80vw] md:w-[60vw] lg:w-[35vw] h-screen flex justify-center items-center">
          <img
              src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
              alt="Profile of Carl"
              className="object-cover w-full h-full rounded-lg"
          />
      </div>

      {/* Moving Name */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden whitespace-nowrap pointer-events-none z-10">
          <span className="inline-block text-[25vw] md:text-[20vw] lg:text-[15vw] xl:text-[10vw] font-extrabold text-[#9fe80c] uppercase opacity-90 leading-none">
              &nbsp;CARL&nbsp;
          </span>
      </div>

      {/* Designation */}
      <div className="absolute bottom-10 lg:bottom-20 right-10 lg:right-20 text-right z-20">
          <p className="text-white text-base md:text-lg lg:text-xl font-semibold tracking-wide">
              CREATIVE DIRECTOR
          </p>
      </div>
    </motion.div>
  )
}

const Section2 = ({scrollYProgress}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0])

  return (
    <motion.div 
      style={{scale, rotate}} 
      className="relative h-screen bg-gray-900 flex flex-col items-center justify-center"
    >
      {/* Second team member or different content */}
      <div className="relative w-[80vw] md:w-[60vw] lg:w-[35vw] h-screen flex justify-center items-center">
          <img
              src="https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg"
              alt="Profile of Olivier"
              className="object-cover w-full h-full rounded-lg"
          />
      </div>

      {/* Moving Name for Section 2 */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden whitespace-nowrap pointer-events-none z-10">
          <span className="inline-block text-[25vw] md:text-[20vw] lg:text-[15vw] xl:text-[10vw] font-extrabold text-[#9fe80c] uppercase opacity-90 leading-none">
              &nbsp;OLIVIER&nbsp;
          </span>
      </div>

      {/* Designation for Section 2 */}
      <div className="absolute bottom-10 lg:bottom-20 right-10 lg:right-20 text-right z-20">
          <p className="text-white text-base md:text-lg lg:text-xl font-semibold tracking-wide">
              LEAD DEVELOPER
          </p>
      </div>
    </motion.div>
  )
}

export default Page3ofAgence
