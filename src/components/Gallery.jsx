import React from 'react'

const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1544378730-8b5104b50a56?q=80&w=1600&auto=format&fit=crop', // pasta
    'https://images.unsplash.com/photo-1603072388761-2cf9b703a676?q=80&w=1600&auto=format&fit=crop', // pizza
    'https://images.unsplash.com/photo-1551024709-8f23befc6cf7?q=80&w=1600&auto=format&fit=crop', // tiramisu
    'https://images.unsplash.com/photo-1541783015990-82367a926545?q=80&w=1600&auto=format&fit=crop', // antipasti
    'https://images.unsplash.com/photo-1562059390-a761a084768e?q=80&w=1600&auto=format&fit=crop', // bruschetta
    'https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?q=80&w=1600&auto=format&fit=crop', // wine
  ]

  return (
    <section className="relative py-12 md:py-16 bg-gradient-to-b from-white to-red-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">A Taste of What’s Coming</h2>
            <p className="mt-2 text-gray-600">Fresh pastas, wood-fired pizzas, classic desserts, and bubbly welcome drinks.</p>
          </div>
          <a href="#tickets" className="hidden md:inline-flex items-center rounded-lg bg-red-600 text-white px-4 py-2 font-semibold shadow hover:bg-red-700">Get Tickets</a>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((src, idx) => (
            <div key={idx} className={`group relative overflow-hidden rounded-xl shadow-sm ${idx % 3 === 0 ? 'md:row-span-2' : ''}`} style={{aspectRatio: idx % 3 === 0 ? '3/4' : '4/3'}}>
              <img src={src} alt="Italian tasting preview" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
