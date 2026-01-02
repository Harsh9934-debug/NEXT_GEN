import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MagneticButton from '../common/MagneticButton';

const AgencyIntro = () => {
    return (
        <section className="relative bg-black px-6 py-32 text-center sm:px-12 lg:px-20 overflow-hidden">
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-[0.03] blur-[100px] pointer-events-none" />
            <div className="relative z-10 mx-auto max-w-4xl">
                <span className="mb-8 block font-inter text-xs font-bold uppercase tracking-[0.3em] text-[#D3FD50]">
                    The Agency
                </span>
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.05 }
                        }
                    }}
                    className="font-space-grotesk text-3xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl"
                >
                    {`We don't just build websites,`.split(" ").map((word, i) => (
                        <motion.span
                            key={i}
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="inline-block mr-[0.25em]"
                        >
                            {word}
                        </motion.span>
                    ))}
                    <br className="hidden sm:block" />
                    {`we craft `.split(" ").map((word, i) => (
                        <motion.span
                            key={i}
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="inline-block mr-[0.25em]"
                        >
                            {word}
                        </motion.span>
                    ))}
                    <span className="text-white/40">digital experiences</span> that matter.
                </motion.h2>
                <p className="mx-auto mt-10 max-w-2xl text-lg text-white/70 leading-relaxed font-light">
                    Born in curiosity and fueled by craft, <span className="text-white font-medium">NEXTGEN</span> ships products that feel inevitable.
                    From strategy to scale, we are the partner for ambitious brands looking to define the future.
                </p>

                <div className="mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
                    <MagneticButton>
                        <Link to="/agency" className="inline-flex h-16 w-64 items-center justify-center rounded-full bg-white px-8 text-sm font-bold uppercase tracking-widest text-black transition hover:bg-[#D3FD50]">
                            Our Philosophy
                        </Link>
                    </MagneticButton>

                    <MagneticButton>
                        <Link to="/contact" className="inline-flex h-16 w-64 items-center justify-center rounded-full border border-white/20 px-8 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-white/10 hover:border-white">
                            Start a Project
                        </Link>
                    </MagneticButton>
                </div>
            </div>
        </section>
    );
};

export default AgencyIntro;
