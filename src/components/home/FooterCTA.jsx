import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
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

            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useTransform(
                        [mouseX, mouseY],
                        ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(255, 255, 255, 0.05), transparent 40%)`
                    )
                }}
            />

            <div className="absolute inset-0 flex justify-center items-center select-none pointer-events-none z-0 overflow-hidden">
                <h1 className="font-space-grotesk text-[23vw] font-bold text-white/10 tracking-tighter leading-none whitespace-nowrap">
                    <span className="text-[#D3FD50] opacity-20">N</span>EXT<span className="text-[#D3FD50] opacity-20">G</span>EN
                </h1>
            </div>



            <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-12 lg:px-20 h-full flex flex-col justify-between">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="mt-20 mb-20 flex flex-col items-center justify-center text-center"
                >
                    <motion.div variants={itemVariants}>
                        <MagneticButton>
                            <a href="mailto:nextgenservicesinformations@gmail.com" className="group relative block cursor-pointer">
                                <div className="inline-flex items-center gap-4 rounded-full bg-white/10 border border-white/10 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-transform hover:scale-105 hover:bg-white hover:text-black">
                                    Book a 30-Min Call <ArrowUpRight size={16} />
                                </div>
                            </a>
                        </MagneticButton>
                    </motion.div>
                    <motion.div variants={itemVariants} className="mt-8 flex items-center gap-2 text-sm font-medium text-white/60">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D3FD50] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D3FD50]"></span>
                        </span>
                        We are online — let's Connect!
                    </motion.div>
                </motion.div>


                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="grid grid-cols-1 gap-12 md:grid-cols-3 mb-24"
                >

                    <motion.div variants={itemVariants} className="md:text-left">
                        <Link to="/" className="font-space-grotesk text-2xl font-bold uppercase tracking-tight block mb-4 text-white">
                            NEXTGEN
                        </Link>
                        <p className="text-sm text-white/60 font-medium">
                            We lead, Not follow
                        </p>
                    </motion.div>


                    <motion.div variants={itemVariants} className="md:text-center">
                        <h4 className="font-space-grotesk text-sm font-bold uppercase text-white mb-6">Company</h4>
                        <ul className="flex flex-col gap-4 text-sm text-white/60">
                            {['About Us', 'Pricing', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-white transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>


                    <motion.div variants={itemVariants} className="md:text-right">
                        <h4 className="font-space-grotesk text-sm font-bold uppercase text-white mb-6">Socials</h4>
                        <ul className="flex flex-col gap-4 text-sm text-white/60 w-full items-start md:items-end">
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
                                        className="group flex items-center gap-1 hover:text-white transition-colors"
                                    >
                                        {social.name} <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="flex flex-col-reverse items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row text-xs font-medium text-white/40"
                >
                    <span>© {new Date().getFullYear()} NEXTGEN Technologies</span>

                </motion.div>
            </div>
        </footer>
    );
};

export default FooterCTA;
