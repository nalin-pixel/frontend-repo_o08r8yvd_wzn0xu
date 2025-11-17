import React from 'react'

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-yellow-50">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-red-200/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-yellow-200/40 rounded-full blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="md:flex md:items-center md:justify-between gap-10">
          <div className="max-w-2xl">
            <p className="uppercase tracking-widest text-red-600 font-semibold">Mad Over Italian</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Store Opening Tasting Event
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-700">
              You’re invited to an evening of tasting our favorite Italian classics — fresh pastas, wood-fired pizzas, and indulgent desserts.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="#tickets"
                className="inline-flex items-center justify-center rounded-lg bg-red-600 text-white px-5 py-3 font-semibold shadow hover:bg-red-700 transition"
              >
                Buy Tickets – $10
              </a>
              <a
                href="https://moi.com.au" target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition"
              >
                Visit our website
              </a>
            </div>
          </div>
          <div className="mt-10 md:mt-0 md:w-[40%]">
            <div className="aspect-square rounded-2xl bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
