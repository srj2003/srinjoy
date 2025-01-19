import React from 'react';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-4xl w-full px-4 flex flex-col items-center justify-center">
        <Terminal className="w-20 h-20 mb-8 text-emerald-400 animate-bounce" />
        <h1 className="text-6xl md:text-7xl font-bold mb-6 font-mono bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
          Srinjoy Saha
        </h1>
        
        <div className="h-16 mb-8">
          <p className="text-xl md:text-2xl text-gray-300 typing-text border-r-4 border-emerald-400 pr-2 animate-typewriter">
            Computer Science Engineering Student
          </p>
        </div>
        
        <p className="text-lg md:text-xl text-gray-400 mb-12 text-center">
          Full-Stack Web Development | JAVA | MySQL
        </p>
        
        <div className="flex justify-center gap-8">
          <a 
            href="https://github.com/srj2003" 
            className="transform hover:scale-110 hover:text-emerald-400 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-8 h-8" />
          </a>
          <a 
            href="https://www.linkedin.com/in/rj40/" 
            className="transform hover:scale-110 hover:text-emerald-400 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a 
            href="mailto:srinjoysaha4004@gmail.com" 
            className="transform hover:scale-110 hover:text-emerald-400 transition-all duration-300"
          >
            <Mail className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
}