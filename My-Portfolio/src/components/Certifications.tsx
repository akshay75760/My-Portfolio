import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "Python Certification",
      issuer: "QuadKubes",
      description: "Comprehensive Python programming certification covering fundamentals, data structures, and application development.",
      icon: "🐍"
    },
    {
      title: "Android App Development",
      issuer: "Internshala",
      description: "Complete Android development course covering Java, XML, SQLite, and mobile app design principles.",
      icon: "📱"
    },
    {
      title: "Java Certification",
      issuer: "SkillUp by Simplilearn",
      description: "Advanced Java programming certification focusing on OOP concepts, frameworks, and enterprise development.",
      icon: "☕"
    },
    {
      title: "Basic JavaScript",
      issuer: "LearnTube",
      description: "Foundational JavaScript course covering syntax, DOM manipulation, and modern web development practices.",
      icon: "🌐"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications and continuous learning milestones
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start mb-4">
                <div className="text-4xl mr-4 flex-shrink-0">
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {cert.title}
                    </h3>
                    <Award className="text-yellow-500" size={20} />
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                    {cert.issuer}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                {cert.description}
              </p>

              <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">Completed</span>
                </div>
                <button className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm font-medium">
                  View Certificate
                  <ExternalLink size={14} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-lg">
            <Award size={20} className="mr-2" />
            <span className="font-medium">Continuously learning and growing in technology</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;