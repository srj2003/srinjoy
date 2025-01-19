import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';


export function Projects() {
  const projects = [
     {
      title: 'SlideTube: [SaaS Application]',
      description: 'Created a web-based platform enabling users to share, organize, and access multimedia content efficiently',
      image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['Kinde', ' Next Js', 'Neondb - PostgreSQL', 'React Js', 'Gpt Wrappers'],
      githubUrl: 'https://github.com/srj2003/SlideTube',
      liveUrl: 'https://github.com/srj2003/SlideTube'
    },
    {
      title: 'Find Buddy: [Security Tag]',
      description: 'Developed a Bluetooth communication system for real-time tracking and enhanced security',
      image: 'https://images.unsplash.com/photo-1508345228704-935cc84bf5e2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['Arduino Uno IDE - C++', 'Android Studio - JAVA', 'React', 'Node', 'tailwindcss'],
      githubUrl: 'https://github.com/srj2003/find-buddy-connect',
      liveUrl: 'https://find-buddy.netlify.app/'
    },
   
   
    {
      title: 'Library management System',
      description: 'Collaborative project management tool with real-time updates',
      image: 'https://images.unsplash.com/photo-1517650862521-d580d5348145?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['JAVA', 'MySQL'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold font-bold text-white mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
  

          ))}
        </div>
      </div>
    </section>
  );
}