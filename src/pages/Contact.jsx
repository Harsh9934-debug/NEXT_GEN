import React from 'react';

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-28 pb-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Let's build something great
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl">
            Tell us a bit about your project. We’ll reach back within 1–2 business days.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <label className="block">
                  <span className="text-sm text-white/70">First name</span>
                  <input type="text" className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-[#D3FD50] focus:ring-1 focus:ring-[#D3FD50]" placeholder="Jane" />
                </label>
                <label className="block">
                  <span className="text-sm text-white/70">Last name</span>
                  <input type="text" className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-[#D3FD50] focus:ring-1 focus:ring-[#D3FD50]" placeholder="Doe" />
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <label className="block">
                  <span className="text-sm text-white/70">Email</span>
                  <input type="email" className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-[#D3FD50] focus:ring-1 focus:ring-[#D3FD50]" placeholder="you@company.com" />
                </label>
                <label className="block">
                  <span className="text-sm text-white/70">Phone</span>
                  <input type="tel" className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-[#D3FD50] focus:ring-1 focus:ring-[#D3FD50]" placeholder="+1 (555) 000-0000" />
                </label>
              </div>

              <label className="block">
                <span className="text-sm text-white/70">What are you looking to build?</span>
                <select className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-[#D3FD50] focus:ring-1 focus:ring-[#D3FD50]">
                  <option>Website / Marketing Site</option>
                  <option>Web App / SaaS</option>
                  <option>Mobile App</option>
                  <option>Branding / Identity</option>
                  <option>Other</option>
                </select>
              </label>

              <label className="block">
                <span className="text-sm text-white/70">Message</span>
                <textarea rows={6} className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-[#D3FD50] focus:ring-1 focus:ring-[#D3FD50]" placeholder="Tell us about your goals, timeline, and constraints."></textarea>
              </label>

              <div className="flex items-center gap-3">
                <button type="button" className="rounded-full bg-[#D3FD50] text-black font-semibold px-6 py-3 hover:brightness-95 active:brightness-90 transition">
                  Send inquiry
                </button>
                <span className="text-sm text-white/50">No spam. We’ll get back within 1–2 business days.</span>
              </div>
            </form>
          </div>

          {/* Company info */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-lg font-semibold">Reach us</h3>
              <div className="mt-4 space-y-2 text-white/80">
                <p>hello@nextgen.studio</p>
                <p>+1 (555) 555-0101</p>
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-lg font-semibold">Locations</h3>
              <div className="mt-4 space-y-2 text-white/80">
                <p>Mumbai, IN</p>
                <p>Remote-first</p>
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-lg font-semibold">Social</h3>
              <div className="mt-4 flex gap-4 text-white/80">
                <a href="#" className="hover:text-[#D3FD50]">Twitter</a>
                <a href="#" className="hover:text-[#D3FD50]">LinkedIn</a>
                <a href="#" className="hover:text-[#D3FD50]">Dribbble</a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default Contact;
