import React from 'react';
import { Code, Database, Globe, Server, Smartphone, Shield } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: "Programming Languages",
      skills: ["Java", "C++", "JavaScript", "Python"]
    },
    {
      icon: <Server size={24} />,
      title: "Backend Development",
      skills: ["Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate", "RESTful APIs", "Microservices"]
    },
    {
      icon: <Globe size={24} />,
      title: "Frontend Development",
      skills: ["React.js", "HTML5", "CSS3", "TailwindCSS", "Vite", "Context API", "Axios"]
    },
    {
      icon: <Database size={24} />,
      title: "Database & Tools",
      skills: ["MySQL", "SQLite", "Database Design", "ORM"]
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile Development",
      skills: ["Android Development", "Java", "XML", "SQLite"]
    },
    {
      icon: <Shield size={24} />,
      title: "Core Concepts",
      skills: ["OOPs", "Data Structures", "Algorithms", "Operating Systems", "System Design"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-indigo-900/10 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-indigo-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Technical Skills
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-6"></div>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I work with to bring innovative ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-200 dark:hover:border-blue-700"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="inline-block bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl text-sm font-medium hover:from-blue-100 hover:to-indigo-100 dark:hover:from-blue-900 dark:hover:to-indigo-900 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;