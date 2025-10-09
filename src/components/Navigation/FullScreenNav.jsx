import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useEffect, useRef } from 'react'
import { NavbarContext } from '../../context/NavContext'

const FullScreenNav = () => {
    const fullNavLinksRef = useRef(null)
    const fullScreenRef = useRef(null)
    const [navOpen, setNavOpen] = useContext(NavbarContext)

    // Lock body scroll and handle Escape key when nav is open, also focus first link
    const scrollYRef = useRef(0)
    useEffect(() => {
        if (!navOpen) return
        // Capture scroll position
        scrollYRef.current = window.scrollY || window.pageYOffset || 0
        const body = document.body
        // Lock scroll using position: fixed technique
        body.style.position = 'fixed'
        body.style.top = `-${scrollYRef.current}px`
        body.style.left = '0'
        body.style.right = '0'
        body.style.width = '100%'
        body.style.overflow = 'hidden'

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setNavOpen(false)
            }
        }
        document.addEventListener('keydown', handleKeyDown)

        // Focus first interactive link inside the nav
        const firstLink = fullNavLinksRef.current?.querySelector('a[href]')
        if (firstLink) {
            setTimeout(() => firstLink.focus(), 0)
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            // Restore scroll
            const y = scrollYRef.current
            const b = document.body
            b.style.position = ''
            b.style.top = ''
            b.style.left = ''
            b.style.right = ''
            b.style.width = ''
            b.style.overflow = ''
            window.scrollTo(0, y)
        }
    }, [navOpen, setNavOpen])

    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', { display: 'block' })
        tl.to('.stairing', {
            delay: 0.2,
            height: '100%',
            stagger: { amount: -0.3 }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: { amount: 0.3 }
        })
        tl.to('.navlink', { opacity: 1 })
    }

    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: { amount: 0.1 }
        })
        tl.to('.stairing', {
            height: 0,
            stagger: { amount: 0.1 }
        })
        tl.to('.navlink', { opacity: 0 })
        tl.to('.fullscreennav', { display: 'none' })
    }

    useGSAP(() => {
        if (navOpen) gsapAnimation()
        else gsapAnimationReverse()
    }, [navOpen])

    return (
        <div
            ref={fullScreenRef}
            id='fullscreennav'
            className='fullscreennav hidden text-white overflow-hidden h-full w-full z-50 fixed inset-0 pointer-events-auto'
            role='dialog'
            aria-modal='true'
            aria-hidden={!navOpen}
        >
                    {/* Base backdrop to prevent background peeking while open */}
                    <div
                        className='fixed inset-0 bg-black'
                        aria-hidden='true'
                        onClick={() => setNavOpen(false)}
                    />
            <div className='h-screen w-full fixed'>
                <div className='h-full w-full flex'>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={fullNavLinksRef} className='relative'>
                <div className='navlink flex w-full justify-between lg:p-5 p-2 items-start'>
                    <div>
                        <a href='#/' onClick={() => setNavOpen(false)} className='inline-block h-8 lg:h-10'>
                            <img src='/logo2.svg' alt='Logo' className='h-full w-auto object-contain' />
                        </a>
                    </div>
                    <button onClick={() => setNavOpen(false)} className='lg:h-32 h-20 w-20 lg:w-32 relative cursor-pointer' aria-label='Close menu'>
                        <div className='lg:h-44 h-28 lg:w-1 w-0.5 -rotate-45 origin-top absolute bg-[#D3FD50]'></div>
                        <div className='lg:h-44 h-28 lg:w-1 w-0.5 right-0 rotate-45 origin-top absolute bg-[#D3FD50]'></div>
                    </button>
                </div>
                <div className=' py-36'>
                    <div className='link origin-top relative border-t-1 border-white'>
                        <h1 className='font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase'>
                            <a href='#/projects' onClick={() => setNavOpen(false)} className='block cursor-pointer'>Projects</a>
                        </h1>
                        <div className='moveLink pointer-events-none absolute text-black flex top-0 bg-[#D3FD50]'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Explore Projects</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src='https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg' alt='' />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Explore Projects</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src='https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg' alt='' />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'> Discover NEXTGEN</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src='https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg' alt='' />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Discover NEXTGEN</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src='https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg' alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='link origin-top relative border-t-1 border-white'>
                        <h1 className='font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase'>
                            <a href='#/agence' onClick={() => setNavOpen(false)} className='block cursor-pointer'>Agence</a>
                        </h1>
                        <div className='moveLink pointer-events-none absolute text-black flex top-0 bg-[#D3FD50]'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Start a Project</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src='https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg' alt='' />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Start a Project</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src='https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg' alt='' />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>VIEW OUR TEAM</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src='https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg' alt='' />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>VIEW OUR TEAM</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src='https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg' alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='link origin-top relative border-t-1 border-white'>
                        <h1 className='font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase'>
                            <a href='#/contact' onClick={() => setNavOpen(false)} className='block cursor-pointer'>Contact</a>
                        </h1>
                        <div className='moveLink pointer-events-none absolute text-black flex top-0 bg-[#D3FD50]'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>REACH US</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src='https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg' alt='' />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>CONTACT US</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src='https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg' alt='' />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>CONNECT US</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src='https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg' alt='' />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>REACH US</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src='https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg' alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullScreenNav