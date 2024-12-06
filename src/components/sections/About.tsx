import React from 'react';
import { Code, Palette, Globe } from 'lucide-react';

const skills = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Development",
    description: "Experienced in building modern web applications using React, TypeScript, and Node.js"
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Design",
    description: "Creating beautiful user interfaces with a focus on user experience and accessibility"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Solutions",
    description: "Delivering scalable and maintainable solutions for complex business problems"
  }
];

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-gray-600">
          Hi, I'm Asad, a developer specializing in Artificial Intelligence, Machine Learning, and Software and Web Development. 
          I'm currently pursuing a B.Tech Hons. in Computer Science Engineering with a specialization in AI, and I'm in my third year at Chhattisgarh Swami Vivekanand Technical University. 
          I bring ideas to life through clean code and creative solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}