import React from 'react'

const ProjectCard = ({ index, title, subtitle, year, services = [], image }) => {
    return (
        <article className="project-card group space-y-4">
            <div className="relative isolate aspect-[4/5] w-full overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.8)] transition-all duration-700 ease-out sm:aspect-[3/4] lg:aspect-[7/5] lg:rounded-[46px]">
                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 h-full w-full scale-105 object-cover brightness-[0.95] transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10 opacity-90 transition-opacity duration-500 group-hover:opacity-95" />

                <div className="relative flex h-full flex-col justify-between p-6 sm:p-8 lg:p-12">
                    <div className="flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.45em] text-white/60">
                        <span className="rounded-full border border-white/20 px-3 py-1">{String(index).padStart(2, '0')}</span>
                        <span>{year}</span>
                    </div>

                    <div className="space-y-3">
                        <h3 className="font-[font2] text-3xl uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
                            {title}
                        </h3>
                        <p className="max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
                            {subtitle}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                    {services.map((service) => (
                        <span
                            key={service}
                            className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/70"
                        >
                            {service}
                        </span>
                    ))}
                </div>
                <button className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white transition-colors hover:border-white/40 hover:bg-white/10">
                    View project
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="h-4 w-4"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                </button>
            </div>
        </article>
    )
}

export default ProjectCard