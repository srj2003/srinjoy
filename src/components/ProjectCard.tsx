import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

export function ProjectCard({ title, description, image, technologies, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-2">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-gray-700 text-emerald-400 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={githubUrl}
            className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors"
          >
            <Github className="w-5 h-5" />
            Code
          </a>
          <a
            href={liveUrl}
            className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}