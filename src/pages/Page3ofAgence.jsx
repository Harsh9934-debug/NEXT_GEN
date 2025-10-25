import React, { useRef } from 'react';
import { useScroll, useTransform, useSpring, motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

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

  // Smooth the scroll progress to reduce jitter
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    mass: 0.25
  });

  // Main container animations (gentler ranges)
  const opacity = useTransform(smoothProgress, [0, 0.12, 0.88, 1], [0, 1, 1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.96, 1, 0.98]);
  
  // Parallax effects (reduced for smoothness)
  const contentY = useTransform(smoothProgress, [0, 1], [-30, 30]);
  const imageY = useTransform(smoothProgress, [0, 1], [16, -16]);
  const textY = useTransform(smoothProgress, [0, 1], [-20, 20]);

  // Floating animation for badge
  const badgeY = useTransform(smoothProgress, [0, 0.5, 1], [0, -8, 0]);

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
        className="w-full h-full flex items-center justify-center p-4 bg-gradient-to-br from-[#050505] via-[#090909] to-[#0f0f0f] text-white will-change-transform"
      >
        <motion.div
          style={{ y: contentY }}
          className={`relative z-10 w-full max-w-6xl flex flex-col gap-8 lg:gap-16 items-center justify-center p-6 md:p-12 rounded-3xl backdrop-blur-md will-change-transform ${layoutDirection === 'row-reverse' ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
        >
          {/* Image Section */}
          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">
            <motion.div
              style={{ y: imageY }}
              className="relative aspect-[3/4] w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl group will-change-transform"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.img
                src={image}
                alt={`Portrait of ${person}`}
                className="h-full w-full object-cover will-change-transform"
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

// Services Section Component
const ServicesSection = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const handleGetStarted = () => {
    navigate('/contact');
  };

  const services = [
    {
      title: "Development",
      tags: ["Build & Optimise"],
      icon: (
        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
      ),
      services: [
        "Web Development",
        "App Development",
        "Process Automation",
        "API Integration",
        "Database Management"
      ]
    },
    {
      title: "Analytics",
      tags: ["Data Insights"],
      icon: (
        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
      ),
      services: [
        "Data Analytics",
        "SEO & Optimisation",
        "Business Intelligence",
        "Predictive Analytics",
        "Data Visualization"
      ]
    },
    {
      title: "Design",
      tags: ["Brand Identity"],
      icon: (
        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
          </svg>
        </div>
      ),
      services: [
        "Branding & Identity",
        "UI/UX Design",
        "Motion Graphics",
        "Creative Strategy",
        "Web Design"
      ]
    },
    {
      title: "Digital Marketing",
      tags: ["Marketing Strategy"],
      icon: (
        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
      ),
      services: [
        "Social Media Marketing",
        "Content Marketing",
        "Email Marketing",
        "Search Engine Optimization",
        "Search Engine Marketing"
      ]
    }
  ];

  return (
    <motion.div 
      ref={ref}
      style={{ opacity, y }}
      className="min-h-screen bg-white flex items-center justify-center p-8 will-change-transform"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs uppercase tracking-[0.3em] text-gray-600 mb-4"
          >
            Services
          </motion.div>
          
          <motion.h1 
            className="font-space-grotesk text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            expect — and a few things that will wow you.
          </motion.h1>
        </div>

        {/* Services Grid - 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.08, 
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              viewport={{ once: true, margin: "-50px" }}
              className={`group relative bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 ${service.title === 'Ad Campaigns' ? 'overflow-hidden' : ''}`}
              style={service.title === 'Ad Campaigns' ? {
                backgroundImage: "url('/circleimages.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              } : {}}
            >
              {/* Icon */}
              <div className="mb-4 ">
                {service.icon}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {service.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="inline-block bg-[#D3FD50] text-black text-xs font-medium px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="font-space-grotesk text-xl font-bold mb-4 text-gray-900">
                {service.title}
              </h3>

              {/* Services List */}
              <ul className="space-y-2 mb-6">
                {service.services.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-gray-600">
                    <div className="w-1 h-1 bg-gray-400 rounded-full mr-2.5 flex-shrink-0"></div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Get Started Button */}
              <div className="flex justify-end">
                <button 
                  onClick={handleGetStarted}
                  className="inline-flex items-center px-4 py-2 bg-[#D3FD50]  text-gray-900 font-medium rounded-lg transition-all duration-300 hover:scale-105 text-sm cursor-pointer"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Services Banner */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-[#D3FD50] px-4 py-1.5 rounded-lg">
            <span className="text-gray-900 font-bold text-xs uppercase tracking-wider">
              FEATURED SERVICES
            </span>
          </div>
        </motion.div> */}
      </div>
    </motion.div>
  );
};

// Digital Marketing Section Component
const DigitalMarketingSection = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const handleGetStarted = () => {
    navigate('/contact');
  };

  return (
    <motion.div 
      ref={ref}
      style={{ opacity, y }}
      className="min-h-screen bg-white flex items-center justify-center p-8 will-change-transform"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header - Exact layout from image */}
        <div className="mb-16">
          {/* Top row with tags */}
          <div className="flex items-center justify-between mb-8">
            <span className="inline-block bg-gray-800 text-white text-xs font-medium px-4 py-2 rounded-full">
              Digital Marketing
            </span>
            <span className="inline-block bg-gray-300 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
              Boost Your Reach
            </span>
          </div>
          
          {/* Main content row */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h1 className="font-space-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 max-w-2xl leading-tight">
              Amplify your brand's presence with data-driven marketing strategies.
            </h1>
            <h2 className="font-space-grotesk text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              Engage, Convert, Grow.
            </h2>
          </div>
        </div>

        {/* Two Cards Grid - Exact positioning */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Social Media Management Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="group relative bg-gray-900 rounded-2xl p-8 overflow-hidden h-80"
          >
            {/* Background Pattern - Social Media Icons */}
            <div className="absolute inset-0 opacity-100">
              <img src="/social.png" alt="Ad Campaigns Background" className="absolute inset-0 w-full h-full object-cover opacity-90 pointer-events-none" style={{borderRadius: '1rem', zIndex: 1}} />
            </div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="font-space-grotesk text-2xl font-bold text-white mb-4">
                  Social Media Management
                </h3>
                <p className="text-white/80 text-lg">
                  Build and engage your audience effectively.
                </p>
              </div>
              <div className="flex justify-end">
                <button 
                  onClick={handleGetStarted}
                  className="inline-flex items-center px-6 py-3 bg-white text-black font-medium rounded-lg transition-all duration-300 hover:scale-105 border border-black"
                >
                  Start now →
                </button>
              </div>
            </div>
          </motion.div>

          {/* Ad Campaigns Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative bg-gray-900 rounded-2xl p-8 overflow-hidden h-80"
            >
              <div className="absolute inset-0">
                {/* Circle Images PNG - now above gradient, below content */}
                <img src="/circleimages.png" alt="Ad Campaigns Background" className="absolute inset-0 w-full h-full object-cover opacity-90 pointer-events-none" style={{borderRadius: '1rem', zIndex: 1}} />
                
              </div>
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-space-grotesk text-2xl font-bold text-white mb-4">
                    Ad Campaigns
                  </h3>
                  <p className="text-white/80 text-lg">
                    Drive results with targeted advertising.
                  </p>
                </div>
                <div className="flex justify-end">
                  <button 
                    onClick={handleGetStarted}
                    className="inline-flex items-center px-6 py-3 bg-white text-black font-medium rounded-lg transition-all duration-300 hover:scale-105 border border-black"
                  >
                    Start now →
                  </button>
                </div>
              </div>
            </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// Partners Section Component
const PartnersSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.div 
      ref={ref}
      style={{ opacity, y }}
      className="min-h-screen bg-gray-100 flex items-center justify-center p-8"
    >
      
    </motion.div>
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

      {/* Services Section */}
      <ServicesSection />
      
      {/* Digital Marketing Section */}
      <DigitalMarketingSection />
      
        


      {/* <TeamCard
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
      /> */}
    </div>
  );
}