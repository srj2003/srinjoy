import React from 'react';
import { Github, Linkedin, Mail, Leetcode } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">&copy; 2024 Srinjoy Saha. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://github.com/srj2003" className="hover:text-emerald-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/rj40/" className="hover:text-emerald-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="srinjoysaha4004@gmail.com" className="hover:text-emerald-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
}