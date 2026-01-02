import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import ServicesTicker from '../components/home/ServicesTicker';
import Mockit from '../components/home/Mockit';
import WhyWorkWithUs from '../components/home/WhyWorkWithUs';
import AgencyIntro from '../components/home/AgencyIntro';
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
