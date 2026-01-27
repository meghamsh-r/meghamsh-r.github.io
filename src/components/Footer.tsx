import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 mb-4 md:mb-0">
            © 2026 Meghamsh Routhu. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/meghamshr/" 
              className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/100"
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit Meghamsh Routhu's LinkedIn profile"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/meghamsh-r" 
              className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/100"
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit Meghamsh Routhu's GitHub profile"
            >
              <Github size={20} />
            </a>
            <a 
              href="mailto:mrouthumeghamsh@gmail.com" 
              className="text-gray-600 hover:text-red-900 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/100"
              aria-label="Send email to Meghamsh Routhu"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



