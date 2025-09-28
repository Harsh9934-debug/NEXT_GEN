// this contain the logo for the website and the hamburger menu for the navigation bar

import React, { useContext, useRef } from 'react'
import { NavbarColorContext, NavbarContext } from '../../context/NavContext'

const Navbar = () => {

    const navGreenRef = useRef(null)
    const [navOpen,setNavOpen] = useContext(NavbarContext)
    const [navColor, setNavColor] = useContext(NavbarColorContext)

    return (
        <div className='z-4 flex fixed top-0 w-full  items-start justify-between'>
            <div className='lg:p-8 p-2 '>
            <div className='lg:w-52 w-10 group cursor-pointer'>
                    {/* NEXTGEN Text Logo */}
                    <div className='relative '>
                        <h1 className={`font-black lg:text-2xl text-xl tracking-[0.2em] transition-all duration-500
                                       ${navColor === 'white' ? 'text-white' : 'text-black'} 
                                       group-hover:scale-110 group-hover:tracking-[0.25em]
                                       relative z-10`}>
                            <span className='inline-block transform transition-transform duration-300 
                                           group-hover:-rotate-2 group-hover:translate-y-[-2px]'>
                                NEXT
                            </span>
                            <span className='text-[#D3FD50] relative inline-block ml-1 
                                           transform transition-all duration-300
                                           group-hover:rotate-2 group-hover:translate-y-[2px]
                                           drop-shadow-[0_0_8px_rgba(211,253,80,0.3)]'>
                                GEN
                                
                                {/* Animated underline with gradient */}
                                <div className='absolute bottom-0 left-0 h-1 bg-gradient-to-r 
                                               from-[#D3FD50] via-[#B8E63C] to-[#D3FD50] w-0 
                                               group-hover:w-full transition-all duration-700 ease-out
                                               shadow-[0_2px_8px_rgba(211,253,80,0.4)]'></div>
                                
                                {/* Pulse effect on GEN */}
                                <div className='absolute inset-0 text-[#D3FD50] opacity-0 
                                               group-hover:opacity-30 group-hover:animate-pulse
                                               transition-opacity duration-300'>
                                    GEN
                                </div>
                            </span>
                        </h1>
                        
                        {/* Enhanced background glow effect */}
                        <div className='absolute inset-0 bg-gradient-radial from-[#D3FD50]/20 
                                       via-[#D3FD50]/10 to-transparent blur-2xl rounded-2xl 
                                       opacity-0 group-hover:opacity-100 transition-all duration-500 
                                       -z-10 scale-150'></div>
                        
                        {/* Multiple floating particles with different animations */}
                        <div className='absolute -top-2 -right-2 w-2 h-2 bg-[#D3FD50] rounded-full 
                                       opacity-0 group-hover:opacity-100 
                                       group-hover:animate-[float_2s_ease-in-out_infinite]
                                       transition-all duration-300'></div>
                        
                        <div className='absolute top-1/2 -left-3 w-1.5 h-1.5 bg-white/60 rounded-full 
                                       opacity-0 group-hover:opacity-100 
                                       group-hover:animate-[bounce_1.5s_ease-in-out_infinite]
                                       transition-all duration-300' 
                             style={{animationDelay: '0.3s'}}></div>
                             
                        <div className='absolute -bottom-2 left-1/4 w-1 h-1 bg-[#D3FD50]/80 rounded-full 
                                       opacity-0 group-hover:opacity-100 
                                       group-hover:animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]
                                       transition-all duration-300'
                             style={{animationDelay: '0.6s'}}></div>
                    </div>
                </div>
            </div>
            <div onClick={()=>{
                setNavOpen(true)
            }} onMouseEnter={() => {
                navGreenRef.current.style.height = '100%'
            }}
                onMouseLeave={() => {
                    navGreenRef.current.style.height = '0%'
                }}
                className='lg:h-16 h-10 bg-black relative lg:w-[16vw] w-48'>
                <div ref={navGreenRef} className='bg-[#D3FD50] transition-all absolute top-0 h-0 w-full'></div>
                <div className='relative h-full lg:px-12 px-8 flex flex-col justify-center items-end lg:gap-1.5 gap-0.5'>
                    <div className="lg:w-18 w-12 h-0.5 bg-white"></div>
                    <div className="lg:w-10 w-6 h-0.5 bg-white"></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar