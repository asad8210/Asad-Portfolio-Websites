import React, { useState } from 'react';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import { projectCategories } from '../../data/projects';
import type { ProjectCategory, SubProject } from '../../types/project';

function ProjectCard({ project }: { project: SubProject }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.links.demo && (
            <a
              href={project.links.demo}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <Github size={18} />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function CategoryCard({ category }: { category: ProjectCategory }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="space-y-6">
      <div 
        className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
            {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </div>
          <p className="text-gray-600">{category.description}</p>
        </div>
      </div>
      
      {isExpanded && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pl-6">
          {category.subProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Software Projects</h2>
        <div className="space-y-12">
          {projectCategories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}