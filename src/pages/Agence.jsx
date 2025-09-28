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
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
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

  const studioPillars = useMemo(() => [
    { title: 'Our Work', summary: 'Born in curiosity and fueled by craft, we ship experiences that feel inevitable the moment they launch.', accent: 'Work' },
    { title: 'Our Creative', summary: 'Talent thrives in our hybrid studio model—strategy, design, and engineering sprinting together without bottlenecks.', accent: 'Creative' },
    { title: 'Our Culture', summary: 'We stay relentlessly open. Every voice shapes the room and the room shapes the work.', accent: 'Culture' }
  ], []);

  const collaborationHighlights = useMemo(() => [
    { label: 'Weekly rituals', value: 'Co-create reviews · live prototypes' },
    { label: 'Launch cadence', value: 'Every 6-8 weeks' },
    { label: 'Team DNA', value: 'Strategists · Makers · Builders' }
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
    <div className='parent bg-[#f9f8f4] text-[#0d0d0d] font-sans'>
      {/* HERO SECTION */}
      <section id='page1' className='relative px-5 sm:px-8 lg:px-20 pt-28 pb-24 lg:pb-36'>
        {isDesktop && (
          <div
            ref={imageDivRef}
            className='absolute right-[8vw] top-32 hidden w-[22vw] max-w-sm overflow-hidden rounded-[28px] border border-black/5 shadow-2xl lg:block'
          >
            <img
              ref={imageRef}
              className='h-full w-full object-cover'
              src={imageArray[0]} // Set initial image
              alt='Portrait transition'
            />
          </div>
        )}

        <div className='relative mx-auto max-w-6xl'>
          <div className='flex flex-col gap-2 uppercase tracking-[0.35em] text-[11px] text-black/45 sm:flex-row sm:items-center sm:justify-between'>
            <span>Agence NEXTGEN</span>
            <span>Montréal · Global collaborators</span>
          </div>

          <div className='mt-12 grid gap-16 lg:grid-cols-[minmax(0,1fr)_280px]'>
            <div className='flex flex-col gap-8 max-w-3xl'>
              <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-[-0.02em]'>
                We architect living brands and digital products that feel human, swift, and unmistakably yours.
              </h1>
              <p className='text-lg leading-relaxed text-black/70'>
                From pre-launch disruptors to beloved household names, our studio builds momentum by aligning strategy, storytelling, design, and engineering in the same room. We move fast without dropping fidelity.
              </p>
              <div className='flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-black/55'>
                {servicePillars.map(pillar => (
                  <span key={pillar} className='rounded-full border border-black/10 bg-white/80 px-4 py-2 shadow-sm backdrop-blur transition-colors duration-300 hover:bg-black hover:text-white'>
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
                  className='inline-flex items-center justify-center rounded-full border border-black/15 bg-transparent px-6 py-3 text-black/70 transition duration-300 hover:border-black/40 hover:text-black'
                >
                  Start a project
                </a>
              </div>
            </div>

            {/* <div className='grid grid-cols-2 gap-6'>
              {heroStats.map(stat => (
                <article
                  key={stat.label}
                  className='rounded-[22px] border border-black/10 bg-white/90 p-5 shadow-lg backdrop-blur transition-transform duration-300 hover:-translate-y-2'
                >
                  <p className='text-[11px] uppercase tracking-[0.35em] text-black/40'>{stat.label}</p>
                  <p className='mt-4 text-3xl font-bold tracking-tight text-black'>{stat.value}</p>
                  <p className='mt-2 text-sm leading-relaxed text-black/60'>{stat.detail}</p>
                </article>
              ))}
            </div> */}
          </div>
        </div>
      </section>

      {/* STUDIO PILLARS SECTION */}
      <section id='page2' className='relative overflow-hidden bg-white px-5 sm:px-8 lg:px-20 py-20'>
        <div className='absolute inset-0 -z-10 bg-gradient-to-br from-[#f7f6f1] via-white to-[#f0efe9]' />
        <div className='mx-auto flex max-w-6xl flex-col gap-12 text-center'>
          <div className='space-y-4'>
            <span className='text-[11px] uppercase tracking-[0.35em] text-black/40'>Studio pillars</span>
            <h2 className='text-3xl md:text-5xl font-bold leading-tight text-black'>
              A collective of curious minds, building what’s next.
            </h2>
            <p className='mx-auto max-w-3xl text-lg leading-relaxed text-black/65'>
              Every engagement pairs sharp strategy with craft obsessed execution. Our partners stay because we turn bold ideas into measurable momentum.
            </p>
          </div>

          <div className='grid gap-6 lg:grid-cols-3'>
            {studioPillars.map(pillar => (
              <article
                key={pillar.title}
                className='group flex h-full flex-col gap-6 rounded-[28px] border border-black/10 bg-white/80 p-8 text-left shadow-lg transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl backdrop-blur'
              >
                <div className='text-[11px] uppercase tracking-[0.35em] text-black/35'>{pillar.accent}</div>
                <h3 className='text-2xl md:text-3xl font-bold tracking-tight text-black'>{pillar.title}</h3>
                <p className='text-base leading-relaxed text-black/65'>
                  {pillar.summary}
                </p>
                <div className='mt-auto h-[1px] w-full bg-gradient-to-r from-black/15 via-black/5 to-transparent group-hover:from-black/35 group-hover:via-black/15' />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COLLABORATION MODEL SECTION */}
      <section className='relative px-5 sm:px-8 lg:px-20 py-20'>
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
                <p className='text-[11px] uppercase tracking-[0.35em] text-white/55'>{item.label}</p>
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
              Book a chemistry call
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