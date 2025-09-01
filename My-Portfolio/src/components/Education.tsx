import React from 'react';
import { Calendar, Award } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      institution: "IACSD, Pune",
      degree: "PG-DAC (Post Graduate Diploma in Advanced Computing)",
      duration: "Feb 2025 – Aug 2025",
      status: "Pursuing",
      description: "Advanced computing program focusing on software development, data structures, algorithms, and modern technologies."
    },
    {
      institution: "Shri Shankaracharya Technical Campus, Bhilai",
      degree: "Bachelor of Technology in Computer Science Engineering",
      duration: "2019 - 2023",
      grade: "75.07%",
      description: "Comprehensive study of computer science fundamentals, programming, software engineering, and system design."
    },
    {
      institution: "BRL DAV Public School, Bhandaridah",
      degree: "Higher Secondary School Certificate (Science)",
      duration: "2016 - 2017",
      description: "Science stream with focus on Mathematics, Physics, and Chemistry."
    },
    {
      institution: "BRL DAV Public School, Bhandaridah",
      degree: "Secondary School Certificate",
      duration: "2014 - 2015",
      description: "Secondary education with strong foundation in core subjects."
    }
  ];

  return (
    <section id="education" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/10 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-6"></div>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic journey and qualifications in computer science and technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {educationData.map((item, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline line */}
              {index !== educationData.length - 1 && (
                <div className="absolute left-4 top-12 w-0.5 h-full bg-blue-200 dark:bg-blue-800"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-2 top-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 shadow-md"></div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow ml-4">
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {item.institution}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {item.degree}
                    </p>
                  </div>
                  {item.status === "Pursuing" && (
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
                      Pursuing
                    </span>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{item.duration}</span>
                  </div>
                  {item.grade && (
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Award size={16} className="mr-2" />
                      <span className="text-sm">{item.grade}</span>
                    </div>
                  )}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;