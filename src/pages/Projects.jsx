import { useGSAP } from '@gsap/react'
import { useMemo } from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


const Projects = () => {
  gsap.registerPlugin(ScrollTrigger)

  const projects = useMemo(() => ([
    {
      id: 'pjc',
      title: 'PJC',
      subtitle: 'Personalizing pharmacy care for millions of Quebecers with a seamless digital ecosystem.',
      year: '2024',
      services: ['E-commerce', 'Service Design'],
      image: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg'
    },
    {
      id: 'widescape',
      title: 'WIDESCAPE',
      subtitle: 'Introducing the first electric stand-up snowmobile to riders worldwide in record time.',
      year: '2024',
      services: ['Launch Strategy', 'Product Film'],
      image: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
    },
    {
      id: 'oka',
      title: 'OKA',
      subtitle: 'Reawakening a heritage dessert icon with a modern, appetite-inducing narrative.',
      year: '2023',
      services: ['Brand Narrative', 'Content Suite'],
      image: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg'
    },
    {
      id: 'opto',
      title: 'OPTO',
      subtitle: 'Designing a modular retail concept that shapeshifts with every season and store footprint.',
      year: '2023',
      services: ['Spatial Design', '3D Interactive'],
      image: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
    },
    {
      id: 'lamajeure',
      title: 'La Majeure',
      subtitle: 'Transforming cinematic sound into a living brand experience audiences can step inside.',
      year: '2022',
      services: ['Audio Identity', 'Immersive Installations'],
      image: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg'
    },
    {
      id: 'shelton',
      title: 'Shelton',
      subtitle: 'Giving a premium spirits house a collector-worthy visual universe across every touchpoint.',
      year: '2022',
      services: ['Brand System', 'Packaging Design'],
      image: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
    }
  ]), [])

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        y: 70,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.18,
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 85%',
          end: 'bottom 10%',
          toggleActions: 'play none none reverse'
        }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 pb-28 pt-32 sm:px-6 lg:px-8">
        <header className="space-y-6">
          <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.65rem] uppercase tracking-[0.5em] text-white/70">
            work
          </span>
          <div className="space-y-4">
            <h2 className="font-[font2] text-5xl leading-[1.05] uppercase sm:text-6xl lg:text-[8vw]">
              Projects
            </h2>
            <p className="max-w-xl text-sm text-white/60 sm:text-base md:text-lg">
              A curated lineup of partnerships where decisive strategy met crafted execution. From retail reinventions to immersive sound, every engagement is built to move people and metrics.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs uppercase tracking-[0.4em] text-white/40 sm:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-white/70">
              <span className="text-[0.55rem] font-semibold">Industries</span>
              <p className="mt-3 text-base tracking-tight text-white">Retail · Culture</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-white/70">
              <span className="text-[0.55rem] font-semibold">Launches</span>
              <p className="mt-3 text-base tracking-tight text-white">24 in 24 months</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-white/70">
              <span className="text-[0.55rem] font-semibold">Reach</span>
              <p className="mt-3 text-base tracking-tight text-white">20+ markets</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-white/70">
              <span className="text-[0.55rem] font-semibold">Services</span>
              <p className="mt-3 text-base tracking-tight text-white">Strategy · Product</p>
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <span className="text-[0.6rem] uppercase tracking-[0.4em] text-white/40">Featured engagements</span>
            <div className="flex flex-wrap gap-2">
              {projects.map((project) => (
                <span
                  key={`badge-${project.id}`}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/70"
                >
                  {project.title}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className="projects-grid mt-16 space-y-14 sm:space-y-20">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} index={index + 1} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects