import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import FooterCTA from '../components/home/FooterCTA';

// Services Section Component
const ServicesSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const services = [
    {
      title: "Development",
      tags: ["Build & Optimise"],
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      services: [
        "Web Development",
        "App Development",
        "Process Automation",
        "API Integration",
        "Database Management"
      ]
    },
    {
      title: "Analytics",
      tags: ["Data Insights"],
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      services: [
        "Data Analytics",
        "SEO & Optimisation",
        "Business Intelligence",
        "Predictive Analytics",
        "Data Visualization"
      ]
    },
    {
      title: "Design",
      tags: ["Brand Identity"],
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
      services: [
        "Branding & Identity",
        "UI/UX Design",
        "Motion Graphics",
        "Creative Strategy",
        "Web Design"
      ]
    },
    {
      title: "Digital Marketing",
      tags: ["Marketing Strategy"],
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      services: [
        "Social Media Marketing",
        "Content Marketing",
        "Email Marketing",
        "Search Engine Optimization",
        "Search Engine Marketing"
      ]
    }
  ];

  return (
    <div className="bg-black text-white px-6 sm:px-12 lg:px-20 py-24">
      <div className="mx-auto max-w-[1800px]">
        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[#D3FD50] mb-8"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#D3FD50]"></span>
            Services
          </motion.div>

          <motion.h1
            className="font-space-grotesk text-4xl md:text-5xl lg:text-7xl font-bold max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            See what makes us <br /> <span className="text-white/40">truly different.</span>
          </motion.h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[#0A0A0A] rounded-2xl p-8 border border-white/10 hover:border-[#D3FD50]/50 transition-colors duration-300 flex flex-col justify-between min-h-[420px]"
            >
              <div>
                {/* Icon */}
                <div className="mb-8 p-3 bg-white/5 rounded-lg inline-block text-[#D3FD50]">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="font-space-grotesk text-2xl font-bold mb-6 text-white group-hover:text-[#D3FD50] transition-colors">
                  {service.title}
                </h3>

                {/* Services List */}
                <ul className="space-y-3 mb-8">
                  {service.services.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-white/50 text-sm">
                      <div className="w-1 h-1 bg-[#D3FD50] rounded-full mr-3 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Get Started Button */}
              <div className="pt-6 border-t border-white/10">
                <button
                  onClick={handleGetStarted}
                  className="w-full inline-flex items-center justify-between text-sm uppercase tracking-wider font-medium text-white hover:text-[#D3FD50] transition-colors"
                >
                  Get Started
                  <span className="text-lg">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Digital Marketing Section Component
const DigitalMarketingSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-black text-white px-6 sm:px-12 lg:px-20 py-24 pb-40">
      <div className="mx-auto max-w-[1800px]">
        {/* Header */}
        <div className="mb-20 grid lg:grid-cols-2 gap-12 items-end">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="inline-block border border-white/20 text-white text-[10px] uppercase tracking-widest px-4 py-2 rounded-full">
                Digital Marketing
              </span>
            </div>
            <h1 className="font-space-grotesk text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              Engage. Convert. <br />Grow.
            </h1>
          </div>
          <p className="text-xl text-white/60 max-w-md pb-4">
            Amplify your brand's presence with data-driven marketing strategies that deliver measurable impact.
          </p>
        </div>

        {/* Two Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Social Media Management Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl p-10 overflow-hidden min-h-[400px] flex flex-col justify-end border border-white/10"
          >
            {/* Background Image/Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
            <img src="/social.png" alt="Social Media" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700 blur-[2px] group-hover:blur-0" />

            <div className="relative z-20">
              <h3 className="font-space-grotesk text-3xl font-bold text-white mb-4">
                Social Media Management
              </h3>
              <p className="text-white/70 text-lg mb-8 max-w-md">
                Build and engage your audience effectively with curated content and community management.
              </p>
              <button
                onClick={handleGetStarted}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#D3FD50] text-black font-bold rounded-full transition-transform hover:scale-105"
              >
                Start Campaign
              </button>
            </div>
          </motion.div>

          {/* Ad Campaigns Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl p-10 overflow-hidden min-h-[400px] flex flex-col justify-end border border-white/10 bg-[#0F0F0F]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img src="/circleimages.png" alt="Ad Campaigns" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-700" />

            <div className="relative z-20">
              <h3 className="font-space-grotesk text-3xl font-bold text-white mb-4">
                Ad Campaigns
              </h3>
              <p className="text-white/70 text-lg mb-8 max-w-md">
                Drive immediate results with targeted performance marketing and advertising.
              </p>
              <button
                onClick={handleGetStarted}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-bold rounded-full transition-colors hover:bg-white hover:text-black"
              >
                Start Campaign
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default function Page3ofAgence() {
  return (
    <div className="bg-black">
      <ServicesSection />
      <DigitalMarketingSection />
      <FooterCTA />
    </div>
  );
}