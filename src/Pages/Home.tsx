// src/pages/Home.tsx

import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement('a')
    link.href = '/19.pdf'
    link.download = 'Abraham_Tsegaye_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div 
      className="min-h-[80vh] flex items-center justify-center bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: `url('/05.jpg')` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Minimal Circle Set - Top */}
          <div className="flex justify-center gap-2 mb-4 animate-fade-in-up delay-100">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: '200ms' }} />
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse" style={{ animationDelay: '400ms' }} />
          </div>

          {/* AVAILABLE TO WORK - OVAL SHAPE */}
          <div className="flex justify-center mb-6 animate-fade-in-up delay-150">
            <div className="inline-block px-8 py-3 rounded-full border-2 border-green-400/60 
                            bg-green-500/20 backdrop-blur-sm shadow-lg shadow-green-500/20
                            hover:scale-105 transition-all duration-300 cursor-pointer
                            animate-pulse-slow">
              <span className="text-green-300 font-semibold text-sm md:text-base tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                ✅ Available to work anytime
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              </span>
            </div>
          </div>

          {/* Hero Section */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-2 animate-fade-in-up">
              Abraham Tsegaye
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-400 font-semibold mb-4 animate-fade-in-up delay-200">
              Automotive Engineer
            </h2>
            <div className="flex justify-center gap-2 mb-4 animate-fade-in-up delay-300">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">
                Vehicle Systems
              </span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">
                Diagnostics
              </span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">
                Innovation
              </span>
            </div>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto animate-fade-in-up delay-400">
              Specializing in vehicle systems, intelligent automotive technologies, 
              and innovative engineering solutions.
            </p>
          </div>

          {/* Minimal Circle Set - Bottom */}
          <div className="flex justify-center gap-1.5 mb-8 animate-fade-in-up delay-500">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <span className="w-2 h-2 rounded-full bg-pink-400" />
            <span className="w-2 h-2 rounded-full bg-green-400" />
            <span className="w-2 h-2 rounded-full bg-yellow-400" />
            <span className="w-2 h-2 rounded-full bg-red-400" />
          </div>

          {/* Download CV Button */}
          <div className="animate-fade-in-up delay-600 mb-12">
            <button
              onClick={handleDownloadCV}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl 
                       hover:from-purple-600 hover:to-blue-600 hover:scale-105 hover:shadow-2xl
                       transition-all duration-300 ease-spring flex items-center gap-3 mx-auto
                       shadow-lg shadow-blue-500/25"
            >
              <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV
            </button>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              to="/about" 
              className="card-glass p-6 hover-lift-lg animate-fade-in-up delay-700"
            >
              <div className="text-4xl mb-3 animate-float">👤</div>
              <h3 className="text-xl font-semibold text-gray-800 gradient-text">About Me</h3>
              <p className="text-gray-600 text-sm mt-2">Learn about my journey in automotive engineering</p>
            </Link>

            <Link 
              to="/projects" 
              className="card-glass p-6 hover-lift-lg animate-fade-in-up delay-800"
            >
              <div className="text-4xl mb-3 animate-float-slow">🚗</div>
              <h3 className="text-xl font-semibold text-gray-800 gradient-text">My Projects</h3>
              <p className="text-gray-600 text-sm mt-2">Explore my engineering projects and innovations</p>
            </Link>

            <Link 
              to="/contact" 
              className="card-glass p-6 hover-lift-lg animate-fade-in-up delay-900"
            >
              <div className="text-4xl mb-3 animate-float-fast">📧</div>
              <h3 className="text-xl font-semibold text-gray-800 gradient-text">Contact</h3>
              <p className="text-gray-600 text-sm mt-2">Get in touch for collaborations or opportunities</p>
            </Link>
          </div>

          {/* Stats with minimized circles */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="card-glass p-4 animate-fade-in-up delay-1000 hover-lift">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span className="text-2xl font-bold gradient-text">1+</span>
              </div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="card-glass p-4 animate-fade-in-up delay-1100 hover-lift">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                <span className="text-2xl font-bold gradient-text">3</span>
              </div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="card-glass p-4 animate-fade-in-up delay-1300 hover-lift">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                <span className="text-2xl font-bold gradient-text">100%</span>
              </div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home