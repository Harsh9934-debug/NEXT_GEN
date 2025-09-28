import React, { useRef, useEffect, useState } from 'react';
import Video from '../components/home/Video';
import HomeHeroText from '../components/home/HomeHeroText';
import HomeBottomText from '../components/home/HomeBottomText';

const Home = () => {
  const container = useRef(null);
  const stickyMask = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const initialMaskSize = 0.8;
  const targetMaskSize = 30;
  const easing = 0.07;
  let easedScrollProgress = 0;

  useEffect(() => {
    let rafId;

    const animate = () => {
      if (stickyMask.current && container.current) {
        const progress = getScrollProgress();

        // Mask scaling
        const newMaskSize = (initialMaskSize + targetMaskSize * progress) * 100;
        stickyMask.current.style.webkitMaskSize = `${newMaskSize}%`;
        stickyMask.current.style.maskSize = `${newMaskSize}%`;

        // Vertical drift
        const maskPositionY = 50 + 10 * progress;
        stickyMask.current.style.webkitMaskPosition = `center ${maskPositionY}%`;
        stickyMask.current.style.maskPosition = `center ${maskPositionY}%`;

        // Fade mask at the end
        const fadeStart = 0.85;
        let maskOpacity = 1;
        if (progress > fadeStart) {
          maskOpacity = Math.max(0, 1 - (progress - fadeStart) / (1 - fadeStart));
        }
        stickyMask.current.style.opacity = maskOpacity;

        // Update state to control landing page opacity
        setScrollProgress(progress);
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const getScrollProgress = () => {
    if (!container.current) return 0;
    const rect = container.current.getBoundingClientRect();
    const raw = -rect.top / (rect.height - window.innerHeight);
    const clamped = Math.max(0, Math.min(1, raw));
    const delta = clamped - easedScrollProgress;
    easedScrollProgress += delta * easing;
    return easedScrollProgress;
  };

  return (
    <div className="relative w-screen bg-black">
      {/* Mask Section */}
      <div ref={container} className="relative h-[150vh] overflow-hidden">
        <div
          ref={stickyMask}
          className="sticky top-0 h-screen w-full z-20"
          style={{
            backgroundColor: 'black',
            maskImage: 'url(/text-mask.svg)',
            WebkitMaskImage: 'url(/text-mask.svg)',
            maskPosition: 'center center',
            WebkitMaskPosition: 'center center',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskSize: `${initialMaskSize * 100}%`,
            WebkitMaskSize: `${initialMaskSize * 100}%`,
            willChange:
              'mask-size, -webkit-mask-size, opacity, mask-position, -webkit-mask-position',
          }}
        >
          <div className="absolute inset-0">
            <Video />
          </div>
        </div>
      </div>

      {/* Landing Page Content UNDER MASK */}
      <div
        className="relative w-screen bg-black z-10"
        style={{
          opacity: scrollProgress, // landing page appears as mask fades
          transition: 'opacity 0.1s linear',
        }}
      >
        <div className="absolute inset-0">
          <Video />
        </div>
        <div className="relative h-screen w-full pb-5 flex flex-col justify-between text-white">
          <HomeHeroText />
          <HomeBottomText />
        </div>
      </div>
    </div>
  );
};

export default Home;
