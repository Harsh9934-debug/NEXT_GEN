import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedWork = () => {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const listRef = useRef(null);

    const projects = [
        {
            title: "HealthPlus",
            category: "E-Commerce",
            image: "/p1.png",
            id: "healthplus-pharmacy"
        },
        {
            title: "Dev AI",
            category: "Development",
            image: "/devai.png",
            id: "DEV_AI"
        },
        {
            title: "VoltRide",
            category: "Product Launch",
            image: "/p3.png",
            id: "voltride-snow"
        },
        {
            title: "SweetBite",
            category: "Brand Story",
            image: "/p4.png",
            id: "sweetbite-desserts"
        }
    ];

    const handleMouseMove = (e) => {
        // Calculate mouse position relative to the list container for better control
        if (listRef.current) {
            const rect = listRef.current.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
        }
    };

    return (
        <section id="work" className="bg-black px-6 py-24 sm:px-12 lg:px-20 relative z-20">
            <div className="mb-16 flex items-end justify-between">
                <h2 className="font-space-grotesk text-4xl font-bold uppercase text-white sm:text-5xl">
                    Selected <span className="text-[#D3FD50]">Works</span>
                </h2>
                <Link to="/projects" className="hidden text-sm uppercase tracking-widest text-white/60 transition hover:text-white sm:block">
                    View All Projects
                </Link>
            </div>

            <div
                ref={listRef}
                onMouseMove={handleMouseMove}
                className="relative flex flex-col"
            >
                {projects.map((project, index) => (
                    <Link
                        to="/projects"
                        key={index}
                        onMouseEnter={() => setHoveredProject(index)}
                        onMouseLeave={() => setHoveredProject(null)}
                        className="group relative flex items-center justify-between border-t border-white/20 py-12 transition-colors hover:bg-white/5 px-4"
                    >
                        <div className="flex flex-col gap-2">
                            <h3 className="font-space-grotesk text-3xl font-bold uppercase text-white transition-colors group-hover:text-[#D3FD50] sm:text-5xl lg:text-6xl">
                                {project.title}
                            </h3>
                            <span className="text-xs uppercase tracking-widest text-white/50">{project.category}</span>
                        </div>

                        <div className="rounded-full border border-white/20 p-4 transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                            <ArrowUpRight size={24} />
                        </div>
                    </Link>
                ))}
                <div className='border-t border-white/20 w-full'></div>

                {/* Floating Reveal Image - Desktop Only */}
                <AnimatePresence>
                    {hoveredProject !== null && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                x: mousePosition.x - 200, // Center the image (width 400/2)
                                y: mousePosition.y - 150  // Center the image (height 300/2)
                            }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8 }}
                            className="pointer-events-none absolute left-0 top-0 z-50 hidden h-[300px] w-[400px] overflow-hidden rounded-xl lg:block"
                        >
                            <img
                                src={projects[hoveredProject].image}
                                alt="Project Preview"
                                className="h-full w-full object-cover"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="mt-12 text-center sm:hidden">
                <Link to="/projects" className="text-sm uppercase tracking-widest text-white/60 transition hover:text-white">
                    View All Projects
                </Link>
            </div>
        </section>
    );
};

export default FeaturedWork;
