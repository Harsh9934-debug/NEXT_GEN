import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from "framer-motion";

// Enhanced TeamCard Component with Multiple Animations
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

  // Main container animations
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  
  // Parallax effects
  const contentY = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const textY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  // Floating animation for badge
  const badgeY = useTransform(scrollYProgress, [0, 0.5, 1], [0, -10, 0]);

  return (
    <div ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #ffffff 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        style={{ opacity, scale }}
        className="w-full h-full flex items-center justify-center p-4 bg-gradient-to-br from-[#050505] via-[#090909] to-[#0f0f0f] text-white"
      >
        <motion.div
          style={{ y: contentY }}
          className={`relative z-10 w-full max-w-6xl flex flex-col gap-8 lg:gap-16 items-center justify-center p-6 md:p-12 rounded-3xl backdrop-blur-md ${layoutDirection === 'row-reverse' ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
        >
          {/* Image Section */}
          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">
            <motion.div
              style={{ y: imageY }}
              className="relative aspect-[3/4] w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.img
                src={image}
                alt={`Portrait of ${person}`}
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-white/20"
                whileHover={{ borderColor: "rgba(255,255,255,0.5)" }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating Badge */}
              <motion.div 
                style={{ y: badgeY }}
                className="absolute bottom-6 left-6"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="inline-block rounded-full bg-black/40 backdrop-blur-md px-4 py-2 text-sm font-semibold text-white border border-white/20">
                  {badge}
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 md:space-y-6">
            <motion.div 
              style={{ y: textY }}
              className="space-y-4 md:space-y-6"
            >
              {/* Tags with staggered animation */}
              <motion.div
                initial={{ opacity: 0, x: layoutDirection === 'row-reverse' ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-sm uppercase tracking-[0.2em] text-white/50 font-medium">
                  {tags}
                </p>
              </motion.div>

              {/* Name with character stagger */}
              <motion.h2 
                className="text-4xl md:text-5xl font-bold leading-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {person.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h2>

              {/* Description with fade-in */}
              <motion.p 
                className="text-lg leading-relaxed text-white/80 max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {description}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

// Enhanced Main Page Component
export default function Page3ofAgence() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Progress bar animation
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="relative" ref={containerRef}>
      {/* Animated Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-50"
        style={{ scaleX }}
      />
      
      {/* Background Glow Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <TeamCard
        person="Harsh Gupta"
        image="/harsh.png"
        badge="Full-stack Developer"
        tags="Development · Innovation · Code"
        description="I'm a full-stack developer who loves turning complex ideas into fast, reliable products. I focus on crafting smooth, intuitive experiences that make technology feel simple and human."
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
        badge="Digital Marketing"
        tags="STRATEGY · PERFORMANCE · STORY"
        description="Blends culture and analytics to craft campaigns that grow with heart. Each launch merges bold experimentation, sharp measurement, and a human pulse that resonates beyond the numbers."
        layoutDirection="row-reverse"
      />
      
      <TeamCard
        person="Mayuresh"
        image="/mayuresh3.png"
        badge="Digital Creator"
        tags="STRATEGY · PERFORMANCE · STORY"
        description="Connects culture and data to create campaigns that scale authentically. Every project balances creative risk, smart optimization, and a sense of humanity that stands out in the market."
        layoutDirection="row"
      />
    </div>
  );
}