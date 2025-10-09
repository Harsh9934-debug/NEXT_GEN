import React, { useRef, useEffect, useState } from 'react';
import Video from '../components/home/Video';
import HomeHeroText from '../components/home/HomeHeroText';
import HomeBottomText from '../components/home/HomeBottomText';

const Home = () => {
  const container = useRef(null);
  const stickyMask = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasSvgMask, setHasSvgMask] = useState(true);

  const initialMaskSize = 0.8; // 80% when using svg mask-size, ~8% radius when using radial mask
  const targetMaskSize = 30;   // grows to 3000% on svg; radial uses its own mapping
  const easing = 0.07;
  let easedScrollProgress = 0;

  useEffect(() => {
    let rafId;

    // Probe if text-mask.svg exists; fallback to radial gradient if not
    const img = new Image();
    img.onload = () => setHasSvgMask(true);
    img.onerror = () => setHasSvgMask(false);
    img.src = '/text-mask.svg';

    const animate = () => {
      if (stickyMask.current && container.current) {
        const progress = getScrollProgress();

        if (hasSvgMask) {
          // SVG text mask scaling
          const newMaskSize = (initialMaskSize + targetMaskSize * progress) * 100; // percent
          stickyMask.current.style.webkitMaskImage = 'url(/text-mask.svg)';
          stickyMask.current.style.maskImage = 'url(/text-mask.svg)';
          stickyMask.current.style.webkitMaskSize = `${newMaskSize}%`;
          stickyMask.current.style.maskSize = `${newMaskSize}%`;
          // Vertical drift
          const maskPositionY = 50 + 10 * progress;
          stickyMask.current.style.webkitMaskPosition = `center ${maskPositionY}%`;
          stickyMask.current.style.maskPosition = `center ${maskPositionY}%`;
        } else {
          // Radial gradient fallback: grow a circular reveal
          // Map progress (0..1) to radius (in % of shortest viewport side)
          const minRadius = 8;   // start ~8%
          const maxRadius = 140; // end large enough to cover screen
          const radius = minRadius + (maxRadius - minRadius) * progress;
          const centerY = 50 + 10 * progress; // slight drift downwards
          const gradient = `radial-gradient(circle ${radius}% at 50% ${centerY}%, #000 99%, transparent 100%)`;
          stickyMask.current.style.webkitMaskImage = gradient;
          stickyMask.current.style.maskImage = gradient;
          // Reset size/position to avoid conflicts
          stickyMask.current.style.webkitMaskSize = '';
          stickyMask.current.style.maskSize = '';
          stickyMask.current.style.webkitMaskPosition = '';
          stickyMask.current.style.maskPosition = '';
        }

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
      <div ref={container} className="relative h-[200vh] overflow-hidden">
        <div
          ref={stickyMask}
          className="sticky top-0 h-screen w-full z-20"
          style={{
            backgroundColor: 'black',
            // mask rules set dynamically in RAF (svg or radial fallback)
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
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
