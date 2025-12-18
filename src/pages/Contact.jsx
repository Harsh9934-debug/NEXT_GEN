import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FooterCTA from '../components/home/FooterCTA';

const Contact = () => {


  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <section className="relative px-6 py-12 sm:px-12 lg:px-20 lg:py-24">
        {/* Centered Contact Info */}
        <div className="flex flex-col items-center justify-center text-center mx-auto max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8 block font-space-grotesk text-sm font-bold uppercase tracking-widest text-[#D3FD50]"
          >
            Contact Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-space-grotesk text-5xl font-bold uppercase leading-[0.9] tracking-tighter sm:text-7xl lg:text-8xl"
          >
            Let's Start <br />
            <span className="text-white/50">A Project.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 max-w-xl text-lg text-white/60 mx-auto"
          >
            We help ambitious brands build the future. Tell us about your vision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 flex flex-col items-center gap-12 sm:flex-row sm:gap-24"
          >
            <div className="text-center">
              <h4 className="mb-4 font-space-grotesk text-xs font-bold uppercase tracking-widest text-white/40">Email</h4>
              <a href="mailto:nextgenservicesinformations@gmail.com" className="text-2xl sm:text-3xl decoration-[#D3FD50] hover:underline hover:underline-offset-8 transition-all">
                nextgenservicesinformations@gmail.com
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12 text-center"
          >
            <h4 className="mb-4 font-space-grotesk text-xs font-bold uppercase tracking-widest text-white/40">Location</h4>
            <p className="text-xl sm:text-2xl">Bangalore, IN / Remote</p>
          </motion.div>
        </div>
      </section>

      <FooterCTA />
    </div>
  );
}

export default Contact;
