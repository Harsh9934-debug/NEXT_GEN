import React, { useRef, useEffect } from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Home = () => {
  const container = useRef(null);
  const stickyMask = useRef(null);

  const initialMaskSize = 0.8;
  const targetMaskSize = 30;
  const easing = 0.15;
  let easedScrollProgress = 0;

  useEffect(() => {
    requestAnimationFrame(animate)
  }, [])

  const animate = () => {
    if (stickyMask.current && container.current) {
      const progress = getScrollProgress();
      
      // Animate the mask size from initialMaskSize to targetMaskSize
      // This is the core logic for the reveal animation
      const newMaskSize = (initialMaskSize + targetMaskSize * progress) * 100; // in percent
      stickyMask.current.style.webkitMaskSize = newMaskSize + "%";
      stickyMask.current.style.maskSize = newMaskSize + "%";
    }
    requestAnimationFrame(animate)
  }

  const getScrollProgress = () => {
    if (stickyMask.current && container.current) {
      const containerRect = container.current.getBoundingClientRect();
      const scrollProgress = -containerRect.top / (containerRect.height - window.innerHeight);
      const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
      
      const delta = clampedProgress - easedScrollProgress;
      easedScrollProgress += delta * easing;
      return easedScrollProgress;
    }
    return 0;
  }

  return (
    <div>
      {/* Scroll Mask Effect Section - FIRST */}
  <div ref={container} className="relative h-[190vh] bg-black overflow-hidden">
        <div 
          ref={stickyMask} 
          className="sticky top-0 h-screen w-full"
          style={{
            maskImage: 'url(/text-mask.svg)',
            WebkitMaskImage: 'url(/text-mask.svg)',
            maskPosition: '52.35% center',
            WebkitMaskPosition: '52.35% center',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskSize: `${initialMaskSize * 100}%`,
            WebkitMaskSize: `${initialMaskSize * 100}%`
          }}
        >
          {/* The content that gets masked */}
          <div className='relative w-screen h-screen text-white overflow-hidden'>
            <div className='absolute inset-0'>
              <Video />
            </div>
            <div className='relative h-full w-full pb-5 flex flex-col justify-between'>
              <HomeHeroText />
              <HomeBottomText />
            </div>
          </div>
        </div>
      </div>

      {/* Original Landing Page - SECOND */}
      <div className='text-white'>
        <div className='h-screen w-screen relative overflow-hidden'>
          <div className='absolute inset-0'>
            <Video />
          </div>
          <div className='relative h-full w-full pb-5 flex flex-col justify-between'>
            <HomeHeroText />
            <HomeBottomText />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home