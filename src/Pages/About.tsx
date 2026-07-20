// src/pages/About.tsx

import React from 'react'

const About: React.FC = () => {
  return (
    <div 
      className="min-h-[80vh] py-16 bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: `url('/05.jpg')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl font-bold text-white mb-8 text-center animate-fade-in-up">
            About Me
          </h1>
          
          <div className="card-glass p-8 animate-fade-in-up delay-200">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Profile Image Circle - Now with image */}
              <div className="relative flex-shrink-0">
                <div className="w-full md:w-48 h-48 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl 
                                bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center
                                animate-scale-pulse">
                  <img 
                    src="/21.jpg" 
                    alt="Abraham Tsegaye"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image fails to load - show initials
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      const parent = target.parentElement
                      if (parent) {
                        const fallback = document.createElement('span')
                        fallback.className = 'text-white text-5xl font-bold'
                        fallback.textContent = 'AT'
                        parent.appendChild(fallback)
                      }
                    }}
                  />
                </div>
                {/* Minimal decorative circles around profile */}
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-400 animate-pulse shadow-lg" />
                <div className="absolute -bottom-1 -left-1 w-3 h-3 rounded-full bg-blue-400 animate-pulse shadow-lg" style={{ animationDelay: '300ms' }} />
                <div className="absolute top-1/2 -left-2 w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-lg" style={{ animationDelay: '600ms' }} />
                <div className="absolute top-1/2 -right-2 w-2 h-2 rounded-full bg-purple-400 animate-pulse shadow-lg" style={{ animationDelay: '900ms' }} />
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-1 gradient-text">Abraham Tsegaye</h2>
                <h3 className="text-xl text-blue-600 mb-4 animate-pulse-slow">Automotive Engineer</h3>
                
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Vehicle Systems</span>
                  <span className="text-xs bg-purple-100 text-purple-800 px-3 py-1 rounded-full">Intelligent Technologies</span>
                  <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full">Diagnostics</span>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-3 animate-fade-in-up delay-300">
                  As an Automotive Engineering graduate, I specialize in vehicle systems and intelligent automotive 
                  technologies, leveraging strong communication and collaboration skills. Through academic projects 
                  and engineering research, particularly the development of an Intelligent Tire Pressure Monitoring 
                  System, I have strengthened my technical expertise in automotive diagnostics and vehicle safety systems.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-4 animate-fade-in-up delay-400">
                  Passionate about innovation, I excel in problem-solving and thrive in dynamic, team-driven environments.
                </p>

                {/* Minimal circle indicators */}
                <div className="flex gap-1.5 mt-2 animate-fade-in-up delay-500">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                  <span className="text-xs text-gray-500 ml-2">Expertise verified</span>
                </div>
              </div>
            </div>

            {/* Skills with minimized circles */}
            <div className="mt-8 animate-fade-in-up delay-600">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Technical Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  'Automotive Diagnostics',
                  'IC Engines Overhauling',
                  'CAD & Engineering Design',
                  'Research & Report Writing',
                  'MATLAB & MS Office',
                  'ANSYS'
                ].map((skill, index) => (
                  <div 
                    key={skill} 
                    className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg text-sm font-medium text-center flex items-center justify-center gap-2 hover-scale cursor-pointer"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${['bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400', 'bg-purple-400', 'bg-pink-400'][index]}`} />
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Non-Technical Skills */}
            <div className="mt-6 animate-fade-in-up delay-700">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {['Communication & Teamwork', 'Problem Solving', 'Research & Creativity'].map((skill, index) => (
                  <span 
                    key={skill}
                    className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover-scale cursor-pointer"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${['bg-purple-400', 'bg-pink-400', 'bg-indigo-400'][index]}`} />
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="mt-6 animate-fade-in-up delay-800">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Languages</h3>
              <div className="flex flex-wrap gap-4">
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  Amharic <span className="text-xs text-green-600">(Native)</span>
                </div>
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  English <span className="text-xs text-blue-600">(Fluent)</span>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mt-8 animate-fade-in-up delay-900">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Education</h3>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover-lift transition-all">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Bachelor of Automotive Engineering</h4>
                    <p className="text-gray-600">Bahir Dar University • GPA: 3.42/4.0</p>
                    <p className="text-sm text-gray-500">Exit Exam: 74%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="mt-8 animate-fade-in-up delay-1000">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Work Experience</h3>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover-lift transition-all mb-3">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse mt-1.5" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Internship at Nyala Motors S.C</h4>
                    <p className="text-sm text-gray-500">2025 (4 Months)</p>
                    <ul className="text-sm text-gray-600 mt-1 list-disc list-inside space-y-0.5">
                      <li>Assisted in vehicle diagnostics and fault identification</li>
                      <li>Worked collaboratively with experienced automotive technicians</li>
                      <li>Supported ongoing transmission, intake, and suspension servicing</li>
                      <li>Applied workshop safety procedures and maintenance standards</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover-lift transition-all">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse mt-1.5" style={{ animationDelay: '500ms' }} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Bahir Dar University - Student Union Member</h4>
                    <p className="text-sm text-gray-500">2023 - 2026</p>
                    <ul className="text-sm text-gray-600 mt-1 list-disc list-inside space-y-0.5">
                      <li>Contributed to student service initiatives and campus activities</li>
                      <li>Strong communication and teamwork skills demonstrated</li>
                      <li>Supported student welfare and promoted a positive university environment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About