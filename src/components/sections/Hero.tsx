import React from 'react';
import { ArrowRight, GraduationCap, Code2, Brain } from 'lucide-react';
import { personalInfo } from '../../data/personal';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-8 h-8 text-gray-600" />
            <span className="text-lg text-gray-600">{personalInfo.year} Student</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Hi, I'm {personalInfo.name}
          </h1>
          
          <div className="flex flex-col gap-3 mb-8">
            <div className="flex items-center gap-2 text-xl text-gray-700">
              <Code2 className="w-6 h-6" />
              <span>{personalInfo.title}</span>
            </div>
            <div className="flex items-center gap-2 text-xl text-gray-700">
              <Brain className="w-6 h-6" />
              <span>Specialized in {personalInfo.specialization}</span>
            </div>
            <p className="text-lg text-gray-600 mt-2">
              {personalInfo.university}
            </p>
          </div>

          <p className="text-xl text-gray-600 mb-8">
            {personalInfo.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {personalInfo.skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              View Projects
              <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-gray-900 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}