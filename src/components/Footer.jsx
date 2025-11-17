import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Mad Over Italian. All rights reserved.
        </p>
        <a href="https://moi.com.au" target="_blank" rel="noreferrer" className="text-sm text-red-600 hover:text-red-700 font-medium">
          moi.com.au
        </a>
      </div>
    </footer>
  )
}

export default Footer
