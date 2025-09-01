import React from 'react';
import { ExternalLink, Github, Smartphone, Shield, Users, Database } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Smart Contact Manager",
      description: "Built a microservices-based contact management system with secure authentication (Signup, Google, GitHub OAuth2 & JWT). Features contact CRUD, search, pagination, Excel export, mailing, dark/light theme toggle, and an Admin Dashboard for user/system monitoring.",
      techStack: ["Java 21", "Spring Boot 3.x", "Spring Security", "MySQL", "React.js", "Vite", "TailwindCSS", "OAuth2", "JWT"],
      githubUrl: "https://github.com/akshay75760/SmartConactManager",
      icon: <Users size={24} />,
      features: ["OAuth2 Authentication", "Admin Dashboard", "Excel Export", "Dark/Light Theme", "Microservices Architecture"]
    },
    {
      title: "Healthify Android App",
      description: "Healthcare app using Java, XML, and SQLite with features for medicine purchase, appointment booking, lab test scheduling, and comprehensive health management functionality.",
      techStack: ["Java", "Android", "XML", "SQLite", "Android SDK"],
      githubUrl: "https://github.com/akshay75760/Healthify-Android-App",
      icon: <Smartphone size={24} />,
      features: ["Medicine Purchase", "Appointment Booking", "Lab Test Scheduling", "SQLite Database", "Android UI/UX"]
    },
    {
      title: "Realtime Project",
      description: "A real-time application showcasing modern development practices and technologies. This project demonstrates proficiency in building responsive and interactive web applications.",
      techStack: ["React", "Node.js", "WebSocket", "Real-time Features"],
      githubUrl: "https://github.com/akshay75760/Realtime",
      icon: <Database size={24} />,
      features: ["Real-time Updates", "Modern Architecture", "Scalable Design", "Interactive Interface"]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 dark:from-gray-900 dark:via-blue-900/10 dark:to-indigo-900/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Featured Projects
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-6"></div>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my technical projects and development expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-200 dark:hover:border-blue-700"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors text-sm"
                  >
                    <Github size={16} className="mr-2" />
                    View Code
                  </a>
                  <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;