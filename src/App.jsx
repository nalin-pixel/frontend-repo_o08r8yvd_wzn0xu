import React from 'react'
import Hero from './components/Hero'
import EventDetails from './components/EventDetails'
import Gallery from './components/Gallery'
import TicketForm from './components/TicketForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <EventDetails />
      <Gallery />
      <TicketForm />
      <Footer />
    </div>
  )
}

export default App
