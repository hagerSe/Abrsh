// src/pages/Contact.tsx

import React, { useState } from 'react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/19.pdf'
    link.download = 'Abraham_Tsegaye_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div 
      className="min-h-[80vh] py-16 bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: `url('/05.jpg')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4 text-center animate-fade-in-up">Contact Me</h1>
          <p className="text-center text-gray-200 mb-8 animate-fade-in-up delay-100">
            Have a question, collaboration idea, or job opportunity? Let's connect!
          </p>

          {/* Download CV Button */}
          <div className="flex justify-center mb-8 animate-fade-in-up delay-200">
            <button
              onClick={handleDownloadCV}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg 
                       hover:from-purple-600 hover:to-blue-600 hover:scale-105 hover:shadow-2xl
                       transition-all duration-300 flex items-center gap-3 shadow-lg shadow-blue-500/25"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV
            </button>
          </div>

          {/* Contact Information - Vertical Layout */}
          <div className="card-glass p-8 mb-8 animate-fade-in-up delay-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 gradient-text text-center">Get in Touch</h2>
            
            <div className="space-y-4 max-w-md mx-auto">
              {/* Phone */}
              <div className="flex items-center gap-4 p-4 bg-white/60 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  📱
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Phone</h3>
                  <a href="tel:+251974741284" className="text-gray-800 font-medium hover:text-blue-600 transition-colors">
                    +251-9-74-74-12-84
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 p-4 bg-white/60 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  ✉️
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</h3>
                  <a href="mailto:tooobrar@gmail.com" className="text-gray-800 font-medium hover:text-purple-600 transition-colors">
                    tooabrar@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 bg-white/60 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  📍
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Location</h3>
                  <p className="text-gray-800 font-medium">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-glass p-8 animate-fade-in-up delay-400">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 gradient-text text-center">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/80"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/80"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/80"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/80 resize-none"
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3.5 rounded-xl 
                         hover:from-purple-600 hover:to-blue-600 hover:scale-[1.02] 
                         transition-all duration-300 font-semibold shadow-lg shadow-blue-500/25
                         flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact