import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from "framer-motion";
import kundanImage from '/kundan.png';
import mayureshImage from '/mayuresh.png';
import ArunImage from '/arun.png';

function Page3ofAgence() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={container} className="relative h-[200vh]">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </div>
  );
}

// Enhanced Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
      when: 'beforeChildren',
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.3,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.2, 0.8, 0.2, 1],
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: 0.2,
    },
  },
};

// Enhanced Card Component
const TeamCard = ({ 
  person, 
  image, 
  badge, 
  tags, 
  description, 
  scrollYProgress, 
  scaleRange, 
  rotateRange,
  layoutDirection = 'row'
}) => {
  const scale = useTransform(scrollYProgress, [0, 1], scaleRange);
  const rotate = useTransform(scrollYProgress, [0, 1], rotateRange);

  return (
    <motion.section
      style={{ scale, rotate }}
      className="sticky top-0 flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#050505] via-[#090909] to-[#0f0f0f] px-4 py-12 text-white sm:px-6 lg:px-8"
    >
      {/* Enhanced Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70" aria-hidden="true">
        <motion.div
          className="absolute -top-40 left-10 h-[22rem] w-[22rem] rounded-full bg-[#9fe80c]/25 blur-[160px]"
          animate={{ 
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[-140px] right-[-120px] h-[26rem] w-[26rem] rounded-full bg-white/15 blur-[180px]"
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        />
      </div>

      {/* Main Content Container */}
      <motion.div
        className="relative z-20 w-full max-w-6xl"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className={`flex flex-col gap-12 lg:gap-16 ${layoutDirection === 'row-reverse' ? 'lg:flex-row-reverse' : 'lg:flex-row'} lg:items-center lg:justify-between`}>
          
          {/* Enhanced Image Card */}
          <motion.div 
            className="relative lg:flex-1"
            variants={cardVariants}
          >
            <motion.div
              className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl lg:rounded-[2.5rem] shadow-2xl"
              variants={imageVariants}
              whileHover={{
                scale: 1.02,
                rotate: layoutDirection === 'row-reverse' ? 1 : -1,
                transition: { type: 'spring', stiffness: 200, damping: 15 },
              }}
            >
              {/* Image with Gradient Overlay */}
              <img
                src={image}
                alt={`Portrait of ${person}`}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" aria-hidden="true" />
              
              {/* Enhanced Badge */}
              <motion.div
                className="absolute bottom-6 left-6 right-6"
                variants={badgeVariants}
              >
                <div className="flex flex-wrap gap-2">
                  <motion.span
                    className="inline-flex rounded-2xl border border-white/30 bg-black/70 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white/90 backdrop-blur-xl"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    {badge}
                  </motion.span>
                </div>
                </motion.div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-[#9fe80c]/20 blur-3xl" />
            <div className="absolute -top-4 -left-4 h-16 w-16 rounded-full bg-white/10 blur-2xl" />
          </motion.div>

          {/* Enhanced Text Content */}
          <motion.div 
            className="lg:flex-1 space-y-8 text-center lg:text-left"
            variants={textVariants}
          >
            {/* Tags */}
            <motion.div variants={textVariants}>
              <p className="text-sm uppercase tracking-[0.3em] text-white/60 font-medium">
                {tags}
              </p>
            </motion.div>

            {/* Name */}
            <motion.div variants={textVariants}>
              <h2 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                {person}
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div variants={textVariants}>
              <p className="text-lg leading-relaxed text-white/80 sm:text-xl lg:text-lg xl:text-xl max-w-2xl">
                {description}
              </p>
            </motion.div>

            {/* Enhanced Stats/Highlights */}
            <motion.div 
              className="grid grid-cols-2 gap-6 pt-4"
              variants={textVariants}
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-[#9fe80c]">50+</div>
                <div className="text-sm text-white/60 mt-1">Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-[#9fe80c]">5yrs</div>
                <div className="text-sm text-white/60 mt-1">Experience</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Background Name Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[20vw] font-black uppercase leading-none text-[#9fe80c]/10 sm:text-[6vw] lg:text-[8vw] pointer-events-none">
        {badge}
      </div>
    </motion.section>
  );
};

// Section 1: Arun Goyal
const Section1 = ({ scrollYProgress }) => (
  <TeamCard
    person="Arun Goyal"
    image={ArunImage}
    badge="Exexutive Designer"
    tags="Design · Experience · Interface"
    description="Arun crafts immersive product journeys that balance narrative, usability, and aesthetic precision. His systems thinking keeps every interface adaptable and future-ready."
    scrollYProgress={scrollYProgress}
    scaleRange={[1, 0.9]}
    rotateRange={[0, -3]}
    layoutDirection="row"
  />
);

// Section 2: kundan Gupta
const Section2 = ({ scrollYProgress }) => (
  <TeamCard
    person="Kundan Gupta"
    image={kundanImage}
    badge="Marketing Expert"
    tags="STRATEGY · PERFORMANCE · STORY"
    description="Kundan bridges cultural intuition with data-led insight to build campaigns that scale without losing soul. Every launch blends experimentation, measurement, and a human pulse you can feel in-market."
    scrollYProgress={scrollYProgress}
    scaleRange={[0.9, 1]}
    rotateRange={[3, 0]}
    layoutDirection="row-reverse"
  />
);

// section 3 : Mayuresh

export default Page3ofAgence;