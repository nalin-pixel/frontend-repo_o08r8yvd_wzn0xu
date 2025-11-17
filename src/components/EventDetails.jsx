import React from 'react'
import { Clock, MapPin, UtensilsCrossed, Gift, Sparkles } from 'lucide-react'

const Detail = ({ icon: Icon, title, children }) => (
  <div className="p-6 rounded-xl bg-white/70 backdrop-blur border shadow-sm">
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-lg bg-red-50 text-red-600"><Icon size={20} /></div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    </div>
    <div className="mt-2 text-gray-700">{children}</div>
  </div>
)

const EventDetails = () => {
  return (
    <section className="bg-gradient-to-b from-red-50/60 to-white">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        <Detail icon={Clock} title="When">
          Saturday, 7 December · 5:00 PM – 8:00 PM
        </Detail>
        <Detail icon={MapPin} title="Where">
          Mad Over Italian — Restaurant & Store
          <div className="text-gray-500 text-sm">Venue details provided after purchase</div>
        </Detail>
        <Detail icon={UtensilsCrossed} title="What">
          Tasting menu of signature pastas and pizzas, welcome drinks, desserts and launch offers.
        </Detail>
      </div>
      <div className="max-w-6xl mx-auto px-6 pb-4">
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <Gift size={16} className="text-red-600" />
          <span>Early guests receive limited launch goodies.</span>
          <Sparkles size={16} className="text-yellow-500" />
          <span>Dress smart casual.</span>
        </div>
      </div>
    </section>
  )
}

export default EventDetails
