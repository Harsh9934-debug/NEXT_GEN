"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState, useCallback, useMemo } from "react";

const images = [
  "/harsh.png",
  "/arun2.png",
  "/mayuresh3.png",
  "/mayank.png",
  "/kundan3.png",
  "/arun2.png",
  "/mayank.png",
  "/kundan3.png",
  "/arun2.png",
  "/mayuresh3.png",
  "/harsh.png",
  "/kundan3.png",
  
];

const useLoop = (delay = 2000) => {
  const [key, setKey] = useState(0);

  const incrementKey = useCallback(() => {
    setKey((prev) => prev + 1);
  }, []);

  useEffect(() => {
    const interval = setInterval(incrementKey, delay);
    return () => clearInterval(interval);
  }, [delay, incrementKey]);

  return { key };
};

const Team = () => {
  const gallery = useRef(null);
  const mobileGallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: mobileScrollProgress } = useScroll({
    target: mobileGallery,
    offset: ["start start", "end end"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const { key } = useLoop(2000);

  const messages = useMemo(
    () => [
      "Ready to collaborate?",
      "Let's build together",
      "Start your project",
      "Get in touch today",
      
    ],
    [],
  );

  const currentMessage = useMemo(() => {
    return messages[key % messages.length];
  }, [messages, key]);

  const { key: teamKey } = useLoop(3000);

  const teamMessages = useMemo(
    () => [
      "Meet Our Team",
      "Our Creative Minds",
      "The Dream Team",
      "Our Talented Crew",

      "The NEXTGEN Family",
    ],
    [],
  );

  const currentTeamMessage = useMemo(() => {
    return teamMessages[teamKey % teamMessages.length];
  }, [teamMessages, teamKey]);

  return (
    <main className="w-full bg-[#eee] text-black" style={{ scrollBehavior: 'smooth' }}>
      <div className="font-space-grotesk flex h-screen items-center justify-center gap-2">
        <div className="absolute left-1/2 top-[10%] grid -translate-x-1/2 content-start justify-items-center gap-6 text-center text-black">
          <div className="h-20 sm:h-24 md:h-32 flex items-center justify-center overflow-hidden w-full px-4">
            <AnimatePresence mode="wait">
              <motion.h1
                key={teamKey}
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "-100%" }}
                transition={{ duration: 0.2 }}
                className="text-2xl sm:text-5xl md:text-7xl font-bold uppercase"
              >
                {currentTeamMessage}
              </motion.h1>
            </AnimatePresence>
          </div>
          <p className="text-gray-600 max-w-2xl px-4 text-lg">
            A passionate group of creators, developers.
          </p>
          <span className="relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-white after:to-black after:content-['']">
            scroll down to see
          </span>
        </div>
      </div>

      {/* Desktop Gallery - Parallax Columns */}
      <div
        ref={gallery}
        className="relative box-border md:flex hidden h-[175vh] gap-[2vw] overflow-hidden bg-white p-[2vw]"
      >
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[0]]} y={y2} />
        <Column images={[images[1], images[2], images[3]]} y={y3} />
        <Column images={[images[4], images[0], images[1]]} y={y4} />
      </div>

      {/* Mobile Gallery - Sticky Cards */}
      <div
        ref={mobileGallery}
        className="relative md:hidden flex w-full flex-col items-center justify-center pb-[50vh] pt-[20vh] bg-white"
      >
        {images.slice(0, 5).map((src, i) => {
          const targetScale = Math.max(0.7, 1 - (images.length - i - 1) * 0.1);
          return (
            <StickyCard
              key={`mobile_${i}`}
              i={i}
              src={src}
              progress={mobileScrollProgress}
              range={[i * 0.15, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>

      {/* Contact Section */}
      <div className="font-space-grotesk relative flex h-screen items-center justify-center gap-2 bg-white text-black">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid content-start justify-items-center gap-6 text-center px-4">
          <h2 className="text-4xl md:text-6xl font-bold uppercase">
            Get In Touch
          </h2>
          
          {/* Animated text loop */}
          <div className="h-12 md:h-16 flex items-center justify-center overflow-hidden w-full px-4">
            <AnimatePresence mode="wait">
              <motion.p
                key={key}
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "-100%" }}
                transition={{ duration: 0.2 }}
                className="text-gray-600 text-xl sm:text-2xl md:text-3xl font-medium"
              >
                {currentMessage}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="text-gray-600 max-w-2xl text-lg mt-4">
            Ready to start your next project? Let's create something amazing together.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:harshkumargupta630@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-white font-medium transition-transform duration-300 hover:scale-105"
            >
              Send us an email
            </a>
            <a
              href="#/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-black px-8 py-4 text-black font-medium transition-all duration-300 hover:bg-black hover:text-white"
            >
              Contact Page →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

const StickyCard = ({ i, src, progress, range, targetScale }) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="sticky top-0 flex items-center justify-center">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25 + 100}px)`,
        }}
        className="relative origin-top flex h-[400px] w-[90vw] max-w-[350px] overflow-hidden rounded-2xl"
      >
        <img src={src} alt={`Team member ${i + 1}`} className="h-full w-full object-cover" />
      </motion.div>
    </div>
  );
};

const Column = ({ images, y }) => {
  return (
    <motion.div
      className="relative -top-[45%] flex h-full w-1/4 min-w-[250px] flex-col gap-[2vw] first:top-[-45%] [&:nth-child(2)]:top-[-95%] [&:nth-child(3)]:top-[-45%] [&:nth-child(4)]:top-[-75%]"
      style={{ y }}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="relative h-full w-full overflow-hidden rounded-lg"
        >
          <img
            src={src}
            alt={`Team member ${i + 1}`}
            className="pointer-events-none h-full w-full object-cover"
          />
        </div>
      ))}
    </motion.div>
  );
};

export default Team;
