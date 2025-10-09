import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from "framer-motion";
// Use public asset paths directly instead of importing from "/public".
// In Vite, anything under /public is served at the root and can be referenced by absolute paths.
// This avoids Rollup errors in Vercel when trying to resolve ESM imports like "/image.png".

// --- Card Component with Enhanced Parallax & Staggered Animations ---
const TeamCard = ({
  person,
  image,
  badge,
  tags,
  description,
  layoutDirection = 'row'
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Main container opacity and scale
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  // Parallax for the card's content
  const contentY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <div ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ opacity, scale }}
        className="w-full h-full flex items-center justify-center p-4 bg-gradient-to-br from-[#050505] via-[#090909] to-[#0f0f0f] text-white"
      >
        <motion.div
          style={{ y: contentY }}
          className={`relative z-10 w-full max-w-6xl flex flex-col gap-8 lg:gap-16 items-center justify-center p-6 md:p-12  rounded-3xl backdrop-blur-md ${layoutDirection === 'row-reverse' ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
        >
          {/* Image Section */}
          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">
            <motion.div
              style={{ y: useTransform(scrollYProgress, [0, 1], [20, -20]) }}
              className="relative aspect-[3/4] w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={image}
                alt={`Portrait of ${person}`}
                className="h-full w-full object-cover"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" /> */}
              <div className="absolute bottom-6 left-6">
                <span className="inline-block rounded-full  px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                  {badge}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 md:space-y-6">
            <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [-20, 20]) }}>
              <p className="text-sm uppercase tracking-[0.2em] text-white/50 font-medium">{tags}</p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">{person}</h2>
              <p className="text-lg leading-relaxed text-white/80 max-w-xl mx-auto lg:mx-0">{description}</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

// --- Main Page Component ---
export default function Page3ofAgence() {
  return (
    <div className="relative">
      <TeamCard
        person="Harsh gupta"
        image="/harsh.png"
        badge="Full-stack Developer"
        tags="Development · Innovation · Code"
        description="Harsh is a visionary developer who transforms complex ideas into seamless digital experiences. With a keen eye for detail and a passion for innovation, he crafts solutions that are not only functional but also engaging and user-centric."
        layoutDirection="row"
      />
      <TeamCard
        person="Arun Goyal"
        image="/arun2.png"
        badge="UI / UX Designer"
        tags="EFFICIENCY · CONSISTENCY · PRECISION"
        description="Specialized in creating user-centric digital experiences that merge functionality with visual clarity. Focused on designing intuitive interfaces, crafting seamless user journeys, and delivering impactful solutions through research-driven design and modern prototyping practices."
        layoutDirection="row-reverse"
      />
      <TeamCard
        person="Mayank"
        image="/mayank.png"
        badge="App Developer"
        tags="Systems Architect · Scalable Code · Robust Solutions"
        description="Explores the edge of technology with curiosity and passion, blending problem-solving with creative development. Brings adaptability, a drive for continuous learning, and a knack for turning complex ideas into scalable, impactful solutions."
        layoutDirection="row"
      />
      <TeamCard
        person="Kundan Gupta"
        image="/kundan3.png"
        badge="Digital  Marketing "
        tags="STRATEGY · PERFORMANCE · STORY"
        description="Kundan bridges cultural intuition with data-led insight to build campaigns that scale without losing soul. Every launch blends experimentation, measurement, and a human pulse you can feel in-market."
        layoutDirection="row-reverse"
      />
      <TeamCard
        person="Mayuresh"
        image="/mayuresh3.png"
        badge="Digital Creator"
        tags="STRATEGY · PERFORMANCE · STORY"
        description="Mayuresh crafts immersive product journeys that balance narrative, usability, and aesthetic precision. His systems thinking keeps every interface adaptable and future-ready."
        layoutDirection="row"
      />
    </div>
  );
}