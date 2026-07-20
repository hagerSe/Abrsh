// src/components/Navbar.tsx

import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="bg-gray-900/95 backdrop-blur-md text-white shadow-lg sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo with circles */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="flex -space-x-1">
              <span className="circle-color circle-blue animate-circle-pulse" />
              <span className="circle-color circle-purple animate-circle-pulse" style={{ animationDelay: '200ms' }} />
              <span className="circle-color circle-pink animate-circle-pulse" style={{ animationDelay: '400ms' }} />
            </div>
            <span className="text-2xl font-bold gradient-text-animate group-hover:scale-105 transition-transform duration-300">
              Abreham.T
            </span>
            <span className="text-sm text-gray-400 hidden sm:inline">| Automotive Engineer</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg transition-all duration-300 font-medium relative group ${
                  isActive(link.path)
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-blue-500 rounded-full animate-pulse" />
                )}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-500 rounded-full transition-all duration-300 group-hover:w-1/2 ${
                  isActive(link.path) ? 'w-1/2' : ''
                }`} />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white text-2xl focus:outline-none transition-transform duration-300 hover:rotate-90"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2 border-t border-gray-700 pt-4 animate-slide-down">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar