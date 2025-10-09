// this contain the logo for the website and the hamburger menu for the navigation bar

import React, { useContext, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { NavbarColorContext, NavbarContext } from '../../context/NavContext'

const Navbar = () => {

    const location = useLocation()
    const navGreenRef = useRef(null)
    const [navOpen,setNavOpen] = useContext(NavbarContext)
    const [navColor, setNavColor] = useContext(NavbarColorContext)

    const isAgence = location.pathname === '/agence'
    const isProjects = location.pathname === '/projects'

    return (
        <div className='z-4 flex fixed top-0 w-full  items-start justify-between'>
            <div className='lg:p-8 p-2 '>
                <a href="#/" className='inline-block h-8 lg:h-10 group cursor-pointer'>
                    <img
                        src={isProjects ? '/logo2.svg' : (navColor === 'white' ? '/logo2.svg' : '/logo.svg')}
                        alt="Site logo"
                        className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                </a>
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