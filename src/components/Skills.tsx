import React from 'react';
import { Brain, Code, Database, Globe } from 'lucide-react';

const skills = [
  {
    category: 'Artificial Intelligence',
    icon: Brain,
    items: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Computer Vision','Image Processing','Video Processing'],
  },
  {
    category: 'Web Development',
    icon: Globe,
    items: ['Html','React.js', 'TypeScript', 'Tailwind', 'CSS', 'Node.js','Express.js'],
  },
  {
    category: 'Programming',
    icon: Code,
    items: ['Python', 'R', 'C++','C','JavaScript'],
  },
  {
    category: 'Tools & Technologies',
    icon: Database,
    items: ['Git', 'Versal', 'AWS', 'TensorFlow','Streamlit','Flask'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Skills & Expertise</h2>
          <p className="mt-4 text-xl text-gray-600">
            A comprehensive overview of my technical capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <skill.icon className="w-6 h-6 text-blue-600" />
                <h3 className="ml-2 text-xl font-semibold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}