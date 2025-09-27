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
      
      // Instead of changing mask size, zoom the video
      const scale = 1 + (progress * 4); // Scale from 1x to 5x
      const maskSize = initialMaskSize * 100; // Keep mask size constant
      
      // Apply zoom to video container
      stickyMask.current.style.transform = `scale(${scale})`;
      
      // Keep mask size constant
      stickyMask.current.style.webkitMaskSize = maskSize + "%";
      stickyMask.current.style.maskSize = maskSize + "%";
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
      <div ref={container} className="relative h-[150vh] bg-black overflow-hidden">
        <div 
          ref={stickyMask} 
          className="flex sticky top-0 h-screen w-full items-center justify-center"
          style={{
            maskImage: 'url(/text-mask.svg)',
            WebkitMaskImage: 'url(/text-mask.svg)',
            maskPosition: '50% center',
            WebkitMaskPosition: '50% center',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskSize: '80%',
            WebkitMaskSize: '80%',
            transformOrigin: 'center center'
          }}
        >
          <Video />
        </div>
      </div>

      {/* Original Landing Page - SECOND */}
      <div className='text-white'>
        <div className='h-screen w-screen fixed'>
          <Video />
        </div>
        <div className='h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between'>
          <HomeHeroText />
          <HomeBottomText />
        </div>
      </div>
    </div>
  )
}

export default Home