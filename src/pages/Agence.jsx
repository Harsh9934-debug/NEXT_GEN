import { useRef, useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Page3ofAgence from './Page3ofAgence';

// Register GSAP plugins once at the top level
gsap.registerPlugin(ScrollTrigger);

const Agence = () => {
  // --- Refs & State ---
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // --- Data ---
  const imageArray = useMemo(() => [
    // harshImage,
    // ArunImage,
    // mayankimage,
    // kundanImage,
    // mayureshImage,
  ], []);

  // const heroStats = useMemo(() => [
  //   { label: 'Years in motion', value: '14', detail: 'Independent & founder-led' },
  //   { label: 'Disciplines in-house', value: '6', detail: 'Strategy · Brand · Product · Campaign' },
  //   { label: 'Client partners', value: '120+', detail: 'From stealth startups to global icons' },
  //   { label: 'Retention', value: '92%', detail: 'Average collaboration beyond 24 months' }
  // ], []);

  const servicePillars = useMemo(() => [
    'Website Development', 
    'App Development', 
    'Social Media Marketing', 
    'Content Creation',
  ], []);

  const collaborationHighlights = useMemo(() => [
    { label: 'Our Work', value: 'Born in curiosity and fueled by craft, we ship experiences that feel inevitable the moment they launch.' },
    { label: 'Our Creative', value: 'Talent thrives in our hybrid studio model—strategy, design, and engineering sprinting together without bottlenecks.' },
    { label: 'Our Culture', value: 'We stay relentlessly open. Every voice shapes the room and the room shapes the work.' }
  ], []);

  // --- Effects for screen size detection ---
  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  // --- GSAP animation logic (separated from image swapping) ---
  useGSAP(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
    if (isDesktop && imageDivRef.current) {
      gsap.to(imageDivRef.current, {
        scrollTrigger: {
          trigger: imageDivRef.current,
          start: 'top 28%',
          end: 'top -10%',
          pin: true,
          pinSpacing: true,
          pinReparent: true,
          pinType: 'transform',
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isDesktop]);

  // --- Dedicated effect for image rendering based on scroll position ---
  useEffect(() => {
    if (!isDesktop || !imageRef.current || imageArray.length === 0) return;

    const handleScroll = () => {
      // Calculate scroll progress within the triggered section
      const triggerElement = imageDivRef.current;
      if (!triggerElement) return;

      const rect = triggerElement.getBoundingClientRect();
      const start = rect.top;
      const end = rect.bottom;
      const height = window.innerHeight;
      
      const scrollProgress = 1 - Math.min(Math.max(0, end / height), 1);
      const imageIndex = Math.min(
        Math.floor(scrollProgress * imageArray.length),
        imageArray.length - 1
      );
      
      if (imageRef.current.src !== imageArray[imageIndex]) {
        imageRef.current.src = imageArray[imageIndex];
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial image on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDesktop, imageArray]);

  return (
    <div className='parent text-white bg-black font-sans'>
      {/* HERO SECTION */}
      <section id='page1' className='relative px-5 sm:px-8 lg:px-20 pt-28 pb-24 lg:pb-36'>
        {isDesktop && (
          <div
            ref={imageDivRef}
            className='absolute right-[8vw] top-32 hidden w-[22vw] max-w-sm overflow-hidden rounded-[28px] lg:block'
          >
            {/* <img
              ref={imageRef}
              className='h-full w-full object-cover'
              // src={imageArray[0]} // Set initial image
              // alt='Portrait transition'
            /> */}
          </div>
        )}

        <div className='relative mx-auto max-w-6xl'>
          <div className='flex flex-col gap-2 uppercase tracking-[0.35em] text-[11px] text-white sm:flex-row sm:items-center sm:justify-between'>
            <span>Agency NEXTGEN</span>
            <span>India · Bengaluru </span>
          </div>

          <div className='mt-12 grid gap-16 lg:grid-cols-[minmax(0,1fr)_280px]'>
            <div className='flex flex-col gap-8 max-w-3xl'>
              <h3 className='text-4xl md:text-6xl lg:text-6xl font-bold leading-tight tracking-[-0.02em]'>
              We don't just build digital assets, we create unforgettable human experiences. </h3>
              <p className='text-lg leading-relaxed text-white/80'>
                Welcome to NEXTGEN, where we build living brands and digital products that are not only human, swift, and unmistakably yours but also thrive in today's digital landscape. We're a full-service creative agency dedicated to crafting digital experiences that connect with people and deliver results.  </p>
              <div className='flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em]'>
                {servicePillars.map(pillar => (
                  <span key={pillar} className='rounded-full border border-black/10 bg-white px-4 py-2 shadow-sm backdrop-blur transition-colors duration-300  text-black'>
                    {pillar}
                  </span>
                ))}
              </div>
              <div className='flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em]'>
                <Link
                  to='/projects'
                  className='inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg'
                >
                  View Projects ↗
                </Link>
                <a
                  href='mailto:harshkumargupta630@gmail.com'
                  className='inline-flex items-center justify-center rounded-full border border-white/30 bg-transparent px-6 py-3 text-white transition duration-300 hover:border-white/60 hover:bg-white/10'
                >
                  Start a project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* COLLABORATION MODEL SECTION */}
      <section className='relative px-5 sm:px-8 mb-40 lg:px-20 py-20'>
        <div className='mx-auto flex max-w-5xl flex-col items-center gap-10 rounded-[36px] border border-black/10 bg-[#0f0f0f] px-6 py-16 text-white shadow-2xl sm:px-12'>
          <div className='text-center'>
            <span className='text-[11px] uppercase tracking-[0.45em] text-white/50'>Collaboration model</span>
            <h2 className='mt-6 text-3xl md:text-5xl font-bold leading-tight'>
              Momentum comes from shared ownership.
            </h2>
            <p className='mt-4 text-lg leading-relaxed text-white/70'>
              We embed alongside your teams, shipping prototypes weekly and launching in focused six to eight week bursts. Transparent rituals keep everyone aligned and excited.
            </p>
          </div>
          <div className='grid w-full gap-4 sm:grid-cols-3'>
            {collaborationHighlights.map(item => (
              <div
                key={item.label}
                className='rounded-[22px] border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-white/25 hover:bg-white/10'
              >
                <p className='text-[11px] uppercase tracking-[0.35em] text-white'>{item.label}</p>
                <p className='mt-3 text-base leading-relaxed text-white'>{item.value}</p>
              </div>
            ))}
          </div>
          <div className='flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.3em]'>
            <Link
              to='/projects'
              className='inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-black transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg'
            >
              Explore recent launches ↗
            </Link>
            <a
              href='mailto:harshkumargupta630@gmail.com'
              className='inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-white transition duration-300 hover:border-white hover:bg-white/5'
            >
              Book a associate call
            </a>
          </div>
        </div>
      </section>
      
      {/* Page 3 of Agence */}
      <Page3ofAgence />
    </div>
  );
};

export default Agence;