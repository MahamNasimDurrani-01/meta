import React from 'react'
import Herobackground from './Herobackground'

function Hero({ Services_ref, BookNow_ref, scrollToSection }) {
  const handleScrollToServices = () => {
    scrollToSection(Services_ref)
  }
  const handleScrollToBookNow = () => {
    scrollToSection(BookNow_ref)
  }

  return (
    <div className="relative w-full h-screen">
      {/* Background Video & Particles */}
      <Herobackground />

      {/* Dark Overlay + Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(3,114,250,0.25),transparent_70%)]"></div>
      </div>

      {/* Foreground Content */}
      <div className="absolute z-10 w-full h-full flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 md:px-20 text-white">
        <div className="w-full md:w-5/6 lg:w-3/4 pt-40">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 
            text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 
            drop-shadow-[0_0_15px_rgba(3,114,250,0.7)]">
            Empowering Your Business for the Digital Future
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100">
            AI | Digital Transformation | AI Automation | Business Consultancy
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex pt-40 flex-col sm:flex-row gap-4">
          <button 
            onClick={handleScrollToBookNow}
            className="px-8 py-4 rounded-full text-lg font-semibold 
            bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-800 
            shadow-[0_0_25px_rgba(3,114,250,0.7)] 
            hover:scale-105 hover:shadow-[0_0_40px_rgba(0,240,255,0.9)] 
            transition-all duration-300"
          >
            🚀 Book a Free Consultation
          </button>

          <button
            onClick={handleScrollToServices}
            className="px-8 py-4 rounded-full text-lg font-semibold 
            border border-cyan-300 text-cyan-200 
            hover:bg-cyan-200 hover:text-black 
            hover:shadow-[0_0_20px_rgba(0,240,255,0.7)] 
            transition-all duration-300"
          >
            🌐 Explore Our Services
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero