import React from 'react';
import { Code2, Database, Globe, Server } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Full-Stack',
      icon: <Globe className="w-8 h-8 text-emerald-400" />,
      skills: ['Html', 'CSS', 'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node']
    },
    {
      title: 'Languages',
      icon: <Code2 className="w-8 h-8 text-emerald-400" />,
      skills: ['JAVA', 'Python', 'C', 'Javascript']
    },
    
    {
      title: 'Database',
      icon: <Database className="w-8 h-8 text-emerald-400" />,
      skills: ['MySQL', 'Ms Excel']
    },
    {
      title: 'Oher Tools',
      icon: <Server className="w-8 h-8 text-emerald-400" />,
      skills: ['AWS', 'Git', 'Linux']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-gray-900 p-6 rounded-lg">
              <div className="flex flex-col items-center text-center">
                {category.icon}
                <h3 className="text-xl font-semibold text-white mt-4 mb-4">{category.title}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-gray-800 text-emerald-400 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}