import React from 'react';
import { Menu, Github, Linkedin, Mail } from 'lucide-react';
import { NavLink } from './NavLink';
import { personalInfo } from '../../data/personal';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-gray-900">
          {personalInfo.name}
        </a>
        
        <nav className="hidden md:flex items-center gap-6">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3">
            <a href={personalInfo.social.github} className="text-gray-600 hover:text-gray-900 transition-colors">
              <Github size={20} />
            </a>
            <a href={personalInfo.social.linkedin} className="text-gray-600 hover:text-gray-900 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${personalInfo.social.email}`} className="text-gray-600 hover:text-gray-900 transition-colors">
              <Mail size={20} />
            </a>
          </div>
          <button className="md:hidden text-gray-600">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}