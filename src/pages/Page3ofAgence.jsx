import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Page3ofAgence() {
  const nameTextRef = useRef(null)

  useGSAP(() => {
    // GSAP for Page 3's moving name text only
    if (nameTextRef.current) {
      gsap.to(nameTextRef.current, {
        x: '200%',
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'none',
      });
    }
  }, []);

  return (
    <div>
      {/* Page 3: New Section - Simple version with first image */}
      <div id="page3" className="relative h-screen w-full bg-black flex flex-col justify-center items-center overflow-hidden">
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
            <span ref={nameTextRef} className="inline-block text-[25vw] md:text-[20vw] lg:text-[15vw] xl:text-[10vw] font-extrabold text-[#9fe80c] uppercase opacity-90 leading-none">
                &nbsp;CARL&nbsp;
            </span>
        </div>

        {/* Designation */}
        <div className="absolute bottom-10 lg:bottom-20 right-10 lg:right-20 text-right z-20">
            <p className="text-white text-base md:text-lg lg:text-xl font-semibold tracking-wide">
                CREATIVE DIRECTOR
            </p>
        </div>
        
      </div>
    </div>
  )
}

export default Page3ofAgence
