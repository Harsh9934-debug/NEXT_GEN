import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef, useEffect, useState } from 'react'
import Page3ofAgence from './Page3ofAgence'

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null) // Used for Page 1's scrolling image
  const imageRef = useRef(null)     // Used for Page 1's scrolling image

  const nameTextRef = useRef(null) // New ref for the animated name in Page 3

  const [isDesktop, setIsDesktop] = useState(false)

  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]

  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 1024)
    checkScreen()
    window.addEventListener('resize', checkScreen)
    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  useGSAP(() => {
    // GSAP for Page 1's scrolling image
    if (isDesktop && imageDivRef.current && imageRef.current) {
      gsap.to(imageDivRef.current, {
        scrollTrigger: {
          trigger: imageDivRef.current,
          start: 'top 28%',
          end: 'top -70%',
          pin: true,
          pinSpacing: true,
          pinReparent: true,
          pinType: 'transform',
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (elem) => {
            if (imageRef.current) {
              let imageIndex
              if (elem.progress < 1) {
                imageIndex = Math.floor(elem.progress * imageArray.length)
              } else {
                imageIndex = imageArray.length - 1
              }
              imageRef.current.src = imageArray[imageIndex]
            }
          }
        }
      })
    }

    // GSAP for Page 3's moving name text
    if (nameTextRef.current) {
      gsap.to(nameTextRef.current, {
        x: '200%', // Adjust this value to control how far it moves
        duration: 4, // Duration of one cycle
        repeat: -1, // Infinite loop
        yoyo: true, // Go back and forth
        ease: 'none', // Linear movement
      });
    }

  }, [isDesktop, imageArray]); // Add imageArray to dependencies for useGSAP related to imageRef


  return (
    <div className='parent'>
      <div id='page1' className='py-1'>
        {isDesktop && (
          <div
            ref={imageDivRef}
            className='absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[25vw] lg:top-96 -top-80 lg:left-[20vw] left-[30vw]'
          >
            <img
              ref={imageRef}
              className='h-full object-cover w-full'
              src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
              alt=""
            />
          </div>
        )}

        <div className='relative font-[font2]'>
          <div className='lg:mt-[55vh] mt-[30vh]'>
            <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>
              NEXT GEN
            </h1>
          </div>
          <div className='lg:pl-[40%] lg:mt-20 mt-6 p-5'>
            <p className='lg:text-5xl text-xl leading-tight'>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              We stay curious and open-minded, letting innovation lead over ego. To us, every brand is alive—with values, personality, and a story. Short-term wins fade, but meaningful impact lasts. We code, design, and create with that perspective in every project we deliver.
            </p>
          </div>
        </div>
      </div>

      <div id="page2" className="h-170 mt-50  flex flex-col justify-center items-center px-4 md:px-8 bg-white text-gray-800">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-[font2] tracking-tight text-center mb-16 max-w-4xl leading-tight">
        A collective of curious minds.
    </h1>
    <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-12 text-center max-w-6xl px-4">
        {/* Our Work */}
        <div className="flex-1 p-6 transition-transform transform hover:scale-105">
            <span className="text-4xl text-gray-500 mb-4 inline-block"></span>
            <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl mb-2">
                Our Work
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-600">
                Born in curiosity, raised by dedication, and fed with a steady diet of creativity. We deliver thoughtful, impactful solutions that stand out.
            </p>
        </div>
        {/* Our Creative */}
        <div className="flex-1 p-6 transition-transform transform hover:scale-105">
            <span className="text-4xl text-gray-500 mb-4 inline-block"></span>
            <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl mb-2">
                Our Creative
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-600">
                A space where talent comes to a full boil. We’re encouraged to push boundaries and become the best versions of ourselves.
            </p>
        </div>
        {/* Our Culture */}
        <div className="flex-1 mb-30 p-6 transition-transform transform hover:scale-105">
            <span className="text-4xl text-gray-500 mb-4 inline-block"></span>
            <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl mb-2">
                Our Culture
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-600">
                We're an open book. The team works together to build a space that makes us proud—a place where everyone feels heard and valued.
            </p>
        </div>
    </div>
</div>
  <Page3ofAgence />
    </div>
  )
}

export default Agence;