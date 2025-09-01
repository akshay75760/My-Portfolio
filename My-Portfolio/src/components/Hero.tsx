import React from 'react';
import { MapPin, Phone, Mail, Github, Linkedin, Download, Code } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900"></div>
      
      {/* Floating geometric shapes for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-500/10 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-purple-500/10 rotate-45 animate-spin"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Profile section with enhanced animations */}
          <div className="mb-12 opacity-0 animate-fade-in">
            <div className="relative inline-block mb-8">
              <div className="w-40 h-40 mx-auto bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl animate-bounce-gentle relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                <span className="relative z-10">AK</span>
              </div>
              {/* Glowing ring effect */}
              <div className="absolute inset-0 w-40 h-40 mx-auto bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6 animate-fade-in leading-tight">
              Akshay Kumar
            </h1>
            
            <div className="relative">
              <p className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-6 animate-slide-up">
                Full Stack Developer & Software Engineer
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-8 rounded-full"></div>
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in">
              Passionate about creating innovative solutions with <span className="font-semibold text-blue-600 dark:text-blue-400">Java</span>, 
              <span className="font-semibold text-green-600 dark:text-green-400"> Spring Boot</span>, 
              <span className="font-semibold text-cyan-600 dark:text-cyan-400"> React</span>, and modern web technologies. 
              Currently pursuing <span className="font-semibold">PG-DAC from IACSD, Pune</span>.
            </p>
          </div>

          {/* Enhanced contact cards with glassmorphism effect */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl mb-4 mx-auto">
                <MapPin size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600 dark:text-gray-300 justify-center">
                  <MapPin size={18} className="mr-3 text-blue-500 flex-shrink-0" />
                  <span className="text-sm">Bokaro, Jharkhand</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300 justify-center">
                  <Phone size={18} className="mr-3 text-green-500 flex-shrink-0" />
                  <a href="tel:+917992445298" className="text-sm hover:text-blue-500 transition-colors font-medium">
                    +91-7992445298
                  </a>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300 justify-center">
                  <Mail size={18} className="mr-3 text-red-500 flex-shrink-0" />
                  <a href="mailto:kakshay75760@gmail.com" className="text-sm hover:text-blue-500 transition-colors font-medium">
                    kakshay75760@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-4 mx-auto">
                <Github size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Connect With Me</h3>
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://www.linkedin.com/in/akshay-kumar-7b6058252/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 hover:rotate-3 shadow-lg"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://github.com/akshay75760" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-xl hover:from-gray-900 hover:to-black transition-all duration-300 transform hover:scale-110 hover:-rotate-3 shadow-lg"
                  aria-label="GitHub Profile"
                >
                  <Github size={24} className="group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://leetcode.com/u/kakshay70007/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-14 h-14 bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-xl hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-110 hover:rotate-3 shadow-lg"
                  aria-label="LeetCode Profile"
                >
                  <Code size={24} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="flex items-center justify-center">
                View My Work
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </button>
            <a 
              href="/Akshay_Resume.pdf" 
              download="Akshay_Kumar_Resume.pdf"
              className="group px-10 py-4 bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-600 rounded-2xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm inline-block text-center no-underline"
            >
              <span className="flex items-center justify-center">
                <Download size={20} className="mr-2 group-hover:animate-bounce" />
                Download CV
              </span>
            </a>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;