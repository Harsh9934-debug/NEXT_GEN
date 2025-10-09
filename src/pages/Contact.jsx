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
          <aside className="lg:col-span-1 space-y-6">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-lg font-semibold">Reach us</h3>
              <div className="mt-4 space-y-2 text-white/80">
                <p>harshkumargupta630@gmail.com</p>
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-lg font-semibold">Location</h3>
              <div className="mt-4 space-y-2 text-white/80">
                <p>Banglore, IN</p>
                <p>Remote-first</p>
              </div>
            </div>

            
          </aside>
        </div>
      </section>
    </div>
  );
}

export default Contact;
