import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';

// --- Decorative Components ---

const NoiseOverlay = () => (
    <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <filter id="noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
    </div>
);

const TypingEffect = () => {
    const text = "import { Future } from '@nextgen/core';";
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedText((prev) => {
                if (index >= text.length) {
                    clearInterval(interval);
                    return prev;
                }
                const nextChar = text.charAt(index);
                index++;
                return prev + nextChar;
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="font-mono text-xs bg-black/80 p-4 rounded-lg border border-white/5 w-full shadow-inner">
            <div className="flex gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
            </div>
            <div className="text-zinc-500">
                <span className="text-purple-400">import</span>{' '}
                <span className="text-white">{'{'}</span>{' '}
                <span className="text-[#D3FD50]">Future</span>{' '}
                <span className="text-white">{'}'}</span>{' '}
                <span className="text-purple-400">from</span>{' '}
                <span className="text-blue-400">'@nextgen/core'</span>
                <span className="text-white">;</span>
            </div>
            <div className="mt-1 text-zinc-500">
                <span className="text-blue-400">const</span>{' '}
                <span className="text-yellow-200">outcome</span>{' '}
                <span className="text-white">=</span>{' '}
                <span className="text-[#D3FD50]">await</span>{' '}
                <span className="text-blue-300">build</span>
                <span className="text-white">();</span>
                <span className="animate-pulse inline-block w-1.5 h-3 bg-[#D3FD50] ml-1 align-middle"></span>
            </div>
        </div>
    );
};

// --- Main Card Component ---

const Card = ({ children, className = "", noSpotlight = false }) => {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current || noSpotlight) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => {
        if (!noSpotlight) setOpacity(1);
    };

    const handleMouseLeave = () => {
        if (!noSpotlight) setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-black border border-white/10 p-8 transition-all duration-500 hover:border-white/20 group ${className}`}
        >
            {/* Spotlight */}
            {!noSpotlight && (
                <div
                    className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-10"
                    style={{
                        opacity,
                        background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(211, 253, 80, 0.06), transparent 40%)`
                    }}
                />
            )}

            {/* Subtle Inner Glow on Hover */}
            <div className="absolute inset-0 bg-transparent transition-colors duration-500 group-hover:bg-[#D3FD50]/[0.01]" />

            <div className="relative z-20 h-full">{children}</div>
        </div>
    );
};

const WhyWorkWithUs = () => {
    const marqueeImages = [
        "/p1.png", "/devai1.png", "/p3.png", "/p4.png",
        "/p1.png", "/devai1.png", "/p3.png", "/p4.png"
    ];

    return (
        <section className="bg-black px-6 py-24 sm:px-12 lg:px-20 relative overflow-hidden">
            <NoiseOverlay />

            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none fade-mask"></div>

            <div className="mx-auto max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <span className="mb-4 block font-inter text-xs font-bold uppercase tracking-[0.3em] text-[#D3FD50]">
                        The Advantage
                    </span>
                    <h2 className="font-space-grotesk text-4xl font-bold uppercase text-white sm:text-6xl">
                        Why Work With <span className="text-zinc-600">Us</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-2">
                    {/* 1. Multi-Disciplinary Expertise */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-2"
                    >
                        <Link to="/agency" className="block h-full">
                            <Card className="flex flex-col justify-between h-full bg-zinc-900/50 backdrop-blur-sm">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="mb-4 font-space-grotesk text-3xl font-bold text-white group-hover:text-[#D3FD50] transition-colors">Multi-Disciplinary Expertise</h3>
                                        <p className="max-w-md text-lg text-white/70">
                                            From design to development, marketing to strategy, we cover it all to build cohesive digital products.
                                        </p>
                                    </div>
                                    <div className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:rotate-45 transition-transform duration-500">
                                        <span className="text-white text-xl">↗</span>
                                    </div>
                                </div>
                                <div className="mt-12 flex flex-wrap gap-3">
                                    {['Design', 'Development', 'Strategy', 'Marketing', 'Data'].map((item, i) => (
                                        <div key={i} className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-white transition-colors hover:border-[#D3FD50]/50 hover:text-[#D3FD50]">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                                {/* Abstract Decorative Gradient */}
                                <div className="absolute top-0 right-0 h-[400px] w-[400px] bg-gradient-to-b from-[#D3FD50]/5 to-transparent blur-[80px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            </Card>
                        </Link>
                    </motion.div>

                    {/* 2. Custom-Built Solutions */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-1"
                    >
                        <Link to="/agency" className="block h-full">
                            <Card className="flex flex-col justify-between h-full">
                                <div>
                                    <h3 className="mb-4 font-space-grotesk text-3xl font-bold text-white group-hover:text-[#D3FD50] transition-colors">Custom-Built Solutions</h3>
                                    <p className="text-lg text-white/70">
                                        No one-size-fits-all. Every pixel is tailored to your brand.
                                    </p>
                                </div>
                                <div className="mt-8 flex justify-end">
                                    <TypingEffect />
                                </div>
                            </Card>
                        </Link>
                    </motion.div>

                    {/* 3. End-to-End Partnership */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-1"
                    >
                        <Link to="/agency" className="block h-full">
                            <Card className="flex flex-col justify-between h-full">
                                <div>
                                    <h3 className="mb-4 font-space-grotesk text-3xl font-bold text-white group-hover:text-[#D3FD50] transition-colors">End-to-End Partnership</h3>
                                    <p className="text-lg text-white/70">
                                        We don't just build; we collaborate, optimize, and grow with you.
                                    </p>
                                </div>
                                <div className="mt-8 relative h-12 w-full overflow-hidden rounded-lg bg-white/5 border border-white/5">
                                    {/* Abstract Data Flow Animation */}
                                    <motion.div
                                        className="absolute top-1/2 left-0 h-[2px] w-12 bg-[#D3FD50] shadow-[0_0_10px_#D3FD50]"
                                        animate={{ x: [0, 300], opacity: [0, 1, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                    <motion.div
                                        className="absolute top-1/2 left-0 h-[1px] w-full bg-white/10"
                                    />
                                    <div className="absolute top-1/2 right-4 -translate-y-1/2 h-2 w-2 rounded-full bg-[#D3FD50] animate-pulse"></div>
                                </div>
                            </Card>
                        </Link>
                    </motion.div>

                    {/* 4. Proven Results (Marquee) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="md:col-span-2"
                    >
                        <Link to="/projects" className="block h-full">
                            <Card className="!p-0 h-full flex flex-row items-center justify-between overflow-hidden bg-black relative group" noSpotlight={true}>
                                {/* Background Gradients */}
                                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none"></div>

                                <div className="z-30 p-8 sm:p-14 max-w-lg absolute left-0 h-full flex flex-col justify-center relative">
                                    <h3 className="mb-6 font-space-grotesk text-3xl sm:text-5xl font-bold text-white leading-tight">Proven Results</h3>
                                    <p className="text-lg text-white/70 mb-10 max-w-sm leading-relaxed">
                                        Projects that don't just look good, but also deliver measurable growth.
                                    </p>
                                    <div className="flex items-center gap-4 text-[#D3FD50] text-sm font-bold uppercase tracking-widest cursor-pointer group/link w-max">
                                        <div className="h-10 w-10 rounded-full border border-[#D3FD50]/30 flex items-center justify-center group-hover/link:bg-[#D3FD50] group-hover/link:text-black transition-all duration-300">
                                            <span className="transition-transform group-hover/link:rotate-45 text-lg">↗</span>
                                        </div>
                                        <span className="group-hover/link:translate-x-1 transition-transform duration-300">See Case Studies</span>
                                    </div>
                                </div>

                                {/* Tilted Scrolling Marquee */}
                                <div className="absolute inset-y-0 right-[-65%] w-[80%] overflow-hidden perspective-1000 flex items-center justify-center pointer-events-none">
                                    <motion.div
                                        className="flex flex-col gap-6 transform rotate-6 scale-110 opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                                        animate={{ y: ["0%", "-50%"] }}
                                        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
                                    >
                                        {[...marqueeImages, ...marqueeImages].map((src, i) => (
                                            <div key={i} className="w-[400px] h-[250px] relative rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-black">
                                                <img src={src} alt="Project Result" className="w-full h-full object-cover" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
                                            </div>
                                        ))}
                                    </motion.div>
                                </div>
                            </Card>
                        </Link>
                    </motion.div>
                </div>
            </div>

            <style jsx>{`
                .fade-mask {
                    mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
                }
            `}</style>
        </section>
    );
};

export default WhyWorkWithUs;
