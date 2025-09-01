import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Akshay Kumar</h3>
            <p className="text-gray-400">Full Stack Developer & Software Engineer</p>
          </div>

          <div className="flex items-center space-x-6">
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:kakshay75760@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email Contact"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="flex items-center mb-2 md:mb-0">
            <span>© {currentYear} Akshay Kumar. Made with</span>
            <Heart size={16} className="mx-1 text-red-500" />
            <span>and lots of ☕</span>
          </div>
          <div>
            <span>Built with React, TypeScript & TailwindCSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;