// src/components/Footer.tsx

import React from 'react'


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white">Abreham T.</h3>
            <p className="text-sm">Automotive Engineer & Problem Solver</p>
          </div>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
           
            <a href="mailto:abreham@email.com" className="hover:text-blue-400 transition-colors">
              Email
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-4 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Abreham T. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer