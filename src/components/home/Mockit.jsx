import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
    {
        title: "HealthPlus",
        category: "E-Commerce",
        image: "/p1.png",
        description: "A complete digital transformation for a leading healthcare provider.",
        color: "#FF6B6B"
    },
    {
        title: "Dev AI",
        category: "Development",
        image: "/devai1.png",
        description: "Next-generation developer tools powered by advanced machine learning.",
        color: "#D3FD50"
    },
    {
        title: "Mockit",
        category: "Development",
        image: "/mockit.png",
        description: "Mockit is a platform that let yoy to pratice your mock interview and improve your skills.",
        color: "#4ECDC4"
    },
    {
        title: "SweetBite",
        category: "Brand Story",
        image: "/p4.png",
        description: "Artisanal desserts delivered with digital precision.",
        color: "#FFE66D"
    }
];

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group relative w-full overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-colors duration-500"
        >
            <div className="aspect-[4/3] w-full overflow-hidden">
                <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-center"
                />
            </div>

            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-widest" style={{ color: project.color }}>
                        {project.category}
                    </span>
                    <div className="flex items-end justify-between">
                        <div>
                            <h3 className="text-2xl font-bold uppercase text-white">{project.title}</h3>
                            <p className="mt-2 text-sm text-white/80 line-clamp-2">{project.description}</p>
                        </div>
                        <div className="ml-4 rounded-full bg-white p-3 text-black transition-transform hover:scale-110">
                            <ArrowUpRight size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Mockit = () => {
    return (
        <section className="relative w-full bg-black py-24 sm:py-32">
            <div className="px-6 sm:px-12 lg:px-20">
                {/* Header */}
                <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="block font-inter text-xs font-bold uppercase tracking-[0.3em] text-[#D3FD50]"
                        >
                            Selected Work
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="mt-4 font-space-grotesk text-4xl font-bold uppercase leading-tight text-white sm:text-6xl"
                        >
                            Featured <span className="text-zinc-500">Works</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link
                            to="/projects"
                            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-all hover:bg-white hover:text-black"
                        >
                            <span>View All Projects</span>
                            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Link>
                    </motion.div>
                </div>

                {/* Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:gap-12">
                    {projects.map((project, index) => (
                        <div key={index} className={index % 2 !== 0 ? "sm:mt-20" : ""}>
                            <Link to="/projects">
                                <ProjectCard project={project} index={index} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Mockit;
