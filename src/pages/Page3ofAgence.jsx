import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from "framer-motion";
import kundanImage from '/kundan.png';
import mayureshImage from '/mayuresh.png';


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
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -4]);

  return (
    <motion.section
      style={{ scale, rotate }}
      className="sticky top-0 flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#050505] via-[#090909] to-[#0f0f0f] px-6 py-16 text-white"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60" aria-hidden="true">
        <div className="absolute -top-40 left-10 h-[22rem] w-[22rem] rounded-full bg-[#9fe80c]/20 blur-[160px]" />
        <div className="absolute bottom-[-140px] right-[-120px] h-[26rem] w-[26rem] rounded-full bg-white/10 blur-[180px]" />
      </div>

      <div className="relative z-20 w-[88vw] max-w-5xl rounded-[42px]  md:px-12 md:py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-center">
          <div className="relative mx-auto aspect-[3/4] w-[70vw] max-w-sm overflow-hidden rounded-[34px] shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
            <img
              src={kundanImage}
              alt="Portrait of Kundan Gupta"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" aria-hidden="true" />
            <span className="absolute bottom-6 left-6 inline-flex rounded-full border border-white/25 bg-black/60 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-white/80 backdrop-blur">
              Marketing Architect
            </span>
          </div>

          <div className="flex-1 space-y-8">
            <div className="space-y-4 text-left">
              <p className="text-xs uppercase tracking-[0.45em] text-white/50">Strategy · Performance · Story</p>
              <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                Kundan Gupta
              </h2>
              <p className="text-sm leading-relaxed text-white/70 md:text-base">
                Kundan bridges cultural intuition with data-led insight to build campaigns that scale without losing soul. Every launch blends experimentation, measurement, and a human pulse you can feel in-market.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* <div className="absolute top-1/2 left-0 -translate-y-1/2 select-none whitespace-nowrap text-[22vw] font-extrabold uppercase leading-none text-[#9fe80c]/20 md:text-[18vw] lg:text-[13vw]" aria-hidden="true">
        &nbsp;Kundan&nbsp;
      </div> */}
    </motion.section>
  )
}
//image for the section 2
const Section2 = ({scrollYProgress}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0])

  return (
    <motion.div 
      style={{scale, rotate}} 
      className="relative h-screen bg-black flex flex-col items-center justify-center"
    >
      {/* Second team member or different content */}
      <div className="relative w-[80vw] md:w-[60vw] lg:w-[35vw] h-screen flex justify-center items-center">
          <img
              src={mayureshImage}
              alt="Profile of Olivier"
              className="object-cover w-full h-full rounded-lg"
          />
      </div>

      {/* Moving Name for Section 2 */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden whitespace-nowrap pointer-events-none z-10">
          <span className="inline-block text-[25vw] md:text-[20vw] lg:text-[15vw] xl:text-[5vw] font-extrabold text-white uppercase opacity-90 leading-none">
              &nbsp;mayuresh&nbsp;
          </span>
      </div>

      {/* Designation for Section 2 */}
      <div className="absolute bottom-10 lg:bottom-20 right-10 lg:right-20 text-right z-20">
          <p className="text-white text-base md:text-lg lg:text-xl font-semibold tracking-wide">
              Marketing
          </p>
      </div>
    </motion.div>
  )
}

//  this is the images for the secrion 3 


export default Page3ofAgence
