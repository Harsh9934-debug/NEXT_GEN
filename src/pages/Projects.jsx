import { useGSAP } from '@gsap/react'
import { useMemo } from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
// Using public path for images referenced directly in data. If bundling is preferred, move to /src/assets.


const Projects = () => {
  gsap.registerPlugin(ScrollTrigger)

  const projects = useMemo(() => ([
    {
      id: 'healthplus-pharmacy',
      title: 'HealthPlus Pharmacy',
      subtitle: 'We built an online store that makes refills and shopping simple for everyone.',
      year: '2025',
      services: ['E-commerce', 'Service Design'],
      image: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg'
    },
    {
      id: 'DEV_AI',
      title: 'Dev AI',
      subtitle: 'We developed an AI-powered platform to streamline coding tasks for developers.',
      year: '2025',
      services: ['AI Integration', 'Web Development'],
      image: '/devai.png'
    },
    {
      id: 'voltride-snow',
      title: 'VoltRide Snow',
      subtitle: 'We launched a stand-up electric snowmobile and got it in front of riders fast.',
      year: '2025',
      services: ['Launch Strategy', 'Product Film'],
      image: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
    },
    {
      id: 'sweetbite-desserts',
      title: 'SweetBite Desserts',
      subtitle: 'We refreshed a classic dessert brand with a warm, modern look and story.',
      year: '2025',
      services: ['Brand Story', 'Content'],
      image: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg'
    },
    {
      id: 'opto-modular-retail',
      title: 'Opto Modular Retail',
      subtitle: 'We designed a flexible retail setup that changes with seasons and store sizes.',
      year: '2024',
      services: ['Spatial Design', '3D Interactive'],
      image: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
    },
    {
      id: 'cinematic-sound-brand',
      title: 'Cinematic Sound Brand',
      subtitle: 'We turned film sound into a brand people can see and feel.',
      year: '2024',
      services: ['Sound Branding', 'Experiential'],
      image: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg'
    },
    {
      id: 'shelton-spirits',
      title: 'Shelton Spirits',
      subtitle: 'We created packaging and visuals that feel premium and collectible.',
      year: '2024',
      services: ['Brand System', 'Packaging'],
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
            <h2 className="font-space-grotesk text-5xl leading-[1.05] uppercase sm:text-6xl lg:text-[8vw]">
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