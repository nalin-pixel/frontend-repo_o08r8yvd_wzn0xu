import React from 'react'

const EventDetails = () => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl bg-gray-50 border">
          <h3 className="text-lg font-semibold text-gray-900">When</h3>
          <p className="mt-2 text-gray-700">Saturday, 7 December · 5:00 PM – 8:00 PM</p>
        </div>
        <div className="p-6 rounded-xl bg-gray-50 border">
          <h3 className="text-lg font-semibold text-gray-900">Where</h3>
          <p className="mt-2 text-gray-700">Mad Over Italian — Restaurant & Store</p>
          <p className="text-gray-500">Local venue details provided after purchase</p>
        </div>
        <div className="p-6 rounded-xl bg-gray-50 border">
          <h3 className="text-lg font-semibold text-gray-900">What</h3>
          <p className="mt-2 text-gray-700">Taste sampling of our menu, welcome drinks, and launch offers.</p>
        </div>
      </div>
    </section>
  )
}

export default EventDetails
