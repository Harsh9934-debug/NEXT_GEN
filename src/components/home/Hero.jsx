import React from 'react';
import { motion } from 'framer-motion';
import Video from './Video';

import MagneticButton from '../common/MagneticButton';
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-black text-white">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <Video />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex h-full flex-col justify-center px-6 sm:px-12 lg:px-20">
                <div className="max-w-5xl">
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="font-space-grotesk text-4xl font-bold uppercase leading-[0.9] tracking-tighter sm:text-6xl lg:text-[6vw] lg:leading-[0.85]"
                    >
                        <div className="overflow-hidden">
                            <motion.div
                                variants={{ hidden: { y: "110%" }, visible: { y: 0 } }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <span className="block text-[8vw] sm:text-[9vw] lg:text-[7vw]">Turning Vision</span>
                            </motion.div>
                        </div>
                        <div className="overflow-hidden">
                            <motion.div
                                variants={{ hidden: { y: "110%" }, visible: { y: 0 } }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="flex items-center gap-4 sm:gap-8 text-[#D3FD50]"
                            >
                                <span className="block text-[8vw] sm:text-[9vw] lg:text-[7vw]">Into Digital Reality.</span>
                            </motion.div>
                        </div>
                    </motion.h1>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        className="mt-8 max-w-2xl text-base font-light leading-relaxed text-white/70 sm:text-lg lg:text-xl"
                    >
                        To empower businesses of every scale with reliable, innovative, and scalable digital solutions delivered with speed, built on trust, and designed for growth.
                    </motion.p>

                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="mt-12 flex items-center gap-6"
                    >
                        <MagneticButton>
                            <a href="/#/projects" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/5 px-8 py-4 backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/10">
                                <span className="mr-2 text-sm font-bold uppercase tracking-widest text-white">Explore Our Work</span>
                                <ArrowUpRight size={16} className="text-[#D3FD50] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </a>
                        </MagneticButton>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
