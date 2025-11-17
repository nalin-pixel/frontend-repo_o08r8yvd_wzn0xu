import React from 'react'

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-600 via-rose-600 to-orange-500 text-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-black/10 rounded-full blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="md:flex md:items-center md:justify-between gap-10">
          <div className="max-w-2xl">
            <p className="uppercase tracking-[0.2em] text-yellow-200 font-semibold">Mad Over Italian</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight">
              Store Opening Tasting Night
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/90">
              Join us for an evening of Italian flavours — fresh pastas, wood-fired pizzas, decadent desserts and welcome drinks.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="#tickets"
                className="inline-flex items-center justify-center rounded-lg bg-white text-red-700 px-5 py-3 font-semibold shadow hover:bg-yellow-50 transition"
              >
                Buy Tickets – $10
              </a>
              <a
                href="https://moi.com.au" target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-transparent px-5 py-3 font-semibold text-white hover:bg-white/10 transition"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="mt-10 md:mt-0 md:w-[42%]">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop"
                alt="Fresh pasta and pizza from Mad Over Italian"
                className="h-full w-full object-cover transform-gpu scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
