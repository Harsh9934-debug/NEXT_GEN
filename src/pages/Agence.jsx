import { useRef, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
const Page3ofAgence = lazy(() => import('./Page3ofAgence'));

const Agence = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const servicePillars = [
    'Website Development',
    'App Development',
    'Social Media Marketing',
    'Content Creation',
  ];

  const collaborationHighlights = [
    { label: 'Our Work', value: 'Born in curiosity and fueled by craft, we ship experiences that feel inevitable the moment they launch.' },
    { label: 'Our Creative', value: 'Talent thrives in our hybrid studio model—strategy, design, and engineering sprinting together without bottlenecks.' },
    { label: 'Our Culture', value: 'We stay relentlessly open. Every voice shapes the room and the room shapes the work.' }
  ];

  return (
    <div ref={containerRef} className='bg-black text-white min-h-screen font-sans'>
      {/* HERO SECTION */}
      <section className='relative px-6 sm:px-12 lg:px-20 pt-32 pb-24 lg:pb-36 overflow-hidden'>
        {/* Background Glow */}
        <div className="absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D3FD50] opacity-[0.03] blur-[120px] pointer-events-none" />

        <div className='relative mx-auto max-w-[1800px]'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='flex flex-col gap-2 uppercase tracking-[0.35em] text-[11px] text-[#D3FD50] sm:flex-row sm:items-center sm:justify-between mb-16'
          >
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D3FD50]"></span>
              <span>Agency NEXTGEN</span>
            </div>
            <span>India · Bengaluru</span>
          </motion.div>

          <div className='grid gap-16 lg:grid-cols-12'>
            <div className='lg:col-span-12'>
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className='font-space-grotesk font-bold uppercase leading-[0.85] tracking-tighter text-[10vw] mb-12'
              >
                We don't just build  <br /> <span className="text-white/40">digital assets.</span>
              </motion.h3>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className='text-xl leading-relaxed text-white/80 mb-12'
              >
                We build living brands and digital products that are not only human, swift, and unmistakably yours but also thrive in today's digital landscape.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className='flex flex-wrap gap-3 mb-10'
              >
                {servicePillars.map((pillar, i) => (
                  <span key={pillar} className='text-[10px] uppercase tracking-[0.2em] rounded-full border border-white/20 px-4 py-2 text-white/60 hover:text-white hover:border-white transition-colors duration-300'>
                    {pillar}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className='flex flex-wrap items-center gap-6'
              >
                <Link
                  to='/projects'
                  className='inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#D3FD50] text-black font-bold text-xs uppercase tracking-[0.2em] hover:scale-105 transition-transform duration-300'
                >
                  View Projects ↗
                </Link>
                <a
                  href='mailto:harshkumargupta630@gmail.com'
                  className='inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300'
                >
                  Start a project
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      {/* COLLABORATION MODEL SECTION */}
      <section className='relative px-6 sm:px-12 lg:px-20 py-20 mb-20'>
        <div className='mx-auto max-w-7xl rounded-[32px] border border-white/10 bg-[#0A0A0A] p-8 md:p-16 overflow-hidden relative group'>
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className='text-center max-w-3xl mx-auto'>
            <span className='inline-block mb-6 text-[11px] uppercase tracking-[0.45em] text-[#D3FD50]'>Collaboration model</span>
            <h2 className='font-space-grotesk text-4xl md:text-6xl font-bold leading-tight mb-8'>
              Momentum comes <br /> from shared ownership.
            </h2>
            <p className='text-lg leading-relaxed text-white/60 mb-16'>
              We embed alongside your teams, shipping prototypes weekly and launching in focused six to eight week bursts. Transparent rituals keep everyone aligned and excited.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {collaborationHighlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className='flex flex-col gap-4 rounded-2xl bg-white/5 p-8 hover:bg-white/10 transition-colors duration-300'
              >
                <div className="h-px w-8 bg-[#D3FD50] mb-2" />
                <p className='text-xs uppercase tracking-[0.35em] text-white/50'>{item.label}</p>
                <p className='text-base leading-relaxed text-white/90'>{item.value}</p>
              </motion.div>
            ))}
          </div>

          <div className='mt-16 flex justify-center gap-8'>
            <Link
              to='/projects'
              className='inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-black font-bold text-xs uppercase tracking-[0.2em] hover:scale-105 transition-transform duration-300'
            >
              Explore recent launches ↗
            </Link>
          </div>
        </div>
      </section>


      {/* Page 3 of Agence - Services etc */}
      <Suspense fallback={<div className="min-h-screen bg-black" />}>
        <Page3ofAgence />
      </Suspense>

    </div>

  );
};

export default Agence;