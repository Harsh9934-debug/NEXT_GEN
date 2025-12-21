import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import FooterCTA from '../components/home/FooterCTA';

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-black min-h-screen text-white pt-32">
            <div className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="font-space-grotesk text-5xl sm:text-7xl font-bold uppercase mb-12"
                >
                    We Are <span className="text-[#D3FD50]">NEXTGEN</span>.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl sm:text-2xl text-white/70 max-w-3xl leading-relaxed mb-24"
                >
                    Born from a passion for innovation, we are a digital product agency that bridges the gap between imagination and reality. We don't just build websites; we craft digital ecosystems that propel brands into the future.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
                    <div>
                        <h2 className="font-space-grotesk text-3xl font-bold uppercase mb-6 text-white">Our Vision</h2>
                        <p className="text-white/60 text-lg leading-relaxed">
                            To redefine the digital landscape by creating experiences that are not only visually stunning but also functionally superior. We believe in the power of design to solve complex problems and elevate human interaction with technology.
                        </p>
                    </div>
                    <div>
                        <h2 className="font-space-grotesk text-3xl font-bold uppercase mb-6 text-white">Our Approach</h2>
                        <p className="text-white/60 text-lg leading-relaxed">
                            We combine data-driven strategy with world-class design and bleeding-edge technology. Our process is collaborative, transparent, and relentlessly focused on quality. We treat every project as if it were our own.
                        </p>
                    </div>
                </div>

                <div className="mb-32">
                    <h2 className="font-space-grotesk text-3xl font-bold uppercase mb-12 text-center text-white">Core Values</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {['Innovation', 'Precision', 'Transparency'].map((value, i) => (
                            <div key={i} className="border border-white/10 p-8 rounded-2xl bg-white/5">
                                <h3 className="text-xl font-bold uppercase mb-4 text-[#D3FD50]">{value}</h3>
                                <p className="text-white/60 text-sm">
                                    We believe that {value.toLowerCase()} is the key to sustainable growth and meaningful impact.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <FooterCTA />
        </div>
    );
};

export default AboutUs;
