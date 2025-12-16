import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import MagneticButton from '../common/MagneticButton';
import { Link } from 'react-router-dom';

const FooterCTA = () => {
    const containerRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e) => {
        const { left, top } = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <footer
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative bg-black pt-32 pb-12 text-white overflow-hidden group"
        >

            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useTransform(
                        [mouseX, mouseY],
                        ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(211, 253, 80, 0.04), transparent 40%)`
                    )
                }}
            />

            {/* Infinite Marquee - Top Row */}
            <div className="absolute top-[20%] left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.03] select-none pointer-events-none">
                <motion.div
                    className="inline-block"
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
                >
                    <span className="font-space-grotesk text-[15vw] font-bold uppercase leading-none tracking-tighter mr-8">
                        NEXTGEN AGENCY • STRATEGY • DESIGN • TECHNOLOGY • NEXTGEN AGENCY • STRATEGY • DESIGN • TECHNOLOGY •
                    </span>
                    <span className="font-space-grotesk text-[15vw] font-bold uppercase leading-none tracking-tighter mr-8">
                        NEXTGEN AGENCY • STRATEGY • DESIGN • TECHNOLOGY • NEXTGEN AGENCY • STRATEGY • DESIGN • TECHNOLOGY •
                    </span>
                </motion.div>
            </div>

            {/* Infinite Marquee - Bottom Row (Opposite Direction) */}
            <div className="absolute bottom-[20%] left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.03] select-none pointer-events-none">
                <motion.div
                    className="inline-block"
                    animate={{ x: [-1000, 0] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
                >
                    <span className="font-space-grotesk text-[15vw] font-bold uppercase leading-none tracking-tighter mr-8">
                        CREATING THE FUTURE • CRAFTING EXPERIENCES • CREATING THE FUTURE • CRAFTING EXPERIENCES •
                    </span>
                    <span className="font-space-grotesk text-[15vw] font-bold uppercase leading-none tracking-tighter mr-8">
                        CREATING THE FUTURE • CRAFTING EXPERIENCES • CREATING THE FUTURE • CRAFTING EXPERIENCES •
                    </span>
                </motion.div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">

                {/* Header / CTA */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="mb-32 flex flex-col items-center justify-center text-center"
                >
                    <motion.div variants={itemVariants}>
                        <MagneticButton>
                            <a href="mailto:harshkumargupta630@gmail.com" className="group relative block cursor-pointer">
                                <div className="inline-flex items-center gap-4 rounded-full border border-white/20 bg-white/5 px-8 py-3 text-sm font-bold uppercase tracking-widest backdrop-blur-sm transition-colors hover:bg-white hover:text-black">
                                    Book a 30-Min Call <ArrowUpRight size={16} />
                                </div>
                            </a>
                        </MagneticButton>
                    </motion.div>
                    <motion.div variants={itemVariants} className="mt-8 flex items-center gap-2 text-sm font-medium text-[#D3FD50]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D3FD50] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D3FD50]"></span>
                        </span>
                        We are online — let's connect!
                    </motion.div>
                </motion.div>

                {/* 4-Column Grid -> Converted to 3-Column */}
                {/* Grid Layout: Brand (Left) | Links (Right) */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-12 mb-24"
                >

                    {/* Column 1: Brand (Spans 6 columns on large screens) */}
                    <motion.div variants={itemVariants} className="flex flex-col gap-6 md:col-span-1 lg:col-span-6">
                        <Link to="/" className="font-space-grotesk text-2xl font-bold uppercase tracking-tight">
                            NEXTGEN
                        </Link>
                        <p className="text-sm text-white/50 leading-relaxed max-w-sm">
                            we build
                        </p>
                    </motion.div>

                    {/* Column 2: Company (Spans 3 columns) */}
                    <motion.div variants={itemVariants} className="flex flex-col gap-6 md:col-span-1 lg:col-span-3">
                        <h4 className="font-space-grotesk text-sm font-bold uppercase text-white">Company</h4>
                        <ul className="flex flex-col gap-4 text-sm text-white/50">
                            {['About Us', 'Our Work', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <Link to={`/ ${item.toLowerCase().replace(' ', '')} `} className="group relative inline-block overflow-hidden hover:text-[#D3FD50] transition-colors">
                                        <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">{item}</span>
                                        <span className="absolute left-0 top-0 inline-block translate-y-full text-[#D3FD50] transition-transform duration-300 group-hover:translate-y-0">{item}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Column 3: Socials (Spans 3 columns) */}
                    <motion.div variants={itemVariants} className="flex flex-col gap-6 md:col-span-1 lg:col-span-3">
                        <h4 className="font-space-grotesk text-sm font-bold uppercase text-white">Socials</h4>
                        <ul className="flex flex-col gap-4 text-sm text-white/50">
                            {[
                                { name: 'Instagram', url: 'https://www.instagram.com/next.gen892?igsh=bml4ZGhnc28zNHRu' },
                                { name: 'Twitter', url: 'https://x.com/Harshkumar10099' },
                                { name: 'LinkedIn', url: 'https://www.linkedin.com/company/nextgenagencey/' },
                            ].map((social) => (
                                <li key={social.name}>
                                    <a
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-1 hover:text-[#D3FD50] transition-colors"
                                    >
                                        {social.name} <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="flex flex-col items-center justify-center gap-4 border-t border-white/10 pt-8 sm:flex-row text-[10px] font-bold uppercase tracking-widest text-white/30"
                >
                    <span>© {new Date().getFullYear()} NEXTGEN Agency</span>

                </motion.div>
            </div>
        </footer>
    );
};

export default FooterCTA;
