import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import ServicesTicker from '../components/home/ServicesTicker';
import Mockit from '../components/home/Mockit';
import WhyWorkWithUs from '../components/home/WhyWorkWithUs';
import AgencyIntro from '../components/home/AgencyIntro';
import Contact from '../pages/Contact'; // Reusing Contact/Footer section if appropriate or just the footer
// Actually, design plan mentioned a custom footer CTA, but for now I'll use a direct CTA section in Home or reuse Contact component.
// The plan said "Footer CTA (Enhanced)". Let's built a clean CTA section here or just let the footer handle it.
// I will add a specific "Let's Talk" section at the bottom before the global footer (if any).
import FooterCTA from '../components/home/FooterCTA';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-black text-white">
      <Hero />
      <ServicesTicker />
      <Mockit />
      <WhyWorkWithUs />
      <AgencyIntro />
      <FooterCTA />
    </div>
  );
};

export default Home;
