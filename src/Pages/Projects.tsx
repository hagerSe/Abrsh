// src/pages/Projects.tsx

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  imageUrl?: string
  technologies: string[]
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: 'Intelligent Tire Pressure Monitoring System',
      category: 'Vehicle Safety',
      description: 'Developed an intelligent TPMS that monitors tire pressure in real-time, alerting drivers to potential safety hazards and improving vehicle safety. This system uses advanced sensors and IoT technology to provide continuous monitoring and instant alerts.',
      image: '🔧',
      imageUrl: '/1.jpg',
      technologies: ['MATLAB', 'Sensors', 'IoT', 'Data Analysis']
    },
    {
      id: 2,
      title: 'Engine Performance Optimization',
      category: 'Engine Systems',
      description: 'Optimized IC engine performance through advanced diagnostics and tuning, improving fuel efficiency by 12% and reducing emissions. The project involved comprehensive testing and analysis of engine parameters.',
      image: '⚙️',
      imageUrl: '/2.jpg',
      technologies: ['IC Engines', 'Diagnostics', 'Performance Tuning', 'ANSYS']
    },
    {
      id: 3,
      title: 'Automotive Suspension System Design',
      category: 'Vehicle Dynamics',
      description: 'Designed and analyzed an advanced suspension system for improved vehicle handling and ride comfort using CAD and FEA techniques. The design was optimized for both performance and durability.',
      image: '🔩',
      technologies: ['CAD', 'FEA', 'Vehicle Dynamics', 'Materials Engineering']
    },
    {
      id: 4,
      title: 'Electric Vehicle Battery Management',
      category: 'Electric Vehicles',
      description: 'Developed a battery management system for electric vehicles, optimizing charging cycles and extending battery life. The system includes thermal management and state-of-charge estimation.',
      image: '🔋',
      technologies: ['Battery Systems', 'MATLAB', 'Energy Storage', 'Control Systems']
    },
    {
      id: 5,
      title: 'Brake System Diagnostics & Maintenance',
      category: 'Vehicle Safety',
      description: 'Created a comprehensive diagnostic and maintenance protocol for automotive brake systems, improving safety and reliability. The protocol includes both preventive and corrective maintenance procedures.',
      image: '🛞',
      technologies: ['Diagnostics', 'Safety Systems', 'Maintenance', 'Workshop Procedures']
    },
    {
      id: 6,
      title: 'Hybrid Vehicle Energy Management',
      category: 'Sustainable Mobility',
      description: 'Designed an energy management system for hybrid vehicles, optimizing power distribution between electric and combustion systems for maximum efficiency.',
      image: '🌱',
      technologies: ['Control Systems', 'Energy Management', 'Hybrid Systems', 'Optimization']
    }
  ]

  const categories = ['All', ...new Set(projects.map(p => p.category))]

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter)

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
        <h1 className="text-4xl font-bold text-white mb-4 text-center animate-fade-in-up">My Projects</h1>
        <p className="text-center text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-100">
          Here are some of the innovative projects I've worked on in the automotive engineering field
        </p>

        {/* Download CV Button */}
        <div className="flex justify-center mb-8 animate-fade-in-up delay-200">
          <button
            onClick={handleDownloadCV}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg 
                     hover:from-purple-600 hover:to-blue-600 hover:scale-105 hover:shadow-lg
                     transition-all duration-300 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download CV
          </button>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 animate-fade-in-up delay-300">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-1.5 rounded-full transition-all duration-300 text-sm font-medium ${
                filter === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/90 text-gray-700 hover:bg-white shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="card-glass rounded-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-[1.02] cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              {project.imageUrl ? (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      const parent = target.parentElement
                      if (parent) {
                        const fallback = document.createElement('div')
                        fallback.className = 'h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-6xl'
                        fallback.textContent = project.image
                        parent.appendChild(fallback)
                      }
                    }}
                  />
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-5xl">
                  {project.image}
                </div>
              )}
              
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                    {project.category}
                  </span>
                  {project.imageUrl && (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                      📷
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded-full">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-gray-400">+{project.technologies.length - 3} more</span>
                  )}
                </div>
                {/* Click to view details indicator */}
                <div className="mt-3 text-xs text-blue-600 flex items-center gap-1">
                  <span>Click for details</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Me Section */}
        <div className="mt-16 text-center animate-fade-in-up delay-500">
          <div className="card-glass p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-3 gradient-text">Have a Project in Mind?</h2>
            <p className="text-gray-600 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl 
                       hover:from-purple-600 hover:to-blue-600 hover:scale-105 hover:shadow-2xl
                       transition-all duration-300 ease-spring shadow-lg shadow-blue-500/25"
            >
              <span className="text-xl">📧</span>
              Contact Me
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 relative animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors text-2xl"
            >
              ✕
            </button>

            {/* Modal Image */}
            {selectedProject.imageUrl ? (
              <div className="h-64 overflow-hidden rounded-xl mb-4">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>
            ) : (
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-7xl rounded-xl mb-4">
                {selectedProject.image}
              </div>
            )}

            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                {selectedProject.category}
              </span>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-3">{selectedProject.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">{selectedProject.description}</p>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact CTA in Modal */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Link 
                to="/contact"
                onClick={() => setSelectedProject(null)}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                <span>Interested in this project? Let's discuss</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <button
              onClick={() => setSelectedProject(null)}
              className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg 
                       hover:from-purple-600 hover:to-blue-600 transition-all duration-300 font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects